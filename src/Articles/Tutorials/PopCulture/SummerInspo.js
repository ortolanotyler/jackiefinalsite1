import React, { useRef, useEffect } from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import { Helmet } from 'react-helmet-async';
import DropCap1 from '../../Travel/DropCap1';
import ArticleTitle from '../../../Components/ArticleTitle';
import SubscribeButton from '../../../Components/SubscribeButton';
import NextArticle from '../../../Components/NextArticleComponent';
import SocialShare from '../../../Home/SocialShare';

const title = `${process.env.PUBLIC_URL}/Images/Articles/SummerInspo/mermaidthumbnail.jpg`;
const image1 = `${process.env.PUBLIC_URL}/Images/Articles/SummerInspo/CleoH20Poster.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/SummerInspo/TheLittleMermaidPoster.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/Articles/SummerInspo/VanessaLittleMermaidPoster.jpg`;
const image4 = `${process.env.PUBLIC_URL}/Images/Articles/SummerInspo/PiratesMermaidLostLandsPoster.jpg`;
const image5 = `${process.env.PUBLIC_URL}/Images/Articles/SummerInspo/AquamarinePoster.jpg`;
const barbie = `${process.env.PUBLIC_URL}/Images/Articles/BarbieMovie/SQUAREMARGOT.jpeg`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
  <div
  style={{
    margin: '1rem ',
    maxWidth: '100%',
    padding: '5px',
  }}
>
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);


const SummerInspo = () => {




  const websiteId = '10910';
  const blogRef = useRef(null);

 

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
  
  fontFamily: "EB Garamond, serif",
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
  <title>Summer Inspiration: Pop Culture Mermaid Edition!</title>
  <link rel="canonical" href="https://www.jackiewyers.beauty/summerinspo" />

  <meta name="description" content="Dive into enchanting mermaid-inspired beauty looks for the summer season, featuring tutorials by Jackie Wyers on iconic characters like Cleo Sertori and Ariel." />
  <meta name="keywords" content="Summer Inspiration, Pop Culture Mermaid, Mermaid Beauty Looks, Jackie Wyers Blog, Cleo Sertori Makeup, Ariel Mermaid Glam, Halle Bailey Little Mermaid, Vanessa The Little Mermaid Makeup, Pirates of the Caribbean Mermaid Look, Aquamarine Makeup, Mermaid Hair Inspiration, Beach Waves Tutorial, Summer Glam Makeup, Sea Siren Aesthetic, Nostalgic Mermaid Makeup, Summer Mermaid Vibes, Mermaid Jewelry, Jackie Wyers Mermaid Tutorials, Mermaidcore Fashion, Disney Mermaid Makeup, Mermaid Beauty Tips, Mermaid Aesthetic Summer, Pearl Accessories, H2O Inspired Beauty, Dark Mermaid Makeup, Mermaid Hairstyle Ideas, Summer Mermaid Fashion, Jackie Wyers Tutorials, Pop Culture Beauty Inspiration" />  
  <meta property="og:title" content="Summer Inspiration: Pop Culture Mermaid Edition! - Jackie Wyers" />
  <meta property="og:description" content="Dive into enchanting mermaid-inspired beauty looks for the summer season, featuring tutorials by Jackie Wyers on iconic characters like Cleo Sertori and Ariel." />
  <meta property="og:image" content="https://www.jackiewyers.beauty/Images/Articles/SummerInspo/mermaidthumbnail.jpg" />
  <meta property="og:url" content="https://www.jackiewyers.beauty/summerinspo" />
  
  <meta name="twitter:title" content="Summer Inspiration: Pop Culture Mermaid Edition! - Jackie Wyers" />
  <meta name="twitter:description" content="Dive into enchanting mermaid-inspired beauty looks for the summer season, featuring tutorials by Jackie Wyers on iconic characters like Cleo Sertori and Ariel." />
  <meta name="twitter:image" content="https://www.jackiewyers.beauty/Images/Articles/SummerInspo/mermaidthumbnail.jpg" />
  <meta name="twitter:card" content="summary_large_image" />



  {/* Google Ads Script */}
  
  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Summer Inspiration: Pop Culture Mermaid Edition! - Jackie Wyers",
        "description": "Dive into enchanting mermaid-inspired beauty looks for the summer season, featuring tutorials by Jackie Wyers on iconic characters like Cleo Sertori and Ariel.",
        "image": "https://www.jackiewyers.beauty/Images/Articles/SummerInspo/mermaidthumbnail.png",
        "author": {
          "@type": "Person",
          "name": "Jackie Wyers"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Jackie Wyers Beauty",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.jackiewyers.beauty/jw3logo.png"
          }
        },
        "datePublished": "2024-07-27",
        "dateModified": "2024-09-20",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.jackiewyers.beauty/summerinspo"
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
  mainTitle="Summer Inspiration: Pop Culture Mermaid Edition!"
  subTitle="Grab your sea salt spray, its mermaid season!"
  author="Jackie Wyers"
  publishDate="June 11th, 2024"
