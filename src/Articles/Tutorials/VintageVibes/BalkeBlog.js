import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import '../../ExampleTutorial1.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import TextReveal from '../../../Components/TextReveal';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import DropCap from '../../../Components/DropCap';
import AdSenseAd from '../../../Advertising/Ads';
import { initGA, logPageView } from '../../../analytics';
import DropCap1 from '../../Travel/DropCap1';

const title = `${process.env.PUBLIC_URL}/Images/Articles/Balke/BalkeTitle.png`;
const Balke2 = `${process.env.PUBLIC_URL}/Images/Articles/Balke/BalkeDouble.png`;
const Balke3 = `${process.env.PUBLIC_URL}/Images/Articles/Balke/BalkeFaceChart.jpg`;
const Signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;
const yardley = `${process.env.PUBLIC_URL}/Images/Articles/JeanShrimpton/JeanShrimptonThumbnail.jpg`;
const teespring = `${process.env.PUBLIC_URL}/Images/teespringbanner.jpeg`;

const Card = ({ blogContent }) => (
  <div>
    <div><TextReveal text='TIME TRAVEL TUTORIALS' /></div>
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);

const BalkeBlog = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);

  useEffect(() => {
    initGA();
    logPageView('/sugarplumfairy');
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
  <title>Ina Balke 1960s Makeup Tutorial - Jackie Wyers</title>
  <meta name="description" content="Step-by-step guide on how to recreate the 1960s makeup and styling of model Ina Balke, as seen in the iconic photograph by Ted Russell." />
  <meta name="keywords" content="Ina Balke makeup, 1960s makeup tutorial, vintage makeup, Jackie Wyers makeup tutorial, Ted Russell photography, 60s beauty, classic makeup looks" />
  <meta property="og:title" content="Ina Balke 1960s Makeup Tutorial - Jackie Wyers" />
  <meta property="og:description" content="Step-by-step guide on how to recreate the 1960s makeup and styling of model Ina Balke, as seen in the iconic photograph by Ted Russell." />
  <meta property="og:image" content={title} />
  <meta property="og:url" content={window.location.href} />
  <meta name="twitter:title" content="Ina Balke 1960s Makeup Tutorial - Jackie Wyers" />
  <meta name="twitter:description" content="Step-by-step guide on how to recreate the 1960s makeup and styling of model Ina Balke, as seen in the iconic photograph by Ted Russell." />
  <meta name="twitter:image" content={title} />
  <meta name="twitter:card" content="summary_large_image" />
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "headline": "Ina Balke 1960s Makeup Tutorial - Jackie Wyers",
        "description": "Step-by-step guide on how to recreate the 1960s makeup and styling of model Ina Balke, as seen in the iconic photograph by Ted Russell.",
        "image": "${title}",
        "author": {
          "@type": "Person",
          "name": "Jackie Wyers"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Jackie Wyers",
          "logo": {
            "@type": "ImageObject",
            "url": "${title}"
          }
        },
        "datePublished": "2024-07-27",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${window.location.href}"
        }
      }
    `}
  </script>
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
        <a href="/timetraveltutorials" style={{ fontFamily: 'Arapey', fontSize: '1.25em', color: 'black', textDecoration: 'none' }}>
          BEAUTY // TIME TRAVEL TUTORIALS
        </a>
      </div>
      <img src={title} alt="Ina Balke 1960s Makeup Tutorial" style={{ width: '100%' }} />

      <ResponsiveYoutube src="https://www.youtube.com/embed/7HoL0rVmZHI?si=__Llh9tI2-K62uRQ" title="Ina Balke 1960s Makeup Tutorial - Jackie Wyers on Youtube" />

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <SubscribeButton />
      </div>

      <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', maxWidth: '100%', fontStyle: 'italic' }}>
        All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
      </p>

      <DropCap1 text="Welcome back to another Time Travel Tutorials, where we admire and recreate beauty icons from the past. Today, let's delve into the 1960s through the portrait of model Ina Balke by the renowned photographer Ted Russell. For those of you who've ever searched on Pinterest for '60s makeup, chances are you've stumbled upon this stunning photograph. This article is your step-by-step guide on how to get the vintage makeup and styling as seen on Ina to try out yourself!" />
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a href='https://www.instagram.com/reel/C3nim61u_4Q/?hl=en'>
          <img src={Balke2} alt="Ina Balke's 1960s makeup" style={{ width: '100%', height: 'auto' }} />
        </a>
      </div>

      <h2 style={headingStyle}>The Essence of 1960s Makeup</h2>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a href='https://www.instagram.com/reel/C3nim61u_4Q/?hl=en'>
          <img src={Balke3} alt="Close-up of Ina Balke's makeup" style={{ width: '100%', height: 'auto' }} />
        </a>
      </div>

      <p style={paragraphStyle}>
        Ina Balke’s iconic wink showcases a classic '60s cut crease complimented by matte skin and a peach lip. Her styling feels very Hepburn, with a sophisticated black dress and both a cigarette and wine glass held up to her mouth. Her look is complete with a chic, brunette bob with blunt bangs, which I recreated with a fabulous wig! If you decide to give this tutorial a try, please be sure to tag me or send a photo to be featured on the blog - I'd love to see you in this glamorous style 🖤 .
      </p>

      <h2 style={headingStyle}>The Skin: Keep It Matte & Bright</h2>

      <p style={paragraphStyle}>
        This look is very glamorous, so let’s use a high-coverage foundation for a flawless base. Ina’s face looks bright and highlighted through the center, so go with a lighter high coverage concealer overtop of your foundation base. I used the NYX Can't Stop Won't Stop Concealer in a V-shape under my eyes, which is a great drugstore option for a posh look!
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/493363?noHeader=true" title="Collection name here" />

      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth: '100%', marginLeft: '0em' }}>
        CONTAINS: AFFILIATE LINKS
      </p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>Contour & Set The Skin</h2>

      <p style={paragraphStyle}>
        To add dimension and mature the face, use a cool-toned contour under the cheekbones and jawline. Keep the nose contour subtle to balance the soon-to-be dramatic eyes.
      </p>

      <p style={paragraphStyle}>
        For setting the highlighted areas, the Hourglass radiant powder is my go-to for a luminous finish, but the Revlon Photoready translucent finisher is a great budget-friendly option. Adding a powder that reflects light helps create that hyper-real base when photographed, as seen in the inspiration photo.
      </p>

      <h2 style={headingStyle}>Touch of Bronzer & Blush</h2>

      <p style={paragraphStyle}>
        The Charlotte Tilbury Filmstar Bronze & Glow contour duo helps soften the contour and adds a natural glow. For blush, CHANEL's warm pink blush, shade 440 - QUINTESSENCE, adds the perfect touch of color. Remember, it's all about creating a natural, yet defined look for this sophisticated style!
      </p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <ResponsiveIframe src="https://shopmy.us/collections/public/493385?noHeader=true" title="Collection name here" />

      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth: '100%', marginLeft: '0em' }}>
        CONTAINS: AFFILIATE LINKS
      </p>

      <h2 style={headingStyle}>Iconic 60s Eyeshadow with Rustic Tones</h2>

      <p style={paragraphStyle}>
        Eye makeup is central to the 60s look. I used a matte white shadow for brightness to the lid, but you can opt for a pearly white or skin-toned shade for a more muted effect.
      </p>

      <p style={paragraphStyle}>
        For this eyeshadow look, I used the Too Faced Natural Lust Palette which was the perfect palette, but was limited edition and hard to find now! After doing some digging, I came across a similar palette called Melt Cosmetics Gemini Eyeshadow Palette which has the shades we will need.
      </p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <p style={paragraphStyle}>
        Blend a yellow gold and a dingy green-bronze through the crease fading towards the brow bone. When we cut the crease next, we will get that 60s shape but have these rustic tones peaking above softens the look and makes any eye color pop.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/493455?noHeader=true" title="Collection name here" />

      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth: '100%', marginLeft: '0em' }}>
        CONTAINS: AFFILIATE LINKS
      </p>

      <h2 style={headingStyle}>Cut That Crease!</h2>

      <p style={paragraphStyle}>
        With a precise brush, create an exaggerated rounded crease with a black, matte shadow. Tilt your head back slightly to locate where your crease is and etch in the shadow slightly above the eye socket. Make sure the shadow doesn’t have fallout!
      </p>

      <p style={paragraphStyle}>
        From this initial crease line, smoke out the edges above the cut crease, fading into the gold and bronze. Clean up the black shadow one more time by adding intensity to the exaggerated crease with as much precision as you can.
      </p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>1960s Eye Makeup Tips for Hooded Eyes</h2>

      <p style={paragraphStyle}>
        If you have hooded eyes, you can still totally have fun with a 1960s look. You can do the same steps as listed above, though the eye may appear more “graphic” rather than create the illusion of deeper set eyes. I think both are equally as stunning!
      </p>

      <p style={paragraphStyle}>
        You can also take 1960s inspiration from icons like Brigitte Bardot who have beautiful vintage looks with hooded eyes and go for more of a classic smokey eye with winged liner if you are not loving the graphic crease. See <a href="https://www.youtube.com/watch?v=i8wHU_XsM2A&feature=youtu.be" style={{ color: 'black' }} target="_blank" rel="noopener noreferrer">B.B tutorials</a> for more inspiration.
      </p>

      <h2 style={headingStyle}>Brush Recommendations</h2>

      <p style={paragraphStyle}>
        This look takes patience and blending, but great brushes can definitely help. I’m revisiting this tutorial years later, and thought I’d suggest my favourite current brushes from Rephr to help get the look listed below - especially the tiny 24 brush for the cut crease!
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/493460?noHeader=true" title="Collection name here" />

      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth: '100%', marginLeft: '0em' }}>
        CONTAINS: AFFILIATE LINKS
      </p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>Winged Liner & Fabulous Lashes</h2>

      <p style={paragraphStyle}>
        For the eye liner, start with a black pencil liner to tight-line the eye and add dots along the bottom lashes. The dots along the bottom will help create a doll-like look once mascara is applied to the bottom lashes.
      </p>

      <p style={paragraphStyle}>
        Add matte black liquid liner in a bold wing for a retro finish that helps elongate the eye.
      </p>

      <p style={paragraphStyle}>
        Double Demi Wispies from Ardell complement the thick liner, paired with Too Faced Better Than Sex Mascara for glamorous lashes. Focus on blending your natural lashes with the falsies at the base rather than lengthening them with mascara. We don’t want any clumps to the wispy lashes!
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/493465?noHeader=true" title="Collection name here" />

      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth: '100%', marginLeft: '0em' }}>
        CONTAINS: AFFILIATE LINKS
      </p>

      <h2 style={headingStyle}>The Perfect Pout</h2>

      <p style={paragraphStyle}>
        Define your lips with your favorite nude lipliner, mine is by far the Charlotte Tilbury's Iconic Nude lip cheat! Slightly over line the upper lip in a round shape for that perfect pout. Since her lips are covered by the wine glass, it’s a bit of guesswork but I chose NARS lipstick in Tolede and loved how it turned out. This lipstick shade is described as a medium deep coral if you are looking for something similar!
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/493470?noHeader=true" title="Collection name here" />
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>The Finishing Touches</h2>

      <p style={paragraphStyle}>
        Now that we have a glamorous 60s makeup look, it’s time to style the hair. If you have a bob and bangs, you are already set! I chose a wig I bought from YesStyle and added a light hairspray to help style bangs. A black dress, especially with a high neckline really adds sophistication to this timeless style. Go for gold jewelry to help bring out the warm tones in the eye makeup.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/565751??noHeader=true" title="Collection name here" />

      <p style={paragraphStyle}>
        Whether you're a fan of the ‘60s or trying to expand your makeup skills, I hope you found this guide a fun read and inspires you to try this cut-crease style. More well-known names from the 1960s beauty scene like Jean Shrimpton (the face of the ‘60s) Audrey Hepburn, Brigitte Bardot can be found on my <a href="https://www.youtube.com/playlist?list=PL-_qSuEl3UwEr-gl54NLaTEanQBlcU0Lk" style={{ color: 'black' }} target="_blank" rel="noopener noreferrer">YouTube channel</a> if you want to keep watching.
      </p>

      <p style={paragraphStyle}>
        Thank you for reading and if you want to be featured on my site, submit your recreation or version of this look to me on IG! I’d love to see you switch up your style with confidence!
      </p>

      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <a href="/yardley1965" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={yardley} alt="Margot Robbie - Barbie Movie" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', display: 'block' }} />
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
          <img src={teespring} alt="Margot Robbie - Barbie Movie" style={{ width: '100%', maxWidth: '1400px', display: 'block' }} />
          SHOP VINTAGE VIBES MERCH →
        </a>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={Signature} alt="Soft pink blush for a natural Barbie-inspired cheek flush" style={{ width: '100%' }} />
      </div>

      <Comments website-id={websiteId} page-id={'balke-blog'} />
    </div>
  );

  return (
    <div>
      <Card blogContent={blogContent} />
    </div>
  );
};

export default BalkeBlog;
