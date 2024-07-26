import React, { useRef, useEffect } from 'react';
import '../../ExampleTutorial1.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import { initGA, logPageView } from '../../../analytics';
import TextReveal from '../../../Components/TextReveal';
import AdSenseAd from '../../../Advertising/Ads';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import SubscribeButton from '../../../Components/SubscribeButton';
import BridalDropCap from '../../../Components/BridalDropCap';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';


const title = `${process.env.PUBLIC_URL}/Images/Articles/BardotHairstyles/BardotTitle.png`;
const image1 = `${process.env.PUBLIC_URL}/Images/Articles/BardotHairstyles/1.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/BardotHairstyles/2.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/Articles/BardotHairstyles/3.jpg`;
const image4 = `${process.env.PUBLIC_URL}/Images/Articles/BardotHairstyles/4.jpg`;
const image5 = `${process.env.PUBLIC_URL}/Images/Articles/BardotHairstyles/5.jpg`;
const image6 = `${process.env.PUBLIC_URL}/Images/Articles/BardotHairstyles/6.jpg`;
const image7 = `${process.env.PUBLIC_URL}/Images/Articles/BardotHairstyles/7.jpg`;
const image8 = `${process.env.PUBLIC_URL}/Images/Articles/BardotHairstyles/8.jpg`;
const image9 = `${process.env.PUBLIC_URL}/Images/Articles/BardotHairstyles/9.png`;

const bridesmaid = `${process.env.PUBLIC_URL}/Images/Articles/Bridesmaids/BridesmaidBoxThumb!.jpg`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
  <div>
    <div><TextReveal text='VINTAGE VIBES' /></div>
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);

