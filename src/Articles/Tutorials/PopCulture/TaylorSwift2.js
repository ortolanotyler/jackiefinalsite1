import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import SocialShare from '../../../Home/SocialShare';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import ArticleTitle from '../../../Components/ArticleTitle';
import NextArticle from '../../../Components/NextArticleComponent';
import DropCap1 from '../../Travel/DropCap1';
import DividerWithText from '../../../Home/DividerWithText';
import AdSenseAd from '../../../Home/Adsense';
import SmallAdSenseAd from '../../../Home/AdsenseSmall';


const pinterest = `${process.env.PUBLIC_URL}/Images/Articles/pinterest.png`;
const wicked = `${process.env.PUBLIC_URL}/Images/Articles/Wicked3/GlindaJackieWyers.jpg`;

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

const TaylorErasTour = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);

  const headingStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: '100',
    fontFamily: "'Playfair Display', sans-serif",
    color: '#000000',
    maxWidth: '95%',
    margin: '10px auto',
  };

  const paragraphStyle = {
    fontSize: '20px',
    color: '#000000',
    fontFamily: "EB Garamond, sans-serif",
    fontWeight: '400',
    padding: '1rem',
    margin: '10px auto',
    lineHeight: '1.6',
  };

  const linkStyle = {
    textDecoration: 'none',
    fontFamily: "'Georgia', serif",
    fontWeight: '100',
    color: '#745B4F',
  };

  const imageStyle = {
    display: 'block',
    margin: '1rem auto',
    borderRadius: '0px',
    height: 'auto',
  };

  const blogContent = (
    <div className="container">
     <Helmet>
  <title>Celebrating Taylor Swift's Eras Tour with Makeup</title>
  <link rel="canonical" href="https://www.jackiewyers.beauty/articles/taylor-swift-eras-tour" />

  <meta 
    name="description" 
    content="Explore iconic makeup looks inspired by Taylor Swift's Eras Tour, featuring Lover, Folklore, Evermore, and Midnights albums. Recreate her signature styles with our detailed guides." 
  />
  <meta 
    name="keywords" 
    content="Taylor Swift Eras Tour makeup, Lover album makeup looks, Folklore beauty inspiration, Evermore aesthetic, Midnights glam, Taylor Swift style, Jackie Wyers, Eras Tour makeup guide, iconic album makeup, pastel and glitter makeup, earthy tones, sparkling glam, beauty tutorials 2024, Taylor Swift inspired hairstyles, Taylor Swift concert fashion, recreate Taylor Swift looks" 
  />

  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="Celebrating Taylor Swift's Eras Tour with Makeup 🎤✨" />
  <meta 
    property="og:description" 
    content="Explore iconic makeup looks inspired by Taylor Swift's Eras Tour, featuring Lover, Folklore, Evermore, and Midnights albums. Recreate her signature styles with our detailed guides." 
  />
  <meta 
    property="og:image" 
    content="https://res.cloudinary.com/dvbubqhpp/image/upload/v1733671131/TaylorEvermoreDressonJackie_ajnlwb.jpg" 
  />
  <meta property="og:url" content="https://www.jackiewyers.beauty/articles/taylor-swift-eras-tour" />
  <meta property="og:type" content="article" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:title" content="Celebrating Taylor Swift's Eras Tour with Makeup 🎤✨" />
  <meta 
    name="twitter:description" 
    content="Explore iconic makeup looks inspired by Taylor Swift's Eras Tour, featuring Lover, Folklore, Evermore, and Midnights albums. Recreate her signature styles with our detailed guides." 
  />
  <meta 
    name="twitter:image" 
    content="https://res.cloudinary.com/dvbubqhpp/image/upload/v1733671131/TaylorEvermoreDressonJackie_ajnlwb.jpg" 
  />
  <meta name="twitter:card" content="summary_large_image" />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Celebrating Taylor Swift's Eras Tour with Makeup 🎤✨",
        "description": "Explore iconic makeup looks inspired by Taylor Swift's Eras Tour, featuring Lover, Folklore, Evermore, and Midnights albums. Recreate her signature styles with our detailed guides.",
        "image": "https://res.cloudinary.com/dvbubqhpp/image/upload/v1733671131/TaylorEvermoreDressonJackie_ajnlwb.jpg",
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
        "datePublished": "2024-12-08",
        "dateModified": "2024-12-08",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.jackiewyers.beauty/articles/taylor-swift-eras-tour"
        }
      }
    `}
  </script>

  {/* Google Analytics */}
  <script>
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-RT6GR7JXYG', { page_path: window.location.pathname });
    `}
  </script>
