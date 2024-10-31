import React, { useState } from 'react';
import styles from './BookingModal.module.css';

interface BookingModalProps {
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  animalType: string;
  notes: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    animalType: '',
    notes: ''
  });
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false); // State for confirmation

  const services = [
    { id: 'general-checkup', title: 'General Animal Health Check', duration: '30 mins', price: 'KES 1,500', description: 'Complete health assessment for your livestock or pets' },
    { id: 'vaccination', title: 'Vaccination Services', duration: '15 mins', price: 'KES 1,000', description: 'Routine vaccinations and preventive care' },
    { id: 'farm-consult', title: 'Farm Consultation', duration: '1 hour', price: 'KES 3,000', description: 'Expert advice on farm management and animal health' },
    { id: 'disease-treatment', title: 'Disease Treatment', duration: 'Varies', price: 'From KES 2,000', description: 'Diagnosis and treatment of animal diseases' }
  ];

  const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'];

  const onSubmit = () => {
    console.log({
      ...formData,
      service: selectedService,
      date: selectedDate,
      time: selectedTime
    });
    setIsBookingConfirmed(true); // Set confirmation state to true
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const renderServiceSelection = () => (
    <div className={styles.services}>
      {services.map((service) => (
        <div
          key={service.id}
          className={`${styles.serviceCard} ${selectedService === service.id ? styles.selected : ''}`}
          onClick={() => setSelectedService(service.id)}
        >
          <h3>{service.title}</h3>
          <div className={styles.serviceDetails}>
            <span>{service.duration}</span>
            <span>{service.price}</span>
          </div>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );

  const renderDateTimeSelection = () => (
    <div className={styles.dateTimeContainer}>
      <div className={styles.timeSelection}>
        <h3>Select Date</h3>
        <input
          type="date"
          onChange={(e) => setSelectedDate(e.target.value)}
          className={styles.dateInput}
        />
      </div>
      <div className={styles.timeSelection}>
        <h3>Available Times</h3>
        <div className={styles.timeSlots}>
          {timeSlots.map((time) => (
            <button
              key={time}
              className={`${styles.timeSlot} ${selectedTime === time ? styles.selected : ''}`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderUserDetails = () => (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} className={styles.form}>
      <div className={styles.formGroup}>
        <label>Full Name</label>
        <input
          name="name"
          value={formData.name}
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
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label>Phone Number</label>
        <input
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Enter your phone number"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label>Animal Type</label>
        <select
          name="animalType"
          value={formData.animalType}
          onChange={handleInputChange}
          required
        >
          <option value="">Select animal type</option>
          <option value="cattle">Cattle</option>
          <option value="sheep">Sheep</option>
          <option value="goat">Goat</option>
          <option value="poultry">Poultry</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label>Additional Notes</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
          placeholder="Any specific concerns or requirements?"
          rows={4}
        />
      </div>
    </form>
  );

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        
        <div className={styles.modalHeader}>
          <h2>Book a Consultation</h2>
          <div className={styles.steps}>
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
        </div>

        <div className={styles.modalBody}>
          {isBookingConfirmed ? ( // Conditional rendering for success message
            <div className={styles.successMessage}>
              <h3>Booking Confirmed!</h3>
              <p>Your appointment has been successfully booked.</p>
            </div>
          ) : (
            <>
              {currentStep === 1 && renderServiceSelection()}
              {currentStep === 2 && renderDateTimeSelection()}
              {currentStep === 3 && renderUserDetails()}
            </>
          )}
        </div>

        <div className={styles.modalFooter}>
          {currentStep > 1 && !isBookingConfirmed && ( // Disable back button if booking is confirmed
            <button 
              className={styles.backButton}
              onClick={() => setCurrentStep(current => current - 1)}
            >
              Back
            </button>
          )}
          <button
            className={`${styles.nextButton} ${isBookingConfirmed ? styles.confirmationAnimation : ''}`} // Animation class
            onClick={() => {
              if (isBookingConfirmed) {
                onClose(); // Close modal after confirmation
              } else if (currentStep === 3) {
                onSubmit();
              } else {
                setCurrentStep(current => current + 1);
              }
            }}
            disabled={
              (currentStep === 1 && !selectedService) ||
              (currentStep === 2 && (!selectedDate || !selectedTime))
            }
          >
            {currentStep === 3 ? 'Confirm Booking' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
