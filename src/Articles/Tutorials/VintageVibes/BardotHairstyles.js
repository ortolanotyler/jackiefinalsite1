import React, { useRef, useEffect } from 'react';
import '../../ExampleTutorial1.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import { initGA, logPageView } from '../../../analytics';
import AdSenseAd from '../../../Advertising/Ads';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import Carousel from '../../../Components/Carousel';
import { Helmet } from 'react-helmet';
import DropCap1 from '../../Travel/DropCap1';
import ArticleTitle from '../../../Components/ArticleTitle';


const image1 = `${process.env.PUBLIC_URL}/Images/Articles/BardotHairstyles/1.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/BardotHairstyles/2.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/Articles/BardotHairstyles/3.jpg`;
const image4 = `${process.env.PUBLIC_URL}/Images/Articles/BardotHairstyles/4.jpg`;
const image5 = `${process.env.PUBLIC_URL}/Images/Articles/BardotHairstyles/5.jpg`;
const image6 = `${process.env.PUBLIC_URL}/Images/Articles/BardotHairstyles/6.jpg`;
const image7 = `${process.env.PUBLIC_URL}/Images/Articles/BardotHairstyles/7.jpg`;
const image8 = `${process.env.PUBLIC_URL}/Images/Articles/BardotHairstyles/8.jpg`;

