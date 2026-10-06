import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, ArrowRight } from 'lucide-react';

export default function ProjectsShowcase({ onOpenQuoteModal }) {
  const navigate = useNavigate();

  return (
    <section id="projects" className="section services-master-section">
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>

        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="section-badge">
            <Building2 size={14} />
            <span>OUR PORTFOLIO</span>
          </div>
          <h2 className="section-title">
            Our <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Explore our extensive portfolio of structural detailing and engineering projects.
          </p>
        </div>

        {/* Single Project Card */}
        <div className="services-hero-grid" style={{ gridTemplateColumns: '1fr', maxWidth: '800px', margin: '0 auto' }}>
          
          {/* ⚡ Project Detailing Card ⚡ */}
          <div onClick={() => navigate('/projects')} className="service-hero-card svc-card-steel">
            <div className="svc-bg" style={{ backgroundImage: 'url(/images/service-warehouse.jpg)' }} />
            <div className="svc-code svc-code-cyan">PORTFOLIO</div>
            <div className="svc-icon-box svc-icon-cyan"><Building2 className="svc-svg" /></div>
            <h3 className="svc-title">Project <span className="svc-title-line2">Portfolio</span></h3>
            <p className="svc-desc">Explore our completed detailing and engineering projects across various industries.</p>
            <div className="svc-list" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
              <div className="svc-list-item"><span>Commercial Projects</span></div>
              <div className="svc-list-item"><span>Industrial Projects</span></div>
              <div className="svc-list-item"><span>Infrastructure Projects</span></div>
            </div>
            <div className="svc-cta svc-cta-cyan"><span>View Projects</span><ArrowRight size={13} /></div>
          </div>

        </div>
      </div>
    </section>
  );
}
