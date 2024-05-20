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

  { link: "/animalpretty", image: image2, alt: "Which animal kind of pretty are you? ", title: "Animal Pretty - HBU?" },

  { link: "/nomakeupspring", image: nomakeup, alt: "No Makeup-Makeup Look for Spring  ", title: "No-Makeup Spring 🌸" },
  { link: "/gracekelly", image: grace, alt: "Grace Kelly inspired makeup tutorial", title: "Grace's Hollywood Glam" },
    { link: "/victoriasecret", image: image8, alt: "Victoria's Secret fashion show 2014 vibes", title: "Victoria's Secret" },
    { link: "/lanablog", image: image6, alt: "SKIMS collaboration with Lana for Valentine's Day makeup", title: "SKIMS X Lana" },
    { link: "/yardley1965", image: shrimpton, alt: "latte-inspired fall makeup look", title: "Jean Shrimpton" },
    { link: "/twiggy", image: twiggy, alt: "Twiggy", title: "Twiggy / MOD Blue" },

];

const Card = ({ link, image, alt, title, description }) => {
  return (
    <li className={styles.card}>
      <div className={styles.cardImage}>
        <img src={image} alt={alt} className={styles.cardImageImg} />
        <div className={styles.cardDescription}>
          <a href={link} className={styles.cardDescriptionLink}>
            <h2 className={styles.cardDescriptionH2}>{title}</h2>
            <p className={styles.cardDescriptionP}>{description}</p>
            <a href={link} className={styles.readHereBtn}>Read Here</a>
          </a>
        </div>
      </div>
    </li>
  );
};

const Slider1 = () => {
  return (
    <div style={{ fontFamily: 'GFS Didot, sans-serif' }}>
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

export default Slider1;
