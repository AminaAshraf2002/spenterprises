import React from 'react';

/**
 * WatercolorBotanicals
 * Renders elegant, translucent watercolor botanical eucalyptus branches
 * and delicate sprigs matching the artistic aesthetic in the reference design.
 */
export default function WatercolorBotanicals({ className = '', variant = 'top-left' }) {
  if (variant === 'top-left') {
    return (
      <svg
        className={`watercolor-botanical watercolor-botanical--top-left ${className}`}
        viewBox="0 0 320 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="leafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8DA38B" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#ADC1AB" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#C8D6C6" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="leafGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7E967C" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#BCCDBA" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="leafGradBlush" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D9A994" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#EAD2C6" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="stemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#788874" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#9CAE98" stopOpacity="0.3" />
          </linearGradient>
          <filter id="softBlur" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="0.8" />
          </filter>
        </defs>

        {/* Delicate curved main eucalyptus stem */}
        <path
          d="M 20 10 Q 70 80 120 170 T 210 320"
          stroke="url(#stemGrad)"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        {/* Secondary branch */}
        <path
          d="M 95 130 Q 150 140 215 165"
          stroke="url(#stemGrad)"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Small blush accent sprig */}
        <path
          d="M 50 50 Q 85 40 130 55"
          stroke="url(#leafGradBlush)"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
        />

        {/* Eucalyptus Leaves */}
        <path
          d="M 40 35 C 20 20, 10 50, 35 65 C 60 75, 65 45, 40 35 Z"
          fill="url(#leafGrad1)"
          filter="url(#softBlur)"
        />
        <path
          d="M 90 35 C 105 20, 130 30, 125 50 C 120 65, 95 60, 90 35 Z"
          fill="url(#leafGradBlush)"
          filter="url(#softBlur)"
        />
        <path
          d="M 65 95 C 40 85, 45 125, 75 130 C 100 135, 105 105, 65 95 Z"
          fill="url(#leafGrad2)"
          filter="url(#softBlur)"
        />
        <path
          d="M 125 125 C 110 100, 150 85, 175 110 C 195 130, 160 160, 125 125 Z"
          fill="url(#leafGrad1)"
          filter="url(#softBlur)"
        />
        <path
          d="M 175 145 C 160 135, 205 130, 225 155 C 240 175, 200 190, 175 145 Z"
          fill="url(#leafGrad2)"
          filter="url(#softBlur)"
        />
        <path
          d="M 130 190 C 100 180, 110 230, 145 230 C 175 230, 170 190, 130 190 Z"
          fill="url(#leafGrad1)"
          filter="url(#softBlur)"
        />
        <path
          d="M 170 240 C 150 220, 195 210, 220 235 C 245 260, 200 280, 170 240 Z"
          fill="url(#leafGradBlush)"
          filter="url(#softBlur)"
        />
        <path
          d="M 195 295 C 180 285, 220 285, 235 310 C 245 330, 215 340, 195 295 Z"
          fill="url(#leafGrad2)"
          filter="url(#softBlur)"
        />

        {/* Soft watercolor dab accents */}
        <circle cx="110" cy="90" r="18" fill="url(#leafGradBlush)" opacity="0.3" filter="url(#softBlur)" />
        <circle cx="160" cy="180" r="24" fill="url(#leafGrad1)" opacity="0.25" filter="url(#softBlur)" />
      </svg>
    );
  }

  // Variant bottom-right
  return (
    <svg
      className={`watercolor-botanical watercolor-botanical--bottom-right ${className}`}
      viewBox="0 0 300 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="brLeafGrad1" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#8EA48C" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#BDCDBA" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="brBlushGrad" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#D8A892" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#EED9CF" stopOpacity="0.2" />
        </linearGradient>
        <filter id="softBlurBR" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="1" />
        </filter>
      </defs>

      <path
        d="M 280 300 Q 200 230 140 140 T 40 40"
        stroke="#8CA08A"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
        fill="none"
      />
      <path
        d="M 230 240 C 255 220, 260 260, 235 275 C 210 285, 205 255, 230 240 Z"
        fill="url(#brLeafGrad1)"
        filter="url(#softBlurBR)"
      />
      <path
        d="M 170 180 C 195 160, 205 200, 180 215 C 155 225, 145 195, 170 180 Z"
        fill="url(#brBlushGrad)"
        filter="url(#softBlurBR)"
      />
      <path
        d="M 120 120 C 145 100, 155 140, 130 155 C 105 165, 95 135, 120 120 Z"
        fill="url(#brLeafGrad1)"
        filter="url(#softBlurBR)"
      />
      <path
        d="M 70 70 C 95 50, 105 90, 80 105 C 55 115, 45 85, 70 70 Z"
        fill="url(#brBlushGrad)"
        filter="url(#softBlurBR)"
      />
    </svg>
  );
}
