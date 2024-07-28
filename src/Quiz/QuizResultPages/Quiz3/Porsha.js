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


const title = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/porshatitle.png`;
const image1 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/porsha1.jpg`;
const image2 = `${process.env.PUBLIC_URL}/images/Quiz/Quiz3/porsha2.jpg`;
const image3 = `${process.env.PUBLIC_URL}/images/Quiz/Quiz3/porsha3.jpg`;
const image4 = `${process.env.PUBLIC_URL}/images/Quiz/Quiz3/porsha4.jpg`;
const image5 = `${process.env.PUBLIC_URL}/images/Quiz/Quiz3/porsha5.jpg`;




const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
  <div>
    <div><TextReveal text='PORSHA' /></div>
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);

const Porsha = () => {

  useEffect(() => {
    initGA();
    logPageView('/porsha');
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
      <title>Jackie Wyers Wedding - Porsha Wedding Dress</title>
      <meta name="description" content="Is the Porsha dress for you? Take the quiz to find out!" />
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
      <img src={title} alt="Is your dream wedding dress the Porsha dress?" style={{ width: '100%' }} />
   
      <ResponsiveYoutube src="https://www.youtube.com/embed/UQU9Fufug4M?si=WUaFXipbTuAIKW_9" title="WEDDING DRESS SHOPPING & Bridal Makeup Trial with Jackie Wyers" />


<div style = {{textAlign: 'center', marginTop: '2rem' }}>
<SubscribeButton />
</div>

<p style={paragraphStyle}>
Thank you for taking the bridal dress quiz! Based on your results, you’d best suit the Porsha dress by Eva Lendel, with its beaded all-over strapless design, ballerina neckline, detailed corset, and detachable tulle overskirt with voluminous flowers. This dress is perfect for a vintage glamour wedding theme, exuding timeless elegance while being a little sexy!
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

<p style={paragraphStyle}>
Imagine celebrating your special day in a glamorous art deco venue, surrounded by luxurious details and a touch of old Hollywood charm!
</p>


<h2 style = {headingStyle}>
Wedding Ideas:

</h2>

<p style={paragraphStyle}>
Venue: A glamorous art deco venue.
</p>


<p style={paragraphStyle}>
Decor: Incorporate sleek vintage pieces, elegant candlelight, and luxurious fabrics with an overall 1920s influence. Think art deco patterns, geometric shapes, and opulent touches like gold accents and crystal chandeliers.
</p>

<p style={paragraphStyle}>
Dress Features: Look for gowns with intricate beading, classic silhouettes, and glamorous details like detachable overskirts.
</p>

<div style={gridContainerStyle}>
   <img src={image5} alt="Jackie Wyers Wedding Porsha Dress" style={imageStyle} />
 </div>

 <div style={{margin: '20px'}}>
                <AdSenseAd/>
                </div>
<h2 style = {headingStyle}>
Bridal Muse:

</h2>

<p style={paragraphStyle}>
Channel a modern 1920s look with a darker smokey eye, but opt for a lighter lip like the espresso makeup trend. This look is subtly inspired by Monica Bellucci and would look amazing with the glamorous dress style.
</p>

<ResponsiveYoutube src="https://www.youtube.com/embed/okXpvzknH9w?si=6HHzuB-PApCkU-cu" title="WEDDING DRESS SHOPPING & Bridal Makeup Trial with Jackie Wyers" />

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
        title="Is Your Dream Wedding Dress the Porsha Dress?"
        description="Based on your quiz results, you’d best suit the Elizabeth dress. Check it out!"
        blogContent={blogContent}
      />
    </div>
  );
};

export default Porsha;
