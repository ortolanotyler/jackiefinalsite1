import React from 'react';
import styles from './LatestExplorer.module.css';

const LatestExplorer = () => {
  return (
    <div className={styles.beautySection}>
      <a href="/newzealand" className={styles.mainArticle}>
        <img
          src={`${process.env.PUBLIC_URL}/Images/Articles/NewZealand/NZThumbnail.jpg`}
          alt="Main Article"
          className={styles.mainImage}
        />
        <div className={styles.mainContent}>
          <h2>A Whimsical Week Exploring Auckland, New Zealand!</h2>
          <p>Waiheke Island, Queen Street Shopping & A Dream Bridal Appointment</p>
          <p>BY JACKIE WYERS</p>
        </div>
      </a>
      <div className={styles.sideArticles}>
        <a href="/fable" className={styles.sideArticle}>
          <img
            src={`${process.env.PUBLIC_URL}/Images/Articles/Fable/FableAucklandThumbnail.jpg`}
            alt="We Tested Fenty Hair"
            className={styles.sideImage}
          />
          <div className={styles.sideContent}>
            <h3>A Luxurious Stay at Fable Auckland</h3>
            <p>Waiheke Island, Queen Street Shopping & A Dream Bridal Appointment</p>
            <br></br>
            <p>JUNE 22, 2024</p>
          </div>
        </a>
        <a href="/summerbeauty" className={styles.sideArticle}>
          <img
            src={`${process.env.PUBLIC_URL}/Images/Articles/Bridesmaids/BridesmaidBoxThumb!.jpg`}
            alt="Goop Launches Its First Mascara"
            className={styles.sideImage}
          />
          <div className={styles.sideContent}>
            <h3>Summer Beauty by Jackie</h3>
            <p>Sun Kissed Skin & Wind-swept Hair</p>
            <br></br>
            <p>JUNE 11, 2024</p>
          </div>
        </a>
        <a href="/summerbeauty" className={styles.sideArticle}>
          <img
            src={`${process.env.PUBLIC_URL}/Images/Articles/SummerBeauty/BlueLagoonThumbnail.jpg`}
            alt="The 12 Best Face Masks for Beating Acne"
            className={styles.sideImage}
          />
          <div className={styles.sideContent}>
            <h3>A Luxurious Stay at Fable Auckland</h3>
            <p>Waiheke Island, Queen Street Shopping & A Dream Bridal Appointment</p>
            <br></br>
            <p>JUNE 22, 2024</p>
          </div>
        </a>
        <a href="/summerinspo" className={styles.sideArticle}>
          <img
            src={`${process.env.PUBLIC_URL}/Images/Articles/SummerInspo/mermaidthumbnail.jpg`}
            alt="The 5 Best Summer Hair Trends to Try ASAP"
            className={styles.sideImage}
          />
          <div className={styles.sideContent}>
            <h3>Summer Inspiration: Pop Culture Edition</h3>
            <p>Grab Your Sea Salt Spray, It's Mermaid Season!</p>
            <br></br>
            <p>JUNE 11, 2024</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default LatestExplorer;
