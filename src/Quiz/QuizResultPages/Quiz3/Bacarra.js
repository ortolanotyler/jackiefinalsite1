import React, { useRef, useEffect } from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';

import { Helmet } from 'react-helmet';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import TakeQuizButton from '../../../Components/TakeQuizButton';
import ArticleTitle from '../../../Components/ArticleTitle';


const title = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/Bacarra1.jpg`;
const image1 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/bacarra1.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/bacarra2.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/bacarra3.jpg`;
const image4 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/bacarra4.jpg`;



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

const Bacarra = () => {

 


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
  <title>Jackie Wyers Wedding - Bacarra Wedding Dress</title>
  <link rel="canonical" href="https://jackiewyers.beauty/bacarra" />

  <meta 
    name="description" 
    content="Is the Bacarra dress for you? Take the quiz to find out!" 
  />
  <meta 
    name="keywords" 
    content="wedding dress, Bacarra dress, Eva Lendel, bridal fashion, Jackie Wyers, fairytale wedding, bohemian wedding, romantic wedding, elegant wedding dresses, lace wedding gown, wedding trends 2024, luxury bridal, Bacarra gown, dreamy wedding dress, bridal couture, timeless wedding fashion, boho bridal style, bridal inspiration, Jackie Wyers bridal, celebrity wedding dress, wedding style guide, vintage wedding inspiration, whimsical wedding dresses, princess wedding gown, best bridal dresses, Bacarra wedding style, Jackie Wyers quiz, wedding planning, bridal beauty, designer wedding dresses, luxury wedding, modern bohemian wedding, sophisticated wedding fashion, romantic wedding ideas" 
  />

  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="Jackie Wyers Wedding - Bacarra Wedding Dress" />
  <meta 
    property="og:description" 
    content="Is the Bacarra dress for you? Take the quiz to find out!" 
  />
  <meta 
    property="og:image" 
    content="https://jackiewyers.beauty/Images/Quiz/Quiz3/Bacarra1.jpg" 
  />
  <meta property="og:url" content="https://jackiewyers.beauty/bacarra" />
  <meta property="og:type" content="article" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:title" content="Jackie Wyers Wedding - Bacarra Wedding Dress" />
  <meta 
    name="twitter:description" 
    content="Is the Bacarra dress for you? Take the quiz to find out!" 
  />
  <meta 
    name="twitter:image" 
    content="https://jackiewyers.beauty/Images/Quiz/Quiz3/Bacarra1.jpg" 
  />
  <meta name="twitter:card" content="summary_large_image" />

 


  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Jackie Wyers Wedding - Bacarra Wedding Dress",
        "description": "Is the Bacarra dress for you? Take the quiz to find out!",
        "image": "https://jackiewyers.beauty/Images/Quiz/Quiz3/Bacarra1.jpg",
        "author": {
          "@type": "Person",
          "name": "Jackie Wyers"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Jackie Wyers Beauty",
          "logo": {
            "@type": "ImageObject",
            "url": "https://jackiewyers.beauty/logo.png"
          }
        },
        "datePublished": "2024-07-27",
        "dateModified": "2024-09-20",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://jackiewyers.beauty/bacarra"
        }
      }
    `}
  </script>
</Helmet>

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <a href="/bridal" style={{ fontFamily: 'GFS Didot, serif', fontSize: '1rem', color: '#000000', textDecoration: 'none' }}>
          BEAUTY // BRIDAL
        </a>
      </div>

      <ArticleTitle
  mainTitle="Is your dream wedding dress the Bacarra?"
  subTitle="Your Wedding Dress Quiz Results Say So!"
  author="Jackie Wyers"
  publishDate="June 25th, 2024"
/>

   
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
