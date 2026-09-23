import React, { useState } from 'react';

export default function Services({ onOpenModal }) {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: '01',
      title: 'BUSINESS WEBSITES',
      subtitle: 'Digital storefronts engineered for trust & conversion',
      description:
        'Professional, ultra-responsive websites designed specifically around your unique business and your target customers.',
      deliverables: [
        'Custom Art Direction & Typography',
        'Mobile-First Touch Architecture',
        'Performance & Fast Load Times',
        'Search & Social Metadata Foundations',
      ],
      tag: 'Core Offering',
    },
    {
      id: '02',
      title: 'ONLINE PRESENCE',
      subtitle: 'Complete setup from domain to customer channels',
      description:
        'End-to-end guidance covering domain configuration, reliable hosting setup, direct WhatsApp & Email contact links, analytics, and business listings.',
      deliverables: [
        'Domain & DNS Configuration',
        'Instant WhatsApp & Contact Triggers',
        'Google Business & Local Visibility',
        'Privacy-Conscious Analytics',
      ],
      tag: 'Foundational',
    },
    {
      id: '03',
      title: 'CUSTOM SOFTWARE',
      subtitle: 'Tailored business tools when a website is not enough',
      description:
        'Business-specific web applications, customer portals, internal management dashboards, and customized operational software built for your workflow.',
      deliverables: [
        'Client Portals & Booking Hubs',
        'Operational Data Dashboards',
        'Secure Internal Business Tools',
        'Custom Web Applications',
      ],
      tag: 'Specialized',
    },
    {
      id: '04',
      title: 'AUTOMATION & INTEGRATION',
      subtitle: 'Seamless digital workflows that save manual hours',
      description:
        'Connect your software stack, eliminate repetitive manual data entry, streamline customer notifications, and build practical digital workflows.',
      deliverables: [
        'CRM & Form Integrations',
        'Automated Customer Notifications',
        'Multi-tool Webhook Pipelines',
        'Internal Workflow Automation',
      ],
      tag: 'Efficiency',
    },
  ];

  return (
    <section
      id="services"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        backgroundColor: 'var(--bg-dark)',
        borderBottom: '1px solid var(--border-subtle)',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        
        {/* Section Label */}
        <div className="section-label">Capabilities</div>

        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginBottom: '3.5rem',
          }}
        >
          <h2
            className="editorial-subheading"
            style={{ color: 'var(--text-primary)' }}
          >
            PRACTICAL DIGITAL<br />
            <span style={{ color: 'var(--accent)' }}>SOLUTIONS.</span>
          </h2>
          <p
            style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
            }}
          >
            We don't sell bloated packages or obscure tech stack names. We deliver clean, tailored solutions built around what your business actually requires to grow.
          </p>
        </div>

        {/* Editorial Service Rows */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          {services.map((service, index) => {
            const isActive = activeService === index;

            return (
              <div
                key={service.id}
                onClick={() => setActiveService(index)}
                onMouseEnter={() => setActiveService(index)}
                style={{
                  backgroundColor: isActive ? 'var(--bg-card-hover)' : 'var(--bg-card)',
                  border: isActive ? '1px solid var(--border-accent)' : '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'clamp(1.25rem, 3vw, 2.25rem)',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isActive ? '0 12px 32px rgba(244, 106, 37, 0.08)' : 'none',
                  overflow: 'hidden',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1fr) auto',
                    alignItems: 'center',
                    gap: '1.25rem',
                  }}
                >
                  <div style={{ minWidth: 0 }}>
                    {/* Header line */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        marginBottom: '0.5rem',
                        flexWrap: 'wrap',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '0.9375rem',
                          fontWeight: 700,
                          color: isActive ? 'var(--accent)' : 'var(--text-muted)',
                          transition: 'color 0.2s ease',
                        }}
                      >
                        {service.id}
                      </span>
                      <span className="concept-badge" style={{ fontSize: '0.625rem', padding: '0.15rem 0.5rem' }}>
                        {service.tag}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.125rem, 2.2vw, 1.875rem)',
                        fontWeight: 700,
                        color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                        transition: 'color 0.2s ease',
                        marginBottom: '0.5rem',
                        overflowWrap: 'break-word',
                        wordBreak: 'break-word',
                      }}
                    >
                      {service.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-muted)',
                        fontWeight: 500,
                        marginBottom: isActive ? '1rem' : '0',
                        overflowWrap: 'break-word',
                        wordBreak: 'break-word',
                      }}
                    >
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: isActive ? 'var(--accent)' : 'rgba(255, 255, 255, 0.05)',
                      color: isActive ? '#0b0c0e' : 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '1rem',
                      flexShrink: 0,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {isActive ? '↗' : '→'}
                  </div>
                </div>

                {/* Expanded Content on Active */}
                {isActive && (
                  <div
                    style={{
                      marginTop: '1.25rem',
                      paddingTop: '1.25rem',
                      borderTop: '1px solid var(--border-subtle)',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
                      gap: '1.5rem',
                      width: '100%',
                      boxSizing: 'border-box',
                    }}
                    className="animate-fade-in"
                  >
                    {/* Description & Action */}
                    <div style={{ minWidth: 0 }}>
                      <p
                        style={{
                          fontSize: '0.9375rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.6,
                          marginBottom: '1.25rem',
                          overflowWrap: 'break-word',
                          wordBreak: 'break-word',
                        }}
                      >
                        {service.description}
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenModal();
                        }}
                        className="btn-primary"
                        style={{
                          padding: '0.625rem 1.25rem',
                          fontSize: '0.875rem',
                          whiteSpace: 'normal',
                          maxWidth: '100%',
                          textAlign: 'center',
                        }}
                      >
                        <span>Discuss {service.title.toLowerCase()}</span>
                        <span className="hover-arrow">↗</span>
                      </button>
                    </div>

                    {/* Key Deliverables List */}
                    <div style={{ minWidth: 0 }}>
                      <div
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          color: 'var(--text-muted)',
                          letterSpacing: '0.08em',
                          marginBottom: '0.75rem',
                        }}
                      >
                        Key Deliverables
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.625rem',
                          width: '100%',
                        }}
                      >
                        {service.deliverables.map((item, idx) => (
                          <div
                            key={idx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.625rem',
                              fontSize: '0.875rem',
                              color: 'var(--text-primary)',
                              lineHeight: 1.4,
                              overflowWrap: 'break-word',
                              wordBreak: 'break-word',
                              width: '100%',
                            }}
                          >
                            <span
                              style={{
                                color: 'var(--accent)',
                                fontWeight: 700,
                                flexShrink: 0,
                                lineHeight: 1.4,
                              }}
                            >
                              ✓
                            </span>
                            <span style={{ flex: 1, minWidth: 0 }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
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
