import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import ArticleTitle from '../../../Components/ArticleTitle';
import SocialShare from '../../../Home/SocialShare';
import AdSenseAd from '../../../Home/Adsense';
import HorizontalLine from '../../../Components/HorizontalLine';
import TextRevealHomePage from '../../../Components/TextRevealHomePage';

const pinterest = `${process.env.PUBLIC_URL}/Images/Articles/pinterest.png`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;


const headingStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: '400',
    fontFamily: "'Playfair Display', sans-serif",
    color: '#000000',
    maxWidth: '95%',
    margin: '20px auto'
  };
  
  const paragraphStyle = {
    fontSize: '20px',
    color: '#000000',
    fontFamily: "'EB Garamond', serif",
    fontWeight: '100',
    padding: '10px',
    margin: '10px auto',
    lineHeight: '1.6',
  };
  
  const linkStyle = {
    textDecoration: 'none',
    fontFamily: "'Open Sans', serif",
    fontWeight: '100',
    color: '#745B4F',
  };
  
  const imageStyle = {
    display: 'block',
    margin: '1rem auto',
    borderRadius: '0px',
    height: 'auto'
  };

const Card = ({ blogContent }) => (
    <div
      style={{
        margin: '0 auto',
        maxWidth: '95%', // Control max width to center the content
        padding: '10px', // Add padding to prevent text from touching the edges
      }}
    >
      <div className="card">
        <div className="blog-content">{blogContent}</div>
      </div>
    </div>
  );

const Quiz5Male = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);

  const blogContent = (
    <div className="container">
  <Helmet>
  <title>You Capture the Male Gaze!</title>
  <link rel="canonical" href="https://www.jackiewyers.beauty/quiz/male" />

  <meta 
    name="description" 
    content="Explore subtle and timeless beauty looks that capture the male gaze, inspired by iconic characters and effortless elegance, curated by Jackie Wyers." 
  />
  <meta 
    name="keywords" 
    content="male gaze makeup, subtle beauty looks, effortless makeup, girl-next-door style, Rory Gilmore makeup, Alaska Young style, Brooke Shields beach look, Victoria's Secret makeup, natural beauty, understated glam, classic beauty trends, soft glam makeup, Jackie Wyers tutorials, pop culture beauty inspiration, chic makeup looks, timeless beauty" 
  />

  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="You Capture the Male Gaze! 🌟✨" />
  <meta 
    property="og:description" 
    content="Explore subtle and timeless beauty looks that capture the male gaze, inspired by iconic characters and effortless elegance, curated by Jackie Wyers." 
  />
  <meta 
    property="og:image" 
    content="https://res.cloudinary.com/dzhlitors/image/upload/v1730309612/dragonbraidthumbnail_pdo1ls.heic" 
  />
  <meta property="og:url" content="https://www.jackiewyers.beauty/quiz/male" />
  <meta property="og:type" content="article" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:title" content="You Capture the Male Gaze! 🌟✨" />
  <meta 
    name="twitter:description" 
    content="Explore subtle and timeless beauty looks that capture the male gaze, inspired by iconic characters and effortless elegance, curated by Jackie Wyers." 
  />
  <meta 
    name="twitter:image" 
    content="https://res.cloudinary.com/dzhlitors/image/upload/v1730309612/dragonbraidthumbnail_pdo1ls.heic" 
  />
  <meta name="twitter:card" content="summary_large_image" />

  {/* Google Analytics */}
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-RT6GR7JXYG"></script>
  <script>
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-RT6GR7JXYG', { page_path: window.location.pathname });
    `}
  </script>

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "You Capture the Male Gaze!",
        "description": "Explore subtle and timeless beauty looks that capture the male gaze, inspired by iconic characters and effortless elegance, curated by Jackie Wyers.",
        "image": "https://res.cloudinary.com/dzhlitors/image/upload/v1730309612/dragonbraidthumbnail_pdo1ls.heic",
        "author": {
          "@type": "Person",
          "name": "Jackie Wyers"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Jackie Wyers Beauty",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.jackiewyers.beauty/logo.png"
          }
        },
        "datePublished": "2024-10-30",
        "dateModified": "2024-10-30",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.jackiewyers.beauty/quiz/male"
        }
      }
    `}
  </script>
