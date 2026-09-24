import React, { useState } from 'react';
import CataneSymbol from './CataneSymbol';
import { trackInquirySubmit, trackContactChannelClick } from '../utils/analytics';

export default function ProjectModal({ isOpen, onClose, source = 'unknown' }) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.contact.trim()) return;

    trackInquirySubmit('whatsapp', Boolean(formData.message.trim()));
    trackContactChannelClick('whatsapp', `modal_${source}`);

    const text = `Hello Catane,\n\nName / Business: ${formData.name}\nContact: ${formData.contact}\n\nProject Details:\n${formData.message || 'Not specified'}`;
    const whatsappUrl = `https://wa.me/917603833919?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.contact.trim()) return;

    trackInquirySubmit('email', Boolean(formData.message.trim()));
    trackContactChannelClick('email', `modal_${source}`);

    const subject = `Project Inquiry - ${formData.name}`;
    const body = `Name / Business: ${formData.name}\nContact: ${formData.contact}\n\nProject Details:\n${formData.message || 'Not specified'}`;
    const mailtoUrl = `mailto:catane.labs@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({ name: '', contact: '', message: '' });
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-medium)',
          borderRadius: 'var(--radius-lg)',
          maxWidth: '560px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2.5rem',
          position: 'relative',
          boxShadow: '0 30px 60px rgba(0,0,0,0.8)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
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
          aria-label="Close modal"
        >
          ✕
        </button>

        {submitted ? (
          /* Confirmation View */
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <CataneSymbol size={48} />
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.75rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '0.75rem',
              }}
            >
              Inquiry Initiated
            </h3>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '2rem',
                maxWidth: '440px',
                margin: '0 auto 2rem',
              }}
            >
              Thank you, <strong style={{ color: '#fff' }}>{formData.name}</strong>. Your inquiry has been prepared. If your app or tab did not open automatically, you can also reach us directly at <strong style={{ color: 'var(--accent)' }}>catane.labs@gmail.com</strong> or WhatsApp <strong style={{ color: 'var(--accent)' }}>+91 76038 33919</strong>.
            </p>
            <button onClick={resetForm} className="btn-primary">
              Return to Website ↗
            </button>
          </div>
        ) : (
          /* Form View */
          <form>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <CataneSymbol size={24} />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                START A PROJECT WITH CATANE
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '1.75rem',
              }}
            >
              Tell us about your project.
            </h3>

            {/* Input Fields */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.5rem' }}>
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.8125rem',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    marginBottom: '0.5rem',
                  }}
                >
                  Your Name / Business Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex (Apex Studio)"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    backgroundColor: 'var(--bg-dark)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.8125rem',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    marginBottom: '0.5rem',
                  }}
                >
                  Email or WhatsApp Number *
                </label>
                <input
                  type="text"
                  required
                  placeholder="catane.labs@gmail.com or +91 7603833919"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    backgroundColor: 'var(--bg-dark)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.8125rem',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    marginBottom: '0.5rem',
                  }}
                >
                  Project Details / Requirements
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe what you want to build or improve for your business..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    backgroundColor: 'var(--bg-dark)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="btn-primary"
                style={{ width: '100%', padding: '0.875rem', justifyContent: 'center' }}
              >
                <span>Send via WhatsApp ↗</span>
              </button>

              <button
                type="button"
                onClick={handleSendEmail}
                className="btn-secondary"
                style={{ width: '100%', padding: '0.875rem', justifyContent: 'center' }}
              >
                <span>Send via Email ↗</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
