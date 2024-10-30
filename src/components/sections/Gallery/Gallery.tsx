// src/components/sections/Gallery/Gallery.tsx
import React, { useState } from 'react';
import styles from './Gallery.module.css';

interface GalleryImage {
  id: number;
  url: string;
  category: string;
  title: string;
  description: string;
}

const galleryData: GalleryImage[] = [
  {
    id: 1,
    url: '/placeholder-1.jpg',
    category: 'Treatment',
    title: 'Veterinary Care',
    description: 'Professional treatment services'
  },
  {
    id: 2,
    url: '/placeholder-2.jpg',
    category: 'Facilities',
    title: 'Modern Equipment',
    description: 'State-of-the-art facilities'
  },
  // Add more images as needed
];

const categories = ['All', 'Treatment', 'Facilities', 'Farm Visits', 'Success Stories'];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = selectedCategory === 'All'
    ? galleryData
    : galleryData.filter(img => img.category === selectedCategory);

  return (
    <section className={styles.gallery}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Gallery</h2>
          <p className={styles.subtitle}>
            Explore our facilities and success stories
          </p>
        </div>

        <div className={styles.filters}>
          {categories.map(category => (
            <button
              key={category}
              className={`${styles.filterButton} ${
                selectedCategory === category ? styles.active : ''
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredImages.map(image => (
            <div
              key={image.id}
              className={styles.imageCard}
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.url} alt={image.title} />
              <div className={styles.overlay}>
                <h3>{image.title}</h3>
                <p>{image.category}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
            <button className={styles.closeButton}>&times;</button>
            <div className={styles.lightboxContent} onClick={e => e.stopPropagation()}>
              <img src={selectedImage.url} alt={selectedImage.title} />
              <div className={styles.imageInfo}>
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
                <span className={styles.category}>{selectedImage.category}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;