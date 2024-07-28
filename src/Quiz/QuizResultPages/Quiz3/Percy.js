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


const title = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/percytitle.png`;
const image1 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/percy1.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/percy2.jpeg`;
const image3 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/percy3.jpg`;
const image4 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/percy4.jpg`;



const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
  <div>
    <div><TextReveal text='PERCY' /></div>
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);

const Percy = () => {

  useEffect(() => {
    initGA();
    logPageView('/percy');
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
  <title>Jackie Wyers Wedding - Percy Wedding Dress</title>
  <meta name="description" content="Is the Percy dress for you? Take the quiz to find out!" />
  <meta name="keywords" content="wedding dress, Percy dress, Eva Lendel, bridal fashion, Jackie Wyers, classic wedding, vintage manor wedding, elegant wedding" />
  <meta property="og:title" content="Jackie Wyers Wedding - Percy Wedding Dress" />
  <meta property="og:description" content="Is the Percy dress for you? Take the quiz to find out!" />
  <meta property="og:image" content={`${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/percytitle.png`} />
  <meta property="og:url" content="https://jackiewyers.beauty/percy" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Jackie Wyers Wedding - Percy Wedding Dress" />
  <meta name="twitter:description" content="Is the Percy dress for you? Take the quiz to find out!" />
  <meta name="twitter:image" content={`${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/percytitle.png`} />
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
      <img src={title} alt="Is your dream wedding dress the percy dress?" style={{ width: '100%' }} />
   
      <ResponsiveYoutube src="https://www.youtube.com/embed/UQU9Fufug4M?si=WUaFXipbTuAIKW_9" title="WEDDING DRESS SHOPPING & Bridal Makeup Trial with Jackie Wyers" />


<div style = {{textAlign: 'center', marginTop: '2rem' }}>
<SubscribeButton />
</div>

<p style={paragraphStyle}>
Thank you for taking the bridal dress quiz! Based on your results, you’d best suit the Percy dress by Eva Lendel, with its ballerina neckline, asymmetric wrap waistline, and voluminous overskirt. This dress is perfect for a classic wedding that represents elegance.
</p>

<p style={paragraphStyle}>
Imagine celebrating your special day in a vintage manor or a classic ballroom, surrounded by sophistication!
</p>



<div style={gridContainerStyle}>
   <img src={image1} alt="Jackie Wyers Wedding Percy Dress" style={imageStyle} />
 </div>
 <div style={gridContainerStyle}>
   <img src={image2} alt="Jackie Wyers Wedding Percy Dress" style={imageStyle} />
 </div>
 <div style={gridContainerStyle}>
   <img src={image3} alt="Jackie Wyers Wedding Percy Dress" style={imageStyle} />
 </div>

 
 <div style = {{ textAlign: 'center', marginTop: '2rem' }}>
<AdSenseAd/>

    </div>
              

<h2 style = {headingStyle}>
Wedding Ideas:

</h2>

<p style={paragraphStyle}>
Venue: A vintage manor or classic ballroom.
</p>


<p style={paragraphStyle}>
Decor: Incorporate elegant vintage pieces, candlelight, and luxurious fabrics.
</p>

<p style={paragraphStyle}>

Dress Features: Look for gowns with timeless silhouettes and vintage-inspired details like ruching for Marilyn Monroe curves. If you prefer more modesty, Audrey Hepburn is great inspiration in the film “Funny Face.”
</p>

<div style={gridContainerStyle}>
   <img src={image4} alt="Jackie Wyers Wedding Percy Dress" style={imageStyle} />
 </div>

 <div style = {{ textAlign: 'center', marginTop: '2rem' }}>
<AdSenseAd/>

    </div>
               
<h2 style = {headingStyle}>
Bridal Muse:

</h2>

<p style={paragraphStyle}>
Speaking of Audrey, Ariana Grande’s bridal look is a modern take on the 1950’s-1960’s film star that goes beautifully with a dress like Percy.
</p>

<ResponsiveYoutube src="https://www.youtube.com/embed/kBDsUhn9QB4?si=3ncwlBaqndvbQYVc" title="WEDDING DRESS SHOPPING & Bridal Makeup Trial with Jackie Wyers" />

<div style={{ textAlign: 'center', margin: '2rem 0' }}>
<TakeQuizButton />

</div>

       <div>
        <img src={signature} alt="Jackie Wyers Signature XoXo" style={{ width: '100%' }} />
      </div>
     
    

      <Comments website-id={websiteId} page-id={"quiz3"} />

<div style = {{  marginTop: '2rem' }}>
<AdSenseAd/>

    </div>
    <div style = {{  marginTop: '2rem' }}>
<AdSenseAd/>

    </div>
    <div style = {{ marginTop: '2rem' }}>
<AdSenseAd/>

    </div>a
               
      
    </div>
    
  );

  return (
    <div ref={blogRef}>
      <Card
        title="Is Your Dream Wedding Dress the Percy Dress?"
        description="Based on your quiz results, you’d best suit the Percy dress by Eva Lendel. Check it out!"
        blogContent={blogContent}
      />
    </div>
  );
};

export default Percy;
