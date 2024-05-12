import React from 'react';
import styles from './BeigeReveal.module.css'; // Import the CSS module

const BeigeReveal = (props) => {
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

export default BeigeReveal;
