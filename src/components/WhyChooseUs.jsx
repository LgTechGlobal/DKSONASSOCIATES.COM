import React, { useEffect, useRef } from 'react';
import { 
  Check, 
  X, 
  ShieldCheck, 
  Clock, 
  DollarSign, 
  Users, 
  Award, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function WhyChooseUs({ onOpenQuoteModal }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('[data-award-card="true"]');
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
          } else { entry.target.classList.remove('mobile-card-arrived'); }
        });
      },
      {
        threshold: 0.02,
        rootMargin: '0px 0px -10px 0px'
      }
    );

    cards.forEach((card) => {
      cardObserver.observe(card);
    });

    return () => cardObserver.disconnect();
  }, []);

  const comparisonItems = [
    {
      metric: 'RFI & Revision Turnaround',
      inHouse: '3 - 5 business days (standard working hours only)',
      dkson: '12 - 24 hours (overnight time-zone delivery advantage)',
      highlight: true
    },
    {
      metric: 'Detailing & Engineering Cost',
      inHouse: 'High overhead, fixed salaries, benefits & downtime cost',
      dkson: '40% - 50% cost savings with flexible per-ton or hourly billing',
      highlight: true
    },
    {
      metric: 'PE Stamping Across US States',
      inHouse: 'Limited to 1 or 2 local state licenses',
      dkson: 'Licensed Professional Engineers in 49 of 50 US States',
      highlight: true
    },
    {
      metric: 'Software Licenses & Hardware Overhead',
      inHouse: '$15k - $25k annually per Tekla seat plus workstation depreciation',
      dkson: 'Zero software or hardware capital expense for your firm',
      highlight: false
    },
    {
      metric: 'Quality Assurance Process',
      inHouse: 'Single checker review (often rushed under deadlines)',
      dkson: '3-tier QA gateway: Model Auditor + Senior Checker + Chief Engineer',
      highlight: true
    },
    {
      metric: 'Surge Capacity Scalability',
      inHouse: 'Struggles with simultaneous multi-thousand-ton jobs',
      dkson: 'Instant squad scaling from 2 to 25+ dedicated detailers on demand',
      highlight: true
    }
  ];

  const pillars = [
    {
      icon: <Clock size={28} />,
      title: 'Overnight Velocity Advantage',
      desc: 'Our Overland Park, KS project directors coordinate directly with your fabrication managers by day, while our global detailing squads advance drawings overnight.'
    },
    {
      icon: <DollarSign size={28} />,
      title: 'Maximize Fabricator Margins',
      desc: 'Eliminate costly in-house idle time and expensive software subscription overhead while boosting your bid competitiveness on multi-million dollar contracts.'
    },
    {
      icon: <ShieldCheck size={28} />,
      title: 'AISC & NISD Certified Rigor',
      desc: 'Every anchor bolt plan, erection drawing, and CNC file is audited against strict AISC 360 and NISD Class 1 Quality Procedure standards.'
    },
    {
      icon: <Users size={28} />,
      title: 'Dedicated Project Squads',
      desc: 'You work with consistent project managers and lead detailers who learn your shop standards, preferred connection details, and tooling preferences.'
    }
  ];

  return (
    <section id="why-us" ref={sectionRef} className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        
        {/* Title */}
        <div className="section-title-wrap">
          <div className="section-badge">
            <Award size={14} />
            <span>The Dkson Advantage</span>
          </div>
          <h2 className="section-title">
            Why Leading Steel Fabricators <span className="text-gradient">Choose Dksonassociates</span>
          </h2>
          <p className="section-subtitle">
            We solve the structural steel industry’s biggest bottlenecks: drafting backlogs, expensive PE connection stamping, and costly field fit-up errors.
          </p>
        </div>

        {/* 4 Pillars Grid with alternating mobile scroll animation */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.75rem',
          marginBottom: '4.5rem'
        }}>
          {pillars.map((p, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div 
                key={idx} 
                data-award-card="true"
                className={`glass-card mobile-anim-${isLeft ? 'left' : 'right'}`}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(99, 102, 241, 0.2))',
                  border: '1px solid rgba(6, 182, 212, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-cyan-bright)',
                  marginBottom: '1.25rem'
                }}>
                  {p.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.75rem' }}>{p.title}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}




