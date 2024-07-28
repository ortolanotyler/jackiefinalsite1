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


const title = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/AbrilTitle.png`;
const image1 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/abril1.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/abril2.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/abril3.jpg`;
const image4 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/abril4.jpg`;


const nextarticle = `${process.env.PUBLIC_URL}/Images/Articles/GraceKelly/GraceKellyJackieWyers.jpg`;

const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
  <div>
    <div><TextReveal text='ABRIL' /></div>
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);

const Abril = () => {

  useEffect(() => {
    initGA();
    logPageView('/abril');
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
      <title>Jackie Wyers Wedding - Abril Wedding Dress</title>
      <meta name="description" content="Is the Abril dress for you? Take the quiz to find out!" />
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
      <img src={title} alt="Is your dream wedding dress the abril dress?" style={{ width: '100%' }} />
   
      <ResponsiveYoutube src="https://www.youtube.com/embed/UQU9Fufug4M?si=WUaFXipbTuAIKW_9" title="WEDDING DRESS SHOPPING & Bridal Makeup Trial with Jackie Wyers" />


<div style = {{textAlign: 'center', marginTop: '2rem' }}>
<SubscribeButton />
</div>

<p style={paragraphStyle}>
Thank you for taking the bridal dress quiz! Based on your results, you’d best suit the Abril dress by Eva Lendel, with its guipure lace-up detailed corset, heart-shaped neckline, and cold-shoulder long sleeves. This dress is perfect for a royal wedding.
</p>

<p style={paragraphStyle}>
Imagine walking down the aisle in a historic castle or grand ballroom, feeling like royalty!
</p>



<div style={gridContainerStyle}>
   <img src={image1} alt="Jackie Wyers Wedding Abril Dress" style={imageStyle} />
 </div>
 <div style={gridContainerStyle}>
   <img src={image2} alt="Jackie Wyers Wedding Abril Dress" style={imageStyle} />
 </div>
 <div style={gridContainerStyle}>
   <img src={image3} alt="Jackie Wyers Wedding Abril Dress" style={imageStyle} />
 </div>

 <div style={{margin: '20px'}}>
                <AdSenseAd/>
                </div>

<h2 style = {headingStyle}>
Wedding Ideas:

</h2>

<p style={paragraphStyle}>
Venue: A historic castle or grand ballroom.
</p>


<p style={paragraphStyle}>
Decor: Opt for rich colors, grand floral arrangements, and luxurious fabrics.
</p>

<p style={paragraphStyle}>

Dress Features: Choose dresses with intricate lace details, structured silhouettes, and regal elements.
</p>

<div style={gridContainerStyle}>
   <img src={image4} alt="Jackie Wyers Wedding Abril Dress" style={imageStyle} />
 </div>

 <div style={{margin: '20px'}}>
                <AdSenseAd/>
                </div>
<h2 style = {headingStyle}>
Bridal Muse:

</h2>

<p style={paragraphStyle}>
Grace Kelly’s bridal look may be great inspiration for you! See article below on how to get her regal look. YouTube tutorial coming soon!
</p>

<div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <a href="/gracekelly" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={nextarticle} alt="Grace Kelly Tutorial by Jackie Wyers" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', display: 'block' }} />
          GRACE KELLY →
        </a>
      </div>

      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
<TakeQuizButton />

</div>

       <div>
        <img src={signature} alt="Jackie Wyers Signature XoXo" style={{ width: '100%' }} />
      </div>
     
    

      <Comments website-id={websiteId} page-id={"quiz3"} />

      
                <AdSenseAd/>
                <AdSenseAd/>
                <AdSenseAd/>
      
    </div>
    
  );

  return (
    <div ref={blogRef}>
      <Card
        title="Is Your Dream Wedding Dress the Abril Dress?"
        description="Based on your quiz results, you’d best suit the Abril dress by Eva Lendel. Check it out!"
        blogContent={blogContent}
      />
    </div>
  );
};

export default Abril;
