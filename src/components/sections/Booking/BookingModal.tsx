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
  videoCallPlatform?: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    animalType: '',
    notes: '',
    videoCallPlatform: '',
  });
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const services = [
    { 
      id: 'online-consultation', 
      title: 'Online Consultation', 
      duration: '30 mins', 
      price: 'KES 1,200', 
      description: 'Virtual consultation with our veterinary experts',
      isOnline: true
    },
    { id: 'general-checkup', title: 'General Animal Health Check', duration: '30 mins', price: 'KES 1,500', description: 'Complete health assessment for your livestock or pets' },
    { id: 'vaccination', title: 'Vaccination Services', duration: '15 mins', price: 'KES 1,000', description: 'Routine vaccinations and preventive care' },
    { id: 'farm-consult', title: 'Farm Consultation', duration: '1 hour', price: 'KES 3,000', description: 'Expert advice on farm management and animal health' },
    { id: 'disease-treatment', title: 'Disease Treatment', duration: 'Varies', price: 'From KES 2,000', description: 'Diagnosis and treatment of animal diseases' }
  ];

  const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const onSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);
  
    try {
      const serviceDetails = services.find(service => service.id === selectedService);
      
      if (!serviceDetails) {
        throw new Error('Service not found');
      }
  
      // Now sending to your local server instead of directly to Resend
      const response = await fetch('http://localhost:5000/api/send-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          serviceDetails: {
            title: serviceDetails.title,
            duration: serviceDetails.duration,
            price: serviceDetails.price
          },
          selectedDate,
          selectedTime,
          selectedPlatform,
          animalType: formData.animalType,
          notes: formData.notes
        })
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send booking');
      }
  
      setIsBookingConfirmed(true);
    } catch (error) {
      console.error('Error:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to confirm booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  const renderServiceSelection = () => (
    <div className={styles.services}>
      {services.map((service) => (
        <div
          key={service.id}
          className={`${styles.serviceCard} ${selectedService === service.id ? styles.selected : ''}`}
          onClick={() => {
            setSelectedService(service.id);
            if (!service.isOnline) {
              setSelectedPlatform('');
            }
          }}
        >
          <h3>{service.title}</h3>
          <div className={styles.serviceDetails}>
            <span>{service.duration}</span>
            <span>{service.price}</span>
          </div>
          <p>{service.description}</p>
          
          {service.isOnline && selectedService === service.id && (
            <div className={styles.platformSelection}>
              <h4>Select Platform:</h4>
              <div className={styles.platformOptions}>
                <label className={styles.platformOption}>
                  <input
                    type="radio"
                    name="platform"
                    value="google-meets"
                    checked={selectedPlatform === 'google-meets'}
                    onChange={(e) => setSelectedPlatform(e.target.value)}
                  />
                  Google Meets
                </label>
                <label className={styles.platformOption}>
                  <input
                    type="radio"
                    name="platform"
                    value="whatsapp"
                    checked={selectedPlatform === 'whatsapp'}
                    onChange={(e) => setSelectedPlatform(e.target.value)}
                  />
                  WhatsApp Video Call
                </label>
              </div>
            </div>
          )}
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
          min={new Date().toISOString().split('T')[0]}
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
          {isBookingConfirmed ? (
            <div className={styles.successMessage}>
              <h3>Booking Confirmed!</h3>
              <p>Your appointment has been successfully booked.</p>
              <p>A confirmation email has been sent to {formData.email}</p>
              {selectedService === 'online-consultation' && (
                <p>You will receive {selectedPlatform === 'google-meets' ? 'a Google Meets link' : 'WhatsApp video call details'} before your appointment.</p>
              )}
            </div>
          ) : (
            <>
              {currentStep === 1 && renderServiceSelection()}
              {currentStep === 2 && renderDateTimeSelection()}
              {currentStep === 3 && renderUserDetails()}
              
              {submitError && (
                <div className={styles.errorMessage}>
                  {submitError}
                </div>
              )}
            </>
          )}
        </div>

        <div className={styles.modalFooter}>
          {currentStep > 1 && !isBookingConfirmed && (
            <button 
              className={styles.backButton}
              onClick={() => setCurrentStep(current => current - 1)}
              disabled={isSubmitting}
            >
              Back
            </button>
          )}
          <button
            className={`${styles.nextButton} ${isBookingConfirmed ? styles.confirmationAnimation : ''}`}
            onClick={() => {
              if (isBookingConfirmed) {
                onClose();
              } else if (currentStep === 3) {
                onSubmit();
              } else {
                setCurrentStep(current => current + 1);
              }
            }}
            disabled={
              isSubmitting ||
              (currentStep === 1 && (!selectedService || (selectedService === 'online-consultation' && !selectedPlatform))) ||
              (currentStep === 2 && (!selectedDate || !selectedTime))
            }
          >
            {isSubmitting ? 'Sending...' : isBookingConfirmed ? 'Close' : currentStep === 3 ? 'Confirm Booking' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;