import React, { useState } from 'react';
import { 
  Calculator, 
  Clock, 
  Users, 
  TrendingUp, 
  ArrowRight, 
  ShieldCheck,
  CheckCircle2,
  FileSpreadsheet
} from 'lucide-react';

export default function CostEstimator({ onApplyEstimateToForm }) {
  const [tonnage, setTonnage] = useState(450);
  const [complexity, setComplexity] = useState('medium'); // 'simple' | 'medium' | 'complex'
  const [scope, setScope] = useState('full'); // 'detailing' | 'connection' | 'full'
  const [schedule, setSchedule] = useState('standard'); // 'standard' | 'fast'
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.estimator-card');
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

  // Dynamic calculations based on industry standard Tekla detailing hours per ton
  const complexityMultiplier = complexity === 'simple' ? 1.8 : (complexity === 'medium' ? 2.5 : 3.6);
  const scopeMultiplier = scope === 'detailing' ? 1.0 : (scope === 'connection' ? 0.6 : 1.35);
  const estimatedHours = Math.round(tonnage * complexityMultiplier * scopeMultiplier);

  // Turnaround in weeks
  const baseWeeks = Math.max(2, Math.round(estimatedHours / (schedule === 'fast' ? 320 : 160)));
  
  // Squad size recommended
  const squadSize = schedule === 'fast' 
    ? Math.max(3, Math.min(18, Math.ceil(estimatedHours / (baseWeeks * 40))))
    : Math.max(2, Math.min(10, Math.ceil(estimatedHours / (baseWeeks * 40))));

  const handleApply = () => {
    if (onApplyEstimateToForm) {
      onApplyEstimateToForm({
        tonnage: `${tonnage} Tons`,
        complexity: complexity.toUpperCase(),
        scope: scope === 'full' ? 'Complete Detailing + PE Stamped Calcs' : (scope === 'detailing' ? 'Structural Detailing Only' : 'Connection Design Only'),
        estimatedHours,
        turnaround: `${baseWeeks} Weeks (${schedule.toUpperCase()})`
      });
    }
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="estimator" ref={sectionRef} className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-title-wrap">
          <div className="section-badge">
            <Calculator size={14} />
            <span>Interactive Project Estimator</span>
          </div>
          <h2 className="section-title">
            Calculate Your <span className="text-gradient">Detailing Schedule & Squad Size</span>
          </h2>
          <p className="section-subtitle">
            Configure your project parameters to get instantaneous estimates for drafting hours, dedicated squad sizing, and turnaround delivery windows.
          </p>
        </div>

        {/* Main Estimator Card */}
        <div className="estimator-card mobile-anim-left">
          
          {/* Controls Column */}
          <div className="estimator-controls">
            
            {/* Tonnage Slider */}
            <div className="estimator-control-group">
              <label className="estimator-label">
                Estimated Structural Steel Tonnage
              </label>
              <div className="slider-wrap">
                <input 
                  type="range" 
                  min="20" 
                  max="3500" 
                  step="10"
                  value={tonnage}
                  onChange={e => setTonnage(Number(e.target.value))}
                  className="range-slider"
                />
                <div className="slider-val-display">
                  <span>20 Tons (Small)</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: 800 }}>{tonnage.toLocaleString()} Tons</span>
                  <span>3,500+ Tons (Mega)</span>
                </div>
              </div>
            </div>

            {/* Project Complexity */}
            <div className="estimator-control-group">
              <label className="estimator-label">
                Framing & Connection Complexity
              </label>
              <div className="estimator-options-grid">
                <button 
                  className={`estimator-opt-btn ${complexity === 'simple' ? 'active' : ''}`}
                  onClick={() => setComplexity('simple')}
                >
                  Standard (Warehouse / Pre-Eng)
                </button>
                <button 
                  className={`estimator-opt-btn ${complexity === 'medium' ? 'active' : ''}`}
                  onClick={() => setComplexity('medium')}
                >
                  Medium (Multi-Story / Mezzanines)
                </button>
                <button 
                  className={`estimator-opt-btn ${complexity === 'complex' ? 'active' : ''}`}
                  onClick={() => setComplexity('complex')}
                  style={{ gridColumn: 'span 2' }}
                >
                  Complex (High-Rise SMRF / Industrial Processing / AESS)
                </button>
              </div>
            </div>

            {/* Scope of Work */}
            <div className="estimator-control-group">
              <label className="estimator-label">
                Scope of Deliverables
              </label>
              <div className="estimator-options-grid">
                <button 
                  className={`estimator-opt-btn ${scope === 'detailing' ? 'active' : ''}`}
                  onClick={() => setScope('detailing')}
                >
                  Shop Drawings & E-Sheets
                </button>
                <button 
                  className={`estimator-opt-btn ${scope === 'connection' ? 'active' : ''}`}
                  onClick={() => setScope('connection')}
                >
                  PE Connection Design Only
                </button>
                <button 
                  className={`estimator-opt-btn ${scope === 'full' ? 'active' : ''}`}
                  onClick={() => setScope('full')}
                  style={{ gridColumn: 'span 2' }}
                >
                  Complete Turnkey: Detailing + PE Stamping + CNC + BIM
                </button>
              </div>
            </div>

            {/* Delivery Speed */}
            <div className="estimator-control-group" style={{ marginBottom: 0 }}>
              <label className="estimator-label">
                Schedule Priority
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <button 
                  className={`estimator-opt-btn ${schedule === 'standard' ? 'active' : ''}`}
                  onClick={() => setSchedule('standard')}
                >
                  Standard Delivery
                </button>
                <button 
                  className={`estimator-opt-btn ${schedule === 'fast' ? 'active' : ''}`}
                  onClick={() => setSchedule('fast')}
                >
                  ⚡ Fast-Track 24/7 Dual Shift
                </button>
              </div>
            </div>

          </div>

          {/* Results Output Column */}
          <div className="estimator-output-panel">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <TrendingUp size={20} style={{ color: 'var(--color-cyan-bright)' }} />
                <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>Instant Estimate Summary</h3>
              </div>

              <div className="estimator-results-grid">
                <div className="est-result-item">
                  <div className="est-res-val">{estimatedHours.toLocaleString()}</div>
                  <div className="est-res-lbl">Estimated Drafting Hours</div>
                </div>

                <div className="est-result-item">
                  <div className="est-res-val">{baseWeeks} Wks</div>
                  <div className="est-res-lbl">Turnaround Window</div>
                </div>

                <div className="est-result-item">
                  <div className="est-res-val">{squadSize} Experts</div>
                  <div className="est-res-lbl">Dedicated Detailing Squad</div>
                </div>

                <div className="est-result-item">
                  <div className="est-res-val" style={{ color: '#22c55e' }}>~45%</div>
                  <div className="est-res-lbl">Savings vs In-House Rates</div>
                </div>
              </div>

              {/* Inclusions summary */}
              <div style={{ fontSize: '0.82rem', color: '#94a3b8', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={15} style={{ color: 'var(--color-cyan-bright)' }} />
                  <span>Includes 100% AISC Quality Audit Check by Senior Checker</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={15} style={{ color: 'var(--color-cyan-bright)' }} />
                  <span>Direct automated CNC / DSTV / KSS files included free</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={15} style={{ color: 'var(--color-cyan-bright)' }} />
                  <span>Overnight RFI resolution protocol</span>
                </div>
              </div>
            </div>

            {/* Apply button */}
            <button 
              className="btn-primary" 
              style={{ width: '100%', padding: '1rem' }}
              onClick={handleApply}
            >
              <span>Lock In Estimate & Request Proposal</span>
              <ArrowRight size={18} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

