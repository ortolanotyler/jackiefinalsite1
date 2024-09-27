import React, { useRef, useEffect } from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';

import { Helmet } from 'react-helmet';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import TakeQuizButton from '../../../Components/TakeQuizButton';
import ArticleTitle from '../../../Components/ArticleTitle';


const title = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/percytitle.png`;
const image1 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/percy1.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/percy2.jpeg`;
const image3 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/percy3.jpg`;
const image4 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/percy4.jpg`;



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

const Percy = () => {

  

  const websiteId = '10910';
  const blogRef = useRef(null);

 
  const headingStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: '100',
    fontFamily: 'Playfair Display, serif',
    color: '#000000',
    margin: '30px auto'
};


const paragraphStyle = {
  fontSize: '22px',
  color: '#000000',

  fontFamily: 'Georgia, serif',
  fontWeight: 'regular',

  margin: '2rem auto',

  maxWidth: '500px', // Consistent with the other paragraphs
  lineHeight: '1.6',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const linkStyle = {
  textDecoration: 'none', // Removes underline from links
  fontFamily: 'Playfair Display, serif',
  color: '#000000', // Inherits the color of the surrounding text
};

const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '10px',
    margin: '1rem auto'
};

const imageStyle = {
  display: 'block',
  margin: '1rem auto',
  borderRadius: '0px',
  maxWidth: '500px',
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
  maxWidth: '236px',
  height: '520px', // Maintains original height
  border: 'none',
  scrolling: 'no',
};

const captionStyle = {
  textAlign: 'center',
  fontSize: '1.1rem',
  fontFamily: 'Raleway, serif',
  fontWeight: 'normal',
  margin: '1rem auto',
  maxWidth: '100%',
  fontStyle: 'italic',
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
 
</Helmet>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
        <a href="/bridal" style={{ fontFamily: 'Arapey', fontSize: '1em', color: 'black', textDecoration: 'none' }}>
          BEAUTY // BRIDAL
        </a>

        
      </div>
      <ArticleTitle
  mainTitle="Is your dream wedding dress the Percy?"
  subTitle="Your Wedding Dress Quiz Results Say So!"
  author="Jackie Wyers"
  publishDate="June 25th, 2024"
/>
   
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
