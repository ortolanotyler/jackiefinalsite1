import React, { useRef, useEffect } from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';


import SubscribeButton from '../../Components/SubscribeButton';
import { Helmet } from 'react-helmet-async';
import ResponsiveYoutube from '../../Components/ResponsiveYoutube';
import DropCap1 from './DropCap1';
import ArticleTitle from '../../Components/ArticleTitle';
import NextArticle from '../../Components/NextArticleComponent';
import SocialShare from '../../Home/SocialShare';


const title = `${process.env.PUBLIC_URL}/Images/Articles/MammaMia/mammamiathumb.png`;
const image1 = `${process.env.PUBLIC_URL}/Images/Articles/MammaMia/1.png`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/MammaMia/2.png`;
const image3 = `${process.env.PUBLIC_URL}/Images/Articles/MammaMia/3.png`;
const image4 = `${process.env.PUBLIC_URL}/Images/Articles/MammaMia/4.png`;
const image5 = `${process.env.PUBLIC_URL}/Images/Articles/MammaMia/5.jpg`;
const image6 = `${process.env.PUBLIC_URL}/Images/Articles/MammaMia/6.jpg`;
const image7 = `${process.env.PUBLIC_URL}/Images/Articles/MammaMia/7.jpg`;


const articleUrl = 'https://www.jackiewyers.beauty/diy-flowers';
const articleTitle = 'Mamma Mia Inspired DIY Bridal Flower Pins - Jackie Wyers';
const articleImageUrl = 'https://www.jackiewyers.beauty/Images/Articles/MammaMia/mammamiathumb.png';


const nextarticle = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/fairytalethumbnail.jpg`;
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
  
  const DIYFlowers = () => {
  

  
  
    const websiteId = '10910';
    const blogRef = useRef(null);
  

  const listStyle = {
    fontSize: '20px',
    fontFamily: 'Playfair Display, serif',
    margin: '1rem 1.5rem',
    paddingLeft: '1.5rem',
    maxWidth: '500px',
    lineHeight: '1.5',
    marginLeft: 'auto',
    marginRight: 'auto',
    listStyleType: 'disc',
  };
  
  const headingStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: '100',
    fontFamily: "'Playfair Display', sans-serif",
    color: '#000000',
    maxWidth: '95%',
  
    margin: '30px auto'
  };
  
  

  
  const paragraphStyle = {
  fontSize: '20px',
  color: '#000000',
  
  fontFamily: "'Playfair Display', sans-serif",
  fontWeight: '100',
  padding: '10px',
  margin: '10px auto',
  
  
    lineHeight: '1.6',
  
  };
  
  const linkStyle = {
  textDecoration: 'none', // Removes underline from links
  fontFamily: "'Georgia', serif",
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
  <title>Mamma Mia Inspired DIY Bridal Flower Pins - Jackie Wyers</title>
  <link rel="canonical" href="https://www.jackiewyers.beauty/diy-flowers" />

  <meta name="description" content="Learn how to create your own DIY bridal flower pins inspired by Mamma Mia for your wedding day. Jackie Wyers shares a step-by-step guide to make these beautiful accessories." />
  <meta name="keywords" content="DIY bridal flower pins, Mamma Mia wedding, Jackie Wyers, wedding DIY, bridal accessories, wedding inspiration, bridal beauty, wedding tips, bridal hair, destination wedding, DIY bride, flower crown, boho wedding, Mamma Mia flower pins, wedding crafts, Greek island wedding style, romantic bridal looks, Sophie Sheridan, flower comb tutorial, bridal hair accessories" />

  <meta property="og:title" content="Mamma Mia Inspired DIY Bridal Flower Pins - Jackie Wyers" />
  <meta property="og:description" content="Learn how to create your own DIY bridal flower pins inspired by Mamma Mia for your wedding day. Jackie Wyers shares a step-by-step guide to make these beautiful accessories." />
  <meta property="og:image" content="https://www.jackiewyers.beauty/Images/Articles/MammaMia/mammamiathumb.png" />
  <meta property="og:url" content="https://www.jackiewyers.beauty/diy-flowers" />
  <meta name="twitter:title" content="Mamma Mia Inspired DIY Bridal Flower Pins - Jackie Wyers" />
  <meta name="twitter:description" content="Learn how to create your own DIY bridal flower pins inspired by Mamma Mia for your wedding day. Jackie Wyers shares a step-by-step guide to make these beautiful accessories." />
  <meta name="twitter:image" content="https://www.jackiewyers.beauty/Images/Articles/MammaMia/mammamiathumb.png" />
  <meta name="twitter:card" content="summary_large_image" />




  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Mamma Mia Inspired DIY Bridal Flower Pins - Jackie Wyers",
        "description": "Learn how to create your own DIY bridal flower pins inspired by Mamma Mia for your wedding day. Jackie Wyers shares a step-by-step guide to make these beautiful accessories.",
        "image": "https://www.jackiewyers.beauty/Images/Articles/MammaMia/mammamiathumb.png",
        "author": {
          "@type": "Person",
          "name": "Jackie Wyers"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Jackie Wyers Beauty",
          "logo": {
            "@type": "ImageObject",
               "url": "${process.env.PUBLIC_URL}/jwlogo3.png"
          }
        },
        "datePublished": "2024-07-27",
        "dateModified": "2024-09-20",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.jackiewyers.beauty/diy-flowers"
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
  mainTitle="Mamma Mia Inspired DIY Bridal Flower Pins"
  subTitle="Add a touch of Mamma Mia to your Big Day!"
  author="Jackie Wyers"
  publishDate = "June 29th, 2024"
/>

​   <SocialShare url={articleUrl} title={articleTitle} imageUrl={articleImageUrl} />

<div
style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}
> 
<iframe
  style={{ boxShadow: '12px', borderRadius: '15px', width: '301px', height: '535px' }}
  src="https://www.youtube.com/embed/yYgf8_MALNo"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>


