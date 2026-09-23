import React from 'react';

/**
 * Catane Visual Symbol Component
 * Geometric representation: C -> Connection -> Movement -> Growth
 */
export default function CataneSymbol({ size = 32, className = '', color = 'var(--accent)' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Catane Brand Symbol"
    >
      {/* Outer C-Curve node path */}
      <path
        d="M 68 24 A 32 32 0 1 0 68 76"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* Inner converging connection lines */}
      <path
        d="M 68 50 L 36 50"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Upper diagonal ray */}
      <path
        d="M 36 50 L 58 32"
        stroke={color}
        strokeWidth="4"
        strokeDasharray="2 3"
        strokeLinecap="round"
        opacity="0.85"
      />
      {/* Lower diagonal ray */}
      <path
        d="M 36 50 L 58 68"
        stroke={color}
        strokeWidth="4"
        strokeDasharray="2 3"
        strokeLinecap="round"
        opacity="0.85"
      />
      {/* Growth Focal Points */}
      <circle cx="68" cy="24" r="4.5" fill={color} />
      <circle cx="68" cy="76" r="4.5" fill={color} />
      <circle cx="68" cy="50" r="5" fill={color} />
      <circle cx="36" cy="50" r="4" fill={color} />
    </svg>
  );
}
