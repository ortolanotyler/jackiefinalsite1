import React, { useEffect, useRef } from 'react';
import '../../ExampleTutorial.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import DropCap from '../../../Components/DropCap';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import TextReveal from '../../../Components/TextReveal';


const title = `${process.env.PUBLIC_URL}/Images/nomakeupspring1.png`;
const image1 = `${process.env.PUBLIC_URL}/Images/springelizabeth.jpeg`;
const image2 = `${process.env.PUBLIC_URL}/Images/springdaphne.jpeg`;
const image3 = `${process.env.PUBLIC_URL}/Images/springrosedawson.jpeg`;
const image4 = `${process.env.PUBLIC_URL}/Images/springlittlewomen.jpeg`;
const image5 = `${process.env.PUBLIC_URL}/Images/springrosie.jpeg`;
const image6 = `${process.env.PUBLIC_URL}/Images/springalaska.jpeg`;
const image7 = `${process.env.PUBLIC_URL}/Images/springtuckeverlasting.jpeg`;
const signature = `${process.env.PUBLIC_URL}/Images/Signature.png`;


const Card = ({ blogContent }) => {
  return (
    <div>
      <div><TextReveal text='POP CULTURE OBSESSED'/></div>
      <div className="card" style={{ maxWidth: '100%', display: 'flex', textAlign: 'left', backgroundColor: 'white', color: 'black', fontFamily: 'GFS Didot, sans-serif' }}>
        <div className="blog-content" style={{ lineHeight: '1.2' }}>{blogContent}</div>
      </div>
    </div>
  );
};

const modifyAnchorTags = (element) => {
  const anchors = element.getElementsByTagName('a');
  for (const anchor of anchors) {
    anchor.setAttribute('target', '_blank');
    anchor.setAttribute('rel', 'noopener noreferrer');
  }
};

const NoMakeUpSpring = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);
  
  useEffect(() => {
    if (blogRef.current) {
      modifyAnchorTags(blogRef.current);
    }
  }, []);

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: 'normal',
    fontFamily: 'Arapey, serif',
    color: '#333',
    marginBottom: '1rem'
  };

  const paragraphStyle = {
    fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '2.5rem', maxWidth: '100%',padding: '1rem', marginTop: '0.5rem'

  }

  const blogContent = (
    <div className="container" style={{ lineHeight: '2.25em', margin: '15rem', marginTop: '0em' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25vh' }}>
        <a href="/popculture" style={{ fontFamily: 'Arapey', fontSize: '1.5em', color: 'black', textDecoration: 'none' }}>
          BEAUTY // TRENDS // POP CULTURE
        </a>
      </div>
      <img src={title} alt="Victoria's Secret Fashion Show 2013" style={{ width: '100%' }} />
      <SubscribeButton />

      <DropCap text="Welcome back for some quick no-makeup makeup inspiration for spring,
analyzing timeless beauty icons from beloved tv & film. In this season of
fresh beginnings, I find myself drawn to the artful simplicity of the no-makeup
makeup look, inspired by some of pop culture's most enduring
female characters. Their spirit, captured in timeless stories, now breathes life
into my spring beauty routine. "/>    

      <h2 style={headingStyle}>
      The Looks:
Elizabeth Bennet - Pride & Prejudice
      </h2>
      <img src={image1} alt="Victoria's Secret Fashion Show 2013" style={{ maxBlockSize: '650px', width: 'auto' }} />

      <p style={ paragraphStyle} >
  Capturing Elizabeth Bennet's classic poise, this look draws on her
  quintessential English rose complexion. Gentle hues enhance the cheeks,
  and the eyes are softly defined with warm browns, perfectly complementing
  the natural bloom of a walk through the Pemberley gardens. <a href="https://www.youtube.com/watch?v=1NAwgv09ctY&t=219s" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'GFS Didot, serif', color: 'black' }}>Dive into the full makeup and hair tutorial on my YouTube channel</a>, or tap below to shop main products used.
</p>


<ResponsiveIframe src="https://shopmy.us/collections/public/524423?noHeader=true" title="Shop My Victoria's Secret Favorites" />


      <h2 style={headingStyle}>Daphne Bridgerton - Bridgerton:</h2>

      <img src={image2} alt="Victoria's Secret Fashion Show 2013"  style={{ maxBlockSize: '650px', width: 'auto' }} />

      <p style={ paragraphStyle} >
      Daphne’s allure waltzes between innocence and sophistication. Using the
Bridgerton x Pat McGrath Labs collection, dust a soft rose over the eyelids
and mascara for that wide-eyed effect. To enhance the lips, Negligee from
the collection is the perfect finish. Experience crafting the essence of
Regency beauty with a modern twist in my <a href="https://www.youtube.com/watch?v=WZ7aJmJAcbU" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'GFS Didot, serif', color: 'black' }}>
step-by-step tutorial. </a>      </p>

<ResponsiveIframe src="https://shopmy.us/collections/public/524425?noHeader=true" title="Shop My Victoria's Secret Favorites" />


<h2 style={headingStyle}>
      Rose Dawson - Titanic:</h2>

      <img src={image3} alt="Victoria's Secret Fashion Show 2013"  style={{ maxBlockSize: '650px', width: 'auto' }}/>




      <p style={ paragraphStyle} >
      Channel Rose's iconic look from Titanic, embodying Edwardian charm. The
