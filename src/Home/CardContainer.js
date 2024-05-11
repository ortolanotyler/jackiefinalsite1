import React, { useState } from 'react';
import styles from './CardContainer.module.css';
import TextReveal from '../Components/TextReveal';

const CardContainer = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredCardIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredCardIndex(null);
  };

  const cardImageUrls = [
    `${process.env.PUBLIC_URL}/Images/CardImage1.png`,
    `${process.env.PUBLIC_URL}/Images/CardImage2.png`,
    `${process.env.PUBLIC_URL}/Images/CardImage3.png`,

  ];

  // Define an array of titles
  const titles = [
    "YARDLEY 1965",
    "2016 MAKEUP",
    "MONT TREMBLANT",
   

  ];

  return (
    <div
    style = {{marginBottom: '2rem'}}
    >
      <TextReveal text="COMING SOON" />
      <div className={styles.container}>
        {cardImageUrls.map((imageUrl, index) => (
          <div
            key={index}
            className={styles.card}
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={handleMouseOut}
            style={{ backgroundImage: hoveredCardIndex === index ? `url(${imageUrl})` : 'none' }}
          >
            <h1>{titles[index]}</h1> {/* Render the title for each card */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
