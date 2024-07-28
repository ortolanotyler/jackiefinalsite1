
import React, { useRef, useEffect } from'react';
import { Helmet } from 'react-helmet';
import '../../ExampleTutorial1.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import SubscribeButton from '../../../Components/SubscribeButton';
import DropCap from '../../../Components/DropCap';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import TextReveal from '../../../Components/TextReveal';
import AdSenseAd from '../../../Advertising/Ads';
import { initGA, logPageView } from '../../../analytics';

const title = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateIconic/IconicTitle.png`;
const Sharon2 = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateIconic/JackieAsSharon.jpg`;
const Sharon3 = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateIconic/SharonTateFaceChart.png`;
const eyes = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateIconic/SharonTateEyeInspiration.png`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;
const Recollection = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateIconic/SharonRecollection.jpg`;
const sophia = `${process.env.PUBLIC_URL}/Images/Articles/SophiaLoren/SophiaLorenThumbnail.jpeg`;
const teespring = `${process.env.PUBLIC_URL}/Images/teespringbanner.jpeg`;

const Card = ({ blogContent }) => (
  <div>
    <div><TextReveal text='TIME TRAVEL TUTORIALS' /></div>
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);

const SharonIconicPost = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);

  useEffect(() => {
    initGA();
    logPageView('/sharontateiconic');
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
  <title>Sharon Tate Iconic 60's Makeup Tutorial - Jackie Wyers</title>
  <meta name="description" content="Follow Jackie Wyers' tutorial to recreate Sharon Tate's iconic 60's makeup look. Dive into the step-by-step guide and discover modern products to achieve this timeless style." />
  <meta name="keywords" content="Sharon Tate, 60s Makeup, Jackie Wyers, Makeup Tutorial, Vintage Beauty, Iconic Looks, Time Travel Tutorials, Classic Beauty, Old Hollywood" />
  <meta property="og:title" content="Sharon Tate Iconic 60's Makeup Tutorial - Jackie Wyers" />
  <meta property="og:description" content="Follow Jackie Wyers' tutorial to recreate Sharon Tate's iconic 60's makeup look. Dive into the step-by-step guide and discover modern products to achieve this timeless style." />
  <meta property="og:image" content={title} />
  <meta property="og:url" content="https://jackiewyers.beauty/sharontateiconic" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Sharon Tate Iconic 60's Makeup Tutorial - Jackie Wyers" />
  <meta name="twitter:description" content="Follow Jackie Wyers' tutorial to recreate Sharon Tate's iconic 60's makeup look. Dive into the step-by-step guide and discover modern products to achieve this timeless style." />
  <meta name="twitter:image" content={title} />
  <script type="application/ld+json">
    {`
      {
        "@context": "http://schema.org",
        "@type": "BlogPosting",
        "headline": "Sharon Tate Iconic 60's Makeup Tutorial - Jackie Wyers",
        "description": "Follow Jackie Wyers' tutorial to recreate Sharon Tate's iconic 60's makeup look. Dive into the step-by-step guide and discover modern products to achieve this timeless style.",
        "image": "${title}",
        "author": {
          "@type": "Person",
          "name": "Jackie Wyers"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Jackie Wyers Beauty",
          "logo": {
            "@type": "ImageObject",
            "url": "${signature}"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://jackiewyers.beauty/sharontateiconic"
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


      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
        <a href="/timetraveltutorials" style={{ fontFamily: 'Arapey', fontSize: '15px', color: 'black', textDecoration: 'none' }}>
          BEAUTY // TIME TRAVEL TUTORIALS
        </a>
      </div>
      <img src={title} alt="Sharon Tate Iconic Look" style={{ width: '100%' }} />

      <ResponsiveYoutube src="https://www.youtube.com/embed/t1jJtpsxes4?si=sHOkPYVUOvEbXk2m" title="Sharon Tate Iconic 60's Makeup Tutorial - Jackie Wyers on Youtube" />

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <SubscribeButton />
      </div>

      <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', maxWidth: '100%', fontStyle: 'italic' }}>
        All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
      </p>

      <DropCap text="Welcome back to another installment of Time Travel Tutorials, this time featuring the iconic '60s figure, Sharon Tate. A promising actress and model of the 1960s, Tate was celebrated for her roles in films like 'Valley of the Dolls', captivating audiences with her talent and ethereal beauty. Her tragic and untimely death solidified her status as an era icon, profoundly influencing pop culture, fashion, and beauty standards of the 1960s. Let's celebrate the beautiful Sharon Tate by emulating her signature style, which remains influential today. Also covered on blog is Sharon’s Bridal style as well." />
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
        <img src={Sharon2} alt="Sharon Tate - Makeup" style={{ width: '40%', float: 'right', margin: '1rem' }} />
        <p style={paragraphStyle}>
          Sharon's makeup always stood out to me, offering a perfect blend of '60s mod with a touch of bohemian flair. Unlike the more posh looks of the time embodied by "The Face of the '60s" model  <a href="/yardley1965" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>Jean Shrimpton</a>, Sharon's style provides a sun-kissed, bold-eyed look that leans more towards a hippie/'70s inspiration, showcasing her personal style was ahead of its time. If you're as captivated by this makeup era and Sharon Tate as I am, I hope you'll enjoy this beauty breakdown. While I use modern products to achieve the look, at the end of this article, we'll also explore some products still available today that were among Sharon Tate's favorites.
        </p>
      </div>

      <h2 style={headingStyle}>The Essence of Sharon Tate’s Makeup</h2>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={Sharon3} alt="Sharon Tate - Makeup" style={{ width: '100%' }} />
      </div>

      <p style={paragraphStyle}>
        The essence of Sharon Tate's makeup embodies a timeless beauty that, while uniquely hers, can be celebrated through inspired emulation. Her makeup is characterized by bronzed, natural skin and captivating, deep-set eyes accentuated with a boldly drawn cut crease. Her full, long lashes perfectly complemented her enchanting hazel eyes. The look is completed with subtly lined lips and a peachy nude lipstick, giving off effortless glamour.
      </p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <p style={paragraphStyle}>
        The photoshoot that serves as my inspiration, taken by Orlando Suero in 1965, captures Sharon Tate's quintessential bohemian style like no other, showcasing the very essence of her iconic beauty.
      </p>

      <h2 style={headingStyle}>The Cali-Girl Glow</h2>

      <p style={paragraphStyle}>
        To channel that quintessential Cali girl vibe, a good starting point is a self-tanner. My go-to self-tanning line for the body is Coco and Eve, but for the face, I'm particularly fond of the Loving Tan Deluxe Face Tan Tinted Self-Tanning Cream. It leaves a gorgeous sun-kissed tint to the skin even before makeup application. Sharon Tate's skin looked very natural, so for my recreation, I chose Charlotte Tilbury's light foundation, sheered out to achieve that barely-there look.
      </p>

      <p style={paragraphStyle}>
        In the tutorial, I blended two different foundations, primarily to attain the perfect shade match. However, for simplicity and effectiveness, I highly recommend sticking with the Charlotte Tilbury foundation for that flawless, natural finish.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/494394?noHeader=true" title="Sharon Tate Inspired Makeup Products" />
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
      <h2 style={headingStyle}>Sharon’s Modelesque Bone Structure</h2>
      <p style={paragraphStyle}>
        To emulate Sharon Tate's stunning bone structure, including her high cheekbones and defined chin, sculpting with a lighter concealer is key. If your skin tone is similar to hers, the Too Faced Born This Way Concealer in Swan is an excellent option. However, if your skin tone differs, opt for a concealer that's two shades lighter than your foundation. After enhancing the chin, jawline, area around the nose, and under the eyes with brightness, lightly set these areas with powder before applying a powder bronzer to finalize the sculpted look. This technique ensures a natural yet defined finish, mirroring Sharon Tate's iconic beauty.
      </p>

      <h2 style={headingStyle}>Bronzed & Blushy</h2>
      <p style={paragraphStyle}>
        For a natural bronze and blushed appearance, sticking with powder products and matte formulas works best. The Too Faced Milk Chocolate Bronzer is an excellent choice for this purpose. Apply it beneath the cheekbones, blending slightly onto the cheeks, across the nose, and onto the forehead to achieve a soft, sun-kissed look. To enhance the effect with a touch of sunburnt realism and add depth to the cheeks, the Rimmel London Maxi Blush in Wildcard is perfect. This product helps to mimic that slightly flushed, vibrant look, evoking a natural radiance and depth that complements the bronzed base beautifully.
      </p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <ResponsiveIframe src="https://shopmy.us/collections/public/494399?noHeader=true" title="Bronzing and Blushing Products" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5em', maxWidth: '100%' }}>
        CONTAINS: AFFILIATE LINKS
      </p>

      <h2 style={headingStyle}>Sharon’s Distinct Brows</h2>
      <p style={paragraphStyle}>
        When it comes to brows, while my goal is to recreate iconic looks as closely as possible, my brows are much fuller than Sharon Tate’s, so I've had to adapt accordingly. To emulate Sharon's brow style, I recommend brushing up the front (head) of the brows and setting them in place with a brow gel. Aim to maintain the arch and tail of the brows rounded and relatively thin, if possible. Fortunately, having bangs helped me camouflage the differences between our brow shapes, but it's essential to remember that these tutorials are about capturing the essence of the icon's style rather than becoming their exact duplicate. After all, our uniqueness is what truly defines us!
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/494403?noHeader=true" title="Sharon Tate Inspired Brow Products" />

      <h2 style={headingStyle}>Sharon’s Take on ‘60s Cut Crease Eyes</h2>
      <p style={paragraphStyle}>
        Moving on to the eyes, let's craft a bold, graphic-style cut crease using a gel brown liner to capture Sharon Tate's signature deep-set eyes, a hallmark of her beauty. The shape we're aiming for diverges slightly from the perfect half-moon typically associated with cut creases. Begin by drawing a straight, slightly diagonal line from the inner corner of the eye upwards to just underneath the brow's head. From this point, curve the line to follow just above your natural crease, creating a distinct and dramatic effect, tailing downwards. So much of today’s beauty standards feature an upturned cat eye, but sleepy-doe eyes have such a beautiful charm as well!
      </p>

      <p style={paragraphStyle}>
        To further enhance the cut crease and emulate the depth and dimension of Sharon's eyes, apply a dark purple liner to the inner portion of the crease. This adds a layer of complexity and richness to the look. Keep the eyelid and brow bone bright to maintain a fresh, open appearance. Finally, incorporate some deeper matte eyeshadow as a liner along the lash line for added intensity and definition, completing the homage to Sharon Tate's iconic eye makeup.
      </p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
        <img src={eyes} alt="Sharon Tate's Iconic Eyes" style={{ width: '40%', float: 'right', margin: '1rem' }} />
        <p style={paragraphStyle}>
          It was revealed in auction Sharon used a brown liner from Maybelline and a White Revlon Eyeliner for the waterline, though in the inspiration photos the waterline appeared more natural. I noticed, however, that underneath the upper and lower lashes, there was a pop of light shimmer. I used a shimmery Charlotte Tilbury pencil liner to catch the light.
        </p>
      </div>

      <h2 style={headingStyle}>Dainty, Twiggy Lashes</h2>
      <p style={paragraphStyle}>
        Let’s create dainty Twiggy-inspired lashes - and lots of them! Add an extra flick on the outer corners for that mesmerizing '60s flair. Sharon’s take on Twiggy’s signature drawn-on bottom lash was more subtle, blending well into her natural bottom lashes. For this look, I opted for the Kiss Looks So Natural lashes in Sultry, which resemble Sharon’s delicate lashes perfectly. To elevate these lashes further, we'll layer them with plenty of mascara. The Too Faced Better Than Sex mascara is my go-to for thickening up these wispy falsies, adding an extra dose of drama and volume.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/565903?noHeader=true" title="Sharon Tate Inspired Brow Products" />

      <h2 style={headingStyle}>Sweet & Soft Peach Pout</h2>
      <p style={paragraphStyle}>
        To finish the look, I've chosen a nude lip liner (Charlotte Tilbury Iconic Nude) and added a pop of nude-peach with Too Faced Sweet Peach Lip Gloss in Peach.
      </p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <ResponsiveIframe src="https://shopmy.us/collections/public/565715?noHeader=true" title="Twiggy-inspired Lashes Products" />

      <h2 style={headingStyle}>What Products did Sharon really use?</h2>
      <p style={paragraphStyle}>
        Sharon Tate's beauty regime was elegantly simple, incorporating a Max Factor Brown liner for both her brows and lips. Surprisingly, one of her go-to products was Vaseline! Many drugstore brands that are still available today, such as the Maybelline Brown Eyeliner Pencil and Revlon White Eyeliner, were used by Tate to highlight her enchanting eyes and were showcased at auction. My personal favorite from the ‘60s, Yardley, offered the most exquisite pearly lipsticks, which were also a part of Sharon’s makeup collection.
      </p>

      <p style={paragraphStyle}>
        For skincare, Sharon placed her trust in Erno Laszlo products, alongside a popular ‘60s beauty facial steamer, and the luxurious Jovan Mink & Pearls bath oil beads. For a closer examination of her beauty collection, <a href="https://bid.juliensauctions.com/?status=2" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>explore the auction</a> where her belongings were sold.
      </p>

      <p style={paragraphStyle}>
        In terms of perfumes, Sharon Tate had a fondness for fragrances, especially Chanel No. 5 and Guerlain's Jicky. These classic scents are celebrated for their enduring allure. For those interested, a review of Jicky fragrance is available <a href="/jickyreview" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>here</a>.
      </p>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <ResponsiveIframe src="https://shopmy.us/collections/public/565717?noHeader=true" title="Sharon Tate Inspired Brow Products" />

      <h2 style={headingStyle}>Sharon Tate's Recollection Book</h2>
      <p style={paragraphStyle}>
        In the tutorial, I hosted a giveaway of an amazing Sharon Tate coffee table book, “Sharon Tate Recollection” by her sister, Deborah Tate that celebrates her style. The winner has received their prize, but you can buy the book on Amazon <a href="https://www.amazon.com/Sharon-Tate-Recollection-Debra/dp/076245234X?crid=28VR1JPS277NP&dib=eyJ2IjoiMSJ9.qxS6wqe0izrUiD6NLxbRZjq3tnelIyQ02U0cH_tIvNeH_KNNXVj6x4b6FVDls6inxs6pllY-eh5KceW5pZFy-sUUg3V9NxiBRxaLcbIUh67xmxY6FRTAmDAdDnjzNVV8dxr4P0QFOnaZz0D-xBjsK2-p7ONjG47dSZaHhpcaxKpNZwW8VkiLMHZwnnpoE-lFTRzXvuhc0R7pKYnBR4PQlZ133FfE3jBS8a-CPL2exnY.pwkkZSll-apcIuIj_t-2f0ZJOL55yO0-oAEPmJeFdOY&dib_tag=se&keywords=sharon+tate+book&qid=1709678411&sprefix=sharon+tate+book,aps,153&sr=8-1&linkCode=sl1&tag=jackiewyers-20&linkId=80b014647a273b2a99d73296d585a128&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>here</a> - a must for Sharon fans!
      </p>

      <h2 style={headingStyle}>Sharon's Bohemian Style</h2>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <a href="https://www.amazon.com/Sharon-Tate-Recollection-Debra/dp/076245234X?crid=28VR1JPS277NP&dib=eyJ2IjoiMSJ9.qxS6wqe0izrUiD6NLxbRZjq3tnelIyQ02U0cH_tIvNeH_KNNXVj6x4b6FVDls6inxs6pllY-eh5KceW5pZFy-sUUg3V9NxiBRxaLcbIUh67xmxY6FRTAmDAdDnjzNVV8dxr4P0QFOnaZz0D-xBjsK2-p7ONjG47dSZaHhpcaxKpNZwW8VkiLMHZwnnpoE-lFTRzXvuhc0R7pKYnBR4PQlZ133FfE3jBS8a-CPL2exnY.pwkkZSll-apcIuIj_t-2f0ZJOL55yO0-oAEPmJeFdOY&dib_tag=se&keywords=sharon+tate+book&qid=1709678411&sprefix=sharon+tate+book,aps,153&sr=8-1&linkCode=sl1&tag=jackiewyers-20&linkId=80b014647a273b2a99d73296d585a128&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer">
          <img src={Recollection} alt='Sharon Tate Recollection' style={{ width: 'auto', maxBlockSize: '600px' }} />
        </a>
      </div>

      <p style={paragraphStyle}>
        Beyond cosmetics, Sharon’s style featured mini skirts, mini dresses, floral prints, and big accessories. She kept footwear simple, loving classic ballet pink and black slippers, though she often expressed a desire to be barefoot. Her most frequent accessories were big hoops, emphasizing her bohemian and effortlessly chic aesthetic.
      </p>

      <h2 style={headingStyle}>Shop Sharon Inspired Style</h2>

      <ResponsiveIframe src="https://shopmy.us/collections/embed/425381?noHeader=true" title="Twiggy-inspired Lashes Products" height='100%' />

      <p style={paragraphStyle}>
        Sharon Tate seamlessly blended elements of '60s mod with a bohemian chic flair. Her effortless yet mesmerizing makeup style continues to captivate and inspire, proving that true beauty transcends generations.
      </p>

      <p style={paragraphStyle}>
        Thank you for reading and if you want to be featured on my site, try out this look and please tag me as I’d love to share your rendition on my socials! I love to see you switch up your style with confidence.
      </p>

      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <a href="/sophialoren" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={sophia} alt="Margot Robbie - Barbie Movie" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', display: 'block' }} />
          MORE VINTAGE VIBES →
        </a>
      </div>
      <div style={{ textAlign: 'center' }}>
        <a href="/vintagevibesmerch" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={teespring} alt="Vintage Vibes Merch" style={{ width: '100%', maxWidth: '1400px', display: 'block' }} />
          SHOP VINTAGE VIBES MERCH →
        </a>
      </div>

      <div style={{ textAlign: 'center' }}>
        <img src={signature} alt='Signature' style={{ width: '100%' }} />
      </div>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <div style={{ margin: '2rem' }}>
        <Comments website-id={websiteId} page-id="sharon-iconic-post" />
      </div>
    </div>
  );

  return (
    <div>
      <Card blogContent={blogContent} />
    </div>
  );
};

export default SharonIconicPost;
