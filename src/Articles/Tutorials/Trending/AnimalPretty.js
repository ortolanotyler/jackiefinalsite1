import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Comments } from '@hyvor/hyvor-talk-react';
import '../../ExampleTutorial1.css';
import TextReveal from '../../../Components/TextReveal';
import SubscribeButton from '../../../Components/SubscribeButton';
import DropCap from '../../../Components/DropCap';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import AdSenseAd from '../../../Advertising/Ads';

const title = `${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/AnimalPrettyTitle.png`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/BunnyPretty.JPG`;
const image3 = `${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/DeerFinal1.jpg`;
const image4 = `${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/final.JPG`;
const image5 = `${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/FinalCat.jpg`;
const image6 = `${process.env.PUBLIC_URL}/Images/Articles/AnimalPretty/FoxPretty.png`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
  <div>
    <div><TextReveal text='TRENDS' /></div>
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);

const AnimalPretty = () => {
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
        <title>Animal Pretty - Which one are you?</title>
        <meta name="description" content="Trend Report: Animal Pretty - Fabulous Fad" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RT6GR7JXYG"></script>
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RT6GR7JXYG');
          `}
        </script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4660168246825318" crossorigin="anonymous"></script>
      </Helmet>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25vh' }}>
        <a href="/trends" style={{ fontFamily: 'Arapey', fontSize: '1.25em', color: 'black', textDecoration: 'none' }}>
          BEAUTY // TRENDS
        </a>
      </div>
      <img src={title} alt="Animal Pretty Title" style={{ width: '100%' }} />
      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <SubscribeButton />
      </div>
      <ResponsiveYoutube src="https://www.youtube.com/embed/hIGr8Gj4kQA?si=8N-JgnQ-JeRTk5Gm" title="YouTube video player" />
      <div>
        <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
          All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
        </p>
      </div>
      <DropCap text="Hey beauties, it’s Jackie! Today, we're diving into a fun and fresh way to explore beauty styles with my 'Types of Pretty' makeup series inspired by adorable animals like deer, cats, foxes, and bunnies. Whether you saw this trend on TikTok or my latest YouTube tutorial, I’m thrilled to bring this unique concept to the blog where we break down each style with detailed makeup guides." />
      
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>Deer Pretty: Soft and Ethereal 🦌</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={image3} alt="Deer Pretty - Jackie Wyers" style={{ width: '100%' }} />
      </div>
      <p style={paragraphStyle}>Inspired by the gentle features of a deer, this makeup style is all about soft, doe-like eyes and a warm, glowing complexion. If you are in the Soft or Deep Autumn colour season, this look is a great fit.</p>
      <p style={paragraphStyle}>Celebrity Inspirations: Jessica Alba, Leighton Meester, Emmy Russum, Tessa Thompson and Charithra Chandran rock this look with their big, round eyes and stunning skin tones.</p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>Achieve the Deer Pretty Look</h2>
      <p style={paragraphStyle}>Eyes: Start with a neutral brown shadow across the lid from the Makeup by Mario Master Mattes palette, then tight line your eyes with dark brown eyeliner. Add a peach liner to your waterline for that soft doe-eyed effect.</p>
      <ResponsiveIframe src="https://shopmy.us/collections/public/552826?noHeader=true" title="Makeup by Mario Master Mattes Palette" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>CONTAINS: AFFILIATE LINKS</p>
      <p style={paragraphStyle}>Lashes: A full, wispy set of falsies suit the doe-eyed style. Try ISOPIA Iso-Gentle Touch Lashes.</p>
      <ResponsiveIframe src="https://shopmy.us/collections/public/552928?noHeader=true" title="ISOPIA Iso-Gentle Touch Lashes" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>CONTAINS: AFFILIATE LINKS</p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <p style={paragraphStyle}>Cheeks: Use a peachy blush on the tops of your cheeks to bring warmth and brightness to your face along with a champagne highlight.</p>
      <ResponsiveIframe src="https://shopmy.us/collections/public/552829?noHeader=true" title="Champagne Highlight" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>CONTAINS: AFFILIATE LINKS</p>
      <p style={paragraphStyle}>Lips: Go for a nude lipliner, slightly over lining for a fuller appearance. Finish with a matte peach lip colour for a natural, yet enhanced look.</p>
      <ResponsiveIframe src="https://shopmy.us/collections/public/552889?noHeader=true" title="Matte Peach Lip Colour" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>CONTAINS: AFFILIATE LINKS</p>
      <p style={paragraphStyle}>Outfit Inspiration: To fully embody the Deer Pretty theme, choose dainty and whimsical styles. Try outfits in earthy and pastel palettes that resonate with the natural and soft aesthetics of a deer. Fabrics like lace and florals are perfect for this look, adding a touch of femininity and grace. Free People is a great store to try.</p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <p style={paragraphStyle}>Want to really showcase your animal inspiration? Fable England has beautiful enamel earrings, necklaces, and embroidered bags featuring fawn designs.</p>
      <ResponsiveIframe src="https://shopmy.us/collections/public/552834?noHeader=true" title="Fable England Accessories" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>CONTAINS: AFFILIATE LINKS</p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>Cat Pretty: Bold and Intense 🐈‍⬛</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={image5} alt="Cat Pretty - Jackie Wyers" style={{ width: '100%' }} />
      </div>
      <p style={paragraphStyle}>Embody the allure of the nocturnal feline with the 'Cat Pretty' makeup style, characterized by its sharp, angular features and a striking high-contrast palette suitable for those embracing the True or Clear Winter colour palette.</p>
     
      <p style={paragraphStyle}>Celebrity Inspirations: Examples include Bella Hadid and Megan Fox. For deeper skin tones, think Rihanna, with those light green, cat-like eyes, and Zoe Kravitz, with her sharp, kitty-like features. We'll explore warmer smokey eyes in the “Fox Pretty” look and keep it cool toned for this fierce style.</p>
      <h2 style={headingStyle}>Achieve the Cat Pretty Look</h2>
      <p style={paragraphStyle}>Eyes: Sweep cool toned shimmers, like silver and white, across your lids and deepen up with taupe in the crease. Victoria Beckham Beauty Smoky Eye Brick in Tuxedo is the perfect palette. Draw a bold, winged eyeliner that extends beyond the outer corners to enhance the cat-eye illusion and enhance the outer corner with a black shadow.</p>
      <ResponsiveIframe src="https://shopmy.us/collections/public/552837?noHeader=true" title="Victoria Beckham Beauty Smoky Eye Brick in Tuxedo" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>CONTAINS: AFFILIATE LINKS</p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <p style={paragraphStyle}>Lashes: Go for dramatic, fanned-out lashes that complement the bold liner, amplifying the overall eye makeup. Try ISOPIA Iso-Gentle Echo Lashes.</p>
      <ResponsiveIframe src="https://shopmy.us/collections/public/552911?noHeader=true" title="ISOPIA Iso-Gentle Echo Lashes" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>CONTAINS: AFFILIATE LINKS</p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <p style={paragraphStyle}>Cheeks: Sculpt your cheeks with a cool toned contour powder to add depth and enhance your natural bone structure, mimicking the chiseled look typical of a sleek feline.</p>
      <ResponsiveIframe src="https://shopmy.us/collections/public/552914?noHeader=true" title="Cool Toned Contour Powder" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>CONTAINS: AFFILIATE LINKS</p>
      <p style={paragraphStyle}>Lips: Select deep mauve tones for a seductively pouty effect or go for a nude lip combo. A high-shine gloss can add dimension and a touch of glamour.</p>
      <ResponsiveIframe src="https://shopmy.us/collections/public/552839?noHeader=true" title="Deep Mauve Lip Colour" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>CONTAINS: AFFILIATE LINKS</p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <p style={paragraphStyle}>Outfit Inspiration: Channel '90s off-duty supermodel vibes with structured yet casual elements. Think fitted black tanks paired with low-waisted baggy jeans. Explore Revolve for trendy, contemporary pieces and local thrift stores for genuine '90s gems like sleek sunglasses.</p>
      <ResponsiveIframe src="https://shopmy.us/collections/public/552842?noHeader=true" title="90s Supermodel Style" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>CONTAINS: AFFILIATE LINKS</p>
      <h2 style={headingStyle}>Fox Pretty: Rustic and Earthy 🦊</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={image6} alt="Fox Pretty - Jackie Wyers" style={{ width: '100%' }} />
      </div>
      <p style={paragraphStyle}>Embrace the charm of the red fox with this bohemian makeup style, perfect for those in the True Autumn colour category. Think earthy metallics and softly smudged lips, capturing the essence of the wild and whimsical.</p>
      <p style={paragraphStyle}>Celebrity Inspirations: Sadie Sink is the quintessential muse for this look, with her rustic red hues in her hair and brows. Her natural beauty enhanced with earthy makeup perfectly captures the Fox Pretty aesthetic.</p>
      <p style={{ margin: '5rem', fontSize: '16px', fontStyle: 'italic' }}>Note: If you're a redhead with bright blue eyes and vibrant hair that leans more towards the Spring colour season, you might find the “Bunny Pretty” guide with its softer pink shades more flattering than the rustic tones of Fox Pretty.</p>
      <h2 style={headingStyle}>Achieve the Fox Pretty Look:</h2>
      <p style={paragraphStyle}>Eyes: Choose warm, copper shades smoked out in a soft v, and use minimal liner to keep the eyes striking yet natural. The Bareminerals Warmth Minerals Palette is perfect to create this style. This approach enhances the eyes without overshadowing the inherent beauty of your features.</p>
      <ResponsiveIframe src="https://shopmy.us/collections/public/552844?noHeader=true" title="Bareminerals Warmth Minerals Palette" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>CONTAINS: AFFILIATE LINKS</p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <p style={paragraphStyle}>Lashes: Extend the lash line along the winged out shadow. Try ISOPIA Iso-Gentle Healing Lashes for a subtle effect.</p>
      <ResponsiveIframe src="https://shopmy.us/collections/public/552845?noHeader=true" title="ISOPIA Iso-Gentle Healing Lashes" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>CONTAINS: AFFILIATE LINKS</p>
      <p style={paragraphStyle}>Cheeks: Apply dual blush tones—a rose shade for a vibrant pop of colour and a deeper rose to define the cheekbones.</p>
      <ResponsiveIframe src="https://shopmy.us/collections/public/552846?noHeader=true" title="Dual Blush Tones" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>CONTAINS: AFFILIATE LINKS</p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <p style={paragraphStyle}>Lips: A matte berry or a rustic red lip, smudged out for a softer, more approachable look. Add a touch of golden metallic highlight to the cheekbones and pat over the centre of the lip for a unique, textured finish.</p>
      <ResponsiveIframe src="https://shopmy.us/collections/public/552848?noHeader=true" title="Matte Berry Lip Colour" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>CONTAINS: AFFILIATE LINKS</p>
     
      <p style={paragraphStyle}>Outfit Inspiration: Dive into a bohemian vibe with lively prints. Anthropologie is an excellent starting point for this style. Select paisley or other small prints in rustic tones to complement the boho aesthetic beautifully. This style not only matches the rich-toned makeup but also ties the whole look together.</p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <p style={paragraphStyle}>Don't forget to check out Fable England for fox-themed accessories that add a charming final touch.</p>
      <ResponsiveIframe src="https://shopmy.us/collections/public/552850?noHeader=true" title="Fox-Themed Accessories" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>CONTAINS: AFFILIATE LINKS</p>
      <h2 style={headingStyle}>Bunny Pretty: Cute and Angelic</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={image2} alt="Bunny Pretty - Jackie Wyers" style={{ width: '100%' }} />
      </div>
      <p style={paragraphStyle}>Channel the delicate charm of the bunny with shades of pink that mirror a bunny's tongue, creating a look that is both cute and angelic. This style is perfect for experimenting with the viral Sephora “bunny tongue” lip gloss that's taking social media by storm.</p>
      
      <p style={paragraphStyle}>This style complements those in Spring and Summer colour palettes, altering the look to either a warm or cool toned pink.</p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <p style={paragraphStyle}>Celebrity Inspirations: Elle Fanning is the epitome of Bunny Pretty with her angelic presence. Other stars like Amandla Stenberg and Zendaya also beautifully pull off this style, showcasing how versatile and flattering it can be across different skin tones.</p>
      <h2 style={headingStyle}>Achieve the Bunny Pretty Look:</h2>
     
      <p style={paragraphStyle}>Eyes: Apply a soft wash of pink over your lids, adding a touch of shimmer to the brow bone and inner corners to brighten and open up the eye area. Charlotte Tilbury Pillow Talk Eyeshadow Palette is a beautiful option.</p>
      <ResponsiveIframe src="https://shopmy.us/collections/public/552851?noHeader=true" title="Charlotte Tilbury Pillow Talk Eyeshadow Palette" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>CONTAINS: AFFILIATE LINKS</p>
      <p style={paragraphStyle}>Lashes: Curl your lashes for a natural lift, focusing on the upper lashes only to keep the look light and fresh. Try ISOPIA Iso-Gentle Harmony Lashes for extra length.</p>
      <ResponsiveIframe src="https://shopmy.us/collections/public/552853?noHeader=true" title="ISOPIA Iso-Gentle Harmony Lashes" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>CONTAINS: AFFILIATE LINKS</p>
      <p style={paragraphStyle}>Cheeks: Embrace a rosy flush with a heavier application of blush. Milani Coral Cove is an excellent choice for a warmer pink, while Rare Beauty's blush in Happy suits cooler undertones. Don't be shy with the blush to achieve that vibrant, youthful glow.</p>
      <ResponsiveIframe src="https://shopmy.us/collections/public/552854?noHeader=true" title="Milani Coral Cove Blush" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>CONTAINS: AFFILIATE LINKS</p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <p style={paragraphStyle}>Lips: Start with a nude pink lip liner to define your lips, then layer on the Sephora Collection Outrageous Plumping Lip Gloss in Pink Pout for a glossy, vibrant finish that complements the blushy cheeks.</p>
      <ResponsiveIframe src="https://shopmy.us/collections/public/552857?noHeader=true" title="Sephora Collection Outrageous Plumping Lip Gloss" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>CONTAINS: AFFILIATE LINKS</p>
      <p style={paragraphStyle}>Outfit Inspiration: Lean into the Bunny Pretty theme with soft, flowing fabrics in pink tones. Try flirty dresses in pastel colours that enhance the sweetness of this look. Brands like For Love & Lemons offer a variety of options that can perfectly complement the Bunny Pretty makeup.</p>
      
      <p style={paragraphStyle}>Additionally, accessories from Fable England, such as bunny-themed jewelry, can add a whimsical touch to complete your outfit as mentioned in the looks above.</p>
      <ResponsiveIframe src="https://shopmy.us/collections/public/552860?noHeader=true" title="Bunny-Themed Jewelry" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>CONTAINS: AFFILIATE LINKS</p>
      <p style={paragraphStyle}>I hope this article inspires you to play with these animal-inspired beauty looks. Which "Type of Pretty" are you leaning towards? Dive into the quiz <a href='/quiz2' style={{ color: 'black' }} alt='e'> here</a> and I hope the full-length tutorials on my channel inspire you to try a new look!</p>
      <div style={{ textAlign: 'center' }}>
        <iframe src="https://assets.pinterest.com/ext/embed.html?id=794463190545030357" height='620' width='236' frameBorder="0" scrolling="no" title="Pinterest Embed"></iframe>
      </div>
      <div>
        <img src={signature} alt="Signature" style={{ width: '100%', marginBottom: '2rem' }} />
      </div>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <Comments website-id={websiteId} page-id={"Animal-Prizznizzle"} />
    </div>
  );

  return (
    <div ref={blogRef}>
      <Card
        title="Animal Pretty - Which one are you?"
        description="Trend Report: Animal Pretty - Fabulous Fad"
        blogContent={blogContent}
      />
    </div>
  );
};

export default AnimalPretty;
