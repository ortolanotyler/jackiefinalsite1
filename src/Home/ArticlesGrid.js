import React from 'react';
import styles from './ArticlesGrid.module.css';

const ImageGrid = () => {
  const items = [
    { id: 1, title: '30 Linen el Like Nothing', img: 'https://via.placeholder.com/300x400' },
    { id: 2, title: '16 Best RSummer Every Day', img: 'https://via.placeholder.com/300x400' },
    { id: 3, title: '17 Skihe Office', img: 'https://via.placeholder.com/300x400' },
    { id: 4, title: 'Sutlessly Chic Vibes', img: 'https://via.placeholder.com/300x400' },
  ];

  return (
    <div className={styles.gridContainer}>
      {items.map(item => (
        <div key={item.id} className={styles.gridItem}>
          <img src={item.img} alt={item.title} className={styles.image} />
          <p className={styles.title}>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
