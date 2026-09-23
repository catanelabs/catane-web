import React, { useState } from 'react';

export default function InteractiveDemo() {
  const [viewMode, setViewMode] = useState('after'); // 'before' | 'after'
  const [deviceMode, setDeviceMode] = useState('desktop'); // 'desktop' | 'mobile'

  return (
    <section
      id="demo"
      style={{
        paddingTop: '7rem',
        paddingBottom: '7rem',
        backgroundColor: 'var(--bg-dark)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        
        {/* Section Label */}
        <div className="section-label">Interactive Demonstration</div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginBottom: '3rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
            }}
          >
            <div>
              <h2
                className="editorial-subheading"
                style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}
              >
                THE DIFFERENCE A<br />
                <span style={{ color: 'var(--accent)' }}>DESIGN SYSTEM MAKES.</span>
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
                Compare an unoptimized local web presence against a modern Catane mobile-first experience.
              </p>
            </div>

            {/* Catane Concept Badge */}
            <span className="concept-badge">CATANE CONCEPT DEMO</span>
          </div>
        </div>

        {/* Controls Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            backgroundColor: 'var(--bg-card)',
            padding: '1rem 1.5rem',
            borderRadius: 'var(--radius-md) var(--radius-md) 0 0',
            border: '1px solid var(--border-subtle)',
            borderBottom: 'none',
          }}
        >
          {/* Before / After Toggle Buttons */}
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginRight: '0.5rem',
              }}
            >
              State:
            </span>
            <button
              onClick={() => setViewMode('before')}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-sm)',
                border: viewMode === 'before' ? '1px solid #e53e3e' : '1px solid var(--border-subtle)',
                backgroundColor: viewMode === 'before' ? 'rgba(229, 62, 62, 0.15)' : 'transparent',
                color: viewMode === 'before' ? '#fc8181' : 'var(--text-secondary)',
                fontFamily: 'var(--font-display)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              BEFORE: Outdated Web Presence
            </button>
            <button
              onClick={() => setViewMode('after')}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-sm)',
                border: viewMode === 'after' ? '1px solid var(--accent)' : '1px solid var(--border-subtle)',
                backgroundColor: viewMode === 'after' ? 'rgba(244, 106, 37, 0.15)' : 'transparent',
                color: viewMode === 'after' ? 'var(--accent)' : 'var(--text-secondary)',
                fontFamily: 'var(--font-display)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              AFTER: Catane Mobile-First Site
            </button>
          </div>

          {/* Viewport Device Toggle */}
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginRight: '0.5rem',
              }}
            >
              Viewport:
            </span>
            <button
              onClick={() => setDeviceMode('desktop')}
              style={{
                padding: '0.375rem 0.875rem',
                borderRadius: 'var(--radius-sm)',
                border: deviceMode === 'desktop' ? '1px solid var(--border-medium)' : '1px solid transparent',
                backgroundColor: deviceMode === 'desktop' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                color: deviceMode === 'desktop' ? 'var(--text-primary)' : 'var(--text-muted)',
                fontSize: '0.8125rem',
                cursor: 'pointer',
              }}
            >
              🖥 Desktop Frame
            </button>
            <button
              onClick={() => setDeviceMode('mobile')}
              style={{
                padding: '0.375rem 0.875rem',
                borderRadius: 'var(--radius-sm)',
                border: deviceMode === 'mobile' ? '1px solid var(--border-medium)' : '1px solid transparent',
                backgroundColor: deviceMode === 'mobile' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                color: deviceMode === 'mobile' ? 'var(--text-primary)' : 'var(--text-muted)',
                fontSize: '0.8125rem',
                cursor: 'pointer',
              }}
            >
              📱 Mobile View
            </button>
          </div>
        </div>

        {/* Main Display Browser/Device Frame */}
        <div
          style={{
            backgroundColor: '#07080a',
            border: '1px solid var(--border-subtle)',
            borderRadius: '0 0 var(--radius-md) var(--radius-md)',
            overflow: 'hidden',
            padding: deviceMode === 'mobile' ? '2.5rem 1rem' : '0',
            display: 'flex',
            justifyContent: 'center',
            minHeight: '480px',
            position: 'relative',
          }}
        >
          {/* Browser Top Window Bar (for Desktop mode) */}
          {deviceMode === 'desktop' && (
            <div
              style={{
                width: '100%',
                backgroundColor: '#121418',
                borderBottom: '1px solid var(--border-subtle)',
                padding: '0.625rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 10,
              }}
            >
              <div style={{ display: 'flex', gap: '0.375rem' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
              </div>
              <div
                style={{
                  flex: 1,
                  backgroundColor: '#0b0c0e',
                  borderRadius: '4px',
                  padding: '0.2rem 0.75rem',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'monospace',
                  textAlign: 'center',
                }}
              >
                {viewMode === 'before'
                  ? 'http://old-hypothetical-bakery-1999.geocities-example.com'
                  : 'https://artisanbakery.catane.concept'}
              </div>
            </div>
          )}

          {/* Device Frame Inner Content */}
          <div
            style={{
              width: deviceMode === 'mobile' ? '360px' : '100%',
              maxWidth: '100%',
              marginTop: deviceMode === 'desktop' ? '37px' : '0',
              border: deviceMode === 'mobile' ? '12px solid #1e222b' : 'none',
              borderRadius: deviceMode === 'mobile' ? '32px' : '0',
              backgroundColor: viewMode === 'before' ? '#ffffff' : '#0b0c0e',
              color: viewMode === 'before' ? '#000000' : '#f4f4f0',
              padding: '2rem 1.5rem',
              transition: 'all 0.4s ease',
              minHeight: '440px',
              position: 'relative',
              boxShadow: deviceMode === 'mobile' ? '0 25px 50px rgba(0,0,0,0.8)' : 'none',
            }}
          >
            {/* BEFORE: Outdated Web Presence */}
            {viewMode === 'before' ? (
              <div style={{ fontFamily: 'Times New Roman, serif', color: '#111' }}>
                <div style={{ backgroundColor: '#000080', color: '#ffff00', padding: '0.5rem', textAlign: 'center', fontSize: '14px', fontWeight: 'bold' }}>
                  *** WELCOME TO OUR BAKERY WEBSITE ***
                </div>
                <h2 style={{ color: '#800000', marginTop: '1rem', fontSize: '20px' }}>Artisan Bakery & Cafe (Est 2004)</h2>
                <marquee style={{ color: '#008000', fontSize: '12px', margin: '0.5rem 0' }}>Special discount on sourdough this week only! Call now!</marquee>
                <div style={{ border: '1px solid #ccc', padding: '0.75rem', margin: '1rem 0', fontSize: '13px' }}>
                  <p>We are open Monday - Saturday. We make fresh bread every morning at 5 AM. Please do not email us as we don't check email often.</p>
                  <p style={{ marginTop: '0.5rem' }}>Phone: 555-0199 (Ask for Dave)</p>
                </div>
                <div style={{ fontSize: '11px', color: '#666', marginTop: '2rem', fontStyle: 'italic' }}>
                  Best viewed in Internet Explorer 6.0 at 800x600 resolution. Site last updated: Oct 2012.
                </div>
              </div>
            ) : (
              /* AFTER: Catane Concept Modern Mobile-First Site */
              <div style={{ fontFamily: 'var(--font-body)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.125rem', letterSpacing: '-0.02em', color: '#fff' }}>
                    ARTISAN <span style={{ color: 'var(--accent)' }}>BAKERY</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', borderRadius: '4px', backgroundColor: 'rgba(254, 254, 250, 0.1)', color: 'var(--text-secondary)' }}>
                    Open Today till 6 PM
                  </span>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    Fresh Daily
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, lineHeight: 1.15, marginBottom: '0.5rem', color: '#fff' }}>
                    Handcrafted Organic Sourdough & Pastries.
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    Order online for instant local pickup or reserve catering platters for your business events.
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                  <button
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: 'var(--accent)',
                      color: '#0b0c0e',
                      border: 'none',
                      borderRadius: 'var(--radius-pill)',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '0.8125rem',
                      cursor: 'pointer',
                    }}
                  >
                    View Today's Menu ↗
                  </button>
                  <button
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      color: '#fff',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-pill)',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: '0.8125rem',
                      cursor: 'pointer',
                    }}
                  >
                    WhatsApp Order 💬
                  </button>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0.75rem',
                    padding: '0.875rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.75rem',
                  }}
                >
                  <div>
                    <div style={{ color: 'var(--text-muted)', marginBottom: '0.15rem' }}>Location</div>
                    <div style={{ color: '#fff', fontWeight: 600 }}>42 Market St, Downtown</div>
                  </div>
                  <div>
                    <div style={{ color: 'var(--text-muted)', marginBottom: '0.15rem' }}>Speed</div>
                    <div style={{ color: '#48bb78', fontWeight: 600 }}>⚡ 0.4s Fast Load</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
