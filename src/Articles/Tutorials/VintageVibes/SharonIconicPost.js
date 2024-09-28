
import React, { useRef, useEffect } from'react';
import { Helmet } from 'react-helmet';
import { Comments } from '@hyvor/hyvor-talk-react';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import DropCap1 from '../../Travel/DropCap1';
import ArticleTitle from '../../../Components/ArticleTitle';
import NextArticle from '../../../Components/NextArticleComponent';
import SocialShare from '../../../Home/SocialShare';

const title = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateIconic/IconicTitle.png`;
const Sharon2 = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateIconic/JackieAsSharon.jpg`;
const Sharon3 = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateIconic/SharonTateFaceChart.png`;
const eyes = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateIconic/SharonTateEyeInspiration.png`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;
const Recollection = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateIconic/SharonRecollection.jpg`;
const sophia = `${process.env.PUBLIC_URL}/Images/Articles/SophiaLoren/SophiaLorenThumbnail.jpeg`;
const teespring = `${process.env.PUBLIC_URL}/Images/teespringbanner.jpeg`;

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
  
  const SharonIconicPost = () => {
  

  
  
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
    
    fontFamily: "'Open Sans', serif",
    fontWeight: '100',
    padding: '10px',
    margin: '10px auto',
    
    
      lineHeight: '1.6',
    
    };
    
    const linkStyle = {
    textDecoration: 'none', // Removes underline from links
    fontFamily: "'Open Sans', serif",
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
    
    const iframeStyle = {
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
  <title>Sharon Tate Iconic 60's Makeup Tutorial </title>
  <link rel="canonical" href="https://jackiewyers.beauty/iconicsharon" />

  <meta name="description" content="Follow Jackie Wyers' tutorial to recreate Sharon Tate's iconic 60's makeup look. Dive into the step-by-step guide and discover modern products to achieve this timeless style." />
  <meta name="keywords" content="Sharon Tate, 60s Makeup, Jackie Wyers, Makeup Tutorial, Vintage Beauty, Iconic Looks, Time Travel Tutorials, Classic Beauty, Old Hollywood, retro makeup, bold eyeliner, Sharon Tate bridal makeup, bohemian style, false lashes tutorial, vintage glamour, 1960s beauty, California glow, contouring tips, cat eye tutorial, winged eyeliner, natural brows, flawless skin, radiant foundation, nude lipstick, bridal makeup, classic looks, timeless beauty, vintage-inspired makeup, beauty influencer tips, modern makeup products, Sharon Tate fashion, Hollywood style, step-by-step makeup guide, how to recreate 60s looks, Jackie Wyers Beauty, beauty tutorials, vintage vibes, iconic style, makeup artistry, Hollywood icons, retro beauty inspiration" />

  <meta property="og:title" content="Sharon Tate Iconic 60's Makeup Tutorial - Jackie Wyers" />
  <meta property="og:description" content="Follow Jackie Wyers' tutorial to recreate Sharon Tate's iconic 60's makeup look. Dive into the step-by-step guide and discover modern products to achieve this timeless style." />
  <meta property="og:image" content="https://jackiewyers.beauty/Images/Articles/SharonTateIconic/ICONICSHARONTHUMBNAIL.jpg" />
  <meta property="og:url" content="https://jackiewyers.beauty/sharontateiconic" />
  <meta name="twitter:title" content="Sharon Tate Iconic 60's Makeup Tutorial - Jackie Wyers" />
  <meta name="twitter:description" content="Follow Jackie Wyers' tutorial to recreate Sharon Tate's iconic 60's makeup look. Dive into the step-by-step guide and discover modern products to achieve this timeless style." />
  <meta name="twitter:image" content="https://jackiewyers.beauty/Images/Articles/SharonTateIconic/ICONICSHARONTHUMBNAIL.jpg" />
  <meta name="twitter:card" content="summary_large_image" />



  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Sharon Tate Iconic 60's Makeup Tutorial - Jackie Wyers",
        "description": "Follow Jackie Wyers' tutorial to recreate Sharon Tate's iconic 60's makeup look. Dive into the step-by-step guide and discover modern products to achieve this timeless style.",
        "image": "https://jackiewyers.beauty/Images/Articles/SharonTateIconic/ICONICSHARONTHUMBNAIL.jpg",
        "author": {
          "@type": "Person",
          "name": "Jackie Wyers"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Jackie Wyers Beauty",
          "logo": {
            "@type": "ImageObject",
            "url": "https://jackiewyers.beauty/Images/Articles/Signature.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://jackiewyers.beauty/sharontateiconic"
        },
        "datePublished": "2024-07-27",
        "dateModified": "2024-09-20"
      }
    `}
  </script>
