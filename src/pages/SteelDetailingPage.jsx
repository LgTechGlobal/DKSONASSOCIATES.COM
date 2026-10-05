import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Building2, Layers, FileCode, Grid, Box,
  Check, ArrowRight, ExternalLink, Maximize2, ChevronLeft
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const steelServices = [
  {
    id: 'structural-detailing',
    code: 'SERVICE 01',
    subCode: 'DET-AISC',
    icon: <Building2 size={26} />,
    title: 'Structural Steel Detailing',
    tagline: 'Comprehensive shop & erection drawings with zero-clash fabrication accuracy',
    description: 'We deliver comprehensive, fabrication-ready shop and erection drawings designed for rapid CNC fabrication and seamless, clash-free field erection across North America.',
    image: '/images/service-plant.jpg',
    badge: 'Industrial Plant',
    deliverables: [
      'Anchor Bolt Setting Plans & Grout Elevation Layouts',
      'Shop Beams, Heavy Columns & Complex Truss Sheets',
      'Advance Bill of Materials (ABM) for Fast Mill Ordering',
      'Field Bolt Summaries & Erection Mark Diagrams',
      'Part Detail Sheets with Dimensioned CNC Hole Patterns'
    ],
    standards: 'AISC 360, AISC 303, NISD Class 1 QPP',
    software: 'Tekla Structures'
  },
  {
    id: 'structural-design',
    code: 'SERVICE 02',
    subCode: 'DES-AISC',
    icon: <Layers size={26} />,
    title: 'Structural Steel Design & Engineering',
    tagline: 'Code-compliant structural engineering solutions from concept framing to foundation load paths',
    description: 'Complete structural steel engineering and framing design for commercial, industrial, and institutional facilities. Optimized member sizing for maximum steel weight economy.',
    image: '/images/service-arch.jpg',
    badge: 'AWS D1.1',
    deliverables: [
      'Gravity & Lateral Load Path Engineering Calculations',
      'Optimal Wide-Flange & HSS Structural Member Sizing',
      'Foundation Reaction Schedules & Embed Coordination',
      'Value-Engineered Steel Weight Reduction Analysis',
      'Peer Review & Value Engineering Support'
    ],
    standards: 'AISC 360-16, ASCE 7, AWS D1.1 Code',
    software: 'Steel Arch Structure'
  },
  {
    id: 'mto-estimation',
    code: 'SERVICE 03',
    subCode: 'EST-MTO',
    icon: <FileCode size={26} />,
    title: 'Estimation & Material Take-Off (MTO)',
    tagline: 'Rapid and accurate structural tonnage extraction for competitive fabrication bidding',
    description: 'Precision structural steel quantity take-offs, advance bill of materials (ABM), and steel tonnage estimates to help steel fabricators prepare competitive, winning project bids.',
    image: 'https://content.app-sources.com/s/432484035579470251/uploads/Caliber/1-4254477.png?format=webp',
    badge: '24-48h Fast Turnaround',
    deliverables: [
      'Comprehensive Structural Steel Tonnage Breakdown',
      'Advance Bill of Materials (ABM) for Mill Lead Time',
      'Field Bolt Counts, Anchor Rods & Hardware Lists',
      'Surface Area Calculations for Paint & Fireproofing',
      'Detailed Summary Spreadsheets in Excel & Kiss Format'
    ],
    standards: 'AISC Estimating Guidelines, NISD Standards',
    software: 'TEKLA'
  },
  {
    id: 'misc-metals',
    code: 'SERVICE 04',
    subCode: 'MISC-METALS',
    icon: <Grid size={26} />,
    title: 'Miscellaneous Metals Detailing',
    tagline: 'Secondary architectural and industrial steel detailed strictly to OSHA and ADA codes',
    description: 'Precision detailing for commercial stairs, railings, catwalks, ladders, and canopies. Engineered for clean architectural aesthetics and seamless jobsite assembly.',
    image: '/images/service-tanks.jpg',
    badge: 'OSHA & ADA Compliant',
    deliverables: [
      'Commercial Pan, Monolithic & Monumental Stairs',
      'OSHA Egress Multi-Tier Stairs with Safety Landings',
      'ADA Compliant Railings, Guardrails & Glass Balustrades',
      'Roof Access Ladders with Safety Cages & Grating',
      'Canopy Steel, Overhead Frames & Dunnage Detailing'
    ],
    standards: 'OSHA 1910.28, NAAMM AMP 510, ADA Standards',
    software: 'TEKLA'
  },
  {
    id: 'joist-deck-detailing',
    code: 'SERVICE 05',
    subCode: 'DET-JD',
    icon: <Box size={28} />,
    title: 'Joist & Deck Detailing',
    tagline: 'Accurate steel joist and metal deck layouts.',
    description: 'Specialized detailing for open web steel joists, joist girders, and metal decking systems tailored to the exact requirements of the structural engineer.',
    image: '/images/joist-deck-service.jpg',
    badge: 'Steel Expert',
    deliverables: [
      'Joist Placement Plans',
      'Deck Layout Drawings',
      'Fastening & Welding Details',
      'Bill of Materials (BOM)'
    ],
    standards: 'SJI & SDI Specifications',
    software: 'AUTO CAD'
  }
];

export default function SteelDetailingPage() {
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
            else entry.target.classList.remove('card-arrived');
          });
        },
        { threshold: 0.02, rootMargin: '0px 0px -10px 0px' }
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

            {/* Page Header */}
            <div className="section-title-wrap">
              <div className="section-badge">
                <Building2 size={14} />
                <span>STEEL DETAILING SERVICES</span>
              </div>
              <h2 className="section-title">
                Structural <span className="text-gradient">Steel Detailing</span>
              </h2>
              <p className="section-subtitle">
                Comprehensive, fabrication-ready steel detailing solutions — engineered for rapid CNC fabrication, zero field rework, and 100% code compliance.
              </p>
            </div>

            {/* Dual-card Showcase */}
            <div className="services-dual-showcase-list" ref={listRef}>
              {steelServices.map((service, index) => {
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
                        <span>Request Detailing Quote</span>
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
                Request Detailing Quote
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
