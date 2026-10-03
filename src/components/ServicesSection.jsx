import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, HardHat, Check, ArrowRight, X } from 'lucide-react';

const civilModal = {
  label: 'SERVICE 02',
  title: 'Civil Construction',
  description: 'From reinforced concrete structures to civil infrastructure design, we provide complete detailing, drawing production, and engineering support for commercial, industrial, and institutional projects across India and globally.',
  deliverables: [
    'Reinforced Concrete Structural Detailing',
    'Foundation Design & Pile Cap Drawings',
    'Retaining Wall & Basement Structure Detailing',
    'Beam, Column & Slab Reinforcement Drawings',
    'Pre-stressed & Post-tensioned Concrete Detailing',
    'Site Layout & Grading Plans',
    'Infrastructure & Road Design Support',
    'Quantity Take-Off & BOQ Preparation',
  ],
  standards: 'IS 456, ACI 318, BS 8110, OSHA Safety Codes',
  software: 'AutoCAD, Revit Structure, STAAD.Pro',
};

export default function ServicesSection({ onSelectServiceForQuote }) {
  const navigate = useNavigate();

  return (
    <section id="services" className="section services-master-section">
      <div className="ambient-glow ambient-cyan" style={{ top: '10%', right: '-5%', width: '500px', height: '500px', opacity: 0.08 }} />
      <div className="ambient-glow ambient-indigo" style={{ top: '55%', left: '-5%', width: '550px', height: '550px', opacity: 0.08 }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>

        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="section-badge">
            <Building2 size={14} />
            <span>WHAT WE OFFER</span>
          </div>
          <h2 className="section-title">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive structural solutions from concept to fabrication — engineered for precision, speed, and 100% code compliance.
          </p>
        </div>

        {/* Two Service Cards */}
        <div className="services-hero-grid">

          {/* ── Steel Detailing Card ── */}
          <div onClick={() => navigate('/steel-detailing')} className="service-hero-card svc-card-steel">
            <div className="svc-bg" style={{ backgroundImage: 'url(/images/service-plant.jpg)' }} />
            <div className="svc-code svc-code-cyan">SERVICE 01</div>
            <div className="svc-icon-box svc-icon-cyan"><Building2 className="svc-svg" /></div>
            <h3 className="svc-title">Steel <span className="svc-title-line2">Detailing</span></h3>
            <p className="svc-desc">Fabrication-ready shop &amp; erection drawings with zero-clash accuracy.</p>
            <div className="svc-list">
              {['Structural Steel Detailing', 'Steel Design & Engineering', 'Estimation & MTO', 'Misc. Metals', 'Joist & Deck'].map((d, i) => (
                <div key={i} className="svc-list-item">
                  <Check size={11} className="svc-check-cyan" style={{ flexShrink: 0 }} />
                  <span>{d}</span>
                </div>
              ))}
            </div>
            <div className="svc-cta svc-cta-cyan"><span>Explore</span><ArrowRight size={13} /></div>
          </div>

          {/* ── Civil Construction Card ── */}
          <div onClick={() => navigate('/civil-construction')} className="service-hero-card svc-card-civil">
            <div className="svc-bg" style={{ backgroundImage: 'url(/images/service-arch.jpg)' }} />
            <div className="svc-code svc-code-indigo">SERVICE 02</div>
            <div className="svc-icon-box svc-icon-indigo"><HardHat className="svc-svg" /></div>
            <h3 className="svc-title">Civil <span className="svc-title-line2">Construction</span></h3>
            <p className="svc-desc">End-to-end civil &amp; concrete structural solutions for modern projects.</p>
            <div className="svc-list">
              {['RC Structural Detailing', 'Foundation Design', 'Beam & Slab Drawings', 'Concrete Detailing', 'BOQ Preparation'].map((d, i) => (
                <div key={i} className="svc-list-item">
                  <Check size={11} className="svc-check-indigo" style={{ flexShrink: 0 }} />
                  <span>{d}</span>
                </div>
              ))}
            </div>
            <div className="svc-cta svc-cta-indigo"><span>Explore</span><ArrowRight size={13} /></div>
          </div>

        </div>
      </div>

      <style>{`
        /* ─── Grid: always 2 columns ─── */
        .services-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.85rem;
          margin-top: 1.5rem;
        }
        @media (min-width: 768px) {
          .services-hero-grid { gap: 2rem; margin-top: 2rem; }
        }

        /* ─── Card base ─── */
        .service-hero-card {
          border-radius: var(--radius-xl);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease;
          padding: 1.1rem 0.9rem;
          display: flex;
          flex-direction: column;
        }
        @media (min-width: 768px) {
          .service-hero-card { padding: 2.5rem 2rem; }
        }

        /* Colours */
        .svc-card-steel {
          background: linear-gradient(135deg, rgba(6,182,212,0.15) 0%, rgba(59,130,246,0.08) 100%);
          border: 1px solid rgba(6,182,212,0.4);
        }
        .svc-card-civil {
          background: linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(168,85,247,0.08) 100%);
          border: 1px solid rgba(99,102,241,0.4);
        }

        /* BG image */
        .svc-bg {
          position: absolute; inset: 0;
          background-size: cover; background-position: center;
          opacity: 0.06; pointer-events: none;
        }

        /* Code label */
        .svc-code {
          font-size: 0.55rem;
          font-family: var(--font-mono);
          letter-spacing: 1.5px;
          margin-bottom: 0.6rem;
          position: relative;
        }
        @media (min-width: 768px) {
          .svc-code { font-size: 0.72rem; margin-bottom: 1.5rem; }
        }
        .svc-code-cyan   { color: var(--color-cyan-bright); }
        .svc-code-indigo { color: #a5b4fc; }

        /* Icon box */
        .svc-icon-box {
          width: 36px; height: 36px;
          border-radius: 9px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 0.65rem; position: relative; flex-shrink: 0;
        }
        @media (min-width: 768px) {
          .svc-icon-box { width: 70px; height: 70px; border-radius: 16px; margin-bottom: 1.5rem; }
        }
        .svc-icon-cyan   { background: rgba(6,182,212,0.12); border: 1px solid rgba(6,182,212,0.25); color: var(--color-cyan-bright); }
        .svc-icon-indigo { background: rgba(99,102,241,0.12); border: 1px solid rgba(99,102,241,0.25); color: #a5b4fc; }
        .svc-svg { width: 20px; height: 20px; }
        @media (min-width: 768px) { .svc-svg { width: 40px; height: 40px; } }

        /* Title */
        .svc-title {
          font-size: 0.95rem; font-weight: 700; color: #fff;
          margin-bottom: 0.4rem; position: relative; line-height: 1.2;
        }
        @media (min-width: 768px) {
          .svc-title { font-size: 1.6rem; margin-bottom: 0.75rem; }
        }
        .svc-title-line2 { display: block; }
        @media (min-width: 480px) { .svc-title-line2 { display: inline; } }

        /* Description — hidden below 420px */
        .svc-desc {
          color: var(--text-muted); font-size: 0.75rem;
          line-height: 1.5; margin-bottom: 0.65rem; position: relative;
          display: none;
        }
        @media (min-width: 420px) { .svc-desc { display: block; } }
        @media (min-width: 768px) { .svc-desc { font-size: 0.95rem; margin-bottom: 2rem; } }

        /* List */
        .svc-list {
          display: flex; flex-direction: column;
          gap: 0.28rem; margin-bottom: 0.75rem; position: relative;
        }
        @media (min-width: 768px) { .svc-list { gap: 0.5rem; margin-bottom: 2rem; } }
        .svc-list-item {
          display: flex; align-items: center; gap: 0.3rem;
          font-size: 0.68rem; color: #94a3b8;
        }
        @media (min-width: 768px) { .svc-list-item { font-size: 0.85rem; gap: 0.5rem; } }
        /* Show only 3 items on mobile */
        .svc-list .svc-list-item:nth-child(n+4) { display: none; }
        @media (min-width: 480px) { .svc-list .svc-list-item:nth-child(n+4) { display: flex; } }
        .svc-check-cyan   { color: var(--color-cyan-bright); }
        .svc-check-indigo { color: #a5b4fc; }

        /* CTA */
        .svc-cta {
          display: inline-flex; align-items: center; gap: 0.3rem;
          font-weight: 600; font-size: 0.75rem;
          position: relative; margin-top: auto;
        }
        @media (min-width: 768px) { .svc-cta { font-size: 0.95rem; gap: 0.5rem; } }
        .svc-cta-cyan   { color: var(--color-cyan-bright); }
        .svc-cta-indigo { color: #a5b4fc; }

        /* Hover */
        .service-hero-card:hover { transform: translateY(-5px) scale(1.02); }
        .svc-card-steel:hover { box-shadow: 0 18px 36px -10px rgba(6,182,212,0.3); border-color: rgba(6,182,212,0.7) !important; }
        .svc-card-civil:hover { box-shadow: 0 18px 36px -10px rgba(99,102,241,0.3); border-color: rgba(99,102,241,0.7) !important; }
      `}</style>
    </section>
  );
}
