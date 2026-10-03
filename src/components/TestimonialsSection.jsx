import React, { useEffect, useRef } from 'react';
import { Star, Quote, Award, CheckCircle, ShieldCheck } from 'lucide-react';

export default function TestimonialsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.testimonial-card');
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

  const reviews = [
    {
      name: 'Marcus Vance',
      role: 'VP of Fabrication Operations',
      company: 'Midwest Structural Steel Fabricators (Chicago, IL)',
      project: '3,800 Ton Multi-Story Distribution Hub',
      stars: 5,
      quote: 'Dkson Associates delivered over 500 fabrication sheets 10 days ahead of our crane mobilization date. When our erectors hung the steel in the field, there was not a single hole misaligned. Their overnight RFI response time is unmatched in this industry.'
    },
    {
      name: 'David Reynolds, PE, SE',
      role: 'Chief Structural Engineer',
      company: 'Apex Design-Build Partners (Dallas, TX)',
      project: '42-Story High-Rise Office Tower',
      stars: 5,
      quote: 'Having their PE stamped connection design team working directly alongside the Tekla detailing squads eliminated the typical 3-week ping-pong between engineer of record and detailer. Their moment connection calculations passed city plan review on the first submission.'
    },
    {
      name: 'Brent Holmgren',
      role: 'General Manager',
      company: 'Pacific Coast Steel & Ironworks (Seattle, WA)',
      project: 'Monumental Airport Terminal Canopy & Pan Stairs',
      stars: 5,
      quote: 'Their miscellaneous metals detailing squad handled monumental curved stairs and seismic canopies that two other detailing firms declined to touch. The 3D model clash checks saved us at least $120,000 in potential field rework.'
    }
  ];


  return (
    <section ref={sectionRef} className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid rgba(148, 163, 184, 0.1)' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-title-wrap">
          <div className="section-badge">
            <Quote size={14} />
            <span>Fabricator Endorsements</span>
          </div>
          <h2 className="section-title">
            Trusted By Premier <span className="text-gradient">Steel Fabricators & EPC Firms</span>
          </h2>
          <p className="section-subtitle">
            See how Dkson Associates keeps fabricators ahead of schedule, under budget, and completely free of field erection conflicts.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginBottom: '4.5rem'
        }}>
          {reviews.map((r, idx) => (
            <div key={idx} className={`testimonial-card glass-card mobile-anim-${idx % 2 === 0 ? 'left' : 'right'}`} style={{ display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
              
              {/* Decorative Quote Icon */}
              <div style={{ position: 'absolute', top: '-15px', right: '-15px', opacity: 0.04, transform: 'rotate(10deg)' }}>
                <Quote size={120} />
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.25rem', color: '#f59e0b', position: 'relative', zIndex: 1 }}>
                {[...Array(r.stars)].map((_, i) => (
                  <Star key={i} size={18} fill="#f59e0b" />
                ))}
              </div>

              {/* Quote */}
              <p style={{ 
                color: '#e2e8f0', 
                fontSize: '1rem', 
                lineHeight: '1.75', 
                fontStyle: 'italic',
                marginBottom: '1.75rem',
                flexGrow: 1,
                position: 'relative',
                zIndex: 1
              }}>
                "{r.quote}"
              </p>



            </div>
          ))}
        </div>



      </div>
    </section>
  );
}

