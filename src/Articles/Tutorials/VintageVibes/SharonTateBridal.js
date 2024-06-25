import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import '../../ExampleTutorial1.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import SubscribeButton from '../../../Components/SubscribeButton';
import TextReveal from '../../../Components/TextReveal';
import DropCap from '../../../Components/DropCap';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import AdSenseAd from '../../../Advertising/Ads';

const title = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateBridal/SharonBridalTitle.png`;
const Sharon2 = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateBridal/SharonBridalDouble.png`;
const SharonFace = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateBridal/SHARONTATEFILLEDINFACECHART.jpg`;
const Sharon16 = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateBridal/SharonBridalInstagram.png`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;
const sophia = `${process.env.PUBLIC_URL}/Images/Articles/SophiaLoren/SophiaLorenThumbnail.jpeg`;
const teespring = `${process.env.PUBLIC_URL}/Images/teespringbanner.jpeg`;

const Card = ({ blogContent }) => (
  <div>
    <div><TextReveal text='TIME TRAVEL TUTORIALS' /></div>
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);

const SharonTatePost = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);

  const headingStyle = {
    textAlign: 'center',
    fontSize: '30px',
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
        <title>Sharon Tate Bridal Look - Jackie Wyers</title>
        <meta name="description" content="Explore Jackie Wyers' Sharon Tate bridal makeup tutorial, recreating the iconic '60s look with modern products. Follow along for a step-by-step guide." />
      </Helmet>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25vh' }}>
        <a href="/timetraveltutorials" style={{ fontFamily: 'Arapey', fontSize: '1.25em', color: 'black', textDecoration: 'none' }}>
          BEAUTY // TIME TRAVEL TUTORIALS
        </a>
      </div>
      <img src={title} alt="Sharon Tate Bridal Look" style={{ width: '100%' }} />

      <ResponsiveYoutube src="https://www.youtube.com/embed/y0vHs6pRC3Y?si=LJlIhHJgDm0pehAu" title="Sharon Tate Iconic 60's Bridal Makeup Tutorial" />

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <SubscribeButton />
      </div>

      <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
        All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
      </p>

      <DropCap text="Welcome back to Time Travel Tutorials - the series where we embrace the vintage vibes from the beauties of the past. In this edition, we're shining the spotlight on the stunning Sharon Tate. Renowned as an American actress and model, Tate left a lasting impression with her role in 'Valley of the Dolls' (1967). Hailed as Hollywood's most promising starlet of her time, Sharon's distinctive makeup, hair, and fashion sense continue to captivate and inspire women to this day." />
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <p style={paragraphStyle}>
        Today, we'll delve into her unique and playful bridal style, which embodies a vintage charm while remaining wonderfully contemporary for today's brides!
      </p>

      <a href="https://www.instagram.com/reel/C2f93WyOC0j/?hl=en" target="_blank" rel="noopener noreferrer">
        <img src={Sharon2} alt="Jackie Wyers Instagrammed Sharon Inspired Look" style={{ width: '100%' }} />
      </a>

      <h2 style={headingStyle}>The Essentials of Sharon Tate's Makeup Style</h2>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={SharonFace} alt="Sharon Tate 60s Makeup" style={{ width: '100%' }} />
      </div>

      <p style={paragraphStyle}>
        Sharon Tate's makeup style, characterized by her striking deep-set eyes and an exaggerated, graphic crease, is a hallmark of the 60s beauty. Her lashes, often lengthened with falsies, added to her captivating doe-eyed appearance. Her bohemian flair, complemented by a sun-kissed, Californian glow, deepened with bronzer, set her apart. Vintage photos of Sharon feel more 1970s as she was ahead of the fashion curve.
      </p>

      <h2 style={headingStyle}>Preparation and Base Makeup</h2>
      <p style={paragraphStyle}>
        Start with a well-moisturized face. Use a foundation that offers a natural, radiant finish. Sharon's look is all about a flawless but not overly matte complexion. A foundation like Charlotte Tilbury’s Light Wonder provides the perfect canvas.
      </p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <ResponsiveIframe src="https://shopmy.us/collections/public/490583?noHeader=true" title="Foundation Choices" />

      <h2 style={headingStyle}>Eyes, The Focal Point</h2>
      <p style={paragraphStyle}>
        For the eyes, begin with a hydrating eye cream to ensure the area is well-prepped for makeup. Sharon's look focuses on a graphic crease, without being overpowering. Use a light matte eyeshadow as a base, preferably with a slight pink undertone, to emulate the soft glam of the 60s. Adding depth to the crease with matte taupe shades creates the illusion of deeper-set eyes, a signature element in Tate’s style. Sharon’s eye makeup isn’t complete without eyeliner. Choose a grey shade for a softer look than black. Create a half-moon shape that extends above your inner crease, dipping down to meet your natural eye crease and fade downwards. This shape is quintessentially Sharon!
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/490599?noHeader=true" title="Eye Makeup Essentials" />

      <h2 style={headingStyle}>Lashes and Brows</h2>
      <p style={paragraphStyle}>
        Opt for false lashes that start from the mid-eye to the outer corner, creating a lifted, open-eye effect. Keep the brows natural and well-groomed, defining the upper part of the brow upwards.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/490744?noHeader=true" title="Lashes and Brows Products" />
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>Face Sculpting and Highlighting</h2>
      <p style={paragraphStyle}>
        Use a light hand to sculpt and contour the face, focusing on the cheekbones, jawline, and hairline. Sharon's look isn't about sharp contours but gentle, sun-kissed definition. Highlight the high points of your face with a soft, luminous highlighter.
      </p>

      <h2 style={headingStyle}>Lips, Subtle and Chic</h2>
      <p style={paragraphStyle}>
        Finish the look with a nude lip color, something that enhances your natural lip shade. A light application of a nude lipstick, followed by a non-sticky lip balm or gloss, will give you the perfect bridal pout.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/490800?noHeader=true" title="Nude Lips Products" />

      <h2 style={headingStyle}>Sharon Tate Wedding Dress and More</h2>
      <p style={paragraphStyle}>
        Sharon Tate's bridal makeup, an exquisite blend of 60s glamour and sun-kissed beauty, is a perfect tribute to her style. Her iconic Babydoll Wedding Dress, modern for its time, remains a fashionable choice. Explore our curated collection of Sharon Tate wedding dress replicas and similar styles below!
      </p>

      <a href="https://www.instagram.com/p/CnTKGRGuAhJ/?hl=en" target="_blank" rel="noopener noreferrer">
        <img src={Sharon16} alt="Sharon Tate Wedding Dress" style={{ width: '100%' }} />
      </a>

      <ResponsiveIframe src="https://shopmy.us/collections/public/492227?noHeader=true" title="Wedding Dress Collection" />
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>Discover More Vintage-Inspired Looks</h2>
      <p style={paragraphStyle}>
        Discover more vintage-inspired bridal looks and time travel tutorials here on jackiewyers.beauty & follow on IG @ <a href="https://www.instagram.com/jackiewyers/?hl=en" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>Jackiewyers</a> for short form tutorials.
      </p>

      <p style={paragraphStyle}>   
        Thank you for reading and if you want to be featured on my site, try out this look and please tag me as I’d love to share your rendition on my socials! I love to see you switch up your style with confidence.
      </p>

      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <a href="/sophialoren" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={sophia} alt="Sophia Loren" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', display: 'block' }} />
          MORE VINTAGE VIBES →
        </a>
      </div>
      <div style={{ textAlign: 'center' }}>
        <a href="/vintagevibesmerch" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={teespring} alt="Vintage Vibes Merch" style={{ width: '100%', maxWidth: '1400px', display: 'block' }} />
          SHOP VINTAGE VIBES MERCH →
        </a>
      </div>

      <div style={{ textAlign: 'center' }}>
        <img src={signature} alt="Signature of Jackie Wyers" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <Comments website-id={websiteId} page-id={'Sharon-Tate-Post'} />
    </div>
  );

  return (
    <div ref={blogRef}>
      <Card blogContent={blogContent} />
    </div>
  );
};

export default SharonTatePost;
