import React from 'react';
import styles from './aaa.module.css'; // Import CSS Modules

// Importing the images
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/LatteMakeup/LatteThumbnail.jpg`;
const image5 = `${process.env.PUBLIC_URL}/Images/Articles/SugarPlumFairy/SUGARPLUMTHUMBNAIL.jpeg`;
const image6 = `${process.env.PUBLIC_URL}/Images/Articles/LanaXskims/LanaDelRayThumbnail.jpeg`;
const image8 = `${process.env.PUBLIC_URL}/Images/Articles/PatMcGrath/JackieWyersPatMcGrath.jpeg`;
const makeup2016 = `${process.env.PUBLIC_URL}/Images/Articles/2016/2016MakeupThumbnail.jpg`;
const image17 = `${process.env.PUBLIC_URL}/Images/Articles/NoMakeUpSpring/nomakeupspringthumbnail.jpeg`;
const animalpretty = `${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/animals.jpg`;
const bridalmakeup = `${process.env.PUBLIC_URL}/Images/Articles/BridalMakeup/BridalTrialMakeupThumb.jpg`;

const cardsData = [
  {
    link: "/bridalmakeup",
    image: bridalmakeup,
    alt: "Warm and cozy latte-inspired fall makeup look",
    title: "Bridal Trial Makeup 💄",
    description: "Think warm, cozy, fall!",
  },
  {
    link: "/animalpretty",
    image: animalpretty,
    alt: "Warm and cozy latte-inspired fall makeup look",
    title: "Find Your Animal Pretty 🐰",
    description: "Think warm, cozy, fall!",
  },

  {
    link: "/patmcgrath",
    image: image8,
    alt: "Pat McGrath",
    title: "Pat McGrath's Porcelain Doll 🪆",
    description: "Pat's Porcelain Doll"
  },
  {
    link: "/latteMakeup",
    image: image2,
    alt: "Warm and cozy latte-inspired fall makeup look",
    title: "Viral Latte Makeup ☕️",
    description: "Think warm, cozy, fall!",
  },
  {
    link: "/sugarplumfairy",
    image: image5,
    alt: "Sugar Plum Fairy makeup trend report",
    title: "Sugar Plum Fairy Glam 🧚",
    description: "Trend Report",
  },
  {
    link: "/2016Makeup",
    image: makeup2016,
    alt: "Victoria's Secret fashion show 2014 vibes",
    title: "Nostalgic 2016 Makeup 🖤",
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
