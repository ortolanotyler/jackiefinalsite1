import React, { useEffect, useRef } from 'react';
import '../../ExampleTutorial.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import SubscribeButton from '../../../Components/SubscribeButton';
import DropCap from '../../../Components/DropCap';


const Sharon1 = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateIconic/IconicTitle.png`;
const Sharon2 = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateIconic/JackieAsSharon.jpg`;
const Sharon3 = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateIconic/SharonTateFaceChart.png`;
const eyes = `${process.env.PUBLIC_URL}/Images/iconiceyes.png`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;
const Recollection = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateIconic/SharonRecollection.jpg`;


const Card = ({ blogContent }) => {
    return (
        <div className="card" style={{ maxWidth: '100%', display: 'flex', textAlign: 'left', backgroundColor: 'white', color: 'black', fontFamily: 'GFS Didot, sans-serif' }}>
            <div className="blog-content" style={{ lineHeight: '1.2' }}>{blogContent}</div>
        </div>
    );
};

const SharonIconicPost = () => {
    const blogRef = useRef(null);

    useEffect(() => {
        // Placeholder for any DOM manipulations
    }, []);

    const headingStyle = {
        textAlign: 'center',
        fontSize: '3rem',
        fontWeight: 'normal',
        fontFamily: 'Arapey, sans-serif',
        color: '#333',
        margin: '2rem',
        marginTop: '2rem',
        marginBottom: '2rem',
        lineHeight: '1.5rem',
      };
    
      const paragraphStyle = {
        padding: '1rem',fontSize: '1.5rem', fontFamily: 'GFS Didot, serif',  margin: '10rem', maxWidth: '100%', marginTop: '0.75rem', marginBottom: '0.75rem', 
    
      }
    
    const blogContent = (
        <div className="container" style={{ lineHeight: '2.5em', maxWidth: '100%', margin: '20rem', padding: '5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '12vh' }}>
                <a href="/timetraveltutorials" style={{ fontFamily: 'Arapey', fontSize: '1.5em', color: 'black', textDecoration: 'none' }}>
                    BEAUTY // TIME TRAVEL TUTORIALS
                </a>
            </div>
            <img src={Sharon1} alt='Sharon Tate - Time Travel Tutorials' style={{ width: '100%' }} />
            <ResponsiveIframe src="https://www.youtube.com/embed/t1jJtpsxes4?si=sHOkPYVUOvEbXk2m" title="Sharon Tate YouTube video player" />
            
            <div
            style = {{ marginTop: '1rem',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            
            <SubscribeButton />
            </div>
        

               <DropCap text = "Welcome back to another installment of Time Travel Tutorials, this time featuring the iconic '60s figure, Sharon Tate. A promising actress and model of the 1960s, Tate was celebrated for her roles in films like 'Valley of the Dolls', captivating audiences with her talent and ethereal beauty. Her tragic and untimely death solidified her status as an era icon, profoundly influencing pop culture, fashion, and beauty standards of the 1960s. Let's celebrate the beautiful Sharon Tate by emulating her signature style, which remains influential today" />
               <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
  <img src={Sharon2} alt="Sharon Tate - Makeup" style={{ width: '40%', float: 'right', margin: '1rem' }} />
  <p style={paragraphStyle}>
    Her makeup always stood out to me, offering a perfect blend of '60s mod with a touch of bohemian flair. Unlike the more posh looks of the time embodied by "The Face of the '60s" model Jean Shrimpton, Sharon's style provides a sun-kissed, bold-eyed look that leans more towards a hippie/'70s inspiration, showcasing her personal style was ahead of its time. If you're as captivated by this makeup era and Sharon Tate as I am, I hope you'll enjoy this beauty breakdown. While I use modern products to achieve the look, at the end of this article, we'll also explore some products still available today that were among Sharon Tate's favorites.
  </p>
</div>


            <h2 style={headingStyle}>
                The Essence of Sharon Tate’s Makeup</h2>


            <img src={Sharon3} alt="Sharon Tate - Makeup" style={{ width: '100%', float: 'right', margin: '1rem' }} />
            
                        
            
<p style={paragraphStyle}>
                    The essence of Sharon Tate's makeup embodies a timeless beauty that, while uniquely hers, can be celebrated through inspired emulation. Her makeup is characterized by bronzed, natural skin and captivating, deep-set eyes accentuated with a boldly drawn cut crease. Her full, long lashes perfectly complemented her enchanting hazel eyes. The look is completed with subtly lined lips and a peachy nude lipstick, giving off effortless glamour.
            </p>

            <p style={paragraphStyle}>
            The photoshoot that serves as my inspiration, taken by Orlando Suero in
1965, captures Sharon Tate's quintessential bohemian style like no other,
showcasing the very essence of her iconic beauty. 
</p>
            


            <h2 style={headingStyle}>The Cali-Girl Glow</h2>

            <p style={paragraphStyle}>
                To channel that quintessential Cali girl vibe, a good starting point is a self-tanner. My go-to self-tanning line for the body is Coco and Eve, but for the face, I'm particularly fond of the Loving Tan Deluxe Face Tan Tinted Self-Tanning Cream. It leaves a gorgeous sun-kissed             tint to the skin even before makeup application. Sharon Tate's skin looked very natural, so for my recreation, I chose Charlotte Tilbury's light foundation, sheered out to achieve that barely-there look.
            </p>

            <p style={paragraphStyle}>
            In the tutorial, I blended two different foundations, primarily to attain the
perfect shade match. However, for simplicity and effectiveness, I highly
recommend sticking with the Charlotte Tilbury foundation for that flawless,
natural finish.          
</p>
<ResponsiveIframe
                src="https://shopmy.us/collections/public/494394?noHeader=true"
                title="Sharon Tate Inspired Makeup Products"
            />
            <p style={{ textAlign: 
'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth: '100%' }}>
CONTAINS: AFFILIATE LINKS
</p>








            <h2 style={headingStyle}>Sharon’s Modelesque Bone Structure</h2>
            <p style={paragraphStyle}>
                To emulate Sharon Tate's stunning bone structure, including her high cheekbones and defined chin, sculpting with a lighter concealer is key. If your skin tone is similar to hers, the Too Faced Born This Way Concealer in Swan is an excellent option. However, if your skin tone differs, opt for a concealer that's two shades lighter than your foundation. After enhancing the chin, jawline, area around the nose, and under the eyes with brightness, lightly set these areas with powder before applying a powder bronzer to finalize the sculpted look. This technique ensures a natural yet defined finish, mirroring Sharon Tate's iconic beauty.
            </p>

            <h2 style={headingStyle}>Bronzed & Blushy</h2>
            <p style={paragraphStyle}>
                For a natural bronze and blushed appearance, sticking with powder products and matte formulas is the best. The Too Faced Milk Chocolate Bronzer is an excellent choice for this purpose. Apply it beneath the cheekbones, blending slightly onto the cheeks, across the nose, and onto the forehead to achieve a soft, sun-kissed look. To enhance the effect with a touch of sunburnt realism and add depth to the cheeks, the Rimmel London Maxi Blush in Wildcard is perfect. This product helps to mimic that slightly flushed, vibrant look, evoking a natural radiance and depth that complements the bronzed base beautifully.
            </p>

            <ResponsiveIframe
            src="https://shopmy.us/collections/public/494399?noHeader=true"
            title="Bronzing and Blushing Products"
        />

        <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth: '100%' }}>
            CONTAINS: AFFILIATE LINKS
        </p>












            <h2 style={headingStyle}>Sharon’s Distinct Brows</h2>
            <p style={paragraphStyle}>
                When it comes to brows, while my goal is to recreate iconic looks as closely as possible, my brows are much fuller than Sharon Tate’s, so I've had to adapt accordingly. To emulate Sharon's brow style, I recommend brushing up the front (head) of the brows and setting them in place with a brow gel. Aim to maintain the arch and tail of the brows rounded and relatively thin, if possible. Fortunately, having bangs helped me camouflage the differences between our brow shapes, but it's essential to remember that these tutorials are about capturing the essence of the icon's style rather than becoming their exact duplicate. After all, our uniqueness is what truly defines us!
            </p>














            <h2 style={headingStyle}>Sharon’s Take on ‘60s Cut Crease Eyes</h2>
            <p style={paragraphStyle}>
                Moving on to the eyes, let's craft a bold, graphic-style cut crease using a gel brown liner to capture Sharon Tate's signature deep-set eyes, a hallmark of her beauty. The shape we're aiming for diverges slightly from the perfect half-moon typically associated with cut creases. Begin by drawing a straight, slightly diagonal line from the inner corner of the eye upwards to just underneath the brow's head. From this point, curve the line to follow just above your natural crease, creating a distinct and dramatic effect, tailing downwards. So much of today’s beauty standards feature an upturned cat eye, but sleepy-doe eyes have such a beautiful charm as well!
            </p>


            <img src={eyes} alt="Sharon Tate's Iconic Eyes" style={{ width: '30%', float: 'right', margin: '1rem' }} />

            <p style={paragraphStyle}>

            To further enhance the cut crease and emulate the depth and dimension of
Sharon's eyes, apply a dark purple liner to the inner portion of the crease.
This adds a layer of complexity and richness to the look.
</p>
<p style={paragraphStyle}>

Keep the eyelid and brow bone bright to maintain a fresh, open appearance.
Finally, incorporate some deeper matte eyeshadow as a liner along the lash
line for added intensity and definition, completing the homage to Sharon
Tate's iconic eye makeup.

</p>





<ResponsiveIframe
            src="https://shopmy.us/collections/public/494403?noHeader=true"
            title="Sharon Tate Inspired Brow Products"
            />










            <h2 style={headingStyle}>A Pop of Shimmer</h2>
            <p style={paragraphStyle}>
                It was revealed in auction Sharon used a brown liner from Maybelline and a White Revlon Eyeliner for the waterline, though in the inspiration photos the waterline appeared more natural. I noticed, however, that underneath the upper and lower lashes, there was a pop of light shimmer. I used a shimmery Charlotte Tilbury pencil liner to catch the light.
            </p>

            <h2 style={headingStyle}>Dainty, Twiggy Lashes</h2>
            <p style={paragraphStyle}>
                Let’s create dainty Twiggy-inspired lashes - and lots of them! Add an extra flick on the outer corners for that mesmerizing '60s flair. Sharon’s take on Twiggy’s signature drawn-on bottom lash was more subtle, blending well into her natural bottom lashes. For this look, I opted for the Kiss Looks So Natural lashes in Sultry, which resemble Sharon’s delicate lashes perfectly.
            </p>

            <p style={paragraphStyle}>
            For this look, I opted for the Kiss Looks So Natural lashes in Sultry, which
offer the perfect balance of natural beauty and dramatic enhancement. To
elevate these lashes further, we'll layer them with plenty of mascara. The Too
Faced Better Than Sex mascara is my go-to for thickening up these wispy
falsies, adding an extra dose of drama and volume
            </p>





            <ResponsiveIframe
            src="https://shopmy.us/collections/public/494403?noHeader=true"
            title="Sharon Tate Inspired Brow Products"
            />






            <h2 style={headingStyle}>
                
                Sweet & Soft Peach Pout 
            
            </h2>

            <p style={paragraphStyle}>
To finish the look, I've chosen a nude lip liner (Charlotte Tilbury Iconic
Nude) and added a pop of nude-peach with Too Faced Sweet Peach Lip
Gloss in Peach.
            </p>




            <ResponsiveIframe
            src="https://shopmy.us/collections/public/494403?noHeader=true"
            title="Twiggy-inspired Lashes Products"         />




            <h2 style={headingStyle}>
What Products did Sharon really use? 
</h2>

<p style={paragraphStyle}>
Sharon Tate's beauty regime was elegantly simple, incorporating a Max
Factor Brown liner for both her brows and lips. Surprisingly, one of her goto products was Vaseline! Many drugstore brands that are still available
today, such as the Maybelline Brown Eyeliner Pencil and Revlon White
Eyeliner, were used by Tate to highlight her enchanting eyes and were
showcased at auction. My personal favorite
from the ‘60s, Yardley, offered the most
exquisite pearly lipsticks, which were also a
part of Sharon’s makeup collection
</p>

<p style={paragraphStyle}>
For skincare, Sharon placed her trust in Erno
Laszlo products, alongside a popular ‘60s
beauty facial steamer, and the luxurious Jovan
Mink & Pearls bath oil beads. For a closer
examination of her beauty collection, explore
the auction where her belongings were sold.
</p>


<p style={paragraphStyle}>
In terms of perfumes, Sharon Tate had a fondness for fragrances, especially
Chanel No. 5 and Guerlain's Jicky. These classic scents are celebrated for
their enduring allure. For those interested, a review of Jicky fragrance is
available here.
</p>

<h2 style={headingStyle}>
Sharon Tate's Recollection Book
</h2>

<p style={paragraphStyle}>

In the tutorial, I hosted a giveaway of an
amazing Sharon Tate coffee table book,
“Sharon Tate Recollection” by her sister,
Deborah Tate that celebrates her style. The
winner has received their prize, but you can
buy the book on Amazon here - a must for
Sharon fans!
</p>
<h2 style={headingStyle}>
Sharon's Bohemian Style 

</h2>

<div style={{ textAlign: 'center' }}>
                <img src={Recollection} alt='Signature' style={{ width: 'auto', maxBlockSize: "600px"}} />
            </div>

<p style={paragraphStyle}>

Beyond cosmetics, Sharon’s style featured
mini skirts, mini dresses, floral prints, and
big accessories. She kept footwear simple,
loving classic ballet pink and black slippers,
though she often expressed a desire to be
barefoot. Her most frequent accessories
were big hoops, emphasizing her bohemian
and effortlessly chic aesthetic.
</p>

<h2 style={headingStyle}>
Shop Sharon Inspired Style
</h2>

<ResponsiveIframe
            src="https://shopmy.us/collections/embed/425381?noHeader=true"
            title="Twiggy-inspired Lashes Products"  
            height='100%'       />






            <p style={paragraphStyle}>
                Remember, Sharon Tate was a beauty ahead of her time, seamlessly blending elements of '60s mod with bohemian chic. Her effortless yet mesmerizing makeup style continues to captivate and inspire, proving that true beauty transcends generations.
            </p>


            <div style={{ textAlign: 'center' }}>
                <img src={signature} alt='Signature' style={{ width: '100%', height: 'auto' }} />
            </div>

            <div style={{ margin: '2em' }}>
                <Comments website-id="10910" page-id="sharon-iconic-post" />
            </div>
        </div>
    );

    return (
        <div ref={blogRef}>
            <Card blogContent={blogContent} />
        </div>
    );
};

export default SharonIconicPost;


