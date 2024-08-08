import React from 'react';
import styles from './ArticlesGrid.module.css';

// Importing images
const image1 = `${process.env.PUBLIC_URL}/Images/Articles/HotelQ2/1.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/NZThumbnail.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/Articles/Disney/Epcot/EPCOTTHUMBNAIL.jpeg`;
const image4 = `${process.env.PUBLIC_URL}/Images/Articles/DiaryPost1/DIARYSQUARE.jpg`;

const LifestyleGrid = () => {
  const items = [
    { id: 1, title: 'A Summer Getaway At Hotel Quintessence', img: image1, link: '/hotelquintessancesummer' },
    { id: 2, title: 'A Whimsical Week Exploring Auckland', img: image2, link: '/newzealand' },
    { id: 3, title: "A Magical Visit to Epcot", img: image3, link: '/epcot' },
    { id: 4, title: 'Beyond The Surface : Self-Acceptance', img: image4, link: '/diaryfillers' },
  ];

  return (
    <div className={styles.gridContainer}>
      {items.map(item => (
        <a key={item.id} href={item.link} className={styles.gridItem}>
          <img src={item.img} alt={item.title} className={styles.image} />
          <p className={styles.title}>{item.title}</p>
        </a>
      ))}
    </div>
  );
};

export default LifestyleGrid;
