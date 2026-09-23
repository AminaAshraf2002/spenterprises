import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExternalLinkAlt,
  faShoppingBag,
  faPepperHot,
  faShieldAlt,
  faArrowRight,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import { LANSPICE_PRODUCTS, LANSPICE_BANNER } from '../data/contentData';
import lanLogo from '../assets/lanlogo.png';
import webPng from '../assets/web.png';
import './LanSpiceStore.css';

export default function LanSpiceStore({ isHomePage = false, onNavigate }) {
  // On home page, show only 3 cards (1 single row). On dedicated store page, show all products.
  const displayedProducts = isHomePage ? LANSPICE_PRODUCTS.slice(0, 3) : LANSPICE_PRODUCTS;

  return (
    <section className={`section lanspice-store ${isHomePage ? 'lanspice-store--home' : ''}`}>
      <div className="container">
        {/* Brand Banner Top with lanlogo & web.png Mockup */}
        <div className="lanspice-store__banner" data-aos="fade-up">
          <div className="lanspice-store__banner-content">
            <div className="lanspice-store__brand-top">
              <img
                src={lanLogo}
                alt="LanSpice Brand Logo"
                className="lanspice-store__brand-logo"
              />
              <div className="lanspice-store__badge">
                <FontAwesomeIcon icon={faShoppingBag} />
                <span>Official Consumer Brand • LanSpice.com</span>
              </div>
            </div>

            <h2 className="lanspice-store__headline">
              {LANSPICE_BANNER.headline}
            </h2>

            <div className="lanspice-store__tagline">
              {LANSPICE_BANNER.tagline}
            </div>

            <p className="lanspice-store__body">
              {LANSPICE_BANNER.body}
            </p>

            <div className="lanspice-store__features">
              <div className="lanspice-store__feature-item">
                <FontAwesomeIcon icon={faShieldAlt} className="lanspice-store__feature-icon" />
                <span>100% Kerala Heritage Single-Origin Plantation Harvest</span>
              </div>
              <div className="lanspice-store__feature-item">
                <FontAwesomeIcon icon={faCheckCircle} className="lanspice-store__feature-icon" />
                <span>Nitrogen-Flushed & Vacuum Sealed For Farm Freshness</span>
              </div>
            </div>

            <div className="lanspice-store__banner-cta-wrap">
              <a
                href={LANSPICE_BANNER.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary lanspice-store__banner-cta"
              >
                <span>Visit Full Store at LanSpice.com</span>
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </div>
          </div>

          {/* web.png Laptop Mockup */}
          <div className="lanspice-store__mockup-wrap">
            <a
              href={LANSPICE_BANNER.link}
              target="_blank"
              rel="noopener noreferrer"
              className="lanspice-store__mockup-link"
              title="Visit LanSpice.com eCommerce Store"
            >
              <img
                src={webPng}
                alt="LanSpice Online Store Mockup"
                className="lanspice-store__mockup-img"
              />
              <div className="lanspice-store__mockup-badge">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
                <span>Live eCommerce Store</span>
              </div>
            </a>
          </div>
        </div>

        {/* Store Products Header */}
        <div className="lanspice-store__section-header" data-aos="fade-up">
          <div className="eyebrow">
            <FontAwesomeIcon icon={faPepperHot} className="lanspice-store__eyebrow-icon" />
            <span>Retail & Consumer Packaging</span>
          </div>
          <h3 className="section-title">
            Featured LanSpice Spices & Oils
          </h3>
          <p className="section-desc lanspice-store__section-desc">
            Buy directly online or inquire for wholesale retail distribution boxes.
          </p>
        </div>

        {/* Products Grid: 3 cards row on home page, multi-row on store page */}
        <div className={`lanspice-store__products-grid ${isHomePage ? 'lanspice-store__products-grid--home' : ''}`}>
          {displayedProducts.map((prod) => (
            <div
              key={prod.id}
              className="card-white lanspice-store__product-card"
              data-aos="fade-up"
              data-aos-delay={prod.id * 100}
            >
              {/* Image */}
              <div className="lanspice-store__product-image-wrap">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="lanspice-store__product-image"
                />
                <div className="lanspice-store__product-category">
                  {prod.category}
                </div>

                <div className="lanspice-store__product-weight">
                  {prod.weight}
                </div>
              </div>

              {/* Body */}
              <div className="lanspice-store__product-body">
                <div className="lanspice-store__product-header">
                  <h4 className="lanspice-store__product-name">
                    {prod.name}
                  </h4>
                  <span className="lanspice-store__product-price">
                    {prod.price}
                  </span>
                </div>

                <p className="lanspice-store__product-desc">
                  {prod.description}
                </p>

                <a
                  href={prod.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline lanspice-store__product-cta"
                >
                  <span>Buy on LanSpice.com</span>
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="lanspice-store__product-cta-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button on Home Page */}
        {isHomePage && (
          <div className="lanspice-store__view-more-wrap" data-aos="fade-up">
            <button
              onClick={() => onNavigate && onNavigate('lanspice')}
              className="lanspice-store__view-more-btn"
            >
              <span>Explore Full LanSpice Store ({LANSPICE_PRODUCTS.length}+ Products)</span>
              <span className="lanspice-store__view-more-icon">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