</Helmet>

      <ArticleTitle
        mainTitle="Celebrating Taylor Swift's Eras Tour with Makeup"
        subTitle="Iconic Taylor Swift Makeup & Hairstyles"
        author="Jackie Wyers"
      />

      <SocialShare
        url="https://www.jackiewyers.beauty/articles/taylor-swift-eras-tour"
        title="Celebrating Taylor Swift's Eras Tour with Makeup"
        imageUrl="https://res.cloudinary.com/dvbubqhpp/image/upload/v1733671131/TaylorEvermoreDressonJackie_ajnlwb.jpg"
      />

<ResponsiveYoutube src="https://www.youtube.com/embed/A688EWpOMtk?si=jPf7bFzU-2UyxS_U" title="TAYLOR SWIFT THE ERAS TOUR with my Lover👩🏽‍❤️‍💋‍👨🏽💖🌈 Tampa FL!" />

      <div style={{ textAlign: 'center', margin: '1rem auto' }}>
        <SubscribeButton />
      </div>

      <DropCap1
          text="I t’s the end of the Eras era, and what a phenomenal journey it’s been! Taylor Swift should be so proud of a show that spanned over 3 hours, celebrating 10 iconic eras with 44 songs, surprise guests, and unforgettable performances. From her sparkling bodysuits to breathtaking set designs, it truly was a once-in-a-lifetime experience. If you were lucky enough to attend, I hope you had the best night ever!
          "
        />

     <DividerWithText text = "Ad"/>
        <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text = "Ad"/>

<div
  style={{
    textAlign: 'center',
  }}
>
  <iframe
    style={{
      boxShadow: '12px 12px 24px rgba(0, 0, 0, 0.2)',
      borderRadius: '15px',
      width: '301px',
      height: '535px',
    }}
    src="https://www.youtube.com/embed/Z9zsHFBvyh4"
    title="Taylor Swift Eras Tour Moment"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

<p style={paragraphStyle}>

If you’re not ready to let the Eras Tour go just yet, I’ve rounded up beauty inspiration from some of my favorite Taylor albums. While I couldn’t cover every era, let me know which looks you’d like to see recreated next!
</p>



      <h2 style={headingStyle}>💖 Lover: Pastel Perfection and Glittering Romance</h2>

<p style={paragraphStyle}>
  One of my most magical memories from the show is the Florida sunset, with hues of pink and orange mirroring the billowing, fan-like flags her dancers carried during the Lover set. When they lowered the flags to reveal a sparkling Taylor center stage, the crowd roared as “Miss Americana and the Heartbreak Prince & Cruel Summer” began—the perfect opener! I absolutely adore her now-iconic sparkling bodysuit.
</p>



      <div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src='https://res.cloudinary.com/dvbubqhpp/image/upload/v1733670492/TaylorLoversBodysuit_1_zpimsv.jpg'
    alt="Taylor Swift Eras Tour " 
    style={imageStyle} 
    data-pin-nopin="false" 
    data-pin-url="https://www.jackiewyers.beauty/articles/taylor-swift-eras-tour"
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
      transition: 'opacity 0.3s'
    }}
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/taylor-swift-eras-tour&media=https://res.cloudinary.com/dvbubqhpp/image/upload/v1733670492/TaylorLoversBodysuit_1_zpimsv.jpg&description=Taylor Swift Eras Tour Finale')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>

     <DividerWithText text = "Ad"/>
        <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text = "Ad"/>




<h2 style={headingStyle}>🎨 The Lover Era: Pastels and Playful Romance</h2>

<p style={paragraphStyle}>
  The Lover era is filled with colorful pastel visuals, and if you want to channel that style, check out my <strong>ME!</strong> music video makeup tutorial:
