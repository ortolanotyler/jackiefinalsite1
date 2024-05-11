import React, { useEffect, useRef } from 'react';

import { Comments } from '@hyvor/hyvor-talk-react';
import '../../ExampleTutorial.css';
import TextReveal from '../../../Components/TextReveal';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import modifyanchortags from '../../../Utilities/modifyanchortags';



const Barbie1 = `${process.env.PUBLIC_URL}/Images/Barbie1.png`;
const Barbie2 = `${process.env.PUBLIC_URL}/Images/Barbie2.png`;
const Barbie3 = `${process.env.PUBLIC_URL}/Images/Barbie3.jpg`;
const Barbie4 = `${process.env.PUBLIC_URL}/Images/Barbie4.png`;

const Signature = `${process.env.PUBLIC_URL}/Images/Signature.png`;




const Card = ({ blogContent }) => {
    return (
        <div>
            <div><TextReveal text='POP CULTURE OBSESSED'/></div>
            <div className="card" style={{ marginTop: '0rem', maxWidth: '100%' , display: 'center', textAlign: 'left', backgroundColor: 'white', color: 'black', fontFamily: 'GFS Didot, sans-serif' }}>
                <div className="blog-content" style={{ lineHeight: '1.2' }}>{blogContent}</div>
            </div>
        </div>
    );
};


const BarbieBlog = () => {
    const websiteId = "10910";
    const blogRef = useRef(null);
  
    useEffect(() => {
      modifyanchortags(blogRef.current);
    }, []);

    const blogContent = (
        <div className="container" style={{ 
            lineHeight: '2.25em',

            maxWidth: '100%', 
        margin: '20em',
       
  
           }}>

    
    <div>

    <div style={{ 
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
  height: '10vh' // This makes the div take up the full height of the viewport
}}>
  <a
    href="/popculture"
    style={{ 
      fontFamily: 'Arapey',
      fontSize: '1.5em', 
   
      color: 'black', 
      textDecoration: 'none'
    }}
  >
    BEAUTY // POP CULTURE 
  </a>
</div>


    <img src= {Barbie1} alt = 'Barbie and Ken' style={{maxBlockSize:'800px'}} />
    <iframe width="100%" height="525" src="https://www.youtube.com/embed/JfaND9n9ZCU?si=NfJyPeNlC3qzl6tp" title="Jackie Wyers Margot Robbie - The Barbie Movie" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <div
style = {{textAlign: 'center',marginTop:'1em'}}
>
    <SubscribeButton/>
        </div>

    <div>
    <p style={{ textAlign:'center',fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%' , fontStyle: 'italic' }}>
    All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
</p>
        </div>

        <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '2em', maxWidth:'100%' , marginLeft: '0em'}}>
         
    <span style={{ color: '#745B4F' , float: 'left', fontSize: '5rem', lineHeight: '0.9', marginRight: '0.05em', marginTop: '0.01em' }}>I</span>n the dazzling world
             of the Barbie Movie, directed by Greta Gerwig and
    starring Margot Robbie as endearing Barbie and Ryan Gosling as the
    hilarious Ken, we must not forget to pay tribute to the brilliant artists who
    brought these iconic characters to life. Ivana Primorac, the creative force
    leading the movie’s hair and makeup teams, created Margot’s Barbie pink
    makeup look that appeared fresh and modern. The 'Barbie' costume
    designer Jacqueline Durran played an equally crucial role in fuelling the
    'BARBIECORE' fashion trend with the iconic Barbie looks featured in the
    film. Hello Barbiecore summer of 2022 - everywhere you looked, it was all
    about PINK!            </p>
    <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '2em', maxWidth:'100%' , marginLeft: '0em'}}>
            Among the film's many breathtaking fashion moments, the iconic pink
    gingham dress stole the hearts of fans. However, one look, in my opinion,
    outshone the rest—the unforgettable roller skate Barbie ensemble!     </p>
    
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '100%', padding: '1.5rem', gap: '1rem' }}>
        <div style={{ flex: 1 }}>
            <a href='https://www.instagram.com/p/CtfWF2oMk7p'>
                <img src={Barbie2} alt="b2" style={{ width: '100%', height: 'auto' }} />
            </a>
        </div>
        <div style={{ flex: 1 }}>
            <a href='https://www.instagram.com/p/CuXU3IqOlwa/?img_index=1'>
                <img src={Barbie3} alt="b3" style={{ width: '100%', height: 'auto' }} />
            </a>
        </div>
    </div>
    
    <p style={{ fontSize:'1.2em', fontFamily: 'GFS Didot, serif', margin: '-.5em', maxWidth:'100%' , marginBottom:'1em', marginLeft: '0.5em'}}>
            JACKIE WYERS // INSTAGRAM</p>
    
    
    
            <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '2em', maxWidth:'100%' , marginLeft: '0em'}}>
            When paparazzi pictures of the cast filming at Venice Beach surfaced
    featuring neon outfits reminiscent of '90s roller skate Barbie, I was inspired
    to create the entire costume for Halloween, complete with a makeup
    transformation that is not only faithful to the film but also entirely wearable.</p>
    
    
    <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '2em', maxWidth:'100%' , marginLeft: '0em'}}>
    In this blog post, I'll be your guide and I will show you step by step how to recreate Margot Robbie's
    exquisite pink Barbie makeup look, drawing inspiration from the movie and
    using my cherished Barbie collaboration products. Additionally, i'll show you how to DIY Barbie roller skates at home. So,
    come on, Barbies, Let’s get glam!</p>
    
    <p style={{ textAlign:'center',fontSize:'2.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
            Get The Glamorous Barbie
    Makeup Look </p>
    
    <div> <img src= {Barbie4} alt = 'Barbie Makeup Drawing' style={{marginLeft:'0em',height: 'auto', width:'100%'}}></img></div>
    
    <p style={{ textAlign:'center',fontSize:'2.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>


   Preparation</p>
    
   <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '2em', maxWidth:'100%' , marginLeft: '0em'}}>
    Before we begin, make sure your skin is hydrated. This collaboration isn’t
    available any longer, but the product itself is still on shelves! The Glamglow
    Glowstarter Mega Illuminating Moisturizer leaves a super radiant, Barbie-
    doll base. If you're looking for plump lips, the Lawless Forget the Filler
    Overnight Lip Plumping Mask is a must-try and a top recommendation I always
    reccomend for beauty lovers!           </p>
    
    
    <p style={{ textAlign:'center',fontSize:'2.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
    Foundation</p>
    
    
    <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '2em', maxWidth:'100%' , marginLeft: '0em'}}>
    We are going to opt for a lightweight foundation, perfect for the summer heat. I recommend the
    Beautiful Skin Foundation from Charlotte Tilbury or the L'Oréal True
    Match Hyaluronic Tinted Serum. Both fabulous picks depending on
    your budget.         </p>
    
    <ResponsiveIframe
  src="https://shopmy.us/collections/public/493481?noHeader=true"
  title="Collection name here"
/>



    

    
    
<p style={{ textAlign:'center',fontSize:'2.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
            Contour and Bronzer</p>
    
            <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '2em', maxWidth:'100%' , marginLeft: '0em'}}>
    I achieve Margot's signature look with some subtle contouring and
    cream bronzer, creating more structure to my face. I’d recommend
    enhancing your natural features rather than going against them though
    - especially if you are wearing this look out in daylight. Less is more!       </p>
    
    <p style={{ textAlign:'center',fontSize:'2.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
    Powder and Blush</p>
    
    <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '2em', maxWidth:'100%' , marginLeft: '0em'}}>
    Set your makeup with your favorite powder to maintain a matte yet
    natural finish. My holy-grail powder is from Florasis, a Chinese beauty
    brand. You can find them on Amazon & their powders never look too
    cakey or thick, ratherr they set and softly magnify. Margot's rosy cheeks can be
    replicated using the Pur X Malibu Barbie Blush Set or Benefit's Boxo
    Powders.            </p>
    

   


    <ResponsiveIframe
  src="https://shopmy.us/collections/public/493498?noHeader=true"
  title="Collection name here"
/>






    
<p style={{ textAlign:'center',fontSize:'2.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
    Brows</p>
    
    <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '2em', maxWidth:'100%' , marginLeft: '0em'}}>
    Keep your brows soft and natural like Margot Robbie’s Barbie. Lawless
    Shape Up Soft Fill Brow Pencil is great, but you can always go drugstore
    with Winkylux or L’Oréal Paris.             </p>
    
    
          
    
    <p style={{ textAlign:'center',fontSize:'2.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
    Eyeshadow and Eyeliner</p>
    
    <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '2em', maxWidth:'100%' , marginLeft: '0em'}}>
    For the eyes, we are going to go with subtle pops of pink, shimmer and
    definition. This is a perfect time to use shades from the Colorpop Malibu
    Barbie Collab (still my favorite collection) or you can always use some blush in
    the crease to cut down on products.       </p>
    
    <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '2em', maxWidth:'100%' , marginLeft: '0em'}}>
    If you are a fan of cute makeup with a beachy aesthetic, Flower Knows
    Beauty also has an adorable palette, which I featured in the tutorial. The seashells
    scream Malibu!
            </p>
    
            <ResponsiveIframe
  src="https://shopmy.us/collections/public/493504?noHeader=true"
  title="Collection name here"
