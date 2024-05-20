import React, { useRef } from 'react';
import '../../ExampleTutorial.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import DropCap from '../../../Components/DropCap';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import TextReveal from '../../../Components/TextReveal';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';

const title = `${process.env.PUBLIC_URL}/Images/Articles/2016/2016Title.png`;
const image1 = `${process.env.PUBLIC_URL}/Images/Articles/2016/2016Double.png`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/2016/2016FaceChart.png`;
const image3 = `${process.env.PUBLIC_URL}/Images/Articles/2016/2016Makeup4.jpg`;
const image4 = `${process.env.PUBLIC_URL}/Images/Articles/2016/2016-Perrie.jpg`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
  <div>
    <div><TextReveal text='POP CULTURE OBSESSED' /></div>
    <div className="card" style={{ maxWidth: '100%', display: 'flex', textAlign: 'left', backgroundColor: 'white', color: 'black', fontFamily: 'GFS Didot, sans-serif' }}>
      <div className="blog-content" style={{ lineHeight: '1.5' }}>{blogContent}</div>
    </div>
  </div>
);

const Makeup2016 = () => {
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
    fontSize: '1.5rem',
    fontFamily: 'GFS Didot, serif',
    margin: '5rem',
    maxWidth: '100%',
    lineHeight: '1.75em'
  };

  const imageStyle = {
    display: 'block',
    margin: '0 auto',
    width: '50%',
    maxHeight: '1000px',
  };

  const titleImageStyle = {
    width: '100%',
    maxHeight: '1000px',
  };

  const blogContent = (
    <div className="container" style={{ lineHeight: '2.25rem', maxWidth: '100%', margin: '20rem', marginTop: '25px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25vh' }}>
        <a href="/popculture" style={{ fontFamily: 'Arapey', fontSize: '1.5em', color: 'black', textDecoration: 'none' }}>
          BEAUTY // TRENDS // POP CULTURE
        </a>
      </div>

      <div style={{ width: '100%' }}>
        <img src={title} alt="Iconic Sixties Twiggy Look with MOD Blue Eyeshadow" style={titleImageStyle} />
      </div>
   


      <ResponsiveYoutube src="https://www.youtube.com/embed/HtEPH6RUEZg?si=8RIeZhrp-luWJTSI" title="2016 Makeup Tutorial" />

<div style={{ marginTop: '2rem',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <SubscribeButton />
</div>

      <div>
        <p style={{ fontSize: '1rem', fontFamily: 'Arapey, sans-serif', maxWidth: '100%', textAlign: 'center', fontStyle: 'italic' }}>
          All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
        </p>
      </div>

      <DropCap text="Welcome back to another instalment of Time Travel Tutorials...though this time, we're not journeying too far back in time! The makeup trends of 2016 were significantly influenced by the young Kylie Jenner, the undeniable 'IT' girl for teens. High-coverage foundations, LOTS of setting powder, sharp and bold dip brows, warm smokey eyes, glittery cut creases, voluminous mink lashes, and deep, matte lip combinations had beauty enthusiasts captivated!" />

      <p style={paragraphStyle}>
        In this article, we'll revisit the products that were a staple on every makeup lover’s vanity in 2016 and embrace a daily bold glamour look. I was so excited to channel Kylie Jenner's dramatic flair, especially since I missed out on experimenting with these trends back in the day!
      </p>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={image1} alt="2016 Makeup Tutorial via Jackie Wyers on Instagram" style={imageStyle} />
      </div>

      <h2 style={headingStyle}>The Essence of 2016 Makeup</h2>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={image2} alt="Twiggy Eye Tutorial Jackie Wyers" style={imageStyle} />
      </div>

      <p style={paragraphStyle}>
        To embody Kylie Jenner's look and celebrate the key trends of 2016, we must adopt a "more is more" mentality. Instead of focusing on enhancing just one feature, we're highlighting them all simultaneously. To ensure the skin still looks youthful and fresh with such a makeup style, preparation is crucial. In the video embedded above, I was sponsored by d'Alba, and I love and have consistently repurchased the d'Alba Italian White Truffle First Spray Serum. It’s an excellent initial step to infuse the skin with moisture. The product smells amazing and feels luxurious while being affordable.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/542368?noHeader=true" title="D'Alba Italian White Truffle First Spray Serum" />

      <h2 style={headingStyle}>Apply a Matte Primer</h2>

      <p style={paragraphStyle}>
        Use a classic matte primer, like the Benefit Professional Primer, to create a smooth base for your foundation.
      </p>

      <h2 style={headingStyle}>Matte, High Coverage Foundation and The Beauty Blender</h2>

      <p style={paragraphStyle}>
        Opt for a matte foundation like the L’Oréal Infallible Pro-Matte Foundation, Estée Lauder Double Wear, or Born This Way Foundation. I chose to go the drugstore route with L’Oréal, but all are excellent choices known for their long-lasting, high-coverage formula. Use a stippling brush or the iconic beauty blender for application, ensuring the sponge is dampened first! The e.l.f. blending sponge is a cost-effective alternative, though not as squishy!
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/551065?noHeader=true" title="Rich Lotion - Ana Sui" />

      <p style={paragraphStyle}>
        The beauty blender has been a staple since 2005, initially launching in collaboration with Victoria’s Secret. It transitioned to Sephora in 2011, garnering numerous awards, especially in 2014 and 2016, showcasing impressive brand longevity. Worth the money if you can spare it in my opinion!
      </p>

      <h2 style={headingStyle}>Embrace Bold Brows and A Bright Highlight</h2>

      <p style={paragraphStyle}>
        Create bold brows with Anastasia Dip Brow, drawing inspiration from Kylie Jenner's well-defined, softly arched brows. The head of the brows are softer, creating an ombre effect into the darker arch and tail of the brow. Next, carve out the brow with the shape tape, adding brightness and lift.
      </p>

      <p style={paragraphStyle}>
        Although "block brows" are now considered a makeup faux-pas, this style can look great on some people when not overdone. If you love it, confidently wear it!
      </p>

      <p style={paragraphStyle}>
        Use a high-coverage concealer like Tarte Shape Tape to highlight the centre of the face. For added brightness, dab Maybelline under-eye concealer in the inner corners. This drugstore gem blends seamlessly with both natural and full-coverage makeup looks. Set your makeup with Laura Mercier's translucent Setting Powder lightly and we will soon “bake” the face!
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/551064?noHeader=true" title="Rich Lotion - Ana Sui" />

      <h2 style={headingStyle}>Lots of Contour and Bronze</h2>

      <p style={paragraphStyle}>
        Use the matte Hoola Bronzer for contouring and bronzing. It's perfect for sculpting under the cheekbones, jawline, and forehead. To match Kylie’s tan, I self-tanned, making this bronzer shade ideal. Benefit offers a range of bronzers for various skin tones, and Fenty Beauty has an extensive collection of contour sticks.
      </p>

      <h2 style={headingStyle}>Set and Bake Your Makeup</h2>

      <p style={paragraphStyle}>
        Baking is a great method to create a filter-in-real life effect. The powder method locks your makeup in place and boosts brightness, especially in flash photography. Apply a colorless setting powder, like Ben Nye's "Fair Luxury Powder," with a puff, leaving the excess on as you continue your makeup.
      </p>

      <p style={paragraphStyle}>
        I actually did not know how to do this and used Painted By Spencer’s how-to which helped educate me on how to achieve this makeup technique. His tutorial is linked below as another reference guide!
      </p>

      <p style={paragraphStyle}>
        Add your bronzer first, as the powder will help sculpt under the contour for a seriously snatched look.
      </p>

      <ResponsiveIframe src="https://www.youtube.com/embed/KEaRpNQyb1I?si=KeTVxblvbSyBAekq" title="How to Bake - Painted By Spencer - YouTube" />

      <ResponsiveIframe src="https://shopmy.us/collections/public/542385?noHeader=true" title="Rich Lotion - Ana Sui" />

      <h2 style={headingStyle}>Choose the Right Blush and Highlighter</h2>

      <p style={paragraphStyle}>
        Choose a matte or slightly luminous rose shade blush. Kylie tailored her blush to each look, sometimes going with a brighter pink or coral. The NYX Ombre Blush was a staple in 2016, and Benefit Cosmetics' Dandelion is a nice choice for a lighter blush shade. Apply lightly on the apples of the cheeks and blend from the contour.
      </p>

      <p style={paragraphStyle}>
        Let’s throw it back to Jaclyn Hill’s Champagne Pop for an intense glow. Although Becca Cosmetics is no longer in business, Smashbox acquired the highlighters and they remain available. ColourPop’s Super Shock formula is an excellent, affordable option for a bright highlight. Apply with a fan brush - bet you haven’t seen one of these brushes in a while!
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/542398?noHeader=true" title="Rich Lotion - Ana Sui" />

      <h2 style={headingStyle}>Create a Soft Smoky Eye</h2>

      <p style={paragraphStyle}>
        There’s of course many eye looks to try from 2016, like a glitter cut crease, but I reached for a the Too Sweet Faced Peach Palette to crease a soft warm brown smoky eye that’s easy for everyday.
      </p>

      <p style={paragraphStyle}>
        Side note, but I went to the Peach Party in LA back in 2016 and it was such a cool experience and I still have the palette I was gifted from the event! Luckily, as I’m writing this post - you can still purchase the iconic and sweet smelling palette and it’s best not to use an expired one.
      </p>

      <p style={paragraphStyle}>
        Start with a bit of a warmth in the crease, but keep the lid and liner more neutral, with a deeper brown. Smoke out under the lash line and add a slightly shimmery brow bone highlight as well as brightening up the inner corner. Simple right?
      </p>

      <p style={paragraphStyle}>
        Another 2016 look was the IG Baddie style, which was even more elevated with a bold glitter cut crease and more intense contouring. I kept this version a little more wearable for everyday but if you’d like to see another bold glam, let me know in the comments!
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/542404?noHeader=true" title="Rich Lotion - Ana Sui" />

      <h2 style={headingStyle}>Line Your Eyes and Apply Mascara</h2>

      <p style={paragraphStyle}>
        My two favorite liners from the time were the Sephora brand liner and MAC Brushstroke liner. My updated favorite is the Lilybyred liquid liner though!
      </p>

      <p style={paragraphStyle}>
        Smoke out the liner edges with shadow, as Kylie focused more on bold lashes rather than winged liner - that was more Ariana Grande’s signature look.
      </p>

      <p style={paragraphStyle}>
        Rim the waterline with a brown liner and choose a mascara that complements your lash type. I prefer Benefit's Roller Lash for length and curl for my naturally shorter lashes, while Too Faced's Better Than Sex is great for enhancing longer lashes and topping up falsies.
      </p>

      <h2 style={headingStyle}>Big Mink Lashes</h2>

      <p style={paragraphStyle}>
        Very full mink lashes were all the rage, but luckily brands have prioritized faux mink lashes now. Pop a pair on with duo glue and we are almost done!
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/542416?noHeader=true" title="Rich Lotion - Ana Sui" />

      <h2 style={headingStyle}>Pick Your Lip Combo</h2>

      <p style={paragraphStyle}>
        Experiment with various Kylie Lip Kit shades to suit your makeup vibe. In my reference photo, her looks mainly range from matte mauve grey to rosy or deep near-black shades. Very bold and a little edgy.
      </p>

      <p style={paragraphStyle}>
        Some of the old Kylie Lip Kits have been discontinued, but the brand Gerard Cosmetics (also nostalgic) and Rimmel London have great options too.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/542424?noHeader=true" title="Rich Lotion - Ana Sui" />

      <h2 style={headingStyle}>Set and Refresh Your Makeup</h2>

      <p style={paragraphStyle}>
        Finish off by setting your makeup. If your skin feels too matte, rejuvenate it with a refreshing spray like the d'Alba spray, which can also double as a setting spray.
      </p>

      <h2 style={headingStyle}>2016 Makeup Memories</h2>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={image3} alt="2016 Makeup Tutorial via Jackie Wyers on Instagram" style={imageStyle} />
      </div>

      <p style={paragraphStyle}>
        As a young adult and beauty content creator during this era, my personal style wasn't heavily swayed by Kylie Jenner, which means, regrettably, I don't have many throwback looks that embody the era's most popular makeup trends. However, I did adore Little Mix and even recreated Perrie Edwards' makeup from the iconic 2016 hit "Shout Out to My Ex.” That’s probably the most bold look I tried at the time. I’d like to think my photo retouching skills have improved since then… why am I yellow?😂
      </p>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={image4} alt="2016 Makeup Tutorial via Jackie Wyers on Instagram" style={imageStyle} />
      </div>

      <p style={paragraphStyle}>
        This 2016 makeup tutorial should bring back memories and introduce you to techniques that were all the rage. Whether revisiting old favorites or exploring them for the first time, enjoy the process and make it uniquely yours! Let me know if you’d like to see more iconic 2016 looks recreated.
      </p>

      <p style={paragraphStyle}>
        Thank you for reading and if you want to be featured on my site, submit your recreation or version of this look on my Insta @jackiewyers. I’d love to see you switch up your style with confidence!
      </p>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={signature} alt="2016 Makeup Tutorial via Jackie Wyers on Instagram" style={imageStyle} />
      </div>
      <Comments website-id={websiteId} pageId={"No-Makeup-Spring"} />

    </div>
  );

  return (
    <div ref={blogRef} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <Card
        title="No-Makeup Makeup Spring Inspiration 🌸 Pop Culture Edition!"
        description="Just a hint of color, just in time for spring"
        blogContent={blogContent}
      />
    </div>
  );
};

export default Makeup2016;
