import React, {  useRef } from 'react';
import '../../ExampleTutorial.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import SubscribeButton from '../../../Components/SubscribeButton';
import TextReveal from '../../../Components/TextReveal';


const Pat1 = `${process.env.PUBLIC_URL}/Images/Articles/PatMcGrath/PatMcGrathTitle.png`;
const Pat2 = `${process.env.PUBLIC_URL}/Images/Articles/PatMcGrath/PatMcGrathDouble.png`;
const Pat3 = `${process.env.PUBLIC_URL}/Images/Articles/PatMcGrath/PatMcGrathFaceChart.png`;
const Signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
    <div>
      <TextReveal text='TRENDING' />
      <div className="card" style={{ maxWidth: '100%', display: 'flex', textAlign: 'center', backgroundColor: 'WHITE', color: 'black', fontFamily: 'GFS Didot, sans-serif' }}>
        <div className="blog-content" >{blogContent}</div>
      </div>
    </div>
  );
  
  const PatMcGrathPost = () => {
    const websiteId='10910';

    const blogRef = useRef(null);

 

    const blogContent = (
        <div className="container" style={{ lineHeight: '2.25em', maxWidth: '100%', margin: '20rem', marginTop: '0em' }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '15vh' // This makes the div take up the full height of the viewport
            }}>
                <a
                    href="/popculture"
                    style={{
                        fontFamily: 'Arapey',
                        fontSize: '1.5rem',

                        color: 'black',
                        textDecoration: 'none'
                    }}
                >
                    BEAUTY // TRENDS / POP CULTURE
                </a>
            </div>

            <img src={Pat1} alt='b1' style={{ width: '100%' }} />

            <div
                style={{ textAlign: 'center' }}
            >

            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {/* Wrap the iframe inside a div for centering */}
                <div style={{ textAlign: 'center' }}>
                    <iframe
                        src="https://assets.pinterest.com/ext/embed.html?id=1104015296142479260"
                        height='520'
                        width='236'
                        frameBorder="0"
                        scrolling="no"
                        title="Pinterest Embed"
                    ></iframe>
                         <SubscribeButton />
                </div>
            </div>

        
            <p style={{ fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', justifyContent: 'center',fontStyle: 'italic' }}>
                All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
            </p>
  
  
      <div>
  
  <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' }}>
  
  <span style={{ color: '#745B4F', float: 'left', fontSize: '5em', lineHeight: '0.9', marginRight: '0.05em', marginTop: '0.05em' }}>W</span>elcome back, beauties! 
      Let's break down the incredible (and uber-viral) Porcelain Doll makeup looks by Pat McGrath & team, created for the Maison Margiela Spring/Summer '24 runway extravaganza. In a display of sheer genius, Pat McGrath and her team devised a groundbreaking technique, meticulously layering and airbrushing several peel-off masks over the makeup for a truly haute-couture spectacle, creating live porcelain dolls to grace the runway.        </p>
      <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' }}>
  
  The TikTok beauty community was buzzing with speculation about how the iconic Pat McGrath achieved such doll-like skin perfection prior to Pat’s Masterclass over the weekend - and astoundingly, Erin Parsons—a celebrated makeup artist and historian in her own right—hit the nail on the head with her prediction of this inventive technique.      </p>
  
  <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' }}>
  
  As I watched the Margiela Masterclass this Saturday, I was glued to my screen, attentively watching and simultaneously recreating one of my favorite looks from the show as seen above. Here’s the scoop on what I learned and a step-by-step account of how I transformed myself into a hauntingly beautiful, poetic Victorian doll.    </p>
  
  
  
  
        <a href="https://www.instagram.com/jackiewyers/reel/C24-VgZOcOl/" target="_blank" rel="noopener noreferrer">
          <img src={Pat2} alt="b1" style={{ width: '100%' }} />
        </a>
      
      <p style={{ margin: '1em',textAlign:'center',fontSize:'2.5rem', fontFamily: 'GFS Didot, serif',  maxWidth:'100%' }}>
              A Painterly Look with Ultimate Glass
  Skin</p>
  
  <img src= {Pat3} alt='b1' style={{width:'100%', height: 'auto'}}></img>
  
  
  <p style={{ margin: '1em',textAlign:'center',fontSize:'2.5rem', fontFamily: 'GFS Didot, serif',  maxWidth:'100%' }}>
      
      
      Preparation and Base: </p>
  
      <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
  
  In the masterclass, it was demonstrated that PAT MCGRATH LABS | Divine Skin Rose 001 The Essence was applied to ensure hydration and longevity of makeup, along with the Skin Fetish: Sublime Perfection Primer. For models with paler complexions, a white shade from Kryolan was mixed into the Skin Fetish: Sublime Perfection Foundation and Concealer to enhance the porcelain effect.           </p>
  
  
  <ResponsiveIframe
    src="https://shopmy.us/collections/public/494232?noHeader=true"
    title="Collection name here"
  />
  
  
  
  
  
  
  
  
  
  <p style={{ textAlign: 'right',fontSize:'0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth:'100%' , marginLeft: '0em'}}>
  CONTAINS: AFFILIATE LINKS
  </p>
  
  
  <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
  
  Models with deeper complexions kept their skin tone true to themselves, allowing each model to personify a unique porcelain doll in a makeup look that was flattering on each person.           </p>
  
  <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
  
  The face wasn't powdered after foundation, as the airbrushed peel-off mask adhered better to cream-based products. However, the Skin Fetish: Sublime Perfection Blurring Under-Eye Powder was used for setting the area directly under the eyes. A new light pink powder was teased on the live, which is worth trying upon its release!       </p>
  
  <ResponsiveIframe
    src="https://shopmy.us/collections/public/494244?noHeader=true"
    title="Collection name here"
  />
  
  
  
  
  
  
  
  
  <p style={{ textAlign: 'right',fontSize:'0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth:'100%' , marginLeft: '0em'}}>
  CONTAINS: AFFILIATE LINKS
  </p>
  
  <p style={{ margin: '1em',textAlign:'center',fontSize:'2.5rem', fontFamily: 'GFS Didot, serif',  maxWidth:'100%' }}>
      Blushing Dolls:</p>
  
      <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
  
  Blush was emphasized as a key element in each look. The Divine Blush: Legendary Glow Colour Balm in Peach Lotus was a popular choice throughout the show. To intensify the cheek color and ensure long wear, the Skin Fetish: Divine Blush was applied. The blush should extend from the apple of the cheek upwards, nearing the eye, allowing the eyeshadow to seamlessly transition into the blush for an avant-garde style.     </p>
  
  <ResponsiveIframe
    src="https://shopmy.us/collections/public/494255?noHeader=true"
    title="Collection name here"
  />
  
  
  
  <p style={{ textAlign: 'right',fontSize:'0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth:'100%' , marginLeft: '0em'}}>
  CONTAINS: AFFILIATE LINKS
  </p>
  
  <p style={{ margin: '1em',textAlign:'center',fontSize:'2.5rem', fontFamily: 'GFS Didot, serif',  maxWidth:'100%' }}>
      Brows & Painterly Eyes:</p>
  
      <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
  
  The models all had bleached brows, but for my version, I did the block-out brow method by using purple Elmer's glue. See this drag technique here if you want a breakdown!           </p>
  
  <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
  
  Then, high half-moon shapes were drawn for eyebrows using Pat McGrath Permagel Ultra Glide Eye Pencil in Blk Coffee. Instead of a solid line, try delicate brow strokes.        </p>
  
  <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
  
  For the eyeshadow, dimension was emphasized on the inner and outer portion of the lid. Blck Coffee Liner was applied as a base, smudging it with a finger for a softer effect.     </p>
  
  <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
  
  The Mothership I Eyeshadow Palette in Subliminal was frequently used behind the scenes. However, I thought the Mothership VI Eyeshadow Palette in Midnight Sun's grungy green, champagne, gold, and taupe shades were quite fitting for my inspired look.         </p>
            
  
  
  
  <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
  
  By blending grungy shadows with pastels and extending upwards through the brow bone, the result was dramatic yet “poetic" as Pat described. I went with a pop of pastel blue at the center of the lid and optional, but several models had a gloss (Lust Lip Gloss - Peach Perversion) over the lid as well. For lashes, curl and applying a lengthening mascara like Fetish Eyes Mascara. I chose to build up the lashes for a more doll-like effect, with a white eyeliner in the waterline.       </p>
  
  
  <ResponsiveIframe
    src="https://shopmy.us/collections/public/494263?noHeader=true"
    title="Collection name here"
  />
  
  
  
  
  <p style={{ textAlign: 'right',fontSize:'0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth:'100%' , marginLeft: '0em'}}>
  CONTAINS: AFFILIATE LINKS
  </p>
  
  <p style={{ margin: '1em',textAlign:'center',fontSize:'2.5rem', fontFamily: 'GFS Didot, serif',  maxWidth:'100%' }}>
      Blurred Lips:             </p>
  
      <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
  
  For the lips, start with a deeper lip liner, blending through the center of the parted lips. Then, using Pat's finger-blurring technique, apply MatteTrance Lipstick in Guinevere, a crimson shade, focusing on the center to mimic a porcelain doll's lips. For those inspired by a model with fuller lips, try lining the entire lip and patting on the lipstick from there. Slightly blurring the edges was recommended to soften the overall appearance if you go this route!        </p>
  
  
  <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
  
  While each model presented a unique look, the key was to avoid harsh lines, embracing a more blurred, theatrical aesthetic.   </p>
  
  <ResponsiveIframe
    src="https://shopmy.us/collections/public/494266?noHeader=true"
    title="Collection name here"
  />
  
  <p style={{ textAlign: 'right',fontSize:'0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth:'100%' , marginLeft: '0em'}}>
  CONTAINS: AFFILIATE LINKS
  </p>
  
  <p style={{ margin: '1em',textAlign:'center',fontSize:'2.5rem', fontFamily: 'GFS Didot, serif',  maxWidth:'100%' }}>
                  Iconic Glass Skin:</p>
  
  
                  <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
  
              For the base look, it was shown that a water-based adhesive should be applied in strategic areas (underneath the chin, around the nose, from the nose bridge to under the eye) to ensure the makeup's durability for over three hours with the mask on top!   </p>
  
              <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
  
  In the livestream, a scientist-like mix was created using QUE BELLA Hydrating Pineapple Peel Off Mask, Daggett & Ramsdell Tea Tree Peel Off Mask, and Freeman Feeling Beautiful Cucumber Facial Peel-Off Mask in Refreshing Cucumber, combined with distilled water. This mix was then poured into an airbrush and applied onto the skin with layers, using a spoon to protect the eye makeup.
              </p>
              <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
  
              I recommend the Temptu airbrush since it is beginner-friendly and affordable for an airbrush. Although only the Freeman peel-off mask was available near me, it proved to be effective diluted with water.
              </p>
  
              <ResponsiveIframe
    src="https://shopmy.us/collections/public/494277?noHeader=true"
    title="Collection name here"
  />
  
  
  <p style={{ textAlign: 'right',fontSize:'0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth:'100%' , marginLeft: '0em'}}>
  CONTAINS: AFFILIATE LINKS
  </p>
  
  <p style={{ margin: '1em',textAlign:'center',fontSize:'2.5rem', fontFamily: 'GFS Didot, serif',  maxWidth:'100%' }}>
                  Tip: Patience with the Layers!</p>
  
  
                  <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
                  From trying this look out myself, I recommend avoiding rushing the layers. I wanted to make sure I could take a quality picture while I had some natural sunlight, so I only did three layers as the sun was going down. However, what really gives the porcelain doll effect is being patient and allowing each layer to dry. Use a medium heat flow dryer to let the mask dry before going in and adding as many layers as possible. </p>
  
                  <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
  
  If there is texture to the skin (like peach fuzz sticking up), a tip is to use a Beauty Blender to softly pat down onto the skin post-spray.         </p>
  
  
  <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
  
  Finally, once you have a base mask that is already dried, you can amp up the shine by using more of the mask mix painted straight on, instead of using the airbrush. Add a bit of the Skin Illustrator Ink - Clear Gloss over the lip for added shine.       </p>
  
  
  <ResponsiveIframe
    src="https://shopmy.us/collections/public/494282?noHeader=true"
    title="Collection name here"
  />
  
  
  
  <p style={{ textAlign: 'right',fontSize:'0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth:'100%' , marginLeft: '0em'}}>
  CONTAINS: AFFILIATE LINKS
  </p>
  
  
  <p style={{ margin: '1em',textAlign:'center',fontSize:'2.5rem', fontFamily: 'GFS Didot, serif',  maxWidth:'100%' }}>
                  A New Pat McGrath Labs Product Coming Soon?         </p>
  
                  <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
  
              This iconic look, three years in the making, was crafted to experiment and find an amazing glazing effect that would bring porcelain doll skin to life. Pat teased a new Pat McGrath Labs product coming soon that will provide this effect, eliminating the need to create a mix. Stay tuned!      </p>
  
              <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
  
  I hope you enjoyed this 1930s-meets-porcelain-doll otherworldly look. Comment your thoughts below, and if you want to be featured on my site, submit your recreations of this look anywhere on my socials! I’d love to see how you switch up your style and practice your artistry.  </p>
  
  
  
   <img src= {Signature} alt = 'Jackie Wyers Signature' style={{width:'100%'}}></img>
  
              </div>
      </div>
    );
  
    return (
     
        <div ref={blogRef}>
          <Card
            title="Pat McGrath's Porcelain Doll"
            description="Come on Barbie, Let’s get Glam!"
            blogContent={blogContent}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              textAlign: 'center'
            }}
          />
          <Comments website-id={websiteId} pageId={'PatMcGrathhy'} />
        </div>
     
    );
  };
  
  export default PatMcGrathPost;
  