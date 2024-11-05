import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './SellLivestock.module.css';

interface FormData {
  title: string;
  description: string;
  price: string;
  quantity: string;
  location: string;
  age: string;
  weight: string;
  breed: string;
  vaccination: boolean;
  sellerName: string;
  sellerPhone: string;
  sellerEmail: string;
}

const SellLivestock = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    price: '',
    quantity: '',
    location: '',
    age: '',
    weight: '',
    breed: '',
    vaccination: false,
    sellerName: '',
    sellerPhone: '',
    sellerEmail: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        title: formData.title,
        description: formData.description,
        price: formData.price,
        quantity: formData.quantity,
        location: formData.location,
        age: formData.age,
        weight: formData.weight,
        breed: formData.breed,
        vaccination: formData.vaccination ? "Yes" : "No",
        seller_name: formData.sellerName,
        seller_phone: formData.sellerPhone,
        seller_email: formData.sellerEmail,
        to_name: "Admin",
        from_name: formData.sellerName,
        message: `New listing: ${formData.title}`
      };

      const response = await emailjs.send(
        'service_n5p0vrs',
        'template_bf1kq69',
        templateParams,
        'x1_g3JBwrfrcaw1Bl'
      );

      console.log('Success:', response);
      setShowSuccess(true);
      
      if (form.current) {
        form.current.reset();
      }
      setFormData({
        title: '',
        description: '',
        price: '',
        quantity: '',
        location: '',
        age: '',
        weight: '',
        breed: '',
        vaccination: false,
        sellerName: '',
        sellerPhone: '',
        sellerEmail: ''
      });

      // Scroll to top to show success message
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Hide success message after 10 seconds
      setTimeout(() => setShowSuccess(false), 10000);
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your listing. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Create New Listing</h1>
        <p className={styles.subtitle}>
          Detailed listings get 3x more views! Be thorough in your descriptions.
        </p>
      </div>

      {showSuccess && (
        <div className={styles.successMessage}>
          <h3>Thank you for submitting your listing!</h3>
          <p>Our team will review your submission within 24-48 hours. If additional images or documents are needed, we'll contact you via email. Verified listings with complete information typically receive more buyer interest.</p>
        </div>
      )}

      <form ref={form} onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formSection}>
          <h2 className={styles.sectionTitle}>Item Details</h2>
          
          <div className={styles.formGroup}>
            <label>Title*</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Enter descriptive title (e.g., 'Healthy 2-Year-Old Friesian Dairy Cow, Vaccinated')"
              required
            />
            <span className={styles.fieldTip}>
              Pro tip: Include key details like breed, age, and main features in the title
            </span>
          </div>

          <div className={styles.formGroup}>
            <label>Description*</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Provide detailed information about your livestock. Include: health history, feeding routine, breeding history, temperament, reason for selling, and any unique characteristics. More details = more interested buyers!"
              rows={6}
              required
            />
            <span className={styles.fieldTip}>
              Listings with detailed descriptions (150+ words) receive up to 3x more inquiries
            </span>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Price (KES)*</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9]/g, '');
                  setFormData({ ...formData, price: value });
                }}
                placeholder="Enter price"
                required
              />
              <span className={styles.fieldTip}>
                Market-appropriate prices attract more serious buyers
              </span>
            </div>

            <div className={styles.formGroup}>
              <label>Quantity*</label>
              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9]/g, '');
                  setFormData({ ...formData, quantity: value });
                }}
                placeholder="Enter quantity"
                required
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Age</label>
              <input
                type="text"
                name="age"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                placeholder="e.g., 2 years 3 months"
              />
              <span className={styles.fieldTip}>
                Specific age details increase buyer trust
              </span>
            </div>

            <div className={styles.formGroup}>
              <label>Weight</label>
              <input
                type="text"
                name="weight"
                value={formData.weight}
                onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                placeholder="e.g., 400 kg"
              />
              <span className={styles.fieldTip}>
                Include recent weight measurements if available
              </span>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Breed</label>
            <input
              type="text"
              name="breed"
              value={formData.breed}
              onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
              placeholder="e.g., Pure Friesian, Crossbreed Merino (specify percentages if known)"
            />
            <span className={styles.fieldTip}>
              Specify pure breeds or crossbreed percentages for higher visibility
            </span>
          </div>

          <div className={styles.formGroup}>
            <label>
              <input
                type="checkbox"
                name="vaccination"
                checked={formData.vaccination}
                onChange={(e) => setFormData({ ...formData, vaccination: e.target.checked })}
              />
              Vaccinated/Health Certificate Available
            </label>
            <span className={styles.fieldTip}>
              Listings with health certificates get 2x more inquiries
            </span>
          </div>

          <div className={styles.formGroup}>
            <label>Location*</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="Enter detailed location (e.g., Kikuyu, Kiambu County, Kenya)"
              required
            />
            <span className={styles.fieldTip}>
              Specific locations help attract local buyers
            </span>
          </div>
        </div>

        <div className={styles.formSection}>
          <h2 className={styles.sectionTitle}>Contact Information</h2>
          
          <div className={styles.formGroup}>
            <label>Name*</label>
            <input
              type="text"
              name="sellerName"
              value={formData.sellerName}
              onChange={(e) => setFormData({ ...formData, sellerName: e.target.value })}
              required
            />
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Phone*</label>
              <input
                type="tel"
                name="sellerPhone"
                value={formData.sellerPhone}
                onChange={(e) => setFormData({ ...formData, sellerPhone: e.target.value })}
                placeholder="e.g., +254 700 000000"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Email*</label>
              <input
                type="email"
                name="sellerEmail"
                value={formData.sellerEmail}
                onChange={(e) => setFormData({ ...formData, sellerEmail: e.target.value })}
                required
              />
            </div>
          </div>
        </div>

        <div className={styles.formFooter}>
          <p className={styles.submissionNote}>
            After submission, our team will review your listing and may contact you for additional images or documentation. Complete listings are typically reviewed within 24-48 hours.
          </p>
          <div className={styles.buttonGroup}>
            <button type="button" className={styles.cancelButton}>
              Cancel
            </button>
            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Create Listing'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SellLivestock;