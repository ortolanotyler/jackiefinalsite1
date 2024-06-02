import React from 'react';
import { Helmet } from 'react-helmet';
import styles from '../aaa.module.css'; // Import CSS Modules
import TextReveal from '../../../Components/TextReveal';
import { Paper } from '@mui/material';
import RotatingText from '../../../Navigation/AppBar/RotatingText';

// Importing the images
const sharon = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateIconic/ICONICSHARONTHUMBNAIL.jpg`;
const loren = `${process.env.PUBLIC_URL}/Images/Articles/SophiaLoren/SophiaLorenThumbnail.jpeg`;
const bridal = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateBridal/SHARONTATEBRIDAL.jpeg`;
const balke1 = `${process.env.PUBLIC_URL}/Images/Articles/Balke/BALKETHUMBNAIL.jpeg`;
const shrimpton = `${process.env.PUBLIC_URL}/Images/Articles/JeanShrimpton/JeanShrimptonThumbnail.jpg`;
const twiggy = `${process.env.PUBLIC_URL}/Images/Articles/Twiggy/TwiggyMODThumbnail.jpeg`;
const grace = `${process.env.PUBLIC_URL}/Images/Articles/GraceKelly/GraceKellyJackieWyers.jpg`;

const cardsData = [
  {
    link: "/yardley1965",
    image: shrimpton,
    alt: "YARDLEY 1965 Makeup",
    title: "Jean Shrimpton 🧼 Yardley 1965",
    description: "Iconic '60s Makeup",
  },
  {
    link: "/gracekelly",
    image: grace,
    alt: "Grace Kelly - Hollywood Glam",
    title: "Timeless Grace Kelly 💄",
    description: "Grace Kelly - Hollywood Glam",
  },
  {
    link: "/sharontatebridal",
    image: bridal,
    alt: "SHARON TATE",
    title: "Coquette Sharon Tate 👰🏼",
    description: "Iconic '60s Bridal",
  },
  {
    link: "/sophialoren",
    image: loren,
    alt: "Sophia Loren",
    title: "Sexy Sophia Loren 🚿",
    description: "The woman with the 70 year career",
  },
  {
    link: "/iconicsharon",
    image: sharon,
    alt: "Sharon Tate",
    title: "Bohemian Sharon Tate 🌼",
    description: "Part Two of the iconic series",
  },
  {
    link: "/balkeblog",
    image: balke1,
    alt: "1960s legend Ina Balke European chic makeup tutorial",
    title: "Iconic 60's Glam 🖤",
    description: "Iconic '60s Makeup how-to",
  },
  {
    link: "/twiggy",
    image: twiggy,
    alt: "1960s legend Ina Balke European chic makeup tutorial",
    title: "MOD Twiggy 🩵",
    description: "Iconic '60s Makeup how-to",
  },
  // Add more card objects as needed
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
        <a href={link} className={styles.readHereBtn}>Read Here</a>
      </div>
    </li>
  );
};

const VintageVibes = () => {
  return (
    <>
      <Helmet>
        <title>Vintage Vibes Makeup Tutorials - Jackie Wyers</title>
        <meta name="description" content="Explore vintage vibes makeup tutorials by Jackie Wyers, including looks inspired by Jean Shrimpton, Grace Kelly, Sharon Tate, Sophia Loren, and more." />
      </Helmet>
      <div>
        <TextReveal text='TIME TRAVEL TUTORIALS' />
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
    </>
  );
};

export default VintageVibes;
