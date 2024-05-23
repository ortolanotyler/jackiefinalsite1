import React, { useRef } from 'react';
import styles from './AnimalPretty.module.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import TextReveal from '../../../Components/TextReveal';

const button = `${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/AnimalQuizResults.jpeg`;

const title = `${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/CatPrettyTitle.png`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/FinalCat.jpg`;
const final = `${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/Final.JPG`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => {
  return (
    <div>
   
      <div className={styles.card} style={{ maxWidth: '100%', display: 'flex', textAlign: 'left', backgroundColor: 'white', color: 'black', fontFamily: 'GFS Didot, sans-serif' }}>
        <div className={styles.blogContent} style={{ lineHeight: '1.2' }}>{blogContent}</div>
      </div>
    </div>
  );
};

const CatPretty = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);

  const headingStyle = {
    textAlign: 'center',
    fontSize: '3rem',
    fontWeight: 'normal',
    fontFamily: 'Arapey, serif',
    color: '#333',
    margin: '2rem'
  };

  const paragraphStyle = {
    fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '2.5rem', maxWidth: '100%'
  };

  const blogContent = (
    <div className={styles.container} style={{ lineHeight: '2.5em', margin: '20em', marginTop: '25px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25vh' }}>
        <a href="/quiz2" style={{ fontFamily: 'Arapey', fontSize: '1.5em', color: 'black', textDecoration: 'none' }}>
          BEAUTY // QUIZ // CAT PRETTY
        </a>
      </div>
      <img src={title} alt="CAT PRETTY - QUIZ RESULTS" style={{ width: '100%' }} />
      
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
   
      You are the epitome of the Cat Pretty style
—bold, confident, and assertive. Your love
for dramatic makeup and high-contrast
colour palettes mirrors the sharp, angular
features of a nocturnal feline. Your makeup
is precise and impactful, enhancing your
naturally striking features.
</p>

<p style={paragraphStyle}>

Your personality, too, commands attention
and respect, much like the mysterious
allure of a cat.
</p>

<p style={paragraphStyle}>

Embrace your inner feline with sleek, fitted
fashion and statement pieces that highlight
your bold and intense beauty style.
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
Examples include Bella Hadid and Megan
Fox. For deeper skin tones, think Rihanna,
with those light green, cat-like eyes, and
Zoe Kravitz, with her sharp, kitty-like
features. We'll explore warmer smokey eyes
in the “Fox Pretty” look and keep it cool
toned for this fierce style.
</p>

<h2 style={headingStyle}>
    Achieve the Cat Pretty Look
</h2>

<p style={paragraphStyle}>
Eyes: Sweep cool-toned shimmers, like
silver and white, across your lids and
deepen up with taupe in the crease.
Victoria Beckham Beauty Smoky Eye
Brick in Tuxedo is the perfect palette.
Draw a bold, winged eyeliner that extends
beyond the outer corners to enhance the
cat-eye illusion and enhance the outer
corner with a black shadow.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/552837?noHeader=true" title="Makeup by Mario Master Mattes Palette" />

<p style={{ textAlign: 'RIGHT', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth: '100%', marginLeft: '0em' }}>
                    CONTAINS: AFFILIATE LINKS
                </p>

<p style={paragraphStyle}>
Lashes: Go for dramatic, fanned-out lashes
that complement the bold liner, amplifying
the overall eye makeup. Try ISOPIA Iso-
Gentle Echo Lashes.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/552911?noHeader=true" title="Makeup by Mario Master Mattes Palette" />

<p style={{ textAlign: 'RIGHT', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth: '100%', marginLeft: '0em' }}>
                    CONTAINS: AFFILIATE LINKS
                </p>

<p style={paragraphStyle}>
Cheeks: Sculpt your cheeks with a cooltoned
contour powder to add depth and
enhance your natural bone structure,
mimicking the chiseled look typical of a
sleek feline.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/552914?noHeader=true" title="Makeup by Mario Master Mattes Palette" />

<p style={{ textAlign: 'RIGHT', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth: '100%', marginLeft: '0em' }}>
                    CONTAINS: AFFILIATE LINKS
                </p>

<p style={paragraphStyle}>
Lips: Select deep mauve tones for a
seductively pouty effect or go for a nude lip
combo. A high-shine gloss can add
dimension and a touch of glamour.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/552839?noHeader=true" title="Makeup by Mario Master Mattes Palette" />

<p style={{ textAlign: 'RIGHT', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth: '100%', marginLeft: '0em' }}>
                    CONTAINS: AFFILIATE LINKS
                </p>

<p style={paragraphStyle}>
Outfit Inspiration: Channel '90s off-duty
supermodel vibes with structured yet casual
elements. Think fitted black tanks paired
with low-waisted baggy jeans. Explore
Revolve for trendy, contemporary pieces
and local thrift stores for genuine '90s gems
like sleek sunglasses.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/552842?noHeader=true" title="Makeup by Mario Master Mattes Palette" />
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

<img src={final} alt="Cat Pretty" style={{ width: '50%' }} />


      </div>

      <img src={signature} alt="Jackie Wyers Signature" style={{ width: '100%' }} />
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
            <Comments website-id={websiteId} pageId={"Cat-Pretty-Results"} />

    </div>
  );
};

export default CatPretty;
