import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import DropCap1 from '../../Travel/DropCap1';
import ArticleTitle from '../../../Components/ArticleTitle';
import SocialShare from '../../../Home/SocialShare';

const image1 = `${process.env.PUBLIC_URL}/Images/Articles/JeanShrimpton/ShrimptonDouble.png`;
const face = `${process.env.PUBLIC_URL}/Images/Articles/JeanShrimpton/JeanShrimpton60sFaceChart.png`;
const ad = `${process.env.PUBLIC_URL}/Images/Articles/JeanShrimpton/ShrimptonAd.jpg`;
const image5 = `${process.env.PUBLIC_URL}/Images/Articles/JeanShrimpton/VintageCollection.png`;
const image6 = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateBridal/SHARONTATEBRIDAL.JPEG`;
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


const Yardley65 = () => {




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
  <title>Recreating Jean Shrimpton's Iconic Yardley Ad</title>
  <meta name="description" content="Follow Jackie Wyers as she recreates the iconic Jean Shrimpton Yardley 1965 makeup look with detailed tutorials and vintage vibes." />
  <meta name="keywords" content="Jean Shrimpton, Yardley 1965, Makeup Tutorial, Jackie Wyers, Vintage Makeup, Time Travel Tutorials, 1960s Beauty, MOD, Pop Culture, vintage fashion, retro makeup, beauty tutorials, 60s style" />

  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="Jean Shrimpton - Yardley 1965 Makeup Tutorial - Jackie Wyers" />
  <meta property="og:description" content="Follow Jackie Wyers as she recreates the iconic Jean Shrimpton Yardley 1965 makeup look with detailed tutorials and vintage vibes." />
  <meta property="og:image" content="https://www.jackiewyers.beauty/Images/Articles/JeanShrimpton/JeanShrimptonThumbnail.jpg" />
  <meta property="og:url" content="https://www.jackiewyers.beauty/yardley1965" />
  <meta property="og:type" content="article" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Jean Shrimpton - Yardley 1965 Makeup Tutorial - Jackie Wyers" />
  <meta name="twitter:description" content="Follow Jackie Wyers as she recreates the iconic Jean Shrimpton Yardley 1965 makeup look with detailed tutorials and vintage vibes." />
  <meta name="twitter:image" content="https://www.jackiewyers.beauty/Images/Articles/JeanShrimpton/JeanShrimptonThumbnail.jpg" />

  {/* Canonical Link */}
  <link rel="canonical" href="https://www.jackiewyers.beauty/yardley1965" />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.jackiewyers.beauty/yardley1965"
      },
      "headline": "Jean Shrimpton - Yardley 1965 Makeup Tutorial - Jackie Wyers",
      "description": "Follow Jackie Wyers as she recreates the iconic Jean Shrimpton Yardley 1965 makeup look with detailed tutorials and vintage vibes.",
      "image": "https://www.jackiewyers.beauty/Images/Articles/JeanShrimpton/JeanShrimptonThumbnail.jpg",
      "author": {
        "@type": "Person",
        "name": "Jackie Wyers"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Jackie Wyers Beauty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.jackiewyers.beauty/jwlogo3.png"
        }
      },
      "datePublished": "2024-07-30",
      "dateModified": "2024-09-20"
    }
    `}
  </script>



  {/* Google Ads */}
</Helmet>


<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <a href="/timetraveltutorials" style={{ fontFamily: 'GFS Didot, serif', fontSize: '1rem', color: '#000000', textDecoration: 'none' }}>
          BEAUTY // TIME TRAVEL TUTORIALS
        </a>
      </div>

      <ArticleTitle
  mainTitle="Recreating Jean Shrimpton's Iconic Yardley Ad"
  subTitle="A Makeup Tutorial to look straight out of a 1960's magazine!"
  author="Jackie Wyers"
  publishDate="March 31st, 2024"
/>

<SocialShare 
  url="https://www.jackiewyers.beauty/yardley1965" 
  title="Jean Shrimpton - Yardley 1965 Makeup Tutorial - Jackie Wyers" 
  imageUrl="https://www.jackiewyers.beauty/Images/Articles/JeanShrimpton/JeanShrimptonThumbnail.jpg" 
