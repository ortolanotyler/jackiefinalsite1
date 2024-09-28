import React, { useRef, useEffect } from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';

import { Helmet } from 'react-helmet';
import DropCap1 from '../../Travel/DropCap1';
import ArticleTitle from '../../../Components/ArticleTitle';
import NextArticle from '../../../Components/NextArticleComponent';
import SocialShare from '../../../Home/SocialShare';

const image1 = `${process.env.PUBLIC_URL}/Images/Articles/BarbieDoll/1.JPG`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/BarbieDoll/2.JPG`;
const image3 = `${process.env.PUBLIC_URL}/Images/Articles/BarbieDoll/3.JPG`;
const image4 = `${process.env.PUBLIC_URL}/Images/Articles/BarbieDoll/4.JPG`;
const image5 = `${process.env.PUBLIC_URL}/Images/Articles/BarbieDoll/5.JPG`;
const image6 = `${process.env.PUBLIC_URL}/Images/Articles/BarbieDoll/6.jpeg`;
const image7 = `${process.env.PUBLIC_URL}/Images/Articles/BarbieDoll/7.JPG`;
const image8 = `${process.env.PUBLIC_URL}/Images/Articles/BarbieDoll/8.jpeg`;

const pinterest = `${process.env.PUBLIC_URL}/Images/Articles/pinterest.png`;


const next = `${process.env.PUBLIC_URL}/Images/Articles/BarbieMovie/SQUAREMARGOT.jpeg`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
  <div
    style={{
      padding: '10px 20px', // Existing padding
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

const BarbieDoll = () => {


  const websiteId = '10910';
  const blogRef = useRef(null);



  const heading2Style = {
    textAlign: 'center',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    fontFamily: 'Playfair Display, serif',
    color: '#000000',
    margin: '30px auto',
    maxWidth: '100%', // Allow space for margins
  };
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
  
  fontFamily: "'Open Sans', serif",
  fontWeight: '100',
  padding: '10px',
  margin: '10px auto',
  
  
    lineHeight: '1.6',
  
  };
  
  const linkStyle = {
  textDecoration: 'none', // Removes underline from links
  fontFamily: "'Open Sans', serif",
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
  <title>Barbie Beauty Makeup Looks: Stunning Ways to Channel Your Inner Doll - Jackie Wyers</title>
  <link rel="canonical" href="https://jackiewyers.beauty/barbie-makeup-looks" />

  <meta 
    name="description" 
    content="Explore iconic Barbie makeup looks with Jackie Wyers. Step-by-step tutorials inspired by Peaches ‘N Cream, Roller Skate, Malibu Barbie, and more for a vintage and modern twist." 
  />
  <meta 
    name="keywords" 
    content="Barbie makeup, Peaches ‘N Cream Barbie, Roller Skate Barbie, Malibu Barbie, Barbiecore, vintage makeup, Barbie tutorials, Jackie Wyers, 90s Barbie, pastel eyeshadow, pink lips, Barbie beauty, Barbie Halloween costumes, retro Barbie, doll transformation, Barbie aesthetic, weird Barbie, iconic doll looks, Barbie makeup tips, Barbie-themed party, vintage glamour, classic Barbie style, beauty influencer tutorials, 60s hairstyles, Margot Robbie Barbie, retro beauty, Barbie movie looks, 80s makeup, Sabrina Carpenter inspired, faux bangs, textured bun, Barbie fashion, doll-inspired makeup, beauty influencer, Barbiecore trend, Barbie-inspired makeup, bold accessories, nostalgic makeup, glamorous makeup, Barbie IRL, updo hairstyles, pastel florals, Barbie style, iconic Barbie, beauty tutorials, beauty and style, retro chic, Barbie-inspired fashion" 
  />

  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="Barbie Beauty Makeup Looks: Stunning Ways to Channel Your Inner Doll - Jackie Wyers" />
  <meta 
    property="og:description" 
    content="Discover stunning ways to channel your inner Barbie with makeup tutorials by Jackie Wyers, inspired by iconic dolls like Peaches ‘N Cream, Roller Skate, and Malibu Barbie." 
  />
  <meta 
    property="og:image" 
    content="https://jackiewyers.beauty/Images/Articles/BarbieDoll/BarbieThumbnail.jpg" 
  />
  <meta property="og:url" content="https://jackiewyers.beauty/barbie-makeup-looks" />
  <meta property="og:type" content="article" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:title" content="Barbie Beauty Makeup Looks: Stunning Ways to Channel Your Inner Doll - Jackie Wyers" />
  <meta 
    name="twitter:description" 
    content="Step into Barbie's world with Jackie Wyers' makeup tutorials inspired by iconic dolls like Peaches ‘N Cream, Roller Skate, and Malibu Barbie." 
  />
  <meta 
    name="twitter:image" 
    content="https://jackiewyers.beauty/Images/Articles/BarbieDoll/BarbieThumbnail.jpg" 
  />
  <meta name="twitter:card" content="summary_large_image" />


 

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Barbie Beauty Makeup Looks: Stunning Ways to Channel Your Inner Doll - Jackie Wyers",
        "description": "Explore iconic Barbie makeup looks with Jackie Wyers. Step-by-step tutorials inspired by Peaches ‘N Cream, Roller Skate, Malibu Barbie, and more for a vintage and modern twist.",
        "image": "https://jackiewyers.beauty/Images/Articles/BarbieDoll/BarbieThumbnail.jpg",
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
        "datePublished": "2024-09-23",
        "dateModified": "2024-09-23",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://jackiewyers.beauty/barbie-makeup-looks"
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
  mainTitle="Barbie Beauty Makeup Looks:
Stunning Ways to Channel Your Inner
Doll🎀"
  subTitle="Barbie Makeup Tutorial & Iconic Doll Inspiration"
  author="Jackie Wyers"
  publishDate="Sept 23rd, 2024"
/>
  
<SocialShare 
  url="https://jackiewyers.beauty/barbie-doll" 
  title="Barbie Beauty Makeup Looks: Stunning Ways to Channel Your Inner Doll - Jackie Wyers" 
  imageUrl="https://jackiewyers.beauty/Images/Articles/BarbieDoll/BarbieThumbnail.jpg" 
/>

<div style={{ position: 'relative', display: 'inline-block' }}>
<img 
    src={image1} 
    alt="Jackie Wyers as Peaches ’N Cream Barbie" 
    style={imageStyle} 
    data-pin-nopin="false" 
    data-pin-url="https://jackiewyers.beauty/barbie-doll"
  />
  <img 
    src={pinterest}
    alt="Pin this on Pinterest" 
 style={{
  position: 'absolute',
  top: '20px',
  right: '20px',
  width: '50px',
  height: '50px',
  cursor: 'pointer',
  opacity: 0.9,
  transition: 'opacity 0.3s',
  zIndex: 1000, // Add this line
}}
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://jackiewyers.beauty/barbie-doll&media=https://jackiewyers.beauty/Images/Articles/BarbieDoll/1.JPG&description=Jackie Wyers as Peaches ’N Cream Barbie')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>

<div style = {{textAlign: 'center', margin: '10px auto' }}>
<SubscribeButton />
</div>

<p style={{ margin: '20px auto', textAlign: 'center', fontSize: '1.1rem', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
</p>


<p style={paragraphStyle}>
<DropCap1 text="Hello and welcome back to another Barbie-inspired makeup article! Barbie isn’t just a doll—she’s a global icon of style, glamour, and endless creativity. From her glamorous debut in 1959 to her latest movie-inspired renditions, Barbie continues to inspire fans with her evolving fashion and beauty trends. "/>
</p>
<p style = {paragraphStyle}>

In a <a href = "/barbie-roundup" target = "_blank" rel = "noreferrer"> previous post </a>, I covered the best Barbie product collaborations of 2024, but today, we’re diving into the most iconic Barbie makeup looks ever—at least, in my opinion! Each style is inspired by different eras and dolls that have shaped Barbie’s legendary legacy, giving you the perfect opportunity to transform into your favorite version of this fashion queen. 


</p>





<p style={paragraphStyle}>
  Whether you’re channeling the vibrant 90s vibes of Roller Skate Barbie, embracing the sweet nostalgia of Cherry Pie Picnic Barbie, or exuding the timeless elegance of the Original Barbie, these stunning makeup looks will help you bring your inner doll to life. Go all out for a real-life doll transformation or keep it subtle for a Barbie IRL vibe—perfect for Halloween, themed parties, or any day you feel like living your best Barbie life. These looks blend vintage inspiration with a modern twist, inviting you to step into Barbie’s world of fun and fashion. So, grab your makeup brushes and get ready to doll up—because there’s a Barbie look for everyone!
</p>


<h2 style={headingStyle}>
  🍑 🎀 Peaches ‘N Cream Barbie Aesthetic 🍑 🎀
</h2>

<p style={paragraphStyle}>
  Recreate the dreamy style of Peaches ‘N Cream Barbie, one of the most iconic dolls of the 80s, known for her soft pastel palette and glamorous, romantic vibe. Peaches ‘N Cream Barbie became an instant classic with her stunning chiffon gown, delicate accessories, and unforgettable makeup, making her one of the most beloved and sought-after Barbies of all time. For my rendition of this look, I drew inspiration from the doll’s pastel purple eyeshadow, coral-orange cheeks, and lips, and for the hair, I pulled inspiration from the vintage Barbie illustration by the late Mary Christine Tuveson (Chris Tuveson) as seen on the new Stanley x Barbie Just Peachy packaging. Together, these influences create a style that echoes the 60s, reminiscent of Sharon Tate’s beautiful bridal look. See a breakdown of this look here—one of my favourites!
</p>


<div style={{ position: 'relative', display: 'inline-block' }}>
<img 
    src={image2} 
    alt="Jackie Wyers as Peaches ’N Cream Barbie Makeup" 
    style={imageStyle} 
    data-pin-nopin="false" 
    data-pin-url="https://jackiewyers.beauty/barbie-doll"
  />
  <img 
    src={pinterest}
    alt="Pin this on Pinterest" 
 style={{
  position: 'absolute',
  top: '20px',
  right: '20px',
  width: '50px',
  height: '50px',
  cursor: 'pointer',
  opacity: 0.9,
  transition: 'opacity 0.3s',
  zIndex: 1000, // Add this line
}}
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://jackiewyers.beauty/barbie-doll&media=https://jackiewyers.beauty/Images/Articles/BarbieDoll/2.JPG&description=Jackie Wyers as Peaches ’N Cream Barbie Makeup')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>

<p style={paragraphStyle}>
  This Barbie style features soft curls, delicate pink bows, and pastel florals that are visually stunning and evoke a sense of whimsy. If you’ve ever wanted to try pastel purple eyeshadow, now is the perfect time! For the full effect, wear the iconic new Peaches ‘N Cream dress from Revolve’s Barbie Fashion Collection to complete your Barbie Halloween costume, or rock the makeup on its own for a creative, standout look that celebrates the essence of this unforgettable doll.
</p>

<h2 style={heading2Style}>
  Key Features:
</h2>


<p style={captionStyle}>
  Soft curls, pastel purple eyeshadow, peachy cheeks and lips, delicate pink bows, and floral accents.
</p>


<h2 style={heading2Style}>
  Shop The Barbie, Shop The Style:
</h2>


<ResponsiveIframe
  src="https://shopmy.us/collections/public/831968?noHeader=true"
  title="Shop The Peaches ‘N Cream Barbie Makeup Collection"
/>




<h2 style={headingStyle}>
  🌈 🛼 Roller Skate Barbie Makeup | Barbie Halloween Costume 🛼 🌈
</h2>
<p style={paragraphStyle}>
  Roll into the vibrant world of Roller Skate Barbie with a look that captures the fun, carefree spirit of the 90s! This makeup and style are inspired by the vintage 1994 Mattel Hot Skatin' Barbie Doll and Margot Robbie’s iconic portrayal of Roller Skate Barbie in the Barbie Movie. Known for her bold neon accents, playful visor, and voluminous half-up, half-down hair, this Barbie embodies an active and stylish lifestyle. With a mix of 90s nostalgia from the original doll and Margot’s fresh, understated makeup, this look stands out as a bold, fun, and eye-catching way to rock the Barbiecore trend. The pink lips and vibrant attire make this style the perfect choice for a Barbie-themed Halloween costume, but the makeup alone is also totally wearable for any day you want to channel your inner doll!
</p>
<div style={{ position: 'relative', display: 'inline-block' }}>
<img 
    src={image3} 
    alt="Jackie Wyers as Roller Skate Barbie" 
    style={imageStyle} 
    data-pin-nopin="false" 
    data-pin-url="https://jackiewyers.beauty/barbie-doll"
  />
  <img 
    src={pinterest}
    alt="Pin this on Pinterest" 
 style={{
  position: 'absolute',
  top: '20px',
  right: '20px',
  width: '50px',
  height: '50px',
  cursor: 'pointer',
  opacity: 0.9,
  transition: 'opacity 0.3s',
  zIndex: 1000, // Add this line
}}
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://jackiewyers.beauty/barbie-doll&media=https://jackiewyers.beauty/Images/Articles/BarbieDoll/3.JPG&description=Jackie Wyers as Roller Skate Barbie')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>


<h2 style={heading2Style}>
  Watch My Take on Roller Skate Barbie’s Makeup Here:
</h2>

<ResponsiveYoutube src="https://www.youtube.com/embed/JfaND9n9ZCU?si=VUUDEedcCs2drKif" title="Margot Robbie BARBIE MOVIE Makeup🛼💖👱🏻‍♀️ + '90s Roller Skate Barbie Costume!" />


<p style={captionStyle}>
  Full Article and Makeup Breakdown can be found <a href="https://jackiewyers.beauty/margotbarbie" style={linkStyle}>here</a>.
</p>

<h2 style={heading2Style}>
  Key Features:
</h2>

<p style={captionStyle}>
  Pink lips, defined eyes and brows, voluminous hair with a visor, and bright neon accessories.
</p>


<h2 style={heading2Style}>
  Shop The Barbie, Shop The Style:
</h2>
<ResponsiveIframe
  src="https://shopmy.us/collections/public/832076?noHeader=true"
  title="Roller Skate Barbie Makeup and Style Collection"
/>


<h2 style={headingStyle}>
  🥧 🍒 Cherry Pie Picnic Barbie Aesthetic 🥧 🍒
</h2>
<p style={paragraphStyle}>
  Embrace the sweetness of Cherry Pie Picnic Barbie, a look inspired by the nostalgic and playful aesthetics of one of my favorite lines of Barbie, the Silkstone dolls. The Silkstone collection, launched in 2000, was designed specifically for adult collectors and is known for its elegant vintage-inspired fashions, sophisticated styling, and high-quality, porcelain-like material that gives the dolls a luxurious feel. Popular Silkstone Barbies include "Lingerie Barbie," "Fashion Model Collection," and "Classic Camel Coat Barbie," all of which capture the essence of mid-century glamour and timeless style. These dolls pay homage to Barbie’s fashion heritage, featuring beautifully tailored outfits, intricate accessories, and impeccable attention to detail.
</p>

<div style={{ position: 'relative', display: 'inline-block' }}>
<img 
    src={image4} 
    alt="Jackie Wyers as Cherry Pie Picnic Barbie" 
    style={imageStyle} 
    data-pin-nopin="false" 
    data-pin-url="https://jackiewyers.beauty/barbie-doll"
  />
  <img 
    src={pinterest}
    alt="Pin this on Pinterest" 
 style={{
  position: 'absolute',
  top: '20px',
  right: '20px',
  width: '50px',
  height: '50px',
  cursor: 'pointer',
  opacity: 0.9,
  transition: 'opacity 0.3s',
  zIndex: 1000, // Add this line
}}
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://jackiewyers.beauty/barbie-doll&media=https://jackiewyers.beauty/Images/Articles/BarbieDoll/4.JPG&description=Jackie Wyers as Cherry Pie Picnic Barbie')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>

<p style={paragraphStyle}>
  This Silkstone-inspired look features adorable pigtails with red bows and a cherry-print top, capturing a 50s picnic vibe that’s playful and charming. While this particular Cherry Pie Picnic Barbie style didn’t grace the pink carpet on the Barbie Movie press tour, Margot Robbie and designer Andrew Mukamal's coffee table book featured a modern take on the doll. As soon as I saw the picnic-themed rendition in the book, I knew I wanted to recreate it with my own twist! My take on the makeup look is a bit bolder, with red lips, perfect for those who adore vintage-inspired fashion and want to add a touch of retro charm to their Barbie-themed costume.
</p>

<h2 style={heading2Style}>
  Watch The Barbie Press Tour Book Unboxing:
</h2>

<div style = {{textAlign: 'center',margin: "0 auto"}}>
<iframe
      style={{ boxShadow: '12px', borderRadius: '15px', width: '301px', height: '535px' }}
      src="https://www.youtube.com/embed/Bo50Q2E5ojg?si=nM2P3jQayuLgauMC"
      title="Margot Robbie BARBIE MOVIE Makeup🛼💖👱🏻‍♀️ + '90s Roller Skate Barbie Costume! "
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
</div>


<h2 style={heading2Style}>
  Key Features:
</h2>
<p style={captionStyle}>

  Cherry-print dress or top, red lips, playful pigtails, and bright red bows.
</p>
<h2 style={heading2Style}>
  Shop The Barbie, Shop The Style:
</h2>

<ResponsiveIframe
  src="https://shopmy.us/collections/public/832103?noHeader=true" 
  title="Cherry Pie Picnic Barbie Inspired Fashion and Makeup Collection"
/>

<h2 style={headingStyle}>
  🎀 🤎 Brunette Barbicore Aesthetic 🎀 🤎
</h2>
<p style={paragraphStyle}>
  While the most famous Barbie is a blonde, the Barbie brand has come a long way, so don’t think you need to wear a wig like I did to fit the aesthetic! Explore a fresh twist on Barbiecore with Brunette Barbicore looks, or whatever your hair color may be, inspired by Barbie's evolving styles as seen in the recent Barbie movie. The Barbie movie aesthetic also pulls from ‘60s fashion, and the beachy styles were so much fun on the big screen. Try a chic polka-dot headband or a pink gingham print to become your own Barbie. Lucky for Barbie movie fans and enthusiasts, there are so many new Barbies with outfits pulled directly from the film that are worth collecting!
</p>
<div style={{ position: 'relative', display: 'inline-block' }}>
<img 
    src={image5} 
    alt="Jackie Wyers styled as Brunette Barbie from The Barbie Movie" 
    style={imageStyle} 
    data-pin-nopin="false" 
    data-pin-url="https://jackiewyers.beauty/barbie-doll"
  />
  <img 
    src={pinterest}
    alt="Pin this on Pinterest" 
 style={{
  position: 'absolute',
  top: '20px',
  right: '20px',
  width: '50px',
  height: '50px',
  cursor: 'pointer',
  opacity: 0.9,
  transition: 'opacity 0.3s',
  zIndex: 1000, // Add this line
}}
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://jackiewyers.beauty/barbie-doll&media=https://jackiewyers.beauty/Images/Articles/BarbieDoll/5.JPG&description=Jackie Wyers styled as Brunette Barbie from The Barbie Movie')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>
<h2 style={heading2Style}>
  Watch My Take on The Barbie Movie Hairstyles Here:
</h2>

<ResponsiveYoutube src="https://www.youtube.com/embed/O5wYo36eg3w?si=sqeowWfspieO_8-P" title="Margot Robbie BARBIE MOVIE Makeup🛼💖👱🏻‍♀️ + '90s Roller Skate Barbie Costume!" />


<p style={heading2Style}>

  Key Features:
</p>
<p style={captionStyle}>
  Your natural hair with soft curls, headbands, and bold accessories.
</p>
<h2 style={heading2Style}>
  Shop The Barbie, Shop The Style:
</h2>


<ResponsiveIframe
  src="https://shopmy.us/collections/public/832128?noHeader=true"
  title="Brunette Barbicore Aesthetic Hair and Makeup Collection"
/>


<h2 style={headingStyle}>
  🧴 🏄 Malibu Barbie Aesthetic 🧴 🏄
</h2>
<p style={paragraphStyle}>
  Speaking of a beach Barbie aesthetic, we can’t forget about Malibu Barbie! First released in 1971, Malibu Barbie became an instant icon, capturing the carefree, sun-kissed California lifestyle like no other. With her golden tan, long blonde hair, and vibrant turquoise swimsuit, she shifted Barbie’s image from a glamorous fashion model to a laid-back beach babe, perfectly reflecting the 70s beach culture. Known for her glowing skin, soft pink lips, and teal eyeshadow, Malibu Barbie set the tone for decades of Barbie’s sun-soaked adventures.
</p>
<div style={{ position: 'relative', display: 'inline-block' }}>
<img 
    src={image6} 
    alt="Jackie Wyers trying Barbie AI Movie Poster as Malibu Barbie" 
    style={imageStyle} 
    data-pin-nopin="false" 
    data-pin-url="https://jackiewyers.beauty/barbie-doll"
  />
  <img 
    src={pinterest}
    alt="Pin this on Pinterest" 
 style={{
  position: 'absolute',
  top: '20px',
  right: '20px',
  width: '50px',
  height: '50px',
  cursor: 'pointer',
  opacity: 0.9,
  transition: 'opacity 0.3s',
  zIndex: 1000, // Add this line
}}
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://jackiewyers.beauty/barbie-doll&media=https://jackiewyers.beauty/Images/Articles/BarbieDoll/6.jpeg&description=Jackie Wyers trying Barbie AI Movie Poster as Malibu Barbie')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>


<p style={paragraphStyle}>
  I even tried this look with my own sandy brunette twist using the ColourPop x Malibu Barbie collection—though the video is hidden on YouTube because my tan developed a bit too dark but I’ve embedded it here anyways! Malibu Barbie is a timeless favorite for anyone who loves a breezy, beachy, California cool look.
</p>


<h2 style={heading2Style}>
  Watch My Take on Malibu Barbie Makeup Here:
</h2>
<ResponsiveYoutube src="https://www.youtube.com/embed/uFfp9I1hH98?si=4ROKQVV4ODUkl58A" title="MALIBU BARBIE colourpop tutorial & review🌴 jackie wyers🌞" />

<h2 style={heading2Style}>
  Key Features:
</h2>
<p style={captionStyle}>

  A sun-kissed look, vibrant turquoise swimsuit, soft pink lips, teal eyeshadow, and a carefree beachy attitude.
</p>
<h2 style={heading2Style}>
  Shop The Barbie, Shop The Style:
</h2>
<ResponsiveIframe
  src="https://shopmy.us/collections/public/832187?noHeader=true"
  title="Malibu Barbie Beachy Makeup and Accessories Collection"
/>


<h2 style={headingStyle}>
  🖤 💋 The Original Barbie Aesthetic 💋 🖤
</h2>

<p style={paragraphStyle}>
  We can’t have a Barbie beauty list without talking about the iconic first Barbie introduced in 1959, who started it all! The first Barbie, known as the "Teenage Fashion Model," was created by Ruth Handler and made her debut at the American International Toy Fair in New York City. Dressed in a black and white striped swimsuit, bold red lips, and stylish ponytail, Barbie was an instant hit and revolutionized the toy industry, setting the standard for style and glamour. This look celebrates classic elegance and vintage glamour with bold red lips, cat-eye makeup with a pop of blue and retro bang curls. Perfect for anyone looking to recreate the ultimate vintage Barbie look, it’s a timeless choice for Halloween or any themed event. While I wore a tiny swimsuit for my version, you can always add pants to make it more wearable—please, add pants, LOL.
</p>
<div style={{ position: 'relative', display: 'inline-block' }}>
<img 
    src={image7} 
    alt="Jackie Wyers as original 50s Barbie" 
    style={imageStyle} 
    data-pin-nopin="false" 
    data-pin-url="https://jackiewyers.beauty/barbie-doll"
  />
  <img 
    src={pinterest}
    alt="Pin this on Pinterest" 
 style={{
  position: 'absolute',
  top: '20px',
  right: '20px',
  width: '50px',
  height: '50px',
  cursor: 'pointer',
  opacity: 0.9,
  transition: 'opacity 0.3s',
  zIndex: 1000, // Add this line
}}
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://jackiewyers.beauty/barbie-doll&media=https://jackiewyers.beauty/Images/Articles/BarbieDoll/7.JPG&description=Jackie Wyers as original 50s Barbie')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>
<div style={{ position: 'relative', display: 'inline-block' }}>

<img 
    src={image8} 
    alt="Jackie Wyers as original 50s Barbie Black and White Chevron Bathing suit" 
    style={imageStyle} 
    data-pin-nopin="false" 
    data-pin-url="https://jackiewyers.beauty/barbie-doll"
  />
  <img 
    src={pinterest}
    alt="Pin this on Pinterest" 
 style={{
  position: 'absolute',
  top: '20px',
  right: '20px',
  width: '50px',
  height: '50px',
  cursor: 'pointer',
  opacity: 0.9,
  transition: 'opacity 0.3s',
  zIndex: 1000, // Add this line
}}
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://jackiewyers.beauty/barbie-doll&media=https://jackiewyers.beauty/Images/Articles/BarbieDoll/8.jpeg&description=Jackie Wyers as original 50s Barbie Black and White Chevron Bathing suit')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>
<h2 style={heading2Style}>
  Watch My Ad For The Barbie Movie with Warner Brothers Here!
</h2>

<ResponsiveYoutube src="https://www.youtube.com/embed/pTCLYNMVG7M?si=bp8DJUYsoBlhPf8K" title="Warner Brothers Barbie Movie Watch Party" />


<h2 style={heading2Style}>
  Key Features:

</h2><p style={captionStyle}>

  Bold red lips, winged eyeliner, retro curls, and statement earrings.
</p>
<h2 style={heading2Style}>
  Shop The Barbie, Shop The Style:
</h2>
<ResponsiveIframe
  src="https://shopmy.us/collections/public/832227?noHeader=true"
  title="The Original Barbie Makeup and Retro Fashion Collection"
/>




<p style={paragraphStyle}>
  Each look captures the essence of iconic Barbie styles and provides a unique and stylish option for Halloween, themed events, or even everyday wear if you’re ready to serve Barbiecore! Whether you’re drawn to vintage vibes, modern twists, or classic Barbie glamour, these makeup looks help you channel your inner doll in a fun and fashionable way. While I recreated looks inspired by the white and blonde Barbie, Barbie’s world has beautifully evolved to celebrate diversity in skin tones, body types, and styles. I hope these makeup looks inspire you to rock these styles in a way that is uniquely you! Which is your favorite makeup look? I hope these photos sparked some inspiration, and if there’s a favorite Barbie I didn’t cover, comment below—I’d love to hear from you!
</p>






      
     
      <NextArticle
      link="/girly-pop-halloween"
      imgSrc={next}
      altText="Girly Pop Culture Halloween Costume Ideas 2024🎀"
      linkText="MORE POP CULTURE →"
      containerStyle={{ margin: '1rem 0' }} // customize as needed
      linkStyle={{ color: '#000000', fontSize: '1.05rem' }} // customize as needed
      imgStyle={{ borderRadius: '10px' }} // customize as needed
    />

<div>
        <img src={signature} alt="Jackie Wyers Signature XoXo" style={{ width: '100%' }} />
      </div>



     
     <Comments website-id={websiteId} page-id={"barbie-doll-bro"} />
    
    
  
    </div>
    
  );

  return (
    <div ref={blogRef}>
      <Card
        title="Barbie Beauty Makeup Looks: Stunning Ways to Channel Your Inner Doll🎀"
        description="Barbie Makeup Tutorial & Iconic Doll Inspiration"
        blogContent={blogContent}
      />

          

    </div>
  );
};

export default BarbieDoll;
