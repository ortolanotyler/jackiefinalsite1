import React from 'react';
import styles from './aaa.module.css'; // Import CSS Modules


import TextReveal from '../../../Components/TextReveal';
import { Paper } from '@mui/material';
import RotatingText from '../../../Navigation/AppBar/RotatingText';

const image3 = `${process.env.PUBLIC_URL}/Images/Articles/PatMcGrath/JackieWyersPatMcGrath.jpeg`;
const image6 = `${process.env.PUBLIC_URL}/Images/Articles/VictoriaSecret2014/VSThumbnail.jpeg`;
const image7 = `${process.env.PUBLIC_URL}/Images/Articles/LanaXskims/LanaDelRayThumbnail.jpeg`;
const image9 = `${process.env.PUBLIC_URL}/Images/Articles/BarbieMovie/MARGOTBARBIETHUMBNAIL.png`;
const nomakeup = `${process.env.PUBLIC_URL}/Images/Articles/NoMakeUpSpring/nomakeupspringthumbnail.jpeg`;

const cardsData = [
  {
    link: "/nomakeupspring",
    image: nomakeup,
    alt: "Warm and cozy latte-inspired fall makeup look",
    title: "Spring Makeup Inspiration 🎬",
  },
  
  {
    link: "/margotbarbie",
    image: image9,
    alt: "Margot Robbie Barbie Movie",
    title: "Barbie Makeup Transformation 👱🏼‍♀️",
  },


  {
    link: "/lanablog",
    image: image7,
    alt: "Lana",
    title: "SKIMS X Lana Makeup 🎀",
  },
  {
    link: "/victoriasecret",
    image: image6,
    alt: "Victoria's Secret",
    title: "VS Bombshell Look 🛍️",
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
        {/* Button added below */}        <a href={link} className={styles.readHereBtn}>Read Here</a>
      </div>
    </li>
  );
};

const PopCulture = () => {
  return (
    <div>
         <div><TextReveal text= 'POP CULTURE OBSESSED' /></div>
         <Paper elevation={3} style={{ padding: '1rem', margin: '1rem 0' }}>
     <RotatingText/>
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

export default PopCulture;
