import React from 'react';
import styles from './HeroSection.module.css';

const image1 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/fairytalethumbnail.webp`;  // Changed to WebP format

const HeroSection = () => {
  return (
    <a href="/fairytalewedding" className={styles.heroLink}>
      <div className={styles.heroSection}>
        <div className={styles.textContent}>
          <h2 className={styles.feature}>FEATURE</h2>
          <h1 className={styles.headline}>
            Our Fairytale Wedding Overlooking Sorrento, Italy
          </h1>
          <p className={styles.subtext}>
            Step into the magic of our fairytale wedding in Sorrento, Italy. Discover the iconic pop culture brides who inspired my bridal look, and get an inside look at the intimate ceremony that brought our love story—from middle school sweethearts to lifelong partners—to life.
          </p>
          <p className={styles.author}>BY JACKIE WYERS</p>
        </div>
        <div className={styles.imageContent}>
          <img src={image1} alt="Fairytale Wedding" loading="lazy" />
        </div>
      </div>
    </a>
  );
};

export default HeroSection;


