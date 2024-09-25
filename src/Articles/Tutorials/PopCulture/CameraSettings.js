import React, { useRef, useEffect } from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import DropCap from '../../../Components/DropCap';
import AdSenseAd from '../../../Advertising/Ads';
import { initGA, logPageView } from '../../../analytics';
import { Helmet } from'react-helmet';

import ResponsiveIframeNoScroll from '../../../Components/ResponsiveIframeNoScroll';
import ArticleTitle from '../../../Components/ArticleTitle';
import DropCap1 from '../../Travel/DropCap1';



const image1 = `${process.env.PUBLIC_URL}/Images/Articles/CameraSettings/1.JPG`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/CameraSettings/2.JPG`;
const image3 = `${process.env.PUBLIC_URL}/Images/Articles/CameraSettings/3.JPG`;
const image4 = `${process.env.PUBLIC_URL}/Images/Articles/CameraSettings/4.jpg`;
const image5 = `${process.env.PUBLIC_URL}/Images/Articles/CameraSettings/5.jpg`;
const image6 = `${process.env.PUBLIC_URL}/Images/Articles/CameraSettings/6.JPG`;
const image7 = `${process.env.PUBLIC_URL}/Images/Articles/CameraSettings/7.JPG`;
const image8 = `${process.env.PUBLIC_URL}/Images/Articles/CameraSettings/8.jpeg`;
const image9 = `${process.env.PUBLIC_URL}/Images/Articles/CameraSettings/9.jpg`;
const image10 = `${process.env.PUBLIC_URL}/Images/Articles/CameraSettings/10.JPG`;
const image11 = `${process.env.PUBLIC_URL}/Images/Articles/CameraSettings/11.JPG`;
const image12 = `${process.env.PUBLIC_URL}/Images/Articles/CameraSettings/12.JPG`;
const image13 = `${process.env.PUBLIC_URL}/Images/Articles/CameraSettings/13.JPG`;
const image14 = `${process.env.PUBLIC_URL}/Images/Articles/CameraSettings/14.JPG`;
const image15 = `${process.env.PUBLIC_URL}/Images/Articles/CameraSettings/15.JPG`;
const image16 = `${process.env.PUBLIC_URL}/Images/Articles/CameraSettings/16.JPG`;
const image17 = `${process.env.PUBLIC_URL}/Images/Articles/CameraSettings/17.jpg`;
const vsco = `${process.env.PUBLIC_URL}/Images/Articles/CameraSettings/vsco.png`;
const fairytale = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/fairytalethumbnail.webp`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
  <div
    style={{
      margin: '0 auto',
      maxWidth: '95%', // Control max width to center the content
      padding: '10px', // Add padding to prevent text from touching the edges
    }}
  >
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);

const CameraSettings = () => {

  useEffect(() => {
    initGA();
    logPageView('/camera-settings');
  }, []);


  const websiteId = '10910';
  const blogRef = useRef(null);

 

  const headingStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: '100',
    fontFamily: 'Playfair Display, serif',
    color: '#000000',
    maxWidth: '95%',

    margin: '30px auto'
};


const paragraphStyle = {
  fontSize: '22px',
  color: '#000000',

  fontFamily: 'Georgia, serif',
  fontWeight: 'regular',

  margin: '1rem 1rem',

  maxWidth: '95%',
    lineHeight: '1.6',

};

const linkStyle = {
  textDecoration: 'none', // Removes underline from links
  fontFamily: 'Playfair Display, serif',
  color: '#000000', // Inherits the color of the surrounding text
};

const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '10px',
    maxWidth: '95%',
    margin: '0 2rem'
};

const imageStyle = {
  display: 'block',
  margin: '1rem auto',
  borderRadius: '0px',
  maxWidth: '95%',
  height: 'auto'
};

const pinterestGridStyle = {
  display: 'grid',
  gap: '1rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(236px, 1fr))', // Adjusts columns based on screen size
  justifyItems: 'center',
  margin: '1rem 0',
};

const iframeStyle = {
  width: '100%',
  maxWidth: '95%',
  height: '520px', // Maintains original height
  border: 'none',
  scrolling: 'no',
};

