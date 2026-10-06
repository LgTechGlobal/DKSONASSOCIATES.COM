import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Building2, Layers, FileCode, Grid, Box, HardHat, Pickaxe, PaintRoller, Home,
  Check, ArrowRight, ExternalLink, Maximize2, ChevronLeft
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const civilServices = [
  {
    id: 'site-preparation',
    code: 'CIVIL 01',
    subCode: 'SITE-PREP',
    icon: <Pickaxe size={26} />,
    title: 'Site Preparation',
    tagline: 'Comprehensive land clearing and excavation services.',
    description: 'We handle complete site preparation including land clearing, soil testing, excavation, and leveling to ensure a solid foundation for any project.',
    image: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    badge: 'Groundwork',
    deliverables: [
      'Land Clearing & Grubbing',
      'Geotechnical Soil Testing',
      'Mass Excavation & Trenching',
      'Site Grading & Leveling'
    ],
    standards: 'IS 1200, OSHA Safety Codes',
    software: 'AutoCAD Civil 3D'
  },
  {
    id: 'superstructure',
    code: 'CIVIL 02',
    subCode: 'SUPER-STRUCT',
    icon: <Building2 size={26} />,
    title: 'Superstructure',
    tagline: 'Robust concrete and masonry framework construction.',
    description: 'Expert construction of the building\'s core framework, including block masonry, RCC columns, beams, and roofing systems.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    badge: 'Core Structure',
    deliverables: [
      'Brickwork & Block Masonry',
      'RCC (Reinforced Cement Concrete) Columns',
      'Concrete Beams & Floor Slabs',
      'Roofing & Weatherproofing'
    ],
    standards: 'IS 456, ACI 318',
    software: 'Revit Structure, STAAD.Pro'
  },
  {
    id: 'finishing-utilities',
    code: 'CIVIL 03',
    subCode: 'FINISH-UTIL',
    icon: <PaintRoller size={26} />,
    title: 'Finishing and Utilities',
    tagline: 'Complete interior and exterior finishing with integrated utilities.',
    description: 'Delivering the final touches to make spaces habitable, including plastering, flooring, painting, plumbing, and electrical conduit laying.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    badge: 'Interiors & MEP',
    deliverables: [
      'Interior & Exterior Plastering',
      'Flooring & Tile Installation',
      'Painting & Architectural Finishes',
      'Plumbing & Sanitary Layouts',
      'Electrical Conduit Laying'
    ],
    standards: 'NBC India, Local Building Codes',
    software: 'Revit MEP, AutoCAD'
  },
  {
    id: 'residential-projects',
    code: 'CIVIL 04',
    subCode: 'RES-BLDG',
    icon: <Home size={26} />,
    title: 'Residential Projects (Examples)',
    tagline: 'High-quality residential construction services.',
    description: 'Extensive experience in developing residential properties ranging from single-family homes and townhouses to villas and low-rise apartments.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    badge: 'Residential',
    deliverables: [
      'Single-Family Custom Homes',
      'Luxury Villas & Estates',
      'Modern Townhouses',
      'Low-Rise Apartment Complexes'
    ],
    standards: 'RERA Compliant, Green Building Norms',
    software: 'SketchUp, 3ds Max'
  }
];

