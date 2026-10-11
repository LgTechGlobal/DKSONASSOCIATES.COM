import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, 
  HardHat, 
  Check, 
  ArrowRight, 
  Maximize2, 
  ChevronLeft, 
  Layers,
  X 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Optimized Steel Detailing Portfolio images
import img1 from '../assets/Project Portfolio/1-opt.jpg';
import img2 from '../assets/Project Portfolio/2-opt.jpg';
import img3 from '../assets/Project Portfolio/3-opt.jpg';
import img4 from '../assets/Project Portfolio/4-opt.jpg';
import img5 from '../assets/Project Portfolio/5-opt.jpg';
import img6 from '../assets/Project Portfolio/6-opt.jpg';
import img7 from '../assets/Project Portfolio/7-opt.jpg';
import img8 from '../assets/Project Portfolio/8-opt.jpg';

const steelProjects = [
  { id: 'steel-1', title: 'Industrial Plant Detailing', category: 'Industrial', image: img1 },
  { id: 'steel-2', title: 'Commercial Office Tower', category: 'Commercial', image: img2 },
  { id: 'steel-3', title: 'Warehouse Structure', category: 'Industrial', image: img3 },
  { id: 'steel-4', title: 'Infrastructure Project', category: 'Infrastructure', image: img4 },
  { id: 'steel-5', title: 'Healthcare Facility', category: 'Commercial', image: img5 },
  { id: 'steel-6', title: 'Manufacturing Plant', category: 'Industrial', image: img6 },
  { id: 'steel-7', title: 'Logistics Hub', category: 'Commercial', image: img7 },
  { id: 'steel-8', title: 'Specialty Steel Structure', category: 'Specialty', image: img8 }
];

