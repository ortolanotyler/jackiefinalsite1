import React, { useRef, useEffect } from 'react';
import '../ExampleTutorial1.css';
import { Comments } from '@hyvor/hyvor-talk-react';

import { initGA, logPageView } from '../../../analytics';
import { Helmet } from 'react-helmet';
import SubscribeButton from '../../../Components/SubscribeButton';
import TextReveal from '../../../Components/TextReveal';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import AdSenseAd from '../../../Advertising/Ads';


const title = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/zaratitle.png`;
const image1 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/zara1.jpg`;
const image2 = `${process.env.PUBLIC_URL}/images/Quiz/Quiz3/zara2.jpg`;
const image3 = `${process.env.PUBLIC_URL}/images/Quiz/Quiz3/zara3.jpg`;
const image4 = `${process.env.PUBLIC_URL}/images/Quiz/Quiz3/zara4.jpg`;



const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
  <div>
    <div><TextReveal text='ZARA' /></div>
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);

const Zara = () => {

  useEffect(() => {
    initGA();
    logPageView('/zara');
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
      <title>Jackie Wyers Wedding - Zara Wedding Dress</title>
      <meta name="description" content="Is the Zara dress for you? Take the quiz to find out!" />
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
      <img src={title} alt="Is your dream wedding dress the Zara dress?" style={{ width: '100%' }} />
   
      <ResponsiveYoutube src="https://www.youtube.com/embed/UQU9Fufug4M?si=WUaFXipbTuAIKW_9" title="WEDDING DRESS SHOPPING & Bridal Makeup Trial with Jackie Wyers" />


<div style = {{textAlign: 'center', marginTop: '2rem' }}>
<SubscribeButton />
</div>

<p style={paragraphStyle}>
Thank you for taking the bridal dress quiz! Based on your results, you’d best suit the Zara dress by Eva Lendel, with its mermaid silhouette, strapless detailed corset, and pleated bottom part of the skirt. This dress is perfect for a Bridgerton inspired garden wedding theme full of florals.
</p>


<p style={paragraphStyle}>
Imagine celebrating your special day in a lush garden setting, surrounded by pastel florals and refined decor that echoes the elegance of a bygone era!
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

 <div style={{margin: '20px'}}>
                <AdSenseAd/>
                </div>



<h2 style = {headingStyle}>
Wedding Ideas:

</h2>

<p style={paragraphStyle}>
Venue: An exclusive private estate or a grand garden.
</p>


<p style={paragraphStyle}>
Decor: Choose classic white and gold or silver decor with luxurious fabrics, grand floral arrangements, and ornate garden furniture.
</p>

<p style={paragraphStyle}>
Dress Features: For a garden party theme, look for gowns with intricate floral details, pleating and corsetry.
</p>

<div style={gridContainerStyle}>
   <img src={image4} alt="Jackie Wyers Wedding Ora Dress" style={imageStyle} />
 </div>

 <div style={{margin: '20px'}}>
                <AdSenseAd/>
                </div>
<h2 style = {headingStyle}>
Bridal Muse:

</h2>

<p style={paragraphStyle}>
Channel the sophistication of old money elegance with a touch of Bridgerton's romantic flair. Take inspiration from Daphne Bridgerton's makeup in Season 2, where her look was more amped up compared to her barely-there look in Season 1.
</p>

<ResponsiveYoutube src="https://www.youtube.com/embed/WZ7aJmJAcbU?si=Hgkb4ZQcF4FW54e1" title="WEDDING DRESS SHOPPING & Bridal Makeup Trial with Jackie Wyers" />



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
        title="Is Your Dream Wedding Dress the Zara Dress?"
        description="Based on your quiz results, you’d best suit the Zara dress by Eva Lendel. Check it out!"
        blogContent={blogContent}
      />
    </div>
  );
};

export default Zara;
