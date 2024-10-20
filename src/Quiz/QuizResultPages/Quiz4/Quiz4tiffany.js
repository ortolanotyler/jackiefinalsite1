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


const Quiz4Tiffany = () => {




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
  <title>Breakfast at Tiffany’s - Jackie Wyers Halloween Costume Quiz 🎀</title>
  <link rel="canonical" href="https://www.jackiewyers.beauty/quiz/halloween/tiffany" />

  <meta 
    name="description" 
    content="Channel the timeless elegance of Audrey Hepburn in Breakfast at Tiffany’s this Halloween. Get inspired by classic Hollywood glam with tutorials and beauty tips from Jackie Wyers." 
  />
  
  <meta 
    name="keywords" 
    content="Breakfast at Tiffany’s costume, Audrey Hepburn Halloween, Jackie Wyers Halloween quiz, Audrey Hepburn makeup tutorial, Audrey Hepburn hairstyle, Hollywood glam Halloween, classic Halloween looks, Breakfast at Tiffany’s fashion, Halloween costume ideas 2024, Jackie Wyers makeup tutorials, Audrey Hepburn style guide, girly pop culture Halloween costumes, chic Halloween costumes, iconic movie character costumes, Breakfast at Tiffany's style, Audrey Hepburn inspired makeup, Tiffany’s Halloween 2024" 
  />

  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="Breakfast at Tiffany’s - Jackie Wyers Halloween Costume Quiz 🎀" />
  <meta 
    property="og:description" 
    content="Channel the timeless elegance of Audrey Hepburn in Breakfast at Tiffany’s this Halloween. Get inspired by classic Hollywood glam with tutorials and beauty tips from Jackie Wyers." 
  />
  <meta 
    property="og:image" 
    content="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1729374709/Audrey_x3fmo2.jpg" 
  />
  <meta property="og:url" content="https://www.jackiewyers.beauty/quiz/halloween/tiffany" />
  <meta property="og:type" content="article" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:title" content="Breakfast at Tiffany’s - Jackie Wyers Halloween Costume Quiz 🎀" />
  <meta 
    name="twitter:description" 
    content="Channel the timeless elegance of Audrey Hepburn in Breakfast at Tiffany’s this Halloween. Get inspired by classic Hollywood glam with tutorials and beauty tips from Jackie Wyers." 
  />
  <meta 
    name="twitter:image" 
    content="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1729374709/Audrey_x3fmo2.jpg" 
  />
  <meta name="twitter:card" content="summary_large_image" />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Breakfast at Tiffany’s - Jackie Wyers Halloween Costume Quiz 🎀",
        "description": "Channel the timeless elegance of Audrey Hepburn in Breakfast at Tiffany’s this Halloween. Get inspired by classic Hollywood glam with tutorials and beauty tips from Jackie Wyers.",
        "image": "https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1729374709/Audrey_x3fmo2.jpg",
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
          "@id": "https://www.jackiewyers.beauty/quiz/halloween/tiffany"
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
  mainTitle="Darling, You’re Divine!"
  subTitle="Read below for your best girly halloween costume"


/>



<SocialShare 
  url="https://www.jackiewyers.beauty/quiz/halloween/tiffany" 
  title="Darling, you're Divine! - You got Tiffany! What do you think about your result?" 
  imageUrl="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729374709/Audrey_x3fmo2.jpg" 
/>

<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729374709/Audrey_x3fmo2.jpg" 
    alt="Audrey Hepburn Halloween Quiz Image" 
    style={imageStyle} 
    data-pin-url="https://www.jackiewyers.beauty/quiz/halloween/tiffany"
    data-pin-media="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729374709/Audrey_x3fmo2.jpg"
    data-pin-description="Audrey Hepburn Halloween Quiz Image"
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
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/quiz/halloween/ysl&media=https://res.cloudinary.com/dvbubqhpp/image/upload/v1729374709/Audrey_x3fmo2.jpg&description=Audrey Hepburn Halloween Quiz Image')}
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
      <DropCap1 text="Emulate the timeless sophistication of Audrey Hepburn's Holly Golightly this Halloween. Whether you're gracing a classy bash or serving up chic cocktails, your night is all about elegance. If old-world luxury calls to you, a Marie Antoinette get-up could add just the right amount of decadence."      />
    
      <HorizontalLine/>

<AdSenseAd/>

    
<HorizontalLine/>

<p style={captionStyle}>
Find tutorials below to guide your look & comment below to share your results & if they suited you!
</p>
<HorizontalLine/>
<ResponsiveYoutube src="https://www.youtube.com/embed/4TrE03gPC-s?si=xZ18HF_hu33nxFIG" title="AUDREY HEPBURN Makeup Tutorial | Breakfast At Tiffany's" />

<HorizontalLine/>

<AdSenseAd/>
<HorizontalLine/>


  <ResponsiveYoutube 
    src="https://www.youtube.com/embed/4zl7DbeiL5s?si=9MiNa7V0kYn3C0x_" 
    title="ICONIC 1960s Hairstyles🎀 '60s hair tutorial | jackie wyers" 
  />
  <HorizontalLine/>

<AdSenseAd/>
<HorizontalLine/>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

  <iframe
    style={{ boxShadow: '12px', borderRadius: '15px', width: '301px', height: '535px', margin: '1rem auto' }}
    src="https://www.youtube.com/embed/x6AQAHq6ihY"
    title="YouTube Shorts player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>

</div>

 
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
        title="Breakfast at Tiffany’s - Jackie Wyers Halloween Costume Quiz"
        description="Breakfast at Tiffany’s"
        blogContent={blogContent}
      />   
      
    

       </div>
      
  );
};

export default Quiz4Tiffany;
