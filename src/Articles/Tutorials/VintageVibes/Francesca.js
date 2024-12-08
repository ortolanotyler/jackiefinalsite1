import React, { useRef, useEffect } from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import SubscribeButton from '../../../Components/SubscribeButton';
import { Helmet } from 'react-helmet-async';
import DropCap1 from '../../Travel/DropCap1';
import ArticleTitle from '../../../Components/ArticleTitle';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import NextArticle from '../../../Components/NextArticleComponent';
import SocialShare from '../../../Home/SocialShare';



const image1 = `${process.env.PUBLIC_URL}/Images/Articles/Francesca/1.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/Francesca/2.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/Articles/Francesca/3.jpeg`;
const image4 = `${process.env.PUBLIC_URL}/Images/Articles/Francesca/4.jpeg`;



const period = `${process.env.PUBLIC_URL}/Images/Articles/PeriodDrama/ArticleThumb.jpg`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
  <div
    style={{
      margin: '1rem',
      maxWidth: '90%', // Control max width to center the content
      padding: '10px', // Add padding to prevent text from touching the edges
    }}
  >
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);
  
  const Francesca = () => {
  

  
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
  <title>Francesca Bridgerton Makeup, Hair, and Dress - Jackie Wyers</title>
  <link rel="canonical" href="https://www.jackiewyers.beauty/francesca-bridgerton" />

  <meta name="description" content="Step-by-step guide on how to recreate Francesca Bridgerton's soft, romantic makeup look from Bridgerton Season 3, with hair and dress tips for a modern Regency-era look by Jackie Wyers." />
  <meta name="keywords" content="Francesca Bridgerton makeup, Bridgerton beauty tips, Regency-era makeup tutorial, Jackie Wyers Bridgerton looks, Francesca-inspired hairstyle, modern Regency style, auburn hair makeup ideas, Francesca Bridgerton tutorial, Bridgerton fashion guide, Jackie Wyers beauty blog, Bridgerton Season 3 makeup, Francesca Bridgerton hair tutorial, romantic makeup looks, Pat McGrath Bridgerton collection, Bridgerton-inspired fashion haul, period drama makeup styles, Charlotte Tilbury Bridgerton makeup, Francesca Bridgerton dress inspiration, Bridgerton beauty influencer, Francesca half-up hairstyle tips" />
  <meta property="og:title" content="Francesca Bridgerton Makeup, Hair, and Dress - Jackie Wyers" />
  <meta property="og:description" content="Learn how to achieve Francesca Bridgerton's makeup, hair, and style from Bridgerton Season 3, inspired by the modern Regency era. Step-by-step breakdown by Jackie Wyers." />
  <meta property="og:image" content="https://www.jackiewyers.beauty/Images/Articles/Francesca/FrancescaThumb.jpg" />
  <meta property="og:url" content="https://www.jackiewyers.beauty/francesca-bridgerton" />

  <meta name="twitter:title" content="Francesca Bridgerton Makeup, Hair, and Dress - Jackie Wyers" />
  <meta name="twitter:description" content="A detailed tutorial by Jackie Wyers on recreating Francesca Bridgerton's signature beauty look from Bridgerton Season 3." />
  <meta name="twitter:image" content="https://www.jackiewyers.beauty/Images/Articles/Francesca/FrancescaThumb.jpg" />
  <meta name="twitter:card" content="summary_large_image" />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Francesca Bridgerton Makeup, Hair, and Dress - Jackie Wyers",
        "description": "Recreate Francesca Bridgerton's iconic look from Bridgerton Season 3 with makeup, hair, and fashion tips by Jackie Wyers.",
        "image": "https://www.jackiewyers.beauty/Images/Articles/Francesca/FrancescaThumb.jpg",
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
          "@id": "https://www.jackiewyers.beauty/francesca-bridgerton"
        }
      }
    `}
  </script>
</Helmet>


<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <a href="/popculture" style={{ fontFamily: 'GFS Didot, serif', fontSize: '1rem', color: '#000000', textDecoration: 'none' }}>
          BEAUTY // POP CULUTRE
        </a>
      </div>

      <ArticleTitle
  mainTitle="Francesca Bridgerton Makeup, Hair, and Dress"
  subTitle="A demure modern Regency look, perfect for auburn hair & fair skin"
  author="Jackie Wyers"
  publishDate="September 08, 2024"
/>

<SocialShare 
  url="https://www.jackiewyers.beauty/francesca-bridgerton" 
  title="Francesca Bridgerton Makeup, Hair, and Dress - Jackie Wyers" 
  imageUrl="https://www.jackiewyers.beauty/Images/Articles/Francesca/FrancescaThumb.jpg" 
/>

      <ResponsiveYoutube src="https://www.youtube.com/embed/Bkt-bffs_aQ?si=4KfZAeGRqPEGLR8A" title="FRANCESCA BRIDGERTON inspired makeup tutorial jackie wyers" />
  
      <div style = {{textAlign: 'center', margin: '10px auto' }}>
<SubscribeButton />
</div>

<p style={{ margin: '20px auto', textAlign: 'center', fontSize: '1.1rem', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
</p>



<DropCap1 text="In the opulent world of Bridgerton Season 3, we’re introduced to the ethereal beauty of Francesca
  Bridgerton, whose soft yet striking makeup looks and elegant hairstyles capture modern Regency-era
  glamour Bridgerton has become known for. From bold blush to a signature half-up half-down style
  similar to princess Belle, I’m breaking down all the steps. Plus, I’ll be sharing some of my favorite
  products at the moment and what is really used on set, as seen on @faithmakeupartist Instagram,
  showcasing behind the scenes!"/>





<h2 style={headingStyle}>Get the Francesca-Inspired Look</h2>
<div style={gridContainerStyle}>
  <img src={image1} alt="Jackie Wyers as Francesca Bridgerton" style={imageStyle} />
</div>

<p style={captionStyle}>
See behind the scenes of Francesca’s look from makeup artist @faithmakeupartist on IG for a product breakdown! Original design by Erika Ökvist.
</p>

<p style={paragraphStyle}>
  The key features of this look are a dewy highlight, bold blush really enhancing high cheekbones, with
  medium pink-toned lip & a pop of cranberry to the crease. <a style={linkStyle} href="https://www.netflix.com/title/80232398" target="_blank" rel="noreferrer">Francesca</a> shines in champagne-toned
  clothing, as well as <a style={linkStyle} href="https://en.wikipedia.org/wiki/Bridgerton" target="_blank" rel="noreferrer">Bridgerton</a> blue of course, with decorated updos similar to her sister, Daphne
  Bridgerton. Let’s get the look!
</p>



<h2 style={headingStyle}>A Youthful Base</h2>
<p style={paragraphStyle}>
  To achieve <a style={linkStyle} href="https://www.netflix.com/title/80232398" target="_blank" rel="noreferrer">Francesca’s</a> flawless complexion, I’m applying the <a style={linkStyle} href="https://www.charlottetilbury.com/" target="_blank" rel="noreferrer">Charlotte Tilbury Hollywood Flawless
  Filter</a> as a base like the <a style={linkStyle} href="https://www.instagram.com/faithmakeupartist/" target="_blank" rel="noreferrer">@faithmakeupartist</a> on set, focusing on the cheeks and forehead. This product is
  a must for a dewy glow that isn’t overwhelming. For foundation, the iconic <a style={linkStyle} href="https://www.giorgioarmanibeauty-usa.com" target="_blank" rel="noreferrer">Armani Luminous Silk
  Foundation</a> was used. This foundation is one of the best out there, delivering a smooth, luminous finish
  worth every penny along with the <a style={linkStyle} href="https://www.giorgioarmanibeauty-usa.com" target="_blank" rel="noreferrer">Armani Luminous Silk concealer</a> for highlighting and concealing.
</p>
<ResponsiveIframe src="https://shopmy.us/collections/public/794081?noHeader=true" title="Shop My Victoria's Secret Favorites" />


<h2 style={headingStyle}>Dewy, Highlighted Cheekbones</h2>
<p style={paragraphStyle}>
  <a style={linkStyle} href="https://www.netflix.com/title/80232398" target="_blank" rel="noreferrer">Francesca’s</a> look in Season 3 features a dewy, bold highlight and beautifully contoured cheeks. I’ve seen
  mixed reviews on the products used—some articles say it was the <a style={linkStyle} href="https://www.charlottetilbury.com" target="_blank" rel="noreferrer">Charlotte Tilbury Beauty Light Wands</a>,
  while others claim the <a  style={linkStyle} href="https://www.patmcgrath.com/" target="_blank" rel="noreferrer">Pat McGrath Skin Fetish</a> was the go-to. I personally prefer <a style={linkStyle} href="https://www.charlottetilbury.com" target="_blank" rel="noreferrer">Charlotte Tilbury
  Beauty Light Wand</a> in Spotlight! After dotting along the cheeks, powder the face next, but leave the
  highlight slightly “wet” to pick up the light.
</p>
<p style={paragraphStyle}>
  For contouring, I prefer a more detailed approach using powder, inspired by <a style={linkStyle} href="https://www.instagram.com/hannahfkdodd/" target="_blank" rel="noreferrer">Hannah Dodd’s</a> high and
  round cheekbones and defined nose bridge. The subtle transformation steps are totally optional!
</p>
<ResponsiveIframe src="https://shopmy.us/collections/public/794089?noHeader=true" title="Shop My Victoria's Secret Favorites" />

  


<h2 style={headingStyle}>Soft Brows and Bold Blush</h2>
<p style={paragraphStyle}>
  Moving on to brows, I quickly fill them in using a shade similar to <a style={linkStyle} href="https://www.anastasiabeverlyhills.com" target="_blank" rel="noreferrer">Anastasia Beverly Hills Brow Wiz</a> in
  Taupe, but from <a style={linkStyle} href="https://www.annabelle.com/en_ca/" target="_blank" rel="noreferrer">Annabelle</a>, which is a favorite drugstore product of mine.
</p>
<p style={paragraphStyle}>
  For blush, I’m using the <a style={linkStyle} href="https://www.patmcgrath.com" target="_blank" rel="noreferrer">Pat McGrath Labs Blush Palette</a> from the <a style={linkStyle} href="https://en.wikipedia.org/wiki/Bridgerton" target="_blank" rel="noreferrer">Bridgerton</a> collection, although
  <a style={linkStyle} href="https://www.charlottetilbury.com" target="_blank" rel="noreferrer">Charlotte Tilbury blush wands</a> were used on set. I'm obsessed with this palette—its shades are ones I
  reach for often, all housed in a gorgeous round box. It's easily my top recommendation from the
  collection! I mixed the coral shade along the cheekbone with the deepest rose applied in an
  upward flick from the contour, creating a snatched, period-drama-meets-<a style={linkStyle} href="https://www.charlottetilbury.com" target="_blank" rel="noreferrer">Charlotte Tilbury</a> look.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/794100?noHeader=true" title="Shop My Victoria's Secret Favorites" />




<h2 style={headingStyle}>A Pop of Cranberry in the Crease</h2>
<p style={paragraphStyle}>
  For <a style={linkStyle} href="https://www.netflix.com/title/80232398" target="_blank" rel="noreferrer">Francesca’s</a> eyes, <a style={linkStyle} href="https://www.charlottetilbury.com" target="_blank" rel="noreferrer">Charlotte Tilbury’s Pillow Talk Eyeshadow</a> was reportedly used. I start with the
  dusty pink shade all over the lid. To open up the eye, add a light reflective liner pencil to the middle of the
  bottom water line, and highlight the inner corner as well.
</p>
<p style={paragraphStyle}>
  To add depth, add in a cranberry shade through the crease—<a style={linkStyle} href="https://www.maccosmetics.com" target="_blank" rel="noreferrer">MAC’s Cranberry</a> is a fantastic single shade,
  and if you have the <a style={linkStyle} href="https://www.patmcgrath.com" target="_blank" rel="noreferrer">Bridgerton collections from Pat McGrath</a>, you can repurpose the maroon and
  cranberry shades as well.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/794107?noHeader=true" title="Shop My Victoria's Secret Favorites" />

<p style={paragraphStyle}>
  Tight line with black liner and if you like to extend the eyes slightly, add a soft, faint wing for a subtle,
  defined look.
</p>


<p style={paragraphStyle}>
  For mascara, try <a style={linkStyle} href="https://www.toofaced.com" target="_blank" rel="noreferrer">Too Faced Better Than Sex</a>, paired
  with either individual lashes from <a style={linkStyle} href="https://www.sweedlashes.com" target="_blank" rel="noreferrer">Sweed</a>, or for a
  quicker application, lash clusters.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/794110?noHeader=true" title="Shop My Victoria's Secret Favorites" />

<h2 style={headingStyle}>Medium Pink Toned Lip</h2>
<p style={paragraphStyle}>
  For lips, the <a style={linkStyle} href="https://www.patmcgrath.com" target="_blank" rel="noreferrer">McGrath Lip Liner</a> and Passion Flower Lipstick were used, but I went with <a style={linkStyle} href="https://www.charlottetilbury.com" target="_blank" rel="noreferrer">Charlotte
  Tilbury’s Lip Cheat Lip Liner</a> in Supersize Me, paired with <a style={linkStyle} href="https://www.vulouxvanity.com" target="_blank" rel="noreferrer">Vuloux Vanity Glamour Lipstick</a> in Royal
  Pink. Often lip colour will look different from person to person, so I used what I thought looked
  most similar to my inspiration photos!
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/794113?noHeader=true" title="Shop My Victoria's Secret Favorites" />

<div style={gridContainerStyle}>
  <img src={image2} alt="Jackie Wyers as Francesca Bridgerton Hair and Makeup" style={imageStyle} />
</div>


<h2 style={headingStyle}>A Bridgerton-Inspired Haul</h2>
<p style={paragraphStyle}>
  No <a  style={linkStyle} href="https://en.wikipedia.org/wiki/Bridgerton" target="_blank" rel="noreferrer">Bridgerton</a> tutorial would be complete without a
  little Bridgerton-inspired haul! I couldn’t resist the <a style={linkStyle} href="https://www.bathandbodyworks.com" target="_blank" rel="noreferrer">Bridgerton candles from Bath & Body Works</a>. See
  the collection linked below - my personal favorite is the scent Bridgerton Study, which smells like “smooth amber, oakwood and dried orchids.”
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/794136?noHeader=true" title="Shop My Victoria's Secret Favorites" />

<div style={gridContainerStyle}>
  <img src={image3} alt="Jackie Wyers as Francesca Bridgerton Wearing Ivy City Co Tessie Dress in Champagne" style={imageStyle} />
</div>

<ResponsiveIframe src="https://shopmy.us/collections/public/794145?noHeader=true" title="Shop My Victoria's Secret Favorites" />




<div style={gridContainerStyle}>
  <img src={image4} alt="Jackie Wyers as Francesca Bridgerton Wearing Hairstyle with Pearl Accessories" style={imageStyle} />
</div>
<p style={paragraphStyle}>
  Another awesome affordable collab is the <a style={linkStyle} href="https://www.mykitsch.com/collections/bridgerton" target="_blank" rel="noreferrer">Kitsch Hair x Bridgerton Collection</a> featuring satin
  pillowcases, scrunchies, and headbands inspired by the show’s luxurious aesthetics.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/794138?noHeader=true" title="Shop My Victoria's Secret Favorites" />


<p style={paragraphStyle}>
  Lastly, I have to mention the <a  style={linkStyle} href="https://www.kikocosmetics.com" target="_blank" rel="noreferrer">Kiko Milano x Bridgerton</a> makeup collection. I had a hard time
  getting my hands on it, but if you’re in Europe, Kiko stores are stocked with this super cute and more
  affordable alternative to the luxury <a style={linkStyle} href="https://www.patmcgrath.com" target="_blank" rel="noreferrer">Pat McGrath collaborations</a>. The collection features eyeshadow
  palettes, lipsticks, and blushes in vintage-inspired packaging, perfect for creating a Regency-era look
  like <a  style={linkStyle} href="https://www.netflix.com/title/80232398" target="_blank" rel="noreferrer">Francesca’s</a>.
</p>


<ResponsiveIframe src="https://shopmy.us/collections/public/794141?noHeader=true" title="Shop My Victoria's Secret Favorites" />

<h2 style={headingStyle}>Francesca’s Signature Half-Up Hairstyle</h2>
<p style={paragraphStyle}>
  To complete the <a style={linkStyle} href="https://www.netflix.com/title/80232398" target="_blank" rel="noreferrer">Francesca</a> look, let’s move on to the hairstyle. It’s a half-up, half-down style with curls
  cascading around in ringlets, curled in one direction around the head. Did you know <a style={linkStyle} href="https://www.instagram.com/hannahfkdodd/" target="_blank" rel="noreferrer">Hannah Dodd’s</a> hair
  is blonde, but she wears a slightly auburn wig for <a style={linkStyle} href="https://www.netflix.com/title/80232398" target="_blank" rel="noreferrer">Francesca</a>? Here’s a mini tutorial breaking down the
  hairstyle! I used extensions to shorten my hair so the curls would sit higher, but they are totally
  optional!
</p>

<div
style = {{
    textAlign: 'center',
    margin: '0 auto',
}}
>
<iframe
      style={{ boxShadow: '12px', borderRadius: '15px', width: '301px', height: '535px' }}
      src="https://www.youtube.com/embed/vCs0mi4ng2U"
      title="YouTube Shorts player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>



</div>


<h2 style={headingStyle}>A Champagne Dress fit for a Bridgerton</h2>
<p style={paragraphStyle}>
  Now, we need to take a moment for the dress I picked out to embody <a style={linkStyle} href="https://www.netflix.com/title/80232398" target="_blank" rel="noreferrer">Francesca’s</a> look! <a style={linkStyle} href="https://ivycityco.com" target="_blank" rel="noreferrer">Ivy City Co.</a>
  has beautiful gowns in various shades, with square necklines similar to <a style={linkStyle} href="https://en.wikipedia.org/wiki/Bridgerton" target="_blank" rel="noreferrer">Bridgerton</a>. Not only does the
  site have a stunning array of dresses, but they also carry matching mom-and-daughter outfits and adorable
  pre-teen clothes if you have kids! I had so much fun recreating <a  style={linkStyle} href="https://www.netflix.com/title/80232398" target="_blank" rel="noreferrer">Francesca’s</a> look from Season 3 of
  <a style={linkStyle} href="https://en.wikipedia.org/wiki/Bridgerton" target="_blank" rel="noreferrer">Bridgerton</a> and hope you liked this article. For more Bridgerton beauty, check out my various tutorials
  on <a style={linkStyle} href="https://www.youtube.com/c/JackieWyers" target="_blank" rel="noreferrer">YouTube</a> listed below.
</p>




<div style={gridContainerStyle}>
<ResponsiveYoutube src="https://www.youtube.com/embed/WZ7aJmJAcbU?si=ocWWrYggY8iiHGYD" title="FRANCESCA BRIDGERTON inspired makeup tutorial jackie wyers" />
</div>

<div style={gridContainerStyle}>
<ResponsiveYoutube src="https://www.youtube.com/embed/DZw0obZLIb8?si=vMXV78ssKOVT2lnr" title="FRANCESCA BRIDGERTON inspired makeup tutorial jackie wyers" />
</div>

<div style={gridContainerStyle}>
<ResponsiveYoutube src="https://www.youtube.com/embed/IIjMH5bnq8k?si=HwHMwkLZXQJ29CE3" title="FRANCESCA BRIDGERTON inspired makeup tutorial jackie wyers" />
</div>



       <div>
        <img src={signature} alt="Jackie Wyers Signature XoXo" style={{ width: '100%' }} />
      </div>


     
     
   

      <NextArticle
      link="/perioddrama"
      imgSrc={period}
      altText="No Makeup Makeup from Period Dramas"
      linkText="MORE POP CULTURE →"
      containerStyle={{ margin: '1rem 0' }} // customize as needed
      linkStyle={{ color: '#000000', fontSize: '1.05rem' }} // customize as needed
      imgStyle={{ borderRadius: '10px' }} // customize as needed
    />

      <Comments website-id={websiteId} page-id={"francesca-hairstyle1"} />

     

     
     
      
    </div>
    
  );

  return (
    <div ref={blogRef}>
      <Card
        title="Francesca Bridgerton Makeup, Hair, and Dress"
        description="A demure modern Regency look, perfect for auburn hair & fair skin"
        blogContent={blogContent}
      />
    </div>
  );
};

export default Francesca;
