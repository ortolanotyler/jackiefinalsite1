import React, { useRef } from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import SubscribeButton from '../../../Components/SubscribeButton';
import { Helmet } from 'react-helmet-async';
import DropCap1 from '../../Travel/DropCap1';
import ArticleTitle from '../../../Components/ArticleTitle';
import NextArticle from '../../../Components/NextArticleComponent';
import SocialShare from '../../../Home/SocialShare';
import DividerWithText from '../../../Home/DividerWithText';
import AdSenseAd from '../../../Home/Adsense';

const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;
const image1 = `${process.env.PUBLIC_URL}/Images/HarleyQuinn/Harley1.jpg`;


const pinterest = `${process.env.PUBLIC_URL}/Images/Articles/pinterest.png`;


const Card = ({ blogContent }) => (
  <div style={{ margin: '1rem', maxWidth: '100%', padding: '10px' }}>
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);

const HarleyQuinnEvolution = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);

  

  const headingStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: '400',
    fontFamily: "'Playfair Display', sans-serif",
    color: '#000000',
    maxWidth: '95%',
    margin: '30px auto',
  };

  const captionStyle = {
    textAlign: 'center',
    fontSize: '1rem',
    fontFamily: 'Arapey, serif',
    fontWeight: '400',
    margin: '0 auto',
    fontStyle: 'italic',
    };

  const paragraphStyle = {
    fontSize: '20px',
    color: '#000000',
    fontFamily: "EB Garamond, serif",
    fontWeight: '400',
    padding: '10px',
    margin: '10px auto',
    lineHeight: '1.6',
  };

  const imageStyle = {
    display: 'block',
    margin: '1rem auto',
    borderRadius: '0px',
    height: 'auto',
  };

  const iframeStyle = {
    width: '100%',
    minHeight: '340px',
    border: 'none',
  };

  const blogContent = (
    <div className="container">
     <Helmet>
  <title>Harley Quinn Beauty Evolution: Iconic Makeup Looks and Tutorials</title>
  <link rel="canonical" href="https://www.jackiewyers.beauty/articles/harley-quinn-evolution" />

  <meta 
    name="description" 
    content="Explore Harley Quinn's beauty evolution across three films starring Margot Robbie. Dive into step-by-step tutorials for recreating her iconic makeup looks from Suicide Squad, Birds of Prey, and The Suicide Squad." 
  />
  <meta 
    name="keywords" 
    content="Harley Quinn Makeup Tutorial, Harley Quinn, Suicide Squad, Margot Robbie Makeup Tutorial, Harley Quinn makeup evolution, Margot Robbie Harley Quinn looks, Suicide Squad makeup tutorial, Birds of Prey Harley Quinn hair and makeup, The Suicide Squad Harley Quinn style, DC Comics character makeup, Harley Quinn costume ideas, DIY Harley Quinn tutorials, Harley Quinn Halloween makeup, Alessandro Bertolazzi Harley Quinn, Heba Thorisdottir makeup design, Deborah LaMia Denaver makeup artistry, Jackie Wyers pop culture tutorials, Harley Quinn pigtails and hair, Harley Quinn smoky eye, DC movie makeup inspirations, iconic Harley Quinn designs" 
  />

  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="Harley Quinn Beauty Evolution: Iconic Makeup Looks and Tutorials" />
  <meta 
    property="og:description" 
    content="Explore Harley Quinn's beauty evolution across three films starring Margot Robbie. Dive into step-by-step tutorials for recreating her iconic makeup looks from Suicide Squad, Birds of Prey, and The Suicide Squad." 
  />
  <meta 
    property="og:image" 
    content="https://res.cloudinary.com/dvbubqhpp/image/upload/v1733074598/EvolutionOfHarleyQuinnThumb_iwlbj4.jpg" 
  />
  <meta property="og:url" content="https://www.jackiewyers.beauty/articles/harley-quinn-evolution" />
  <meta property="og:type" content="article" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:title" content="Harley Quinn Beauty Evolution: Iconic Makeup Looks and Tutorials" />
  <meta 
    name="twitter:description" 
    content="Explore Harley Quinn's beauty evolution across three films starring Margot Robbie. Dive into step-by-step tutorials for recreating her iconic makeup looks from Suicide Squad, Birds of Prey, and The Suicide Squad." 
  />
  <meta 
    name="twitter:image" 
    content="https://res.cloudinary.com/dvbubqhpp/image/upload/v1733074598/EvolutionOfHarleyQuinnThumb_iwlbj4.jpg" 
  />
  <meta name="twitter:card" content="summary_large_image" />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Harley Quinn Beauty Evolution: Iconic Makeup Looks and Tutorials",
        "description": "Explore Harley Quinn's beauty evolution across three films starring Margot Robbie. Dive into step-by-step tutorials for recreating her iconic makeup looks from Suicide Squad, Birds of Prey, and The Suicide Squad.",
        "image": "https://res.cloudinary.com/dvbubqhpp/image/upload/v1733074598/EvolutionOfHarleyQuinnThumb_iwlbj4.jpg",
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
        "datePublished": "2024-11-30",
        "dateModified": "2024-11-30",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.jackiewyers.beauty/articles/harley-quinn-evolution"
        }
      }
    `}
  </script>

  {/* Google Analytics */}
  <script>
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-RT6GR7JXYG', {
        page_path: window.location.pathname,
      });
    `}
  </script>
