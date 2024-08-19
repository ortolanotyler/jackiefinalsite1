import React, { useRef, useEffect } from 'react';
import '../../ExampleTutorial1.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import DropCap from '../../../Components/DropCap';
import TextReveal from '../../../Components/TextReveal';
import AdSenseAd from '../../../Advertising/Ads';
import { Helmet } from'react-helmet';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import EmailSubscribe from '../../../Components/EmailSubscribe';
import DropCap1 from '../../Travel/DropCap1';


const title = `${process.env.PUBLIC_URL}/Images/Articles/EmilyInParis/emilytitle.png`;
const image1 = `${process.env.PUBLIC_URL}/Images/Articles/EmilyInParis/1.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/EmilyInParis/2.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/Articles/EmilyInParis/3.jpg`;
const image4 = `${process.env.PUBLIC_URL}/Images/Articles/EmilyInParis/4.jpg`;
const image5 = `${process.env.PUBLIC_URL}/Images/Articles/EmilyInParis/5.jpg`;
const image6 = `${process.env.PUBLIC_URL}/Images/Articles/EmilyInParis/6.jpg`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;
const period = `${process.env.PUBLIC_URL}/Images/Articles/PeriodDrama/ArticleThumb.jpg`;

const Card = ({ blogContent }) => (
  <div>
    <div><TextReveal text='POP CULTURE' /></div>
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);

