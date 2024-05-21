import React, { useRef } from 'react';
import '../../ExampleTutorial.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import DropCap from '../../../Components/DropCap';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import TextReveal from '../../../Components/TextReveal';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';


const title = `${process.env.PUBLIC_URL}/Images/Articles/NoMakeUpSpring/nomakeuptitle.png`;
const image1 = `${process.env.PUBLIC_URL}/Images/Articles/NoMakeUpSpring/JackieWyersElizabethBennetInspiredMakeup.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/NoMakeUpSpring/JackieWyersDaphneBridgertonMakeup.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/Articles/NoMakeUpSpring/JackieWtersRoseDawsonMakeup.JPG`;
const image4 = `${process.env.PUBLIC_URL}/Images/Articles/NoMakeUpSpring/JackieWyersLittleWomenMakeup.JPG`;
const image5 = `${process.env.PUBLIC_URL}/Images/Articles/NoMakeUpSpring/JackieWyersRosieDunneMakeup.JPG`;
const image6 = `${process.env.PUBLIC_URL}/Images/Articles/NoMakeUpSpring/JackieWyersAlaskaYoung.JPG`;
const image7 = `${process.env.PUBLIC_URL}/Images/Articles/NoMakeUpSpring/JackieWyersTuckEverlastingMakeup.jpg`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;


const Card = ({ blogContent }) => (
  <div>
      <div><TextReveal text='TRENDS' /></div>
      <div className="card" style={{ maxWidth: '100%', display: 'flex', textAlign: 'left', backgroundColor: 'white', color: 'black', fontFamily: 'GFS Didot, sans-serif' }}>
          <div className="blog-content" style={{ lineHeight: '1.25' }}>{blogContent}</div>
      </div>
  </div>
);

const NoMakeUpSpring = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);


  const headingStyle = {
      textAlign: 'center',
      fontSize: '2.75rem',
      fontWeight: 'normal',
      fontFamily: 'GFS Didot, serif',
      color: '#333',
      marginTop: '0.95rem',
      marginBottom: '0.95rem'
  };

  const paragraphStyle = {
      fontSize: '21px',
      fontFamily: 'GFS Didot, serif',
      margin: '5rem',
      marginTop: '3rem',
      marginBottom: '3rem',
      maxWidth: '100%',
      lineHeight: '1.5em'
  };

  const imageStyle = {
      display: 'block',
      margin: '0 auto',
      maxWidth: '100%',
      maxHeight: '900px',
      objectFit: 'cover',
  };

  const smallImageStyle = {
      display: 'block',
      margin: '0 1rem 1rem 0',
      float: 'left',
      maxWidth: '40%',
      height: 'auto'
  };

  const blogContent = (
      <div className="container" style={{ lineHeight: '2.25rem', maxWidth: '100%', margin: '27rem', marginTop: '5em' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
              <a href="/trends" style={{ fontFamily: 'Arapey', fontSize: '1.5em', color: 'black', textDecoration: 'none' }}>
                  BEAUTY // TRENDS
              </a>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={title} alt="Sophia Loren in Arabesque" style={imageStyle} />
          </div>


          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <SubscribeButton />
          </div>

          <p style={{ fontSize: '1rem', fontFamily: 'Arapey, sans-serif', maxWidth: '100%', textAlign: 'center', fontStyle: 'italic' }}>
              All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
          </p>

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

      <div
style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
>
<img src={image1} alt="Elizabeth Bennet - Pride & Prejudice" style={{ maxBlockSize: '650px', width: 'auto' }} />

</div>

      <p style={ paragraphStyle} >
  Capturing Elizabeth Bennet's classic poise, this look draws on her
  quintessential English rose complexion. Gentle hues enhance the cheeks,
  and the eyes are softly defined with warm browns, perfectly complementing
  the natural bloom of a walk through the Pemberley gardens. <a href="https://www.youtube.com/watch?v=1NAwgv09ctY&t=219s" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'GFS Didot, serif', color: 'black' }}>Dive into the full makeup and hair tutorial on my YouTube channel</a>, or tap below to shop main products used.
</p>


<ResponsiveIframe src="https://shopmy.us/collections/public/524423?noHeader=true" title="Shop My Victoria's Secret Favorites" />

<p style={{ textAlign: 'RIGHT', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth: '100%', marginLeft: '0em' }}>
                    CONTAINS: AFFILIATE LINKS
                </p>

      <h2 style={headingStyle}>Daphne Bridgerton - Bridgerton:</h2>
<div
style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
>
<img src={image2} alt="Daphne Bridgerton - Bridgerton"  style={{ maxBlockSize: '650px', width: 'auto' }} />

</div>

      <p style={ paragraphStyle} >
      Daphne’s allure waltzes between innocence and sophistication. Using the
Bridgerton x Pat McGrath Labs collection, dust a soft rose over the eyelids
and mascara for that wide-eyed effect. To enhance the lips, Negligee from
the collection is the perfect finish. Experience crafting the essence of
Regency beauty with a modern twist in my <a href="https://www.youtube.com/watch?v=WZ7aJmJAcbU" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'GFS Didot, serif', color: 'black' }}>
step-by-step tutorial. </a>      </p>

<ResponsiveIframe src="https://shopmy.us/collections/public/524425?noHeader=true" title="Shop My Victoria's Secret Favorites" />

<p style={{ textAlign: 'RIGHT', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth: '100%', marginLeft: '0em' }}>
                    CONTAINS: AFFILIATE LINKS
                </p>

