import React, { useEffect, useRef } from 'react';
import '../../ExampleTutorial.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import TextReveal from '../../../Components/TextReveal';
import DropCap from '../../../Components/DropCap';





const Lana1 = `${process.env.PUBLIC_URL}/Images/Articles/LanaXskims/LanaTitle.png`;
const Lana2 = `${process.env.PUBLIC_URL}/Images/Articles/LanaXskims/JackieWyersLanaDelReyRecreation.JPG`;
const lanafacechart = `${process.env.PUBLIC_URL}/Images/Articles/LanaXskims/LanaaDelReyFaceChart.jpg`;
const Lana22 = `${process.env.PUBLIC_URL}/Images/Articles/LanaXskims/JackieWithKitties.jpg`;
const Lana23 = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;






const Card = ({ blogContent }) => {
    return (
   
        <div className="card" style={{   
        maxWidth: '100%' ,  display: 'flex', textAlign: 'left', backgroundColor: 'white', color: 'black', fontFamily: 'GFS Didot, sans-serif' }}>
            
            <div className="blog-content" style={{ margin: '15rem',lineHeight: '1.5' }}>{blogContent}</div>
        </div>
    );
};

const LanaBlog = () => {
    const blogRef = useRef(null);

    const websiteId = "10910"; 

    const blogContent = (
        <div className="container" style={{ 
            lineHeight: '2.5rem',
            maxWidth: '100%', 
            marginTop: '20px',
  
           }}>
          
          <div style={{ 
         
  display: 'flex',
  fontSize: '1.5em',
  justifyContent: 'center', 
  alignItems: 'center', 
  height: '10vh' // This makes the div take up the full height of the viewport
}}>
  <a
    href="/popculture"
    style={{ 
      fontFamily: 'Arapey',
      marginTop: '10px',
      color: 'black', 
      textDecoration: 'none'
    }}
  >
    BEAUTY // TRENDS // POP CULTURE
  </a>
</div>


  

            <div
            style = {{marginTop: '10px',alignText: 'left', alignContent:'center'}}
            > 

         
                    <img src={Lana1} alt='Lana Del Rey SKIMS Campaign' style={{ width: '100%' }} />
             
                    <iframe width="100%" height="515" src="https://www.youtube.com/embed/9qOTkql3ZHY?si=flnWAs09z00atuiG" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            </div>
            <div
style = {{marginTop:'1.25rem', textAlign: 'center', alignItems: 'center' }}>

    <SubscribeButton/>
        </div>


       <div>

       <p style={{ fontSize: '1rem', fontFamily: 'Arapey, sans-serif', maxWidth: '100%', textAlign:'center', fontStyle: 'italic' }}>
    All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
</p>
        </div>







        <div className="container" style={{  marginTop: '1rem',margin: '5rem', alignContent:'center', display: 'center', maxWidth: '100%' }}>

        <DropCap text = "Welcome back, Beauties! If your Twitter feed is anything like mine, it's filled with photos from Lana Del Rey's new SKIMS campaign for Valentine's Day, plus memes of little girls praying to a photo of Lana above their bed, worshipping their coquette queen. You've got to love the internet! Seriously though, as a fan of Lana Del Rey's entire discography and aesthetic, I was inspired to recreate the campaign pictures and provide a breakdown of an updated Lana Del Rey makeup look."
     

     />
         




<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '5rem', maxWidth:'100%' , marginLeft: '0em'}}>

Among the various photoshoot looks by photographer Nadia Lee Cohen, my favorite was set against a red backdrop where Lana wore the “Fits Everybody Lace” Slip Dress in Cherry Blossom Tonal from the new SKIMS collection. The dress wasn't out yet at the time I filmed, but you can check out the linked dress below! Plus, the photo set featured kittens, which I also happen to have. Am I a photographer? No, but I’ll try my best to get a vintage-styled photo, and I hope you find some Valentine’s Day inspiration! 

</p>


