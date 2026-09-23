import React from 'react';
import HeroCanvas from './HeroCanvas';

export default function Hero({ onOpenModal }) {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '8rem',
        paddingBottom: '6rem',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      {/* Interactive Background Canvas */}
      <HeroCanvas />

      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div style={{ maxWidth: '820px' }}>
          
          {/* Top Subtle Pill Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem',
              padding: '0.375rem 1rem',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.8125rem',
              fontFamily: 'var(--font-display)',
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent)',
                boxShadow: '0 0 8px var(--accent)',
              }}
            />
            Technology & Web Architecture Studio
          </div>

          {/* Bold Editorial Headline */}
          <h1
            className="editorial-heading"
            style={{
              marginBottom: '1.75rem',
              color: 'var(--text-primary)',
            }}
          >
            BUILD<br />
            <span style={{ color: 'var(--accent)' }}>WHAT</span><br />
            MATTERS.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: '1.25rem',
              letterSpacing: '-0.01em',
            }}
          >
            Technology for growing businesses.
          </p>

          {/* Supporting Copy */}
          <p
            style={{
              fontSize: 'clamp(1rem, 1.2vw, 1.1875rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              maxWidth: '640px',
              marginBottom: '2.5rem',
            }}
          >
            Catane builds professional websites and practical digital solutions that help businesses establish themselves online and move forward.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '1.25rem',
            }}
          >
            <button onClick={onOpenModal} className="btn-primary">
              <span>Start a project</span>
              <span className="hover-arrow">↗</span>
            </button>

            <a href="#services" className="btn-secondary">
              <span>Explore services</span>
              <span style={{ transition: 'transform 0.2s ease' }}>↓</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
