import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faSun,
  faShieldHalved,
  faStore
} from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import about1 from '../assets/about1.png';
import copraDryingJpg from '../assets/copra_drying.jpg';
import about3 from '../assets/about3.png';
import oilPng from '../assets/oil.png';
import lanlogoPng from '../assets/lanlogo.png';

import './TimelineSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function TimelineSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const arrowsRef = useRef([]);

  const steps = [
    {
      id: 1,
      year: '2017',
      stepNum: '1',
      title: 'Research & Soil Foundation',
      icon: faSearch,
      desc: 'We explored Periyapatna virgin soil profiles, laid 25 acres of drip systems, and partnered with traditional growers for chemical-free farming.',
      image: about1,
      imageAlt: 'Periyapatna Farm Foundation & Soil Preparation',
      isGreenCard: true,
      align: 'left',
    },
    {
      id: 2,
      year: '2020',
      stepNum: '2',
      title: 'Copra Processing & Oils',
      icon: faSun,
      desc: 'Commissioned clean sunlight drying yards for coconut copra and set up traditional cold wood-press expellers for pure virgin coconut oil.',
      image: copraDryingJpg,
      imageAlt: 'Natural Sunlight Copra Drying Yards',
      isGreenCard: false,
      align: 'right',
    },
    {
      id: 3,
      year: '2023',
      stepNum: '3',
      title: 'APEDA & Global Logistics',
      icon: faShieldHalved,
      desc: 'Attained APEDA & FSSAI commercial certifications and deployed 48-hour cold-chain reefer routes linking farm gate directly to Cochin port.',
      image: about3,
      imageAlt: 'APEDA Container Dispatch & Port Logistics',
      isGreenCard: false,
      align: 'left',
    },
    {
      id: 4,
      year: '2026',
      stepNum: '4',
      title: 'LanSpice Consumer Brand',
      icon: faStore,
      desc: 'Launched our flagship consumer brand LanSpice, delivering single-origin Tellicherry cardamom, black pepper, and cold-pressed edible oils via LanSpice.com.',
      image: oilPng,
      hasLogo: true,
      imageAlt: 'LanSpice Consumer Spices & Oils Brand',
      isGreenCard: true,
      align: 'right',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header reveal
      gsap.from('.timeline-exact-header > *', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
        opacity: 0,
        y: 20,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power2.out',
      });

      // 2. Animate cards and connecting dashed arrows
      cardsRef.current.forEach((cardEl, idx) => {
        if (!cardEl) return;

        gsap.fromTo(
          cardEl,
          {
            opacity: 0,
            y: 30,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardEl,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Arrow draw animation
        const arrowEl = arrowsRef.current[idx];
        if (arrowEl) {
          const length = arrowEl.getTotalLength ? arrowEl.getTotalLength() : 450;
          gsap.set(arrowEl, {
            strokeDasharray: '5 5',
            strokeDashoffset: length,
            opacity: 0.2,
          });

          gsap.to(arrowEl, {
            strokeDashoffset: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: arrowEl,
              start: 'top 85%',
              end: 'bottom 65%',
              scrub: 0.8,
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="timeline-exact-section">
      <div className="container timeline-exact-container">
        {/* Header matching exact reference */}
        <div className="timeline-exact-header">
          <div className="timeline-exact-header__left">
            <div className="timeline-exact-badge">
              <span>Project Details</span>
            </div>
            <h2 className="timeline-exact-title">
              Building an Enduring Farm & Export Experience
            </h2>
            <p className="timeline-exact-subtitle">
              Beyond just conventional commodity farming, we cultivated an integrated agricultural model that inspires quality at every step—from regenerative plantation soils to international reefer logistics and retail consumer brand LanSpice.
            </p>
          </div>

          <div className="timeline-exact-header__right">
            <div className="timeline-exact-date-pill">
              <span className="timeline-exact-date-pill__start">2017</span>
              <span className="timeline-exact-date-pill__end">2026</span>
            </div>
          </div>
        </div>

        {/* 4-Step Zig-Zag Flow with inside images */}
        <div className="timeline-exact-canvas">
          {/* STEP 1: Research & Soil Foundation (Left) */}
          <div className="timeline-exact-row timeline-exact-row--left">
            <div
              ref={(el) => (cardsRef.current[0] = el)}
              className="timeline-exact-card timeline-exact-card--sage"
            >
              <div className="timeline-exact-capsule">
                <span>{steps[0].year}</span>
              </div>
              <div className="timeline-exact-card-body">
                <div className="timeline-exact-card-title-row">
                  <div className="timeline-exact-icon-box">
                    <FontAwesomeIcon icon={steps[0].icon} />
                  </div>
                  <h3 className="timeline-exact-card-title">
                    {steps[0].stepNum} {steps[0].title}
                  </h3>
                </div>
                <p className="timeline-exact-card-desc">{steps[0].desc}</p>
              </div>
              <div className="timeline-exact-card-img-wrap">
                <img
                  src={steps[0].image}
                  alt={steps[0].imageAlt}
                  className="timeline-exact-card-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* CONNECTOR 1: Left to Right (Straight horizontal, 90° curve, arrow down) */}
          <div className="timeline-exact-connector timeline-exact-connector--right">
            <svg viewBox="0 0 560 75" fill="none" className="timeline-exact-svg" preserveAspectRatio="none">
              <defs>
                <marker
                  id="arrow-exact-1"
                  viewBox="0 0 10 10"
                  refX="5"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto"
                >
                  <path d="M 2 2 L 7 5 L 2 8 z" fill="#4E6746" />
                </marker>
              </defs>
              <path
                ref={(el) => (arrowsRef.current[0] = el)}
                d="M 10 16 H 500 Q 530 16 530 44 V 66"
                stroke="#8A9D84"
                strokeWidth="1.75"
                markerEnd="url(#arrow-exact-1)"
              />
            </svg>
          </div>

          {/* STEP 2: Copra Processing & Oils (Right) */}
          <div className="timeline-exact-row timeline-exact-row--right">
            <div
              ref={(el) => (cardsRef.current[1] = el)}
              className="timeline-exact-card timeline-exact-card--white"
            >
              <div className="timeline-exact-capsule">
                <span>{steps[1].year}</span>
              </div>
              <div className="timeline-exact-card-body">
                <div className="timeline-exact-card-title-row">
                  <div className="timeline-exact-icon-box">
                    <FontAwesomeIcon icon={steps[1].icon} />
                  </div>
                  <h3 className="timeline-exact-card-title">
                    {steps[1].stepNum} {steps[1].title}
                  </h3>
                </div>
                <p className="timeline-exact-card-desc">{steps[1].desc}</p>
              </div>
              <div className="timeline-exact-card-img-wrap">
                <img
                  src={steps[1].image}
                  alt={steps[1].imageAlt}
                  className="timeline-exact-card-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* CONNECTOR 2: Right to Left (Straight horizontal, 90° curve, arrow down) */}
          <div className="timeline-exact-connector timeline-exact-connector--left">
            <svg viewBox="0 0 560 75" fill="none" className="timeline-exact-svg" preserveAspectRatio="none">
              <defs>
                <marker
                  id="arrow-exact-2"
                  viewBox="0 0 10 10"
                  refX="5"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto"
                >
                  <path d="M 2 2 L 7 5 L 2 8 z" fill="#4E6746" />
                </marker>
              </defs>
              <path
                ref={(el) => (arrowsRef.current[1] = el)}
                d="M 550 16 H 60 Q 30 16 30 44 V 66"
                stroke="#8A9D84"
                strokeWidth="1.75"
                markerEnd="url(#arrow-exact-2)"
              />
            </svg>
          </div>

          {/* STEP 3: APEDA & Global Logistics (Left) */}
          <div className="timeline-exact-row timeline-exact-row--left">
            <div
              ref={(el) => (cardsRef.current[2] = el)}
              className="timeline-exact-card timeline-exact-card--white"
            >
              <div className="timeline-exact-capsule">
                <span>{steps[2].year}</span>
              </div>
              <div className="timeline-exact-card-body">
                <div className="timeline-exact-card-title-row">
                  <div className="timeline-exact-icon-box">
                    <FontAwesomeIcon icon={steps[2].icon} />
                  </div>
                  <h3 className="timeline-exact-card-title">
                    {steps[2].stepNum} {steps[2].title}
                  </h3>
                </div>
                <p className="timeline-exact-card-desc">{steps[2].desc}</p>
              </div>
              <div className="timeline-exact-card-img-wrap">
                <img
                  src={steps[2].image}
                  alt={steps[2].imageAlt}
                  className="timeline-exact-card-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* CONNECTOR 3: Left to Right (Straight horizontal, 90° curve, arrow down) */}
          <div className="timeline-exact-connector timeline-exact-connector--right">
            <svg viewBox="0 0 560 75" fill="none" className="timeline-exact-svg" preserveAspectRatio="none">
              <defs>
                <marker
                  id="arrow-exact-3"
                  viewBox="0 0 10 10"
                  refX="5"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto"
                >
                  <path d="M 2 2 L 7 5 L 2 8 z" fill="#4E6746" />
                </marker>
              </defs>
              <path
                ref={(el) => (arrowsRef.current[2] = el)}
                d="M 10 16 H 500 Q 530 16 530 44 V 66"
                stroke="#8A9D84"
                strokeWidth="1.75"
                markerEnd="url(#arrow-exact-3)"
              />
            </svg>
          </div>

          {/* STEP 4: 2026 LanSpice Consumer Brand (Right) */}
          <div className="timeline-exact-row timeline-exact-row--right">
            <div
              ref={(el) => (cardsRef.current[3] = el)}
              className="timeline-exact-card timeline-exact-card--sage"
            >
              <div className="timeline-exact-capsule timeline-exact-capsule--accent">
                <span>{steps[3].year}</span>
              </div>
              <div className="timeline-exact-card-body">
                <div className="timeline-exact-card-title-row">
                  <div className="timeline-exact-icon-box timeline-exact-icon-box--accent">
                    <FontAwesomeIcon icon={steps[3].icon} />
                  </div>
                  <h3 className="timeline-exact-card-title">
                    {steps[3].stepNum} {steps[3].title}
                  </h3>
                </div>
                <p className="timeline-exact-card-desc">{steps[3].desc}</p>
              </div>
              <div className="timeline-exact-card-img-wrap timeline-exact-card-img-wrap--lanspice">
                <img
                  src={steps[3].image}
                  alt={steps[3].imageAlt}
                  className="timeline-exact-card-img"
                  loading="lazy"
                />
                <div className="timeline-exact-logo-badge">
                  <img src={lanlogoPng} alt="LanSpice" className="timeline-exact-mini-logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
