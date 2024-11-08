import React from 'react';
import { Link, Routes, Route, Outlet } from 'react-router-dom'; // Ensure Routes and Route are imported
import styles from './Shop.module.css';
import PrescriptionCenter from './MedicationStore/PrescriptionCenter';
import PetStore from './PetStore/PetStore';
import SellLivestock from './SellLivestock/SellLivestock'; // Ensure SellLivestock is imported correctly
import Agrovet from './Agrovet/Agrovet'; // Ensure Agrovet is imported correctly

const Shop: React.FC = () => {
  console.log('Shop component rendered');
  
  return (
    <div className={styles.shopContainer}>
      <div className={styles.shopHeader}>
        <h1 className={styles.title}>Animal Care Marketplace</h1>
        <p className={styles.subtitle}>Your one-stop shop for all animal care needs</p>
      </div>
      
      <div className={styles.cardGrid}>
        <Link to="/shop/prescriptions" className={styles.card}>
          <div className={styles.cardImageContainer}>
            <img 
              src="https://www.annapharmacy.com/wp-content/uploads/2023/08/How-Long-Does-An-Anti-Rabies-Vaccine-Provide-Immunity-In-Humans-scaled.webp"
              alt="Pet Products" 
              className={styles.cardImage}
            />
          </div>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>Pet Products</h2>
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

        {/* New Agrovet Section */}
        <Link to="/shop/agrovet" className={styles.card}>
          <div className={styles.cardImageContainer}>
            <img 
              src="https://i0.wp.com/transvilleagrong.com/wp-content/uploads/Motorized-knapsack-sprayer-A-Detailed-Guide-for-Efficient-Use.jpg?resize=840%2C473&ssl=1" 
              alt="Agrovet Products" 
              className={styles.cardImage}
            />
          </div>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>Agrovet Products</h2>
            <p className={styles.cardDescription}>
              Explore a wide range of products for animal health and care at our agrovet.
            </p>
            <span className={styles.cardLink}>View Products →</span>
          </div>
        </Link>
      </div>

      {/* Add Routes component for nested routing */}
      <Routes>
        <Route index element={<div>Select a category above to get started</div>} />
        <Route path="prescriptions" element={<PrescriptionCenter />} />
        <Route path="pets" element={<PetStore />} />
        <Route path="sell" element={<SellLivestock />} />
        <Route path="agrovet" element={<Agrovet />} /> {/* New Route for Agrovet */}
      </Routes>
    </div>
  );
};

export default Shop;
