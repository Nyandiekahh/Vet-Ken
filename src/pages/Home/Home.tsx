// src/pages/Home/Home.tsx
import React from 'react';
import styles from './Home.module.css';
import Hero from '../../components/sections/Hero/Hero';
import Services from '../../components/sections/Services/Services';
import Contact from '../../components/sections/Contact/Contact';

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;