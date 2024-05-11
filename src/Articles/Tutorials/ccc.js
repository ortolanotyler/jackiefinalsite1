import React from 'react';
import styles from './aaa.module.css'; // Import CSS Modules

const image1 = `${process.env.PUBLIC_URL}/Images/Barbiethumbnizzle.png`;
const image2 = `${process.env.PUBLIC_URL}/Images/LatteMakeupHero.png`;
const image3 = `${process.env.PUBLIC_URL}/Images/patmcgrath1.jpeg`;
const image4 = `${process.env.PUBLIC_URL}/Images/nomakeupspringthumbnail.jpeg`;

const cardsData = [

  {
    link: "/barbie",
    image: image1,
    alt: "Margot Robbie Barbie Makeup Tutorial",
    title: "Margot at Barbie",
    description: "Barbie Summer is in Full Effect!"
  },
  {
    link: "/latteMakeup",
    image: image2,
    alt: "Latte Makeup Tutorial",
    title: "Latte Makeup",
    description: "Think warm, cozy, fall!"
  },
  {
    link: "/patmcgrath",
    image: image3,
    alt: "Pat McGrath Makeup Tutorial",
    title: "Pat McGrath",
    description: "I tried the goo trend"
  },
  // Add more card objects as needed...
];

const Card = ({ link, image, alt, title, description }) => {
  return (
    <li className={styles.card}>
      <a className={styles.cardImage} href={link}>
        <img src={image} alt={alt} className={styles.cardImageImg} />
      </a>
      <div className={styles.cardDescription}>
        <a href={link} className={styles.cardDescriptionLink}>
          <h2 className={styles.cardDescriptionH2}>{title}</h2>
          <p className={styles.cardDescriptionP}>{description}</p>
        </a>
        {/* "Read Here" button added for consistency with the previous example */}
        <a href={link} className={styles.readHereBtn}>Read Here</a>
      </div>
    </li>
  );
};

const Slider3 = () => {
  return (
    <ul className={styles.cardList}>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          link={card.link}
          image={card.image}
          alt={card.alt}
          title={card.title}
          description={card.description}
        />
      ))}
    </ul>
  );
};

export default Slider3;