</Helmet>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <a href="/popculture" style={{ fontFamily: 'GFS Didot, serif', fontSize: '1rem', color: '#000000', textDecoration: 'none' }}>
          BEAUTY // POP CULTURE
        </a>
      </div>

      <ArticleTitle
        mainTitle="Harley Quinn Beauty Evolution: Iconic Pop Culture Makeup"
        subTitle="Pink and Blue Hair? Don’t Care!"
        author="Jackie Wyers"
        publishDate="November 30, 2024"
      />

<SocialShare
        url="https://www.jackiewyers.beauty/articles/harley-quinn-evolution"
        title="Harley Quinn Beauty Evolution: Iconic Pop Culture Makeup"
        imageUrl={image1}
      />

<ResponsiveYoutube
        src="https://www.youtube.com/embed/lXBXri7sWhU?si=6mIocZeaPSdPf1Z6"
        title="Harley Quinn Birds Of Prey Makeup Tutorial / Cosplay Transformation 2020 | jackie wyers"
        alt="Harley Quinn Birds Of Prey Makeup Tutorial / Cosplay Transformation 2020 | jackie wyers"
      />

      <div style={{ textAlign: 'center', margin: '1rem auto'
       }}>
        <SubscribeButton />
      </div>


        <DropCap1
          text="Hey, puddin’! Welcome back for another deep dive into one of the most iconic character makeup looks in pop culture history. Margot Robbie as Harley Quinn is one of DC Comics' best casting choices, and Harley Quinn costumes have become a staple every Halloween."
        />

<DividerWithText text = "Ad"/>
        <div className="ad-container">
  <AdSenseAd />
</div>
<DividerWithText text = "Ad"/>

      

      <p style={paragraphStyle}>
        Today, we’re breaking down how Harley’s look has evolved across three films starring Margot Robbie, with tutorials showing you how to recreate each iconic style while paying tribute to the artists that crafted her looks.
      </p>

      <ResponsiveIframe
        src="https://shopmy.us/collections/public/1057263?noHeader=true"
        title="Shop Harley Quinn SheGlam Collection"
      />

<p style={paragraphStyle}>

I’ve linked the entire collection above to shop, and now, let’s travel back to her cinematic debut in Suicide Squad (2016).
</p>
<h2 style={headingStyle}>Suicide Squad (2016)</h2>

