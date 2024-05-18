import React, { useRef } from 'react';
import '../../ExampleTutorial.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import TextReveal from '../../../Components/TextReveal';
import SubscribeButton from '../../../Components/SubscribeButton';
import DropCap from '../../../Components/DropCap';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';

const title = `${process.env.PUBLIC_URL}/Images/Articles/Twiggy/TwiggyTitle.png`;
const image1 = `${process.env.PUBLIC_URL}/Images/Articles/Twiggy/TWIGGYEYESTUTORIAL.JPG`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/Twiggy/TwiggyFaceChart.png`;
const image3 = `${process.env.PUBLIC_URL}/Images/Articles/Twiggy/JackieAsAudrey.jpg`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;
const yardley = `${process.env.PUBLIC_URL}/Images/Articles/JeanShrimpton/ShrimptonAd.jpg`;

const Card = ({ blogContent }) => (
    <div>
        <div><TextReveal text='TIME TRAVEL TUTORIALS' /></div>
        <div className="card" style={{ maxWidth: '100%', display: 'flex', textAlign: 'left', backgroundColor: 'white', color: 'black', fontFamily: 'GFS Didot, sans-serif' }}>
            <div className="blog-content" style={{ lineHeight: '1.5' }}>{blogContent}</div>
        </div>
    </div>
);

const TwiggyBlog = () => {
    const websiteId = '10910';
    const blogRef = useRef(null);

    const headingStyle = {
        textAlign: 'center',
        fontSize: '2.75rem',
        fontWeight: 'normal',
        fontFamily: 'Arapey, serif',
        color: '#333',
        margin: '3.5rem',
        marginTop: '2rem',
        marginBottom: '2rem'
    };

    const paragraphStyle = {
        fontSize: '1.5rem',
        fontFamily: 'GFS Didot, serif',
        margin: '1rem',
        maxWidth: '100%',
        lineHeight: '1.75em'
    };

    const imageStyle = {
        display: 'block',
        margin: '0 auto',
        maxWidth: '100%',
        maxHeight: '1000px',
        objectFit: 'cover'
    };

    const blogContent = (
        <div className="container" style={{ lineHeight: '2.25rem', maxWidth: '100%', margin: '20rem', marginTop: '5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25vh' }}>
                <a href="/timetraveltutorials" style={{ fontFamily: 'Arapey', fontSize: '1.5em', color: 'black', textDecoration: 'none' }}>
                    BEAUTY // TIME TRAVEL TUTORIALS
                </a>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={title} alt="Iconic Sixties Twiggy Look with MOD Blue Eyeshadow" style={imageStyle} />
            </div>

            <div>
                <ResponsiveIframe src="https://www.youtube.com/embed/1WPhwXOdSSw?si=rk3Kj1nEi1rXYMsr" title="Jackie Wyers Twiggy Blue Mod Eyeshadow Youtube Tutorial" />
            </div>

            <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <SubscribeButton />
            </div>
            <div>
                <p style={{ fontSize: '1rem', fontFamily: 'Arapey, sans-serif', maxWidth: '100%', textAlign: 'center', fontStyle: 'italic' }}>
                    All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
                </p>
            </div>

            <DropCap text="Welcome back to the blog, vintage beauty lovers! Today’s Time Travel Tutorials is dedicated to the doe-eyed darling of the decade: Twiggy. Known affectionately as “The Face of ‘66,” she redefined beauty standards with her waifish figure, striking lashes, and androgynous looks. Twiggy, born Lesley Lawson, wasn't just a trendsetter; she was a cultural phenomenon. With her slender frame, cropped hair, and captivating gaze, Twiggy became the emblem of the mod movement in fashion. She adorned the era's most fashionable spreads, turning the world’s eyes to London’s “youthquake.” Twiggy’s playful innocence and charm perfectly captured the spirit of the sixties, a stark contrast to the older, more mature appearance of stars like Marilyn Monroe. Her distinctive allure danced between girlish simplicity and the era’s vibrant liberation." />

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={image1} alt="Twiggy Eye Tutorial Jackie Wyers" style={imageStyle} />
            </div>

            <p style={paragraphStyle}>
                While I recreated a Twiggy look about 7 years ago, I’ve since pinned one of my favorite Twiggy portraits on Pinterest so often that I'm compelled to revisit the icon again. Let’s dive into a tutorial that pays homage to Twiggy’s iconic pastel blue eyeshadow and those legendary drawn-on lower lashes. And while the cropped cut isn’t my personal choice, this look features adorable curly buns adorned with flowers, offering a stunning springtime style that’s right up my alley. Let's recreate the magic of the 1960s It-girl, celebrating an era of fashion that continues to enchant and inspire. Here's how to channel the iconic Twiggy vibe using modern products that retain the quintessential vintage flair.
            </p>

            <h2 style={headingStyle}>A Twiggy Beauty Breakdown</h2>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={image2} alt="Twiggy Eye Tutorial Jackie Wyers" style={imageStyle} />
            </div>

            <p style={paragraphStyle}>
                Twiggy's iconic makeup style was known for its bold, graphic eyeshadow in various hues. This featured look showcases a pastel blue shade that's perfectly in vogue for Spring/Summer 2024. It pairs a youthful glow with subtle freckles and a minimalist lip to round out the ensemble. And of course, the dramatic, drawn-on lower lashes are essential for that quintessential pop-art impact. Let's begin, shall we?
            </p>

            <h2 style={headingStyle}>Youthful Base & Anna Sui Cosmetics Feature</h2>

            <p style={paragraphStyle}>
                For Twiggy's youthful glow, begin with a flawless base. The Anna Sui Rich Lotion and Gel Foundation Primer—with its hydrating formula and adorable packaging—is the perfect first step. I worked with Anna Sui on this tutorial and have several beautiful products to showcase throughout this tutorial. Its water-based gel texture and plumping effect prepare the skin beautifully for foundation, concealing pores and ensuring a smooth, healthy canvas.
            </p>

            <ResponsiveIframe src="https://shopmy.us/collections/public/542136?noHeader=true" title="Rich Lotion - Ana Sui" />

            <h2 style={headingStyle}>Barely There Foundation</h2>

            <p style={paragraphStyle}>
                Twiggy’s look was all about fresh-faced beauty, so I follow up with Makeup Forever's HD Skin Hydro Glow foundation, infused with hyaluronic acid, to maintain that natural, hydrated look. For a subtle contour, Makeup Forever’s palette allows me to add dimension with minimal product—essential for this fresh and luminous style.
            </p>

            <ResponsiveIframe src="https://shopmy.us/collections/public/551116?noHeader=true" title="Foundation - Makeup Forever" />

            <h2 style={headingStyle}>Faux Freckles & Peachy Cheeks</h2>

            <p style={paragraphStyle}>
                Before we move on to setting the foundation, let's add some playful dimension with two cream-based products. Start by taking the KimChiBeauty Candy Girl Fake Freckle pen to delicately dot along the bridge of the nose and sweep up toward the cheekbones, emulating that sun-kissed look Twiggy was known for. Then, with a dab of cream blush, infuse a healthy pop of colour into the cheeks to bring the whole look together.
            </p>

            <ResponsiveIframe src="https://shopmy.us/collections/public/551119?noHeader=true" title="Fake Freckles - KimChiBeauty" />

            <h2 style={headingStyle}>Anna Sui’s New Brightening Powder</h2>

            <p style={paragraphStyle}>
                To further achieve the Twiggy-inspired 'doll skin', I turn to the reformulated Anna Sui Loose Face Powder. Available in lavender and pink—shades famed for their brightening effects—I chose lavender to enhance my complexion. The powder, housed in a sleek compact or an elegant, limited-edition black case, echoes vintage and Gothic elegance that would make a statement on any vanity.
            </p>

            <p style={paragraphStyle}>
                Not only does this powder promise a smooth, doll-like finish, it’s crafted with tone control pearls to add luster and counteract dullness. With a few sweeps, it works to blur imperfections and conceal pores, maintaining skin's natural luminosity without a heavy makeup look. Plus, the joy of using the plush powder puff adds a touch of vintage glam to the routine. Available on Amazon, this powder is a transformative step, ensuring a polished and radiant finish, as you can see in my before and after—it's light, non-cakey, and keeps the skin looking hydrated and smooth. More of a pressed powder girl? Try the stunning Anna Sui Rose Pressed Powder, also in lavender or pink.
            </p>

            <ResponsiveIframe src="https://shopmy.us/collections/public/551123?noHeader=true" title="Brightening Powder - Ana Sui" />

            <h2 style={headingStyle}>The Twiggy Eyeshadow Look: The First Steps</h2>

            <p style={paragraphStyle}>
                Start by warming up the crease with a light brown shadow for depth, complementing it with a matte highlight on the brow bone. These shades, drawn from the new Makeup By Mario Master Mattes Eyeshadow Palette: The Neutrals, is a staple new palette.
            </p>

            <p style={paragraphStyle}>
                Next, I channeled Twiggy's quintessential MOD eye using a creamy navy blue eyeliner to define a half-moon crease well above my natural fold. For precision, a Pretty Vulgar brush akin to a tiny paintbrush was my tool of choice for this meticulous step.
            </p>

            <p style={paragraphStyle}>
                For the lids, I opted for a pastel blue cream shadow, sourced from Amazon, to achieve that iconic pop of colour. Blue eyeshadow might seem bold, but a pastel hue is approachable and wearable, especially for those new to the world of vibrant shadows.
            </p>

            <ResponsiveIframe src="https://shopmy.us/collections/public/551124?noHeader=true" title="Eyeshadow - Makeup By Mario" />

            <h2 style={headingStyle}>Liner & Drawn on Twiggy Lashes</h2>

            <p style={paragraphStyle}>
                A light eyeliner pencil was used sparingly to maintain the doll-like eyes Twiggy was renowned for. With Anna Sui's Perfect Eyeliner in black thinly tracing the lash line and connecting seamlessly with the crease.
            </p>

            <p style={paragraphStyle}>
                After curling the lashes, apply Anna Sui's Volumizing Mascara before attaching authentic Twiggy-style false lashes from Yardley - preserved from the 1960’s. You can use any full-strip with fluttery lashes! For those famous Twiggy bottom lashes, I carefully drew them on, tapering them off as I moved towards the inner corner.
            </p>

            <ResponsiveIframe src="https://shopmy.us/collections/public/551126?noHeader=true" title="Eyeliner - Ana Sui" />

            <h2 style={headingStyle}>Twiggy’s Pale Pout</h2>

            <p style={paragraphStyle}>
                Shaping my lips to mirror Twiggy's, I started with Charlotte Tilbury’s Iconic Nude Lip Liner. The goal was a slightly widened Cupid's bow and a fuller upper lip, all softly blended for a natural edge. The Anna Sui lipsticks, tapped gently over the lips and brightened with a pinker tone in the centre, created the perfect vintage-inspired pout.
            </p>

            <h2 style={headingStyle}>Twiggy’s Spring Hairstyle</h2>

            <p style={paragraphStyle}>
                No Twiggy ensemble is complete without an attention-grabbing hairstyle. While I steer clear of her signature cropped cut, I simply can’t pull it off, I chose to recreate this portrait to try out this charming curly buns with delicate flowers.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={image3} alt="Twiggy Hair Tutorial Jackie Wyers" style={imageStyle} />
            </div>

            <p style={paragraphStyle}>
                I hope you enjoyed another Time Travel Tutorials for all the vintage vibes, and I do have “vintage vibes” merchandise available if you are interested, browse <a href="/vintagevibesmerch">here!</a>
            </p>
            <p style={paragraphStyle}>
                If you have any vintage icons you'd like me to cover in future posts, don't hesitate to leave a comment below. If you enjoyed this look, you may Jean Shrimpton’s Yardley Ad recreation, complete with my vintage makeup collection from the 1960's <a href="/yardley1965">here</a>.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={yardley} alt="Twiggy Hair Tutorial Jackie Wyers" style={imageStyle} />
            </div>

            <p style={paragraphStyle}>
                Thank you for reading and if you want to be featured on my site, try out this look and please tag me as I’d love to see it and share your rendition! I love to see you switch up your style with confidence.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={signature} alt="Twiggy Hair Tutorial Jackie Wyers" style={imageStyle} />
            </div>
        </div>
    );

    return (
        <div ref={blogRef}>
            <Card
                title="Twiggy Sixties Mod Makeup Tutorial"
                description="Iconic '60s Makeup how-to"
                blogContent={blogContent}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    textAlign: 'center'
                }}
            />

            <Comments website-id={websiteId} pageId={"Victoria-Secret-Review"} />
        </div>
    );
};

export default TwiggyBlog;
