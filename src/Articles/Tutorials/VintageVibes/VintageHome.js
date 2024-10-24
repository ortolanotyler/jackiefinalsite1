import React, { useRef, useEffect } from 'react';
import styles from '../aaa.module.css'; // Import CSS Modules
import TextReveal from '../../../Components/TextReveal';


// Importing the images
const sharon = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateIconic/ICONICSHARONTHUMBNAIL.jpg`;
const loren = `${process.env.PUBLIC_URL}/Images/Articles/SophiaLoren/SophiaLorenThumbnail.jpeg`;
const bridal = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateBridal/SHARONTATEBRIDAL.jpeg`;
const balke1 = `${process.env.PUBLIC_URL}/Images/Articles/Balke/BALKETHUMBNAIL.jpeg`;
const shrimpton = `${process.env.PUBLIC_URL}/Images/Articles/JeanShrimpton/JeanShrimptonThumbnail.jpg`;
const twiggy = `${process.env.PUBLIC_URL}/Images/Articles/Twiggy/TwiggyMODThumbnail.jpeg`;
const grace = `${process.env.PUBLIC_URL}/Images/Articles/GraceKelly/GraceKellyJackieWyers.jpg`;
const bardot = `${process.env.PUBLIC_URL}/Images/Articles/BardotHairstyles/BardotThumbnail.jpg`;

const cardsData = [
  {
    link: "/bardothairstyles",
    image: bardot,
    alt: "Jackie Wyers Mastering the Bardot Bun",
    title: "Mastering the Bardot Bun 🌸",
    description: "My Many Attempts At The Iconic 60s Style"
  },
  {
    link: "/yardley1965",
    image: shrimpton,
    alt: "YARDLEY 1965 Makeup",
    title: "Jean Shrimpton 🧼 Yardley 1965",
    description: "Iconic '60s Makeup"
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
    title: "Coquette Sharon Tate 👰🏼 ",
    description: "Iconic '60s Bridal"
  },
  {
    link: "/sophialoren",
    image: loren,
    alt: "Sophia Loren",
    title: "Sexy Sophia Loren 🚿",
    description: "The woman with the 70 year career"
  },
  {
    link: "/iconicsharon",
    image: sharon,
    alt: "Sharon Tate",
    title: "Bohemian Sharon Tate 🌼",
    description: "Part Two of the iconic series"
  },
  {
    link: "/balkeblog",
    image: balke1,
    alt: "1960s legend Ina Balke European chic makeup tutorial",
    title: "Iconic 60's Glam 🖤",
    description: "Iconic '60s Makeup how-to"
  },
  {
    link: "/twiggy",
    image: twiggy,
    alt: "1960s legend Ina Balke European chic makeup tutorial",
    title: " MOD Twiggy 🩵",
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
