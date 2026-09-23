import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import './PageHero.css';

export default function PageHero({ badge, title, subtitle, image, icon, logo }) {
  return (
    <div className={`page-hero ${logo ? 'page-hero--has-logo' : ''}`}>
      {/* Crisp Full Cover Image with Subtle Cinematic Depth */}
      <div
        className="page-hero__bg-image"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Clean Gradient Vignette */}
      <div className="page-hero__gradient" />

      {/* Hero Content */}
      <div className="container page-hero__content">
        {logo && (
          <div className="page-hero__logo-wrap">
            <img src={logo} alt={title} className="page-hero__logo" />
          </div>
        )}

        {badge && (
          <div className="eyebrow page-hero__eyebrow">
            <FontAwesomeIcon icon={icon || faSeedling} className="page-hero__eyebrow-icon" />
            <span>{badge}</span>
          </div>
        )}

        <h1 className="page-hero__title">
          {title}
        </h1>

        {subtitle && (
          <p className="page-hero__subtitle">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
