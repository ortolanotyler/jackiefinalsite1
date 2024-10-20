import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import ArticleTitle from '../../../Components/ArticleTitle';
import SocialShare from '../../../Home/SocialShare';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
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


const YSL = () => {




const websiteId = '10910';
const blogRef = useRef(null);


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
textDecoration: 'none', // Removes underline from links
fontFamily: "'Open Sans', serif",
fontWeight: '100',
color: '#745B4F', // Inherits the color of the surrounding text
};

const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '10px',
  margin: '0 2rem'
};

const imageStyle = {
display: 'block',
margin: '1rem auto',
borderRadius: '0px',
height: 'auto'
};

const pinterestGridStyle = {
display: 'grid',
gap: '1rem',
gridTemplateColumns: 'repeat(auto-fit, minmax(236px, 1fr))', // Adjusts columns based on screen size
justifyItems: 'center',
margin: '1rem 0',
};

const ResponsiveIframeStyle = {
width: '100%',
height: '520px', // Maintains original height
border: 'none',
scrolling: 'no',
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
  <title>YSL Laurent Quiz Result - Jackie Wyers Halloween Costume Quiz 🎃</title>
  <link rel="canonical" href="https://www.jackiewyers.beauty/quiz/halloween/ysl" />

  <meta 
    name="description" 
    content="You've chosen the path of ultimate glamour this Halloween with the YSL Laurent result! Find makeup tutorials, DIY tips, and inspiration for your perfect YSL Halloween look." 
  />
  
  <meta 
  name="keywords" 
  content="YSL Halloween costume, YSL Laurent quiz result, high-fashion Halloween costumes, designer-inspired Halloween looks, glamorous Halloween costumes, Victoria’s Secret Angel makeup tutorial, Jackie Wyers Halloween quiz results, YSL bridal inspiration, runway-inspired Halloween, fashion-forward Halloween makeup, YSL bride 1999, DIY YSL couture look, chic Halloween ideas, high-end Halloween costume inspiration, floral bridal Halloween, glam fashion looks for Halloween 2024, girly pop culture Halloween quiz, Jackie Wyers YSL-inspired beauty tutorial, couture Halloween makeup looks" 
/>

  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="YSL Laurent Quiz Result - Jackie Wyers Halloween Costume Quiz 🎃" />
  <meta 
    property="og:description" 
    content="You've chosen the path of ultimate glamour this Halloween with the YSL Laurent result! Find makeup tutorials, DIY tips, and inspiration for your perfect YSL Halloween look." 
  />
  <meta 
    property="og:image" 
    content="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729367827/1_3_zf14pp.jpg" 
  />
  <meta property="og:url" content="https://www.jackiewyers.beauty/quiz/halloween/ysl" />
  <meta property="og:type" content="article" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:title" content="YSL Laurent Quiz Result - Jackie Wyers Halloween Costume Quiz 🎃" />
  <meta 
    name="twitter:description" 
    content="You've chosen the path of ultimate glamour this Halloween with the YSL Laurent result! Find makeup tutorials, DIY tips, and inspiration for your perfect YSL Halloween look." 
  />
  <meta 
    name="twitter:image" 
    content="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729367827/1_3_zf14pp.jpg" 
  />
  <meta name="twitter:card" content="summary_large_image" />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "YSL Laurent Quiz Result - Jackie Wyers Halloween Costume Quiz 🎃",
        "description": "You've chosen the path of ultimate glamour this Halloween with the YSL Laurent result! Find makeup tutorials, DIY tips, and inspiration for your perfect YSL Halloween look.",
        "image": "https://res.cloudinary.com/dvbubqhpp/image/upload/v1729367827/1_3_zf14pp.jpg",
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
        "datePublished": "2024-10-10",
        "dateModified": "2024-10-11",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.jackiewyers.beauty/quiz/halloween/ysl"
        }
      }
    `}
  </script>
</Helmet>


<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150px' }}>
        <a href="/quiz/halloween" style={{ fontFamily: 'Arapey, sans-serif', fontSize: '1rem', color: '#000000', textDecoration: 'none' }}>
          TAKE QUIZ AGAIN
        </a>
      </div>

      <ArticleTitle
  mainTitle="Strut Your Stuff, girl!"
  subTitle="Read below for your best girly halloween costume"


/>



<SocialShare 
  url="https://www.jackiewyers.beauty/quiz/halloween/ysl" 
  title="Strut your stuff girl, you got YSL Laurent" 
  imageUrl="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729367827/1_3_zf14pp.jpg" 
/>

<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729367827/1_3_zf14pp.jpg" 
    alt="YSL Halloween Floral Inspiration" 
    style={imageStyle} 
    data-pin-url="https://www.jackiewyers.beauty/quiz/halloween/ysl"
    data-pin-media="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729367827/1_3_zf14pp.jpg"
    data-pin-description="YSL Halloween Floral Inspiration"
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
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/quiz/halloween/ysl&media=https://res.cloudinary.com/dvbubqhpp/image/upload/v1729367827/1_3_zf14pp.jpg&description=YSL Halloween Floral Inspiration')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>
<HorizontalLine/>
     <AdSenseAd/>
     <HorizontalLine/>
<p style={captionStyle}>

<a href = "/quiz/halloween">
Click here to take the quiz again! </a>

</p>

     
      <div style = {{textAlign: 'center', margin: '2rem auto' }}>
<SubscribeButton />
</div>


      <DropCap1 text="You've chosen the path of ultimate glamour this Halloween, reminiscent of a YSL runway. Your love for designer heels and perfect photo ops marks you as high fashion royalty. Whether you're channeling the YSL bride from 1999 or transforming into a Victoria’s Secret angel, your Halloween is set to be a dazzling display of your DIY prowess and flair for the dramatic."
      />
     <HorizontalLine/>
     <AdSenseAd/>
     <HorizontalLine/>
     <p style={captionStyle}>
Find tutorials below to guide your look & comment below to share your results & if they suited you!
</p>

<HorizontalLine/>
     <AdSenseAd/>
     <HorizontalLine/>

    
<HorizontalLine/>
<ResponsiveYoutube src="https://www.youtube.com/embed/NrB8YGX7XBY?si=ud_B9An5uJwt0Wom" title="ICONIC SPRING GLAM👼🏼🌸 cherub makeup, hair & diy couture" />
<HorizontalLine/>

<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729367828/2_oigqaz.jpg" 
    alt="VICTORIA’S SECRET ANGEL makeup🎀 2014 girly tumblr aesthetic!" 
    style={imageStyle} 
    data-pin-url="https://www.jackiewyers.beauty/quiz/halloween/ysl"
    data-pin-media="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729367828/2_oigqaz.jpg"
    data-pin-description="VICTORIA’S SECRET ANGEL makeup🎀 2014 girly tumblr aesthetic!"
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
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/quiz/halloween/ysl&media=https://res.cloudinary.com/dvbubqhpp/image/upload/v1729367828/2_oigqaz.jpg&description=VICTORIA’S SECRET ANGEL makeup🎀 2014 girly tumblr aesthetic!')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>
<HorizontalLine/>
     <AdSenseAd/>
     <HorizontalLine/>

<ResponsiveYoutube src="https://www.youtube.com/embed/Uz03ReLZO9k?si=ifRCpyciOYBCEbaX" title="VICTORIA’S SECRET ANGEL makeup🎀 2014 girly tumblr aesthetic!" />
  <HorizontalLine/>
     <AdSenseAd/>
     <HorizontalLine/>











      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <a href="/girly-pop-halloween" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'none', textAlign: 'center' }}>
        see my roundup of girly halloween costumes here! →

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
        title="YSL Laurent Quiz Result - Jackie Wyers Halloween Costume Quiz"
        description="Strut Your Stuff!"
        blogContent={blogContent}
      />   
      
    

       </div>
      
  );
};

export default YSL;
