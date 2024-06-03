import React, { useRef } from 'react';
import '../../ExampleTutorial1.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import SubscribeButton from '../../../Components/SubscribeButton';
import DropCap from '../../../Components/DropCap';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import TextReveal from '../../../Components/TextReveal';

const title = `${process.env.PUBLIC_URL}/Images/Articles/LatteMakeup/LatteTitle.png`;
const Latte2 = `${process.env.PUBLIC_URL}/Images/Articles/LatteMakeup/LatteDouble.png`;
const Latte3 = `${process.env.PUBLIC_URL}/Images/Articles/LatteMakeup/LatteLookFaceChartFilledIn.jpg`;
const Latte16 = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;
const sugar = `${process.env.PUBLIC_URL}/Images/Articles/SugarPlumFairy/SUGARPLUMTHUMBNAIL.jpeg`;

const Card = ({ blogContent }) => (
  <div>
    <div><TextReveal text='LATTÉ ANYONE?' /></div>
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);

const LatteMakeupBlogPost = () => {
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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25vh' }}>
        <a href="/trends" style={{ fontFamily: 'Arapey', fontSize: '1.25em', color: 'black', textDecoration: 'none' }}>
          BEAUTY // TRENDS
        </a>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={title} alt="Latte Makeup Trend" style={{ width: '100%', maxWidth: '650px' }} />
      </div>

      <ResponsiveYoutube src="https://www.youtube.com/embed/Jm0BdU88kr4?si=q_f9U-l_aZqaY83s" title="YouTube video player" />

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <SubscribeButton />
      </div>

      <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
        All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
      </p>

      <DropCap text="Hello, beauties! It's Jackie here with another trend report driven by the TikTok algorithm. The latte makeup look is all about embracing warm, tawny tones to create a '90s-inspired glam with a cozy vibe. Imagine a caramel-toned smokey eye, no foundation, faux freckles, and a milky lip. An artist whose work has been continuously referenced when creating this style of makeup is none other than Australia-based makeup artist Tanielle Jai. If you've ever shopped on Princess Polly and admired the campaign images with sultry, smokey makeup—that's all the makeup artisty of Tanielle Jai!" />

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a href="https://www.instagram.com/p/CvFsHXNO7nf/?img_index=1" target="_blank" rel="noopener noreferrer">
          <img src={Latte2} alt='Detailed Latte Makeup' style={{ width: '100%', maxWidth: '650px' }} />
        </a>
      </div>

      <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
        See <a href="https://www.instagram.com/taniellejaimua/?hl=en" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>Tanielle Jai</a>'s work on Instagram.
      </p>

      <h2 style={headingStyle}>Get The Latte Makeup Look</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={Latte3} alt='Latte Makeup Application' style={{ width: '100%', maxWidth: '650px' }} />
      </div>
      <h2 style={headingStyle}>The Base: Tanned and Natural</h2>
      <p style={paragraphStyle}>
        Applying self-tanner the night before can really help create a harmonious, warm canvas. Make sure you’ve moisturized the skin before makeup, and we are going with no foundation for this style, but I gave my skin a boost with Charlotte Tilbury Hollywood Flawless Filter for a sheer glow with a hint of coverage.
      </p>
      <h2 style={headingStyle}>Highlight and Contour</h2>
      <p style={paragraphStyle}>
        My favorite palette for warming up the skin and highlighting is the Make Up For Ever HD Skin sculpting palette. These shades are sheer, so again the base won’t appear too heavy. While the foundation is natural, this style of makeup does call for contour and highlight!
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/493598?noHeader=true" title="Highlight and Contour Products" />

      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5em', maxWidth: '100%', marginLeft: '0em' }}>
        CONTAINS: AFFILIATE LINKS
      </p>

      <h2 style={headingStyle}>Yellow Based Bronzer</h2>
      <p style={paragraphStyle}>
        Unlike the typical warm, red-toned bronzers, this look calls for a yellow-based bronzer to add warmth to the skin and complement the caramel-toned eyeshadows coming up.
      </p>
      <p style={paragraphStyle}>
        Benefit Cosmetics Hoola Caramel is a great pick if you are fair-medium in skin tone. You can rock this look no matter your complexion, but it will suit warmer coloring best. <a href="https://www.youtube.com/watch?v=okXpvzknH9w&t=555s" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>See the espresso look for cool-toned skin</a>!
      </p>
      <p style={paragraphStyle}>
        Apply the bronzer over the top of the subtle contouring to amp up the tanned goddess effect!
      </p>

      <h2 style={headingStyle}>Eye Makeup: Bronzed and Smoky</h2>
      <p style={paragraphStyle}>
        For the eyes, continue to use the Hoola Bronzer in Caramel into the crease and under the lash line for a soft smokey effect.
      </p>
      <p style={paragraphStyle}>
        Next, add a brown liner pencil to rim the lash line and softly fade into the crease. The ColourPop lipliner I used called BFF 3 is really creamy and easy to blend for this step, plus it is lighter than most traditional eyeliners on the market, making it appear softer. Make sure you're not using the eyeliner on the lips and eyes and sanitize between uses if you do opt for a lipliner on the eyes!
      </p>
      <p style={paragraphStyle}>
        Continue by picking a palette that has warm matte and shimmer tones like ONE/SIZE BY PATRICK STARRR | Visionary Eyeshadow Palette to deepen up the outer corner of the eye and add a bronzer shimmer to the lid to pick up the light.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/493604?noHeader=true" title="Eye Makeup Products" />

      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5em', maxWidth: '100%', marginLeft: '0em' }}>
        CONTAINS: AFFILIATE LINKS
      </p>

      <h2 style={headingStyle}>Brows</h2>
      <p style={paragraphStyle}>
        Inspired by Tanielle Jai’s work, her models typically rock very bold, Brooke Shields-esque brows. Fill your brows in with natural strokes and set in place with a brow gel. I went REALLY bold, so feel free to tone the brow down to suit your preferences!
      </p>
      <p style={paragraphStyle}>
        Using a liquid liner, create more drama on the lash line and use this same liner to add beauty marks or faux freckles. This is a Tanielle Jai signature step that is super fun to try out. Pop on an outer corner lash, and the eyes are complete!
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/493609?noHeader=true" title="Brow Products" />

      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5em', maxWidth: '100%', marginLeft: '0em' }}>
        CONTAINS: AFFILIATE LINKS
      </p>

      <h2 style={headingStyle}>Lips & Finishing Touches</h2>
      <p style={paragraphStyle}>
        For the lips, over-line them with a medium-toned caramel brown shade, and blur out again for no harsh lines. Add a lip plumper for a fuller look in a milky pink or nude shade.
      </p>
      <p style={paragraphStyle}>
        The finishing touch to bring this glamorous look all together is to use a golden highlighter on the cheeks, chin, nose, and even collarbones for a radiant glow. Paired with gold jewelry and a simple white top, the makeup truly embraced the Golden Goddess aesthetic with the new trending title of “Latte Makeup.”
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/493611?noHeader=true" title="Lips & Finishing Touches Products" />

      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5em', maxWidth: '100%', marginLeft: '0em' }}>
        CONTAINS: AFFILIATE LINKS
      </p>

      <p style={paragraphStyle}>
        Want to be featured on my site? Tag me in your recreation or version of this look on Insta <a href="https://www.instagram.com/jackiewyers/?hl=en" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}><strong>@jackiewyers</strong></a>. I’d love to see you switch up your style with confidence!
      </p>

      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <a href="/sugarplumfairy" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={sugar} alt="More Beauty Trends" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', display: 'block' }} />
          MORE BEAUTY TRENDS →
        </a>
      </div>

      <div style={{ textAlign: 'center' }}>
        <img src={Latte16} alt='Signature' style={{ width: '100%', maxWidth: '650px' }} />
      </div>

      <Comments website-id={websiteId} page-id="latte" />
    </div>
  );

  return (
    <div ref={blogRef}>
      <Card blogContent={blogContent} />
    </div>
  );
};

export default LatteMakeupBlogPost;