</Helmet>

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150px' }}>
        <a href="/quiz/male-female-gaze" style={{ fontFamily: 'Arapey, sans-serif', fontSize: '1rem', color: '#000000', textDecoration: 'none' }}>
          TAKE QUIZ AGAIN
        </a>
      </div>


      <ArticleTitle mainTitle="You Capture the Male Gaze!" subTitle="Keep reading for more looks to try." />

      <SocialShare 
        url="https://www.jackiewyers.beauty/quiz/male" 
        title="Explore subtle and effortless looks that capture the male gaze!" 
        imageUrl="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1729372872/Male_Gaze.jpg"
      />

      <HorizontalLine />

      <p style={paragraphStyle}>
        Your style exudes a soft, effortlessly chic vibe, reminiscent of the timeless appeal of the girl-next-door. Both approachable and enchanting, your understated beauty charms everyone you meet. Ready to add a subtle twist to your signature look? Dive into these inspirations, blending simplicity with a dash of glamour:
      </p>


      <h2 style={headingStyle}>Rory Gilmore from "Gilmore Girls"</h2>
      <p style={paragraphStyle}>Rory's makeup epitomizes youthful, "barely-there" beauty. Perfect for those who admire a subtle yet impactful style. Explore Rory’s Makeup Tutorial to achieve her fresh-faced radiance.</p>
      <ResponsiveYoutube src="https://www.youtube.com/embed/reRyyvPTAZw&t=1s" title="Rory Gilmore Makeup Tutorial" />
      <div style = {{
    margin: '10px  auto  ',
    minHeight: "auto",
}}>
  <AdSenseAd />
</div>
      <h2 style={headingStyle}>Alaska Young from "Looking for Alaska"</h2>
      <p style={paragraphStyle}>Alaska mixes natural makeup with loose, flowing hair and vintage attire, capturing a simple yet stunning vibe. Get Alaska’s Look to channel her retro charm.</p>
      <ResponsiveYoutube src="https://www.youtube.com/embed/AePBFzlyNpo&t=16s" title="Alaska Young Makeup Tutorial" />

      <h2 style={headingStyle}>Brooke Shields in "The Blue Lagoon"</h2>
      <p style={paragraphStyle}>For the ultimate beach babe look, Brooke's iconic style offers perfect inspiration, ideal for summer or a beach getaway. Master the Beach Aesthetic with my tutorial.</p>
      <ResponsiveYoutube src="https://www.youtube.com/embed/yC8Sf9U3Aww?list=PL-_qSuEl3UwH4UEWC4LNUSi6a3y_oVmDB" title="Brooke Shields Beach Look Tutorial" />
      <div style = {{
    margin: '10px  auto  ',
    minHeight: "auto",
}}>
  <AdSenseAd />
</div>
      <h2 style={headingStyle}>Victoria’s Secret Angels</h2>
      <p style={paragraphStyle}>When you want just a bit more glamour, the Victoria’s Secret Angel makeup look is perfect—glamorous yet wearable. Learn the Angel Makeup Secrets for a flawless finish.</p>
      <ResponsiveYoutube src="https://www.youtube.com/embed/Uz03ReLZO9k&t=1s" title="Victoria's Secret Angel Makeup Tutorial" />

      <p style={paragraphStyle}>
        Your style turns heads and garners admiration. Keep rocking your beautiful blend of simplicity and allure, and let your natural beauty shine through!
      </p>

      <p style={paragraphStyle}>
        What’s Your Take? Loved these tips or have more ideas? Share your thoughts and let us know how these styles work out for you!
      </p>

<div style = {{
    margin: '10px  auto  ',
    minHeight: "auto",
}}>
  <AdSenseAd />
</div>
    
  
     

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={signature} alt="Jackie Wyers Signature" style={{ width: '100%', maxWidth: '650px' }} />
      </div>

      <Comments website-id={websiteId} page-id={"Quiz5"} />
    </div>
  );

  return (
   
    <div ref={blogRef}>
              <TextRevealHomePage text = "MALE VS FEMALE GAZE"/>

      <Card title="You Capture the Male Gaze!" description="Discover subtle beauty looks that capture the male gaze." blogContent={blogContent} />
    </div>
  );
};

export default Quiz5Male;