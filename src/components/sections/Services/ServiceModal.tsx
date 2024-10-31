// src/components/sections/Services/ServiceModal.tsx
import React, { useState } from 'react';
import styles from './ServiceModal.module.css';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceData: any;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, serviceData }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen || !serviceData) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        
        <h2 className={styles.modalTitle}>{serviceData.title}</h2>
        
        <div className={styles.tabList}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'overview' ? styles.active : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'features' ? styles.active : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Features
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'insights' ? styles.active : ''}`}
            onClick={() => setActiveTab('insights')}
          >
            Insights
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'stats' ? styles.active : ''}`}
            onClick={() => setActiveTab('stats')}
          >
            Stats
          </button>
        </div>

        <div className={styles.tabContent}>
          {activeTab === 'overview' && (
            <div>
              <p className={styles.description}>{serviceData.description}</p>
              <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Success Story</h4>
                <p>{serviceData.successStory}</p>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div>
              <div className={styles.section}>
                <h4 className={styles.sectionTitle}>What We Do</h4>
                <ul className={styles.list}>
                  {serviceData.whatWeDo.map((item: string, index: number) => (
                    <li key={index} className={styles.listItem}>
                      <span className={styles.bullet}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Our Guarantees</h4>
                <ul className={styles.list}>
                  {serviceData.guarantees.map((item: string, index: number) => (
                    <li key={index} className={styles.listItem}>
                      <span className={styles.checkmark}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'insights' && (
            <div>
              <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Did You Know?</h4>
                <ul className={styles.list}>
                  {serviceData.didYouKnow.map((fact: string, index: number) => (
                    <li key={index} className={styles.listItem}>
                      <span className={styles.lightbulb}>💡</span>
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Common Myths</h4>
                <div className={styles.mythsGrid}>
                  {serviceData.myths.map((myth: any, index: number) => (
                    <div key={index} className={styles.mythCard}>
                      <p className={styles.mythText}>Myth: {myth.myth}</p>
                      <p className={styles.realityText}>Reality: {myth.reality}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'stats' && (
            <div className={styles.statsGrid}>
              {serviceData.statistics.map((stat: any, index: number) => (
                <div key={index} className={styles.statCard}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;