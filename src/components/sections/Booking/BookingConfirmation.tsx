// src/components/sections/Booking/BookingConfirmation.tsx
import React from 'react';
import styles from './Booking.module.css';

interface BookingConfirmationProps {
  booking: {
    service: string;
    date: string;
    time: string;
    name: string;
    email: string;
    phone: string;
  };
  onClose: () => void;
}

const BookingConfirmation = ({ booking, onClose }: BookingConfirmationProps) => {
  return (
    <div className={styles.successMessage}>
      <div className={styles.successIcon}>✓</div>
      <h3>Booking Confirmed!</h3>
      <p>Thank you for scheduling an appointment with us.</p>

      <div className={styles.bookingSummary}>
        <div className={styles.summaryItem}>
          <span>Service:</span>
          <span>{booking.service}</span>
        </div>
        <div className={styles.summaryItem}>
          <span>Date:</span>
          <span>{new Date(booking.date).toLocaleDateString()}</span>
        </div>
        <div className={styles.summaryItem}>
          <span>Time:</span>
          <span>{booking.time}</span>
        </div>
        <div className={styles.summaryItem}>
          <span>Name:</span>
          <span>{booking.name}</span>
        </div>
        <div className={styles.summaryItem}>
          <span>Contact:</span>
          <span>{booking.phone}</span>
        </div>
      </div>

      <p>
        A confirmation email has been sent to {booking.email}.<br />
        We look forward to seeing you!
      </p>

      <div className={styles.confirmationActions}>
        <button 
          className={styles.submitButton}
          onClick={onClose}
        >
          Book Another Appointment
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmation;