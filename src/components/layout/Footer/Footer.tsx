// src/components/layout/Footer/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.logo}>VetCare Pro</h3>
            <p className={styles.description}>
              Professional veterinary services and comprehensive animal healthcare solutions.
              Available 24/7 for all your animal health needs.
            </p>
            <div className={styles.social}>
              <a href="#" className={styles.socialLink}>Facebook</a>
              <a href="#" className={styles.socialLink}>Twitter</a>
              <a href="#" className={styles.socialLink}>Instagram</a>
            </div>
          </div>

          <div className={styles.section}>
            <h4>Quick Links</h4>
            <ul className={styles.links}>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/booking">Book Appointment</Link></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>Services</h4>
            <ul className={styles.links}>
              <li>Veterinary Care</li>
              <li>Animal Nutrition</li>
              <li>Emergency Services</li>
              <li>Laboratory Tests</li>
              <li>Farm Visits</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>Contact Info</h4>
            <ul className={styles.contactInfo}>
              <li>
                <span className={styles.icon}>📍</span>
                Kitengela, Kenya
              </li>
              <li>
                <span className={styles.icon}>📞</span>
                +254 XXX XXX XXX
              </li>
              <li>
                <span className={styles.icon}>✉️</span>
                info@vetagrovet.com
              </li>
              <li>
                <span className={styles.icon}>⏰</span>
                24/7 Emergency Services
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copyright}>
            © {currentYear} VetCare Pro. All rights reserved.
          </div>
          <div className={styles.bottomLinks}>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;