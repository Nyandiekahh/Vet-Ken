// src/components/sections/Services/Services.tsx
import React, { useEffect, useRef } from 'react';
import styles from './Services.module.css';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    icon: '💉',
    title: 'Veterinary Care',
    description: 'Complete health checks, vaccinations, and treatment services for all animals.'
  },
  {
    id: 2,
    icon: '🦴',
    title: 'Nutrition & Feed',
    description: 'Expert advice on animal nutrition and quality feed supplements.'
  },
  {
    id: 3,
    icon: '🏥',
    title: 'Emergency Services',
    description: '24/7 emergency veterinary care for critical situations.'
  },
  {
    id: 4,
    icon: '🔬',
    title: 'Laboratory Services',
    description: 'Advanced diagnostic testing and lab work for accurate treatment.'
  },
  {
    id: 5,
    icon: '🐄',
    title: 'Breeding Services',
    description: 'Professional breeding services including artificial insemination.'
  },
  {
    id: 6,
    icon: '🦠',
    title: 'Parasite Control',
    description: 'Effective solutions for internal and external parasite management.'
  }
];

const Services = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, observerOptions);

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.subtitle}>
            Comprehensive veterinary care and agricultural solutions for your animals
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className={styles.card}
              ref={el => cardsRef.current[index] = el}
            >
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{service.icon}</span>
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
              <button className={styles.learnMore}>Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;