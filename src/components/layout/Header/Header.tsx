import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookingClick = () => {
    navigate('/booking');  // Assumes your booking route is '/booking'
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <Link to="/">
            <h1>VetCare Pro</h1>
            <span>Expert Animal Care</span>
          </Link>
        </div>
        
        <div className={styles.contact}>
          <div className={styles.emergencyContact}>
            <span className={styles.emergencyIcon}>🚨</span>
            <div>
              <p>24/7 Emergency:</p>
              <a href="tel:+254702687855">+254 702 687 855</a>
            </div>
          </div>
          
          <button 
            className={styles.appointmentBtn}
            onClick={handleBookingClick}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;