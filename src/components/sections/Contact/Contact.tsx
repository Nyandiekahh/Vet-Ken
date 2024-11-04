// src/components/sections/Contact/Contact.tsx
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Log the parameters for debugging
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        phone_number: formData.phone,
        subject: formData.subject,
        message: formData.message
      };

      console.log('Sending email with params:', templateParams);

      await emailjs.send(
        'service_n5p0vrs', // Your EmailJS service ID
        'template_4yoe912', // Create a new template ID for contact form
        templateParams,
        'x1_g3JBwrfrcaw1Bl' // Your EmailJS public key
      );

      setSubmitted(true);
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.info}>
            <span className={styles.subtitle}>Contact Us</span>
            <h2 className={styles.title}>Get In Touch</h2>
            <p className={styles.description}>
              Have questions about our services? Need emergency assistance?
              Contact us anytime, we're here to help.
            </p>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <div className={styles.icon}>📍</div>
                <div className={styles.details}>
                  <h4>Location</h4>
                  <p>Kitengela, Kenya</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.icon}>📞</div>
                <div className={styles.details}>
                  <h4>Phone</h4>
                  <p>+254 702 687 855</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.icon}>✉️</div>
                <div className={styles.details}>
                  <h4>Email</h4>
                  <p>vetgrokenya@gmail.com</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.icon}>⏰</div>
                <div className={styles.details}>
                  <h4>Working Hours</h4>
                  <p>24/7 Emergency Services</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formWrapper}>
            {submitted ? (
              <div className={styles.successMessage}>
                <div className={styles.successIcon}>✓</div>
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className={styles.resetButton}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form ref={form} onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone"
                      required
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows={6}
                  />
                </div>

                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;