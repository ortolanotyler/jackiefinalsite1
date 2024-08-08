import React from 'react';
import styles from '../Home/HeroSection.module.css';
import TextReveal from '../Components/TextReveal';

const image1 = `${process.env.PUBLIC_URL}/Images/Articles/DiaryPost1/DIARYSQUARE.jpg`;

const DiaryHome = () => {
  return (
    <>
      <TextReveal text="DIARY" />
      <a href="/diaryfillers" className={styles.heroLink}>
        <div className={styles.heroSection}>
          <div className={styles.textContent}>
            <h2 className={styles.feature}>MAY 3, 2024</h2>
            <h1 className={styles.headline}>
              Beyond The Surface : My Experience With Injectable Fillers and Self-Acceptance
            </h1>
            <p className={styles.subtext}>
            In today's social media-driven world, it's increasingly common to see teens and young women experimenting with cosmetic enhancements. Platforms like Instagram flood us with transformation reels...            </p>
            <p className={styles.author}>
              BY JACKIE WYERS
            </p>
          </div>
          <div className={styles.imageContent}>
            <img src={image1} alt="Placeholder" />
          </div>
        </div>
      </a>
    </>
  );
};

export default DiaryHome;
