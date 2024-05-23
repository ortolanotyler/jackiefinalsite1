import React from 'react';
import styles from '../aaa.module.css'; // Import CSS Modules
import TextReveal from '../../../Components/TextReveal';
import RotatingText from '../../../Navigation/AppBar/RotatingText';
import { Paper } from '@mui/material';


// Importing the images
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/LatteMakeup/LatteThumbnail.jpg`;
const image5 = `${process.env.PUBLIC_URL}/Images/Articles/SugarPlumFairy/SUGARPLUMTHUMBNAIL.jpeg`;
const image6 = `${process.env.PUBLIC_URL}/Images/Articles/LanaXskims/LanaDelRayThumbnail.jpeg`;
const image8 = `${process.env.PUBLIC_URL}/Images/Articles/PatMcGrath/JackieWyersPatMcGrath.jpeg`;
const victoria = `${process.env.PUBLIC_URL}/Images/Articles/VictoriaSecret2014/VSThumbnail.jpeg`;
const makeup2016 = `${process.env.PUBLIC_URL}/Images/Articles/2016/2016MakeupThumbnail.jpg`;
const animal = `${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/animals.jpg`;

const cardsData = [

  { link: "/animalpretty", image: animal, alt: "Warm and cozy latte-inspired fall makeup look", title: "Find Your Animal Pretty 🐰" },

  {
    link: "/2016Makeup",
    image: makeup2016,
    alt: "Victoria's Secret fashion show 2014 vibes",
    title: "Nostalgic 2016 Makeup 🖤",
    description: "2014 vibes are so back",
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
    link: "/patmcgrath",
    image: image8,
    alt: "Pat McGrath",
    title: "Pat McGrath's Porcelain Doll 🪆",
    description: "Pat's Porcelain Doll"
  },




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
        {/* Button added below */}
        <a href={link} className={styles.readHereBtn}>Read Here</a>
      </div>
    </li>
  );
};

const TrendsHome = () => {
  return (
    <div>
     <TextReveal text="TRENDING NOW" />
     <Paper elevation={3} style={{ padding: '1rem', margin: '1rem 0' }}>
     <RotatingText />
     </Paper>
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
    </div>
  );
};

export default TrendsHome;
