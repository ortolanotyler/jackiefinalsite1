import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Comments } from '@hyvor/hyvor-talk-react';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import AdSenseAd from '../../../Advertising/Ads';
import { initGA, logPageView } from '../../../analytics';
import DropCap1 from '../../Travel/DropCap1';
import ArticleTitle from '../../../Components/ArticleTitle';
import SubscribeButton from '../../../Components/SubscribeButton';
import InstagramEmbed from '../../../Components/InstagramEmbed';
import NextArticle from '../../../Components/NextArticleComponent';

const image2 = `${process.env.PUBLIC_URL}/Images/Articles/Twiggy/TwiggyFaceChart.png`;
const image3 = `${process.env.PUBLIC_URL}/Images/Articles/Twiggy/TWIGGYFINALHEADSHOT.jpg`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;
const yardley = `${process.env.PUBLIC_URL}/Images/Articles/JeanShrimpton/JeanShrimptonThumbnail.jpg`;

const Card = ({ blogContent }) => (
 
  <div style = {{
    padding: '10px',
    margin: '0 auto',
  }}>
  
      <div className="card">
        <div className="blog-content">{blogContent}</div>
      </div>
      </div>
  
    
  );
  
  const TwiggyBlog = () => {
  
    useEffect(() => {
      initGA();
      logPageView('/twiggy');
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
  <title>ICONIC '60s Twiggy Makeup: MOD Blue Eyeshadow</title>
  <link rel="canonical" href="https://jackiewyers.beauty/twiggy" />

  <meta name="description" content="A 1960's Guide to Glamour" />
  <meta name="keywords" content="Twiggy, Jackie Wyers, Makeup Tutorial, MOD, Sixties Makeup, Vintage Beauty, Time Travel Tutorials, Blue Eyeshadow, Drawn-on Lashes" />
  <meta property="og:title" content="ICONIC '60s Twiggy Makeup: MOD Blue Eyeshadow" />
  <meta property="og:description" content="Explore the iconic Twiggy look with Jackie Wyers' Time Travel Tutorials. Learn how to achieve the MOD blue eyeshadow and drawn-on lashes for a vintage vibe." />
  <meta property="og:image" content="https://jackiewyers.beauty/Images/Articles/Twiggy/TwiggyMODThumbnail.png" />
  <meta property="og:url" content="https://jackiewyers.beauty/twiggy" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="ICONIC '60s Twiggy Makeup: MOD Blue Eyeshadow" />
  <meta name="twitter:description" content="Explore the iconic Twiggy look with Jackie Wyers' Time Travel Tutorials. Learn how to achieve the MOD blue eyeshadow and drawn-on lashes for a vintage vibe." />
  <meta name="twitter:image" content="https://jackiewyers.beauty/Images/Articles/Twiggy/TwiggyMODThumbnail.png"/>
  <script type="application/ld+json">
    {`
      {
        "@context": "http://schema.org",
        "@type": "BlogPosting",
        "headline": "ICONIC '60s Twiggy Makeup: MOD Blue Eyeshadow",
        "description": "Explore the iconic Twiggy look with Jackie Wyers' Time Travel Tutorials. Learn how to achieve the MOD blue eyeshadow and drawn-on lashes for a vintage vibe.",
        "image": "https://jackiewyers.beauty/Images/Articles/Twiggy/TwiggyMODThumbnail.png",
        "author": {
          "@type": "Person",
          "name": "Jackie Wyers"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Jackie Wyers Beauty",
          "logo": {
            "@type": "ImageObject",
            "url": "${signature}"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://jackiewyers.beauty/twiggy"
        },
        "datePublished": "2024-07-27",
        "dateModified": "2024-09-20"
      }
    `}
  </script>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-RT6GR7JXYG"></script>
  <script>
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-RT6GR7JXYG');
    `}
  </script>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4660168246825318" crossorigin="anonymous"></script>
</Helmet>


<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <a href="/timetraveltutorials" style={{ fontFamily: 'GFS Didot, serif', fontSize: '1rem', color: '#000000', textDecoration: 'none' }}>
          BEAUTY // TIME TRAVEL TUTORIALS
        </a>
      </div>

      <ArticleTitle
  mainTitle="ICONIC '60s Twiggy Makeup: MOD Blue Eyeshadow"
  subTitle="A 1960's Guide to Glamour"
  author="Jackie Wyers"
  publishDate="April 13, 2024"
/>


      <ResponsiveYoutube src="https://www.youtube.com/embed/1WPhwXOdSSw?si=rk3Kj1nEi1rXYMsr" title="Jackie Wyers Twiggy Blue Mod Eyeshadow Youtube Tutorial" />

      <div style = {{textAlign: 'center', margin: '10px auto' }}>
<SubscribeButton />
</div>
      

   <p style={{ margin: '20px auto', textAlign: 'center', fontSize: '1.1rem', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
</p>
    

      <DropCap1 text="Welcome back to the blog, vintage beauty lovers! Today’s Time Travel Tutorials is dedicated to the doe-eyed darling of the decade: Twiggy. Known affectionately as “The Face of ‘66,” she redefined beauty standards with her waifish figure, striking lashes, and androgynous looks. Twiggy, born Lesley Lawson, wasn't just a trendsetter; she was a cultural phenomenon. "/>
      
      <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>

      <p style={paragraphStyle}>

      With her slender frame, cropped hair, and captivating gaze, Twiggy became the emblem of the mod movement in fashion. She adorned the era's most fashionable spreads, turning the world’s eyes to London’s “youthquake.” Twiggy’s playful innocence and charm perfectly captured the spirit of the sixties, a stark contrast to the older, more mature appearance of stars like Marilyn Monroe. Her distinctive allure danced between girlish simplicity and the era’s vibrant liberation." 
      </p>
    

<InstagramEmbed 
        src="https://www.instagram.com/reel/C5ycO9WOEiK/embed" 
        title="Instagram Reel" 

        width="70%" 
        height="1000" 
      />

<p style={paragraphStyle}>
  While I recreated a <a style={linkStyle} href="https://en.wikipedia.org/wiki/Twiggy" target="_blank" rel="noreferrer">Twiggy</a> look about 7 years ago, I’ve since pinned one of my favorite Twiggy portraits on <a style={linkStyle} href="https://www.pinterest.com/" target="_blank" rel="noreferrer">Pinterest</a> so often that I'm compelled to revisit the icon again. Let’s dive into a tutorial that pays homage to Twiggy’s iconic pastel blue eyeshadow and those legendary drawn-on lower lashes. And while the cropped cut isn’t my personal choice, this look features adorable curly buns adorned with flowers, offering a stunning springtime style that’s right up my alley. Let's recreate the magic of the 1960s It-girl, celebrating an era of fashion that continues to enchant and inspire. Here's how to channel the iconic Twiggy vibe using modern products that retain the quintessential vintage flair.
</p>
  
      <div style={gridContainerStyle}>
   <a href="https://youtu.be/1WPhwXOdSSw?si=qt6KGxADnAs2w_lU" target="_blank" rel = "noreferrer" >
   <img src={image3} alt="Twiggy Iconic 60's Makeup Tutorial" style={imageStyle} />
   </a>
 </div>

      

<h2 style={headingStyle}>A Twiggy Beauty Breakdown</h2>

<div style={gridContainerStyle}>
<img src={image2} alt="Twiggy Eye Tutorial Jackie Wyers" style={{ width: '100%', maxWidth: '650px' }} />
</div>

<p style={paragraphStyle}>
  <a style={linkStyle} href="https://en.wikipedia.org/wiki/Twiggy" target="_blank" rel="noreferrer">Twiggy's</a> iconic makeup style was known for its bold, graphic eyeshadow in various hues. This featured look showcases a pastel blue shade that's perfectly en vogue for Spring/Summer 2024. It pairs a youthful glow with subtle freckles and a minimalist lip to round out the ensemble. And of course, the dramatic, drawn-on lower lashes are essential for that quintessential pop-art impact. Let's begin, shall we?
</p>
<div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>

<h2 style={headingStyle}>Youthful Base & Anna Sui Cosmetics Feature</h2>

<p style={paragraphStyle}>
  For Twiggy's youthful glow, begin with a flawless base. The <a style={linkStyle} href="https://www.annasui.com/" target="_blank" rel="noreferrer">Anna Sui Rich Lotion</a> and Gel Foundation Primer—with its hydrating formula and adorable packaging—is the perfect first step. I worked with <a style={linkStyle} href="https://www.annasui.com/" target="_blank" rel="noreferrer">Anna Sui</a> on this tutorial and have several beautiful products to showcase throughout. Its water-based gel texture and plumping effect prepare the skin beautifully for foundation, concealing pores and ensuring a smooth, healthy canvas.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/542136?noHeader=true" title="The Anna Sui Rich Lotion and Gel Foundation Primer" />

<h2 style={headingStyle}>Barely There Foundation</h2>

<p style={paragraphStyle}>
  Twiggy’s look was all about fresh-faced beauty, so I follow up with <a style={linkStyle} href="https://www.makeupforever.com" target="_blank" rel="noreferrer">Makeup Forever's HD Skin Hydro Glow foundation</a>, infused with hyaluronic acid, to maintain that natural, hydrated look. For a subtle contour, <a style={linkStyle} href="https://www.makeupforever.com" target="_blank" rel="noreferrer">Makeup Forever’s</a> palette allows me to add dimension with minimal product—essential for this fresh and luminous style.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/551116?noHeader=true" title="Foundation - Makeup Forever" />

<div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>

<h2 style={headingStyle}>Faux Freckles & Peachy Cheeks</h2>

<p style={paragraphStyle}>
  Before we move on to setting the foundation, let's add some playful dimension with two cream-based products. Start by taking the <a style={linkStyle} href="https://kimchichicbeauty.com" target="_blank" rel="noreferrer">KimChiBeauty Candy Girl Fake Freckle pen</a> to delicately dot along the bridge of the nose and sweep up toward the cheekbones, emulating that sun-kissed look Twiggy was known for. Then, with a dab of cream blush, infuse a healthy pop of colour into the cheeks to bring the whole look together.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/551119?noHeader=true" title="Fake Freckles - KimChiBeauty" />

<h2 style={headingStyle}>Anna Sui’s New Brightening Powder</h2>

<p style={paragraphStyle}>
  To further achieve the Twiggy-inspired 'doll skin', I turn to the reformulated <a style={linkStyle} href="https://www.annasui.com" target="_blank" rel="noreferrer">Anna Sui Loose Face Powder</a>. Available in lavender and pink—shades famed for their brightening effects—I chose lavender to enhance my complexion. With a few sweeps, it works to blur imperfections and conceal pores, maintaining skin's natural luminosity without a heavy makeup look. More of a pressed powder girl? Try the stunning <a style={linkStyle} href="https://www.annasui.com" target="_blank" rel="noreferrer">Anna Sui Rose Pressed Powder</a>, also in lavender or pink.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/551123?noHeader=true" title="Brightening Powder - Ana Sui" />

<div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>

<h2 style={headingStyle}>The Twiggy Eyeshadow Look: The First Steps</h2>

<p style={paragraphStyle}>
  Start by warming up the crease with a light brown shadow for depth, complementing it with a matte highlight on the brow bone.
</p>

<p style={paragraphStyle}>
  Next, I channeled Twiggy's quintessential MOD eye using a creamy navy blue eyeliner to define a half-moon crease well above my natural fold. For precision, a tiny <a style={linkStyle} href="https://prettyvulgar.com" target="_blank" rel="noreferrer">Pretty Vulgar brush</a> that looks like a tiny paintbrush was my tool of choice for this essential step.
</p>

<p style={paragraphStyle}>
  For the lids, I chose a pastel blue cream shadow, sourced from <a style={linkStyle} href="https://www.amazon.com" target="_blank" rel="noreferrer">Amazon</a>, to achieve that iconic pop of colour. Blue eyeshadow might seem bold, but a pastel hue is approachable and wearable, especially for those new to the world of vibrant shadows.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/551124?noHeader=true" title="Eyeshadow - Makeup By Mario" />

<div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>

<h2 style={headingStyle}>Liner & Drawn on Twiggy Lashes</h2>

<p style={paragraphStyle}>
  A light eyeliner pencil was used sparingly to maintain the doll-like eyes Twiggy was renowned for. With <a style={linkStyle} href="https://www.annasui.com" target="_blank" rel="noreferrer">Anna Sui's Perfect Eyeliner</a> in black, thinly trace the lash line seamlessly connecting to the exaggerated crease.
</p>

<p style={paragraphStyle}>
  After curling the lashes, apply <a style={linkStyle} href="https://www.annasui.com" target="_blank" rel="noreferrer">Anna Sui's Volumizing Mascara</a> before attaching authentic Twiggy-style false lashes from Yardley - preserved from the 1960’s. You can use any full-strip with fluttery lashes! For those famous Twiggy bottom lashes, I carefully drew them on, tapering them off as I moved towards the inner corner.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/551126?noHeader=true" title="Eyeliner - Ana Sui" />

<div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>

<h2 style={headingStyle}>Twiggy’s Pale Pout</h2>

<p style={paragraphStyle}>
  Shaping my lips to mirror Twiggy's, I started with <a style={linkStyle} href="https://www.charlottetilbury.com" target="_blank" rel="noreferrer">Charlotte Tilbury’s Iconic Nude Lip Liner</a>. The goal was a slightly widened Cupid's bow and a fuller upper lip, all softly blended for a natural edge. The <a style={linkStyle} href="https://www.annasui.com" target="_blank" rel="noreferrer">Anna Sui</a> lipsticks, tapped gently over the lips and brightened with a pinker tone in the centre, created the perfect vintage-inspired pout.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/565773?noHeader=true" title="Eyeliner - Ana Sui" />

<div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>

<h2 style={headingStyle}>Twiggy’s Spring Hairstyle</h2>

<p style={paragraphStyle}>
  No <a style={linkStyle} href="https://en.wikipedia.org/wiki/Twiggy" target="_blank" rel="noreferrer">Twiggy</a> ensemble is complete without an attention-grabbing hairstyle. While I steer clear of her signature cropped cut, I simply can’t pull it off, I chose to recreate this portrait to try out this charming curly buns with delicate flowers.
</p>

<div style={gridContainerStyle}>
  <img src={image3} alt="Twiggy Hair Tutorial Jackie Wyers" style={{ width: '100%', maxWidth: '650px' }} />
</div>

<p style={paragraphStyle}>
  I hope you enjoyed another Time Travel Tutorials for all the vintage vibes, and I do have “vintage vibes” merchandise available if you are interested, browse <a href="/vintagevibesmerch" style={{ color: 'black' }}>here!</a>
</p>

<p style={paragraphStyle}>
  Thank you for reading and if you want to be featured on my site, try out this look and please tag me as I’d love to see it and share your rendition! I love to see you switch up your style with confidence.
</p>



      <NextArticle
      link="/yardley1965"
      imgSrc={yardley}
      altText="Jean Shrimpton Hair Tutorial Jackie Wyers"
      linkText="MORE TIME TRAVEL TUTORIALS →"
      containerStyle={{ margin: '1rem 0' }} // customize as needed
      linkStyle={{ color: '#000000', fontSize: '1.05rem' }} // customize as needed
      imgStyle={{ borderRadius: '10px' }} // customize as needed
    />

      <div style={gridContainerStyle}>
      <img src={signature} alt="Jackie Wyers' Signature" style={{ width: '100%', maxWidth: '650px' }} />
      </div>
     
      <Comments website-id={websiteId} page-id={"Twiggy"} />
      
    </div>
  );

  return (
    <div ref={blogRef}>
      <Card
        title="ICONIC '60s Twiggy Makeup: MOD Blue Eyeshadow"
        description="A 1960's Guide to Glamour"
        blogContent={blogContent}
      />
     
    </div>
  );
};

export default TwiggyBlog;
