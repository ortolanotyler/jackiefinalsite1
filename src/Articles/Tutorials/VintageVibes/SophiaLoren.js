import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import AdSenseAd from '../../../Advertising/Ads';
import { initGA, logPageView } from '../../../analytics';
import DropCap1 from '../../Travel/DropCap1';
import ArticleTitle from '../../../Components/ArticleTitle';
import InstagramEmbed from '../../../Components/InstagramEmbed';
import NextArticle from '../../../Components/NextArticleComponent';
import SocialShare from '../../../Home/SocialShare';


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
  
    useEffect(() => {
      initGA();
      logPageView('/sophialoren');
    }, []);
  
  
    const websiteId = '10910';
    const blogRef = useRef(null);
  
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
    
    margin: '5px 5px',
    
    maxWidth: '100%',
      lineHeight: '1.6',
    
    };
  
  const linkStyle = {
    textDecoration: 'none', // Removes underline from links
    fontFamily: 'Playfair Display, serif',
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
    fontFamily: 'Raleway, serif',
    fontWeight: 'normal',
    margin: '1rem auto',
    maxWidth: '100%',
    fontStyle: 'italic',
  };

  const blogContent = (
    <div className="container">
    <Helmet>
  <title>Sophia Loren Iconic 60s Makeup in "Arabesque" - Jackie Wyers</title>
  <link rel="canonical" href="https://jackiewyers.beauty/sophialoren" />

  <meta name="description" content="An ode to Italian Glamour featuring a step-by-step guide to recreating Sophia Loren's iconic 60s makeup look from 'Arabesque.' Follow Jackie Wyers as she dives into vintage beauty with modern techniques." />
  <meta name="keywords" content="Sophia Loren, Arabesque makeup, 60s makeup, vintage beauty, iconic looks, Jackie Wyers, time travel tutorials, old Hollywood, Italian glamour, Sophia Loren eyeliner, cat-eye tutorial, Sophia Loren eye makeup, retro beauty, classic beauty, Sophia Loren beauty secrets, Sophia Loren hair and makeup, vintage makeup tutorial, beauty influencer tutorials, bold eyeliner, winged eyeliner, Sophia Loren beauty, Jackie Wyers makeup, 60s fashion, iconic makeup, Audrey Hepburn makeup, Brigitte Bardot style, 1960s makeup look, dramatic eyeliner, Sophia Loren lip color, Sophia Loren contour, flawless skin tutorial, Sophia Loren smokey eye, Jackie Wyers vintage, classic 60s style, retro glamour, makeup tips, Hollywood icons, vintage makeup techniques, glamorous makeup looks, black and white film beauty, mod beauty, timeless beauty, beauty inspiration, Sophia Loren tutorial, old Hollywood style, dramatic makeup, Italian beauty secrets, retro style guide, beauty influencer tips, Sophia Loren transformation, Sophia Loren fashion, Sophia Loren tutorial, iconic Sophia Loren looks, beauty and style, bold beauty looks, 60s makeup icons, Sophia Loren mascara" />

  <meta property="og:title" content="Sophia Loren Makeup Tutorial - Jackie Wyers" />
  <meta property="og:description" content="Explore Jackie Wyers' Sophia Loren makeup tutorial, recreating the iconic '60s look with modern products. Follow along for a step-by-step guide." />
  <meta property="og:image"content="https://jackiewyers.beauty/Images/Articles/SophiaLoren/SophiaLorenThumbnail.jpeg" />
  <meta property="og:url" content="https://jackiewyers.beauty/sophialoren" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Sophia Loren Makeup Tutorial - Jackie Wyers" />
  <meta name="twitter:description" content="Explore Jackie Wyers' Sophia Loren makeup tutorial, recreating the iconic '60s look with modern products. Follow along for a step-by-step guide." />
  <meta name="twitter:image" content="https://jackiewyers.beauty/Images/Articles/SophiaLoren/SophiaLorenThumbnail.jpeg" />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Sophia Loren Makeup Tutorial - Jackie Wyers",
        "description": "Explore Jackie Wyers' Sophia Loren makeup tutorial, recreating the iconic '60s look with modern products. Follow along for a step-by-step guide.",
        "image": "https://jackiewyers.beauty/Images/Articles/SophiaLoren/SophiaLorenThumbnail.jpeg",
        "author": {
          "@type": "Person",
          "name": "Jackie Wyers"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Jackie Wyers Beauty",
          "logo": {
            "@type": "ImageObject",
            "url": "https://jackiewyers.beauty/sophialoren"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://jackiewyers.beauty/sophialoren"
        },
        "datePublished": "2024-07-27",
        "dateModified": "2024-09-19"
      }
    `}
  </script>

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
  <script async src="https://pagead2.googlesyndication.com/pagead/js?client=ca-pub-4660168246825318" crossorigin="anonymous"></script>
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
  url="https://jackiewyers.beauty/sophialoren" 
  title="Sophia Loren Iconic 60s Makeup in 'Arabesque' - Jackie Wyers" 
  imageUrl="https://jackiewyers.beauty/Images/Articles/SophiaLoren/SophiaLorenThumbnail.jpeg" 
/>

    
      <ResponsiveYoutube src="https://www.youtube.com/embed/o8_dfwGNXAc?si=q2_GxBp3sClXnUUB" title="Sophia Loren Makeup Tutorial - Jackie Wyers on Youtube" />

      <div style = {{textAlign: 'center', margin: '10px auto' }}>
<SubscribeButton />
</div>

<p style={{ margin: '20px auto', textAlign: 'center', fontSize: '1.1rem', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
</p>

      <DropCap1 text="Welcome back to my favorite series, Time Travel Tutorials, where we delve into the glamorous world of beauty icons from the past. Today's spotlight is on the mesmerizing Italian beauty, Sophia Loren. Born on September 20th, 1934, in Rome, Italy, Sophia Loren is a megastar in both Hollywood and Italian cinema. Her career, spanning over six decades, is a testament to her immense talent, charisma, and iconic makeup style, which continues to inspire admiration (and imitation) today." />
      
      <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
     
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
<div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
      <p style={paragraphStyle}>
  Over the years, I’ve explored numerous 1960s makeup styles. While <a href="/twiggy" style={linkStyle}>Twiggy</a>, <a href="/yardley1965" style={linkStyle}>Jean Shrimpton</a>, and <a href="/sharontatebridal" style={linkStyle}>Sharon Tate</a> often sported an exaggerated, graphic crease to emphasize an oversized lid, Sophia was known for her double wing liner that created a very elongated, sexy cat eye. Let’s break down the entire look from the start!
</p>

      <h2 style={headingStyle}>The Foundation of Loren's Look: A Tanned Base</h2>
     
      <p style={paragraphStyle}>
  To replicate Sophia Loren's radiant tan from the "<a href="https://www.imdb.com/title/tt0060758/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Arabesque</a>" shower scene, start with your favorite self-tanner. I initially used a dark shade of <a href="https://www.lovingtan.com/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Loving Tan</a>, but I’d now recommend <a href="https://www.cocoandeve.com/products/sunny-honey-bali-bronzing-self-tan-mousse" target="_blank" rel="noopener noreferrer" style={linkStyle}>Coco & Eve Tanning Mousse</a>. Skincare is crucial for a flawless foundation application; after hydrating with a rich moisturizer, I prepped under the eyes with <a href="https://www.tatcha.com/product/the-silk-peony-eye-cream" target="_blank" rel="noopener noreferrer" style={linkStyle}>Tatcha The Silk Peony Melting Eye Cream</a>.
</p>


      <ResponsiveIframe src="https://shopmy.us/collections/public/495255?noHeader=true" title="Foundation Choices" />

     
       <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
<p style={paragraphStyle}>
  For primer, I opted for the <a href="https://www.giorgioarmanibeauty-usa.com/makeup/face/primer/luminous-silk-hydrating-primer/ww-00381-arm.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>Armani Beauty Luminous Silk Hydrating Primer</a>, (my favorite Italian brand) followed by <a href="https://www.rarebeauty.com/products/liquid-touch-weightless-foundation" target="_blank" rel="noopener noreferrer" style={linkStyle}>Rare Beauty’s Serum foundation</a> to even out the tan while offering lighter coverage, mirroring Loren's sun-kissed skin. I highlighted my chin and jawline with <a href="https://www.maybelline.com/face-makeup/concealer/instant-age-rewind-eraser-dark-circles-concealer-treatment" target="_blank" rel="noopener noreferrer" style={linkStyle}>Maybelline's Age Rewind Concealer</a>, focusing on the center of my face and cheekbones to really make the center of the face pop.
</p>

      <h2 style={headingStyle}>Sculpting the Iconic Bone Structure</h2>
      <p style={paragraphStyle}>
  I went lighter on the foundation because we'll be highlighting and contouring to mimic Loren's stunning bone structure, which will add to the coverage. I highlighted my chin and jawline with <a href="https://www.maybelline.com/face-makeup/concealer/instant-age-rewind-eraser-dark-circles-concealer-treatment" target="_blank" rel="noopener noreferrer" style={linkStyle}>Maybelline's Age Rewind Concealer</a>, focusing on the center of my face and cheekbones to really make the center of the face pop.
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/495258?noHeader=true" title="Sculpting Products" />

    
       <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>Old Hollywood Matte & Powdered Skin Finish</h2>
      <p style={paragraphStyle}>
  The overall makeup aesthetic in Old Hollywood emphasized a polished, meticulously crafted appearance, with matte skin providing the perfect canvas for dramatic eye makeup, sculpted eyebrows, and bold lip colors that defined the period's iconic beauty looks. Achieve the matte skin with loose powder on a puff! While dewy skin is super trendy now, giving a matte base a try can bring back that iconic glamour and make you feel like you're on the set of your own film.
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/495261?noHeader=true" title="Matte Skin Products" />

     

      <h2 style={headingStyle}>The “Laminated” Brows</h2>
      <p style={paragraphStyle}>
  Sophia Loren's eyes are her most captivating feature. Let’s frame them with full, arched, and elongated brows! Sophia’s brows appeared drawn on in small strokes, brushed upwards, similar to a brow tattoo or laminated brow style.
</p>
       <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>The Sophia Loren Double Winged Liner Cat Eye</h2>
      <p style={paragraphStyle}>
  The first step to achieve the iconic eye is to use a white gel liner to create a wing from the outer corner of the eye pulled outwards. Connect this wing to your waterline, also rimmed with white to open up the eyes.
</p>

<p style={paragraphStyle}>
  Select a deep neutral palette, with grays, browns, and taupes. I selected the <a href="https://www.dior.com/en_us/products/beauty-Y0145100-5-couleurs-couture-high-colour-eyeshadow-palette-long-wear-creaminess-comfort" target="_blank" rel="noopener noreferrer" style={linkStyle}>Dior 5 Couleurs Couture Eyeshadow Palette (649 Nude Dress)</a> and while some photos of Sophia’s signature eye look feature a charcoal gray (a deep, dark shade of gray close to black), in the "<a href="https://www.imdb.com/title/tt0060758/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Arabesque</a>" scenes, it appeared more like a taupe (a warmer neutral, more of a gray-brown) through the lens.
</p><div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>

<p style={paragraphStyle}>
  I took a rich taupe shadow smoked up from the lash line, softening the edges with a lighter shimmery taupe into the crease. Don’t forget to brighten up the brow bone to highlight the arched brow.
</p>
       <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
<p style={paragraphStyle}>
  Using a matte black shadow, map out the double wing, both above and below the white liner closest to the lash line. Finish up with a bold gel liner for precision and lots of mascara to make the eyes pop.
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/495263?noHeader=true" title="Eye Makeup Products" />

      <h2 style={headingStyle}>The Elongated Lash Trick</h2>
      <p style={paragraphStyle}>
  With these glamorous eyes, take it a step further with outer corner lashes, placed slightly beyond the natural lash line, hidden in the black liner. This is the sexiest cat eye ever!
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/495279?noHeader=true" title="Lash Products" />
  <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>Lips and Cheeks: The Finishing Touches</h2>
      <p style={paragraphStyle}>
  For the lips, I chose a vibrant peachy pink shade from <a href="https://www.charlottetilbury.com/us/product/hot-lips-angel-alessandra" target="_blank" rel="noopener noreferrer" style={linkStyle}>Charlotte Tilbury called Sunset Lover</a>—a perfect match for a sun-kissed Italian beauty! This has sadly been discontinued, but a similar shade is <a href="https://www.charlottetilbury.com/us/product/hot-lips-angel-alessandra" target="_blank" rel="noopener noreferrer" style={linkStyle}>Charlotte Tilbury Hot Lips 3 Angel Alessandra</a>, which is slightly more nude. Sophia’s blush was subtle, so using the same lipstick as a bit of cream blush works perfectly. A pink gloss added the final touch of color.
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/495280?noHeader=true" title="Lip and Cheek Products" />

      <h2 style={headingStyle}>Nude Lips</h2>
      <p style={paragraphStyle}>
  While peach lipsticks were often seen on screen, some behind-the-scenes photos show a more nude style, as well as the second "<a href="https://www.imdb.com/title/tt0060758/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Arabesque</a>" look covered below. <a href="https://www.toofaced.com/product/23449/80626/lips/lip-gloss/milkshake-hangover-rx-lip-treatment" target="_blank" rel="noopener noreferrer" style={linkStyle}>Too Faced Milkshake gloss</a> is a great option for this.
</p>

      <h2 style={headingStyle}>The Arabesque Hairstyle</h2>
     
<p style={paragraphStyle}>
  While this iconic look features a hot pink towel set (<a href="https://www.amazon.com/Microfiber-Towel-Towels-Straight-Turban/dp/B0CFSFMDNZ?crid=1WZ7PGN3WWST1&dib=eyJ2IjoiMSJ9.LBBHeFjdHjcdyl-K9Ri0R3jxF1nkWHhs-qSWdmipuZpqjJVU8u0CZDEW9u--BaVkOyRcijy1sMxBtYC5srxS9NZuq0nHTX86wLgCcfQFG-r-nLDrSkwFnR-Ia2yuq37YtO3SrN6ntId6uh_g9B0elbl6GtdVat3XfdgUNHkIkNvj9MCENm4IV17maozQH0fOAAm71UCKrgKgMyjMdohujLR2FAFwN6BdtKbK6TEv9HqgT89nBl35N8fMGVotiSwnVnqaYAn8VRHhzv_Kvv_ux5v3-1O4fu1PgCP6Y_GrUpY.UoArAOu8AUIyEF3LAarqE_5-yb-3x5JvedK1qzkwhVM&dib_tag=se&keywords=pink+towel+hair&qid=1716659839&sprefix=pink+towel+hai,aps,114&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&linkCode=sl1&tag=jackiewyers-20&linkId=cc7cb899a314b1fb24348db4617d0913&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={linkStyle}>find a similar one on Amazon here</a>), you can also complete the look with a retro hairstyle, starting with a high ponytail and pin-curling into a bun for volume and style. See a mini tutorial by tapping the image below.
</p>

<div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>

<p style={paragraphStyle}>
  Whether you're a fan of Sophia Loren, a lover of the '60s, or just in search of some beauty inspiration, I hope you found this guide inspiring. Join me in celebrating the eternal elegance of Sophia Loren, and I can’t wait to create another Time Travel Tutorial for you.
</p>

<p style={paragraphStyle}>
  Want to be featured on my site? Submit your recreation or version of this look to me on Insta! I’d love to see you switch up your style with confidence!
</p>

       <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
      

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
