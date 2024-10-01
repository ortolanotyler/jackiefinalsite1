import React, { useRef, useEffect } from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import { Helmet } from 'react-helmet';
import DropCap1 from '../../Travel/DropCap1';
import ArticleTitle from '../../../Components/ArticleTitle';
import NextArticle from '../../../Components/NextArticleComponent';
import SocialShare from '../../../Home/SocialShare';


const title = `${process.env.PUBLIC_URL}/Images/Articles/SummerBeauty/SummerBeautyTitle.png`;
const image1 = `${process.env.PUBLIC_URL}/Images/Articles/SummerBeauty/BlueLagoon.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/SummerBeauty/barbiewpolaroid copy.JPG`;
const image3 = `${process.env.PUBLIC_URL}/Images/Articles/SummerBeauty/EmilyInParis.jpg`;
const image4 = `${process.env.PUBLIC_URL}/Images/Articles/SummerBeauty/floracopy.jpg`;
const image5 = `${process.env.PUBLIC_URL}/Images/Articles/SummerBeauty/H2Hair.jpg`;
const image6 = `${process.env.PUBLIC_URL}/Images/Articles/SummerBeauty/outerbanks.jpg`;
const image7 = `${process.env.PUBLIC_URL}/Images/Articles/SummerInspo/mermaidthumbnail.jpg`;

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

