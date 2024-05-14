import React, { useEffect, useRef } from 'react';

import '../../ExampleTutorial.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import SubscribeButton from '../../../Components/SubscribeButton';
import TextReveal from '../../../Components/TextReveal';
import modifyanchortags from '../../../Utilities/modifyanchortags';
import DropCap from '../../../Components/DropCap';


const Sharon1 = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateBridal/SharonBridalTitle.png`;
const Sharon2 = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateBridal/SharonBridalDouble.png`;
const SharonFace = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateBridal/SHARONTATEFILLEDINFACECHART.jpg`;
const Sharon16 = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateBridal/SharonBridalInstagram.png`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => {
    return (
        <div className="card" style={{ maxWidth: '100%', display: 'flex', textAlign: 'left', backgroundColor: '#fff', color: 'black', fontFamily: 'GFS Didot, sans-serif' }}>
            <div className="blog-content" style={{ lineHeight: '1.3' }}>{blogContent}</div>
        </div>
    );
};

const SharonTatePost = () => {
    const websiteId = "10910";
    const blogRef = useRef(null);

    useEffect(() => {
        modifyanchortags(blogRef.current);
    }, []);

    const headingStyle = {
        textAlign: 'center',
        fontSize: '3rem',
        fontWeight: 'normal',
        fontFamily: 'Arapey, serif',
        color: '#333',
        margin: '1rem'
    };

    const blogContent = (
        <div className="container" style={{ lineHeight: '2.5em', maxWidth: '100%', margin: '15rem', padding: '5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '12vh' }}>
                <a href="/timetraveltutorials" style={{ fontFamily: 'Arapey', fontSize: '1.5em', marginTop: '1em', lineHeight: '1.5rem', marginBottom: '2.5em', color: 'black', textDecoration: 'none' }}>
                    BEAUTY // TIME TRAVEL TUTORIALS
                </a>
            </div>
            <img src={Sharon1} alt="Sharon Tate in a promotional " style={{ width: '100%' }} />
            <ResponsiveIframe src="https://www.youtube.com/embed/y0vHs6pRC3Y?si=LJlIhHJgDm0pehAu" title="Sharon Tate YouTube video player" />
            <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth: '100%', marginLeft: '0em' }}>
                CONTAINS: AFFILIATE LINKS
            </p>

          
            <div
            style = {{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                
            }}
            >
            <SubscribeButton />
            </div>
<div>
<p style={{ fontSize: '1rem', fontFamily: 'Arapey, sans-serif', maxWidth: '100%', textAlign:'center', fontStyle: 'italic' }}>
All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
</p>
 </div>
               <DropCap text = "Welcome back to Time Travel Tutorials - the series where we embrace the vintage vibes from the beauties of the past. In this edition, we're shining the spotlight on the stunning Sharon Tate. Renowned as an American actress and model, Tate left a lasting impression with her role in 'Valley of the Dolls' (1967). Hailed as Hollywood's most promising starlet of her time, Sharon's distinctive makeup, hair, and fashion sense continue to captivate and inspire women to this day."/>
           
               <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em' }}>
                Today, we'll delve into her unique and playful bridal style, which embodies a vintage charm while remaining wonderfully contemporary for today's brides!
            </p>
            <img src={Sharon2} alt="Jackie Wyers Instagrammed Sharon Inspired Look" style={{ width: '100%', height: 'auto' }} />
            <h2 style={headingStyle}>The Essentials of Sharon Tate's Makeup Style</h2>
            <img src={SharonFace} alt="Sharon Tate 60s Makeup" style={{ width: '100%' }} />
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em' }}>
               
            Sharon Tate's makeup style, characterized by her striking deep-set eyes and an exaggerated, graphic crease, is a hallmark of the 60s beauty. Her lashes, often lengthened with falsies, added to her captivating doe-eyed appearance. Her bohemian flair, complemented by a sun-kissed, Californian glow, deepened with bronzer, set her apart. Vintage photos of Sharon feel more 1970s as she was ahead of the fashion curve.
            </p>
            <h2 style={headingStyle}>Preparation and Base Makeup</h2>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em' }}>
                Start with a well-moisturized face. Use a foundation that offers a natural, radiant finish. Sharon's look is all about a flawless but not overly matte complexion. A foundation like Charlotte Tilbury’s Light Wonder provides the perfect canvas.
            </p>
            <ResponsiveIframe src="https://shopmy.us/collections/public/490583?noHeader=true" title="Foundation Choices" />
            <h2 style={headingStyle}>Eyes, The Focal Point</h2>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em' }}>
                For the eyes, begin with a hydrating eye cream to ensure the area is well-prepped for makeup. Sharon's look focuses on a graphic crease, without being overpowering. Use a light matte eyeshadow as a base, preferably with a slight pink undertone, to emulate the soft glam of the 60s. Adding depth to the crease with matte taupe shades creates the illusion of deeper-set eyes, a signature element in Tate’s style. Sharon’s eye makeup isn’t complete without eyeliner. Choose a grey shade for a softer look than black. Create a half-moon shape that extends above your inner crease, dipping down to meet your natural eye crease and fade downwards. This shape is quintessentially Sharon!
            </p>
            <ResponsiveIframe src="https://shopmy.us/collections/public/490599?noHeader=true" title="Eye Makeup Essentials" />
            <h2 style={headingStyle}>Lashes and Brows</h2>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em' }}>
                Opt for false lashes that start from the mid-eye to the outer corner, creating a lifted, open-eye effect. Keep the brows natural and well-groomed, defining the upper part of the brow upwards.
            </p>
            <ResponsiveIframe src="https://shopmy.us/collections/public/490744?noHeader=true" title="Lashes and Brows Products" />
            <h2 style={headingStyle}>Face Sculpting and Highlighting</h2>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em' }}>
                Use a light hand to sculpt and contour the face, focusing on the cheekbones, jawline, and hairline. Sharon's look isn't about sharp contours but gentle, sun-kissed definition. Highlight the high points of your face with a soft, luminous highlighter.
            </p>
            <h2 style={headingStyle}>Lips, Subtle and Chic</h2>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em' }}>
                Finish the look with a nude lip color, something that enhances your natural lip shade. A light application of a nude lipstick, followed by a non-sticky lip balm or gloss, will give you the perfect bridal pout.
            </p>
            <ResponsiveIframe src="https://shopmy.us/collections/public/490800?noHeader=true" title="Nude Lips Products" />
            <h2 style={headingStyle}>Sharon Tate Wedding Dress and More</h2>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em' }}>
                Sharon Tate's bridal makeup, an exquisite blend of 60s glamour and sun-kissed beauty, is a perfect tribute to her style. Her iconic Babydoll Wedding Dress, modern for its time, remains a fashionable choice. Explore our curated collection of Sharon Tate wedding dress replicas and similar styles below!
            </p>
            <img src={Sharon16} alt="Sharon Tate Wedding Dress" style={{ width: '100%', height: 'auto' }} />
            <ResponsiveIframe src="https://shopmy.us/collections/public/492227?noHeader=true" title="Wedding Dress Collection" />
            <h2 style={headingStyle}>Discover More Vintage-Inspired Looks</h2>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em' }}>
                Discover more vintage-inspired bridal looks and timeless fashion on our website. Don't forget to subscribe to our newsletter for the latest updates and exclusive offers!
            </p>
            <div style={{ textAlign: 'center' }}>
                <img src={signature} alt="Signature of Jackie Wyers" style={{ width: '100%', height: 'auto' }} />
            </div>
            <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth: '100%', marginLeft: '0em' }}>
                CONTAINS: AFFILIATE LINKS
            </p>
        </div>
    );

    return (
        <div ref={blogRef}>
            <div style={{ width: '100%' }}><TextReveal text='TIME TRAVEL TUTORIALS' /></div>
            <Card blogContent={blogContent} />
            <Comments website-id={websiteId} page-id={'Sharon-Tate-Post'} />
        </div>
    );
};

export default SharonTatePost;

