import React, { useRef } from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import styles from './AnimalPretty.module.css';

const title = `${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/FoxTitleResults.png`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/FoxPretty.png`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;
const final = `${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/Final.JPG`;

const Card = ({ blogContent }) => {
  return (
    <div className={styles.card}>
      <div className={styles.blogContent}>{blogContent}</div>
    </div>
  );
};

const FoxPretty = () => {
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
      <div className={styles.linkContainer}>
        <a href="/quiz2" className={styles.link}>BEAUTY // QUIZ // FOX PRETTY</a>
      </div>
      <img src={title} alt="No Makeup-Makeup Spring Edition Title" className={styles.titleImage} />

      <ResponsiveYoutube src="https://www.youtube.com/embed/c9-8K8AF5rg?si=-MEfA2g3jPJNwUzx" title="Sophia Loren Makeup Tutorial - Jackie Wyers on Youtube" />

      <div className={styles.subscribeContainer}>
        <SubscribeButton />
      </div>

      <p style={paragraphStyle}>
        <strong>(Fox Beauty Tutorial starts at 13:20)</strong>
      </p>

      <p style={paragraphStyle}>
        Your free-spirited and adventurous nature makes you a perfect match for the Fox Pretty style. With a love for earthy tones and a makeup style that features warm, rustic shades, you capture the essence of the wild and whimsical fox.
      </p>

      <p style={paragraphStyle}>
        Your preference for bohemian and patterned outfits complements this look, embodying the charm and vibrant spirit of the outdoors. Your personality is as warm and inviting as your makeup, drawing others to your genuine and down-to-earth demeanour.
      </p>

      <p style={paragraphStyle}>
        Dive into styles that feature lively prints and natural textures to fully embrace your Fox Pretty persona. Read further for makeup recommendations.
      </p>

      <img src={image2} alt="Fox Pretty" style={{ width: '100%' }} />

      <p style={paragraphStyle}>
        Celebrity Inspirations: Sadie Sink is the quintessential muse for this look, with her rustic red hues in her hair and brows. Her natural beauty enhanced with earthy makeup perfectly captures the Fox Pretty aesthetic.
      </p>

      <p style={paragraphStyle}>
        Note: If you're a redhead with bright blue eyes and vibrant hair that leans more towards the Spring colour season, you might find the “Bunny Pretty” guide with its softer pink shades more flattering than the rustic tones of Fox Pretty.
      </p>

      <h2 style={headingStyle}>Achieve the Fox Pretty Look :</h2>

      <p style={paragraphStyle}>
        Eyes: Choose warm, copper shades smoked out in a soft v, and use minimal liner to keep the eyes striking yet natural. The Bareminerals Warmth Minerals Palette is perfect to create this style. This approach enhances the eyes without overshadowing the inherent beauty of your features.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/552844?noHeader=true" title="Makeup by Mario Master Mattes Palette" />
      <p className={styles.affiliateLink}>CONTAINS: AFFILIATE LINKS</p>

      <p style={paragraphStyle}>
        Lashes: Extend the lash line along the winged-out shadow. Try ISOPIA Iso-Gentle Healing Lashes for a subtle effect.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/552845?noHeader=true" title="Makeup by Mario Master Mattes Palette" />
      <p className={styles.affiliateLink}>CONTAINS: AFFILIATE LINKS</p>

      <p style={paragraphStyle}>
        Cheeks: Apply dual blush tones—a rose shade for a vibrant pop of colour and a deeper rose to define the cheekbones.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/552846?noHeader=true" title="Makeup by Mario Master Mattes Palette" />
      <p className={styles.affiliateLink}>CONTAINS: AFFILIATE LINKS</p>

      <p style={paragraphStyle}>
        Lips: A matte berry or a rustic red lip, smudged out for a softer, more approachable look. Add a touch of golden metallic highlight to the cheekbones and pat over the centre of the lip for a unique, textured finish.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/552848?noHeader=true" title="Makeup by Mario Master Mattes Palette" />
      <p className={styles.affiliateLink}>CONTAINS: AFFILIATE LINKS</p>

      <p style={paragraphStyle}>
        Outfit Inspiration: Dive into a bohemian vibe with lively prints. Anthropologie is an excellent starting point for this style. Select paisley or other small prints in rustic tones to complement the boho aesthetic beautifully. This style not only matches the rich-toned makeup but also ties the whole look together.
      </p>

      <p style={paragraphStyle}>
        Don't forget to check out Fable England for fox-themed accessories that add a charming final touch.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/552850?noHeader=true" title="Makeup by Mario Master Mattes Palette" />
      <p className={styles.affiliateLink}>CONTAINS: AFFILIATE LINKS</p>

      <div className={styles.imageContainer}>
        <img src={final} alt="Fox Pretty" className={styles.image} />
      </div>

      <p style={paragraphStyle}>
        I hope this quiz inspires you to play with these animal-inspired beauty looks. Here’s a mini tutorial as a refresher to get the look and be sure to tag me on your socials if you try out these styles as I’d love to see it!
      </p>

      <img src={signature} alt="Jackie Wyers Signature" className={styles.signatureImage} />
      <Comments website-id={websiteId} pageId={"Fox-Pretty-Results"} />
    </div>
  );

  return (
    <div ref={blogRef}>
      <Card
        title="Fox Pretty"
        description="Beauty // Quiz // Fox Pretty"
        blogContent={blogContent}
        style={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'left'
        }}
      />
    </div>
  );
};

export default FoxPretty;
