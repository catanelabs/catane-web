import React from 'react';

export default function WhyCatane() {
  const principles = [
    {
      title: 'Built Around Your Business',
      desc: 'No unnecessary features simply because they are trendy. Every element serves a specific purpose for your business.',
    },
    {
      title: 'Mobile First',
      desc: 'The experience is engineered to perform seamlessly where the majority of your customers actually browse: on mobile screens.',
    },
    {
      title: 'Clear Communication',
      desc: 'We explain technical decisions in plain, normal language. No confusing acronyms, bloated proposals, or surprises.',
    },
    {
      title: 'Designed to Grow',
      desc: 'Start with what your business needs today, with modular code that easily adapts as your offerings expand.',
    },
    {
      title: 'Practical Technology',
      desc: 'Technology should solve an actual business problem and drive real inquiries rather than exist merely to look decorative.',
    },
  ];

  return (
    <section
      id="why-catane"
      style={{
        paddingTop: '7rem',
        paddingBottom: '7rem',
        backgroundColor: 'var(--bg-dark)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        
        {/* Section Label */}
        <div className="section-label">Why Catane</div>

        <h2
          className="editorial-subheading"
          style={{
            maxWidth: '800px',
            marginBottom: '4rem',
            color: 'var(--text-primary)',
          }}
        >
          OUR GUIDING<br />
          <span style={{ color: 'var(--accent)' }}>PRINCIPLES.</span>
        </h2>

        {/* 5 Principles Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {principles.map((p, idx) => (
            <div
              key={idx}
              className="card-quiet"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(244, 106, 37, 0.12)',
                  color: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                }}
              >
                0{idx + 1}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                }}
              >
                {p.title}
              </h3>

              <p
                style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
