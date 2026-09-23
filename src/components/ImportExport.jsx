import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faTint,
  faCircle,
  faFire,
  faLeaf,
  faShip,
  faSnowflake,
  faClock,
  faCertificate
} from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IMPORT_EXPORT_CONTENT, EXPORT_CATEGORIES } from '../data/contentData';
import heroImg from '../assets/hero.png';
import about2Img from '../assets/about2.png';
import about3Img from '../assets/about3.png';
import gallery3Img from '../assets/gallery3.jpg';
import plantationBannerImg from '../assets/about.png';
import './ImportExport.css';

gsap.registerPlugin(ScrollTrigger);

export default function ImportExport({ onInquire, onSelectCategory }) {
  const bannerRef = useRef(null);
  const bannerBgRef = useRef(null);
  const bannerContentRef = useRef(null);
  const floatBadge1Ref = useRef(null);
  const floatBadge2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Parallax Scrub on the Background Plantation Landscape
      if (bannerBgRef.current && bannerRef.current) {
        gsap.fromTo(
          bannerBgRef.current,
          { yPercent: -18, scale: 1.18 },
          {
            yPercent: 18,
            scale: 1.05,
            ease: 'none',
            scrollTrigger: {
              trigger: bannerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        );
      }

      // 2. Parallax Floating Badges Counter-Movement for Rich Depth
      if (floatBadge1Ref.current && bannerRef.current) {
        gsap.to(floatBadge1Ref.current, {
          y: -45,
          rotate: -2.5,
          ease: 'none',
          scrollTrigger: {
            trigger: bannerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.6,
          },
        });
      }

      if (floatBadge2Ref.current && bannerRef.current) {
        gsap.to(floatBadge2Ref.current, {
          y: 40,
          rotate: 2.5,
          ease: 'none',
          scrollTrigger: {
            trigger: bannerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.8,
          },
        });
      }

      // 3. Staggered Content Entrance on Scroll
      if (bannerContentRef.current && bannerRef.current) {
        gsap.from(bannerContentRef.current.children, {
          y: 35,
          opacity: 0,
          stagger: 0.14,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bannerRef.current,
            start: 'top 75%',
            once: true,
          },
        });
      }
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  const getCategoryIcon = (index) => {
    switch (index) {
      case 0: return faTint;
      case 1: return faCircle;
      case 2: return faLeaf;
      case 3: return faFire;
      default: return faLeaf;
    }
  };

  const featureCards = [
    {
      icon: faShip,
      title: "Global Port Dispatch",
      desc: "Direct container sailings from Port of Cochin to 15+ international maritime destinations.",
      image: heroImg,
      alt: "Global cargo ship and port container logistics"
    },
    {
      icon: faSnowflake,
      title: "Reefer Cold Chain",
      desc: "100% temperature-controlled continuous transit safeguarding freshness across sea routes.",
      image: about2Img,
      alt: "Temperature controlled cargo containers"
    },
    {
      icon: faClock,
      title: "48h Field to Freight",
      desc: "Rapid post-harvest sorting, hygienic packaging, and port dispatch within 48 hours of harvest.",
      image: gallery3Img,
      alt: "Fresh harvest and agricultural operations"
    },
    {
      icon: faCertificate,
      title: "Certified Agro Standards",
      desc: "Accredited APEDA, FSSAI, and global phytosanitary compliance on every shipment.",
      image: about3Img,
      alt: "SP Enterprises certified agricultural facility"
    }
  ];

  return (
    <section className="section import-export">
      <div className="container">
        {/* Main Grid: Left Story / Right 2x2 Blended Image Cards */}
        <div className="import-export__hero-grid">
          {/* Left Column: Overline, Headline, Story, Olive Pill Button, Leaf Badge */}
          <div className="import-export__left" data-aos="fade-right">
            <div className="import-export__overline">
              <span>{IMPORT_EXPORT_CONTENT.eyebrow}</span>
              <span className="import-export__overline-line" />
            </div>

            <h2 className="import-export__headline">
              {IMPORT_EXPORT_CONTENT.headline}
            </h2>

            <p className="import-export__description">
              {IMPORT_EXPORT_CONTENT.body}
            </p>

            <button
              onClick={onInquire}
              className="import-export__pill-btn"
            >
              <span>{IMPORT_EXPORT_CONTENT.cta}</span>
              <span className="import-export__pill-icon">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </button>

            {/* Bottom Accent Leaf Card */}
            <div className="import-export__leaf-card">
              <div className="import-export__leaf-icon-wrap">
                <FontAwesomeIcon icon={faLeaf} />
              </div>
              <div className="import-export__leaf-content">
                <div className="import-export__leaf-title">100% Certified Quality</div>
                <div className="import-export__leaf-sub">Safe for consumers, sustainable for the planet</div>
              </div>
            </div>
          </div>

          {/* Right Column: 2x2 Grid of Cards with Soft Gradient-Blended Images */}
          <div className="import-export__right" data-aos="fade-left">
            <div className="import-export__cards-grid">
              {featureCards.map((card, idx) => (
                <div key={idx} className="import-export__card">
                  <div className="import-export__card-top">
                    <div className="import-export__card-icon-box">
                      <FontAwesomeIcon icon={card.icon} />
                    </div>
                    <h3 className="import-export__card-title">{card.title}</h3>
                    <p className="import-export__card-desc">{card.desc}</p>
                  </div>

                  <div className="import-export__card-image-wrap">
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="import-export__card-img"
                    />
                    {/* Seamless Gradient Overlay blending top of photo into card background */}
                    <div className="import-export__card-blend" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* EYE-CATCHING GSAP PARALLAX BANNER (Placed right above "Products We Export") */}
        <div className="import-export__parallax-banner" ref={bannerRef}>
          {/* Animated Parallax Background Image */}
          <img
            ref={bannerBgRef}
            src={plantationBannerImg}
            alt="SP Enterprises organic plantations and harvesting fields in Karnataka"
            className="import-export__parallax-bg"
          />

          {/* Cinematic Multi-Stop Overlay */}
          <div className="import-export__parallax-overlay" />

          {/* Floating Parallax Badges */}
          <div ref={floatBadge1Ref} className="import-export__float-badge import-export__float-badge--top">
            <span className="import-export__float-badge-icon">🌿</span>
            <div>
              <div className="import-export__float-badge-title">200+ Acres Fertile Soil</div>
              <div className="import-export__float-badge-sub">Mysuru & Wayanad Highlands</div>
            </div>
          </div>

          <div ref={floatBadge2Ref} className="import-export__float-badge import-export__float-badge--bottom">
            <span className="import-export__float-badge-icon">🚢</span>
            <div>
              <div className="import-export__float-badge-title">15+ Global Ports Direct</div>
              <div className="import-export__float-badge-sub">Port of Cochin Reefer Corridor</div>
            </div>
          </div>

          {/* Center Banner Content */}
          <div className="import-export__parallax-content" ref={bannerContentRef}>
            <div className="import-export__banner-eyebrow">
              <span className="import-export__banner-pulse" />
              <span>APEDA & FSSAI Certified Global Agro Exporter</span>
            </div>

            <h2 className="import-export__banner-title">
              From Fertile Karnataka Plantations <br className="hidden-mobile" />
              <span className="import-export__banner-title-highlight">to Global Dining Tables</span>
            </h2>

            <p className="import-export__banner-text">
              Combining sustainable plantation heritage with uncompromised maritime cold-chain logistics.
              Every harvest is sorted, packed, and certified to meet the strictest international import protocols.
            </p>

            {/* Key Metric Highlights in Banner */}
            <div className="import-export__banner-metrics">
              <div className="import-export__banner-metric">
                <span className="import-export__banner-metric-val">100%</span>
                <span className="import-export__banner-metric-label">Residue-Free & Natural</span>
              </div>
              <div className="import-export__banner-divider" />
              <div className="import-export__banner-metric">
                <span className="import-export__banner-metric-val">48h</span>
                <span className="import-export__banner-metric-label">Harvest-to-Freight</span>
              </div>
              <div className="import-export__banner-divider" />
              <div className="import-export__banner-metric">
                <span className="import-export__banner-metric-val">12-14°C</span>
                <span className="import-export__banner-metric-label">Reefer Container Hold</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="import-export__banner-actions">
              <button onClick={onInquire} className="import-export__banner-cta">
                <span>Inquire for Container Cargo</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
              <div className="import-export__banner-note">
                Direct wholesale packaging: Flexitanks • 25/50kg PP Bags • Custom Corrugated Boxes
              </div>
            </div>
          </div>
        </div>

        {/* 5 Export Categories Section */}
        <div className="import-export__categories-section">
          <div className="import-export__categories-header" data-aos="fade-up">
            <h3 className="section-title import-export__categories-title">
              Products We Export
            </h3>
            <p className="section-desc import-export__categories-desc">
              Standardized agricultural bulk cargo, certified for export to GCC, Europe, Southeast Asia, and the Americas.
            </p>
          </div>

          <div className="import-export__categories-grid">
            {EXPORT_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="card-white import-export__category-card"
                onClick={() => onSelectCategory(cat.route)}
                data-aos="fade-up"
                data-aos-delay={idx * 80}
              >
                <div className="import-export__category-icon-wrap">
                  <FontAwesomeIcon icon={getCategoryIcon(idx)} className="import-export__category-icon" />
                </div>

                <h4 className="import-export__category-name">
                  {cat.name}
                </h4>

                <div className="import-export__category-subtitle">
                  {cat.subtitle}
                </div>

                <p className="import-export__category-desc">
                  {cat.desc}
                </p>

                <div className="import-export__category-link">
                  <span>View in Catalog</span>
                  <FontAwesomeIcon icon={faArrowRight} className="import-export__category-link-icon" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
