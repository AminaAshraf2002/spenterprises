import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSeedling,
  faBullseye,
  faCompass,
  faCheckCircle,
  faCertificate,
  faShieldAlt,
  faGlobe,
  faTractor,
  faBoxesPacking,
  faHandshake,
  faAward,
  faLeaf,
  faTruckFast,
  faStar,
  faArrowRight,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TimelineSection from './TimelineSection';
import WatercolorBotanicals from './WatercolorBotanicals';
import { ABOUT_STORY, COMPANY_INFO } from '../data/contentData';
import about1 from '../assets/about1.png';
import about2 from '../assets/about2.png';
import about3 from '../assets/about3.png';
import about4 from '../assets/about4.png';
import about5 from '../assets/about5.png';
import about6 from '../assets/about6.png';
import oilPng from '../assets/oil.png';
import heroPng from '../assets/hero.png';
import copraDryingJpg from '../assets/copra_drying.jpg';
import './AboutSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection({ onNavigate }) {
  const statsRef = useRef(null);
  const heroSectionRef = useRef(null);
  const titleWrapperRef = useRef(null);
  const collageRef = useRef(null);
  const botanicalsRef = useRef(null);

  // Toggle between Editorial / Reference Aesthetic and Farm Harvest Aesthetic
  const [aestheticMode, setAestheticMode] = useState('editorial');

  // GSAP ScrollTrigger animations for the About Us section
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Badge, Heading, and Lead Staggered Reveal
      const titleTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroSectionRef.current,
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
        .from('.about-replica-serif', {
          opacity: 0,
          y: 25,
          duration: 1.0,
          ease: 'power3.out'
        }, '-=0.6')
        .from('.about-replica-lead', {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power2.out'
        }, '-=0.6')
        .from('.about-replica-philosophy', {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power2.out'
        }, '-=0.5')
        .from('.about-replica-tag', {
          opacity: 0,
          y: 15,
          stagger: 0.08,
          duration: 0.6,
          ease: 'back.out(1.5)'
        }, '-=0.4');

      // 2. Arched 3-Image Collage Reveal
      gsap.from('.about-arch-card', {
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

      // 3. Subtle Parallax Float on Watercolor Foliage
      gsap.to('.watercolor-botanical--top-left', {
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
        y: -35,
        rotation: -3,
        ease: 'none'
      });

      gsap.to('.watercolor-botanical--bottom-right', {
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
        y: 40,
        rotation: 3,
        ease: 'none'
      });
    }, heroSectionRef);

    return () => ctx.revert();
  }, []);

  // GSAP Animated stat counters
  useEffect(() => {
    if (!statsRef.current) return;
    const statEls = statsRef.current.querySelectorAll('.about-stat__number');

    statEls.forEach((el) => {
      const rawText = el.getAttribute('data-target') || el.textContent.trim();
      const match = rawText.match(/^([^\d]*)(\d+)(.*)$/);
      if (!match) return;

      const prefix = match[1];
      const targetNum = parseInt(match[2], 10);
      const suffix = match[3];

      const counter = { val: 0 };
      gsap.to(counter, {
        val: targetNum,
        duration: 2.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        },
        onUpdate: () => {
          el.textContent = prefix + Math.round(counter.val).toLocaleString() + suffix;
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
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
      badgeTop: "APEDA & FSSAI Certified",
      badgeBottom: "Farm to Export"
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

  const corePillars = [
    {
      icon: faTractor,
      title: "Direct Farm Cultivation",
      desc: "Harvested directly across our fertile Mysuru & Periyapatna crop beds with zero synthetic accelerants.",
      tag: "Pure Harvest"
    },
    {
      icon: faBoxesPacking,
      title: "Cold-Press & Hygienic Processing",
      desc: "State-of-the-art copra sun-drying yards and cold-pressing units preserving volatile aromatic oils.",
      tag: "Cold-Chain"
    },
    {
      icon: faTruckFast,
      title: "Direct Port Dispatch",
      desc: "Rapid sea-freight reefer container dispatch through New Mangalore & Cochin ports within 48h.",
      tag: "Export Ready"
    },
    {
      icon: faHandshake,
      title: "Ethical Farmer Partnerships",
      desc: "Empowering 50+ local farming families with fair-share compensation and sustainable practices.",
      tag: "Fair Trade"
    }
  ];

  const harvestPillars = [
    {
      id: 1,
      title: "Direct Farming",
      stage: "Periyapatna, Mysuru",
      image: about1,
      tag: "Cultivation"
    },
    {
      id: 2,
      title: "Copra Drying",
      stage: "Natural Sunlight Yards",
      image: copraDryingJpg,
      tag: "Processing"
    },
    {
      id: 3,
      title: "Purity Testing",
      stage: "APEDA & FSSAI Lab",
      image: about5,
      tag: "Quality"
    },
    {
      id: 4,
      title: "Port Logistics",
      stage: "48h Dispatch Routes",
      image: about3,
      tag: "Export"
    }
  ];

  return (
    <div className="about-page">
      {/* Decorative ambient background glows */}
      <div className="about-ambient-glow about-ambient-glow--1" />
      <div className="about-ambient-glow about-ambient-glow--2" />
      <div className="about-ambient-glow about-ambient-glow--3" />

      {/* ==========================================================================
          SECTION 1: EXACT REPLICA DESIGN — ABOUT US
          With PURPOSE & HORIZON style badge, Cormorant Garamond Serif,
          Asymmetrical 3-Image Arched Collage, and Watercolor Botanical Flourishes
          ========================================================================== */}
      <section className="about-replica-section" ref={heroSectionRef}>
        {/* Soft Watercolor Botanical Sprigs in Corners */}
        <WatercolorBotanicals variant="top-left" />
        <WatercolorBotanicals variant="bottom-right" />

        <div className="container">
          <div className="about-replica-grid">
            {/* LEFT COLUMN: Narrative & Philosophy */}
            <div className="about-replica-content">
              {/* Optional Subtle Aesthetics Switcher */}
              <div className="about-photo-switcher-row">
                <div className="about-photo-switcher">
                  <button
                    type="button"
                    className={`about-photo-switch-btn ${aestheticMode === 'editorial' ? 'is-active' : ''}`}
                    onClick={() => setAestheticMode('editorial')}
                  >
                    Harvest & Operations
                  </button>
                  <button
                    type="button"
                    className={`about-photo-switch-btn ${aestheticMode === 'farm' ? 'is-active' : ''}`}
                    onClick={() => setAestheticMode('farm')}
                  >
                    Plantations & Quality
                  </button>
                </div>
              </div>

              {/* PURPOSE & HORIZON style badge for About Us (below filter, own row) */}
              <div className="about-pillars-micro-tag-row">
                <div className="about-pillars-micro-tag">
                  <FontAwesomeIcon icon={faSeedling} className="about-pillars-micro-icon" />
                  <span>ABOUT US</span>
                </div>
              </div>

              {/* Clean Serif Heading (Without the cursive overlapping script) */}
              <h1 className="about-replica-serif">
                {currentTab.heading}
              </h1>

              {/* Lead Paragraph with Bold Introductory Statement */}
              <p className="about-replica-lead">
                <strong>{currentTab.paragraph1}</strong>
              </p>

              {/* Philosophy Statement */}
              <p className="about-replica-philosophy">
                {currentTab.paragraph2}
              </p>

              {/* Sourcing / Standards Excerpt */}
              <p className="about-replica-subtext">
                {currentTab.paragraph3}
              </p>

              {/* Refined Feature Pills */}
              <div className="about-replica-tags-grid">
                <div className="about-replica-tag">
                  <FontAwesomeIcon icon={faCheckCircle} className="about-tag-icon" />
                  <span>100% Chemical-Free</span>
                </div>
                <div className="about-replica-tag">
                  <FontAwesomeIcon icon={faCheckCircle} className="about-tag-icon" />
                  <span>Direct Farm-to-Port</span>
                </div>
                <div className="about-replica-tag">
                  <FontAwesomeIcon icon={faCheckCircle} className="about-tag-icon" />
                  <span>APEDA & FSSAI Accredited</span>
                </div>
                <div className="about-replica-tag">
                  <FontAwesomeIcon icon={faCheckCircle} className="about-tag-icon" />
                  <span>Cold-Chain Container Reefer</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Asymmetrical 3-Image Collage with Custom Arched Geometry */}
            <div className="about-replica-visual" ref={collageRef}>
              <div className="about-arch-collage">
                {/* 1. Top Image: Pill Arch (Arched Dome Top) */}
                <div className="about-arch-card about-arch-card--top">
                  <img
                    src={currentPhotos.top}
                    alt={currentPhotos.altTop}
                    className="about-arch-img"
                    loading="lazy"
                  />
                  <div className="about-arch-overlay" />
                  <div className="about-arch-badge">
                    <span className="about-arch-badge-dot" />
                    <span>{currentTab.badgeTop}</span>
                  </div>
                </div>

                {/* 2. Bottom Row: 2 Asymmetrical Images */}
                <div className="about-arch-bottom-row">
                  {/* Bottom-Left Image: Tall Arched Dome */}
                  <div className="about-arch-card about-arch-card--bottom-left">
                    <img
                      src={currentPhotos.bottomLeft}
                      alt={currentPhotos.altBottomLeft}
                      className="about-arch-img"
                      loading="lazy"
                    />
                    <div className="about-arch-overlay" />
                  </div>

                  {/* Bottom-Right Image: Rounded Rectangular Frame */}
                  <div className="about-arch-card about-arch-card--bottom-right">
                    <img
                      src={currentPhotos.bottomRight}
                      alt={currentPhotos.altBottomRight}
                      className="about-arch-img"
                      loading="lazy"
                    />
                    <div className="about-arch-overlay" />
                    <div className="about-arch-mini-caption">
                      <span>{currentTab.badgeBottom}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DARK FOREST STAT COUNTER BANNER */}
      <section className="about-stats-banner" ref={statsRef}>
        <div className="container">
          <div className="about-stats-card" data-aos="fade-up">
            <div className="about-stats-grid">
              <div className="about-stat-item">
                <div className="about-stat-icon-circle">
                  <FontAwesomeIcon icon={faGlobe} />
                </div>
                <div className="about-stat__number" data-target="15+">15+</div>
                <div className="about-stat-label">Export Countries</div>
              </div>

              <div className="about-stat-item">
                <div className="about-stat-icon-circle">
                  <FontAwesomeIcon icon={faLeaf} />
                </div>
                <div className="about-stat__number" data-target="1,450+">1,450+</div>
                <div className="about-stat-label">Metric Tons Delivered</div>
              </div>

              <div className="about-stat-item">
                <div className="about-stat-icon-circle">
                  <FontAwesomeIcon icon={faHandshake} />
                </div>
                <div className="about-stat__number" data-target="2,400+">2,400+</div>
                <div className="about-stat-label">Global Clients</div>
              </div>

              <div className="about-stat-item">
                <div className="about-stat-icon-circle">
                  <FontAwesomeIcon icon={faShieldAlt} />
                </div>
                <div className="about-stat__number" data-target="100%">100%</div>
                <div className="about-stat-label">Quality Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 3: LUXURY EDITORIAL WHY CHOOSE US — 3-TIER MASTERPIECE
          Tier 1: 4 Portrait Cards with Floating Footer Pills & Arrow Circles
          Tier 2: Wide Spotlight Box with Center Floating Product Cutout (oil.png)
          Tier 3: Dark Forest Green Reefer Logistics Banner with hero.png
          ========================================================================== */}
      <section className="about-pillars-section">
        <div className="container">
          {/* TIER 1: Browse by Cultivation Stage (Reference Top Row) */}
          <div className="about-pillars-top-row" data-aos="fade-up">
            <div className="about-pillars-top-lead">
              <div className="about-pillars-micro-tag">
                <FontAwesomeIcon icon={faSeedling} className="about-pillars-micro-icon" />
                <span>WHY CHOOSE US</span>
              </div>
              <h2 className="about-pillars-top-title">
                Excellence at every stage of our harvest
              </h2>
              <p className="about-pillars-top-desc">
                From rich volcanic soils in Periyapatna to temperature-controlled sea-port dispatch, every step is rigorously monitored for certified international standards.
              </p>
              <button
                type="button"
                onClick={() => onNavigate && onNavigate('products')}
                className="about-pillars-text-link"
              >
                <span>View Full Export Catalog</span>
                <FontAwesomeIcon icon={faArrowRight} className="about-pillars-link-arrow" />
              </button>
            </div>

            <div className="about-pillars-cards-scroll">
              {harvestPillars.map((pillar) => (
                <div key={pillar.id} className="about-pillar-portrait-card">
                  <div className="about-pillar-portrait-img-wrap">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="about-pillar-portrait-img"
                      loading="lazy"
                    />
                    <div className="about-pillar-portrait-gradient" />
                    <div className="about-pillar-portrait-tag">{pillar.tag}</div>
                  </div>
                  <div className="about-pillar-portrait-footer">
                    <span className="about-pillar-portrait-label">{pillar.title}</span>
                    <span className="about-pillar-portrait-circle">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TIER 2: Spotlight Craft & Quality Showcase (Reference Middle Beige Card) */}
          <div className="about-pillars-spotlight-card" data-aos="fade-up">
            <div className="about-pillars-spotlight-left">
              <div className="about-pillars-micro-tag">
                <FontAwesomeIcon icon={faLeaf} className="about-pillars-micro-icon" />
                <span>CRAFTED TO EXCEL</span>
              </div>
              <h3 className="about-pillars-spotlight-heading">
                Agricultural purity that transforms food standards
              </h3>
              <p className="about-pillars-spotlight-desc">
                Each harvest batch is harvested at peak maturity and cold-pressed without chemical solvents, preserving natural antioxidants, volatile aromatic compounds, and verified nutritional potency.
              </p>
              <button
                type="button"
                onClick={() => onNavigate && onNavigate('products')}
                className="about-pillars-text-link"
              >
                <span>Explore Our Purity Standards</span>
                <FontAwesomeIcon icon={faArrowRight} className="about-pillars-link-arrow" />
              </button>
            </div>

            <div className="about-pillars-spotlight-center">
              <div className="about-pillars-spotlight-glow" />
              <img
                src={oilPng}
                alt="Cold-Pressed Virgin Coconut Oil"
                className="about-pillars-spotlight-cutout"
              />
              <div className="about-pillars-spotlight-badge">
                <span>100% Cold-Pressed</span>
              </div>
            </div>

            <div className="about-pillars-spotlight-right">
              <h4 className="about-pillars-product-title">Virgin Cold-Pressed Coconut Oil</h4>
              <div className="about-pillars-product-grade">Extra Virgin & Grade 1 Edible</div>
              <p className="about-pillars-product-desc">
                Unrefined, unbleached, and non-hydrogenated. Retains authentic tropical sweetness and superior shelf-stability.
              </p>
              <div className="about-pillars-product-swatches">
                <span className="about-pillars-swatch" title="100% Single-Origin">
                  <span className="about-pillars-swatch-dot about-pillars-swatch-dot--green" />
                  <span>Single-Origin</span>
                </span>
                <span className="about-pillars-swatch" title="Non-GMO">
                  <span className="about-pillars-swatch-dot about-pillars-swatch-dot--amber" />
                  <span>Non-GMO</span>
                </span>
                <span className="about-pillars-swatch" title="Food Grade">
                  <span className="about-pillars-swatch-dot about-pillars-swatch-dot--dark" />
                  <span>Export Grade</span>
                </span>
              </div>
              <button
                type="button"
                onClick={() => onNavigate && onNavigate('contact')}
                className="btn btn-primary about-pillars-product-cta"
              >
                <span>Inquire Wholesale</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>

          {/* TIER 3: Cold-Chain Logistics Banner (Reference Bottom Dark Green Banner) */}
          <div className="about-pillars-bottom-banner" data-aos="fade-up">
            <div className="about-pillars-bottom-left">
              <div className="about-pillars-bottom-tag">
                <span>NEW EXPORT ALLOCATIONS</span>
              </div>
              <h3 className="about-pillars-bottom-title">
                Temperature-Controlled Reefer Container Fleet
              </h3>
              <p className="about-pillars-bottom-desc">
                Pre-cooled sea-freight dispatch directly from Periyapatna farm gate to Cochin and New Mangalore port berths within 48 hours of packaging.
              </p>
              <button
                type="button"
                onClick={() => onNavigate && onNavigate('contact')}
                className="about-pillars-bottom-link"
              >
                <span>Discover Export Logistics</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>

            <div className="about-pillars-bottom-right">
              <div className="about-pillars-bottom-nav">
                <button type="button" className="about-pillars-nav-btn" aria-label="Previous Route">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button type="button" className="about-pillars-nav-btn" aria-label="Next Route">
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
              <div className="about-pillars-bottom-img-wrap">
                <img
                  src={heroPng}
                  alt="SP Enterprises Global Port Reefer Dispatch"
                  className="about-pillars-bottom-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          SECTION 4: MISSION & VISION — LUXURY EDITORIAL TWIN SHOWCASE
          Matching Reference Aesthetic:
          Card 1: Warm Organic Linen Tone (#F5F2EB) with Farmer/Harvest Image
          Card 2: Deep Forest Green (#243420) with Maritime Export Logistics Image
          ========================================================================== */}
      <section className="about-mv-section">
        <div className="container">
          {/* Section Header */}
          <div className="about-mv-header" data-aos="fade-up">
            <div className="about-pillars-micro-tag">
              <FontAwesomeIcon icon={faCompass} className="about-pillars-micro-icon" />
              <span>PURPOSE & HORIZON</span>
            </div>
            <h2 className="about-mv-main-title">
              Rooted in Heritage, Driven by Global Vision
            </h2>
            <p className="about-mv-main-subtitle">
              Guiding our agrarian practices from the fertile Periyapatna plantations to international trade destinations worldwide.
            </p>
          </div>

          <div className="about-mv-cards-stack">
            {/* CARD 1: OUR MISSION (Warm Linen Editorial Card) */}
            <div className="about-mv-editorial-card about-mv-editorial-card--mission" data-aos="fade-up">
              <div className="about-mv-editorial-content">
                <div className="about-mv-badge-row">
                  <span className="about-mv-badge about-mv-badge--light">
                    <FontAwesomeIcon icon={faBullseye} className="about-mv-badge-icon" />
                    <span>OUR MISSION</span>
                  </span>
                  <span className="about-mv-subbadge">Ethical Stewardship</span>
                </div>

                <h3 className="about-mv-card-title">
                  Nourishing Lives & Ecosystems Through Clean Agriculture
                </h3>

                <p className="about-mv-card-paragraph">
                  {ABOUT_STORY.missions.mission}
                </p>

                <div className="about-mv-highlights">
                  <div className="about-mv-highlight-item">
                    <span className="about-mv-highlight-check">✓</span>
                    <span>100% Chemical-Free & Regenerative Soil Care</span>
                  </div>
                  <div className="about-mv-highlight-item">
                    <span className="about-mv-highlight-check">✓</span>
                    <span>Direct Grower Partnerships & Fair-Trade Upliftment</span>
                  </div>
                  <div className="about-mv-highlight-item">
                    <span className="about-mv-highlight-check">✓</span>
                    <span>Complete Seed-to-Shipment Transparency</span>
                  </div>
                </div>

                <div className="about-mv-action-row">
                  <button
                    type="button"
                    onClick={() => onNavigate && onNavigate('products')}
                    className="about-pillars-text-link"
                  >
                    <span>Explore Sustainable Harvest</span>
                    <FontAwesomeIcon icon={faArrowRight} className="about-pillars-link-arrow" />
                  </button>
                </div>
              </div>

              <div className="about-mv-editorial-visual">
                <div className="about-mv-img-frame">
                  <img
                    src={about6}
                    alt="Sustainable Agricultural Harvesting"
                    className="about-mv-img"
                    loading="lazy"
                  />
                  <div className="about-mv-img-overlay" />
                  <div className="about-mv-floating-pill">
                    <span className="about-mv-pill-dot" />
                    <span>Direct Farm Stewardship</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2: OUR VISION (Deep Forest Green Editorial Card) */}
            <div className="about-mv-editorial-card about-mv-editorial-card--vision" data-aos="fade-up">
              <div className="about-mv-editorial-content">
                <div className="about-mv-badge-row">
                  <span className="about-mv-badge about-mv-badge--dark">
                    <FontAwesomeIcon icon={faGlobe} className="about-mv-badge-icon" />
                    <span>OUR VISION</span>
                  </span>
                  <span className="about-mv-subbadge about-mv-subbadge--dark">Worldwide Reach</span>
                </div>

                <h3 className="about-mv-card-title about-mv-card-title--vision">
                  Pioneering the Benchmark for International Agro-Trade
                </h3>

                <p className="about-mv-card-paragraph about-mv-card-paragraph--vision">
                  {ABOUT_STORY.missions.vision}
                </p>

                <div className="about-mv-metrics-grid">
                  <div className="about-mv-metric-box">
                    <span className="about-mv-metric-num">15+</span>
                    <span className="about-mv-metric-lbl">Export Nations</span>
                  </div>
                  <div className="about-mv-metric-box">
                    <span className="about-mv-metric-num">48h</span>
                    <span className="about-mv-metric-lbl">Farm-to-Port Dispatch</span>
                  </div>
                  <div className="about-mv-metric-box">
                    <span className="about-mv-metric-num">100%</span>
                    <span className="about-mv-metric-lbl">APEDA Accredited</span>
                  </div>
                </div>

                <div className="about-mv-action-row">
                  <button
                    type="button"
                    onClick={() => onNavigate && onNavigate('contact')}
                    className="btn btn-primary about-mv-vision-btn"
                  >
                    <span>Connect With Export Desk</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </div>

              <div className="about-mv-editorial-visual">
                <div className="about-mv-img-frame">
                  <img
                    src={about3}
                    alt="Global Export Logistics and Reefer Shipping"
                    className="about-mv-img"
                    loading="lazy"
                  />
                  <div className="about-mv-img-overlay about-mv-img-overlay--vision" />
                  <div className="about-mv-floating-pill about-mv-floating-pill--vision">
                    <span className="about-mv-pill-dot about-mv-pill-dot--green" />
                    <span>Global Trade Corridor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CERTIFICATIONS & COMPLIANCE */}
      <section className="about-certs-section">
        <div className="container">
          <div className="about-section-header" data-aos="fade-up">
            <div className="about-badge">
              <FontAwesomeIcon icon={faCertificate} className="about-badge-icon" />
              <span>GLOBAL COMPLIANCE</span>
            </div>
            <h2 className="about-section-title">
              Certifications & Regulatory Accreditations
            </h2>
            <div className="about-title-line" />
            <p className="about-section-subtitle">
              Adhering to international phytosanitary standards, food safety protocols, and government export accreditations.
            </p>
          </div>

          <div className="about-certs-grid">
            {ABOUT_STORY.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="about-cert-card"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="about-cert-header">
                  <div className="about-cert-icon">
                    <FontAwesomeIcon icon={faShieldAlt} />
                  </div>
                  <span className="about-cert-badge">{cert.badge}</span>
                </div>
                <h4 className="about-cert-name">{cert.name}</h4>
                <div className="about-cert-org">{cert.org}</div>
                <p className="about-cert-desc">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: INTERACTIVE TIMELINE (100% Full-Width White Background) */}
      <TimelineSection />
    </div>
  );
}