<div style={{ textAlign: 'center', margin: '10px auto' }}>
  <iframe
    width="100%"
    height="315"
    src="https://www.youtube.com/embed/jnj60I2L7C0?t=8s"
    title="Suicide Squad Makeup Tutorial"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    style={{ borderRadius: '10px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}
  ></iframe>
</div>



<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1733074631/HARLEY1_if8m0m.jpg" 
    alt="Harley Quinn Suicide Squad Look" 
    style={imageStyle} 
    data-pin-url="https://www.jackiewyers.beauty/articles/harley-quinn-evolution"
    data-pin-media="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1733074631/HARLEY1_if8m0m.jpg"
    data-pin-description="Harley Quinn Suicide Squad Look by Jackie Wyers, recreation of Alessandro Bertolazzi's original design."
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
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/harley-quinn-evolution&media=https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1733074631/HARLEY1_if8m0m.jpg&description=Harley Quinn Suicide Squad Look by Jackie Wyers, recreation of Alessandro Bertolazzi\'s original design.')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>


<p style={paragraphStyle}>
  In Harley’s big-screen debut, her chaotic charm was brought to life by an award-winning creative team: makeup artist Alessandro Bertolazzi, hairstylist Giorgio Gregorini, and supervising makeup artist Christopher Nelson. Their work on the film earned an OSCAR for Best Makeup and Hairstyling!
</p>

<p style={paragraphStyle}>
  The team drew inspiration from punk rock icons like Debbie Harry of Blondie, crafting a rebellious yet playful look for Harley. Her messy space buns feel so 2016, and the smudged pink and blue eyeshadow, dip-dyed pigtails, and mischievous tattoos perfectly matched her unpredictable personality. One of my favorite looks from the film is when she’s in prison, rocking fuzzy pink slippers, sipping an espresso from her personal machine while in solitary confinement. Her smudged makeup screams “I do what I want,” and we can get the down-to-clown look using the entire SheGlam collection!
</p>



<ResponsiveIframe 
  src="https://shopmy.us/collections/public/1057263?noHeader=true" 
  title="Shop the Entire SheGlam Collection" 
  alt="Shop the Entire SheGlam Collection" 
/>


<DividerWithText text = "Ad"/>
        <div className="ad-container">
  <AdSenseAd />
</div>
<DividerWithText text = "Ad"/>



<h2 style={headingStyle}>Birds of Prey (2020)</h2>

<div style={{ textAlign: 'center', margin: '10px auto' }}>
  <iframe
    width="100%"
    height="315"
    src="https://www.youtube.com/embed/lXBXri7sWhU?t=239s"
    title="Birds of Prey Makeup Tutorial"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    style={{ borderRadius: '10px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}
  ></iframe>
</div>


<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1733074605/HARLEY2_kntjdi.jpg" 
    alt="Harley Quinn Birds of Prey Look" 
    style={imageStyle} 
    data-pin-url="https://www.jackiewyers.beauty/articles/harley-quinn-evolution"
    data-pin-media="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1733074605/HARLEY2_kntjdi.jpg"
    data-pin-description="Harley Quinn Birds of Prey Look by Jackie Wyers, recreation of Deborah LaMia Denaver and Adruitha Lee's original designs."
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
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/harley-quinn-evolution&media=https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1733074605/HARLEY2_kntjdi.jpg&description=Harley Quinn Birds of Prey Look by Jackie Wyers, recreation of Deborah LaMia Denaver and Adruitha Lee\'s original designs.')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>
<div>

  <p style={captionStyle}>
    Original Makeup by Deborah LaMia Denaver and Hair Design by Adruitha Lee, recreation by Jackie Wyers.
  </p>
</div>

<p style={paragraphStyle}>
  When Margot Robbie pitched <em>Birds of Prey</em>, she wanted a more feminist take on Harley Quinn—one that highlighted her independence away from the Joker. Costume designer Erin Benach, makeup department head Deborah LaMia Denaver, and hairstylist Adruitha Lee embraced this vision, reimagining Harley’s style with a bold, quirky twist.
</p>

<DividerWithText text = "Ad"/>
        <div className="ad-container">
  <AdSenseAd />
</div>
<DividerWithText text = "Ad"/>


<p style={paragraphStyle}>
  Gone was the overtly sexy look of <em>Suicide Squad</em>, replaced with spunky pigtails, choppy bangs, and edgy fashion pieces full of personality. Think pink and gold hues, and DIY elements like her now-iconic caution tape jacket. This look feels more wearable and showcases Harley’s playful yet powerful side. It’s a great example of how the creative team brought Margot Robbie’s vision of a more empowered Harley to life.
</p>

<p style={paragraphStyle}>
  Want to channel this version of Harley with a silvery smoky eye and bold red lip? Check out my tutorial linked above! (This Harley look is my personal favorite—I’m obsessed with the perky pigtails!)
</p>



<h2 style={headingStyle}>The Suicide Squad (2021)</h2>

<div style={{ textAlign: 'center', margin: '10px auto' }}>
  <iframe
    width="100%"
    height="315"
    src="https://www.youtube.com/embed/q8wYj91SoGU?t=18s"
    title="The Suicide Squad Makeup Tutorial"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    style={{ borderRadius: '10px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}
  ></iframe>
</div>

<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1733074603/HARLEY3_ila1pv.jpg" 
    alt="Harley Quinn The Suicide Squad Look" 
    style={imageStyle} 
    data-pin-url="https://www.jackiewyers.beauty/articles/harley-quinn-evolution"
    data-pin-media="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1733074603/HARLEY3_ila1pv.jpg"
    data-pin-description="Harley Quinn The Suicide Squad Look by Jackie Wyers, recreation of Heba Thorisdottir's original design."
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
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/harley-quinn-evolution&media=https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1733074603/HARLEY3_ila1pv.jpg&description=Harley Quinn The Suicide Squad Look by Jackie Wyers, recreation of Heba Thorisdottir\'s original design.')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>

<div>
 
  <p style={captionStyle}>
    Original Makeup by Heba Thorisdottir and Hair Design by The Suicide Squad team, recreation by Jackie Wyers.
  </p>
</div>

<DividerWithText text = "Ad"/>
        <div className="ad-container">
  <AdSenseAd />
</div>
<DividerWithText text = "Ad"/>


<p style={paragraphStyle}>
  By the time <em>The Suicide Squad</em> (2021) rolled around, Harley Quinn’s look underwent another transformation. Makeup department head Heba Thorisdottir drew from Harley’s comic roots, incorporating rich crimson and black tones into her aesthetic instead of the hot pink we came to know in the previous two films. Her hair ditched the pink and blue for striking red and black, signaling a darker, more mature side of the character.
</p>

<p style={paragraphStyle}>
  Harley’s makeup featured a darker red lipstick, winged liner, and still included her signature smudgy eye look. Want to try this fierce, crimson-inspired look? My tutorial gives a breakdown, of course!
</p>

<h2 style={headingStyle}>Harley Quinn’s Iconic Legacy</h2>



<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1733074601/HARLEY4_ewj3cw.jpg" 
    alt="Harley Quinn Iconic Looks" 
    style={imageStyle} 
    data-pin-url="https://www.jackiewyers.beauty/articles/harley-quinn-evolution"
    data-pin-media="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1733074601/HARLEY4_ewj3cw.jpg"
    data-pin-description="Harley Quinn Iconic Looks as captured by Jackie Wyers, featuring her evolution through three films."
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
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/harley-quinn-evolution&media=https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1733074601/HARLEY4_ewj3cw.jpg&description=Harley Quinn Iconic Looks as captured by Jackie Wyers, featuring her evolution through three films.')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>


<p style={paragraphStyle}>
  Harley Quinn’s cinematic journey showcases a dynamic evolution in her makeup and costume design, and it’s hard to pick a favorite style—but I’d love to know yours in the comments below. Feel free to drop a GIF of your favorite Harley moment!
</p>

<DividerWithText text = "Ad"/>
        <div className="ad-container">
  <AdSenseAd />
</div>
<DividerWithText text = "Ad"/>


<p style={paragraphStyle}>
  From punk rock rebellion, to quirky independence, to a darker, more comic-inspired aesthetic, Harley’s look continues to captivate audiences and inspire countless Halloween costumes. Tell me if you have any other favorite DC Comics characters you’d love to see me cover, and if you use my tutorials to nail the look—be sure to tag me!
</p>

<div style={{ textAlign: 'center', margin: '10px auto' }}>
  <iframe
    width="100%"
    height="315"
    src="https://www.youtube.com/embed/Fumxc0P5Ync?t=126s"
    title="CallMeKris Follows Harley Quinn Makeup Tutorial"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    style={{ borderRadius: '10px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}
  ></iframe>
</div>

<p style={paragraphStyle}>
  <em>(I loved seeing CallMeKris follow along and absolutely slay it! It's a funny watch for sure)</em>
</p>

<p style={paragraphStyle}>
  Keep reading about more iconic pop culture looks{" "}
  <a
    href="https://www.jackiewyers.beauty/articles/wicked-witch-of-the-west"
    style={{ textDecoration: 'underline' }}
    target="_blank"
    rel="noreferrer"
  >
    here
  </a>{" "}
  <span style={{ fontStyle: 'italic' }}></span>.
</p>

<p style={paragraphStyle}>
  Check out articles like this one referencing Heba Thorisdottir's work on <em>The Suicide Squad</em> : {" "}
  <a
    href="https://variety.com/2022/artisans/awards/heba-thorisdottir-suicide-squad-muahs-1235177605/"
    style={{ textDecoration: 'underline' }}
    target="_blank"
    rel="noreferrer"
  >
    Variety Feature
  </a>.
</p>



      <NextArticle
        link="/articles/wicked-witch-of-the-west"
        imgSrc="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728754849/uyxilbcs5onnzlekl4sd.webp"
        linkText="MORE ICONIC POP CULTURE LOOKS →"
      />

      <Comments website-id="10910" page-id="harley-quinn-evolution" /> 
      <DividerWithText text = "Ad"/>
        <div className="ad-container">
  <AdSenseAd />
</div>
<DividerWithText text = "Ad"/>

<DividerWithText text = "Ad"/>
        <div className="ad-container">
  <AdSenseAd />
</div>
<DividerWithText text = "Ad"/>

<DividerWithText text = "Ad"/>
        <div className="ad-container">
  <AdSenseAd />
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

export default HarleyQuinnEvolution;