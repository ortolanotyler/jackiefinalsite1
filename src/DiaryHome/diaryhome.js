import React from 'react';
import TextReveal from '../Components/TextReveal';
import styles from './aaa.module.css'; // Import the CSS module

// Importing the image
const image = `${process.env.PUBLIC_URL}/Images/Articles/DiaryPost1/diarypost1.jpeg`;

const DiarySlider = () => {
  return (
    <div className={styles.centeredImage}>
      <TextReveal text="DIARY" className={styles.diaryText} />
    
      <a href="/diary1">
        <img src={image} alt="Diary Post" className={styles.diaryImage} />
      </a>
    </div>
  );
};

export default DiarySlider;
