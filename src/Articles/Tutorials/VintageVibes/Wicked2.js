import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import DropCap1 from '../../Travel/DropCap1';
import ArticleTitle from '../../../Components/ArticleTitle';
import SocialShare from '../../../Home/SocialShare';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';


const pinterest = `${process.env.PUBLIC_URL}/Images/Articles/pinterest.png`;

const glinda = `${process.env.PUBLIC_URL}/Images/Articles/Wicked/GlindaThumb.webp`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;


 
 

const Card = ({ blogContent }) => (
  <div
    style={{
      margin: '0 auto',
      maxWidth: '100%', // Control max width to center the content
      padding: '10px', // Add padding to prevent text from touching the edges
    }}
  >
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);


const Wicked2 = () => {




const websiteId = '10910';
const blogRef = useRef(null);


const headingStyle = {
  textAlign: 'center',
  fontSize: '2.5rem',
  fontWeight: '400',
  fontFamily: "'Playfair Display', serif",
  color: '#000000',
  maxWidth: '95%',

  margin: '30px auto'
};


const paragraphStyle = {
fontSize: '20px',
color: '#000000',

fontFamily: "EB Garamond, serif",
fontWeight: '100',
padding: '10px',
margin: '10px auto',


  lineHeight: '1.6',

};

const linkStyle = {
textDecoration: 'none', // Removes underline from links
fontFamily: "EB Garamond, serif",
fontWeight: '100',
color: '#745B4F', // Inherits the color of the surrounding text
};

const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '10px',
  margin: '0 2rem'
};

const imageStyle = {
display: 'block',
margin: '1rem auto',
borderRadius: '0px',
height: 'auto'
};

const pinterestGridStyle = {
display: 'grid',
gap: '1rem',
gridTemplateColumns: 'repeat(auto-fit, minmax(236px, 1fr))', // Adjusts columns based on screen size
justifyItems: 'center',
margin: '1rem 0',
};

const ResponsiveIframeStyle = {
width: '100%',
height: '520px', // Maintains original height
border: 'none',
scrolling: 'no',
};

