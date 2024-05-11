import React, { useEffect, useRef, useState } from 'react';


import '../../ExampleTutorial.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import modifyanchortags from '../../../Utilities/modifyanchortags';
import TextReveal from '../../../Components/TextReveal';
const Latte1 = `${process.env.PUBLIC_URL}/Images/Latte1.png`;
const Latte2 = `${process.env.PUBLIC_URL}/Images/Latte2.png`;
const Latte3 = `${process.env.PUBLIC_URL}/Images/Latte3.png`;

const Latte16 = `${process.env.PUBLIC_URL}/Images/Signature.png`;


const Card = ({ blogContent }) => {
    return (
        <div className="card" style={{ maxWidth: '100%', display: 'flex', backgroundColor: 'white', color: 'black', fontFamily: 'GFS Didot, sans-serif' }}>
            <div className="blog-content">{blogContent}</div>
        </div>
    );
};

const LatteMakeupBlogPost = () => {
    const websiteId = "10910";
    const blogRef = useRef(null);
    const [allowScrolling, setAllowScrolling] = useState(false);

    useEffect(() => {
        modifyanchortags(blogRef.current);
        const handleResize = () => {
            setAllowScrolling(window.innerWidth <= 1200);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const blogContent = (
        <div className="container" style={{ display: 'center', maxWidth: '100%', lineHeight: '2.25em', margin: '15rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
                <a href="/trends" style={{ fontFamily: 'Arapey', fontSize: '1.5em', color: 'black', textDecoration: 'none' }}>
                    BEAUTY // TRENDS
                </a>
            </div>
            <img src={Latte1} alt='Latte Makeup' style={{ width: '100%' }} />
            <iframe width="100%" height="525" src="https://www.youtube.com/embed/Jm0BdU88kr4?si=q_f9U-l_aZqaY83s" title="Latte Makeup Tutorial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center', margin: '1rem' }}>
                <SubscribeButton />
            </div>
            <div>
                <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
                    All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
                </p>
            </div>
            <h2 style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '2rem' }}>
                <span style={{ color: '#745B4F', float: 'left', fontSize: '6rem', lineHeight: '0.9', marginRight: '0.05em', marginTop: '0.01em' }}>H</span>ello, beauties,
                it's Jackie here with another trend report driven by the TikTok algorithm! The latte makeup look is all about embracing the warm, tawny tones to create a '90s inspired glam with a cozy vibe. Think caramel-toned smokey eye, no foundation, faux freckles, and a milky lip.
            </h2>
            <a href="https://www.instagram.com/p/CvFsHXNO7nf/?img_index=1" target="_blank" rel="noopener noreferrer">
                <img src={Latte2} alt='Detailed Latte Makeup' style={{ width: '100%' }} />
            </a>
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontFamily: 'GFS Didot, serif', margin: '2rem' }}>
                Get The Latte Makeup Look
            </h2>
            <img src={Latte3} alt='Latte Makeup Application' style={{ maxWidth: '100%', height: 'auto' }} />
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontFamily: 'GFS Didot, serif', margin: '2rem'            }}>
                The Base: Tanned and Natural
            </h2>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '2rem' }}>
                Applying self-tanner the night before can really help create a harmonious,
                warm canvas. Make sure you’ve moisturized the skin before makeup, and we
                are going with no foundation for this style, but I gave my skin a boost with
                Charlotte Tilbury Hollywood Flawless Filter for a sheer glow with a hint of
                coverage.
            </p>
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontFamily: 'GFS Didot, serif', margin: '2rem' }}>
                Highlight and Contour
            </h2>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '2rem' }}>
                My favorite palette for warming up the skin and highlighting is the Make Up For Ever HD Skin sculpting palette. These shades are sheer, so again the base won’t appear too heavy. While the foundation is natural, this style of makeup does call for contour and highlight!
            </p>
            <iframe
                width="100%"
                title="Collection name here"
                src="https://shopmy.us/collections/public/493598?noHeader=true"
                className="embed-container"
                scrolling={allowScrolling ? 'yes' : 'no'}
            ></iframe>
            <p style={{ textAlign: 'RIGHT', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5em', maxWidth: '100%', marginLeft: '0em' }}>
                CONTAINS: AFFILIATE LINKS
            </p>
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontFamily: 'GFS Didot, serif', margin: '2rem' }}>
                Yellow Based Bronzer
            </h2>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '2rem' }}>
                Unlike the typical warm, red-toned bronzers, this look calls for a yellow-based bronzer to add warmth to the skin and complement the caramel-toned eyeshadows coming up.
            </p>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '2rem' }}>
                Benefit Cosmetics Hoola Caramel is a great pick if you are fair-medium in skin tone. You can rock this look no matter your complexion, but it will suit warmer coloring best. See the espresso look for cool-toned skin! (P.S. If you are confused about your color palette, see here.)
            </p>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '2rem' }}>
                Apply the bronzer over the top of the subtle contouring to amp up the tanned goddess effect!
            </p>
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontFamily: 'GFS Didot, serif', margin: '2rem' }}>
                Eye Makeup: Bronzed and Smoky
            </h2>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '2rem' }}>
                For the eyes, continue to use the Hoola Bronzer in Caramel into the crease and under the lash line for a soft smokey effect.
            </p>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '2rem' }}>
                Next, add a brown liner pencil to rim the lash line and softly fade into the crease. The ColourPop lipliner I used called BFF 3 is really creamy and easy to blend for this step, plus it is lighter than most traditional eyeliners on the market, making it appear softer. Make sure you're not using the eyeliner on the lips and eyes and sanitize between uses if you do opt for a lipliner on the eyes!
            </p>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '2rem' }}>
                Continue by picking a palette that has warm matte and shimmer tones like ONE/SIZE BY PATRICK STARRR | Visionary Eyeshadow Palette to deepen up the outer corner of the eye and add a bronzer shimmer to the lid to pick up the light.
            </p>
            <iframe
                title="Collection name here"
                src="https://shopmy.us/collections/public/493604?noHeader=true"
                style={{ justifyContent: 'center', width: '100%', minHeight: '55vh', border: 'none' }}
                scrolling={allowScrolling ? 'yes' : 'no'}
            ></iframe>
            <p style={{ textAlign: 'RIGHT', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5em', maxWidth: '100%', marginLeft: '0em' }}>
                CONTAINS: AFFILIATE LINKS
            </p>
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontFamily: 'GFS Didot, serif', margin: '2rem' }}>
                Brows
            </h2>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '2rem' }}>
                Inspired by Tanielle Jai’s work, her models typically rock very bold, Brooke Shields-esque brows. Fill your brows in with natural strokes and set in place with a brow gel. I went REALLY bold, so feel free to tone the brow down to suit your preferences!
            </p>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '2rem' }}>
                Using a liquid liner, create more drama on the lash line and use this same liner to add beauty marks or faux freckles. This is a Tanielle Jai signature step that is super fun to try out. Pop on an outer corner lash, and the eyes are complete!
            </p>
            <iframe
                title="Collection name here"
                src="https://shopmy.us/collections/public/493609?noHeader=true"
                style={{ justifyContent: 'center', width: '100%', minHeight: '50vh', border: 'none' }}
                scrolling={allowScrolling ? 'yes' : 'no'}
            ></iframe>
            <p style={{ textAlign: 'RIGHT', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5em', maxWidth: '100%', marginLeft: '0em' }}>
                CONTAINS: AFFILIATE LINKS
            </p>
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontFamily: 'GFS Didot, serif', margin: '2rem' }}>
                Lips & Finishing Touches
            </h2>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '2rem' }}>
                For the lips, over-line them with a medium-toned caramel brown shade, and blur out again for no harsh lines. Add a lip plumper for a fuller look in a milky pink or nude shade.
            </p>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '2rem' }}>
                The finishing touch to bring this glamorous look all together is to use a golden highlighter on the cheeks, chin, nose, and even collarbones for a radiant glow. Paired with gold jewelry and a simple white top, the makeup truly embraced the Golden Goddess aesthetic with the new trending title of “Latte Makeup.”
            </p>
            <iframe
                title="Collection name here"
                src="https://shopmy.us/collections/public/493611?noHeader=true"
                style={{ justifyContent: 'center', width: '100%', minHeight: '55vh', border: 'none' }}
                scrolling={allowScrolling ? 'yes' : 'no'}
            ></iframe>
            <p style={{ textAlign: 'RIGHT', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '0.5em', maxWidth: '100%', marginLeft: '0em' }}>
                CONTAINS: AFFILIATE LINKS
            </p>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '2rem' }}>
                Want to be featured on my site? Tag me in your recreation or version of this
                look on Insta <strong>@jackiewyers.</strong> I’d love to see you switch up your style with confidence!
            </p>
            <img src={Latte16} alt='Jackie Wyers Signature' style={{ width: '100%' }} />
        </div>
    );

    return (
        <div>
            <div style={{ width: '100%' }}>
                <TextReveal text='LATTÉ ANYONE?' />
            </div>
            <div ref={blogRef}
            
            >
            <Card
                title="Latte Makeup Trend"
                description="Trend Report: How to get the Latte Makeup Look"
                blogContent={blogContent}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    textAlign: 'center'
                }}
            />
            <Comments
                website-id={websiteId}
                page-id={'latte'}
            />
        </div>
    </div>
);
};

export default LatteMakeupBlogPost;
