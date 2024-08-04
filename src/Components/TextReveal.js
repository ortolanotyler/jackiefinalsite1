import React from 'react';
import styles from './TextReveal.module.css'; // Import the CSS module

const TextReveal = (props) => {
  return (
    <div className={styles.hero} style={props.style}>
      <h1 className={styles.textReveal}>
        {props.text}
      </h1>
    </div>
  );
};

export default TextReveal;