/>

            



    
    
<p style={{ textAlign:'center',fontSize:'2.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
            Lashes</p>
    
    
    
            <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '2em', maxWidth:'100%' , marginLeft: '0em'}}>
    Time for a Barbie collab product I use daily. The Revlon X Barbie Lash
    curler! After a curl, swipe a coat of your favorite mascara.        </p>
    
    
    <p style={{ textAlign:'center',fontSize:'2.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
            Highlighter</p>
    
            <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '2em', maxWidth:'100%' , marginLeft: '0em'}}>
    Add shine to your nose, cheeks, and chin for that Barbie skin glow. The
    Charlotte Tilbury Beauty Light Wand in Spotlight remains a favorite, but
    now many drugstore brands have recreated the iconic product. Flower
    Beauty also has a fabulous wand in a various shades.          </p>
    
    
    <ResponsiveIframe
  src="https://shopmy.us/collections/public/493536?noHeader=true"
  title="Collection name here"
/>





    <div>
    <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '2em', maxWidth:'100%' , marginLeft: '0em'}}>
            Voila! You are your own version of Mattel's iconic doll. Feel free to tone down
    or amp up the style to make it your own.
            </p>
    
    
            <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '2em', maxWidth:'100%' , marginLeft: '0em'}}>
    Want to be featured on my site? Submit your recreation or version of this
    look here. I’d love to see you switch up your style with confidence! </p>
    </div>


    
    
    <div> <img src= {Signature} alt = 'Final glamorous Barbie makeup look' style={{width:'100%'}}></img></div>
    
       </div>
    
       
       </div>
    );

    return (
        <div ref={blogRef}>

            <Card
                title="Margot Robbie's BARBIE Makeup & DIY ‘90s Roller skate Costume!"
                description="Come on Barbie, Let’s get Glam!"
                blogContent={blogContent}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    textAlign: 'left'
                }}
            />
 <Comments
            website-id={websiteId}
            page-id={'barbie'}
        />          
        </div>
    );
};

export default BarbieBlog;
