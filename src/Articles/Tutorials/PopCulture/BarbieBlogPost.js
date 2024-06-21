import React, { useRef } from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';
import '../../ExampleTutorial1.css';
import SubscribeButton from '../../../Components/SubscribeButton';
import DropCap from '../../../Components/DropCap';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import InArticleAd from '../../../Advertising/InArticleAd';
import AdSenseAd from '../../../Advertising/Ads';

const title = `${process.env.PUBLIC_URL}/Images/Articles/BarbieMovie/barbietitle2.jpeg`;
const Barbie2 = `${process.env.PUBLIC_URL}/Images/Articles/BarbieMovie/Barbie2.JPG`;
const barbienew = `${process.env.PUBLIC_URL}/Images/Articles/BarbieMovie/barbienew.jpeg`;
const Barbie3 = `${process.env.PUBLIC_URL}/Images/Articles/BarbieMovie/Barbie3.jpeg`;
const Barbie4 = `${process.env.PUBLIC_URL}/Images/Articles/BarbieMovie/BarbieFaceChart.jpg`;
const lana = `${process.env.PUBLIC_URL}/Images/Articles/LanaXskims/LanaDelRayThumbnail.jpeg`;
const Signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
  <div>
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);

const BarbieBlog = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);

  const headingStyle = {
    textAlign: 'center',
    fontSize: '40px',
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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25vh' }}>
        <a href="/popculture" style={{ fontFamily: 'Arapey', fontSize: '1.25em', color: 'black', textDecoration: 'none' }}>
          BEAUTY // POP CULTURE // MOVIES
        </a>
      </div>
      <img src={title} alt="Barbie Movie Title" style={{ width: '100%' }} />

      <ResponsiveYoutube src="https://www.youtube.com/embed/JfaND9n9ZCU?si=NfJyPeNlC3qzl6tp" title="Margot Robbie Barbie Movie - Jackie Wyers" />

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <SubscribeButton />
      </div>

      <div>
        <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
          All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
        </p>
      </div>

      <DropCap text="In the dazzling world of the Barbie Movie, directed by Greta Gerwig and starring Margot Robbie as endearing Barbie and Ryan Gosling as the hilarious Ken, we must not forget to pay tribute to the brilliant artists who brought these iconic characters to life. Ivana Primorac, the creative force leading the movie’s hair and makeup teams, created Margot’s Barbie pink makeup look that appeared fresh and modern. The 'Barbie' costume designer Jacqueline Durran played an equally crucial role in fuelling the 'Barbiecore' fashion trend with the iconic Barbie looks featured in the film. Hello Barbiecore summer of 2023 - everywhere you looked, it was all about PINK!" />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <a href="https://www.instagram.com/p/Cs4LhepN6dc/?hl=en" target="_blank" rel="noopener noreferrer">
          <img src={barbienew} alt="Barbie Makeup Drawing" style={{ width: '100%' }} />
        </a>
      </div>

      <div>
        <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
          Original Makeup & Hair Design by Ivana Primorac from the 2023 film 'Barbie,' recreation by Jackie Wyers.
        </p>
      </div>
<div
style = {{
  margin : '20ppx'
}}
>

  <AdSenseAd/>
</div>
      <p style={{ ...paragraphStyle, maxWidth: '500px', margin: '0 auto' }}>
        Among the film's many breathtaking fashion moments, the iconic pink gingham dress stole the hearts of fans. However, one look, in my opinion, outshone the rest—the unforgettable roller skate Barbie ensemble!
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2rem 0' }}>
        <a href='https://www.instagram.com/p/CtfWF2oMk7p' target="_blank" rel="noopener noreferrer">
          <img src={Barbie2} alt="Barbie Look" style={{ width: '100%', maxWidth: '500px' }} />
        </a>
        <a href='https://www.instagram.com/p/CuXU3IqOlwa/?img_index=1' target="_blank" rel="noopener noreferrer">
          <img src={Barbie3} alt="Barbie Look" style={{ width: '100%', maxWidth: '500px' }} />
        </a>
      </div>

      <p style={{ ...paragraphStyle, maxWidth: '500px', margin: '0 auto' }}>
        When paparazzi pictures of the cast filming at Venice Beach surfaced featuring neon outfits reminiscent of '90s roller skate Barbie, I was inspired to create the entire costume for Halloween, complete with a makeup transformation that is not only faithful to the film but also entirely wearable.
      </p>

      <p style={{ ...paragraphStyle, maxWidth: '500px', margin: '0 auto' }}>
        In this blog post, I'll be your guide and I will show you step by step how to recreate Margot Robbie's exquisite pink Barbie makeup look, drawing inspiration from the movie and using my cherished Barbie collaboration products. Additionally, I'll show you how to DIY Barbie roller skates at home. Come on, Barbies, let’s get glam!
      </p>

      <h2 style={headingStyle}>Get The Glamorous Barbie Makeup Look</h2>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={Barbie4} alt='Barbie Makeup Drawing' style={{ width: '100%', maxWidth: '650px' }} />
      </div>

      <InArticleAd/>


      <h2 style={headingStyle}>Preparation</h2>

      <p style={{ ...paragraphStyle, maxWidth: '500px', margin: '0 auto' }}>
        Before we begin, make sure your skin is hydrated. This collaboration isn’t available any longer, but the product itself is still on shelves! The Glamglow Glowstarter Mega Illuminating Moisturizer leaves a super radiant, Barbie-doll base. If you're looking for plump lips, the Lawless Forget the Filler Overnight Lip Plumping Mask is a must-try and a top recommendation I always recommend for beauty lovers!
      </p>
    

      <h2 style={headingStyle}>Foundation</h2>

      <p style={{ ...paragraphStyle, maxWidth: '500px', margin: '0 auto' }}>
        We are going to opt for a lightweight foundation, perfect for the summer heat. I recommend the Beautiful Skin Foundation from Charlotte Tilbury or the L'Oréal True Match Hyaluronic Tinted Serum. Both are fabulous picks depending on your budget.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/493481?noHeader=true" title="Collection name here" />

      <h2 style={headingStyle}>Contour and Bronzer</h2>

      <p style={{ ...paragraphStyle, maxWidth: '500px', margin: '0 auto' }}>
        I achieve Margot's signature look with some subtle contouring and cream bronzer, creating more structure to my face. I’d recommend enhancing your natural features rather than going against them though - especially if you are wearing this look out in daylight. Less is more!
      </p>

      <h2 style={headingStyle}>Powder and Blush</h2>

      <p style={{ ...paragraphStyle, maxWidth: '500px', margin: '0 auto' }}>
        Set your makeup with your favorite powder to maintain a matte yet natural finish. My holy-grail powder is from Florasis, a Chinese beauty brand. You can find them on Amazon & their powders never look too cakey or thick, rather they set and softly mattify. Margot's rosy cheeks can be replicated using the Pur X Malibu Barbie Blush Set.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/493498?noHeader=true" title="Collection name here" />

      <h2 style={headingStyle}>Brows</h2>

      <p style={{ ...paragraphStyle, maxWidth: '500px', margin: '0 auto' }}>
        Keep your brows soft and natural like Margot Robbie’s Barbie. Lawless Shape Up Soft Fill Brow Pencil is great, but you can always go drugstore with Winkylux or L’Oréal Paris.
      </p>

      <h2 style={headingStyle}>Eyeshadow and Eyeliner</h2>

      <p style={{ ...paragraphStyle, maxWidth: '500px', margin: '0 auto' }}>
        For the eyes, we are going to go with subtle pops of pink, shimmer, and definition. This is a perfect time to use shades from the Colorpop Malibu Barbie Collab (still my favorite collection) or you can always use some blush in the crease to cut down on products.
      </p>

      <InArticleAd/>


      <p style={{ ...paragraphStyle, maxWidth: '500px', margin: '0 auto' }}>
        If you are a fan of cute makeup with a beachy aesthetic, Flower Knows Beauty also has an adorable palette, which I featured in the tutorial. The seashells scream Malibu!
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/493504?noHeader=true" title="Collection name here" />

      <h2 style={headingStyle}>Lashes</h2>

      <p style={{ ...paragraphStyle, maxWidth: '500px', margin: '0 auto' }}>
        Time for a Barbie collab product I use daily. The Revlon X Barbie Lash curler! After a curl, swipe a coat of your favorite mascara.
      </p>

      <h2 style={headingStyle}>Highlighter</h2>

      <p style={{ ...paragraphStyle, maxWidth: '500px', margin: '0 auto' }}>
        Add shine to your nose, cheeks, and chin for that Barbie skin glow. The Charlotte Tilbury Beauty Light Wand in Spotlight remains a favorite, but now many drugstore brands have recreated the iconic product. Flower Beauty also has a fabulous wand in various shades.
      </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/493536?noHeader=true" title="Collection name here" />

      <p style={{ ...paragraphStyle, maxWidth: '500px', margin: '0 auto' }}>
        Voila! You are your own version of Mattel's iconic doll. Feel free to tone down or amp up the style to make it your own. See full tutorial linked at the beginning of article for DIY costume.
      </p>

      <p style={{ ...paragraphStyle, maxWidth: '500px', margin: '0 auto' }}>
        Want to be featured on my site? Submit your recreation or version of this look here. I’d love to see you switch up your style with confidence!
      </p>

      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <a href="/lanablog" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={lana} alt="Margot Robbie - Barbie Movie" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', display: 'block' }} />
          MORE POP CULTURE BEAUTY →
        </a>
      </div>

    


      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={Signature} alt="Final glamorous Barbie makeup look" style={{ width: '100%', maxWidth: '650px' }} />
      </div>

      <InArticleAd/>

      <Comments website-id={websiteId} pageId={'barbie'} />
    </div>
  );

  return (
    <div ref={blogRef}>
      <Card blogContent={blogContent} />
    </div>
  );
};

export default BarbieBlog;