/>


     <ResponsiveYoutube src="https://www.youtube.com/embed/OrlZinEp4AI?si=pn69Z9dtya3RuV2G" title="Jean Shrimpton Makeup Tutorial - Yardley 1965" />
     
      <div style = {{textAlign: 'center', margin: '10px auto' }}>
<SubscribeButton />
</div>

<p style={{ margin: '20px auto', textAlign: 'center', fontSize: '1.1rem', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
</p>

      <DropCap1 text="Welcome back to the blog, fellow vintage beauty enthusiasts! We have another Time Travel Tutorials today, and we are covering the iconic Jean Shrimpton - dubbed “The Shrimp” & face of the 1960s. Jean Shrimpton, an English model and actress, was not just a prominent figure in the fashion world but also a symbol of the Swinging Sixties. Known for her striking beauty, long legs, and big eyes, Shrimpton graced the covers of leading fashion magazines, becoming one of the world's first supermodels." />
     
<h2 style={headingStyle}>The Inspiration: Oh! De London by Yardley</h2>

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <a href="https://www.instagram.com/reel/CNyCIQkBUOK/?hl=en" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#000' }}>
    <img src={image1} alt="Jean Shrimpton Look" style={{ width: '100%', maxWidth: '650px' }} />
  </a>
</div>

<p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
  Original Makeup & Hair Design by <a href="https://www.imdb.com/name/nm1995825/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Fae Hammond</a> from the 2005 film <a href="https://www.imdb.com/title/tt0414387/" target="_blank" rel="noopener noreferrer" style={linkStyle}>'Pride and Prejudice'</a>, recreation by <a href="/about-jackie-wyers" style={linkStyle}>Jackie Wyers</a>.
</p>

<p style={paragraphStyle}>
  Let's delve into the inspiration which begins with an homage to the iconic <a href="https://www.yardleylondon.co.uk" target="_blank" rel="noreferrer" style={linkStyle}>Yardley London Oh! De London Cologne</a> advertisement from 1965. The <a href="https://www.yardleylondon.co.uk/heritage" target="_blank" rel="noreferrer" style={linkStyle}>Yardley ads</a> of the '60s are renowned for their vivid colours, striking lines, and whimsical charm, embodying the essence of the influential <a href="https://www.tate.org.uk/art/art-terms/p/pop-art" target="_blank" rel="noreferrer" style={linkStyle}>pop art movement</a> of the era. These ads captivated audiences with their trendy <a href="https://www.britannica.com/art/Mod-fashion" target="_blank" rel="noreferrer" style={linkStyle}>MOD style</a>.
</p>

<p style={paragraphStyle}>
  Luckily, I was able to find the <a href="https://www.fragrantica.com/perfume/Yardley-London/Oh-De-London-1965-43827.html" target="_blank" rel="noreferrer" style={linkStyle}>fragrance</a>, and although it has aged, the scent retains a powdery whisper from the past. I surrounded myself with its aroma to immerse myself fully in the spirit of the era, making it the ideal muse for this makeup transformation.
</p>




















<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <a href="https://www.pinterest.ca/jackiewyers/vintage-vibes-makeup-hair-inspiration/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#000' }}>
    <img src={face} alt="Jean Shrimpton Face Chart" style={{ width: '100%', maxWidth: '650px' }} />
  </a>
</div>

<h2 style={headingStyle}>Youthful Base & Matte Finish Foundation</h2>

<p style={paragraphStyle}>
  I began with the application of <a href="https://www.instyle.com/hair/faux-bangs-trend" target="_blank" rel="noopener noreferrer" style={linkStyle}>faux bangs</a> and <a href="https://www.glamourmagazine.co.uk/article/best-hair-extensions" target="_blank" rel="noopener noreferrer" style={linkStyle}>extensions</a>, setting the stage for a transformative look. For the base makeup, I chose a <a href="https://www.allure.com/gallery/best-face-primers" target="_blank" rel="noopener noreferrer" style={linkStyle}>radiant primer</a> to minimize pores and prepare my skin for the foundation—a natural velvet matte finish foundation that evokes the era's flawless complexion, paired with a <a href="https://www.byrdie.com/best-concealers-for-yellow-undertones-4844262" target="_blank" rel="noopener noreferrer" style={linkStyle}>yellow-based concealer</a> to brighten and balance the skin tone.
</p>



<h2 style={headingStyle}>Sculpting the Features</h2>

<p style={paragraphStyle}>
  To achieve the iconic '60s facial contours, I added a bit of <a href="https://www.makeup.com/makeup-tutorials/expert-tips/how-to-contour-your-nose" target="_blank" rel="noopener noreferrer" style={linkStyle}>nose contouring</a> magic, connecting my brows to my nose with two little lines and defining the bridge to mimic the supermodel. Skin is further complemented by a soft, <a href="https://www.vogue.co.uk/article/best-cream-blushers" target="_blank" rel="noopener noreferrer" style={linkStyle}>cream blush</a> in a coral shade to the cheeks, bringing life and colour to the look.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/524886?noHeader=true" title="Shop My Victoria's Secret Favorites" />



<h2 style={headingStyle}>Eyes That Speak Volumes</h2>

<p style={paragraphStyle}>
  The eyes are the centrepiece of this '60s inspired look. I opted for an easy, to achieve method using a <a href="https://www.cosmopolitan.com/style-beauty/beauty/a30783662/best-eyeliners/" target="_blank" rel="noopener noreferrer" style={linkStyle}>creamy eyeliner</a> to sketch a higher crease in a half-moon shape. A deeper <a href="https://www.byrdie.com/best-brown-eyeshadows-5193346" target="_blank" rel="noopener noreferrer" style={linkStyle}>brown eyeshadow</a> also works perfectly for this step. Then blend with a <a href="https://www.allure.com/gallery/best-peach-eyeshadows" target="_blank" rel="noopener noreferrer" style={linkStyle}>peach shadow</a> in the inner crease for a soft yet defined eye contour. There are warm pops of peach and coral throughout this style, so this creates a harmonious look.
</p>

<p style={paragraphStyle}>
  A pop of <a href="https://www.elle.com/beauty/makeup-skin-care/g30136715/best-silver-eyeshadow-palettes/" target="_blank" rel="noopener noreferrer" style={linkStyle}>silvery white</a> on the lid, complemented by dramatic <a href="https://www.byrdie.com/best-liquid-eyeliners-5072760" target="_blank" rel="noopener noreferrer" style={linkStyle}>Twiggy-inspired liner</a> and lashes, brought the look together, capturing the essence of the decade.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/524889?noHeader=true" title="Shop My Victoria's Secret Favorites" />




<h2 style={headingStyle}>Lips and Final Touches</h2>


<p style={paragraphStyle}>
  For the lips, I chose a <a href="https://www.goodhousekeeping.com/beauty-products/lip-reviews/g32450609/best-lip-glosses/" target="_blank" rel="noopener noreferrer" style={linkStyle}>peachy gloss</a> to keep things light and springy, outlined with a lip liner to define the shape using <a href="https://www.charlottetilbury.com/us/product/lip-cheat-supersize-me" target="_blank" rel="noopener noreferrer" style={linkStyle}>Charlotte Tilbury’s Lip Cheat Lip Liner in Supersize Me</a>.
</p>
<ResponsiveIframe src="https://shopmy.us/collections/public/524891?noHeader=true" title="Shop My Victoria's Secret Favorites" />



<p style={paragraphStyle}>
  The finishing touch was a <a href="https://www.allure.com/gallery/best-highlighters" target="_blank" rel="noopener noreferrer" style={linkStyle}>highlighter</a> to accentuate the high points of the face, adding a modern twist to the vintage look. <a href="https://www.charlottetilbury.com/us/product/beauty-light-wand-peachgasm" target="_blank" rel="noopener noreferrer" style={linkStyle}>Charlotte Tilbury’s Beauty Light Wand in Peachgasm</a> was perfect for this!
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/524892?noHeader=true" title="Shop My Victoria's Secret Favorites" />




<h2 style={headingStyle}>The Hair: An Epic Updo Challenge</h2>

<p style={paragraphStyle}>
  No '60s look would be complete without an <a href="https://www.instyle.com/hair/60s-hairstyles" target="_blank" rel="noopener noreferrer" style={linkStyle}>iconic hairstyle</a>. I challenged myself to creating an ambitious updo, utilizing <a href="https://www.vogue.com/article/best-hair-extensions" target="_blank" rel="noopener noreferrer" style={linkStyle}>extensions</a> to achieve the volume and structure characteristic of the era. By pinning loops to craft a voluminous bun, I emulated the vintage style, adorning it with <a href="https://www.theknot.com/content/flower-accessories-for-brides" target="_blank" rel="noopener noreferrer" style={linkStyle}>flowers</a> and bows that were true to the period.
</p>

<p style={paragraphStyle}>
  The flower accessories, to my delight, resemble <a href="https://www.marthastewart.com/274235/paper-flowers-how-to-make" target="_blank" rel="noopener noreferrer" style={linkStyle}>paper flowers</a>! I sourced some and handcrafted a few bows, embellishing them with <a href="https://www.brides.com/gallery/pearl-accessories-for-brides" target="_blank" rel="noopener noreferrer" style={linkStyle}>pearls</a> to render the floral portrait as authentic as possible. Incidentally, I stumbled upon a book on crafting paper flowers, which I've linked above—could this be a new hobby for spring?
</p>

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src={ad} alt="Jean Shrimpton Ad" style={{ width: '100%', maxWidth: '650px' }} />
</div>

<h2 style={headingStyle}>A Vintage Collection to Adore</h2>

<p style={paragraphStyle}>
  As a lover of all things vintage, I couldn't resist sharing a glimpse into my <a href="https://www.yardleylondon.co.uk" target="_blank" rel="noreferrer" style={linkStyle}>Yardley vintage collection</a> that I hope to continue to collect. The packaging alone transports us back in time, and I’m BEGGING Yardley to do a throwback collection. Their <a href="https://www.yardleylondon.co.uk/collections/soaps" target="_blank" rel="noopener noreferrer" style={linkStyle}>soaps</a> you can still buy today are lovely though! Creating this look was a delightful challenge, blending my love for vintage aesthetics with the thrill of using thrifting '60s makeup products. I hope this tutorial inspires you to explore the beauty of past decades and perhaps go on your own vintage beauty adventure.
</p>

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src={image5} alt="Vintage Collection" style={{ width: '100%', maxWidth: '650px' }} />
</div>


<p style={paragraphStyle}>
  If you have any vintage icons you'd like me to cover in future posts, don't hesitate to leave a comment below. And remember, the beauty of vintage is not just in the look—it's in the stories we tell and the history we keep alive. If you enjoyed this look, you may love <a href="/sharontatebridal" style={linkStyle} target="_blank" rel="noopener noreferrer">Sharon Tate's unique blend of bohemian and mod aesthetics</a>. I’ve also covered her coquette bridal style, <a href="/sharontatebridal" style={linkStyle} target="_blank" rel="noopener noreferrer">here</a>.
</p>

<p style={paragraphStyle}>
  Thank you for reading and if you want to be featured on my site, try out this look and please tag me as I’d love to see it and share your rendition! I love to see you switch up your style with confidence.
</p>
      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <a href="/sharontatebridal" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={image6} alt="Margot Robbie - Barbie Movie" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', display: 'block' }} />
          MORE VINTAGE VIBES →
        </a>
      </div>
    

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={signature} alt="Jackie Wyers Signature" style={{ width: '100%', maxWidth: '650px' }} />
      </div>
      
      <Comments website-id={websiteId} page-id={"Yardlizz-65fizz"} />
    </div>
  );

  return (
    <div ref={blogRef}>
  <Card
        title="Recreating Jean Shrimpton's Iconic Yardley Ad"
        description="A Makeup Tutorial to look straight out of a 1960's magazine!"
        blogContent={blogContent}
      />   
      
    

       </div>
      
  );
};

export default Yardley65;
