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


const Quiz4Bridgerton = () => {




const websiteId = '10910';
const blogRef = useRef(null);


const headingStyle = {
  textAlign: 'center',
  fontSize: '2.5rem',
  fontWeight: '100',
  fontFamily: "'Playfair Display', serif",
  color: '#000000',
  maxWidth: '95%',

  margin: '30px auto'
};


const paragraphStyle = {
fontSize: '20px',
color: '#000000',

fontFamily: "EB Garamond, serif",
fontWeight: '400',
padding: '10px',
margin: '10px auto',


  lineHeight: '1.6',

};

const linkStyle = {
textDecoration: 'none', // Removes underline from links
fontFamily: "EB Garamond, serif",
fontWeight: '400',
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
  <title>Bridgerton Quiz Result – Regal & Elegant 🎀 | Jackie Wyers Halloween Costume Quiz</title>
  <link rel="canonical" href="https://www.jackiewyers.beauty/quiz/halloween/bridgerton" />

  <meta 
    name="description" 
    content="You got Bridgerton! Immerse yourself in the Regency era this Halloween with costume and makeup ideas inspired by Bridgerton. Tutorials for hair, makeup, and more from Jackie Wyers." 
  />
 <meta 
  name="keywords" 
  content="Bridgerton Halloween costume, Regency Halloween, Bridgerton makeup tutorial, historical Halloween costumes, royal ball Halloween look, Jackie Wyers Bridgerton quiz result, Kate Bridgerton costume, Daphne Bridgerton hair, historical-inspired costumes, romantic Halloween outfits, elegant Halloween looks, Regency-era fashion, Bridgerton party costume ideas, group Halloween costumes, royal Halloween looks, Bridgerton inspired Halloween 2024, Jackie Wyers Halloween quiz, pop culture Halloween costume, historical makeup tutorials, period drama costumes" 
/>

  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="Bridgerton Quiz Result – Regal & Elegant 🎀" />
  <meta 
    property="og:description" 
    content="You got Bridgerton! Immerse yourself in the Regency era this Halloween with costume and makeup ideas inspired by Bridgerton. Tutorials for hair, makeup, and more from Jackie Wyers." 
  />
  <meta 
    property="og:image" 
    content="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1729394664/Bridgerton_yqczb4.jpg" 
  />
  <meta property="og:url" content="https://www.jackiewyers.beauty/quiz/halloween/bridgerton" />
  <meta property="og:type" content="article" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:title" content="Bridgerton Quiz Result – Regal & Elegant 🎀" />
  <meta 
    name="twitter:description" 
    content="You got Bridgerton! Immerse yourself in the Regency era this Halloween with costume and makeup ideas inspired by Bridgerton. Tutorials for hair, makeup, and more from Jackie Wyers." 
  />
  <meta 
    name="twitter:image" 
    content="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1729394664/Bridgerton_yqczb4.jpg" 
  />
  <meta name="twitter:card" content="summary_large_image" />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Bridgerton Quiz Result – Regal & Elegant 🎀 | Jackie Wyers Halloween Costume Quiz",
        "description": "You got Bridgerton! Immerse yourself in the Regency era this Halloween with costume and makeup ideas inspired by Bridgerton. Tutorials for hair, makeup, and more from Jackie Wyers.",
        "image": "https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1729394664/Bridgerton_yqczb4.jpg",
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
          "@id": "https://www.jackiewyers.beauty/quiz/halloween/bridgerton"
        }
      }
    `}
  </script>

  {/* Google Analytics Script */}
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

      <ArticleTitle
  mainTitle="Dearest Reader ..."
  subTitle="I invite you to scroll below for your best girly halloween costume"




/>

<SocialShare 
  url="https://www.jackiewyers.beauty/quiz/halloween/bridgerton" 
  imageUrl="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729394664/Bridgerton_yqczb4.jpg" 
/>

<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729394664/Bridgerton_yqczb4.jpg" 
    alt="Bridgerton Costume Inspiration" 
    style={imageStyle} 
    data-pin-url="https://www.jackiewyers.beauty/quiz/halloween/bridgerton"
    data-pin-media="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729394664/Bridgerton_yqczb4.jpg"
    data-pin-description="Bridgerton Costume Inspiration"
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

<p style={captionStyle}>

<a href = "/quiz/halloween">
Click here to take the quiz again! </a>

</p>
<HorizontalLine/>

<AdSenseAd/>



     
      <div style = {{textAlign: 'center', margin: '2rem auto' }}>
<SubscribeButton />
</div>

<p style={{ margin: '20px auto', textAlign: 'center', fontSize: '0.75rem', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
</p>

      <DropCap1 text="Dearest Reader, prepare to immerse yourself in a Bridgerton-inspired costume brimming with romance and regal elegance. Perfect for any party, this ensemble adds a touch of historical sophistication to your Halloween festivities. Gather your friends for a group costume and feel as though you are at a Bridgerton ball—whether it's your first or simply your latest. For those seeking a subtler touch, consider channeling Elizabeth Bennet. Her iconic, understated elegance is sure to charm fellow literary aficionados and party-goers alike."        />
     <HorizontalLine/>
<br/>
     <p style={captionStyle}>
Find tutorials below to guide your look & comment below to share your results & if they suited you!
</p>
<br/>
<ResponsiveYoutube src="https://www.youtube.com/embed/Bkt-bffs_aQ?si=sFYif2q_-LJk9eKz" title="FRANCESCA BRIDGERTON inspired makeup tutorial🎀 jackie wyers"/>
<HorizontalLine/>
<AdSenseAd/>
<HorizontalLine/>
<ResponsiveYoutube src="https://www.youtube.com/embed/WZ7aJmJAcbU?si=9dM-yFKJVjgNUwDX" title="BRIDGERTON hairstyles season 2🐝 Kate, Edwina & Daphne + Pat McGrath x BRIDGERTON makeup review💸👀"/>
<HorizontalLine/>

<AdSenseAd/>

     
<HorizontalLine/>

<ResponsiveYoutube src="https://www.youtube.com/embed/DZw0obZLIb8?si=01wuo0NbrlPdMwEi" title="3 daphne BRIDGERTON hairstyles🐝 modern regency hair tutorial" />
<HorizontalLine/>

<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729394633/JackieWyersElizabethBennetInspiredMakeup_pvdvbx.jpg" 
    alt="Jackie Wyers Elizabeth Bennett Tutorial" 
    style={imageStyle} 
    data-pin-url="https://www.jackiewyers.beauty/quiz/halloween/bridgerton"
    data-pin-media="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729394633/JackieWyersElizabethBennetInspiredMakeup_pvdvbx.jpg"
    data-pin-description="Jackie Wyers Elizabeth Bennett Tutorial"
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
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/quiz/halloween/bridgerton&media=https://res.cloudinary.com/dvbubqhpp/image/upload/v1729394633/JackieWyersElizabethBennetInspiredMakeup_pvdvbx.jpg&description=Jackie Wyers Elizabeth Bennett Tutorial')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>
<AdSenseAd/>

<HorizontalLine/>

<ResponsiveYoutube src="https://www.youtube.com/embed/1NAwgv09ctY?si=Yc2u7T35dkJ93PxB" title="elizabeth bennet pride & prejudice makeup & hair tutorial" />
<HorizontalLine/>
<AdSenseAd/>












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
        title="Bridgerton Quiz Result - Jackie Wyers Halloween Costume Quiz"
        description="Should you dress up with a Bridgerton themed costume? The quiz says so!"
        blogContent={blogContent}
      />   
      
    

       </div>
      
  );
};

export default Quiz4Bridgerton;
