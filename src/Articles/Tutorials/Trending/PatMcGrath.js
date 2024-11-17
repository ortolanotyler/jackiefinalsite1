import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Comments } from '@hyvor/hyvor-talk-react';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import SubscribeButton from '../../../Components/SubscribeButton';


import DropCap1 from '../../Travel/DropCap1';
import ArticleTitle from '../../../Components/ArticleTitle';
import SocialShare from '../../../Home/SocialShare';

const title = `${process.env.PUBLIC_URL}/Images/Articles/PatMcGrath/PatMcGrathTitle.png`;
const pat = `${process.env.PUBLIC_URL}/Images/Articles/PatMcGrath/JackieWyersPatMcGrath.jpeg`;
const Pat2 = `${process.env.PUBLIC_URL}/Images/Articles/PatMcGrath/PatMcGrathDouble.png`;
const Pat3 = `${process.env.PUBLIC_URL}/Images/Articles/PatMcGrath/PatMcGrathFaceChart.png`;
const makeup2016 = `${process.env.PUBLIC_URL}/Images/Articles/2016/2016MakeupThumbnail.jpg`;
const Signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

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
  
  const PatMcGrathPost = () => {
  
 
  
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
  <title>Pat McGrath's Viral Porcelain DOLL with Glass Skin - Jackie Wyers</title>
  <link rel="canonical" href="https://www.jackiewyers.beauty/patmcgrath" />

  <meta name="description" content="Explore Pat McGrath's stunning Porcelain Doll makeup looks, created for the Maison Margiela Spring/Summer '24 runway. Follow Jackie Wyers' step-by-step guide to recreate this iconic look." />
  <meta 
  name="keywords" 
  content="Pat McGrath makeup, Porcelain Doll Makeup Tutorial, Jackie Wyers makeup tutorial, Maison Margiela Spring/Summer '24, Glass Skin Technique, Airbrushed Peel-Off Mask, Divine Blush, Mothership Palette, Avant-garde makeup, Haute Couture Beauty, Runway makeup inspiration, Editorial makeup trends, Iconic glass skin look, Victorian doll makeup, Backstage beauty secrets, Pat McGrath Labs, Sublime Perfection Foundation, Divine Skin Rose Essence, Doll-like makeup aesthetic, Innovative makeup techniques, Makeup artistry inspiration, Jackie Wyers beauty blog" 
/>
  <meta property="og:title" content="Pat McGrath's Porcelain Doll Makeup Tutorial - Jackie Wyers" />
  <meta property="og:description" content="Explore Pat McGrath's stunning Porcelain Doll makeup looks, created for the Maison Margiela Spring/Summer '24 runway. Follow Jackie Wyers' step-by-step guide to recreate this iconic look." />
  <meta property="og:image" content="https://www.jackiewyers.beauty/Images/Articles/PatMcGrath/JackieWyersPatMcgrath.jpeg" />
  <meta property="og:url" content="https://www.jackiewyers.beauty/patmcgrath" />

  <meta name="twitter:title" content="Pat McGrath's Porcelain Doll Makeup Tutorial - Jackie Wyers" />
  <meta name="twitter:description" content="Explore Pat McGrath's stunning Porcelain Doll makeup looks, created for the Maison Margiela Spring/Summer '24 runway. Follow Jackie Wyers' step-by-step guide to recreate this iconic look." />
  <meta name="twitter:image" content="https://www.jackiewyers.beauty/Images/Articles/PatMcGrath/JackieWyersPatMcgrath.jpeg" />
  <meta name="twitter:card" content="summary_large_image" />



  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Pat McGrath's Porcelain Doll Makeup Tutorial - Jackie Wyers",
        "description": "Explore Pat McGrath's stunning Porcelain Doll makeup looks, created for the Maison Margiela Spring/Summer '24 runway. Follow Jackie Wyers' step-by-step guide to recreate this iconic look.",
        "image": "https://www.jackiewyers.beauty/Images/Articles/PatMcGrath/JackieWyersPatMcgrath.jpeg",
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
          "@id": "https://www.jackiewyers.beauty/patmcgrath"
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
  mainTitle="Pat McGrath's Viral Porcelain DOLL with Glass Skin"
  subTitle="An otherwordly look for the history books"
  author="Jackie Wyers"
  publishDate="Feb 5th, 2024"
/>

<SocialShare 
  url="https://www.jackiewyers.beauty/patmcgrath" 
  title="Pat McGrath's Porcelain Doll Makeup Tutorial - Jackie Wyers" 
  imageUrl="https://www.jackiewyers.beauty/Images/Articles/PatMcGrath/JackieWyersPatMcgrath.jpeg" 
/>


      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a href="https://www.instagram.com/p/C5dsVStuCqT/?img_index=1" target="_blank" rel="noopener noreferrer">
          <img src={pat} alt="Pat McGrath's Porcelain Doll" style={{ width: '100%' , height: 'auto', margin: 'auto 0' }} />
        </a>
      </div>

      <div style = {{textAlign: 'center', margin: '10px auto' }}>
<SubscribeButton />
</div>
      <p style={{ margin: '2rem 0',textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, serif', maxWidth: '100%', fontStyle: 'italic' }}>
      All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
      </p>

      <DropCap1 text="Welcome back, beauties! Let's break down the incredible (and uber-viral) Porcelain Doll makeup looks by Pat McGrath & team, created for the Maison Margiela Spring/Summer '24 runway extravaganza. In a display of sheer genius, Pat McGrath and her team devised a groundbreaking technique, meticulously layering and airbrushing several peel-off masks over the makeup for a truly haute-couture spectacle, creating live porcelain dolls to grace the runway." />
      
      
<p style={paragraphStyle}>
  The <a href="https://www.tiktok.com" style={linkStyle} target="_blank" rel="noopener noreferrer">TikTok beauty community</a> was buzzing with speculation about how the iconic <a href="https://www.patmcgrath.com" style={linkStyle} target="_blank" rel="noopener noreferrer">Pat McGrath</a> achieved such doll-like skin perfection prior to Pat’s Masterclass over the weekend - and astoundingly, <a href="https://www.instagram.com/erinparsonsmakeup/" style={linkStyle} target="_blank" rel="noopener noreferrer">Erin Parsons</a>—a celebrated makeup artist and makeup historian in her own right—hit the nail on the head with her prediction of this inventive technique.
</p>

<p style={paragraphStyle}>
  As I watched the <a href="https://www.maisonmargiela.com" style={linkStyle} target="_blank" rel="noopener noreferrer">Margiela Masterclass</a> this Saturday, I was glued to my screen, attentively watching and simultaneously recreating one of my favorite looks from the show as seen above. Here’s the scoop on what I learned and a step-by-step account of how I transformed myself into a hauntingly beautiful, poetic Victorian doll. Tap image below to be taken to my <a href="https://www.jackiewyers.beauty/mini-tutorials" style={linkStyle} target="_blank" rel="noopener noreferrer">mini tutorial</a>.
</p>

 
      <a href="https://www.instagram.com/jackiewyers/reel/C24-VgZOcOl/" target="_blank" rel="noopener noreferrer">
        <img src={Pat2} alt="Pat McGrath Double" style={{ width: '100%' }} />
      </a>

      <p style={{ textAlign: 'center', fontSize: '2.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth: '100%' }}>
        A Painterly Look with Ultimate Glass Skin
      </p>

      <img src={Pat3} alt='Pat McGrath Face Chart' style={{ width: '100%', height: 'auto' }} />
      
      <h2 style={headingStyle}>Preparation and Base</h2>
      <p style={paragraphStyle}>
  In the masterclass, it was demonstrated that <a href="https://www.patmcgrath.com/products/divine-skin-rose-001-the-essence" style={linkStyle} target="_blank" rel="noopener noreferrer">PAT MCGRATH LABS | Divine Skin Rose 001 The Essence</a> was applied to ensure hydration and longevity of makeup, along with the <a href="https://www.patmcgrath.com/products/skin-fetish-sublime-perfection-primer" style={linkStyle} target="_blank" rel="noopener noreferrer">Skin Fetish: Sublime Perfection Primer</a>. For models with paler complexions, a white shade from <a href="https://us.kryolan.com/product/486/ultra-foundation" style={linkStyle} target="_blank" rel="noopener noreferrer">Kryolan</a> was mixed into the <a href="https://www.patmcgrath.com/products/skin-fetish-sublime-perfection-foundation" style={linkStyle} target="_blank" rel="noopener noreferrer">Skin Fetish: Sublime Perfection Foundation</a> and <a href="https://www.patmcgrath.com/products/skin-fetish-sublime-perfection-concealer" style={linkStyle} target="_blank" rel="noopener noreferrer">Concealer</a> to enhance the porcelain effect.
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/494232?noHeader=true" title="Pat McGrath Products" />
      
      

<p style={paragraphStyle}>
  Models with deeper complexions kept their skin tone true to themselves, allowing each model to personify a unique porcelain doll in a makeup look that was flattering on each person. The face wasn't powdered after foundation, as the airbrushed peel-off mask adhered better to cream-based products. However, the <a href="https://www.patmcgrath.com/products/skin-fetish-sublime-perfection-blurring-under-eye-powder" style={linkStyle} target="_blank" rel="noopener noreferrer">Skin Fetish: Sublime Perfection Blurring Under-Eye Powder</a> was used for setting the area directly under the eyes. A new light pink powder was teased on the live, which is worth trying upon its release!
</p>
      
      <p style={paragraphStyle}>
        The face wasn't powdered after foundation, as the airbrushed peel-off mask adhered better to cream-based products. However, the Skin Fetish: Sublime Perfection Blurring Under-Eye Powder was used for setting the area directly under the eyes. A new light pink powder was teased on the live, which is worth trying upon its release!
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/494244?noHeader=true" title="Pat McGrath Products" />

      

      <h2 style={headingStyle}>Blushing Dolls</h2>
      <p style={paragraphStyle}>
  Blush was emphasized as a key element in each look. The <a href="https://www.patmcgrath.com/products/divine-blush" style={linkStyle} target="_blank" rel="noopener noreferrer">Divine Blush: Legendary Glow Colour Balm in Peach Lotus</a> was a popular choice throughout the show. To intensify the cheek color and ensure long wear, the <a href="https://www.patmcgrath.com/products/divine-blush" style={linkStyle} target="_blank" rel="noopener noreferrer">Skin Fetish: Divine Blush</a> was applied. The blush should extend from the apple of the cheek upwards, nearing the eye, allowing the eyeshadow to seamlessly transition into the blush for an avant-garde style.
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/494255?noHeader=true" title="Pat McGrath Products" />

      
      
      <h2 style={headingStyle}>Brows & Painterly Eyes</h2>
      <p style={paragraphStyle}>
        The models all had bleached brows, but for my version, I did the block-out brow method by using purple Elmer's glue. <a href="https://www.youtube.com/watch?v=gGbiXF2ohr0" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>See this drag technique here</a> if you want a breakdown!
      </p>
      <p style={paragraphStyle}>
        Then, high half-moon shapes were drawn for eyebrows using Pat McGrath Permagel Ultra Glide Eye Pencil in Blk Coffee. Instead of a solid line, try delicate brow strokes.
      </p>
      <p style={paragraphStyle}>
  For the eyeshadow, dimension was emphasized on the inner and outer portion of the lid. <a href="https://www.patmcgrath.com/products/permagel-ultra-glide-eye-pencil-blk-coffee" style={linkStyle} target="_blank" rel="noopener noreferrer">Blk Coffee Liner</a> was applied as a base, smudging it with a finger for a softer effect. The <a href="https://www.patmcgrath.com/products/mothership-i-eyeshadow-palette-subliminal" style={linkStyle} target="_blank" rel="noopener noreferrer">Mothership I Eyeshadow Palette in Subliminal</a> was frequently used behind the scenes. However, I thought the <a href="https://www.patmcgrath.com/products/mothership-vi-eyeshadow-palette-midnight-sun" style={linkStyle} target="_blank" rel="noopener noreferrer">Mothership VI Eyeshadow Palette in Midnight Sun</a>'s grungy green, champagne, gold, and taupe shades were quite fitting for my inspired look.
</p>
      
      <p style={paragraphStyle}>
        The Mothership I Eyeshadow Palette in Subliminal was frequently used behind the scenes. However, I thought the Mothership VI Eyeshadow Palette in Midnight Sun's grungy green, champagne, gold, and taupe shades were quite fitting for my inspired look.
      </p>
      <p style={paragraphStyle}>
        By blending grungy shadows with pastels and extending upwards through the brow bone, the result was dramatic yet “poetic" as Pat described. I went with a pop of pastel blue at the center of the lid and optional, but several models had a gloss (Lust Lip Gloss - Peach Perversion) over the lid as well. For lashes, curl and applying a lengthening mascara like Fetish Eyes Mascara. I chose to build up the lashes for a more doll-like effect, with a white eyeliner in the waterline.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/494263?noHeader=true" title="Pat McGrath Products" />

    

      <h2 style={headingStyle}>Blurred Lips</h2>
      <p style={paragraphStyle}>
  For the lips, start with a deeper lip liner, blending through the center of the parted lips. Then, using Pat's finger-blurring technique, apply <a href="https://www.patmcgrath.com/products/mattetrance-lipstick-guinevere" style={linkStyle} target="_blank" rel="noopener noreferrer">MatteTrance Lipstick in Guinevere</a>, a crimson shade, focusing on the center to mimic a porcelain doll's lips. For those inspired by a model with fuller lips, try lining the entire lip and patting on the lipstick from there. Slightly blurring the edges was recommended to soften the overall appearance if you go this route!
</p>
      
      <p style={paragraphStyle}>
        While each model presented a unique look, the key was to avoid harsh lines, embracing a more blurred, theatrical aesthetic.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/494266?noHeader=true" title="Pat McGrath Products" />

      
      
      <h2 style={headingStyle}>Iconic Glass Skin</h2>
      <p style={paragraphStyle}>
        For the base look, it was shown that a water-based adhesive should be applied in strategic areas (underneath the chin, around the nose, from the nose bridge to under the eye) to ensure the makeup's durability for over three hours with the mask on top!
      </p>
      <p style={paragraphStyle}>
        In the livestream, a scientist-like mix was created using QUE BELLA Hydrating Pineapple Peel Off Mask, Daggett & Ramsdell Tea Tree Peel Off Mask, and Freeman Feeling Beautiful Cucumber Facial Peel-Off Mask in Refreshing Cucumber, combined with distilled water. This mix was then poured into an airbrush and applied onto the skin with layers, using a spoon to protect the eye makeup.
      </p>
      <p style={paragraphStyle}>
        I recommend the Temptu airbrush since it is beginner-friendly and affordable for an airbrush. Although only the Freeman peel-off mask was available near me, it proved to be effective diluted with water.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/494277?noHeader=true" title="Pat McGrath Products" />

      

      <h2 style={headingStyle}>Tip: Patience with the Layers!</h2>
      <p style={paragraphStyle}>
  From trying this look out myself, I recommend avoiding rushing the layers. I wanted to make sure I could take a quality picture while I had some natural sunlight, so I only did three layers as the sun was going down. However, what really gives the porcelain doll effect is being patient and allowing each layer to dry. Use a medium heat flow dryer to let the mask dry before going in and adding as many layers as possible. If there is texture to the skin (like peach fuzz sticking up), a tip is to use a <a href="https://www.beautyblender.com" style={linkStyle} target="_blank" rel="noopener noreferrer">Beauty Blender</a> to softly pat down onto the skin post-spray.
</p>
      <p style={paragraphStyle}>
        If there is texture to the skin (like peach fuzz sticking up), a tip is to use a Beauty Blender to softly pat down onto the skin post-spray.
      </p>
      <p style={paragraphStyle}>
        Finally, once you have a base mask that is already dried, you can amp up the shine by using more of the mask mix painted straight on, instead of using the airbrush. Add a bit of the Skin Illustrator Ink - Clear Gloss over the lip for added shine.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/494282?noHeader=true" title="Pat McGrath Products" />

      
      
      <h2 style={headingStyle}>A New Pat McGrath Labs Product Coming Soon?</h2>
      <p style={paragraphStyle}>
  This iconic look, three years in the making, was crafted to experiment and find an amazing glazing effect that would bring porcelain doll skin to life. Pat teased a new <a href="https://www.patmcgrath.com" style={linkStyle} target="_blank" rel="noopener noreferrer">Pat McGrath Labs</a> product coming soon that will provide this effect, eliminating the need to create a mix. Stay tuned!
</p>
      <p style={paragraphStyle}>
        I hope you enjoyed this 1930s-meets-porcelain-doll otherworldly look. Comment your thoughts below, and if you want to be featured on my site, submit your recreations of this look anywhere on my socials! I’d love to see how you switch up your style and practice your artistry.
      </p>

      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <a href="/2016makeup" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={makeup2016} alt="2016 Makeup Trend Article" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', display: 'block' }} />
          MORE BEAUTY TRENDS →
        </a>
      </div>

      <div style={{ textAlign: 'center' }}>
        <img src={Signature} alt='Jackie Wyers Signature' style={{ width: '100%', maxWidth: '650px' }} />
      </div>
     
      <Comments website-id={websiteId} page-id="PatMcGrathhy" />
      
    </div>
  );

  return (
    <div ref={blogRef}>
    
    <Card
        title="Pat McGrath's Viral Porcelain DOLL with Glass Skin"
        description="An otherwordly look for the history books"
        blogContent={blogContent}
      />
    </div>
  );
};

export default PatMcGrathPost;

