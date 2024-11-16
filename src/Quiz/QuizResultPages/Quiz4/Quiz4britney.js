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


const Quiz4Britney = () => {




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

fontFamily: "EB Garamond, serif",
fontWeight: '400',
padding: '10px',
margin: '10px auto',


  lineHeight: '1.6',

};

const linkStyle = {
textDecoration: 'none', // Removes underline from links
fontFamily: "EB Garamond, serif",
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
  <title>Britney Spears Quiz Result – Hit Me Baby, One More Time! 🎀</title>
  <link rel="canonical" href="https://www.jackiewyers.beauty/quiz/halloween/britney" />

  <meta 
    name="description" 
    content="You got Britney Spears! Relive the iconic '90s schoolgirl look this Halloween with our makeup and style tips. Get tutorials inspired by Britney's 'Baby One More Time' and more!" 
  />
  
  <meta 
  name="keywords" 
  content="Britney Spears Halloween costume, Baby One More Time costume, Britney Spears makeup tutorial, iconic 90s Halloween costumes, Britney Spears schoolgirl costume, pop culture Halloween looks, 90s makeup tutorial, Jackie Wyers Britney quiz result, Sabrina Carpenter Halloween costume, Britney-inspired Halloween makeup, pop star Halloween outfits, nostalgic Halloween looks, Jackie Wyers Halloween quiz, Halloween 2024 girly costumes, pop diva Halloween costume, Britney Spears iconic looks, party Halloween outfit ideas" 
/>

  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="Britney Spears Quiz Result – Hit Me Baby, One More Time! 🎀" />
  <meta 
    property="og:description" 
    content="You got Britney Spears! Relive the iconic '90s schoolgirl look this Halloween with our makeup and style tips. Get tutorials inspired by Britney's 'Baby One More Time' and more!" 
  />
  <meta 
    property="og:image" 
    content="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1729372872/Britney_pf7ksp.jpg" 
  />
  <meta property="og:url" content="https://www.jackiewyers.beauty/quiz/halloween/britney" />
  <meta property="og:type" content="article" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:title" content="Britney Spears Quiz Result – Hit Me Baby, One More Time! 🎀" />
  <meta 
    name="twitter:description" 
    content="You got Britney Spears! Relive the iconic '90s schoolgirl look this Halloween with our makeup and style tips. Get tutorials inspired by Britney's 'Baby One More Time' and more!" 
  />
  <meta 
    name="twitter:image" 
    content="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1729372872/Britney_pf7ksp.jpg" 
  />
  <meta name="twitter:card" content="summary_large_image" />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Britney Spears Quiz Result – Hit Me Baby, One More Time! 🎀",
        "description": "You got Britney Spears! Relive the iconic '90s schoolgirl look this Halloween with our makeup and style tips. Get tutorials inspired by Britney's 'Baby One More Time' and more!",
        "image": "https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1729372872/Britney_pf7ksp.jpg",
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
          "@id": "https://www.jackiewyers.beauty/quiz/halloween/britney"
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
  mainTitle="The Result are in ... it's Britney, bitch!"
  subTitle="Read below for your best girly halloween costume"

/>


<SocialShare 
  url="https://www.jackiewyers.beauty/quiz/halloween/britney" 
  title="You got Britney! What do you think about your quiz results?" 
  imageUrl="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729372872/Britney_pf7ksp.jpg" 
/>

<HorizontalLine/>


<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729372872/Britney_pf7ksp.jpg" 
    alt="Britney Spears Halloween Inspo" 
    style={imageStyle} 
    data-pin-url="https://www.jackiewyers.beauty/quiz/halloween/britney"
    data-pin-media="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729372872/Britney_pf7ksp.jpg"
    data-pin-description="Britney Spears Halloween Inspo"
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
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/quiz/halloween/ysl&media=https://res.cloudinary.com/dvbubqhpp/image/upload/v1729372872/Britney_pf7ksp.jpg&description=Britney Spears Halloween Inspo')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>

<HorizontalLine/>


<AdSenseAd/>


<HorizontalLine/>


<p style={captionStyle}>

<a href = "/quiz/halloween">
Click here to take the quiz again </a>

</p>
     
<HorizontalLine/>




      <DropCap1 text="Step back into the '90s with Britney's classic schoolgirl look, combining comfort with iconic style. Your party-ready preferences mean you're all set to rock the night away. Feeling a bit more modern? Sabrina Carpenter's pop star chic awaits you. "      />
     <HorizontalLine/>
     <AdSenseAd/>
     <HorizontalLine/>

     <p style={captionStyle}>
Find tutorials below to guide your look & comment below to share your results & if they suited you!
</p>


    
<HorizontalLine/>
<ResponsiveYoutube src="https://www.youtube.com/embed/Mha-LluBOs8?si=rNgRnJV0Lc52kMgy" title="Britney Spears' 'baby one more time' makeup tutorial! ICONIC '90s makeup" />


<HorizontalLine/>

<AdSenseAd/>
<HorizontalLine/>


<ResponsiveYoutube src="https://www.youtube.com/embed/3zCKE1yS7Yw?si=-G7NY-CM0Zz3xxi_" title="Sabrina Carpenter Makeup Tutorial🎀👱🏼‍♀️THE BARBIE EFFECT" />

<HorizontalLine/>

<AdSenseAd/>
<HorizontalLine/>


<ResponsiveIframe src="https://shopmy.us/collections/public/903687?noHeader=true" title="Shop My Favorites" />
<AdSenseAd/>
<HorizontalLine/>











      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <a href="/girly-pop-halloween" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'none', textAlign: 'center' }}>
        see my roundup of girly halloween costumes here! →

          <img src={image6} alt="Barbie Movie Halloween Article" style={{ width: '100%', maxWidth: '300px', margin: '20px auto', display: 'block' }} />
        </a>
      </div>
      <HorizontalLine/>

      <div style = {{textAlign: 'center', margin: '2rem auto' }}>
<SubscribeButton />
</div>
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
        title="Hit Me Baby, One More Time! - Britney Spears Quiz Result"
        description="Britney Spears Quiz Result Halloween Quiz"
        blogContent={blogContent}
      />   
      
    

       </div>
      
  );
};

export default Quiz4Britney;
