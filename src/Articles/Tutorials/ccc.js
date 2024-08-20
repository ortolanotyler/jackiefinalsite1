import React from 'react';
import styles from './aaa.module.css'; // Import CSS Modules


import { Paper } from '@mui/material';
import TextReveal from '../../Components/TextReveal';
import RotatingText from '../../Navigation/AppBar/RotatingText';

const image3 = `${process.env.PUBLIC_URL}/Images/Articles/PatMcGrath/JackieWyersPatMcGrath.jpeg`;
const image6 = `${process.env.PUBLIC_URL}/Images/Articles/VictoriaSecret2014/VSThumbnail.jpeg`;
const image7 = `${process.env.PUBLIC_URL}/Images/Articles/LanaXskims/LanaDelRayThumbnail.jpeg`;
const image9 = `${process.env.PUBLIC_URL}/Images/Articles/BarbieMovie/SQUAREMARGOT.jpeg`;
const nomakeup = `${process.env.PUBLIC_URL}/Images/Articles/NoMakeUpSpring/nomakeupspringthumbnail.jpeg`;
const animalpretty = `${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/animals.jpg`;
const summerinspo = `${process.env.PUBLIC_URL}/Images/Articles/SummerInspo/mermaidthumbnail.jpg`;
const summerbeauty = `${process.env.PUBLIC_URL}/Images/Articles/SummerBeauty/BlueLagoonThumbnail.jpg`;
const perioddrama = `${process.env.PUBLIC_URL}/Images/Articles/PeriodDrama/ArticleThumb.jpg`;
const emily = `${process.env.PUBLIC_URL}/Images/Articles/EmilyInParis/emilyinparis.jpg`;

const cardsData = [
  {
    link: "/emily-in-paris",
    image: emily,
    alt: "Emily In Paris Style Evolution",
    title: "Emily in Paris Style Evolution - Iconic Outfits, Makeup, and Hair",
  },
  {
    link: "/perioddrama",
    image: perioddrama,
    alt: "Summer Beauty",
    title: "No-Makeup Period Dramas and Wearable Historical Hairstyles",
  },

  {
    link: "/summerbeauty",
    image: summerbeauty,
    alt: "Summer Beauty",
    title: "Summer Beauty: Pop Culture Edition 🌴",
  },
{
  link: "/SummerInspo",
  image: summerinspo,
  alt: "Summer Inspo",
  title: "Summer Mermaid Makeup & Hair 🧜",
},
  {
    link: "/nomakeupspring",
    image: nomakeup,
    alt: "Warm and cozy latte-inspired fall makeup look",
    title: "Spring Makeup Inspiration 🎬",
    description: "Think warm, cozy, fall!",
  },
  
  {
    link: "/margotbarbie",
    image: image9,
    alt: "Margot Robbie Barbie Movie",
    title: "Barbie Makeup Transformation 👱🏼‍♀️",
    description: "2014 vibes are so back"
  },

  {
    link: "/lanablog",
    image: image7,
    alt: "SKIMS X Lana Makeup",
    title: "SKIMS X Lana Makeup 🎀",
    description: "SKIMS X Lana Makeup"
  },
  {
    link: "/victoriasecret",
    image: image6,
    alt: "Victoria's Secret",
    title: "VS Bombshell Look 🛍️",
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
