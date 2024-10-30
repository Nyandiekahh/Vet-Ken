// src/components/sections/Booking/Booking.tsx
import React, { useState, useEffect } from 'react';
import styles from './Booking.module.css';

interface Service {
  id: number;
  name: string;
  duration: string;
  price: string;
  description: string;
  icon: string;
}

interface TimeSlot {
  time: string;
  available: boolean;
}

interface BookingForm {
  name: string;
  phone: string;
  email: string;
  animalType: string;
  animalBreed: string;
  animalAge: string;
  reason: string;
  notes: string;
}

const services: Service[] = [
  {
    id: 1,
    name: 'General Check-up',
    duration: '30 mins',
    price: 'KES 2000',
    description: 'Comprehensive health examination for your animal',
    icon: '🏥'
  },
  {
    id: 2,
    name: 'Vaccination',
    duration: '15 mins',
    price: 'KES 1500',
    description: 'Essential vaccinations and immunizations',
    icon: '💉'
  },
  {
    id: 3,
    name: 'Farm Visit',
    duration: '2 hours',
    price: 'KES 5000',
    description: 'On-site farm visit and consultation',
    icon: '🚗'
  },
  {
    id: 4,
    name: 'Emergency Care',
    duration: 'Varies',
    price: 'From KES 3000',
    description: '24/7 emergency veterinary services',
    icon: '🚨'
  },
  {
    id: 5,
    name: 'Surgery',
    duration: 'Varies',
    price: 'Custom Quote',
    description: 'Surgical procedures and operations',
    icon: '⚕️'
  },
  {
    id: 6,
    name: 'Laboratory Tests',
    duration: '1 hour',
    price: 'From KES 1000',
    description: 'Comprehensive diagnostic testing',
    icon: '🔬'
  }
];

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);

  const [formData, setFormData] = useState<BookingForm>({
    name: '',
    phone: '',
    email: '',
    animalType: '',
    animalBreed: '',
    animalAge: '',
    reason: '',
    notes: ''
  });

  useEffect(() => {
    if (selectedDate) {
      // Generate time slots for the selected date
      const slots: TimeSlot[] = [];
      for (let hour = 8; hour <= 17; hour++) {
        ['00', '30'].forEach(minutes => {
          // Randomly set availability (in real app, this would come from backend)
          slots.push({
            time: `${hour.toString().padStart(2, '0')}:${minutes}`,
            available: Math.random() > 0.3
          });
        });
      }
      setTimeSlots(slots);
    }
  }, [selectedDate]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return selectedService !== null;
      case 2:
        return selectedDate !== '' && selectedTime !== '';
      case 3:
        return (
          formData.name !== '' &&
          formData.phone !== '' &&
          formData.email !== '' &&
          formData.animalType !== ''
        );
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setBookingComplete(true);
    setIsSubmitting(false);
  };

  const getStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className={styles.serviceSelection}>
            <h3 className={styles.stepTitle}>Select a Service</h3>
            <div className={styles.servicesGrid}>
              {services.map(service => (
                <div
                  key={service.id}
                  className={`${styles.serviceCard} ${
                    selectedService?.id === service.id ? styles.selected : ''
                  }`}
                  onClick={() => setSelectedService(service)}
                >
                  <span className={styles.serviceIcon}>{service.icon}</span>
                  <h4>{service.name}</h4>
                  <div className={styles.serviceDetails}>
                    <span>{service.duration}</span>
                    <span>{service.price}</span>
                  </div>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className={styles.dateTimeSelection}>
            <h3 className={styles.stepTitle}>Choose Date & Time</h3>
            <div className={styles.dateTimePicker}>
              <div className={styles.dateField}>
                <label>Select Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              {selectedDate && (
                <div className={styles.timeField}>
                  <label>Select Time</label>
                  <div className={styles.timeSlots}>
                    {timeSlots.map((slot, index) => (
                      <button
                        key={index}
                        className={`${styles.timeSlot} ${
                          !slot.available ? styles.unavailable : ''
                        } ${selectedTime === slot.time ? styles.selected : ''}`}
                        onClick={() => slot.available && setSelectedTime(slot.time)}
                        disabled={!slot.available}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 3:
        return (
          <div className={styles.detailsForm}>
            <h3 className={styles.stepTitle}>Your Details</h3>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label>Animal Type *</label>
                <select
                  name="animalType"
                  value={formData.animalType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Animal Type</option>
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
                <label>Breed</label>
                <input
                  type="text"
                  name="animalBreed"
                  value={formData.animalBreed}
                  onChange={handleInputChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label>Age</label>
                <input
                  type="text"
                  name="animalAge"
                  value={formData.animalAge}
                  onChange={handleInputChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label>Reason for Visit *</label>
                <input
                  type="text"
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.formGroup + ' ' + styles.fullWidth}>
                <label>Additional Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (bookingComplete) {
    return (
      <div className={styles.bookingComplete}>
        <div className={styles.successIcon}>✓</div>
        <h2>Booking Confirmed!</h2>
        <p>Thank you for scheduling an appointment with us.</p>
        
        <div className={styles.bookingSummary}>
          <div className={styles.summaryItem}>
            <span>Service:</span>
            <span>{selectedService?.name}</span>
          </div>
          <div className={styles.summaryItem}>
            <span>Date:</span>
            <span>{new Date(selectedDate).toLocaleDateString()}</span>
          </div>
          <div className={styles.summaryItem}>
            <span>Time:</span>
            <span>{selectedTime}</span>
          </div>
          <div className={styles.summaryItem}>
            <span>Name:</span>
            <span>{formData.name}</span>
          </div>
        </div>

        <p className={styles.confirmationNote}>
          A confirmation email has been sent to {formData.email}.<br />
          We look forward to seeing you!
        </p>

        <button 
          className={styles.newBookingBtn}
          onClick={() => {
            setBookingComplete(false);
            setCurrentStep(1);
            setSelectedService(null);
            setSelectedDate('');
            setSelectedTime('');
            setFormData({
              name: '',
              phone: '',
              email: '',
              animalType: '',
              animalBreed: '',
              animalAge: '',
              reason: '',
              notes: ''
            });
          }}
        >
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <section className={styles.booking}>
      <div className={styles.container}>
        <div className={styles.bookingCard}>
          <div className={styles.progress}>
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`${styles.step} ${
                  step === currentStep ? styles.active : ''
                } ${step < currentStep ? styles.completed : ''}`}
              >
                <div className={styles.stepNumber}>{step}</div>
                <span className={styles.stepLabel}>
                  {step === 1 && 'Select Service'}
                  {step === 2 && 'Date & Time'}
                  {step === 3 && 'Your Details'}
                </span>
              </div>
            ))}
          </div>

          <div className={styles.content}>
            {getStepContent()}
          </div>

          <div className={styles.navigation}>
            {currentStep > 1 && (
              <button
                className={styles.prevButton}
                onClick={handlePrevious}
              >
                Previous
              </button>
            )}
            
            {currentStep < 3 ? (
              <button
                className={styles.nextButton}
                onClick={handleNext}
                disabled={!validateStep(currentStep)}
              >
                Next
              </button>
            ) : (
              <button
                className={styles.submitButton}
                onClick={handleSubmit}
                disabled={isSubmitting || !validateStep(3)}
              >
                {isSubmitting ? 'Confirming...' : 'Confirm Booking'}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;