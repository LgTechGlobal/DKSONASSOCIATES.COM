import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ShieldCheck, Zap, RefreshCw, Building2, HardHat, Factory,
  CheckCircle2, ChevronLeft, FileText, Package, Archive, BarChart3,
  Layers, Settings, Home
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';

const values = [
  {
    icon: <ShieldCheck size={32} />,
    title: 'Unmatched Quality',
    desc: 'Our stringent quality control procedures ensure every structural steel design and detailing solution is of the greatest caliber, satisfying industry standards and going above and beyond for our clients.',
    color: 'rgba(6,182,212,0.15)',
    border: 'rgba(6,182,212,0.35)',
    iconColor: 'var(--color-cyan-bright)',
  },
  {
    icon: <Zap size={32} />,
    title: 'Innovation Driven',
    desc: 'We push the envelope of innovation in each project we work on — delivering solutions that combine engineering precision with the latest technology advancements.',
    color: 'rgba(99,102,241,0.15)',
    border: 'rgba(99,102,241,0.35)',
    iconColor: '#a5b4fc',
  },
  {
    icon: <RefreshCw size={32} />,
    title: 'Adaptability',
    desc: 'In a field that is changing quickly, flexibility is essential. Dkson Associates adapts to the most recent developments in technology and approach to always deliver the most efficient solutions.',
    color: 'rgba(16,185,129,0.15)',
    border: 'rgba(16,185,129,0.35)',
    iconColor: '#6ee7b7',
  },
];

const preProcess = [
  'Technical Synopsis — Pre-plan Drawings and Checklist',
  'Customized Design Drawing Log & Design Drawing Folder',
  'Client Specific ABM (Advance Bill of Material)',
  'Bought Out Items',
  'Material Summaries',
];

const executionStage = [
  'Shop Drawings',
  'Erection Drawings',
  'Drawing Log & Transmittals',
  'Part Drawings / Gathers / Attached Material Details',
  'Embeds/Anchors Details & Placement Drawings',
  'Precast Element Details & List',
  'Customized Shop & Field Bolt Details',
  'Customized NC Files',
  'Fabtrol / EJE Import Files',
  'DXF Files for Plate Work',
  '3D Models or 3D PDF',
  'Import Files for BIM Model, Rivet Model',
  'AutoCAD Drawings / DWG Files',
  'Animation Support',
  'Field Verification Sketches',
];

const postCompletion = [
  'Data Security',
  'Model Backup',
  'Drawing Backup',
  'NC File Backup',
  'Future Expansion Project Support',
];

const buildings = [
  'Office Spaces & Churches',
  'Sports Arenas & Stadiums',
  'Airports & Parking Structures',
  'Warehouses',
  'Schools and Universities',
  'High-rise Residential Apartments',
  'Other Allied Structures',
];

const industrial = [
  'Energy (Power Plants)',
  'Process Plants (Petro / Chemical / Steel / Cement)',
  'Oil & Gas (Onshore / Offshore)',
  'Others (Food / Medical)',
];

