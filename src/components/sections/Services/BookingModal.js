import React, { useState, useCallback } from 'react';
import styles from './BookingModal.module.css';

// Constants
const TIME_SLOTS = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM'
];

const ANIMAL_TYPES = [
  { value: 'cattle', label: 'Cattle' },
  { value: 'sheep', label: 'Sheep' },
  { value: 'goat', label: 'Goat' },
  { value: 'poultry', label: 'Poultry' },
  { value: 'dog', label: 'Dog' },
  { value: 'cat', label: 'Cat' },
  { value: 'other', label: 'Other' }
];

const PLATFORMS = [
  { value: 'google-meets', label: 'Google Meets' },
  { value: 'whatsapp', label: 'WhatsApp Video Call' }
];

const BookingModal = ({ service, onClose }) => {
  // State
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    animalType: '',
    notes: '',
    date: '',
    time: '',
    platform: ''
  });
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

  // Derived state
  const isOnlineService = service.title === 'Consultation';
  
  const isFormValid = useCallback(() => {
    const { name, email, phone, animalType } = bookingData;
    return name && email && phone && animalType;
  }, [bookingData]);

  // Event handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateChange = (e) => {
    setBookingData(prev => ({
      ...prev,
      date: e.target.value
    }));
  };

  const handleTimeSelection = (time) => {
    setBookingData(prev => ({
      ...prev,
      time
    }));
  };

  const handlePlatformSelection = (platform) => {
    setBookingData(prev => ({
      ...prev,
      platform
    }));
  };

  const handleSubmit = () => {
    console.log('Booking submitted:', {
      service: service.title,
      ...bookingData
    });
    setIsBookingConfirmed(true);
  };

  const handleNext = () => {
    if (isBookingConfirmed) {
      onClose();
    } else if (currentStep === 3) {
      handleSubmit();
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  // Step Components
  const ServiceConfirmation = () => (
    <div className={styles.serviceConfirmation}>
      <h3>Selected Service</h3>
      <div className={styles.serviceCard}>
        <h4>{service.title}</h4>
        <p>{service.description}</p>
        {isOnlineService && (
          <div className={styles.platformSelection}>
            <h4>Select Platform:</h4>
            <div className={styles.platformOptions}>
              {PLATFORMS.map(({ value, label }) => (
                <label key={value} className={styles.platformOption}>
                  <input
                    type="radio"
                    name="platform"
                    value={value}
                    checked={bookingData.platform === value}
                    onChange={(e) => handlePlatformSelection(e.target.value)}
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const DateTimeSelection = () => (
    <div className={styles.dateTimeContainer}>
      <div className={styles.timeSelection}>
        <h3>Select Date</h3>
        <input
          type="date"
          name="date"
          value={bookingData.date}
          onChange={handleDateChange}
          className={styles.dateInput}
          min={new Date().toISOString().split('T')[0]}
          required
        />
      </div>
      <div className={styles.timeSelection}>
        <h3>Available Times</h3>
        <div className={styles.timeSlots}>
          {TIME_SLOTS.map((time) => (
            <button
              key={time}
              type="button"
              className={`${styles.timeSlot} ${bookingData.time === time ? styles.selected : ''}`}
              onClick={() => handleTimeSelection(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const UserDetailsForm = () => (
    <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className={styles.form}>
      <div className={styles.formGroup}>
        <label>Full Name</label>
        <input
          name="name"
          value={bookingData.name}
          onChange={handleInputChange}
          placeholder="Enter your full name"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={bookingData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label>Phone Number</label>
        <input
          name="phone"
          value={bookingData.phone}
          onChange={handleInputChange}
          placeholder="Enter your phone number"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label>Animal Type</label>
        <select
          name="animalType"
          value={bookingData.animalType}
          onChange={handleInputChange}
          required
        >
          <option value="">Select animal type</option>
          {ANIMAL_TYPES.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.formGroup}>
        <label>Additional Notes</label>
        <textarea
          name="notes"
          value={bookingData.notes}
          onChange={handleInputChange}
          placeholder="Any specific concerns or requirements?"
          rows={4}
        />
      </div>
    </form>
  );

  const SuccessMessage = () => (
    <div className={styles.successMessage}>
      <h3>Booking Confirmed!</h3>
      <p>Your {service.title} appointment has been successfully booked.</p>
      {isOnlineService && bookingData.platform && (
        <p>
          You will receive {bookingData.platform === 'google-meets' 
            ? 'a Google Meets link' 
            : 'WhatsApp video call details'} before your appointment.
        </p>
      )}
      <p>Date: {bookingData.date}</p>
      <p>Time: {bookingData.time}</p>
      <p>We'll send a confirmation to {bookingData.email}</p>
    </div>
  );

  const isStepValid = useCallback(() => {
    switch (currentStep) {
      case 1:
        return !isOnlineService || (isOnlineService && bookingData.platform);
      case 2:
        return bookingData.date && bookingData.time;
      case 3:
        return isFormValid();
      default:
        return true;
    }
  }, [currentStep, isOnlineService, bookingData, isFormValid]);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button 
          className={styles.closeButton} 
          onClick={onClose}
          type="button"
          aria-label="Close modal"
        >
          ×
        </button>
        
        <div className={styles.modalHeader}>
          <h2>Book {service.title}</h2>
          <div className={styles.steps}>
            {['Confirm Service', 'Date & Time', 'Your Details'].map((step, index) => (
              <div 
                key={step}
                className={`${styles.step} ${currentStep >= index + 1 ? styles.active : ''}`}
              >
                <div className={styles.stepNumber}>{index + 1}</div>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.modalBody}>
          {isBookingConfirmed ? (
            <SuccessMessage />
          ) : (
            <>
              {currentStep === 1 && <ServiceConfirmation />}
              {currentStep === 2 && <DateTimeSelection />}
              {currentStep === 3 && <UserDetailsForm />}
            </>
          )}
        </div>

        <div className={styles.modalFooter}>
          {currentStep > 1 && !isBookingConfirmed && (
            <button 
              className={styles.backButton}
              onClick={handleBack}
              type="button"
            >
              Back
            </button>
          )}
          <button
            className={`${styles.nextButton} ${isBookingConfirmed ? styles.confirmationAnimation : ''}`}
            onClick={handleNext}
            disabled={!isStepValid()}
            type="button"
          >
            {isBookingConfirmed ? 'Close' : currentStep === 3 ? 'Confirm Booking' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;