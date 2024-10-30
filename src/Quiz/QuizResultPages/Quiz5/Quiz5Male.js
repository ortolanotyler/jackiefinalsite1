import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import ArticleTitle from '../../../Components/ArticleTitle';
import SocialShare from '../../../Home/SocialShare';
import AdSenseAd from '../../../Home/Adsense';
import HorizontalLine from '../../../Components/HorizontalLine';


const pinterest = `${process.env.PUBLIC_URL}/Images/Articles/pinterest.png`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const headingStyle = {
  textAlign: 'center',
  fontSize: '2.5rem',
  fontWeight: '400',
  fontFamily: "'Playfair Display', serif",
  color: '#000000',
  maxWidth: '95%',
  margin: '30px auto'
};

const paragraphStyle = {
  fontSize: '20px',
  color: '#000000',
  fontFamily: "'Open Sans', serif",
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
        <link rel="canonical" href="https://www.jackiewyers.beauty/quiz/male-female-gaze" />
        <meta name="description" content="Discover looks that embody the effortless beauty of the girl-next-door style." />
        <meta name="keywords" content="male gaze, subtle beauty, Rory Gilmore makeup, Alaska Young style, Brooke Shields beach look, Victoria's Secret makeup, natural beauty" />
      </Helmet>

      <ArticleTitle mainTitle="You Capture the Male Gaze!" subTitle="Keep reading for more looks to try." />

      <SocialShare 
        url="https://www.jackiewyers.beauty/quiz/male-female-gaze" 
        title="Explore subtle and effortless looks that capture the male gaze!" 
        imageUrl="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1729372872/Male_Gaze.jpg"
      />

      <HorizontalLine />

      <p style={paragraphStyle}>
        Your style exudes a soft, effortlessly chic vibe, reminiscent of the timeless appeal of the girl-next-door. Both approachable and enchanting, your understated beauty charms everyone you meet. Ready to add a subtle twist to your signature look? Dive into these inspirations, blending simplicity with a dash of glamour:
      </p>

      <h2 style={headingStyle}>Pop Culture Icons of Subtle Beauty:</h2>

      <p style={paragraphStyle}>Rory Gilmore from "Gilmore Girls": Rory's makeup epitomizes youthful, "barely-there" beauty. Perfect for those who admire a subtle yet impactful style. Explore Rory’s Makeup Tutorial to achieve her fresh-faced radiance.</p>
      <ResponsiveYoutube src="https://www.youtube.com/embed/reRyyvPTAZw&t=1s" title="Rory Gilmore Makeup Tutorial" />

      <p style={paragraphStyle}>Alaska Young from "Looking for Alaska": Alaska mixes natural makeup with loose, flowing hair and vintage attire, capturing a simple yet stunning vibe. Get Alaska’s Look to channel her retro charm.</p>
      <ResponsiveYoutube src="https://www.youtube.com/embed/AePBFzlyNpo&t=16s" title="Alaska Young Makeup Tutorial" />

      <p style={paragraphStyle}>Brooke Shields in "The Blue Lagoon": For the ultimate beach babe look, Brooke's iconic style offers perfect inspiration, ideal for summer or a beach getaway. Master the Beach Aesthetic with my tutorial.</p>
      <ResponsiveYoutube src="https://www.youtube.com/embed/yC8Sf9U3Aww?list=PL-_qSuEl3UwH4UEWC4LNUSi6a3y_oVmDB" title="Brooke Shields Beach Look Tutorial" />

      <p style={paragraphStyle}>Victoria’s Secret Angels: When you want just a bit more glamour, the Victoria’s Secret Angel makeup look is perfect—glamorous yet wearable. Learn the Angel Makeup Secrets for a flawless finish.</p>
      <ResponsiveYoutube src="https://www.youtube.com/embed/Uz03ReLZO9k&t=1s" title="Victoria's Secret Angel Makeup Tutorial" />

      <p style={paragraphStyle}>
        Your style turns heads and garners admiration. Keep rocking your beautiful blend of simplicity and allure, and let your natural beauty shine through!
      </p>

      <p style={paragraphStyle}>
        What’s Your Take? Loved these tips or have more ideas? Share your thoughts and let us know how these styles work out for you!
      </p>

      <HorizontalLine />
      <AdSenseAd />
      <SubscribeButton />
      <HorizontalLine />

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={signature} alt="Jackie Wyers Signature" style={{ width: '100%', maxWidth: '650px' }} />
      </div>

      <Comments website-id={websiteId} page-id={"Quiz5Male"} />
    </div>
  );

  return (
    <div ref={blogRef}>
      <Card title="You Capture the Male Gaze!" description="Discover subtle beauty looks that capture the male gaze." blogContent={blogContent} />
    </div>
  );
};

export default Quiz5Male;