import React from 'react';
import styles from './TextRevealNoBox.module.css'; // Import the CSS module

const TextRevealNoBox = (props) => {
  return (
    <div className={styles.hero} style={props.style}>
      <h1 className={styles.textReveal}>
        {props.text}
      </h1>
    </div>
  );
};

export default TextRevealNoBox;
