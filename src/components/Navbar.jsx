import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  ArrowRight, 
  Menu, 
  X
} from 'lucide-react';

export default function Navbar({ onOpenQuoteModal }) {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Maps nav paths to section IDs on the home page
  const sectionMap = {
    '/services': 'services',
    '/why-us':   'why-us',
    '/contact':  'contact',
  };

  const navLinks = [
    { label: 'Services',  href: '/services' },
    { label: 'Why Dkson', href: '/why-us' },
    { label: 'About Us',  href: '/about' },
    { label: 'Contact',   href: '/contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const sectionId = sectionMap[href];

    if (sectionId) {
      // Navigate via React Router (URL updates cleanly, no reload)
      navigate(href);
    } else {
      // Real page route like /about
      navigate(href);
    }
  };

  return (
    <>
      {/* Laser Top Scroll Progress Indicator */}
      <div 
        className="scroll-progress-bar" 
        style={{ width: `${scrollProgress}%` }} 
      />

      {/* Top Announcement Bar (Hidden on Mobile) */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
          </div>
          <div className="top-bar-right">
            <a href="tel:+919337491479" className="top-bar-item">
              <Phone size={14} style={{ color: 'var(--color-cyan-bright)' }} />
              <span>+91-9337491479</span>
            </a>
            <a href="mailto:sales@dksonassociates.com" className="top-bar-item">
              <Mail size={14} style={{ color: 'var(--color-cyan-bright)' }} />
              <span>sales@dksonassociates.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          
          {/* Brand Logo with responsive layout */}
          <a href="#" className="nav-brand">
            <div className="brand-icon-wrap" style={{ width: '52px', height: '52px', padding: '4px' }}>
              <img
                src="/logo.png"
                alt="Dkson Associates Logo"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <div className="brand-text-block">
              <div className="brand-name">DKSONASSOCIATE</div>
              <div className="brand-tagline">STRUCTURAL STEEL DETAILING AND ENGINEERING</div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <ul className="nav-links">
            {navLinks.map((item, idx) => (
              <li key={idx}>
                <a 
                  href={item.href} 
                  className="nav-link"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Nav Actions */}
          <div className="nav-actions">
            {/* Desktop Only Button (hidden on mobile) */}
            <button 
              className="btn-primary nav-cta-btn" 
              onClick={() => onOpenQuoteModal ? onOpenQuoteModal() : document.getElementById('quote-form') || document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>Get Detailing Quote</span>
              <ArrowRight size={16} />
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button 
              className="mobile-menu-btn" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer">
            <div className="mobile-drawer-links">
              {navLinks.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.href} 
                  className="mobile-drawer-link"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  <span>{item.label}</span>
                  <ArrowRight size={14} style={{ opacity: 0.6 }} />
                </a>
              ))}
            </div>

            <div className="mobile-drawer-footer">
              <button 
                className="btn-primary" 
                style={{ width: '100%', justifyContent: 'center', padding: '0.9rem' }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.getElementById('quote-form') || document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Request Detailing Proposal</span>
                <ArrowRight size={16} />
              </button>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '1.2rem', marginTop: '1rem', fontSize: '0.82rem', color: '#94a3b8' }}>
                <a href="tel:+919337491479" style={{ color: 'var(--color-cyan-bright)' }}>
                  📞 +91-9337491479
                </a>
                <span>•</span>
                <a href="mailto:sales@dksonassociates.com" style={{ color: 'var(--color-cyan-bright)' }}>
                  ✉️ Email Desk
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}


