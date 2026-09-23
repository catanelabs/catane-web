import React from 'react';

export default function Philosophy() {
  const pillars = [
    {
      num: '01',
      title: 'Clear Communication',
      desc: 'No technical jargon or obscure code. We explain strategy and technical decisions in plain, actionable language.',
    },
    {
      num: '02',
      title: 'Mobile First Experience',
      desc: 'Over 70% of modern customer interactions happen on phone screens. We design primarily for touch devices.',
    },
    {
      num: '03',
      title: 'Practical Technology',
      desc: 'Technology exists to solve actual business problems, streamline inquiries, and drive real growth—not just look trendy.',
    },
  ];

  return (
    <section
      id="philosophy"
      style={{
        paddingTop: '7rem',
        paddingBottom: '7rem',
        backgroundColor: 'var(--bg-dark)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        
        {/* Section Label */}
        <div className="section-label">Brand Philosophy</div>

        {/* Editorial Heading */}
        <h2
          className="editorial-subheading"
          style={{
            maxWidth: '900px',
            marginBottom: '2rem',
            color: 'var(--text-primary)',
          }}
        >
          YOUR BUSINESS<br />
          DESERVES A BETTER<br />
          <span style={{ color: 'var(--accent)' }}>DIGITAL PRESENCE.</span>
        </h2>

        {/* Supporting Narrative */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            marginBottom: '4.5rem',
            alignItems: 'start',
          }}
        >
          <p
            style={{
              fontSize: '1.25rem',
              color: 'var(--text-primary)',
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            Many businesses have exceptional products and services but an outdated, incomplete, or nonexistent online presence.
          </p>

          <p
            style={{
              fontSize: '1.0625rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
            }}
          >
            Catane helps turn that gap into a reliable digital engine. We bridge the distance between who you are and how your customers perceive you online.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="card-quiet"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  letterSpacing: '0.1em',
                }}
              >
                {pillar.num} — PHILOSOPHY
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.375rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                }}
              >
                {pillar.title}
              </h3>

              <p
                style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}
              >
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
