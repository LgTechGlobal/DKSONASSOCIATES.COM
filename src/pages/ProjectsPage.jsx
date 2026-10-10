import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Maximize2, ChevronLeft, Image as ImageIcon, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Use Vite's asset import syntax for files in src/assets
import img1 from '../assets/Project Portfolio/1-opt.jpg';
import img2 from '../assets/Project Portfolio/2-opt.jpg';
import img3 from '../assets/Project Portfolio/3-opt.jpg';
import img4 from '../assets/Project Portfolio/4-opt.jpg';
import img5 from '../assets/Project Portfolio/5-opt.jpg';
import img6 from '../assets/Project Portfolio/6-opt.jpg';
import img7 from '../assets/Project Portfolio/7-opt.jpg';
import img8 from '../assets/Project Portfolio/8-opt.jpg';

const projectList = [
  { id: 'proj-1', title: 'Industrial Plant Detailing', category: 'Industrial', image: img1 },
  { id: 'proj-2', title: 'Commercial Office Tower', category: 'Commercial', image: img2 },
  { id: 'proj-3', title: 'Warehouse Structure', category: 'Industrial', image: img3 },
  { id: 'proj-4', title: 'Infrastructure Project', category: 'Infrastructure', image: img4 },
  { id: 'proj-5', title: 'Healthcare Facility', category: 'Commercial', image: img5 },
  { id: 'proj-6', title: 'Manufacturing Plant', category: 'Industrial', image: img6 },
  { id: 'proj-7', title: 'Logistics Hub', category: 'Commercial', image: img7 },
  { id: 'proj-8', title: 'Specialty Steel Structure', category: 'Specialty', image: img8 }
];

export default function ProjectsPage() {
  const navigate = useNavigate();
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

            {/* Page Header */}
            <div className="section-title-wrap">
              <div className="section-badge">
                <ImageIcon size={14} />
                <span>PROJECT PORTFOLIO</span>
              </div>
              <h2 className="section-title">
                Our <span className="text-gradient">Projects</span>
              </h2>
              <p className="section-subtitle">
                A showcase of our precision structural steel detailing and engineering projects across various industries.
              </p>
            </div>

            {/* Image Grid Showcase */}
            <div 
              className="projects-image-grid" 
              ref={listRef}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '2rem',
                marginTop: '2rem'
              }}
            >
              {projectList.map((project, index) => (
                <div 
                  key={project.id} 
                  data-service-card="true" 
                  className="service-sliding-card card-fade-up"
                  style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
                >
                  <div className="service-dual-img-card group" style={{ minHeight: '320px', height: '100%' }}>
                    <div className="service-dual-img-inner">
                      <img
                        src={project.image}
                        loading="lazy"
                        decoding="async"
                        className="service-dual-img"
                      />
                      <div className="service-dual-img-overlay" />
                      <div className="service-dual-img-footer" style={{ justifyContent: 'flex-end' }}>
                        <button
                          className="service-dual-expand-btn"
                          title="Inspect full visual"
                          onClick={() => setPreviewImage({ url: project.image, title: project.title })}
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

      {/* Image Preview Modal */}
      {previewImage && (
        <div className="modal-overlay" onClick={() => setPreviewImage(null)}>
          <div className="modal-card dkson-img-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setPreviewImage(null)}>
              <X size={24} />
            </button>
            <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.25rem', textAlign: 'center' }}>{previewImage.title}</h3>
            <img src={previewImage.url} alt={previewImage.title} style={{ width: '100%', maxHeight: '70vh', objectFit: 'contain', borderRadius: 'var(--radius-lg)' }} />
          </div>
        </div>
      )}
    </div>
  );
}