</Helmet>


<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <a href="/timetraveltutorials" style={{ fontFamily: 'GFS Didot, serif', fontSize: '1rem', color: '#000000', textDecoration: 'none' }}>
          BEAUTY // TIME TRAVEL TUTORIALS
        </a>
      </div>

      <ArticleTitle
  mainTitle="Sharon Tate Iconic 60's Makeup Tutorial"
  subTitle="The bohemian 60s icon, ahead of her time"
  author="Jackie Wyers"
  publishDate="March 5, 2024"
/>

<SocialShare 
  url="https://jackiewyers.beauty/iconicsharon" 
  title="Sharon Tate Iconic 60's Makeup Tutorial - Jackie Wyers" 
  imageUrl="https://jackiewyers.beauty/Images/Articles/SharonTateIconic/ICONICSHARONTHUMBNAIL.jpg" 
/>
  
      <ResponsiveYoutube src="https://www.youtube.com/embed/t1jJtpsxes4?si=sHOkPYVUOvEbXk2m" title="Sharon Tate Iconic 60's Makeup Tutorial - Jackie Wyers on Youtube" />

      <div style = {{textAlign: 'center', margin: '10px auto' }}>
<SubscribeButton />
</div>

<p style={{ margin: '20px auto', textAlign: 'center', fontSize: '1.1rem', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
</p>

      <DropCap1 text="Welcome back to another installment of Time Travel Tutorials, this time featuring the iconic '60s figure, Sharon Tate. A promising actress and model of the 1960s, Tate was celebrated for her roles in films like 'Valley of the Dolls', captivating audiences with her talent and ethereal beauty. Her tragic and untimely death solidified her status as an era icon, profoundly influencing pop culture, fashion, and beauty standards of the 1960s. Let's celebrate the beautiful Sharon Tate by emulating her signature style, which remains influential today. Also covered on blog is Sharon’s Bridal style as well." />
    
    
      
      
<div style={gridContainerStyle}>
        <img src={Sharon2} alt="Sharon Tate - Makeup" style={{ width: '90%',  margin: '0 auto' }} />
       
      </div>
      <p style={paragraphStyle}>
  Sharon's makeup always stood out to me, offering a perfect blend of '60s mod with a touch of bohemian flair. Unlike the more posh looks of the time embodied by "The Face of the '60s" model <a href="/yardley1965" target="_blank" rel="noopener noreferrer" style={linkStyle}>Jean Shrimpton</a>, Sharon's style provides a sun-kissed, bold-eyed look that leans more towards a hippie/'70s inspiration, showcasing her personal style was ahead of its time.
</p>
         
<p style={paragraphStyle}>
  If you're as captivated by this makeup era and Sharon Tate as I am, I hope you'll enjoy this beauty breakdown. While I use modern products to achieve the look, at the end of this article, we'll also explore some products still available today that were among Sharon Tate's favorites.
</p>
      <h2 style={headingStyle}>The Essence of Sharon Tate’s Makeup</h2>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={Sharon3} alt="Sharon Tate - Makeup" style={{ width: '100%' }} />
      </div>

      <p style={paragraphStyle}>
  The essence of Sharon Tate's makeup embodies a timeless beauty that, while uniquely hers, can be celebrated through inspired emulation. Her makeup is characterized by bronzed, natural skin and captivating, deep-set eyes accentuated with a boldly drawn cut crease. Her full, long lashes perfectly complemented her enchanting hazel eyes. The look is completed with subtly lined lips and a peachy nude lipstick, giving off effortless glamour.
</p>
    
<p style={paragraphStyle}>
  The photoshoot that serves as my inspiration, taken by Orlando Suero in 1965, captures Sharon Tate's quintessential bohemian style like no other, showcasing the very essence of her iconic beauty.
</p>

      <h2 style={headingStyle}>The Cali-Girl Glow</h2>

      <p style={paragraphStyle}>
  To channel that quintessential Cali girl vibe, a good starting point is a self-tanner. My go-to self-tanning line for the body is <a href="https://www.cocoandeve.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Coco and Eve</a>, but for the face, I'm particularly fond of the <a href="https://www.lovingtan.com/products/deluxe-face-tan" target="_blank" rel="noopener noreferrer" style={linkStyle}>Loving Tan Deluxe Face Tan Tinted Self-Tanning Cream</a>. It leaves a gorgeous sun-kissed tint to the skin even before makeup application. Sharon Tate's skin looked very natural, so for my recreation, I chose <a href="https://www.charlottetilbury.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Charlotte Tilbury's light foundation</a>, sheered out to achieve that barely-there look.
</p>

<p style={paragraphStyle}>
  In the tutorial, I blended two different foundations, primarily to attain the perfect shade match. However, for simplicity and effectiveness, I highly recommend sticking with the Charlotte Tilbury foundation for that flawless, natural finish.
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/494394?noHeader=true" title="Sharon Tate Inspired Makeup Products" />
   
    
      <h2 style={headingStyle}>Sharon’s Modelesque Bone Structure</h2>
      <p style={paragraphStyle}>
  To emulate Sharon Tate's stunning bone structure, including her high cheekbones and defined chin, sculpting with a lighter concealer is key. If your skin tone is similar to hers, the <a href="https://www.toofaced.com/product/23450/66048/concealer/born-this-way-super-coverage-multi-use-sculpting-concealer" target="_blank" rel="noopener noreferrer" style={linkStyle}>Too Faced Born This Way Concealer in Swan</a> is an excellent option. However, if your skin tone differs, opt for a concealer that's two shades lighter than your foundation. After enhancing the chin, jawline, area around the nose, and under the eyes with brightness, lightly set these areas with powder before applying a powder bronzer to finalize the sculpted look. This technique ensures a natural yet defined finish, mirroring Sharon Tate's iconic beauty.
</p>

      <h2 style={headingStyle}>Bronzed & Blushy</h2>
      <p style={paragraphStyle}>
  For a natural bronze and blushed appearance, sticking with powder products and matte formulas works best. The <a href="https://www.toofaced.com/product/23459/49686/bronzer/milk-chocolate-soleil-matte-bronzer" target="_blank" rel="noopener noreferrer" style={linkStyle}>Too Faced Milk Chocolate Bronzer</a> is an excellent choice for this purpose. Apply it beneath the cheekbones, blending slightly onto the cheeks, across the nose, and onto the forehead to achieve a soft, sun-kissed look. To enhance the effect with a touch of sunburnt realism and add depth to the cheeks, the <a href="https://www.rimmellondon.com/products/face/maxi-blush" target="_blank" rel="noopener noreferrer" style={linkStyle}>Rimmel London Maxi Blush in Wildcard</a> is perfect. This product helps to mimic that slightly flushed, vibrant look, evoking a natural radiance and depth that complements the bronzed base beautifully.
</p>
    
      <ResponsiveIframe src="https://shopmy.us/collections/public/494399?noHeader=true" title="Bronzing and Blushing Products" />
   

      <h2 style={headingStyle}>Sharon’s Distinct Brows</h2>
      <p style={paragraphStyle}>
  When it comes to brows, while my goal is to recreate iconic looks as closely as possible, my brows are much fuller than Sharon Tate’s, so I've had to adapt accordingly. To emulate Sharon's brow style, I recommend brushing up the front (head) of the brows and setting them in place with a brow gel. Aim to maintain the arch and tail of the brows rounded and relatively thin, if possible. Fortunately, having bangs helped me camouflage the differences between our brow shapes, but it's essential to remember that these tutorials are about capturing the essence of the icon's style rather than becoming their exact duplicate. After all, our uniqueness is what truly defines us!
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/494403?noHeader=true" title="Sharon Tate Inspired Brow Products" />

      <h2 style={headingStyle}>Sharon’s Take on ‘60s Cut Crease Eyes</h2>
      <p style={paragraphStyle}>
  Moving on to the eyes, let's craft a bold, graphic-style cut crease using a <a href="https://www.maybelline.com/eye-makeup/eyeliner" target="_blank" rel="noopener noreferrer" style={linkStyle}>gel brown liner</a> to capture Sharon Tate's signature deep-set eyes, a hallmark of her beauty. The shape we're aiming for diverges slightly from the perfect half-moon typically associated with cut creases. Begin by drawing a straight, slightly diagonal line from the inner corner of the eye upwards to just underneath the brow's head. From this point, curve the line to follow just above your natural crease, creating a distinct and dramatic effect, tailing downwards. So much of today’s beauty standards feature an upturned cat eye, but sleepy-doe eyes have such a beautiful charm as well!
</p>

<p style={paragraphStyle}>
  To further enhance the cut crease and emulate the depth and dimension of Sharon's eyes, apply a dark purple liner to the inner portion of the crease. This adds a layer of complexity and richness to the look. Keep the eyelid and brow bone bright to maintain a fresh, open appearance. Finally, incorporate some deeper matte eyeshadow as a liner along the lash line for added intensity and definition, completing the homage to Sharon Tate's iconic eye makeup.
</p>
    
      <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
        <img src={eyes} alt="Sharon Tate's Iconic Eyes" style={{ width: '40%', float: 'right', margin: '1rem' }} />
        <p style={paragraphStyle}>
  It was revealed in auction Sharon used a brown liner from Maybelline and a White Revlon Eyeliner for the waterline, though in the inspiration photos the waterline appeared more natural. I noticed, however, that underneath the upper and lower lashes, there was a pop of light shimmer. I used a <a href="https://www.charlottetilbury.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>shimmery Charlotte Tilbury pencil liner</a> to catch the light.
</p>
      </div>
     
      <h2 style={headingStyle}>Dainty, Twiggy Lashes</h2>
      <p style={paragraphStyle}>
  Let’s create dainty Twiggy-inspired lashes - and lots of them! Add an extra flick on the outer corners for that mesmerizing '60s flair. Sharon’s take on Twiggy’s signature drawn-on bottom lash was more subtle, blending well into her natural bottom lashes. For this look, I opted for the <a href="https://www.kissusa.com/products/looks-so-natural-lashes" target="_blank" rel="noopener noreferrer" style={linkStyle}>Kiss Looks So Natural lashes in Sultry</a>, which resemble Sharon’s delicate lashes perfectly. To elevate these lashes further, we'll layer them with plenty of mascara. The <a href="https://www.toofaced.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Too Faced Better Than Sex mascara</a> is my go-to for thickening up these wispy falsies, adding an extra dose of drama and volume.
</p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/565903?noHeader=true" title="Sharon Tate Inspired Brow Products" />
     
      <h2 style={headingStyle}>Sweet & Soft Peach Pout</h2>
      <p style={paragraphStyle}>
  To finish the look, I've chosen a nude lip liner (<a href="https://www.charlottetilbury.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Charlotte Tilbury Iconic Nude</a>) and added a pop of nude-peach with <a href="https://www.toofaced.com/product/23465/47430/lip-gloss/sweet-peach-cream-peach-oil-lip-gloss" target="_blank" rel="noopener noreferrer" style={linkStyle}>Too Faced Sweet Peach Lip Gloss in Peach</a>.
</p>
    
      <ResponsiveIframe src="https://shopmy.us/collections/public/565715?noHeader=true" title="Twiggy-inspired Lashes Products" />

      <h2 style={headingStyle}>What Products did Sharon really use?</h2>
      <p style={paragraphStyle}>
  Sharon Tate's beauty regime was elegantly simple, incorporating a <a href="https://www.maxfactor.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Max Factor Brown liner</a> for both her brows and lips. Surprisingly, one of her go-to products was Vaseline! Many drugstore brands that are still available today, such as the <a href="https://www.maybelline.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Maybelline Brown Eyeliner Pencil</a> and <a href="https://www.revlon.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Revlon White Eyeliner</a>, were used by Tate to highlight her enchanting eyes and were showcased at auction. My personal favorite from the ‘60s, <a href="/yardley1965" target="_blank" rel="noopener noreferrer" style={linkStyle}>Yardley</a>, offered the most exquisite pearly lipsticks, which were also a part of Sharon’s makeup collection.
</p>

<p style={paragraphStyle}>
  For skincare, Sharon placed her trust in <a href="https://www.ernolaszlo.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Erno Laszlo products</a>, alongside a popular ‘60s beauty facial steamer, and the luxurious <a href="https://www.jovan.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Jovan Mink & Pearls bath oil beads</a>. For a closer examination of her beauty collection, <a href="https://bid.juliensauctions.com/?status=2" target="_blank" rel="noopener noreferrer" style={linkStyle}>explore the auction</a> where her belongings were sold.
</p>

<p style={paragraphStyle}>
  In terms of perfumes, Sharon Tate had a fondness for fragrances, especially <a href="https://www.chanel.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Chanel No. 5</a> and <a href="https://www.guerlain.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Guerlain's Jicky</a>. These classic scents are celebrated for their enduring allure. For those interested, a review of Jicky fragrance is available <a href="/jickyreview" target="_blank" rel="noopener noreferrer" style={linkStyle}>here</a>.
</p>
    
      <ResponsiveIframe src="https://shopmy.us/collections/public/565717?noHeader=true" title="Sharon Tate Inspired Brow Products" />

      <h2 style={headingStyle}>Sharon Tate's Recollection Book</h2>
      <p style={paragraphStyle}>
  In the tutorial, I hosted a giveaway of an amazing Sharon Tate coffee table book, “<a href="https://www.amazon.com/Sharon-Tate-Recollection-Debra/dp/076245234X" target="_blank" rel="noopener noreferrer" style={linkStyle}>Sharon Tate Recollection</a>” by her sister, Deborah Tate that celebrates her style. The winner has received their prize, but you can buy the book on Amazon <a href="https://www.amazon.com/Sharon-Tate-Recollection-Debra/dp/076245234X" target="_blank" rel="noopener noreferrer" style={linkStyle}>here</a> - a must for Sharon fans!
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

      <ResponsiveIframe src="https://shopmy.us/collections/embed/425381?noHeader=true" title="Shop Sharon Inspired Style Beauty Products" height='100%' />

      <p style={paragraphStyle}>
  Sharon Tate seamlessly blended elements of '60s mod with a bohemian chic flair. Her effortless yet mesmerizing makeup style continues to captivate and inspire, proving that true beauty transcends generations.
</p>

<p style={paragraphStyle}>
  Thank you for reading and if you want to be featured on my site, try out this look and please tag me as I’d love to share your rendition on my socials! I love to see you switch up your style with confidence.
</p>

<NextArticle
      link="/sophialoren"
      imgSrc={sophia}
      altText="Sophia Loren Iconic 60s Makeup Tutorial"
      linkText="MORE VINTAGE VIBES →"
      containerStyle={{ margin: '1rem 0' }} // customize as needed
      linkStyle={{ color: '#000000', fontSize: '1.05rem' }} // customize as needed
      imgStyle={{ borderRadius: '10px' }} // customize as needed
    />
    
      <div style={{ textAlign: 'center' }}>
        <a href="/vintagevibesmerch" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={teespring} alt="Vintage Vibes Merch" style={{ width: '100%', maxWidth: '1400px', display: 'block' }} />
          SHOP VINTAGE VIBES MERCH →
        </a>
      </div>

      <div>
        <img src={signature} alt="Jackie Wyers Signature XoXo" style={{ width: '100%' }} />
      </div>


    

        <Comments website-id={websiteId} page-id="sharon-iconic-post" />
  
    </div>
  );

  return (
    <div
    style = {{boxShadown: 'none'}}
    >
         <Card
         style = {{boxShadown: 'none'}}
        title="Sharon Tate Iconic 60's Makeup Tutorial"
        description="The bohemian 60s icon, ahead of her time"
        blogContent={blogContent}
      />
    </div>


  );
};

export default SharonIconicPost;
