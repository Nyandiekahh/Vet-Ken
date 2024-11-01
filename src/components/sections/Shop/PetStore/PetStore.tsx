import React, { useState } from 'react';
import { MarketItem, CategoryId } from './types';
import styles from './PetStore.module.css';

const categories = [
  { id: 'all' as const, name: 'All Categories' },
  { id: 'livestock' as const, name: 'Livestock' },
  { id: 'poultry' as const, name: 'Poultry' },
  { id: 'products' as const, name: 'Animal Products' }
] as const;

const marketItems: MarketItem[] = [
  {
    id: 1,
    type: 'Poultry',
    category: 'poultry',
    subcategory: 'layers',
    title: 'Layer Chickens',
    price: 1500,
    description: 'Healthy layer chickens with excellent egg production rate',
    details: {
      age: '8 months',
      weight: '2 kg',
      breed: 'Rhode Island Red',
      gender: 'Female',
      quantity: 50,
      condition: 'Excellent',
      production: '1 egg/day',
      feedType: 'Commercial layer feed',
      vaccination: {
        isVaccinated: true,
        certificates: ['Newcastle', 'Gumboro', 'Fowl Pox'],
        lastVaccinationDate: '2024-01-15'
      }
    },
    vaccinated: true,
    negotiable: true,
    inStock: true,
    images: ['https://www.nfstockfeeds.co.zw/img/mockups/layers1.png'],
    contact: {
      name: 'John Doe',
      phone: '+254 123 456 789',
      email: 'john@example.com',
      location: 'Nairobi',
      county: 'Nairobi County',
      availability: '8:00 AM - 6:00 PM'
    },
    listedDate: '2024-02-15',
    status: 'available',
    tags: ['layers', 'rhode island red', 'vaccinated']
  },
  {
    id: 2,
    type: 'Livestock',
    category: 'livestock',
    subcategory: 'dairy-cattle',
    title: 'Friesian Dairy Cow',
    price: 120000,
    description: 'High-yielding dairy cow, currently producing 25L daily',
    details: {
      age: '5 years',
      weight: '600 kg',
      breed: 'Friesian',
      gender: 'Female',
      quantity: 1,
      condition: 'Excellent',
      production: '25L/day',
      feedType: 'Dairy meal and hay',
      vaccination: {
        isVaccinated: true,
        certificates: ['FMD', 'LSD', 'Anthrax'],
        lastVaccinationDate: '2024-01-10'
      }
    },
    vaccinated: true,
    negotiable: true,
    inStock: true,
    images: ['https://pbs.twimg.com/media/FZE7PtWXgAgs9Ey?format=jpg&name=4096x4096'],
    contact: {
      name: 'Jane Smith',
      phone: '+254 987 654 321',
      email: 'jane@example.com',
      location: 'Nakuru',
      county: 'Nakuru County',
      availability: '7:00 AM - 7:00 PM'
    },
    listedDate: '2024-02-10',
    status: 'available',
    tags: ['dairy', 'friesian', 'high yield']
  }
];

const PetStore: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [selectedItem, setSelectedItem] = useState<MarketItem | null>(null);

  const filteredItems = selectedCategory === 'all' 
    ? marketItems 
    : marketItems.filter(item => item.category === selectedCategory);

  const handleCardClick = (item: MarketItem) => {
    setSelectedItem(item);
  };

  const closeDetails = () => {
    setSelectedItem(null);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Animals & Animal Products Marketplace</h1>
      <p className={styles.subtitle}>Browse and find quality livestock, poultry, and animal products</p>

      <div className={styles.categoryBar}>
        {categories.map((category) => (
          <button
            key={category.id}
            className={`${styles.categoryButton} ${selectedCategory === category.id ? styles.active : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className={styles.listContainer}>
        {filteredItems.map((item) => (
          <div key={item.id} className={styles.listItem} onClick={() => handleCardClick(item)}>
            <img
              src={item.images[0]}
              alt={item.title}
              className={styles.itemImage}
            />
            <div className={styles.itemInfo}>
              <h2 className={styles.itemTitle}>{item.title}</h2>
              <p className={styles.itemType}>{item.type}</p>
              <p className={styles.itemPrice}>KES {item.price.toLocaleString()}</p>
              <p className={styles.itemLocation}>
                {item.contact.location}, {item.contact.county}
              </p>
              {item.negotiable && (
                <span className={styles.negotiableBadge}>Negotiable</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className={styles.modal} onClick={closeDetails}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeDetails}>×</button>
            <div className={styles.modalGrid}>
              <div className={styles.modalImages}>
                <img src={selectedItem.images[0]} alt={selectedItem.title} className={styles.modalMainImage} />
              </div>
              <div className={styles.modalInfo}>
                <h2 className={styles.modalTitle}>{selectedItem.title}</h2>
                <p className={styles.modalPrice}>KES {selectedItem.price.toLocaleString()}</p>

                <div className={styles.section}>
                  <h3>Details</h3>
                  <p className={styles.description}>{selectedItem.description}</p>
                  <div className={styles.detailsGrid}>
                    {selectedItem.details.age && (
                      <div className={styles.detailItem}>
                        <span className={styles.detailLabel}>Age:</span>
                        <span>{selectedItem.details.age}</span>
                      </div>
                    )}
                    {selectedItem.details.weight && (
                      <div className={styles.detailItem}>
                        <span className={styles.detailLabel}>Weight:</span>
                        <span>{selectedItem.details.weight}</span>
                      </div>
                    )}
                    {selectedItem.details.breed && (
                      <div className={styles.detailItem}>
                        <span className={styles.detailLabel}>Breed:</span>
                        <span>{selectedItem.details.breed}</span>
                      </div>
                    )}
                    {selectedItem.details.production && (
                      <div className={styles.detailItem}>
                        <span className={styles.detailLabel}>Production:</span>
                        <span>{selectedItem.details.production}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className={styles.section}>
                  <h3>Contact Information</h3>
                  <div className={styles.contactInfo}>
                    <p>{selectedItem.contact.name}</p>
                    <p>{selectedItem.contact.phone}</p>
                    <p>{selectedItem.contact.email}</p>
                    <p>{selectedItem.contact.location}, {selectedItem.contact.county}</p>
                    <p>Available: {selectedItem.contact.availability}</p>
                  </div>
                </div>

                <div className={styles.badges}>
                  {selectedItem.negotiable && (
                    <span className={styles.badge}>Negotiable</span>
                  )}
                  {selectedItem.vaccinated && (
                    <span className={styles.badge}>Vaccinated</span>
                  )}
                  <span className={styles.badge}>{selectedItem.status}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PetStore;