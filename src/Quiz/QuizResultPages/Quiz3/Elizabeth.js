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


const title = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/elizabethtitle.png`;
const image1 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/elizabeth1.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/elizabeth2.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/elizabeth3.jpg`;
const image4 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/elizabeth5.jpg`;
const image5 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/elizabeth4.jpg`;




const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
  <div>
    <div><TextReveal text='ELIZABETH' /></div>
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);

const Elizabeth = () => {

  useEffect(() => {
    initGA();
    logPageView('/elizabeth');
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
      <title>Jackie Wyers Wedding - Elizabeth Wedding Dress</title>
      <meta name="description" content="Is the Elizabeth dress for you? Take the quiz to find out!" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-RT6GR7JXYG"></script>
                <script>
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-RT6GR7JXYG');
                    `}
                </script>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4660168246825318" crossorigin="anonymous"></script>
            </Helmet>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
        <a href="/bridal" style={{ fontFamily: 'Arapey', fontSize: '1em', color: 'black', textDecoration: 'none' }}>
          BEAUTY // BRIDAL
        </a>
      </div>
      <img src={title} alt="Is your dream wedding dress the Elizabeth dress?" style={{ width: '100%' }} />
   
      <ResponsiveYoutube src="https://www.youtube.com/embed/UQU9Fufug4M?si=WUaFXipbTuAIKW_9" title="WEDDING DRESS SHOPPING & Bridal Makeup Trial with Jackie Wyers" />


<div style = {{textAlign: 'center', marginTop: '2rem' }}>
<SubscribeButton />
</div>

<p style={paragraphStyle}>
Thank you for taking the bridal dress quiz! Based on your results, you’d best suit the Elizabeth dress by Verander West, with its grand, multi-piece design, champagne hue, and intricate corsetry. This dress is perfect for a fairytale wedding theme, exuding romance and whimsy, and it happens to be the dress I chose for my wedding!
</p>


<p style={paragraphStyle}>
Imagine celebrating your special day on an enchanted terrace surrounded by lush greenery, a stone villa, delicate wildflowers, with DIY decor to ground the ceremony in creativity and fun.

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
 <div style={gridContainerStyle}>
   <img src={image4} alt="Jackie Wyers Wedding Percy Dress" style={imageStyle} />
 </div>

 <div style={{margin: '20px'}}>
                <AdSenseAd/>
                </div>



<h2 style = {headingStyle}>
Wedding Ideas:

</h2>

<p style={paragraphStyle}>
Venue: An enchanted terrace or whimsical garden.
</p>


<p style={paragraphStyle}>
Decor: Use twinkling fairy lights, tea lights, and whimsical or classic floral arrangements to lean into the regal elements.
</p>

<p style={paragraphStyle}>
Dress Features: Look for gowns with romantic lace details, large flowing skirts, and delicate embellishments.
</p>

<div style={gridContainerStyle}>
   <img src={image5} alt="Jackie Wyers Wedding Ora Dress" style={imageStyle} />
 </div>

 <div style={{margin: '20px'}}>
                <AdSenseAd/>
                </div>
<h2 style = {headingStyle}>
Bridal Muse:

</h2>

<p style={paragraphStyle}>
Channel the romantic and ethereal elegance of Christine Daaé from The Phantom of the Opera with big hair to balance out the huge skirt. I also chose to add a bit more of a bohemian feel inspired by Sophie from Mamma Mia with a handmade floral veil.
</p>

<ResponsiveYoutube src="https://www.youtube.com/embed/3bnhjdjNNxo?si=214dwD1m_j0fvrvB" title="WEDDING DRESS SHOPPING & Bridal Makeup Trial with Jackie Wyers" />

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
        title="Is Your Dream Wedding Dress the Elizabeth Dress?"
        description="Based on your quiz results, you’d best suit the Elizabeth dress. Check it out!"
        blogContent={blogContent}
      />
    </div>
  );
};

export default Elizabeth;
