import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import './Globe3D.css';

// --- Trade route data ---
const INDIA = { lat: 20.5937, lng: 78.9629 };

const DESTINATIONS = [
  { name: 'UAE', lat: 25.2, lng: 55.3 },
  { name: 'Saudi Arabia', lat: 23.9, lng: 45.1 },
  { name: 'UK', lat: 51.5, lng: -0.1 },
  { name: 'Germany', lat: 51.2, lng: 10.4 },
  { name: 'USA', lat: 40.7, lng: -74.0 },
  { name: 'Malaysia', lat: 4.2, lng: 101.9 },
  { name: 'Singapore', lat: 1.3, lng: 103.8 },
  { name: 'Sri Lanka', lat: 7.9, lng: 80.8 },
  { name: 'Japan', lat: 36.2, lng: 138.3 },
  { name: 'Australia', lat: -25.3, lng: 133.8 },
  { name: 'South Africa', lat: -30.6, lng: 22.9 },
  { name: 'Canada', lat: 56.1, lng: -106.3 },
];

// Convert lat/lng to 3D sphere coords
function latLngToVec3(lat, lng, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

// Create a curved arc between two points on the globe
function createArc(start, end, globeRadius) {
  const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
  const dist = start.distanceTo(end);
  mid.normalize().multiplyScalar(globeRadius + dist * 0.4);

  const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
  const points = curve.getPoints(80);
  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  const material = new THREE.LineBasicMaterial({
    color: 0xf0c060,
    transparent: true,
    opacity: 0.85,
    linewidth: 1.5,
  });

  const line = new THREE.Line(geometry, material);
  line.userData = { phase: Math.random() * Math.PI * 2 };
  return line;
}

// Create a glowing dot marker with rings
function createMarker(position, isOrigin = false) {
  const group = new THREE.Group();

  // Core dot
  const coreSize = isOrigin ? 0.04 : 0.025;
  const coreGeo = new THREE.SphereGeometry(coreSize, 16, 16);
  const coreMat = new THREE.MeshBasicMaterial({
    color: isOrigin ? 0xff6b3d : 0xf0c060,
  });
  const core = new THREE.Mesh(coreGeo, coreMat);
  core.position.copy(position);
  group.add(core);

  // Glow sphere (larger, transparent)
  const glowSize = isOrigin ? 0.08 : 0.05;
  const glowGeo = new THREE.SphereGeometry(glowSize, 16, 16);
  const glowMat = new THREE.MeshBasicMaterial({
    color: isOrigin ? 0xff6b3d : 0xf0c060,
    transparent: true,
    opacity: 0.25,
  });
  const glow = new THREE.Mesh(glowGeo, glowMat);
  glow.position.copy(position);
  group.add(glow);

  // Pulse ring
  const ringGeo = new THREE.RingGeometry(
    isOrigin ? 0.05 : 0.032,
    isOrigin ? 0.085 : 0.055,
    24
  );
  const ringMat = new THREE.MeshBasicMaterial({
    color: isOrigin ? 0xff6b3d : 0xf0c060,
    transparent: true,
    opacity: 0.35,
    side: THREE.DoubleSide,
  });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.position.copy(position);
  ring.lookAt(new THREE.Vector3(0, 0, 0));
  group.add(ring);

  group.userData = { ring, glow, basePulse: Math.random() * Math.PI * 2 };
  return group;
}

// Atmosphere vertex shader
const atmosphereVertexShader = `
  varying vec3 vNormal;
  varying vec3 vPosition;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const atmosphereFragmentShader = `
  varying vec3 vNormal;
  void main() {
    float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
    vec3 color = mix(vec3(0.25, 0.5, 0.35), vec3(0.15, 0.35, 0.25), intensity);
    gl_FragColor = vec4(color, 1.0) * intensity * 1.5;
  }
`;

export default function Globe3D() {
  const containerRef = useRef(null);
  const frameRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // --- Scene ---
    const scene = new THREE.Scene();

    // --- Camera ---
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 3.6;

    // --- Renderer ---
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // --- Globe group ---
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const globeRadius = 1.25;

    // --- Globe surface ---
    const globeGeo = new THREE.SphereGeometry(globeRadius, 64, 64);
    const globeMat = new THREE.MeshPhongMaterial({
      color: 0x1a3320,
      emissive: 0x0a1a0f,
      emissiveIntensity: 0.3,
      specular: 0x2a4a30,
      shininess: 20,
      transparent: true,
      opacity: 0.95,
    });
    const globe = new THREE.Mesh(globeGeo, globeMat);
    globeGroup.add(globe);

    // --- Wireframe overlay (subtle grid) ---
    const wireGeo = new THREE.SphereGeometry(globeRadius + 0.003, 36, 36);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x5a8139,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    globeGroup.add(new THREE.Mesh(wireGeo, wireMat));

    // --- Latitude/longitude grid lines ---
    const gridMat = new THREE.LineBasicMaterial({
      color: 0x4a7035,
      transparent: true,
      opacity: 0.09,
    });

    for (let lat = -60; lat <= 60; lat += 30) {
      const pts = [];
      for (let lng = 0; lng <= 360; lng += 2) {
        pts.push(latLngToVec3(lat, lng, globeRadius + 0.006));
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      globeGroup.add(new THREE.Line(geo, gridMat));
    }

    for (let lng = 0; lng < 360; lng += 30) {
      const pts = [];
      for (let lat = -90; lat <= 90; lat += 2) {
        pts.push(latLngToVec3(lat, lng, globeRadius + 0.006));
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      globeGroup.add(new THREE.Line(geo, gridMat));
    }

    // --- Atmosphere glow (outer halo) ---
    const atmosphereGeo = new THREE.SphereGeometry(globeRadius * 1.22, 64, 64);
    const atmosphereMat = new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
    });
    scene.add(new THREE.Mesh(atmosphereGeo, atmosphereMat));

    // --- Inner rim glow (edge highlight) ---
    const rimGeo = new THREE.SphereGeometry(globeRadius * 1.01, 64, 64);
    const rimMat = new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.55 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.0);
          gl_FragColor = vec4(0.35, 0.65, 0.40, 1.0) * intensity;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.FrontSide,
      transparent: true,
    });
    globeGroup.add(new THREE.Mesh(rimGeo, rimMat));

    // --- India origin marker ---
    const indiaPos = latLngToVec3(INDIA.lat, INDIA.lng, globeRadius + 0.015);
    const indiaMarker = createMarker(indiaPos, true);
    globeGroup.add(indiaMarker);

    // --- Destination markers + trade arcs ---
    const arcs = [];
    const markers = [];

    DESTINATIONS.forEach((dest) => {
      const destPos = latLngToVec3(dest.lat, dest.lng, globeRadius + 0.015);

      // Marker
      const marker = createMarker(destPos, false);
      globeGroup.add(marker);
      markers.push(marker);

      // Arc
      const arc = createArc(indiaPos, destPos, globeRadius);
      globeGroup.add(arc);
      arcs.push(arc);
    });

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0x667766, 0.7);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xddeedd, 0.9);
    mainLight.position.set(5, 3, 5);
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0x88aa88, 0.3);
    fillLight.position.set(-3, -2, 3);
    scene.add(fillLight);

    // Warm origin glow
    const originGlow = new THREE.PointLight(0xff6b3d, 0.6, 6);
    originGlow.position.copy(indiaPos).multiplyScalar(1.8);
    scene.add(originGlow);

    // --- Initial rotation to show India ---
    globeGroup.rotation.y = -Math.PI * 0.3;
    globeGroup.rotation.x = 0.2;

    // --- Animation loop ---
    let elapsed = 0;
    let lastTime = performance.now();

    function animate() {
      frameRef.current = requestAnimationFrame(animate);

      const now = performance.now();
      const delta = (now - lastTime) / 1000;
      lastTime = now;
      elapsed += delta;

      // Auto-rotation
      const rotSpeed = isHoveredRef.current ? 0.04 : 0.12;
      globeGroup.rotation.y += rotSpeed * delta;

      // Mouse parallax tilt
      const targetTiltX = mouseRef.current.y * 0.12 + 0.2;
      const targetTiltZ = mouseRef.current.x * -0.06;
      globeGroup.rotation.x += (targetTiltX - globeGroup.rotation.x) * 0.03;
      globeGroup.rotation.z += (targetTiltZ - globeGroup.rotation.z) * 0.03;

      // Animate arc opacity (pulsing)
      arcs.forEach((arc) => {
        const pulse = Math.sin(elapsed * 1.2 + arc.userData.phase) * 0.5 + 0.5;
        arc.material.opacity = 0.4 + pulse * 0.5;
      });

      // Pulse markers
      markers.forEach((m) => {
        const { ring, glow, basePulse } = m.userData;
        const pulse = Math.sin(elapsed * 2.2 + basePulse) * 0.5 + 0.5;
        ring.material.opacity = 0.15 + pulse * 0.35;
        ring.scale.setScalar(0.85 + pulse * 0.4);
        glow.material.opacity = 0.15 + pulse * 0.2;
      });

      // Pulse India marker
      const iPulse = Math.sin(elapsed * 2.5) * 0.5 + 0.5;
      indiaMarker.userData.ring.material.opacity = 0.2 + iPulse * 0.45;
      indiaMarker.userData.ring.scale.setScalar(0.8 + iPulse * 0.5);
      indiaMarker.userData.glow.material.opacity = 0.2 + iPulse * 0.3;

      // Origin glow intensity
      originGlow.intensity = 0.4 + iPulse * 0.3;

      renderer.render(scene, camera);
    }
    animate();

    // --- Resize handler ---
    function onResize() {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    window.addEventListener('resize', onResize);

    // --- Mouse handlers ---
    function onMouseMove(e) {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    }

    function onMouseEnter() { isHoveredRef.current = true; }
    function onMouseLeave() {
      isHoveredRef.current = false;
      mouseRef.current.x = 0;
      mouseRef.current.y = 0;
    }

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseenter', onMouseEnter);
    container.addEventListener('mouseleave', onMouseLeave);

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('resize', onResize);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseenter', onMouseEnter);
      container.removeEventListener('mouseleave', onMouseLeave);

      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
    };
  }, []);

  return <div ref={containerRef} className="globe3d" />;
}
