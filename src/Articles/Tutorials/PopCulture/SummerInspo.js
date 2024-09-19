import React, { useRef, useEffect } from 'react';
import '../../ExampleTutorial1.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import DropCap from '../../../Components/DropCap';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import TextReveal from '../../../Components/TextReveal';
import AdSenseAd from '../../../Advertising/Ads';
import { initGA, logPageView } from '../../../analytics';
import { Helmet } from'react-helmet';
import DropCap1 from '../../Travel/DropCap1';

const title = `${process.env.PUBLIC_URL}/Images/Articles/SummerInspo/SummerTitll.png`;
const image1 = `${process.env.PUBLIC_URL}/Images/Articles/SummerInspo/CleoH20Poster.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/SummerInspo/TheLittleMermaidPoster.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/Articles/SummerInspo/VanessaLittleMermaidPoster.jpg`;
const image4 = `${process.env.PUBLIC_URL}/Images/Articles/SummerInspo/PiratesMermaidLostLandsPoster.jpg`;
const image5 = `${process.env.PUBLIC_URL}/Images/Articles/SummerInspo/AquamarinePoster.jpg`;
const barbie = `${process.env.PUBLIC_URL}/Images/Articles/BarbieMovie/SQUAREMARGOT.jpeg`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
  <div>
    <div><TextReveal text='POP CULTURE' /></div>
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);

