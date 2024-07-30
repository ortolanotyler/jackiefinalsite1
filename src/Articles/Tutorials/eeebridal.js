import React from 'react';
import styles from './aaa.module.css'; // Import CSS Modules

const fairytale = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/fairytalethumbnail.jpg`;
const sharontatebridal = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateBridal/SHARONTATEBRIDAL.jpeg`;
const bridesmaids = `${process.env.PUBLIC_URL}/Images/Articles/Bridesmaids/BridesmaidBoxThumb!.jpg`;
const bridalmakeup = `${process.env.PUBLIC_URL}/Images/Articles/BridalMakeup/BridalTrialMakeupThumb.jpg`;
const guide = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/guidethumbnail.jpeg`;
const diymamma = `${process.env.PUBLIC_URL}/Images/Articles/MammaMia/mammamiathumb.png`;


const cardsData = [
  {
    link: "/diy-flowers",
    image: diymamma,
    alt: "Mamma Mia Inspired DIY Bridal Flower Pins 🕊",
    title: "Mamma Mia Inspired DIY Bridal Flower Pins 🕊",
  },
  {
    link: "/weddingdressguide",
    image: guide,
    alt: "The Ultimate 2025 Wedding Dress Guide",
    title: "The Ultimate 2025 Wedding Dress Guide 👗",
  },
  {
    link: "/fairytalewedding",
    image: fairytale,
    alt: "FairyTale Wedding",
    title: "Our Fairytale Wedding Overlooking Sorrento, Italy 🍋",
  },
 
  {
    link: "/bridesmaidboxes",
    image: bridesmaids,
    alt: "Sharon Tate Bridal",
    title: "Whimsical DIY Bridesmaid Proposal Boxes 👰🏻‍♀️",
  },

  {
    link: "/bridalmakeup",
    image: bridalmakeup,
    alt: "Sharon Tate Bridal",
    title: "Bridal Makeup Trial: What I Loved and What I'll Change! ♥️",
  },
  {
    link: "/sharontatebridal",
    image: sharontatebridal,
    alt: "Sharon Tate Bridal",
    title: "Sharon Tate’s Coquette 1960’s Bridal Makeup 🌼",
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

const Eeebridal = () => {
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

export default Eeebridal;
