import React from 'react';
import styles from './TextReveal.module.css'; // Import the CSS module

const TextReveal = (props) => {
  return (
    <>
      <div className={styles.hero}>
        <h1 className={styles.textReveal}>
          <span>{props.text}</span>
          <span aria-hidden="true">{props.text}</span>
        </h1>
      </div>
    </>
  );
};

export default TextReveal;
