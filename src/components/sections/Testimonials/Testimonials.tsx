// src/components/sections/Testimonials/Testimonials.tsx
import React, { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    role: "Dairy Farmer",
    image: "/placeholder-1.jpg",
    content: "The expertise and care provided by the team is exceptional. My dairy farm's productivity has increased significantly thanks to their veterinary guidance.",
    rating: 5
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Pet Owner",
    image: "/placeholder-2.jpg",
    content: "Available 24/7 for emergencies. When my dog needed urgent care at midnight, they were there immediately. Truly professional service!",
    rating: 5
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Ranch Owner",
    image: "/placeholder-3.jpg",
    content: "Their livestock management advice has been invaluable. The team's knowledge of animal health and breeding is outstanding.",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => 
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Testimonials</span>
          <h2 className={styles.title}>What Our Clients Say</h2>
          <p className={styles.description}>
            Read about experiences from our satisfied clients and their animals
          </p>
        </div>

        <div className={styles.carousel}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${styles.testimonialCard} ${
                index === activeIndex ? styles.active : ''
              }`}
            >
              <div className={styles.quote}>"</div>
              <p className={styles.content}>{testimonial.content}</p>
              
              <div className={styles.rating}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className={styles.star}>★</span>
                ))}
              </div>

              <div className={styles.author}>
                <div className={styles.imageWrapper}>
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className={styles.authorInfo}>
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.indicators}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === activeIndex ? styles.active : ''
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;