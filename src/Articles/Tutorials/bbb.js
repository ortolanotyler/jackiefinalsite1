import React from 'react';
import styles from './aaa.module.css'; // Import CSS Modules

// Importing the images
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/LatteMakeup/LatteThumbnail.jpg`;
const image5 = `${process.env.PUBLIC_URL}/Images/Articles/SugarPlumFairy/SUGARPLUMTHUMBNAIL.jpeg`;
const image6 = `${process.env.PUBLIC_URL}/Images/Articles/LanaXskims/LanaDelRayThumbnail.jpeg`;
const image8 = `${process.env.PUBLIC_URL}/Images/Articles/VictoriaSecret2014/VSThumbnail.jpeg`;

const image17 = `${process.env.PUBLIC_URL}/Images/Articles/NoMakeUpSpring/nomakeupspringthumbnail.jpeg`;

const cardsData = [


  {
    link: "/nomakeupspring",
    image: image17,
    alt: "No Makeup - Spring Edition",
    title: "No-Makeup Spring 🌸",
    description: "No Makeup Makeup - Spring Edition",
  },
  {
    link: "/latteMakeup",
    image: image2,
    alt: "Warm and cozy latte-inspired fall makeup look",
    title: "Latte Makeup",
    description: "Think warm, cozy, fall!",
  },
  {
    link: "/sugarplumfairy",
    image: image5,
    alt: "Sugar Plum Fairy makeup trend report",
    title: "Sugar Plum Fairy",
    description: "Trend Report",
  },
  {
    link: "/lanablog",
    image: image6,
    alt: "SKIMS collaboration with Lana for Valentine's Day makeup",
    title: "SKIMS X Lana",
    description: "V-Day Makeup",
  },
  {
    link: "/victoriasecret",
    image: image8,
    alt: "Victoria's Secret fashion show 2014 vibes",
    title: "Victoria's Secret",
    description: "2014 vibes are so back",
  },

];

const Card = ({ link, image, alt, title, description }) => {
  return (
    <li className={styles.card}>
      <a className={styles.cardImage} href={link}>
        <img src={image} alt={alt} className={styles.cardImageImg} />
      </a>
      <div className={styles.cardDescription}>
        <a href={link} className={styles.cardDescriptionLink}><h2 className={styles.cardDescriptionH2}>{title}</h2></a>
        {description && <p className={styles.cardDescriptionP}>{description}</p>} {/* Conditional rendering of description */}
        <a href={link} className={styles.readHereBtn}>Read Here</a>
      </div>
    </li>
  );
};

const Slider1 = () => {
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

export default Slider1;
