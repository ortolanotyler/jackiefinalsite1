import React, { useRef, useEffect } from 'react';
import '../ExampleTutorial1.css';
import { Comments } from '@hyvor/hyvor-talk-react';

import { initGA, logPageView } from '../../../analytics';
import { Helmet } from 'react-helmet';
import SubscribeButton from '../../../Components/SubscribeButton';
import TextReveal from '../../../Components/TextReveal';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import AdSenseAd from '../../../Advertising/Ads';
import BridalDropCap from '../../../Components/BridalDropCap';
import TakeQuizButton from '../../../Components/TakeQuizButton';


const title = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/weddingdressguidetitle.png`;
const image1 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/1.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/2.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/3.jpg`;
const image4 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/4.jpg`;
const image5 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/5.jpg`;
const image6 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/6.jpg`;
const image7 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/7.jpg`;
const image8 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/8.jpg`;
const image9 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/9.jpg`;
const image10 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/10.jpg`;
const image11 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/11.jpg`;
const image12 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/12.jpg`;
const image13 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/13.jpg`;
const image14 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/14.jpg`;
const image15 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/15.jpg`;
const image16 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/16.jpg`;
const image17 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/17.jpg`;
const image18 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/18.jpg`;
const image19 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/19.jpg`;
const image20 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/20.jpg`;
const image21 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/elizabeth1.jpg`;
const image22 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/hanging.jpg`;
const image23 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/table.jpg`;
const image24 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/elizabethD.jpg`;
const image25 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/jackiewedding.png`;



const nextarticle = `${process.env.PUBLIC_URL}/Images/Articles/GraceKelly/GraceKellyJackieWyers.jpg`;

const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
  <div>
    <div><TextReveal text='BRIDAL' /></div>
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);