</p>


<ResponsiveYoutube src="https://www.youtube.com/embed/Uai6tKJArnc?si=XnF1RFD1e25Tw7r2" title="TAYLOR SWIFT THE ERAS TOUR with my Lover👩🏽‍❤️‍💋‍👨🏽💖🌈 Tampa FL!" />


<br/>

<ResponsiveYoutube src="https://www.youtube.com/embed/FuXNumBwDOM?si=1h9F3QUMDcWNBeD6" title="TAYLOR SWIFT THE ERAS TOUR with my Lover👩🏽‍❤️‍💋‍👨🏽💖🌈 Tampa FL!" />


<p style={paragraphStyle}>
  For my concert look, I embraced Lover in a casual, playful way. My husband Tyler (my “lover,” hehe) and I wore matching pink glitter hearts over our eyes, inspired by the album cover art. It was such a fun way to celebrate Taylor’s romantic aesthetic!
</p>






<div
  style={{
    textAlign: 'center',
  }}
>
  <iframe
    style={{
      boxShadow: '12px 12px 24px rgba(0, 0, 0, 0.2)',
      borderRadius: '15px',
      width: '301px',
      height: '535px',
    }}
    src="https://www.youtube.com/embed/AzlPkwavYe0"
    title="Taylor Swift Lover-Inspired Look"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src='https://res.cloudinary.com/dvbubqhpp/image/upload/v1733670923/Jackie_s_Era_Tour_Look_yashxt.jpg'
    alt="Taylor Swift Eras Tour" 
    style={imageStyle} 
    data-pin-nopin="false" 
    data-pin-url="https://www.jackiewyers.beauty/articles/taylor-swift-eras-tour"
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
      transition: 'opacity 0.3s'
    }}
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/taylor-swift-eras-tour&media=https://res.cloudinary.com/dvbubqhpp/image/upload/v1733670923/Jackie_s_Era_Tour_Look_yashxt.jpg&description=Taylor Swift Eras Tour Finale')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>


<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src='https://res.cloudinary.com/dvbubqhpp/image/upload/v1733671047/Jackie_Tyler_Selfie_1_h7f3be.jpg'
    alt="Taylor Swift Eras Tour " 
    style={imageStyle} 
    data-pin-nopin="false" 
    data-pin-url="https://www.jackiewyers.beauty/articles/taylor-swift-eras-tour"
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
      transition: 'opacity 0.3s'
    }}
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/taylor-swift-eras-tour&media=https://res.cloudinary.com/dvbubqhpp/image/upload/v1733670492/TaylorLoversBodysuit_1_zpimsv.jpg&description=Taylor Swift Eras Tour Finale')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>


     <DividerWithText text = "Ad"/>
        <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text = "Ad"/>


<h2 style={headingStyle}>💖 My Favorite Song from Lover</h2>

<p style={paragraphStyle}>
  <strong>Cruel Summer, of course!</strong> Tell me your favorite Taylor songs in the comments, or use a gif to show what era you love most!
</p>

<h2 style={headingStyle}>🍂 Folklore & Evermore: Cozy Earthy Elegance</h2>

<p style={paragraphStyle}>
  The Folklore and Evermore sets are hands down my favorites. These albums brought so much comfort during the pandemic with their emotional storytelling and folk-pop sound. Plus, who can resist grabbing for the TS cozy cardigan every fall?
</p>


<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src='https://res.cloudinary.com/dvbubqhpp/image/upload/v1733671115/Taylor_Folklore_y66gbu.jpg'
    alt="Taylor Swift Eras Tour " 
    style={imageStyle} 
    data-pin-nopin="false" 
    data-pin-url="https://www.jackiewyers.beauty/articles/taylor-swift-eras-tour"
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
      transition: 'opacity 0.3s'
    }}
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/taylor-swift-eras-tour&media=https://res.cloudinary.com/dvbubqhpp/image/upload/v1733671115/Taylor_Folklore_y66gbu.jpg&description=Taylor Swift Eras Tour Finale')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>

