import React, { useState, useEffect } from 'react';
import styles from './HeroSection5.module.css'; // Import the CSS module

const image1 = `${process.env.PUBLIC_URL}/Images/Articles/EmilyInParis/emilyinparis.jpg`;

const HeroSection3 = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <a href="/emily-in-paris" className={styles.heroLink}>
      <div className={`${styles.heroSection} ${isSmallScreen ? styles.heroSectionSmallScreen : ''}`}>
        <div className={`${styles.textContent} ${styles.textCenter}`}>
          <h2 className={`${styles.feature} ${styles.textBold}`}>POP CULTURE</h2>
          <h1 className={styles.headlineLarge}>
            Emily in Paris Style Evolution: Iconic Outfits, Makeup, and Hair
          </h1>
          <p className={styles.subtext}>
            Season four of Emily in Paris has finally arrived, and I couldn’t be more thrilled.
            Emily Cooper's colourful and bold outfit choices, paired with her upbeat and optimistic personality, create a character & show worth binging on Netflix.
          </p>
          <p className={`${styles.author} ${styles.authorItalic}`}>BY JACKIE WYERS</p>
        </div>
        <div className={`${styles.imageContent} ${isSmallScreen ? styles.imageContentSmallScreen : ''}`}>
          <img src={image1} alt="Emily in Paris" className={styles.image} loading="lazy" />
        </div>
      </div>
    </a>
  );
};

export default HeroSection3;