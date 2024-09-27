import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import styles from './AnimalPretty.module.css';

const title = `${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/CatPrettyTitle.png`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/FinalCat.jpg`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => {
  return (
    <div className={styles.card}>
      <div className={styles.blogContent}>{blogContent}</div>
    </div>
  );
};

const CatPretty = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);

  const headingStyle = {
    textAlign: 'center',
    fontSize: '1.5rem',
    fontWeight: 'normal',
    fontFamily: 'Arapey, serif',
    color: '#333',
    margin: '1.5rem'
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
  const blogContent = (
    <div className={styles.container}>
 
   <Helmet>
  <title>Cat Pretty | What animal pretty are you?</title>
  <link rel="canonical" href="https://jackiewyers.beauty/catpretty" />

  <meta 
    name="description" 
    content="Discover how to achieve the Cat Pretty look with our detailed guide. Embrace bold, dramatic styles to capture the essence of the fierce and confident feline. Perfect for those who love striking and statement-making beauty looks." 
  />
  <meta 
    name="keywords" 
    content="What animal pretty are you?, Cat Pretty, makeup tutorial, beauty guide, bold makeup, dramatic style, feline beauty, makeup tips, animal-inspired beauty, cat-eye makeup, smoky eye, feline style, bold eyeliner, Victoria Beckham Beauty, Makeup by Mario, statement lashes, ISOPIA lashes, contouring, chic makeup, celebrity makeup looks, bold lip, sultry makeup, confident beauty, fierce makeup look, Bella Hadid, Megan Fox, Rihanna, Zoe Kravitz, feline-inspired fashion, bold fashion tips, statement fashion pieces, structured outfits, '90s fashion, off-duty supermodel, thrift store finds, Revolve, What animal pretty are you? beauty tutorials, influencer makeup guide, confident style, animal beauty looks, striking fashion inspiration" 
  />

  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="Cat Pretty | Jackie Wyers" />
  <meta 
    property="og:description" 
    content="Discover how to achieve the Cat Pretty look with our detailed guide. Embrace bold, dramatic styles to capture the essence of the fierce and confident feline." 
  />
  <meta 
    property="og:image" 
    content="https://jackiewyers.beauty/Images/Articles/AnimalPretty/FinalCat.jpg" 
  />
  <meta property="og:url" content="https://jackiewyers.beauty/catpretty" />
  <meta property="og:type" content="article" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:title" content="Cat Pretty | Jackie Wyers" />
  <meta 
    name="twitter:description" 
    content="Discover how to achieve the Cat Pretty look with our detailed guide. Embrace bold, dramatic styles to capture the essence of the fierce and confident feline." 
  />
  <meta 
    name="twitter:image" 
    content="https://jackiewyers.beauty/Images/Articles/AnimalPretty/FinalCat.jpg" 
  />
  <meta name="twitter:card" content="summary_large_image" />




  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Cat Pretty | Jackie Wyers",
        "description": "Discover how to achieve the Cat Pretty look with our detailed guide. Embrace bold, dramatic styles to capture the essence of the fierce and confident feline.",
        "image": "https://jackiewyers.beauty/Images/Articles/AnimalPretty/FinalCat.jpg",
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
        "datePublished": "2024-09-25",
        "dateModified": "2024-09-25",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://jackiewyers.beauty/catpretty"
        }
      }
    `}
  </script>