<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src='https://res.cloudinary.com/dvbubqhpp/image/upload/v1733671122/TaylorFolklore2_qpuduj.jpg'
    alt="Taylor Swift Eras Tour " 
    style={imageStyle} 
    data-pin-nopin="false" 
    data-pin-url="https://www.jackiewyers.beauty/articles/taylor-swift-eras-tour"
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
      transition: 'opacity 0.3s'
    }}
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/taylor-swift-eras-tour&media=https://res.cloudinary.com/dvbubqhpp/image/upload/v1733671122/TaylorFolklore2_qpuduj.jpg&description=Taylor Swift Eras Tour Finale')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>



<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src='https://res.cloudinary.com/dvbubqhpp/image/upload/v1733671126/TaylorFOlklore3_avkre9.jpg'
    alt="Taylor Swift Eras Tour " 
    style={imageStyle} 
    data-pin-nopin="false" 
    data-pin-url="https://www.jackiewyers.beauty/articles/taylor-swift-eras-tour"
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
      transition: 'opacity 0.3s'
    }}
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/taylor-swift-eras-tour&media=https://res.cloudinary.com/dvbubqhpp/image/upload/v1733671126/TaylorFOlklore3_avkre9.jpg&description=Taylor Swift Eras Tour Finale')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>

   


<h2 style={headingStyle}>🌿 Recreate Taylor’s Folklore & Evermore Looks</h2>

<p style={paragraphStyle}>
  For this era, Taylor embraced soft curls, earthy tones, and timeless beauty. Here’s a quick guide to recreating her looks:
</p>

 

<div
  style={{
    textAlign: 'center',
  }}
>
  <iframe
    style={{
      boxShadow: '12px 12px 24px rgba(0, 0, 0, 0.2)',
      borderRadius: '15px',
      width: '301px',
      height: '535px',
    }}
    src="https://www.youtube.com/embed/VdWgliSfleM"
    title="YouTube Short"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>
<DividerWithText text = "Ad"/>
        <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text = "Ad"/>


<div style={{ textAlign: 'center', margin: '20px auto' }}>
  <iframe
    title="Folklore & Evermore Hairstyles & Outfits"
    src="https://www.youtube.com/embed/K-a8s8OLBSE"
    style={{ width: '100%', height: '340px', border: 'none' }}
    allowFullScreen
  ></iframe>
</div>

<div>
ß
</div>



<p style={paragraphStyle}>
  <strong>Favorite Folklore song:</strong> Tie between <em>Cardigan</em> and <em>Invisible String</em>.  
  <br />
  <strong>Favorite Evermore song:</strong> <em>Willow</em>!
</p>

<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src='https://res.cloudinary.com/dvbubqhpp/image/upload/v1733671131/TaylorEvermoreDressonJackie_ajnlwb.jpg'
    alt="Taylor Swift Eras Tour " 
    style={imageStyle} 
    data-pin-nopin="false" 
    data-pin-url="https://www.jackiewyers.beauty/articles/taylor-swift-eras-tour"
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
      transition: 'opacity 0.3s'
    }}
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/taylor-swift-eras-tour&media=https://res.cloudinary.com/dvbubqhpp/image/upload/v1733671131/TaylorEvermoreDressonJackie_ajnlwb.jpg&description=Taylor Swift Eras Tour Finale')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>

<DividerWithText text = "Ad"/>
        <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text = "Ad"/>

<br/>
<div
  style={{
    textAlign: 'center',
  }}
>
  <iframe
    style={{
      boxShadow: '12px 12px 24px rgba(0, 0, 0, 0.2)',
      borderRadius: '15px',
      width: '301px',
      height: '535px',
    }}
    src="https://www.youtube.com/embed/okU9zED6Hn4"
    title="YouTube Short"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

<h2 style={headingStyle}>🌟 Evermore-Inspired Finds</h2>

<p style={paragraphStyle}>
  One of my top Evermore-inspired finds is a stunning dress from Ivy City Co., similar to the one Taylor wore on stage. Its orange ruffles and gold sequin flowers make it such a unique style!   
 <br/>
   <a 
    href="https://go.shopmy.us/p-10988653" 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{ textDecoration: 'underline', color: '#745B4F' }}
  >
     See if it’s in stock here.
  </a>