export default function AboutUsPage() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('[data-reveal]');
    if (!els || !('IntersectionObserver' in window)) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.style.opacity = '1', e.target.style.transform = 'translateY(0)';
      }),
      { threshold: 0.06 }
    );
    els.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(40px)';
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="app-root" ref={sectionRef}>
      <Navbar onOpenQuoteModal={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 300); }} />

      <main>
        {/* ── HERO ── */}
        <section style={{
          paddingTop: '1rem', paddingBottom: '5rem',
          background: 'linear-gradient(160deg, #050d1a 0%, #0a1628 60%, #0d1f3c 100%)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div className="ambient-glow ambient-cyan" style={{ top: '-10%', right: '-10%', width: '700px', height: '700px', opacity: 0.06 }} />
          <div className="ambient-glow ambient-indigo" style={{ bottom: '-20%', left: '-10%', width: '600px', height: '600px', opacity: 0.06 }} />
          {/* Grid lines decoration */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(6,182,212,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            
            {/* Back Button */}
            <div style={{ marginBottom: '2rem' }}>
              <button
                onClick={() => navigate('/')}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.3)',
                  color: 'var(--color-cyan-bright)', borderRadius: '8px',
                  padding: '0.6rem 1.2rem', fontSize: '0.9rem', cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(6,182,212,0.2)'; e.currentTarget.style.borderColor = 'rgba(6,182,212,0.6)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(6,182,212,0.1)'; e.currentTarget.style.borderColor = 'rgba(6,182,212,0.3)'; }}
              >
                <ChevronLeft size={16} />
                Back to Home
              </button>
            </div>

            <div style={{ textAlign: 'center' }}>
            <div data-reveal className="section-badge" style={{ display: 'inline-flex', marginBottom: '1.5rem' }}>
              <Building2 size={14} />
              <span>WHO WE ARE</span>
            </div>
            <h1 data-reveal style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              ABOUT <span className="text-gradient">DKSON ASSOCIATES</span>
            </h1>
            <p data-reveal style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
              A world-class structural steel engineering and detailing partner — committed to delivering unmatched quality, pushing the envelope of innovation, and adapting to every challenge.
            </p>
            <div data-reveal style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <span className="badge-tag" style={{ fontSize: '0.85rem', padding: '0.5rem 1.2rem' }}>AISC Compliant</span>
              <span className="badge-tag" style={{ fontSize: '0.85rem', padding: '0.5rem 1.2rem' }}>NISD Certified</span>
              <span className="badge-tag" style={{ fontSize: '0.85rem', padding: '0.5rem 1.2rem' }}>Tekla Structures</span>
              <span className="badge-tag" style={{ fontSize: '0.85rem', padding: '0.5rem 1.2rem' }}>Across India & Global</span>
            </div>
            </div>
          </div>
        </section>

        {/* ── OUR VALUES ── */}
        <section style={{ padding: '5rem 0', background: 'var(--bg-primary)', position: 'relative' }}>
          <div className="container">
            <div data-reveal className="section-title-wrap">
              <div className="section-badge"><ShieldCheck size={14} /><span>OUR VALUES</span></div>
              <h2 className="section-title">What <span className="text-gradient">Drives Us</span></h2>
              <p className="section-subtitle">The principles that guide every project we deliver.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem', marginTop: '2.5rem' }}>
              {values.map((v, i) => (
                <div data-reveal key={i} style={{
                  background: v.color, border: `1px solid ${v.border}`,
                  borderRadius: 'var(--radius-xl)', padding: '2.5rem 2rem',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  transitionDelay: `${i * 0.1}s`,
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 20px 40px -12px ${v.border}`; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ color: v.iconColor, marginBottom: '1.25rem' }}>{v.icon}</div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>{v.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OUR DELIVERABLES ── */}
        <section style={{ padding: '5rem 0', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
          <div className="ambient-glow ambient-cyan" style={{ top: '50%', right: '-5%', width: '500px', height: '500px', opacity: 0.05 }} />
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div data-reveal className="section-title-wrap">
              <div className="section-badge"><FileText size={14} /><span>WHAT WE DELIVER</span></div>
              <h2 className="section-title">Our <span className="text-gradient">Deliverables</span></h2>
              <p className="section-subtitle">Comprehensive outputs at every stage of your project lifecycle.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>

              {/* Pre-Process */}
              <div data-reveal style={{ background: 'rgba(6,182,212,0.05)', border: '1px solid rgba(6,182,212,0.15)', borderRadius: 'var(--radius-xl)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(6,182,212,0.15)', border: '1px solid rgba(6,182,212,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-cyan-bright)' }}>
                    <Package size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-cyan-bright)' }}>Pre-Process Stage</h3>
                </div>
                {preProcess.map((d, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.5 }}>
                    <CheckCircle2 size={15} style={{ color: 'var(--color-cyan-bright)', flexShrink: 0, marginTop: '2px' }} />
                    <span>{d}</span>
                  </div>
                ))}
              </div>

              {/* Project Execution */}
              <div data-reveal style={{ background: 'rgba(99,102,241,0.05)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: 'var(--radius-xl)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a5b4fc' }}>
                    <Layers size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#a5b4fc' }}>Project Execution Stage</h3>
                </div>
                {executionStage.map((d, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.5 }}>
                    <CheckCircle2 size={15} style={{ color: '#a5b4fc', flexShrink: 0, marginTop: '2px' }} />
                    <span>{d}</span>
                  </div>
                ))}
              </div>

              {/* Post Completion */}
              <div data-reveal style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.15)', borderRadius: 'var(--radius-xl)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6ee7b7' }}>
                    <Archive size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#6ee7b7' }}>Post Completion Stage</h3>
                </div>
                {postCompletion.map((d, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.5 }}>
                    <CheckCircle2 size={15} style={{ color: '#6ee7b7', flexShrink: 0, marginTop: '2px' }} />
                    <span>{d}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── SECTORS WE SERVE ── */}
        <section style={{ padding: '5rem 0', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
          <div className="ambient-glow ambient-indigo" style={{ top: '20%', left: '-8%', width: '600px', height: '600px', opacity: 0.06 }} />
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div data-reveal className="section-title-wrap">
              <div className="section-badge"><BarChart3 size={14} /><span>SECTORS WE SERVE</span></div>
              <h2 className="section-title">Industries We <span className="text-gradient">Power</span></h2>
              <p className="section-subtitle">From towering buildings to heavy industrial plants — our expertise spans every major sector.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginTop: '3rem' }}>

              {/* Buildings */}
              <div data-reveal style={{
                background: 'linear-gradient(135deg, rgba(6,182,212,0.08) 0%, rgba(99,102,241,0.05) 100%)',
                border: '1px solid rgba(6,182,212,0.2)', borderRadius: 'var(--radius-xl)', padding: '2.5rem 2rem',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                  <div style={{ width: '54px', height: '54px', borderRadius: '14px', background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-cyan-bright)' }}>
                    <Building2 size={28} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--color-cyan-bright)', letterSpacing: '2px', textTransform: 'uppercase' }}>Sector 01</div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff' }}>Buildings</h3>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                  {buildings.map((b, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#94a3b8', fontSize: '0.95rem' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-cyan-bright)', flexShrink: 0 }} />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industrial */}
              <div data-reveal style={{
                background: 'linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(168,85,247,0.05) 100%)',
                border: '1px solid rgba(99,102,241,0.2)', borderRadius: 'var(--radius-xl)', padding: '2.5rem 2rem',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                  <div style={{ width: '54px', height: '54px', borderRadius: '14px', background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a5b4fc' }}>
                    <Factory size={28} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#a5b4fc', letterSpacing: '2px', textTransform: 'uppercase' }}>Sector 02</div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff' }}>Industrial</h3>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                  {industrial.map((b, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#94a3b8', fontSize: '0.95rem' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#a5b4fc', flexShrink: 0 }} />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── CTA STRIP ── */}
        <section data-reveal style={{
          padding: '4rem 0', textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(6,182,212,0.08) 0%, rgba(99,102,241,0.08) 100%)',
          borderTop: '1px solid rgba(6,182,212,0.1)', borderBottom: '1px solid rgba(6,182,212,0.1)',
        }}>
          <div className="container">
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
              Ready to Work With <span className="text-gradient">DKSON ASSOCIATES?</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>
              Let's discuss your next structural steel or civil project.
            </p>
            <button className="btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}
              onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 300); }}>
              Get a Free Quote
            </button>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
