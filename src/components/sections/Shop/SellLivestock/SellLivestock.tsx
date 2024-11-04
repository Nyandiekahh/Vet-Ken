// src/components/sections/Shop/SellLivestock/SellLivestock.tsx
import React, { useState, ChangeEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './SellLivestock.module.css';

interface FormData {
  itemType: string;
  category: string;
  title: string;
  quantity: number;
  price: number;
  age: string;
  breed: string;
  weight: string;
  description: string;
  location: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  images: FileList | null;
  vaccination: boolean;
  certification: boolean;
  negotiable: boolean;
}

const SellLivestock = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    itemType: '',
    category: '',
    title: '',
    quantity: 1,
    price: 0,
    age: '',
    breed: '',
    weight: '',
    description: '',
    location: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    images: null,
    vaccination: false,
    certification: false,
    negotiable: false
  });

  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const categories = {
    livestock: ['Cattle', 'Goats', 'Sheep', 'Pigs'],
    poultry: ['Chickens', 'Day-old Chicks', 'Ducks', 'Turkeys', 'Quails'],
    products: ['Eggs', 'Milk', 'Honey', 'Feed'],
    other: ['Farm Equipment', 'Veterinary Supplies', 'Other']
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setFormData({ ...formData, images: files });
      const urls = Array.from(files).map(file => URL.createObjectURL(file));
      setPreviewUrls(urls);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      // Validate image types and sizes before processing
      if (formData.images) {
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        const maxSizeMB = 5; // Maximum file size in MB
        
        for (const file of Array.from(formData.images)) {
          if (!allowedTypes.includes(file.type)) {
            alert('Please only upload JPG, JPEG or PNG images.');
            setIsSubmitting(false);
            return;
          }
          
          if (file.size > maxSizeMB * 1024 * 1024) {
            alert(`Image ${file.name} is too large. Maximum size is ${maxSizeMB}MB.`);
            setIsSubmitting(false);
            return;
          }
        }
      }
  
      // Convert images to base64 strings with consistent format
      let imageUrls: string[] = [];
      if (formData.images) {
        const promises = Array.from(formData.images).map(file => {
          return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            const img = new Image();
            
            img.onload = () => {
              try {
                const canvas = document.createElement('canvas');
                const MAX_WIDTH = 800;
                const MAX_HEIGHT = 800;
                let width = img.width;
                let height = img.height;
                
                // Calculate new dimensions while maintaining aspect ratio
                if (width > height) {
                  if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                  }
                } else {
                  if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                  }
                }
                
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                
                // Set white background for PNG images with transparency
                if (file.type === 'image/png') {
                  ctx!.fillStyle = '#FFFFFF';
                  ctx!.fillRect(0, 0, width, height);
                }
                
                ctx!.drawImage(img, 0, 0, width, height);
                
                // Always convert to JPEG format
                const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7);
                resolve(compressedBase64);
              } catch (error) {
                reject(error);
              }
            };
            
            img.onerror = () => {
              reject(new Error('Failed to load image'));
            };
            
            reader.onloadend = () => {
              img.src = reader.result as string;
            };
            
            reader.onerror = () => {
              reject(new Error('Failed to read file'));
            };
            
            reader.readAsDataURL(file);
          });
        });
  
        try {
          imageUrls = await Promise.all(promises);
        } catch (error) {
          console.error('Error processing images:', error);
          alert('There was an error processing your images. Please try again with different images.');
          setIsSubmitting(false);
          return;
        }
      }
  
      // Prepare template parameters
      const templateParams = {
        to_name: "Admin",
        from_name: formData.contactName || "Unknown",
        message: `New listing for ${formData.title}`,
        itemType: formData.itemType || "Not specified",
        category: formData.category || "Not specified",
        title: formData.title || "Not specified",
        quantity: String(formData.quantity) || "0",
        price: String(formData.price) || "0",
        age: formData.age || "Not specified",
        breed: formData.breed || "Not specified",
        weight: formData.weight || "Not specified",
        description: formData.description || "Not specified",
        location: formData.location || "Not specified",
        contactName: formData.contactName || "Not specified",
        contactPhone: formData.contactPhone || "Not specified",
        contactEmail: formData.contactEmail || "Not specified",
        vaccination: formData.vaccination ? "Yes" : "No",
        negotiable: formData.negotiable ? "Yes" : "No",
        image_1: imageUrls[0] || "",
        image_2: imageUrls[1] || "",
        image_3: imageUrls[2] || "",
        image_4: imageUrls[3] || "",
        image_5: imageUrls[4] || ""
      };
  
      // Add validation for total payload size
      const payloadSize = JSON.stringify(templateParams).length;
      if (payloadSize > 50000000) { // 50MB limit
        alert('Total data size is too large. Please try with fewer or smaller images.');
        setIsSubmitting(false);
        return;
      }
  
      await emailjs.send(
        'service_n5p0vrs',
        'template_bf1kq69',
        templateParams,
        'x1_g3JBwrfrcaw1Bl'
      );
  
      alert('Your listing has been submitted successfully!');
      if (form.current) {
        form.current.reset();
      }
      setFormData({
        itemType: '',
        category: '',
        title: '',
        quantity: 1,
        price: 0,
        age: '',
        breed: '',
        weight: '',
        description: '',
        location: '',
        contactName: '',
        contactPhone: '',
        contactEmail: '',
        images: null,
        vaccination: false,
        certification: false,
        negotiable: false
      });
      setPreviewUrls([]);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your listing. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Sell Your Livestock & Farm Products</h1>
        <p className={styles.subtitle}>
          Connect with thousands of buyers - List your livestock, poultry, or farm products today
        </p>
      </div>

      <form ref={form} onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGrid}>
          <div className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Basic Information</h2>
            
            <div className={styles.formGroup}>
              <label>Item Type</label>
              <select
                value={formData.itemType}
                onChange={(e) => setFormData({ ...formData, itemType: e.target.value })}
                required
              >
                <option value="">Select Type</option>
                <option value="livestock">Livestock</option>
                <option value="poultry">Poultry</option>
                <option value="products">Farm Products</option>
                <option value="other">Other</option>
              </select>
            </div>

            {formData.itemType && (
              <div className={styles.formGroup}>
                <label>Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                >
                  <option value="">Select Category</option>
                  {categories[formData.itemType as keyof typeof categories]?.map((cat) => (
                    <option key={cat} value={cat.toLowerCase()}>{cat}</option>
                  ))}
                </select>
              </div>
            )}

            <div className={styles.formGroup}>
              <label>Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g., Friesian Dairy Cow, Layer Chickens"
                required
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Quantity</label>
                <input
                  type="number"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: Number(e.target.value) })}
                  min="1"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label>Price (KES)</label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                  min="0"
                  required
                />
              </div>
            </div>
          </div>

          <div className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Details</h2>

            <div className={styles.formGroup}>
              <label>Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Provide detailed information about your listing..."
                rows={4}
                required
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Age</label>
                <input
                  type="text"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  placeholder="e.g., 2 years, 6 months"
                />
              </div>

              <div className={styles.formGroup}>
                <label>Weight</label>
                <input
                  type="text"
                  value={formData.weight}
                  onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                  placeholder="e.g., 400 kg"
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Breed</label>
              <input
                type="text"
                value={formData.breed}
                onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                placeholder="e.g., Friesian, Merino"
              />
            </div>

            <div className={styles.checkboxGroup}>
              <label>
                <input
                  type="checkbox"
                  checked={formData.vaccination}
                  onChange={(e) => setFormData({ ...formData, vaccination: e.target.checked })}
                />
                Vaccinated/Health Certificate Available
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={formData.negotiable}
                  onChange={(e) => setFormData({ ...formData, negotiable: e.target.checked })}
                />
                Price Negotiable
              </label>
            </div>
          </div>

          <div className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Images</h2>
            <div className={styles.imageUpload}>
              <input
                type="file"
                onChange={handleImageChange}
                multiple
                accept="image/*"
                className={styles.fileInput}
              />
              <div className={styles.imagePreviews}>
                {previewUrls.map((url, index) => (
                  <img key={index} src={url} alt={`Preview ${index + 1}`} />
                ))}
              </div>
            </div>
          </div>

          <div className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Contact Information</h2>
            
            <div className={styles.formGroup}>
              <label>Name</label>
              <input
                type="text"
                value={formData.contactName}
                onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                required
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Phone</label>
                <input
                  type="tel"
                  value={formData.contactPhone}
                  onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label>Email</label>
                <input
                  type="email"
                  value={formData.contactEmail}
                  onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g., Nairobi, Kenya"
                required
              />
            </div>
          </div>
        </div>

        <div className={styles.formFooter}>
          <p className={styles.commission}>
            Note: A commission fee of 5% will be charged on successful sales through our platform.
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
              {isSubmitting ? 'Submitting...' : 'List Item for Sale'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SellLivestock;