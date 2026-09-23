import React, { useState } from 'react';

export default function ConceptWork({ onOpenModal }) {
  const [activeModalProject, setActiveModalProject] = useState(null);

  const projects = [
    {
      id: '01',
      title: 'OSTERIA — RESTAURANT & WINE BAR',
      category: 'Local Hospitality',
      caption:
        'Designed as a mobile-first experience for a local restaurant, with daily menus, table reservation triggers, location details, and direct WhatsApp contact immediately accessible.',
      tags: ['Mobile-First', 'Instant Reservations', 'WhatsApp Ordering'],
      previewColor: '#1a1614',
      accentColor: '#e07a5f',
      features: [
        'One-tap menu access optimized for low network connectivity',
        'Direct WhatsApp integration for instant party bookings',
        'Google Maps & location navigation with zero friction',
      ],
      details: {
        header: 'Osteria Artisanal Dining',
        heroText: 'Seasonal Tuscan Cuisine & Organic Wines',
        ctaText: 'Reserve Table via WhatsApp',
        items: ['Truffle Tagliatelle - €18', 'Bistecca alla Fiorentina - €34', 'Tiramisù Tradizionale - €8'],
      },
    },
    {
      id: '02',
      title: 'LUMINA STUDIO — ARCHITECTURE & PHOTOGRAPHY',
      category: 'Creative Portfolio',
      caption:
        'Minimalist editorial showcase for an architectural photography practice, placing maximum visual emphasis on high-resolution imagery and client inquiry flow.',
      tags: ['Minimalist Editorial', 'High-Res Masonry', 'Inquiry Workflow'],
      previewColor: '#11141a',
      accentColor: '#4ea8de',
      features: [
        'Lightning-fast image optimization and lazy loading',
        'Clean typographic layout with zero unnecessary clutter',
        'Custom client inquiry form with project scope selectors',
      ],
      details: {
        header: 'Lumina Architectural Photography',
        heroText: 'Documenting Modern Space & Light',
        ctaText: 'Request Studio Commission',
        items: ['Residential Projects', 'Commercial Architecture', 'Monographs & Press'],
      },
    },
    {
      id: '03',
      title: 'NORDIC TRAILS — BOUTIQUE TRAVEL & EXPEDITIONS',
      category: 'Travel & Local Experience',
      caption:
        'An immersive digital storefront for a boutique guided expedition group, combining bold typography with straightforward itinerary booking paths.',
      tags: ['Expedition Booking', 'Custom Itineraries', 'Multi-Language Ready'],
      previewColor: '#0f1816',
      accentColor: '#52b788',
      features: [
        'Clear daily breakdown of travel itineraries and gear needs',
        'Direct contact triggers for custom expedition requests',
        'Lightweight multi-lingual architecture framework',
      ],
      details: {
        header: 'Nordic Trails Expeditions',
        heroText: 'Small Group Arctic Wilderness Journeys',
        ctaText: 'Book 2026 Winter Expedition',
        items: ['Lofoten Archipelago Trek', 'Abisko Aurora Pursuit', 'Fjords Kayak Tour'],
      },
    },
  ];

  return (
    <section
      id="work"
      style={{
        paddingTop: '7rem',
        paddingBottom: '7rem',
        backgroundColor: 'var(--bg-dark)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        
        {/* Section Label */}
        <div className="section-label">Concept Work</div>

        {/* Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '1.5rem',
            marginBottom: '4rem',
          }}
        >
          <div>
            <h2
              className="editorial-subheading"
              style={{ color: 'var(--text-primary)', marginBottom: '0.75rem' }}
            >
              DESIGNED WITH<br />
              <span style={{ color: 'var(--accent)' }}>PURPOSE & PRECISION.</span>
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
              Exploratory concepts demonstrating how Catane approaches digital design across diverse business industries.
            </p>
          </div>

          <div className="concept-badge" style={{ padding: '0.375rem 0.875rem' }}>
            CONCEPT WORK — NOT CLIENT PROJECTS
          </div>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="card-quiet"
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
              }}
            >
              {/* Visual Mockup Header Box */}
              <div
                style={{
                  height: '240px',
                  backgroundColor: project.previewColor,
                  borderBottom: '1px solid var(--border-subtle)',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      color: project.accentColor,
                      letterSpacing: '0.1em',
                    }}
                  >
                    CONCEPT {project.id}
                  </span>
                  <span
                    style={{
                      fontSize: '0.6875rem',
                      color: 'var(--text-muted)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      padding: '0.15rem 0.5rem',
                      borderRadius: '4px',
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Internal Card Preview Title */}
                <div>
                  <h4
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '0.375rem',
                    }}
                  >
                    {project.details.header}
                  </h4>
                  <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.7)' }}>
                    {project.details.heroText}
                  </p>
                </div>

                {/* Action button inside preview */}
                <button
                  onClick={() => setActiveModalProject(project)}
                  style={{
                    alignSelf: 'flex-start',
                    padding: '0.375rem 0.875rem',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: '#fff',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = project.accentColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
                >
                  Interactive Preview ↗
                </button>
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  justifyContent: 'space-between',
                  gap: '1.5rem',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.9375rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '1.25rem',
                    }}
                  >
                    "{project.caption}"
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.75rem',
                          padding: '0.2rem 0.625rem',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid var(--border-subtle)',
                          color: 'var(--text-muted)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    paddingTop: '1.25rem',
                    borderTop: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="btn-ghost"
                  >
                    View concept breakdown ↗
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Preview for Concept Projects */}
        {activeModalProject && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(12px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
            onClick={() => setActiveModalProject(null)}
          >
            <div
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-lg)',
                maxWidth: '680px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '2.5rem',
                position: 'relative',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                }}
              >
                ✕
              </button>

              <div style={{ marginBottom: '1.5rem' }}>
                <span className="concept-badge">
                  CONCEPT {activeModalProject.id} — NOT A CLIENT PROJECT
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    marginTop: '0.75rem',
                    marginBottom: '0.375rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  {activeModalProject.title}
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                  {activeModalProject.caption}
                </p>
              </div>

              {/* Interactive Mock Preview Box */}
              <div
                style={{
                  backgroundColor: activeModalProject.previewColor,
                  border: '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-md)',
                  padding: '2rem',
                  marginBottom: '1.75rem',
                }}
              >
                <div style={{ fontSize: '0.75rem', color: activeModalProject.accentColor, fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Hypothetical Interface Concept
                </div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
                  {activeModalProject.details.heroText}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', margin: '1rem 0' }}>
                  {activeModalProject.details.items.map((item, idx) => (
                    <div key={idx} style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)', padding: '0.375rem 0.75rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                      {item}
                    </div>
                  ))}
                </div>
                <button
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: activeModalProject.accentColor,
                    color: '#0b0c0e',
                    border: 'none',
                    borderRadius: 'var(--radius-pill)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                  }}
                >
                  {activeModalProject.details.ctaText}
                </button>
              </div>

              {/* Key Features */}
              <div style={{ marginBottom: '2rem' }}>
                <h5 style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  Architectural Highlights
                </h5>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {activeModalProject.features.map((feat, idx) => (
                    <li key={idx} style={{ fontSize: '0.9375rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--accent)' }}>•</span> {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                  onClick={() => {
                    setActiveModalProject(null);
                    onOpenModal();
                  }}
                  className="btn-primary"
                  style={{ flex: 1 }}
                >
                  Build a similar solution for your business ↗
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
