import React, { useState } from 'react';
import styles from './PrescriptionCenter.module.css';

interface PrescriptionItem {
  id: string;
  name: string;
  description: string;
  category: string;
  action: string;
  requiresApproval: boolean;
}

const PrescriptionCenter = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const categories = [
    'All', 
    'Current Prescriptions', 
    'Refill Requests', 
    'Medication Info',
    'Safety Guidelines'
  ];
  
  const prescriptionInfo: PrescriptionItem[] = [
    {
      id: '1',
      name: 'Prescription Refill Request',
      description: 'Submit a request for an existing prescription refill. Please allow 24-48 hours for processing.',
      category: 'refill',
      action: 'Request Refill',
      requiresApproval: true
    },
    {
      id: '2',
      name: 'Medication Information',
      description: "Access detailed information about your pet's prescribed medications, including usage guidelines and potential side effects.",
      category: 'info',
      action: 'View Details',
      requiresApproval: false
    },
    {
      id: '3',
      name: 'Emergency Resources',
      description: 'Important information about medication emergencies and after-hours pharmacy contacts.',
      category: 'safety',
      action: 'View Resources',
      requiresApproval: false
    }
  ];

  const handleRefillRequest = (id: string) => {
    console.log('Refill requested:', id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.alertBox}>
        <div className={styles.alertContent}>
          <h3 className={styles.alertTitle}>⚠️ Important Notice</h3>
          <p className={styles.alertText}>
            Prescriptions must be authorized by our veterinary team and picked up in person or shipped from our licensed pharmacy partner.
          </p>
        </div>
      </div>

      <div className={styles.header}>
        <h2 className={styles.title}>Prescription Services</h2>
        <p className={styles.subtitle}>
          Manage your pet&apos;s prescriptions safely and securely
        </p>
        
        <div className={styles.categoryFilters}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category.toLowerCase())}
              className={`${styles.categoryButton} ${
                selectedCategory === category.toLowerCase() ? styles.active : ''
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.prescriptionGrid}>
        {prescriptionInfo.map((item) => (
          <div key={item.id} className={styles.prescriptionCard}>
            <h3 className={styles.cardTitle}>{item.name}</h3>
            <p className={styles.cardDescription}>{item.description}</p>
            
            {item.requiresApproval && (
              <div className={styles.processingTime}>
                <span>⏱️ 24-48 hour processing time</span>
              </div>
            )}

            <button
              onClick={() => handleRefillRequest(item.id)}
              className={styles.actionButton}
            >
              {item.action}
            </button>
          </div>
        ))}
      </div>

      <div className={styles.emergencyBox}>
        <h3 className={styles.emergencyTitle}>Need Immediate Assistance?</h3>
        <div className={styles.emergencyContacts}>
          <div className={styles.contactItem}>
            <span>📞 Emergency: (555) 123-4567</span>
          </div>
          <div className={styles.contactItem}>
            <span>📅 Schedule a Consultation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionCenter;