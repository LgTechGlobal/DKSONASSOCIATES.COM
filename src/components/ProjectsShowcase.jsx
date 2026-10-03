import React, { useState, useEffect, useRef } from 'react';
import { 
  Building, 
  MapPin, 
  Weight, 
  Layers, 
  Eye, 
  ArrowRight, 
  CheckCircle, 
  ExternalLink,
  ShieldAlert
} from 'lucide-react';

export default function ProjectsShowcase({ onOpenQuoteModal }) {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'commercial', label: 'Commercial High-Rise' },
    { id: 'industrial', label: 'Industrial & Logistics' },
    { id: 'infrastructure', label: 'Bridges & Infrastructure' },
    { id: 'tech', label: 'Data Centers & Healthcare' }
  ];

  const projects = [
    {
      id: 'proj-1',
      category: 'commercial',
      title: 'Horizon Tower Financial Center',
      location: 'Chicago, Illinois',
      tonnage: '4,850 Tons',
      type: '38-Story Class A Commercial Office',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80',
      software: 'Tekla Structures LOD 400',
      specs: [
        'Over 3,200 shop fabrication drawings generated with 0 erection clashes',
        'Special Moment Resisting Frames (SMRF) with RBS dogbone connections',
        'Direct automated DSTV export to Peddinghaus drill line & CNC plasma',
        'Fast-track 14-week detailing schedule completed 9 days ahead of deadline'
      ],
      deliverables: ['Erection Mark Plans', 'DSTV NC1 Files', 'PE Stamped Moment Calculations', 'FabTrol KSS Files']
    },
    {
      id: 'proj-2',
      category: 'industrial',
      title: 'Apex E-Commerce Mega Fulfillment Center',
      location: 'Dallas / Fort Worth, Texas',
      tonnage: '7,200 Tons',
      type: '1.2M Sq.Ft. Automated Logistics Facility',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      software: 'Tekla Structures / SDS2',
      specs: [
        'Multi-level mezzanine steel framing with automated conveyor support trusses',
        'Heavy joist and girder seat detailing with precision camber coordinates',
        'Integrated 38 flights of OSHA compliant egress stairs & guardrail packages',
        'Continuous coordination with robotic automated storage system vendors'
      ],
      deliverables: ['Mezzanine Shop Drawings', 'Truss Assembly Sheets', 'OSHA Stair Details', 'E-Sheets']
    },
    {
      id: 'proj-3',
      category: 'infrastructure',
      title: 'Skyway Cable-Stayed Pedestrian Bridge',
      location: 'Denver, Colorado',
      tonnage: '1,450 Tons',
      type: 'Twin Span Tubular Steel Pedestrian Crossing',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      software: 'Tekla Structures / IDEA StatiCa',
      specs: [
        'Curved box girders and complex spatial coordinate 3D geometry',
        'High-capacity pin connections and post-tensioned cable anchorage detailing',
        'AASHTO / AWS D1.5 Bridge Welding Code compliant shop documentation',
        'Trial shop assembly verification using digital 3D photogrammetry alignment'
      ],
      deliverables: ['Curved Girder Detailing', 'Cable Anchorage Plates', 'AASHTO Weld Procedures', 'Field Splice Sheets']
    },
    {
      id: 'proj-4',
      category: 'tech',
      title: 'Titan Hyperscale Cloud Data Center',
      location: 'Ashburn, Virginia',
      tonnage: '3,600 Tons',
      type: 'Tier IV Mission-Critical Data Facility',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      software: 'Tekla Structures / Revit Sync',
      specs: [
        'Heavy rooftop mechanical equipment dunnage frames with seismic isolation springs',
        'High-load battery storage floor framing with tight deflection tolerances (L/1000)',
        'Full federated Navisworks clash coordination with electrical busway duct banks',
        'Dual PE stamping in Virginia and Maryland for substation gantry frames'
      ],
      deliverables: ['Dunnage Shop Drawings', 'Vibration Isolator Details', 'Clash Coordination Reports', 'PE Stamped Calcs']
    },
    {
      id: 'proj-5',
      category: 'commercial',
      title: 'Metro Center Performing Arts Pavilion',
      location: 'Nashville, Tennessee',
      tonnage: '2,100 Tons',
      type: 'Complex Architectural Canopy & Auditorium',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      software: 'Tekla Structures / Rhino Grasshopper',
      specs: [
        'Exposed Architecturally Specified Structural Steel (AESS Category 4)',
        'Freeform hyperbolic paraboloid roof canopy with concealed bolted connections',
        'True-scale 3D CNC pipe unrolling and saddle cuts for automated tube lasers',
        'Ground-level mock-up drawings for client architectural visual review'
      ],
      deliverables: ['AESS Category 4 Shop Drawings', 'Tube Laser CNC Files', 'Acoustic Ceiling Support Steel', 'Field Mark Plans']
    },
    {
      id: 'proj-6',
      category: 'tech',
      title: 'St. Jude Children’s Research Medical Wing',
      location: 'Memphis, Tennessee',
      tonnage: '3,150 Tons',
      type: 'Hospital Expansion & Radiation Shielding',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
      software: 'Tekla Structures LOD 400',
      specs: [
        'Heavy lead-lined radiation therapy vault framing and ceiling hoist steel',
        'Strict vibration threshold design for MRI and electron microscope labs',
        'Multi-story seismic drift joints with slotted Teflon slide bearing pads',
        '100% cloud model sync with general contractor via Trimble Connect'
      ],
      deliverables: ['Medical Equipment Supports', 'Lead-Lined Wall Embeds', 'Seismic Slide Bearings', 'Anchor Bolt Layouts']
    }
  ];

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.project-card');
    if (!cards || cards.length === 0) return;

    if (!('IntersectionObserver' in window)) {
      cards.forEach((card) => card.classList.add('mobile-card-arrived'));
      return;
    }

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('mobile-card-arrived');
          } else {
            entry.target.classList.remove('mobile-card-arrived');
          }
        });
      },
      { threshold: 0.02, rootMargin: '0px 0px -10px 0px' }
    );

    cards.forEach((card) => cardObserver.observe(card));
    return () => cardObserver.disconnect();
  }, [filtered]);

  return (
    <section id="projects" ref={sectionRef} className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        
        {/* Title */}
        <div className="section-title-wrap">
          <div className="section-badge">
            <Building size={14} />
            <span>Proven Track Record</span>
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Structural Steel Projects</span>
          </h2>
          <p className="section-subtitle">
            From high-rise towers to sprawling industrial fulfillment centers and mission-critical data infrastructure, explore projects detailed and stamped by Dkson Associates.
          </p>
        </div>

        {/* Filter bar */}
        <div className="projects-filter-bar">
          {categories.map(c => (
            <button
              key={c.id}
              className={`filter-btn ${filter === c.id ? 'active' : ''}`}
              onClick={() => setFilter(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {filtered.map((proj, idx) => (
            <div key={proj.id} className={`project-card mobile-anim-${idx % 2 === 0 ? 'left' : 'right'}`}>
              <div className="project-img-wrap">
                <img src={proj.image} alt={proj.title} className="project-img" loading="lazy" decoding="async" />
                <span className="project-category-tag">
                  {proj.category.toUpperCase()}
                </span>
                <span className="project-tonnage-tag">
                  {proj.tonnage}
                </span>
              </div>

              <div className="project-info">
                <div className="project-location">
                  <MapPin size={14} style={{ color: 'var(--color-cyan-bright)' }} />
                  <span>{proj.location}</span>
                </div>

                <h3 className="project-title">{proj.title}</h3>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1rem' }}>
                  {proj.type}
                </div>

                <div className="project-meta-pills">
                  <span className="meta-pill">{proj.software}</span>
                  <span className="meta-pill">{proj.deliverables.length} Deliverables</span>
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(148, 163, 184, 0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <button 
                    className="service-learn-more"
                    onClick={() => setSelectedProject(proj)}
                  >
                    <span>View Engineering Scope</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Specs Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
              ✕
            </button>

            <div style={{ position: 'relative', height: '240px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '1.5rem' }}>
              <img src={selectedProject.image} alt={selectedProject.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(0deg, rgba(13, 20, 36, 0.95) 15%, transparent 80%)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '1.5rem'
              }}>
                <div>
                  <span className="badge-tag">{selectedProject.tonnage}</span>
                  <h3 style={{ fontSize: '1.6rem', color: '#fff', marginTop: '0.3rem' }}>{selectedProject.title}</h3>
                  <div style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>{selectedProject.location} • {selectedProject.type}</div>
                </div>
              </div>
            </div>

            <h4 style={{ fontSize: '1.05rem', color: 'var(--color-cyan-bright)', marginBottom: '0.75rem' }}>
              Engineering Execution Highlights:
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
              {selectedProject.specs.map((spec, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: '#cbd5e1' }}>
                  <CheckCircle size={16} style={{ color: 'var(--color-cyan-bright)', flexShrink: 0, marginTop: '3px' }} />
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            <h4 style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '0.75rem' }}>
              Delivered Drawing Packages & Automated Data:
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
              {selectedProject.deliverables.map((d, i) => (
                <span key={i} style={{ background: 'rgba(6, 182, 212, 0.15)', border: '1px solid rgba(6, 182, 212, 0.3)', color: 'var(--color-cyan-bright)', padding: '0.35rem 0.75rem', borderRadius: '4px', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>
                  {d}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button 
                className="btn-primary" 
                style={{ flex: 1 }}
                onClick={() => {
                  setSelectedProject(null);
                  if (onOpenQuoteModal) onOpenQuoteModal();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Inquire For Similar Project Detailing
              </button>
              <button 
                className="btn-outline" 
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