eyes are sculpted with rustic tones, cheeks are graced with a hint of colour,
and lips are stained a deep, rich burgundy red. Perfect for a bride or a
fanciful spring afternoon. <a href="https://www.youtube.com/watch?v=0M_JRs-fYt4&t=109s" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'GFS Didot, serif', color: 'black' }}>
Get the elegant updo and makeup right here. 
  </a>     </p>

<ResponsiveIframe src="https://shopmy.us/collections/public/524428?noHeader=true" title="Shop My Victoria's Secret Favorites" />

<h2 style={headingStyle}>
        
        Amy March - Little Women:
</h2>

<img src={image4} alt="Victoria's Secret Fashion Show 2013" style={{ maxBlockSize: '650px', width: 'auto' }} />

<p style={ paragraphStyle} >
      Reflecting Amy March's artistic spirit, her look is understated yet
intentional. Barely-there foundation pairs with a nude peach blush and
neutral lips looks effortless, yet sophisticated. Amy's updos, intricate with
twists and braids, adds to the artistic style. <a href="https://www.youtube.com/watch?v=BuElhuhaMXw&t=501s" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'GFS Didot, serif', color: 'black' }}>
 
See the full Amy March hair and
makeup guide.   </a>
    </p>

<ResponsiveIframe src="https://shopmy.us/collections/public/524428?noHeader=true" title="Shop My Victoria's Secret Favorites" />


<h2 style={headingStyle}>
        
Rosie Dunne - Love, Rosie:
</h2>

<img src={image5} alt="Victoria's Secret Fashion Show 2013"  style={{ maxBlockSize: '650px', width: 'auto' }}/>


<p style={ paragraphStyle} >

Rosie’s makeup is as radiant and sweet as her character. The fresh-faced
glow with coral cheeks, a touch of pink on the eyes, and full brows looks
amazing on Lilly Collins, and I’m sure on you too! The voluminous bob
frames the face with elegance. Uncover the series of “Love, Rosie” makeup
and hairstyles <a href="https://www.youtube.com/watch?v=BuElhuhaMXw&t=501s" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'GFS Didot, serif', color: 'black' }}> 
here.
</a> </p>

<ResponsiveIframe src="https://shopmy.us/collections/public/524432?noHeader=true" title="Shop My Victoria's Secret Favorites" />

<h2 style={headingStyle}>
      Alaska Young - Looking For Alaska
      </h2>

      <img src={image6} alt="Victoria's Secret Fashion Show 2013"  style={{ maxBlockSize: '650px', width: 'auto' }} />

      <p style={ paragraphStyle} >
      Alaska Young's effortless look from "Looking for Alaska" pairs a rebellious
spirit with girl-next-door charm. Her 70s influenced style features long hair
with a centre part and full brows. Makeup is soft, smudged, with natural
pops of colour enhancing cheeks and lips. Master the Alaska Young inspired
look <a href="https://www.youtube.com/watch?v=AePBFzlyNpo&t=16s" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'GFS Didot, serif', color: 'black' }}> 
here.</a>
      </p>
      <ResponsiveIframe src="https://shopmy.us/collections/public/524436?noHeader=true" title="Shop My Victoria's Secret Favorites" />

      <h2 style={headingStyle}>
      Winnie Foster - Tuck Everlasting:
      </h2>

      <img src={image7} alt="Victoria's Secret Fashion Show 2013"  style={{ maxBlockSize: '650px', width: 'auto' }} />


      <p style={ paragraphStyle} >
      Winnie Foster's makeup pays homage to the fleeting innocence of youth.
Soft, subtle coverage with a rosy glow on the cheeks and a touch of moisture
on the lips with a balm evokes a time of simplicity and wonder. Relive the
movie’s magic with long hairstyles recreated <a href="https://www.youtube.com/watch?v=AePBFzlyNpo&t=16s" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'GFS Didot, serif', color: 'black' }}> 
in this tutorial.  </a>    </p>
<ResponsiveIframe src="https://shopmy.us/collections/public/524438?noHeader=true" title="Shop My Victoria's Secret Favorites" />

<h2 style={headingStyle}>
        
      A Final Note
      </h2>
      <p style={paragraphStyle} >
      As spring awakens, let these character-inspired no-makeup makeup looks
guide you to discover beauty in the subtle and understated. Celebrate the
characters that resonate with you, and infuse a touch of their world into
your own beauty narrative. Follow along with my full tutorials, and don’t
forget to share your recreations with me – I can’t wait to see how you bring
these looks to life!      </p>
<p style={ paragraphStyle} >
      For more beauty musings and discussions around the artistry behind some
of film and literature’s most cherished characters, stay tuned. Here’s to
embracing the season's gentle renewal and finding your own natural beauty!      </p>
<p style={ paragraphStyle} >
      If you want to be featured on my site, try out this look and please tag me as
I’d love to see it and share your rendition! I love to see you switch up your
style with confidence.      </p>
<p style={ paragraphStyle} >
      (Another article linked here for more pop culture)      </p>
     
  
      <img src={signature} alt="Victoria's Secret Fashion Show 2013" style={{ width: '100%' }} />

  
    </div>
  );

  return (
    <div ref={blogRef}>
      <Card
        title="No-Makeup Makeup Spring
        Inspiration 🌸 Pop Culture Edition!"
        description="Just a hint of color, just in time for spring"
        blogContent={blogContent}
        style={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'left'
        }}
      />
         
      <Comments website-id={websiteId} pageId={"No-Makeup-Spring"} />
    </div>
  );
};

export default NoMakeUpSpring;