<div style={{
    margin: '5rem',
    justifyContent: 'center',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    maxWidth: '100%',
    maxHeight: '1500px',
    overflow: 'hidden'
}}>
    <a href="https://www.instagram.com/p/C2vF9bCOVPQ" target="_blank" rel="noopener noreferrer">
        <img src={Lana2} alt="Lana Del Rey Instagram " style={{ width: '100%', height: 'auto', display: 'block' }} />
    </a>
    <iframe
        title="Skims X Lana Del Rey Collection"
        src="https://shopmy.us/collections/public/494200?noHeader=true"
        style={{
            width: '100%',
            height: '100%', // This assumes that you want the iframe to fill the container height
            border: 'none'
        }}
        scrolling="no"
    ></iframe>
</div>




<p style={{  textAlign: 'center',fontSize:'2.25rem', fontFamily: 'GFS Didot, serif'}}>

            The Essence of Lana's SKIMS Makeup Style:</p>

            <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '5rem', maxWidth:'100%' , marginLeft: '0em'}}>

            Lana's makeup, designed by the talented LA celebrity makeup artist Etienne
Ortega, radiated a coquettish, romantic aesthetic with cherub/ cupid
inspirations. The style highlighted dewy skin, subtle peachy cheeks, and
Lana’s classic 1960s inspired soft, cut-crease eyes using shades of taupe and
brown. Some behind-the-scenes shots showed Lana's lips as mauve, but the
final images revealed a blushing ombre lip. I recreated the final images tones
using my makeup kit favourites and some exciting new finds. Ready to look
like a vintage doll?
</p>


<br></br>

<p style={{  textAlign: 'center',fontSize:'2.25rem', fontFamily: 'GFS Didot, serif'}}>

            Lana's SKIMS Campaign Makeup
Breakdown</p>
<br></br>

<div style={{ width: '100%', textAlign: 'center' }}>
  <img src={lanafacechart} alt='b1' style={{ maxWidth: '55%', height: 'auto', display: 'block', marginTop: '1.5em',marginBottom: '-3em', margin: '0 auto' }} />
</div>

<div>

</div>
<p style={{  textAlign: 'center',fontSize:'2.25rem', fontFamily: 'GFS Didot, serif'}}>

Preparation and Base: </p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '5rem', maxWidth:'100%' , marginLeft: '0em'}}>

Lana's skin appeared exceptionally hydrated and glowing, with a natural-matte finish in the campaign images. I began by applying Tocobo cream to ensure the skin was prepped for makeup. I also tried out the NUDESTIX Dewy Barrier Hydrating Stick, which promised to hydrate and provide a glazed natural skin look, doubling as a primer for makeup application. As much as I love trying out new products, you can totally start your base with only moisturizer!       </p>
<p style={{  textAlign: 'center',fontSize:'2.25rem', fontFamily: 'GFS Didot, serif'}}>
            Foundation and Concealer:</p>


            <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '5rem', maxWidth:'100%' , marginLeft: '0em'}}>
            For foundation, I chose the Armani Beauty Luminous Silk Foundation, known for its silky texture, medium coverage, and satin glow finish. I applied it with the BK Beauty 101 brush, a cruelty-free and vegan brush brand, blending over my skin for a sheer finish.      </p>

            <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '5rem', maxWidth:'100%' , marginLeft: '0em'}}>


I focused more on areas that needed coverage, keeping it lighter at the center of the face to create a more natural look. I selected Yensa's full-coverage serum concealer for its brightening effect, applying it throughout the center of the face and high points. For those seeking a budget-friendly alternative, e.l.f.’s hydrating concealer provides similar coverage.        </p>


<ResponsiveIframe
  src="https://shopmy.us/collections/public/493631?noHeader=true"
  title="Collection name here"
/>



            <p style={{ textAlign: 'RIGHT',fontSize:'0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5em', maxWidth:'100%' , marginLeft: '0em'}}>
