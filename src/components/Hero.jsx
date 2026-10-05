import React, { useState } from 'react';
import heroVideo from '../assets/hero-bg.mp4';

import { 
  ArrowRight, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Box, 
  RotateCw, 
  Eye, 
  Cpu, 
  Zap,
  ShieldCheck,
  Activity
} from 'lucide-react';

export default function Hero({ onOpenQuoteModal }) {
  const [activePart, setActivePart] = useState('flange');
  const [viewMode, setViewMode] = useState('solid'); // 'solid' | 'wireframe' | 'stress'
  const [rotationDeg, setRotationDeg] = useState(15);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = useState(false);

  const partsData = {
    flange: {
      name: 'Flange Moment Plate',
      spec: 'PL 1" x 10" x 1\'-8" (A572 Gr. 50)',
      details: 'Full moment capacity transfer designed per AISC 358 Prequalified Connections.',
      welds: '5/16" Double Bevel CJP Groove Weld to column flange with backing bar removed.'
    },
    web: {
      name: 'Shear Web Tab',
      spec: 'PL 3/8" x 4-1/2" x 1\'-4" (A36)',
      details: '4x 3/4"Ø ASTM A325-N High-Strength Bolts in standard 13/16" holes.',
      welds: '1/4" Continuous Fillet Welds both sides to column web.'
    },
    stiffener: {
      name: 'Continuity Stiffener Plates',
      spec: '2x PL 5/8" x 6" x 1\'-2" (Gr. 50)',
      details: 'Prevents column web panel zone buckling and flange local bending under seismic lateral load.',
      welds: 'CJP Weld to inside face of column flange.'
    },
    column: {
      name: 'Main Structural Column',
      spec: 'W14 x 132 (ASTM A992 Grade 50)',
      details: 'Heavy rolled wide flange column with factory CNC milled ends for multi-tier splice connection.',
      welds: 'Shop welded detailing compliant with AWS D1.1 structural welding code.'
    }
  };

  const handleRotate = () => {
    setRotationDeg(prev => (prev + 45) % 360);
  };

  // Mouse move handler for Desktop
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: -(y * 12).toFixed(2),
      y: (x * 12).toFixed(2)
    });
  };

  // Touch handlers for Mobile Devices (gentle tilt, non-blocking)
  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      const rect = e.currentTarget.getBoundingClientRect();
      const touch = e.touches[0];
      const x = (touch.clientX - rect.left) / rect.width - 0.5;
      const y = (touch.clientY - rect.top) / rect.height - 0.5;
      setTilt({
        x: -(y * 4).toFixed(1),
        y: (x * 4).toFixed(1)
      });
    }
  };

  const handleTouchStart = () => {
    setIsInteracting(true);
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      setIsInteracting(false);
      setTilt({ x: 0, y: 0 });
    }, 300);
  };

  return (
    <section className="hero-section">
      <video className="hero-bg-video" autoPlay loop muted playsInline src={heroVideo} />
      
      <div className="hero-grid-pattern"></div>
      
      {/* Radiant Glow Orbs */}
      <div className="ambient-glow ambient-cyan" style={{ top: '-10%', left: '15%', width: '450px', height: '450px' }}></div>
      <div className="ambient-glow ambient-indigo" style={{ top: '25%', right: '10%', width: '400px', height: '400px' }}></div>

      <div className="container">
        <div className="hero-content">
          
          {/* Left Column: Headlines & CTAs with Reload Bottom-to-Top Animation */}
          <div className="hero-text-block">
            <div className="hero-badge fade-up-badge">
              <span className="pulse-dot"></span>
              <span>Next-Gen Structural Steel Detailing And Engineeering services</span>
            </div>

            <h1 className="hero-title fade-up-title">
              Precision Steel Detailing & <span className="text-gradient">Engineeering</span>
            </h1>

            <p className="hero-subtitle fade-up-subtitle">
              Delivering fabrication-ready shop drawings, PE-stamped connection designs and an unmatched <strong>99.8% first-pass approval rate</strong>.
            </p>

            <div className="hero-cta-group fade-up-cta">
              <button 
                className="btn-primary hero-btn-main"
                onClick={() => onOpenQuoteModal ? onOpenQuoteModal() : document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Request Detailing Quote</span>
                <ArrowRight size={18} />
              </button>

              
            </div>

            {/* Feature Guarantee Strip */}
            <div className="hero-features-strip fade-up-features">
              <div className="hero-feature-item">
                <CheckCircle2 size={18} className="hero-feature-icon" />
                <span>Precision Steel Detailing</span>
              </div>
              <div className="hero-feature-item">
                <CheckCircle2 size={18} className="hero-feature-icon" />
                <span>Tekla Connections</span>
              </div>
              <div className="hero-feature-item">
                <CheckCircle2 size={18} className="hero-feature-icon" />
                <span>PE Stamped Across India</span>
              </div>
              <div className="hero-feature-item">
                <Zap size={18} className="hero-feature-icon" />
                <span>Overnight RFI Turnaround</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero 3D Card with Reload Fade Up Entrance */}
          <div className="hero-viewer-wrapper fade-up-card">
            
            {/* Desktop Only Floating Satellite Badges (Positioned cleanly outside card, hidden on mobile) */}
            <div className={`floating-hero-badge float-top-left desktop-badge ${isInteracting ? 'hover-elevate-1' : ''}`}>
              <ShieldCheck size={14} style={{ color: '#22d3ee' }} />
              <span>Tekla Design</span>
            </div>

            <div className={`floating-hero-badge float-bottom-right desktop-badge ${isInteracting ? 'hover-elevate-2' : ''}`}>
              <Activity size={14} style={{ color: '#22c55e' }} />
              <span>99.8% Shop Approval</span>
            </div>

            {/* Mobile Only Clean Top Chips Row (Never overlaps header!) */}
            <div className="hero-mobile-chips-row">
              <div className="hero-mobile-chip">
                <ShieldCheck size={13} style={{ color: '#22d3ee' }} />
                <span>Tekla Design</span>
              </div>
              <div className="hero-mobile-chip">
                <Activity size={13} style={{ color: '#22c55e' }} />
                <span>99.8% Approval</span>
              </div>
            </div>

            {/* Main Interactive Floating Card */}
            <div 
              className={`hero-viewer-card hero-floating-card ${isInteracting ? 'card-hovered' : ''}`}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsInteracting(true)}
              onMouseLeave={() => {
                setIsInteracting(false);
                setTilt({ x: 0, y: 0 });
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{
                transform: isInteracting 
                  ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-8px)`
                  : undefined
              }}
            >
              {/* Laser Scanning Line Sweep effect */}
              <div className={`hologram-scanline ${isInteracting ? 'scan-active' : 'scan-auto'}`} />

              <div className="viewer-header">
                <div className="viewer-title">
                  <Cpu size={18} style={{ color: 'var(--color-cyan-bright)', flexShrink: 0 }} />
                  <span>Tekla Connection Inspector</span>
                </div>
                <div className="viewer-controls">
                  <button 
                    className={`mode-btn ${viewMode === 'solid' ? 'active' : ''}`}
                    onClick={() => setViewMode('solid')}
                    title="Solid 3D Rendering"
                  >
                    Solid
                  </button>
                  <button 
                    className={`mode-btn ${viewMode === 'wireframe' ? 'active' : ''}`}
                    onClick={() => setViewMode('wireframe')}
                    title="Tekla Wireframe Model"
                  >
                    Wireframe
                  </button>
                  <button 
                    className={`mode-btn ${viewMode === 'stress' ? 'active' : ''}`}
                    onClick={() => setViewMode('stress')}
                    title="Finite Element Stress Heatmap"
                  >
                    Stress
                  </button>
                  <button 
                    className="mode-btn"
                    onClick={handleRotate}
                    title="Rotate Model"
                    style={{ padding: '0.35rem 0.6rem' }}
                  >
                    <RotateCw size={14} />
                  </button>
                </div>
              </div>

              {/* Interactive SVG Engineering Canvas */}
              <div className="svg-canvas-wrap">
                <svg 
                  viewBox="0 0 460 320" 
                  style={{ 
                    width: '100%', 
                    height: '100%',
                    transform: `rotate(${rotationDeg * 0.15}deg) scale(0.96)`,
                    transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}
                >
                  <defs>
                    <linearGradient id="beamSteelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={viewMode === 'stress' ? '#ef4444' : '#1e293b'} />
                      <stop offset="50%" stopColor={viewMode === 'stress' ? '#eab308' : '#334155'} />
                      <stop offset="100%" stopColor={viewMode === 'stress' ? '#06b6d4' : '#0f172a'} />
                    </linearGradient>

                    <linearGradient id="colSteelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor={viewMode === 'stress' ? '#3b82f6' : '#1e293b'} />
                      <stop offset="50%" stopColor={viewMode === 'stress' ? '#06b6d4' : '#273549'} />
                      <stop offset="100%" stopColor={viewMode === 'stress' ? '#6366f1' : '#0f172a'} />
                    </linearGradient>

                    <linearGradient id="activePlateGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00f2fe" />
                      <stop offset="100%" stopColor="#4facfe" />
                    </linearGradient>
                    
                    <pattern id="gridSub" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(6, 182, 212, 0.08)" strokeWidth="0.5"/>
                    </pattern>
                  </defs>

                  <rect width="100%" height="100%" fill="url(#gridSub)" />

                  {/* Main Column Flanges & Web (W14x132) */}
                  <g 
                    onClick={() => setActivePart('column')} 
                    style={{ cursor: 'pointer' }}
                  >
                    <polygon 
                      points="130,20 160,35 160,285 130,270" 
                      fill={viewMode === 'wireframe' ? 'none' : 'url(#colSteelGrad)'} 
                      stroke={activePart === 'column' ? '#00f2fe' : '#38bdf8'} 
                      strokeWidth={activePart === 'column' ? '2.5' : '1.5'}
                      strokeDasharray={viewMode === 'wireframe' ? '4,4' : 'none'}
                    />
                    <polygon 
                      points="160,140 210,120 210,210 160,225" 
                      fill={viewMode === 'wireframe' ? 'none' : 'rgba(30, 41, 59, 0.9)'} 
                      stroke={activePart === 'column' ? '#00f2fe' : '#0284c7'} 
                      strokeWidth="1.5"
                    />
                    <polygon 
                      points="210,10 240,25 240,275 210,260" 
                      fill={viewMode === 'wireframe' ? 'none' : 'url(#colSteelGrad)'} 
                      stroke={activePart === 'column' ? '#00f2fe' : '#38bdf8'} 
                      strokeWidth={activePart === 'column' ? '2.5' : '1.5'}
                    />
                  </g>

                  {/* Continuity Stiffener Plates inside Column */}
                  <g 
                    onClick={() => setActivePart('stiffener')} 
                    style={{ cursor: 'pointer' }}
                  >
                    <polygon 
                      points="160,95 210,80 210,86 160,101" 
                      fill={activePart === 'stiffener' ? 'url(#activePlateGlow)' : (viewMode === 'stress' ? '#f59e0b' : '#38bdf8')} 
                      stroke="#22d3ee" 
                      strokeWidth="1.5"
                    />
                    <polygon 
                      points="160,195 210,180 210,186 160,201" 
                      fill={activePart === 'stiffener' ? 'url(#activePlateGlow)' : (viewMode === 'stress' ? '#f59e0b' : '#38bdf8')} 
                      stroke="#22d3ee" 
                      strokeWidth="1.5"
                    />
                  </g>

                  {/* Inbound Beam W24x94 */}
                  <g>
                    <polygon 
                      points="240,85 410,110 440,95 270,70" 
                      fill={viewMode === 'wireframe' ? 'none' : 'url(#beamSteelGrad)'} 
                      stroke="#64748b" 
                      strokeWidth="1.2"
                    />
                    <polygon 
                      points="270,75 270,185 410,210 410,110" 
                      fill={viewMode === 'wireframe' ? 'none' : 'rgba(15, 23, 42, 0.8)'} 
                      stroke="#475569" 
                      strokeWidth="1"
                      strokeDasharray={viewMode === 'wireframe' ? '3,3' : 'none'}
                    />
                    <polygon 
                      points="240,185 410,210 440,195 270,170" 
                      fill={viewMode === 'wireframe' ? 'none' : 'url(#beamSteelGrad)'} 
                      stroke="#64748b" 
                      strokeWidth="1.2"
                    />
                  </g>

                  {/* Flange Moment Plate */}
                  <g 
                    onClick={() => setActivePart('flange')} 
                    style={{ cursor: 'pointer' }}
                  >
                    <polygon 
                      points="235,78 350,95 350,103 235,86" 
                      fill={activePart === 'flange' ? 'url(#activePlateGlow)' : (viewMode === 'stress' ? '#ef4444' : '#0284c7')} 
                      stroke={activePart === 'flange' ? '#ffffff' : '#38bdf8'} 
                      strokeWidth={activePart === 'flange' ? '2.5' : '1.5'}
                    />
                    <circle cx="280" cy="88" r="3.5" fill="#f8fafc" stroke="#0284c7" strokeWidth="1"/>
                    <circle cx="310" cy="93" r="3.5" fill="#f8fafc" stroke="#0284c7" strokeWidth="1"/>
                    <circle cx="340" cy="98" r="3.5" fill="#f8fafc" stroke="#0284c7" strokeWidth="1"/>
                  </g>

                  {/* Shear Web Tab with Bolts */}
                  <g 
                    onClick={() => setActivePart('web')} 
                    style={{ cursor: 'pointer' }}
                  >
                    <polygon 
                      points="240,115 315,127 315,175 240,165" 
                      fill={activePart === 'web' ? 'url(#activePlateGlow)' : (viewMode === 'stress' ? '#10b981' : '#1e3a8a')} 
                      stroke={activePart === 'web' ? '#ffffff' : '#60a5fa'} 
                      strokeWidth={activePart === 'web' ? '2.5' : '1.5'}
                    />
                    <circle cx="270" cy="132" r="4" fill="#00f2fe" stroke="#ffffff" strokeWidth="1"/>
                    <circle cx="270" cy="144" r="4" fill="#00f2fe" stroke="#ffffff" strokeWidth="1"/>
                    <circle cx="270" cy="156" r="4" fill="#00f2fe" stroke="#ffffff" strokeWidth="1"/>
                    <circle cx="295" cy="136" r="4" fill="#00f2fe" stroke="#ffffff" strokeWidth="1"/>
                    <circle cx="295" cy="148" r="4" fill="#00f2fe" stroke="#ffffff" strokeWidth="1"/>
                    <circle cx="295" cy="160" r="4" fill="#00f2fe" stroke="#ffffff" strokeWidth="1"/>
                  </g>

                  {/* Dynamic Callout Pointer Line */}
                  {activePart === 'flange' && (
                    <g>
                      <polyline points="290,75 250,45 180,45" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="3,3"/>
                      <circle cx="290" cy="75" r="3" fill="#22d3ee"/>
                      <text x="70" y="42" fill="#22d3ee" fontSize="11" fontFamily="var(--font-mono)" fontWeight="bold">MOMENT FLANGE PL</text>
                    </g>
                  )}

                  {activePart === 'web' && (
                    <g>
                      <polyline points="280,145 340,155 380,155" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="3,3"/>
                      <circle cx="280" cy="145" r="3" fill="#22d3ee"/>
                      <text x="320" y="148" fill="#22d3ee" fontSize="11" fontFamily="var(--font-mono)" fontWeight="bold">SHEAR TAB & BOLTS</text>
                    </g>
                  )}

                  {activePart === 'stiffener' && (
                    <g>
                      <polyline points="185,90 140,75 80,75" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="3,3"/>
                      <circle cx="185" cy="90" r="3" fill="#22d3ee"/>
                      <text x="10" y="72" fill="#22d3ee" fontSize="11" fontFamily="var(--font-mono)" fontWeight="bold">CONTINUITY STIFFENER</text>
                    </g>
                  )}

                  {activePart === 'column' && (
                    <g>
                      <polyline points="145,210 100,230 40,230" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="3,3"/>
                      <circle cx="145" cy="210" r="3" fill="#22d3ee"/>
                      <text x="2" y="226" fill="#22d3ee" fontSize="11" fontFamily="var(--font-mono)" fontWeight="bold">W14x132 COLUMN</text>
                    </g>
                  )}
                </svg>

                {/* Click / Touch interactive prompt chip */}
                <div className="viewer-part-chip">
                  <Eye size={12} style={{ display: 'inline', marginRight: '4px' }} />
                  Tap parts to inspect AISC specs
                </div>
              </div>

              {/* Active Part Inspector Detail Drawer */}
              <div className="viewer-detail-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem', flexWrap: 'wrap', gap: '0.4rem' }}>
                  <div style={{ fontWeight: 700, color: 'var(--color-cyan-bright)', fontSize: '0.92rem' }}>
                    {partsData[activePart].name}
                  </div>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#a5b4fc', background: 'rgba(99,102,241,0.2)', padding: '0.15rem 0.5rem', borderRadius: '4px' }}>
                    {partsData[activePart].spec}
                  </div>
                </div>
                <p style={{ fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '0.35rem', lineHeight: '1.5' }}>
                  {partsData[activePart].details}
                </p>
                <div style={{ fontSize: '0.76rem', color: '#94a3b8', fontStyle: 'italic' }}>
                  <strong>Weld & Fastener:</strong> {partsData[activePart].welds}
                </div>
              </div>

              {/* Bottom mini stats */}
              <div className="viewer-footer-stats">
                <div className="viewer-stat-box">
                  <div className="viewer-stat-label">Model LOD</div>
                  <div className="viewer-stat-val">LOD 400</div>
                </div>
                <div className="viewer-stat-box">
                  <div className="viewer-stat-label">Code Standard</div>
                  <div className="viewer-stat-val">AISC 15th</div>
                </div>
                <div className="viewer-stat-box">
                  <div className="viewer-stat-label">Clash Status</div>
                  <div className="viewer-stat-val" style={{ color: '#22c55e' }}>0 Clashes</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}






