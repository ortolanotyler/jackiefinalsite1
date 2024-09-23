import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styles from '../aaa.module.css'; // Import CSS Modules
import TextReveal from '../../../Components/TextReveal';

import { initGA, logPageView } from '../../../analytics';

// Importing the images
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/LatteMakeup/LatteThumbnail.jpg`;
const image5 = `${process.env.PUBLIC_URL}/Images/Articles/SugarPlumFairy/SUGARPLUMTHUMBNAIL.jpeg`;
const image8 = `${process.env.PUBLIC_URL}/Images/Articles/PatMcGrath/JackieWyersPatMcGrath.jpeg`;
const makeup2016 = `${process.env.PUBLIC_URL}/Images/Articles/2016/2016MakeupThumbnail.jpg`;
const animal = `${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/animals.jpg`;
const bridalmakeup = `${process.env.PUBLIC_URL}/Images/Articles/BridalMakeup/BridalTrialMakeupThumb.jpg`;

const cardsData = [
  { link: "/bridalmakeup", image: bridalmakeup, alt: "Warm and cozy latte-inspired fall makeup look", title: "Bridal Trial Makeup 💄" },

  { link: "/animalpretty", image: animal, alt: "Warm and cozy latte-inspired fall makeup look", title: "Find Your Animal Pretty 🐰" },
  {
    link: "/2016Makeup",
    image: makeup2016,
    alt: "Victoria's Secret fashion show 2014 vibes",
    title: "Nostalgic 2016 Makeup 🖤",
    description: "2014 vibes are so back",
  },
  {
    link: "/latteMakeup",
    image: image2,
    alt: "Warm and cozy latte-inspired fall makeup look",
    title: "Viral Latte Makeup ☕️",
    description: "Think warm, cozy, fall!",
  },
  {
    link: "/sugarplumfairy",
    image: image5,
    alt: "Sugar Plum Fairy makeup trend report",
    title: "Sugar Plum Fairy Glam 🧚",
    description: "Trend Report",
  },
  {
    link: "/patmcgrath",
    image: image8,
    alt: "Pat McGrath",
    title: "Pat McGrath's Porcelain Doll 🪆",
    description: "Pat's Porcelain Doll",
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
        <a href={link} className={styles.readHereBtn}>Read Here</a>
      </div>
    </li>
  );
};

const TrendsHome = () => {
  useEffect(() => {
    initGA();
    logPageView('/trendshome');
}, []);
  return (
    <>
    <Helmet>
  <title>Trending Makeup Tutorials - Jackie Wyers</title>
  <meta name="description" content="Explore trending makeup tutorials by Jackie Wyers, including looks like Viral Latte Makeup, Pat McGrath's Porcelain Doll, and more." />
  <meta name="keywords" content="Makeup Tutorials, Trending Makeup, Jackie Wyers, Latte Makeup, Porcelain Doll Makeup, Bridal Makeup, 2016 Makeup, Sugar Plum Fairy Makeup, Viral Makeup" />
  <meta property="og:title" content="Trending Makeup Tutorials - Jackie Wyers" />
  <meta property="og:description" content="Explore trending makeup tutorials by Jackie Wyers, including looks like Viral Latte Makeup, Pat McGrath's Porcelain Doll, and more." />
  <meta property="og:image" content={`${process.env.PUBLIC_URL}/Images/Articles/SugarPlumFairy/SugarPlumFairyTitle.png`} />
  <meta property="og:url" content={window.location.href} />
  <meta name="twitter:title" content="Trending Makeup Tutorials - Jackie Wyers" />
  <meta name="twitter:description" content="Explore trending makeup tutorials by Jackie Wyers, including looks like Viral Latte Makeup, Pat McGrath's Porcelain Doll, and more." />
  <meta name="twitter:image" content={`${process.env.PUBLIC_URL}/Images/Articles/SugarPlumFairy/SugarPlumFairyTitle.png`} />
  <meta name="twitter:card" content="summary_large_image" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "headline": "Trending Makeup Tutorials - Jackie Wyers",
        "description": "Explore trending makeup tutorials by Jackie Wyers, including looks like Viral Latte Makeup, Pat McGrath's Porcelain Doll, and more.",
        "image": "${process.env.PUBLIC_URL}/Images/Articles/SugarPlumFairy/SugarPlumFairyTitle.png",
        "author": {
          "@type": "Person",
          "name": "Jackie Wyers"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Jackie Wyers",
          "logo": {
            "@type": "ImageObject",
            "url": "${process.env.PUBLIC_URL}/Images/Articles/SugarPlumFairy/SugarPlumFairyTitle.png"
          }
        },
        "datePublished": "2024-07-27",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${window.location.href}"
        }
      }
    `}
  </script>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-RT6GR7JXYG"></script>
  <script>
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-RT6GR7JXYG');
    `}
  </script>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4660168246825318" crossorigin="anonymous"></script>
</Helmet>

      <div>
        <TextReveal text="TRENDING NOW" />
    
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

export default TrendsHome;
