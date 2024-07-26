import React, { useRef, useEffect } from 'react';
import '../../ExampleTutorial1.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import TextReveal from '../../../Components/TextReveal';
import SubscribeButton from '../../../Components/SubscribeButton';
import DropCap from '../../../Components/DropCap';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import { Helmet } from 'react-helmet';
import AdSenseAd from '../../../Advertising/Ads';
import { initGA, logPageView } from '../../../analytics';

const title = `${process.env.PUBLIC_URL}/Images/Articles/GraceKelly/GraceKellyTitle.png`;
const image1 = `${process.env.PUBLIC_URL}/Images/Articles/GraceKelly/JackieWyersGraceKellyInspired.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/GraceKelly/GraceKellyFaceChart.png`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;
const audrey = `${process.env.PUBLIC_URL}/Images/Articles/GraceKelly/audrey.jpeg`;
const double = `${process.env.PUBLIC_URL}/Images/Articles/GraceKelly/gracekellydouble.jpeg`;
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

const GraceKelly = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);
  
  useEffect(() => {
    initGA();
    logPageView('/gracekelly');
  }, []);

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
        <title>Grace Kelly - Hollywood Glam Makeup Tutorial</title>
        <meta name="description" content="Follow Jackie Wyers as she recreates the iconic Grace Kelly Hollywood Glam look with detailed tutorials and vintage vibes." />
      </Helmet>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
        <a href="/timetraveltutorials" style={{ fontFamily: 'Arapey', fontSize: '15px', color: 'black', textDecoration: 'none' }}>
          BEAUTY // TIME TRAVEL TUTORIALS
        </a>
      </div>
      <img src={title} alt="Grace Kelly's Hollywood Glam" style={{ width: '100%' }} />

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <SubscribeButton />
      </div>

      <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
        All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
      </p>

      <DropCap text="Welcome back for another Time Travel Tutorials, the series where we celebrate and recreate the iconic beauty looks of the past. This edition is dedicated to Grace Kelly, a beacon of Old Hollywood elegance and a true silver screen legend. Grace Kelly, known for her roles in 'Rear Window' and 'To Catch a Thief' captivated audiences with her poised performances and became a real-life princess when she married Prince Rainier III of Monaco." />
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={image1} alt="Grace Kelly's Hollywood Glam Title" style={{ width: '100%', maxWidth: '650px' }} />
      </div>

      <h2 style={headingStyle}>The Essentials of Grace Kelly's Makeup Style</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={image2} alt="Grace Kelly Face Chart" style={{ width: '100%', maxWidth: '650px' }} />
      </div>

      <p style={paragraphStyle}>
        Grace’s look was all about soft, subtle enhancements that echoed her persona both on-screen and off. She favoured a silver/grey palette for the eyes, soft contour for her high cheekbones using two shades of blush, full, arched brows and classic red lips. Let’s get the starlet’s look!
      </p>

      <h2 style={headingStyle}>Radiant, Flawless Base</h2>
      <p style={paragraphStyle}>
        Start with a hydrating sunscreen followed by a natural foundation for a flawless yet luminous base. For this look, I’m using products from Beauty of Joseon (a great k-beauty sunscreen that feels very luxurious) and Makeup Forever’s HD Skin Hydro Glow, emulating the fresh-faced radiance that Grace Kelly was renowned for. You could choose a matte foundation, but I prefer to set with a mattifying powder instead.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/524545?noHeader=true" title="Shop My Victoria's Secret Favorites" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5em', maxWidth: '100%', marginLeft: '0em' }}>
        CONTAINS: AFFILIATE LINKS
      </p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>Grace’s Two Blush Technique</h2>
      <p style={paragraphStyle}>
        Grace Kelly's approach to contouring was subtle yet effective, creating natural shadows that enhanced her bone structure without looking overly sculpted. She used two blush shades: a deeper, cooler tone beneath the cheekbone and a brighter shade on the cheeks.
      </p>
      <p style={paragraphStyle}>
        To achieve a similar transformation, I incorporated a few additional steps. First, I applied YENSA Super Serum Silk Concealer for subtle highlighting, which is excellent for brightening under the eyes. Next, the Makeup Forever (MUFE) cream contour helped sculpt high cheekbones.
      </p>
      <p style={paragraphStyle}>
        I also used Guerlain’s Terracotta Light Healthy Glow Bronzer in medium warm as the initial "blush" to soften the contour, and a barely-there matte shade from Colourpop over the cheeks for a pop of healthy color. You can opt for her more natural method if preferred!
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/524546?noHeader=true" title="Shop My Victoria's Secret Favorites" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5em', maxWidth: '100%', marginLeft: '0em' }}>
        CONTAINS: AFFILIATE LINKS
      </p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>Brows Are Essential</h2>
      <p style={paragraphStyle}>
        Grace Kelly's eyebrows were full and elegantly arched, with the tails extending nearly to the temples. This style frames the eyes exquisitely. Unlike Audrey Hepburn's brows, which arched upwards, Grace's brows are perfect for those whose natural brows have a downward trajectory.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '1500px', margin: '0 auto' }}>
        <img src={audrey} alt="Jackie as Audrey Hepburn" style={{ width: '50%', height: 'auto' }} />
        <img src={double} alt="Grace Kelly double" style={{ width: '50%', height: 'auto' }} />
      </div>

      <ResponsiveIframe src="https://shopmy.us/collections/public/524548?noHeader=true" title="Shop My Victoria's Secret Favorites" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5em', maxWidth: '100%', marginLeft: '0em' }}>
        CONTAINS: AFFILIATE LINKS
      </p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>Eyes – Silver and Grey Tones</h2>
      <p style={paragraphStyle}>
        In the inspiration photo I selected, Grace Kelly's complexion radiates a warm, slightly sun-kissed glow, and her hair is tinted a warm blonde. This warm undertone doesn't preclude the use of cool-toned greys on the eyes—it actually complements them! Let's aim for a subtly defined look.
      </p>
      <p style={paragraphStyle}>
        I applied grey and silver shades from the Victoria Beckham Beauty Smoky Eye Brick in Tuxedo—a luxurious palette perfectly suited for this style. Simply sweep across the lid and try not to bring the colour too far into the crease.
      </p>
      <p style={paragraphStyle}>
        Using the black shade from the same palette, I draw a soft line with a slight wing to elongate the eyes, capturing the subtle yet impactful style Grace favoured.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/524549?noHeader=true" title="Shop My Victoria's Secret Favorites" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5em', maxWidth: '100%', marginLeft: '0em' }}>
        CONTAINS: AFFILIATE LINKS
      </p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>Subtle Lashes</h2>
      <p style={paragraphStyle}>
        A curling and lengthening mascara completes the eye makeup, enhancing the lashes in a way that stays true to Grace’s minimal yet effective makeup style. If you're aiming for a more dramatic 50s makeup style, consider Marilyn Monroe’s iconic lash style to elevate this classic red lip look even further.
      </p>

      <h2 style={headingStyle}>Lips – Iconic and Bold</h2>
      <p style={paragraphStyle}>
        Grace Kelly's red lips are perhaps her most iconic beauty trait. For this tutorial, I chose a base of rich red from Giorgio Armani, topped with a brighter red in the centre. While I selected modern products to get the Old Hollywood look - let’s try some of her actual beauty favourites that are still available to buy today.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/524550?noHeader=true" title="Shop My Victoria's Secret Favorites" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5em', maxWidth: '100%', marginLeft: '0em' }}>
        CONTAINS: AFFILIATE LINKS
      </p>

      <h2 style={headingStyle}>Grace Kelly's Signature Beauty Products: Quick Reviews!</h2>
      <p style={paragraphStyle}>
        Grace Kelly continued to do her own hair and makeup after becoming a royal and has shared some of her actual favourite products with the world! Her chosen red lipstick The Dior Rouge Lipstick in 999.
      </p>
      <ResponsiveIframe src="https://shopmy.us/collections/public/524551?noHeader=true" title="Shop My Victoria's Secret Favorites" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5em', maxWidth: '100%', marginLeft: '0em' }}>
        CONTAINS: AFFILIATE LINKS
      </p>

      <p style={paragraphStyle}>
        I also love collecting fragrances and have recently invested in Creed Fleurissimo. Imagine the royal elegance you'll embody with just a spritz of this fragrance, which graced Grace Kelly's wedding day. Have you ever tried a scent that made you feel like royalty? This fragrance was originally custom-made and is still available for purchase today.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/524553?noHeader=true" title="Shop My Victoria's Secret Favorites" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5em', maxWidth: '100%', marginLeft: '0em' }}>
        CONTAINS: AFFILIATE LINKS
      </p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <p style={paragraphStyle}>
        Another beauty tip from Grace Kelly emphasizes the importance of hand cream. She famously stated, “a woman's age shows on her hands much quicker than anywhere else.” While I personally appreciate the beauty of aged hands, it’s always beneficial to stay moisturized!
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/524554?noHeader=true" title="Shop My Victoria's Secret Favorites" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5em', maxWidth: '100%', marginLeft: '0em' }}>
        CONTAINS: AFFILIATE LINKS
      </p>
      <p style={paragraphStyle}>
        I chose L’Occitane Youth Hand Cream; although it wasn't available during her time, it's a personal favorite. This cream makes a great Mother's Day gift if your mom enjoys hand cream—this one is truly amazing! Now let’s talk style.
      </p>

      <h2 style={headingStyle}>Grace Kelly's Iconic “Rear Window” Dress</h2>
      <p style={paragraphStyle}>
        Looking for a good replica of Grace Kelly Black And White 1950s Dress from Rear Window? I’ve linked a fabulous handmade style from Etsy below.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/524555?noHeader=true" title="Shop My Victoria's Secret Favorites" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5em', maxWidth: '100%', marginLeft: '0em' }}>
        CONTAINS: AFFILIATE LINKS
      </p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <p style={paragraphStyle}>
        Can’t go wrong with a simple set of pearls to complete the look or add a touch of class to an everyday style. If you are a big Grace Kelly fan, you might also be interested in the Grace Kelly Barbie’s for adult collectors, or the various books available to celebrate her life, legacy and style.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/524557?noHeader=true" title="Shop My Victoria's Secret Favorites" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5em', maxWidth: '100%', marginLeft: '0em' }}>
        CONTAINS: AFFILIATE LINKS
      </p>
      <p style={paragraphStyle}>
        Grace’s approach to beauty was all about simplicity, elegance, and a touch of royal allure. From her carefully selected fragrances, red lips and coiffed hair, her beauty routine was as much a part of her royal duties as her public appearances.
      </p>

      <p style={paragraphStyle}>
        I hope you enjoyed another Time Travel Tutorials for all the vintage vibes. If you have any vintage icons you'd like me to cover in future posts, please leave a comment below. If you enjoyed this look, you may enjoy Audrey Hepburn in “Funny Face” makeup here.
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
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
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

      <Comments website-id={websiteId} page-id={'Grace-Kelly'} />
    </div>
  );

  return (
    <div ref={blogRef}>
      <Card blogContent={blogContent} />
    </div>
  );
};

export default GraceKelly;
