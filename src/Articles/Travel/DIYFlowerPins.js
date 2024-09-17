import React, { useRef, useEffect } from 'react';
import '../ExampleTutorial1.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import TextReveal from '../../Components/TextReveal';
import AdSenseAd from '../../Advertising/Ads';

import SubscribeButton from '../../Components/SubscribeButton';
import { initGA, logPageView } from '../../analytics';
import { Helmet } from 'react-helmet';
import ResponsiveYoutube from '../../Components/ResponsiveYoutube';
import DropCap1 from './DropCap1';
import ArticleTitle from '../../Components/ArticleTitle';


const title = `${process.env.PUBLIC_URL}/Images/Articles/MammaMia/mammamiatitle.png`;
const image1 = `${process.env.PUBLIC_URL}/Images/Articles/MammaMia/1.png`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/MammaMia/2.png`;
const image3 = `${process.env.PUBLIC_URL}/Images/Articles/MammaMia/3.png`;
const image4 = `${process.env.PUBLIC_URL}/Images/Articles/MammaMia/4.png`;
const image5 = `${process.env.PUBLIC_URL}/Images/Articles/MammaMia/5.jpg`;
const image6 = `${process.env.PUBLIC_URL}/Images/Articles/MammaMia/6.jpg`;
const image7 = `${process.env.PUBLIC_URL}/Images/Articles/MammaMia/7.jpg`;





const nextarticle = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/fairytalethumbnail.jpg`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;



const Card = ({ blogContent }) => (
  <div>
    <div><TextReveal text='BRIDAL' /></div>
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);

