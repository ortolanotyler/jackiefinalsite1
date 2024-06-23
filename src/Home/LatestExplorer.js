import React from 'react';
import styles from './LatestExplorer.module.css';

const BeautySection = () => {
  return (
    <div className={styles.beautySection}>
      <h1 className={styles.sectionTitle}>BEAUTY</h1>
      <a href="#" className={styles.mainArticle}>
        <img
          src={`${process.env.PUBLIC_URL}/Images/Articles/NewZealand/NZThumbnail.jpg`}
          alt="Main Article"
          className={styles.mainImage}
        />
        <div className={styles.mainContent}>
          <h2>The 65 Best Beauty Products You Need for Traveling This Summer</h2>
          <p>Get ready for the sun, sand, and sea.</p>
          <p>BY DANIELLE JAMES, NERISHA PENROSE AND CAROL LEE</p>
        </div>
      </a>
      <div className={styles.sideArticles}>
        <a href="#" className={styles.sideArticle}>
          <img
            src={`${process.env.PUBLIC_URL}/Images/Articles/Fable/FableAucklandThumbnail.jpg`}
            alt="We Tested Fenty Hair"
            className={styles.sideImage}
          />
          <div className={styles.sideContent}>
            <h3>We Tested Fenty Hair—It's for Everyone</h3>
            <p>BY DANIELLE JAMES</p>
          </div>
        </a>
        <a href="#" className={styles.sideArticle}>
          <img
            src={`${process.env.PUBLIC_URL}/Images/Articles/Bridesmaids/BridesmaidBoxThumb!.jpg`}
            alt="Goop Launches Its First Mascara"
            className={styles.sideImage}
          />
          <div className={styles.sideContent}>
            <h3>Goop Launches Its First Mascara</h3>
            <p>BY DANIELLE JAMES</p>
          </div>
        </a>
        <a href="/summerbeauty" className={styles.sideArticle}>
          <img
            src={`${process.env.PUBLIC_URL}/Images/Articles/SummerBeauty/BlueLagoonThumbnail.jpg`}
            alt="The 12 Best Face Masks for Beating Acne"
            className={styles.sideImage}
          />
          <div className={styles.sideContent}>
            <h3>The 12 Best Face Masks for Beating Acne</h3>
            <p>BY NERISHA PENROSE</p>
          </div>
        </a>
        <a href="/summerinspo" className={styles.sideArticle}>
          <img
            src={`${process.env.PUBLIC_URL}/Images/Articles/SummerInspo/mermaidthumbnail.jpg`}
            alt="The 5 Best Summer Hair Trends to Try ASAP"
            className={styles.sideImage}
          />
          <div className={styles.sideContent}>
            <h3>The 5 Best Summer Hair Trends to Try ASAP</h3>
            <p>BY NERISHA PENROSE</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default BeautySection;
