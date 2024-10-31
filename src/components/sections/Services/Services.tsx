// src/components/sections/Services/Services.tsx
import React, { useEffect, useRef, useState } from 'react';
import styles from './Services.module.css';
import ServiceModal from './ServiceModal';
import { serviceContent } from './serviceContent';

interface Service {
  id: number;
  // icon: string;
  title: string;
  description: string;
  image: string;
  buttons: string[];
}

const services: Service[] = [
  {
    id: 1,
    // icon: '💉',
    title: 'Veterinary Care',
    description: 'Complete health checks, vaccinations, and treatment services for all animals.',
    image: 'https://www.shutterstock.com/image-photo/livestock-farm-worker-veterinarian-examining-600nw-2485453139.jpg',
    buttons: ['Read More', 'Book Now']
  },
  {
    id: 2,
    // icon: '🦴',
    title: 'Nutrition & Feed',
    description: 'Expert advice on animal nutrition and quality feed supplements.',
    image: 'https://www.deheus.co.ke/contentassets/2d0f7218775e455d9e2a54356b83c301/de-heus-animal-nutrition_animal-feed_compound-feed_hero.jpg?mode=crop&width=500&height=350',
    buttons: ['Read More', 'Book Now']
  },
  {
    id: 3,
    // icon: '🚑',
    title: 'Emergency Services',
    description: 'Urgent Care, Unmatched Compassion: Your Trusted Partner in animal Emergencies.',
    image: 'https://richmondfamilymagazine.com/wp-content/uploads/static/article/99557/1708_PetStop_F.jpg',
    buttons: ['Read More', 'Book Now']
  },
  {
    id: 4,
    // icon: '🔬',
    title: 'Laboratory Services',
    description: 'Advanced diagnostic testing and lab work for accurate treatment.',
    image: 'https://png.pngtree.com/background/20230827/original/pngtree-animal-experiments-flask-lab-animal-photo-picture-image_4852793.jpg',
    buttons: ['Read More', 'Book Now']
  },
  {
    id: 5,
    // icon: '🐄',
    title: 'Breeding Services',
    description: 'Professional breeding services including artificial insemination.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Cj7ikfCMe6xJlJYOyPq72G_jmAumrwLg3g&s',
    buttons: ['Read More', 'Book Now']
  },
  {
    id: 6,
    // icon: '🦠',
    title: 'Parasite Control',
    description: 'Tailored Parasite Control for Paws, Hooves, and Feathers – Keeping Your Animals Protected.',
    image: 'https://assets.elanco.com/8e0bf1c2-1ae4-001f-9257-f2be3c683fb1/dbb04688-68a1-49e1-a3d9-f53f06d7067a/dog-ticks-vary-in-size_0.jpg?w=750&q=75&auto=format',
    buttons: ['Read More', 'Book Now']
  },
  {
    id: 7,
    // icon: '🦮',
    title: 'Dog Walking',
    description: 'Paws in Motion: Where Every Step Is a Wagging Tail Adventure!',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd5X2kOGH-hgnk2X3WEV8yxwJ5e3fz5GzgpQ&s',
    buttons: ['Read More', 'Book Now', 'Explore Plans']
  },
  {
    id: 8,
    // icon: '🏥',
    title: 'Disease Treatment',
    description: 'Paws to health: Nurturing wellness one paw at a time.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThd7BeNMR3HbHNfrzyB1QGGATtHv1JSx4kyg&s',
    buttons: ['Read More', 'Book Now']
  },
  {
    id: 9,
    // icon: '🚜',
    title: 'Farm Visits',
    description: 'Bringing Veterinary Care to Your Fields – Expertise Rooted in Rural Wellness.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9vr0XStAjzcC4MC8JlNtzKFcQ32AWGFjhBQ&s',
    buttons: ['Read More', 'Book Now']
  },
  {
    id: 10,
    // icon: '💉',
    title: 'Vaccination',
    description: 'Tailored Vaccination Solutions for Lifelong Pet Wellness.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCkUG_ROhWAIq0PKgaWXtQG9S0Fd4bYoeEag&s',
    buttons: ['Read More', 'Book Now']
  },
  {
    id: 11,
    // icon: '✂️',
    title: 'Pet Grooming',
    description: 'Unleashing the Best in Your Pet\'s Grooming Experience – Where Tails Wag with Joy!',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9q6ZoDkqg6qCMd0dJ8TFwCMbxW1ZCoHNqzg&s',
    buttons: ['Read More', 'Book Now']
  },
  {
    id: 12,
    // icon: '🎓',
    title: 'Dog Training',
    description: 'Beyond Obedience: Tailored Training for Lifelong Bonds – Unleash the Best in Your Dog!',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBX73dWeJwwegWHX3Lt7WU2O42QiuwkdfMw&s',
    buttons: ['Read More', 'Book Now', 'Explore Plans']
  },
  {
    id: 13,
    // icon: '👨‍⚕️',
    title: 'Consultation',
    description: 'Tailoring Solutions for Your Pet\'s Well-being. Consult with Our Experts Today!',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLnZ4e3aoE3x-LF0AVxkAqI0XcG9C-_vyMow&s',
    buttons: ['Read More', 'Book Now']
  }
];

const Services = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add the service mapping function
  const getServiceContentKey = (title: string): string => {
    const titleToKeyMap: { [key: string]: string } = {
      'Veterinary Care': 'veterinaryCare',
      'Nutrition & Feed': 'nutritionAndFeed',
      'Emergency Services': 'emergencyServices',
      'Laboratory Services': 'laboratoryServices',
      'Breeding Services': 'breedingServices',
      'Parasite Control': 'parasiteControl',
      'Dog Walking': 'dogWalking',
      'Disease Treatment': 'diseaseTreatment',
      'Farm Visits': 'farmVisits',
      'Vaccination': 'vaccination',
      'Pet Grooming': 'petGrooming',
      'Dog Training': 'dogTraining',
      'Consultation': 'consultation'
    };

    return titleToKeyMap[title] || '';
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, observerOptions);

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const handleServiceAction = (service: Service, action: string) => {
    const serviceId = getServiceContentKey(service.title);
    const content = serviceContent[serviceId as keyof typeof serviceContent];
    
    if (content) {
      setSelectedService(content);
      setIsModalOpen(true);
    } else {
      console.warn(`No content found for service: ${service.title} (${serviceId})`);
    }
  };

  return (
    <>
      <section className={styles.services}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.title}>Our Services</h2>
            <p className={styles.subtitle}>
              Comprehensive veterinary care and agricultural solutions for your animals
            </p>
          </div>

          <div className={styles.grid}>
            {services.map((service, index) => (
              <div
                key={service.id}
                className={styles.card}
                ref={el => cardsRef.current[index] = el}
              >
                <div 
                  className={styles.imageContainer}
                  style={{ 
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url(${service.image})` 
                  }}
                >
                  <div className={styles.iconWrapper}>
                    {/* <span className={styles.icon}>{service.icon}</span> */}
                  </div>
                </div>
                <div className={styles.contentWrapper}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.description}>{service.description}</p>
                  <div className={styles.buttonGroup}>
                    {service.buttons.map((button, idx) => (
                      <button 
                        key={idx} 
                        className={`${styles.button} ${idx === 0 ? styles.primary : styles.secondary}`}
                        onClick={() => handleServiceAction(service, button)}
                      >
                        {button}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceData={selectedService}
      />
    </>
  );
};

export default Services;