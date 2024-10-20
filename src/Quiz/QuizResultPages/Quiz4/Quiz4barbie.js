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


const Quiz4Barbie = () => {




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
  <title>Hi Barbie! - Jackie Wyers Halloween Costume Quiz 🎀</title>
  <link rel="canonical" href="https://www.jackiewyers.beauty/quiz/halloween/barbie" />

  <meta 
    name="description" 
    content="Dive into Barbie's world of endless possibilities where pink lips and bright fashion shine. Explore Halloween looks inspired by Barbie, Glinda, and more in this fun quiz by Jackie Wyers." 
  />
  <meta 
    name="keywords" 
    content="Barbie Halloween costume, Barbie makeup tutorial, Barbie movie makeup, pink glam Halloween, Jackie Wyers quiz, Halloween Barbie style, Barbie Halloween 2024, Glinda makeup tutorial, Jackie Wyers Barbie quiz result, pink aesthetic Halloween, Margot Robbie Barbie makeup, Glinda Wicked makeup, Barbiecore fashion, Barbie Peaches and Cream, 90s Barbie costume, classic Barbie look, Halloween quiz results, pop culture Halloween costumes, girly Halloween costumes 2024" 
  />

  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="Hi Barbie! - Jackie Wyers Halloween Costume Quiz 🎀" />
  <meta 
    property="og:description" 
    content="Dive into Barbie's world of endless possibilities where pink lips and bright fashion shine. Explore Halloween looks inspired by Barbie, Glinda, and more in this fun quiz by Jackie Wyers." 
  />
  <meta 
    property="og:image" 
    content="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729371414/MovieBarbiePolaroid_2_asagw8.jpg" 
  />
  <meta property="og:url" content="https://www.jackiewyers.beauty/quiz/halloween/barbie" />
  <meta property="og:type" content="article" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:title" content="Hi Barbie! - Jackie Wyers Halloween Costume Quiz 🎀" />
  <meta 
    name="twitter:description" 
    content="Dive into Barbie's world of endless possibilities where pink lips and bright fashion shine. Explore Halloween looks inspired by Barbie, Glinda, and more in this fun quiz by Jackie Wyers." 
  />
  <meta 
    name="twitter:image" 
    content="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729371414/MovieBarbiePolaroid_2_asagw8.jpg" 
  />
  <meta name="twitter:card" content="summary_large_image" />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Hi Barbie! - Jackie Wyers Halloween Costume Quiz 🎀",
        "description": "Dive into Barbie's world of endless possibilities where pink lips and bright fashion shine. Explore Halloween looks inspired by Barbie, Glinda, and more in this fun quiz by Jackie Wyers.",
        "image": "https://res.cloudinary.com/dvbubqhpp/image/upload/v1729371414/MovieBarbiePolaroid_2_asagw8.jpg",
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
          "@id": "https://www.jackiewyers.beauty/quiz/halloween/barbie"
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
  mainTitle="Hi Barbie!"
  subTitle="Read below for your best girly halloween costume"


/>
<SocialShare 
  url="https://www.jackiewyers.beauty/quiz/halloween/barbie" 
  title="Barbie Halloween Costume Quiz Result" 
  imageUrl="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729371414/MovieBarbiePolaroid_2_asagw8.jpg" 
/>
<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729370578/ClassicBarbiePolaroid_gglajb.jpg" 
    alt="VICTORIA’S SECRET ANGEL makeup🎀 2014 girly tumblr aesthetic!" 
    style={imageStyle} 
    data-pin-url="https://www.jackiewyers.beauty/quiz/halloween/ysl"
    data-pin-media="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729370578/ClassicBarbiePolaroid_gglajb.jpg"
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

<p style={captionStyle}>

<a href = "/quiz/halloween">
Click here to take the quiz again </a>

</p>
<HorizontalLine/>




     
      <div style = {{textAlign: 'center', margin: '2rem auto' }}>
<SubscribeButton />
</div>


<DropCap1 text="Dive into Barbie's world of endless possibilities where pink lips and bright fashion shine. Whether you're channeling Barbie from her latest movie adventure, classic Barbie, or the iconic peaches and cream Barbie, your Halloween is set to be a vibrant pink paradise. For those musically inclined, why not give Glinda a whirl for some good witch glam in a similar, pink and bubbly aesthetic?      "
      />
     <HorizontalLine/>

    

<AdSenseAd/>

<HorizontalLine/>

<p style={captionStyle}>
Find tutorials below to guide your look & comment below to share your results & if they suited you!
</p>

<ResponsiveYoutube src="https://www.youtube.com/embed/JfaND9n9ZCU?si=InxUvw0qK0rL5RdC" title="Margot Robbie BARBIE MOVIE Makeup🛼💖👱🏻‍♀️ + '90s Roller Skate Barbie Costume!" />
<HorizontalLine/>
      <AdSenseAd/>
      <HorizontalLine/>

<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729371414/MovieBarbiePolaroid_2_asagw8.jpg" 
    alt="Barbie Movie Halloween 2024" 
    style={imageStyle} 
    data-pin-url="https://www.jackiewyers.beauty/quiz/halloween/barbie"
    data-pin-media="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729371414/MovieBarbiePolaroid_2_asagw8.jpg"
    data-pin-description="Barbie Movie Halloween 2024"
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
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/quiz/halloween/barbie&media=https://res.cloudinary.com/dvbubqhpp/image/upload/v1729370578/ClassicBarbiePolaroid_gglajb.jpg&description=Barbie Movie Halloween 2024')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>
<HorizontalLine/>
      <AdSenseAd/>
      <HorizontalLine/>
<div style={{ position: 'relative', display: 'inline-block' }}>
    <a href = '/barbie-doll' target='_blank' rel = 'noreferrer'>
    <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729370578/7EA6721B-A08D-488A-9231-48F411834539_yk0wcc.jpg" 
    alt="Barbie Peaches and Cream" 
    style={imageStyle} 
    data-pin-url="https://www.jackiewyers.beauty/quiz/halloween/barbie"
    data-pin-media="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729370578/7EA6721B-A08D-488A-9231-48F411834539_yk0wcc.jpg"
    data-pin-description="Barbie Peaches and Cream"
  />
    </a>
 
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
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://res.cloudinary.com/dvbubqhpp/image/upload/v1729370578/7EA6721B-A08D-488A-9231-48F411834539_yk0wcc.jpg&description=Barbie Peaches and Cream by Jackie Wyers')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>
<p style = {captionStyle}>
    <a
    style = {{
        color: '#000000',
        textDecoration: 'none'
    }}
    href = "/margotbarbie" target = "_blank" rel = 'noreferrer'>
    Find more barbie makeup inspiration here
    </a>
</p>

<HorizontalLine/>
      <AdSenseAd/>
      <HorizontalLine/>
<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729370578/Glinda_uldnab.jpg" 
    alt="Ariana Grande Makeup Wicked Movie Jackie Wyers Tutorial" 
    style={imageStyle} 
    data-pin-url="https://www.jackiewyers.beauty/quiz/halloween/barbie"
    data-pin-media="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729370578/Glinda_uldnab.jpg"
    data-pin-description="Ariana Grande Makeup Wicked Movie Jackie Wyers Tutorial"
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
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://res.cloudinary.com/dvbubqhpp/image/upload/v1729370578/Glinda_uldnab.jpg&description=Ariana Grande Makeup Wicked Movie Jackie Wyers Tutorial')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>

<HorizontalLine/>
      <AdSenseAd/>
      <HorizontalLine/>

<ResponsiveYoutube src="https://www.youtube.com/embed/hRtIux714T0?si=vrShXaN9FSvjGcO6" title="WICKED MAKEUP💖💚 Ariana Grande’s GLINDA & YASSified ELPHABA🫦" />
<HorizontalLine/>
      <AdSenseAd/>
      <HorizontalLine/>












      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <a href="/girly-pop-halloween" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'none', textAlign: 'center' }}>
        see my roundup of girly halloween costumes here! →

          <img src={image6} alt="Barbie Movie Halloween Article" style={{ width: '100%', maxWidth: '300px', margin: '20px auto', display: 'block' }} />
        </a>
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
  title="Hi Barbie! - Jackie Wyers Halloween Costume Quiz"
  description="Dive into Barbie's world of endless possibilities where pink lips and bright fashion shine."
        blogContent={blogContent}
      />   
      
    

       </div>
      
  );
};

export default Quiz4Barbie;
