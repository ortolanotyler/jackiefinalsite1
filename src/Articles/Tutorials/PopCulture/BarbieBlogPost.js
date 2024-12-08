import React, { useRef, useEffect } from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import { Helmet } from 'react-helmet-async';
import DropCap1 from '../../Travel/DropCap1';
import NextArticle from '../../../Components/NextArticleComponent';
import ArticleTitle from '../../../Components/ArticleTitle';
import SocialShare from '../../../Home/SocialShare';
import EmailSubscribe from '../../../Components/EmailSubscribe';
import DividerWithText from '../../../Home/DividerWithText';
import AdSenseAd from '../../../Home/Adsense';

 

const Barbie2 = `${process.env.PUBLIC_URL}/Images/Articles/BarbieMovie/Barbie2.JPG`;
const barbienew = `${process.env.PUBLIC_URL}/Images/Articles/BarbieMovie/barbienew.jpeg`;
const Barbie3 = `${process.env.PUBLIC_URL}/Images/Articles/BarbieMovie/Barbie3.jpeg`;
const Barbie4 = `${process.env.PUBLIC_URL}/Images/Articles/BarbieMovie/BarbieFaceChart.jpg`;
const lana = `${process.env.PUBLIC_URL}/Images/Articles/LanaXskims/LanaDelRayThumbnail.jpeg`;
const Signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
 
  <div
    style={{
      margin: '1rem',
      maxWidth: '90%', // Control max width to center the content
      padding: '10px', // Add padding to prevent text from touching the edges
    }}
  >

    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
    </div>

  
);

