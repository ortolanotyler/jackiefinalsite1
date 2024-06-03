import React from 'react';
import { Helmet } from 'react-helmet';
import TextReveal from '../Components/TextReveal';
import styles from './aaa.module.css'; // Import the CSS module

// Importing the image
const image = `${process.env.PUBLIC_URL}/Images/Articles/DiaryPost1/diarypost1.jpeg`;

const DiarySlider = () => {
  return (
    <div className={styles.centeredContainer}>
      <Helmet>
        <title>Diary Slider | Jackie Wyers</title>
        <meta name="description" content="Explore the diary posts of Jackie Wyers and get insights into her personal experiences and thoughts." />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RT6GR7JXYG"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RT6GR7JXYG');
          `}
        </script>
      </Helmet>
      <TextReveal text="DIARY" className={styles.diaryText} />
      <div className={styles.gridContainer}>
        <a href="/diaryfillers" className={styles.diaryLink}>
          <div className={styles.imageContainer}>
            <img src={image} alt="Diary Post" className={styles.diaryImage} />
            <div className={styles.readOverlay}>READ HERE</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default DiarySlider;
