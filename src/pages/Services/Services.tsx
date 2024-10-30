// src/pages/Services/Services.tsx
import React from 'react';
import styles from './Services.module.css';
import ServicesSection from '../../components/sections/Services/Services';

const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.header}>
        <h1>Our Services</h1>
        <p>Comprehensive veterinary care for your animals</p>
      </div>
      <ServicesSection />
    </div>
  );
};

export default Services;