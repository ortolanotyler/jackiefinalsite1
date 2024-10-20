import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import ArticleTitle from '../../../Components/ArticleTitle';
import SocialShare from '../../../Home/SocialShare';
import AdSenseAd from '../../../Home/Adsense';
import DropCap1 from '../../../Articles/Travel/DropCap1';
import HorizontalLine from '../../../Components/HorizontalLine';

const pinterest = `${process.env.PUBLIC_URL}/Images/Articles/pinterest.png`;

const image6 = `${process.env.PUBLIC_URL}/Images/Articles/Halloween/HalloweenThumb.jpg`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

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

const Quiz4Taylor = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);

  const headingStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: '400',
    fontFamily: "'Playfair Display', serif",
    color: '#000000',
    maxWidth: '95%',
    margin: '30px auto',
  };
  const imageStyle = {
    display: 'block',
    margin: '1rem auto',
    borderRadius: '0px',
    height: 'auto'
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

  const captionStyle = {
    textAlign: 'center',
    fontSize: '1rem',
    fontFamily: 'Arapey, serif',
    fontWeight: '100',
    margin: '0 auto',
    fontStyle: 'italic',
  };

  const blogContent = (
    <div className="container">
      <Helmet>
        <title>Taylor Swift Folklore-Inspired Halloween Costume 🎃 | Jackie Wyers</title>
        <link rel="canonical" href="https://www.jackiewyers.beauty/quiz/halloween/taylor-folklore" />
        <meta 
          name="description" 
          content="Explore your Taylor Swift 'folklore'-inspired Halloween costume result, perfect for cozy fall nights and mystical gatherings. Find costume ideas and makeup tutorials here." 
        />
        <meta 
          name="keywords" 
          content="Taylor Swift Halloween costume, Folklore inspired costume, cozy Halloween outfit, Taylor Swift cardigan outfit, fairycore costume ideas, mystical fall costumes, Taylor Swift inspired makeup, Jackie Wyers quiz result, folklore Taylor Swift costume, pop culture Halloween costume" 
        />
        <meta property="og:title" content="Taylor Swift Folklore-Inspired Halloween Costume 🎃 | Jackie Wyers" />
        <meta 
          property="og:description" 
          content="Explore your Taylor Swift 'folklore'-inspired Halloween costume result, perfect for cozy fall nights and mystical gatherings. Find costume ideas and makeup tutorials here." 
        />
        <meta 
          property="og:image" 
          content="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729433107/taylor_polaroid_mrgf3f.jpg" 
        />
        <meta property="og:url" content="https://www.jackiewyers.beauty/quiz/halloween/taylor-folklore" />
        <meta property="og:type" content="article" />
        <meta name="twitter:title" content="Taylor Swift Folklore-Inspired Halloween Costume 🎃 | Jackie Wyers" />
        <meta 
          name="twitter:description" 
          content="Explore your Taylor Swift 'folklore'-inspired Halloween costume result, perfect for cozy fall nights and mystical gatherings. Find costume ideas and makeup tutorials here." 
        />
        <meta 
          name="twitter:image" 
          content="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729433107/taylor_polaroid_mrgf3f.jpg" 
        />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": "Taylor Swift Folklore-Inspired Halloween Costume 🎃 | Jackie Wyers",
              "description": "Explore your Taylor Swift 'folklore'-inspired Halloween costume result, perfect for cozy fall nights and mystical gatherings. Find costume ideas and makeup tutorials here.",
              "image": "https://res.cloudinary.com/dvbubqhpp/image/upload/v1729433107/taylor_polaroid_mrgf3f.jpg",
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
              "datePublished": "2024-10-20",
              "dateModified": "2024-10-21",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.jackiewyers.beauty/quiz/halloween/taylor-folklore"
              }
            }
          `}
        </script>
        <script>
          {`
            gtag('config', 'G-RT6GR7JXYG', {
              page_path: window.location.pathname
            });
          `}
        </script>
      </Helmet>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150px' }}>
        <a href="/quiz/halloween" style={{ fontFamily: 'Arapey, sans-serif', fontSize: '1rem', color: '#000000', textDecoration: 'none' }}>
          TAKE QUIZ AGAIN
        </a>
      </div>

      <ArticleTitle mainTitle="Hello, fellow Swiftie!" 
        subTitle="Read below for your best girly halloween costume"

      />


      <SocialShare 
        url="https://www.jackiewyers.beauty/quiz/halloween/taylor-folklore" 
        title="Taylor Swift Folklore Halloween Costume Result - Jackie Wyers Halloween Style Quiz" 
        imageUrl="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729433107/taylor_polaroid_mrgf3f.jpg" 
      />

      <div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729433107/taylor_polaroid_mrgf3f.jpg" 
    alt="Taylor Swift Fall Outfit Inspo" 
    style={imageStyle} 
    data-pin-url="https://www.jackiewyers.beauty/quiz/halloween/britney"
    data-pin-media="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729433107/taylor_polaroid_mrgf3f.jpg"
    data-pin-description="Taylor Swift Fall Outfit Inspo"
  />
  <img 
    src={pinterest}
    alt="Pin this on Pinterest" 
    style={{
      position: 'absolute',
      top: '20px',
      right: '20px',
      width: '50px',
      height: '50px',
      cursor: 'pointer',
      opacity: 0.9,
      transition: 'opacity 0.3s'
    }}
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/quiz/halloween/ysl&media=https://res.cloudinary.com/dvbubqhpp/image/upload/v1729433107/taylor_polaroid_mrgf3f.jpg&description=Taylor Swift Fall Outfit Inspo')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>


      <p style={captionStyle}>
        <a href="/quiz/halloween">
          Click here to take the quiz again!
        </a>
      </p>

     


      <div style={{ textAlign: 'center', margin: '2rem auto' }}>
        <SubscribeButton />
      </div>


   
      <HorizontalLine />

      <DropCap1 text="Hey, fellow Swiftie! Your choices reflect a connection to Taylor Swift's 'folklore' era—cozy, introspective, and full of storytelling. Perfect for a chill Halloween night or a casual gathering, your folklore-inspired outfit will surely resonate with fellow fans. If the mystical allure of 'Cardigan' captivates you, consider a whimsical fairy costume, perhaps channeling the magic of Flora from Winx Club." />

      <HorizontalLine />

      <p style={captionStyle}>
        Find tutorials below to guide your look & comment below to share your results & if they suited you!
      </p>
      <HorizontalLine />

      <AdSenseAd />
      <HorizontalLine />


      <ResponsiveYoutube src="https://www.youtube.com/embed/VdWgliSfleM" title="Taylor Swift Cardigan-Inspired Look" />


      <HorizontalLine />

      <div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729433074/flora__1_kgj9ao.jpg" 
    alt="FairyCore Inspiration by Jackie Wyers" 
    style={imageStyle} 
    data-pin-url="https://www.jackiewyers.beauty/quiz/halloween/britney"
    data-pin-media="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729433074/flora__1_kgj9ao.jpg"
    data-pin-description="FairyCore Inspiration by Jackie Wyers"
  />
  <img 
    src={pinterest}
    alt="Pin this on Pinterest" 
    style={{
      position: 'absolute',
      top: '20px',
      right: '20px',
      width: '50px',
      height: '50px',
      cursor: 'pointer',
      opacity: 0.9,
      transition: 'opacity 0.3s'
    }}
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/quiz/halloween/ysl&media=https://res.cloudinary.com/dvbubqhpp/image/upload/v1729433074/flora__1_kgj9ao.jpg&description=FairyCore Inspiration by Jackie Wyers')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>

      <HorizontalLine />
      <ResponsiveYoutube src="https://www.youtube.com/embed/2lZ-1p7mKMY?t=214s" title="Flora from Winx Club Fairy-Inspired Look" />

      <HorizontalLine />

      <div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="      https://res.cloudinary.com/dvbubqhpp/image/upload/v1729433671/Fairycore-min_he62e2.png" 
    alt="FairyCore Inspiration by Jackie Wyers" 
    style={imageStyle} 
    data-pin-url="https://www.jackiewyers.beauty/quiz/halloween/britney"
    data-pin-media="      https://res.cloudinary.com/dvbubqhpp/image/upload/v1729433671/Fairycore-min_he62e2.png"
    data-pin-description="FairyCore Inspiration by Jackie Wyers"
  />
  <img 
    src={pinterest}
    alt="Pin this on Pinterest" 
    style={{
      position: 'absolute',
      top: '20px',
      right: '20px',
      width: '50px',
      height: '50px',
      cursor: 'pointer',
      opacity: 0.9,
      transition: 'opacity 0.3s'
    }}
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/quiz/halloween/ysl&media=      https://res.cloudinary.com/dvbubqhpp/image/upload/v1729433671/Fairycore-min_he62e2.png&description=FairyCore Inspiration by Jackie Wyers')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>


      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <a href="/girly-pop-halloween" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'none', textAlign: 'center' }}>
          See my roundup of girly pop culture Halloweencostumes here! →

          <img src={image6} alt="Barbie Movie Halloween Article" style={{ width: '100%', maxWidth: '300px', margin: '20px auto', display: 'block' }} />
        </a>
      </div>
      <HorizontalLine/>


      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={signature} alt="Jackie Wyers Signature" style={{ width: '100%', maxWidth: '650px' }} />
      </div>
      
      <Comments website-id={websiteId} page-id={"Quiz4"} />
      <AdSenseAd/>
      <AdSenseAd/>
      <AdSenseAd/>
      <AdSenseAd/>
      <AdSenseAd/>
      <AdSenseAd/>
    </div>
  );

  return (
    <div ref={blogRef}>
  <Card
        title="Ariel Halloween Costume Quiz Result - Jackie Wyers Halloween Style Costume Quiz"
        description="Ariel Quiz Result Jackie Wyers"
        blogContent={blogContent}
      />   
      
    

       </div>
      
  );
};

export default Quiz4Taylor;