const SummerBeauty = () => {




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
  <title>Summer Beauty: Pop Culture Icons Edition! - Jackie Wyers</title>
  <link rel="canonical" href="https://www.jackiewyers.beauty/summerbeauty" />

  <meta name="description" content="Explore summer beauty inspiration with Jackie Wyers. Discover iconic hairstyles, makeup looks, and fashion tips from pop culture's beloved characters like The Blue Lagoon, Barbie Movie, Emily In Paris, and more." />
  <meta name="keywords" content="Summer Beauty, Jackie Wyers, Makeup Tutorial, Pop Culture Beauty, The Blue Lagoon, Barbie Movie, Emily In Paris, Winx Club, H2O: Just Add Water, Outer Banks, Summer Hairstyles, Summer Makeup, Beach Waves, No Makeup Look, Vintage Beauty, 2000s Hairstyles, Parisian Chic, Floral Accessories, Summer Glam, Jackie Wyers Blog" />

  <meta property="og:title" content="Summer Beauty: Pop Culture Icons Edition! - Jackie Wyers" />
  <meta property="og:description" content="Explore summer beauty inspiration with Jackie Wyers. Discover iconic hairstyles, makeup looks, and fashion tips from pop culture's beloved characters like The Blue Lagoon, Barbie Movie, Emily In Paris, and more." />
  <meta property="og:image" content="https://www.jackiewyers.beauty/Images/Articles/SummerBeauty/BlueLagoonThumbnail.jpg" />
  <meta property="og:url" content="https://www.jackiewyers.beauty/summerbeauty" />

  <meta name="twitter:title" content="Summer Beauty: Pop Culture Icons Edition! - Jackie Wyers" />
  <meta name="twitter:description" content="Explore summer beauty inspiration with Jackie Wyers. Discover iconic hairstyles, makeup looks, and fashion tips from pop culture's beloved characters like The Blue Lagoon, Barbie Movie, Emily In Paris, and more." />
  <meta name="twitter:image" content="https://www.jackiewyers.beauty/Images/Articles/SummerBeauty/BlueLagoonThumbnail.jpg" />
  <meta name="twitter:card" content="summary_large_image" />


  {/* Google Ads Script */}

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Summer Beauty: Pop Culture Icons Edition! - Jackie Wyers",
        "description": "Explore summer beauty inspiration with Jackie Wyers. Discover iconic hairstyles, makeup looks, and fashion tips from pop culture's beloved characters like The Blue Lagoon, Barbie Movie, Emily In Paris, and more.",
        "image": "https://www.jackiewyers.beauty/Images/Articles/SummerBeauty/BlueLagoonThumbnail.jpg",
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
          "@id": "https://www.jackiewyers.beauty/summerbeauty"
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
  mainTitle="Summer Beauty: Pop Culture Icons Edition"
  subTitle="Sun-kissed skin & wind swept hair"
  author="Jackie Wyers"
  publishDate="June 11th, 2024"
/>

<SocialShare 
  url="https://www.jackiewyers.beauty/summerbeauty" 
  title="Summer Beauty: Pop Culture Icons Edition! - Jackie Wyers" 
  imageUrl="https://www.jackiewyers.beauty/Images/Articles/SummerBeauty/BlueLagoonThumbnail.jpg" 
/>

<p style={{ margin: '20px auto', textAlign: 'center', fontSize: '1.1rem', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
</p>

      <DropCap1 text="Looking for easy breezy summer hairstyles, makeup & style to try this
summer? Here’s my top 6 inspirations pulled from some of pop
culture's most iconic characters. From the sun-kissed shores of 'The
Blue Lagoon' to the chic streets of 'Emily In Paris,' join me as I recreate and
reinterpret the signature styles of these beloved characters. Whether you're
seeking a dash of nostalgic charm or a splash of summer-ready glamour,
these tutorials will inspire you to embrace your inner icon. " />
   
     
      <h2 style={headingStyle}>The Looks:
      </h2>
      <h2 style={headingStyle}>
      Brooke Shields as Emmaline - ‘The Blue Lagoon'</h2>
      
<div style={gridContainerStyle}>
        <a href="https://www.instagram.com/p/C5dsVStuCqT/?img_index=1" target="_blank" rel="noopener noreferrer">
          <img src={image1} alt="Pheobe Tonkin" style={{ width: '100%', maxWidth: '650px' }} />
        </a>
      </div>
<p style={captionStyle}>      Original Makeup by Barbara Daly and Hair Design by Leonard George from 'The Blue Lagoon,' recreation by Jackie
      Wyers. </p>
      <p style={paragraphStyle}>
    Capture the iconic natural beauty of Brooke Shields in <a href="https://www.imdb.com/title/tt0080453/" target="_blank" rel="noopener noreferrer">‘The Blue Lagoon’</a> with long, tousled flowing beach waves and a fresh-faced no-makeup makeup look. Embrace the island vibe with a tan, minimal sun-kissed makeup, and a touch of sea salt spray to enhance natural sea-swept texture. Dive into the full makeup and hair tutorial inspired by Brooke on my channel, my <a href="https://www.youtube.com/watch?v=yC8Sf9U3Aww&list=PL-_qSuEl3UwH4UEWC4LNUSi6a3y_oVmDB" target="_blank" rel="noopener noreferrer">most viewed tutorial!</a> And for a nostalgic throwback, check out my very first attempt at creating this iconic style <a href="https://www.youtube.com/watch?v=yC8Sf9U3Aww&list=PL-_qSuEl3UwH4UEWC4LNUSi6a3y_oVmDB" target="_blank" rel="noopener noreferrer">here.</a> 🌴 ✨
  </p>
<ResponsiveIframe 
  src="https://shopmy.us/collections/public/619257?noHeader=true" 
  title="Mermaid Makeup Products Inspired by Brooke Shields as Emmaline in The Blue Lagoon" 
/>    

   

      <h2 style={headingStyle}>
      Margot Robbie as Barbie - ‘The Barbie Movie’</h2>
<div style={gridContainerStyle}>
        <a href="https://www.instagram.com/p/C5dsVStuCqT/?img_index=1" target="_blank" rel="noopener noreferrer">
          <img src={image2} alt="Pheobe Tonkin" style={{ width: '100%', maxWidth: '650px' }} />
        </a>
      </div>
<p style={captionStyle}>      Original Makeup by Pati Dubroff and Hair Design by Bryce Scarlett from 'The Barbie Movie,' recreation by
      Jackie Wyers.  </p>
      <p style={paragraphStyle}>
    Embrace the fun and fabulous look of Margot Robbie's <a href="https://www.imdb.com/title/tt1517268/" target="_blank" rel="noopener noreferrer">‘The Barbie Movie’</a> with voluminous curls paired with a multicoloured visor. Add wearable pink makeup, a matching bold outfit to embrace barbiecore. Barbie's perfectly styled hair has tones of extensions in the film, so you might need some clip-ins to get the volume down. Manifest your Barbie Dream house life with this <a href="https://www.youtube.com/watch?v=JfaND9n9ZCU&t=1s" target="_blank" rel="noopener noreferrer">step-by-step tutorial</a> on achieving Margot's Barbie glam, along with wearable summer hairstyles for a beach Barbie <a href="https://www.youtube.com/watch?v=JfaND9n9ZCU&t=1s" target="_blank" rel="noopener noreferrer">here.</a>
  </p>
   <ResponsiveIframe 
  src="https://shopmy.us/collections/public/619260?noHeader=true" 
  title="Barbiecore Makeup and Hairstyling Products Inspired by Margot Robbie in The Barbie Movie" 
/>
 

   



      <h2 style={headingStyle}>
      Lilly Collins as Emily - ‘Emily In Paris'</h2>
<div style={gridContainerStyle}>
        <a href="https://www.instagram.com/p/C5dsVStuCqT/?img_index=1" target="_blank" rel="noopener noreferrer">
          <img src={image3} alt="Pheobe Tonkin" style={{ width: '100%', maxWidth: '650px' }} />
        </a>
      </div>
<p style={captionStyle}>      Original Makeup by Aurélie Payen and Hair Design by Mike Desir from 'Emily In Paris,' recreation
      by Jackie Wyers.   </p>
      <p style={paragraphStyle}>
    Channel the chic & quirky style of Lily Collins in  ‘Emily In Paris’ with soft waves paired with a beret, or a sleek bun for summer events. Instead of no-makeup makeup, maybe classic red lips are your vibe for a hint of Parisian flair. Euro-girl summer with an eclectic touch screams 'Emily In Paris,' and I can’t wait for the next season! Explore <a href="https://www.youtube.com/watch?v=b_e98iV-TdM&t=4s" target="_blank" rel="noopener noreferrer">my tutorial</a> on getting Emily's Parisian chic look, perfect for any summer outing… especially if you are visiting France 🇫🇷!
  </p>
  
   <ResponsiveIframe 
  src="https://shopmy.us/collections/public/619267?noHeader=true" 
  title="Parisian Chic Beauty Products Inspired by Lilly Collins as Emily in Emily In Paris" 
/>   
  


      <h2 style={headingStyle}>
      Flora - ‘Winx Club’ </h2>
<div style={gridContainerStyle}>
        <a href="https://www.instagram.com/p/C5dsVStuCqT/?img_index=1" target="_blank" rel="noopener noreferrer">
          <img src={image4} alt="Pheobe Tonkin" style={{ width: '100%', maxWidth: '650px' }} />
        </a>
      </div>
<p style={captionStyle}>      Original Character Design by Iginio Straffi and Animation by Rainbow S.p.A. from 'Winx Club,' recreation
by Jackie Wyers.   </p>
<p style={paragraphStyle}>
    Transform into the magical Flora from Winx Club with whimsical outfits, flowing hair, and ethereal makeup. Embrace floral accessories, pastel hues, and long brunette hair with a money piece—a pop of blonde through the bangs to frame the face. This detail is what makes Flora’s character pop! Dive into my tutorial for a fun, enchanting look that will make you feel like you're part of the Winx Club. (This was a private video for a while, <a href="https://www.youtube.com/watch?v=2lZ-1p7mKMY&t=368s" target="_blank" rel="noopener noreferrer">but it’s back</a> if you missed it!)
  </p>
   <ResponsiveIframe 
  src="https://shopmy.us/collections/public/619272?noHeader=true" 
  title="Whimsical Beauty Products Inspired by Flora from Winx Club" 
/>
   
      <h2 style={headingStyle}>
      Phoebe Tonkin as Cleo - ‘H2O: Just Add Water’</h2>
<div style={gridContainerStyle}>
        <a href="https://www.instagram.com/p/C5dsVStuCqT/?img_index=1" target="_blank" rel="noopener noreferrer">
          <img src={image5} alt="Pheobe Tonkin" style={{ width: '100%', maxWidth: '650px' }} />
        </a>
      </div>
<p style={captionStyle}>      Original Makeup by Jennifer Lamphee and Hair Design by Kylie Clarke from 'H2O: Just Add Water,' Season
      3, recreation by Jackie Wyers.   </p>
      <p style={paragraphStyle}>
    Ever wanted to channel your inner H2O mermaid without needing the tail? The Y2K hairstyles from the show were simple, yet fun—and a personal favorite episode and hairstyle was when Cleo was a bridesmaid. Her first hairstyle really captured a 2000s beachy vibe and was very nostalgic to recreate with two braids, a bun, and floral pins. Dive into the full makeup and hair <a href="https://www.youtube.com/watch?v=0hVDAw6TznU&t=659s" target="_blank" rel="noopener noreferrer">tutorial series</a> inspired by Cleo on my channel!
  </p>
   <ResponsiveIframe 
  src="https://shopmy.us/collections/public/619285?noHeader=true" 
  title="Mermaid Hair and Makeup Products Inspired by Phoebe Tonkin as Cleo in H2O: Just Add Water" 
/>    

    

      <h2 style={headingStyle}>
      Madison Bailey as Kiara from 'Outer Banks'</h2>
<div style={gridContainerStyle}>
        <a href="https://www.instagram.com/p/C5dsVStuCqT/?img_index=1" target="_blank" rel="noopener noreferrer">
          <img src={image6} alt="Pheobe Tonkin" style={{ width: '100%', maxWidth: '650px' }} />
        </a>
      </div>
<p style={captionStyle}>     
Original Makeup by Stacy Butterworth and Hair Design by Ann Minahan from 'Outer Banks,' recreation by Jackie Wyers.   </p>
<p style={paragraphStyle}>
    Capture the adventurous and carefree style of Madison Bailey's Kiara from <a href="https://www.imdb.com/title/tt10293938/" target="_blank" rel="noopener noreferrer">‘Outer Banks’</a> with her messy bun and thick headband for a laid-back vibe. I covered several more effortless styles from her character, with natural waves, braids, and a touch of bronzer for that summer glow. Explore my step-by-step <a href="https://www.youtube.com/watch?v=Gk1OQ5D8Uwg&t=1s" target="_blank" rel="noopener noreferrer">tutorial</a> on getting Kiara's summer-ready hair and makeup over on YouTube.
  </p>
  
   
<ResponsiveIframe 
  src="https://shopmy.us/collections/public/619322?noHeader=true" 
  title="Carefree Summer Beauty Products Inspired by Madison Bailey as Kiara from Outer Banks" 
/>     
   
      <h2 style={headingStyle}>
      A Final Note 🌊 </h2>

      <p style={paragraphStyle}>
    Embrace summer with these character-inspired hair, makeup, and style inspirations—a fun way to relive your favorite pop culture moments while adding subtle glamour to your summer look. Follow along for tutorials and don’t forget to share your recreations with me by tagging me on socials <a href="https://www.instagram.com/jackiewyers" target="_blank" rel="noopener noreferrer">@jackiewyers</a> —I love seeing your versions of the looks and would be thrilled to feature them on my site.
  </p>
  
  <p style={paragraphStyle}>
    For more pop culture and makeup inspiration, check out my previous articles and tutorials. Don't hesitate to leave a comment below if there are any pop culture icons I've missed that are your favourites! Thanks for reading, and I hope your summer is filled with happy memories. 
  </p>



  <div>
        <img src={signature} alt="Signature" style={{ width: '100%' }} />
      </div>

      <NextArticle
      link="/summerinspo"
      imgSrc={image7}
      altText="Summer Inspiration Beauty Article"
      linkText="MORE POP CULTURE BEAUTY →"
      containerStyle={{ margin: '1rem 0' }} // customize as needed
      linkStyle={{ color: '#000000', fontSize: '1.05rem' }} // customize as needed
      imgStyle={{ borderRadius: '10px' }} // customize as needed
    />

   
    
     
<Comments website-id={websiteId} page-id={"Las-nozzfffflestronsonberries"} />

    </div>
  );

  return (
    <div ref={blogRef}>
      <Card
        title="Summer Beauty: Pop Culture Icons Edition!"
        description="Sun-kissed skin & wind-swept hair"
        blogContent={blogContent}
      />

    </div>
  );
};

export default SummerBeauty;
