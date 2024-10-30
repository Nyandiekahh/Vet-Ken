// src/components/sections/About/About.tsx
import React from 'react';
import styles from './About.module.css';

const About = () => {
  const stats = [
    { number: '6+', label: 'Years Experience' },
    { number: '1000+', label: 'Happy Clients' },
    { number: '5000+', label: 'Animals Treated' },
    { number: '24/7', label: 'Emergency Service' }
  ];

  const specialties = [
    {
      title: 'Dairy Farm Management',
      description: 'Expert care and management solutions for dairy farms, focusing on herd health and productivity optimization.',
      icon: '🐄'
    },
    {
      title: 'Poultry Health',
      description: 'Specialized care for poultry farms, including vaccination programs and disease prevention strategies.',
      icon: '🐔'
    },
    {
      title: 'Large Animal Care',
      description: 'Comprehensive healthcare for cattle, sheep, and goats, including regular health checks and emergency services.',
      icon: '🐑'
    },
    {
      title: 'Breeding Programs',
      description: 'Advanced breeding services including artificial insemination and reproductive health management.',
      icon: '🧬'
    }
  ];

  const team = [
    {
      name: "Dr. John Doe",
      role: "Lead Veterinarian",
      specialization: "Large Animal Medicine",
      experience: "15 years experience",
      image: "https://images.pexels.com/photos/5726706/pexels-photo-5726706.jpeg"
    },
    {
      name: "Dr. Jane Smith",
      role: "Veterinary Surgeon",
      specialization: "Animal Surgery",
      experience: "8 years experience",
      image: "https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg"
    }
  ];

  return (
    <section className={styles.about}>
      {/* Hero Section */}
      <div className={styles.aboutHero}>
        <div className={styles.heroContent}>
          <span className={styles.subtitle}>ABOUT US</span>
          <h1 className={styles.title}>
            Leading Veterinary Care for Your Livestock
          </h1>
          <p className={styles.description}>
            With over 6 years of dedicated service to the farming community, 
            we provide comprehensive veterinary care and agricultural solutions 
            to enhance your livestock's health and farm productivity.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className={styles.mission}>
        <div className={styles.container}>
          <div className={styles.missionContent}>
            <div className={styles.missionText}>
              <h2>Our Mission</h2>
              <p>
                To provide exceptional veterinary care and support to livestock farmers,
                enhancing animal health, farm productivity, and sustainable agricultural practices
                through innovative solutions and dedicated service.
              </p>
              <div className={styles.values}>
                <div className={styles.value}>
                  <span className={styles.valueIcon}>🎯</span>
                  <h3>Excellence</h3>
                  <p>Commitment to highest standards of veterinary care</p>
                </div>
                <div className={styles.value}>
                  <span className={styles.valueIcon}>⚡</span>
                  <h3>Innovation</h3>
                  <p>Embracing modern veterinary technologies</p>
                </div>
                <div className={styles.value}>
                  <span className={styles.valueIcon}>🤝</span>
                  <h3>Partnership</h3>
                  <p>Building lasting relationships with farmers</p>
                </div>
              </div>
            </div>
            <div className={styles.missionImage}>
              <img 
                src="https://images.pexels.com/photos/735968/pexels-photo-735968.jpeg" 
                alt="Veterinarian with cattle"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Specialties Section */}
      <div className={styles.specialties}>
        <div className={styles.container}>
          <h2>Our Specialties</h2>
          <p className={styles.sectionDesc}>
            Comprehensive veterinary services tailored for livestock and farm animals
          </p>
          <div className={styles.specialtiesGrid}>
            {specialties.map((specialty, index) => (
              <div key={index} className={styles.specialtyCard}>
                <span className={styles.specialtyIcon}>{specialty.icon}</span>
                <h3>{specialty.title}</h3>
                <p>{specialty.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className={styles.team}>
        <div className={styles.container}>
          <h2>Meet Our Expert Team</h2>
          <p className={styles.sectionDesc}>
            Experienced veterinary professionals dedicated to animal healthcare
          </p>
          <div className={styles.teamGrid}>
            {team.map((member, index) => (
              <div key={index} className={styles.teamMember}>
                <div className={styles.memberImage}>
                  <img src={member.image} alt={member.name} />
                </div>
                <div className={styles.memberInfo}>
                  <h3>{member.name}</h3>
                  <span className={styles.role}>{member.role}</span>
                  <span className={styles.specialization}>{member.specialization}</span>
                  <span className={styles.experience}>{member.experience}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className={styles.cta}>
        <div className={styles.container}>
          <h2>Ready to Work Together?</h2>
          <p>Schedule a consultation with our veterinary team</p>
          <button className={styles.ctaButton}>Book an Appointment</button>
        </div>
      </div>
    </section>
  );
};

export default About;