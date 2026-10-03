import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  ArrowUp,
  Globe,
  ExternalLink
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        
        <div className="footer-grid">
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div className="brand-icon-wrap" style={{ width: '52px', height: '52px', padding: '4px' }}>
                <img
                  src="/logo.png"
                  alt="Dkson Associates Logo"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.25rem', color: '#fff' }}>DKSON ASSOCIATES</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--color-cyan-bright)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  STRUCTURAL STEEL DETAILING AND ENGINEERING
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Dkson Associates is a world-class structural steel engineering and detailing partner providing fabrication-ready shop drawings, PE-stamped connection designs, Tekla Structures across India.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <span className="badge-tag">AISC</span>
              <span className="badge-tag">NISD</span>
              <span className="badge-tag">Across India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Core Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#services" className="footer-link">Steel Detailing Services</a></li>
               
              <li><a href="#why-us" className="footer-link">The Dkson Advantage</a></li>
              <li><a href="#projects" className="footer-link">Project Portfolio</a></li>
              
              
            </ul>
          </div>

          {/* Engineering Disciplines */}
          <div>
            <h4 className="footer-col-title">Engineering Disciplines</h4>
            <ul className="footer-links-list">
              <li><a href="#services" className="footer-link">Structural Steel Shop Drawings</a></li>
              <li><a href="#services" className="footer-link">PE Stamped Connection Calcs</a></li>
              
              <li><a href="#services" className="footer-link">Miscellaneous Metals & Stairs</a></li>
              <li><a href="#services" className="footer-link">Automated CNC & DSTV Deliverables</a></li>
              <li><a href="#services" className="footer-link">Joist And Deck Detailing</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer-col-title">Headquarters & Centers</h4>
            <ul className="footer-links-list">
                            <li style={{ display: 'flex', gap: '0.6rem', color: '#cbd5e1', fontSize: '0.88rem' }}>
                <MapPin size={18} style={{ color: 'var(--color-cyan-bright)', flexShrink: 0, marginTop: '2px' }} />
                <span>
                  <strong>Headquarters:</strong><br />
                  Cuttack, Odisha, India
                </span>
              </li>
              <li style={{ display: 'flex', gap: '0.6rem', color: '#cbd5e1', fontSize: '0.88rem' }}>
                <Phone size={18} style={{ color: 'var(--color-cyan-bright)', flexShrink: 0, marginTop: '2px' }} />
                <span>
                  Phone: <a href="tel:+919337491479" style={{ color: 'var(--color-cyan-bright)' }}>+91-9337491479</a><br />
                </span>
              </li>
              <li style={{ display: 'flex', gap: '0.6rem', color: '#cbd5e1', fontSize: '0.88rem' }}>
                <Mail size={18} style={{ color: 'var(--color-cyan-bright)', flexShrink: 0, marginTop: '2px' }} />
                <a href="mailto:sales@dksonassociates.com" style={{ color: 'var(--color-cyan-bright)' }}>
                  sales@dksonassociates.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} Dkson Associates. All rights reserved. STRUCTURAL STEEL DETAILING AND ENGINEERING.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <button 
              onClick={scrollToTop}
              style={{
                background: 'rgba(6, 182, 212, 0.15)',
                border: '1px solid rgba(6, 182, 212, 0.3)',
                color: 'var(--color-cyan-bright)',
                padding: '0.4rem 0.8rem',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.8rem',
                cursor: 'pointer'
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}





