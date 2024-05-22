import React, { useRef } from 'react';
import styles from './AnimalPretty.module.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import TextReveal from '../../../Components/TextReveal';

const button = `${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/AnimalQuizResults.jpeg`;
const title = `${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/BunnyTitleResults.png`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/BunnyPretty.JPG`;
const final = `${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/Final.JPG`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

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

const BunnyPretty = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);

  const headingStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 'normal',
    fontFamily: 'Arapey, serif',
    color: '#333',
    margin: '2em'
  };

  const paragraphStyle = {
    fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', marginTop: '1rem', margin: '2.5rem', maxWidth: '100%', padding: '1rem',
  };

  const blogContent = (
    <div className={styles.container} style={{ lineHeight: '2.5em', margin: '20em', marginTop: '25px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25vh' }}>
        <a href="/quiz2" style={{ fontFamily: 'Arapey', fontSize: '1.5em', color: 'black', textDecoration: 'none' }}>
          BEAUTY // QUIZ // BUNNY PRETTY
        </a>
      </div>
      <img src={title} alt="BUNNY PRETTY - QUIZ RESULTS" style={{ width: '100%' }} />
      
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
      Bunny Pretty: Cute and Angelic
(Bunny Beauty Tutorial starts at 3:30)
        </strong>
      </p>
 
      <p style={paragraphStyle}>
      You are the sweet and playful Bunny Pretty,
with a penchant for soft pastels and a
makeup style that’s as cute and angelic as it
is vibrant. Your bubbly personality and love
for social gatherings are perfectly reflected
in the pink hues and glossy finishes of your
makeup, mirroring a bunny's gentle charm.
        </p>


      <p style={paragraphStyle}>
      The soft wash of pink on your lids and the
rosy flush on your cheeks highlight your
youthful and energetic spirit.

      </p>

      <p style={paragraphStyle}>
Embrace flowing fabrics and flirty dresses
in pastel colours that enhance your
adorable Bunny Pretty look, making you the
epitome of sweetness and playfulness. Read
further for makeup recommendations
      </p>

      <div
      style = {{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      >

<img src={image2} alt="Bunny Pretty" style={{ width: '50%' }} />


      </div>

<p style={paragraphStyle}>
Celebrity Inspirations:
Elle Fanning is the epitome of Bunny
Pretty with her angelic presence. Other
stars like Amandla Stenberg and Zendaya
also beautifully pull off this style,
showcasing how versatile and flattering it
can be across different skin tones.
</p>

<h2 style={headingStyle} >
Achieve the Bunny Pretty Look :
</h2>

<p style={paragraphStyle}>  
Eyes: Apply a soft wash of pink over your
lids, adding a touch of shimmer to the brow
bone and inner corners to brighten and
open up the eye area. Charlotte Tilbury
Pillow Talk Eyeshadow Palette is a
beautiful option.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/552851?noHeader=true" title="Makeup by Mario Master Mattes Palette" />
<p style={{ textAlign: 'RIGHT', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth: '100%', marginLeft: '0em' }}>
                    CONTAINS: AFFILIATE LINKS
                </p>

<p style={paragraphStyle}>
Lashes: Curl your lashes for a natural lift,
focusing on the upper lashes only to keep
the look light and fresh. Try ISOPIA Iso-
Gentle Harmony Lashes for extra length.

</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/552853?noHeader=true" title="Makeup by Mario Master Mattes Palette" />
<p style={{ textAlign: 'RIGHT', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth: '100%', marginLeft: '0em' }}>
                    CONTAINS: AFFILIATE LINKS
                </p>

<p style={paragraphStyle}>
Cheeks: Embrace a rosy flush with a
heavier application of blush. Milani Coral
Cove is an excellent choice for a warmer
pink, while Rare Beauty's blush in Happy
suits cooler undertones. Don't be shy with
the blush to achieve that vibrant, youthful
glow.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/552854?noHeader=true" title="Makeup by Mario Master Mattes Palette" />
<p style={{ textAlign: 'RIGHT', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth: '100%', marginLeft: '0em' }}>
                    CONTAINS: AFFILIATE LINKS
                </p>

<p style={paragraphStyle}>

Lips: Start with a nude pink lip liner to
define your lips, then layer on the Sephora
Collection Pink Pout Lipgloss for a glossy,
vibrant finish that complements the blushy
cheeks.  
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/552857?noHeader=true" title="Makeup by Mario Master Mattes Palette" />
<p style={{ textAlign: 'RIGHT', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth: '100%', marginLeft: '0em' }}>
                    CONTAINS: AFFILIATE LINKS
                </p>

<p style={paragraphStyle}>

Outfit Inspiration:
Lean into the Bunny Pretty theme with
soft, flowing fabrics in pinks tones. Try flirty
dresses in pastel colours that enhance the
sweetness of this look. Brands like For
Love & Lemons offer a variety of options
that can perfectly complement the Bunny
Pretty makeup.
</p>

<p style={paragraphStyle}>
Additionally, accessories from Fable
England, such as bunny-themed jewelry,
can add a whimsical touch to complete your
outfit as mentioned in the looks above.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/552860?noHeader=true" title="Makeup by Mario Master Mattes Palette" />
<p style={{ textAlign: 'RIGHT', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth: '100%', marginLeft: '0em' }}>
                    CONTAINS: AFFILIATE LINKS
                </p>

<p style={paragraphStyle}>
I hope this quiz inspires you to play with
these animal-inspired beauty looks. Which
"Type of Pretty" are you leaning towards?
Dive into the quiz on my website and I
hope the full length tutorials on my
channel inspire you to try a new look  <a href = '/tutorials' alt = '' > here</a> !
</p>

<div
      style = {{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      >

<img src={final} alt="Bunny Pretty" style={{ width: '50%' }} />


      </div>

      <img src={signature} alt="Jackie Wyers Signature" style={{ width: '100%' }} />
      <Comments website-id={websiteId} pageId={"Bunny-Pretty-Results"} />
    </div>
  );

  return (
    <div ref={blogRef}>
      <Card
        title="Bunny Pretty"
        description="Beauty // Quiz // Bunny Pretty"
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

export default BunnyPretty;