const SummerInspo = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);

  useEffect(() => {
    initGA();
    logPageView('/summerinspo');
}, []);

 
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

  const blogContent = (
    <div className="container">

      <Helmet>
    <title>Summer Inspiration - Jackie Wyers</title>
    <meta name="description" content="Explore Jackie Wyers' summer inspiration with mermaid looks from iconic characters like Cleo Sertori, Ariel, Vanessa, and more. Dive into the enchanting world of mermaid makeup and hairstyles." />
    <link rel="canonical" href="https://jackiewyers.beauty/summerinspo" />

    <meta name="keywords" content="Summer Beauty, Jackie Wyers, Makeup Tutorial, Beauty Blog, Pop Culture, Mermaid Looks, Cleo Sertori, The Little Mermaid, Ariel, Vanessa, Pirates of the Caribbean, Aquamarine" />
    <meta property="og:title" content="Summer Inspiration - Jackie Wyers" />
    <meta property="og:description" content="Explore Jackie Wyers' summer inspiration with mermaid looks from iconic characters like Cleo Sertori, Ariel, Vanessa, and more. Dive into the enchanting world of mermaid makeup and hairstyles." />
    <meta property="og:image" content={title} />
    <meta property="og:url" content="https://jackiewyers.beauty/summerinspo" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Summer Inspiration - Jackie Wyers" />
    <meta name="twitter:description" content="Explore Jackie Wyers' summer inspiration with mermaid looks from iconic characters like Cleo Sertori, Ariel, Vanessa, and more. Dive into the enchanting world of mermaid makeup and hairstyles." />
    <meta name="twitter:image" content={title} />
    <script type="application/ld+json">
        {`
        {
            "@context": "http://schema.org",
            "@type": "Article",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://jackiewyers.beauty/summerinspo"
            },
            "headline": "Summer Inspiration - Jackie Wyers",
            "description": "Explore Jackie Wyers' summer inspiration with mermaid looks from iconic characters like Cleo Sertori, Ariel, Vanessa, and more. Dive into the enchanting world of mermaid makeup and hairstyles.",
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


      <div style={{ margin: '5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
        <a href="/popculture" style={{ fontFamily: 'Arapey', fontSize: '15px', color: 'black', textDecoration: 'none' }}>
          BEAUTY // POP CULTURE
        </a>
      </div>
      <img src={title} alt="No Makeup-Makeup Spring Edition Title" style={{ width: '100%' }} />

      <div>
      <p style={{ margin: '2rem 0',textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', maxWidth: '100%', fontStyle: 'italic' }}>
      All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
        </p>
      </div>

      <DropCap1 text="Dive into the enchanting world of mermaids with this special blog post that brings to life the mesmerizing looks of some of pop culture's most iconic sea sirens. From the sun-kissed shores of 'H2O: Just Add Water' to the mystical depths of 'The Little Mermaid's' live-action remake, join me, as I recreate and reinterpret the signature styles of these beloved characters. Whether you're seeking a dash of nostalgic charm or a splash of summer-ready glamour, these tutorials will inspire you to embrace your inner mermaid. Let's explore these magical transformations together and make a splash in your beauty routine this season!" />
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
     
      <h2 style={headingStyle}>The Looks:
      </h2>
      <h2 style={headingStyle}>
Phoebe Tonkin as Cleo Sertori - ‘H20: Just Add Water’</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <a href="https://www.instagram.com/p/C5dsVStuCqT/?img_index=1" target="_blank" rel="noopener noreferrer">
          <img src={image1} alt="Pheobe Tonkin" style={{ width: '100%', maxWidth: '650px' }} />
        </a>
      </div>
      <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '5rem', maxWidth: '100%', fontStyle: 'italic' }}>
      Original Makeup by Jennifer Lamphee and Hair Design by Kylie Clarke from 'H2O: Just Add Water,' Season 3, recreation by Jackie Wyers.      </p>

      <p style={paragraphStyle}>

      Ever wanted to channel your inner H2O mermaid without needing the tail? Achieve the iconic Australian mermaid tan with products I love from Coco and Eve and Loving Tan. Embrace the mermaid vibe with copper and peachy sun-kissed hues that sparkle and enhance natural beauty. The Y2K hairstyles from the show were simple, yet chic—think natural waves enhanced by a touch of sea salt spray. Dive into the full makeup and hair tutorial series inspired by Cleo on my channel! And for a nostalgic throwback, check out my ancient mermaid makeup tutorial. I’ve been a fan
of this show for ages! 🧜 ✨      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/598796?noHeader=true" title="Shop My Victoria's Secret Favorites" />
   
      <h2 style={headingStyle}>Halle Bailey as Ariel - ‘The Little Mermaid’</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <a href="https://www.instagram.com/p/C5dsVStuCqT/?img_index=1" target="_blank" rel="noopener noreferrer">
          <img src={image2} alt="Daphne Bridgerton - Bridgerton" style={{ width: '100%', maxWidth: '650px' }} />
        </a>
      </div>
      <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
      Original Makeup by Nikki Wolff for Halle Bailey in 'The Little Mermaid' live-action remake, recreation by Jackie Wyers.      </p>
      
      <p style={paragraphStyle}>
      Halle Bailey's portrayal of Ariel in the live-action remake of 'The Little Mermaid' was sheer perfection. From her angelic voice to the breathtaking underwater visuals, her rose gold hair, and vintage-inspired styling set a new standard for mermaid makeup. Embrace her look with bronze makeup accentuating the eyes, cheeks, and lips. Add a thick pink headband and a few rope braids for that quintessential beachy mermaid vibe. Bonus points if you have rose-gold hair! Dive into my step-by-step tutorial to get Halle's Little Mermaid glam <a style={{ color: 'black' }} href="https://www.youtube.com/embed/EP-PeJSrmf4?si=vwWOF1jNR7EcdZ2w" target="_blank" rel="noopener noreferrer">here</a>.
    </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/598804?noHeader=true" title="Shop My Victoria's Secret Favorites" />
   
      <h2 style={headingStyle}>Jessica Alexander as Vanessa - ‘The Little Mermaid’</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={image3} alt="Jessica Alexander as Vanessa - ‘The Little Mermaid’" style={{ width: '100%', maxWidth: '650px' }} />
     
      </div>

      
      <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
      Original Makeup by Nikki Wolff for Jessica Alexander in 'The Little Mermaid' live-action remake, recreation by Jackie Wyers.      </p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <p style={paragraphStyle}>
      While her screen time was brief, Jessica Alexander's portrayal of Vanessa in 'The Little Mermaid' live-action remake certainly turned heads with her stunning purple dress. Capture her slightly shipwrecked beauty with a bohemian style from brands like Free People. Complement the look with the inspired pendant from the Disney and Pandora collection that holds Ariel's voice. For makeup, opt for a simple sculpted eye and a sculpted pink lip, paired beautifully with tussled curls. The Vanessa-inspired makeup is also featured in the Ariel tutorial as mentioned above.      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/598809?noHeader=true" title="Shop My Victoria's Secret Favorites" />
   
      <h2 style={headingStyle}>Dark Mermaidcore - ‘Pirates of the Caribbean: On Stranger Tides’</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={image4} alt="Dark Mermaidcore - ‘Pirates of the Caribbean: On Stranger Tides’" style={{ width: '100%', maxWidth: '650px' }} />
     </div>
      <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
      Original Makeup led by Joel Harlow for the mermaids in 'Pirates of the Caribbean: On Stranger Tides.' Recreation by Jackie Wyers. (Photo shot by Lost Lands Collections)      </p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <p style={paragraphStyle}>
      The 'Pirates of the Caribbean' franchise introduced us to the dark mermaid aesthetic, featuring long-haired mermaids with an irresistibly evil allure. Achieve this look with long, softly textured hair, smoky eyes in deep bronze shades, and a defined nude lip. While my recreation subtly nods to this style, you can also explore the beautiful Gemma Ward for more subtle beauty inspiration & smell like a mermaid with Anna Sui’s Fantasia Mermaid Eau de Toilette!
            </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/598822?noHeader=true" title="Shop My Victoria's Secret Favorites" />
   
      <h2 style={headingStyle}>Sara Paxton as Aquamarine - ‘Aquamarine’</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <a href="https://www.instagram.com/p/C5dsVStuCqT/?img_index=1" target="_blank" rel="noopener noreferrer">
          <img src={image5} alt="Sara Paxton as Aquamarine - ‘Aquamarine’" style={{ width: '100%', maxWidth: '650px' }} />
        </a>
      </div>
      <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
      Original Makeup by Kimberly Greene for Sara Paxton in 'Aquamarine.' Recreation by Jackie Wyers. (Photo shot by Lost Lands Collections)
      </p>
    
      <p style={paragraphStyle}>
      We can't do a roundup of mermaid looks without mentioning Sara Paxton's iconic portrayal of the sweet and bubbly Aquamarine. Her bright blonde hair, accented with streaks of blue, and her subtle makeup featuring a pop of shimmer on the lids and a hint of blue eyeliner, make for a look that’s both fun and naturally wearable for everyday summer flair. And who could forget her unforgettable 'last splash' dress? I’ve always been on the lookout for something similar! Don't forget your Ben & Jerry's Fish Food as you dive into my tutorial here.
                  </p>

                  

      <ResponsiveIframe src="https://shopmy.us/collections/public/598827?noHeader=true" title="Shop My Victoria's Secret Favorites" />
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>A Final Note 🌊</h2>

      <p style={paragraphStyle}>
      Embrace summer with these character-inspired mermaid makeup and hair inspirations—a fun way to relive your childhood while adding subtle glamour with a fishy fabulousness. I always feel like a true mermaid when wearing pearls, and I just received a stunning necklace from Biwako, the Wave Baroque Choker. It's a chunky statement piece crafted from exquisite pearls, and I simply had to share it with you.      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/598820?noHeader=true" title="Shop My Victoria's Secret Favorites" />
     



      <p style={paragraphStyle}>
      Follow along for tutorials and don’t forget to share your recreations with me —I love seeing your versions of the looks and would be thrilled to feature them on my site.
            </p>


      <p style={paragraphStyle}>
      For more pop culture and makeup inspiration, check out my previous article about 'no makeup' makeup looks in film. Don't hesitate to leave a comment below if there are any pop culture mermaids I've missed that are your favourites! Thanks for reading, and I hope you’re having a wonderful summer so far.
                  </p>



      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <a href="/margotbarbie" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={barbie} alt="Margot Robbie - Barbie Movie" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', display: 'block' }} />
          MORE POP CULTURE BEAUTY →
        </a>
      </div>

      <div>
        <img src={signature} alt="Signature" style={{ width: '100%' }} />
      </div>
      
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
<Comments website-id={websiteId} page-id={"Las-1aasa"} />

    </div>
  );

  return (
    <div ref={blogRef}>
      <Card
        title="up Makeup Spring Inspiration 🌸 Pop Culture Edition!"
        description="Just a hint of color, just in time for spring"
        blogContent={blogContent}
      />

    </div>
  );
};

export default SummerInspo;