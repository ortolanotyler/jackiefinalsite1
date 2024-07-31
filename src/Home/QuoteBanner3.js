import React from 'react';
import styles from './QuoteBanner.module.css'; // Importing the CSS module

const QuoteBanner3 = () => {
  return (
    <div className={styles.quoteBanner}>
  
      <blockquote className={styles.blockquote}>
        "Switch up your style with confidence”
      </blockquote>
      <cite className={styles.cite}>— Jackie Wyers</cite>
    
    </div>
  );
};

export default QuoteBanner3;
