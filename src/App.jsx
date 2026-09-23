import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Process from './components/Process';
import WhyCatane from './components/WhyCatane';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg-dark)' }}>
      {/* Background Grid Pattern Overlay */}
      <div className="bg-grid-overlay" />

      {/* Main Navigation */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Hero Section with Interactive Canvas */}
      <Hero onOpenModal={handleOpenModal} />

      {/* Problem & Brand Philosophy */}
      <Philosophy />

      {/* Services & Capabilities */}
      <Services onOpenModal={handleOpenModal} />

      {/* How Catane Works (Development Stages) */}
      <Process />

      {/* Why Catane Principles */}
      <WhyCatane />

      {/* Final Action CTA */}
      <FinalCTA onOpenModal={handleOpenModal} />

      {/* Footer */}
      <Footer />

      {/* Interactive Project Inquiry Modal */}
      <ProjectModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
