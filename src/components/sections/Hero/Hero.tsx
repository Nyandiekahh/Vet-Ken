// src/components/sections/Hero/Hero.tsx
import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.highlight}>Expert Veterinary Care</span>
          <br />
          For Your Animals
        </h1>
        
        <p className={styles.subtitle}>
          Professional veterinary services and comprehensive animal healthcare solutions
        </p>
        
        <div className={styles.cta}>
          <button className={styles.primaryBtn}>
            Book Consultation
          </button>
          <button className={styles.secondaryBtn}>
            Our Services
          </button>
        </div>
        
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.number}>6+</span>
            <span className={styles.label}>Years Experience</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.number}>1000+</span>
            <span className={styles.label}>Happy Clients</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.number}>24/7</span>
            <span className={styles.label}>Emergency Care</span>
          </div>
        </div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;