/>

<SocialShare 
  url="https://www.jackiewyers.beauty/summerinspo" 
  title="Summer Inspiration: Pop Culture Mermaid Edition! - Jackie Wyers" 
  imageUrl="https://www.jackiewyers.beauty/Images/Articles/SummerInspo/mermaidthumbnail.jpg" 
/>



<p style={{ margin: '20px auto', textAlign: 'center', fontSize: '1.1rem', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
</p>

<div style = {{textAlign: 'center', margin: '10px auto' }}>
<SubscribeButton />
</div>


      <DropCap1 text="Dive into the enchanting world of mermaids with this special blog post that brings to life the mesmerizing looks of some of pop culture's most iconic sea sirens. From the sun-kissed shores of 'H2O: Just Add Water' to the mystical depths of 'The Little Mermaid's' live-action remake, join me, as I recreate and reinterpret the signature styles of these beloved characters. Whether you're seeking a dash of nostalgic charm or a splash of summer-ready glamour, these tutorials will inspire you to embrace your inner mermaid. Let's explore these magical transformations together and make a splash in your beauty routine this season!" />
     
     
    
     
      <h2 style={headingStyle}>The Looks:
      </h2>

      <h2 style={headingStyle}>
Phoebe Tonkin as Cleo Sertori - ‘H20: Just Add Water’</h2>
<div style={gridContainerStyle}>
        <a href="https://www.instagram.com/p/C5dsVStuCqT/?img_index=1" target="_blank" rel="noopener noreferrer">
          <img src={image1} alt="Pheobe Tonkin" style={{ width: '100%', maxWidth: '650px' }} />
        </a>
      </div>
      <p style={captionStyle}>
              Original Makeup by Jennifer Lamphee and Hair Design by Kylie Clarke from 'H2O: Just Add Water,' Season 3, recreation by Jackie Wyers.      </p>

              <p style={paragraphStyle}>
  Ever wanted to channel your inner H2O mermaid without needing the tail? Achieve the iconic Australian mermaid tan with products I love from <a href="https://www.cocoandeve.com" style={linkStyle} target="_blank" rel="noopener noreferrer">Coco and Eve</a> and <a href="https://www.lovingtan.com" style={linkStyle} target="_blank" rel="noopener noreferrer">Loving Tan</a>. Embrace the mermaid vibe with copper and peachy sun-kissed hues that sparkle and enhance natural beauty. The Y2K hairstyles from the show were simple, yet chic—think natural waves enhanced by a touch of sea salt spray. Dive into the full makeup and hair tutorial series inspired by Cleo on my <a href="https://www.youtube.com/c/JackieWyers" style={linkStyle} target="_blank" rel="noopener noreferrer">YouTube channel</a>! And for a nostalgic throwback, check out my ancient <a href="https://www.jackiewyers.beauty/mermaidmakeuptutorial" style={linkStyle}>mermaid makeup tutorial</a>. I’ve been a fan of this show for ages! 🧜 ✨
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/598796?noHeader=true" title="Mermaid Makeup Products Inspired by Cleo Sertori from H2O: Just Add Water" />
       


      <h2 style={headingStyle}>Halle Bailey as Ariel - ‘The Little Mermaid’</h2>
<div style={gridContainerStyle}>
        <a href="https://www.instagram.com/p/C5dsVStuCqT/?img_index=1" target="_blank" rel="noopener noreferrer">
          <img src={image2} alt="Daphne Bridgerton - Bridgerton" style={{ width: '100%', maxWidth: '650px' }} />
        </a>
      </div>
<p style={captionStyle}>
        Original Makeup by Nikki Wolff for Halle Bailey in 'The Little Mermaid' live-action remake, recreation by Jackie Wyers.      </p>
      
        <p style={paragraphStyle}>
  Halle Bailey's portrayal of Ariel in the live-action remake of <a href="https://movies.disney.com/the-little-mermaid-2023" style={linkStyle} target="_blank" rel="noopener noreferrer">The Little Mermaid</a> was sheer perfection. From her angelic voice to the breathtaking underwater visuals, her rose gold hair, and vintage-inspired styling set a new standard for mermaid makeup. Embrace her look with bronze makeup accentuating the eyes, cheeks, and lips. Add a thick pink headband and a few rope braids for that quintessential beachy mermaid vibe. Bonus points if you have rose-gold hair! Dive into my step-by-step tutorial to get Halle's Little Mermaid glam <a href="https://www.youtube.com/watch?v=EP-PeJSrmf4" style={linkStyle} target="_blank" rel="noopener noreferrer">here</a>.
</p>

    <ResponsiveIframe src="https://shopmy.us/collections/public/598804?noHeader=true" title="Mermaid Makeup Products Inspired by Halle Bailey as Ariel in The Little Mermaid" />   
      
   
      <h2 style={headingStyle}>Jessica Alexander as Vanessa - ‘The Little Mermaid’</h2>
<div style={gridContainerStyle}>
          <img src={image3} alt="Jessica Alexander as Vanessa - ‘The Little Mermaid’" style={{ width: '100%', maxWidth: '650px' }} />
      </div>

      
<p style={captionStyle}>
        Original Makeup by Nikki Wolff for Jessica Alexander in 'The Little Mermaid' live-action remake, recreation by Jackie Wyers.      </p>
    
<p style={paragraphStyle}>
  While her screen time was brief, Jessica Alexander's portrayal of Vanessa in <a href="https://movies.disney.com/the-little-mermaid-2023" style={linkStyle} target="_blank" rel="noopener noreferrer">The Little Mermaid</a> live-action remake certainly turned heads with her stunning purple dress. Capture her slightly shipwrecked beauty with a bohemian style from brands like <a href="https://www.freepeople.com" style={linkStyle} target="_blank" rel="noopener noreferrer">Free People</a>. Complement the look with the inspired pendant from the <a href="https://www.pandora.net/en-us/disney" style={linkStyle} target="_blank" rel="noopener noreferrer">Disney and Pandora collection</a> that holds Ariel's voice. For makeup, opt for a simple sculpted eye and a sculpted pink lip, paired beautifully with tussled curls. The Vanessa-inspired makeup is also featured in the Ariel tutorial as mentioned above.
</p>
      <ResponsiveIframe src="https://shopmy.us/collections/public/598809?noHeader=true" title="Mermaid Makeup Products Inspired by Jessica Alexander as Vanessa in The Little Mermaid" />   
        
    
      
      <h2 style={headingStyle}>Dark Mermaidcore - ‘Pirates of the Caribbean: On Stranger Tides’</h2>
<div style={gridContainerStyle}>
          <img src={image4} alt="Dark Mermaidcore - ‘Pirates of the Caribbean: On Stranger Tides’" style={{ width: '100%', maxWidth: '650px' }} />
     </div>
<p style={captionStyle}>
        Original Makeup led by Joel Harlow for the mermaids in 'Pirates of the Caribbean: On Stranger Tides.' Recreation by Jackie Wyers. (Photo shot by Lost Lands Collections)      </p>
   
<p style={paragraphStyle}>
  The <a href="https://www.pirates.disney.com" style={linkStyle} target="_blank" rel="noopener noreferrer">Pirates of the Caribbean</a> franchise introduced us to the dark mermaid aesthetic, featuring long-haired mermaids with an irresistibly evil allure. Achieve this look with long, softly textured hair, smoky eyes in deep bronze shades, and a defined nude lip. While my recreation subtly nods to this style, you can also explore the beautiful Gemma Ward for more subtle beauty inspiration & smell like a mermaid with <a href="https://www.annasui.com/products/fantasia-mermaid-eau-de-toilette" style={linkStyle} target="_blank" rel="noopener noreferrer">Anna Sui’s Fantasia Mermaid Eau de Toilette</a>!
</p>

            <ResponsiveIframe src="https://shopmy.us/collections/public/598822?noHeader=true" title="Dark Mermaidcore Makeup Products Inspired by Pirates of the Caribbean: On Stranger Tides" />   
        
    
      
      <h2 style={headingStyle}>Sara Paxton as Aquamarine - ‘Aquamarine’</h2>
<div style={gridContainerStyle}>
        <a href="https://www.instagram.com/p/C5dsVStuCqT/?img_index=1" target="_blank" rel="noopener noreferrer">
          <img src={image5} alt="Sara Paxton as Aquamarine - ‘Aquamarine’" style={{ width: '100%', maxWidth: '650px' }} />
        </a>
      </div>
<p style={captionStyle}>
        Original Makeup by Kimberly Greene for Sara Paxton in 'Aquamarine.' Recreation by Jackie Wyers. (Photo shot by Lost Lands Collections)
      </p>
    
      <p style={paragraphStyle}>
  We can't do a roundup of mermaid looks without mentioning Sara Paxton's iconic portrayal of the sweet and bubbly <a href="https://www.imdb.com/title/tt0429591/" style={linkStyle} target="_blank" rel="noopener noreferrer">Aquamarine</a>. Her bright blonde hair, accented with streaks of blue, and her subtle makeup featuring a pop of shimmer on the lids and a hint of blue eyeliner, make for a look that’s both fun and naturally wearable for everyday summer flair. And who could forget her unforgettable 'last splash' dress? I’ve always been on the lookout for something similar! Don't forget your <a href="https://www.benjerry.com/flavors/phish-food-ice-cream" style={linkStyle} target="_blank" rel="noopener noreferrer">Ben & Jerry's Phish Food</a> as you dive into my tutorial <a href="https://www.youtube.com/watch?v=EP-PeJSrmf4" style={linkStyle} target="_blank" rel="noopener noreferrer">here</a>.
</p>

                  

                  <ResponsiveIframe src="https://shopmy.us/collections/public/598827?noHeader=true" title="Mermaid Makeup Products Inspired by Sara Paxton as Aquamarine in Aquamarine" />
                  
                      
      <h2 style={headingStyle}>A Final Note 🌊</h2>

      <p style={paragraphStyle}>
  Embrace summer with these character-inspired mermaid makeup and hair inspirations—a fun way to relive your childhood while adding subtle glamour with a fishy fabulousness. I always feel like a true mermaid when wearing pearls, and I just received a stunning necklace from <a href="https://www.biwako.com" style={linkStyle} target="_blank" rel="noopener noreferrer">Biwako</a>, the Wave Baroque Choker. It's a chunky statement piece crafted from exquisite pearls, and I simply had to share it with you.
</p>
      <ResponsiveIframe src="https://shopmy.us/collections/public/598820?noHeader=true" title="Mermaid-Inspired Jewelry and Accessories for Summer" />     



      <p style={paragraphStyle}>
  Follow along for tutorials and don’t forget to share your recreations with me —I love seeing your versions of the looks and would be thrilled to feature them on my site. For more pop culture and makeup inspiration, check out my previous article about '<a href="https://www.jackiewyers.beauty/nomakeupmakeup" style={linkStyle}>no makeup</a>' makeup looks in film. Don't hesitate to leave a comment below if there are any pop culture mermaids I've missed that are your favourites! Thanks for reading, and I hope you’re having a wonderful summer so far.
</p>


<div>
        <img src={signature} alt="Signature" style={{ width: '100%' }} />
      </div>

     

      <NextArticle
      link="/margotbarbie"
      imgSrc={barbie}
      altText="Margot Robbie - Barbie Movie"
      linkText="MORE POP CULTURE  →"
      containerStyle={{ margin: '1rem 0' }} // customize as needed
      linkStyle={{ color: '#000000', fontSize: '1.05rem' }} // customize as needed
      imgStyle={{ borderRadius: '10px' }} // customize as needed
    />

     
    
<Comments website-id={websiteId} page-id={"Las-1aasa"} />
  

  

  

    </div>
  );

  return (
    <div ref={blogRef}>
      <Card
        title="Summer Inspiration: Pop Culture Mermaid Edition!"
        description="Grab your sea salt spray, its mermaid season!"
        blogContent={blogContent}
      />
   
    </div>
  );
};

export default SummerInspo;