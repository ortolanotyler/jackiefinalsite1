import React, { useRef, useEffect } from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveIframeNew from '../../../Components/ResponsiveIframeNew';
import { Helmet } from 'react-helmet-async';
import DropCap1 from '../../Travel/DropCap1';
import ArticleTitle from '../../../Components/ArticleTitle';
import NextArticle from '../../../Components/NextArticleComponent';
import SocialShare from '../../../Home/SocialShare';

import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import DividerWithText from '../../../Home/DividerWithText';
import AdSenseAd from '../../../Home/Adsense';
import SmallAdSenseAd from '../../../Home/AdsenseSmall';

const pinterest = `${process.env.PUBLIC_URL}/Images/Articles/pinterest.png`;


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

const RemBeautyWickedReview = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);

      
  const imageStyle = {
    display: 'block',
    margin: '1rem auto',
    borderRadius: '0px',
    height: 'auto'
    };
    

  const headingStyle = {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: '100',
    fontFamily: "Playfair Display, serif",
    color: '#000000',
    maxWidth: '95%',
    margin: '30px auto',
  };

  const paragraphStyle = {
    fontSize: '20px',

    color: '#000000',
    fontFamily: "EB Garamond, sans-serif",
    fontWeight: '100',
    padding: '10px',
    margin: '10px auto',
    lineHeight: '1.75',
  };

  const linkStyle = {
    textDecoration: 'none',
    fontFamily: "Georgia, serif",
    fontWeight: '100',
    color: '#745B4F',
  };

  const iframeStyle = {
    width: '100%',
    minHeight: '340px',
    border: 'none',
  };

  return (
    <div ref={blogRef}>
      <Card
        blogContent={
          <div className="container">
  <Helmet>
  <title>r.e.m. Beauty Wicked Collection Review 🎭</title>
  <link rel="canonical" href="https://www.jackiewyers.beauty/articles/rembeauty/wicked-review" />

  <meta 
    name="description" 
    content="Dive into the magical r.e.m. Beauty x WICKED collection. Achieve Glinda’s radiant makeup look with this ultimate guide featuring reviews of top products for your WICKED holiday wish list!" 
  />
  <meta 
    name="keywords" 
    content="r.e.m. Beauty, WICKED collection review, Glinda makeup look, Ariana Grande beauty, holiday beauty picks 2024, WICKED-inspired makeup, r.e.m. Beauty x WICKED, Glinda makeup tutorial, r.e.m. Glow Drops, WICKED beauty products, top beauty reviews 2024, r.e.m. makeup collection, holiday makeup ideas, Jackie Wyers, Glinda-inspired beauty, WICKED holiday collection, Ariana Grande makeup products, Glinda glow drops, must-have beauty products 2024, holiday beauty wishlist" 
  />

  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="r.e.m. Beauty x WICKED Collection Review 🎭" />
  <meta 
    property="og:description" 
    content="Dive into the magical r.e.m. Beauty x WICKED collection. Achieve Glinda’s radiant makeup look with this ultimate guide featuring reviews of top products for your WICKED holiday wish list!" 
  />
  <meta 
    property="og:image" 
    content="https://www.jackiewyers.beauty/Images/Wicked/WickedThumbnail.jpg" 
  />
  <meta property="og:url" content="https://www.jackiewyers.beauty/articles/rembeauty/wicked-review" />
  <meta property="og:type" content="article" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:title" content="r.e.m. Beauty x WICKED Collection Review 🎭" />
  <meta 
    name="twitter:description" 
    content="Dive into the magical r.e.m. Beauty x WICKED collection. Achieve Glinda’s radiant makeup look with this ultimate guide featuring reviews of top products for your WICKED holiday wish list!" 
  />
  <meta 
    name="twitter:image" 
    content="https://www.jackiewyers.beauty/Images/Wicked/WickedThumbnail.jpg" 
  />
  <meta name="twitter:card" content="summary_large_image" />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "r.e.m. Beauty x WICKED Collection Review 🎭",
        "description": "Dive into the magical r.e.m. Beauty x WICKED collection. Achieve Glinda’s radiant makeup look with this ultimate guide featuring reviews of top products for your WICKED holiday wish list!",
        "image": "https://www.jackiewyers.beauty/Images/Wicked/WickedThumbnail.jpg",
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
        "datePublished": "2024-12-06",
        "dateModified": "2024-12-06",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.jackiewyers.beauty/articles/rembeauty/wicked-review"
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
              mainTitle="r.e.m. Beauty x WICKED Collection Review"
              subTitle="Glinda Makeup Magic Inspired by Ariana Grande"
              author="Jackie Wyers"
              publishDate="December 6th, 2024"
            />
  
            <SocialShare
              url="https://www.jackiewyers.beauty/articles/rembeauty/wicked-review"
              title="r.e.m. Beauty x WICKED Collection Review"
              imageUrl="https://www.jackiewyers.beauty/Images/Wicked/WickedThumbnail.jpg"
            />
  
  <div style={{ textAlign: "center", margin: "20px auto" }}>
  <ResponsiveYoutube
    src="https://www.youtube.com/embed/cqSutAsw7uE?si=Okv5Tn9T9vd21T9C"
    title="🎀how to do GLINDA Makeup🎀 r.e.m. beauty x wicked review! #WICKED"
  />
</div>
<div style = {{
  textAlign: 'center',
  margin: '10px auto'
}}>

            <SubscribeButton />

            </div>
  
            <DropCap1
              text="Hey, everyone! If you’re as WICKED movie-obsessed as I am, then you’re in the right place. After seeing the film on the big screen, I couldn’t resist recreating Glinda’s makeup look inspired by Ariana Grande’s portrayal. Today, I’ll be diving into the r.e.m. beauty x WICKED collection to show you how to achieve Glinda’s stunning aesthetic."
            />
     <DividerWithText text = "Ad"/>
        <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text = "Ad"/>
            <p style={paragraphStyle}>
              I’ve previously covered Glinda’s Ozdust Ball look and even shared an
              Elphaba-inspired tutorial. This time, I’ll review each product in
              the r.e.m. collection and let you know what’s worth the splurge—and
              what to “Toss, toss!” Ready to fuel your WICKED holiday wish list?
              Let’s get started.
            </p>

            <div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/v1733590313/Glinda-fied_beauty_gztjni.jpg" 
    alt="Glinda-fied Beauty by Jackie Wyers" 
    style={imageStyle} 
    data-pin-url="https://www.jackiewyers.beauty/articles/wicked3"
    data-pin-media="https://res.cloudinary.com/dvbubqhpp/image/upload/v1733590313/Glinda-fied_beauty_gztjni.jpg"
    data-pin-description="Glinda-fied Beauty by Jackie Wyers"
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
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/wicked3&media=https://res.cloudinary.com/dvbubqhpp/image/upload/v1733590313/Glinda-fied_beauty_gztjni.jpg&description=Glinda-fied Beauty by Jackie Wyers')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>


            <div>
  <h2 style={headingStyle}>First Impressions of the r.e.m. Beauty Collection</h2>
  <p style={paragraphStyle}>
    The r.e.m. beauty x WICKED collection is undeniably dreamy, with packaging that perfectly captures Glinda’s bubbly and radiant aesthetic. But do the products live up to the hype? Here’s how they performed for me:
  </p>

  <h3 style={headingStyle}>1. r.e.m. beauty x WICKED Galinda Glow Drops</h3>
  <ResponsiveIframe
    title="Galinda Glow Drops"
    src="https://shopmy.us/collections/public/1077165"
  />
  <p style={paragraphStyle}>
    <strong>Verdict:</strong> Highly recommend!  
    <br />
    <strong>Why I Love It:</strong> These glow drops are moisturizing, smell incredible, and leave a radiant finish. Use them under foundation, on your chest, or as a highlighter for doll-like skin.
  </p>

  <h3 style={headingStyle}>2. r.e.m. beauty x WICKED Galinda Makeup Set</h3>
  <ResponsiveIframe
    title="Galinda Makeup Set"
    src="https://shopmy.us/collections/public/1077167"
  />
  <p style={paragraphStyle}>
    <strong>What’s Inside:</strong>
    <br />
    <strong>Pink Lipstick:</strong> A wearable pink shade with adorable limited-edition packaging.  
    <br />
    <strong>Bright Pink Blush:</strong> Blends beautifully and pairs perfectly with the Glow Drops.  
    <br />
    <strong>Light Blue Eyeliner:</strong> Sadly, this one didn’t impress—it broke easily, and I wish it had a more iridescent finish.
  </p>
</div>

<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/v1733590310/MakeupCloseUp_e4z8ca.jpg" 
    alt="Makeup Close-Up by Jackie Wyers" 
    style={imageStyle} 
    data-pin-url="https://www.jackiewyers.beauty/articles/wicked3"
    data-pin-media="https://res.cloudinary.com/dvbubqhpp/image/upload/v1733590310/MakeupCloseUp_e4z8ca.jpg"
    data-pin-description="Makeup Close-Up by Jackie Wyers"
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
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/wicked3&media=https://res.cloudinary.com/dvbubqhpp/image/upload/v1733590310/MakeupCloseUp_e4z8ca.jpg&description=Makeup Close-Up by Jackie Wyers')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>

<DividerWithText text = "Ad"/>
        <div className="ad-container">
  <SmallAdSenseAd/>
</div>
<DividerWithText text = "Ad"/>
<h3 style={headingStyle}>3. r.e.m. beauty x WICKED Ozdust Eyeshadow Palette</h3>
<ResponsiveIframe
  title="Ozdust Eyeshadow Palette"
  src="https://shopmy.us/collections/public/1077170"
/>
<p style={paragraphStyle}>
  <strong>Verdict:</strong> Beautiful but not as impactful as I’d hoped.  
  <br />
  <strong>Comparison:</strong> While the aesthetic is stunning, the shimmers require building for a bolder look. For higher performance, I recommend the ONE/SIZE Wicked on Broadway palette—it delivers better shimmer payoff and even includes blushes!
</p>

<h3 style={headingStyle}>4. PH Adaptive Lip Oil</h3>
<ResponsiveIframe
  title="PH Adaptive Lip Oil"
  src="https://shopmy.us/collections/public/1077172"
/>
<p style={paragraphStyle}>
  <strong>What It Does:</strong> Adjusts to your pH to create a vibrant pink tint.  
  <br />
  <strong>My Thoughts:</strong> While it leaned warmer than expected, I’d recommend pairing it with a lip liner for a polished look. If you’re aiming for Glinda’s cooler pinks, try the Tulip Lip Stains instead.
</p>
<h2 style={headingStyle}>What I’d Recommend Most</h2>
<p style={paragraphStyle}>
  If you’re considering the collection, here’s what I’d prioritize:
</p>

<p style={paragraphStyle}>
  <strong>Top Pick:</strong> Galinda Glow Drops 🌟 – Versatile and delivers consistent results.  
  <br />
  <strong>Best for Collectors:</strong> Galinda Set – A mix of incredible and underwhelming products, but the packaging is adorable.  
  <br />
  <strong>Swap Option:</strong> Replace the r.e.m. eyeshadow palette with the ONE/SIZE Wicked on Broadway palette for better performance.
</p>


<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/v1733590316/r.e.m._beauty_makeup_treview_tlcl5z.jpg" 
    alt="r.e.m. Beauty Makeup Review by Jackie Wyers" 
    style={imageStyle} 
    data-pin-url="https://www.jackiewyers.beauty/articles/wicked3"
    data-pin-media="https://res.cloudinary.com/dvbubqhpp/image/upload/v1733590316/r.e.m._beauty_makeup_treview_tlcl5z.jpg"
    data-pin-description="r.e.m. Beauty Makeup Review by Jackie Wyers"
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
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/wicked3&media=https://res.cloudinary.com/dvbubqhpp/image/upload/v1733590316/r.e.m._beauty_makeup_treview_tlcl5z.jpg&description=r.e.m. Beauty Makeup Review by Jackie Wyers')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>


<DividerWithText text = "Ad"/>
        <div className="ad-container">
  <SmallAdSenseAd/>
</div>
<DividerWithText text = "Ad"/>

<h2 style={headingStyle}>Non-Makeup Picks</h2>
<p style={paragraphStyle}>
  The Bubble Sweater and WICKED Tote Bag are absolutely adorable for any fan!
</p>

<ResponsiveIframe  
style = {{
minHeight: '100vh'
}}
  title="WICKED Tote"
  src="https://shopmy.us/collections/public/1077175?noHeader=true"
/>

<p style={paragraphStyle}>
  For brushes, IT Cosmetics IT Brushes for ULTA are a must-have in any makeup kit:
</p>

<ResponsiveIframe
  title="IT Brushes for ULTA"
  src="https://shopmy.us/collections/public/1077182"
/>
  
<h2 style={headingStyle}>WICKED Movie Review</h2>
<p style={paragraphStyle}>
  The WICKED movie was a visual and emotional masterpiece. From the dazzling sets and costumes to the breathtaking music, everything felt larger-than-life. As someone new to the WICKED universe (I saw the play for the first time this summer), I loved how the film brought the characters closer through expressive, cinematic moments.
</p>

<DividerWithText text = "Ad"/>
        <div className="ad-container">
  <SmallAdSenseAd/>
</div>
<DividerWithText text = "Ad"/>



<p style={paragraphStyle}>
  One scene that stuck with me was the Ozdust Ball. While Glinda’s style is impeccable, her kindness toward Elphaba seemed a bit transactional at first—befriending her to boost her own image. However, as the story progressed, I appreciated Glinda’s growth, thanks to Elphaba’s strong moral compass.
</p>

<h2 style={headingStyle}>Let’s Chat!</h2>
<p style={paragraphStyle}>
  I’d love to hear your thoughts:
</p>

<ul style={{ fontSize: '20px', fontFamily: "EB Garamond, sans-serif", lineHeight: '1.75', margin: '10px auto', padding: '10px' }}>
  <li>Do you think Glinda and Elphaba are both “good witches”?</li>
  <li>Which r.e.m. products caught your eye?</li>
</ul>

<p style={paragraphStyle}>
  Leave a comment below—I can’t wait to read your opinions!
</p>

<img
              src={`${process.env.PUBLIC_URL}/Images/Articles/Signature.png`}
              alt="Jackie Wyers Signature"
              style={{ width: "100%" }}
            />

            <NextArticle
              link="/articles/wicked"
              imgSrc={'https://res.cloudinary.com/dvbubqhpp/image/upload/v1733590317/Glinda_Makeup_Tutorial_qy2h9o.jpg'}
              linkText="More Wicked Please!"
            />
       <br/>
            <Comments website-id={websiteId} page-id="rem-wicked-review" />
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
<DividerWithText text = "Ad"/>
        <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text = "Ad"/>
          </div>
        }
      />
    </div>
  );
}

export default RemBeautyWickedReview;