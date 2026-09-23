import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faSeedling, faBars, faTimes, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { COMPANY_INFO } from '../data/contentData';
import './Navbar.css';

export default function Navbar({ currentPage, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = React.useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Background styling threshold
      setIsScrolled(currentScrollY > 25);

      // Keep visible if mobile drawer is open
      if (mobileMenuOpen) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Always show at top of page
      if (currentScrollY <= 80) {
        setIsVisible(true);
      } else {
        // Scrolling DOWN -> hide header
        if (currentScrollY > lastScrollY.current && currentScrollY - lastScrollY.current > 4) {
          setIsVisible(false);
        }
        // Scrolling UP -> show header
        else if (currentScrollY < lastScrollY.current && lastScrollY.current - currentScrollY > 4) {
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  const navPages = [
    { name: 'Home', id: 'home' },
    { name: 'Products', id: 'products' },
    { name: 'LanSpice Store', id: 'lanspice' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'About Us', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (pageId) => {
    setMobileMenuOpen(false);
    setIsVisible(true);
    onNavigate(pageId);
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : 'navbar--default'} ${isVisible ? 'navbar--visible' : 'navbar--hidden'}`}>
      {/* Top micro announcement bar */}
      <div className="navbar__topbar">
        <div className="container navbar__topbar-inner">
          <div className="navbar__topbar-left">
            <FontAwesomeIcon icon={faSeedling} className="navbar__topbar-seedling" />
            <span>Direct Farm Exporter • APEDA & FSSAI Certified • Karnataka, India</span>
          </div>

          <div className="navbar__topbar-right">
            <a
              href={`tel:${COMPANY_INFO.phones[0]}`}
              className="navbar__topbar-phone"
            >
              <FontAwesomeIcon icon={faPhone} className="navbar__topbar-phone-icon" />
              <span>{COMPANY_INFO.phones[0]}</span>
            </a>
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__topbar-whatsapp"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="navbar__topbar-whatsapp-icon" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container navbar__main">
        {/* Official Brand Logo */}
        <a
          href="https://exportssp.com/"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="navbar__logo-wrap"
          aria-label="SP Enterprises Home"
        >
          <img
            src="/logo.png"
            alt="SP Enterprises - Agricultural Produce & Spices Exports"
            className="navbar__logo"
          />
        </a>

        {/* 5-Page Desktop Navigation Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '1.85rem' }} className="desktop-nav">
          {navPages.map((page) => {
            const isActive = currentPage === page.id;
            return (
              <button
                key={page.id}
                onClick={() => handleNavClick(page.id)}
                className={`navbar__nav-link ${isActive ? 'navbar__nav-link--active' : 'navbar__nav-link--inactive'}`}
              >
                {page.name}
                {isActive && (
                  <span className="navbar__nav-indicator" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="navbar__actions">
          <button
            onClick={() => handleNavClick('contact')}
            className="btn btn-forest navbar__quote-btn"
          >
            <FontAwesomeIcon icon={faPaperPlane} className="navbar__quote-icon" />
            <span>Request Quote</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="navbar__mobile-toggle mobile-menu-btn"
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className="navbar__mobile-toggle-icon" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="navbar__mobile-drawer">
          {navPages.map((page) => (
            <button
              key={page.id}
              onClick={() => handleNavClick(page.id)}
              className={`navbar__mobile-link ${currentPage === page.id ? 'navbar__mobile-link--active' : 'navbar__mobile-link--inactive'}`}
            >
              {page.name}
            </button>
          ))}
          <div className="navbar__mobile-actions">
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
