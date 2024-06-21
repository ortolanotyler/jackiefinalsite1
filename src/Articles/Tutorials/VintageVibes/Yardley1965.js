import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Comments } from '@hyvor/hyvor-talk-react';
import '../../ExampleTutorial1.css';
import TextReveal from '../../../Components/TextReveal';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import DropCap from '../../../Components/DropCap';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import AdSenseAd from '../../../Advertising/Ads';

const title = `${process.env.PUBLIC_URL}/Images/Articles/JeanShrimpton/ShrimptonTitle.png`;
const image1 = `${process.env.PUBLIC_URL}/Images/Articles/JeanShrimpton/ShrimptonDouble.png`;
const face = `${process.env.PUBLIC_URL}/Images/Articles/JeanShrimpton/JeanShrimpton60sFaceChart.png`;
const image3 = `${process.env.PUBLIC_URL}/Images/Articles/JeanShrimpton/JackiesPinterestBoard.jpg`;
const ad = `${process.env.PUBLIC_URL}/Images/Articles/JeanShrimpton/ShrimptonAd.jpg`;
const image5 = `${process.env.PUBLIC_URL}/Images/Articles/JeanShrimpton/VintageCollection.png`;
const image6 = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateBridal/SHARONTATEBRIDAL.JPEG`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;
const teespring = `${process.env.PUBLIC_URL}/Images/teespringbanner.jpeg`;

const Card = ({ blogContent }) => (
  <div>
    <div><TextReveal text='TIME TRAVEL TUTORIALS' /></div>
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);

const Yardley65 = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);

  const headingStyle = {
    textAlign: 'center',
    fontSize: '40px',
    fontWeight: 'normal',
    fontFamily: 'Arapey, serif',
    color: '#333',
    margin: '1.5rem'
  };

  const paragraphStyle = {
    fontSize: '22px',
    fontFamily: 'GFS Didot, serif',
    margin: '1rem 1.5rem',
    marginTop: '1rem',
    marginBottom: '1rem',
    maxWidth: '500px',
    lineHeight: '1.75',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const blogContent = (
    <div className="container">
      <Helmet>
        <title>Jean Shrimpton - Yardley 1965 Makeup Tutorial - Jackie Wyers</title>
        <meta name="description" content="Follow Jackie Wyers as she recreates the iconic Jean Shrimpton Yardley 1965 makeup look with detailed tutorials and vintage vibes." />
      </Helmet>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25vh' }}>
        <a href="/timetraveltutorials" style={{ fontFamily: 'Arapey', fontSize: '1.25em', color: 'black', textDecoration: 'none' }}>
          BEAUTY // TIME TRAVEL TUTORIALS
        </a>
      </div>
      <img src={title} alt="Jean Shrimpton - Time Travel Tutorials" style={{ width: '100%' }} />

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <SubscribeButton />
      </div>

      <ResponsiveYoutube src="https://www.youtube.com/embed/OrlZinEp4AI?si=pn69Z9dtya3RuV2G" title="Jean Shrimpton Makeup Tutorial - Yardley 1965" />

      <div>
        <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
          All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
        </p>
      </div>

      <DropCap text="Welcome back to the blog, fellow vintage beauty enthusiasts! We have another Time Travel Tutorials today, and we are covering the iconic Jean Shrimpton - dubbed “The Shrimp” & face of the 1960s. Jean Shrimpton, an English model and actress, was not just a prominent figure in the fashion world but also a symbol of the Swinging Sixties. Known for her striking beauty, long legs, and big eyes, Shrimpton graced the covers of leading fashion magazines, becoming one of the world's first supermodels." />
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>The Inspiration: Oh! De London by Yardley</h2>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <a href="https://www.instagram.com/reel/CNyCIQkBUOK/?hl=en" target="_blank" rel="noopener noreferrer">
          <img src={image1} alt="Jean Shrimpton Look" style={{ width: '100%', maxWidth: '650px' }} />
        </a>
      </div>
      <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
        Original Makeup & Hair Design by Fae Hammond from the 2005 film 'Pride and Prejudice,' recreation by Jackie Wyers.
      </p>

      <p style={paragraphStyle}>
        Let's delve into the inspiration which begins with an homage to the iconic Yardley London Oh! De London Cologne advertisement from 1965. The Yardley ads of the '60s are renowned for their vivid colours, striking lines, and whimsical charm, embodying the essence of the influential pop art movement of the era. These ads captivated audiences with their trendy MOD style.
      </p>

      <p style={paragraphStyle}>
        Luckily, I was able to find the fragrance, and although it has aged, the scent retains a powdery whisper from the past. I surrounded myself with its aroma to immerse myself fully in the spirit of the era, making it the ideal muse for this makeup transformation.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <a href="https://www.pinterest.ca/jackiewyers/vintage-vibes-makeup-hair-inspiration/" target="_blank" rel="noopener noreferrer">
          <img src={face} alt="Jean Shrimpton Face Chart" style={{ width: '100%', maxWidth: '650px' }} />
        </a>
      </div>

      <h2 style={headingStyle}>Youthful Base & Matte Finish Foundation</h2>

      <p style={paragraphStyle}>
        I began with the application of faux bangs and extensions, setting the stage for a transformative look. For the base makeup, I chose a radiant primer to minimize pores and prepare my skin for the foundation—a natural velvet matte finish foundation that evokes the era's flawless complexion, paired with a yellow-based concealer to brighten and balance the skin tone.
      </p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>Sculpting the Features</h2>

      <p style={paragraphStyle}>
        To achieve the iconic '60s facial contours, I added a bit of nose contouring magic, connecting my brows to my nose with two little lines and defining the bridge to mimic the supermodel. Skin is further complemented by a soft, cream blush in a coral shade to the cheeks, bringing life and colour to the look.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/524886?noHeader=true" title="Shop My Victoria's Secret Favorites" />

      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5rem' }}>
        CONTAINS: AFFILIATE LINKS
      </p>

      <h2 style={headingStyle}>Eyes That Speak Volumes</h2>

      <p style={paragraphStyle}>
        The eyes are the centrepiece of this '60s inspired look. I opted for an easy, to achieve method using a creamy eyeliner to sketch a higher crease in a half-moon shape. A deeper brown eyeshadow also works perfect for this step. Then blend with a peach shadow in the inner crease for a soft yet defined eye contour. There are warm pops of peach and coral throughout this style, so this creates a harmonious look.
      </p>

      <p style={paragraphStyle}>
        A pop of silvery white on the lid, complemented by dramatic Twiggy-inspired liner and lashes, brought the look together, capturing the essence of the decade.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/524889?noHeader=true" title="Shop My Victoria's Secret Favorites" />

      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>
        CONTAINS: AFFILIATE LINKS
      </p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>Lips and Final Touches</h2>

      <p style={paragraphStyle}>
        For the lips, I chose a peachy gloss to keep things light and springy, outlined with a lip liner to define the shape using Charlotte Tilbury’s Lip Cheat Lip Liner in Supersize Me.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/524891?noHeader=true" title="Shop My Victoria's Secret Favorites" />

      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5rem' }}>
        CONTAINS: AFFILIATE LINKS
      </p>

      <p style={paragraphStyle}>
        The finishing touch was a highlighter to accentuate the high points of the face, adding a modern twist to the vintage look. Charlotte Tilbury’s Beauty Light Wand in Peachgasm was perfect for this!
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/524892?noHeader=true" title="Shop My Victoria's Secret Favorites" />

      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5rem' }}>
        CONTAINS: AFFILIATE LINKS
      </p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>The Hair: An Epic Updo Challenge</h2>

      <p style={paragraphStyle}>
        No '60s look would be complete without an iconic hairstyle. I challenged myself to creating an ambitious updo, utilizing extensions to achieve the volume and structure characteristic of the era. By pinning loops to craft a voluminous bun, I emulated the vintage style, adorning it with flowers and bows that were true to the period.
      </p>

      <p style={paragraphStyle}>
        The flower accessories, to my delight, resemble paper! I sourced some paper flowers and handcrafted a few bows, embellishing them with pearls to render the floral portrait as authentic as possible. Incidentally, I stumbled upon a book on crafting paper flowers, which I've linked above—could this be a new hobby for spring?
      </p>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={ad} alt="Jean Shrimpton Ad" style={{ width: '100%', maxWidth: '650px' }} />
      </div>

      <h2 style={headingStyle}>A Vintage Collection to Adore</h2>

      <p style={paragraphStyle}>
        As a lover of all things vintage, I couldn't resist sharing a glimpse into my Yardley vintage collection that I hope to continue to collect. The packaging alone transports us back in time and I’m BEGGING Yardley to do a throwback collection. Their soaps you can still buy today are lovely though! Creating this look was a delightful challenge, blending my love for vintage aesthetics with the thrill of using thrifting '60s makeup products. I hope this tutorial inspires you to explore the beauty of past decades and perhaps go on your own vintage beauty adventure.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={image5} alt="Vintage Collection" style={{ width: '100%', maxWidth: '650px' }} />
      </div>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <p style={paragraphStyle}>
        If you have any vintage icons you'd like me to cover in future posts, don't hesitate to leave a comment below. And remember, the beauty of vintage is not just in the look—it's in the stories we tell and the history we keep alive. If you enjoyed this look, you may love Sharon Tate's unique blend of bohemian and mod aesthetics. I’ve also covered her coquette bridal style, <a href="/sharontatebridal" style={{ color: 'black' }} target="_blank" rel="noopener noreferrer">here</a>.
      </p>

      <p style={paragraphStyle}>
        Thank you for reading and if you want to be featured on my site, try out this look and please tag me as I’d love to see it and share your rendition! I love to see you switch up your style with confidence.
      </p>

      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <a href="/sharontatebridal" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={image6} alt="Margot Robbie - Barbie Movie" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', display: 'block' }} />
          MORE VINTAGE VIBES →
        </a>
      </div>
      <div style={{ textAlign: 'center' }}>
        <a href="/vintagevibesmerch" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={teespring} alt="Margot Robbie - Barbie Movie" style={{ width: '100%', maxWidth: '1400px', display: 'block' }} />
          SHOP VINTAGE VIBES MERCH →
        </a>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={signature} alt="Jackie Wyers Signature" style={{ width: '100%', maxWidth: '650px' }} />
      </div>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <Comments website-id={websiteId} page-id={"Yardlizz-65fizz"} />
    </div>
  );

  return (
    <div ref={blogRef}>
      <Card blogContent={blogContent} />
    </div>
  );
};

export default Yardley65;
