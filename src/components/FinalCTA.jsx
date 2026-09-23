import React from 'react';

export default function FinalCTA({ onOpenModal }) {
  return (
    <section
      id="contact"
      style={{
        paddingTop: '9rem',
        paddingBottom: '9rem',
        backgroundColor: 'var(--bg-dark)',
        position: 'relative',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
          
          <div
            className="section-label"
            style={{ justifyContent: 'center', marginBottom: '1.5rem' }}
          >
            Get Started
          </div>

          <h2
            className="editorial-heading"
            style={{
              marginBottom: '2rem',
              color: 'var(--text-primary)',
            }}
          >
            LET'S BUILD<br />
            <span style={{ color: 'var(--accent)' }}>WHAT COMES NEXT.</span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '3rem',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Tell us what your business needs. We'll figure out the technology.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.25rem',
            }}
          >
            <button
              onClick={onOpenModal}
              className="btn-primary"
              style={{ padding: '1rem 2.25rem', fontSize: '1rem' }}
            >
              <span>Start a project</span>
              <span className="hover-arrow">↗</span>
            </button>

            <a
              href="https://wa.me/917603833919?text=Hello%20Catane,%20I'd%20like%20to%20discuss%20a%20project%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '1rem 2.25rem', fontSize: '1rem' }}
            >
              <span>WhatsApp</span>
              <span className="hover-arrow">↗</span>
            </a>

            <a
              href="mailto:catane.labs@gmail.com?subject=Project%20Inquiry%20-%20Catane"
              className="btn-secondary"
              style={{ padding: '1rem 2.25rem', fontSize: '1rem' }}
            >
              <span>Email Us</span>
              <span className="hover-arrow">↗</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