const civilProjects = [
  { id: 'civil-1', title: 'Site Preparation & Groundwork', category: 'Site Prep', image: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  { id: 'civil-2', title: 'RCC Superstructure & Framework', category: 'Superstructure', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  { id: 'civil-3', title: 'Finishing & Utilities Infrastructure', category: 'Finishing', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  // { id: 'civil-4', title: 'Residential Development Complex', category: 'Residential', image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  { id: 'civil-5', title: 'Commercial Business Infrastructure', category: 'Commercial', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  { id: 'civil-6', title: 'Industrial Facility & Quality Execution', category: 'Industrial', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' }
];

export default function ProjectsPage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('steel'); // 'steel' | 'civil'
  const [previewImage, setPreviewImage] = useState(null);
  const galleryRef = useRef(null);

  const currentProjects = activeCategory === 'steel' ? steelProjects : civilProjects;

  const handleSelectCategory = (cat) => {
    setActiveCategory(cat);
    if (galleryRef.current) {
      setTimeout(() => {
        galleryRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
    }
  };

  return (
    <div className="app-root">
      <Navbar onOpenQuoteModal={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 300); }} />
      <main>
        <section className="section services-master-section" style={{ paddingTop: '1.5rem', minHeight: '85vh' }}>
          <div className="ambient-glow ambient-cyan" style={{ top: '10%', right: '-5%', width: '500px', height: '500px', opacity: 0.08 }} />
          <div className="ambient-glow ambient-indigo" style={{ top: '55%', left: '-5%', width: '550px', height: '550px', opacity: 0.08 }} />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>

            {/* Back Button */}
            <button
              onClick={() => navigate('/')}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.3)',
                color: 'var(--color-cyan-bright)', borderRadius: '8px',
                padding: '0.6rem 1.2rem', fontSize: '0.9rem', cursor: 'pointer',
                marginBottom: '2rem', transition: 'all 0.3s ease',
              }}
            >
              <ChevronLeft size={16} />
              Back to Home
            </button>

            {/* Section Header */}
            <div className="section-title-wrap">
              <div className="section-badge">
                <Layers size={14} />
                <span>PROJECT PORTFOLIO</span>
              </div>
              <h2 className="section-title">
                Our <span className="text-gradient">Projects</span>
              </h2>
              <p className="section-subtitle">
                Explore our completed projects across Structural Steel Detailing and Civil Construction — engineered for precision, quality, and complete code compliance.
              </p>
            </div>

            {/* ─── Two Service-Style Cards (Exact like Services Section) ─── */}
            <div className="services-hero-grid">

              {/* ── Steel Detailing Card ── */}
              <div 
                onClick={() => handleSelectCategory('steel')} 
                className={`service-hero-card svc-card-steel ${activeCategory === 'steel' ? 'is-active' : ''}`}
                style={{
                  outline: activeCategory === 'steel' ? '2px solid var(--color-cyan-bright)' : 'none',
                  boxShadow: activeCategory === 'steel' ? '0 10px 30px rgba(6,182,212,0.35)' : 'none'
                }}
              >
                <div className="svc-bg" style={{ backgroundImage: 'url(/images/service-plant.jpg)' }} />
                <div className="svc-code svc-code-cyan">PORTFOLIO 01</div>
                <div className="svc-icon-box svc-icon-cyan"><Building2 className="svc-svg" /></div>
                <h3 className="svc-title">Steel <span className="svc-title-line2">Detailing</span></h3>
                <p className="svc-desc">Fabrication-ready shop &amp; erection models with zero-clash accuracy.</p>
                <div className="svc-list">
                  {['Structural Steel Detailing', 'Steel Design & Engineering', 'Estimation & MTO', 'Misc. Metals', 'Industrial & Commercial'].map((d, i) => (
                    <div key={i} className="svc-list-item">
                      <Check size={11} className="svc-check-cyan" style={{ flexShrink: 0 }} />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
                <div className="svc-cta svc-cta-cyan">
                  <span>{activeCategory === 'steel' ? 'Viewing Projects' : 'Explore Projects'}</span>
                  <ArrowRight size={13} />
                </div>
              </div>

              {/* ── Civil Construction Card ── */}
              <div 
                onClick={() => handleSelectCategory('civil')} 
                className={`service-hero-card svc-card-civil ${activeCategory === 'civil' ? 'is-active' : ''}`}
                style={{
                  outline: activeCategory === 'civil' ? '2px solid #818cf8' : 'none',
                  boxShadow: activeCategory === 'civil' ? '0 10px 30px rgba(99,102,241,0.35)' : 'none'
                }}
              >
                <div className="svc-bg" style={{ backgroundImage: 'url(/images/service-arch.jpg)' }} />
                <div className="svc-code svc-code-indigo">PORTFOLIO 02</div>
                <div className="svc-icon-box svc-icon-indigo"><HardHat className="svc-svg" /></div>
                <h3 className="svc-title">Civil <span className="svc-title-line2">Construction</span></h3>
                <p className="svc-desc">End-to-end civil &amp; concrete structural solutions for modern projects.</p>
                <div className="svc-list">
                  {['RC Structural Detailing', 'Foundation Design', 'Beam & Slab Drawings', 'Superstructure Framing', 'Site Infrastructure'].map((d, i) => (
                    <div key={i} className="svc-list-item">
                      <Check size={11} className="svc-check-indigo" style={{ flexShrink: 0 }} />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
                <div className="svc-cta svc-cta-indigo">
                  <span>{activeCategory === 'civil' ? 'Viewing Projects' : 'Explore Projects'}</span>
                  <ArrowRight size={13} />
                </div>
              </div>

            </div>

            {/* ─── Gallery Section Header & Category Switcher ─── */}
            <div 
              ref={galleryRef}
              style={{
                marginTop: '4rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(148,163,184,0.12)',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
                  <span 
                    style={{
                      background: activeCategory === 'steel' ? 'rgba(6,182,212,0.15)' : 'rgba(99,102,241,0.15)',
                      color: activeCategory === 'steel' ? 'var(--color-cyan-bright)' : '#a5b4fc',
                      border: `1px solid ${activeCategory === 'steel' ? 'rgba(6,182,212,0.35)' : 'rgba(99,102,241,0.35)'}`,
                      padding: '0.25rem 0.65rem',
                      borderRadius: '999px',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    {activeCategory === 'steel' ? 'STEEL DETAILING' : 'CIVIL CONSTRUCTION'}
                  </span>
                  <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
                    ({currentProjects.length} Projects)
                  </span>
                </div>
                <h3 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 700, margin: 0 }}>
                  {activeCategory === 'steel' ? 'Structural Steel Project Gallery' : 'Civil Construction Project Gallery'}
                </h3>
              </div>

              {/* Direct Tab Pill Toggles */}
              <div style={{ display: 'flex', gap: '0.5rem', background: 'rgba(15,23,42,0.6)', padding: '4px', borderRadius: '10px', border: '1px solid rgba(148,163,184,0.15)' }}>
                <button
                  onClick={() => handleSelectCategory('steel')}
                  style={{
                    padding: '0.55rem 1.1rem',
                    borderRadius: '7px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    background: activeCategory === 'steel' ? 'linear-gradient(135deg, rgba(6,182,212,0.3), rgba(59,130,246,0.3))' : 'transparent',
                    color: activeCategory === 'steel' ? '#fff' : '#94a3b8',
                    outline: activeCategory === 'steel' ? '1px solid rgba(6,182,212,0.5)' : 'none',
                    transition: 'all 0.25s ease'
                  }}
                >
                  Steel Detailing ({steelProjects.length})
                </button>
                <button
                  onClick={() => handleSelectCategory('civil')}
                  style={{
                    padding: '0.55rem 1.1rem',
                    borderRadius: '7px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    background: activeCategory === 'civil' ? 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(168,85,247,0.3))' : 'transparent',
                    color: activeCategory === 'civil' ? '#fff' : '#94a3b8',
                    outline: activeCategory === 'civil' ? '1px solid rgba(99,102,241,0.5)' : 'none',
                    transition: 'all 0.25s ease'
                  }}
                >
                  Civil Construction ({civilProjects.length})
                </button>
              </div>
            </div>

            {/* ─── Responsive Image Grid ─── */}
            <div 
              className="projects-image-grid" 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '2rem',
                marginTop: '2rem'
              }}
            >
              {currentProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="service-sliding-card card-fade-up card-arrived"
                  style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
                >
                  <div className="service-dual-img-card group" style={{ minHeight: '320px', height: '100%' }}>
                    <div className="service-dual-img-inner">
                      <img
                        src={project.image}
                        // alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="service-dual-img"
                      />
                      <div className="service-dual-img-overlay" />
                      <div className="service-dual-img-footer" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.82rem', color: '#e2e8f0', fontWeight: 500, textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
                          {/* {project.title} */}
                        </span>
                        <button
                          className="service-dual-expand-btn"
                          title="Inspect full visual"
                          onClick={() => setPreviewImage({ url: project.image })}
                        >
                          <Maximize2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </main>

      <Footer />

      {/* ─── Lightbox Modal ─── */}
      {previewImage && (
        <div className="modal-overlay" onClick={() => setPreviewImage(null)}>
          <div className="modal-card dkson-img-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setPreviewImage(null)}>
              <X size={24} />
            </button>
            <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.25rem', textAlign: 'center' }}>
              {previewImage.title}
            </h3>
            <img 
              src={previewImage.url} 
              alt={previewImage.title} 
              style={{ width: '100%', maxHeight: '70vh', objectFit: 'contain', borderRadius: 'var(--radius-lg)' }} 
            />
          </div>
        </div>
      )}

      {/* ─── Exact Services Hero Grid Styling ─── */}
      <style>{`
        .services-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.85rem;
          margin-top: 1.5rem;
        }
        @media (min-width: 768px) {
          .services-hero-grid { gap: 2rem; margin-top: 2rem; }
        }

        .service-hero-card {
          border-radius: var(--radius-xl);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease, border-color 0.3s ease;
          padding: 1.1rem 0.9rem;
          display: flex;
          flex-direction: column;
        }
        @media (min-width: 768px) {
          .service-hero-card { padding: 2.5rem 2rem; }
        }

        .svc-card-steel {
          background: linear-gradient(135deg, rgba(6,182,212,0.15) 0%, rgba(59,130,246,0.08) 100%);
          border: 1px solid rgba(6,182,212,0.4);
        }
        .svc-card-civil {
          background: linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(168,85,247,0.08) 100%);
          border: 1px solid rgba(99,102,241,0.4);
        }

        .svc-bg {
          position: absolute; inset: 0;
          background-size: cover; background-position: center;
          opacity: 0.06; pointer-events: none;
        }

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

        .svc-title {
          font-size: 0.95rem; font-weight: 700; color: #fff;
          margin-bottom: 0.4rem; position: relative; line-height: 1.2;
        }
        @media (min-width: 768px) {
          .svc-title { font-size: 1.6rem; margin-bottom: 0.75rem; }
        }
        .svc-title-line2 { display: block; }
        @media (min-width: 480px) { .svc-title-line2 { display: inline; } }

        .svc-desc {
          color: var(--text-muted); font-size: 0.75rem;
          line-height: 1.5; margin-bottom: 0.65rem; position: relative;
          display: none;
        }
        @media (min-width: 420px) { .svc-desc { display: block; } }
        @media (min-width: 768px) { .svc-desc { font-size: 0.95rem; margin-bottom: 2rem; } }

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
        .svc-list .svc-list-item:nth-child(n+4) { display: none; }
        @media (min-width: 480px) { .svc-list .svc-list-item:nth-child(n+4) { display: flex; } }
        .svc-check-cyan   { color: var(--color-cyan-bright); }
        .svc-check-indigo { color: #a5b4fc; }

        .svc-cta {
          display: inline-flex; align-items: center; gap: 0.3rem;
          font-weight: 600; font-size: 0.75rem;
          position: relative; margin-top: auto;
        }
        @media (min-width: 768px) { .svc-cta { font-size: 0.95rem; gap: 0.5rem; } }
        .svc-cta-cyan   { color: var(--color-cyan-bright); }
        .svc-cta-indigo { color: #a5b4fc; }

        .service-hero-card:hover { transform: translateY(-5px) scale(1.02); }
        .svc-card-steel:hover { box-shadow: 0 18px 36px -10px rgba(6,182,212,0.3); border-color: rgba(6,182,212,0.7) !important; }
        .svc-card-civil:hover { box-shadow: 0 18px 36px -10px rgba(99,102,241,0.3); border-color: rgba(99,102,241,0.7) !important; }
      `}</style>
    </div>
  );
}
