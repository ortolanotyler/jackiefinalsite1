import React from 'react';
import styles from './HeroSection.module.css';

const image1 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/fairytalethumbnail.jpg`;

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.textContent}>
        <h2 className={styles.feature}>FEATURE</h2>
        <h1 className={styles.headline}>
          This CEO Helped Lead Antiabortion Clinics. Now She’s Exposing Them.
        </h1>
        <p className={styles.subtext}>
          Obria Group, the crisis pregnancy center network that wants to be the pro-life answer to Planned Parenthood, said its clinics would provide women’s health care to millions. Its former CEO says that wasn’t the full story.
        </p>
        <p className={styles.author}>
          BY ELIZABETH FLOCK AND ILLUSTRATIONS BY LIA KANTROWITZ
        </p>
      </div>
      <div className={styles.imageContent}>
        <img src={image1} alt="Placeholder" />
      </div>
    </div>
  );
};

export default HeroSection;
