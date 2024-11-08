// src/components/sections/Shop/Agrovet/Agrovet.tsx
import React from 'react';
import styles from './Agrovet.module.css';

const Agrovet: React.FC = () => {
  return (
    <div className={styles.agrovetContainer}>
      <h2 className={styles.title}>Agrovet Products</h2>
      <p className={styles.description}>
        Discover a range of products for animal health, including feed, medicine, and care supplies.
      </p>
      {/* Add product listings here */}
      <div className={styles.productList}>
        {/* Example product */}
        <div className={styles.product}>
          <img 
            src="https://example.com/product-image.jpg" 
            alt="Product Name" 
            className={styles.productImage}
          />
          <div className={styles.productInfo}>
            <h3 className={styles.productTitle}>Product Name</h3>
            <p className={styles.productDescription}>Brief description of the product.</p>
            <span className={styles.productPrice}>$29.99</span>
          </div>
        </div>
        {/* Add more products as needed */}
      </div>
    </div>
  );
};

export default Agrovet;
