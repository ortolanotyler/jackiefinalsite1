import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import styles from './AnimalPretty.module.css';
import AdSenseAd from '../../../Advertising/Ads';

const title = `${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/bunnytitle.jpeg`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/BunnyPretty.JPG`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => {
  return (
    <div className={styles.card}>
      <div className={styles.blogContent}>{blogContent}</div>
    </div>
  );
};

const BunnyPretty = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);

  const headingStyle = {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'normal',
    fontFamily: 'Arapey, serif',
    color: '#333',
    margin: '1.5rem'
  };

  const paragraphStyle = {
    fontSize: '1rem',
    fontFamily: 'GFS Didot, serif',
    margin: '1rem 1.5rem',
    maxWidth: '100%',
    lineHeight: '1.5'
  };

  const blogContent = (
    <div className={styles.container}>
      <Helmet>
  <title>Bunny Pretty | Jackie Wyers</title>
  <meta name="description" content="Discover how to achieve the Bunny Pretty look with our detailed guide. Embrace soft pastels and cute styles to capture the essence of the playful bunny." />
  <meta name="keywords" content="Jackie Wyers, Bunny Pretty, makeup tutorial, beauty guide, soft pastels, cute styles, playful bunny, makeup tips, animal-inspired beauty" />

  <meta property="og:title" content="Bunny Pretty | Jackie Wyers" />
  <meta property="og:description" content="Discover how to achieve the Bunny Pretty look with our detailed guide. Embrace soft pastels and cute styles to capture the essence of the playful bunny." />
  <meta property="og:image" content={`${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/BunnyPretty.JPG`} />
  <meta property="og:url" content="https://jackiewyers.beauty/bunnypretty" />
  <meta property="og:type" content="article" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Bunny Pretty | Jackie Wyers" />
  <meta name="twitter:description" content="Discover how to achieve the Bunny Pretty look with our detailed guide. Embrace soft pastels and cute styles to capture the essence of the playful bunny." />
  <meta name="twitter:image" content={`${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/BunnyPretty.JPG`} />

  <script async src="https://www.googletagmanager.com/gtag/js?id=G-RT6GR7JXYG"></script>
  <script>
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-RT6GR7JXYG');
    `}
  </script>
  <script data-ad-client="ca-pub-4660168246825318" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
</Helmet>

      <div className={styles.linkContainer}>
        <a href="/quiz2" className={styles.link}>BEAUTY // QUIZ // BUNNY PRETTY</a>
      </div>
      <img src={title} alt="BUNNY PRETTY - QUIZ RESULTS" className={styles.titleImage} />

      <ResponsiveYoutube src="https://www.youtube.com/embed/hIGr8Gj4kQA?si=8N-JgnQ-JeRTk5Gm" title="Sophia Loren Makeup Tutorial - Jackie Wyers on Youtube" />

      <div className={styles.subscribeContainer}>
        <SubscribeButton />
      </div>

      <p style={paragraphStyle}>
        <strong>Bunny Pretty: Cute and Angelic (Bunny Beauty Tutorial starts at 5:31)</strong>
      </p>

      <p style={paragraphStyle}>
        You are the sweet and playful Bunny Pretty, with a love for soft pastels and a makeup style that’s as cute and angelic as it is vibrant. Your bubbly personality and love for social gatherings are perfectly reflected in the pink hues and glossy finishes of your makeup, mirroring a bunny's gentle charm.
      </p>

      <p style={paragraphStyle}>
        The soft wash of pink on your lids and the rosy flush on your cheeks highlight your youthful and energetic spirit.
      </p>

      <p style={paragraphStyle}>
        Embrace flowing fabrics and flirty dresses in pastel colours that enhance your adorable Bunny Pretty look, making you the epitome of sweetness and playfulness. Read further for makeup recommendations.
      </p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <div className={styles.imageContainer}>
        <img src={image2} alt="Bunny Pretty" className={styles.image} />
      </div>

      <p style={paragraphStyle}>
        Celebrity Inspirations: Elle Fanning is the epitome of Bunny Pretty with her angelic presence. Other stars like Amandla Stenberg and Zendaya also beautifully pull off this style, showcasing how versatile and flattering it can be across different skin tones.
      </p>

      <h2 style={headingStyle}>Achieve the Bunny Pretty Look :</h2>

      <p style={paragraphStyle}>
        Eyes: Apply a soft wash of pink over your lids, adding a touch of shimmer to the brow bone and inner corners to brighten and open up the eye area. Charlotte Tilbury Pillow Talk Eyeshadow Palette is a beautiful option.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/552851?noHeader=true" title="Charlotte Tilbury Pillow Talk Eyeshadow Palette" />
      <p className={styles.affiliateLink}>CONTAINS: AFFILIATE LINKS</p>

      <p style={paragraphStyle}>
        Lashes: Curl your lashes for a natural lift, focusing on the upper lashes only to keep the look light and fresh. Try ISOPIA Iso-Gentle Harmony Lashes for extra length.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/552853?noHeader=true" title="ISOPIA Iso-Gentle Harmony Lashes" />
      <p className={styles.affiliateLink}>CONTAINS: AFFILIATE LINKS</p>

      <p style={paragraphStyle}>
        Cheeks: Embrace a rosy flush with a heavier application of blush. Milani Coral Cove is an excellent choice for a warmer pink, while Rare Beauty's blush in Happy suits cooler undertones. Don't be shy with the blush to achieve that vibrant, youthful glow.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/552854?noHeader=true" title="Milani Coral Cove Blush" />
      <p className={styles.affiliateLink}>CONTAINS: AFFILIATE LINKS</p>

      <p style={paragraphStyle}>
        Lips: Start with a nude pink lip liner to define your lips, then layer on the Sephora Collection Pink Pout Lipgloss for a glossy, vibrant finish that complements the blushy cheeks.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/552857?noHeader=true" title="Sephora Collection Pink Pout Lipgloss" />
      <p className={styles.affiliateLink}>CONTAINS: AFFILIATE LINKS</p>

      <p style={paragraphStyle}>
        Outfit Inspiration: Lean into the Bunny Pretty theme with soft, flowing fabrics in pink tones. Try flirty dresses in pastel colours that enhance the sweetness of this look. Brands like For Love & Lemons offer a variety of options that can perfectly complement the Bunny Pretty makeup.
      </p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <p style={paragraphStyle}>
        Additionally, accessories from Fable England, such as bunny-themed jewelry, can add a whimsical touch to complete your outfit as mentioned in the looks above.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/552860?noHeader=true" title="Bunny-Themed Jewelry" />
      <p className={styles.affiliateLink}>CONTAINS: AFFILIATE LINKS</p>

      <p style={paragraphStyle}>
        I hope this quiz inspires you to play with these animal-inspired beauty looks. Which "Type of Pretty" are you leaning towards? Dive into the quiz on my website and I hope the full length tutorials on my channel inspire you to try a new look <a href='/tutorials' alt=''>here</a>!
      </p>

      <img src={signature} alt="Jackie Wyers Signature" className={styles.signatureImage} />
      <Comments website-id={websiteId} pageId={"Bunny-Pretty-Results"} />
    </div>
  );

  return (
    <div ref={blogRef}>
      <Card blogContent={blogContent} />
    </div>
  );
};

export default BunnyPretty;
