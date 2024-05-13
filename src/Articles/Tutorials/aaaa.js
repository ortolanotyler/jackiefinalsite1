import React from 'react';
import styles from './aaa.module.css'; // Import the CSS module

// Importing the images
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/LatteMakeup/LatteThumbnail.jpg`;
const image6 = `${process.env.PUBLIC_URL}/Images/Articles/LanaXskims/LanaDelRayThumbnail.jpeg`;
const victoria = `${process.env.PUBLIC_URL}/Images/Articles/VictoriaSecret2014/VSThumbnail.jpeg`;
const shrimpton = `${process.env.PUBLIC_URL}/Images/Articles/JeanShrimpton/JeanShrimptonThumbnail.jpg`;
const nomakeup = `${process.env.PUBLIC_URL}/Images/Articles/NoMakeUpSpring/nomakeupspringthumbnail.jpeg`;
const grace = `${process.env.PUBLIC_URL}/Images/Articles/GraceKelly/GraceKellyJackieWyers.jpg`;
const cardsData = [
  { link: "/nomakeupspring", image: nomakeup, alt: "Warm and cozy latte-inspired fall makeup look", title: "No-Makeup Makeup" },
  { link: "/gracekelly", image: grace, alt: "Warm and cozy latte-inspired fall meup look", title: "Grace's Hollywood Glam" },

    { link: "/victoriasecret", image: victoria, alt: "Victoria's Secret fashion show 2014 vibes", title: "Victoria's Secret" },
    { link: "/lanablog", image: image6, alt: "SKIMS collaboration with Lana for Valentine's Day makeup", title: "SKIMS X Lana" },
    { link: "/latteMakeup", image: image2, alt: "Warm and cozy latte-inspired fall makeup look", title: "Latte Makeup" },
    { link: "/yardley1965", image: shrimpton, alt: "latte-inspired fall makeup look", title: "Jean Shrimpton" },


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