const DIYFlowers = () => {

  useEffect(() => {
    initGA();
    logPageView('/diy-flowers');
  }, []);


  const websiteId = '10910';
  const blogRef = useRef(null);

  const titleStyle = {
    fontFamily: 'GFS Didot, serif',
    textAlign: 'left',
    color: 'black',
    fontWeight: 'bold',
    margin: '1rem 0',
    lineHeight: '1',
  
    fontSize: 'calc(16px + 2vw)',
  };

  const descriptionStyle = {
    fontFamily: 'Arapey, serif',
    textAlign: 'left',

    color: 'black',
    fontWeight: 'normal',
    margin: '1rem 0',
    lineHeight: '1',
  
    fontSize: 'calc(16px + 2vw)',
  };
  

  


  const headingStyle = {
    textAlign: 'center',
    fontSize: '1.5rem',
    fontWeight: 'normal',
    fontFamily: 'Arapey, serif',
    color: '#333',
    margin: '1.5rem'
};

const paragraphStyle = {
  fontSize: '20px',
  fontFamily: 'GFS Didot, serif',
  margin: '1rem 1.5rem',
  marginTop: '1rem',
  marginBottom: '1rem',
  maxWidth: '500px',
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
const listStyle = {
    fontSize: '20px',
    fontFamily: 'GFS Didot, serif',
    margin: '1rem 1.5rem',
    paddingLeft: '1.5rem',
    maxWidth: '500px',
    lineHeight: '1.5',
    marginLeft: 'auto',
    marginRight: 'auto',
    listStyleType: 'disc',
  };
  



  const blogContent = (
    <div className="container">
<Helmet>
  <title>Mamma Mia Inspired DIY Bridal Flower Pins</title>
  <meta name="description" content="Learn how to create your own DIY bridal flower pins inspired by Mamma Mia for your wedding day. Jackie Wyers shares a step-by-step guide to make these beautiful accessories." />
  <meta name="keywords" content="DIY bridal flower pins, Mamma Mia wedding, Jackie Wyers, wedding DIY, bridal accessories, wedding inspiration, bridal beauty, wedding tips, bridal hair, destination wedding, DIY bride" />
  
  <meta property="og:title" content="DIY Flower Pins for a Mamma Mia Inspired Wedding - Jackie Wyers" />
  <meta property="og:description" content="Learn how to create your own DIY bridal flower pins inspired by Mamma Mia for your wedding day. Jackie Wyers shares a step-by-step guide to make these beautiful accessories." />
  <meta property="og:image" content={title} />
  <meta property="og:url" content="https://jackiewyers.beauty/diy-flowers" />
  <meta property="og:type" content="article" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="DIY Flower Pins for a Mamma Mia Inspired Wedding - Jackie Wyers" />
  <meta name="twitter:description" content="Learn how to create your own DIY bridal flower pins inspired by Mamma Mia for your wedding day. Jackie Wyers shares a step-by-step guide to make these beautiful accessories." />
  <meta name="twitter:image" content={title} />

  <script type="application/ld+json">
    {`
    {
      "@context": "http://schema.org",
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://jackiewyers.beauty/diy-flowers"
      },
      "headline": "DIY Flower Pins for a Mamma Mia Inspired Wedding - Jackie Wyers",
      "description": "Learn how to create your own DIY bridal flower pins inspired by Mamma Mia for your wedding day. Jackie Wyers shares a step-by-step guide to make these beautiful accessories.",
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
      "dateModified": "2024-07-27"
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
        <a href="/bridal" style={{ fontFamily: 'Arapey', fontSize: '1rem', color: 'black', textDecoration: 'none' }}>
          BEAUTY // BRIDAL
        </a>
      </div>
    

      <ArticleTitle
  mainTitle="DIY Flower Pins for a Mamma Mia Inspired Wedding"
  subTitle="How to Make Your Own Flower Crown and Pins"
  author="Jackie Wyers"
/>
​⬤   
<div
style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}
> 
<iframe
  style={{ boxShadow: '12px', borderRadius: '15px', width: '301px', height: '535px' }}
  src="https://www.youtube.com/embed/yYgf8_MALNo"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>





</div>

<p style={{ margin: '2rem 0',textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', maxWidth: '100%', fontStyle: 'italic' }}>
      All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.

</p>

<div style = {{textAlign: 'center', marginTop: '2rem' }}>
<SubscribeButton />
</div>
<div style={{ marginTop: '2rem', ...paragraphStyle }}>
  <DropCap1 
    text="Hey lovelies and Brides-To-Be! Today, I'm sharing how I quickly made my flower crown veil and separate flower pins inspired by Sophie from Mamma Mia that I wore on my wedding day."
  />  
</div>




     
  
<p style={paragraphStyle}>
I blended several inspirations to achieve my whimsical bridal look: Christine Daae’s corseted style and big hair, Taylor Hill-inspired makeup, and of course, a touch of Sophie with DIY flower pins. Mamma Mia has always been one of my favorite cinematic bridal looks, as seen in the throwback tutorial below!
</p>


<ResponsiveYoutube src="https://www.youtube.com/embed/2mjLtM5DBz8?si=baVLKPYFUeVbJjvY" title="Sharon Tate Iconic 60's Bridal Makeup Tutorial" />





<p style={paragraphStyle}>

Let’s create a subtly inspired nod to the film with this easy DIY for the #DIYBride.
</p>

<h2 style={headingStyle}>Materials Needed:</h2>

<ul style={listStyle}>
    <li>Sheer ribbon (I used ivory and champagne)</li>
    <li>Burlap and lace ribbon</li>
    <li>Hot glue gun</li>
    <li>Bobby pins</li>
    <li>A veil with comb</li>
</ul>

<iframe
      title="Mamma Mia Inspired Flower Pins for Brides"
      src="https://shopmy.us/collections/public/700467?noHeader=true"
      style={{ width: '100%', minHeight: '1000px', border: 'none' , }}
      scrolling='no'
    ></iframe>

<h2 style={headingStyle}>Flower Petals - A Step-by-Step Guide:</h2>


<div style={gridContainerStyle}>
    <img src={image1} alt="Jackie Wyers Wedding Photography" style={imageStyle} /> 
</div>

<p style={paragraphStyle}>

1. Take your sheer ribbon and fold it over five times.

</p>

<p style={paragraphStyle}>

2. Cut an irregular U shape to create your petals. You should get three layers of petals in just a few seconds! (If you want more volume, add more petals, but I found this amount lets a lot of light shine through beautifully.)

</p>

<h2 style={headingStyle}>Making The Flower Pins:</h2>


<div style={gridContainerStyle}>
    <img src={image2} alt="Jackie Wyers Wedding Photography" style={imageStyle} /> 
</div>

<p style={paragraphStyle}>
3. For the pins, I used burlap and lace ribbon because it grips the bobby pins really well and added a bit of brightness to the centre of the flower.
</p>
<div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
<p style={paragraphStyle}>
    
4. Create a small loop with the ribbon and secure it with a hot glue gun.

</p>

<p style={paragraphStyle}>
5. Next, glue the petals onto the loop. Ideally, use six petals, but five works too! (I ran out of ribbon as I filmed only the last flower I made! 🤣 )
</p>

<div style={gridContainerStyle}>
    <img src={image3} alt="Jackie Wyers Wedding Photography" style={imageStyle} /> 
</div>
<div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
<p style={paragraphStyle}>
6. To add a touch of shimmer, I used champagne beads that my mom tied together. They really catch the light and match my champagne-coloured dress perfectly.
</p>

<h2 style={headingStyle}>Attaching To The Veil:</h2>

<p style={paragraphStyle}>
7. For the veil, glue or sew the flowers around the comb without the burlap loops. This softens the look of the comb in your hair and gives you a unique flower crown.
</p>

<div style={gridContainerStyle}>
    <img src={image4} alt="Jackie Wyers Wedding Photography" style={imageStyle} /> 
</div>

<p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '1em', maxWidth: '100%', fontStyle: 'italic' }}>
Flower veil vs. Flower crown with each flower pinned in with bobby pins.
   </p>

<p style={paragraphStyle}>
Alternatively, you can attach the flowers with bobby pins through the burlap loops to create a flower crown or accent flowers in your bridesmaids' hair.
</p>

<div style={gridContainerStyle}>
    <img src={image5} alt="Jackie Wyers Wedding Photography" style={imageStyle} /> 
</div>
<div style={gridContainerStyle}>
    <img src={image6} alt="Jackie Wyers Wedding Photography" style={imageStyle} /> 
</div>
<div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
<div style={gridContainerStyle}>
    <img src={image7} alt="Jackie Wyers Wedding Photography" style={imageStyle} /> 
</div>

<p style={paragraphStyle}>
Even though we were in Italy, not Greece, these flower pins and veil totally give off Mamma Mia vibes in a subtle way and I loved how they looked, especially backlit at the sun was going down.

</p>

<div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>



<p style={paragraphStyle}>
Did you like the flower crown or the DIY veil? Let me know in the comments and share your favorite cinematic bridal moment!

</p>



       <div>
        <img src={signature} alt="Jackie Wyers Signature XoXo" style={{ width: '100%' }} />
      </div>
     
      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <a href="/fairytalewedding" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={nextarticle} alt="Bridesmaids Boxes How To" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', display: 'block' }} />
          MY FAIRYTALE WEDDING →
        </a>
      </div>

      <Comments website-id={websiteId} page-id={"DIY-Flowers"} />

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
        title="DIY Flower Pins for a Mamma Mia Inspired Wedding"
        description="How to make your own flower crown and separate flower pins inspired by Sophie from Mamma Mia."
        blogContent={blogContent}
      />
    </div>
  );
};

export default DIYFlowers;
