import React, { useEffect, useRef } from 'react';
import { ShieldCheck } from 'lucide-react';

export default function StandardsSection() {
  const sectionRef = useRef(null);

  const standards = [
    { 
      name: 'AISC', 
      desc: 'American Institute of Steel Construction',
      details: 'Ensuring safe, efficient, and robust structural steel design.'
    },
    { 
      name: 'CISC', 
      desc: 'Canadian Institute of Steel Construction',
      details: 'Meeting top Canadian codes for steel fabrication & quality.'
    },
    { 
      name: 'NISD', 
      desc: 'National Institute of Steel Detailing',
      details: 'Maintaining the highest accuracy in shop drawings & BIM.'
    },
    { 
      name: 'OSHA', 
      desc: 'Occupational Safety and Health Administration',
      details: 'Complying with strict workplace and field safety regulations.'
    },
    { 
      name: 'AWS', 
      desc: 'American Welding Society',
      details: 'Certifying weld quality, joint strength, and structural integrity.'
    }
  ];

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.standard-card');
    if (!cards || !('IntersectionObserver' in window)) {
      cards?.forEach(c => c.classList.add('std-card-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('std-card-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section" style={{ padding: '3rem 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        
        <div style={{
          background: 'rgba(10, 15, 29, 0.6)',
          border: '1px solid rgba(148, 163, 184, 0.1)',
          borderRadius: 'var(--radius-xl)',
          padding: '3rem 2rem',
          textAlign: 'center'
        }}>
          {/* Badge */}
          <div className="section-badge" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
            <ShieldCheck size={14} />
            <span>Safety & Quality Standards</span>
          </div>

          <h2 style={{ 
            fontSize: '1.75rem', 
            fontWeight: '700', 
            color: '#fff', 
            marginBottom: '1rem',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            Standards We <span className="text-gradient">Followed</span>
          </h2>
          <p style={{
            color: 'var(--text-muted)',
            fontSize: '0.95rem',
            lineHeight: '1.6',
            maxWidth: '650px',
            margin: '0 auto 2.5rem auto'
          }}>
            Our engineering and detailing processes strictly adhere to the rigorous guidelines set by premier global institutions. This ensures uncompromising safety, precision, and structural integrity in every project we deliver.
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.5rem'
          }}>
            {standards.map((std, idx) => (
              <div
                key={idx}
                className="standard-card"
                style={{ '--delay': `${idx * 0.12}s` }}
              >
                {/* Glowing top border line */}
                <div className="std-card-glow-line" />

                <div className="std-name">{std.name}</div>

                <div style={{
                  color: '#e2e8f0',
                  fontWeight: '600',
                  fontSize: '0.85rem',
                  lineHeight: '1.4',
                  textAlign: 'center',
                  marginBottom: '0.75rem'
                }}>
                  {std.desc}
                </div>

                <div style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.8rem',
                  lineHeight: '1.5',
                  textAlign: 'center',
                  borderTop: '1px solid rgba(148, 163, 184, 0.1)',
                  paddingTop: '0.75rem'
                }}>
                  {std.details}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .standard-card {
            background: linear-gradient(145deg, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.9));
            border: 1px solid rgba(56, 189, 248, 0.2);
            border-radius: 8px;
            padding: 1.5rem;
            min-width: 220px;
            max-width: 260px;
            flex: 1 1 220px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);
            position: relative;
            overflow: hidden;
            cursor: default;
            /* Scroll-entry state */
            opacity: 0;
            transform: translateY(40px) scale(0.97);
            transition:
              opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) var(--delay, 0s),
              transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) var(--delay, 0s),
              box-shadow 0.4s ease,
              border-color 0.4s ease;
          }

          .standard-card.std-card-visible {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

          .standard-card:hover {
            transform: translateY(-8px) scale(1.03) !important;
            box-shadow: 0 16px 28px -8px rgba(6, 182, 212, 0.35);
            border-color: rgba(6, 182, 212, 0.65) !important;
          }

          .std-card-glow-line {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--color-cyan-bright), transparent);
            opacity: 0;
            transition: opacity 0.4s ease;
          }

          .standard-card:hover .std-card-glow-line {
            opacity: 1;
          }

          .std-name {
            color: var(--color-cyan-bright);
            font-weight: bold;
            font-size: 1.35rem;
            margin-bottom: 0.5rem;
            transition: color 0.3s ease, text-shadow 0.3s ease;
          }

          .standard-card:hover .std-name {
            color: #ffffff;
            text-shadow: 0 0 10px rgba(6, 182, 212, 0.9);
          }
        `}</style>
      </div>
    </section>
  );
}
