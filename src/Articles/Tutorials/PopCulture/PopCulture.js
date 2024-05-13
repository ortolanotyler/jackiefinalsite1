import React from 'react';
import styles from './aaa.module.css'; // Import CSS Modules


import TextReveal from '../../../Components/TextReveal';

const image2 = `${process.env.PUBLIC_URL}/Images/Articles/LatteMakeup/LatteThumbnail.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/Articles/PatMcGrath/JackieWyersPatMcGrath.jpeg`;
const image5 = `${process.env.PUBLIC_URL}/Images/Articles/SugarPlumFairy/SUGARPLUMTHUMBNAIL.jpeg`;
const image6 = `${process.env.PUBLIC_URL}/Images/Articles/VictoriaSecret2014/VSThumbnail.jpeg`;
const image7 = `${process.env.PUBLIC_URL}/Images/Articles/LanaXskims/LanaDelRayThumbnail.jpeg`;

const cardsData = [
  {
    link: "/latteMakeup",
    image: image2,
    alt: "Latte",
    title: "Latte Makeup",
    description: "Think warm, cozy, fall!"
  },
  {
    link: "/patmcgrath",
    image: image3,
    alt: "Pat McGrath",
    title: "Pat McGrath",
    description: "Pat's Porcelain Doll"
  },
  {
    link: "/sugarplumfairy",
    image: image5,
    alt: "Sugar Plum",
    title: "Sugar Plum Fairy",
    description: "Trend Report"
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
        {/* Button added below */}
        <a href={link} className={styles.readHereBtn}>Read Here</a>
      </div>
    </li>
  );
};

const PopCulture = () => {
  return (
    <div>
         <div><TextReveal text= 'POP CULTURE OBSESSED' /></div>
         
    
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
