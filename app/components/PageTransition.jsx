'use client'

import React from 'react';
import styles from './PageTransition.module.css';

export default function PageTransition({ children }) {
  return (
    <div className={styles.pageTransition}>
      {children}
    </div>
  );
}
