// src/pages/Contact/Contact.tsx
import React from 'react';
import styles from './Contact.module.css';
import ContactForm from '../../components/sections/Contact/Contact';

const Contact: React.FC = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.header}>
        <h1>Contact Us</h1>
        <p>Get in touch with our team</p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;