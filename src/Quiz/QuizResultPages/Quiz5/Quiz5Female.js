import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Comments } from '@hyvor/hyvor-talk-react';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import ArticleTitle from '../../../Components/ArticleTitle';
import SocialShare from '../../../Home/SocialShare';
import AdSenseAd from '../../../Home/Adsense';
import HorizontalLine from '../../../Components/HorizontalLine';
import TextRevealHomePage from '../../../Components/TextRevealHomePage';
import SubscribeButton from '../../../Components/SubscribeButton';


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
  fontWeight: '300',
  padding: '10px',
  margin: '10px auto',
  lineHeight: '1.6',
};

const linkStyle = {
  textDecoration: 'none',
  fontFamily: "'EB Garamond', serif",
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
  <link rel="canonical" href="https://www.jackiewyers.beauty/quiz/female" />

  <meta 
    name="description" 
    content="Discover bold and inspiring makeup looks that embody the female gaze, featuring pop culture icons and trendsetting tutorials by Jackie Wyers." 
  />
  <meta 
    name="keywords" 
    content="female gaze makeup, artistic bold looks, Aria Montgomery makeup, 2016 glam makeup, espresso smoky eye, Pamela Anderson makeup, creative makeup tutorials, bold beauty inspiration, Jackie Wyers makeup, feminine beauty, iconic makeup styles, edgy makeup, goth glam, retro makeup looks, statement makeup styles, pop culture makeup inspiration, makeup trends 2024" 
  />

  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="You Embody the Female Gaze! 🎨✨" />
  <meta 
    property="og:description" 
    content="Discover bold and inspiring makeup looks that embody the female gaze, featuring trendsetting tutorials by Jackie Wyers." 
  />
  <meta 
    property="og:image" 
    content="https://res.cloudinary.com/dzhlitors/image/upload/f_auto/v1730308307.FullSizeRender_2_e6xtyv.heic" 
  />
  <meta property="og:url" content="https://www.jackiewyers.beauty/quiz/female" />
  <meta property="og:type" content="article" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:title" content="You Embody the Female Gaze! 🎨✨" />
  <meta 
    name="twitter:description" 
    content="Discover bold and inspiring makeup looks that embody the female gaze, featuring trendsetting tutorials by Jackie Wyers." 
  />
  <meta 
    name="twitter:image" 
    content="https://res.cloudinary.com/dzhlitors/image/upload/f_auto/v1730308307.FullSizeRender_2_e6xtyv.heic" 
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
        "headline": "You Embody the Female Gaze!",
        "description": "Discover bold and inspiring makeup looks that embody the female gaze, featuring pop culture icons and trendsetting tutorials by Jackie Wyers.",
        "image": "    content="https://res.cloudinary.com/dzhlitors/image/upload/f_auto/v1730308307.FullSizeRender_2_e6xtyv.heic",
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
          "@id": "https://www.jackiewyers.beauty/quiz/female"
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

      <ArticleTitle mainTitle="You Embody the Female Gaze!" subTitle="Keep reading for more looks to try." />

      <SocialShare 
        url="https://www.jackiewyers.beauty/quiz/male-female-gaze" 
        title="Check out these bold makeup looks that embody the female gaze!" 
        imageUrl="https://res.cloudinary.com/dzhlitors/image/upload/f_auto/v1730308307.FullSizeRender_2_e6xtyv.heic"
      />
     

<ResponsiveYoutube src="https://www.youtube.com/embed/4BV2JQ_4MaY?si=96COgHmEQTgedgIr" title="🩵MALE VS. FEMALE🩷 GAZE MAKEUP! Which Are You? 👀 + Sephora Haul!" />


<div style = {{textAlign: 'center', margin: '10px auto' }}>
<SubscribeButton />
</div>
      <HorizontalLine />

      <p style={paragraphStyle}>
        Your style is artistic and bold, resonating with trendsetting icons who've left their mark on pop culture. You inspire other women who admire the confidence it takes to pull off unique and experimental styles. If you love varying your makeup based on your mood, dive into these tutorials that celebrate creativity in makeup artistry.
      </p>
      <div style = {{
    margin: '10px  auto  ',
    minHeight: "auto",
}}>
  <AdSenseAd />
</div>


      <h2 style={headingStyle}>Aria Montgomery from "Pretty Little Liars":</h2>
      <p style={paragraphStyle}> Aria's early style is uniquely hers, resembling a beautiful gothic doll. Her makeup makes a statement almost as bold as her fashion choices.</p>
      <ResponsiveYoutube src="https://www.youtube.com/embed/ooyZk4n3myk&t=492s" title="Aria Montgomery Makeup Tutorial" />
      <div style = {{
    margin: '10px  auto  ',
    minHeight: "auto",
}}>
  <AdSenseAd />
</div>
      
      <h2 style={headingStyle}>2016 Bold Glam:</h2>
      <p style={paragraphStyle}> This year was all about the girls. The matte Kylie Lip Kit and heavy contouring may have baffled some men, but it set beauty trends. Revisit this Iconic Style.</p>
    
     
      <ResponsiveYoutube src="https://www.youtube.com/embed/HtEPH6RUEZg&t=43s" title="2016 Bold Glam Makeup Tutorial" />
      <div style = {{
    margin: '10px  auto  ',
    minHeight: "auto",
}}>
  <AdSenseAd />
</div>
      <h2 style={headingStyle}>Espresso Makeup:</h2>
      <p style={paragraphStyle}>Espresso Makeup: A sexy, smoky eye that turns heads. This bold look is a favorite among makeup enthusiasts who appreciate a standout glamour. It’s versatile and stunning on everyone.</p>
     
     
      <ResponsiveYoutube src="https://www.youtube.com/embed/okXpvzknH9w" title="Espresso Makeup Tutorial" />
     
      <h2 style={headingStyle}>Pamela Anderson's 90s Bombshell Makeup:</h2>
      <p style={paragraphStyle}> Embrace ultra-glam makeup that showcases your love for dynamic styles. Pamela’s iconic 90s makeup is perfect for those who adore full-on glamorous aesthetics.</p>
      <div style = {{
    margin: '10px  auto  ',
    minHeight: "auto",
}}>
  <AdSenseAd />
</div>
    
    
      <ResponsiveYoutube src="https://www.youtube.com/embed/92Exu4CeZ7E&t=478s" title="Pamela Anderson 90s Makeup Tutorial" />
    
     
     
      <h2 style={headingStyle}>More Inspirational Looks:</h2>
      <p style={paragraphStyle}>
         From Maddy's bold liner in "Euphoria" to Sophia Loren’s classic arabesque cat eye, explore a wealth of styles. Even Margot Robbie’s bold magenta lip and smoky eye in "The Wolf of Wall Street" radiate fiery female energy. Find them all on my channel <a href="https://www.youtube.com/watch?v=1AEctVwF5Bg&list=PL-_qSuEl3UwGCpf0yJpevC0q5Q9BOuKoh" style={linkStyle}>here</a>!
      </p>

      <p style={paragraphStyle}>Embrace these looks to enhance your artistic flair and showcase your individuality. Each style offers a unique way to express yourself and make an impression. Don’t forget to share your favorite transformations and tag me in your recreations if you use my tutorials!</p>

      <HorizontalLine />
      <AdSenseAd />
   
      <HorizontalLine />

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={signature} alt="Jackie Wyers Signature" style={{ width: '100%', maxWidth: '650px' }} />
      </div>
      
      <Comments website-id={websiteId} page-id={"Quiz5"} />
      <div style = {{
    margin: '10px  auto  ',
    minHeight: "auto",
}}>
  <AdSenseAd />
</div>
     
    </div>
  );

  return (
    <div ref={blogRef}>
    <TextRevealHomePage text = "MALE VS FEMALE GAZE"/>



      <Card title="You Embody the Female Gaze!" description="Discover inspiring looks that embody the female gaze." blogContent={blogContent} />
   
   
    </div>
  );
};

export default Quiz5Female;