// src/components/sections/Shop/Shop.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Shop.module.css';

const Shop: React.FC = () => {
  console.log('Shop component rendered'); // Debug log
  
  return (
    <div className={styles.shopContainer}>
      <div className={styles.shopHeader}>
        <h1 className={styles.title}>Animal Care Marketplace</h1>
        <p className={styles.subtitle}>Your one-stop shop for all animal care needs</p>
      </div>
      
      <div className={styles.cardGrid}>
        <Link to="/shop/medications" className={styles.card}>
          <div className={styles.cardImageContainer}>
            <img 
              src="https://www.annapharmacy.com/wp-content/uploads/2023/08/How-Long-Does-An-Anti-Rabies-Vaccine-Provide-Immunity-In-Humans-scaled.webp"
              alt="Pet Medications" 
              className={styles.cardImage}
            />
          </div>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>Pet Medications</h2>
            <p className={styles.cardDescription}>
              Browse our selection of veterinary medications and supplements.
            </p>
            <span className={styles.cardLink}>Shop Now →</span>
          </div>
        </Link>

        <Link to="/shop/pets" className={styles.card}>
          <div className={styles.cardImageContainer}>
            <img 
              src="https://image.petmd.com/files/inline-images/german-shepherd-3.jpg?VersionId=QrldSoaj4srcfCInIahiKcoLSh5D0gh8"
              alt="Available Animals" 
              className={styles.cardImage}
            />
          </div>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>Available Animals</h2>
            <p className={styles.cardDescription}>
              Explore our selection of livestock, pets, and farm animals.
            </p>
            <span className={styles.cardLink}>Browse Animals →</span>
          </div>
        </Link>

        <Link to="/shop/sell" className={styles.card}>
          <div className={styles.cardImageContainer}>
            <img 
              src="https://i.etsystatic.com/6624987/r/il/8d88f9/722600756/il_1080xN.722600756_o19r.jpg"
              alt="Sell Items" 
              className={styles.cardImage}
            />
          </div>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>Sell Your Items</h2>
            <p className={styles.cardDescription}>
              List your livestock, farm products, or equipment with us today.
            </p>
            <span className={styles.cardLink}>Start Selling →</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Shop;