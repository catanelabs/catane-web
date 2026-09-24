import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Process from './components/Process';
import WhyCatane from './components/WhyCatane';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import {
  trackInquiryModalOpen,
  trackInquiryModalClose,
  trackSectionView,
  trackScrollDepth,
} from './utils/analytics';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('unknown');

  const handleOpenModal = (source = 'unknown') => {
    const sourceStr = typeof source === 'string' ? source : 'button_click';
    setModalSource(sourceStr);
    setIsModalOpen(true);
    trackInquiryModalOpen(sourceStr);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    trackInquiryModalClose();
  };

  // Scroll Depth & Section View Tracking
  useEffect(() => {
    const trackedSections = new Set();
    const trackedDepths = new Set();

    // 1. Section View Intersection Observer
    const sectionIds = ['philosophy', 'services', 'process', 'why-catane', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id && !trackedSections.has(id)) {
              trackedSections.add(id);
              trackSectionView(id);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // 2. Scroll Depth Listener
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);

      const milestones = [25, 50, 75, 90];
      milestones.forEach((percent) => {
        if (scrollPercent >= percent && !trackedDepths.has(percent)) {
          trackedDepths.add(percent);
          trackScrollDepth(percent);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg-dark)' }}>
      {/* Background Grid Pattern Overlay */}
      <div className="bg-grid-overlay" />

      {/* Main Navigation */}
      <Navbar onOpenModal={() => handleOpenModal('navbar')} />

      {/* Hero Section with Interactive Canvas */}
      <Hero onOpenModal={() => handleOpenModal('hero')} />

      {/* Problem & Brand Philosophy */}
      <Philosophy />

      {/* Services & Capabilities */}
      <Services onOpenModal={(src) => handleOpenModal(src || 'services')} />

      {/* How Catane Works (Development Stages) */}
      <Process />

      {/* Why Catane Principles */}
      <WhyCatane />

      {/* Final Action CTA */}
      <FinalCTA onOpenModal={() => handleOpenModal('final_cta')} />

      {/* Footer */}
      <Footer />

      {/* Interactive Project Inquiry Modal */}
      <ProjectModal isOpen={isModalOpen} onClose={handleCloseModal} source={modalSource} />
    </div>
  );
}

