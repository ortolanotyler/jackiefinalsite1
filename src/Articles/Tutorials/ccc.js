import React from 'react';
import styles from './aaa.module.css'; // Import CSS Modules


import { Paper } from '@mui/material';
import TextReveal from '../../Components/TextReveal';
import RotatingText from '../../Navigation/AppBar/RotatingText';

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
    title: "No Makeup Makeup - Spring Edition",
    description: "Think warm, cozy, fall!",
  },
  
  {
    link: "/margotbarbie",
    image: image9,
    alt: "Margot Robbie Barbie Movie",
    title: "Margot as Barbie",
    description: "2014 vibes are so back"
  },
  {
    link: "/patmcgrath",
    image: image3,
    alt: "Pat McGrath",
    title: "Pat McGrath",
    description: "Pat's Porcelain Doll"
  },

  {
    link: "/lanablog",
    image: image7,
    alt: "Lana",
    title: "SKIMS X Lana",
    description: "V-Day Makeup"
  },
  {
    link: "/victoriasecret",
    image: image6,
    alt: "Victoria's Secret",
    title: "VS 2014",
    description: "2014 vibes are so back"
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

const Ccc = () => {
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

export default Ccc;
