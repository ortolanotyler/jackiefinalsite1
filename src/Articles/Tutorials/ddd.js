import React from 'react';
import styles from './aaa.module.css'; // Import CSS Modules

// Importing the images
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/SophiaLoren/SophiaLorenThumbnail.jpeg`;
const image3 = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateBridal/SHARONTATEBRIDAL.jpeg`;
const balke = `${process.env.PUBLIC_URL}/Images/Articles/Balke/BALKETHUMBNAIL.jpeg`;
const sharon = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateIconic/ICONICSHARONTHUMBNAIL.jpg`;
const shrimpton = `${process.env.PUBLIC_URL}/Images/Articles/JeanShrimpton/JeanShrimptonThumbnail.jpg`;
const grace = `${process.env.PUBLIC_URL}/Images/Articles/GraceKelly/GraceKellyJackieWyers.jpg`;
const twiggy = `${process.env.PUBLIC_URL}/Images/Articles/Twiggy/TwiggyMODThumbnail.jpeg`;


const cardsData = [
  {
    link: "/sophialoren",
    image: image2,
    alt: "Sophia Loren",
    title: "Sophia Loren",
    description: "Get the look",
  },
  {
    link: "/gracekelly",
    image: grace,
    alt: "Grace Kelly - Hollywood Glam",
    title: "Grace Kelly - Hollywood Glam",
    description: "Part Two of the iconic series",
  },
  {
    link: "/sharontatebridal",
    image: image3,
    alt: "Sharon Tate",
    title: "Sharon Tate 60's Bridal",
    description: "60's Bridal Tutorial",
  },
  {
    link: "/iconicsharon",
    image: sharon,
    alt: "1960s legend Ina Balke European chic makeup tutorial",
    title: "Sharon Tate Part II",
    description: "Part Two of the iconic series",
  },
  {
    link: "/balkeblog",
    image: balke,
    alt: "1960s legend Ina Balke European chic makeup tutorial",
    title: "Ina Balke - Germany's Starlet",
    description: "Part Two of the iconic series",
  },
  {
    link: "/yardley1965",
    image: shrimpton,
    alt: "1960s legend Ina Balke European chic makeup tutorial",
    title: "Jean Shrimpton - Yardley 1965",
    description: "Part Two of the iconic series",
  },
  {
    link: "/twiggy",
    image: twiggy,
    alt: "1960s legend Ina Balke European chic makeup tutorial",
    title: "Twiggy // MOD Blue",
    description: "Iconic '60s Makeup how-to"
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

const Slider4 = () => {
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

export default Slider4;
