import React from 'react';
import styles from './DropCap.module.css'; // Import the CSS module

const BridalDropCap = ({ text }) => {
  return (
    <p className={styles.dropcap}>
      <span className={styles['dropcap-letter']}>{text.charAt(0)}</span>
      {text.slice(1)}
    </p>
  );
};

export default BridalDropCap;
