import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import DropCap from '../../../Components/DropCap';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import AdSenseAd from '../../../Advertising/Ads';
import { initGA, logPageView } from '../../../analytics';
import ArticleTitle from '../../../Components/ArticleTitle';

const image1 = `${process.env.PUBLIC_URL}/Images/Articles/2016/2016Double.png`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/2016/2016FaceChart.png`;
const image3 = `${process.env.PUBLIC_URL}/Images/Articles/2016/2016Makeup4.jpg`;
const image4 = `${process.env.PUBLIC_URL}/Images/Articles/2016/2016-Perrie.jpg`;
const lana = `${process.env.PUBLIC_URL}/Images/Articles/LanaXskims/LanaDelRayThumbnail.jpeg`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

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

const Makeup2016 = () => {

  useEffect(() => {
    initGA();
    logPageView('/2016makeup');
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
        <title>A Quintessential 2016 Makeup Tutorial</title>
    
  <link rel="canonical" href="https://jackiewyers.beauty/2016makeup" />

  <meta name="description" content="Explore the makeup trends of 2016 with Jackie Wyers. Learn how to achieve bold glamour looks inspired by Kylie Jenner and other beauty icons." />
  <meta name="keywords" content="2016 Makeup Trends, Jackie Wyers, Kylie Jenner Makeup, Bold Glamour, Makeup Tutorial, Beauty Blog, High-coverage foundation, Dip brows, Glittery cut creases, Voluminous mink lashes, Matte lip combinations, Makeup tips, Beauty influencer, Beauty trends 2016, Retro beauty, Time Travel Tutorials, Smoky eyes, Instagram makeup, Flash photography makeup, Makeup looks, Kylie Lip Kits, Bold makeup, Highlighting and contouring, Laura Mercier Setting Powder, Becca Champagne Pop, Jaclyn Hill, Too Faced Peach Palette, IG Baddie makeup, Anastasia Dip Brow, Tarte Shape Tape, Benefit Hoola Bronzer, Ben Nye Luxury Powder, Painted By Spencer" />

  <meta property="og:title" content="2016 Makeup Trends - Jackie Wyers" />
  <meta property="og:description" content="Explore the makeup trends of 2016 with Jackie Wyers. Learn how to achieve bold glamour looks inspired by Kylie Jenner and other beauty icons." />
  <meta property="og:image" content="https://jackiewyers.beauty/Images/Articles/2016/2016MakeupThumbnail.jpg" />
  <meta property="og:url" content="https://jackiewyers.beauty/2016makeup" />
  <meta name="twitter:title" content="2016 Makeup Trends - Jackie Wyers" />
  <meta name="twitter:description" content="Explore the makeup trends of 2016 with Jackie Wyers. Learn how to achieve bold glamour looks inspired by Kylie Jenner and other beauty icons." />
  <meta name="twitter:image" content="https://jackiewyers.beauty/Images/Articles/2016/2016MakeupThumbnail.jpg" />
  <meta name="twitter:card" content="summary_large_image" />

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
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4660168246825318" crossorigin="anonymous"></script>

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "2016 Makeup Trends - Jackie Wyers",
        "description": "Explore the makeup trends of 2016 with Jackie Wyers. Learn how to achieve bold glamour looks inspired by Kylie Jenner and other beauty icons.",
        "image": "https://jackiewyers.beauty/Images/Articles/2016/2016MakeupThumbnail.jpg",
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
          "@id": "https://jackiewyers.beauty/2016makeup"
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
  mainTitle="A Quintessential 2016 Makeup Tutorial"
  subTitle="All Matte Everything... The Nostalgia!"
  author="Jackie Wyers"
  publishDate="March 1, 2024"
/>


      <ResponsiveYoutube src="https://www.youtube.com/embed/HtEPH6RUEZg?si=8RIeZhrp-luWJTSI" title="2016 Makeup Tutorial Jackie Wyers Beauty" />

      <div style = {{textAlign: 'center', margin: '10px auto' }}>
<SubscribeButton />
</div>



<p style={{ margin: '20px auto', textAlign: 'center', fontSize: '1.1rem', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
</p>

      <DropCap text="Welcome back to another installment of Time Travel Tutorials...though this time, we're not journeying too far back in time! The makeup trends of 2016 were significantly influenced by the young Kylie Jenner, the undeniable 'IT' girl for teens. High-coverage foundations, LOTS of setting powder, sharp and bold dip brows, warm smokey eyes, glittery cut creases, voluminous mink lashes, and deep, matte lip combinations had beauty enthusiasts captivated!" />
     
     <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
      <p style={paragraphStyle}>
        In this article, we'll revisit the products that were a staple on every makeup lover’s vanity in 2016 and embrace a daily bold glamour look. I was so excited to channel Kylie Jenner's dramatic flair, especially since I missed out on experimenting with these trends back in the day!
      </p>

      <a href="https://www.instagram.com/p/C43O7Q7OFuw/?hl=en" target="_blank" rel="noopener noreferrer">
     
      <div style={gridContainerStyle}>
      
      
      <img src={image1} alt="2016 Makeup Tutorial via Jackie Wyers on Instagram" style={{ width: '100%', maxWidth: '650px' }} />
        </div>
      </a>

      <h2 style={headingStyle}>The Essence of 2016 Makeup</h2>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a href="https://www.youtube.com/watch?v=HtEPH6RUEZg&feature=youtu.be" target="_blank" rel="noopener noreferrer">

          <img src={image2} alt="James" style={{ width: '100%', maxWidth: '650px' }} />
          </a>
        </div>
    
     <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
<p style={paragraphStyle}>
  To embody <a href="https://jackiewyers.beauty/kylie-jenner" style={linkStyle}>Kylie Jenner's look</a> and celebrate the key trends of 2016, we must adopt a "more is more" mentality. Instead of focusing on enhancing just one feature, we're highlighting them all simultaneously. To ensure the skin still looks youthful and fresh with such a makeup style, preparation is crucial. In the video embedded above, I was sponsored by <a href="https://www.dalbaofficial.com" style={linkStyle}>d'Alba</a>, and I love and have consistently repurchased the <a href="https://shopmy.us/collections/public/542368?noHeader=true" style={linkStyle}>d'Alba Italian White Truffle First Spray Serum</a>. It’s an excellent initial step to infuse the skin with moisture. The product smells amazing and feels luxurious while being affordable.
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/542368?noHeader=true" title="D'Alba Italian White Truffle First Spray Serum" />

      <h2 style={headingStyle}>Apply a Matte Primer</h2>

      <p style={paragraphStyle}>
  Use a classic matte primer, like the <a href="https://www.benefitcosmetics.com/en-ca/product/porefessional-face-primer" style={linkStyle}>Benefit Professional Primer</a>, to create a smooth base for your foundation.
</p>

      <h2 style={headingStyle}>Matte, High Coverage Foundation and The Beauty Blender</h2>

      <p style={paragraphStyle}>
  Opt for a matte foundation like the <a href="https://www.lorealparisusa.com/products/makeup/face/foundation/infallible-pro-matte-foundation.aspx" style={linkStyle}>L’Oréal Infallible Pro-Matte Foundation</a>, <a href="https://www.esteelauder.com/product/643/10274/product-catalog/makeup/double-wear-stay-in-place-makeup" style={linkStyle}>Estée Lauder Double Wear</a>, or <a href="https://www.toofaced.com/product/23402/66624/born-this-way-medium-to-full-coverage-foundation" style={linkStyle}>Born This Way Foundation</a>. I chose to go the drugstore route with L’Oréal, but all are excellent choices known for their long-lasting, high-coverage formula. Use a stippling brush or the iconic <a href="https://www.beautyblender.com" style={linkStyle}>beauty blender</a> for application, ensuring the sponge is dampened first! The <a href="https://www.elfcosmetics.com/blending-sponge/82220.html" style={linkStyle}>e.l.f. blending sponge</a> is a cost-effective alternative, though not as squishy!
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/551065?noHeader=true" title="Rich Lotion - Ana Sui" />

      <p style={paragraphStyle}>
  The <a href="https://www.beautyblender.com" style={linkStyle}>beauty blender</a> has been a staple since 2005, initially launching in collaboration with Victoria’s Secret. It transitioned to Sephora in 2011, garnering numerous awards, especially in 2014 and 2016, showcasing impressive brand longevity. Worth the money if you can spare it in my opinion!
</p>
     <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>Embrace Bold Brows and A Bright Highlight</h2>

      <p style={paragraphStyle}>
  Create bold brows with <a href="https://www.anastasiabeverlyhills.com/dipbrow-pomade/dipbrow-pomade.html" style={linkStyle}>Anastasia Dip Brow</a>, drawing inspiration from Kylie Jenner's well-defined, softly arched brows. The head of the brows are softer, creating an ombre effect into the darker arch and tail of the brow. Next, carve out the brow with the <a href="https://tartecosmetics.com/shop/shape-tape-concealer-836.html" style={linkStyle}>shape tape</a>, adding brightness and lift.
</p>

      <p style={paragraphStyle}>
        Although "block brows" are now considered a makeup faux-pas, this style can look great on some people when not overdone. If you love it, confidently wear it!
      </p>

      <p style={paragraphStyle}>
  Use a high-coverage concealer like <a href="https://tartecosmetics.com/shop/shape-tape-concealer-836.html" style={linkStyle}>Tarte Shape Tape</a> to highlight the centre of the face. For added brightness, dab <a href="https://www.maybelline.com/face-makeup/concealer/instant-age-rewind-eraser-dark-circles-treatment-concealer" style={linkStyle}>Maybelline under-eye concealer</a> in the inner corners. This drugstore gem blends seamlessly with both natural and full-coverage makeup looks. Set your makeup with <a href="https://www.lauramercier.com/makeup/setting-powder/translucent-loose-setting-powder" style={linkStyle}>Laura Mercier's translucent Setting Powder</a> lightly and we will soon “bake” the face!
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/551064?noHeader=true" title="Rich Lotion - Ana Sui" />

      <h2 style={headingStyle}>Lots of Contour and Bronze</h2>

      <p style={paragraphStyle}>
        Use the matte Hoola Bronzer for contouring and bronzing. It's perfect for sculpting under the cheekbones, jawline, and forehead. To match Kylie’s tan, I self-tanned, making this bronzer shade ideal. Benefit offers a range of bronzers for various skin tones, and Fenty Beauty has an extensive collection of contour sticks.
      </p>
     <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>Set and Bake Your Makeup</h2>
      <p style={paragraphStyle}>
  Baking is a great method to create a filter-in-real life effect. The powder method locks your makeup in place and boosts brightness, especially in flash photography. Apply a colorless setting powder, like <a href="https://www.bennye.com/collections/luxury-powders" style={linkStyle}>Ben Nye's "Fair Luxury Powder"</a>, with a puff, leaving the excess on as you continue your makeup.
</p>

<p style={paragraphStyle}>
  I actually did not know how to do this and used <a href="https://www.youtube.com/watch?v=KEaRpNQyb1I" style={linkStyle}>Painted By Spencer’s how-to</a> which helped educate me on how to achieve this makeup technique. His tutorial is linked below as another reference guide!
</p>

      <p style={paragraphStyle}>
        Add your bronzer first, as the powder will help sculpt under the contour for a seriously snatched look.
      </p>

      <ResponsiveIframe src="https://www.youtube.com/embed/KEaRpNQyb1I?si=KeTVxblvbSyBAekq" title="How to Bake - Painted By Spencer - YouTube" />

      <ResponsiveIframe src="https://shopmy.us/collections/public/542385?noHeader=true" title="Rich Lotion - Ana Sui" />

      <h2 style={headingStyle}>Choose the Right Blush and Highlighter</h2>

      <p style={paragraphStyle}>
  Choose a matte or slightly luminous rose shade blush. Kylie tailored her blush to each look, sometimes going with a brighter pink or coral. The <a href="https://www.nyxcosmetics.com/face/blush/ombre-blush/NYX_307.html" style={linkStyle}>NYX Ombre Blush</a> was a staple in 2016, and <a href="https://www.benefitcosmetics.com/en-ca/product/dandelion-blush" style={linkStyle}>Benefit Cosmetics' Dandelion</a> is a nice choice for a lighter blush shade. Apply lightly on the apples of the cheeks and blend from the contour.
</p>

<p style={paragraphStyle}>
  Let’s throw it back to <a href="https://www.smashbox.com/product/6020/47899/face/highlighter/becca-shimmering-skin-perfector-pressed-highlighter#/shade/Champagne_Pop" style={linkStyle}>Jaclyn Hill’s Champagne Pop</a> for an intense glow. Although Becca Cosmetics is no longer in business, Smashbox acquired the highlighters and they remain available. <a href="https://colourpop.com/products/super-shock-highlighter" style={linkStyle}>ColourPop’s Super Shock formula</a> is an excellent, affordable option for a bright highlight. Apply with a fan brush - bet you haven’t seen one of these brushes in a while!
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/542398?noHeader=true" title="Rich Lotion - Ana Sui" />
     <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>Create a Soft Smoky Eye</h2>
      
      <p style={paragraphStyle}>
  There’s of course many eye looks to try from 2016, like a glitter cut crease, but I reached for the <a href="https://www.toofaced.com/product/23402/64941/peachy-makeup/eyeshadow-palettes/sweet-peach-eye-shadow-palette" style={linkStyle}>Too Faced Sweet Peach Palette</a> to crease a soft warm brown smoky eye that’s easy for everyday.
</p>

      <p style={paragraphStyle}>
        Side note, but I went to the Peach Party in LA back in 2016 and it was such a cool experience and I still have the palette I was gifted from the event! Luckily, as I’m writing this post - you can still purchase the iconic and sweet smelling palette and it’s best not to use an expired one.
      </p>

      <p style={paragraphStyle}>
        Start with a bit of a warmth in the crease, but keep the lid and liner more neutral, with a deeper brown. Smoke out under the lash line and add a slightly shimmery brow bone highlight as well as brightening up the inner corner. Simple right?
      </p>

      <p style={paragraphStyle}>
        Another 2016 look was the IG Baddie style, which was even more elevated with a bold glitter cut crease and more intense contouring. I kept this version a little more wearable for everyday but if you’d like to see another bold glam, let me know in the comments!
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/542404?noHeader=true" title="Rich Lotion - Ana Sui" />
     <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>Line Your Eyes and Apply Mascara</h2>

      <p style={paragraphStyle}>
  My two favorite liners from the time were the <a href="https://www.sephora.com/product/sephora-collection-colorful-wink-it-felt-liner-waterproof-P429849" style={linkStyle}>Sephora brand liner</a> and <a href="https://www.maccosmetics.com/product/13838/46605/products/makeup/eyes/liner/brushstroke-24-hour-liner" style={linkStyle}>MAC Brushstroke liner</a>. My updated favorite is the <a href="https://www.yesstyle.com/en/lilybyred-starry-ninght-long-lasting-eyeliner-03-shiny-black/info.html/pid.1074754992" style={linkStyle}>Lilybyred liquid liner</a> though!
</p>

      <p style={paragraphStyle}>
        Smoke out the liner edges with shadow, as Kylie focused more on bold lashes rather than winged liner - that was more Ariana Grande’s signature look.
      </p>

      <p style={paragraphStyle}>
  Rim the waterline with a brown liner and choose a mascara that complements your lash type. I prefer <a href="https://www.benefitcosmetics.com/en-ca/product/roller-lash-curling-mascara" style={linkStyle}>Benefit's Roller Lash</a> for length and curl for my naturally shorter lashes, while <a href="https://www.toofaced.com/product/23402/5025/eye-makeup/mascara/better-than-sex-volumizing-mascara" style={linkStyle}>Too Faced's Better Than Sex</a> is great for enhancing longer lashes and topping up falsies.
</p>

      <h2 style={headingStyle}>Big Mink Lashes</h2>

      <p style={paragraphStyle}>
        Very full mink lashes were all the rage, but luckily brands have prioritized faux mink lashes now. Pop a pair on with duo glue and we are almost done!
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/542416?noHeader=true" title="Rich Lotion - Ana Sui" />

      <h2 style={headingStyle}>Pick Your Lip Combo</h2>

   
<p style={paragraphStyle}>
  Experiment with various <a href="https://kyliecosmetics.com" style={linkStyle}>Kylie Lip Kit</a> shades to suit your makeup vibe. In my reference photo, her looks mainly range from matte mauve grey to rosy or deep near-black shades. Very bold and a little edgy.
</p>

<p style={paragraphStyle}>
  Some of the old Kylie Lip Kits have been discontinued, but the brand <a href="https://gerardcosmetics.com" style={linkStyle}>Gerard Cosmetics</a> (also nostalgic) and <a href="https://www.rimmellondon.com" style={linkStyle}>Rimmel London</a> have great options too.
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/542424?noHeader=true" title="Rich Lotion - Ana Sui" />

      <h2 style={headingStyle}>Set and Refresh Your Makeup</h2>

      <p style={paragraphStyle}>
  Finish off by setting your makeup. If your skin feels too matte, rejuvenate it with a refreshing spray like the <a href="https://www.dalbaofficial.com" style={linkStyle}>d'Alba spray</a>, which can also double as a setting spray.
</p>
     <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>2016 Makeup Memories</h2>

      <a href="https://www.youtube.com/watch?v=HtEPH6RUEZg&feature=youtu.be" target="_blank" rel="noopener noreferrer">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={image3} alt="2016 Makeup Tutorial" style={{ width: '100%', maxWidth: '650px' }} />
        </div>
      </a>

      <p style={paragraphStyle}>
        As a young adult and beauty content creator during this era, my personal style wasn't heavily swayed by Kylie Jenner, which means, regrettably, I don't have many throwback looks that embody the era's most popular makeup trends. However, I did adore Little Mix and even recreated Perrie Edwards' makeup from the iconic 2016 hit "Shout Out to My Ex.” That’s probably the most bold look I tried at the time. I’d like to think my photo retouching skills have improved since then… why am I yellow?😂
      </p>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={image4} alt="Perrie Edwards Makeup via Jackie Wyers" style={{ width: '100%', maxWidth: '650px' }} />
      </div>

      <p style={paragraphStyle}>
  This 2016 makeup tutorial should bring back memories and introduce you to techniques that were all the rage. Whether revisiting old favorites or exploring them for the first time, enjoy the process and make it uniquely yours! Let me know if you’d like to see more iconic 2016 looks recreated.
</p>

<p style={paragraphStyle}>
  Thank you for reading and if you want to be featured on my site, submit your recreation or version of this look on my Insta <a href="https://www.instagram.com/jackiewyers/?hl=en" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>@jackiewyers</a>. I’d love to see you switch up your style with confidence!
</p>

      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <a href="/lanablog" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={lana} alt="Lana Del Rey" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', display: 'block' }} />
          MORE POP CULTURE BEAUTY →
        </a>
      </div>

      <div style={{ textAlign: 'center' }}>
        <img src={signature} alt="Signature" style={{ width: '100%', maxWidth: '650px' }} />
      </div>
     <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
      <Comments website-id={websiteId} page-id={"Makeup-2016"} />
    </div>
  );

  return (
    <div ref={blogRef}>
<Card
        title="A Quintessential 2016 Makeup Tutorial"
        description="All Matte Everything... The Nostalgia!"
        blogContent={blogContent}
      />  
     
      
        </div>
  );
};

export default Makeup2016