export default function CivilConstructionPage() {
  const navigate = useNavigate();
  const [selectedModal, setSelectedModal] = React.useState(null);
  const [previewImage, setPreviewImage] = React.useState(null);
  const listRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const cards = listRef.current?.querySelectorAll('[data-service-card="true"]');
      if (!cards || cards.length === 0) return;
      if (!('IntersectionObserver' in window)) {
        cards.forEach(card => card.classList.add('card-arrived'));
        return;
      }
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('card-arrived');
            
          });
        },
        { threshold: 0.02, rootMargin: '0px 0px 60px 0px' }
      );
      cards.forEach(card => observer.observe(card));
      return () => observer.disconnect();
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="app-root">
      <Navbar onOpenQuoteModal={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 300); }} />
      <main>
        <section className="section services-master-section" style={{ paddingTop: '1rem' }}>
          <div className="ambient-glow ambient-cyan" style={{ top: '10%', right: '-5%', width: '500px', height: '500px', opacity: 0.08 }} />
          <div className="ambient-glow ambient-indigo" style={{ top: '55%', left: '-5%', width: '550px', height: '550px', opacity: 0.08 }} />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>

            {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.3)',
                color: 'var(--color-cyan-bright)', borderRadius: '8px',
                padding: '0.6rem 1.2rem', fontSize: '0.9rem', cursor: 'pointer',
                marginBottom: '2.5rem', transition: 'all 0.3s ease',
              }}
            >
              <ChevronLeft size={16} />
              Back to Home
            </button>

            <div className="section-title-wrap">
              <div className="section-badge">
                <HardHat size={14} />
                <span>CIVIL CONSTRUCTION SERVICES</span>
              </div>
              <h2 className="section-title">
                Civil <span className="text-gradient">Construction</span>
              </h2>
              <p className="section-subtitle">
                End-to-end civil and concrete structural solutions — built for durability, efficiency, and complete architectural harmony.
              </p>
            </div>

            {/* Dual-card Showcase */}
            <div className="services-dual-showcase-list" ref={listRef}>
              {civilServices.map((service, index) => {
                const isEven = index % 2 === 0;

                const renderImageCard = () => (
                  <div className="service-dual-img-card group">
                    <div className="service-dual-img-inner">
                      <img
                        src={service.image}
                        alt={`${service.title} - Dkson Associates`}
                        loading="lazy"
                        decoding="async"
                        className="service-dual-img"
                      />
                      <div className="service-dual-img-overlay" />
                      <div className="service-dual-top-badge">
                        <span className="pulse-dot" />
                        <span>{service.badge}</span>
                      </div>
                      <div className="service-dual-img-footer">
                        <span className="service-dual-tool-tag">{service.software}</span>
                        <button
                          className="service-dual-expand-btn"
                          title="Inspect full visual"
                          onClick={() => setPreviewImage({ url: service.image, title: service.title })}
                        >
                          <Maximize2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                );

                const renderDetailCard = () => (
                  <div className="service-dual-detail-card">
                    <div className="service-dual-detail-top">
                      <div className="service-dual-icon-wrap">{service.icon}</div>
                      <div className="service-dual-code-pill">
                        <span className="service-dual-main-code">{service.code}</span>
                        <span className="service-dual-sub-code">{service.subCode}</span>
                      </div>
                    </div>
                    <h3 className="service-dual-title">{service.title}</h3>
                    <p className="service-dual-tagline">{service.tagline}</p>
                    <p className="service-dual-desc">{service.description}</p>
                    <div className="service-dual-features-grid">
                      {service.deliverables.slice(0, 4).map((d, dIdx) => (
                        <div key={dIdx} className="service-dual-feature-item">
                          <div className="service-dual-check-icon"><Check size={14} /></div>
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                    <div className="service-dual-action-row">
                      <button
                        className="btn-primary service-dual-quote-btn"
                        onClick={() => {
                          navigate('/');
                          setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 300);
                        }}
                      >
                        <span>Request Quote</span>
                        <ArrowRight size={16} />
                      </button>
                      <button
                        className="btn-outline service-dual-scope-btn"
                        onClick={() => setSelectedModal(service)}
                      >
                        <span>View Full Scope</span>
                        <ExternalLink size={14} />
                      </button>
                    </div>
                  </div>
                );

                return (
                  <div key={service.id} data-service-row="true" data-service-idx={index} className="service-paired-row">
                    <div data-service-card="true" data-card-index={index * 2} className="service-sliding-card card-desktop-left card-comes-from-left mobile-comes-from-left">
                      {isEven ? renderImageCard() : renderDetailCard()}
                    </div>
                    <div data-service-card="true" data-card-index={index * 2 + 1} className="service-sliding-card card-desktop-right card-comes-from-right mobile-comes-from-right">
                      {isEven ? renderDetailCard() : renderImageCard()}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Sub-service Modal */}
      {selectedModal && (
        <div className="modal-overlay" onClick={() => setSelectedModal(null)}>
          <div className="modal-card dkson-modal-card" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedModal(null)}>✕</button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <div className="service-icon-box" style={{ width: '60px', height: '60px' }}>{selectedModal.icon}</div>
              <div>
                <span className="badge-tag">{selectedModal.code} // {selectedModal.subCode}</span>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '0.2rem' }}>{selectedModal.title}</h3>
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.75rem' }}>{selectedModal.description}</p>
            <h4 style={{ fontSize: '1.05rem', color: 'var(--color-cyan-bright)', marginBottom: '0.75rem', fontWeight: 600 }}>Complete Engineering Deliverables:</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
              {selectedModal.deliverables.map((d, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#cbd5e1', fontSize: '0.92rem' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(6,182,212,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Check size={13} style={{ color: 'var(--color-cyan-bright)' }} />
                  </div>
                  <span>{d}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', padding: '1.25rem', background: 'rgba(15,23,42,0.8)', borderRadius: 'var(--radius-md)', marginBottom: '2rem', border: '1px solid rgba(6,182,212,0.25)' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Governing Codes</div>
                <div style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 600, marginTop: '0.2rem' }}>{selectedModal.standards}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Primary Software</div>
                <div style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 600, marginTop: '0.2rem' }}>{selectedModal.software}</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button className="btn-primary" style={{ flex: 1 }} onClick={() => { setSelectedModal(null); navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 300); }}>
                Request Quote
              </button>
              <button className="btn-outline" onClick={() => setSelectedModal(null)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {previewImage && (
        <div className="modal-overlay" onClick={() => setPreviewImage(null)}>
          <div className="modal-card dkson-img-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setPreviewImage(null)}>✕</button>
            <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.25rem' }}>{previewImage.title}</h3>
            <img src={previewImage.url} alt={previewImage.title} style={{ width: '100%', maxHeight: '70vh', objectFit: 'contain', borderRadius: 'var(--radius-lg)' }} />
          </div>
        </div>
      )}
    </div>
  );
}

