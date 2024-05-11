import React, { useEffect, useRef } from 'react';
import '../../ExampleTutorial.css';
import { Comments } from '@hyvor/hyvor-talk-react';

import modifyanchortags from '../../../Utilities/modifyanchortags';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import SubscribeButton from '../../../Components/SubscribeButton';

const Sophia1 = `${process.env.PUBLIC_URL}/Images/Sophia1.png`;
const Sophia2 = `${process.env.PUBLIC_URL}/Images/SophiaAAA.png`;
const Sophia3 = `${process.env.PUBLIC_URL}/Images/Sophia2.png`;
const Signature = `${process.env.PUBLIC_URL}/Images/Signature.png`;

const Card = ({ blogContent }) => {
    return (
        <div className="card" style={{ maxWidth: '100%', display: 'flex', textAlign: 'left', backgroundColor: 'white', color: 'black', fontFamily: 'GFS Didot, sans-serif' }}>
            <div className="blog-content" style={{ lineHeight: '1.3' }}>{blogContent}</div>
        </div>
    );
};

const SophiaLorenPost = () => {
    const blogRef = useRef(null);

    useEffect(() => {
        modifyanchortags(blogRef.current);
        // Dynamically load the Instagram embed script after the component mounts
        const script = document.createElement('script');
        script.src = "//www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);

        // Re-parse the DOM for Instagram embeds after the script is loaded
        script.onload = () => {
            if (window.instgrm) {
                window.instgrm.Embeds.process();
            }
        };
    }, []);

    const headingStyle = {
        fontSize: '3rem', // Bigger size
        fontWeight: 'normal', // Less bold
        fontFamily: 'Arapey, serif', // Optional: adjust the font family to something more elegant if preferred
        color: '#333', // Dark grey for better readability
        marginBottom: '0.5em' // Space below the heading
    };

    const blogContent = (
        <div className="container" style={{ lineHeight: '2.5em', maxWidth: '100%', margin: '20rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15vh' }}>
                <a href="/timetraveltutorials" style={{ fontFamily: 'Arapey', fontSize: '1.5em', marginTop: '1rem', lineHeight: '1.5rem', marginBottom: '2.5em', color: 'black', textDecoration: 'none' }}>
                    BEAUTY // TIME TRAVEL TUTORIALS
                </a>
            </div>
            <img src={Sophia1} alt="Sophia Loren in Arabesque" style={{ width: '100%' }} />
            <ResponsiveIframe src="https://www.youtube.com/embed/o8_dfwGNXAc?si=q2_GxBp3sClXnUUB" title="YouTube video player" />

            <div style={{ width: '100%' }}><SubscribeButton /></div>
            
            <h2 style={headingStyle}>Welcome to Time Travel Tutorials</h2>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '5rem', maxWidth: '100%', marginLeft: '0em' }}>
                Welcome back to my favorite series, Time Travel Tutorials, where we delve into the glamorous world of beauty icons from the past. Today's spotlight is on the mesmerizing Italian beauty, Sophia Loren. Born on September 20th, 1934, in Rome, Italy, Sophia Loren is a megastar in both Hollywood and Italian cinema. Her career, spanning over six decades, is a testament to her immense talent, charisma, and iconic makeup style, which continues to inspire admiration (and imitation) today.
            </p>

            <h2 style={headingStyle}>The Essence of Sophia Loren’s Iconic Makeup</h2>
            <img src={Sophia3} alt="Sophia Loren's iconic look" style={{ width: '100%' }} />
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '5rem', maxWidth: '100%', marginLeft: '0em' }}>
                Over the years, I’ve explored numerous 1960s makeup styles. While Twiggy, Jean Shrimpton, and Sharon Tate often sported an exaggerated, graphic crease to emphasize an oversized lid, Sophia was known for her double             wing liner that created a very elongated, sexy cat eye. Let’s break down the entire look from the start!
            </p>

            <h2 style={headingStyle}>The Foundation of Loren's Look: A Tanned Base</h2>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '5rem', maxWidth: '100%', marginLeft: '0em' }}>
                To replicate Sophia Loren's radiant tan from the "Arabesque" shower scene, start with your favorite self-tanner. I initially used a dark shade of Loving Tan, but I’d now recommend Coco & Eve Tanning Mousse. Skincare is crucial for a flawless foundation application; after hydrating with a rich moisturizer, I prepped under the eyes with Tatcha The Silk Peony Melting Eye Cream.
            </p>

            <ResponsiveIframe src="https://shopmy.us/collections/public/495255?noHeader=true" title="Collection name here" />

            <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth: '100%', marginLeft: '0em' }}>
                CONTAINS: AFFILIATE LINKS
            </p>

            <h2 style={headingStyle}>Sculpting the Iconic Bone Structure</h2>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '5rem', maxWidth: '100%', marginLeft: '0em' }}>
                For primer, I opted for the Armani Beauty Luminous Silk Hydrating Primer, (my favorite Italian brand) followed by Rare Beauty’s Serum foundation to even out the tan while offering lighter coverage, mirroring Loren's sunkissed skin. I highlighted my chin and jawline with Maybelline's Age Rewind Concealer, focusing on the center of my face and cheekbones to really make the center of the face pop.
            </p>

            <ResponsiveIframe src="https://shopmy.us/collections/public/495258?noHeader=true" title="Collection name here" />

            <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth: '100%',}}>
                CONTAINS: AFFILIATE LINKS
            </p>

            <h2 style={headingStyle}>Old Hollywood Matte & Powdered Skin Finish</h2>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '5rem', maxWidth: '100%', marginLeft: '0em' }}>
                The overall makeup aesthetic in Old Hollywood emphasized a polished, meticulously crafted appearance, with matte skin providing the perfect canvas for dramatic eye makeup, sculpted eyebrows, and bold lip colors that defined the period's iconic beauty looks. Achieve the matte skin with loose powder on a puff! While dewy skin is super trendy now, giving a matte base a try can bring back that iconic glamour and make you feel like you're on the set of your own film.
            </p>

            <ResponsiveIframe src="https://shopmy.us/collections/public/495261?noHeader=true" title="Collection name here" />

            <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth: '100%', }}>
                CONTAINS: AFFILIATE LINKS
            </p>

            <h2 style={headingStyle}>The “Laminated” Brows</h2>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '5rem', maxWidth: '100%', marginLeft: '0em' }}>
                Sophia Loren's eyes are her most captivating feature. Let’s frame them with full, arched, and elongated brows! Sophia’s brows appeared drawn on in small strokes, brushed upwards, similar to a brow tattoo or laminated brow style.
            </p>

            <h2 style={headingStyle}>The Sophia Loren Double Winged Liner Cat Eye</h2>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '5rem', maxWidth: '100%', marginLeft: '0em' }}>
                The first step to achieve the iconic eye is to use a white, gel liner to create a wing from the outer corner of the eye outwards. Connect this wing to your waterline, also rimmed with white to open up the eyes.
            </p>

            <h2 style={headingStyle}>The Elongated Lash Trick</h2>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '5rem', maxWidth: '100%', marginLeft: '0em' }}>
                Select a deep neutral palette, with grays, browns, and taupes. I selected the Dior 5 Couleurs Couture Eyeshadow Palette (649 Nude Dress) and while some photos of Sophia’s signature eye look feature a charcoal gray (a deep, dark shade of gray close to black), in the "Arabesque" scenes, it appeared more like a taupe (a warmer neutral, more of a gray-brown) through the lens.
                </p>
                
                <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '5rem', maxWidth: '100%', marginLeft: '0em' }}>
                I took a rich taupe shadow smoked up from the lash line, softening the edges with a lighter shimmery taupe into the crease. Don’t forget to brighten up the brow bone to highlight the arched brow.
                </p>

                <ResponsiveIframe src="https://shopmy.us/collections/public/495263?noHeader=true" title="Collection name here" />

                <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em', maxWidth: '100%', marginLeft: '0em' }}>
                    CONTAINS: AFFILIATE LINKS
                </p>

                <h2 style={headingStyle}>The Elongated Lash Trick</h2>
                <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '5rem', maxWidth: '100%', marginLeft: '0em' }}>
                With these glamorous eyes, take it a step further with outer corner lashes, placed slightly beyond the natural lash line, hidden in the black liner. This is the sexiest cat eye ever!
                </p>

                <ResponsiveIframe src="https://shopmy.us/collections/public/495279?noHeader=true" title="Collection name here" />

                <h2 style={headingStyle}>Lips and Cheeks: The Finishing Touches</h2>
                <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '5rem', maxWidth: '100%', marginLeft: '0em' }}>
                For the lips, I chose a vibrant peachy pink shade from Charlotte Tilbury called Sunset Lover—a perfect match for a sun-kissed Italian beauty! This has sadly been discontinued, but a similar shade is Charlotte Tilbury Hot Lips 3 Angel Alessandra, which is slightly more nude. Sophia’s blush was subtle, so using the same lipstick as a bit of cream blush works perfectly. A pink gloss added the final touch of color.
                </p>

                <ResponsiveIframe src="https://shopmy.us/collections/public/495280?noHeader=true" title="Collection name here" />

                <h2 style={headingStyle}>Nude Lips</h2>
                <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '5rem', maxWidth: '100%', marginLeft: '0em' }}>
                While peach lipsticks were often seen on screen, some behind-the-scenes photos show a more nude style, as well as the second “Arabesque” look covered below. Too Faced Milkshake gloss is a great option for this.
                </p>

                <h2 style={headingStyle}>The Arabesque Hairstyle</h2>
                <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '5rem', maxWidth: '100%', marginLeft: '0em' }}>
                While this iconic look features a hot pink towel set (find a similar one on Amazon here), you can also complete the look with a retro hairstyle, starting with a high ponytail and pin-curling into a bun for volume and style. See a mini tutorial below.
                </p>

           

                <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '5rem', maxWidth: '100%', marginLeft: '0em' }}>
                Whether you're a fan of Sophia Loren, a lover of the '60s, or just in search of some beauty inspiration, I hope you found this guide inspiring. Join me in celebrating the eternal elegance of Sophia Loren, and I can’t wait to create another Time Travel Tutorial for you!
                </p>

                <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '5rem', maxWidth: '100%', marginLeft: '0em' }}>
                Want to be featured on my site? Submit your recreation or version of this look to me on Insta! I’d love to see you switch up your style with confidence!
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
                <Comments
                    website-id={'10910'}
                    pageId={"Sophia-Loren"} // Unique identifier for this blog post
                />
            </div>
        </div>   
    );
};

export default SophiaLorenPost;