const WeddingDressGuide = () => {

  useEffect(() => {
    initGA();
    logPageView('/weddingdressguide');
  }, []);


  const websiteId = '10910';
  const blogRef = useRef(null);

  const headingStyle = {
    textAlign: 'center',
    fontSize: '32px',
    fontWeight: 'normal',
    fontFamily: 'GFS Didot, serif',
    color: 'black',
    margin: '1rem',
    lineHeight: '1.25',

  };

  const paragraphStyle = {
    fontSize: '20px',
    fontFamily: 'GFS Didot, serif',
    margin: '1rem 1.5rem',
    marginTop: '1rem',
    marginBottom: '1rem',
    maxWidth: '600px',
    lineHeight: '1.5',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1rem',
    margin: '1rem 0'
};

const imageStyle = {
  display: 'block',
  margin: '0 auto',
  maxWidth: '600px',
  height: 'auto'
};



  const blogContent = (
    <div className="container">
   <Helmet>
  <title>Jackie Wyers Wedding - The Ultimate 2025 Wedding Dress Guide</title>
  <meta name="description" content="Styles, Themes, and Trends for Brides-To-Be" />
  <meta name="keywords" content="wedding dress guide, 2025 wedding dresses, bridal fashion, Jackie Wyers, wedding themes, bridal trends" />
  <meta property="og:title" content="Jackie Wyers Wedding - The Ultimate 2025 Wedding Dress Guide" />
  <meta property="og:description" content="Styles, Themes, and Trends for Brides-To-Be" />
  <meta property="og:image" content={`${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/weddingdressguidetitle.png`} />
  <meta property="og:url" content="https://jackiewyers.beauty/weddingdressguide" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Jackie Wyers Wedding - The Ultimate 2025 Wedding Dress Guide" />
  <meta name="twitter:description" content="Styles, Themes, and Trends for Brides-To-Be" />
  <meta name="twitter:image" content={`${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/weddingdressguidetitle.png`} />
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-RT6GR7JXYG"></script>
  <script>
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-RT6GR7JXYG');
    `}
  </script>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4660168246825318" crossOrigin="anonymous"></script>
</Helmet>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
        <a href="/bridal" style={{ fontFamily: 'Arapey', fontSize: '1em', color: 'black', textDecoration: 'none' }}>
          BEAUTY // BRIDAL
        </a>
      </div>
      <img src={title} alt="The Ultimate 2025 Wedding Dress Guide" style={{ width: '100%' }} />
   
      <ResponsiveYoutube src="https://www.youtube.com/embed/UQU9Fufug4M?si=WUaFXipbTuAIKW_9" title="WEDDING DRESS SHOPPING & Bridal Makeup Trial with Jackie Wyers" />


<div style = {{textAlign: 'center', marginTop: '2rem' }}>
<SubscribeButton />
</div>

<BridalDropCap text="Welcome back for another bridal article! I had the trip of a lifetime visiting New Zealand with my mom, and we had the pleasure of booking a bridal appointment at the cutest fairytale-inspired bridal shop called Natalie Rose Bridal in Auckland! I tried on a bunch of dresses from Eva Mendel’s latest bridal collection, and I hope seeing these wedding dresses will be helpful for 2025 brides to get an idea of what shape and style you might like for your big day!" />



<div
style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}
> 
<iframe
  style={{ boxShadow: '12px', borderRadius: '15px', width: '301px', height: '535px' }}
  src="https://www.youtube.com/embed/nOFnAR6F2wY"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

</div>

<h3 style={{textAlign:'center', margin: '10px'}}>
Check out <a style = {{color:'black'}}href = 'https://natalierosebridal.co.nz/' target="_blank" rel="noreferrer">Natalie Rose Bridal</a> ! </h3>

<div style={{margin: '20px'}}>
                <AdSenseAd/>
                </div>
<p style={paragraphStyle}>
<a style = {{color:'black'}} href= "https://evalendel.com/" target="_blank" rel="noreferrer">Eva Lendel</a> is one of the biggest names in bridal fashion, and I fell in love with so many dresses from the <a style = {{color:'black'}} href="https://evalendel.com/lessismore2023/" target="_blank" rel="noreferrer">Less Is More III</a> collection. You’ll have to let me know which dress is your favorite out of the bunch, and keep reading to see which dress I chose from a new label that really captured the fairytale vibe I was going for. I’ve also put together different bridal themes I personally think each dress could suit best.

</p>

<p style={paragraphStyle}>

Be sure to take the fun quiz I've created to see which dress I think you would like based on your personal style preferences!
</p>

<div style = {{textAlign: 'center', marginTop: '2rem' }}>
<TakeQuizButton />
</div>

<div style={{margin: '20px'}}>
                <AdSenseAd/>
                </div>

<h2 style = {headingStyle}>
    Bacarra
</h2>

<p style={{ fontSize: '1rem', fontFamily: 'Arapey, sans-serif', maxWidth: '100%', textAlign: 'center', fontStyle: 'italic' }}>
Theme: Fairytale Wedding or Bohemian Wedding
            </p>

<div style={gridContainerStyle}>
   <img src={image1} alt="Jackie Wyers Wedding Abril Dress" style={imageStyle} />
 </div>
 <div style={gridContainerStyle}>
   <img src={image2} alt="Jackie Wyers Wedding Abril Dress" style={imageStyle} />
 </div>
 <div style={gridContainerStyle}>
   <img src={image3} alt="Jackie Wyers Wedding Abril Dress" style={imageStyle} />
 </div>

 <p style={paragraphStyle}>
 The Bacarra dress features a lace-up A-silhouette design with cold-shoulder lace sleeves and a split skirt that naturally creates folds over the delicate lace under gown. This dress is perfect for a fairytale theme with its delicate, feminine, and sweet look, yet still shows off the shoulders for a bit of skin and a flirty look. If I didn’t choose my fairytale gown, this would have been my next choice. With different styling, I also think this gown would be lovely for a Bohemian Wedding as it feels flowy, comfortable, and a bit understated.
 </p>

 <div style={{margin: '20px'}}>
                <AdSenseAd/>
                </div>


 <h2 style = {headingStyle}>
    Porsha
 </h2>

 <p style={{ fontSize: '1rem', fontFamily: 'Arapey, sans-serif', maxWidth: '100%', textAlign: 'center', fontStyle: 'italic' }}>
 Theme: Vintage Glamour
 </p>


 <div style={gridContainerStyle}>
   <img src={image4} alt="Jackie Wyers Wedding Abril Dress" style={imageStyle} />
 </div>
 <div style={gridContainerStyle}>
   <img src={image5} alt="Jackie Wyers Wedding Abril Dress" style={imageStyle} />
 </div>
 <div style={gridContainerStyle}>
   <img src={image6} alt="Jackie Wyers Wedding Abril Dress" style={imageStyle} />
 </div>

 <p style={paragraphStyle}>
 Porsha is a beaded all-over strapless dress with a ballerina neckline, detailed corset, basque waistline, and straight skirt. It's complemented with a detachable tulle overskirt decorated with voluminous flowers on the edges. The way this dress shapes the body is super sexy. Even though I don’t have a ton of curves, it really emphasized my hips and created a womanly silhouette.
 </p>



 <div style={gridContainerStyle}>
   <img src={image7} alt="Jackie Wyers Wedding Abril Dress" style={imageStyle} />
 </div>

 <p style={{ fontSize: '1rem', fontFamily: 'Arapey, sans-serif', maxWidth: '100%', textAlign: 'center', fontStyle: 'italic' }}>
 Styled with stunning floral overskirt that looks and feels like a cloud
  </p>

<p style={paragraphStyle}>
The overskirt adds something special with its beautifully handmade flower details. The vintage glamour theme enhances the dress's luxurious and timeless appeal.

</p>

<div style={{margin: '20px'}}>
                <AdSenseAd/>
                </div>

<h2 style = {headingStyle}>
Abril
</h2>

 <p style={{ fontSize: '1rem', fontFamily: 'Arapey, sans-serif', maxWidth: '100%', textAlign: 'center', fontStyle: 'italic' }}>
 Theme: Modern Minimalist
 </p>

 <div style={gridContainerStyle}>
    <img src={image8} alt="Jackie Wyers Wedding Abril Dress" style={imageStyle} />
 </div>
 <div style={gridContainerStyle}>
    <img src={image9} alt="Jackie Wyers Wedding Abril Dress" style={imageStyle} />
 </div>

<p style={paragraphStyle}>
Abril is a guipure lace-up detailed corset base dress with a smooth heart-shaped neckline and cold- shoulder long sleeves made of guipure. This dress feels like a modern royal gown and fits perfectly with a modern minimalist theme, emphasizing simplicity and elegance. I especially loved this dress with a matching lace veil—it felt almost angelic!
    </p>

    <div style={gridContainerStyle}>
    <img src={image10} alt="Jackie Wyers Wedding Abril Dress" style={imageStyle} />
 </div>

 <p style={{ fontSize: '1rem', fontFamily: 'Arapey, sans-serif', maxWidth: '100%', textAlign: 'center', fontStyle: 'italic' }}>
 Styled with matching lace veil
   </p>
   <div style={{margin: '20px'}}>
                <AdSenseAd/>
                </div>

<h2 style = {headingStyle}>
    Percy
</h2>

 <p style={{ fontSize: '1rem', fontFamily: 'Arapey, sans-serif', maxWidth: '100%', textAlign: 'center', fontStyle: 'italic' }}>
 Theme: Classic Elegance  
 </p>

 <div style={gridContainerStyle}>
    <img src={image11} alt="Jackie Wyers Wedding Abril Dress" style={imageStyle} />
 </div>
 <div style={gridContainerStyle}>
    <img src={image12} alt="Jackie Wyers Wedding Abril Dress" style={imageStyle} />
 </div>
 <div style={gridContainerStyle}>
    <img src={image13} alt="Jackie Wyers Wedding Abril Dress" style={imageStyle} />
 </div>

 <p style={{ fontSize: '1rem', fontFamily: 'Arapey, sans-serif', maxWidth: '100%', textAlign: 'center', fontStyle: 'italic' }}>
 Percy with dramatic overskirt
    </p>

 <p style={paragraphStyle}>
 Percy is a ballerina neckline dress with an asymmetric wrap over the waistline, complemented with a smooth voluminous overskirt. I was surprised by how much I loved this dress because I don’t usually prefer thicker straps on myself. However, the wrapping through the waist created beautiful curves, and I felt mature and classic. If you have a larger chest, I think this would be a great pick because it provides good support and is quite comfortable. Depending on styling, you could go very classic with a vintage glamour theme.

 </p>

 <div style={gridContainerStyle}>
    <img src={image14} alt="Jackie Wyers Wedding Abril Dress" style={imageStyle} />
 </div>

 <div style={{margin: '20px'}}>
                <AdSenseAd/>
                </div>

<h2 style = {headingStyle}>
    Ora
</h2>


 <p style={{ fontSize: '1rem', fontFamily: 'Arapey, sans-serif', maxWidth: '100%', textAlign: 'center', fontStyle: 'italic' }}>
 Theme: Old Money or Beach Wedding
 </p>

 <p style={paragraphStyle}>
 Ora is a pearl-strapped trumpet dress with a draped pearl necklace-style top and lace-up back.
 </p>

 <div style={gridContainerStyle}>
    <img src={image15} alt="Jackie Wyers Wedding Ora Dress" style={imageStyle} />
 </div>

 <p style={paragraphStyle}>
 The pearls really add something special to this style, along with the lace-up back. This was my first time trying a trumpet style dress, and while I think I suit more of a drop waist or corseted style, the entire dress is very unique—especially if you love pearls.
 </p>

 <div style={gridContainerStyle}>
    <img src={image16} alt="Jackie Wyers Wedding Ora Dress" style={imageStyle} />
 </div>
 <div style={gridContainerStyle}>
    <img src={image17} alt="Jackie Wyers Wedding Ora Dress" style={imageStyle} />
 </div>
 <div style={gridContainerStyle}>
    <img src={image18} alt="Jackie Wyers Wedding Ora Dress" style={imageStyle} />
 </div>

 <p style={paragraphStyle}>
 An Old Money aesthetic could suit the pearls, as could a beach wedding for more of a mermaid motif.
     </p>

     <div style={{margin: '20px'}}>
                <AdSenseAd/>
                </div>

     <h2 style = {headingStyle}>
        Zara
     </h2>

     <p style={{ fontSize: '1rem', fontFamily: 'Arapey, sans-serif', maxWidth: '100%', textAlign: 'center', fontStyle: 'italic' }}>
        Theme: Garden Party
     </p>


 <div style={gridContainerStyle}>
    <img src={image19} alt="Jackie Wyers Wedding Ora Dress" style={imageStyle} />
 </div>
 <div style={gridContainerStyle}>
    <img src={image20} alt="Jackie Wyers Wedding Ora Dress" style={imageStyle} />
 </div>

<p style={paragraphStyle}>

 Zara features a mermaid silhouette bridal gown with a strapless detailed corset and a pleated bottom part of the skirt. It’s complemented with a voluminous tulle ruched bolero and a simple veil extension. The dramatic floral bolero may not be for everyone, but it definitely felt fancy and would be stunning for a Garden Party, full of flowers. I love the way it framed the shoulders and brought attention back up to the face.
                        </p>

                        <div style={{margin: '20px'}}>
                <AdSenseAd/>
                </div>
 <h2 style = {headingStyle}>
    Which Dress Did I Say Yes To!?
 </h2>



 <h2 style = {headingStyle}>
 Elizabeth </h2>
 <p style={{ fontSize: '1rem', fontFamily: 'Arapey, sans-serif', maxWidth: '100%', textAlign: 'center', fontStyle: 'italic' }}>
                        Theme: Fairytale Wedding ft. Historical Elegance
                        </p>

<div style={gridContainerStyle}>
    <img src={image21} alt="Jackie Wyers Wedding Ora Dress" style={imageStyle} />
 </div> <div style={gridContainerStyle}>
    <img src={image22} alt="Jackie Wyers Wedding Ora Dress" style={imageStyle} />
 </div> <div style={gridContainerStyle}>
    <img src={image23} alt="Jackie Wyers Wedding Ora Dress" style={imageStyle} />
 </div>

<p style={paragraphStyle}>
I was drawn to the Elizabeth Gown in champagne as I envisioned golden hour photos that felt warm, sun- kissed, and earthy. This gown also comes in ivory, but I especially loved it in the warmer hue. I absolutely love corseted styles and strapless designs, and the grandeur of the skirt was unlike any dress I’ve worn before. Finally, this gown comes in three pieces! There are two skirts, one to create a ball gown with the basque waistline, a second mini party skirt with sparkly tulle, and the corset can be worn on its own as well. I will probably wear it next year for our wedding anniversary!
</p>

 <div style={gridContainerStyle}>
    <img src={image24} alt="Jackie Wyers Wedding Ora Dress" style={imageStyle} />
 </div>

<p style={paragraphStyle}>
The Elizabeth gown is by a brand new label, Verander West and comes out of the Coronation Collection. Inspired by Queen Elizabeth Tudor, the Elizabeth dress embodies the grandeur and resplendence of a bygone era. In the grand tapestry of history, Queen Elizabeth Tudor stands out as a figure so captivating that her influence on fashion was nothing short of revolutionary. The Elizabeth dress features intricate details reminiscent of the Tudor era, with luxurious fabrics and majestic silhouettes that make a statement of historical elegance. This dress is perfect for brides looking to infuse their wedding with a touch of historical grandeur and timeless beauty, making it ideal for a historical elegance themed wedding or a Fairytale Wedding with its princess- like appeal.

</p>

 <p style = {paragraphStyle}>

I hope you enjoyed this read and it gave you some bridal ideas if you are a Bride to Be! Again, take the quiz with the button below to see which dress/bridal aesthetic I think you would like best! For more details about my Fairytale wedding, from the prep, planning, details and beauty, read <a style = {{color:'black'}} href= "/fairytalewedding" target="_blank" rel="noreferrer">here</a>.
</p>

<div style={{ textAlign: 'center', margin: '2rem 0' }}>
<TakeQuizButton />

</div>


<div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <a href="/fairytalewedding" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={image25} alt="Jackie Wyers Wedding" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', display: 'block' }} />
         ITALIAN FAIRYTALE WEDDING →
        </a>
      </div>

       <div>
        <img src={signature} alt="Jackie Wyers Signature XoXo" style={{ width: '100%' }} />
      </div>
     
    

      <Comments website-id={websiteId} page-id={"quiz3"} />
      <div style={{margin: '20px'}}>
                <AdSenseAd/>
                </div><div style={{margin: '20px'}}>
                <AdSenseAd/>
                </div>,
      
    </div>
    
  );

  return (
    <div ref={blogRef}>
      <Card
        title="The Ultimate 2025 Wedding Dress Guide"
        description="Getting married this upcoming year? Check out Jackie Wyers' 2025 Wedding Dress Guide to find the perfect dress style for your special day"
        blogContent={blogContent}
      />
    </div>
  );
};

export default WeddingDressGuide;
