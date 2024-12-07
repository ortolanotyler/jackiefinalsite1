import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import DropCap1 from '../../Travel/DropCap1';
import ArticleTitle from '../../../Components/ArticleTitle';
import InstagramEmbed from '../../../Components/InstagramEmbed';
import NextArticle from '../../../Components/NextArticleComponent';
import SocialShare from '../../../Home/SocialShare';
import DividerWithText from '../../../Home/DividerWithText';
import AdSenseAd from '../../../Home/Adsense';


const SophiaFace = `${process.env.PUBLIC_URL}/Images/Articles/SophiaLoren/SophiaLorenBlankFaceChart-2.jpg`;
const Signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;
const sharon = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateIconic/ICONICSHARONTHUMBNAIL.jpg`;
const teespring = `${process.env.PUBLIC_URL}/Images/teespringbanner.jpeg`;

 
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
  
  const SophiaLorenPost = () => {
  
 
  
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
    fontSize: '21px',
    color: '#000000',
    
    fontFamily: "EB Garamond, serif",
    fontWeight: '100',
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
  <title>Sophia Loren Iconic 60s Makeup in "Arabesque" - Jackie Wyers</title>
  <link rel="canonical" href="https://www.jackiewyers.beauty/sophialoren" />

  <meta name="description" content="An ode to Italian Glamour featuring a step-by-step guide to recreating Sophia Loren's iconic 60s makeup look from 'Arabesque.' Follow Jackie Wyers as she dives into vintage beauty with modern techniques." />
  <meta name="keywords" content="Sophia Loren Makeup , Sophia Loren, Arabesque makeup tutorial, 60s vintage makeup, Italian beauty, Jackie Wyers tutorials, retro glamour, Sophia Loren iconic look, Sophia Loren eyeliner, bold cat-eye tutorial, Sophia Loren makeup secrets, Italian glamour makeup, vintage Hollywood beauty, classic makeup techniques, Sophia Loren hair tutorial, 1960s makeup guide, Sophia Loren dramatic lashes, old Hollywood makeup, timeless beauty icons, Sophia Loren Arabesque style, beauty influencer tutorials, Jackie Wyers beauty blog, retro chic makeup, Sophia Loren signature look, makeup for olive skin, bold eyeliner, Sophia Loren smokey eye, Sophia Loren nude lips, retro hair and makeup, glamorous Italian style, Sophia Loren transformation, Hollywood beauty icons, Sophia Loren inspired products, vintage beauty tips, Sophia Loren time travel tutorial" />
  <meta property="og:title" content="Sophia Loren Makeup Tutorial - Jackie Wyers" />
  <meta property="og:description" content="Explore Jackie Wyers' Sophia Loren makeup tutorial, recreating the iconic '60s look with modern products. Follow along for a step-by-step guide." />
  <meta property="og:image"content="https://www.jackiewyers.beauty/Images/Articles/SophiaLoren/SophiaLorenThumbnail.jpeg" />
  <meta property="og:url" content="https://www.jackiewyers.beauty/sophialoren" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Sophia Loren Makeup Tutorial - Jackie Wyers" />
  <meta name="twitter:description" content="Explore Jackie Wyers' Sophia Loren makeup tutorial, recreating the iconic '60s look with modern products. Follow along for a step-by-step guide." />
  <meta name="twitter:image" content="https://www.jackiewyers.beauty/Images/Articles/SophiaLoren/SophiaLorenThumbnail.jpeg" />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Sophia Loren Makeup Tutorial - Jackie Wyers",
        "description": "Explore Jackie Wyers' Sophia Loren makeup tutorial, recreating the iconic '60s look with modern products. Follow along for a step-by-step guide.",
        "image": "https://www.jackiewyers.beauty/Images/Articles/SophiaLoren/SophiaLorenThumbnail.jpeg",
        "author": {
          "@type": "Person",
          "name": "Jackie Wyers"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Jackie Wyers Beauty",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.jackiewyers.beauty/sophialoren"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.jackiewyers.beauty/sophialoren"
        },
        "datePublished": "2024-07-27",
        "dateModified": "2024-09-19"
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
  mainTitle='Sophia Loren Iconic 60s Makeup in "Arabesque"'
  subTitle="An ode to Italian glamour"
  author="Jackie Wyers"
  publishDate="Feb 8th, 2024"
/>

<SocialShare 
  url="https://www.jackiewyers.beauty/sophialoren" 
  title="Sophia Loren Iconic 60s Makeup in 'Arabesque' - Jackie Wyers" 
  imageUrl="https://www.jackiewyers.beauty/Images/Articles/SophiaLoren/SophiaLorenThumbnail.jpeg" 
/>

    
      <ResponsiveYoutube src="https://www.youtube.com/embed/o8_dfwGNXAc?si=q2_GxBp3sClXnUUB" title="Sophia Loren Makeup Tutorial - Jackie Wyers on Youtube" />

      <div style = {{textAlign: 'center', margin: '10px auto' }}>
<SubscribeButton />
</div>

<p style={{ margin: '20px auto', textAlign: 'center', fontSize: '1.1rem', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
</p>

      <DropCap1 text="Welcome back to my favorite series, Time Travel Tutorials, where we delve into the glamorous world of beauty icons from the past. Today's spotlight is on the mesmerizing Italian beauty, Sophia Loren. Born on September 20th, 1934, in Rome, Italy, Sophia Loren is a megastar in both Hollywood and Italian cinema. Her career, spanning over six decades, is a testament to her immense talent, charisma, and iconic makeup style, which continues to inspire admiration (and imitation) today." />
      
      <DividerWithText  text = "Ad"/>
          <DividerWithText  text = "Ad"/>
      <div className="ad-container">
  <AdSenseAd />
</div>
<DividerWithText text = "Ad"/>
     
<p style={paragraphStyle}>
  In this tutorial, we'll explore a timeless look inspired by her iconic pink towel scene in "<a href="https://www.imdb.com/title/tt0060758/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Arabesque</a>." My goal is to inspire you with the best modern products that capture the vintage charm of Loren's era, making it possible for you to recreate this look. If you decide to give this tutorial a try, please be sure to tag me or send a photo to be featured on the blog! I'd love to see you in this glamorous style.
</p>


      <InstagramEmbed 
  src="https://www.instagram.com/p/C3Gv0qmslqJ/embed" 
  title="Sophia Loren Inspired Look" 
  width="70%" 
  height="1000" 
/>

      <h2 style={headingStyle}>The Essence of Sophia Loren’s Iconic Makeup</h2>

      <div style={gridContainerStyle}>
      <img src={SophiaFace} alt="Sophia Loren's iconic look" style={{ width: '100%' }} />
      </div>

      <p style={paragraphStyle}>
  Over the years, I’ve explored numerous 1960s makeup styles. While <a href="/twiggy" style={linkStyle}>Twiggy</a>, <a href="/yardley1965" style={linkStyle}>Jean Shrimpton</a>, and <a href="/sharontatebridal" style={linkStyle}>Sharon Tate</a> often sported an exaggerated, graphic crease to emphasize an oversized lid, Sophia was known for her double wing liner that created a very elongated, sexy cat eye. Let’s break down the entire look from the start!
</p>

      <h2 style={headingStyle}>The Foundation of Loren's Look: A Tanned Base</h2>
     
      <p style={paragraphStyle}>
  To replicate Sophia Loren's radiant tan from the "<a href="https://www.imdb.com/title/tt0060758/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Arabesque</a>" shower scene, start with your favorite self-tanner. I initially used a dark shade of <a href="https://www.lovingtan.com/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Loving Tan</a>, but I’d now recommend <a href="https://www.cocoandeve.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Coco & Eve Tanning Mousse</a>. Skincare is crucial for a flawless foundation application; after hydrating with a rich moisturizer, I prepped under the eyes with <a href="https://www.tatcha.com/product/the-silk-peony-eye-cream" target="_blank" rel="noopener noreferrer" style={linkStyle}>Tatcha The Silk Peony Melting Eye Cream</a>.
</p>


      <ResponsiveIframe src="https://shopmy.us/collections/public/495255?noHeader=true" title="Foundation Choices" />

      <DividerWithText  text = "Ad"/>
          <DividerWithText  text = "Ad"/>
      <div className="ad-container">
  <AdSenseAd />
</div>
<DividerWithText text = "Ad"/>
       
<p style={paragraphStyle}>
  For primer, I opted for the <a href="https://www.giorgioarmanibeauty-usa.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Armani Beauty Luminous Silk Hydrating Primer</a>, (my favorite Italian brand) followed by <a href="https://www.rarebeauty.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Rare Beauty’s Serum foundation</a> to even out the tan while offering lighter coverage, mirroring Loren's sun-kissed skin. I highlighted my chin and jawline with <a href="https://www.maybelline.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Maybelline's Age Rewind Concealer</a>, focusing on the center of my face and cheekbones to really make the center of the face pop.
</p>

      <h2 style={headingStyle}>Sculpting the Iconic Bone Structure</h2>
      <p style={paragraphStyle}>
  I went lighter on the foundation because we'll be highlighting and contouring to mimic Loren's stunning bone structure, which will add to the coverage. I highlighted my chin and jawline with <a href="https://www.maybelline.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Maybelline's Age Rewind Concealer</a>, focusing on the center of my face and cheekbones to really make the center of the face pop.
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/495258?noHeader=true" title="Sculpting Products" />
      <DividerWithText  text = "Ad"/>
        <DividerWithText  text = "Ad"/>
      <div className="ad-container">
  <AdSenseAd />
</div>
<DividerWithText text = "Ad"/>
       
      <h2 style={headingStyle}>Old Hollywood Matte & Powdered Skin Finish</h2>
      <p style={paragraphStyle}>
  The overall makeup aesthetic in Old Hollywood emphasized a polished, meticulously crafted appearance, with matte skin providing the perfect canvas for dramatic eye makeup, sculpted eyebrows, and bold lip colors that defined the period's iconic beauty looks. Achieve the matte skin with loose powder on a puff! While dewy skin is super trendy now, giving a matte base a try can bring back that iconic glamour and make you feel like you're on the set of your own film.
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/495261?noHeader=true" title="Matte Skin Products" />

     

      <h2 style={headingStyle}>The “Laminated” Brows</h2>
      <p style={paragraphStyle}>
  Sophia Loren's eyes are her most captivating feature. Let’s frame them with full, arched, and elongated brows! Sophia’s brows appeared drawn on in small strokes, brushed upwards, similar to a brow tattoo or laminated brow style.
</p>
       
      <h2 style={headingStyle}>The Sophia Loren Double Winged Liner Cat Eye</h2>
      <p style={paragraphStyle}>
  The first step to achieve the iconic eye is to use a white gel liner to create a wing from the outer corner of the eye pulled outwards. Connect this wing to your waterline, also rimmed with white to open up the eyes.
</p>

<p style={paragraphStyle}>
  Select a deep neutral palette, with grays, browns, and taupes. I selected the <a href="https://www.dior.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Dior 5 Couleurs Couture Eyeshadow Palette (649 Nude Dress)</a> and while some photos of Sophia’s signature eye look feature a charcoal gray (a deep, dark shade of gray close to black), in the "<a href="https://www.imdb.com/title/tt0060758/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Arabesque</a>" scenes, it appeared more like a taupe (a warmer neutral, more of a gray-brown) through the lens.
</p>
  <DividerWithText  text = "Ad"/>
      <div className="ad-container">
  <AdSenseAd />
</div>
<DividerWithText text = "Ad"/>
<p style={paragraphStyle}>
  I took a rich taupe shadow smoked up from the lash line, softening the edges with a lighter shimmery taupe into the crease. Don’t forget to brighten up the brow bone to highlight the arched brow.
</p>
       
<p style={paragraphStyle}>
  Using a matte black shadow, map out the double wing, both above and below the white liner closest to the lash line. Finish up with a bold gel liner for precision and lots of mascara to make the eyes pop.
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/495263?noHeader=true" title="Eye Makeup Products" />

      <h2 style={headingStyle}>The Elongated Lash Trick</h2>
      <p style={paragraphStyle}>
  With these glamorous eyes, take it a step further with outer corner lashes, placed slightly beyond the natural lash line, hidden in the black liner. This is the sexiest cat eye ever!
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/495279?noHeader=true" title="Lash Products" />
  
      <h2 style={headingStyle}>Lips and Cheeks: The Finishing Touches</h2>
      <p style={paragraphStyle}>
  For the lips, I chose a vibrant peachy pink shade from <a href="https://www.charlottetilbury.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Charlotte Tilbury called Sunset Lover</a>—a perfect match for a sun-kissed Italian beauty! This has sadly been discontinued, but a similar shade is <a href="https://www.charlottetilbury.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Charlotte Tilbury Hot Lips 3 Angel Alessandra</a>, which is slightly more nude. Sophia’s blush was subtle, so using the same lipstick as a bit of cream blush works perfectly. A pink gloss added the final touch of color.
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/495280?noHeader=true" title="Lip and Cheek Products" />
        <DividerWithText  text = "Ad"/>
      <div className="ad-container">
  <AdSenseAd />
</div>
<DividerWithText text = "Ad"/>
      <h2 style={headingStyle}>Nude Lips</h2>
      <p style={paragraphStyle}>
  While peach lipsticks were often seen on screen, some behind-the-scenes photos show a more nude style, as well as the second "<a href="https://www.imdb.com/title/tt0060758/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Arabesque</a>" look covered below. <a href="https://www.toofaced.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Too Faced Milkshake gloss</a> is a great option for this.
</p>

      <h2 style={headingStyle}>The Arabesque Hairstyle</h2>
     
<p style={paragraphStyle}>
  While this iconic look features a hot pink towel set, you can also complete the look with a retro hairstyle, starting with a high ponytail and pin-curling into a bun for volume and style. See a mini tutorial by tapping the image below.
</p>



<p style={paragraphStyle}>
  Whether you're a fan of Sophia Loren, a lover of the '60s, or just in search of some beauty inspiration, I hope you found this guide inspiring. Join me in celebrating the eternal elegance of Sophia Loren, and I can’t wait to create another Time Travel Tutorial for you.
</p>
  <DividerWithText  text = "Ad"/>
      <div className="ad-container">
  <AdSenseAd />
</div>
<DividerWithText text = "Ad"/>
<p style={paragraphStyle}>
  Want to be featured on my site? Submit your recreation or version of this look to me on Insta! I’d love to see you switch up your style with confidence!
</p>

       
      

      <NextArticle
      link="/iconicsharon"
      imgSrc={sharon}
      altText="Sharon Tate's Iconic Style Tutorial"
      linkText="MORE TIME TRAVEL TUTORIALS →"
      containerStyle={{ margin: '1rem 0' }} // customize as needed
      linkStyle={{ color: '#000000', fontSize: '1.05rem' }} // customize as needed
      imgStyle={{ borderRadius: '10px' }} // customize as needed
    />

      <div style={{ textAlign: 'center' }}>
        <a href="/vintagevibesmerch" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={teespring} alt="SHOP VINTAGE VIBES MERCH ON TEESPRING" style={{ width: '100%', maxWidth: '1400px', display: 'block' }} />
          SHOP VINTAGE VIBES MERCH →
        </a>
      </div>

      <div style={{ textAlign: 'center' }}>
        <img src={Signature} alt="Signature" style={{ width: '100%', height: 'auto' }} />
      </div>

      <Comments website-id={websiteId} page-id={"Sophia-Loren"} />
        <DividerWithText  text = "Ad"/>
      <div className="ad-container">
  <AdSenseAd />
</div>
<DividerWithText text = "Ad"/>
  <DividerWithText  text = "Ad"/>
      <div className="ad-container">
  <AdSenseAd />
</div>
<DividerWithText text = "Ad"/>
  <DividerWithText  text = "Ad"/>
      <div className="ad-container">
  <AdSenseAd />
</div>
<DividerWithText text = "Ad"/>
    </div>
  );

  return (
    <div ref={blogRef}>
      <Card
        title='Sophia Loren Iconic 60s Makeup in "Arabesque"'
        description="An ode to Italian Glamour featuring a step-by-step guide to recreating Sophia Loren's iconic 60s makeup look from 'Arabesque.' Follow Jackie Wyers as she dives into vintage beauty with modern techniques"
        blogContent={blogContent}
      />
 
          

    </div>
  );
};

export default SophiaLorenPost;
