import React from 'react';
import styles from './aaa.module.css'; // Import the CSS module

// Importing the images
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/animals.jpg`;
const image6 = `${process.env.PUBLIC_URL}/Images/Home/JackieWyersLanaDelReyRecreationArticleThumbnail.jpg`;
const image8 = `${process.env.PUBLIC_URL}/Images/Home/VictoriaSecret.jpg`;
const shrimpton = `${process.env.PUBLIC_URL}/Images/Home/JeanShrimptonThumbnail.jpg`;
const nomakeup = `${process.env.PUBLIC_URL}/Images/Home/nomakeupthumbnail.jpg`;
const grace = `${process.env.PUBLIC_URL}/Images/Home/GraceKellyJackieWyers.jpg`;
const twiggy = `${process.env.PUBLIC_URL}/Images/Articles/Twiggy/TwiggyMODThumbnail.jpeg`;

const cardsData = [
  { link: "/animalpretty", image: image2, alt: "Which animal kind of pretty are you?", title: "Animal Pretty - HBU?" },
  { link: "/nomakeupspring", image: nomakeup, alt: "No Makeup-Makeup Look for Spring", title: "No-Makeup Spring 🌸" },
  { link: "/gracekelly", image: grace, alt: "Grace Kelly inspired makeup tutorial", title: "Grace's Hollywood Glam" },
  { link: "/victoriasecret", image: image8, alt: "Victoria's Secret fashion show 2014 vibes", title: "Victoria's Secret" },
  { link: "/lanablog", image: image6, alt: "SKIMS collaboration with Lana for Valentine's Day makeup", title: "SKIMS X Lana" },
  { link: "/yardley1965", image: shrimpton, alt: "latte-inspired fall makeup look", title: "Jean Shrimpton" },
];

const Card = ({ link, image, alt, title }) => {
  return (
    <li className={styles.card}>
      <a href={link} className={styles.cardDescriptionLink}>
        <div className={styles.cardImage}>
          <img src={image} alt={alt} className={styles.cardImageImg} />
          <div className={styles.cardDescription}>
            <h2 className={styles.cardDescriptionH2}>{title}</h2>
            <p className={styles.cardDescriptionP}></p>
            <div className={styles.readHereBtn}>Read Here</div>
          </div>
        </div>
      </a>
    </li>
  );
};

const Slider1 = () => {
  return (
    <div style={{ fontFamily: 'GFS Didot, serif' }}>
      <ul className={styles.cardList}>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            link={card.link}
            image={card.image}
            alt={card.alt}
            title={card.title}
          />
        ))}
      </ul>
    </div>
  );
};

export default Slider1;
