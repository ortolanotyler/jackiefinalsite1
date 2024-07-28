import React, { useRef, useEffect } from 'react';
import '../ExampleTutorial1.css';
import { Comments } from '@hyvor/hyvor-talk-react';

import { initGA, logPageView } from '../../../analytics';
import { Helmet } from 'react-helmet';
import SubscribeButton from '../../../Components/SubscribeButton';
import TextReveal from '../../../Components/TextReveal';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import AdSenseAd from '../../../Advertising/Ads';
import TakeQuizButton from '../../../Components/TakeQuizButton';


const title = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/BacarraTitle.png`;
const image1 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/bacarra1.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/bacarra2.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/bacarra3.jpg`;
const image4 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/bacarra4.jpg`;



const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
  <div>
    <div><TextReveal text='BACARRA' /></div>
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);

const Bacarra = () => {

  useEffect(() => {
    initGA();
    logPageView('/bacarra');
  }, []);


  const websiteId = '10910';
  const blogRef = useRef(null);

  const headingStyle = {
    textAlign: 'center',
    fontSize: '32px',
    fontWeight: 'normal',
    fontFamily: 'GFS Didot, serif',
    color: 'black',
    margin: '1rem',
    lineHeight: '1.25',

  };

  const paragraphStyle = {
    fontSize: '20px',
    fontFamily: 'GFS Didot, serif',
    margin: '1rem 1.5rem',
    marginTop: '1rem',
    marginBottom: '1rem',
    maxWidth: '600px',
    lineHeight: '1.5',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1rem',
    margin: '1rem 0'
};

const imageStyle = {
  display: 'block',
  margin: '0 auto',
  maxWidth: '600px',
  height: 'auto'
};



  const blogContent = (
    <div className="container">
      <Helmet>
  <title>Jackie Wyers Wedding - Bacarra Wedding Dress</title>
  <meta name="description" content="Is the Bacarra dress for you? Take the quiz to find out!" />
  <meta name="keywords" content="wedding dress, Bacarra dress, Eva Lendel, bridal fashion, Jackie Wyers, fairytale wedding, bohemian wedding, romantic wedding" />
  <meta property="og:title" content="Jackie Wyers Wedding - Bacarra Wedding Dress" />
  <meta property="og:description" content="Is the Bacarra dress for you? Take the quiz to find out!" />
  <meta property="og:image" content={`${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/BacarraTitle.png`} />
  <meta property="og:url" content="https://jackiewyers.beauty/bacarra" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Jackie Wyers Wedding - Bacarra Wedding Dress" />
  <meta name="twitter:description" content="Is the Bacarra dress for you? Take the quiz to find out!" />
  <meta name="twitter:image" content={`${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/BacarraTitle.png`} />
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-RT6GR7JXYG"></script>
  <script>
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-RT6GR7JXYG');
    `}
  </script>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4660168246825318" crossOrigin="anonymous"></script>
</Helmet>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
        <a href="/bridal" style={{ fontFamily: 'Arapey', fontSize: '1em', color: 'black', textDecoration: 'none' }}>
          BEAUTY // BRIDAL
        </a>
      </div>
      <img src={title} alt="Is your dream wedding dress the bacarra dress?" style={{ width: '100%' }} />
   
      <ResponsiveYoutube src="https://www.youtube.com/embed/UQU9Fufug4M?si=WUaFXipbTuAIKW_9" title="WEDDING DRESS SHOPPING & Bridal Makeup Trial with Jackie Wyers" />


<div style = {{textAlign: 'center', marginTop: '2rem' }}>
<SubscribeButton />
</div>

<p style={paragraphStyle}>
Thank you for taking the bridal dress quiz! Based on your results, you’d best suit the Bacarra dress by Eva Lendel, with its lace- up A-silhouette design, cold-shoulder lace sleeves, and split skirt, this dress is perfect for a fairytale wedding, or a bohemian wedding.
</p>

<p style={paragraphStyle}>
Imagine saying your vows in an enchanted garden surrounded by lush greenery and delicate wildflowers!
</p>



<div style={gridContainerStyle}>
   <img src={image1} alt="Jackie Wyers Wedding Bacarra Dress" style={imageStyle} />
 </div>
 <div style={gridContainerStyle}>
   <img src={image2} alt="Jackie Wyers Wedding Bacarra Dress" style={imageStyle} />
 </div>
 <div style={gridContainerStyle}>
   <img src={image3} alt="Jackie Wyers Wedding Bacarra Dress" style={imageStyle} />
 </div>

 <div style={{margin: '20px'}}>
                <AdSenseAd/>
                </div>

<h2 style = {headingStyle}>
Wedding Ideas:

</h2>

<p style={paragraphStyle}>
Venue: An enchanted garden or farm with rustic Elements.

</p>


<p style={paragraphStyle}>
Decor: Use twinkling fairy lights, vintage lanterns, and whimsical floral arrangements. 

</p>

<p style={paragraphStyle}>

Dress Features: Look for dresses with romantic lace details, flowing skirts, and delicate embellishments.
</p>

<div style={gridContainerStyle}>
   <img src={image4} alt="Jackie Wyers Wedding Bacarra Dress" style={imageStyle} />
 </div>

 <div style={{margin: '20px'}}>
                <AdSenseAd/>
                </div>
<h2 style = {headingStyle}>
Bridal Muse:

</h2>

<p style={paragraphStyle}>
  Taylor Hill’s bridal look may be great inspiration for you!
</p>

<ResponsiveYoutube src="https://www.youtube.com/embed/LtTc3qCVtdE?si=Okv3OfGC3t23SX8B" title="WEDDING DRESS SHOPPING & Bridal Makeup Trial with Jackie Wyers" />

<div style={{ textAlign: 'center', margin: '2rem 0' }}>
<TakeQuizButton />

</div>

       <div>
        <img src={signature} alt="Jackie Wyers Signature XoXo" style={{ width: '100%' }} />
      </div>
     
    

      <Comments website-id={websiteId} page-id={"quiz3"} />

      <div style={{margin: '20px'}}>
                <AdSenseAd/>
                </div><div style={{margin: '20px'}}>
                <AdSenseAd/>
                </div><div style={{margin: '20px'}}>
                <AdSenseAd/>
                </div>
      
    </div>
    
  );

  return (
    <div ref={blogRef}>
      <Card
        title="Is Your Dream Wedding Dress the Bacarra Dress?"
        description="Based on your quiz results, you’d best suit the Bacarra dress by Eva Lendel, with its lace- up A-silhouette design, cold-shoulder lace sleeves, and split skirt. It is perfect for a fairytale wedding, or a bohemian wedding."
        blogContent={blogContent}
      />
    </div>
  );
};

export default Bacarra;
