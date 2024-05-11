import React, { useEffect, useRef } from 'react';
import '../ExampleTutorial.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import SubscribeButton from '../../../Components/SubscribeButton';


const Sharon1 = `${process.env.PUBLIC_URL}/Images/SharonIconic1.png`;
const Sharon2 = `${process.env.PUBLIC_URL}/Images/SharonIconic2.png`;
const Sharon3 = `${process.env.PUBLIC_URL}/Images/SharonIconic3.png`;
const eyes = `${process.env.PUBLIC_URL}/Images/iconiceyes.png`;
const signature = `${process.env.PUBLIC_URL}/Images/signature.png`;

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
        fontSize: '3rem',
        fontWeight: 'normal',
        fontFamily: 'Arapey, serif',
        color: '#333',
        marginBottom: '0.5em'
    };

    const blogContent = (
        <div className="container" style={{ lineHeight: '2.5em', maxWidth: '100%', margin: '20rem', padding: '5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '12vh' }}>
                <a href="/timetraveltutorials" style={{ fontFamily: 'Arapey', fontSize: '1.5em', color: 'black', textDecoration: 'none' }}>
                    BEAUTY // VINTAGE VIBES // TIME TRAVEL TUTORIALS
                </a>
            </div>
            <img src={Sharon1} alt='Sharon Tate - Time Travel Tutorials' style={{ width: '100%' }} />
            <ResponsiveIframe src="https://www.youtube.com/embed/t1jJtpsxes4?si=sHOkPYVUOvEbXk2m" title="Sharon Tate YouTube video player" />
            <SubscribeButton />

            <h2 style={headingStyle}>Welcome to Time Travel Tutorials</h2>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem' }}>
                Welcome back to another installment of Time Travel Tutorials, this time featuring the iconic '60s figure, Sharon Tate. A promising actress and model of the 1960s, Tate was celebrated for her roles in films like "Valley of the Dolls," captivating audiences with her talent and ethereal beauty. Her tragic and untimely death solidified her status as an era icon, profoundly influencing pop culture, fashion, and beauty standards of the 1960s. Let's celebrate the beautiful Sharon Tate by emulating her signature style, which remains influential today.
            </p>

            <h2 style={headingStyle}>The Essence of Sharon Tate’s Makeup</h2>
            <img src={Sharon3} alt="Sharon Tate - Makeup" style={{ width: '100%', float: 'right', margin: '1rem' }} />
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem' }}>
                The essence of Sharon Tate's makeup embodies a timeless beauty that, while uniquely hers, can be celebrated through inspired emulation. Her makeup is characterized by bronzed, natural skin and captivating, deep-set eyes accentuated with a boldly drawn cut crease. Her full, long lashes perfectly complemented her enchanting hazel eyes. The look is completed with subtly lined lips and a peachy nude lipstick, giving off effortless glamour.
            </p>

            <h2 style={headingStyle}>The Cali-Girl Glow</h2>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem' }}>
                To channel that quintessential Cali girl vibe, a good starting point is a self-tanner. My go-to self-tanning line for the body is Coco and Eve, but for the face, I'm particularly fond of the Loving Tan Deluxe Face Tan Tinted Self-Tanning Cream. It leaves a gorgeous sun-kissed             tint to the skin even before makeup application. Sharon Tate's skin looked very natural, so for my recreation, I chose Charlotte Tilbury's light foundation, sheered out to achieve that barely-there look.
            </p>

            <h2 style={headingStyle}>Sharon’s Modelesque Bone Structure</h2>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem' }}>
                To emulate Sharon Tate's stunning bone structure, including her high cheekbones and defined chin, sculpting with a lighter concealer is key. If your skin tone is similar to hers, the Too Faced Born This Way Concealer in Swan is an excellent option. However, if your skin tone differs, opt for a concealer that's two shades lighter than your foundation. After enhancing the chin, jawline, area around the nose, and under the eyes with brightness, lightly set these areas with powder before applying a powder bronzer to finalize the sculpted look. This technique ensures a natural yet defined finish, mirroring Sharon Tate's iconic beauty.
            </p>

            <h2 style={headingStyle}>Bronzed & Blushy</h2>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem' }}>
                For a natural bronze and blushed appearance, sticking with powder products and matte formulas is the best. The Too Faced Milk Chocolate Bronzer is an excellent choice for this purpose. Apply it beneath the cheekbones, blending slightly onto the cheeks, across the nose, and onto the forehead to achieve a soft, sun-kissed look. To enhance the effect with a touch of sunburnt realism and add depth to the cheeks, the Rimmel London Maxi Blush in Wildcard is perfect. This product helps to mimic that slightly flushed, vibrant look, evoking a natural radiance and depth that complements the bronzed base beautifully.
            </p>

            <h2 style={headingStyle}>Sharon’s Distinct Brows</h2>
            <img src={eyes} alt="Sharon Tate's Iconic Eyes" style={{ width: '30%', float: 'right', margin: '1rem' }} />
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem' }}>
                When it comes to brows, while my goal is to recreate iconic looks as closely as possible, my brows are much fuller than Sharon Tate’s, so I've had to adapt accordingly. To emulate Sharon's brow style, I recommend brushing up the front (head) of the brows and setting them in place with a brow gel. Aim to maintain the arch and tail of the brows rounded and relatively thin, if possible. Fortunately, having bangs helped me camouflage the differences between our brow shapes, but it's essential to remember that these tutorials are about capturing the essence of the icon's style rather than becoming their exact duplicate. After all, our uniqueness is what truly defines us!
            </p>

            <h2 style={headingStyle}>Sharon’s Take on ‘60s Cut Crease Eyes</h2>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem' }}>
                Moving on to the eyes, let's craft a bold, graphic-style cut crease using a gel brown liner to capture Sharon Tate's signature deep-set eyes, a hallmark of her beauty. The shape we're aiming for diverges slightly from the perfect half-moon typically associated with cut creases. Begin by drawing a straight, slightly diagonal line from the inner corner of the eye upwards to just underneath the brow's head. From this point, curve the line to follow just above your natural crease, creating a distinct and dramatic effect, tailing downwards. So much of today’s beauty standards feature an upturned cat eye, but sleepy-doe eyes have such a beautiful charm as well!
            </p>

            <h2 style={headingStyle}>A Pop of Shimmer</h2>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem' }}>
                It was revealed in auction Sharon used a brown liner from Maybelline and a White Revlon Eyeliner for the waterline, though in the inspiration photos the waterline appeared more natural. I noticed, however, that underneath the upper and lower lashes, there was a pop of light shimmer. I used a shimmery Charlotte Tilbury pencil liner to catch the light.
            </p>

            <h2 style={headingStyle}>Dainty, Twiggy Lashes</h2>
            <p style={{ fontSize: '1.5rem',                fontFamily: 'GFS Didot, serif', margin: '1rem' }}>
                Let’s create dainty Twiggy-inspired lashes - and lots of them! Add an extra flick on the outer corners for that mesmerizing '60s flair. Sharon’s take on Twiggy’s signature drawn-on bottom lash was more subtle, blending well into her natural bottom lashes. For this look, I opted for the Kiss Looks So Natural lashes in Sultry, which resemble Sharon’s delicate lashes perfectly.
            </p>

            <h2 style={headingStyle}>The Pout: Subtly Defined</h2>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem' }}>
                Finish off the look with a subtle, defined lip. For the photoshoot, Sharon’s lips were matte, but here, I wanted a slightly glossier finish. I chose the Charlotte Tilbury Lip Cheat in “Iconic Nude” to line my lips and filled them in with the MAC lipstick in “Myth.” Sharon was also said to use lip balm, and in some photos, her lips looked very natural. I decided to include this Burt’s Bees Lip Balm to keep the look hydrated.
            </p>

            <div style={{ textAlign: 'center' }}>
                <img src={signature} alt='Signature' style={{ width: '100%', height: 'auto' }} />
            </div>

            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem' }}>
                Remember, Sharon Tate was a beauty ahead of her time, seamlessly blending elements of '60s mod with bohemian chic. Her effortless yet mesmerizing makeup style continues to captivate and inspire, proving that true beauty transcends generations.
            </p>

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


