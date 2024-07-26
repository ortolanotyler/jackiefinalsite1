import React, { useRef } from 'react';
import '../../ExampleTutorial1.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import DropCap from '../../../Components/DropCap';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import TextReveal from '../../../Components/TextReveal';
import AdSenseAd from '../../../Advertising/Ads';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';

const title = `${process.env.PUBLIC_URL}/Images/Articles/BridalMakeup/BridalTitle.png`;
const image1 = `${process.env.PUBLIC_URL}/Images/Articles/BridalMakeup/Bridal1.png`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/BridalMakeup/BridalMakeup2.png`;
const image3 = `${process.env.PUBLIC_URL}/Images/Articles/BridalMakeup/Bridal3.png`;

const sharon = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateBridal/SHARONTATEBRIDAL.jpeg`;

const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
  <div>
    <div><TextReveal text='BRIDAL' /></div>
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);

const BridalMakeup = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);

  const headingStyle = {
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: 'normal',
    fontFamily: 'Arapey, serif',
    color: '#333',
    margin: '2.5rem 0'
  };

  const paragraphStyle = {
    fontSize: '22px',
    fontFamily: 'GFS Didot, serif',
    margin: '1rem 1.5rem',
    maxWidth: '700px',
    lineHeight: '1.75',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const blogContent = (
    <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
      <div style={{ margin: '5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vh' }}>
        <a href="/trends" style={{ fontFamily: 'Arapey', fontSize: '1rem', color: 'black', textDecoration: 'none' }}>
          BEAUTY // TRENDS
        </a>
      </div>
      <img src={title} alt="Bridesmaids Title" style={{ width: '100%' }} />
      <ResponsiveYoutube src="https://www.youtube.com/embed/UQU9Fufug4M?si=5b2wn8qqbcRo1GVG" title="YouTube video player" />
      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <SubscribeButton />
      </div>
      <div>
        <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '20px', maxWidth: '100%', fontStyle: 'italic' }}>
          All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
        </p>
      </div>
      <DropCap text="I recently had a fabulous time trying on wedding dresses at Natalie Rose Bridal, and I took the opportunity to attempt a makeup trial to see how everything would look and feel in videos and photos. In this post, I’ll break down the products used and share my thoughts on what worked and what I might tweak for the big day." />
      <div style={{ margin: '20px' }}>
        <AdSenseAd />
      </div>
      <p style={paragraphStyle}>Let’s dive into the makeup details and some essential bridal makeup tips.</p>
      <a href="https://www.instagram.com/p/C8R4Qmyuq6n/?img_index=1" target="_blank" rel="noopener noreferrer">
        <div>
          <img src={image1} alt="Signature" style={{ width: '100%' }} />
        </div>
      </a>
      <p style={headingStyle}>A Venue-Inspired Look</p>
      <p style={paragraphStyle}>
        Since my venue for the day was Natalie Rose Bridal boutique, I embraced its enchanting fairytale ambiance when selecting products. The whimsical stone chimney, pink wainscoting, and dusty rose velvet curtains set the perfect scene for a princess-inspired makeup and hairstyle. I started with the Rare Beauty Soft Pinch Luminous Powder Blush in the shade Happy, carefully selecting other products to complement the glowing pink cheek colour.
      </p>
      <div>
        <img src={image2} alt="Signature" style={{ width: '100%' }} />
      </div>
      <h2 style={headingStyle}>Product Breakdown and Bridal Makeup Tips</h2>
      <p style={paragraphStyle}><strong>Skin Prep:</strong> It's crucial! Start prepping your skin well ahead of the big day. Stay hydrated and ensure you're well-rested. For a pre-makeup boost, Valmont's Prime Renewing Pack works wonders as an overnight mask and a pre-foundation moisturizer for a flawless application. I usually skip primer, finding that well-moisturized skin and eye cream keep my makeup in place perfectly.</p>
      <ResponsiveIframe src="https://shopmy.us/collections/public/635855?noHeader=true" title="Shop My Victoria's Secret Favorites" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>CONTAINS: AFFILIATE LINKS</p>
      <p style={paragraphStyle}><strong>Foundation:</strong> My favourite summer foundation is the Charlotte Tilbury Beautiful Skin Foundation for photo-ready coverage. I've tested it extensively and know it performs well in the heat. Alternatively, for those seeking more coverage, Giorgio Armani’s Luminous Silk Foundation is excellent—just make sure to test any foundation well before your wedding day and blend into the hairline, neck and even ears.</p>
      <div style={{ margin: '20px' }}>
        <AdSenseAd />
      </div>
      <p style={paragraphStyle}><strong>Highlight and Contour:</strong> I used medium coverage for the foundation and opted for higher coverage with Yensa's Super Serum Silk Concealer to cancel out any darkness under the eyes. Mario’s Sculpting Stick was my choice for contouring, applied sparingly to avoid harsh lines. It’s much easier to build products up than to sheer them out after! If you are a DIY bride, take your time!</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/635858?noHeader=true" title="Shop My Victoria's Secret Favorites" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>CONTAINS: AFFILIATE LINKS</p>
      
 
      <p style={paragraphStyle}><strong>Blushing Bride Cheeks:</strong> I chose the Rare Beauty Luminous Blushes for their buildable, light-catching qualities. This was the real focal point of the look, and whenever I wear this blush, I get asked what product I have on. It really gives a gorgeous glow! I also added a touch of Charlotte Tilbury's Spotlight Highlight on the tops of the cheekbones and very minimally on the nose tip and bridge to complete the contoured illusion by picking up the light, creating a touch more dimension.</p>
      <ResponsiveIframe src="https://shopmy.us/collections/public/635859?noHeader=true" title="Shop My Victoria's Secret Favorites" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>CONTAINS: AFFILIATE LINKS</p>

      <p style={paragraphStyle}><strong>Brows:</strong> Keeping to my natural shape, I added a few strokes to fill them out with the Florasis Luodai Eyebrow Pencil, setting everything with a 24-hour brow setter by Benefit. My brow muse is always Brooke Shields so I kept them full and natural looking.</p>
          
      <ResponsiveIframe src="https://shopmy.us/collections/public/635861?noHeader=true" title="Shop My Victoria's Secret Favorites" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>CONTAINS: AFFILIATE LINKS</p>
     
     
     
     

      <p style={paragraphStyle}><strong>A Nostalgic Eye Palette:</strong> For eyes, I chose neutral tones to add definition from the Cinderella and MAC Collection—a nostalgic nod to one of my earliest makeup favourites when I just started my YouTube channel. I was thrilled when MAC rereleased the iconic collection this year and sent me the collection!</p>
     
      <p style={paragraphStyle}><strong>Go Waterproof:</strong> For the final touch on the eyes, I added a bit of black eyeliner to my inner corners and tight line, along with black liquid liner for a small wing. While I opted not to use waterproof liners—since I don't usually have issues with smudging—I always recommend waterproof mascara. It's an absolute must, especially for those teary eyed moments that might just catch you off guard on your big day!</p>

     
      <ResponsiveIframe src="https://shopmy.us/collections/public/635862?noHeader=true" title="Shop My Victoria's Secret Favorites" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>CONTAINS: AFFILIATE LINKS</p>
      

      <p style={paragraphStyle}><strong>Lashes & Lips:</strong> Falsies can really complete a bridal look! Velour has great soft, effortless lashes and duo glue is my favorite for long wear. A more affordable option that preforms just as well are Isopia lashes, a new favourite of mine that you can order on Amazon for convenience.</p>
      <div style={{ margin: '20px' }}>
        <AdSenseAd />
      </div>
     
      <p style={paragraphStyle}>As for lips, this was one area I'd adjust from my trial. The lip liner I chose, Makeup Forever Anywhere Caffeine, felt too rosy as it began to wear for this look. In close-up photos in this article, I added some of the Charlotte Tilbury’s Iconic Nude to the lip combo, which I preferred for its cooler, deeper tone. I went with a nude gloss, but in some lighting, it appeared a bit too warm as well. A baby pink gloss might have better complemented the overall look.</p>
     
      <ResponsiveIframe src="https://shopmy.us/collections/public/635865?noHeader=true" title="Shop My Victoria's Secret Favorites" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>CONTAINS: AFFILIATE LINKS</p>
     
     
     
     
  
      <div style={{ margin: '20px' }}>
        <AdSenseAd />
      </div>


      <p style={paragraphStyle}><strong>Setting the Makeup:</strong> Don't forget a good setting spray! I recommend the Mist of Dawn for its fine mist and staying power.</p>
      <ResponsiveIframe src="https://shopmy.us/collections/public/635866?noHeader=true" title="Shop My Victoria's Secret Favorites" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>CONTAINS: AFFILIATE LINKS</p>
     
     
      <h2 style={headingStyle}>Final Verdict</h2>

      <div>
          <img src={image3} alt="Signature" style={{ width: '100%' }} />
        </div>
      <p style={paragraphStyle}>
        This makeup trial was a success, drawing subtle inspiration from beauty icons like{" "}
        <a
          href="https://www.youtube.com/watch?v=hotUsepeDgc&t=15s"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'black' }}
        >
          Margot Robbie in "The Wolf of Wall Street"
        </a>{" "}
        for the eyeshadows, and{" "}
        <a
          href="https://www.youtube.com/watch?v=yC8Sf9U3Aww&t=24s"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'black' }}
        >
          Brooke Shields’ iconic natural brows
        </a>
        . The products held up great and I especially loved how the blush looked in person, on camera, and in video in various light!
      </p>
      <p style={paragraphStyle}>My actual wedding dress is not as white as the dresses I tried on, but slightly more on the warmer, champagne side so I'm excited to adjust my makeup accordingly.</p>
      <div style={{ margin: '20px' }}>
        <AdSenseAd />
      </div>
     
      <p style={paragraphStyle}>Since I will be outside for much of the wedding day, I will skip gloss and go for a balm for moisture, but less stick. Nothing worse than hair in lipgloss!</p>
      <div style={{ margin: '20px' }}>
        <AdSenseAd />
      </div>
      
      <p style={paragraphStyle}>
  <strong>  What's Your Dream Bridal Look?  </strong>Let me know in the comments! If you need more inspiration, remember to check out my pop culture bridal styles on IG <a 
    href="https://www.instagram.com/p/C7YBzrco0BQ/?img_index=1" 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{ color: 'black' }}
  >
     here
  </a>. 
  Cheers to looking and feeling your best on your special day, and I hope this makeup gave you some tips and inspiration whether you are a bride-to-be or just love glamour!
</p>      <div style={{ textAlign: 'center' }}>
        <a href="/SharonTateBridal" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={sharon} alt="Vintage Vibes Merch" style={{ width: '100%', maxWidth: '1000px', display: 'block' }} />
          MORE BRIDAL →
        </a>
      </div>
      <div>
        <img src={signature} alt="Signature" style={{ width: '100%' }} />
      </div>
      <div style={{ margin: '20px' }}>
        <AdSenseAd />
      </div>
      <Comments website-id={websiteId} page-id={"Las-bridalmmmkkup"} />
    </div>
  );

  return (
    <div ref={blogRef}>
      <Card
        title="Bridal Makeup Tutorial"
        description="Bridal Makeup Tutorial"
        blogContent={blogContent}
      />
    </div>
  );
};

export default BridalMakeup;
