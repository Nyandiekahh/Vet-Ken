// components/sections/Booking/ConsultationBooking.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ConsultationBooking.module.css';

interface ConsultationService {
  id: string;
  title: string;
  duration: string;
  price: string;
  description: string;
}

const ConsultationBooking = () => {
  const [selectedService, setSelectedService] = useState<string>('');
  const [currentStep, setCurrentStep] = useState(1);

  const services: ConsultationService[] = [
    {
      id: 'general-checkup',
      title: 'General Check-up',
      duration: '30 mins',
      price: 'KES 2000',
      description: 'Comprehensive health examination for your animal'
    },
    {
      id: 'vaccination',
      title: 'Vaccination',
      duration: '15 mins',
      price: 'KES 1500',
      description: 'Essential vaccinations and immunizations'
    },
    {
      id: 'farm-visit',
      title: 'Farm Visit',
      duration: '2 hours',
      price: 'KES 5000',
      description: 'On-site farm visit and consultation'
    },
    {
      id: 'emergency',
      title: 'Emergency Care',
      duration: 'Varies',
      price: 'From KES 3000',
      description: '24/7 emergency veterinary services'
    },
    {
      id: 'surgery',
      title: 'Surgery',
      duration: 'Varies',
      price: 'Custom Quote',
      description: 'Surgical procedures and operations'
    },
    {
      id: 'grooming',
      title: 'Pet Grooming',
      duration: '1 hour',
      price: 'Custom Quote',
      description: 'Bringing your Pet\'s far back to life'
    }
  ];

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  const renderServiceSelection = () => (
    <div className={styles.servicesGrid}>
      {services.map((service) => (
        <div
          key={service.id}
          className={`${styles.serviceCard} ${selectedService === service.id ? styles.selected : ''}`}
          onClick={() => handleServiceSelect(service.id)}
        >
          <div className={styles.serviceContent}>
            <h3>{service.title}</h3>
            <div className={styles.serviceDetails}>
              <span className={styles.duration}>{service.duration}</span>
              <span className={styles.price}>{service.price}</span>
            </div>
            <p className={styles.description}>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderDateTimeSelection = () => (
    <div className={styles.dateTimeContainer}>
      <div className={styles.calendarSection}>
        {/* Calendar Component would go here */}
      </div>
      <div className={styles.timeSection}>
        <h3>Available Times</h3>
        <div className={styles.timeSlots}>
          <button className={styles.timeSlot}>09:00 AM</button>
          <button className={styles.timeSlot}>10:00 AM</button>
          <button className={styles.timeSlot}>11:00 AM</button>
          <button className={styles.timeSlot}>02:00 PM</button>
          <button className={styles.timeSlot}>03:00 PM</button>
          <button className={styles.timeSlot}>04:00 PM</button>
        </div>
      </div>
    </div>
  );

  const renderUserDetails = () => (
    <form className={styles.userForm}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" placeholder="Enter your full name" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" placeholder="Enter your phone number" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="notes">Additional Notes</label>
        <textarea id="notes" placeholder="Any specific concerns or requirements?" rows={4}></textarea>
      </div>
    </form>
  );

  return (
    <div className={styles.bookingContainer}>
      <div className={styles.progressSteps}>
        <div className={`${styles.step} ${currentStep >= 1 ? styles.active : ''}`}>
          <div className={styles.stepNumber}>1</div>
          <span>Select Service</span>
        </div>
        <div className={`${styles.step} ${currentStep >= 2 ? styles.active : ''}`}>
          <div className={styles.stepNumber}>2</div>
          <span>Date & Time</span>
        </div>
        <div className={`${styles.step} ${currentStep >= 3 ? styles.active : ''}`}>
          <div className={styles.stepNumber}>3</div>
          <span>Your Details</span>
        </div>
      </div>

      <div className={styles.bookingContent}>
        {currentStep === 1 && renderServiceSelection()}
        {currentStep === 2 && renderDateTimeSelection()}
        {currentStep === 3 && renderUserDetails()}
      </div>

      <div className={styles.buttonContainer}>
        {currentStep > 1 && (
          <button 
            className={styles.backButton}
            onClick={() => setCurrentStep(curr => curr - 1)}
          >
            Back
          </button>
        )}
        {currentStep < 3 ? (
          <button
            className={styles.nextButton}
            onClick={() => setCurrentStep(curr => curr + 1)}
            disabled={currentStep === 1 && !selectedService}
          >
            Next
          </button>
        ) : (
          <button className={styles.submitButton}>
            Confirm Booking
          </button>
        )}
      </div>
    </div>
  );
};

export default ConsultationBooking;