</p>

     <DividerWithText text = "Ad"/>
        <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text = "Ad"/>

<h2 style={headingStyle}>✨ Midnights: Sparkling Glamour and a Show-Stopping Finale</h2>

<p style={paragraphStyle}>
  Taylor ends the Eras Tour with a bang, performing hits from <strong>Midnights</strong>. It amazes me how she keeps her energy up after such an epic show! Love her navy bodysuit and chair dance segment. 🔥
</p>

<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src='https://res.cloudinary.com/dvbubqhpp/image/upload/v1733671859/TaylorMidnights_bbjbmi.jpg'
    alt="Taylor Swift Eras Tour " 
    style={imageStyle} 
    data-pin-nopin="false" 
    data-pin-url="https://www.jackiewyers.beauty/articles/taylor-swift-eras-tour"
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
      transition: 'opacity 0.3s'
    }}
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/taylor-swift-eras-tour&media=https://res.cloudinary.com/dvbubqhpp/image/upload/v1733671859/TaylorMidnights_bbjbmi.jpg&description=Taylor Swift Eras Tour Finale')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>

<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src='https://res.cloudinary.com/dvbubqhpp/image/upload/v1733671142/TaylorBejewled_eu3iga.jpg'
    alt="Taylor Swift Eras Tour " 
    style={imageStyle} 
    data-pin-nopin="false" 
    data-pin-url="https://www.jackiewyers.beauty/articles/taylor-swift-eras-tour"
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
      transition: 'opacity 0.3s'
    }}
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/taylor-swift-eras-tour&media=https://res.cloudinary.com/dvbubqhpp/image/upload/v1733671142/TaylorBejewled_eu3iga.jpg&description=Taylor Swift Eras Tour Finale')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>


     <DividerWithText text = "Ad"/>
        <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text = "Ad"/>



<h2 style={headingStyle}>💎 My Favorite Midnights-Inspired Look</h2>

<p style={paragraphStyle}>
  The dazzling glam from her <strong>Bejeweled</strong> video, featuring Vita Von Teese and that unforgettable faux bob and bold makeup, is truly iconic.
</p>

<div
  style={{
    textAlign: 'center',
  }}
>
  <iframe
    style={{
      boxShadow: '12px 12px 24px rgba(0, 0, 0, 0.2)',
      borderRadius: '15px',
      width: '301px',
      height: '535px',
    }}
    src="https://www.youtube.com/embed/lrEfUOYSe6c"
    title="Taylor Swift Bejeweled Glam Short"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

<div
  style={{
    textAlign: 'center',
  }}
>
  <iframe
    style={{
      boxShadow: '12px 12px 24px rgba(0, 0, 0, 0.2)',
      borderRadius: '15px',
      width: '301px',
      height: '535px',
    }}
    src="https://www.youtube.com/embed/TB_88jCXp0E"
    title="Taylor Swift Bejeweled Chair Dance Short"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

<ResponsiveYoutube src="https://www.youtube.com/embed/b7QlX3yR2xs?si=nNxiKFPgVYiIHcRc" title="TAYLOR SWIFT THE ERAS TOUR with my Lover👩🏽‍❤️‍💋‍👨🏽💖🌈 Tampa FL!" />

     <DividerWithText text = "Ad"/>
        <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text = "Ad"/>



<p style={paragraphStyle}>
  <strong>Favorite Midnights song:</strong> <em>You’re On Your Own, Kid</em>.
</p>

<h2 style={headingStyle}>🎤 Throwback Magic: Debut and Beyond</h2>

<p style={paragraphStyle}>
  While Taylor didn’t perform songs from her debut album, <em>Our Song</em> still holds a special place in my heart! Her colourful eyeshadow looks from that video are perfect for summer beauty inspiration. Want a blast from the past? Watch my video from 10 years ago when I was a young Swiftie recreating Taylor’s style:
</p>



<ResponsiveYoutube src="https://www.youtube.com/embed/l92ijU80HbI?si=PEcpagFK3w3Wv1wf" title="TAYLOR SWIFT THE ERAS TOUR with my Lover👩🏽‍❤️‍💋‍👨🏽💖🌈 Tampa FL!" />



