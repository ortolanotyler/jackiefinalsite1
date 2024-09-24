import React, { useRef, useEffect } from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';

import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import AdSenseAd from '../../../Advertising/Ads';
import { initGA, logPageView } from '../../../analytics';
import { Helmet } from 'react-helmet';
import DropCap1 from '../../Travel/DropCap1';
import ArticleTitle from '../../../Components/ArticleTitle';

const title = `${process.env.PUBLIC_URL}/Images/Articles/VictoriaSecret2014/VSTitle.png`;
const Victoria2 = `${process.env.PUBLIC_URL}/Images/Articles/VictoriaSecret2014/VictoriaDouble.png`;
const Victoria6 = `${process.env.PUBLIC_URL}/Images/Articles/VictoriaSecret2014/VictoriaFaceChart.png`;
const VictoriaFinal = `${process.env.PUBLIC_URL}/Images/Articles/VictoriaSecret2014/Victoria2.JPG`;
const latte = `${process.env.PUBLIC_URL}/Images/Articles/LatteMakeup/LatteThumbnail.jpg`;
const Signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

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

const VictoriaSecret = () => {

  useEffect(() => {
    initGA();
    logPageView('/victoriasecret');
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
<title>The Victoria's Secret SNOW ANGEL Look at VSFS 2013 </title>

  <link rel="canonical" href="https://jackiewyers.beauty/victoriasecret" />

  <meta name="description" content="Relive the glamour of the Victoria's Secret Fashion Show 2013 with Jackie Wyers' beauty and style tips. Discover how to achieve the Snow Angel look and explore iconic products from 2014." />
  <meta name="keywords" content="Victoria's Secret Fashion Show, Victoria's Secret Makeup, Snow Angel Look, 2013 Fashion Show, Beauty Tips, Jackie Wyers, Makeup Tutorial, Lingerie Fashion Show, Beauty Blog, 2014 beauty products, Taylor Swift VSFS, iconic beauty looks, girly Tumblr vibe, bronzed skin, Victoria's Secret glosses, COCO & EVE Self Tan, Bed-Head Blowout, Too Faced Hangover Primer, Luminous Silk Foundation, Armani Beauty, Hoola Bronzer, NARS Orgasm Blush, Charlotte Tilbury Highlighter, Victoria's Secret robes" />

  <meta property="og:title" content="Victoria's Secret Fashion Show 2013 - Jackie Wyers" />
  <meta property="og:description" content="Relive the glamour of the Victoria's Secret Fashion Show 2013 with Jackie Wyers' beauty and style tips. Discover how to achieve the Snow Angel look and explore iconic products from 2014." />
  <meta property="og:image" content="https://jackiewyers.beauty/Images/Articles/VictoriaSecret2014/VSTitle.png" />
  <meta property="og:url" content="https://jackiewyers.beauty/victoriasecret" />
  <meta name="twitter:title" content="Victoria's Secret Fashion Show 2013 - Jackie Wyers" />
  <meta name="twitter:description" content="Relive the glamour of the Victoria's Secret Fashion Show 2013 with Jackie Wyers' beauty and style tips. Discover how to achieve the Snow Angel look and explore iconic products from 2014." />
  <meta name="twitter:image" content="https://jackiewyers.beauty/Images/Articles/VictoriaSecret2014/VSTitle.png" />
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
        "headline": "The Victoria's Secret SNOW ANGEL Look at VSFS 2013 ",
        "description": "Relive the glamour of the Victoria's Secret Fashion Show 2013 with Jackie Wyers' beauty and style tips. Discover how to achieve the Snow Angel look and explore iconic products from 2014.",
        "image": "https://jackiewyers.beauty/Images/Articles/VictoriaSecret2014/VSTitle.png",
        "author": {
          "@type": "Person",
          "name": "Jackie Wyers"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Jackie Wyers Beauty",
          "logo": {
            "@type": "ImageObject",
            "url": "https://jackiewyers.beauty/Images/Articles/jw3logo.png"
          }
        },
        "datePublished": "2024-07-27",
        "dateModified": "2024-09-20",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://jackiewyers.beauty/victoriasecret"
        }
      }
    `}
  </script>
</Helmet>

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <a href="/popculture" style={{ fontFamily: 'GFS Didot, serif', fontSize: '1rem', color: '#000000', textDecoration: 'none' }}>
          BEAUTY // POP CULTURE // TRENDS
        </a>
      </div>

      <ArticleTitle
  mainTitle="The Victoria's Secret SNOW ANGEL Look at VSFS 2013 "
  subTitle="Using 2014 Girly Tumblr Products"
  author="Jackie Wyers"
  publishDate="Feb 18th, 2024"
/>


<div style = {{textAlign: 'center', margin: '10px auto' }}>
<SubscribeButton />
</div>

      <ResponsiveYoutube src="https://www.youtube.com/embed/Uz03ReLZO9k?start=3" title="VICTORIA’S SECRET ANGEL makeup🎀 2014 girly tumblr aesthetic!" />

      <p style={{ margin: '20px auto', textAlign: 'center', fontSize: '1.1rem', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
</p>

      <DropCap1 text="Welcome Back, Beauties! I don’t know about you, but I could definitely use a pick-me-up in the middle of winter. My go-to remedy is a mini shopping spree paired with a fabulous beauty routine! Let’s reminisce about the Victoria’s Secret Fashion Show of 2013, particularly the breathtaking Snow Angel segment. Remember the dazzling white lingerie, extravagant diamond necklaces, voluminous textured hair, and the understated yet glamorous makeup? Absolutely iconic. It was also Taylor Swift’s first Victoria’s Secret performance, looking as much of a supermodel as the angels on the winter wonderland-themed runway." />
      <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>Rediscovering Beauty Favorites</h2>

      <p style={paragraphStyle}>
        Although I'm drawing inspiration from the 2013 VSFS show, behind the scenes photos from the runway were a staple of girly Tumblr throughout 2014. Let’s revisit some beloved beauty products from 2014 and I’ll introduce some contemporary alternatives that capture a similar, girly Tumblr vibe. Walking down beauty memory lane has been so much fun, and I hope to revive some love of products you may have used 10 years ago!
      </p>

<div style={gridContainerStyle}>
        <a href='https://www.instagram.com/p/C3amrWou7Li/' alt='Instagram Link'>
          <img src={Victoria2} alt="Victoria's Secret Beauty Products" style={{ width: '100%' }} />
        </a>
      </div>

      <h2 style={headingStyle}>Shopping Spree at Victoria's Secret</h2>

      <p style={paragraphStyle}>
        First, I treated myself to a bit of shopping at Victoria's Secret, where I found a gorgeous white push-up bra from PINK as pictured above, the newest version of their iconic fashion show robe, and a new scent! After testing all the fragrances, the Tease Crème Cloud Eau de Parfum stood out as my favorite along with the matching body lotion. My top beauty must-have though? The VS glosses. I picked up a set including Caramel Kiss gloss. The sweet smell and bold shine is an instant mood booster and has been a go-to for years!
      </p>
      <ResponsiveIframe src="https://shopmy.us/collections/public/494316?noHeader=true" title="Shop My Victoria's Secret Favorites" />




      
      
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5em 0', maxWidth: '100%' }}>CONTAINS: AFFILIATE LINKS</p>

      <h2 style={headingStyle}>Achieving the Victoria's Secret SNOW ANGEL Look</h2>
      <div style={gridContainerStyle}>
      <img src={Victoria6} alt='Snow Angel Look' style={{ width: '100%' }} />
      </div>

      
      <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>Glowing Bronze, Healthy Skin</h2>

      <p style={paragraphStyle}>
        A staple of Victoria's Secret models is their radiant, well-moisturized bronzed skin. To achieve this, I turn to the COCO & EVE Self Tan in dark, allowing it to develop its magic overnight. For a deeper dive into my thoughts on this self-tanner, check out my review here.
      </p>

      <p style={paragraphStyle}>
        To complete the throwback vibe to 2014, let’s prep the lips with an EOS lip balm, or the iconic Maybelline Baby Lips to ensuring they're as soft and hydrated as well. Low-key these are not my favorite balms for moisture, but they do bring me back.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/494318?noHeader=true" title="More Beauty Products" />

      
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5em 0', maxWidth: '100%' }}>CONTAINS: AFFILIATE LINKS</p>
 <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>Bed-Head Meets Blowout Hair</h2>
      <p style={paragraphStyle}>
        Orlando Pita, the hairstylist, aimed for the models to sport a blowout with the texture of bed-head hair. Since I don't have shorter layers to fully achieve this look naturally, I opted for a Raquel Welch MILES OF STYLE wig in the shade Honey Pecan for my Victoria's Secret-inspired photoshoot.
      </p>
      <p style={paragraphStyle}>
        For those wanting to use their own hair, I suggest applying mousse, blow-drying, and then curling away from the face with a 1.25-inch T3 micro wand. Adding a texture spray will help separate the layers for that perfect blend of polish and tousle.
      </p>

      <h2 style={headingStyle}>Base Makeup and Final Touches</h2>
      <p style={paragraphStyle}>
        Starting with moisturized skin is crucial. The Too Faced Hangover Replenishing Face Primer has been my go-to for hydration. For those who prefer a matte finish, Maybelline Baby Skin Instant Pore Eraser and Benefit Cosmetics the POREfessional Face Primer are excellent picks, though I lean towards the hydration of the hangover primer for this look.
      </p>
      <p style={paragraphStyle}>
        Dick Page, the makeup artist for the 2013 show, applied an antiqued rose lipstick as a blush across the cheeks and nose before foundation for a healthy glow—a lighter take on underpainting. I'm using a Maybelline lipstick in a similar shade and satin finish to replicate this effect.
      </p>
      <p style={paragraphStyle}>
        The minimalist approach was key for the skin, so I used Armani Beauty Luminous Silk Foundation sheered out for a natural finish. The L’Oréal True Match Lumi products are great alternatives from the drugstore!
      </p>
      <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
      <p style={paragraphStyle}>
        A touch of Maybelline Age Rewind concealer only one shade lighter than the foundation brightens the center of the face. Avoid too bright of a concealer as the skin wasn’t too heavily highlighted and contoured, unlike upcoming makeup trends. (Looking at you, 2016!)
      </p>
      <ResponsiveIframe src="https://shopmy.us/collections/public/494324?noHeader=true" title="Skin Care Essentials for a Glowy Look" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5em 0', maxWidth: '100%' }}>CONTAINS: AFFILIATE LINKS</p>

      <p style={paragraphStyle}>
        GUERLAIN Meteorites Highlighting Powder Pearls were a staple in 2014 beauty flat-lays. While many drugstore dupes have vanished, this product remains a favorite for setting makeup with a glowy finish. Plus… it’s so pretty and smells expensive.
      </p>

      <h2 style={headingStyle}>Bronzer & Blush</h2>
      <p style={paragraphStyle}>
        Hoola Bronzer by Benefit Cosmetics is a staple in my makeup bag! I'm applying it lightly for a fresh, soft sculpt. Hoola is great for this look because it doesn’t contain a lot of shimmer. That way, when we use NARS Orgasm blush which does contain some shimmer, the skin will have the perfect amount of glow without being overpowering.
      </p>
      <ResponsiveIframe src="https://shopmy.us/collections/public/494330?noHeader=true" title="Bronzer and Blush Favorites" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5em 0', maxWidth: '100%' }}>CONTAINS: AFFILIATE LINKS</p>

      <h2 style={headingStyle}>Natural Groomed Brows and Lashes & Lips</h2>
      <p style={paragraphStyle}>
        For the eyes, start with a deep brown liner, I chose URBAN DECAY | 24/7 Glide-On Waterproof Eyeliner Pencil in Demolition, a matte deep brown along the upper lash line and into the outer v. Smoke this out for a base for eyeshadow.
      </p>

      <p style={paragraphStyle}>
        The Too Faced Natural Eyes palette is still my go-to palette. Blend the deepest bronze over the lid and into the crease, brightened up with the gold over the center of the lid for a gentle, shimmering look.
      </p>
      <ResponsiveIframe src="https://shopmy.us/collections/public/494334?noHeader=true" title="Eye Makeup Favorites" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5em 0', maxWidth: '100%' }}>CONTAINS: AFFILIATE LINKS</p>

      <h2 style={headingStyle}>Finishing Touches</h2>
      <p style={paragraphStyle}>
        For highlighter, I used the Charlotte Tilbury Bar of Gold. Taking the lightest shade, apply to the cheekbones, nose, and inner corner of the eye. I remember saving up for this highlighter palette in 2014 and still love it.
      </p>
      <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
      <p style={paragraphStyle}>
        On the drugstore side, WinkyLux offers adorable rose-shaped highlighters, a perfect addition to any hyper-feminine vanity. If these highlighters were around in 2014, you bet they’d be all over Tumblr.
      </p>
      <p style={paragraphStyle}>
        Don’t overlook Victoria's Secret glosses for that signature scent and sheen! As mentioned, Caramel Kiss as my all-time favorite.
      </p>
      <ResponsiveIframe src="https://shopmy.us/collections/public/494346?noHeader=true" title="Final Touches" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5em 0', maxWidth: '100%' }}>CONTAINS: AFFILIATE LINKS</p>

      <h2 style={headingStyle}>The Final Look & DIY Winter Wonderland Lingerie</h2>
      <a href='https://www.instagram.com/p/C3amrWou7Li/'>
        <img src={VictoriaFinal} alt='Final Look' style={{ padding: '2em', width: '100%' }} />
      </a>

      <p style={paragraphStyle}>
        Echoing the 2013 show's "birds of a feather" theme, I crafted angel wings from paper cutouts and floral wire. Would be a fun idea for a Halloween costume! A shimmering body cream or oil will complete your supermodel glow.
      </p>
      <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>The Iconic Pink Robes & A 2014 Tumblr Girl Gift Guide</h2>
      <p style={paragraphStyle}>
        The 2013 robes behind the scenes at the fashion show were a stunning light pink and white stripe in a satin finish. The new robes for 2023/2024 are very similar and linked below along with more products that complete the 2014 girly, pink aesthetic.
      </p>
      <iframe title="Victoria's Secret Collection" src="https://shopmy.us/collections/public/401719?noHeader=true" style={{ width: '100%', minHeight: '100vh', border: 'none' }} scrolling="yes"></iframe>
      <p style={paragraphStyle}>
        Want to be featured on my site? Submit your recreation or version of this look to me on IG! I’d love to see you switch up your style with confidence!
      </p>
      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <a href="/lattemakeup" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={latte} alt="Latte Makeup" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', display: 'block' }} />
          MORE TRENDING BEAUTY →
        </a>
      </div>
      <img src={Signature} alt='xoxo - Jackie Wyers' style={{ width: '100%' }} />
      <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
      <Comments website-id={websiteId} page-id={"Victoria-Secret-Review"} />
    </div>
  );

  return (
    <div ref={blogRef}>
      <Card
        title="2013 Victoria Secret with 2013 Makeup"
        description="Using 2014 girly tumbler products!"
        blogContent={blogContent}
      />
    </div>
  );
};

export default VictoriaSecret;