const EmilyInParis = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);


  
    useEffect(() => {
      logPageView();
    }, []);
  
    const logPageView = () => {
      if (window.gtag) {
        window.gtag('config', 'G-RT6GR7JXYG', {
          page_path: '/emily-in-paris',
          page_title: 'Emily In Paris - Jackie Wyers',
        });
      }
    };


 
  const imageStyle = {
    display: 'block',
    margin: '0 auto',
    maxWidth: '600px',
    height: 'auto'
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
    maxWidth: '700px',
    lineHeight: '1.25',
    marginLeft: 'auto',
    marginRight: 'auto',
};

  const blogContent = (
    <div className="container">
   <Helmet>
  <title>Emily in Paris Style Evolution: Makeup, Hair, and Fashion Recap</title>
  <meta name="description" content="Explore the style evolution of Emily Cooper from Emily in Paris. Discover iconic fashion, makeup, and hair moments from the series." />
  <meta name="keywords" content="Emily in Paris, Makeup, Hair, Fashion, Style Evolution, Jackie Wyers, Beauty Blog, Netflix, Patricia Field, Marylin Fitoussi, Lily Collins" />
  <meta property="og:title" content="Emily in Paris Style Evolution: Makeup, Hair, and Fashion Recap - Jackie Wyers" />
  <meta property="og:description" content="Explore the style evolution of Emily Cooper from Emily in Paris. Discover iconic fashion, makeup, and hair moments from the series." />
  <meta property="og:image" content={title} />
  <meta property="og:url" content="https://jackiewyers.beauty/emilyinparis" />
  <link rel="canonical" href="https://jackiewyers.beauty/emily-in-paris" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Emily in Paris Style Evolution: Makeup, Hair, and Fashion Recap - Jackie Wyers" />
  <meta name="twitter:description" content="Explore the style evolution of Emily Cooper from Emily in Paris. Discover iconic fashion, makeup, and hair moments from the series." />
  <meta name="twitter:image" content={title} />
  <script type="application/ld+json">
    {`
    {
      "@context": "http://schema.org",
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://jackiewyers.beauty/emilyinparis"
      },
      "headline": "Emily in Paris Style Evolution: Makeup, Hair, and Fashion Recap - Jackie Wyers",
      "description": "Explore the style evolution of Emily Cooper from Emily in Paris. Discover iconic fashion, makeup, and hair moments from the series.",
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
      "datePublished": "2024-08-13",
      "dateModified": "2024-08-13"
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
        <a href="/popculture" style={{ fontFamily: 'Arapey', fontSize: '1em', color: 'black', textDecoration: 'none' }}>
          BEAUTY // POP CULTURE
        </a>
      </div>
      <img src={title} alt="No Makeup-Makeup Spring Edition Title" style={{ width: '100%' }} />
      <div style = {{marginBottom:'30px',marginTop: '20px', textAlign: 'center' }}>
<iframe
      style={{ boxShadow: '12px', borderRadius: '15px', width: '301px', height: '535px' }}
      src="https://www.youtube.com/embed/X55RB0hZugE"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
</div>
      <div>
        <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
          All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
        </p>
      </div>
      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <SubscribeButton />
      </div>
   
   
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth:'600px', margin:'auto' }}>
  <DropCap1 text="Bonjour mes amies, parlons Pop Culture! Season four of Emily in Paris has finally arrived, and I couldn’t be more thrilled. Emily Cooper's colourful and bold outfit choices, paired with her upbeat and optimistic personality, create a character & show worth binging on Netflix. The show's idealized version of Paris, filled with chic cafes, stunning architecture, and, of course, fabulous fashion, has captivated audiences worldwide. And let's not forget about the sexy love interests!" />
</div>

<p style={paragraphStyle}>Behind the stunning Emily in Paris fashion that has become synonymous with the show is the legendary Patricia Field, the iconic costume designer behind Sex and the City, who set the tone in season one.</p>
<p style={paragraphStyle}>From season two onward, Marylin Fitoussi took the reins, pushing Emily's style in new and exciting directions. Let’s take a look back at Emily Cooper style, makeup and hair throughout the show so far.</p>


<div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
<h2 style={headingStyle}>Season One: Where It All Began</h2>

<ResponsiveYoutube src="https://www.youtube.com/embed/b_e98iV-TdM?si=Xm2aB5vvNmTYawYo" title="Lana Del Ray X Skims Makeup Tutorial - Jackie Wyers" />


<p style={paragraphStyle}>Season one introduced us to Emily Cooper's bubbly and ambitious personality, perfectly reflected in her vibrant fashion choices, mixing prints and textures. Her makeup often featured a classic red lip, bold brows, and a fresh, dewy complexion—a look that was more American, with a polished and put-together appearance contrasting with the more understated Parisian style. Her hair was almost always perfect, usually styled in stunning bouncy waves that added to her all-American charm.</p>
<div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
<p style={paragraphStyle}>One of Emily's most iconic fashion moments from this season is her black-and-white checkered outfit, paired with a red beret and a quirky camera phone case. I recreated this look in New York at Bryant Park, and even though it was shot in the Big Apple, it definitely channels Parisian energy. If you're looking to shop similar styles, I’ve linked options under each outfit!</p>
<div style = {imageStyle}>
<img src={image1} alt="Signature" style={{ width: '100%' }} />
      </div>
      <ResponsiveIframe src="https://shopmy.us/collections/public/731159?noHeader=true" title="Shop My Victoria's Secret Favorites" />
      <ResponsiveIframe src="https://shopmy.us/collections/public/731163?noHeader=true" title="Shop My Victoria's Secret Favorites" />
    
<p style={paragraphStyle}>Another memorable fashion moment is when Emily (Lily Collins’) bears a striking resemblance to Audrey Hepburn in her ode to Funny Face. With a sleek bun, rhinestone hair accessories, a classic red lip, and a stunning black dress, this look exudes elegance. I couldn't resist trying it out myself as an Audrey fan! For the full makeup and hair tutorials, checkout the playlist on YouTube or watch throughout this article.</p>
<div style = {imageStyle}>
<img src={image2} alt="Signature" style={{ width: '100%' }} />
      </div>
      <ResponsiveIframe src="https://shopmy.us/collections/public/731192?noHeader=true" title="Shop My Victoria's Secret Favorites" />
      <ResponsiveIframe src="https://shopmy.us/collections/public/731196?noHeader=true" title="Shop My Victoria's Secret Favorites" />

    
<h2 style={headingStyle}>Season Two: Hair Goals and Subtle Shifts</h2>
<ResponsiveYoutube src="https://www.youtube.com/embed/dBC8lWhrWWs?si=Z5pNURYPmP7m41dm" title="Lana Del Ray X Skims Makeup Tutorial - Jackie Wyers" />



      
<p style={paragraphStyle}>Season two continued to push the boundaries of Emily’s fashion and beauty looks, with some of my personal favorite hair moments defining this season. The wearable pretty ponytails and intricate updos to go with Emily’s bold style giving major hair inspiration.</p>
<div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
<p style={paragraphStyle}>One of my all-time favorite behind the scenes shots from shooting season two is Emily strutting through the streets of Paris in knee-high brown boots and a bucket hat, reminiscent of her iconic checkered look from season one. While her neon yellow-accented floral jacket was a bit bold for my taste, I toned it down in my recreation and finished the look with a deep red lip like Emily.</p>
<div style = {imageStyle}>
<img src={image3} alt="Signature" style={{ width: '100%' }} />
      </div>
      <ResponsiveIframe src="https://shopmy.us/collections/public/731200?noHeader=true" title="Shop My Victoria's Secret Favorites" />
      <ResponsiveIframe src="https://shopmy.us/collections/public/731202?noHeader=true" title="Shop My Victoria's Secret Favorites" />

    
<p style={paragraphStyle}>While the Emily in Paris x Lancome collaboration promoted during season 2 isn’t available anymore, you can find similar lip shades from the new Makeup Revolution x Emily In Paris collection.</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/731234?noHeader=true" title="Shop My Victoria's Secret Favorites" />


<p style={paragraphStyle}>Another fashion moment worth highlighting was Emily’s over-the-top pink bow dress, paired with pearl drop earrings and a super cute high ponytail with ringlet curls. Though the night didn’t end too well for Emily, she sure looked stunning!</p>


<div style = {imageStyle}>
<img src={image4} alt="Signature" style={{ width: '100%' }} />
      </div>
      <ResponsiveIframe src="https://shopmy.us/collections/public/731206?noHeader=true" title="Shop My Victoria's Secret Favorites" />
      <ResponsiveIframe src="https://shopmy.us/collections/public/731207?noHeader=true" title="Shop My Victoria's Secret Favorites" />

     
      
<p style={paragraphStyle}>Pink lips can be hard to pull off, but this magenta shade became one of my favourites to wear after experimenting with this Emily inspired glam. A must try, especially if you love wearing bold red lips.</p>
<ResponsiveIframe src="https://shopmy.us/collections/public/731209?noHeader=true" title="Shop My Victoria's Secret Favorites" />


<p style={paragraphStyle}>Finally, the decorated fishtail-braided updo created by hair stylist Mike Desir was a stand out this season, paired with a voluptuous tulle red dress that Emily wore to the Gregory Elliott Duprée fashion show at the end of the season. This hairstyle in particular is a bit challenging to do on yourself but perfect for a special event. Watch full tutorial below and tag me if you try it out!</p>
<div style = {imageStyle}>
<img src={image5} alt="Signature" style={{ width: '100%' }} />
      </div>
      <ResponsiveIframe src="https://shopmy.us/collections/public/731210?noHeader=true" title="Shop My Victoria's Secret Favorites" />
      <ResponsiveIframe src="https://shopmy.us/collections/public/731211?noHeader=true" title="Shop My Victoria's Secret Favorites" />

     
<h2 style={headingStyle}>Season Three: The Transformation</h2>
<div style = {imageStyle}>
<img src={image6} alt="Signature" style={{ width: '100%' }} />
      </div>
<p style={paragraphStyle}>Season three marked a transformation in Emily's style, both in fashion and beauty. This season, Emily undergoes a hair transformation with the infamous post-mental-breakdown bangs. Her hair becomes a little less polished and more laid-back, inspired by authentic Parisian style.</p>
<div style = {{textAlign: 'center' }}>
<iframe
      style={{ boxShadow: '12px', borderRadius: '15px', width: '301px', height: '535px' }}
      src="https://www.youtube.com/embed/dm6D0Sj_cdI"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
</div>
<ResponsiveIframe src="https://shopmy.us/collections/public/731212?noHeader=true" title="Shop My Victoria's Secret Favorites" />


<p style={paragraphStyle}>The shift in her hair was accompanied by a subtle evolution in her makeup. Emily’s lip colour in this season shifted to more mauve and purple shades, moving away from her signature red. The show’s makeup artist, Aurélie Payen, mentioned that these choices were meant to reflect Emily's more settled and confident persona in Paris, perfectly complementing her evolving style.</p>
<div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
<p style={paragraphStyle}>Emily wears a lot of green throughout the seasons, especially in season three! A green cardigan is a great way to add a pop of colour to your wardrobe in a wearable way. You may have noticed my style guides inspired by Emily are much more toned down, but if you want to rock several patterns and bold colours at once? Go for it!</p>
<ResponsiveIframe src="https://shopmy.us/collections/public/731217?noHeader=true" title="Shop My Victoria's Secret Favorites" />
<ResponsiveIframe src="https://shopmy.us/collections/public/731218?noHeader=true" title="Shop My Victoria's Secret Favorites" />





<h2 style={headingStyle}>Looking Ahead: Season Four and Beyond</h2>

<p style={paragraphStyle}>As we dive into season four, I can't wait to see what new fashion, makeup, and hair moments Emily will serve up. With Marylin Fitoussi continuing to lead the charge on costume design, we can expect even more bold and chic looks that push the boundaries of American-In-Paris style, completely unique to the show.</p>
<div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
<h2 style={headingStyle}>Shop the Look</h2>

<p style={paragraphStyle}>I’ve put together a list of new collaborations and past Emily in Paris collections that are still available for purchase. These are generally quite affordable, in contrast to Emily’s designer wardrobe. While I listed many inspired outfits at a mid-higher price range, thrifting on Poshmark for similar items is another great option. Happy shopping!</p>
<ResponsiveIframe src="https://shopmy.us/collections/public/731220?noHeader=true" title="Shop My Victoria's Secret Favorites" />
<ResponsiveIframe src="https://shopmy.us/collections/public/731222?noHeader=true" title="Shop My Victoria's Secret Favorites" />
<ResponsiveIframe src="https://shopmy.us/collections/public/731225?noHeader=true" title="Shop My Victoria's Secret Favorites" />



<p style={paragraphStyle}>Do you have any favorite looks from the show so far? Let me know in the comments below! If there are specific looks from season four you'd like to see me recreate, please comment—I’d love to know what you're interested in.</p>

<p style={paragraphStyle}>Ps. Are you team Emily and Alfie, or do you prefer Emily with Gabriel? Personally, I’m a Gabriel fan—I think they’re better suited for each other, but I guess only time will tell 😉</p>

<p style={paragraphStyle}>Thanks for reading, and happy binge-watching Emily in Paris season four! If you love all things beauty and pop culture, subscribe to the newsletter to be updated weekly on new articles uploaded to the site.</p>
<EmailSubscribe/>
      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <a href="/perioddrama" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={period} alt="Sharon Tate Bridal" style={{ width: '100%', maxWidth: '500px', display: 'block', margin: '0 auto' }} />
          MORE POP CULTURE →
        </a>
      </div>
<div style = {imageStyle}>
<img src={signature} alt="Signature" style={{ width: '100%' }} />
      </div>
      <Comments website-id={websiteId} page-id={"Las-Emily"} />
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div><div
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
        title="Emily In Paris - Jackie Wyers"
        description="Emily in Paris, the popular American pop culture dance and beauty show, is back with another exciting installment! This time, we're looking back at some of the most popular looks from the show. Stay tuned for more!"
        blogContent={blogContent}
      />
    </div>
  );
};

export default EmilyInParis;
