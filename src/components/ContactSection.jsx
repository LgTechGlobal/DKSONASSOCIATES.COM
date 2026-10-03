import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  UploadCloud, 
  Clock, 
  ShieldCheck,
  Building2,
  FileCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection({ initialFormData }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Commercial High-Rise',
    tonnage: '350 Tons',
    turnaround: 'Standard (4-6 Weeks)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialFormData) {
      setFormData(prev => ({
        ...prev,
        tonnage: initialFormData.tonnage || prev.tonnage,
        projectType: initialFormData.scope || prev.projectType,
        message: `Estimated drafting hours: ${initialFormData.estimatedHours || ''}. Turnaround: ${initialFormData.turnaround || ''}.`
      }));
    }
  }, [initialFormData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#3b82f6', '#6366f1', '#22d3ee', '#ffffff']
      });
    }, 700);
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid rgba(6, 182, 212, 0.15)' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-title-wrap">
          <div className="section-badge">
            <Mail size={14} />
            <span>Fast Proposal Request</span>
          </div>
          <h2 className="section-title">
            Request A Detailed <span className="text-gradient">Quote & Project Schedule</span>
          </h2>
          <p className="section-subtitle">
            Send us your structural design drawings or project scope. Our senior estimating squad will review your requirements and provide a fixed-price proposal within 24 hours.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="contact-grid">
          
          {/* Left: Office Locations & Direct Contacts */}
          <div className="contact-info-panel">
            
            {/* North America Office */}
            <div className="contact-card-item">
              <div className="contact-icon-box">
                <MapPin size={22} />
              </div>
              <div>
                <div className="contact-item-title">Headquarters</div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '0.5rem' }}>
                  Cuttack, Odisha
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-cyan-bright)', fontFamily: 'var(--font-mono)' }}>
                  India
                </div>
              </div>
            </div>

            {/* Direct Phone */}
            <div className="contact-card-item">
              <div className="contact-icon-box">
                <Phone size={22} />
              </div>
              <div>
                <div className="contact-item-title">Direct Calling Lines</div>
                <div style={{ fontSize: '0.9rem', color: '#fff', marginBottom: '0.25rem' }}>
                  <strong>Number:</strong> <a href="tel:+919337491479" style={{ color: 'var(--color-cyan-bright)' }}>+91-9337491479</a>
                </div>
              </div>
            </div>

            {/* Direct Email */}
            <div className="contact-card-item">
              <div className="contact-icon-box">
                <Mail size={22} />
              </div>
              <div>
                <div className="contact-item-title">Official Project Desk</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <a href="mailto:sales@dksonassociates.com" style={{ color: 'var(--color-cyan-bright)', fontWeight: 600 }}>
                    sales@dksonassociates.com
                  </a>
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                  Direct drawing transfers up to 500MB via secure cloud link
                </div>
              </div>
            </div>

            {/* Turnaround Guarantee Badge */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(99, 102, 241, 0.15))',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <Clock size={32} style={{ color: 'var(--color-cyan-bright)', flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>24-Hour Bid Turnaround</div>
                <div style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>
                  Submit before 5:00 PM CST to receive your full breakdown and staffing plan by tomorrow morning.
                </div>
              </div>
            </div>

          </div>

          {/* Right: Quote Request Form */}
          <div id="quote-form" className="quote-form-card">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  background: 'rgba(34, 197, 94, 0.15)',
                  color: '#22c55e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  border: '1px solid rgba(34, 197, 94, 0.4)'
                }}>
                  <CheckCircle size={38} />
                </div>
                <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.75rem' }}>
                  Detailing Request Received!
                </h3>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto 1.5rem', fontSize: '0.98rem' }}>
                  Thank you, <strong>{formData.name || 'Valued Partner'}</strong>. Our estimating squad is reviewing your project parameters ({formData.tonnage}, {formData.projectType}) and will deliver a detailed proposal shortly.
                </p>
                <button 
                  className="btn-outline"
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another Project Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '1.5rem' }}>
                  Project Proposal Form
                </h3>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Robert Miller"
                      className="form-input"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Work Email *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. rmiller@fabricators.com"
                      className="form-input"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Company / Firm Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Apex Steel Fabrication"
                      className="form-input"
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="e.g. (816) 555-0198"
                      className="form-input"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Project Category</label>
                    <select 
                      className="form-select"
                      value={formData.projectType}
                      onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                    >
                      <option value="Commercial High-Rise">Commercial High-Rise & Office</option>
                      <option value="Industrial Logistics">Industrial Warehouse & Logistics</option>
                      <option value="Bridges & Infrastructure">Bridges & Heavy Civil Infrastructure</option>
                      <option value="Healthcare & Institutional">Healthcare & University Facilities</option>
                      <option value="Miscellaneous Metals">Miscellaneous Stairs, Rails & Canopies</option>
                      <option value="PE Connection Stamping">PE Stamped Connection Design Only</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Approximate Steel Tonnage</label>
                    <input 
                      type="text" 
                      placeholder="e.g. 500 Tons"
                      className="form-input"
                      value={formData.tonnage}
                      onChange={e => setFormData({ ...formData, tonnage: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Upload Design Drawings / Specs (Optional)</label>
                  <div style={{
                    border: '1px dashed rgba(6, 182, 212, 0.4)',
                    background: 'rgba(10, 15, 29, 0.6)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.25rem',
                    textAlign: 'center',
                    cursor: 'pointer'
                  }}>
                    <UploadCloud size={24} style={{ color: 'var(--color-cyan-bright)', marginBottom: '0.4rem' }} />
                    <div style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
                      Drag and drop PDF drawing sheets, Revit/IFC files, or design packages
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      Supports files up to 250MB
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Additional Project Details & Notes</label>
                  <textarea 
                    rows={3}
                    placeholder="Specific delivery milestones, governing building codes, software preferences..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-primary" 
                  style={{ width: '100%', padding: '1rem', marginTop: '0.5rem' }}
                  disabled={loading}
                >
                  {loading ? (
                    <span>Processing Proposal Request...</span>
                  ) : (
                    <>
                      <span>Submit Proposal Request</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}



