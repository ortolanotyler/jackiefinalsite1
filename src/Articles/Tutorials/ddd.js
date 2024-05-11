import React from 'react';
import styles from './aaa.module.css'; // Import CSS Modules

// Importing the images
const image2 = `${process.env.PUBLIC_URL}/Images/SophiaSquareThumbnailforArticle.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/Vintage2Thumbnail.jpg`;
const balke = `${process.env.PUBLIC_URL}/Images/BalkeThumb.jpeg`;
const sharon = `${process.env.PUBLIC_URL}/Images/IconicThumbnail.png`;

const cardsData = [
  {
    link: "/sophialoren",
    image: image2,
    alt: "Sophia Loren",
    title: "Sophia Loren",
    description: "Get the look",
  },
  {
    link: "/sharontate",
    image: image3,
    alt: "Sharon Tate",
    title: "Sharon Tate",
    description: "60's Bridal Tutorial",
  },
  {
    link: "/balkeblog",
    image: balke,
    alt: "Ina Balke 60's Iconic Tutorial",
    title: "Ina Balke",
    description: "60's European Chique",
  },
  {
    link: "/iconicsharon",
    image: sharon,
    alt: "1960s legend Ina Balke European chic makeup tutorial",
    title: "Sharon Tate Part II",
    description: "Part Two of the iconic series",
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
