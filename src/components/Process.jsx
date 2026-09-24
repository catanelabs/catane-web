import React, { useState } from 'react';
import { trackProcessStepSelect } from '../utils/analytics';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const handleSelectStep = (index, step) => {
    setActiveStep(index);
    trackProcessStepSelect(step.title, step.num);
  };

  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      subtitle: 'Understanding the business foundation',
      desc: 'We start by understanding your business, target audience, core offerings, and specific goals. No assumptions.',
      action: 'Initial consultation & requirement alignment',
    },
    {
      num: '02',
      title: 'PLAN',
      subtitle: 'Defining structure & experience',
      desc: 'We map out the website architecture, content hierarchy, mobile navigation flow, and conversion pathways.',
      action: 'Sitemap, wireframes & content outline',
    },
    {
      num: '03',
      title: 'BUILD',
      subtitle: 'Design & high-performance code',
      desc: 'We craft custom visuals, typography, layout, and performant front-end code tailored precisely to your brand.',
      action: 'Custom web development & responsive styling',
    },
    {
      num: '04',
      title: 'REVIEW',
      subtitle: 'Testing & refinement',
      desc: 'We review the completed build together on desktop and mobile screens, fine-tuning details based on your feedback.',
      action: 'Interactive staging preview & polishing',
    },
    {
      num: '05',
      title: 'LAUNCH',
      subtitle: 'Deployment & handover',
      desc: 'We deploy the website, set up domain & DNS settings, connect analytics and contact triggers, and hand over full access.',
      action: 'Live deployment & operational handover',
    },
  ];

  return (
    <section
      id="process"
      style={{
        paddingTop: '7rem',
        paddingBottom: '7rem',
        backgroundColor: 'var(--bg-dark)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        
        {/* Section Label */}
        <div className="section-label">How Catane Works</div>

        <h2
          className="editorial-subheading"
          style={{
            maxWidth: '800px',
            marginBottom: '4rem',
            color: 'var(--text-primary)',
          }}
        >
          CLEAR, PREDICTABLE<br />
          <span style={{ color: 'var(--accent)' }}>DEVELOPMENT STAGES.</span>
        </h2>

        {/* Process Timeline Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            position: 'relative',
          }}
        >
          {steps.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <div
                key={step.num}
                onClick={() => handleSelectStep(index, step)}
                onMouseEnter={() => handleSelectStep(index, step)}
                style={{
                  backgroundColor: isActive ? 'var(--bg-card-hover)' : 'var(--bg-card)',
                  border: isActive ? '1px solid var(--border-accent)' : '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.75rem 1.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                }}
              >
                {/* Step Top Bar */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: isActive ? 'var(--accent)' : 'var(--text-muted)',
                    }}
                  >
                    {step.num}
                  </span>
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: isActive ? 'var(--accent)' : 'var(--border-medium)',
                      boxShadow: isActive ? '0 0 10px var(--accent)' : 'none',
                    }}
                  />
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    marginBottom: '0.375rem',
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--text-muted)',
                    fontWeight: 500,
                    marginBottom: '1rem',
                  }}
                >
                  {step.subtitle}
                </p>

                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                  }}
                >
                  {step.desc}
                </p>

                {isActive && (
                  <div
                    style={{
                      marginTop: '1.25rem',
                      paddingTop: '0.875rem',
                      borderTop: '1px solid var(--border-subtle)',
                      fontSize: '0.75rem',
                      color: 'var(--accent)',
                      fontWeight: 600,
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    Output: {step.action}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