</div>

<div style = {{textAlign: 'center', margin: '10px auto' }}>
<SubscribeButton />
</div>

<p style={{ margin: '20px auto', textAlign: 'center', fontSize: '1.1rem', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
</p>


  <DropCap1 text="Hey lovelies and Brides-To-Be! Today, I'm sharing how I quickly made my flower crown veil and separate flower pins inspired by Sophie from Mamma Mia that I wore on my wedding day." />  



<p style={paragraphStyle}>I blended several inspirations to achieve my whimsical bridal look: <a style={linkStyle} href="https://www.imdb.com/title/tt0308674/" target="_blank" rel="noreferrer">Christine Daae’s corseted style</a> and big hair, <a style={linkStyle} href="https://www.instagram.com/taylor_hill/" target="_blank" rel="noreferrer">Taylor Hill-inspired makeup</a>, and of course, a touch of Sophie with DIY flower pins. <a style={linkStyle} href="https://www.imdb.com/title/tt0795421/" target="_blank" rel="noreferrer">Mamma Mia</a> has always been one of my favorite cinematic bridal looks, as seen in the throwback tutorial below!</p>

<ResponsiveYoutube src="https://www.youtube.com/embed/2mjLtM5DBz8?si=baVLKPYFUeVbJjvY" title="Sharon Tate Iconic 60's Bridal Makeup Tutorial" />

<p style={paragraphStyle}>Let’s create a subtly inspired nod to the film with this easy DIY for the <a style={linkStyle} href="https://www.pinterest.com/ideas/diy-wedding-decor/" target="_blank" rel="noreferrer">#DIYBride</a>.</p>

<h2 style={headingStyle}>Materials Needed:</h2>

<ul style={listStyle}>
  <li>Sheer ribbon (I used ivory and champagne)</li>
  <li>Burlap and lace ribbon</li>
  <li>Hot glue gun</li>
  <li>Bobby pins</li>
  <li>A veil with comb</li>
</ul>



<iframe title="Mamma Mia Inspired Flower Pins for Brides" src="https://shopmy.us/collections/public/700467?noHeader=true" style={{ width: '100%', minHeight: '1000px', border: 'none' }} scrolling="no"></iframe>

<h2 style={headingStyle}>Flower Petals - A Step-by-Step Guide:</h2>

<div style={gridContainerStyle}><img src={image1} alt="Flower Petals - A Step-by-Step Guide: Step1" style={imageStyle} /></div>

<p style={paragraphStyle}>1. Take your sheer ribbon and fold it over five times.</p>

<p style={paragraphStyle}>2. Cut an irregular U shape to create your petals. You should get three layers of petals in just a few seconds! (If you want more volume, add more petals, but I found this amount lets a lot of light shine through beautifully.)</p>

<h2 style={headingStyle}>Making The Flower Pins:</h2>

<div style={gridContainerStyle}><img src={image2} alt="Flower Petals - A Step-by-Step Guide: Step 2" style={imageStyle} /></div>

<p style={paragraphStyle}>3. For the pins, I used burlap and lace ribbon because it grips the bobby pins really well and added a bit of brightness to the center of the flower.</p>


<p style={paragraphStyle}>4. Create a small loop with the ribbon and secure it with a hot glue gun.</p>

<p style={paragraphStyle}>5. Next, glue the petals onto the loop. Ideally, use six petals, but five works too! (I ran out of ribbon as I filmed only the last flower I made! 🤣)</p>

<div style={gridContainerStyle}><img src={image3} alt="Flower Petals - A Step-by-Step Guide: Step 3" style={imageStyle} /></div>

<div style = {{ margin : '1rem auto'}}>
<p style={paragraphStyle}>6. To add a touch of shimmer, I used champagne beads that my mom tied together. They really catch the light and match my champagne-colored dress perfectly.</p>

<h2 style={headingStyle}>Attaching To The Veil:</h2>

<p style={paragraphStyle}>7. For the veil, glue or sew the flowers around the comb without the burlap loops. This softens the look of the comb in your hair and gives you a unique flower crown.</p>

<div style={gridContainerStyle}><img src={image4} alt="Flower Petals - A Step-by-Step Guide: Final Steps" style={imageStyle} /></div>

<p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, serif', margin: '1em', maxWidth: '100%', fontStyle: 'italic' }}>Flower veil vs. Flower crown with each flower pinned in with bobby pins.</p>

<p style={paragraphStyle}>Alternatively, you can attach the flowers with bobby pins through the burlap loops to create a flower crown or accent flowers in your bridesmaids' hair.</p>

<div style={gridContainerStyle}><img src={image5} alt="Jackie Wyers Wedding Sorrento Maid of Honor" style={imageStyle} /></div>

<div style={gridContainerStyle}><img src={image6} alt="Jackie Wyers Wedding Italy" style={imageStyle} /></div>

 
<div style={gridContainerStyle}><img src={image7} alt="Jackie Wyers Wedding Photography" style={imageStyle} /></div>

<p style={paragraphStyle}>Even though we were in Italy, not Greece, these flower pins and veil totally give off <a style={linkStyle} href="https://www.mammamia.com/" target="_blank" rel="noreferrer">Mamma Mia</a> vibes in a subtle way and I loved how they looked, especially backlit as the sun was going down.</p>

</div>
<p style={paragraphStyle}>Did you like the flower crown or the DIY veil? Let me know in the comments and share your favorite cinematic bridal moment!</p>


      
     
     

      <NextArticle
      link="/fairytalewedding"
      imgSrc={nextarticle}
      altText="My Fairytale Wedding in Italy"
      linkText="MORE BRIDAL CONTENT →"
      containerStyle={{ margin: '1rem 0' }} // customize as needed
      linkStyle={{ color: '#000000', fontSize: '1.05rem' }} // customize as needed
      imgStyle={{ borderRadius: '10px' }} // customize as needed
    />

<div>
        <img src={signature} alt="Jackie Wyers Signature XoXo" style={{ width: '100%' }} />
      </div>

      <Comments website-id={websiteId} page-id={"DIY-Flowers"} />

      
    


      
    </div>
    
  );

  return (
    <div ref={blogRef}>
      <Card
        title="DIY Flower Pins for a Mamma Mia Inspired Wedding"
        description="How to make your own flower crown and separate flower pins inspired by Sophie from Mamma Mia."
        blogContent={blogContent}
      />
    </div>
  );
};

export default DIYFlowers;
