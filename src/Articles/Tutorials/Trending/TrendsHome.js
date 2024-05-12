import React from 'react';
import styles from '../aaa.module.css'; // Import CSS Modules
import { Paper } from '@mui/material';
import TextReveal from '../../../Components/TextReveal';
import RotatingText from '../../../Navigation/AppBar/RotatingText';

// Importing the images
const image2 = `${process.env.PUBLIC_URL}/Images/LatteMakeupHero.png`;
const image5 = `${process.env.PUBLIC_URL}/Images/SugarPlum1.jpg`;
const image6 = `${process.env.PUBLIC_URL}/Images/LanaThumbnail.jpg`;
const image7 = `${process.env.PUBLIC_URL}/Images/SharonThumnail.jpg`;
const image8 = `${process.env.PUBLIC_URL}/Images/victoriathumbnail.jpeg`;
const sophia = `${process.env.PUBLIC_URL}/Images/SophiaSquareThumbnailforArticle.jpg`;
const ina = `${process.env.PUBLIC_URL}/Images/BalkeThumb.jpeg`;
const sharon = `${process.env.PUBLIC_URL}/Images/IconicThumbnail.png`;
const image17 = `${process.env.PUBLIC_URL}/Images/nomakeupspringthumbnail.jpeg`;

const cardsData = [


  {
    link: "/nomakeupspring",
    image: image17,
    alt: "Warm and cozy latte-inspired fall makeup look",
    title: "No Makeup Makeup - Spring Edition",
    description: "Think warm, cozy, fall!",
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
  {
    link: "/sophialoren",
    image: sophia,
    alt: "Sophia Loren, the charismatic queen of classic cinema",
    title: "Sophia Loren",
    description: "The Charismatic Queen",
  },
  {
    link: "/balkeblog",
    image: ina,
    alt: "1960s legend Ina Balke European chic makeup tutorial",
    title: "60's Legend Ina Balke",
    description: "European Chique",
  },
  {
    link: "/iconicsharon",
    image: sharon,
    alt: "Iconic Sharon Tate makeup tutorial",
    title: "Sharon Tate II",
    description: "Part Two",
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
      <div><TextReveal text= 'TREND REPORT' /></div>
      <div>
            <Paper elevation={3} sx={{ backgroundColor: 'white', fontFamily: 'GFS Didot, serif', borderRadius: '4px', color: "#745B4F", textAlign: 'center', padding: '1rem' }}>
            <RotatingText />
          </Paper>
                </div>
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
