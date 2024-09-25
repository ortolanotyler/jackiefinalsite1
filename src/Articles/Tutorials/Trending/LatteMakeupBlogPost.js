import React, { useRef, useEffect } from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import AdSenseAd from '../../../Advertising/Ads';
import { initGA, logPageView } from '../../../analytics';
import Helmet from'react-helmet';
import DropCap1 from '../../Travel/DropCap1';
import ArticleTitle from '../../../Components/ArticleTitle';
import NextArticle from '../../../Components/NextArticleComponent';

const title = `${process.env.PUBLIC_URL}/Images/Articles/LatteMakeup/LatteTitle.png`;
const Latte2 = `${process.env.PUBLIC_URL}/Images/Articles/LatteMakeup/LatteDouble.png`;
const Latte3 = `${process.env.PUBLIC_URL}/Images/Articles/LatteMakeup/LatteLookFaceChartFilledIn.jpg`;
const Latte16 = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;
const sugar = `${process.env.PUBLIC_URL}/Images/Articles/SugarPlumFairy/SUGARPLUMTHUMBNAIL.jpeg`;





const Card = ({ blogContent }) => (
  <div
    style={{
      padding: '0 1rem', // Consistent padding to prevent content from touching edges
      margin: '0 auto',
      maxWidth: '95%', // Use percentage for responsive scaling
      boxSizing: 'border-box', // Include padding in width calculations
    }}
  >
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);




  const LatteMakeupBlogPost = () => {
  
    useEffect(() => {
      initGA();
      logPageView('/lattemakeup');
    }, []);
  
  
    const websiteId = '10910';
    const blogRef = useRef(null);
  

    const heading2Style = {
      textAlign: 'center',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      fontFamily: 'Playfair Display, serif',
      color: '#000000',
      margin: '30px auto',
      maxWidth: '100%', // Allow space for margins
    };
  
    const headingStyle = {
      textAlign: 'center',
      fontSize: '2.5rem',
      fontWeight: '100',
      fontFamily: 'Playfair Display, serif',
      color: '#000000',
      margin: '10px auto',
      maxWidth: '100%', // Adjust max width for responsiveness
    };
  
    const paragraphStyle = {
      fontSize: '22px',
      color: '#000000',
      fontFamily: 'Playfair Display, serif',
      fontWeight: '100',
      margin: '0 auto',
      lineHeight: '1.6',
      margin: '0 auto',
      padding: '1rem 1rem', // Add padding to prevent cutoff
      boxSizing: 'border-box', // Include padding in the width
    };
  
    const linkStyle = {
      textDecoration: 'none',
      fontFamily: 'Playfair Display, serif',
      color: '#000000',
    };
  
    const gridContainerStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1rem',
      margin: '1rem auto',
      boxSizing: 'border-box',
    };
  
    const imageStyle = {
      display: 'block',
      margin: '1rem auto',
      borderRadius: '0px',
      height: 'auto',
    };
  
    const captionStyle = {
      textAlign: 'center',
      fontSize: '1rem',
      fontFamily: 'GFS Didot, sans-serif',
      fontWeight: 'normal',
      margin: '1rem auto',
   
      fontStyle: 'italic',
      padding: '0 20px', // Add padding for readability
      boxSizing: 'border-box',
    };
  
  
  
  const blogContent = (
    <div className="container">
   <Helmet>
  <title>Trend Report: How to Get The Latte Makeup Look - Jackie Wyers</title>
  <link rel="canonical" href="https://jackiewyers.beauty/lattemakeup" />

  <meta name="description" content="Learn how to master the trending Latte Makeup look with Jackie Wyers. This guide covers everything from tanned and natural bases to bronzed eyes for a cozy fall makeup vibe." />
  <meta name="keywords" content="Latte Makeup, Jackie Wyers, Makeup Tutorial, Fall Makeup Trends, Beauty Tips, Warm Toned Makeup, Tanielle Jai Makeup, Smokey Eye, Faux Freckles, Caramel Makeup, Contouring, Highlighting, Bronzer, Latte Beauty, Makeup Artist Tips, '90s Makeup, No Foundation Makeup, Glowy Skin, Makeup Techniques, Fall Beauty, Makeup for Warm Skin Tones" />

  <meta property="og:title" content="Latte Makeup Tutorial - Jackie Wyers" />
  <meta property="og:description" content="Learn how to master the trending Latte Makeup look with Jackie Wyers. This guide covers everything from tanned and natural bases to bronzed eyes for a cozy fall makeup vibe." />
  <meta property="og:image" content="https://jackiewyers.beauty/Images/Articles/LatteMakeup/LatteThumbnail.jpg" />
  <meta property="og:url" content="https://jackiewyers.beauty/lattemakeup" />

  <meta name="twitter:title" content="Latte Makeup Tutorial - Jackie Wyers" />
  <meta name="twitter:description" content="Learn how to master the trending Latte Makeup look with Jackie Wyers. This guide covers everything from tanned and natural bases to bronzed eyes for a cozy fall makeup vibe." />
  <meta name="twitter:image" content="https://jackiewyers.beauty/Images/Articles/LatteMakeup/LatteThumbnail.jpg" />
  <meta name="twitter:card" content="summary_large_image" />

  {/* Google Analytics Script */}
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-RT6GR7JXYG"></script>
  <script src={`${process.env.PUBLIC_URL}/analytics.js`} async></script>

  {/* Google Ads Script */}
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4660168246825318" crossorigin="anonymous"></script>

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Latte Makeup Tutorial - Jackie Wyers",
        "description": "Learn how to master the trending Latte Makeup look with Jackie Wyers. This guide covers everything from tanned and natural bases to bronzed eyes for a cozy fall makeup vibe.",
        "image": "https://jackiewyers.beauty/Images/Articles/LatteMakeup/LatteThumbnail.jpg",
        "author": {
          "@type": "Person",
          "name": "Jackie Wyers"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Jackie Wyers",
          "logo": {
            "@type": "ImageObject",
            "url": "https://jackiewyers.beauty/logo.png"
          }
        },
        "datePublished": "2024-07-27",
        "dateModified": "2024-09-20",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://jackiewyers.beauty/lattemakeup"
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
  mainTitle="Trend Report: How to Get The Latte Makeup Look"
  subTitle="Think cozy, warm, and chic!"
  author="Jackie Wyers"
  publishDate="Jan 22nd, 2024"
/>
  

      <ResponsiveYoutube src="https://www.youtube.com/embed/Jm0BdU88kr4?si=q_f9U-l_aZqaY83s" title="The LATTE MAKEUP TREND🧸☕️ A Talk-Through Makeup Tutorial🤎" />

      <div style = {{textAlign: 'center', margin: '10px auto' }}>
<SubscribeButton />
</div>

<p style={{ margin: '20px auto', textAlign: 'center', fontSize: '1.1rem', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
</p>


      <DropCap1 text="Hello, beauties! It's Jackie here with another trend report driven by the TikTok algorithm. The latte makeup look is all about embracing warm, tawny tones to create a '90s-inspired glam with a cozy vibe. Imagine a caramel-toned smokey eye, no foundation, faux freckles, and a milky lip. An artist whose work has been continuously referenced when creating this style of makeup is none other than Australia-based makeup artist Tanielle Jai. If you've ever shopped on Princess Polly and admired the campaign images with sultry, smokey makeup—that's all the makeup artisty of Tanielle Jai!" />
     <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
<div style={gridContainerStyle}>
        <a href="https://www.instagram.com/p/CvFsHXNO7nf/?img_index=1" target="_blank" rel="noopener noreferrer">
          <img src={Latte2} alt='Detailed Latte Makeup' style={{ width: '100%', maxWidth: '650px' }} />
        </a>
      </div>

      <p style={captionStyle}>
      See <a href="https://www.instagram.com/taniellejaimua/?hl=en" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>Tanielle Jai</a>'s work on Instagram.
      </p>

      <h2 style={headingStyle}>Get The Latte Makeup Look</h2>
      
      <div style={gridContainerStyle}>

      <img src={Latte3} alt='Latte Makeup Application' style={{ width: '100%', maxWidth: '650px' }} />
      
      </div>

     <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>The Base: Tanned and Natural</h2>
      <p style={paragraphStyle}>
  Applying self-tanner the night before can really help create a harmonious, warm canvas. Make sure you’ve moisturized the skin before makeup, and we are going with no foundation for this style, but I gave my skin a boost with <a href="https://www.charlottetilbury.com" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>Charlotte Tilbury Hollywood Flawless Filter</a> for a sheer glow with a hint of coverage.
</p>
      <h2 style={headingStyle}>Highlight and Contour</h2>
      <p style={paragraphStyle}>
  My favorite palette for warming up the skin and highlighting is the <a href="https://www.makeupforever.com" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>Make Up For Ever HD Skin sculpting palette</a>. These shades are sheer, so again the base won’t appear too heavy. While the foundation is natural, this style of makeup does call for contour and highlight!
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/493598?noHeader=true" title="Highlight and Contour Products" />

      
     <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>Yellow Based Bronzer</h2>
      <p style={paragraphStyle}>
        Unlike the typical warm, red-toned bronzers, this look calls for a yellow-based bronzer to add warmth to the skin and complement the caramel-toned eyeshadows coming up.
      </p>
      <p style={paragraphStyle}>
  Benefit Cosmetics <a href="https://www.benefitcosmetics.com/en-us/product/hoola-caramel" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>Hoola Caramel</a> is a great pick if you are fair-medium in skin tone. You can rock this look no matter your complexion, but it will suit warmer coloring best. <a href="https://www.youtube.com/watch?v=okXpvzknH9w&t=555s" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>See the espresso look for cool-toned skin</a>!
</p>
      <p style={paragraphStyle}>
        Apply the bronzer over the top of the subtle contouring to amp up the tanned goddess effect!
      </p>

      <h2 style={headingStyle}>Eye Makeup: Bronzed and Smoky</h2>
      <p style={paragraphStyle}>
        For the eyes, continue to use the Hoola Bronzer in Caramel into the crease and under the lash line for a soft smokey effect.
      </p>
      <p style={paragraphStyle}>
  Next, add a brown liner pencil to rim the lash line and softly fade into the crease. The <a href="https://colourpop.com" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>ColourPop</a> lipliner I used called BFF 3 is really creamy and easy to blend for this step, plus it is lighter than most traditional eyeliners on the market, making it appear softer. Make sure you're not using the eyeliner on the lips and eyes and sanitize between uses if you do opt for a lipliner on the eyes!
</p>
     <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
<p style={paragraphStyle}>
  Continue by picking a palette that has warm matte and shimmer tones like <a href="https://www.onesizebeauty.com" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>ONE/SIZE BY PATRICK STARRR | Visionary Eyeshadow Palette</a> to deepen up the outer corner of the eye and add a bronzer shimmer to the lid to pick up the light.
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/493604?noHeader=true" title="Eye Makeup Products" />

      

      <h2 style={headingStyle}>Brows</h2>
      <p style={paragraphStyle}>
  Inspired by <a href="https://www.instagram.com/taniellejaimua" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>Tanielle Jai</a>’s work, her models typically rock very bold, Brooke Shields-esque brows. Fill your brows in with natural strokes and set in place with a brow gel. I went REALLY bold, so feel free to tone the brow down to suit your preferences!
</p>

<p style={paragraphStyle}>
  Using a liquid liner, create more drama on the lash line and use this same liner to add beauty marks or faux freckles. This is a <a href="https://www.instagram.com/taniellejaimua" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>Tanielle Jai</a> signature step that is super fun to try out. Pop on an outer corner lash, and the eyes are complete!
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/493609?noHeader=true" title="Brow Products" />

      
     <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>Lips & Finishing Touches</h2>
      <p style={paragraphStyle}>
  For the lips, over-line them with a medium-toned caramel brown shade, and blur out again for no harsh lines. Add a lip plumper for a fuller look in a milky pink or nude shade.
</p>
      <p style={paragraphStyle}>
        The finishing touch to bring this glamorous look all together is to use a golden highlighter on the cheeks, chin, nose, and even collarbones for a radiant glow. Paired with gold jewelry and a simple white top, the makeup truly embraced the Golden Goddess aesthetic with the new trending title of “Latte Makeup.”
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/493611?noHeader=true" title="Lips & Finishing Touches Products" />

      

      <p style={paragraphStyle}>
  Want to be featured on my site? Tag me in your recreation or version of this look on Insta <a href="https://www.instagram.com/jackiewyers/?hl=en" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}><strong>@jackiewyers</strong></a>. I’d love to see you switch up your style with confidence!
</p>

      <div style={gridContainerStyle}>
      <img src={Latte16} alt='Jackie Wyers Signature' style={{ width: '100%', maxWidth: '1300px' }} />
      </div>
      <NextArticle
      link="/sugarplumfairy" 
      imgSrc={sugar}
      altText="Sugar Plum Fairy Trend Report Link"
      linkText="MORE BEAUTY TRENDS →"
      containerStyle={{ margin: '1rem 0' }} // customize as needed
      linkStyle={{ color: '#000000', fontSize: '1.05rem' }} // customize as needed
      imgStyle={{ borderRadius: '10px' }} // customize as needed
    />

     
    
      <Comments website-id={websiteId} page-id="latte" />
  
      <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
  
<div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
  
<div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>

    </div>
  );

  return (
    <div ref={blogRef}>
      <Card
        title="Trend Report: How to Get The Latte Makeup Look"
        description="Think cozy, warm, and chic!"
        blogContent={blogContent}
      />

 
    </div>
  );
};

export default LatteMakeupBlogPost;