const BardotHairstyles = () => {

  useEffect(() => {
    initGA();
    logPageView();
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
    maxWidth: '800px',
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
  maxWidth: '100%',
  height: 'auto'
};



  const blogContent = (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
        <a href="/timetraveltutorials" style={{ fontFamily: 'Arapey', fontSize: '1em', color: 'black', textDecoration: 'none' }}>
          BEAUTY // TIME TRAVEL TUTORIALS
        </a>
      </div>
      <img src={title} alt="Mastering the Bardot Bun 🌸" style={{ width: '100%' }} />
   
      <ResponsiveYoutube src="https://www.youtube.com/embed/i8wHU_XsM2A?si=ASPsSodw8bM_vliD" title="Brigitte Bardot ‘60s Makeup Tutorial by Jackie Wyers" />

<div style = {{textAlign: 'center', marginTop: '1rem' }}>
<SubscribeButton />
</div>

<p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '1em', maxWidth: '100%', fontStyle: 'italic' }}>
All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
   </p>
<BridalDropCap text="Welcome back to Time Travel Tutorials! Step back into the glamorous ‘60s with Brigitte
Bardot's iconic big bun! Whether you're looking for a chic everyday look or a show-stopping updo for a special occasion, I've got you covered with my tried- and-tested techniques featuring faux bangs, using the ends of your own hair. Let's dive into vintage beauty and master the Bardot bun together!" />



<p style={paragraphStyle}>
One of my first videos 10 years ago was attempting to recreate a Bardot-inspired half-up, half-down 'do and her big bun updo. It wasn't perfect, few too many bobby pins to be practical, but it sparked a decade-long journey to master this iconic style. Fast forward to today, and I've discovered some amazing tricks that make achieving this look a breeze, without necessarily committing to her iconic curtain bang haircut.
</p>


<div style={gridContainerStyle}>
   <a href="https://www.youtube.com/watch?v=-LLQLc6imXA" target="_blank" rel = "noreferrer" >
   <img src={image1} alt="Jackie Wyers Bardot Hairstyles" style={imageStyle} />
   </a>
 </div>
 <div style={gridContainerStyle}>
   <a href="https://www.youtube.com/watch?v=-LLQLc6imXA" target="_blank" rel = "noreferrer" >
   <img src={image2} alt="Jackie Wyers Bardot Hairstyles" style={imageStyle} />
   </a>
 </div>

 <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
 My first Bardot inspired hairstyles from 10 years ago.
</p>

<p style={paragraphStyle}>
I absolutely love fluffy curtain bangs like Sabrina Carpenter, (a modern pop culture icon inspired by B.B.) and cutting curtain bangs and layers can definitely make your hair look a lot fuller if it's around shoulder length. That being said, when your hair is as long as mine—down to the belly button— there isn’t enough hair to do face-framing layers all the way to the ends. So, it's a haircut I personally skip to keep my lengths looking fuller. However, if I ever go shoulder length, you know I’ll be getting a Bardot-inspired haircut!
</p>

<div style={gridContainerStyle}>
   <a href="https://www.youtube.com/watch?v=3zCKE1yS7Yw&t=346s" target="_blank" rel = "noreferrer" >
   <img src={image3} alt="Jackie Wyers Sabrina Carpenter" style={imageStyle} />
   </a>
 </div>

 <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
Inspired Muse - Tap image for Sabrina Carpenter inspired makeup tutorial.
</p>

<p style={paragraphStyle}>
This article is for those of you who want to experiment with faux bangs without using clip-ins and get the Bardot look temporarily. Let’s discover the best techniques to get the look, shall we?
</p>

<div style={gridContainerStyle}>
   <img src={image4} alt="Jackie Wyers Bardot Hairstyles" style={imageStyle} />
 </div>

<p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
Updated Bardot Bun on Natural Hair
 
</p>

<h2 style={headingStyle}>
Method One: Best Big Bun
</h2>

<ResponsiveYoutube src="https://www.youtube.com/embed/hl2f12fGJwg?si=o61hFs2iXQVE5J6G" title="Brigitte Bardot ‘60s Makeup Tutorial by Jackie Wyers" />



<p style={paragraphStyle}>
When I first attempted this style 10 years ago, I put my hair up into a high ponytail, and since sock buns were all the rage, I had a bun maker handy, which made the style fairly easy to do.
</p>

<p style={paragraphStyle}>
Initially, I moved part of my ponytail forward and laid the ends as faux bangs, securing them around the hairline with bobby pins. Through the years, I found a better method that really makes the hairstyle stay put, even if there’s some wind outside, without worrying about bobby pins becoming loose.

</p>

<p style={paragraphStyle}>
What I loved about my initial attempt though, was how I created the voluminous base bun. It is super easy to take pieces from around the bun maker, curl, tease, and pin in loops. When you already have a bun maker as a base shape, you can go big, and wedging bobby pins into it and it will stay put. Kudos to little me for recreating this iconic style in an easy way!

</p>

<h2 style={headingStyle}>
Method Two: Best Faux Bangs

</h2>

<div
style = {{
    textAlign: 'center',
}}
>
<iframe
  style={{ boxShadow: '12px', borderRadius: '15px', width: '301px', height: '535px' }}
  src="https://www.youtube.com/embed/7JuWiUbby4I"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

</div>



<p style={paragraphStyle}>
When I recreated a Brigitte inspired look many years later using a different inspiration photo, I came up with another method to shorten the hair for the bang section. For my new technique, section the hair into three ponytails: two smaller pigtails at the front with a centre part, and the rest of the hair in a super high ponytail.

</p>
<p style={paragraphStyle}>
Instead of using a bun maker, I teased my ponytail, wrapped it into a simple bun, and added some very textured pin curls at the front of the updo for more height and interest. This style wasn’t quite as voluminous as the first attempt, so I recommend using a bun maker if you want to go even bigger like in the first tutorial. We will combine these methods next, but first, here’s a guide to creating the best faux bangs.

</p>

<h2 style={headingStyle}>
Breaking Down My Faux Bangs Method

</h2>

<div style={gridContainerStyle}>
   <a href="https://www.youtube.com/watch?v=-LLQLc6imXA" target="_blank" rel = "noreferrer" >
   <img src={image8} alt="Jackie Wyers Bardot Hairstyles" style={imageStyle} />
   </a>
 </div>

<p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>

My Take On A Brunette Bardot Updo
</p>


<p style={paragraphStyle}>
After the base bun is complete, I created faux bangs with the two mini pigtails sectioned off.
</p>

<p style={paragraphStyle}>
Tease and twist each pigtail, hold it high in the air, and cross it over to the opposite side, behind the second pigtail, pinning with an X to keep in place. This not only adds to the updo but also allows you to pull the leftover ends from the pigtail underneath the twist, creating a fluffy curtain bang on each side.

</p>


<p style={paragraphStyle}>
You can adjust the length of your new bangs, styling them with a curling iron, teasing comb and hairspray. The tight twist allows for fewer bobby pins to keep them in place. If your hair is long like mine, loop the excess length and blend it into the bun and be sure to set with hairspray.
</p>

<p style={paragraphStyle}>
I’m really not sure how I came up with this technique, but it’s kind of genius, if I do say so myself! 🤣 If you try it out, please tag me because I would love to see how it looks on you.

</p>

<h2 style={headingStyle}>
Combining Methods for The Best Bardot Bun

</h2>

<div style={gridContainerStyle}>
   <img src={image9} alt="Jackie Wyers Bardot Hairstyles" style={imageStyle} />
  
 </div>

<p style={paragraphStyle}>
Now that we’ve covered the best way to achieve the bangs and the easiest way to get that big, voluminous bun, let’s combine the two methods. Here’s to creating the biggest and best Bardot bun as seen in this ad I created with Marc Anthony above!

</p>

<p style={paragraphStyle}>
I used the Marc Anthony Style Flex 2-in-1 Adjustable Texture Spray for extra grit that helped with styling. It’s a unique product that with the twist of a nozzle, you have a low setting (perfect for touchable bangs) and a high setting (great for teasing for lots of volume and hold in the updo.)

</p>

<p style={paragraphStyle}>
For those with thicker hair, consider using a strong- hold hairspray to keep your bun in place all day like OGX Bamboo Fibre Full hairspray. If your hair is on the finer side, a bit of texturizing spray can add the necessary grip and volume as is.

</p>

<h2 style={headingStyle}>
Product Recommendations for the Perfect Bardot Bun:
</h2>

<ResponsiveIframe
        src="https://shopmy.us/collections/public/691280?noHeader=true"
        title="Shop My Victoria's Secret Favorites"
      />
      <ResponsiveIframe
        src="https://shopmy.us/collections/public/691841?noHeader=true"
        title="Shop My Victoria's Secret Favorites"
      />
            <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>
        CONTAINS: AFFILIATE LINKS
      </p>

<h2 style={headingStyle}>
Bridgitte Bardot Makeup

</h2>

<p style={paragraphStyle}>
As for makeup to complete the look, I have a Bardot- inspired makeup look with a blonde wig to really capture her vibe. Check it out here if you’re looking for more inspiration from the ‘60s bombshell.

</p>
<div style={gridContainerStyle}>
   <img src={image5} alt="Jackie Wyers Bardot Hairstyles" style={imageStyle} />

 </div>


<p style={paragraphStyle}>
I hope you enjoyed another <a href="timetraveltutorials" target="_blank" rel="noreferrer">Time Travel Tutorials</a>     and all the vintage vibes. If you are looking for more 1960s inspiration, check out more vintage vibes on my YouTube playlist, or on my site. I hope this tutorial brings a touch of vintage glamour to your hairstyling routine. Remember, beauty is all about having fun and experimenting, so don't be afraid to try new things and make the look your own. Happy styling!

</p>

<p style={paragraphStyle}>
If you enjoyed this look, you may enjoy Audrey Hepburn in “Funny Face” makeup <a href = "https://www.youtube.com/watch?v=jsOjUk9hxow" target= "_blank" rel= "noreferrer">here</a>.

</p>



 


       <div>
        <img src={signature} alt="Jackie Wyers Signature XoXo" style={{ width: '100%' }} />
      </div>
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
     
      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <a href="/bridesmaidboxes" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={bridesmaid} alt="Bridesmaids Boxes How To" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', display: 'block' }} />
          AUDREY HEPBURN →
        </a>
      </div>

      <Comments website-id={websiteId} page-id={"bardot-hairstyles"} />

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
        title="Mastering the Bardot Bun"
        description="My Many Attempts At The Iconic 60s Style"
        blogContent={blogContent}
      />
    </div>
  );
};

export default BardotHairstyles;
