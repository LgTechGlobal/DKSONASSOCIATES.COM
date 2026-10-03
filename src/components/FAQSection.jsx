import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How does Dkson Associates manage communications and RFIs between US clients and global squads?',
      a: 'We operate a synchronized dual-hub delivery model. Our Overland Park, Kansas project management team coordinates directly with your shop superintendents, engineers, and detailers during US Central time business hours. While North America sleeps, our 24/7 global engineering center processes drawing revisions, generates shop sheets, and drafts RFIs, allowing you to wake up to completed deliverables and overnight turnaround.'
    },
    {
      q: 'In which US states can Dkson Associates provide PE stamped connection design packages?',
      a: 'We have licensed Professional Engineers (PE) and Structural Engineers (SE) registered in 49 of the 50 US States. Our engineers calculate, verify, and seal complete connection calculation books for moment frames, complex bracing, trusses, and base plates strictly compliant with AISC 360, AISC 341, and local state building codes.'
    },
    {
      q: 'What automated CNC machine deliverables and software exports do you provide?',
      a: 'We deliver comprehensive digital data packages compatible with all modern steel fabrication machinery: DSTV (.nc1) files for automated beam drill lines (Peddinghaus, Voortman, Ficep), DXF files for CNC plasma and waterjet plate tables, FabTrol Kiss (.kss) exports, FabSuite, STRUMIS, and automated bill of materials (ABM/BOM) with electronic E-Sheets.'
    },
    {
      q: 'How do you guarantee 99.8% first-pass drawing approval and zero field erection clashes?',
      a: 'Every project goes through our rigorous 3-Tier Quality Audit System before leaving our office. First, the 3D Tekla model is checked for geometric and spatial clash conflicts with architectural and MEP federated models. Next, an independent Senior Quality Checker performs a 100% check against design contract drawings and AISC tolerances. Finally, the Chief Project Engineer signs off on drawing completeness.'
    },
    {
      q: 'How quickly can you mobilize a dedicated detailing squad for an awarded contract?',
      a: 'For urgent fast-track projects, we can mobilize a dedicated squad (Lead Detailer, Modelers, Checkers, and Connection Engineer) within 24 to 48 hours of receiving structural contract drawings and design specs. Our bench of 120+ structural engineering specialists enables us to handle projects from 50 tons up to 10,000+ tons without delays.'
    },
    {
      q: 'Can you customize drawings to match our specific shop standards and welding capabilities?',
      a: 'Yes, 100%. Prior to project kickoff, we conduct an alignment session to capture your shop standards: preferred bolt grades (A325 vs A490), standard hole clearances, maximum shipping piece lengths, specific weld prep standards, and automated drill line tooling constraints. All drawings and CNC files are tailored to your shop machinery.'
    }
  ];

  return (
    <section id="faq" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        
        {/* Title */}
        <div className="section-title-wrap">
          <div className="section-badge">
            <HelpCircle size={14} />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="section-title">
            Answers To Key <span className="text-gradient">Detailing & Engineering Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about our quality process, PE stamping coverage, software platforms, and rapid project kickoff.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="faq-wrap">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`faq-card ${isOpen ? 'open' : ''}`}
              >
                <div 
                  className="faq-header" 
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                >
                  <h3 className="faq-question">{faq.q}</h3>
                  <ChevronDown size={20} className="faq-toggle-icon" />
                </div>
                {isOpen && (
                  <div className="faq-body">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

