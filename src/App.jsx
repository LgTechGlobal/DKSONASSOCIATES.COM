import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StandardsSection from './components/StandardsSection';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import InteractiveModelViewer from './components/InteractiveModelViewer';
import WhyChooseUs from './components/WhyChooseUs';
import ProjectsShowcase from './components/ProjectsShowcase';
import CostEstimator from './components/CostEstimator';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import SteelDetailingPage from './pages/SteelDetailingPage';
import CivilConstructionPage from './pages/CivilConstructionPage';
import AboutUsPage from './pages/AboutUsPage';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import './App.css';

export default function App() {
  const [quoteFormData, setQuoteFormData] = useState(null);
  const location = useLocation();

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  // Reset scroll on route change
  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  // Robust Mobile & Desktop Scroll Reveal Observer
  useEffect(() => {
    const revealElements = document.querySelectorAll('.scroll-reveal');

    // Reveal elements immediately if IntersectionObserver is unsupported or elements are already near viewport
    if (!('IntersectionObserver' in window)) {
      revealElements.forEach(el => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          } else {
            // Only hide the section if it is pushed down below the viewport, not if it scrolls past the top
            if (entry.boundingClientRect.top > 0) {
              entry.target.classList.remove('is-revealed');
            }
          }
        });
      },
      {
        threshold: 0.02, // Triggers immediately as soon as top edge touches viewport (optimized for mobile)
        rootMargin: '0px 0px 60px 0px' // Pre-triggers 60px ahead so content never lags
      }
    );

    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);

  const handleOpenQuoteModal = (serviceName) => {
    if (serviceName) {
      setQuoteFormData({ scope: serviceName });
    }
    const contactElem = document.getElementById('quote-form') || document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyEstimate = (estimateData) => {
    setQuoteFormData(estimateData);
    const contactElem = document.getElementById('quote-form') || document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to the correct section when landing on /services, /why-us, /contact
  const sectionPathMap = {
    '/services': 'services',
    '/why-us':   'why-us',
    '/contact':  'contact',
  };
  useEffect(() => {
    const sectionId = sectionPathMap[location.pathname];
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 120);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/steel-detailing" element={<SteelDetailingPage />} />
      <Route path="/civil-construction" element={<CivilConstructionPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      {/* Section alias routes — render home page, useEffect above handles scrolling */}
      {['/services', '/why-us', '/contact', '/'].map(path => (
        <Route key={path} path={path} element={
        <div className="app-root">
          {/* Navigation Header with Scroll Progress Bar & Responsive Mobile Menu */}
          <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

          {/* Main Content Sections */}
          <main>
            {/* Hero with Interactive 3D Structural Steel Connection & Continuous Floating Animation */}
            <Hero onOpenQuoteModal={handleOpenQuoteModal} />

            {/* Dynamic Infinite Marquee Engineering Ticker Strip */}
            <div className="marquee-strip">
              <div className="marquee-track">
                <span className="marquee-item">⚡ AISC 360-16 COMPLIANT</span>
                <span className="marquee-item">📐 TEKLA STRUCTURES</span>
                <span className="marquee-item">🏆 PE STAMPED ACROSS INDIA</span>
                <span className="marquee-item">🎯 99.8% FIRST-PASS APPROVAL</span>
                <span className="marquee-item">⚙️ PEDDINGHAUS DSTV & CNC EXPORT</span>
                <span className="marquee-item">☁️ TRIMBLE CONNECT CLOUD SYNC</span>
                <span className="marquee-item">🌙 24/7 OVERNIGHT RFI RESPONSE</span>
                {/* Duplicate for seamless infinite loop */}
                <span className="marquee-item">⚡ AISC 360-16 COMPLIANT</span>
                <span className="marquee-item">📐 TEKLA STRUCTURES</span>
                <span className="marquee-item">🏆 PE STAMPED ACROSS INDIA</span>
                <span className="marquee-item">🎯 99.8% FIRST-PASS APPROVAL</span>
                <span className="marquee-item">⚙️ PEDDINGHAUS DSTV & CNC EXPORT</span>
                <span className="marquee-item">☁️ TRIMBLE CONNECT CLOUD SYNC</span>
                <span className="marquee-item">🌙 24/7 OVERNIGHT RFI RESPONSE</span>
              </div>
            </div>

            {/* Core Services Portfolio & Deliverables */}
            <div className="scroll-reveal">
              <ServicesSection onSelectServiceForQuote={handleOpenQuoteModal} />
            </div>

            {/* Standards We Followed */}
            <div className="scroll-reveal">
              <StandardsSection />
            </div>

            {/* Live Counters */}
            <div className="scroll-reveal">
              <StatsSection />
            </div>

            {/* The Dkson Associates Advantage & Side-by-Side Comparison */}
            <div className="scroll-reveal">
              <WhyChooseUs onOpenQuoteModal={handleOpenQuoteModal} />
            </div>

            {/* Testimonials & Industry Certifications */}
            <div className="scroll-reveal">
              <TestimonialsSection />
            </div>

            {/* Contact & Proposal Request Form */}
            <div className="scroll-reveal">
              <ContactSection initialFormData={quoteFormData} />
            </div>
          </main>

          {/* Comprehensive Footer */}
          <Footer />

          {/* Pulsing Animated WhatsApp Action Button & Interactive Chat Drawer */}
          <WhatsAppWidget />
        </div>
        } />
      ))}
    </Routes>
  );
}



