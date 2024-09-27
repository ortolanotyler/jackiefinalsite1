import React, { useRef, useEffect } from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import { initGA, logPageView } from '../../../analytics';
import { Helmet } from'react-helmet';
import DropCap1 from '../../Travel/DropCap1';
import ArticleTitle from '../../../Components/ArticleTitle';
import SocialShare from '../../../Home/SocialShare';

const title = `${process.env.PUBLIC_URL}/Images/Articles/BridalMakeup/BridalTrialMakeupThumb.png`;
const image1 = `${process.env.PUBLIC_URL}/Images/Articles/BridalMakeup/Bridal1.png`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/BridalMakeup/BridalMakeup2.png`;
const image3 = `${process.env.PUBLIC_URL}/Images/Articles/BridalMakeup/Bridal3.png`;

const sharon = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateBridal/SHARONTATEBRIDAL.jpeg`;

const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
  <div
    style={{
      padding: '10px 20px', // Existing padding
      margin: '1rem auto',
      maxWidth: '800px', // Control max width to center the content
      padding: '10px', // Add padding to prevent text from touching the edges
    }}
  >
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);
  
  const BridalMakeup = () => {
  
    useEffect(() => {
      initGA();
      logPageView('/bridalmakeup');
    }, []);
  
  
    const websiteId = '10910';
    const blogRef = useRef(null);
  
 
    const headingStyle = {
      textAlign: 'center',
      fontSize: '2.5rem',
      fontWeight: '100',
      fontFamily: 'Playfair Display, serif',
      color: '#000000',
      maxWidth: '95%',
  
      margin: '30px auto'
  };
  
  
  const paragraphStyle = {
    fontSize: '22px',
    color: '#000000',
    
    fontFamily: 'Georgia, serif',
    fontWeight: 'regular',
    
    margin: '5px 5px',
    
    maxWidth: '100%',
      lineHeight: '1.6',
    
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
      maxWidth: '95%',
      margin: '0 2rem'
  };
  
  const imageStyle = {
    display: 'block',
    margin: '1rem auto',
    borderRadius: '0px',
    maxWidth: '95%',
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
    maxWidth: '95%',
    height: '520px', // Maintains original height
    border: 'none',
    scrolling: 'no',
  };
  
  const captionStyle = {
    textAlign: 'center',
    fontSize: '1.1rem',
    fontFamily: 'Raleway, serif',
    fontWeight: 'normal',
    margin: '0 auto',
    maxWidth: '85%',
    fontStyle: 'italic',
  };
  
  
  const blogContent = (
    <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
   <Helmet>
  <title>Bridal Makeup Trial: What I Loved and What I'll Change! - Jackie Wyers</title>
  <link rel="canonical" href="https://jackiewyers.beauty/bridalmakeup" />

  <meta name="description" content="A detailed review of a trial run for Jackie's wedding makeup: what she loved, what she'll do differently on her big day." />
  <meta name="keywords" content="Bridal Makeup, Wedding Makeup, Makeup Tutorial, Jackie Wyers, Bridal Beauty, Wedding Day Makeup, bridal look, bridal blush, makeup tips, Charlotte Tilbury foundation, Rare Beauty blush, wedding day makeup tips, bridal skin prep, bridal setting spray, natural bridal makeup, bridal lashes, bridal eye makeup, waterproof makeup, bridal contour, soft bridal makeup, wedding makeup products, bridal beauty inspiration, wedding day glam, fairytale bridal look, champagne bridal makeup, DIY bridal makeup, timeless bridal makeup" />

  <meta property="og:title" content="Bridal Makeup Trial: What I Loved and What I'll Change! - Jackie Wyers" />
  <meta property="og:description" content="A detailed review of a trial run for Jackie's wedding makeup: what she loved, what she'll do differently on her big day." />
  <meta property="og:image" content="https://jackiewyers.beauty/Images/Articles/BridalMakeup/BridalTrialMakeupThumb.jpg" />
  <meta property="og:url" content="https://jackiewyers.beauty/bridalmakeup" />
  <meta name="twitter:title" content="Bridal Makeup Trial: What I Loved and What I'll Change! - Jackie Wyers" />
  <meta name="twitter:description" content="A detailed review of a trial run for Jackie's wedding makeup: what she loved, what she'll do differently on her big day." />
  <meta name="twitter:image" content="https://jackiewyers.beauty/Images/Articles/BridalMakeup/BridalTrialMakeupThumb.jpg" />
  <meta name="twitter:card" content="summary_large_image" />

  {/* Google Analytics Script */}
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-RT6GR7JXYG"></script>
  <script src={`${process.env.PUBLIC_URL}/analytics.js`} async></script>

  {/* Google Ads Script */}

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Bridal Makeup Trial: What I Loved and What I'll Change! - Jackie Wyers",
        "description": "A detailed review of a trial run for Jackie's wedding makeup: what she loved, what she'll do differently on her big day.",
        "image": "https://jackiewyers.beauty/Images/Articles/BridalMakeup/BridalTrialMakeupThumb.jpg",
        "author": {
          "@type": "Person",
          "name": "Jackie Wyers"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Jackie Wyers Beauty",
          "logo": {
            "@type": "ImageObject",
            "url": "https://jackiewyers.beauty/logo.jpg"
          }
        },
        "datePublished": "2024-07-27",
        "dateModified": "2024-09-23",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://jackiewyers.beauty/bridalmakeup"
        }
      }
    `}
  </script>
</Helmet>

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <a href="/trends" style={{ fontFamily: 'GFS Didot, serif', fontSize: '1rem', color: '#000000', textDecoration: 'none' }}>
          BEAUTY // TRENDS
        </a>
      </div>


      <ArticleTitle
  mainTitle="Bridal Makeup Trial: What I loved and What I'll Change!"
  subTitle="Perfect products for a princess inspired bridal look"
  author="Jackie Wyers"
  publishDate="June 25th, 2024"
/>

<SocialShare 
  url="https://jackiewyers.beauty/bridalmakeup" 
  title="Bridal Makeup Trial: What I Loved and What I'll Change! - Jackie Wyers" 
  imageUrl="https://jackiewyers.beauty/Images/Articles/BridalMakeup/BridalTrialMakeupThumb.jpg" 
/>

      <ResponsiveYoutube src="https://www.youtube.com/embed/UQU9Fufug4M?si=5b2wn8qqbcRo1GVG" title="WEDDING DRESS SHOPPING🕊️& Bridal Makeup Trial🎀" />
  
<div style = {{textAlign: 'center', margin: '10px auto' }}>
<SubscribeButton />
</div>
<p style={{ margin: '20px auto', textAlign: 'center', fontSize: '1.1rem', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
</p>
      <DropCap1 text="I recently had a fabulous time trying on wedding dresses at Natalie Rose Bridal, and I took the opportunity to attempt a makeup trial to see how everything would look and feel in videos and photos. In this post, I’ll break down the products used and share my thoughts on what worked and what I might tweak for the big day." />
      



<p style={paragraphStyle}>
  Let’s dive into the makeup details and some essential bridal makeup tips. For a full guide on how to prep your skin, check out my detailed <a href="https://jackiewyers.beauty/skinprep" target="_blank" rel="noopener noreferrer" style={linkStyle}>bridal skin prep guide</a> that ensures a flawless base for your big day.
</p>
      <div style={gridContainerStyle}>
      <a href="https://www.instagram.com/p/C8R4Qmyuq6n/?img_index=1" target="_blank" rel="noopener noreferrer">
    
      <img src={image1} alt="Jackie Wyers Bridal" style={{ width: '100%' }} />
      </a>
        </div>
     
      <p style={headingStyle}>A Venue-Inspired Look</p>
      <p style={paragraphStyle}>
        Since my venue for the day was Natalie Rose Bridal boutique, I embraced its enchanting fairytale ambiance when selecting products. The whimsical stone chimney, pink wainscoting, and dusty rose velvet curtains set the perfect scene for a princess-inspired makeup and hairstyle. I started with the Rare Beauty Soft Pinch Luminous Powder Blush in the shade Happy, carefully selecting other products to complement the glowing pink cheek colour.
      </p>
      <div>
        <img src={image2} alt="Jackie Wyers Bridal" style={{ width: '100%' }} />
      </div>
      <h2 style={headingStyle}>Product Breakdown and Bridal Makeup Tips</h2>
      <p style={paragraphStyle}>
  <strong>Skin Prep:</strong> It's crucial! Start prepping your skin well ahead of the big day. Stay hydrated and ensure you're well-rested. For a pre-makeup boost, I recommend using <a href="https://jackiewyers.beauty/valmont-prime-renewing-pack" target="_blank" rel="noopener noreferrer" style={linkStyle}>Valmont's Prime Renewing Pack</a>, which works wonders as an overnight mask and a pre-foundation moisturizer.
</p>     
      <ResponsiveIframe 
  src="https://shopmy.us/collections/public/635855?noHeader=true" 
  title="Bridal Makeup Recommendations - Skin Prep Essentials" 
  alt="Collection of skin prep essentials for bridal makeup, including Valmont Prime Renewing Pack, recommended for flawless wedding day skin preparation." 
/>
      
      
<p style={paragraphStyle}>
  <strong>Foundation:</strong> My favourite summer foundation is the <a href="https://www.charlottetilbury.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Charlotte Tilbury Beautiful Skin Foundation</a> for photo-ready coverage. For those seeking more coverage, try <a href="https://www.giorgioarmanibeauty-usa.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Giorgio Armani’s Luminous Silk Foundation</a>—just make sure to test any foundation well before your wedding day.
</p>
     
<p style={paragraphStyle}>
  <strong>Highlight and Contour:</strong> I used <a href="https://www.mariomakeup.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Mario’s Sculpting Stick</a> for contouring and <a href="https://www.yensa.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Yensa's Super Serum Silk Concealer</a> to cancel out any darkness under the eyes. For more tips, visit my <a href="https://jackiewyers.beauty/contour-guide" target="_blank" rel="noopener noreferrer" style={linkStyle}>contour guide</a>.
</p>
      <ResponsiveIframe 
  src="https://shopmy.us/collections/public/635858?noHeader=true" 
  title="Bridal Makeup Recommendations - Highlight and Contour Products" 
  alt="Collection of contour and highlight products for bridal makeup, featuring Mario Sculpting Stick and Yensa Super Serum Silk Concealer for a sculpted bridal look." 
/>
      

<p style={paragraphStyle}>
  <strong>Blushing Bride Cheeks:</strong> The focal point of the look was the <a href="https://www.rarebeauty.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Rare Beauty Luminous Blush</a> paired with <a href="https://www.charlottetilbury.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Charlotte Tilbury's Spotlight Highlight</a>. Check out more blush tips in my <a href="https://jackiewyers.beauty/blushingbride" target="_blank" rel="noopener noreferrer" style={linkStyle}>blush guide</a>.
</p>      <ResponsiveIframe 
  src="https://shopmy.us/collections/public/635859?noHeader=true" 
  title="Bridal Makeup Recommendations - Blushing Bride Cheeks" 
  alt="Bridal blush and highlighter collection with Rare Beauty Luminous Blush and Charlotte Tilbury Spotlight Highlight, perfect for a glowing bridal makeup look." 
/>      

<p style={paragraphStyle}>
  <strong>Brows:</strong> I kept my brows full and natural using <a href="https://www.florasis.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Florasis Luodai Eyebrow Pencil</a> and the <a href="https://www.benefitcosmetics.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Benefit 24-hour brow setter</a>. 
</p>          
      <ResponsiveIframe 
  src="https://shopmy.us/collections/public/635861?noHeader=true" 
  title="Bridal Makeup Recommendations - Brow Products" 
  alt="Collection of brow products including Florasis Luodai Eyebrow Pencil and Benefit 24-hour brow setter, designed to create full, natural bridal brows inspired by Brooke Shields." 
/>      
     
     
     
     

<p style={paragraphStyle}>
  <strong>A Nostalgic Eye Palette:</strong> For eyes, I chose neutral tones from the <a href="https://www.maccosmetics.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Cinderella and MAC Collection</a>—a nod to my early YouTube days. 
</p>     
      <p style={paragraphStyle}><strong>Go Waterproof:</strong> For the final touch on the eyes, I added a bit of black eyeliner to my inner corners and tight line, along with black liquid liner for a small wing. While I opted not to use waterproof liners—since I don't usually have issues with smudging—I always recommend waterproof mascara. It's an absolute must, especially for those teary eyed moments that might just catch you off guard on your big day!</p>

     

      <ResponsiveIframe 
  src="https://shopmy.us/collections/public/635862?noHeader=true" 
  title="Bridal Makeup Recommendations - Nostalgic Eye Palette" 
  alt="Bridal eye makeup palette collection featuring the Cinderella and MAC Collection, perfect for creating neutral tones with nostalgic charm for a bridal look." 
/>      
      

<p style={paragraphStyle}>
  <strong>Lashes & Lips:</strong> Complete your bridal look with soft lashes from <a href="https://www.velourbeauty.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Velour</a> or <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Isopia lashes</a>. For lips, I preferred the cooler, deeper tones of <a href="https://www.charlottetilbury.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Charlotte Tilbury’s Iconic Nude</a>.
</p>

     
     
      <p style={paragraphStyle}>As for lips, this was one area I'd adjust from my trial. The lip liner I chose, Makeup Forever Anywhere Caffeine, felt too rosy as it began to wear for this look. In close-up photos in this article, I added some of the Charlotte Tilbury’s Iconic Nude to the lip combo, which I preferred for its cooler, deeper tone. I went with a nude gloss, but in some lighting, it appeared a bit too warm as well. A baby pink gloss might have better complemented the overall look.</p>
     
      <ResponsiveIframe 
  src="https://shopmy.us/collections/public/635865?noHeader=true" 
  title="Bridal Makeup Recommendations - Lashes & Lips" 
  alt="Collection of bridal lashes and lip products including Velour lashes, Isopia lashes, and Charlotte Tilbury lip products, ideal for completing a timeless bridal look." 
/>      
     
     
     
     
  
     


<p style={paragraphStyle}>
  <strong>Setting the Makeup:</strong> A good setting spray is a must! I recommend the Mist of Dawn for its fine mist and long-lasting power. 
</p>

      <ResponsiveIframe 
  src="https://shopmy.us/collections/public/635866?noHeader=true" 
  title="Bridal Makeup Recommendations - Setting Spray" 
  alt="Bridal makeup setting sprays collection, featuring Mist of Dawn for long-lasting wear and a flawless finish on your wedding day." 
/>      
     
     
      <h2 style={headingStyle}>Final Verdict</h2>

      <div>
          <img src={image3} alt="Jackie Wyers Bridal" style={{ width: '100%' }} />
        </div>
      <p style={paragraphStyle}>
        This makeup trial was a success, drawing subtle inspiration from beauty icons like{" "}
        <a
          href="https://www.youtube.com/watch?v=hotUsepeDgc&t=15s"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'black' }}
        >
          Margot Robbie in "The Wolf of Wall Street"
        </a>{" "}
        for the eyeshadows, and{" "}
        <a
          href="https://www.youtube.com/watch?v=yC8Sf9U3Aww&t=24s"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'black' }}
        >
          Brooke Shields’ iconic natural brows
        </a>
        . The products held up great and I especially loved how the blush looked in person, on camera, and in video in various light!
      </p>
      <p style={paragraphStyle}>My actual wedding dress is not as white as the dresses I tried on, but slightly more on the warmer, champagne side so I'm excited to adjust my makeup accordingly.</p>
   
     
      <p style={paragraphStyle}>Since I will be outside for much of the wedding day, I will skip gloss and go for a balm for moisture, but less stick. Nothing worse than hair in lipgloss!</p>
     
      
      <p style={paragraphStyle}>
  <strong>  What's Your Dream Bridal Look?  </strong>Let me know in the comments! If you need more inspiration, remember to check out my pop culture bridal styles on IG <a 
    href="https://www.instagram.com/p/C7YBzrco0BQ/?img_index=1" 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{ color: 'black' }}
  >
     here
  </a>. 
  Cheers to looking and feeling your best on your special day, and I hope this makeup gave you some tips and inspiration whether you are a bride-to-be or just love glamour!
</p>      <div style={{ textAlign: 'center' }}>
        <a href="/SharonTateBridal" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={sharon} alt="Vintage Vibes Merch" style={{ width: '100%', maxWidth: '1000px', display: 'block' }} />
          MORE BRIDAL →
        </a>
      </div>
      <div>
        <img src={signature} alt="Jackie Wyers Bridal" style={{ width: '100%' }} />
      </div>
     
      <Comments website-id={websiteId} page-id={"Las-bridalmmmkkup"} />
    </div>
  );

  return (
    <div ref={blogRef}>
      <Card
        title="Bridal Makeup Trial: What I loved and What I'll Change!"
        description="Perfect products for a princess inspired bridal look"
        blogContent={blogContent}
      />
    </div>
  );
};

export default BridalMakeup;
