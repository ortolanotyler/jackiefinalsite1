import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Comments } from '@hyvor/hyvor-talk-react';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import AdSenseAd from '../../../Advertising/Ads';
import { initGA, logPageView } from '../../../analytics';
import DropCap1 from '../../Travel/DropCap1';
import ArticleTitle from '../../../Components/ArticleTitle';
import NextArticle from '../../../Components/NextArticleComponent';

const Sharon2 = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateBridal/SharonBridalDouble.png`;
const SharonFace = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateBridal/SHARONTATEFILLEDINFACECHART.jpg`;
const Sharon16 = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateBridal/SharonBridalInstagram.png`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;
const sophia = `${process.env.PUBLIC_URL}/Images/Articles/SophiaLoren/SophiaLorenThumbnail.jpeg`;
const teespring = `${process.env.PUBLIC_URL}/Images/teespringbanner.jpeg`;

const Card = ({ blogContent }) => (
 
 
<div style = {{
 padding: '10px 20px',
  margin: '0 auto',
}}>
  
      <div className="card">
        <div className="blog-content">{blogContent}</div>
      </div>
      </div>
  
    
  );
  
  const SharonTatePost = () => {
  
    useEffect(() => {
      initGA();
      logPageView('/sharontatebridal');
    }, []);
  
  
    const websiteId = '10910';
    const blogRef = useRef(null);
  
   
    const headingStyle = {
      textAlign: 'center',
      fontSize: '2.5rem',
      fontWeight: 'normal',
      fontFamily: 'GFS Didot, serif',
      color: '#000000',
      margin: '30px auto'
  };
  
  
  const paragraphStyle = {
    fontSize: '22px',
    color: '#000000',
  
    fontFamily: 'GFS Didot, serif',
    margin: '2rem auto',
  
    maxWidth: '500px', // Consistent with the other paragraphs
    lineHeight: '1.6',
    marginLeft: 'auto',
    marginRight: 'auto',
  };
  
  const linkStyle = {
    textDecoration: 'none', // Removes underline from links
    fontFamily: 'GFS Didot, serif',
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
    fontFamily: 'Playfair Display, serif',
    margin: '1rem auto',
    maxWidth: '100%',
    fontStyle: 'italic',
  };
  
  
  const blogContent = (
    <div className="container">
     
     <Helmet>
  <title>Sharon Tate's Coquette 1960's Bridal Makeup - Jackie Wyers</title>
  <link rel="canonical" href="https://jackiewyers.beauty/sharontatebridal" />

  <meta name="description" content="A vintage step-by-step guide on recreating Sharon Tate's iconic 60s bridal makeup look, featuring tips and techniques by Jackie Wyers." />
  <meta name="keywords" content="Sharon Tate, 60s Bridal Look, Jackie Wyers, Bridal Makeup Tutorial, Vintage Beauty, Iconic Looks, Time Travel Tutorials, Classic Beauty, Old Hollywood, Coquette makeup, bridal beauty, vintage bridal makeup, 1960s makeup, Sharon Tate style, beauty influencer tutorials, retro beauty, vintage glamour, iconic bridal styles, Sharon Tate makeup, Time Travel Tutorials, retro bridal hair, soft bridal glam, Sharon Tate eyeliner, 60s wedding look, vintage wedding inspiration, Jackie Wyers beauty, flower crown bridal look, bohemian bridal makeup, natural bridal look, soft glam makeup, vintage beauty secrets, makeup tips, classic bridal beauty, Old Hollywood wedding, beauty influencer tips, iconic 60s style, bridal beauty looks, romantic makeup tutorial, Sharon Tate wedding, Sharon Tate inspired, boho bridal makeup, soft vintage waves, bridal hair inspiration, iconic beauty tutorials" />

  <meta property="og:title" content="Sharon Tate's Coquette 1960's Bridal Makeup - Jackie Wyers" />
  <meta property="og:description" content="A vintage step-by-step guide on recreating Sharon Tate's iconic 60s bridal makeup look, featuring tips and techniques by Jackie Wyers." />
  <meta property="og:image" content="https://jackiewyers.beauty/Images/Articles/SharonTateBridal/SharonTateBridalThumbnail.jpeg" />
  <meta property="og:url" content="https://jackiewyers.beauty/sharontatebridal" />
  <meta name="twitter:title" content="Sharon Tate's Coquette 1960's Bridal Makeup - Jackie Wyers" />
  <meta name="twitter:description" content="A vintage step-by-step guide on recreating Sharon Tate's iconic 60s bridal makeup look, featuring tips and techniques by Jackie Wyers." />
  <meta name="twitter:image" content="https://jackiewyers.beauty/Images/Articles/SharonTateBridal/SharonTateBridalThumbnail.jpeg" />
  <meta name="twitter:card" content="summary_large_image" />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Sharon Tate's Coquette 1960's Bridal Makeup - Jackie Wyers",
        "description": "A vintage step-by-step guide on recreating Sharon Tate's iconic 60s bridal makeup look, featuring tips and techniques by Jackie Wyers.",
        "image": "https://jackiewyers.beauty/Images/Articles/SharonTateBridal/SharonTateBridalThumbnail.jpeg",
        "author": {
          "@type": "Person",
          "name": "Jackie Wyers"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Jackie Wyers Beauty",
          "logo": {
            "@type": "ImageObject",
            "url": "https://jackiewyers.beauty/Images/Articles/Signature.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://jackiewyers.beauty/sharontatebridal"
        },
        "datePublished": "2024-07-27",
        "dateModified": "2024-09-20"
      }
    `}
  </script>

  {/* Google Analytics Script */}
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-RT6GR7JXYG"></script>
  <script>
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-RT6GR7JXYG');
    `}
  </script>

  {/* Google Ads Script */}
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4660168246825318" crossorigin="anonymous"></script>
</Helmet>


<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <a href="/timetraveltutorials" style={{ fontFamily: 'GFS Didot, serif', fontSize: '1rem', color: '#000000', textDecoration: 'none' }}>
          BEAUTY // TIME TRAVEL TUTORIALS
        </a>
      </div>

      <ArticleTitle
  mainTitle="Sharon Tate's Coquette 1960's Bridal Makeup"
  subTitle="A vintage step-by-step guide"
  author="Jackie Wyers"
  publishDate="January 24th, 2024"
/>


      <ResponsiveYoutube src="https://www.youtube.com/embed/y0vHs6pRC3Y?si=LJlIhHJgDm0pehAu" title="Sharon Tate Iconic 60's Bridal Makeup Tutorial" />

      <div style = {{textAlign: 'center', margin: '10px auto' }}>
<SubscribeButton />
</div>

<p style={{ margin: '20px auto', textAlign: 'center', fontSize: '1.1rem', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
</p>

      <DropCap1 text="Welcome back to Time Travel Tutorials - the series where we embrace the vintage vibes from the beauties of the past. In this edition, we're shining the spotlight on the stunning Sharon Tate. Renowned as an American actress and model, Tate left a lasting impression with her role in 'Valley of the Dolls' (1967). Hailed as Hollywood's most promising starlet of her time, Sharon's distinctive makeup, hair, and fashion sense continue to captivate and inspire women to this day." />
      <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
      <p style={paragraphStyle}>
        Today, we'll delve into her unique and playful bridal style, which embodies a vintage charm while remaining wonderfully contemporary for today's brides!
      </p>

      <div style={gridContainerStyle}>
      <a href="https://www.instagram.com/reel/C2f93WyOC0j/?hl=en" target="_blank" rel="noopener noreferrer">
        <img src={Sharon2} alt="Jackie Wyers Instagrammed Sharon Inspired Look" style={{ width: '100%' }} />
      </a>
      </div>

      <h2 style={headingStyle}>The Essentials of Sharon Tate's Makeup Style</h2>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={SharonFace} alt="Sharon Tate 60s Makeup" style={{ width: '100%' }} />
      </div>

      <p style={paragraphStyle}>
        Sharon Tate's makeup style, characterized by her striking deep-set eyes and an exaggerated, graphic crease, is a hallmark of the 60s beauty. Her lashes, often lengthened with falsies, added to her captivating doe-eyed appearance. Her bohemian flair, complemented by a sun-kissed, Californian glow, deepened with bronzer, set her apart. Vintage photos of Sharon feel more 1970s as she was ahead of the fashion curve.
      </p>

      <h2 style={headingStyle}>Preparation and Base Makeup</h2>
      <p style={paragraphStyle}>
        Start with a well-moisturized face. Use a foundation that offers a natural, radiant finish. Sharon's look is all about a flawless but not overly matte complexion. A foundation like Charlotte Tilbury’s Light Wonder provides the perfect canvas.
      </p>
     <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
      <ResponsiveIframe src="https://shopmy.us/collections/public/490583?noHeader=true" title="Foundation Choices" />

      <h2 style={headingStyle}>Eyes, The Focal Point</h2>
      <p style={paragraphStyle}>
  For the eyes, begin with a hydrating eye cream to ensure the area is well-prepped for makeup. Sharon's look focuses on a graphic crease, without being overpowering. Use a light matte eyeshadow as a base, preferably with a slight pink undertone, to emulate the soft glam of the 60s.
  </p>
  <p style={paragraphStyle}>

   Adding depth to the crease with matte taupe shades creates the illusion of deeper-set eyes, a signature element in Tate’s style. Sharon’s eye makeup isn’t complete without eyeliner. Choose a grey shade for a softer look than black. Create a half-moon shape that extends above your inner crease, dipping down to meet your natural eye crease and fade downwards. This shape is quintessentially Sharon!
   </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/490599?noHeader=true" title="Eye Makeup Essentials" />

      <h2 style={headingStyle}>Lashes and Brows</h2>
      <p style={paragraphStyle}>
  Opt for false lashes that start from the mid-eye to the outer corner, creating a lifted, open-eye effect. Keep the brows natural and well-groomed, defining the upper part of the brow upwards.
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/490744?noHeader=true" title="Lashes and Brows Products" />
     <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>Face Sculpting and Highlighting</h2>
      <p style={paragraphStyle}>
  Use a light hand to sculpt and contour the face, focusing on the cheekbones, jawline, and hairline. Sharon's look isn't about sharp contours but gentle, sun-kissed definition. Highlight the high points of your face with a soft, luminous highlighter.
</p>

      <h2 style={headingStyle}>Lips, Subtle and Chic</h2>
      <p style={paragraphStyle}>
  Finish the look with a nude lip color, something that enhances your natural lip shade. A light application of a nude lipstick, followed by a non-sticky lip balm or gloss, will give you the perfect bridal pout.
</p>

      <p style={paragraphStyle}>
  Today, we'll delve into her unique and playful bridal style, which embodies a <a href="https://jackiewyers.beauty/bridalstyles" target="_blank" rel="noopener noreferrer" style={linkStyle}>vintage charm</a> while remaining wonderfully contemporary for today's brides!
</p>

<p style={paragraphStyle}>
  Sharon Tate's makeup style, characterized by her striking deep-set eyes and an exaggerated, graphic crease, is a hallmark of the 60s beauty. Her lashes, often lengthened with falsies, added to her captivating doe-eyed appearance. Her bohemian flair, complemented by a sun-kissed, <a href="https://jackiewyers.beauty/californianglow" target="_blank" rel="noopener noreferrer" style={linkStyle}>Californian glow</a>, deepened with bronzer, set her apart. Vintage photos of Sharon feel more 1970s as she was ahead of the fashion curve.
</p>

<p style={paragraphStyle}>
  Start with a well-moisturized face. Use a foundation that offers a natural, radiant finish. Sharon's look is all about a flawless but not overly matte complexion. A foundation like <a href="https://www.charlottetilbury.com/product/light-wonder" target="_blank" rel="noopener noreferrer" style={linkStyle}>Charlotte Tilbury’s Light Wonder</a> provides the perfect canvas.
</p>




      <ResponsiveIframe src="https://shopmy.us/collections/public/490800?noHeader=true" title="Nude Lips Products" />

      <h2 style={headingStyle}>Sharon Tate Wedding Dress and More</h2>
      <p style={paragraphStyle}>
  Sharon Tate's bridal makeup, an exquisite blend of 60s glamour and sun-kissed beauty, is a perfect tribute to her style. Her iconic <a href="https://jackiewyers.beauty/babydollweddingdress" target="_blank" rel="noopener noreferrer" style={linkStyle}>Babydoll Wedding Dress</a>, modern for its time, remains a fashionable choice. Explore our curated collection of Sharon Tate wedding dress replicas and similar styles below!
</p>
      <a href="https://www.instagram.com/p/CnTKGRGuAhJ/?hl=en" target="_blank" rel="noopener noreferrer">
        <img src={Sharon16} alt="Sharon Tate Wedding Dress" style={{ width: '100%' }} />
      </a>

      <ResponsiveIframe src="https://shopmy.us/collections/public/492227?noHeader=true" title="Wedding Dress Collection" />
     <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>Discover More Vintage-Inspired Looks</h2>
      <p style={paragraphStyle}>
  Discover more vintage-inspired bridal looks and time travel tutorials here on <a href="https://jackiewyers.beauty" target="_blank" rel="noopener noreferrer" style={linkStyle}>jackiewyers.beauty</a> & follow on IG @ <a href="https://www.instagram.com/jackiewyers/?hl=en" target="_blank" rel="noopener noreferrer" style={linkStyle}>Jackiewyers</a> for short form tutorials.
</p>

      <p style={paragraphStyle}>   
  Thank you for reading and if you want to be featured on my site, try out this look and please tag me as I’d love to share your rendition on my socials! I love to see you switch up your style with confidence.
</p>

  
<NextArticle
      link="/sophialoren"
      imgSrc={sophia}
      altText="Sharon Tate's Bohemian Style Tutorial"
      linkText="MORE VINTAGE VIBES →"
      containerStyle={{ margin: '1rem 0' }} // customize as needed
      linkStyle={{ color: '#000000', fontSize: '1.05rem' }} // customize as needed
      imgStyle={{ borderRadius: '10px' }} // customize as needed
    />

   
      <div style={{ textAlign: 'center' }}>
        <a href="/vintagevibesmerch" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={teespring} alt="Vintage Vibes Merch" style={{ width: '100%', maxWidth: '1400px', display: 'block' }} />
          SHOP VINTAGE VIBES MERCH →
        </a>
      </div>

      <div style={{ textAlign: 'center' }}>
        <img src={signature} alt="Signature of Jackie Wyers" style={{ width: '100%', height: 'auto' }} />
      </div>
    
      <Comments website-id={websiteId} page-id={'Sharon-Tate-Post'} />
    </div>
  );

  return (
    <div ref={blogRef}>
      <Card
        title="Sharon Tate's Coquette 1960's Bridal Makeup"
        description="A vintage step-by-step guide"
        blogContent={blogContent}
      />
 



    </div>
  );
};

export default SharonTatePost;







