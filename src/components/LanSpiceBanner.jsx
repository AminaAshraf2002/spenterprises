import React from 'react';
import { ExternalLink, Sparkles, Flame, ShieldAlert } from 'lucide-react';
import { LANSPICE_CONTENT } from '../data/contentData';
import './LanSpiceBanner.css';

export default function LanSpiceBanner() {
  return (
    <section className="lanspice-banner">
      {/* Decorative Spice Background Glow */}
      <div className="lanspice-banner__glow" />

      <div className="container lanspice-banner__inner">
        <div className="lanspice-banner__card">
          {/* Left Text */}
          <div>
            <div className="lanspice-banner__badge">
              <Sparkles size={13} />
              <span>Sister Consumer Brand</span>
            </div>

            <h3 className="lanspice-banner__headline">
              {LANSPICE_CONTENT.headline}
            </h3>

            <div className="lanspice-banner__tagline">
              {LANSPICE_CONTENT.tagline}
            </div>

            <p className="lanspice-banner__body">
              {LANSPICE_CONTENT.body}
            </p>
          </div>

          {/* Right Action Box */}
          <div className="lanspice-banner__action-box">
            <div className="lanspice-banner__action-text">
              Direct retail-ready and consumer packaging available under the <strong>LanSpice™</strong> label for retail chains and e-commerce distribution.
            </div>

            <a
              href={LANSPICE_CONTENT.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold lanspice-banner__cta"
            >
              <span>{LANSPICE_CONTENT.ctaText}</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
