import React, { useRef, useEffect } from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import SubscribeButton from '../../../Components/SubscribeButton';
import { Helmet } from 'react-helmet-async';
import DropCap1 from '../../Travel/DropCap1';
import ArticleTitle from '../../../Components/ArticleTitle';
import NextArticle from '../../../Components/NextArticleComponent';


const image1 = `${process.env.PUBLIC_URL}/Images/Articles/BardotHairstyles/1.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/BardotHairstyles/2.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/Articles/BardotHairstyles/3.jpg`;
const image4 = `${process.env.PUBLIC_URL}/Images/Articles/BardotHairstyles/4.jpg`;
const image5 = `${process.env.PUBLIC_URL}/Images/Articles/BardotHairstyles/5.jpg`;
const image6 = `${process.env.PUBLIC_URL}/Images/Articles/BardotHairstyles/6.jpg`;
const image7 = `${process.env.PUBLIC_URL}/Images/Articles/BardotHairstyles/7.jpg`;
const image8 = `${process.env.PUBLIC_URL}/Images/Articles/BardotHairstyles/8.jpg`;

const next = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateIconic/ICONICSHARONTHUMBNAIL.jpg`;
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

const BardotHairstyles = () => {




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
  
  fontFamily: "'EB Garamond', serif",
  fontWeight: '100',
  padding: '10px',
  margin: '10px auto',
  
  
    lineHeight: '1.6',
  
  };
  
  const linkStyle = {
  textDecoration: 'none', // Removes underline from links
  fontFamily: "'EB Garamond', serif",
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
  <title>Mastering the Bardot Bun - Jackie Wyers</title>
  <link rel="canonical" href="https://www.jackiewyers.beauty/bardothairstyles" />

  <meta name="description" content="Step-by-step guide on how to recreate Brigitte Bardot's iconic '60s hairstyles, featuring tips and tricks by Jackie Wyers." />
  <meta name="keywords" content="Bardot bun, Brigitte Bardot hairstyle, 60s hair tutorial, vintage hairstyles, faux bangs, Bardot-inspired bun, Jackie Wyers, how to create Bardot bun, big voluminous bun, curtain bangs, hair tutorial, Sabrina Carpenter hair, updo hairstyles, teasing hair, pin curls, textured bun, sock bun, bun maker, hair accessories, Marc Anthony Style Flex, OGX Bamboo Fibre Full hairspray, texturizing spray, Bardot bangs, beauty tutorials, retro hairstyles, 1960s makeup, vintage glamour, iconic hairstyles, faux bangs tutorial, hair styling tips, Brigitte Bardot look, Bardot-inspired makeup, Sabrina Carpenter inspired, hair teasing techniques, pin curls tutorial, fluffy curtain bangs, blonde wig, retro beauty, Time Travel Tutorials, Jackie Wyers hair, vintage beauty, Brigitte Bardot bun without haircut, Bardot hair inspiration, hair volume tips, retro updo, hairspray, styling products for Bardot look, hairstyling tips, beauty influencer tutorials, vintage vibes, classic beauty looks, iconic 60s style, Bridgerton beauty, Sharon Tate style, faux bangs styling, big bun tutorial, textured hairstyles, beauty inspiration, styling with hairspray, beauty and style, vintage beauty tutorials" />

  <meta property="og:title" content="Mastering the Bardot Bun - Jackie Wyers" />
  <meta property="og:description" content="Step-by-step guide on how to recreate Brigitte Bardot's iconic '60s hairstyles, featuring tips and tricks by Jackie Wyers." />
  <meta property="og:image" content="https://www.jackiewyers.beauty/Images/Articles/BardotHairstyles/BardotThumbnail.jpg" />
  <meta property="og:url" content="https://www.jackiewyers.beauty/bardothairstyles" />
  <meta name="twitter:title" content="Mastering the Bardot Bun - Jackie Wyers" />
  <meta name="twitter:description" content="Step-by-step guide on how to recreate Brigitte Bardot's iconic '60s hairstyles, featuring tips and tricks by Jackie Wyers." />
  <meta name="twitter:image" content="https://www.jackiewyers.beauty/Images/Articles/BardotHairstyles/BardotThumbnail.jpg" />
  <meta name="twitter:card" content="summary_large_image" />



  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Mastering the Bardot Bun - Jackie Wyers",
        "description": "Step-by-step guide on how to recreate Brigitte Bardot's iconic '60s hairstyles, featuring tips and tricks by Jackie Wyers.",
        "image": "https://www.jackiewyers.beauty/Images/Articles/BardotHairstyles/BardotThumbnail.png",
        "author": {
          "@type": "Person",
          "name": "Jackie Wyers"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Jackie Wyers Beauty",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.jackiewyers.beauty/logo.png"
          }
        },
        "datePublished": "2024-07-27",
        "dateModified": "2024-09-20",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.jackiewyers.beauty/bardothairstyles"
        }
      }
    `}
  </script>
</Helmet>



<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <a href="/popculture" style={{ fontFamily: 'GFS Didot, serif', fontSize: '1rem', color: '#000000', textDecoration: 'none' }}>
          BEAUTY // POP CULTURE
        </a>
      </div>

  <ArticleTitle
  mainTitle="Girly Pop Culture Halloween
Costume Ideas 2024🎀"
  subTitle="My Many Attempts At The Iconic 60s Style"
  author="Jackie Wyers"
  publishDate="July 25th, 2024"
/>
  
<ResponsiveYoutube src="https://www.youtube.com/embed/i8wHU_XsM2A?si=ASPsSodw8bM_vliD" title="Brigitte Bardot ‘60s Makeup Tutorial👱🏼‍♀️🎀 (perf for hooded eyes!)" />

<div style = {{textAlign: 'center', margin: '10px auto' }}>
<SubscribeButton />
</div>



<p style={{ margin: '20px auto', textAlign: 'center', fontSize: '1.1rem', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
</p>


<DropCap1 text="Welcome back to Time Travel Tutorials! Step back into the glamorous ‘60s with Brigitte
Bardot's iconic big bun! Whether you're looking for a chic everyday look or a show-stopping updo for a special occasion, I've got you covered with my tried- and-tested techniques featuring faux bangs, using the ends of your own hair. Let's dive into vintage beauty and master the Bardot bun together!" />











      
     
      <NextArticle
      link="/iconicsharon"
      imgSrc={next}
      altText="Sharon Tate's Bohemian Style Tutorial"
      linkText="MORE TIME TRAVEL TUTORIALS →"
      containerStyle={{ margin: '1rem 0' }} // customize as needed
      linkStyle={{ color: '#000000', fontSize: '1.05rem' }} // customize as needed
      imgStyle={{ borderRadius: '10px' }} // customize as needed
    />

<div>
        <img src={signature} alt="Jackie Wyers Signature XoXo" style={{ width: '100%' }} />
      </div>



     
     <Comments website-id={websiteId} page-id={"bardot-hairstyles"} />
    
      
    </div>
    
  );

  return (
    <div ref={blogRef}>
      <Card
        title="Girly Pop Culture Halloween Costume Ideas 2024🎀"
        description="My Many Attempts At The Iconic 60s Style"
        blogContent={blogContent}
      />
 
          

    </div>
  );
};

export default BardotHairstyles;