<p style={paragraphStyle}>
  I recently bought some new Taylor merch from her latest holiday drop, all debut album-themed! I love a good butterfly print 🦋. 
  <a 
    href="https://www.jackiewyers.beauty/articles/taylor-swift-holidays-2024" 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{ textDecoration: 'underline', color: '#745B4F' }}
  >
    See my ranking of her holiday merch here!
  </a>
</p>

     <DividerWithText text = "Ad"/>
        <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text = "Ad"/>

<h2 style={headingStyle}>🎬 What Era Should I Recreate Next?</h2>


<div
  style={{
    textAlign: 'center',
  }}
>
  <iframe
    style={{
      boxShadow: '12px 12px 24px rgba(0, 0, 0, 0.2)',
      borderRadius: '15px',
      width: '301px',
      height: '535px',
    }}
    src="https://www.youtube.com/embed/Rd8_G2hs2kc"
    title="What Era Should I Recreate Next?"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>
     <DividerWithText text = "Ad"/>
        <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text = "Ad"/>

<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src='https://res.cloudinary.com/dvbubqhpp/image/upload/v1733671880/TaylorReputation_mtezph.jpg'
    alt="Taylor Swift Eras Tour " 
    style={imageStyle} 
    data-pin-nopin="false" 
    data-pin-url="https://www.jackiewyers.beauty/articles/taylor-swift-eras-tour"
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
      transition: 'opacity 0.3s'
    }}
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/taylor-swift-eras-tour&media=https://res.cloudinary.com/dvbubqhpp/image/upload/v1733671880/TaylorReputation_mtezph.jpg&description=Taylor Swift Eras Tour Finale')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>

<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src='https://res.cloudinary.com/dvbubqhpp/image/upload/v1733671897/TaylorFearless_1_mvez3x.jpg'
    alt="Taylor Swift Eras Tour " 
    style={imageStyle} 
    data-pin-nopin="false" 
    data-pin-url="https://www.jackiewyers.beauty/articles/taylor-swift-eras-tour"
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
      transition: 'opacity 0.3s'
    }}
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/taylor-swift-eras-tour&media=https://res.cloudinary.com/dvbubqhpp/image/upload/v1733671897/TaylorFearless_1_mvez3x.jpg&description=Taylor Swift Eras Tour Finale')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>



     <DividerWithText text = "Ad"/>
        <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text = "Ad"/>







<p style={paragraphStyle}>
  Would you like to see more looks inspired by <strong>Fearless</strong>, <strong>Red</strong>, <strong>Speak Now</strong>, <strong>Reputation</strong>, <strong>1989</strong>, or her newest album <strong>The Tortured Poet's Department</strong>? I’d love to know! I’ll probably finish making friendship bracelets before I manage to recreate every single era, but vote below, and let’s keep the Taylor inspiration alive.
</p>

<p style={paragraphStyle}>
  💌 Tell me your favorite era and top Taylor Swift songs in the comments or share your favorite <em>Eras Tour</em> moment! Let’s celebrate the end of the <strong>Eras Tour</strong> together—through music, makeup, and documenting our memories.
</p>

<h5 style={headingStyle}>🎭 More Pop Culture Fun!</h5>
<p style={paragraphStyle}>
  If you want to keep reading about more pop culture, you might like my <strong>WICKED</strong> articles below!
</p>


<img 
    src={signature}
    alt="Jackie Wyers Signature" 
   
  />
  <br/>
      <NextArticle
        link="/popculture"
        imgSrc={wicked}
        altText="Explore more pop culture-inspired beauty looks."
        linkText="MORE WICKED + POP CULTURE →"
        containerStyle={{ margin: '2rem auto' }}
      />
      <Comments website-id={websiteId} page-id={"Las-fffff"} />
           <DividerWithText text = "Ad"/>
        <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text = "Ad"/>
     <DividerWithText text = "Ad"/>
        <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text = "Ad"/>
     <DividerWithText text = "Ad"/>
        <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text = "Ad"/>
    </div>
  );

  return (
    <div ref={blogRef}>
      <Card blogContent={blogContent} />
    </div>
  );
};


export default TaylorErasTour;