</Helmet>

      <div className={styles.linkContainer}>
        <a href="/quiz2" className={styles.link}>BEAUTY // QUIZ // CAT PRETTY</a>
      </div>
      <img src={title} alt="CAT PRETTY - QUIZ RESULTS" className={styles.titleImage} />

      <ResponsiveYoutube src="https://www.youtube.com/embed/hIGr8Gj4kQA?si=8N-JgnQ-JeRTk5Gm" title="Sophia Loren Makeup Tutorial - Jackie Wyers on Youtube" />

      <div className={styles.subscribeContainer}>
        <SubscribeButton />
      </div>

      <p style={paragraphStyle}>
        <strong>(Cat Beauty Tutorial starts at 17:50)</strong>
      </p>

      <p style={paragraphStyle}>
        You are the epitome of the Cat Pretty style—bold, confident, and assertive. Your love for dramatic makeup and high-contrast colour palettes mirrors the sharp, angular features of a nocturnal feline. Your makeup is precise and impactful, enhancing your naturally striking features.
      </p>

      <p style={paragraphStyle}>
        Your personality, too, commands attention and respect, much like the mysterious allure of a cat.
      </p>

      <p style={paragraphStyle}>
        Embrace your inner feline with sleek, fitted fashion and statement pieces that highlight your bold and intense beauty style.
      </p>

      <div className={styles.imageContainer}>
        <img src={image2} alt="Cat Pretty" className={styles.image} />
      </div>
     
      <p style={paragraphStyle}>
        Celebrity Inspirations: Examples include Bella Hadid and Megan Fox. For deeper skin tones, think Rihanna, with those light green, cat-like eyes, and Zoe Kravitz, with her sharp, kitty-like features. We'll explore warmer smokey eyes in the “Fox Pretty” look and keep it cool-toned for this fierce style.
      </p>

      <h2 style={headingStyle}>Achieve the Cat Pretty Look</h2>

      <p style={paragraphStyle}>
        Eyes: Sweep cool-toned shimmers, like silver and white, across your lids and deepen up with taupe in the crease. Victoria Beckham Beauty Smoky Eye Brick in Tuxedo is the perfect palette. Draw a bold, winged eyeliner that extends beyond the outer corners to enhance the cat-eye illusion and enhance the outer corner with a black shadow.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/552837?noHeader=true" title="Makeup by Mario Master Mattes Palette" />
      <p className={styles.affiliateLink}>CONTAINS: AFFILIATE LINKS</p>

      <p style={paragraphStyle}>
        Lashes: Go for dramatic, fanned-out lashes that complement the bold liner, amplifying the overall eye makeup. Try ISOPIA Iso-Gentle Echo Lashes.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/552911?noHeader=true" title="Makeup by Mario Master Mattes Palette" />
      <p className={styles.affiliateLink}>CONTAINS: AFFILIATE LINKS</p>

      <p style={paragraphStyle}>
        Cheeks: Sculpt your cheeks with a cool-toned contour powder to add depth and enhance your natural bone structure, mimicking the chiseled look typical of a sleek feline.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/552914?noHeader=true" title="Makeup by Mario Master Mattes Palette" />
      <p className={styles.affiliateLink}>CONTAINS: AFFILIATE LINKS</p>

      <p style={paragraphStyle}>
        Lips: Select deep mauve tones for a seductively pouty effect or go for a nude lip combo. A high-shine gloss can add dimension and a touch of glamour.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/552839?noHeader=true" title="Makeup by Mario Master Mattes Palette" />
      <p className={styles.affiliateLink}>CONTAINS: AFFILIATE LINKS</p>

      <p style={paragraphStyle}>
        Outfit Inspiration: Channel '90s off-duty supermodel vibes with structured yet casual elements. Think fitted black tanks paired with low-waisted baggy jeans. Explore Revolve for trendy, contemporary pieces and local thrift stores for genuine '90s gems like sleek sunglasses.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/552842?noHeader=true" title="Makeup by Mario Master Mattes Palette" />
      <p className={styles.affiliateLink}>CONTAINS: AFFILIATE LINKS</p>

      <p style={paragraphStyle}>
        I hope this quiz inspires you to play with these animal-inspired beauty looks. Which "Type of Pretty" are you leaning towards? Dive into the quiz on my website and I hope the full length tutorials on my channel inspire you to try a new look <a href='/tutorials' alt=''>here</a>!
      </p>

      <img src={signature} alt="Jackie Wyers Signature" className={styles.signatureImage} />
      
      
      <Comments website-id={websiteId} page-id={"Animal-Prizznizzle"} />
     
    </div>
  );

  return (
    <div ref={blogRef}>
      <Card blogContent={blogContent} />
    </div>
  );
};

export default CatPretty;
