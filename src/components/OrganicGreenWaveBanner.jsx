import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSeedling, faCheckCircle, faEnvelope, faShip, faCertificate, faTemperatureLow } from '@fortawesome/free-solid-svg-icons';
import './OrganicGreenWaveBanner.css';

export default function OrganicGreenWaveBanner({ onInquire }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setEmail('');
    }
  };

  const produceItems = [
    {
      name: 'Coconut Oil',
      desc: 'Cold-Pressed Pure',
      icon: '🥥',
      img: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Black Pepper',
      desc: 'Tellicherry Bold',
      icon: '🌶️',
      img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Green Cardamom',
      desc: 'Mysuru Aromatic',
      icon: '🌿',
      img: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Golden Turmeric',
      desc: 'High Curcumin',
      icon: '🌾',
      img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Ceylon Cinnamon',
      desc: 'Sweet Bark Quills',
      icon: '🍂',
      img: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=200&q=80',
    },
  ];

  return (
    <section className="ogw-banner">
      <div className="container">
        {/* Green Wave Banner Container */}
        <div className="ogw-banner__card" data-aos="fade-up">
          {/* Top Wave Cutout */}
          <div className="ogw-banner__wave-top">
            <svg viewBox="0 0 1440 24" preserveAspectRatio="none" className="ogw-banner__wave-svg">
              <path d="M 0,0 L 0,16 C 360,26 720,2 1080,20 C 1260,26 1380,10 1440,0 L 1440,0 Z" fill="#FAF8F5" />
            </svg>
          </div>

          {/* Bottom Wave Cutout */}
          <div className="ogw-banner__wave-bottom">
            <svg viewBox="0 0 1440 24" preserveAspectRatio="none" className="ogw-banner__wave-svg">
              <path d="M 0,24 L 0,8 C 320,0 680,22 1040,8 C 1220,2 1360,18 1440,24 L 1440,24 Z" fill="#FAF8F5" />
            </svg>
          </div>

          {/* Glow Overlays */}
          <div className="ogw-banner__glow-top" />
          <div className="ogw-banner__glow-bottom" />

          {/* Top Row */}
          <div className="ogw-banner__top-grid">
            {/* Left Header */}
            <div>
              <div className="ogw-banner__eyebrow">
                <FontAwesomeIcon icon={faSeedling} className="ogw-banner__eyebrow-icon" />
                <span>POWERED BY NATURE</span>
              </div>

              <h2 className="ogw-banner__heading">
                Thoughtful Produce, <br />
                <span className="ogw-banner__heading-accent">Visible Purity</span>
              </h2>

              <button
                onClick={onInquire}
                className="btn ogw-banner__cta"
              >
                <span>OUR INGREDIENTS</span>
                <FontAwesomeIcon icon={faArrowRight} className="ogw-banner__cta-icon" />
              </button>
            </div>

            {/* Right: Circular Ingredient Cards */}
            <div className="ogw-banner__produce-grid">
              {produceItems.map((item, idx) => (
                <div key={idx} className="ogw-banner__produce-item">
                  <div className="ogw-banner__produce-circle">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="ogw-banner__produce-image"
                    />
                  </div>
                  <div className="ogw-banner__produce-name">
                    {item.name}
                  </div>
                  <div className="ogw-banner__produce-desc">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="ogw-banner__divider" />

          {/* Bottom Row: Newsletter */}
          <div className="ogw-banner__bottom-grid">
            <div>
              <div className="ogw-banner__newsletter-eyebrow">
                LET'S STAY IN TOUCH
              </div>
              <h3 className="ogw-banner__newsletter-heading">
                Join Our Global Export Community
              </h3>
              <p className="ogw-banner__newsletter-desc">
                Be the first to receive Karnataka seasonal harvest updates, wholesale container freight pricing, and LanSpice releases.
              </p>
            </div>

            {/* Email Form */}
            <div>
              <form onSubmit={handleSubmit} className="ogw-banner__form">
                <FontAwesomeIcon icon={faEnvelope} className="ogw-banner__form-icon" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your business email"
                  required
                  className="ogw-banner__form-input"
                />
                <button type="submit" className="ogw-banner__form-submit">
                  SUBSCRIBE
                </button>
              </form>

              {submitted && (
                <div className="ogw-banner__form-success">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span>Thank you! You have joined our export network.</span>
                </div>
              )}

              {/* Trust signals */}
              <div className="ogw-banner__trust-row">
                <div className="ogw-banner__trust-item">
                  <FontAwesomeIcon icon={faCertificate} className="ogw-banner__trust-icon" />
                  <span>APEDA & FSSAI Certified</span>
                </div>
                <div className="ogw-banner__trust-item">
                  <FontAwesomeIcon icon={faShip} className="ogw-banner__trust-icon" />
                  <span>Direct Port Cochin Shipments</span>
                </div>
                <div className="ogw-banner__trust-item">
                  <FontAwesomeIcon icon={faTemperatureLow} className="ogw-banner__trust-icon" />
                  <span>Reefer Cold Chain</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
