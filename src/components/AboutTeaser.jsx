import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faCheckCircle,
  faSeedling
} from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WatercolorBotanicals from './WatercolorBotanicals';
import { ABOUT_TEASER, COMPANY_INFO } from '../data/contentData';
import about1 from '../assets/about1.png';
import about2 from '../assets/abo.png';
import about3 from '../assets/about3.png';
import about4 from '../assets/about4.png';
import about5 from '../assets/about5.png';
import about6 from '../assets/about.webp';
import './AboutTeaser.css';

gsap.registerPlugin(ScrollTrigger);

export default function AboutTeaser({ onLearnMore }) {
  const teaserSectionRef = useRef(null);
  const collageRef = useRef(null);

  // Toggle between Editorial / Reference Aesthetic and Farm Harvest Aesthetic
  const [aestheticMode, setAestheticMode] = useState('editorial');

  // GSAP ScrollTrigger animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Title and Script Calligraphy Staggered Reveal
      const titleTl = gsap.timeline({
        scrollTrigger: {
          trigger: teaserSectionRef.current,
          start: 'top 80%',
          once: true,
        }
      });

      titleTl
        .from('.about-pillars-micro-tag', {
          opacity: 0,
          y: 15,
          duration: 0.8,
          ease: 'power3.out'
        })
        .from('.about-teaser-replica-serif', {
          opacity: 0,
          y: 25,
          duration: 1.0,
          ease: 'power3.out'
        }, '-=0.6')
        .from('.about-teaser-replica-lead', {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power2.out'
        }, '-=0.6')
        .from('.about-teaser-replica-philosophy', {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power2.out'
        }, '-=0.5')
        .from('.about-teaser-replica-tag', {
          opacity: 0,
          y: 15,
          stagger: 0.08,
          duration: 0.6,
          ease: 'back.out(1.5)'
        }, '-=0.4')
        .from('.about-teaser-cta-wrap', {
          opacity: 0,
          y: 15,
          duration: 0.6,
          ease: 'power2.out'
        }, '-=0.3');

      // 2. Arched 3-Image Collage Staggered Reveal
      gsap.from('.about-teaser-arch-card', {
        scrollTrigger: {
          trigger: collageRef.current,
          start: 'top 85%',
          once: true,
        },
        opacity: 0,
        y: 45,
        scale: 0.94,
        stagger: 0.18,
        duration: 1.2,
        ease: 'power3.out',
        clearProps: 'transform'
      });

      // 3. Subtle Parallax Float on Watercolor Botanical Foliage
      gsap.to('.about-teaser-section .watercolor-botanical--top-left', {
        scrollTrigger: {
          trigger: teaserSectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
        y: -30,
        rotation: -3,
        ease: 'none'
      });

      gsap.to('.about-teaser-section .watercolor-botanical--bottom-right', {
        scrollTrigger: {
          trigger: teaserSectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
        y: 35,
        rotation: 3,
        ease: 'none'
      });
    }, teaserSectionRef);

    return () => ctx.revert();
  }, []);

  // Tab copy content for Harvest & Operations vs Plantations & Quality
  const tabContent = {
    editorial: {
      overline: "About us",
      heading: "From Our Fields to the World",
      paragraph1: "SP ENTERPRISES — a space for regular agricultural care in an atmosphere of pleasure and safety, an oasis of aesthetics and harmony, where true earth-born vitality is cultivated in an eco-friendly way!",
      paragraph2: "Our philosophy: self-care in an enveloping natural atmosphere — an indispensable way to reboot and a great investment in your own health.",
      paragraph3: "At SP Enterprises, we bring you the finest, farm-fresh spices—pure, aromatic, and full of flavor. Sourced from trusted growers and crafted with care, our spices add a touch of authenticity to every meal.",
      badgeTop: "Export Ready",
      badgeBottom: "Pure Organic Cultivation"
    },
    farm: {
      overline: "About us",
      heading: "Rooted in Nature, Driven by Taste",
      paragraph1: "SP ENTERPRISES — rooted in generations of farming heritage, we nurture every plantation with care, ensuring each crop grows in harmony with the land it comes from.",
      paragraph2: "Our philosophy: quality begins at the source — every batch is inspected, graded, and certified before it ever leaves our farms, so what reaches you is nothing short of the finest nature has to offer.",
      paragraph3: "APEDA & FSSAI certified, our plantations follow strict quality standards from soil to shipment. Every spice, fruit, and vegetable we export carries the trust of rigorous sourcing and careful craftsmanship.",
      badgeTop: "Farm to Export",
      badgeBottom: "APEDA & FSSAI Certified"
    }
  };

  // Photo sets using imported local assets (about1.png to about6.png)
  const images = {
    editorial: {
      top: about3,
      bottomLeft: about4,
      bottomRight: about1,
      altTop: "SP Enterprises Logistics & Container Loading Hub",
      altBottomLeft: "Export Quality Produce in Crates",
      altBottomRight: "SP Enterprises Farmers Harvesting Crops"
    },
    farm: {
      top: about6,
      bottomLeft: about2,
      bottomRight: about5,
      altTop: "Scenic Lush Agricultural Plantations & Mountain Terraces",
      altBottomLeft: "Direct Port Loading for Global Export",
      altBottomRight: "Laboratory Purity & Spice Quality Inspection"
    }
  };

  const currentTab = tabContent[aestheticMode];
  const currentPhotos = images[aestheticMode];

  return (
    <section className="about-teaser-section" ref={teaserSectionRef}>
      {/* Soft Watercolor Botanical Sprigs in Corners */}
      <WatercolorBotanicals variant="top-left" />
      <WatercolorBotanicals variant="bottom-right" />

      <div className="container">
        <div className="about-teaser-replica-grid">
          {/* LEFT COLUMN: Narrative & Philosophy */}
          <div className="about-teaser-replica-content">
            {/* Aesthetic Mode Switcher on its own line */}
            <div className="about-teaser-photo-switcher-row">
              <div className="about-teaser-photo-switcher">
                <button
                  type="button"
                  className={`about-teaser-switch-btn ${aestheticMode === 'editorial' ? 'is-active' : ''}`}
                  onClick={() => setAestheticMode('editorial')}
                >
                  Harvest & Operations
                </button>
                <button
                  type="button"
                  className={`about-teaser-switch-btn ${aestheticMode === 'farm' ? 'is-active' : ''}`}
                  onClick={() => setAestheticMode('farm')}
                >
                  Plantations & Quality
                </button>
              </div>
            </div>

            {/* PURPOSE & HORIZON style badge for About Us (strictly below filter, own row) */}
            <div className="about-pillars-micro-tag-row">
              <div className="about-pillars-micro-tag">
                <FontAwesomeIcon icon={faSeedling} className="about-pillars-micro-icon" />
                <span>ABOUT US</span>
              </div>
            </div>

            {/* Clean Serif Heading (Without the cursive overlapping script) */}
            <h2 className="about-teaser-replica-serif">
              {currentTab.heading}
            </h2>

            {/* Lead Paragraph with Bold Introductory Statement */}
            <p className="about-teaser-replica-lead">
              <strong>{currentTab.paragraph1}</strong>
            </p>

            {/* Philosophy Statement */}
            <p className="about-teaser-replica-philosophy">
              {currentTab.paragraph2}
            </p>

            {/* Sourcing / Standards Excerpt */}
            <p className="about-teaser-replica-subtext">
              {currentTab.paragraph3}
            </p>

            {/* Refined Feature Pills */}
            <div className="about-teaser-replica-tags-grid">
              <div className="about-teaser-replica-tag">
                <FontAwesomeIcon icon={faCheckCircle} className="about-teaser-tag-icon" />
                <span>100% Chemical-Free</span>
              </div>
              <div className="about-teaser-replica-tag">
                <FontAwesomeIcon icon={faCheckCircle} className="about-teaser-tag-icon" />
                <span>Direct Farm-to-Port</span>
              </div>
              <div className="about-teaser-replica-tag">
                <FontAwesomeIcon icon={faCheckCircle} className="about-teaser-tag-icon" />
                <span>APEDA & FSSAI Accredited</span>
              </div>
              <div className="about-teaser-replica-tag">
                <FontAwesomeIcon icon={faCheckCircle} className="about-teaser-tag-icon" />
                <span>Cold-Chain Container Reefer</span>
              </div>
            </div>

            {/* CTA Button to Full About Story */}
            <div className="about-teaser-cta-wrap">
              <button
                type="button"
                onClick={onLearnMore}
                className="about-teaser-replica-btn"
              >
                <span>Read Our Full Story</span>
                <FontAwesomeIcon icon={faArrowRight} className="about-teaser-btn-arrow" />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Asymmetrical 3-Image Collage with Custom Arched Geometry */}
          <div className="about-teaser-replica-visual" ref={collageRef}>
            <div className="about-teaser-arch-collage">
              {/* 1. Top Image: Pill Arch (Arched Dome Top) */}
              <div className="about-teaser-arch-card about-teaser-arch-card--top">
                <img
                  src={currentPhotos.top}
                  alt={currentPhotos.altTop}
                  className="about-teaser-arch-img"
                  loading="lazy"
                />
                <div className="about-teaser-arch-overlay" />
                <div className="about-teaser-arch-badge">
                  <span className="about-teaser-arch-badge-dot" />
                  <span>{currentTab.badgeTop}</span>
                </div>
              </div>

              {/* 2. Bottom Row: 2 Asymmetrical Images */}
              <div className="about-teaser-arch-bottom-row">
                {/* Bottom-Left Image: Tall Arched Dome */}
                <div className="about-teaser-arch-card about-teaser-arch-card--bottom-left">
                  <img
                    src={currentPhotos.bottomLeft}
                    alt={currentPhotos.altBottomLeft}
                    className="about-teaser-arch-img"
                    loading="lazy"
                  />
                  <div className="about-teaser-arch-overlay" />
                </div>

                {/* Bottom-Right Image: Rounded Rectangular Frame */}
                <div className="about-teaser-arch-card about-teaser-arch-card--bottom-right">
                  <img
                    src={currentPhotos.bottomRight}
                    alt={currentPhotos.altBottomRight}
                    className="about-teaser-arch-img"
                    loading="lazy"
                  />
                  <div className="about-teaser-arch-overlay" />
                  <div className="about-teaser-arch-mini-caption">
                    <span>{currentTab.badgeBottom}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
