import React, { useRef, useEffect } from 'react';
import '../../ExampleTutorial1.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import DropCap from '../../../Components/DropCap';
import TextReveal from '../../../Components/TextReveal';
import AdSenseAd from '../../../Advertising/Ads';
import { initGA, logPageView } from '../../../analytics';
import { Helmet } from'react-helmet';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';

import ReactGA from 'react-ga';



const title = `${process.env.PUBLIC_URL}/Images/Articles/CameraSettings/cameratitle.png`;
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
  <div>
    <div><TextReveal text='HOW-TO : IPHONE' /></div>
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);

const CameraSettings = () => {
    const websiteId = '10910';
    const blogRef = useRef(null);
  
    useEffect(() => {
      logPageView();
    }, []);
  
    const logPageView = () => {
      if (window.gtag) {
        window.gtag('config', 'G-RT6GR7JXYG', {
          page_path: '/camerasettings',
          page_title: 'Camera Settings - A Guide to Scroll-Stopping iPhone Photos',
        });
      }
    };


  const headingStyle = {
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: 'bold',
    fontFamily: 'Arapey, serif',
    color: '#333',
    margin: '1.5rem'
  };

  const gridContainerStyle = {
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1rem',
    margin: '1rem 0',
    textAlign: 'center', // Center content inside the grid cells
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
  <title>Camera Settings - A Guide to Scroll-Stopping iPhone Photos - Jackie Wyers</title>
  <meta name="description" content="Discover tips and tricks for capturing stunning photos on your iPhone with these camera settings and photography hacks. Elevate your mobile photography with Jackie Wyers' guide." />
  <meta name="keywords" content="iPhone Camera Settings, Mobile Photography, Jackie Wyers, Photography Tips, iPhone Photography, Camera Tips, Content Creator Tips" />
  <meta property="og:title" content="Camera Settings - A Guide to Scroll-Stopping iPhone Photos - Jackie Wyers" />
  <meta property="og:description" content="Discover tips and tricks for capturing stunning photos on your iPhone with these camera settings and photography hacks. Elevate your mobile photography with Jackie Wyers' guide." />
  <meta property="og:image" content={title} />
  <meta property="og:url" content="https://jackiewyers.beauty/camera-settings" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Camera Settings - A Guide to Scroll-Stopping iPhone Photos - Jackie Wyers" />
  <meta name="twitter:description" content="Discover tips and tricks for capturing stunning photos on your iPhone with these camera settings and photography hacks. Elevate your mobile photography with Jackie Wyers' guide." />
  <meta name="twitter:image" content={title} />
  <link rel="canonical" href="https://jackiewyers.beauty/camera-settings" />
  <script type="application/ld+json">
    {`
    {
      "@context": "http://schema.org",
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://jackiewyers.beauty/camera-settings"
      },
      "headline": "Camera Settings - A Guide to Scroll-Stopping iPhone Photos - Jackie Wyers",
      "description": "Discover tips and tricks for capturing stunning photos on your iPhone with these camera settings and photography hacks. Elevate your mobile photography with Jackie Wyers' guide.",
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
      "datePublished": "2024-08-11",
      "dateModified": "2024-08-11"
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


      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
        <p  style={{ fontFamily: 'Arapey', fontSize: '1em', color: 'black', textDecoration: 'none' }}>
          CREATOR TIPS // PHOTOGRAPHY
        </p>
      </div>
      <img src={title} alt="No Makeup-Makeup Spring Edition Title" style={{ width: '100%' }} />
      <div>
        <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
          All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
        </p>
      </div>
      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <SubscribeButton />
      </div>

   
        <div style = {{ maxWidth: '600px', margin: '0 auto' }}>
      <DropCap text="Welcome back! Today, I’m sharing some of my top tips for capturing stunning photos on your phone. As someone who isn't a professional photographer and prefers simple, non-technical approaches, these tips are perfect for anyone who loves capturing soft, crisp, true-to-colour images that shine on Instagram." />
      </div>
      

<p style={paragraphStyle}>
The iPhone is a powerhouse for mobile photography, and with a few simple tweaks to your camera settings, you can elevate your photos to a more professional level. Here are some of my favorite settings and tips to help you make the most out of your iPhone 13 Pro Max camera. These tips also work great on newer models, proving you don’t need the latest phone to achieve amazing results. Throughout this guide I have included some recent photos from travelling this summer and you can view all my photos <a style={{color:'black'}} href= 'https://instagram.com/jackiewyers' target='blank' rel='noreferrer'> @jackiewyers</a>.
</p>

<div style = {gridContainerStyle}>          
    <img src={image1} alt="Elizabeth Bennet - Pride & Prejudice" style={{ width: '100%', maxWidth: '650px', margin: '0 auto' }} />
      </div>

<p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>

Recent Photo shot on iPhone 13 Pro Max
      </p>

      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>

<h2 style={headingStyle}>Set Your Camera Style to Vibrant
</h2>

<p style={paragraphStyle}>
Since my content often focuses on makeup, hair, and fashion, I prefer photos that are crisp, bright, and vibrant. The iPhone 13 Pro Max offers various photographic styles that allow you to customize the tone and warmth of your images. I use the Vibrant style, which enhances the colours, making them look more vivid and lively. To adjust this, go to <span style={{ fontWeight: 'bold' }}> Settings {'>'} Camera {'>'} Photographic Styles, and choose Vibrant. </span> Many accounts love a more muted, moody vibe, but I’m big on true-to-colour images and find that without Vibrant on, the camera can mute images slightly.
</p>

<div style = {gridContainerStyle}>       
          <img src={image2} alt="Elizabeth Bennet - Pride & Prejudice" style={{ width: '100%', maxWidth: '650px' }} />
          <img src={image3} alt="Elizabeth Bennet - Pride & Prejudice" style={{ width: '100%', maxWidth: '650px' }} />
          <img src={image4} alt="Elizabeth Bennet - Pride & Prejudice" style={{ width: '100%', maxWidth: '650px' }} />
          <img src={image5} alt="Elizabeth Bennet - Pride & Prejudice" style={{ width: '100%', maxWidth: '650px' }} />

      </div>

<p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>

Vibrant setting photos at the Vatican Museum
</p>

<div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>

<h2 style={headingStyle}>Always Clean Your Lens </h2>




      <p style={paragraphStyle}>
      It may sound simple, but keeping your lens clean is crucial for capturing clear, sharp photos. A dirty lens can cause your photos to appear blurry or hazy. Make it a habit to wipe your lens with a <a style = {{color: 'black'}} href = 'https://www.amazon.com/MagicFiber-Microfiber-Cleaning-Cloths-PACK/dp/B0050R67U0?crid=1E69SSJQ76OIC&dib=eyJ2IjoiMSJ9.4pSiPsdYFjC4YihA-Ui4Y73QwVTS2N4-ydeeLa1zzAznub8qzGBRNMMYZj7rHBf6P82d2P-rfnLk77pKCJO29xLU6FlI1NMfzyIkAk1QpwkqqUIGMcYLjrIw0duDRkla31-MRMVNdbHOqmbFhEp9dMm1NEjDEJLfkLMcSw8PvPITzOIYvkMY47Jye8aL53D6OXWQLPyI3RqiAmhuLVfTb1hZE_Edcg1otO1FbfUO8mI.1cWUozSwkUT8-2MyRblp6V5-AtxjFa_aLywYgbnFiw0&dib_tag=se&keywords=microfiber%2Bcloth%2Bphotography&qid=1723394543&sprefix=microfiber%2Bcloth%2Bphotographt,aps,102&sr=8-3&th=1&returnFromLogin=1&linkCode=sl1&tag=jackiewyers-20&linkId=94bbea7fb1afd36fb47f7c21ced12a9b&language=en_US&ref_=as_li_ss_tl' target= 'blank' rel = 'noreferrer'> microfibre cloth</a> before taking any photos. If you’re like me, you might find yourself wiping it off on whatever’s handy — like my husband’s shirt!
      </p>

      <div style = {gridContainerStyle}>       
      <img src={image6} alt="Elizabeth Bennet - Pride & Prejudice" style={{ width: '100%', maxWidth: '650px', margin: '0 auto' }} />
      </div>
      <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>

Taken with .5 zoom lens on iPhone 13 Pro Mac right after cleansing lens
</p>


      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>


<h2 style={headingStyle}> 
    
    Composition and the Rule of Thirds

    </h2>

<p style={paragraphStyle}>
The rule of thirds is a classic photography principle that helps you create balanced and visually appealing images. Enable the grid feature on your camera by going to Settings {'>'} Camera and toggling on Grid. Place your subject along the lines or at the intersections for a more compelling composition. This simple adjustment can make a big difference in the overall impact of your photos.

</p>

<div style = {gridContainerStyle}>        
          <img src={image7} alt="Elizabeth Bennet - Pride & Prejudice" style={{ width: '100%', maxWidth: '650px', margin: '0 auto' }} />
       
      </div>

      <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
      Example of subject directly in the centre of the grid, with more space above the head and feet at bottom of image.

      </p>


      <h2 style={headingStyle}>
      Turn Off HDR Mode

        </h2>

        <p style={paragraphStyle}>
        I prefer to keep <span style={{ fontWeight: 'bold' }}> HDR (High Dynamic Range) </span>mode turned off on my iPhone camera because I find it
        allows for more control over the exposure and overall look of my photos. Have you ever taken a picture and loved how it looked initially, only to notice changes or alterations when viewing it in your camera roll? This might be due to the HDR setting.
        </p>

        <p style={paragraphStyle}>
        HDR blends multiple exposures to balance highlights and shadows. However, it can sometimes result in images that feel overly processed, losing the natural contrast and depth that I prefer. While HDR can be helpful in some cases, I find it challenging to maintain a consistent and natural aesthetic across my shots when using this feature. HDR tends to flatten the dynamic range, which is why I’ve decided to turn the mode off.
        </p>

        <div style = {gridContainerStyle}>        
            <img src={image8} alt="Elizabeth Bennet - Pride & Prejudice" style={{ width: '100%', maxWidth: '650px', margin: '0 auto' }} />
        </div>

        <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>

        <p style={paragraphStyle}>
        Additionally, turning off HDR gives me greater flexibility during post-processing, allowing me to adjust exposure, contrast, and shadows to suit my personal style. For scenes with movement, I avoid HDR to prevent ghosting effects, ensuring my images remain sharp and true to the moment.
</p>

        <h2 style={headingStyle}>
        Take Advantage of Night Mode
        </h2>

        <p style={paragraphStyle}>
        The iPhone 13 Pro Max & newer models excels in low-light conditions, thanks to its ‘Night Mode’. Night Mode automatically activates in low light, but you can also manually adjust the exposure time for even better results. Hold your phone steady or use a tripod to avoid motion blur, although a little blur can sometimes add to the mood.
        </p>

<p style={paragraphStyle}>

When creating carousel posts, I usually lead with brighter images and include night mode shots as you swipe through, as lighter images tend to perform better on social media. For even better nighttime images, I’d recommend the <span style={{ fontWeight: 'bold' }}> G7x with flash </span> for very crisp photos that have a bit of a retro feel. This style of photo has been growing in popularity on social media, especially for vacation pictures.
</p>

<div style = {gridContainerStyle}>        
            <img src={image9} alt="Elizabeth Bennet - Pride & Prejudice" style={{ width: '100%', maxWidth: '650px',margin: '0 auto' }} />
        </div>

      <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey' , margin: '0em', maxWidth: '100%', fontStyle: 'italic'}}>
      Canon G7x with flash example
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/726380?noHeader=true" title="Shop My Victoria's Secret Favorites" />

<div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>



<h2 style={headingStyle}>
When to Use Portrait Mode

</h2>

<p style = {paragraphStyle}>
Portrait mode on the iPhone 13 Pro Max allows you to adjust the depth of field, creating a beautiful bokeh effect that blurs the background while keeping the subject in focus. To adjust the aperture, tap the f icon on the screen after taking a portrait shot, and slide to adjust the depth effect. I typically use this mode outside if there is a forest in the background, if the background isn’t particularly interesting, or in mirror photos for quick selfies. I do notice a big difference in clarity and a pull to the subject.
</p>

<div style = {gridContainerStyle}>        
            <img src={image10} alt="Elizabeth Bennet - Pride & Prejudice" style={{ width: '100%', maxWidth: '650px', margin:'0 auto' }} />
        </div>

      <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
      Portrait mode for mirror selfie

      </p>

      <div style = {gridContainerStyle}>        
            <img src={image11} alt="Elizabeth Bennet - Pride & Prejudice" style={{ width: '100%', maxWidth: '650px', margin: '0 auto' }} />
        </div>

      <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
      Subtle portrait mode outside, creates more depth.

      </p>



<p style={paragraphStyle}>
However, if I’m in a stunning location, like the Trevi Fountain that has beautiful details, I prefer to capture all the sculptures! You can always blur the background in post-processing, but you can’t bring back the lost details if you shoot in portrait mode. I notice sometimes it blurs out the edges of my hair with the background, so if I only have time for a quick photo or two in a beautiful location, I typically don’t shoot in portrait mode. If I have more time, I’ll shoot with and without for multiple options.

</p>

<div style = {gridContainerStyle}>        
            <img src={image12} alt="Elizabeth Bennet - Pride & Prejudice" style={{ width: '100%', maxWidth: '650px', margin: '0 auto' }} />
        </div>

        <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>

        <h2 style={headingStyle}>
            Optimize Your Lighting
        </h2>

<p style={paragraphStyle}>
Natural light is your best friend when it comes to photography. Here are my top three lighting tips:
</p>

<p style={paragraphStyle}>
1. <span style = {{fontWeight:'bold'}}> Bright Window Light: </span> Stand by a big window on a bright day for a great headshot or selfie with friends. I try to use the back camera as much as possible,
so we set up this selfie balanced against the window and hoped for the best. Again, these are not prime photography photos, but high quality photos to capture great memories, especially for social media!
 
</p>

<div style = {gridContainerStyle}>        
            <img src={image13} alt="Elizabeth Bennet - Pride & Prejudice" style={{ width: '100%', maxWidth: '650px', margin: '0 auto' }} />
        </div>

<p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
Photo example of bright window light at a cafe in New Zealand
</p>


<p style={paragraphStyle}>
2. <span style = {{fontWeight:'bold'}}> Side Lighting</span>: Position yourself so that light comes in from one side, casting gentle shadows for a more dynamic image.

</p>

<div style = {gridContainerStyle}>        
            <img src={image14} alt="Elizabeth Bennet - Pride & Prejudice" style={{ width: '100%', maxWidth: '650px', margin: '0 auto' }} />
        </div>

      <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
      Using my inappropriately dressed Vatican photo for reference here again, you can see the shadow under the cheekbone, collarbones, pleating of the skirt while my face is lit up by the sun coming in from one window.
      </p>




<p style={paragraphStyle}>
3. <span style = {{fontWeight:'bold'}}> Golden Hour </span>: Take advantage of the soft, warm light during golden hour. I love experimenting with backlight during sunset, and the iPhone's Vibrant setting picks this up beautifully. Avoid harsh, direct sunlight as it can create unflattering shadows.

</p>

<div style = {gridContainerStyle}>        
            <img src={image15} alt="Elizabeth Bennet - Pride & Prejudice" style={{ width: '100%', maxWidth: '650px', margin: '0 auto' }} />
        </div>

      <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
      Love the way iPhones capture sunsets, especially with the vibrant setting on.
        </p>
        <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
        <h2 style={headingStyle}>
Post Processing - My Best VSCO Tips
</h2>

<p style={paragraphStyle}>
For minor adjustments, I use Photoshop to retouch blemishes or remove unwanted objects. The new generative AI is incredible as well. I also love using VSCO for cohesive carousel posts. Here are my go-to edits before any filters:
</p>

<ul style={paragraphStyle}>
  <li>Exposure: -0.5</li>
  <li>Sharpen: +0.5</li>
  <li>Saturation: +0.3</li>
  <li>Grain: +1.8</li>
  <li>Fade: +0.4</li>
</ul>

<p style={paragraphStyle}>
These minor tweaks sharpen the image slightly and add a soft look with a subtle fade, which shows more detail in my darker hair. They are pretty minor! As for filters:
</p>


<p style={paragraphStyle}>
  <span style={{ fontWeight: 'bold' }}>SS2 (Muted Moments)</span>: This filter is designed to create a softer, more subdued look by toning down overly warm skin tones and reducing the intensity of colours. It gives your photos a more natural and neutral appearance, making it perfect for portraits or any situation where you want to avoid harsh or overly saturated colours.
</p>

<p style={paragraphStyle}>
  <span style={{ fontWeight: 'bold' }}>C3 (Chromatic)</span>: C3 enhances colours in a bright and clean way, making it particularly effective for photos taken during golden hour or at sunset. It brightens the image without overly boosting saturation, maintaining a natural look while bringing out the vibrancy in skies and landscapes.
</p>

<p style={paragraphStyle}>
  <span style={{ fontWeight: 'bold' }}>A4 (Pro)</span>: A4 is known for its warm, vintage feel. It softens the image with a slight sepia tint, giving your photos a nostalgic, timeless quality. It's ideal for creating a cohesive, warm-toned aesthetic in your feed, especially for lifestyle and fashion shots.
</p>

<p style={paragraphStyle}>
  <span style={{ fontWeight: 'bold' }}>F1 (Fade)</span>: F1 adds a faded, dreamy effect to your photos by reducing contrast and desaturating colours slightly. This filter is perfect for achieving a whimsical, fairytale-inspired look, softening the image to create a more ethereal atmosphere.
</p>



<div style = {gridContainerStyle}>   
    <img src={vsco} alt="Elizabeth Bennet - Pride & Pre" style={{ width: '100%', maxWidth: '650px', margin: '0 auto' }} />
       </div>

<p style = {{textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
   Sign up for a subscription <a style = {{color:'black'}} href="https://www.youtube.com/watch?v=dQw4w9" target="_blank" rel='noreferrer'> here </a> 
    </p>
    <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
<p style = {paragraphStyle}>

There are so many filters to experiment with, I tend to keep the filter effect really low so the image still stays true to how it was originally taken. I think the only photo regrets I have had are taking a perfectly good photo and over-enhancing the colours.
</p>

<h2 style={headingStyle}>
Leverage the Telephoto and Ultra-Wide Lenses
</h2>

<p style = {paragraphStyle}>
The iPhone 13 Pro Max has versatile telephoto and ultra-wide lenses. Use the telephoto lens for close-up shots without losing detail, and the ultra-wide lens to capture expansive landscapes or tight indoor spaces. The ultra-wide lens at 0.5x can give you great shots by capturing more, especially from a lower angle, making you appear taller. Just be cautious, as it can sometimes distort the image, so I often crop it slightly.

</p>

<div style = {gridContainerStyle}>        
            <img src={image16} alt="Elizabeth Bennet - Pride & Prejudice" style={{ width: '100%', maxWidth: '650px' }} />
            <img src={image17} alt="Elizabeth Bennet - Pride & Prejudice" style={{ width: '100%', maxWidth: '650px' }} />

        </div>

        <p style = {{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
            3x zoom vs .5 lens on iPhone.
        </p>
        <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
<h2 style={headingStyle}>
Why I Don’t Enable ProRAW for Higher Quality Photos
</h2>

<p style={paragraphStyle}>
<span style = {{fontWeight:'bold'}}> ProRAW on the iPhone 13 Pro Max </span> allows you to capture photos with more detail and colour data, offering greater control over editing. However, I’ve found that the advantages of shooting in RAW format aren't as noticeable when sharing on social media and it takes up more space on the phone. Social platforms like Instagram and Facebook apply heavy compression to images, reducing quality and eliminating many of the finer details that ProRAW captures. 
</p>

<p style={paragraphStyle}>

Additionally, most social media content is viewed on smaller screens, where the enhanced dynamic range and subtle colour differences of RAW files aren't fully appreciated. The iPhone’s in- camera processing already optimizes JPEGs for immediate sharing, making the extra post-processing flexibility of RAW less essential for my needs. Plus, the smaller file sizes of JPEGs are more convenient for storage and sharing.

</p>

<p style={paragraphStyle}>

That being said, to enable ProRAW, go to <span style = {{fontWeight:'bold'}}> Settings {'>'} Camera {'>'} Formats and toggle on Apple ProRAW.</span> This setting is great for those who want to fine-tune their photos during post-processing, but for quick and easy social media sharing, I prefer sticking to JPEGs. This article is more about iPhone carousel photos for Instagram.

</p>


<h2 style={headingStyle}>
Work Your Angles

</h2>

<p style={paragraphStyle}>
Angles are crucial for flattering shots. If you’re on the shorter side like me, capturing images from a lower angle does wonders for elongating your legs as seen in most of the example shots.

</p>


<p style={paragraphStyle}>
However, if the lighting is lower, shooting from above will capture the most flattering light. Sometimes, the best photos come by chance when you experiment with different angles — my husband often surprises me with great shots when he switches up the angles on the fly!

</p>

<p style={paragraphStyle}>
I still am not the best with poses and creating interesting shapes with my body, so I don’t have a ton of suggestions for “modelling,” but I’m working on it! That being said, by tweaking these settings and following these tips, you’ll be well on your way to capturing stunning photos with your iPhone 13 Pro Max. Remember, practice makes perfect, so don’t be afraid to experiment and find your unique style. I hope this guide was helpful and have fun shooting. Want more inspiration? Follow me on instagram <a  style = {{color:'black'}}href= 'https://instagram.com/jackiewyers' target='blank' rel='noreferrer'>here</a>.

</p>

<p style={paragraphStyle}>
Let me know if you found these tips and tricks helpful, and feel free to comment below if you'd like to see more creator tips from me!

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
