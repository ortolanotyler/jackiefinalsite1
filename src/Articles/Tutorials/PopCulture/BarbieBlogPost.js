import React, { useRef, useEffect } from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import AdSenseAd from '../../../Advertising/Ads';
import { initGA, logPageView } from '../../../analytics';
import { Helmet } from 'react-helmet';
import DropCap1 from '../../Travel/DropCap1';
import NextArticle from '../../../Components/NextArticleComponent';
import ArticleTitle from '../../../Components/ArticleTitle';

 

const Barbie2 = `${process.env.PUBLIC_URL}/Images/Articles/BarbieMovie/Barbie2.JPG`;
const barbienew = `${process.env.PUBLIC_URL}/Images/Articles/BarbieMovie/barbienew.jpeg`;
const Barbie3 = `${process.env.PUBLIC_URL}/Images/Articles/BarbieMovie/Barbie3.jpeg`;
const Barbie4 = `${process.env.PUBLIC_URL}/Images/Articles/BarbieMovie/BarbieFaceChart.jpg`;
const lana = `${process.env.PUBLIC_URL}/Images/Articles/LanaXskims/LanaDelRayThumbnail.jpeg`;
const Signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
 
  <div style={{
    padding: '10px 20px', // Consistent padding to prevent content from touching edges
    margin: '0 auto',
  }}>

    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
    </div>

  
);

const BarbieBlog = () => {

  useEffect(() => {
    initGA();
    logPageView('/margotbarbie');
  }, []);


  const websiteId = '10910';
  const blogRef = useRef(null);

 
  const heading2Style = {
    textAlign: 'center',
    fontSize: '1.5rem',
    fontWeight: '100',
    fontFamily: 'Playfair Display, serif',
    fontWeight: 'bold',
    color: '#000000',
    margin: '30px auto'
};
 
const headingStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: '100',
    fontFamily: 'Playfair Display, serif',
    color: '#000000',
    margin: '30px auto'
};



const paragraphStyle = {
  fontSize: '22px',
  color: '#000000',

  fontFamily: 'Georgia, serif',
  fontWeight: 'regular',

  margin: '2rem auto',

  maxWidth: '500px', // Consistent with the other paragraphs
  lineHeight: '1.6',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const linkStyle = {
  textDecoration: 'none', // Removes underline from links
  fontFamily: 'Playfair Display, serif',
  color: '#000000', // Inherits the color of the surrounding text
};

const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1rem',
    margin: '1rem auto',
    color: '#000000', // Inherits the color of the surrounding text

};

