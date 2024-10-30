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

  
const Quiz5Female = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);

  const blogContent = (
    <div className="container">
      <Helmet>
        <title>You Embody the Female Gaze!</title>
        <link rel="canonical" href="https://www.jackiewyers.beauty/quiz/female-gaze" />
        <meta name="description" content="Discover bold and inspiring looks that embody the female gaze." />
        <meta name="keywords" content="female gaze, makeup inspiration, bold looks, Aria Montgomery, 2016 glam, espresso makeup, Pamela Anderson makeup, creative makeup artistry" />
      </Helmet>

      <ArticleTitle mainTitle="You Embody the Female Gaze!" subTitle="Keep reading for more looks to try." />

      <SocialShare 
        url="https://www.jackiewyers.beauty/quiz/female-gaze" 
        title="Check out these bold makeup looks that embody the female gaze!" 
        imageUrl="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1729372872/Female_Gaze.jpg"
      />

      <HorizontalLine />

      <p style={paragraphStyle}>
        Your style is artistic and bold, resonating with trendsetting icons who've left their mark on pop culture. You inspire other women who admire the confidence it takes to pull off unique and experimental styles. If you love varying your makeup based on your mood, dive into these tutorials that celebrate creativity in makeup artistry.
      </p>

      <h2 style={headingStyle}>Bold Looks to Explore:</h2>

      <p style={paragraphStyle}>Aria Montgomery from "Pretty Little Liars": Aria's early style is uniquely hers, resembling a beautiful gothic doll. Her makeup makes a statement almost as bold as her fashion choices.</p>
      <ResponsiveYoutube src="https://www.youtube.com/embed/ooyZk4n3myk&t=492s" title="Aria Montgomery Makeup Tutorial" />

      <p style={paragraphStyle}>2016 Bold Glam: This year was all about the girls. The matte Kylie Lip Kit and heavy contouring may have baffled some, but it set beauty trends. Revisit this Iconic Style.</p>
      <ResponsiveYoutube src="https://www.youtube.com/embed/HtEPH6RUEZg&t=43s" title="2016 Bold Glam Makeup Tutorial" />

      <p style={paragraphStyle}>Espresso Makeup: A sexy, smoky eye that turns heads. This bold look is a favorite among makeup enthusiasts who appreciate a standout glamour. It’s versatile and stunning on everyone.</p>
      <ResponsiveYoutube src="https://www.youtube.com/embed/okXpvzknH9w" title="Espresso Makeup Tutorial" />

      <p style={paragraphStyle}>Pamela Anderson's 90s Bombshell Makeup: Embrace ultra-glam makeup that showcases your love for dynamic styles. Pamela’s iconic 90s makeup is perfect for those who adore full-on glamorous aesthetics.</p>
      <ResponsiveYoutube src="https://www.youtube.com/embed/92Exu4CeZ7E&t=478s" title="Pamela Anderson 90s Makeup Tutorial" />

      <p style={paragraphStyle}>
        More Inspirational Looks: From Maddy's bold liner in "Euphoria" to Sophia Loren’s classic arabesque cat eye, explore a wealth of styles. Even Margot Robbie’s bold magenta lip and smoky eye in "The Wolf of Wall Street" radiate fiery female energy. Find them all on my channel <a href="https://www.youtube.com/watch?v=1AEctVwF5Bg&list=PL-_qSuEl3UwGCpf0yJpevC0q5Q9BOuKoh" style={linkStyle}>here</a>!
      </p>

      <p style={paragraphStyle}>Embrace these looks to enhance your artistic flair and showcase your individuality. Each style offers a unique way to express yourself and make an impression. Don’t forget to share your favorite transformations and tag me in your recreations if you use my tutorials!</p>

      <HorizontalLine />
      <AdSenseAd />
      <SubscribeButton />
      <HorizontalLine />

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={signature} alt="Jackie Wyers Signature" style={{ width: '100%', maxWidth: '650px' }} />
      </div>
      
      <Comments website-id={websiteId} page-id={"Quiz5Female"} />
    </div>
  );

  return (
    <div ref={blogRef}>
      <Card title="You Embody the Female Gaze!" description="Discover inspiring looks that embody the female gaze." blogContent={blogContent} />
    </div>
  );
};

export default Quiz5Female;