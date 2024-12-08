import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import DropCap1 from '../../Travel/DropCap1';
import ArticleTitle from '../../../Components/ArticleTitle';
import SocialShare from '../../../Home/SocialShare';
import DividerWithText from '../../../Home/DividerWithText';
import AdSenseAd from '../../../Home/Adsense';

const Balke3 = `${process.env.PUBLIC_URL}/Images/Articles/Balke/BalkeFaceChart.jpg`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;
const teespring = `${process.env.PUBLIC_URL}/Images/teespringbanner.jpeg`;

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

const BalkeBlog = () => {


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
  
  
    lineHeight: '1.25',
  
  };
  
  const linkStyle = {
  textDecoration: 'none', // Removes underline from links
  fontFamily: "Georgia, serif",
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
  <title>Iconic 60s Makeup Tutorial</title>
  <link rel="canonical" href="https://www.jackiewyers.beauty/balkeblog" />

  <meta name="description" content="Step-by-step guide on how to recreate the 1960s makeup and styling of model Ina Balke, as seen in the iconic photograph by Ted Russell." />
  <meta name="keywords" content="Ina Balke makeup, 1960s makeup tutorial, vintage makeup, Jackie Wyers makeup tutorial, Ted Russell photography, 60s beauty, classic makeup looks, retro makeup, Ina Balke style, how to do 60s makeup, vintage beauty, Jackie Wyers tutorials, vintage glamour, old Hollywood makeup, vintage hair and makeup, classic 60s style, iconic makeup looks" />

  <meta property="og:title" content="Iconic 60s Makeup Tutorial" />
  <meta property="og:description" content="Step-by-step guide on how to recreate the 1960s makeup and styling of model Ina Balke, as seen in the iconic photograph by Ted Russell." />
  <meta property="og:image" content="https://www.jackiewyers.beauty/Images/Articles/Balke/BALKETHUMBNAIL.jpeg" />
  <meta property="og:url" content="https://www.jackiewyers.beauty/balkeblog" />

  <meta name="twitter:title" content="Iconic 60s Makeup Tutorial" />
  <meta name="twitter:description" content="Step-by-step guide on how to recreate the 1960s makeup and styling of model Ina Balke, as seen in the iconic photograph by Ted Russell." />
  <meta name="twitter:image" content="https://www.jackiewyers.beauty/Images/Articles/Balke/BALKETHUMBNAIL.jpeg" />
  <meta name="twitter:card" content="summary_large_image" />



  {/* Google Ads Script */}

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Iconic 60s Makeup Tutorial",
        "description": "Step-by-step guide on how to recreate the 1960s makeup and styling of model Ina Balke, as seen in the iconic photograph by Ted Russell.",
        "image": "https://www.jackiewyers.beauty/Images/Articles/Balke/BalkeThumbnail.jpg",
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
          "@id": "https://www.jackiewyers.beauty/balkeblog"
        }
      }
    `}
  </script>
</Helmet>



<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <a href="/timetraveltutorials" style={{ fontFamily: 'GFS Didot, serif', fontSize: '1rem', color: '#000000', textDecoration: 'none' }}>
          BEAUTY // TIME TRAVEL TUTORIALS
        </a>
      </div>

      <ArticleTitle
  mainTitle="Iconic 60s Makeup Tutorial"
  subTitle="A '60's wink is a sexy Wink"
  author="Jackie Wyers"
  publishDate="Feb 20th, 2024"
/>
<SocialShare 
  url="https://www.jackiewyers.beauty/balkeblog" 
  title="Iconic 60s Makeup Tutorial" 
  imageUrl="https://www.jackiewyers.beauty/Images/Articles/Balke/BALKETHUMBNAIL.jpeg" 
/>


<div>
<ResponsiveYoutube src="https://www.youtube.com/embed/7HoL0rVmZHI?si=__Llh9tI2-K62uRQ" title="Iconic 60s Makeup Tutorial on Youtube" />
</div>

      <div style = {{ margin: '1rem auto' , textAlign: 'center'}}>
      <SubscribeButton />
      </div>

      <p style={{ margin: '1rem auto', textAlign: 'center', fontSize: '1rem', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
      All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
      </p>

      <DropCap1 text="Welcome back to another Time Travel Tutorials, where we admire and recreate beauty icons from the past. Today, let's delve into the 1960s through the portrait of model Ina Balke by the renowned photographer Ted Russell. For those of you who've ever searched on Pinterest for '60s makeup, chances are you've stumbled upon this stunning photograph. This article is your step-by-step guide on how to get the vintage makeup and styling as seen on Ina to try out yourself!" />
      
      


      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <iframe
    src="https://www.instagram.com/reel/C3nim61u_4Q/embed"
    width="550"
    height="1000"
    frameBorder="0"
    scrolling="no"
    allowtransparency="true"
    allow="encrypted-media"
    style={{ border: 'none', overflow: 'hidden' }}
    title="Ina Balke 1960s Makeup Instagram Reel"
  >

  </iframe>
    </div>

      <h2 style={headingStyle}>The Essence of 1960s Makeup</h2>

     

      <div style={gridContainerStyle}>
      <a href='https://www.instagram.com/reel/C3nim61u_4Q/?hl=en'>
          <img src={Balke3} alt="Close-up of Ina Balke's makeup" style={{ width: '100%', height: 'auto' }} />
        </a>
 </div>


<p style={paragraphStyle}>
  Ina Balke’s iconic wink showcases a classic '60s cut crease complemented by <a style={linkStyle} href="https://en.wikipedia.org/wiki/Matte_finish" target="_blank" rel="noreferrer">matte skin</a> and a peach lip. Her styling feels very <a style={linkStyle} href="https://en.wikipedia.org/wiki/Audrey_Hepburn" target="_blank" rel="noreferrer">Hepburn</a>, with a sophisticated black dress and both a cigarette and wine glass held up to her mouth. Her look is complete with a chic, brunette bob with blunt bangs, which I recreated with a fabulous <a style={linkStyle} href="https://www.vogue.com/article/best-wigs" target="_blank" rel="noreferrer">wig</a>! If you decide to give this tutorial a try, please be sure to tag me or send a photo to be featured on the blog - I'd love to see you in this glamorous style 🖤 .
</p>

<h2 style={headingStyle}>The Skin: Keep It Matte & Bright</h2>

      <p style={paragraphStyle}>
  This look is very glamorous, so let’s use a <a style={linkStyle} href="https://www.nyxcosmetics.com/face/concealer/cant-stop-wont-stop-contour-concealer/NYX_639.html" target="_blank" rel="noreferrer">high-coverage foundation</a> for a flawless base. Ina’s face looks bright and highlighted through the center, so go with a lighter high-coverage concealer overtop of your foundation base. I used the <a style={linkStyle} href="https://www.nyxcosmetics.com/face/concealer/cant-stop-wont-stop-contour-concealer/NYX_639.html" target="_blank" rel="noreferrer">NYX Can't Stop Won't Stop Concealer</a> in a V-shape under my eyes, which is a great drugstore option for a posh look!
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/493363?noHeader=true" title="Concealer Makeup Reccomendations 60s inspired" />

      <DividerWithText text = "Ad"/>
        <div className="ad-container">
  <AdSenseAd />
</div>
<DividerWithText text = "Ad"/>



      <h2 style={headingStyle}>Contour & Set The Skin</h2>

      <p style={paragraphStyle}>
  To add dimension and mature the face, use a <a style={linkStyle} href="https://www.byrdie.com/best-contour-palettes-4586694" target="_blank" rel="noreferrer">cool-toned contour</a> under the cheekbones and jawline. Keep the <a style={linkStyle} href="https://www.wikihow.com/Contour-Your-Nose" target="_blank" rel="noreferrer">nose contour</a> subtle to balance the soon-to-be dramatic eyes.
</p>



<p style={paragraphStyle}>
  For setting the highlighted areas, the Hourglass Radiant Powder is my go-to for a luminous finish, but the Revlon Photoready Translucent Finisher is a great budget-friendly option. Adding a powder that reflects light helps create that hyper-real base when photographed, as seen in the inspiration photo.
</p>

<h2 style={headingStyle}>Touch of Bronzer & Blush</h2>

<p style={paragraphStyle}>
  The Charlotte Tilbury Filmstar Bronze & Glow Contour Duo helps soften the contour and adds a natural glow. For blush, CHANEL's warm pink blush, shade 440 - QUINTESSENCE, adds the perfect touch of color. Remember, it's all about creating a natural, yet defined look for this sophisticated style!
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/493385?noHeader=true" title="Concealer Favs with Charlotte Tilbury" />

<h2 style={headingStyle}>Iconic 60s Eyeshadow with Rustic Tones</h2>

<p style={paragraphStyle}>
  Eye makeup is central to the 60s look. I used a matte white shadow for brightness on the lid, but you can opt for a pearly white or skin-toned shade for a more muted effect.
</p>

<p style={paragraphStyle}>
  For this eyeshadow look, I used the Too Faced Natural Lust Palette which was the perfect palette, but was limited edition and hard to find now! After doing some digging, I came across a similar palette called Melt Cosmetics Gemini Eyeshadow Palette which has the shades we will need.
</p>
<DividerWithText text = "Ad"/>
        <div className="ad-container">
  <AdSenseAd/>
</div>
<DividerWithText text = "Ad"/>

<p style={paragraphStyle}>
  Blend a yellow gold and a dingy green-bronze through the crease, fading towards the brow bone. When we cut the crease next, we will achieve that classic 60s shape, but having these rustic tones peeking above softens the look and makes any eye color pop.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/493455?noHeader=true" title="Eyeshadow Makeup Recommendations" />

<h2 style={headingStyle}>Cut That Crease!</h2>

<p style={paragraphStyle}>
  With a precise brush, create an exaggerated rounded crease with a black, matte shadow. Tilt your head back slightly to locate where your crease is and etch in the shadow slightly above the eye socket. Make sure the shadow doesn’t have fallout!
</p>

<p style={paragraphStyle}>
  From this initial crease line, smoke out the edges above the cut crease, fading into the gold and bronze. Clean up the black shadow one more time by adding intensity to the exaggerated crease with as much precision as you can.
</p>

<h2 style={headingStyle}>1960s Eye Makeup Tips for Hooded Eyes</h2>

<p style={paragraphStyle}>
  If you have hooded eyes, you can still totally have fun with a 1960s look. You can do the same steps as listed above, though the eye may appear more “graphic” rather than create the illusion of deeper set eyes. I think both are equally as stunning!
</p>

<p style={paragraphStyle}>
  You can also take 1960s inspiration from icons like Brigitte Bardot who have beautiful vintage looks with hooded eyes and go for more of a classic smokey eye with winged liner if you are not loving the graphic crease. See B.B tutorials for more inspiration.
</p>

<h2 style={headingStyle}>Brush Recommendations</h2>

<p style={paragraphStyle}>
  This look takes patience and blending, but great brushes can definitely help. I’m revisiting this tutorial years later, and thought I’d suggest my favourite current brushes from Rephr to help get the look listed below - especially the tiny 24 brush for the cut crease!
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/493460?noHeader=true" title="Collection name here" />

<h2 style={headingStyle}>Winged Liner & Fabulous Lashes</h2>

<p style={paragraphStyle}>
  For the eyeliner, start with a black pencil liner to tight-line the eye and add dots along the bottom lashes. The dots along the bottom will help create a doll-like look once mascara is applied to the bottom lashes.
</p>

<p style={paragraphStyle}>
  Add matte black liquid liner in a bold wing for a retro finish that helps elongate the eye.
</p>

<p style={paragraphStyle}>
  Double Demi Wispies from Ardell complement the thick liner, paired with Too Faced Better Than Sex Mascara for glamorous lashes. Focus on blending your natural lashes with the falsies at the base rather than lengthening them with mascara. We don’t want any clumps to the wispy lashes!
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/493465?noHeader=true" title="Collection name here" />

<h2 style={headingStyle}>The Perfect Pout</h2>

<p style={paragraphStyle}>
  Define your lips with your favorite nude lipliner, mine is by far the Charlotte Tilbury's Iconic Nude Lip Cheat! Slightly over line the upper lip in a round shape for that perfect pout. Since her lips are covered by the wine glass, it’s a bit of guesswork but I chose NARS Lipstick in Tolede and loved how it turned out. This lipstick shade is described as a medium deep coral if you are looking for something similar!
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/493470?noHeader=true" title="Collection name here" />

<h2 style={headingStyle}>The Finishing Touches</h2>

<p style={paragraphStyle}>
  Now that we have a glamorous 60s makeup look, it’s time to style the hair. If you have a bob and bangs, you are already set! I chose a wig I bought from YesStyle and added a light hairspray to help style bangs. A black dress, especially with a high neckline really adds sophistication to this timeless style. Go for gold jewelry to help bring out the warm tones in the eye makeup.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/565751??noHeader=true" title="Collection name here" />

<p style={paragraphStyle}>
  Whether you're a fan of the ‘60s or trying to expand your makeup skills, I hope you found this guide a fun read and it inspires you to try this cut-crease style. More well-known names from the 1960s beauty scene like Jean Shrimpton (the face of the ‘60s), Audrey Hepburn, and Brigitte Bardot can be found on my YouTube channel if you want to keep watching.
</p>

<p style={paragraphStyle}>
  Thank you for reading, and if you want to be featured on my site, submit your recreation or version of this look to me on Instagram! I’d love to see you switch up your style with confidence!
</p>

<div style={{ textAlign: 'center' }}>
  <a href="/vintagevibesmerch" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
    <img src={teespring} alt="Vintage Vibes Merchandise" style={{ width: '100%', maxWidth: '100%', display: 'block' }} />
    SHOP VINTAGE VIBES MERCH →
  </a>
</div>


      <div>
        <img src={signature} alt="Jackie Wyers Signature XoXo" style={{ width: '100%' }} />
      </div>
      <div style = {{padding: '1rem 2rem'}}>
      <Comments website-id={websiteId} page-id={'balke-blog'} />
</div>
    </div>
  );



  return (
    <div ref={blogRef}>
      <Card
        title="Iconic 60s Makeup Tutorial"
        description="A '60s wink is a sexy wink"
        blogContent={blogContent}
      />
     
          



    </div>
  );
};

export default BalkeBlog;