const captionStyle = {
textAlign: 'center',
fontSize: '1rem',
fontFamily: 'Arapey, serif',
fontWeight: '100',
margin: '0 auto',
fontStyle: 'italic',
};




  const blogContent = (
    <div className="container">
<Helmet>
<title>Elphaba “The Wicked Witch of The West” Makeup Tutorial 💚 - Jackie Wyers</title>
  <link rel="canonical" href="https://www.jackiewyers.beauty/articles/wicked-witch-of-the-west" />

  <meta 
    name="description" 
    content="Step-by-step makeup tutorial inspired by Elphaba from Wicked, featuring dramatic green smokey eyes, bold black lips, and glamorous Halloween 2024 beauty looks." 
  />
<meta name="keywords" content="Elphaba makeup tutorial, Wicked Witch makeup, Halloween 2024 makeup ideas, Jackie Wyers Wicked makeup, green smokey eye makeup, bold black lips makeup tutorial, Wicked movie makeup transformation, step-by-step witch makeup, IT Cosmetics Wicked brushes, One/Size Wicked palette, r.e.m. beauty Wicked products, Broadway-inspired makeup looks, dramatic Halloween witch makeup, green face paint tutorial, pop culture beauty tutorials, Wicked-inspired collaborations, yassified witch makeup, Elphaba and Glinda duo makeup ideas, glamorous Halloween makeup, iconic Wicked Broadway looks" />

  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="Elphaba “The Wicked Witch of The West” Makeup Tutorial 💚" />
  <meta 
    property="og:description" 
    content="Step-by-step makeup tutorial inspired by Elphaba from Wicked, featuring dramatic green smokey eyes, bold black lips, and glamorous Halloween 2024 beauty looks." 
  />
   <meta 
    property="og:image" 
    content="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728754845/i5j9aocfpocm39yilgnp.webp" 
  />
  <meta property="og:url" content="https://www.jackiewyers.beauty/articles/wicked-witch-of-the-west" />
  <meta property="og:type" content="article" />

  <meta name="twitter:title" content="Elphaba “The Wicked Witch of The West” Makeup Tutorial 💚" />
  <meta 
    name="twitter:description" 
    content="Step-by-step makeup tutorial inspired by Elphaba from Wicked, featuring dramatic green smokey eyes, bold black lips, and glamorous Halloween 2024 beauty looks." 
  />
  <meta 
    name="twitter:image" 
    content="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728754845/i5j9aocfpocm39yilgnp.webp" 
  />
  <meta name="twitter:card" content="summary_large_image" />
  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
  {`
  {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Elphaba “The Wicked Witch of The West” Makeup Tutorial 💚",
      "description": "Step-by-step makeup tutorial inspired by Elphaba from Wicked, featuring dramatic green smokey eyes, bold black lips, and glamorous Halloween 2024 beauty looks.",
      "image": "https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728754845/i5j9aocfpocm39yilgnp.webp",
      "author": {
        "@type": "Person",
        "name": "Jackie Wyers"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Jackie Wyers Beauty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.jackiewyers.beauty/logo.png"
        }
      },
      "datePublished": "2024-10-11",
      "dateModified": "2024-10-12",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.jackiewyers.beauty/articles/wicked-witch-of-the-west"
      }
    }
  `}
</script>
</Helmet>


<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <a href="/popculture" style={{ fontFamily: 'Arapey, sans-serif', fontSize: '1rem', color: '#000000', textDecoration: 'none' }}>
          BEAUTY // POP CULTURE
        </a>
      </div>

      <ArticleTitle
  mainTitle='Elphaba “The Wicked Witch of The West” Makeup Tutorial💚'
  subTitle="From green smokey eyes to green skin, two WICKED looks to try for Halloween 2024"
  author="Jackie Wyers"
  publishDate="October 11th, 2024"
/>

      
<SocialShare 
  url="https://www.jackiewyers.beauty/articles/wicked" 
  title="Elphaba “The Wicked Witch of The West” Makeup Tutorial – Wicked the Movie 🎀" 
  imageUrl="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728754845/i5j9aocfpocm39yilgnp.webp" 
/>

<ResponsiveYoutube src="https://www.youtube.com/embed/hRtIux714T0?si=TuTyuPI3l6DW-Zeh" title="WICKED MAKEUP💖💚 Ariana Grande’s GLINDA & YASSified ELPHABA🫦" />

     
      <div style = {{textAlign: 'center', margin: '10px auto' }}>
<SubscribeButton />
</div>

<p style={{ margin: '20px auto', textAlign: 'center', fontSize: '1.1rem', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
</p>

      <DropCap1 text="Welcome back, wicked ones! In my first Wicked article, we explored Ariana Grande’s glamorous Glinda look from
  the upcoming film. Now, it’s time to embrace spooky green glamour with two fun takes on Elphaba. Whether you want to rock
  a yassified version of the Wicked Witch or go all out with full green skin, I’ve got you covered. 💚 ✨ "      />



<p style={paragraphStyle}>
  While Elphaba is strong, resilient, and doesn’t quite aim for being POPULAR like Glinda, I still wanted to give her a glamorous twist. 
  Because, let’s be real—when doing duo costumes, we all want to feel fabulous in the pictures, right?
</p>

<h2 style={headingStyle}>
  💚 Elphaba Makeup Tutorial: A Green Queen 💚
</h2>

<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728754845/i5j9aocfpocm39yilgnp.webp" 
    alt="Jackie Wyers Witch-inspired makeup look." 
    style={imageStyle} 
    data-pin-url="/articles/wicked-witch-of-the-west"
    data-pin-media="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728754845/i5j9aocfpocm39yilgnp.webp"
    data-pin-description="Jackie Wyers Witch-inspired makeup look."
  />
  <img 
    src={pinterest}
    alt="Pin this on Pinterest" 
    style={{
      position: 'absolute',
      top: '20px',
      right: '20px',
      width: '50px',
      height: '50px',
      cursor: 'pointer',
      opacity: 0.9,
      transition: 'opacity 0.3s'
    }}
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/wicked-witch-of-the-west&media=https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728754845/i5j9aocfpocm39yilgnp.webp&description=Jackie Wyers Witch-inspired makeup look.')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>



<p style = {captionStyle}>
Elphaba from Wicked makeup with bold green smoky
eyes, dramatic black lips, and a wide-brimmed witch hat
inspired by the iconic Broadway character. Minus the
green skin!
</p>
<p style={paragraphStyle}>
  Step 1: The Matte, Sculpted Base
</p>

<p style={paragraphStyle}>
  Since I wanted to try a version without green face paint and with, I started with the 
  IT Cosmetics Your Skin But Better CC+ Cream Matte with SPF 40 in Fair. I’d recommend using a foundation before the face paint if you do want to go fully green so you have more coverage and an even green shade.
</p>

<p style={paragraphStyle}>
  If you are not going to paint the skin green, go ahead and add your favorite brightening concealer on the high points of the face, contour with an ashy tone and feel free to make it a bit bolder and sharper than usual - it is Halloween!
</p>

<p style={paragraphStyle}>
  Set with powder and so Elphaba’s look contrasts with Glinda’s softer features, so we’re sharpening the brows with a high arch and a more defined nose bridge for a fierce look. I’m wearing a black wig so I took the brows extra dark.
</p>

<ResponsiveIframe title="null" src="https://shopmy.us/collections/public/870241?noHeader=true" style={{width: "100%", minHeight: "1200px", border: "none"}}></ResponsiveIframe>
<p style={paragraphStyle}>
  Step 2: Wickedly Dramatic Eyes 👁 ✨
</p>

<p style={paragraphStyle}>
  Now, let’s dive into a green, dramatic eye! For this, I started by blending Wicked—yes, the shade!— from the 
  ONE/SIZE x WICKED on Broadway palette through the crease, blending into an exaggerated lid shape winged out. I then packed on Emerald City, a glittery green shadow, across the lid for that iconic green sparkle. 💚 
</p>

<p style={paragraphStyle}>
  To intensify the exaggerated crease, I used Wizard and I on a smaller brush for a sharp, dramatic edge. 
  Also, add smokiness under the bottom lash line and add a point in the inner corner. Finish with a blend of Flying Free to the outer V. 
  You can also use the beautiful r.e.m. beauty x Wicked ozdust eyeshadow palette which has similar green tones, but mine hadn’t made it to me in the mail yet when I shot this! 
</p>

<p style={paragraphStyle}>
  Then, create a dramatic wing with black liner, curl the lashes, and add some full outer corner lashes for that fluttery, witchy eye.
</p>

<ResponsiveIframe title="null" src="https://shopmy.us/collections/public/870260?noHeader=true" style={{width: "100%", minHeight: "1200px", border: "none"}}></ResponsiveIframe>
<p style={paragraphStyle}>
  Step 3: Bold Witchy Lips 🖤
</p>

<p style={paragraphStyle}>
  For the lips, we’re going bold with black and blending in a pop of green in the center for that edgy, witchy twist. 
  These lips give the perfect wicked edge!
</p>

<ResponsiveIframe title="null" src="https://shopmy.us/collections/public/870268?noHeader=true" style={{width: "100%", minHeight: "1200px", border: "none"}}></ResponsiveIframe>
<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728754845/srvyltxivqog9xrfsa81.webp" 
    alt="Jackie Wyers Witch of the West makeup look." 
    style={imageStyle} 
    data-pin-url="/articles/wicked-witch-of-the-west"
    data-pin-media="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728754845/srvyltxivqog9xrfsa81.webp"
    data-pin-description="Jackie Wyers Witch of the West makeup look."
  />
  <img 
    src={pinterest}
    alt="Pin this on Pinterest" 
    style={{
      position: 'absolute',
      top: '20px',
      right: '20px',
      width: '50px',
      height: '50px',
      cursor: 'pointer',
      opacity: 0.9,
      transition: 'opacity 0.3s'
    }}
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/wicked-witch-of-the-west&media=https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728754845/srvyltxivqog9xrfsa81.webp&description=Jackie Wyers Witch of the West makeup look.')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>
<h2 style={headingStyle}>
  💚 How To Paint Yourself Green 💚
</h2>

<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728754849/uyxilbcs5onnzlekl4sd.webp" 
    alt="Jackie Wyers Wicked makeup inspiration." 
    style={imageStyle} 
    data-pin-url="/articles/wicked-witch-of-the-west"
    data-pin-media="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728754849/uyxilbcs5onnzlekl4sd.webp"
    data-pin-description="Jackie Wyers Wicked makeup inspiration."
  />
  <img 
    src={pinterest}
    alt="Pin this on Pinterest" 
    style={{
      position: 'absolute',
      top: '20px',
      right: '20px',
      width: '50px',
      height: '50px',
      cursor: 'pointer',
      opacity: 0.9,
      transition: 'opacity 0.3s'
    }}
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/wicked-witch-of-the-west&media=https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728754849/uyxilbcs5onnzlekl4sd.webp&description=Jackie Wyers Wicked makeup inspiration.')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>





<p style = {captionStyle}>
Full Elphaba transformation with vibrant green face
paint, dark glamorous makeup, and signature witch hat.
Inspired by the Wicked witch from the Broadway musical
Wicked.
</p>
<p style={paragraphStyle}>
  Step 4: Fully Commit to the Iconic Green Look
</p>

<p style={paragraphStyle}>
  Since this was my first time using green paint for a full Elphaba transformation, I decided to film the look without the green skin initially and test out the paint at the end. 
  The application was fairly easy using a damp beauty sponge. While blending around the neck and cheeks was a breeze, getting into the contours of the nose, brows, and hairline was trickier—especially with the rest of the makeup already in place.
</p>

<p style={paragraphStyle}>
  To make things easier for yourself, I recommend applying the green paint after foundation if you’re going for the full green look! Don’t forget to bring back in the contours with deeper greens and a purply cheek contour similar to the broadway show so the makeup doesn’t appear flat. Final tip, since the paint is water-activated, it can remove the paint as well. Don’t use a setting spray that has water droplets as it can leave marks in the green complexion.
</p>

<div style={{ position: 'relative', display: 'inline-block' }}>
  <img 
    src="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728754843/tgktrnc62kh7xhxnt6fc.webp" 
    alt="Jackie Wyers dramatic Wicked makeup look." 
    style={imageStyle} 
    data-pin-url="/articles/wicked-witch-of-the-west"
    data-pin-media="https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728754843/tgktrnc62kh7xhxnt6fc.webp"
    data-pin-description="Jackie Wyers dramatic Wicked makeup look."
  />
  <img 
    src={pinterest}
    alt="Pin this on Pinterest" 
    style={{
      position: 'absolute',
      top: '20px',
      right: '20px',
      width: '50px',
      height: '50px',
      cursor: 'pointer',
      opacity: 0.9,
      transition: 'opacity 0.3s'
    }}
    onClick={() => window.open('https://pinterest.com/pin/create/button/?url=https://www.jackiewyers.beauty/articles/wicked-witch-of-the-west&media=https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1728754843/tgktrnc62kh7xhxnt6fc.webp&description=Jackie Wyers dramatic Wicked makeup look.')}
    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
    onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
  />
</div>



<h2 style = {headingStyle}>
    Styling Elphaba
</h2>
<p style={paragraphStyle}>
For the final styling touches, you could go with a
side braid and glasses for a chic vibe, or opt for a
black ruffled dress with pops of purple for drama. If
you want something simpler, a black turtleneck gives
the look a modern edge. I thought this green dress
from IvyCityCo was a great pick as well. </p>

<ResponsiveIframe title="null" src="https://shopmy.us/collections/public/870281?noHeader=true" style={{width: "100%", minHeight: "1200px", border: "none"}}></ResponsiveIframe>


<h2 style={headingStyle}>
  💚 Wicked Collaborations and More 💖
</h2>

<p style={paragraphStyle}>
  This week, several new Wicked collabs have come out! While some of my favorites are already sold out like the 
Target x Wicked iconic cardigan, I love the Aerie line and have listed some of my wish list below to shop.
</p>

<ResponsiveIframe title="null" src="https://shopmy.us/collections/public/870292?noHeader=true" style={{width: "100%", minHeight: "1200px", border: "none"}}></ResponsiveIframe>
<p style={paragraphStyle}>
  Thank you for joining me on this Elphaba, The Wicked Witch of the West transformation! Keep reading for the glamorous 
  
</p>




      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <a href="/wicked" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={glinda} alt="Wicked The Movie Jackie Wyers" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', display: 'block' }} />
          MORE POP CULTURE →
        </a>
      </div>
    

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={signature} alt="Jackie Wyers Signature" style={{ width: '100%', maxWidth: '650px' }} />
      </div>
      
      <Comments website-id={websiteId} page-id={"wickedstrizzmonbiiiiiiiizzzzz-65fizz"} />
   
    </div>
  );

  return (
    <div ref={blogRef}>
  <Card
        title="Elphaba “The Wicked Witch of The West” Makeup Tutorial💚"
        description="From green smokey eyes to green skin, two WICKED looks to try for Halloween 2024"
        blogContent={blogContent}
      />   
      
    

       </div>
      
  );
};

export default Wicked2;
