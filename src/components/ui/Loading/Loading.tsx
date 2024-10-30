// src/components/ui/Loading/Loading.tsx
import React from 'react';
import styles from './Loading.module.css';

export const Loading: React.FC = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner}></div>
      <span>Loading...</span>
    </div>
  );
};