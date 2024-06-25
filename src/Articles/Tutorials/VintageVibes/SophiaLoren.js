import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import '../../ExampleTutorial1.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import TextReveal from '../../../Components/TextReveal';
import SubscribeButton from '../../../Components/SubscribeButton';
import DropCap from '../../../Components/DropCap';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import AdSenseAd from '../../../Advertising/Ads';

const Sophia1 = `${process.env.PUBLIC_URL}/Images/Articles/SophiaLoren/SophiaLorenTitle.png`;
const SophiaTwo = `${process.env.PUBLIC_URL}/Images/SophiaDoubl.jpeg`;
const sophiafive = `${process.env.PUBLIC_URL}/Images/Sophia5.jpeg`;
const SophiaFace = `${process.env.PUBLIC_URL}/Images/Articles/SophiaLoren/SophiaLorenBlankFaceChart-2.jpg`;
const Signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;
const sharon = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateIconic/ICONICSHARONTHUMBNAIL.jpg`;
const teespring = `${process.env.PUBLIC_URL}/Images/teespringbanner.jpeg`;

const Card = ({ blogContent }) => (
  <div>
    <div><TextReveal text='TIME TRAVEL TUTORIALS' /></div>
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);

const SophiaLorenPost = () => {
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
        <title>Sophia Loren Makeup Tutorial - Jackie Wyers</title>
        <meta name="description" content="Explore Jackie Wyers' Sophia Loren makeup tutorial, recreating the iconic '60s look with modern products. Follow along for a step-by-step guide." />
      </Helmet>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
        <a href="/timetraveltutorials" style={{ fontFamily: 'Arapey', fontSize: '15px', color: 'black', textDecoration: 'none' }}>
          BEAUTY // TIME TRAVEL TUTORIALS
        </a>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={Sophia1} alt="Sophia Loren in Arabesque" style={{ width: '100%' }} />
      </div>

      <ResponsiveYoutube src="https://www.youtube.com/embed/o8_dfwGNXAc?si=q2_GxBp3sClXnUUB" title="Sophia Loren Makeup Tutorial - Jackie Wyers on Youtube" />

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <SubscribeButton />
      </div>

      <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
        All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
      </p>

      <DropCap text="Welcome back to my favorite series, Time Travel Tutorials, where we delve into the glamorous world of beauty icons from the past. Today's spotlight is on the mesmerizing Italian beauty, Sophia Loren. Born on September 20th, 1934, in Rome, Italy, Sophia Loren is a megastar in both Hollywood and Italian cinema. Her career, spanning over six decades, is a testament to her immense talent, charisma, and iconic makeup style, which continues to inspire admiration (and imitation) today." />
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
     
     <p style={paragraphStyle}>
        In this tutorial, we'll explore a timeless look inspired by her iconic pink towel scene in "Arabesque." My goal is to inspire you with the best modern products that capture the vintage charm of Loren's era, making it possible for you to recreate this look. If you decide to give this tutorial a try, please be sure to tag me or send a photo to be featured on the blog! I'd love to see you in this glamorous style.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a href="https://www.instagram.com/p/C3Gv0qmslqJ/?hl=en" target="_blank" rel="noopener noreferrer">
          <img src={SophiaTwo} alt=" look" style={{ width: '100%' }} />
        </a>
      </div>

      <h2 style={headingStyle}>The Essence of Sophia Loren’s Iconic Makeup</h2>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={SophiaFace} alt="Sophia Loren's iconic look" style={{ width: '100%' }} />
      </div>

      <p style={paragraphStyle}>
        Over the years, I’ve explored numerous 1960s makeup styles. While <a href="/twiggy" style={{ color: 'black' }}>Twiggy</a>, <a href="/yardley1965" style={{ color: 'black' }}>Jean Shrimpton</a>, and <a href="/sharontatebridal" style={{ color: 'black' }}>Sharon Tate</a> often sported an exaggerated, graphic crease to emphasize an oversized lid, Sophia was known for her double wing liner that created a very elongated, sexy cat eye. Let’s break down the entire look from the start!
      </p>

      <h2 style={headingStyle}>The Foundation of Loren's Look: A Tanned Base</h2>
      <p style={paragraphStyle}>
        To replicate Sophia Loren's radiant tan from the "Arabesque" shower scene, start with your favorite self-tanner. I initially used a dark shade of Loving Tan, but I’d now recommend Coco & Eve Tanning Mousse. Skincare is crucial for a flawless foundation application; after hydrating with a rich moisturizer, I prepped under the eyes with Tatcha The Silk Peony Melting Eye Cream.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/495255?noHeader=true" title="Foundation Choices" />

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
        For primer, I opted for the Armani Beauty Luminous Silk Hydrating Primer, (my favorite Italian brand) followed by Rare Beauty’s Serum foundation to even out the tan while offering lighter coverage, mirroring Loren's sun-kissed skin. I highlighted my chin and jawline with Maybelline's Age Rewind Concealer, focusing on the center of my face and cheekbones to really make the center of the face pop.
      </p>

      <h2 style={headingStyle}>Sculpting the Iconic Bone Structure</h2>
      <p style={paragraphStyle}>
        I went lighter on the foundation because we'll be highlighting and contouring to mimic Loren's stunning bone structure, which will add to the coverage. I highlighted my chin and jawline with Maybelline's Age Rewind Concealer, focusing on the center of my face and cheekbones to really make the center of the face pop.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/495258?noHeader=true" title="Sculpting Products" />

      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5em', maxWidth: '100%' }}>
        CONTAINS: AFFILIATE LINKS
      </p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>Old Hollywood Matte & Powdered Skin Finish</h2>
      <p style={paragraphStyle}>
        The overall makeup aesthetic in Old Hollywood emphasized a polished, meticulously crafted appearance, with matte skin providing the perfect canvas for dramatic eye makeup, sculpted eyebrows, and bold lip colors that defined the period's iconic beauty looks. Achieve the matte skin with loose powder on a puff! While dewy skin is super trendy now, giving a matte base a try can bring back that iconic glamour and make you feel like you're on the set of your own film.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/495261?noHeader=true" title="Matte Skin Products" />

      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5em', maxWidth: '100%' }}>
        CONTAINS: AFFILIATE LINKS
      </p>

      <h2 style={headingStyle}>The “Laminated” Brows</h2>
      <p style={paragraphStyle}>
        Sophia Loren's eyes are her most captivating feature. Let’s frame them with full, arched, and elongated brows! Sophia’s brows appeared drawn on in small strokes, brushed upwards, similar to a brow tattoo or laminated brow style.
      </p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>The Sophia Loren Double Winged Liner Cat Eye</h2>
      <p style={paragraphStyle}>
        The first step to achieve the iconic eye is to use a white gel liner to create a wing from the outer corner of the eye pulled outwards. Connect this wing to your waterline, also rimmed with white to open up the eyes.
      </p>

      <p style={paragraphStyle}>
        Select a deep neutral palette, with grays, browns, and taupes. I selected the Dior 5 Couleurs Couture Eyeshadow Palette (649 Nude Dress) and while some photos of Sophia’s signature eye look feature a charcoal gray (a deep, dark shade of gray close to black), in the "Arabesque" scenes, it appeared more like a taupe (a warmer neutral, more of a gray-brown) through the lens.
      </p>

      <p style={paragraphStyle}>
        I took a rich taupe shadow smoked up from the lash line, softening the edges with a lighter shimmery taupe into the crease. Don’t forget to brighten up the brow bone to highlight the arched brow.
      </p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <p style={paragraphStyle}>
        Using a matte black shadow, map out the double wing, both above and below the white liner closest to the lash line. Finish up with a bold gel liner for precision and lots of mascara to make the eyes pop.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/495263?noHeader=true" title="Eye Makeup Products" />

      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5em', maxWidth: '100%' }}>
        CONTAINS: AFFILIATE LINKS
      </p>

      <h2 style={headingStyle}>The Elongated Lash Trick</h2>
      <p style={paragraphStyle}>
        With these glamorous eyes, take it a step further with outer corner lashes, placed slightly beyond the natural lash line, hidden in the black liner. This is the sexiest cat eye ever!
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/495279?noHeader=true" title="Lash Products" />
 <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>Lips and Cheeks: The Finishing Touches</h2>
      <p style={paragraphStyle}>
        For the lips, I chose a vibrant peachy pink shade from Charlotte Tilbury called Sunset Lover—a perfect match for a sun-kissed Italian beauty! This has sadly been discontinued, but a similar shade is Charlotte Tilbury Hot Lips 3 Angel Alessandra, which is slightly more nude. Sophia’s blush was subtle, so using the same lipstick as a bit of cream blush works perfectly. A pink gloss added the final touch of color.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/495280?noHeader=true" title="Lip and Cheek Products" />

      <h2 style={headingStyle}>Nude Lips</h2>
      <p style={paragraphStyle}>
        While peach lipsticks were often seen on screen, some behind-the-scenes photos show a more nude style, as well as the second “Arabesque” look covered below. Too Faced Milkshake gloss is a great option for this.
      </p>

      <h2 style={headingStyle}>The Arabesque Hairstyle</h2>
      <p style={paragraphStyle}>
        While this iconic look features a hot pink towel set (<a href="https://www.amazon.com/Microfiber-Towel-Towels-Straight-Turban/dp/B0CFSFMDNZ?crid=1WZ7PGN3WWST1&dib=eyJ2IjoiMSJ9.LBBHeFjdHjcdyl-K9Ri0R3jxF1nkWHhs-qSWdmipuZpqjJVU8u0CZDEW9u--BaVkOyRcijy1sMxBtYC5srxS9NZuq0nHTX86wLgCcfQFG-r-nLDrSkwFnR-Ia2yuq37YtO3SrN6ntId6uh_g9B0elbl6GtdVat3XfdgUNHkIkNvj9MCENm4IV17maozQH0fOAAm71UCKrgKgMyjMdohujLR2FAFwN6BdtKbK6TEv9HqgT89nBl35N8fMGVotiSwnVnqaYAn8VRHhzv_Kvv_ux5v3-1O4fu1PgCP6Y_GrUpY.UoArAOu8AUIyEF3LAarqE_5-yb-3x5JvedK1qzkwhVM&dib_tag=se&keywords=pink+towel+hair&qid=1716659839&sprefix=pink+towel+hai,aps,114&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&linkCode=sl1&tag=jackiewyers-20&linkId=cc7cb899a314b1fb24348db4617d0913&language=en_US&ref_=as_li_ss_tl" style={{ color: 'black' }} target="_blank" rel="noopener noreferrer">find a similar one on Amazon here</a>), you can also complete the look with a retro hairstyle, starting with a high ponytail and pin-curling into a bun for volume and style. See a mini tutorial by tapping the image below.
      </p>



      <p style={paragraphStyle}>
        Whether you're a fan of Sophia Loren, a lover of the '60s, or just in search of some beauty inspiration, I hope you found this guide inspiring. Join me in celebrating the eternal elegance of Sophia Loren, and I can’t wait to create another Time Travel Tutorial for you.
      </p>

      <p style={paragraphStyle}>
        Want to be featured on my site? Submit your recreation or version of this look to me on Insta! I’d love to see you switch up your style with confidence!
      </p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <a href="/iconicsharon" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={sharon} alt="Margot Robbie - Barbie Movie" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', display: 'block' }} />
          MORE VINTAGE VIBES →
        </a>
      </div>
      <div style={{ textAlign: 'center' }}>
        <a href="/vintagevibesmerch" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={teespring} alt="Margot Robbie - Barbie Movie" style={{ width: '100%', maxWidth: '1400px', display: 'block' }} />
          SHOP VINTAGE VIBES MERCH →
        </a>
      </div>

      <div style={{ textAlign: 'center' }}>
        <img src={Signature} alt="Signature" style={{ width: '100%', height: 'auto' }} />
      </div>

      <Comments website-id={websiteId} page-id={"Sophia-Loren"} />
    </div>
  );

  return (
    <div ref={blogRef}>
      <Card blogContent={blogContent} />
    </div>
  );
};

export default SophiaLorenPost;
