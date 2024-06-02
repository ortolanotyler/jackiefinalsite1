import React from 'react';
import TextReveal from '../Components/TextReveal';
import styles from './aaa.module.css'; // Import the CSS module

// Importing the image
const image = `${process.env.PUBLIC_URL}/Images/Articles/DiaryPost1/diarypost1.jpeg`;

const DiarySlider = () => {
  return (
    <div className={styles.centeredContainer}>
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
