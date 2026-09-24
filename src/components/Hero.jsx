import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faArrowRight, faShip, faRecycle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { HERO_CONTENT } from '../data/contentData';
import './Hero.css';

export default function Hero({ onExploreProducts, onInquire }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = HERO_CONTENT.heroImages;

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % images.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveSlide((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="hero">
      {/* Inline SVG clipPath definition — zero-size, invisible */}
      <svg width="0" height="0" aria-hidden="true" style={{position:'absolute'}}>
        <clipPath id="heroWave" clipPathUnits="objectBoundingBox">
          <path d="M0,0 H1 V0.9 C0.92,0.98 0.78,1 0.65,0.96 C0.5,0.91 0.35,0.98 0.2,1 C0.1,1.01 0.04,0.97 0,0.95 Z" />
        </clipPath>
      </svg>

      <div className="hero__container">
        {/* Hero Banner — clipped by wave */}
        <div className="hero__card hero-unified-card">
          {/* Main Grid */}
          <div className="hero__grid">
            {/* Left Zone */}
            <div className="hero__left">
              {/* Watermark orb */}
              <div className="hero__watermark-orb" />

              {/* Eyebrow */}
              <div className="hero__eyebrow" data-aos="fade-up">
                <FontAwesomeIcon icon={faSeedling} className="hero__eyebrow-icon" />
                <span>PURE • POTENT • DIRECT FARM HARVEST</span>
              </div>

              {/* Heading */}
              <h1 className="hero__heading" data-aos="fade-up" data-aos-delay="100">
                Fresh from Our Fields to Your <span className="hero__heading-accent">Home</span>
              </h1>

              {/* Subtext */}
              <p className="hero__subtext" data-aos="fade-up" data-aos-delay="200">
                {HERO_CONTENT.subtext}
              </p>

              {/* CTA Button */}
              <div className="hero__cta-row" data-aos="fade-up" data-aos-delay="300">
                <button
                  onClick={onExploreProducts}
                  className="btn btn-primary hero__cta-btn"
                >
                  <span>{HERO_CONTENT.primaryCta}</span>
                  <FontAwesomeIcon icon={faArrowRight} className="hero__cta-icon" />
                </button>
              </div>

              {/* Trust Badges */}
              <div className="hero__badges" data-aos="fade-up" data-aos-delay="400">
                {/* Badge 1 */}
                <div className="hero__badge">
                  <div className="hero__badge-circle">
                    <FontAwesomeIcon icon={faSeedling} className="hero__badge-circle-icon" />
                  </div>
                  <div>
                    <div className="hero__badge-title">Organic</div>
                    <div className="hero__badge-sub">Ingredients</div>
                  </div>
                </div>

                {/* Badge 2 */}
                <div className="hero__badge">
                  <div className="hero__badge-circle">
                    <FontAwesomeIcon icon={faShip} className="hero__badge-circle-icon" />
                  </div>
                  <div>
                    <div className="hero__badge-title">Direct Port</div>
                    <div className="hero__badge-sub">Export Port</div>
                  </div>
                </div>

                {/* Badge 3 */}
                <div className="hero__badge">
                  <div className="hero__badge-circle">
                    <FontAwesomeIcon icon={faRecycle} className="hero__badge-circle-icon" />
                  </div>
                  <div>
                    <div className="hero__badge-title">Sustainable</div>
                    <div className="hero__badge-sub">Packaging</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Zone: Image Slider */}
            <div className="hero__right">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="hero__slide"
                  style={{
                    opacity: activeSlide === idx ? 1 : 0,
                    transform: activeSlide === idx ? 'scale(1)' : 'scale(1.04)',
                    pointerEvents: activeSlide === idx ? 'auto' : 'none',
                  }}
                >
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="hero__slide-image"
                  />

                  {/* Vignette Overlay */}
                  <div className="hero__slide-vignette" />

                  {/* Caption */}
                  <div className="hero__slide-caption">
                    <span className="hero__slide-badge">
                      {img.badge}
                    </span>
                    <div className="hero__slide-title">
                      {img.caption}
                    </div>
                  </div>
                </div>
              ))}

              {/* Slider Arrows */}
              <div className="hero__slider-arrows">
                <button
                  onClick={handlePrev}
                  className="hero__slider-arrow"
                  aria-label="Previous slide"
                >
                  <FontAwesomeIcon icon={faChevronLeft} className="hero__slider-arrow-icon" />
                </button>
                <button
                  onClick={handleNext}
                  className="hero__slider-arrow"
                  aria-label="Next slide"
                >
                  <FontAwesomeIcon icon={faChevronRight} className="hero__slider-arrow-icon" />
                </button>
              </div>

              {/* Slide Dots */}
              <div className="hero__slider-dots">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveSlide(idx);
                      setIsAutoPlaying(false);
                    }}
                    className={`hero__slider-dot ${activeSlide === idx ? 'hero__slider-dot--active' : 'hero__slider-dot--inactive'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}