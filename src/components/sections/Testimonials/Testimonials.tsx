// Testimonials.tsx
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
          <h2>Testimonials</h2>
          <h3>What Our Clients Say</h3>
          <p>Read about experiences from our satisfied clients and their animals</p>
        </div>

        <div className={styles.testimonialSlider}>
          <div className={styles.testimonialContainer}>
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`${styles.testimonialItem} ${
                  index === activeIndex ? styles.active : ''
                }`}
              >
                <blockquote>
                  <p>{testimonial.content}</p>
                  <div className={styles.rating}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <div className={styles.author}>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div className={styles.authorInfo}>
                      <div className={styles.name}>{testimonial.name}</div>
                      <div className={styles.role}>{testimonial.role}</div>
                    </div>
                  </div>
                </blockquote>
              </div>
            ))}
          </div>

          <div className={styles.navigation}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`${styles.navDot} ${
                  index === activeIndex ? styles.active : ''
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;