const sharon = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateIconic/ICONICSHARONTHUMBNAIL.jpg`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
 

    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  
);

const BardotHairstyles = () => {

  useEffect(() => {
    initGA();
    logPageView('/bardothairstyles');
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
  margin: '0 auto',

  maxWidth: '525px', // Consistent with the other paragraphs
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
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  flexWrap: 'wrap',
  margin: '1rem 0'
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
        "image": "https://jackiewyers.beauty/Images/Articles/BardotHairstyles/BardotThumbnail.png",
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



      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75px' }}>
        <a href="/timetraveltutorials" style={{ fontFamily: 'GFS Didot, serif', fontSize: '0.8rem', color: '#000000', textDecoration: 'none' }}>
          BEAUTY // TIME TRAVEL TUTORIALS
        </a>
      </div>

  <ArticleTitle
  mainTitle="Mastering the Bardot Bun 🌸"
  subTitle="My Many Attempts At The Iconic 60s Style"
  author="Jackie Wyers"
  publishDate="July 25th, 2024"
/>
  
<ResponsiveYoutube src="https://www.youtube.com/embed/i8wHU_XsM2A?si=ASPsSodw8bM_vliD" title="Brigitte Bardot ‘60s Makeup Tutorial👱🏼‍♀️🎀 (perf for hooded eyes!)" />

<div style = {{textAlign: 'center', margin: '10px auto' }}>
<SubscribeButton />
</div>



<p style={{ margin: '20px auto', textAlign: 'center', fontSize: '1.1rem', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
</p>


<DropCap1 text="Welcome back to Time Travel Tutorials! Step back into the glamorous ‘60s with Brigitte
Bardot's iconic big bun! Whether you're looking for a chic everyday look or a show-stopping updo for a special occasion, I've got you covered with my tried- and-tested techniques featuring faux bangs, using the ends of your own hair. Let's dive into vintage beauty and master the Bardot bun together!" />

<div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>

<p style={paragraphStyle}>
  One of my first videos 10 years ago was attempting to recreate a Bardot-inspired half-up, half-down 
  <a style={linkStyle} href="https://en.wikipedia.org/wiki/Half_up,_half_down_hairstyle" target="_blank" rel="noreferrer">'do</a> 
  and her big bun updo. It wasn't perfect, few too many bobby pins to be practical, but it sparked a decade-long journey to master this iconic style. Fast forward to today, and I've discovered some amazing tricks that make achieving this look a breeze, without necessarily committing to her iconic 
  <a style={linkStyle} href="https://en.wikipedia.org/wiki/Brigitte_Bardot" target="_blank" rel="noreferrer">curtain bang haircut</a>.
</p>


<div style={{ display: 'flex', justifyContent: 'center',  flexWrap: 'wrap',}}>
  <a href="https://www.youtube.com/watch?v=hl2f12fGJwg&t=240s" target="_blank" rel="noreferrer" style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
    <img src={image1} alt="Jackie Wyers' first Bardot inspired hairstyles from 10 years ago." style={{ width: '50%', height: 'auto' }} />
    <img src={image2} alt="One of Jackie Wyers' very first tutorials of Bardot inspired hairstyles from 10 years ago." style={{ width: '50%', height: 'auto' }} />
  </a>
</div>


<p style={captionStyle}>
<a style={linkStyle} href="https://www.youtube.com/watch?v=hl2f12fGJwg" target="_blank" rel="noreferrer"> My first Bardot inspired hairstyles from 10 years ago.</a>
</p>

<p style={paragraphStyle}>
  I absolutely love fluffy curtain bangs like <a style={linkStyle} href="https://en.wikipedia.org/wiki/Sabrina_Carpenter" target="_blank" rel="noreferrer">Sabrina Carpenter</a> (a modern pop culture icon inspired by B.B.), and cutting curtain bangs and layers can definitely make your hair look a lot fuller if it's around shoulder length. That being said, when your hair is as long as mine—down to the belly button—there isn’t enough hair to do face-framing layers all the way to the ends. So, it's a haircut I personally skip to keep my lengths looking fuller. However, if I ever go shoulder length, you know I’ll be getting a Bardot-inspired haircut!
</p>

<div style={gridContainerStyle}>
   <a href="https://www.youtube.com/watch?v=3zCKE1yS7Yw&t=346s" target="_blank" rel = "noreferrer" >
   <img src={image3} alt="Sabrina Carpenter Makeup Tutorial" style={imageStyle} />
   </a>
 </div>


 <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
Inspired Muse - Tap image for Sabrina Carpenter inspired makeup tutorial.
</p>


<div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>

<p style={paragraphStyle}>
  This article is for those of you who want to experiment with faux bangs without using clip-ins and get the Bardot look temporarily. Let’s discover the best techniques to get the look, shall we?
</p>

<div style={gridContainerStyle}>
   <img src={image4} alt="Jackie Wyers Bardot Hairstyles" style={imageStyle} />
 </div>

<p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
Updated Bardot Bun on Natural Hair
 
</p>

<div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>

<h2 style={headingStyle}>
Method One: Best Big Bun
</h2>

<p style={paragraphStyle}>
  When I first attempted this style 10 years ago, I put my hair up into a high ponytail, and since <a style={linkStyle} href="https://en.wikipedia.org/wiki/Sock_bun" target="_blank" rel="noreferrer">sock buns</a> were all the rage, I had a bun maker handy, which made the style fairly easy to do.
</p>

<div style={headingStyle}>

<ResponsiveYoutube src="https://www.youtube.com/embed/hl2f12fGJwg?si=o61hFs2iXQVE5J6G" title="Brigitte Bardot ‘60s Makeup Tutorial by Jackie Wyers" />

</div>

<p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '1em', maxWidth: '100%', fontStyle: 'italic' }}>
Bun starts at 4:05    </p>




<div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>


<p style={paragraphStyle}>
  Initially, I moved part of my ponytail forward and laid the ends as faux bangs, securing them around the hairline with bobby pins. Through the years, I found a better method that really makes the hairstyle stay put, even if there’s some wind outside, without worrying about bobby pins becoming loose.
</p>


<div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
<p style={paragraphStyle}>
  What I loved about my initial attempt though, was how I created the <a style={linkStyle} href="https://www.hair.com/tease-and-curl-techniques" target="_blank" rel="noreferrer">voluminous base bun</a>. It is super easy to take pieces from around the <a style={linkStyle} href="https://www.sallybeauty.com/tools-and-brushes/hair-rollers-and-pins/hair-buns/donut-bun-makers/SLONYN58.html" target="_blank" rel="noreferrer">bun maker</a>, curl, tease, and pin in loops. When you already have a bun maker as a base shape, you can go big, and wedging <a style={linkStyle} href="https://www.goodhousekeeping.com/beauty-products/hair-accessories/g27726179/best-bobby-pins/" target="_blank" rel="noreferrer">bobby pins</a> into it will keep it in place. Kudos to little me for recreating this iconic style in an easy way!
</p>

<div
style = {{
  margin : '1rem auto'
}}
>

  <AdSenseAd/>
</div>

<h2 style={headingStyle}>
Method Two: Best Faux Bangs

</h2>

<div style = {{textAlign: 'center'}}>
<iframe
      style={{ boxShadow: '12px', borderRadius: '15px', width: '301px', height: '535px' }}
      src="https://www.youtube.com/embed/7JuWiUbby4I"
      title="Brigitte Bardot Bun & Bangs WITHOUT the chop💇🏼‍♀️👱🏼‍♀️🎀r"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
</div>


<p style={paragraphStyle}>
  When I recreated a <a style={linkStyle} href="https://www.biography.com/actor/brigitte-bardot" target="_blank" rel="noreferrer">Brigitte Bardot</a> inspired look many years later using a different inspiration photo, I came up with another method to shorten the hair for the bang section. For my new technique, section the hair into three ponytails: two smaller pigtails at the front with a centre part, and the rest of the hair in a super high ponytail.
</p>

<div
style = {{
  margin : '1rem auto'
}}
>

  <AdSenseAd/>
</div>

<p style={paragraphStyle}>
  Instead of using a bun maker, I <a style={linkStyle} href="https://www.allure.com/story/how-to-tease-hair" target="_blank" rel="noreferrer">teased</a> my ponytail, wrapped it into a simple bun, and added some very textured <a style={linkStyle} href="https://www.byrdie.com/how-to-pin-curls" target="_blank" rel="noreferrer">pin curls</a> at the front of the updo for more height and interest. This style wasn’t quite as voluminous as the first attempt, so I recommend using a bun maker if you want to go even bigger like in the first tutorial. We will combine these methods next, but first, here’s a guide to creating the best <a style={linkStyle} href="https://www.harpersbazaar.com/beauty/hair/g3996/how-to-style-faux-bangs/" target="_blank" rel="noreferrer">faux bangs</a>.
</p>


<h2 style={headingStyle}>
Breaking Down My Faux Bangs Method

</h2>

<div style={gridContainerStyle}>
   <a href="https://www.youtube.com/watch?v=-LLQLc6imXA" target="_blank" rel = "noreferrer" >
   <img src={image8} alt="Jackie Wyers Bardot Hairstyles" style={imageStyle} />
   </a>
 </div>

<p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>

My Take On A Brunette Bardot Updo
</p>


<p style={paragraphStyle}>
  After the base bun is complete, I created faux bangs with the two mini pigtails sectioned off.
</p>
<div
style = {{
  margin : '1rem auto'
}}
>

  <AdSenseAd/>
</div>

<p style={paragraphStyle}>
  Tease and twist each pigtail, hold it high in the air, and cross it over to the opposite side, behind the second pigtail, pinning with an X to keep in place. This not only adds to the updo but also allows you to pull the leftover ends from the pigtail underneath the twist, creating a <a style={linkStyle} href="https://www.instyle.com/how-to-get-curtain-bangs" target="_blank" rel="noreferrer">fluffy curtain bang</a> on each side.
</p>


<div
style = {{
  margin : '1rem auto'
}}
>

  <AdSenseAd/>
</div>

<p style={paragraphStyle}>
  You can adjust the length of your new bangs, styling them with a <a style={linkStyle} href="https://www.ulta.com/p/hot-tools-professional-curling-iron-pimprod2002102" target="_blank" rel="noreferrer">curling iron</a>, teasing comb, and hairspray. The tight twist allows for fewer bobby pins to keep them in place. If your hair is long like mine, loop the excess length and blend it into the bun and be sure to set with <a style={linkStyle} href="https://www.sephora.com/shop/hairspray" target="_blank" rel="noreferrer">hairspray</a>.
</p>


<p style={paragraphStyle}>
  I’m really not sure how I came up with this technique, but it’s kind of genius, if I do say so myself! 🤣 If you try it out, please <a style={linkStyle} href="https://www.instagram.com/jackiewyers/" target="_blank" rel="noreferrer">tag me</a> because I would love to see how it looks on you.
</p>

<h2 style={headingStyle}>
Combining Methods for The Best Bardot Bun

</h2>

<div style={{ textAlign: 'center' }}>
  <iframe
    style={{ boxShadow: '12px', borderRadius: '15px', width: '301px', height: '535px' }}
    src="https://www.youtube.com/embed/WyP-Lco8BTA"
    title="My BIGGEST & BEST Bardot Bun with Faux Bangs! 🎀"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>


<p style={paragraphStyle}>
  Now that we’ve covered the best way to achieve the bangs and the easiest way to get that big, voluminous bun, let’s combine the two methods. Here’s to creating the biggest and best Bardot bun as seen in this <a style={linkStyle} href="https://www.marcanthony.com/" target="_blank" rel="noreferrer">ad I created with Marc Anthony</a> above!
</p>

<p style={paragraphStyle}>
  I used the <a style={linkStyle} href="https://www.marcanthony.com/products/style-flex-2-in-1-adjustable-texture-spray" target="_blank" rel="noreferrer">Marc Anthony Style Flex 2-in-1 Adjustable Texture Spray</a> for extra grit that helped with styling. It’s a unique product that with the twist of a nozzle, you have a low setting (perfect for touchable bangs) and a high setting (great for teasing for lots of volume and hold in the updo).
</p>

<ResponsiveIframe
        src="https://shopmy.us/collections/public/730923?noHeader=true"
        title="Marc Anthony Style Flex™ 2-IN-1 Adjustable Texture Spray"
      />

<p style={paragraphStyle}>
  For those with thicker hair, consider using a strong-hold hairspray to keep your bun in place all day like <a style={linkStyle} href="https://www.walmart.com/ip/OGX-Bamboo-Fiber-Full-Big-Hairspray/129543288" target="_blank" rel="noreferrer">OGX Bamboo Fibre Full hairspray</a>. If your hair is on the finer side, a bit of <a style={linkStyle} href="https://www.sephora.com/shop/texturizing-hair-spray" target="_blank" rel="noreferrer">texturizing spray</a> can add the necessary grip and volume as is.
</p>

<h2 style={headingStyle}>
Product Recommendations for the Perfect Bardot Bun:
</h2>

<div>
  
</div>
<ResponsiveIframe
        src="https://shopmy.us/collections/public/691280?noHeader=true"
        title="Product Recommendations for the Perfect Bardot Bun"
      />
      <ResponsiveIframe
        src="https://shopmy.us/collections/public/691841?noHeader=true"
        title="More Product Recommendations for the Perfect Bardot Bun"
      />
            <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>
        CONTAINS: AFFILIATE LINKS
      </p>

<h2 style={headingStyle}>
Bridgitte Bardot Makeup

</h2>

<p style={paragraphStyle}>
  As for makeup to complete the look, I have a Bardot-inspired makeup look with a <a style={linkStyle} href="https://www.amazon.com/blonde-wig" target="_blank" rel="noreferrer">blonde wig</a> to really capture her vibe. Check it out <a style={linkStyle} href="https://www.youtube.com/watch?v=i8wHU_XsM2A" target="_blank" rel="noreferrer">here</a> if you’re looking for more inspiration from the ‘60s bombshell.
</p>

<Carousel images={[image5, image6, image7]} />



<p style={paragraphStyle}>
I hope you enjoyed another <a href="timetraveltutorials" target="_blank" rel="noreferrer">Time Travel Tutorials</a> and all the vintage vibes. If you are looking for more 1960s inspiration, check out more vintage vibes on my YouTube playlist, or on my site. I hope this tutorial brings a touch of vintage glamour to your hairstyling routine. Remember, beauty is all about having fun and experimenting, so don't be afraid to try new things and make the look your own. Happy styling!

</p>

<p style={paragraphStyle}>
Pin my Bardot looks on Pinterest to your inspiration board!
</p>

<div style={pinterestGridStyle}>
        <iframe
          src="https://assets.pinterest.com/ext/embed.html?id=794463190524256496"
          height="520"
          width="236"
          title="pin1"
          frameBorder="0"
          scrolling="no"
        ></iframe>
        <iframe
          src="https://assets.pinterest.com/ext/embed.html?id=794463190540664022"
          height="520"
          width="236"
          frameBorder="0"
          scrolling="no"
            title="pin2"
        ></iframe>
        <iframe
          src="https://assets.pinterest.com/ext/embed.html?id=794463190512567046"
         height="520"
          width="236"
          frameBorder="0"
          scrolling="no"
          title="pin3"

        ></iframe>
      </div>




       <div>
        <img src={signature} alt="Jackie Wyers Signature XoXo" style={{ width: '100%' }} />
      </div>
      
     
      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <a href="/iconicsharon" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={sharon} alt="Sharon Tate's Bohemian Style Tutorial" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', display: 'block' }} />
          MORE TIME TRAVEL TUTORIALS →
        </a>
      </div>

      <Comments website-id={websiteId} page-id={"bardot-hairstyles"} />

      
      <div
style = {{
  margin : '1rem auto'
}}
>

  <AdSenseAd/>
</div>
      
    </div>
    
  );

  return (
    <div ref={blogRef}>
      <Card
        title="Mastering the Bardot Bun"
        description="My Many Attempts At The Iconic 60s Style"
        blogContent={blogContent}
      />
      <div
style = {{
  margin : '1rem auto'
}}
>

  <AdSenseAd/>
</div>
    </div>
  );
};

export default BardotHairstyles;
