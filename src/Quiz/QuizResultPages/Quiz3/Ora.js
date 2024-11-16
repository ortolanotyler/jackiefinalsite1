import React, { useRef, useEffect } from 'react';
import '../ExampleTutorial1.css';
import { Comments } from '@hyvor/hyvor-talk-react';

import { Helmet } from 'react-helmet-async';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import TakeQuizButton from '../../../Components/TakeQuizButton';
import ArticleTitle from '../../../Components/ArticleTitle';


const title = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/oratitle.png`;
const image1 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/ora1.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/ora2.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/ora3.jpg`;
const image4 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/ora4.jpg`;



const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
 
  <div style={{
    padding: '10px 20px', // Consistent padding to prevent content from touching edges
    margin: '0 auto',
  }}>

    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
    </div>

  
);

const Ora = () => {



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
  fontWeight: '100',
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
  
  const iframeStyle = {
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
  <title>Jackie Wyers Wedding - Ora Wedding Dress</title>
  <meta name="description" content="Is the Ora dress for you? Take the quiz to find out!" />
  <meta name="keywords" content="wedding dress, Ora dress, Eva Lendel, bridal fashion, Jackie Wyers, old money wedding, beach wedding, elegant wedding" />
  <meta property="og:title" content="Jackie Wyers Wedding - Ora Wedding Dress" />
  <meta property="og:description" content="Is the Ora dress for you? Take the quiz to find out!" />
  <meta property="og:image" content={`${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/oratitle.png`} />
  <meta property="og:url" content="https://www.jackiewyers.beauty/ora" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Jackie Wyers Wedding - Ora Wedding Dress" />
  <meta name="twitter:description" content="Is the Ora dress for you? Take the quiz to find out!" />
  <meta name="twitter:image" content={`${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/oratitle.png`} />
  
</Helmet>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
        <a href="/bridal" style={{ fontFamily: 'Arapey', fontSize: '1em', color: 'black', textDecoration: 'none' }}>
          BEAUTY // BRIDAL
        </a>
      </div>

      <ArticleTitle
  mainTitle="Is your dream wedding dress the Ora?"
  subTitle="Your Wedding Dress Quiz Results Say So!"
  author="Jackie Wyers"
  publishDate="June 25th, 2024"
/>
   
      <ResponsiveYoutube src="https://www.youtube.com/embed/UQU9Fufug4M?si=WUaFXipbTuAIKW_9" title="WEDDING DRESS SHOPPING & Bridal Makeup Trial with Jackie Wyers" />


<div style = {{textAlign: 'center', marginTop: '2rem' }}>
<SubscribeButton />
</div>

<p style={paragraphStyle}>
Thank you for taking the bridal dress quiz! Based on your results, you’d best suit the Ora dress by Eva Lendel, with its pearl- strapped trumpet style, draped pearl necklace top, and lace-up back. This dress is perfect for an old money wedding theme, or beach mermaid motif depending on styling. Either way, this dress exudes sophistication and timeless elegance.
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



<p style={paragraphStyle}>
Imagine celebrating your special day at an exclusive private estate or an upscale beach venue, surrounded by luxurious details and classic charm!
</p>

<h2 style = {headingStyle}>
Wedding Ideas:

</h2>

<p style={paragraphStyle}>
Venue: An exclusive private estate or an upscale beach wedding.
</p>


<p style={paragraphStyle}>
Decor: Choose classic white and gold decor with luxurious fabrics and elegant floral arrangements. Take it a more beachy direction with blue bridesmaids dresses and nautical elements.
</p>

<p style={paragraphStyle}>
Dress Features: Look for gowns with pearl embellishments, classic silhouettes, and luxurious fabrics.
</p>

<div style={gridContainerStyle}>
   <img src={image4} alt="Jackie Wyers Wedding Ora Dress" style={imageStyle} />
 </div>


<h2 style = {headingStyle}>
Bridal Muse:

</h2>

<p style={paragraphStyle}>
Channel the sophistication of old money elegance with a modern twist. Take inspiration from timeless icons like Brigitte Bardot with a natural but polished makeup look. Brigitte Bardot is the perfect inspiration for her posh and often nautical looks that always exude class.
</p>

<ResponsiveYoutube src="https://www.youtube.com/embed/i8wHU_XsM2A?si=mtMHQ5ljJ0dlbSib" title="WEDDING DRESS SHOPPING & Bridal Makeup Trial with Jackie Wyers" />

<div style={{ textAlign: 'center', margin: '2rem 0' }}>
<TakeQuizButton />

</div>

       <div>
        <img src={signature} alt="Jackie Wyers Signature XoXo" style={{ width: '100%' }} />
      </div>
     
    

      <Comments website-id={websiteId} page-id={"quiz3"} />
     
      
    </div>
    
  );

  return (
    <div ref={blogRef}>
      <Card
        title="Is Your Dream Wedding Dress the Ora Dress?"
        description="Based on your quiz results, you’d best suit the Ora dress by Eva Lendel. Check it out!"
        blogContent={blogContent}
      />
    </div>
  );
};

export default Ora;
