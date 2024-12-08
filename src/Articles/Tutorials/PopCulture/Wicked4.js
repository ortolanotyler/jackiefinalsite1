import React, { useRef } from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import { Helmet } from 'react-helmet-async';
import DropCap1 from '../../Travel/DropCap1';
import ArticleTitle from '../../../Components/ArticleTitle';
import SocialShare from '../../../Home/SocialShare';
import DividerWithText from '../../../Home/DividerWithText';
import AdSenseAd from '../../../Home/Adsense';

const pinterest = `${process.env.PUBLIC_URL}/Images/Articles/pinterest.png`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Wicked4Review = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);

  const headingStyle = {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: '100',
    fontFamily: "Playfair Display, serif",
    color: '#000000',
    maxWidth: '95%',
    margin: '30px auto',
  };

  const paragraphStyle = {
    fontSize: '20px',
    color: '#000000',
    fontFamily: "EB Garamond, sans-serif",
    fontWeight: '100',
    padding: '10px',
    margin: '10px auto',
    lineHeight: '1.75',
  };

  return (
    <div ref={blogRef}>
      <div className="container">
        <Helmet>
          <title>Wicked 4 Collection Review 🎭</title>
          <link rel="canonical" href="https://www.jackiewyers.beauty/articles/wicked4/review" />
          <meta 
            name="description" 
            content="Explore the enchanting Wicked 4 Collection with reviews, tutorials, and insights into recreating iconic Wicked-inspired beauty looks." 
          />
          <meta 
            name="keywords" 
            content="Wicked 4 Collection, Wicked beauty review, Glinda-inspired looks, makeup tutorials, Wicked-inspired products, beauty picks 2024" 
          />
          <meta property="og:title" content="Wicked 4 Collection Review 🎭" />
          <meta 
            property="og:description" 
            content="Explore the enchanting Wicked 4 Collection with reviews, tutorials, and insights into recreating iconic Wicked-inspired beauty looks." 
          />
          <meta 
            property="og:image" 
            content="https://www.jackiewyers.beauty/Images/Wicked/Wicked4Thumbnail.jpg" 
          />
          <meta property="og:url" content="https://www.jackiewyers.beauty/articles/wicked4/review" />
          <meta property="og:type" content="article" />
          <meta name="twitter:title" content="Wicked 4 Collection Review 🎭" />
          <meta 
            name="twitter:description" 
            content="Explore the enchanting Wicked 4 Collection with reviews, tutorials, and insights into recreating iconic Wicked-inspired beauty looks." 
          />
          <meta 
            name="twitter:image" 
            content="https://www.jackiewyers.beauty/Images/Wicked/Wicked4Thumbnail.jpg" 
          />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>

        <ArticleTitle
          mainTitle="Wicked 4 Collection Review"
          subTitle="Enchanting Looks for the Holiday Season"
          author="Jackie Wyers"
          publishDate="December 7th, 2024"
        />

        <SocialShare
          url="https://www.jackiewyers.beauty/articles/wicked4/review"
          title="Wicked 4 Collection Review"
          imageUrl="https://www.jackiewyers.beauty/Images/Wicked/Wicked4Thumbnail.jpg"
        />

        <DropCap1
          text="The Wicked 4 Collection offers a mesmerizing array of beauty products inspired by the iconic Glinda and Elphaba. Dive into my review of these standout items to elevate your holiday beauty routine."
        />

        <DividerWithText text="Ad" />
        <AdSenseAd />
        <DividerWithText text="Ad" />

        <h2 style={headingStyle}>Top Picks from the Collection</h2>
        <p style={paragraphStyle}>
          Discover my favorite items from the Wicked 4 Collection, each crafted to bring out the magic of the season.
        </p>

        <h3 style={headingStyle}>1. Glinda Glow Drops</h3>
        <ResponsiveIframe
          title="Glinda Glow Drops"
          src="https://shopmy.us/collections/public/1090000"
        />
        <p style={paragraphStyle}>
          These glow drops deliver a radiant, dewy finish that’s perfect for any festive occasion.
        </p>

        <h3 style={headingStyle}>2. Elphaba Green Palette</h3>
        <ResponsiveIframe
          title="Elphaba Green Palette"
          src="https://shopmy.us/collections/public/1090001"
        />
        <p style={paragraphStyle}>
          Vibrant greens and shimmers designed for bold, captivating eye looks.
        </p>

        <DividerWithText text="Ad" />
        <AdSenseAd />
        <DividerWithText text="Ad" />

        <SubscribeButton />
        <img src={signature} alt="Jackie Wyers Signature" style={{ width: "100%" }} />

        <Comments website-id={websiteId} page-id="wicked4-review" />
      </div>
    </div>
  );
};

export default Wicked4Review;