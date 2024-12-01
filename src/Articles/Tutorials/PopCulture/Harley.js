import React, { useRef } from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import SubscribeButton from '../../../Components/SubscribeButton';
import { Helmet } from 'react-helmet-async';
import DropCap1 from '../../Travel/DropCap1';
import ArticleTitle from '../../../Components/ArticleTitle';
import NextArticle from '../../../Components/NextArticleComponent';
import SocialShare from '../../../Home/SocialShare';

const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;
const image1 = `${process.env.PUBLIC_URL}/Images/HarleyQuinn/Harley1.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/HarleyQuinn/Harley2.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/HarleyQuinn/Harley3.jpg`;
const image4 = `${process.env.PUBLIC_URL}/Images/HarleyQuinn/Harley4.jpg`;

const Card = ({ blogContent }) => (
  <div style={{ margin: '0 auto', maxWidth: '100%', padding: '10px' }}>
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);

const HarleyQuinnEvolution = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);

  const headingStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: '100',
    fontFamily: "'Playfair Display', sans-serif",
    color: '#000000',
    maxWidth: '95%',
    margin: '30px auto',
  };

  const paragraphStyle = {
    fontSize: '20px',
    color: '#000000',
    fontFamily: "EB Garamond, serif",
    fontWeight: '100',
    padding: '10px',
    margin: '10px auto',
    lineHeight: '1.6',
  };

  const imageStyle = {
    display: 'block',
    margin: '1rem auto',
    borderRadius: '0px',
    height: 'auto',
  };

  const iframeStyle = {
    width: '100%',
    minHeight: '340px',
    border: 'none',
  };

  const blogContent = (
    <div className="container">
      <Helmet>
        <title>Harley Quinn Beauty Evolution: Iconic Pop Culture Makeup</title>
        <link rel="canonical" href="https://www.jackiewyers.beauty/articles/harley-quinn-evolution" />
        <meta
          name="description"
          content="Explore Harley Quinn's beauty evolution across three films starring Margot Robbie, and learn how to recreate her iconic looks with tutorials."
        />
        <meta name="keywords" content="Harley Quinn makeup evolution, DC Comics makeup, Margot Robbie Harley Quinn, Birds of Prey makeup, Suicide Squad makeup, Jackie Wyers tutorials" />
        <meta property="og:title" content="Harley Quinn Beauty Evolution: Iconic Pop Culture Makeup" />
        <meta property="og:description" content="Explore Harley Quinn's beauty evolution across three films starring Margot Robbie, and learn how to recreate her iconic looks with tutorials." />
        <meta property="og:image" content={image1} />
        <meta property="og:url" content="https://www.jackiewyers.beauty/articles/harley-quinn-evolution" />
        <meta property="og:type" content="article" />
        <meta name="twitter:title" content="Harley Quinn Beauty Evolution: Iconic Pop Culture Makeup" />
        <meta name="twitter:description" content="Explore Harley Quinn's beauty evolution across three films starring Margot Robbie, and learn how to recreate her iconic looks with tutorials." />
        <meta name="twitter:image" content={image1} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <a href="/popculture" style={{ fontFamily: 'GFS Didot, serif', fontSize: '1rem', color: '#000000', textDecoration: 'none' }}>
          BEAUTY // POP CULTURE
        </a>
      </div>

      <ArticleTitle
        mainTitle="Harley Quinn Beauty Evolution: Iconic Pop Culture Makeup"
        subTitle="Pink and Blue Hair? Don’t Care!"
        author="Jackie Wyers"
        publishDate="November 30, 2024"
      />

      <SocialShare
        url="https://www.jackiewyers.beauty/articles/harley-quinn-evolution"
        title="Harley Quinn Beauty Evolution: Iconic Pop Culture Makeup"
        imageUrl={image1}
      />

      <ResponsiveYoutube
        src="https://www.youtube.com/embed/jnj60I2L7C0"
        title="Harley Quinn Suicide Squad Makeup Tutorial"
        alt="Makeup transformation video for Harley Quinn's Suicide Squad look."
      />

      <div style={{ textAlign: 'center', margin: '10px auto' }}>
        <SubscribeButton />
      </div>

      <p style={{ margin: '20px auto', textAlign: 'center', fontSize: '1.1rem', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
        All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
      </p>

      <div style={paragraphStyle}>
        <DropCap1
          text="Hey, puddin’! Welcome back for another deep dive into one of the most iconic character makeup looks in pop culture history. Margot Robbie as Harley Quinn is one of DC Comics' best casting choices, and Harley Quinn costumes have become a staple every Halloween."
        />
      </div>

      <img src={image1} alt="Harley Quinn Suicide Squad Look" style={imageStyle} />

      <h2 style={headingStyle}>Birds of Prey (2020)</h2>
      <ResponsiveYoutube
        src="https://www.youtube.com/embed/lXBXri7sWhU"
        title="Birds of Prey Makeup Tutorial"
        alt="Makeup transformation video for Harley Quinn's Birds of Prey look."
      />
      <img src={image2} alt="Harley Quinn Birds of Prey Look" style={imageStyle} />

      <h2 style={headingStyle}>The Suicide Squad (2021)</h2>
      <ResponsiveYoutube
        src="https://www.youtube.com/embed/q8wYj91SoGU"
        title="The Suicide Squad Makeup Tutorial"
        alt="Makeup transformation video for Harley Quinn's The Suicide Squad look."
      />
      <img src={image3} alt="Harley Quinn The Suicide Squad Look" style={imageStyle} />

      <NextArticle
        link="/articles/wicked-witch-of-the-west"
        imgSrc={image4}
        linkText="MORE ICONIC POP CULTURE LOOKS →"
      />

      <img src={signature} alt="Jackie Wyers Signature" style={{ width: '100%' }} />
      <Comments website-id={websiteId} page-id="harley-quinn-evolution" />
    </div>
  );

  return (
    <div ref={blogRef}>
      <Card blogContent={blogContent} />
    </div>
  );
};

export default HarleyQuinnEvolution;