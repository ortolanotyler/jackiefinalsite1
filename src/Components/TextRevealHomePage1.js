import React from 'react';
import styles from './TextRevealHomePage1.module.css'; // Import the CSS module

const TextRevealHomePage1 = (props) => {
  return (
    <div className={styles.hero} style={props.style}>
      <h1 className={styles.textReveal}>
        {props.text}
      </h1>
    </div>
  );
};

export default TextRevealHomePage1;
