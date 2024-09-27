import React, {  useEffect } from 'react';
import styles from './aaa.module.css'; // Import CSS Modules
import TextReveal from '../../../Components/TextReveal';

import { initGA , logPageView } from '../../../analytics';


const image6 = `${process.env.PUBLIC_URL}/Images/Articles/VictoriaSecret2014/VSThumbnail.jpeg`;
const image7 = `${process.env.PUBLIC_URL}/Images/Articles/LanaXskims/LanaDelRayThumbnail.jpeg`;
const image9 = `${process.env.PUBLIC_URL}/Images/Articles/BarbieMovie/MARGOTBARBIETHUMBNAIL.png`;
const nomakeup = `${process.env.PUBLIC_URL}/Images/Articles/NoMakeUpSpring/nomakeupspringthumbnail.jpeg`;
const summerinspo = `${process.env.PUBLIC_URL}/Images/Articles/SummerInspo/mermaidthumbnail.jpg`;
const perioddrama = `${process.env.PUBLIC_URL}/Images/Articles/PeriodDrama/ArticleThumb.jpg`;
const emily = `${process.env.PUBLIC_URL}/Images/Articles/EmilyInParis/emilyinparis.jpg`;
const fran = `${process.env.PUBLIC_URL}/Images/Articles/Francesca/FrancescaThumb.jpg`;

const cardsData = [

  {
    link: "/emily-in-paris",
    image: emily,
    alt: "Emily In Paris Style Evolution",
    title: "Emily in Paris Style Evolution : Iconic Outfits, Makeup, and Hair",
  },
 
 {
  link: "/perioddrama",
  image: perioddrama,
  alt: "Summer Beauty",
  title: "No-Makeup Period Dramas and Wearable Historical Hairstyles",
},
  {
    link: "/SummerInspo",
    image: summerinspo,
    alt: "Summer Inspo",
    title: "Summer Inspiration 🧜",
  },
  {
    link: "/nomakeupspring",
    image: nomakeup,
    alt: "Warm and cozy latte-inspired fall makeup look",
    title: "Spring Makeup Inspiration 🎬",
  },
  {
    link: "/francesca-bridgerton",
    image: fran,
    alt: "Francesca Bridgerton Recreation by Jackie Wyers",
    title: "Francesca Bridgerton Makeup, Hair, and Dress",
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
  useEffect (() => {
    initGA();
    logPageView('/popculture');
  }, []);
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
        <a href={link} className={styles.readHereBtn}>Read Here</a>
      </div>
    </li>
  );
};

const PopCulture = () => {
  return (
    <>
    <div><TextReveal text='POP CULTURE OBSESSED' /></div>
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
    </>
  );
};

export default PopCulture;
