import React, { useRef } from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import styles from './AnimalPretty.module.css';

const button = `${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/AnimalQuizResults.jpeg`;
const title = `${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/DeerPrettyTitle.png`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/DeerFinal1.jpg`;
const final = `${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/Final.JPG`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => {
  return (
    <div className={styles.card}>
      <div className={styles.blogContent}>{blogContent}</div>
    </div>
  );
};

const DeerPretty = () => {
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
        <a href="/quiz2" className={styles.link}>BEAUTY // QUIZ // DEER PRETTY</a>
      </div>
      <img src={title} alt="Deer Pretty Title" className={styles.titleImage} />

      <ResponsiveYoutube src="https://www.youtube.com/embed/c9-8K8AF5rg?si=-MEfA2g3jPJNwUzx" title="Sophia Loren Makeup Tutorial - Jackie Wyers on Youtube" />

      <div className={styles.subscribeContainer}>
        <SubscribeButton />
      </div>

      <p style={paragraphStyle}>
        <strong>Deer Pretty: Soft and Ethereal 🦌 (Deer Beauty Tutorial starts at 0:42)</strong>
      </p>

      <p style={paragraphStyle}>
        You embody the grace and serenity of the Deer Pretty style. Just like the gentle features of a deer, your beauty shines through in soft, subtle ways. With your preference for neutral and understated colour palettes, and a personality that exudes calmness, you align perfectly with the warm, glowing aesthetics of Deer Pretty.
      </p>

      <p style={paragraphStyle}>
        Your makeup style enhances your natural beauty without overpowering it, reflecting your elegant and serene disposition.
      </p>

      <p style={paragraphStyle}>
        Embrace lace, florals, and pastel outfits that complement your soft doe-eyed makeup look for a truly ethereal presence. Read further for makeup recommendations:
      </p>

      <div className={styles.imageContainer}>
        <img src={image2} alt="Deer Pretty" className={styles.image} />
      </div>

      <p style={paragraphStyle}>
        Celebrity Inspirations: Jessica Alba, Leighton Meester, Emmy Russum, Tessa Thompson, and Charithra Chandran rock this look with their big, round eyes and stunning skin tones.
      </p>

      <h2 style={headingStyle}>Achieve the Deer Pretty Look</h2>

      <p style={paragraphStyle}>
        Eyes: Start with a neutral brown shadow from the Makeup by Mario Master Mattes palette, then tight line your eyes with dark brown eyeliner. Add a peach liner to your waterline for that soft doe-eyed effect.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/552826?noHeader=true" title="Makeup by Mario Master Mattes Palette" />
      <p className={styles.affiliateLink}>CONTAINS: AFFILIATE LINKS</p>

      <p style={paragraphStyle}>
        Lashes: A full, wispy set of falsies suit the doe-eyed style. Try ISOPIA Iso-Gentle Touch Lashes.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/552928?noHeader=true" title="Makeup by Mario Master Mattes Palette" />
      <p className={styles.affiliateLink}>CONTAINS: AFFILIATE LINKS</p>

      <p style={paragraphStyle}>
        Cheeks: Use a peachy blush on the tops of your cheeks to bring warmth and brightness to your face along with a champagne highlight.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/552829?noHeader=true" title="Makeup by Mario Master Mattes Palette" />
      <p className={styles.affiliateLink}>CONTAINS: AFFILIATE LINKS</p>

      <p style={paragraphStyle}>
        Lips: Go for a nude lipliner, slightly overlining for a fuller appearance. Finish with a matte peach lip colour for a natural, yet enhanced look.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/552889?noHeader=true" title="Makeup by Mario Master Mattes Palette" />
      <p className={styles.affiliateLink}>CONTAINS: AFFILIATE LINKS</p>

      <p style={paragraphStyle}>
        Outfit Inspiration: To fully embody the Deer Pretty theme, choose dainty and whimsical styles. Try outfits in earthy and pastel palettes that resonate with the natural and soft aesthetics of a deer. Fabrics like lace and florals are perfect for this look, adding a touch of femininity and grace. Free People is a great store to try.
      </p>

      <div className={styles.imageContainer}>
        <img src={final} alt="Deer Pretty" className={styles.image} />
      </div>

      <p style={paragraphStyle}>
        Want to really showcase your animal inspiration? Fable England has beautiful enamel earrings, necklaces, and embroidered bags featuring fawn designs.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/552834?noHeader=true" title="Makeup by Mario Master Mattes Palette" />
      <p className={styles.affiliateLink}>CONTAINS: AFFILIATE LINKS</p>

      <p style={paragraphStyle}>
        I hope this quiz inspires you to play with these animal-inspired beauty looks. Here’s a mini tutorial as a refresher to get the look and be sure to tag me on your socials if you try out these styles as I’d love to see it!
      </p>

      <img src={signature} alt="Jackie Wyers Signature" className={styles.signatureImage} />
      <Comments website-id={websiteId} pageId={"Deer-Pretty-Results"} />
    </div>
  );

  return (
    <div ref={blogRef}>
      <Card
        title="Deer Pretty"
        description="Beauty // Quiz // Deer Pretty"
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

export default DeerPretty;