const imageStyle = {
  display: 'block',
  margin: '1rem auto',
  borderRadius: '0px',
  maxWidth: '525px',
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
  fontFamily: 'Raleway, serif',
  fontWeight: 'normal',
  margin: '1rem auto',
  maxWidth: '100%',
  fontStyle: 'italic',
};


  const blogContent = (
    <div className="container">
 <Helmet>
  <title>Mastering the Bardot Bun - Jackie Wyers</title>
  <link rel="canonical" href="https://jackiewyers.beauty/bardothairstyles" />

  <meta name="description" content="Step-by-step guide on how to recreate Brigitte Bardot's iconic '60s hairstyles, featuring tips and tricks by Jackie Wyers." />
  <meta name="keywords" content="Bardot bun, Brigitte Bardot hairstyle, 60s hair tutorial, vintage hairstyles, faux bangs, Bardot-inspired bun, Jackie Wyers, how to create Bardot bun, big voluminous bun, curtain bangs, hair tutorial, Sabrina Carpenter hair, updo hairstyles, teasing hair, pin curls, textured bun, sock bun, bun maker, hair accessories, Marc Anthony Style Flex, OGX Bamboo Fibre Full hairspray, texturizing spray, Bardot bangs, beauty tutorials, retro hairstyles, 1960s makeup, vintage glamour, iconic hairstyles, faux bangs tutorial, hair styling tips, Brigitte Bardot look, Bardot-inspired makeup, Sabrina Carpenter inspired, hair teasing techniques, pin curls tutorial, fluffy curtain bangs, blonde wig, retro beauty, Time Travel Tutorials, Jackie Wyers hair, vintage beauty, Brigitte Bardot bun without haircut, Bardot hair inspiration, hair volume tips, retro updo, hairspray, styling products for Bardot look, hairstyling tips, beauty influencer tutorials, vintage vibes, classic beauty looks, iconic 60s style, Bridgerton beauty, Sharon Tate style, faux bangs styling, big bun tutorial, textured hairstyles, beauty inspiration, styling with hairspray, beauty and style, vintage beauty tutorials" />

  <meta property="og:title" content="Mastering the Bardot Bun - Jackie Wyers" />
  <meta property="og:description" content="Step-by-step guide on how to recreate Brigitte Bardot's iconic '60s hairstyles, featuring tips and tricks by Jackie Wyers." />
  <meta property="og:image" content="https://jackiewyers.beauty/Images/Articles/BardotHairstyles/BardotThumbnail.jpg" />
  <meta property="og:url" content="https://jackiewyers.beauty/bardothairstyles" />
  <meta name="twitter:title" content="Mastering the Bardot Bun - Jackie Wyers" />
  <meta name="twitter:description" content="Step-by-step guide on how to recreate Brigitte Bardot's iconic '60s hairstyles, featuring tips and tricks by Jackie Wyers." />
  <meta name="twitter:image" content="https://jackiewyers.beauty/Images/Articles/BardotHairstyles/BardotThumbnail.jpg" />
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
        "headline": "Mastering the Bardot Bun - Jackie Wyers",
        "description": "Step-by-step guide on how to recreate Brigitte Bardot's iconic '60s hairstyles, featuring tips and tricks by Jackie Wyers.",
        "image": "https://jackiewyers.beauty/Images/Articles/BardotHairstyles/BardotThumbnail.jpg",
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
          "@id": "https://jackiewyers.beauty/bardothairstyles"
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
  mainTitle="Margot Robbie's BARBIE Makeup & DIY'90s Roller Skate Costume"
  subTitle="Come on Barbie, Let's Get Glam!"
  author="Jackie Wyers"
  publishDate="July 25th, 2024"
/>


      <ResponsiveYoutube src="https://www.youtube.com/embed/JfaND9n9ZCU?si=NfJyPeNlC3qzl6tp" title="Margot Robbie Barbie Movie - Jackie Wyers" />

   
<div style = {{textAlign: 'center', margin: '10px auto' }}>
<SubscribeButton />
</div>

<p style={{ margin: '20px auto', textAlign: 'center', fontSize: '1.1rem', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
</p>


<DropCap1 text="In the dazzling world of the Barbie Movie, directed by Greta Gerwig and starring Margot Robbie as endearing Barbie and Ryan Gosling as the hilarious Ken, we must not forget to pay tribute to the brilliant artists who brought these iconic characters to life. Ivana Primorac, the creative force leading the movie’s hair and makeup teams, created Margot’s Barbie pink makeup look that appeared fresh and modern. The 'Barbie' costume designer Jacqueline Durran played an equally crucial role in fuelling the 'Barbiecore' fashion trend with the iconic Barbie looks featured in the film. Hello Barbiecore summer of 2023 - everywhere you looked, it was all about PINK!" />

      
      
  <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
      
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <a href="https://www.instagram.com/p/Cs4LhepN6dc/?hl=en" target="_blank" rel="noopener noreferrer">
          <img src={barbienew} alt="Barbie Makeup Drawing" style={{ width: '100%' }} />
        </a>
      </div>

      <div>
        <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
        Original Makeup by Pati Dubroff and Hair Design by Bryce Scarlett from the 2023 film 'Barbie,' recreation by Jackie Wyers        </p>
      </div>

      <p style={paragraphStyle}>
  Among the film's many breathtaking fashion moments, the iconic <a href='https://www.vogue.com/article/barbie-gingham-dress' target='_blank' rel='noopener noreferrer' style={linkStyle}>pink gingham dress</a> stole the hearts of fans. However, one look, in my opinion, outshone the rest—the unforgettable <a href='https://www.hollywoodreporter.com/news/general-news/barbie-movie-roller-skating-costumes-1235168086/' target='_blank' rel='noopener noreferrer' style={linkStyle}>roller skate Barbie ensemble</a>!
</p>

<div style={gridContainerStyle}>
        <a href='https://www.instagram.com/p/CtfWF2oMk7p' target="_blank" rel="noopener noreferrer">
          <img src={Barbie2} alt="Roller Skate Barbie Jackie Wyers" style={{ width: '100%', maxWidth: '500px' }} />
        </a>
        <a href='https://www.instagram.com/p/CuXU3IqOlwa/?img_index=1' target="_blank" rel="noopener noreferrer">
          <img src={Barbie3} alt="Barbie Summer" style={{ width: '100%', maxWidth: '500px' }} />
        </a>
      </div>

      <p style={paragraphStyle}>
  When paparazzi pictures of the cast filming at Venice Beach surfaced featuring neon outfits reminiscent of '90s roller skate Barbie, I was inspired to create the entire costume for Halloween, complete with a makeup transformation that is not only faithful to the film but also entirely wearable. Explore more '90s fashion inspiration at <a href="https://www.elle.com/fashion/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Elle Fashion</a>.
</p>

<p style={paragraphStyle}>
  In this blog post, I'll be your guide and I will show you step by step how to recreate Margot Robbie's exquisite pink Barbie makeup look, drawing inspiration from the movie and using my cherished Barbie collaboration products. Additionally, I'll show you how to DIY Barbie roller skates at home. Check out more DIY tips on <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Pinterest</a>.
</p>

      <h2 style={headingStyle}>Get The Glamorous Barbie Makeup Look</h2>

      <div style={gridContainerStyle}>
      <img src={Barbie4} alt='Barbie Makeup Drawing' style={{ width: '100%', maxWidth: '650px' }} />
      </div>
  <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
   

      <h2 style={headingStyle}>Preparation</h2>

      <p style={paragraphStyle}>
  Before we begin, make sure your skin is hydrated. This collaboration isn’t available any longer, but the product itself is still on shelves! The Glamglow Glowstarter Mega Illuminating Moisturizer leaves a super radiant, Barbie-doll base. If you're looking for plump lips, the Lawless Forget the Filler Overnight Lip Plumping Mask is a must-try and a top recommendation I always recommend for beauty lovers! Find similar beauty products on <a href="https://www.sephora.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Sephora</a>.
</p>
    

      <h2 style={headingStyle}>Foundation</h2>

      <p style={paragraphStyle}>
  We are going to opt for a lightweight foundation, perfect for the summer heat. I recommend the Beautiful Skin Foundation from Charlotte Tilbury or the L'Oréal True Match Hyaluronic Tinted Serum. Both are fabulous picks depending on your budget. Learn more about foundation tips on <a href="https://www.allure.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Allure</a>.
</p>


      <ResponsiveIframe src="https://shopmy.us/collections/public/493481?noHeader=true" title="Collection name here" />

      <h2 style={headingStyle}>Contour and Bronzer</h2>

    
<p style={paragraphStyle}>
  I achieve Margot's signature look with some subtle contouring and cream bronzer, creating more structure to my face. I’d recommend enhancing your natural features rather than going against them though - especially if you are wearing this look out in daylight. Less is more! For contouring tips, visit <a href="https://www.makeup.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Makeup.com</a>.
</p>

      <h2 style={headingStyle}>Powder and Blush</h2>

      <p style={paragraphStyle}>
  Set your makeup with your favorite powder to maintain a matte yet natural finish. My holy-grail powder is from Florasis, a Chinese beauty brand. You can find them on Amazon & their powders never look too cakey or thick, rather they set and softly mattify. Margot's rosy cheeks can be replicated using the Pur X Malibu Barbie Blush Set. Check out more blush options at <a href="https://www.ulta.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Ulta</a>.
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/493498?noHeader=true" title="Collection name here" />

      <h2 style={headingStyle}>Brows</h2>

      <p style={paragraphStyle}>
  Keep your brows soft and natural like Margot Robbie’s Barbie. Lawless Shape Up Soft Fill Brow Pencil is great, but you can always go drugstore with Winkylux or L’Oréal Paris. For more brow tips, visit <a href="https://www.byrdie.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Byrdie</a>.
</p>

      <h2 style={headingStyle}>Eyeshadow and Eyeliner</h2>

      <p style={paragraphStyle}>
  For the eyes, we are going to go with subtle pops of pink, shimmer, and definition. This is a perfect time to use shades from the Colorpop Malibu Barbie Collab (still my favorite collection) or you can always use some blush in the crease to cut down on products. Explore more eyeshadow looks at <a href="https://www.glamour.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Glamour</a>.
</p>

  <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>

<p style={paragraphStyle}>
  If you are a fan of cute makeup with a beachy aesthetic, Flower Knows Beauty also has an adorable palette, which I featured in the tutorial. The seashells scream Malibu! Shop similar palettes on <a href="https://www.beautylish.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Beautylish</a>.
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/493504?noHeader=true" title="Collection name here" />

      <h2 style={headingStyle}>Lashes</h2>

      <p style={paragraphStyle}>
  Time for a Barbie collab product I use daily. The Revlon X Barbie Lash curler! After a curl, swipe a coat of your favorite mascara. Discover more lash essentials on <a href="https://www.nyxcosmetics.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>NYX Cosmetics</a>.
</p>

      <h2 style={headingStyle}>Highlighter</h2>
      <p style={paragraphStyle}>
  Add shine to your nose, cheeks, and chin for that Barbie skin glow. The Charlotte Tilbury Beauty Light Wand in Spotlight remains a favorite, but now many drugstore brands have recreated the iconic product. Flower Beauty also has a fabulous wand in various shades. Explore highlighter options on <a href="https://www.ulta.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Ulta</a>.
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/493536?noHeader=true" title="Collection name here" />

      <p style={paragraphStyle}>
  Voila! You are your own version of Mattel's iconic doll. Feel free to tone down or amp up the style to make it your own. See full tutorial linked at the beginning of the article for DIY costume ideas, or find more DIY inspirations at <a href="https://www.buzzfeed.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>BuzzFeed DIY</a>.
</p> 

 <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>

<p style={paragraphStyle}>
  Want to be featured on my site? Submit your recreation or version of this look <a href="https://jackiewyers.beauty/submit" target="_blank" rel="noopener noreferrer" style={linkStyle}>here</a>. I’d love to see you switch up your style with confidence!
</p>

     
      <NextArticle
      link="/lanablog"
      imgSrc={lana}
      altText="LANA x SKIMS PHOTOSHOOT"
      linkText=" MORE POP CULTURE BEAUTY →"
      containerStyle={{ margin: '1rem 0' }} // customize as needed
      linkStyle={{ color: '#000000', fontSize: '1.05rem' }} // customize as needed
      imgStyle={{ borderRadius: '10px' }} // customize as needed
    />


    


      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={Signature} alt="Jackie Wyers Signatue" style={{ width: '100%', maxWidth: '650px' }} />
      </div>


      <Comments website-id={websiteId} page-id={'barbsssie'} />
    </div>
  );

  return (
    <div ref={blogRef}>
    <Card
        title="Margot Robbie's BARBIE Makeup & DIY'90s Roller Skate Costume"
        description="Come on Barbie, Let's Get Glam!"
        blogContent={blogContent}
      />
    </div>
  );
};

export default BarbieBlog;
