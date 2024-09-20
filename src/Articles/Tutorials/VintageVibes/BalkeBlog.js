import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import '../../ExampleTutorial1.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import AdSenseAd from '../../../Advertising/Ads';
import { initGA, logPageView } from '../../../analytics';
import DropCap1 from '../../Travel/DropCap1';
import ArticleTitle from '../../../Components/ArticleTitle';

const Balke3 = `${process.env.PUBLIC_URL}/Images/Articles/Balke/BalkeFaceChart.jpg`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;
const teespring = `${process.env.PUBLIC_URL}/Images/teespringbanner.jpeg`;

const Card = ({ blogContent }) => (
  
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  
);

const BalkeBlog = () => {

  useEffect(() => {
    initGA();
    logPageView('/balkeblog');
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

  maxWidth: '525px', // Consistent with the other paragraphs
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
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  flexWrap: 'wrap',
  margin: '1rem 0'
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
  <title>Ina Balke 1960s Makeup Tutorial - Jackie Wyers</title>
  <link rel="canonical" href="https://jackiewyers.beauty/balkeblog" />

  <meta name="description" content="Step-by-step guide on how to recreate the 1960s makeup and styling of model Ina Balke, as seen in the iconic photograph by Ted Russell." />
  <meta name="keywords" content="Ina Balke makeup, 1960s makeup tutorial, vintage makeup, Jackie Wyers makeup tutorial, Ted Russell photography, 60s beauty, classic makeup looks, retro makeup, Ina Balke style, how to do 60s makeup, vintage beauty, Jackie Wyers tutorials, vintage glamour, old Hollywood makeup, vintage hair and makeup, classic 60s style, iconic makeup looks" />

  <meta property="og:title" content="Ina Balke 1960s Makeup Tutorial - Jackie Wyers" />
  <meta property="og:description" content="Step-by-step guide on how to recreate the 1960s makeup and styling of model Ina Balke, as seen in the iconic photograph by Ted Russell." />
  <meta property="og:image" content="https://jackiewyers.beauty/Images/Articles/Balke/BALKETHUMBNAIL.jpeg" />
  <meta property="og:url" content="https://jackiewyers.beauty/balkeblog" />

  <meta name="twitter:title" content="Ina Balke 1960s Makeup Tutorial - Jackie Wyers" />
  <meta name="twitter:description" content="Step-by-step guide on how to recreate the 1960s makeup and styling of model Ina Balke, as seen in the iconic photograph by Ted Russell." />
  <meta name="twitter:image" content="https://jackiewyers.beauty/Images/Articles/Balke/BALKETHUMBNAIL.jpeg" />
  <meta name="twitter:card" content="summary_large_image" />

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

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Ina Balke 1960s Makeup Tutorial - Jackie Wyers",
        "description": "Step-by-step guide on how to recreate the 1960s makeup and styling of model Ina Balke, as seen in the iconic photograph by Ted Russell.",
        "image": "https://jackiewyers.beauty/Images/Articles/Balke/BalkeThumbnail.jpg",
        "author": {
          "@type": "Person",
          "name": "Jackie Wyers"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Jackie Wyers Beauty",
          "logo": {
            "@type": "ImageObject",
            "url": "https://jackiewyers.beauty/logo.png"
          }
        },
        "datePublished": "2024-07-27",
        "dateModified": "2024-09-20",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://jackiewyers.beauty/balkeblog"
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



<div>
<ResponsiveYoutube src="https://www.youtube.com/embed/7HoL0rVmZHI?si=__Llh9tI2-K62uRQ" title="Ina Balke 1960s Makeup Tutorial - Jackie Wyers on Youtube" />
</div>

      <div style = {{ margin: '1rem auto' , textAlign: 'center'}}>
      <SubscribeButton />
      </div>

      <p style={{ margin: '1rem auto', textAlign: 'center', fontSize: '1rem', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
      All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
      </p>

      <DropCap1 text="Welcome back to another Time Travel Tutorials, where we admire and recreate beauty icons from the past. Today, let's delve into the 1960s through the portrait of model Ina Balke by the renowned photographer Ted Russell. For those of you who've ever searched on Pinterest for '60s makeup, chances are you've stumbled upon this stunning photograph. This article is your step-by-step guide on how to get the vintage makeup and styling as seen on Ina to try out yourself!" />
      
      <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>


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
  Ina Balke’s iconic wink showcases a classic '60s <a style={linkStyle} href="https://en.wikipedia.org/wiki/Cut_crease" target="_blank" rel="noreferrer">cut crease</a> complemented by <a style={linkStyle} href="https://en.wikipedia.org/wiki/Matte_finish" target="_blank" rel="noreferrer">matte skin</a> and a peach lip. Her styling feels very <a style={linkStyle} href="https://en.wikipedia.org/wiki/Audrey_Hepburn" target="_blank" rel="noreferrer">Hepburn</a>, with a sophisticated black dress and both a cigarette and wine glass held up to her mouth. Her look is complete with a chic, brunette bob with blunt bangs, which I recreated with a fabulous <a style={linkStyle} href="https://www.vogue.com/article/best-wigs" target="_blank" rel="noreferrer">wig</a>! If you decide to give this tutorial a try, please be sure to tag me or send a photo to be featured on the blog - I'd love to see you in this glamorous style 🖤 .
</p>

<h2 style={headingStyle}>The Skin: Keep It Matte & Bright</h2>

      <p style={paragraphStyle}>
  This look is very glamorous, so let’s use a <a style={linkStyle} href="https://www.nyxcosmetics.com/face/concealer/cant-stop-wont-stop-contour-concealer/NYX_639.html" target="_blank" rel="noreferrer">high-coverage foundation</a> for a flawless base. Ina’s face looks bright and highlighted through the center, so go with a lighter high-coverage concealer overtop of your foundation base. I used the <a style={linkStyle} href="https://www.nyxcosmetics.com/face/concealer/cant-stop-wont-stop-contour-concealer/NYX_639.html" target="_blank" rel="noreferrer">NYX Can't Stop Won't Stop Concealer</a> in a V-shape under my eyes, which is a great drugstore option for a posh look!
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/493363?noHeader=true" title="Concealer Makeup Reccomendations 60s inspired" />

  <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>



      <h2 style={headingStyle}>Contour & Set The Skin</h2>

      <p style={paragraphStyle}>
  To add dimension and mature the face, use a <a style={linkStyle} href="https://www.byrdie.com/best-contour-palettes-4586694" target="_blank" rel="noreferrer">cool-toned contour</a> under the cheekbones and jawline. Keep the <a style={linkStyle} href="https://www.wikihow.com/Contour-Your-Nose" target="_blank" rel="noreferrer">nose contour</a> subtle to balance the soon-to-be dramatic eyes.
</p>

<div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>

<p style={paragraphStyle}>
  For setting the highlighted areas, the <a style={linkStyle} href="https://www.hourglasscosmetics.com/products/ambient-lighting-powder" target="_blank" rel="noreferrer">Hourglass Radiant Powder</a> is my go-to for a luminous finish, but the <a style={linkStyle} href="https://www.revlon.com/makeup/face/primer-photo-ready-translucent-finisher" target="_blank" rel="noreferrer">Revlon Photoready Translucent Finisher</a> is a great budget-friendly option. Adding a powder that reflects light helps create that hyper-real base when photographed, as seen in the inspiration photo.
</p>


      <h2 style={headingStyle}>Touch of Bronzer & Blush</h2>

      <p style={paragraphStyle}>
  The <a style={linkStyle} href="https://www.charlottetilbury.com/us/product/filmstar-bronze-and-glow-medium-to-dark" target="_blank" rel="noreferrer">Charlotte Tilbury Filmstar Bronze & Glow Contour Duo</a> helps soften the contour and adds a natural glow. For blush, <a style={linkStyle} href="https://www.chanel.com/us/makeup/p/187440/les-tissages-de-chanel-blush-duo-tweed-effect/" target="_blank" rel="noreferrer">CHANEL's warm pink blush, shade 440 - QUINTESSENCE</a>, adds the perfect touch of color. Remember, it's all about creating a natural, yet defined look for this sophisticated style!
      </p>

<div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>

      <ResponsiveIframe src="https://shopmy.us/collections/public/493385?noHeader=true" title="Concealer Favs with Charlotte Tilbury" />

      <h2 style={headingStyle}>Iconic 60s Eyeshadow with Rustic Tones</h2>

      <p style={paragraphStyle}>
  Eye makeup is central to the <a style={linkStyle} href="https://en.wikipedia.org/wiki/1960s" target="_blank" rel="noreferrer">60s look</a>. I used a <a style={linkStyle} href="https://www.ulta.com/matte-eye-shadow?N=27fo" target="_blank" rel="noreferrer">matte white shadow</a> for brightness on the lid, but you can opt for a <a style={linkStyle} href="https://www.sephora.com/shop/eye-shadow" target="_blank" rel="noreferrer">pearly white</a> or <a style={linkStyle} href="https://www.ulta.com/makeup/eye-makeup/eye-shadow?N=1z12ygrZ2797" target="_blank" rel="noreferrer">skin-toned shade</a> for a more muted effect.
  </p>

<p style={paragraphStyle}>
  For this eyeshadow look, I used the <a style={linkStyle} href="https://www.toofaced.com/product/23453/67189/eye-shadow-palettes/natural-lust-eye-shadow-palette" target="_blank" rel="noreferrer">Too Faced Natural Lust Palette</a> which was the perfect palette, but was limited edition and hard to find now! After doing some digging, I came across a similar palette called <a style={linkStyle} href="https://www.meltcosmetics.com/products/gemini-eyeshadow-palette" target="_blank" rel="noreferrer">Melt Cosmetics Gemini Eyeshadow Palette</a> which has the shades we will need.
</p>

<div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>


<p style={paragraphStyle}>
  Blend a <a style={linkStyle} href="https://www.sephora.com/shop/yellow-eyeshadow" target="_blank" rel="noreferrer">yellow gold</a> and a <a style={linkStyle} href="https://www.sephora.com/shop/green-bronze-eyeshadow" target="_blank" rel="noreferrer">dingy green-bronze</a> through the crease, fading towards the brow bone. When we <a style={linkStyle} href="https://www.wikihow.com/Cut-a-Crease" target="_blank" rel="noreferrer">cut the crease</a> next, we will achieve that classic <a style={linkStyle} href="https://en.wikipedia.org/wiki/1960s" target="_blank" rel="noreferrer">60s shape</a>, but having these rustic tones peeking above softens the look and makes any <a style={linkStyle} href="https://www.byrdie.com/eye-makeup-for-every-eye-color-345849" target="_blank" rel="noreferrer">eye color pop</a>.
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/493455?noHeader=true" title="Eyeshadow Makeup Recommendations" />


      <h2 style={headingStyle}>Cut That Crease!</h2>

    
<p style={paragraphStyle}>
  With a <a style={linkStyle} href="https://www.sephora.com/shop/eyeshadow-brushes" target="_blank" rel="noreferrer">precise brush</a>, create an exaggerated rounded crease with a <a style={linkStyle} href="https://www.sephora.com/shop/black-matte-eyeshadow" target="_blank" rel="noreferrer">black, matte shadow</a>. Tilt your head back slightly to locate where your crease is and etch in the shadow slightly above the eye socket. Make sure the shadow doesn’t have <a style={linkStyle} href="https://www.byrdie.com/eyeshadow-fallout-4863981" target="_blank" rel="noreferrer">fallout</a>!
</p>

<p style={paragraphStyle}>
  From this initial crease line, smoke out the edges above the cut crease, fading into the gold and bronze. Clean up the black shadow one more time by adding intensity to the exaggerated crease with as much precision as you can.
</p>

<div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>

      <h2 style={headingStyle}>1960s Eye Makeup Tips for Hooded Eyes</h2>

      <p style={paragraphStyle}>
  If you have hooded eyes, you can still totally have fun with a 1960s look. You can do the same steps as listed above, though the eye may appear more “graphic” rather than create the illusion of deeper set eyes. I think both are equally as stunning!
</p>

<p style={paragraphStyle}>
  You can also take 1960s inspiration from icons like <a style={linkStyle} href="https://en.wikipedia.org/wiki/Brigitte_Bardot" target="_blank" rel="noreferrer">Brigitte Bardot</a> who have beautiful vintage looks with hooded eyes and go for more of a classic smokey eye with winged liner if you are not loving the graphic crease. See <a href="https://www.youtube.com/watch?v=i8wHU_XsM2A&feature=youtu.be" style={{ color: 'black' }} target="_blank" rel="noopener noreferrer">B.B tutorials</a> for more inspiration.
</p>

      <h2 style={headingStyle}>Brush Recommendations</h2>

      <p style={paragraphStyle}>
  This look takes patience and blending, but great brushes can definitely help. I’m revisiting this tutorial years later, and thought I’d suggest my favourite current brushes from <a style={linkStyle} href="https://www.rephr.com/" target="_blank" rel="noreferrer">Rephr</a> to help get the look listed below - especially the tiny 24 brush for the cut crease!
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/493460?noHeader=true" title="Collection name here" />

   
<div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>

      <h2 style={headingStyle}>Winged Liner & Fabulous Lashes</h2>

      <p style={paragraphStyle}>
  For the eyeliner, start with a <a style={linkStyle} href="https://www.allure.com/gallery/best-black-eyeliners" target="_blank" rel="noreferrer">black pencil liner</a> to tight-line the eye and add dots along the bottom lashes. The dots along the bottom will help create a doll-like look once mascara is applied to the bottom lashes.
</p>

<p style={paragraphStyle}>
  Add <a style={linkStyle} href="https://www.instyle.com/beauty/makeup/best-liquid-eyeliners" target="_blank" rel="noreferrer">matte black liquid liner</a> in a bold wing for a retro finish that helps elongate the eye.
</p>

<p style={paragraphStyle}>
  <a style={linkStyle} href="https://www.ardellshop.com/collections/wispies" target="_blank" rel="noreferrer">Double Demi Wispies from Ardell</a> complement the thick liner, paired with <a style={linkStyle} href="https://www.toofaced.com/product/23502/5276/makeup/mascara/better-than-sex-mascara" target="_blank" rel="noreferrer">Too Faced Better Than Sex Mascara</a> for glamorous lashes. Focus on blending your natural lashes with the falsies at the base rather than lengthening them with mascara. We don’t want any clumps to the wispy lashes!
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/493465?noHeader=true" title="Collection name here" />

    

      <h2 style={headingStyle}>The Perfect Pout</h2>

      <p style={paragraphStyle}>
  Define your lips with your favorite nude lipliner, mine is by far the <a href="https://www.charlottetilbury.com/products/lip-cheat-iconic-nude" target="_blank" rel="noreferrer" style={linkStyle}>Charlotte Tilbury's Iconic Nude Lip Cheat</a>! Slightly over line the upper lip in a round shape for that perfect pout. Since her lips are covered by the wine glass, it’s a bit of guesswork but I chose <a href="https://www.narscosmetics.com/USA/lipstick-tolede/0607845050131.html" target="_blank" rel="noreferrer" style={linkStyle}>NARS Lipstick in Tolede</a> and loved how it turned out. This lipstick shade is described as a medium deep coral if you are looking for something similar!
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/493470?noHeader=true" title="Collection name here" />
    

      <h2 style={headingStyle}>The Finishing Touches</h2>

      <p style={paragraphStyle}>
  Now that we have a glamorous 60s makeup look, it’s time to style the hair. If you have a bob and bangs, you are already set! I chose a wig I bought from <a href="https://www.yesstyle.com/" target="_blank" rel="noreferrer" style={linkStyle}>YesStyle</a> and added a light hairspray to help style bangs. A black dress, especially with a high neckline really adds sophistication to this timeless style. Go for <a href="https://www.vogue.com/article/gold-jewelry-trends" target="_blank" rel="noreferrer" style={linkStyle}>gold jewelry</a> to help bring out the warm tones in the eye makeup.
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/565751??noHeader=true" title="Collection name here" />

      <p style={paragraphStyle}>
  Whether you're a fan of the ‘60s or trying to expand your makeup skills, I hope you found this guide a fun read and it inspires you to try this cut-crease style. More well-known names from the 1960s beauty scene like <a href="https://en.wikipedia.org/wiki/Jean_Shrimpton" target="_blank" rel="noreferrer" style={linkStyle}>Jean Shrimpton</a> (the face of the ‘60s), <a href="https://en.wikipedia.org/wiki/Audrey_Hepburn" target="_blank" rel="noreferrer" style={linkStyle}>Audrey Hepburn</a>, and <a href="https://en.wikipedia.org/wiki/Brigitte_Bardot" target="_blank" rel="noreferrer" style={linkStyle}>Brigitte Bardot</a> can be found on my <a href="https://www.youtube.com/playlist?list=PL-_qSuEl3UwEr-gl54NLaTEanQBlcU0Lk" style={linkStyle} target="_blank" rel="noopener noreferrer">YouTube channel</a> if you want to keep watching.
</p>

<p style={paragraphStyle}>
  Thank you for reading, and if you want to be featured on my site, submit your recreation or version of this look to me on <a href="https://www.instagram.com/jackiewyers/" target="_blank" rel="noreferrer" style={linkStyle}>Instagram</a>! I’d love to see you switch up your style with confidence!
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
      <Comments website-id={websiteId} page-id={'balke-blog'} />

    </div>
  );



  return (
    <div ref={blogRef}>
      <Card
        title="Iconic 60s Makeup Tutorial"
        description="A '60s wink is a sexy wink"
        blogContent={blogContent}
      />
      <div style = {{padding: '1rem 2rem'}}>
      <Comments website-id={websiteId} page-id={'balke-blog'} />
</div>
          
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
};

export default BalkeBlog;