CONTAINS: AFFILIATE LINKS
</p>


<p style={{  textAlign: 'center',fontSize:'2.25rem', fontFamily: 'GFS Didot, serif'}}>

            Contour and Blush:</p>

            <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '5rem', maxWidth:'100%' , marginLeft: '0em'}}>

I warmed my skin with a lighter bronzer to emulate Lana's sun-kissed glow.
I used Yensa's bronzer, which contains age-defying ingredients, for a natural
finish, ensuring it wouldn't crease into fine lines.          </p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '5rem', maxWidth:'100%' , marginLeft: '0em'}}>

Before applying powder, I added color with a stunning serum blush by EM Cosmetics in the shade Sunset Sky, a warm coral. Apply your favorite coral blush to the apples of the cheeks, chin, nose, and forehead for a cohesive, sweet look.       </p>


<ResponsiveIframe
  src="https://shopmy.us/collections/public/493659?noHeader=true"
  title="Collection name here"
/>


            <p style={{ textAlign: 'RIGHT',fontSize:'0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth:'100%' , marginLeft: '0em'}}>
CONTAINS: AFFILIATE LINKS
</p>
<p style={{  textAlign: 'center',fontSize:'2.25rem', fontFamily: 'GFS Didot, serif'}}>
Powder and Highlight:        </p>


    
<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '5rem', maxWidth:'100%' , marginLeft: '0em'}}>

Set everything with powder next; my go-to is Florasis powder for its light, breathable feel.

As with all my inspired looks, I love to contour similarly! I added a snatched nose contour, and for highlighting, I chose Charlotte Tilbury's Spotlight Wand. The beauty light wand's slightly metallic finish was perfect for picking up light precisely on the nose tip, which is always one of my favorite steps.</p>

<ResponsiveIframe
  src="https://shopmy.us/collections/public/493668?noHeader=true"
  title="Collection name here"
/>





            <p style={{ textAlign: 'RIGHT',fontSize:'0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth:'100%' , marginLeft: '0em'}}>
CONTAINS: AFFILIATE LINKS
</p>
<p style={{  textAlign: 'center',fontSize:'2.25rem', fontFamily: 'GFS Didot, serif'}}>

Brows and Eye Makeup:       </p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '5rem', maxWidth:'100%' , marginLeft: '0em'}}>

For brows, Lana's were softly defined. I used my Lawless pencil to fill them
in, combing them down slightly at the head to thin them out and suit the
softer makeup style.           </p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '5rem', maxWidth:'100%' , marginLeft: '0em'}}>

A creamy eye pencil from Too Faced in Killer Chocolate is a great option to carve out a soft, rounded shape in the crease for iconic Lana '60s glamour. I used Marcelle “Mulberry” from the drugstore in Canada. Both are great options depending on what you have near you!     </p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '5rem', maxWidth:'100%' , marginLeft: '0em'}}>

I then softened the edges with a small brush before brightening the lid and
inner corner with the lightest shadow. If you have really fair skin, try a KVD
white base to make the lid pop more.         </p>


<ResponsiveIframe
  src="https://shopmy.us/collections/public/493677?noHeader=true"
  title="Collection name here"
/>

            <p style={{ textAlign: 'RIGHT',fontSize:'0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth:'100%' , marginLeft: '0em'}}>
CONTAINS: AFFILIATE LINKS
</p>


<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '5rem', maxWidth:'100%' , marginLeft: '0em'}}>


A muted, dusty pink appeared to be swept across the lids to add a soft touch
of color, complementing the romantic tones of the campaign.        </p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '5rem', maxWidth:'100%' , marginLeft: '0em'}}>

For under the lower lash line, I used a rose gold shadow, smoked out near the iris to make the eye color pop. I deepened the lash line again with a deep brown pencil liner in a soft wing and defined the bottom lash line as well. I added a light liner pencil in the waterline for dolly eyes!   </p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '5rem', maxWidth:'100%' , marginLeft: '0em'}}>

            The eye look was finished with mascara and an outer corner lash in typical
