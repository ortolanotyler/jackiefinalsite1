import React, { useRef } from 'react';
import styles from './AnimalPretty.module.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import TextReveal from '../../../Components/TextReveal';

const button = `${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/AnimalQuizResults.jpeg`;

const title = `${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/DeerPrettyTitle.png`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/DeerFinal1.jpg`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;
const final = `${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/Final.JPG`;

const Card = ({ blogContent }) => {
  return (
    <div>
      <div><TextReveal text='WHICH ANIMAL PRETTY R U ? '/></div>
      <div className={styles.card} style={{ maxWidth: '100%', display: 'flex', textAlign: 'left', backgroundColor: 'white', color: 'black', fontFamily: 'GFS Didot, sans-serif' }}>
        <div className={styles.blogContent} style={{ lineHeight: '1.2' }}>{blogContent}</div>
      </div>
    </div>
  );
};

const DeerPretty = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);

  const headingStyle = {
    textAlign: 'center',
    fontSize: '3rem',
    fontWeight: 'normal',
    fontFamily: 'Arapey, serif',
    color: '#333',
    margin: '2em'
  };

  const paragraphStyle = {
    fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', marginTop: '1rem', margin: '1rem', maxWidth: '100%', padding: '1rem',
  };

  const blogContent = (
    <div className={styles.container} style={{ lineHeight: '2.5em', margin: '25rem', marginTop: '10rem' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25vh' }}>
        <a href="/quiz2" style={{ fontFamily: 'Arapey', fontSize: '1.5em', color: 'black', textDecoration: 'none' }}>
          BEAUTY // QUIZ // DEER PRETTY
        </a>
      </div>
      <img src={title} alt="Deer Pretty Title" style={{ width: '100%' }} />
      
      <div
      style = {{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      >
      <SubscribeButton />
      </div>


<p style={paragraphStyle}>
<strong>
      Deer Pretty: Soft and Ethereal 🦌  
(Deer Beauty Tutorial starts at 1:30) 
        </strong>
</p>
    

        <p style={paragraphStyle}>
      You embody the grace and serenity of the
Deer Pretty style. Just like the gentle
features of a deer, your beauty shines
through in soft, subtle ways. With your
preference for neutral and understated
colour palettes, and a personality that
exudes calmness, you align perfectly with
the warm, glowing aesthetics of Deer Pretty.
</p>

      <p style={paragraphStyle}>
      Your makeup style enhances your natural
beauty without overpowering it, reflecting
your elegant and serene disposition.
      </p>


        <p style={paragraphStyle}>
Embrace lace, florals, and pastel outfits that
complement your soft doe-eyed makeup
look for a truly ethereal presence. Read
further for makeup recommendations:
</p>

<div
      style = {{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      >

<img src={image2} alt="Cat Pretty" style={{ width: '50%' }} />


      </div>


      <p style = {paragraphStyle}>
      Celebrity Inspirations:
Jessica Alba, Leighton Meester, Emmy
Russum, Tessa Thompson and Charithra
Chandran rock this look with their big,
round eyes and stunning skin tones.
</p>


<h2 style={headingStyle}
        >
        Achieve the Deer Pretty Look
        </h2>
    
        <p style={paragraphStyle}>
        Eyes: Start with a neutral brown shadow
from the Makeup by Mario Master Mattes
palette, then tight line your eyes with dark
brown eyeliner. Add a peach liner to your
waterline for that soft doe-eyed effect.
        </p>


<ResponsiveIframe src="https://shopmy.us/collections/public/552826?noHeader=true" title="Makeup by Mario Master Mattes Palette" />

<p style={{ textAlign: 'RIGHT', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth: '100%', marginLeft: '0em' }}>
                    CONTAINS: AFFILIATE LINKS
                </p>


<p style={paragraphStyle}>
Lashes: A full, wispy set of falsies suit the
doe-eyed style. Try ISOPIA Iso-Gentle
Touch Lashes.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/552928?noHeader=true" title="Makeup by Mario Master Mattes Palette" />

<p style={{ textAlign: 'RIGHT', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth: '100%', marginLeft: '0em' }}>
                    CONTAINS: AFFILIATE LINKS
                </p>

<p style={paragraphStyle}>
Cheeks: Use a peachy blush on the tops of
your cheeks to bring warmth and
brightness to your face along with a
champagne highlight.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/552829?noHeader=true" title="Makeup by Mario Master Mattes Palette" />

<p style={{ textAlign: 'RIGHT', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth: '100%', marginLeft: '0em' }}>
                    CONTAINS: AFFILIATE LINKS
                </p>

<p style={paragraphStyle}>
Lips: Go for a nude lipliner, slightly over
lining for a fuller appearance. Finish with a
matte peach lip colour for a natural, yet
enhanced look.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/552889?noHeader=true" title="Makeup by Mario Master Mattes Palette" />

<p style={{ textAlign: 'RIGHT', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth: '100%', marginLeft: '0em' }}>
                    CONTAINS: AFFILIATE LINKS
                </p>


<p style={paragraphStyle}>
Outfit Inspiration: To fully embody the
Deer Pretty theme, choose dainty and
whimsical styles. Try outfits in earthy and
pastel palettes that resonate with the
natural and soft aesthetics of a deer. Fabrics
like lace and florals are perfect for this look,
adding a touch of femininity and grace.
Free People is a great store to try.
</p>




                <div
      style = {{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      >

<img src={final} alt="Cat Pretty" style={{ width: '50%' }} />


      </div>

      <p style = {paragraphStyle}>
Want to really showcase your animal
inspiration? Fable England has beautiful
enamel earrings, necklaces, and
embroidered bags featuring fawn designs.

</p>


    <ResponsiveIframe 
      src="https://shopmy.us/collections/public/552834?noHeader=true" 
      title="Makeup by Mario Master Mattes Palette" 
     
    />

<p style={{ textAlign: 'RIGHT', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth: '100%', marginLeft: '0em' }}>
                    CONTAINS: AFFILIATE LINKS
                </p>
    
      <p style={paragraphStyle}>
        I hope this quiz inspires you to play with
        these animal-inspired beauty looks. Here’s a
        mini tutorial as a refresher to get the look
        and be sure to tag me on your socials if you
        try out these styles as I’d love to see it!
      </p>

      <img src={signature} alt="Victoria's Secret Fashion Show 2013" style={{ width: '100%' }} />
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
