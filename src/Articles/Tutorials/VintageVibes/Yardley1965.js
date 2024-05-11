import React, { useEffect, useRef } from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';
import '../ExampleTutorial.css';
import TextReveal from '../../../Components/TextReveal.js';
import SubscribeButton from '../../../Components/SubscribeButton.js';
import ResponsiveIframe from '../../../Components/ResponsiveIframe.js';
import DropCap from '../../../Components/DropCap.js';

const title = `${process.env.PUBLIC_URL}/Images/shrimpton1.png`;
const image1 = `${process.env.PUBLIC_URL}/Images/shrimpton2.png`;
const image2 = `${process.env.PUBLIC_URL}/Images/shrimpton3.png`;
const face = `${process.env.PUBLIC_URL}/Images/shrimptonface.png`;
const image3 = `${process.env.PUBLIC_URL}/Images/shrimpton4.png`;
const image4 = `${process.env.PUBLIC_URL}/Images/shrimpton5.png`;
const image5 = `${process.env.PUBLIC_URL}/Images/shrimpton6.png`;
const image6 = `${process.env.PUBLIC_URL}/Images/shrimptonbridal.png`;
const signature = `${process.env.PUBLIC_URL}/Images/Signature.png`;




const Card = ({ blogContent }) => {
  return (
    <div>
      <div><TextReveal text='TIME TRAVEL TUTORIALS'/></div>
      <div className="card" style={{ justifyContent: 'center', maxWidth: '100%', display: 'flex',  backgroundColor: 'white', color: 'black', fontFamily: 'GFS Didot, sans-serif' }}>
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

const Yardley65 = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);
  
  useEffect(() => {
    if (blogRef.current) {
      modifyAnchorTags(blogRef.current);
    }
  }, []);

  const headingStyle = {
    fontSize: '3.25rem',
    fontWeight: 'normal',
    fontFamily: 'Arapey, serif',
    color: '#333',
    textAlign: 'center',
    margin: '2.5rem',
  };

  const paragraphStyle = {
 justifyContent:'center',fontSize: '1.5rem', fontFamily: 'GFS Didot, serif',  maxWidth: '100%', margin: '10rem',marginTop: '2rem', marginBottom: '2rem'

  }

  const blogContent = (
      <div style={{ textAlign:'center', margin: '10rem' }}>
   <div
   style = {{
    height: '15vh'
   }}
   >
   <a href="/timetraveltutorials" style={{ justifyContent:'center',fontFamily: 'Arapey', fontSize: '1.5em', color: 'black', textDecoration: 'none' }}>
          BEAUTY // TIME TRAVEL TUTORIALS
        </a>
   </div>
     
   
        <div
style = {{
  justifyContent:'center',
  textAlign: 'left',

  lineHeight: '2.25rem',
}}
>
      <img src={title} alt="Victoria's Secret Fashion Show 2013" style={{ justifyContent:'center', width: '100%' }} />
      
      <div
      style = {{
        display: 'flex',
        justifyContent: 'center',
      }}
      >
      <SubscribeButton />

      </div>
  

     
      <DropCap text="Welcome back to the blog, fellow vintage beauty enthusiasts! We have
another Time Travel Tutorials today, and we are covering the iconic Jean
Shrimpton - dubbed “The Shrimp” & face of the 1960s.
Jean Shrimpton, an English model and actress, was not just a prominent
figure in the fashion world but also a symbol of the Swinging Sixties.
Known for her striking beauty, long legs, and big eyes, Shrimpton graced the
covers of leading fashion magazines, becoming one of the world's first
supermodels."/>    




<p style={ paragraphStyle} >
Her influence extended beyond fashion; she embodied the
era's youthful liberation, often credited with popularizing the mini skirt and
making London the fashion capital of the world. Her effortless style and
elegance made her a muse for top designers and photographers, solidifying
her status as a fashion icon whose legacy continues to inspire.
</p>

<p style={ paragraphStyle} >
While I am only 5 ft. 3, I’ve been told that I resemble “The Shrimp” … and I
can see it but only from one particular angle 🤣 . So, naturally, I couldn't
resist recreating my absolute favorite Yardley London advertisement from
1965. Plus, I managed to thrift genuine '60s makeup and the “Oh de
London!” fragrance that Jean was promoting in the ad. Here’s how to get
the iconic vintage look!
</p>

<div
      style = {{
        display: 'flex',
        justifyContent: 'center',
      }}
      >
<img style = {{maxBlockSize:'800px', width: '100%'}}src={image1} alt="Victoria's Secret Fashion Show 2013" />

</div>
      <h2 style={headingStyle}>
      The Inspiration: Oh! De London by
Yardley
      </h2>
      <div
      style = {{
        display: 'flex',
        justifyContent: 'center',
      }}
      >
      <img src={face} alt="Victoria's Secret Fashion Show 2013" style={{ textalign: 'center', maxBlockSize: '800px' ,width: 'auto' }} />

      </div>


      <p style={ paragraphStyle} >

      Let's delve into the inspiration
which begins with an homage to the
iconic Yardley London Oh! De
London Cologne advertisement from
1965. The Yardley ads of the '60s are
renowned for their vivid colours,
striking lines, and whimsical charm,
embodying the essence of the
influential pop art movement of the
era. These ads captivated audiences,
perfectly capturing the trendy mod
style.</p>

<p style={ paragraphStyle} >

Luckily, I was able to find the
fragrance, and although it has aged,
the scent retains a powdery whisper
from the past. I surrounded myself
with its aroma to immerse myself
fully in the spirit of the era, making it
the ideal muse for this makeup transformation.

</p>

<div
style = {{
  display: 'flex',
  justifyContent: 'center',
}}
>
<img src={image3} alt="Victoria's Secret Fashion Show 2013" style={{ justifyContent:'center',textalign: 'center', maxBlockSize: '800px' ,width: 'auto' }} />

</div>

<h2 style={headingStyle}>

Youthful Base & Matte Finish Foundation
</h2>

<p style={ paragraphStyle} >
I began with the application of faux bangs and extensions, setting the stage
for a transformative look. For the base makeup, I chose a radiant primer to
minimize pores and prepare my skin for the foundation—a natural velvet
matte finish foundation that evokes the era's flawless complexion, paired
with a yellow-based concealer to brighten and balance the skin tone.
</p>


<h2 style={headingStyle}>


Sculpting the Features

</h2>

<p style={ paragraphStyle} >
To achieve the iconic '60s facial contours, I added a bit of nose contouring
magic, connecting my brows to my nose with two little lines and defining
the bridge to mimic the supermodel. Skin is further complemented by a
soft, cream blush in a coral shade to the cheeks, bringing life and colour to
the look.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/524886?noHeader=true" title="Shop My Victoria's Secret Favorites" />
    <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5em', maxWidth: '100%', marginLeft: '0em' }}>
                CONTAINS: AFFILIATE LINKS
            </p>


<h2 style={headingStyle}>
Eyes That Speak Volumes
</h2>


<p style={ paragraphStyle} >
The eyes are the centrepiece of this '60s inspired look. I opted for an easy, to
achieve method using a creamy eyeliner to sketch a higher crease in a halfmoon
shape. A deeper brown eyeshadow also works perfect for this step.
Then blend with a peach shadow in the inner crease for a soft yet defined
eye contour. There are warm pops of peach and coral throughout this style,
so this creates a harmonious look.
</p>


<p style={ paragraphStyle} >
A pop of silvery white on the lid, complemented by dramatic Twiggyinspired
liner and lashes, brought the look together, capturing the essence
of the decade.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/524889?noHeader=true" title="Shop My Victoria's Secret Favorites" />
    <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5em', maxWidth: '100%', marginLeft: '0em' }}>
                CONTAINS: AFFILIATE LINKS
            </p>

<h2 style={headingStyle}>
Lips and Final Touches
</h2>


<p style={ paragraphStyle} >
For the lips, I chose a peachy gloss to keep things light and springy, outlined
with a lip liner to define the shape using Charlotte Tilbury’s Lip Cheat Lip
Liner in Supersize Me.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/524891?noHeader=true" title="Shop My Victoria's Secret Favorites" />
    <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5em', maxWidth: '100%', marginLeft: '0em' }}>
                CONTAINS: AFFILIATE LINKS
            </p>

<p style={ paragraphStyle} >
The finishing touch was a highlighter to accentuate the high points of the
face, adding a modern twist to the vintage look. Charlotte Tilbury’s Beauty
Light Wand in Peachgasm was perfect for this!
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/524892?noHeader=true" title="Shop My Victoria's Secret Favorites" />
    <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5em', maxWidth: '100%', marginLeft: '0em' }}>
                CONTAINS: AFFILIATE LINKS
            </p>

<h2 style={headingStyle}>
The Hair: An Epic Updo Challenge
  </h2>


<p style={ paragraphStyle} >
No '60s look would be complete without an iconic hairstyle. I challenged
myself to creating an ambitious updo, utilizing extensions to achieve the
volume and structure characteristic of the era. By pinning loops to craft a
voluminous bun, I emulated the vintage style, adorning it with flowers and
bows that were true to the period.
</p>


<p style={ paragraphStyle} >
The flower accessories, to my delight, resemble paper! I sourced some paper
flowers and handcrafted a few bows, embellishing them with pearls to
render the floral portrait as authentic as possible. Incidentally, I stumbled
upon a book on crafting paper flowers, which I've linked above—could this
be a new hobby for spring?
</p>

<div
style = {{
  display: 'flex',
  justifyContent: 'center',
}}
>
<img src={image4} alt="Victoria's Secret Fashion Show 2013" style={{ justifyContent:'center',textalign: 'center', maxBlockSize: '800px' ,width: 'auto' }} />

</div>

<h2 style={headingStyle}>
  
  A Vintage Collection to Adore

 </h2>


<p style={ paragraphStyle} >
As a lover of all things vintage, I couldn't resist sharing a glimpse into my
Yardley vintage collection that I hope to continue to collect. The packaging
alone transports us back in time and I’m BEGGING Yardley to do a
throwback collection. Their soaps you can still buy today are lovely though!
Creating this look was a delightful challenge, blending my love for vintage
aesthetics with the thrill of using thrifting '60s makeup products. I hope this
tutorial inspires you to explore the beauty of past decades and perhaps go
on your own vintage beauty adventure.
</p>

<div
style = {{
  display: 'flex',
  justifyContent: 'center',
}}
>
<img src={image5} alt="Victoria's Secret Fashion Show 2013" style={{ justifyContent:'center',textalign: 'center', maxBlockSize: '800px' ,width: 'auto' }} />

</div>


<p style={ paragraphStyle} >
If you have any vintage icons you'd like me to cover in future posts, don't
hesitate to leave a comment below. And remember, the beauty of vintage is
not just in the look—it's in the stories we tell and the history we keep alive.
If you enjoyed this look, you may love Sharon Tate's unique blend of
bohemian and mod aesthetics. I’ve also covered her coquette bridal style,
here.
</p>

<img src={image6} alt="Victoria's Secret Fashion Show 2013" style={{ justifyContent:'center',textalign: 'center', maxBlockSize: '800px' ,width: 'auto' }} />


<p style={ paragraphStyle} >
Thank you for reading and if you want to be featured on my site, try
out this look and please tag me as I’d love to see it and share your
rendition! I love to see you switch up your style with confidence.


</p>







<p style={ paragraphStyle} >
      (Another article linked here for more pop culture)      </p>
     
  
      <img src={signature} alt="Victoria's Secret Fashion Show 2013" style={{ width: '100%' }} />

  
    </div></div>
  );

  return (
    <div ref={blogRef}>
      <Card
        title="Jean Shrimpton: The Iconic Yardley London Look"
        description="Explore the beauty and trends behind Jean Shrimpton's iconic 1960s look."
        blogContent={blogContent}
        style={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'left'
        }}
      />
         
      <Comments website-id={websiteId} pageId={"Yardlizz-65fizz"} />
    </div>
  );
};

export default Yardley65;