const BarbieBlog = () => {


  const websiteId = '10910';
  const blogRef = useRef(null);
  const heading2Style = {
    textAlign: 'center',
    fontSize: '1.5rem',
    fontWeight: '100',
    fontFamily: 'GFS Didot, serif',
    fontWeight: 'bold',
    color: '#000000',
    margin: '10px auto',
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
  
  
  const layoutStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 4fr 1fr',
    gap: '1rem',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '1rem',
  };

  const adStyle = {
    position: 'fixed', // Fixed position
    top: '50%', // Vertically center
    transform: 'translateY(-50%)', // Centering adjustment
    width: '150px', // Adjust width
    backgroundColor: '#f8f8f8',
    textAlign: 'center',
    fontSize: '14px',
    color: '#555',
    lineHeight: '1.4',
  };

  const leftAdStyle = {
    ...adStyle,
    left: '10px', // Left position
  };

  const rightAdStyle = {
    ...adStyle,
    right: '10px', // Right position
  };

  const contentStyle = {
    padding: '1rem',
    backgroundColor: '#ffffff',
  };

  const smallScreenStyle = {
    gridTemplateColumns: '1fr',
  };

  const mergedLayoutStyle =
    window.innerWidth <= 768
      ? { ...layoutStyle, ...smallScreenStyle }
      : layoutStyle;

  
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
  <title>Margot Robbie's Barbie Makeup & DIY '90s Roller Skate Costume - Jackie Wyers</title>
  <link rel="canonical" href="https://www.www.jackiewyers.beauty/margotbarbie" />

  <meta 
    name="description" 
    content="Learn how to recreate Margot Robbie's Barbie movie makeup look and DIY your own '90s Roller Skate Barbie costume with this step-by-step guide by Jackie Wyers." 
  />
<meta 
  name="keywords" 
  content="Margot Robbie Barbie makeup tutorial, Barbie roller skate costume DIY, '90s Barbie Halloween costume ideas, pink Barbie makeup step-by-step, Margot Robbie inspired makeup, Greta Gerwig Barbie movie looks, Jackie Wyers Barbiecore beauty guide, Barbie gingham dress look, roller skate Barbie makeup, Malibu Barbie makeup tutorial, Ivana Primorac Barbie makeup design, Jacqueline Durran Barbie costume inspiration, Barbie fashion collabs 2024, Barbiecore trend makeup tips, vintage Barbie pink makeup, Barbie makeup hacks for beginners, Barbie DIY roller skates, Barbie pink aesthetic makeup guide, Barbie-inspired hair and makeup tutorial, Barbie Halloween look step-by-step, Barbiecore glam ideas, Barbie pink blush and contour, DIY Barbie makeup ideas, Barbie fashion nostalgia, nostalgic '90s fashion looks, Barbie movie iconic beauty recreations, Barbie lipstick tutorial, Barbiecore pink eye makeup, celebrity-inspired Halloween makeup, Barbie-themed beauty ideas, Jackie Wyers beauty influencer tutorials, retro Barbie makeup trends"
 />

  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="Margot Robbie's Barbie Makeup & DIY '90s Roller Skate Costume - Jackie Wyers" />
  <meta 
    property="og:description" 
    content="Learn how to recreate Margot Robbie's Barbie movie makeup look and DIY your own '90s Roller Skate Barbie costume with this step-by-step guide by Jackie Wyers." 
  />
  <meta 
    property="og:image" 
    content="https://www.jackiewyers.beauty/Images/Articles/BarbieMovie/MARGOBARBIETHUMBNAIL.png" 
  />
  <meta property="og:url" content="https://www.jackiewyers.beauty/margotbarbie" />
  <meta property="og:type" content="article" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:title" content="Margot Robbie's Barbie Makeup & DIY '90s Roller Skate Costume - Jackie Wyers" />
  <meta 
    name="twitter:description" 
    content="Learn how to recreate Margot Robbie's Barbie movie makeup look and DIY your own '90s Roller Skate Barbie costume with this step-by-step guide by Jackie Wyers." 
  />
  <meta 
    name="twitter:image" 
    content="https://www.jackiewyers.beauty/Images/Articles/BarbieMovie/MARGOBARBIETHUMBNAIL.png" 
  />
  <meta name="twitter:card" content="summary_large_image" />




  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Margot Robbie's Barbie Makeup & DIY '90s Roller Skate Costume - Jackie Wyers",
        "description": "Learn how to recreate Margot Robbie's Barbie movie makeup look and DIY your own '90s Roller Skate Barbie costume with this step-by-step guide by Jackie Wyers.",
        "image": "https://www.jackiewyers.beauty/Images/Articles/BarbieMovie/MARGOBARBIETHUMBNAIL.png",
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
        "datePublished": "2024-07-25",
        "dateModified": "2024-09-24",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.jackiewyers.beauty/margotbarbie"
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
  mainTitle="Margot Robbie's BARBIE Makeup & DIY'90s Roller Skate Costume"
  subTitle="Come on Barbie, Let's Get Glam!"
  author="Jackie Wyers"
  publishDate="July 25th, 2024"
/>

<SocialShare 
  url="https://www.jackiewyers.beauty/margotbarbie" 
  title="Margot Robbie's Barbie Makeup & DIY '90s Roller Skate Costume - Jackie Wyers" 
  imageUrl="https://www.jackiewyers.beauty/Images/Articles/BarbieMovie/MARGOBARBIETHUMBNAIL.png" 
/>


      <ResponsiveYoutube src="https://www.youtube.com/embed/JfaND9n9ZCU?si=NfJyPeNlC3qzl6tp" title="Margot Robbie Barbie Movie - Jackie Wyers" />

   
<div style = {{textAlign: 'center', margin: '10px auto' }}>
<SubscribeButton />
</div>

<p style={{ margin: '20px auto', textAlign: 'center', fontSize: '1.1rem', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
</p>


<DropCap1 text="In the dazzling world of the Barbie Movie, directed by Greta Gerwig and starring Margot Robbie as endearing Barbie and Ryan Gosling as the hilarious Ken, we must not forget to pay tribute to the brilliant artists who brought these iconic characters to life. Ivana Primorac, the creative force leading the movie’s hair and makeup teams, created Margot’s Barbie pink makeup look that appeared fresh and modern. The 'Barbie' costume designer Jacqueline Durran played an equally crucial role in fuelling the 'Barbiecore' fashion trend with the iconic Barbie looks featured in the film. Hello Barbiecore summer of 2023 - everywhere you looked, it was all about PINK!" />

      
<DividerWithText text = "Ad"/>
        <div className="ad-container">
  <AdSenseAd />
</div>
<DividerWithText text = "Ad"/>
  
      
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <a href="https://www.instagram.com/p/Cs4LhepN6dc/?hl=en" target="_blank" rel="noopener noreferrer">
          <img src={barbienew} alt="Barbie Makeup Drawing" style={{ width: '100%' }} />
        </a>
      </div>

      <div>
        <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
        Original Makeup by Pati Dubroff and Hair Design by Bryce Scarlett from the 2023 film 'Barbie,' recreation by Jackie Wyers        </p>
      </div>

      <p style={paragraphStyle}>
      Among the film's many breathtaking fashion moments, the iconic pink
gingham dress stole the hearts of fans. However, one look, in my opinion,
outshone the rest—the unforgettable roller skate Barbie ensemble!</p>

<div style={gridContainerStyle}>
        <a href='https://www.instagram.com/p/CtfWF2oMk7p' target="_blank" rel="noopener noreferrer">
          <img src={Barbie2} alt="Roller Skate Barbie Jackie Wyers" style={{ width: '100%', maxWidth: '500px' }} />
        </a>
        <a href='https://www.instagram.com/p/CuXU3IqOlwa/?img_index=1' target="_blank" rel="noopener noreferrer">
          <img src={Barbie3} alt="Barbie Summer" style={{ width: '100%', maxWidth: '500px' }} />
        </a>
      </div>

      <p style={paragraphStyle}>
      When paparazzi pictures of the cast filming at Venice Beach surfaced,
featuring neon outfits reminiscent of '90s roller skate Barbie, I was inspired
to create the entire costume for Halloween, complete with a makeup
transformation that is not only faithful to the film but also entirely wearable. 

</p>

<DividerWithText text = "Ad"/>
        <div className="ad-container">
  <AdSenseAd />
</div>
<DividerWithText text = "Ad"/>

<p style={paragraphStyle}>
In this blog post, I'll be your guide you to recreate Margot Robbie's
exquisite pink Barbie makeup look, drawing inspiration from the movie and
using my cherished Barbie collaboration products. Additionally, we'll delve
into the art of crafting your eye-catching roller skate Barbie costume. So,
come on, Barbies, Let’s get glam! 
</p>

      <h2 style={headingStyle}>Get The Glamorous Barbie Makeup Look</h2>

      <div style={gridContainerStyle}>
      <img src={Barbie4} alt='Barbie Makeup Drawing' style={{ width: '100%', maxWidth: '650px' }} />
      </div>
  
   

      <h2 style={headingStyle}>Preparation</h2>

      <p style={paragraphStyle}>
      Before we begin, make sure your skin is hydrated. This collaboration isn’t
available any long, but the product itself is still on shelves! The Glamglow
Glowstarter Mega Illuminating Moisturizer leaves a super radiant, Barbiedoll base. If you're looking for plump lips, the Lawless Forget the Filler
Overnight Lip Plumping Mask is a must-try and a top recommendation I
give to beauty lovers!
</p>
    
<DividerWithText text = "Ad"/>
        <div className="ad-container">
  <AdSenseAd />
</div>
<DividerWithText text = "Ad"/>

      <h2 style={headingStyle}>Foundation</h2>

      <p style={paragraphStyle}>
      Opt for a lightweight foundation perfect for summer, I recommend the
Beautiful Skin Foundation from Charlotte Tilbury or the L'Oréal True
Match Hyaluronic Tinted Serum. Both fabulous picks depending on
your budget.
</p>


      <ResponsiveIframe src="https://shopmy.us/collections/public/493481?noHeader=true" title="Collection name here" />

      <h2 style={headingStyle}>Contour and Bronzer</h2>

    
<p style={paragraphStyle}>
I achieve Margot's signature look with some subtle contouring and
cream bronzer, creating more structure to my face. I’d recommend
enhancing your natural features rather than going against them though
- especially if you are wearing this look out in daylight. Less is more!
</p>

      <h2 style={headingStyle}>Powder and Blush</h2>

      <p style={paragraphStyle}>
      Set your makeup with your favorite powder to maintain a matte yet
natural finish. My holy-grail powder is from Florasis, a Chinese beauty
brand. You can find them on Amazon & their powder’s never look too
cakey or powdery, yet set and softly magnify. Margot's rosy cheeks can be
replicated using the Pur Malibu Barbie Blush Set or Benefit's Boxo
Powders
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/493498?noHeader=true" title="Collection name here" />

      <DividerWithText text = "Ad"/>
        <div className="ad-container">
  <AdSenseAd />
</div>
<DividerWithText text = "Ad"/>

      <h2 style={headingStyle}>Brows</h2>

      <p style={paragraphStyle}>
      Keep your brows soft and natural like Margot Robbie’s Barbie. Lawless
Shape Up Soft Fill Brow Pencil is great, but you can always go drugstore
with Winkylux or L’Oréal Paris.
</p>

      <h2 style={headingStyle}>Eyeshadow and Eyeliner</h2>

      <p style={paragraphStyle}>
      For the eyes, we are going to go with subtle pops of pink, shimmer and
definition. This is a perfect time to use shades from the Colorpop Malibu
Barbie Collab (still my favorite collection) or you can always use blush in
the crease to cut down on products. 
</p>

  

<p style={paragraphStyle}>
If you are a fan of cute makeup with a beach aesthetic, Flower Knows
Beauty also has an adorable palette I featured in the tutorial. The seashells
scream Malibu
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/493504?noHeader=true" title="Collection name here" />

      <h2 style={headingStyle}>Lashes</h2>

      <p style={paragraphStyle}>
      Time for a Barbie collab product I use daily. The Revlon x Barbie Lash
      curler! After a curl, swipe a coat of your favorite mascara.
      </p>

      <h2 style={headingStyle}>Highlighter</h2>
      <p style={paragraphStyle}>
      Add shine to your nose, cheeks, and chin for that Barbie skin glow. The
Charlotte Tilbury Beauty Light Wand in Spotlight remains a favorite, but
now many drugstore brands have recreated the iconic product. Flower
Beauty also has a fabulous wand in a various shades. 
</p>

<p style={paragraphStyle}>

Line and fill your lips with the Colourpop Lip Liner in Grunge, this shade
is deeper than the brighter pink lipstick we will use. It’ll give nice
dimension to the lips, creating a fuller shape. Keep the cupids bow in a
strong V like Barbie. Top it off with a bright pink shade like Leader from
Hourglass. I filmed this video prior to the movie release, but check out
NYX’s makeup collab with Barbie for more pink lip combos!
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/493536?noHeader=true" title="Collection name here" />

  
      <DividerWithText text = "Ad"/>
        <div className="ad-container">
  <AdSenseAd />
</div>
<DividerWithText text = "Ad"/>
 

<p style={paragraphStyle}>
  Want to be featured on my site? Submit your recreation or version of this look to my Insta! I’d love to see you switch up your style with confidence!
</p>

     
      <NextArticle
      link="/lanablog"
      imgSrc={lana}
      altText="LANA x SKIMS PHOTOSHOOT"
      linkText=" MORE POP CULTURE BEAUTY →"
      containerStyle={{ margin: '1rem 0' }} // customize as needed
      linkStyle={{ color: '#000000', fontSize: '1.05rem' }} // customize as needed
      imgStyle={{ borderRadius: '10px' }} // customize as needed
    />


    


      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={Signature} alt="Jackie Wyers Signatue" style={{ width: '100%', maxWidth: '650px' }} />
      </div>


      <Comments website-id={websiteId} page-id={'barbsssie'} />
      <DividerWithText text = "Ad"/>
        <div className="ad-container">
  <AdSenseAd />
</div>
<DividerWithText text = "Ad"/>
<DividerWithText text = "Ad"/>
        <div className="ad-container">
  <AdSenseAd />
</div>
<DividerWithText text = "Ad"/>
<DividerWithText text = "Ad"/>
        <div className="ad-container">
  <AdSenseAd />
</div>
<DividerWithText text = "Ad"/>
<DividerWithText text = "Ad"/>
        <div className="ad-container">
  <AdSenseAd />
</div>
<DividerWithText text = "Ad"/>

    </div>
  );


  return (
    <div ref={blogRef}>
    <Card
        title="Margot Robbie's BARBIE Makeup & DIY'90s Roller Skate Costume"
        description="Come on Barbie, Let's Get Glam!"
        blogContent={blogContent}
      />
      <EmailSubscribe/>
    </div>
  );
};

export default BarbieBlog;

