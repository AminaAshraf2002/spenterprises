import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faSeedling,
  faCheckCircle,
  faEnvelope,
  faShip,
  faCertificate,
  faTemperatureLow,
  faMapMarkerAlt,
  faArrowUp,
  faExternalLinkAlt,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { COMPANY_INFO } from '../data/contentData';
import './Footer.css';

export default function Footer({ onNavigate, onInquire }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setEmail('');
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Products', id: 'products' },
    { label: 'LanSpice Store', id: 'lanspice' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'About Us', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const produceItems = [
    {
      name: 'Coconut Oil',
      desc: 'Cold-Pressed Pure',
      img: 'https://www.verywellhealth.com/thmb/YU_4tvUI3VVmGHrD2Dvp7-0zqJw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-8081649701-5b37f75946e0fb0037ce0001.jpg',
    },
    {
      name: 'Black Pepper',
      desc: 'Tellicherry Bold',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVsaM0E0bzNZFzYh1pAYpCGEzsFFXQZBRNdDvR7QXmVTAGfu588UGcYkg&s=10',
    },
    {
      name: 'Green Cardamom',
      desc: 'Mysuru Aromatic',
      img: 'https://vibrantliving.in/cdn/shop/files/CardamomGreen.png?v=1731059940&width=2048',
    },
    {
      name: 'Golden Turmeric',
      desc: 'High Curcumin',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsSH_tsBGnI7cpYlPIUx2codFwUMbjpnhQGULwbSg3gnf4csi2UlPPYpQ&s=10',
    },
    {
      name: 'Ceylon Cinnamon',
      desc: 'Sweet Bark Quills',
      img: 'https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/article_thumbnails/BigBead/health_benefits_of_ceylon_cinnamon_bigbead/1800x1200_health_benefits_of_ceylon_cinnamon_bigbead.jpg',
    },
  ];

  return (
    <footer className="footer">
      {/* Top Wave Cutout */}
      <div className="footer__wave-top">
        <svg viewBox="0 0 1440 28" preserveAspectRatio="none" className="footer__wave-svg">
          <path d="M 0,0 L 0,18 C 360,28 720,4 1080,22 C 1260,28 1380,12 1440,0 L 1440,0 Z" fill="#FAF8F5" />
        </svg>
      </div>

      {/* Glow Overlays */}
      <div className="footer__glow-top" />
      <div className="footer__glow-bottom" />

      <div className="container">
        {/* ===== TOP BANNER: Produce Circles + Heading ===== */}
        <div className="footer__banner-grid" data-aos="fade-up">
          {/* Left Header */}
          <div>
            <div className="footer__eyebrow">
              <FontAwesomeIcon icon={faSeedling} className="footer__eyebrow-icon" />
              <span>POWERED BY NATURE</span>
            </div>

            <h2 className="footer__heading">
              Thoughtful Produce, <br />
              <span className="footer__heading-accent">Visible Purity</span>
            </h2>

            <button
              onClick={onInquire}
              className="btn footer__cta-btn"
            >
              <span>OUR INGREDIENTS</span>
              <FontAwesomeIcon icon={faArrowRight} className="footer__cta-btn-icon" />
            </button>
          </div>

          {/* Right: Circular Ingredient Cards */}
          <div className="footer__produce-grid">
            {produceItems.map((item, idx) => (
              <div key={idx} className="footer__produce-item">
                <div className="footer__produce-circle">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="footer__produce-image"
                  />
                </div>
                <div className="footer__produce-name">{item.name}</div>
                <div className="footer__produce-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="footer__divider" />

        {/* ===== NEWSLETTER ROW ===== */}
        <div className="footer__newsletter-grid">
          <div>
            <div className="footer__newsletter-eyebrow">LET'S STAY IN TOUCH</div>
            <h3 className="footer__newsletter-heading">
              Join Our Global Export Community
            </h3>
            <p className="footer__newsletter-desc">
              Be the first to receive Karnataka seasonal harvest updates, wholesale container freight pricing, and LanSpice releases.
            </p>
          </div>

          {/* Email Form */}
          <div>
            <form onSubmit={handleSubmit} className="footer__form">
              <FontAwesomeIcon icon={faEnvelope} className="footer__form-icon" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your business email"
                required
                className="footer__form-input"
              />
              <button type="submit" className="footer__form-submit">
                SUBSCRIBE
              </button>
            </form>

            {submitted && (
              <div className="footer__form-success">
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>Thank you! You have joined our export network.</span>
              </div>
            )}

            {/* Trust signals */}
            <div className="footer__trust-row">
              <div className="footer__trust-item">
                <FontAwesomeIcon icon={faCertificate} className="footer__trust-icon" />
                <span>APEDA & FSSAI Certified</span>
              </div>
              <div className="footer__trust-item">
                <FontAwesomeIcon icon={faShip} className="footer__trust-icon" />
                <span>Direct Port Cochin Shipments</span>
              </div>
              <div className="footer__trust-item">
                <FontAwesomeIcon icon={faTemperatureLow} className="footer__trust-icon" />
                <span>Reefer Cold Chain</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer__divider" />

        {/* ===== FOOTER CONTENT GRID (Nav, Contact, Address, Social) ===== */}
        <div className="footer__content-grid" data-aos="fade-up">
          {/* Col 1: Brand & Tagline */}
          <div>
            <a href="https://exportssp.com/" className="footer__logo-wrap" aria-label="SP Enterprises Home">
              <img
                src="/logo.png"
                alt="SP Enterprises - Farm-Fresh Produce & Global Agricultural Exports"
                className="footer__logo"
              />
            </a>

            <p className="footer__tagline">
              {COMPANY_INFO.tagline}
            </p>

            {/* Social Icons */}
            <div className="footer__socials">
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href={COMPANY_INFO.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="X Twitter"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href={COMPANY_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="YouTube"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>

          {/* Col 2: Main Menu */}
          <div>
            <h4 className="footer__col-title">Main Pages</h4>
            <ul className="footer__nav-list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="footer__nav-btn"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="https://lanspice.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__portal-link"
                >
                  <span>LanSpice Portal</span>
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="footer__portal-icon" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="footer__col-title">Contact Lines</h4>
            <div className="footer__contact-info">
              <div>
                <div className="footer__contact-label">Direct Phone</div>
                {COMPANY_INFO.phones.map((phone, idx) => (
                  <div key={idx}>
                    <a href={`tel:${phone}`} className="footer__phone-link">{phone}</a>
                  </div>
                ))}
              </div>

              <div>
                <div className="footer__contact-label">WhatsApp Desk</div>
                <a href={COMPANY_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="footer__whatsapp-link">
                  {COMPANY_INFO.whatsapp}
                </a>
              </div>

              <div>
                <div className="footer__contact-label">Email</div>
                <a href={`mailto:${COMPANY_INFO.email}`} className="footer__email-link">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Address */}
          <div>
            <h4 className="footer__col-title">Physical Office</h4>
            <div className="footer__address-row">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="footer__address-icon" />
              <div>{COMPANY_INFO.address}</div>
            </div>
            <div className="footer__ports-note">
              Nearest Ports: Cochin (310km), New Mangalore (220km)
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <div className="footer__copyright">
            © {new Date().getFullYear()} <a href="https://exportssp.com/" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 600 }}>SP Enterprises (exportssp.com)</a>. All rights reserved. Registered in Karnataka, India.
          </div>
          <button
            onClick={scrollToTop}
            className="footer__back-to-top"
          >
            <span>Back to Top</span>
            <FontAwesomeIcon icon={faArrowUp} className="footer__back-to-top-icon" />
          </button>
        </div>
      </div>
    </footer>
  );
}
