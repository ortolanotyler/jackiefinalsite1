import React, { useRef, useEffect } from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import { Helmet } from 'react-helmet-async';
import DropCap1 from '../../Travel/DropCap1';
import ArticleTitle from '../../../Components/ArticleTitle';
import NextArticle from '../../../Components/NextArticleComponent';
import SocialShare from '../../../Home/SocialShare';
import YoutubeShortFacade from '../../../Components/YouTubeShortFacade';
import { Card } from '@mui/material';

const image1 = `${process.env.PUBLIC_URL}/Images/TaylorSwift/JackieWyersTaylorSwiftMakeup.JPG`;
const image2 = `${process.env.PUBLIC_URL}/Images/TaylorSwift/JackieWyersTaylorSwiftHair.JPG`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;
const pinterest = `${process.env.PUBLIC_URL}/Images/Articles/pinterest.png`;

const Taylor3 = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);

  const headingStyle = {
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: '400',
    fontFamily: "Playfair Display, serif",
    color: '#3a3a3a',
    maxWidth: '95%',
    margin: '30px auto',
  };

  const paragraphStyle = {
    fontSize: '20px',
    color: '#3a3a3a',
    fontFamily: "EB Garamond, serif",
    fontWeight: '400',
    padding: '10px',
    margin: '10px auto',
    lineHeight: '1.6',
  };

  const linkStyle = {
    textDecoration: 'none',
    fontFamily: "'Georgia', serif",
    fontWeight: '100',
    color: '#745B4F',
  };

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '10px',
    margin: '0 2rem',
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
        <title>Taylor Swift’s Iconic Eras Tour Makeup: How to Recreate Her Look</title>
        <link rel="canonical" href="https://www.jackiewyers.beauty/articles/taylor-swift-eras-tour-makeup" />
        <meta
          name="description"
          content="Recreate Taylor Swift's iconic Eras Tour makeup look featuring Pat McGrath Labs products, bold red lips, glittery eyes, and dewy cheeks."
        />
        <meta
          name="keywords"
          content="Taylor Swift makeup tutorial, Eras Tour makeup, Pat McGrath Labs, Taylor Swift red lipstick, glitter eyeshadow, dewy makeup look, Jackie Wyers beauty, celebrity makeup tutorials"
        />
        <meta property="og:title" content="Taylor Swift’s Iconic Eras Tour Makeup: How to Recreate Her Look" />
        <meta
          property="og:description"
          content="Recreate Taylor Swift's iconic Eras Tour makeup look featuring Pat McGrath Labs products, bold red lips, glittery eyes, and dewy cheeks."
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/Images/TaylorSwift/TaylorSwiftThumbnail.jpg`}
        />
        <meta property="og:url" content="https://www.jackiewyers.beauty/articles/taylor-swift-eras-tour-makeup" />
      </Helmet>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <a href="/popculture" style={linkStyle}>
          BEAUTY // POP CULTURE
        </a>
      </div>

      <ArticleTitle
        mainTitle="Taylor Swift’s Iconic Eras Tour Makeup: How to Recreate Her Look"
        subTitle="The Pat McGrath Labs red lip every Swiftie needs to try!"
        author="Jackie Wyers"
        publishDate="December 9th, 2024"
      />

      <SocialShare
        url="https://www.jackiewyers.beauty/articles/taylor-swift-eras-tour-makeup"
        title="Taylor Swift’s Iconic Eras Tour Makeup: How to Recreate Her Look"
        imageUrl={`${process.env.PUBLIC_URL}/Images/TaylorSwift/TaylorSwiftThumbnail.jpg`}
      />


<div style={{ textAlign: 'center', margin: '0 auto' }}>
  <YoutubeShortFacade 
    videoId="okU9zED6Hn4" // Replace with the actual video ID from your URL
    title="💚💛💜Taylor Swift ERAS TOUR MAKEUP🩷🩵🤎 the end of an era😿" 
  />
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
    src="https://www.youtube.com/embed/okU9zED6Hn4"
    title="YouTube Shorts Video"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

      <div style={{ textAlign: 'center', margin: '10px auto' }}>
        <SubscribeButton />
      </div>

      <p style={paragraphStyle}>
        All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
      </p>

      <div style={paragraphStyle}>
        <DropCap1 text="Taylor Swift’s Eras Tour was nothing short of legendary. From her breathtaking performances to her intricate costumes, every detail was perfectly curated—including her makeup, which remained flawless through hours of singing, dancing, outfit changes, and even rain! Let’s dive into recreating her Taylor-inspired glam, featuring some of the products rumored to have been used behind the scenes.        
        "/>
      </div>

      <div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/v1733768786/JackieWyersTaylorSwiftMakeup_q025di.jpg"
    alt="Jackie Wyers Taylor Swift Makeup Look" 
    style={imageStyle} 
    data-pin-nopin="false" 
    data-pin-url="https://www.jackiewyers.beauty/articles/taylor-swift-makeup"
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
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/taylor-swift-makeup&media=https://res.cloudinary.com/dvbubqhpp/image/upload/v1733768786/JackieWyersTaylorSwiftMakeup_q025di.jpg&description=Jackie Wyers Taylor Swift Makeup Look')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>
<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/v1733768785/JackieWyersTaylorSwiftHair_psnpk4.jpg"
    alt="Jackie Wyers Taylor Swift Hair Look" 
    style={imageStyle} 
    data-pin-nopin="false" 
    data-pin-url="https://www.jackiewyers.beauty/articles/taylor-swift-makeup"
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
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/taylor-swift-makeup&media=https://res.cloudinary.com/dvbubqhpp/image/upload/v1733768785/JackieWyersTaylorSwiftHair_psnpk4.jpg&description=Jackie Wyers Taylor Swift Hair Look')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>
      <h2 style={headingStyle}>✨ Taylor’s Signature Makeup: A Collaboration with Pat McGrath</h2>

<p style={paragraphStyle}>
  Taylor collaborated with iconic makeup artist Pat McGrath for her <strong>Bejeweled</strong> music video, where her bold and beautiful looks stole the show. One standout product from that collaboration is the <strong>LiquiLUST Matte Lipstick in Elson 4</strong>, a stunning blue-red lipstick that’s rumored to have graced the <em>Eras Tour</em> stage.
</p>

<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/v1733768785/JackieWyersBewjelledMakeup_hypbnd.jpg"
    alt="Jackie Wyers Bejeweled Makeup Look" 
    style={imageStyle} 
    data-pin-nopin="false" 
    data-pin-url="https://www.jackiewyers.beauty/articles/taylor-swift-makeup"
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
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/taylor-swift-makeup&media=https://res.cloudinary.com/dvbubqhpp/image/upload/v1733768785/JackieWyersBewjelledMakeup_hypbnd.jpg&description=Jackie Wyers Bejeweled Makeup Look')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>

<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src='https://res.cloudinary.com/dvbubqhpp/image/upload/v1733672001/JackieWyersBejeweledMakeup_kjfg.png'
    alt="Taylor Swift Bejeweled Makeup Collaboration with Pat McGrath" 
    style={imageStyle} 
    data-pin-nopin="false" 
    data-pin-url="https://www.jackiewyers.beauty/articles/taylor-swift-pat-mcgrath"
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
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/taylor-swift-pat-mcgrath&media=https://res.cloudinary.com/dvbubqhpp/image/upload/v1733672001/JackieWyersBejeweledMakeup_kjfg.png&description=Taylor Swift Collaboration with Pat McGrath')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>



<p style={paragraphStyle}>
  While the official product lineup for the tour hasn’t been revealed, it’s highly likely that Pat’s luxury products played a key role in ensuring Taylor’s makeup stayed flawless. After all, Pat McGrath is one of the most respected names in beauty, and Taylor would only trust the best makeup to wear on stage! While surfing Pat McGrath's website, she also has <em>"Taylor Made"</em> kits that are coming soon!💋
</p>



<ResponsiveIframe src="https://shopmy.us/collections/public/1085711?noHeader=true" title="The Glow: Dewy Cheekbones" />

<h2 style={headingStyle}>✨ Recreating Taylor’s Glittery Lids</h2>

<p style={paragraphStyle}>
  The <strong>Mothership VI Divine Rose Palette</strong> is said to be a go-to for Taylor’s looks, but I found the shadow on her lids during the tour had more of a pink, iridescent shimmer. Enter <strong>Karla Cosmetics Nightfall Opal Multichrome Eyeshadow</strong>, a gorgeous multi-dimensional shade that perfectly mimics Taylor’s glittery lid effect.
</p>

<div style={{ textAlign: 'center', margin: '20px auto' }}>
  <iframe 
    title="Taylor-Inspired Glittery Eyeshadow Picks" 
    src="https://shopmy.us/collections/embed/1085722?" 
    style={{ width: '100%', minHeight: '340px', border: 'none' }} 
  ></iframe>
</div>

<ResponsiveIframe src="https://shopmy.us/collections/public/1085722?noHeader=true" title="Taylor-Inspired Glittery Eyeshadow Picks" />


<h3 style={headingStyle}>🌟 For a complete eye look:</h3>
<ul style={paragraphStyle}>
  <li>Apply the multi-chrome shimmer on your lids.</li>
  <li>Add a taupe shade to the crease for definition.</li>
  <li>Pair with winged liner, mascara, and outer-corner lashes to capture Taylor’s signature cat eye with a pop of sparkle.</li>
</ul>

<h2 style={headingStyle}>✨ The Glow: Dewy Cheekbones</h2>

<p style={paragraphStyle}>
  Another speculated product from Taylor’s tour glam is the <strong>Pat McGrath Skin Fetish Highlighter + Balm Duo in Nude</strong>. I tested this myself, and it’s perfect for achieving that radiant glow on the cheekbones. The balm and highlighter combo lets you customize your shine, from a subtle dew to a more radiant finish.
</p>

<div style={{ textAlign: 'center', margin: '20px auto' }}>
  <iframe 
    title="Taylor-Inspired Highlighter Picks" 
    src="https://shopmy.us/collections/embed/1085731?" 
    style={{ width: '100%', minHeight: '340px', border: 'none' }} 
  ></iframe>
</div>

<h2 style={headingStyle}>💄 The Perfect Red Lip</h2>

<p style={paragraphStyle}>
  Taylor’s classic red lip is iconic, and the <strong>LiquiLUST Matte Lipstick in Elson 4</strong> is an excellent choice for recreating it. Start with a lip liner (I love <strong>MAC Lip Liner in Ruby Woo</strong>) for a clean outline, then layer the Elson 4 lipstick on top. This blue-toned red is universally flattering, makes your teeth look whiter, and boasts a moisturizing formula that’s a dream for a matte lip.
</p>

<div style={{ textAlign: 'center', margin: '20px auto' }}>
  <iframe 
    title="Taylor-Inspired Red Lip Picks" 
    src="https://shopmy.us/collections/embed/1085737?" 
    style={{ width: '100%', minHeight: '340px', border: 'none' }} 
  ></iframe>
</div>


<h2 style={headingStyle}>💡 Dupes and Budget Tips</h2>

<p style={paragraphStyle}>
  Pat McGrath products are luxurious and come with a higher price tag. If you’re looking to splurge on just one item, the <strong>Elson 4 lipstick</strong> is worth every penny. For the rest of the look, you can likely find similar shades and textures in your existing makeup collection.
</p>

<div style={{ textAlign: 'center', margin: '20px auto' }}>
  <iframe 
    title="Budget-Friendly Dupes for Taylor's Look" 
    src="https://shopmy.us/collections/embed/1085742?" 
    style={{ width: '100%', minHeight: '340px', border: 'none' }} 
  ></iframe>
</div>

<h2 style={headingStyle}>🌟 My Favorite Tour Look</h2>

<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/v1733768785/TaylorLoversBodysuit_2_z0vlob.jpg"
    alt="Taylor Lover's Bodysuit 2" 
    style={imageStyle} 
    data-pin-nopin="false" 
    data-pin-url="https://www.jackiewyers.beauty/articles/taylor-swift-makeup"
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
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/taylor-swift-makeup&media=https://res.cloudinary.com/dvbubqhpp/image/upload/v1733768785/TaylorLoversBodysuit_2_z0vlob.jpg&description=Taylor Lovers Bodysuit 2')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>

<p style={paragraphStyle}>
  While recreating this makeup was so much fun, my favorite tour outfit was Taylor’s <strong>Lover bodysuit</strong> paired with sparkly boots. For her <strong>Evermore</strong> segment, I found a witchy-inspired dress from <a 
    href="https://go.shopmy.us/p-10988653" 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{ textDecoration: 'underline', color: '#745B4F' }}
  >Ivy City Co.</a> that channels the same vibe as her stage outfit. It’s giving major folklore and Evermore energy!
</p>

<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/v1733768785/tayoutfit4_w0o5xl.jpg"
    alt="Taylor Swift Outfit 4" 
    style={imageStyle} 
    data-pin-nopin="false" 
    data-pin-url="https://www.jackiewyers.beauty/articles/taylor-swift-makeup"
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
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/taylor-swift-makeup&media=https://res.cloudinary.com/dvbubqhpp/image/upload/v1733768785/tayoutfit4_w0o5xl.jpg&description=Taylor Swift Outfit 4')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>

<h2 style={headingStyle}>🎤 What’s Your Favorite Taylor Swift Beauty Look?</h2>

<p style={paragraphStyle}>
  What do you think of Taylor’s stage makeup - would you recreate her bold red lip or glittery lids? Let me know in the comments, and if you try out this look, I'd love to see your version! Tag me & I'll feature you in the weekly newsletter.
</p>

<p style={paragraphStyle}>
  For more Taylor Swift-inspired articles like <strong>best 2024 merch ranked</strong>, keep reading here:
  <a 
    href="https://www.jackiewyers.beauty/articles/taylor-swift-holidays-2024" 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{ textDecoration: 'underline', color: '#745B4F' }}
  >
    Taylor Swift Holidays 2024
  </a>.
</p>
<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/v1733768785/tayoutfit3_seq5yb.jpg"
    alt="Taylor Swift Outfit 3" 
    style={imageStyle} 
    data-pin-nopin="false" 
    data-pin-url="https://www.jackiewyers.beauty/articles/taylor-swift-makeup"
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
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/taylor-swift-makeup&media=https://res.cloudinary.com/dvbubqhpp/image/upload/v1733768785/tayoutfit3_seq5yb.jpg&description=Taylor Swift Outfit 3')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>

<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/v1733768784/tayoutfit1_jvup7z.jpg"
    alt="Taylor Swift Outfit 1" 
    style={imageStyle} 
    data-pin-nopin="false" 
    data-pin-url="https://www.jackiewyers.beauty/articles/taylor-swift-makeup"
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
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/taylor-swift-makeup&media=https://res.cloudinary.com/dvbubqhpp/image/upload/v1733768784/tayoutfit1_jvup7z.jpg&description=Taylor Swift Outfit 1')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>
      <NextArticle
        link="/articles/taylor-swift-holidays-2024"
        imgSrc={`${process.env.PUBLIC_URL}/Images/Articles/NextTaylorSwiftArticle.jpg`}
        altText="Taylor Swift Holidays 2024"
        linkText="EXPLORE MORE SWIFTIE CONTENT →"
        containerStyle={{ margin: '2rem auto' }}
        linkStyle={{ color: '#000000', fontSize: '1.25rem' }}
        imgStyle={{ borderRadius: '10px' }}
      />

      <div>
        <img src={signature} alt="Jackie Wyers Signature XoXo" style={{ width: '100%' }} />
      </div>

      <Comments website-id={websiteId} page-id={"taylor-swift-eras-tour-makeup"} />
    </div>
  );

  return (
    <div ref={blogRef}>
      <Card
        title="Taylor Swift’s Iconic Eras Tour Makeup: How to Recreate Her Look"
        description="Recreate Taylor Swift's iconic Eras Tour makeup with this detailed guide featuring Pat McGrath products and beauty tips by Jackie Wyers."
        blogContent={blogContent}
      />
    </div>
  );
};

export default Taylor3;