const captionStyle = {
  textAlign: 'center',
  fontSize: '1.1rem',
  fontFamily: 'Raleway, serif',
  fontWeight: 'normal',
  margin: '0 auto',
  maxWidth: '85%',
  fontStyle: 'italic',
};




  const blogContent = (
    <div className="container">
 <Helmet>
  <title>Camera Settings - A Guide to Scroll-Stopping iPhone Photos - Jackie Wyers</title>
  <link rel="canonical" href="https://jackiewyers.beauty/camera-settings" />

  <meta name="description" content="Discover tips and tricks for capturing stunning photos on your iPhone with these camera settings and photography hacks. Elevate your mobile photography with Jackie Wyers' guide." />
  <meta name="keywords" content="iPhone Camera Settings, Mobile Photography, Jackie Wyers, Photography Tips, iPhone Photography, Camera Tips, Content Creator Tips, iPhone 13 Pro Max, photography hacks, camera settings guide, how to take better photos on iPhone, Vibrant setting, rule of thirds, portrait mode, HDR mode, night mode photography, bokeh effect, lighting tips, natural light photography, Instagram photography, mobile editing tips" />

  <meta property="og:title" content="Camera Settings - A Guide to Scroll-Stopping iPhone Photos - Jackie Wyers" />
  <meta property="og:description" content="Discover tips and tricks for capturing stunning photos on your iPhone with these camera settings and photography hacks. Elevate your mobile photography with Jackie Wyers' guide." />
  <meta property="og:image" content="https://jackiewyers.beauty/Images/Articles/CameraSettings/coverphoot.jpg" />
  <meta property="og:url" content="https://jackiewyers.beauty/camera-settings" />

  <meta name="twitter:title" content="Camera Settings - A Guide to Scroll-Stopping iPhone Photos - Jackie Wyers" />
  <meta name="twitter:description" content="Discover tips and tricks for capturing stunning photos on your iPhone with these camera settings and photography hacks. Elevate your mobile photography with Jackie Wyers' guide." />
  <meta name="twitter:image" content="https://jackiewyers.beauty/Images/Articles/CameraSettings/coverphoot.jpg" />
  <meta name="twitter:card" content="summary_large_image" />

  {/* Google Analytics Script */}
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-RT6GR7JXYG"></script>
  <script src={`${process.env.PUBLIC_URL}/analytics.js`} async></script>

  {/* Google Ads Script */}
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4660168246825318" crossorigin="anonymous"></script>

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Camera Settings - A Guide to Scroll-Stopping iPhone Photos",
        "description": "Discover tips and tricks for capturing stunning photos on your iPhone with these camera settings and photography hacks. Elevate your mobile photography with Jackie Wyers' guide.",
        "image": "https://jackiewyers.beauty/Images/Articles/CameraSettings/coverphoot.jpg",
        "author": {
          "@type": "Person",
          "name": "Jackie Wyers"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Jackie Wyers Beauty",
          "logo": {
            "@type": "ImageObject",
            "url": "https://jackiewyers.beauty/jw3logo.png"
          }
        },
        "datePublished": "2024-08-11",
        "dateModified": "2024-08-11",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://jackiewyers.beauty/camera-settings"
        }
      }
    `}
  </script>
</Helmet>

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <a href="/" style={{ fontFamily: 'GFS Didot, serif', fontSize: '1rem', color: '#000000', textDecoration: 'none' }}>
          CREATOR TIPS // PHOTOGRAPHY
        </a>
      </div>


      <ArticleTitle
  mainTitle="Camera Settings - A Guide to Scroll-Stopping iPhone Photos"
  subTitle="My Guide to Scroll-Stopping iPhone Photos"
  author="Jackie Wyers"
  publishDate="Aug 11th, 2024"
/>

<div style = {{textAlign: 'center', margin: '10px auto' }}>
<SubscribeButton />
</div>



<p style={{ margin: '20px auto', textAlign: 'center', fontSize: '1.1rem', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
</p>


   
      <DropCap1 text="Welcome back! Today, I’m sharing some of my top tips for capturing stunning photos on your phone. As someone who isn't a professional photographer and prefers simple, non-technical approaches, these tips are perfect for anyone who loves capturing soft, crisp, true-to-colour images that shine on Instagram." />
      

      <p style={paragraphStyle}>
  The <a style={linkStyle} href="https://www.apple.com/iphone-13-pro/" target="_blank" rel="noreferrer">iPhone</a> is a powerhouse for mobile photography, and with a few simple tweaks to your camera settings, you can elevate your photos to a more professional level. Here are some of my favorite settings and tips to help you make the most out of your <a style={linkStyle} href="https://www.apple.com/iphone-13-pro/" target="_blank" rel="noreferrer">iPhone 13 Pro Max</a> camera. These tips also work great on newer models, proving you don’t need the latest phone to achieve amazing results. Throughout this guide, I have included some recent photos from traveling this summer, and you can view all my photos <a style={linkStyle} href="https://instagram.com/jackiewyers" target="blank" rel="noreferrer">@jackiewyers</a>.
</p>

<div style={gridContainerStyle}>
  <img src={image1} alt="Elizabeth Bennet - Pride & Prejudice" style={{ width: '100%', maxWidth: '650px', margin: '0 auto' }} />
</div>

<p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
  Recent Photo shot on <a style={linkStyle} href="https://www.apple.com/iphone-13-pro/" target="_blank" rel="noreferrer">iPhone 13 Pro Max</a>
</p>

<div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>

<h2 style={headingStyle}>Set Your Camera Style to Vibrant</h2>

<p style={paragraphStyle}>
  Since my content often focuses on makeup, hair, and fashion, I prefer photos that are crisp, bright, and vibrant. The <a style={linkStyle} href="https://www.apple.com/iphone-13-pro/" target="_blank" rel="noreferrer">iPhone 13 Pro Max</a> offers various photographic styles that allow you to customize the tone and warmth of your images. I use the Vibrant style, which enhances the colors, making them look more vivid and lively. To adjust this, go to <span style={{ fontWeight: 'bold' }}>Settings {'>'} Camera {'>'} Photographic Styles</span>, and choose Vibrant. Many accounts love a more muted, moody vibe, but I’m big on true-to-color images and find that without Vibrant on, the camera can mute images slightly.
</p>

<div style={gridContainerStyle}>
  <img src={image2} alt="Elizabeth Bennet - Pride & Prejudice" style={{ width: '100%', maxWidth: '650px' }} />
  <img src={image3} alt="Elizabeth Bennet - Pride & Prejudice" style={{ width: '100%', maxWidth: '650px' }} />
  <img src={image4} alt="Elizabeth Bennet - Pride & Prejudice" style={{ width: '100%', maxWidth: '650px' }} />
  <img src={image5} alt="Elizabeth Bennet - Pride & Prejudice" style={{ width: '100%', maxWidth: '650px' }} />
</div>

<p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
  Vibrant setting photos at the <a style={linkStyle} href="https://www.museivaticani.va" target="_blank" rel="noreferrer">Vatican Museum</a>
</p>

<div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>

<h2 style={headingStyle}>Always Clean Your Lens</h2>

<p style={paragraphStyle}>
  It may sound simple, but keeping your lens clean is crucial for capturing clear, sharp photos. A dirty lens can cause your photos to appear blurry or hazy. Make it a habit to wipe your lens with a <a style={linkStyle} href="https://www.amazon.com/MagicFiber-Microfiber-Cleaning-Cloths-PACK/dp/B0050R67U0" target="blank" rel="noreferrer">microfibre cloth</a> before taking any photos. If you’re like me, you might find yourself wiping it off on whatever’s handy—like my husband’s shirt!
</p>

<div style={gridContainerStyle}>
  <img src={image6} alt="Elizabeth Bennet - Pride & Prejudice" style={{ width: '100%', maxWidth: '650px', margin: '0 auto' }} />
</div>

<p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
  Taken with .5 zoom lens on <a style={linkStyle} href="https://www.apple.com/iphone-13-pro/" target="_blank" rel="noreferrer">iPhone 13 Pro Max</a> right after cleaning the lens
</p>

<div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>

<h2 style={headingStyle}>Composition and the Rule of Thirds</h2>

<p style={paragraphStyle}>
  The rule of thirds is a classic photography principle that helps you create balanced and visually appealing images. Enable the grid feature on your camera by going to <span style={{ fontWeight: 'bold' }}>Settings {'>'} Camera</span> and toggling on Grid. Place your subject along the lines or at the intersections for a more compelling composition. This simple adjustment can make a big difference in the overall impact of your photos.
</p>

<div style={gridContainerStyle}>
  <img src={image7} alt="Elizabeth Bennet - Pride & Prejudice" style={{ width: '100%', maxWidth: '650px', margin: '0 auto' }} />
</div>

<p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
  Example of subject directly in the center of the grid, with more space above the head and feet at the bottom of the image
</p>

<h2 style={headingStyle}>Turn Off HDR Mode</h2>

<p style={paragraphStyle}>
  I prefer to keep <span style={{ fontWeight: 'bold' }}>HDR (High Dynamic Range)</span> mode turned off on my <a style={linkStyle} href="https://www.apple.com/iphone-13-pro/" target="_blank" rel="noreferrer">iPhone</a> camera because I find it allows for more control over the exposure and overall look of my photos. HDR blends multiple exposures to balance highlights and shadows, but it can sometimes result in images that feel overly processed, losing the natural contrast and depth that I prefer.
</p>

<div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>

<p style={paragraphStyle}>
  Turning off HDR gives me greater flexibility during post-processing, allowing me to adjust exposure, contrast, and shadows to suit my personal style. Additionally, for scenes with movement, I avoid HDR to prevent ghosting effects, ensuring my images remain sharp and true to the moment.
</p>

<h2 style={headingStyle}>Take Advantage of Night Mode</h2>

<p style={paragraphStyle}>
  The <a style={linkStyle} href="https://www.apple.com/iphone-13-pro/" target="_blank" rel="noreferrer">iPhone 13 Pro Max</a> & newer models excel in low-light conditions, thanks to its Night Mode. Night Mode automatically activates in low light, but you can also manually adjust the exposure time for even better results. Hold your phone steady or use a tripod to avoid motion blur, although a little blur can sometimes add to the mood.
</p>

<p style={paragraphStyle}>
  For even better nighttime images, I’d recommend the <a style={linkStyle} href="https://www.canon.com/cameras/powershot-g7-x" target="_blank" rel="noreferrer">Canon G7x</a> with flash for very crisp photos that have a bit of a retro feel. This style of photo has been growing in popularity on social media, especially for vacation pictures.
</p>

<div style={gridContainerStyle}>
  <img src={image9} alt="Elizabeth Bennet - Pride & Prejudice" style={{ width: '100%', maxWidth: '650px', margin: '0 auto' }} />
</div>

<p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
  <a style={linkStyle} href="https://www.canon.com/cameras/powershot-g7-x" target="_blank" rel="noreferrer">Canon G7x</a> with flash example
</p>

<ResponsiveIframeNoScroll src="https://shopmy.us/collections/public/726380?noHeader=true" title="Shop My Victoria's Secret Favorites" />

<div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>

<h2 style={headingStyle}>When to Use Portrait Mode</h2>

<p style={paragraphStyle}>
  Portrait mode on the <a style={linkStyle} href="https://www.apple.com/iphone-13-pro/" target="_blank" rel="noreferrer">iPhone 13 Pro Max</a> allows you to adjust the depth of field, creating a beautiful bokeh effect that blurs the background while keeping the subject in focus. I typically use this mode outside if there is a forest in the background or in mirror photos for quick selfies. I notice a big difference in clarity and a pull to the subject.
</p>

<div style={gridContainerStyle}>
  <img src={image10} alt="Elizabeth Bennet - Pride & Prejudice" style={{ width: '100%', maxWidth: '650px', margin: '0 auto' }} />
</div>

<p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
  Portrait mode for mirror selfie
</p>

<p style={paragraphStyle}>
  However, if I’m in a stunning location like the <a style={linkStyle} href="https://www.trevifountain.net" target="_blank" rel="noreferrer">Trevi Fountain</a> that has beautiful details, I prefer to capture all the sculptures! You can always blur the background in post-processing, but you can’t bring back the lost details if you shoot in portrait mode.
</p>

<div style={gridContainerStyle}>
  <img src={image12} alt="Elizabeth Bennet - Pride & Prejudice" style={{ width: '100%', maxWidth: '650px', margin: '0 auto' }} />
</div>

<div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>

<h2 style={headingStyle}>Optimize Your Lighting</h2>

<p style={paragraphStyle}>
  Natural light is your best friend when it comes to photography. Here are my top three lighting tips:
</p>

<p style={paragraphStyle}>
  1. <span style={{ fontWeight: 'bold' }}>Bright Window Light:</span> Stand by a big window on a bright day for a great headshot or selfie with friends.
</p>

<p style={paragraphStyle}>
  2. <span style={{ fontWeight: 'bold' }}>Side Lighting:</span> Position yourself so that light comes in from one side, casting gentle shadows for a more dynamic image.
</p>

<p style={paragraphStyle}>
  3. <span style={{ fontWeight: 'bold' }}>Golden Hour:</span> Take advantage of the soft, warm light during golden hour.
</p>

<div style={gridContainerStyle}>
  <img src={image15} alt="Elizabeth Bennet - Pride & Prejudice" style={{ width: '100%', maxWidth: '650px', margin: '0 auto' }} />
</div>

<p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
  Love the way iPhones capture sunsets, especially with the Vibrant setting on
</p>

<div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <a href="/fairytalewedding" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={fairytale} alt="fairytale" style={{ width: '100%', maxWidth: '500px', display: 'block', margin: '0 auto' }} />
          OUR FAIRYTALE WEDDING →
        </a>
      </div>

<div style = {gridContainerStyle}>        
    <img src={signature} alt="Elizabeth Bennet - Pride & Prejudice" style={{ width: '100%' }} />
    </div>

    <Comments website-id={websiteId} page-id={"Camera-Settings"} />


      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>


<div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>

      
    </div>
    
  );

  return (
    <div ref={blogRef}>
      <Card
        title="Camera Settings - A guide to scroll-stopping iPhone photos"
        description="A Guide to getting the best out of Apple's camera settings for scroll-stopping iPhone photos"
        blogContent={blogContent}
      />
    </div>
  );
};

export default CameraSettings;
