import React from 'react';
import styles from '../aaa.module.css'; // Import CSS Modules
import { Paper } from '@mui/material';
import TextReveal from '../../../Components/TextReveal';
import RotatingText from '../../../Navigation/AppBar/RotatingText';

// Importing the images
const image3 = `${process.env.PUBLIC_URL}/Images/SophiaSquareThumbnailforArticle.jpg`;
const image7 = `${process.env.PUBLIC_URL}/Images/SharonThumnail.jpg`;
const sharon = `${process.env.PUBLIC_URL}/Images/IconicThumbnail.png`;
const balke1 = `${process.env.PUBLIC_URL}/Images/BalkeThumb.jpeg`;
const shrimpton = `${process.env.PUBLIC_URL}/Images/shrimpton1.jpeg`;

const cardsData = [
  {
    link: "/yardley1965",
    image: shrimpton,
    alt: "SHARON TATE",
    title: "Jean Shrimpton - Yardley 1965",
    description: "Iconic '60s Makeup"
  },
  {
    link: "/sharontate",
    image: image7,
    alt: "SHARON TATE",
    title: "Sharon Tate",
    description: "Iconic '60s Bridal"
  },
  {
    link: "/sophialoren",
    image: image3,
    alt: "Sophia Loren",
    title: "Sophia Loren",
    description: "The woman with the 70 year career"
  },
  {
    link: "/iconicsharon",
    image: sharon,
    alt: "Sharon Tate",
    title: "Sharon Tate II",
    description: "Part Two of the iconic series"
  },
  {
    link: "/balkeblog",
    image: balke1,
    alt: "1960s legend Ina Balke European chic makeup tutorial",
    title: "Ina Balke",
    description: "Iconic '60s Makeup how-to"
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
        {/* Button added below */}
        <a href={link} className={styles.readHereBtn}>Read Here</a>
      </div>
    </li>
  );
};

const VintageVibes = () => {
  return (
    <div>
      <div><TextReveal text= 'TIME TRAVEL TUTORIALS' /></div>
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

export default VintageVibes;