Lana fashion.
            </p>


            <ResponsiveIframe
  src="https://shopmy.us/collections/public/493679?noHeader=true"
  title="Collection name here"
/>


            <p style={{ textAlign: 'RIGHT',fontSize:'0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth:'100%' , marginLeft: '0em'}}>
CONTAINS: AFFILIATE LINKS
</p>

<p style={{  textAlign: 'center',fontSize:'2.25rem', fontFamily: 'GFS Didot, serif'}}>

            Lips:</p>


            <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '5rem', maxWidth:'100%' , marginLeft: '0em'}}>

            Begin the lip look by over-lining with Makeup Forever Artist Color Pencil in dimensional dark brown. For a blushing ombre effect fading to the deep liner, I chose Amuse Dew Tint in Carrot Dew for the center of the lips.</p>

            <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '5rem', maxWidth:'100%' , marginLeft: '0em'}}>

To bring in a bit of warmth, I used Benefit Cosmetics Butterfly blush dabbed from the outer corners of the lips inward to blend the liner and tint together.        </p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '5rem', maxWidth:'100%' , marginLeft: '0em'}}>

To capture the essence of Lana's look in the SKIMS campaign, I styled my hair similarly and accessorized with a side pink ribbon. I completed the look with satin gloves and a pink dress that has become a staple in my vintage-inspired wardrobe. You can find the actual SKIMS dress here.    </p>




<p style={{  textAlign: 'center',fontSize:'2.25rem', fontFamily: 'GFS Didot, serif'}}>

            Finishing Touches            </p>


            <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '5rem', maxWidth:'100%' , marginLeft: '0em'}}>

            Lana Del Rey’s SKIMS campaign makeup is a stunning blend of coquette and '60s glamour. It's not just a tribute to the vintage era (and Sharon Tate as confirmed by hairstylist on set, Anna Capone) but also perfectly suited for those seeking a romantic look that’s both cute and sexy! Lana's nod to the past is as fresh and relevant today as ever... now let’s check out the collection!   </p>

            <p style={{  textAlign: 'center',fontSize:'2.25rem', fontFamily: 'GFS Didot, serif'}}>

My SKIMS Wish List!          </p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '5rem', maxWidth:'100%' , marginLeft: '0em'}}>

At the end of my video tutorial, I shared my top picks from the new collection, along with behind-the-scenes with my cats, Lewis and Santana. Here are my top picks from the new line if you're looking to shop. Did you enjoy this campaign shoot as much as I did? Leave a comment below!</p>

<ResponsiveIframe
  src="https://shopmy.us/collections/embed/370958?noHeader=true"
  title="Collection name here"
/>



            <p style={{ textAlign: 'RIGHT',fontSize:'0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth:'100%' , marginLeft: '0em'}}>
CONTAINS: AFFILIATE LINKS
</p>

            <div>
                <a href='https://go.shopmy.us/p-3411455'>
                    <img src={Lana22} alt="Lana22" style={{ width: '75%' }} />
                </a>
                <img src={Lana23} alt="Lana22" style={{ width: '100%' }} />

            </div>
            
</div>


</div>
    );

    return (
        <div>
           

<div
        
           

      
        >
    <div ref={blogRef}>
    <TextReveal text = 'TRENDING'/>
        <Card
            title="Margot Robbie's BARBIE Makeup & DIY ‘90s Roller skate Costume!"
            description="Come on Barbie, Let’s get Glam!"
            blogContent={blogContent}
            style={{
                
                display: 'flex',
                justifyContent: 'center',
         
                textAlign: 'left'
            }} />
           <div>
            
            </div> <Comments
            website-id={websiteId}
            pageId={"Lasa-Blog-1aasa"} // Unique identifier for this blog post
       / > 
       
       </div>
        </div>
     

        </div>

    
    );
};

export default LanaBlog;
