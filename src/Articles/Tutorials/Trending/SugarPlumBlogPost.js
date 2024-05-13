import React, { useRef } from 'react';
import '../../ExampleTutorial.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import SubscribeButton from '../../../Components/SubscribeButton';
import DropCap from '../../../Components/DropCap';


const TopHero = `${process.env.PUBLIC_URL}/Images/Articles/SugarPlumFairy/SugarPlumFairyTitle.png`;
const Sugar2 = `${process.env.PUBLIC_URL}/Images/Articles/SugarPlumFairy/SugarPlumDouble.png`;
const FaceChart = `${process.env.PUBLIC_URL}/Images/Articles/SugarPlumFairy/SugarFace.jpg`;
const Signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => {
    return (
        <div className="card" style={{ maxWidth: '100%', display: 'flex', textAlign: 'left', backgroundColor: 'white', color: 'black', fontFamily: 'GFS Didot, sans-serif' }}>
            <div className="blog-content" style={{ lineHeight: '1.3' }}>{blogContent}</div>
        </div>
    );
};

const SugarPlumBlogPost = () => {

    const headingStyle = {
        textAlign: 'center',
        fontSize: '2.5rem',
        fontWeight: 'normal',
        fontFamily: 'Arapey, sans-serif',
        color: '#333',
        margin: '2.5rem',
        marginTop: '2.5rem',
        marginBottom: '2.5rem',
        lineHeight: '1.5rem',
      };
    
      const paragraphStyle = {
        padding: '1rem',fontSize: '1.5rem', fontFamily: 'GFS Didot, serif',  margin: '10rem', maxWidth: '100%', marginTop: '0.75rem', marginBottom: '0.75rem', 
    
      }



    const blogRef = useRef(null);

    const websiteId = "10910";

    const blogContent = (
        <div className="container" style={{ lineHeight: '2.5em', maxWidth: '100%', margin: '15rem', padding: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '12vh' }}>
                <a href="/timetraveltutorials" style={{ fontFamily: 'Arapey', fontSize: '1.5em', color: 'black', textDecoration: 'none' }}>
                    BEAUTY // TRENDS
                </a>
            </div>
            <img src={TopHero} alt='Sugar Plum Fairy Trend' style={{ width: '100%' }} />

            <ResponsiveIframe src="https://www.youtube.com/embed/Vy6e7k5uur8?si=-3GFPhHdf3DLAOyu" title="YouTube video player" />

            <div style={{ textAlign: 'center' }}><SubscribeButton /></div>

            <p style={{ fontSize: '1rem', fontFamily: 'Arapey, sans-serif', textAlign: 'center', fontStyle: 'italic' }}>
                All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
            </p>


            <div
            style = {{ margin: '5rem'}}
            >
            <DropCap text = "Welcome Back Beauties! Today, let's explore the enchanting Sugar Plum Fairy makeup trend, inspired by the classic Nutcracker ballet. This look is a dream for those who love a touch of whimsy in their style!"    />

            </div>

            <p style={ paragraphStyle} >
                The trend originates from Hailey Bieber's TikTok tutorial, where she flaunts a natural, skin-like base using minimal concealer and a sheer bronzer for contouring. The cheeks are flushed with cream and powder blush creating a delightful rosy glow, complemented by faux freckles and highlighter. For the eyes, she opts for a glossy, shimmer-topped lid, neatly brushed-up brows, and a swipe of mascara. The look is completed with an overdrawn brown lip line, topped off with a sparkling pink gloss - her new Rhode Peptide Lip Treatment in ‘Jelly Bean’.
            </p>

            <img src={Sugar2} alt="Detailed Sugar Plum Fairy Makeup" style={{ width: '100%' }} />


            <p style={ paragraphStyle} >
                Inspired by Hailey's neutral yet festive approach, I've added my own twist in my tutorial. I've spiced it up with a dazzling Chrome eyeshadow and gems, infusing extra glamour and glitter for a unique                 spin on the trend. Excited to share my take on the Sugar Plum Fairy look with you and I can't wait to walk you through the steps!
            </p>



            <h2 style={headingStyle}>
                
                Get The Whimsical Sugar Plum Look
                
            </h2>


            <img src={FaceChart} alt="Detailed Sugar Plum Fairy Makeup" style={{ width: '100%' }} />





            <h2 style={headingStyle}>
                Skin Preparation & Foundation</h2>
                <p style={ paragraphStyle} >
                Of course we have to start with skin care, especially in the cold winter
months. I recommend the Tocobo Multi-Ceramide Cream for its non-sticky,
super hydrating finish. It's a great alternative to Charlotte Tilbury's Magic
Cream.             </p>
<p style={ paragraphStyle} >
For foundation, aim for a natural look. I mix a bit of serum drops (Armani's
Smart Moisture Serum) with the Armani Luminous Silk Perfect Glow
Flawless Foundation to create a sheer base that still showcases the skin's
natural beauty.    </p>
         
            
      

           
           
            
     

            <ResponsiveIframe src="https://shopmy.us/collections/public/493631?noHeader=true" title="Skin Care and Foundation Products" />
      
            

        
            <h2 style={headingStyle}>

                Why I Skip Underpainting</h2>
                <p style={ paragraphStyle} >

Underpainting has been a popular makeup technique this year,
showcased on celebs like Kendall Jenner and Hailey Bieber. I tend to
skip concealer and contour before foundation as I always have some
acne I like to cover before sculpting the canvas!

</p>

<p style={ paragraphStyle} >

That being said, I do enjoy adding a bit of foundation to my brush and
going over brightening concealer to make sure it isn’t too bright and
blends seamlessly into foundation. This is a good trick to try that gives a
similar soft effect like underpainting.

</p>


            <h2 style={headingStyle}>
                Adding Warmth and Structure: Bronzers and Brows</h2>

                <p style={ paragraphStyle} >
                I adore Rose Inc Solar Infusion Moisturizing Cream Bronzer for their
creamy texture - they add just the right amount of structure to the face
when contouring with a light hand.
            </p>

            <p style={ paragraphStyle} >

As for brows, the Unibrow by Winky Lux is my go-to product,
complemented with e.l.f. Brow Lift Gel to keep them in place. Keep
them brushed up inspired by Hailey!
            </p>



       
            <ResponsiveIframe src="https://shopmy.us/collections/public/493640?noHeader=true" title="Bronzers and Brow Products" />

            <h2 style={headingStyle}>
                                Super Blushy: Cream and Liquid Blushes</h2>

                                <p style={ paragraphStyle} >
                                Emulating Haley Bieber's love for cream and liquid products, I opt for em
Cosmetics serum blush in Little Lilac. The magical packaging is so fun to
use, and the serum blends beautifully into the skin. Pink & rose tones are
perfect for winter for an elevated cold girl look, but you can also play with
lavender or purple if that feels more sugar plum fairy to you! Apply a
deeper powder blush under the cheekbone to enhance the look            </p>

            <h2 style={headingStyle}>
                The Magic of Eyes: Pink Shimmer & Chrome Flakes</h2>

                <p style={ paragraphStyle} >
For the eyes, start with an eye tint (like Armani's in shade 44) and add
depth with a matte muted pink shadows to the crease. I used Urban
Decay's 24/7 Glide-On Eye Pencil in Rockstar for lining, a deep purple
shade.             </p>


<p style={ paragraphStyle} >

The star of the show is the Danessa Myricks Sweet Tooth Infinite Chrome
Flakes, a multi-chrome gel that adds an ethereal shimmer to the look. The
shine is UNREAL!

</p>

            <ResponsiveIframe src="https://shopmy.us/collections/public/493646?noHeader=true" title="Eye Makeup Products" />

            <h2 style={headingStyle}>
                Final Touches: Lashes, Lips, and Setting the Look</h2>
                <p style={ paragraphStyle} >
                Finish the eye makeup with mascara and lashes that complement the whimsical vibe. For an extra fairy-like touch, add gems from Half Magic in the inner corner of the eye, and decorate around the eyes — they're super fun and perfect for a New Year's Eve celebration. Rare Beauty's Enchant Highlighter complements all the pink and silver tones beautifully.
            </p>

            <p style={ paragraphStyle} >
                For the lips, overline slightly with a liner (I use Makeup Forever's Universal Earth) and add a gloss for a blended, plumy look. To achieve Hailey’s exact lip combo, use MAC’s Lip Liner in ‘Cork’ and top off with Rhode Peptide Lip Treatment in ‘Jelly Bean’. This lip combo is beautiful, and the gloss is super nourishing.
            </p>

            <p style={ paragraphStyle} >
                Finally, set the makeup with Tatcha's Luminous Dewy Skin Mist. It melds all the products together, leaving a soft, glowing finish. You're now ready to dance the night away as the Sugar Plum Fairy!
            </p>

            <p style={ paragraphStyle} >
                What's Your Take on This Trend? Have you tried the Sugar Plum Fairy trend? What variations have you experimented with? Share your thoughts and favorite products in the comments below!
            </p>

            <div style={{ textAlign: 'center' }}>
                <img src={Signature} alt="Signature" style={{ width: '100%', height: 'auto' }} />
            </div>
        </div>
    );

    return (
        <div>
            <div ref={blogRef}>
                <Card blogContent={blogContent} />
            </div>
            <div>
                <Comments website-id={websiteId} page-id="SugarPlumBlogPost" />
            </div>
        </div>
    );
};

export default SugarPlumBlogPost;


