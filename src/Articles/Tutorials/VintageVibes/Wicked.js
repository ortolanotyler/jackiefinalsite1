import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import DropCap1 from '../../Travel/DropCap1';
import ArticleTitle from '../../../Components/ArticleTitle';
import SocialShare from '../../../Home/SocialShare';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import AdSenseAd from '../../../Home/Adsense';


const pinterest = `${process.env.PUBLIC_URL}/Images/Articles/pinterest.png`;

const image6 = `${process.env.PUBLIC_URL}/Images/Articles/Halloween/HalloweenThumb.jpg`;
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


const Wicked = () => {




const websiteId = '10910';
const blogRef = useRef(null);


const headingStyle = {
  textAlign: 'center',
  fontSize: '2.5rem',
  fontWeight: '400',
  fontFamily: "Playfair Display, serif",
  color: '#000000',
  maxWidth: '95%',

  margin: '30px auto'
};


const paragraphStyle = {
fontSize: '20px',
color: '#000000',

fontFamily: "EB Garamond, serif",
fontWeight: '300',
padding: '10px',
margin: '10px auto',


  lineHeight: '1.6',

};

const linkStyle = {
textDecoration: 'none', // Removes underline from links
fontFamily: "EB Garamond, serif",
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

const ResponsiveIframeStyle = {
width: '100%',
height: '520px', // Maintains original height
border: 'none',
scrolling: 'no',
};

const captionStyle = {
textAlign: 'center',
fontSize: '1rem',
fontFamily: 'Arapey, sans-serif',
fontWeight: '100',
margin: '0 auto',
fontStyle: 'italic',
};




  const blogContent = (
    <div className="container">
<Helmet>
  <title>Ariana Grande as Glinda Makeup Tutorial – Wicked The Movie 🎀</title>
  <link rel="canonical" href="https://www.jackiewyers.beauty/articles/wicked" />

  <meta 
    name="description" 
    content="Explore Jackie Wyers' full makeup tutorial inspired by Ariana Grande's role as Glinda in the upcoming Wicked movie, with step-by-step glam and beauty tips." 
  />
<meta name="keywords" content="Ariana Grande Wicked makeup tutorial, Glinda makeup tips, Jackie Wyers Wicked tutorial, Wicked the movie makeup 2024, Ariana Grande Glinda pink glam, Wicked-inspired Halloween makeup, step-by-step Glinda makeup, pop culture beauty tutorials, Wicked Broadway beauty looks, IT Cosmetics Wicked brushes, One/Size Wicked collection, Glinda-inspired makeup products, transforming into Glinda makeup, Glinda costume ideas, REM Beauty Wicked collaboration, pink glam makeup tutorial, Ariana Grande transformation makeup, Wicked musical-inspired beauty, Wicked Halloween costumes, iconic Wicked looks" />

  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="Ariana Grande as Glinda Makeup Tutorial – Wicked the Movie 🎀" />
  <meta 
    property="og:description" 
    content="Explore Jackie Wyers' full makeup tutorial inspired by Ariana Grande's role as Glinda in the upcoming Wicked movie, with step-by-step glam and beauty tips." 
  />
  <meta 
    property="og:image" 
    content="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728234837/GlindaThumb_cnfiim.heic" 
  />
  <meta property="og:url" content="https://www.jackiewyers.beauty/articles/wicked" />
  <meta property="og:type" content="article" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:title" content="Ariana Grande as Glinda Makeup Tutorial – Wicked the Movie 🎀" />
  <meta 
    name="twitter:description" 
    content="Explore Jackie Wyers' full makeup tutorial inspired by Ariana Grande's role as Glinda in the upcoming Wicked movie, with step-by-step glam and beauty tips." 
  />
  <meta 
    name="twitter:image" 
    content="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728234837/GlindaThumb_cnfiim.heic" 
  />
  <meta name="twitter:card" content="summary_large_image" />
  
  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Ariana Grande as Glinda Makeup Tutorial – Wicked the Movie 🎀",
        "description": "Explore Jackie Wyers' full makeup tutorial inspired by Ariana Grande's role as Glinda in the upcoming Wicked movie, with step-by-step glam and beauty tips.",
        "image": "https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728234837/GlindaThumb_cnfiim.heic",
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
        "datePublished": "2024-10-10",
        "dateModified": "2024-10-11",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.jackiewyers.beauty/articles/wicked"
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
  mainTitle="Ariana Grande as Glinda Makeup
Tutorial – Wicked the Movie 🎀"
  subTitle="Channel Your Inner Good Witch with Pink Glam Fit for a Bubbly Girl!"
  author="Jackie Wyers"
  publishDate="October 11th, 2024"
/>

      
<SocialShare 
  url="https://www.jackiewyers.beauty/articles/wicked" 
  title="Ariana Grande as Glinda Makeup Tutorial – Wicked the Movie 🎀 – Wicked the Movie 🎀" 
  imageUrl="https://www.jackiewyers.beauty/Images/Articles/Wicked/GlindaThumb.webp" 
/>

<ResponsiveYoutube src="https://www.youtube.com/embed/hRtIux714T0?si=K3s1BaGTp67hmWO5" title="WICKED MAKEUP💖💚 Ariana Grande’s GLINDA & YASSified ELPHABA🫦" />

     
      <div style = {{textAlign: 'center', margin: '10px auto' }}>
<SubscribeButton />
</div>

<p style={{ margin: '20px auto', textAlign: 'center', fontSize: '1.1rem', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
</p>

      <DropCap1 text="Welcome back, witches! Today, I’m thrilled to share a magical Wicked-inspired look. I recently had the chance to see the musical live, and it was absolutely captivating! Around that time, I partnered with One/Size Beauty for their Wicked on Broadway collaboration, and more recently, I’ve been showcasing Wicked brushes from IT Cosmetics over on Instagram, in celebration of the upcoming Wicked movie. I still can't believe I’ve had the opportunity to work with such amazing beauty brands tied to this iconic pop culture moment! These collaborations are perfect for recreating the iconic looks or adding a touch of Wicked magic to your everyday routine."
      />
     
    
     <div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728233155/1_yg5wlk.heic" 
    alt="Jackie Wyers as Glinda on Broadway in the iconic blue dress." 
    style={imageStyle} 
    data-pin-url="https://www.jackiewyers.beauty/articles/wicked"
    data-pin-media="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728233155/1_yg5wlk.heic"
    data-pin-description="Jackie Wyers as Glinda on Broadway in the iconic blue dress, makeup recreation tutorial inspired by Wicked."
  />
  <img 
    src={pinterest}
    alt="Pin this on Pinterest" 
    style={{
      position: 'absolute',
      top: '20px',
      right: '20px',
      width: '50px',
      height: '50px',
      cursor: 'pointer',
      opacity: 0.9,
      transition: 'opacity 0.3s'
    }}
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/wicked&media=https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728233155/1_yg5wlk.heic&description=Jackie Wyers as Glinda on Broadway in the iconic blue dress, makeup recreation tutorial inspired by Wicked.')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>

<p style={captionStyle}>
  Makeup originally by Nuria on set of Wicked using some of REM Beauty products. Pictured, Jackie Wyers recreation.
</p>



<p style={paragraphStyle}>
  I’m beyond excited that <a href = "https://www.arianagrande.com/" target = 'blank' rel= 'noreferrer'> Ariana Grande </a>  has landed the role of Glinda—a dream come true for her—and based on the trailers, she’s absolutely nailed it. Naturally, I had to create a full tutorial inspired by her Glinda makeup to celebrate her fresh take on the character. With Halloween just around the corner, this glam, girly look will be your new go-to. While I’ll dive into Elphaba’s look in a separate post, today is all about Glinda’s princess-perfect style. So if you’ve always dreamed of floating in a bubble and spreading sparkle, keep reading!
</p>

<h2 style={headingStyle}>🫧 A Quick History of Wicked & Ariana’s Glinda 🫧</h2>

<p style={paragraphStyle}>
  If you're a fan of musicals or pop culture, you’re probably familiar with Wicked—one of the most successful Broadway shows of all time. Based on Gregory Maguire’s novel, Wicked explores the untold story of the witches of Oz, focusing on the complex friendship between Glinda the Good Witch and Elphaba, the Wicked Witch of the West.
</p>

<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728233119/3_s8zdyu.heic" 
    alt="Jackie Wyers as Glinda on Broadway in the iconic blue dress." 
    style={imageStyle} 
    data-pin-url="https://www.jackiewyers.beauty/articles/wicked"
    data-pin-media="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728233119/3_s8zdyu.heic"
    data-pin-description="Jackie Wyers as Glinda on Broadway in the iconic blue dress, a step-by-step makeup tutorial inspired by Wicked."
  />
  <img 
    src={pinterest}
    alt="Pin this on Pinterest" 
    style={{
      position: 'absolute',
      top: '20px',
      right: '20px',
      width: '50px',
      height: '50px',
      cursor: 'pointer',
      opacity: 0.9,
      transition: 'opacity 0.3s'
    }}
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/wicked&media=https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728233119/3_s8zdyu.heic&description=Jackie Wyers as Glinda on Broadway in the iconic blue dress, a step-by-step makeup tutorial inspired by Wicked.')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>

<p style={captionStyle}>
  Original Makeup design by Joe Dulude II for the original Broadway production of Wicked. Recreation by Jackie Wyers.
</p>
<AdSenseAd/>
<p style={paragraphStyle}>
  The upcoming Wicked movie, with Ariana Grande as Glinda, has generated buzz on par with the Barbie movie’s marketing phenomenon. Ariana’s flawless vocals and playful style are sure to bring fresh energy to the role, and her beauty looks will no doubt inspire makeup lovers everywhere. Now, let’s recreate the magic of her Glinda look, step-by-step!
</p>

<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728233116/2_h6dsz0.heic" 
    alt="Jackie Wyers as Ariana Grande as Glinda. Pink makeup recreation inspired by Wicked the movie 2024." 
    style={imageStyle} 
    data-pin-url="https://www.jackiewyers.beauty/articles/wicked"
    data-pin-media="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728233116/2_h6dsz0.heic"
    data-pin-description="Jackie Wyers recreates Ariana Grande's Glinda makeup from Wicked 2024 in a pink makeup tutorial."
  />
  <img 
    src={pinterest}
    alt="Pin this on Pinterest" 
    style={{
      position: 'absolute',
      top: '20px',
      right: '20px',
      width: '50px',
      height: '50px',
      cursor: 'pointer',
      opacity: 0.9,
      transition: 'opacity 0.3s'
    }}
    onClick={() => window.open(
      `https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/wicked&
      media=https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728233116/2_h6dsz0.heic&
      description=Jackie Wyers recreates Ariana Grande's Glinda makeup from Wicked 2024 in a pink makeup tutorial.`
    )}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>
<AdSenseAd/>

<h2 style={headingStyle}>🎀 Glinda Makeup Tutorial: Sparkling and Sweet 🎀</h2>

<p style={paragraphStyle}>Step 1: The Flawless Base</p>

<p style={paragraphStyle}>
  Glinda’s complexion is smooth, radiant, and matte. I’m starting with the Secure The Glow Tacky Hydrating Primer With Boba Complex—those little bubbles are so Glinda in my opinion! For the base, I’m using IT Cosmetics CC+ Color Correcting Full Coverage Cream in Light, which creates a perfectly airbrushed canvas.
</p>

<p style={paragraphStyle}>
  To highlight, I’m applying YENSA Super Serum Silk Concealer under the eyes, on the chin, cheekbones, and forehead. It provides full coverage that blends beautifully into the foundation, ensuring a flawless finish.
</p>

<ResponsiveIframe title="null" src="https://shopmy.us/collections/public/853497?noHeader=true" style={{ width: '100%', minHeight: '340px', border: 'none' }}></ResponsiveIframe>

<p style={paragraphStyle}>Step 2: Sculpting Glinda’s Features</p>

<p style={paragraphStyle}>
  Ariana’s contour for Glinda is softer than her signature pop star persona. Since I’m aiming to channel a bit of Ariana’s facial structure, I used Rose Inc. Cream Contour under the cheekbones, jawline, and forehead. The real contour magic happens with the nose, where I sculpted the eye socket and connected it to the bridge of the nose, finishing with a rounded nose tip—Ariana’s signature look! This bold contour is perfect for transformations, but feel free to tone it down for an everyday version.
</p>
<AdSenseAd/>
<p style={paragraphStyle}>
  For blush, I’m using IT Cosmetics Sun Blush in Sun Blossom lower on the cheeks to add warmth. And how adorable is the Glinda Airbrush Soft Focus Blush Brush #113 by IT cosmetics? With its pink glitter and butterflies, it perfectly captures Glinda’s essence while blending everything to perfection.
</p>

<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728233156/4_xkd8jd.heic" 
    alt="It cosmetics Elphaba and Glinda brushes in collaboration with Wicked the movie 2024." 
    style={imageStyle} 
    data-pin-url="https://www.jackiewyers.beauty/articles/wicked"
    data-pin-media="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728233156/4_xkd8jd.heic"
    data-pin-description="IT Cosmetics Elphaba and Glinda brushes, part of their Wicked 2024 collaboration. Perfect for recreating the iconic looks."
  />
  <img 
    src={pinterest}
    alt="Pin this on Pinterest" 
    style={{
      position: 'absolute',
      top: '20px',
      right: '20px',
      width: '50px',
      height: '50px',
      cursor: 'pointer',
      opacity: 0.9,
      transition: 'opacity 0.3s'
    }}
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/wicked&media=https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728233156/4_xkd8jd.heic&description=IT Cosmetics Elphaba and Glinda brushes, part of their Wicked 2024 collaboration.')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>

<ResponsiveIframe title="null" src="https://shopmy.us/collections/public/853500?noHeader=true" style={{ width: '100%', minHeight: '340px', border: 'none' }}></ResponsiveIframe>
<AdSenseAd/>

<p style={paragraphStyle}>Step 3: Baking and Brows</p>

<p style={paragraphStyle}>
  To set the makeup, I’m using Ben Nye Powder to bake. Don’t forget to add a touch of highlighter! I love the One/Size Defying Gravity Highlighter for the nose tip and the inner corners of the eyes—it’s perfect for adding that extra glow.
</p>

<p style={paragraphStyle}>
  For brows, Glinda’s are lighter, straighter, and shorter than mine. Without covering my natural brows entirely, I filled them in with a lighter powder and gold tones, using a taupe brow pencil to straighten the head and arch. While Ariana’s straight brow look works well on her, you can adjust it to suit your face shape. I prefer bolder brows on me. Forever inspired by Brooke Shields!
</p>

<ResponsiveIframe title="null" src="https://shopmy.us/collections/public/853507?noHeader=true" style={{ width: '100%', minHeight: '340px', border: 'none' }}></ResponsiveIframe>
<AdSenseAd/>

<p style={paragraphStyle}>Step 4: Glinda’s Signature Doe Eyes</p>

<p style={paragraphStyle}>
  Glinda’s eye look is subtle but captivating. I started with a matte white shadow on the lids, raising it slightly for an exaggerated lid. Next, I blended a muted pink in a winged-out shape from the crease outwards. Adding a slightly warmer brown to the outer V, smoke out for depth. To create Glinda’s signature wide-eyed look, I used a neutral brown under the bottom lash line in a “smiling eye” technique as well.
</p>

<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728233154/5_f0pgr0.heic" 
    alt="One Size Beauty Wicked on Broadway collection 2024." 
    style={imageStyle} 
    data-pin-url="https://www.jackiewyers.beauty/articles/wicked"
    data-pin-media="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728233154/5_f0pgr0.heic"
    data-pin-description="One Size Beauty's Wicked on Broadway Collection 2024, perfect for recreating the musical's signature looks."
  />
  <img 
    src={pinterest}
    alt="Pin this on Pinterest" 
    style={{
      position: 'absolute',
      top: '20px',
      right: '20px',
      width: '50px',
      height: '50px',
      cursor: 'pointer',
      opacity: 0.9,
      transition: 'opacity 0.3s'
    }}
    onClick={() => window.open(
      `https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/wicked&
      media=https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728233154/5_f0pgr0.heic&
      description=One Size Beauty's Wicked on Broadway Collection 2024.`
    )}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>

<p style={paragraphStyle}>
  For liner, I kept it subtle with a thin stroke of liquid liner focused on the outer corner. I noticed a hint of purple in some shots and in the Mattel dolls, so I smoked out the liner with a purplish shade from the Elphaba side of the One/Size Wicked shadow palette. I’m excited to try the upcoming R.E.M. Beauty Wicked palettes that feature a similar color story! I didn’t have the collection yet when I shot this, but check it out on sale now below. (Check out my Wicked-inspired product list here!)
</p>

<p style={paragraphStyle}>
  To finish, I curled my lashes and applied Fairydrops Mascara for that wide-eyed Glinda effect. For extra flutter, I trimmed Isopia Lashes into outer corner lashes and applied with lash glue.
</p>

<ResponsiveIframe title="null" src="https://shopmy.us/collections/public/853514?noHeader=true" style={{ width: '100%', minHeight: '340px', border: 'none' }}></ResponsiveIframe>

<p style={paragraphStyle}>Step 5: Pink Lips Like Glinda</p>

<p style={paragraphStyle}>
  For the lips, I started with a deeper liner to add dimension, then blotted on a medium pink lipstick or lip stain in the centre of the lips. To top it off, I added a metallic gloss in the centre for a sparkling Glinda glow. She wears various shades of pink throughout the film but I pulled inspiration from getting ready for the ball. In an interview, Ariana swatched all the new REM x Wicked products and revealed a lot of REM beauty was used on set. Get the exact look with the REM lip stain and metallic lipstick.
</p>

<ResponsiveIframe title="null" src="https://shopmy.us/collections/public/853525?noHeader=true" style={{ width: '100%', minHeight: '340px', border: 'none' }}></ResponsiveIframe>
<AdSenseAd/>

<p style={paragraphStyle}>Step 6: The Hair & Finishing Touches</p>

<p style={paragraphStyle}>
  Glinda’s hair is all about soft, romantic curls. I styled a wig half-up, half-down with a flower pin, which she later pins in Elphaba’s hair during her POPULAR makeover attempt. And, of course, no Glinda look is complete without glitter spray! A final touch of shimmer captures her ethereal charm. Check out me trying out the POPULAR On Til Dawn spray as the musical version of Glinda on Broadway!
</p>

<ResponsiveYoutube src="https://www.youtube.com/embed/snYdmqknVs8?si=koyJgbteBRdq-ET_" title="VIRAL Glitter Setting Spray?! ✨🩵🫧 Let's Try It!😳" />


<p style={paragraphStyle}>Looking for a perfect Glinda dress? I picked out this one from Ivy city co that comes in both adult and child sizes! 🎀</p>

<ResponsiveIframe title="null" src="https://shopmy.us/collections/public/853526?noHeader=true" style={{ width: '100%', minHeight: '340px', border: 'none' }}></ResponsiveIframe>

<ResponsiveIframe title="null" src="https://shopmy.us/collections/public/853528?noHeader=true" style={{ width: '100%', minHeight: '340px', border: 'none' }}></ResponsiveIframe>

<h2 style={headingStyle}>💚 Wicked Collaborations and More pink 💖</h2>

<p style={paragraphStyle}>
  As the Wicked movie approaches, we’re sure to see a wave of Wicked-inspired collections. I can’t wait to see all the new launches—if you’ve spotted any Wicked collaborations, let me know in the comments, and I’ll add them to my site. So far, the Aerie collection, <a href='https://www.target.com/c/wicked/-/N-akcgm?lnk=snav_rd_wicked&redirect=true' target='_blank' rel= 'noreferrer'>Target</a> , Lush, Marks & Spencer, Aldo, Voluspa have caught my eye!
</p>

<ResponsiveIframe title="null" src="https://shopmy.us/collections/public/867494?noHeader=true" style={{ width: '100%', minHeight: '1200px', border: 'none' }}></ResponsiveIframe>
<AdSenseAd/>

<p style={paragraphStyle}>Thank you for joining me on this magical Glinda transformation! Stay tuned for my glamorous Elphaba tutorial coming soon!</p>

<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728233123/6_twq4y8.heic" 
    alt="Jackie Wyers as Elphaba, green witch makeup." 
    style={imageStyle} 
    data-pin-url="https://www.jackiewyers.beauty/articles/wicked"
    data-pin-media="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728233123/6_twq4y8.heic"
    data-pin-description="Jackie Wyers transforms into Elphaba with her signature green witch makeup. Inspired by Wicked."
  />
  <img 
    src={pinterest}
    alt="Pin this on Pinterest" 
    style={{
      position: 'absolute',
      top: '20px',
      right: '20px',
      width: '50px',
      height: '50px',
      cursor: 'pointer',
      opacity: 0.9,
      transition: 'opacity 0.3s'
    }}
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/wicked&media=https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728233123/6_twq4y8.heic&description=Jackie Wyers transforms into Elphaba with her signature green witch makeup.')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>




<p style={captionStyle}>Stay sparkly my Good Witches!</p>

<p style={paragraphStyle}>

Looking for more Halloween inspiration? Check out
my girly round up of pop culture Halloween styles
here.

</p>




      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <a href="/girly-pop-halloween" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={image6} alt="Barbie Movie Halloween Article" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', display: 'block' }} />
          MORE POP CULTURE →
        </a>
      </div>
    

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={signature} alt="Jackie Wyers Signature" style={{ width: '100%', maxWidth: '650px' }} />
      </div>
      
      <Comments website-id={websiteId} page-id={"Yardlizz-65fizz"} />
      <AdSenseAd/>
      <AdSenseAd/>
      <AdSenseAd/>
      <AdSenseAd/>
      <AdSenseAd/>
      <AdSenseAd/>
    </div>
  );

  return (
    <div ref={blogRef}>
  <Card
        title="Ariana Grande as Glinda Makeup
Tutorial – Wicked the Movie 🎀"
        description="Channel Your Inner Good Witch with Pink Glam Fit for a Bubbly Girl!"
        blogContent={blogContent}
      />   
      
    

       </div>
      
  );
};

export default Wicked;
