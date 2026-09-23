import React from 'react';
import CataneSymbol from './CataneSymbol';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: '#07080a',
        paddingTop: '5rem',
        paddingBottom: '4rem',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Brand Info */}
          <div>
            <a
              href="#"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                textDecoration: 'none',
                color: 'var(--text-primary)',
                marginBottom: '1rem',
              }}
            >
              <CataneSymbol size={28} />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                CATANE
              </span>
            </a>
            <p
              style={{
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                maxWidth: '300px',
              }}
            >
              Technology for growing businesses. Building practical digital solutions that move businesses forward.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.8125rem',
                fontWeight: 700,
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '1.25rem',
              }}
            >
              Navigation
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              <a href="#services" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9375rem' }}>
                Services
              </a>
              <a href="#process" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9375rem' }}>
                Process
              </a>
              <a href="#why-catane" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9375rem' }}>
                Why Catane
              </a>
              <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9375rem' }}>
                Contact
              </a>
            </div>
          </div>

          {/* Direct Channels */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.8125rem',
                fontWeight: 700,
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '1.25rem',
              }}
            >
              Contact Channels
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              <a
                href="https://wa.me/917603833919?text=Hello%20Catane,%20I'd%20like%20to%20discuss%20a%20project%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9375rem' }}
              >
                WhatsApp Direct ↗
              </a>
              <a
                href="tel:+917603833919"
                style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9375rem' }}
              >
                +91 76038 33919 ↗
              </a>
              <a
                href="mailto:catane.labs@gmail.com"
                style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9375rem' }}
              >
                catane.labs@gmail.com ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.8125rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>© {currentYear} CATANE. Grow yourself. Help others grow.</div>
          <div>All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
