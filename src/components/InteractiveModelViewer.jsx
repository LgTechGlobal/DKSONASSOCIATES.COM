import React, { useState } from 'react';
import { 
  Box, 
  Rotate3D, 
  Layers, 
  Maximize2, 
  CheckCircle2, 
  Info,
  Activity,
  Sliders
} from 'lucide-react';

export default function InteractiveModelViewer() {
  const [selectedModel, setSelectedModel] = useState('moment'); // 'moment' | 'bracing' | 'stair'
  const [renderMode, setRenderMode] = useState('shaded'); // 'shaded' | 'wireframe' | 'stress' | 'cnc'
  const [rotation, setRotation] = useState(0);
  const [selectedHotspot, setSelectedHotspot] = useState(null);
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.model-showcase-container');
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
  }, []);

  const models = [
    {
      id: 'moment',
      title: 'High-Rise Moment Frame Node',
      code: 'LOD-400 / AISC-358',
      desc: 'W24x94 Beam to W14x132 Column with Bolted Flange Plates & Continuity Stiffeners.',
      tonnage: '14.8 Tons / Grid',
      welds: '185 ft CJP & Fillet',
      bolts: '48x ASTM A325-N',
      software: 'Tekla Structures v2024'
    },
    {
      id: 'bracing',
      title: 'Heavy Chevron Bracing Bay',
      code: 'LOD-400 / AISC-341 Seismic',
      desc: 'Inverted V-Brace with 1-1/4" Gusset Plate connecting HSS 8x8x1/2 bracing members.',
      tonnage: '28.2 Tons / Bay',
      welds: '240 ft Multi-Pass Fillet',
      bolts: '64x ASTM A490-SC',
      software: 'Tekla Structures v2024'
    },
    {
      id: 'stair',
      title: 'Architectural Monumental Stair',
      code: 'LOD-400 / NAAMM & OSHA',
      desc: 'Double C12x20.7 stringers with concrete pan treads, custom glass balustrade shoe.',
      tonnage: '6.4 Tons / Flight',
      welds: '95 ft All-Around Shop',
      bolts: '32x Countersunk A307',
      software: 'Tekla Structures / SDS2'
    }
  ];

  const currentModel = models.find(m => m.id === selectedModel);

  return (
    <section id="bim-viewer" ref={sectionRef} className="section model-showcase-section">
      <div className="container">
        
        {/* Header */}
        <div className="section-title-wrap">
          <div className="section-badge">
            <Box size={14} />
            <span>Interactive Tekla & BIM 3D Studio</span>
          </div>
          <h2 className="section-title">
            Explore Our <span className="text-gradient">LOD 400 Structural Models</span>
          </h2>
          <p className="section-subtitle">
            Interact with real-world structural assemblies modeled by our engineering specialists. Switch rendering modes, inspect connection details, and verify clash-free tolerances.
          </p>
        </div>

        {/* Showcase Layout */}
        <div className="model-showcase-container mobile-anim-left">
          
          {/* Left: Model Selector Panel */}
          <div className="model-selector-panel">
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-cyan-bright)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Select Assembly Model
            </div>

            {models.map(m => (
              <div 
                key={m.id}
                className={`model-selector-item ${selectedModel === m.id ? 'active' : ''}`}
                onClick={() => {
                  setSelectedModel(m.id);
                  setSelectedHotspot(null);
                }}
              >
                <div className="model-item-title">{m.title}</div>
                <div style={{ fontSize: '0.72rem', color: '#38bdf8', fontFamily: 'var(--font-mono)', marginBottom: '0.25rem' }}>
                  {m.code}
                </div>
                <div className="model-item-desc">{m.desc}</div>
              </div>
            ))}

            {/* Model Metadata Card */}
            <div style={{
              marginTop: 'auto',
              padding: '1.25rem',
              background: 'rgba(15, 23, 42, 0.75)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(148, 163, 184, 0.12)'
            }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Assembly Specification
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '0.35rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Tonnage:</span>
                <span style={{ color: '#fff', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>{currentModel.tonnage}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '0.35rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Total Weld Length:</span>
                <span style={{ color: '#fff', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>{currentModel.welds}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '0.35rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Fasteners:</span>
                <span style={{ color: '#fff', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>{currentModel.bolts}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Modeling Engine:</span>
                <span style={{ color: 'var(--color-cyan-bright)', fontWeight: 600 }}>{currentModel.software}</span>
              </div>
            </div>
          </div>

          {/* Right: Display Panel & Viewport */}
          <div className="model-display-panel">
            
            {/* Toolbar */}
            <div className="model-toolbar">
              <div>
                <h3 style={{ fontSize: '1.2rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>{currentModel.title}</span>
                  <span className="badge-tag" style={{ fontSize: '0.7rem' }}>Zero Clash</span>
                </h3>
              </div>

              {/* View Modes */}
              <div className="model-mode-btn-group">
                <button 
                  className={`mode-btn ${renderMode === 'shaded' ? 'active' : ''}`}
                  onClick={() => setRenderMode('shaded')}
                >
                  Shaded
                </button>
                <button 
                  className={`mode-btn ${renderMode === 'wireframe' ? 'active' : ''}`}
                  onClick={() => setRenderMode('wireframe')}
                >
                  Wireframe
                </button>
                <button 
                  className={`mode-btn ${renderMode === 'stress' ? 'active' : ''}`}
                  onClick={() => setRenderMode('stress')}
                >
                  FEA Stress
                </button>
                <button 
                  className={`mode-btn ${renderMode === 'cnc' ? 'active' : ''}`}
                  onClick={() => setRenderMode('cnc')}
                >
                  CNC Toolpath
                </button>
                <button 
                  className="mode-btn"
                  onClick={() => setRotation(r => (r + 45) % 360)}
                  title="Rotate Model"
                >
                  <Rotate3D size={16} />
                </button>
              </div>
            </div>

            {/* Viewport Canvas */}
            <div className="interactive-viewport">
              <svg 
                viewBox="0 0 600 400" 
                style={{ 
                  width: '100%', 
                  height: '100%',
                  transform: `rotate(${rotation * 0.12}deg) scale(0.95)`,
                  transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                <defs>
                  {/* Shading Gradients */}
                  <linearGradient id="viewportSteel" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={renderMode === 'stress' ? '#dc2626' : (renderMode === 'cnc' ? '#0891b2' : '#1e293b')} />
                    <stop offset="50%" stopColor={renderMode === 'stress' ? '#f59e0b' : (renderMode === 'cnc' ? '#06b6d4' : '#334155')} />
                    <stop offset="100%" stopColor={renderMode === 'stress' ? '#2563eb' : (renderMode === 'cnc' ? '#67e8f9' : '#0f172a')} />
                  </linearGradient>

                  <linearGradient id="gussetGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={renderMode === 'stress' ? '#e11d48' : '#2563eb'} />
                    <stop offset="100%" stopColor={renderMode === 'stress' ? '#0284c7' : '#1d4ed8'} />
                  </linearGradient>

                  {/* CNC drill pattern */}
                  <pattern id="cncHole" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="5" cy="5" r="1.5" fill="#22d3ee" />
                  </pattern>
                </defs>

                {/* Background Grid */}
                <rect width="100%" height="100%" fill="none" />

                {/* MODEL 1: High Rise Moment Frame */}
                {selectedModel === 'moment' && (
                  <g>
                    {/* Vertical Column W14 */}
                    <polygon 
                      points="180,30 220,50 220,370 180,350" 
                      fill={renderMode === 'wireframe' ? 'none' : 'url(#viewportSteel)'} 
                      stroke="#38bdf8" 
                      strokeWidth={renderMode === 'wireframe' ? '1' : '2'}
                      strokeDasharray={renderMode === 'wireframe' ? '4,4' : 'none'}
                    />
                    <polygon 
                      points="220,180 280,150 280,260 220,290" 
                      fill={renderMode === 'wireframe' ? 'none' : 'rgba(15, 23, 42, 0.9)'} 
                      stroke="#0284c7" 
                      strokeWidth="1.5"
                    />
                    <polygon 
                      points="280,20 320,40 320,360 280,340" 
                      fill={renderMode === 'wireframe' ? 'none' : 'url(#viewportSteel)'} 
                      stroke="#38bdf8" 
                      strokeWidth={renderMode === 'wireframe' ? '1' : '2'}
                    />

                    {/* Horizontal W24 Beam extending to the right */}
                    <polygon 
                      points="320,110 540,140 570,125 350,95" 
                      fill={renderMode === 'wireframe' ? 'none' : 'url(#viewportSteel)'} 
                      stroke="#64748b" 
                      strokeWidth="1.5"
                    />
                    <polygon 
                      points="350,105 350,225 540,255 540,140" 
                      fill={renderMode === 'wireframe' ? 'none' : 'rgba(30, 41, 59, 0.8)'} 
                      stroke="#475569" 
                      strokeWidth="1"
                    />
                    <polygon 
                      points="320,230 540,260 570,245 350,215" 
                      fill={renderMode === 'wireframe' ? 'none' : 'url(#viewportSteel)'} 
                      stroke="#64748b" 
                      strokeWidth="1.5"
                    />

                    {/* Moment Plates */}
                    <polygon 
                      points="315,100 440,120 440,130 315,110" 
                      fill="url(#gussetGrad)" 
                      stroke="#00f2fe" 
                      strokeWidth="2"
                    />
                    <polygon 
                      points="315,225 440,245 440,255 315,235" 
                      fill="url(#gussetGrad)" 
                      stroke="#00f2fe" 
                      strokeWidth="2"
                    />

                    {/* Stiffeners in column */}
                    <polygon points="220,125 280,105 280,113 220,133" fill="#38bdf8" stroke="#00f2fe" />
                    <polygon points="220,245 280,225 280,233 220,253" fill="#38bdf8" stroke="#00f2fe" />

                    {/* Shear Tab Bolts */}
                    {[0, 1, 2, 3].map(i => (
                      <circle 
                        key={i} 
                        cx={365 + (i % 2) * 25} 
                        cy={150 + Math.floor(i / 2) * 30} 
                        r="4.5" 
                        fill="#00f2fe" 
                        stroke="#ffffff" 
                        strokeWidth="1"
                      />
                    ))}

                    {/* CNC Toolpath overlay if active */}
                    {renderMode === 'cnc' && (
                      <g>
                        <path d="M 320 110 L 540 140 L 540 255 L 320 230 Z" fill="none" stroke="#22d3ee" strokeWidth="1" strokeDasharray="3,3" />
                        <circle cx="365" cy="150" r="10" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="2,2"/>
                        <circle cx="390" cy="150" r="10" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="2,2"/>
                        <text x="410" y="155" fill="#ef4444" fontSize="10" fontFamily="var(--font-mono)">CNC DRILL LINE DSTV</text>
                      </g>
                    )}
                  </g>
                )}

                {/* MODEL 2: Heavy Chevron Bracing */}
                {selectedModel === 'bracing' && (
                  <g>
                    {/* Upper Horizontal Beam */}
                    <polygon points="60,60 540,60 540,95 60,95" fill={renderMode === 'wireframe' ? 'none' : 'url(#viewportSteel)'} stroke="#38bdf8" strokeWidth="2" />
                    
                    {/* Big Center Gusset Plate */}
                    <polygon points="220,95 380,95 350,220 250,220" fill="url(#gussetGrad)" stroke="#00f2fe" strokeWidth="2.5" />
                    
                    {/* Left Diagonal HSS 8x8 Brace */}
                    <polygon points="120,350 255,210 275,225 140,365" fill={renderMode === 'wireframe' ? 'none' : 'url(#viewportSteel)'} stroke="#64748b" strokeWidth="2" />
                    
                    {/* Right Diagonal HSS 8x8 Brace */}
                    <polygon points="480,350 345,210 325,225 460,365" fill={renderMode === 'wireframe' ? 'none' : 'url(#viewportSteel)'} stroke="#64748b" strokeWidth="2" />

                    {/* Gusset Bolt Patterns */}
                    {[0,1,2,3,4].map(i => (
                      <g key={i}>
                        <circle cx={245 + i * 8} cy={165 + i * 8} r="4" fill="#00f2fe" stroke="#fff" />
                        <circle cx={355 - i * 8} cy={165 + i * 8} r="4" fill="#00f2fe" stroke="#fff" />
                      </g>
                    ))}

                    <text x="260" y="80" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="var(--font-mono)">GUSSET PL 1-1/4" (A572-50)</text>
                  </g>
                )}

                {/* MODEL 3: Architectural Pan Stair */}
                {selectedModel === 'stair' && (
                  <g>
                    {/* Lower & Upper stringer channels */}
                    <polygon points="80,340 420,80 440,95 100,355" fill="url(#viewportSteel)" stroke="#38bdf8" strokeWidth="2" />
                    <polygon points="140,370 480,110 500,125 160,385" fill="url(#viewportSteel)" stroke="#0284c7" strokeWidth="2" />

                    {/* Stair Pan Steps */}
                    {[0, 1, 2, 3, 4, 5].map(step => {
                      const sx = 120 + step * 50;
                      const sy = 330 - step * 40;
                      return (
                        <g key={step}>
                          {/* Tread */}
                          <polygon points={`${sx},${sy} ${sx + 55},${sy} ${sx + 85},${sy + 18} ${sx + 30},${sy + 18}`} fill="#334155" stroke="#22d3ee" strokeWidth="1.2" />
                          {/* Riser */}
                          <polygon points={`${sx},${sy} ${sx + 30},${sy + 18} ${sx + 30},${sy + 45} ${sx},${sy + 27}`} fill="#1e293b" stroke="#00f2fe" strokeWidth="1" />
                        </g>
                      );
                    })}

                    {/* Handrail & Guardrail Top Rail */}
                    <path d="M 100 280 L 440 20" stroke="#00f2fe" strokeWidth="4" fill="none" />
                    <path d="M 110 300 L 450 40" stroke="#64748b" strokeWidth="2" fill="none" />
                    
                    {/* Posts */}
                    <line x1="120" y1="330" x2="120" y2="270" stroke="#00f2fe" strokeWidth="2.5" />
                    <line x1="270" y1="210" x2="270" y2="150" stroke="#00f2fe" strokeWidth="2.5" />
                    <line x1="420" y1="90" x2="420" y2="30" stroke="#00f2fe" strokeWidth="2.5" />
                  </g>
                )}
              </svg>

              {/* Status Overlay */}
              <div style={{
                position: 'absolute',
                top: '15px',
                left: '15px',
                background: 'rgba(9, 14, 26, 0.85)',
                padding: '0.4rem 0.8rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(6, 182, 212, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8rem',
                color: 'var(--color-cyan-bright)',
                fontFamily: 'var(--font-mono)'
              }}>
                <Activity size={14} />
                <span>Tekla Live Sync • 0 Clashes Detected</span>
              </div>

              {/* Hotspot details info prompt */}
              <div style={{
                position: 'absolute',
                bottom: '15px',
                left: '15px',
                background: 'rgba(15, 23, 42, 0.9)',
                border: '1px solid rgba(148, 163, 184, 0.2)',
                padding: '0.5rem 0.9rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.78rem',
                color: '#cbd5e1'
              }}>
                <strong>Active Mode:</strong> {renderMode.toUpperCase()} | <strong>Model LOD:</strong> 400 (Fabrication-Ready)
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

