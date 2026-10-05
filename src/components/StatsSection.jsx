import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Building, Compass, CheckCircle } from 'lucide-react';

export default function StatsSection() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    years: 0,
    projects: 0,
    tons: 0,
    approval: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let frame = 0;
          const totalFrames = 60;
          const interval = setInterval(() => {
            frame++;
            const progress = Math.min(frame / totalFrames, 1);
            // easeOutExpo
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            setCounts({
              years: Math.floor(ease * 3),
              projects: Math.floor(ease * 100),
              tons: Math.floor(ease * 100),
              approval: +(ease * 99.8).toFixed(1)
            });

            if (frame >= totalFrames) {
              clearInterval(interval);
            }
          }, 25);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Scroll-based entrance animation for cards strictly on mobile
  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('[data-stat-card="true"]');
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

  const stats = [
    {
      icon: <Calendar size={22} />,
      value: `${counts.years}+`,
      label: 'Years Engineering Excellence',
      sub: 'Founded in 2022'
    },
    {
      icon: <Building size={22} />,
      value: `${counts.projects.toLocaleString()}+`,
      label: 'Commercial & Industrial Projects',
      sub: 'Across India'
    },
    {
      icon: <Compass size={22} />,
      value: `${counts.tons}k+`,
      label: 'Tons of Steel Detailed',
      sub: 'Fabrication-Ready'
    },
    {
      icon: <CheckCircle size={22} />,
      value: `${counts.approval}%`,
      label: 'Shop Drawing Approval Rate',
      sub: 'Zero Field Rework'
    }
  ];

  return (
    <section ref={sectionRef} className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div 
                key={idx} 
                data-stat-card="true"
                className={`stat-card mobile-anim-${isLeft ? 'left' : 'right'}`}
              >
                <div className="stat-icon">
                  {stat.icon}
                </div>
                <div className="stat-number">
                  {stat.value}
                </div>
                <div className="stat-label">
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                  {stat.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