<h2 style={headingStyle}>
      Rose Dawson - Titanic:</h2>


      <div
style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
>
<img src={image3} alt="Rose Dawson - Titanic"  style={{ maxBlockSize: '650px', width: 'auto' }}/>
</div>



      <p style={ paragraphStyle} >
      Channel Rose's iconic look from Titanic, embodying Edwardian charm. The
eyes are sculpted with rustic tones, cheeks are graced with a hint of colour,
and lips are stained a deep, rich burgundy red. Perfect for a bride or a
fanciful spring afternoon. <a href="https://www.youtube.com/watch?v=0M_JRs-fYt4&t=109s" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'GFS Didot, serif', color: 'black' }}>
Get the elegant updo and makeup right here. 
  </a>     </p>

<ResponsiveIframe src="https://shopmy.us/collections/public/524428?noHeader=true" title="Shop My Victoria's Secret Favorites" />

<p style={{ textAlign: 'RIGHT', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth: '100%', marginLeft: '0em' }}>
                    CONTAINS: AFFILIATE LINKS
                </p>
<h2 style={headingStyle}>
        
        Amy March - Little Women:
</h2>


<div
style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
>
<img src={image4} alt="Amy March - Little Women" style={{ maxBlockSize: '650px', width: 'auto' }} />


</div>

<p style={ paragraphStyle} >
      Reflecting Amy March's artistic spirit, her look is understated yet
intentional. Barely-there foundation pairs with a nude peach blush and
neutral lips looks effortless, yet sophisticated. Amy's updos, intricate with
twists and braids, adds to the artistic style. <a href="https://www.youtube.com/watch?v=BuElhuhaMXw&t=501s" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'GFS Didot, serif', color: 'black' }}>
 
See the full Amy March hair and
makeup guide.   </a>
    </p>

<ResponsiveIframe src="https://shopmy.us/collections/public/524428?noHeader=true" title="Shop My Victoria's Secret Favorites" />

<p style={{ textAlign: 'RIGHT', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth: '100%', marginLeft: '0em' }}>
                    CONTAINS: AFFILIATE LINKS
                </p>

<h2 style={headingStyle}>
        
Rosie Dunne - Love, Rosie:
</h2>

<div
style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
>
<img src={image5} alt="Rosie Dunne - Love, Rosie"  style={{ maxBlockSize: '650px', width: 'auto' }}/>


</div>


<p style={ paragraphStyle} >

Rosie’s makeup is as radiant and sweet as her character. The fresh-faced
glow with coral cheeks, a touch of pink on the eyes, and full brows looks
amazing on Lilly Collins, and I’m sure on you too! The voluminous bob
frames the face with elegance. Uncover the series of “Love, Rosie” makeup
and hairstyles <a href="https://www.youtube.com/watch?v=BuElhuhaMXw&t=501s" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'GFS Didot, serif', color: 'black' }}> 
here.
</a> </p>

<ResponsiveIframe src="https://shopmy.us/collections/public/524432?noHeader=true" title="Shop My Victoria's Secret Favorites" />

<p style={{ textAlign: 'RIGHT', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth: '100%', marginLeft: '0em' }}>
                    CONTAINS: AFFILIATE LINKS
                </p>
<h2 style={headingStyle}>
      Alaska Young - Looking For Alaska
      </h2>
      <div
style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
>
      <img src={image6} alt="Alaska Young - Looking For Alaska"  style={{ maxBlockSize: '650px', width: 'auto' }} />
</div>
      <p style={ paragraphStyle} >
      Alaska Young's effortless look from "Looking for Alaska" pairs a rebellious
spirit with girl-next-door charm. Her 70s influenced style features long hair
with a centre part and full brows. Makeup is soft, smudged, with natural
pops of colour enhancing cheeks and lips. Master the Alaska Young inspired
look <a href="https://www.youtube.com/watch?v=AePBFzlyNpo&t=16s" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'GFS Didot, serif', color: 'black' }}> 
here.</a>
      </p>
      <ResponsiveIframe src="https://shopmy.us/collections/public/524436?noHeader=true" title="Shop My Victoria's Secret Favorites" />

      <p style={{ textAlign: 'RIGHT', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth: '100%', marginLeft: '0em' }}>
                    CONTAINS: AFFILIATE LINKS
                </p>
      <h2 style={headingStyle}>
      Winnie Foster - Tuck Everlasting:
      </h2>


      <div
style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
>
      <img src={image7} alt="Winnie Foster - Tuck Everlasting"  style={{ maxBlockSize: '650px', width: 'auto' }} />
</div>

      <p style={ paragraphStyle} >
      Winnie Foster's makeup pays homage to the fleeting innocence of youth.
Soft, subtle coverage with a rosy glow on the cheeks and a touch of moisture
on the lips with a balm evokes a time of simplicity and wonder. Relive the
movie’s magic with long hairstyles recreated <a href="https://www.youtube.com/watch?v=AePBFzlyNpo&t=16s" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'GFS Didot, serif', color: 'black' }}> 
in this tutorial.  </a>    </p>
<ResponsiveIframe src="https://shopmy.us/collections/public/524438?noHeader=true" title="Shop My Victoria's Secret Favorites" />

<p style={{ textAlign: 'RIGHT', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth: '100%', marginLeft: '0em' }}>
                    CONTAINS: AFFILIATE LINKS
                </p>
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

      <Comments website-id={websiteId} pageId={"No-Makeup-Spring"} />

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
         
    </div>
  );
};

export default NoMakeUpSpring;
