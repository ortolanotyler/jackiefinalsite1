import React, { useRef } from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';
import TextReveal from '../../Components/TextReveal';
import ResponsiveIframe from '../../Components/ResponsiveIframe';
import './ExampleTutorial.css';
import DropCap from '../../Components/DropCap';

const BonBon1A = `${process.env.PUBLIC_URL}/Images/Articles/BonBonReview/BonBon1A.png`;
const BonBon2 = `${process.env.PUBLIC_URL}/Images/Articles/BonBonReview/BonBon2.jpg`;
const Signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => {
    return (
        <div>
            <TextReveal text="BONBON // VIKTOR & ROLF" />
            <div className="card" style={{ maxWidth: '100%', display: 'flex', textAlign: 'left', backgroundColor: 'white', color: 'black', fontFamily: 'GFS Didot, sans-serif' }}>
                <div className="blog-content" style={{ lineHeight: '1.2' }}>{blogContent}</div>
            </div>
        </div>
    );
};

const BonBonReview = () => {
    const websiteId = "10910"; 
    const blogRef = useRef(null);

    const headingStyle = {
        textAlign: 'center',
        fontSize: '2.5rem',
        fontFamily: 'Arapey, serif',
        color: '#333',
        margin: '2rem'
    };

    const paragraphStyle = {
        fontSize: '1.5rem',
        fontFamily: 'GFS Didot, serif',
        margin: '2rem',
        maxWidth: '100%',
        padding: '1rem',
        lineHeight: '1.75'
    };

    const blogContent = (
        <div className="container" style={{ lineHeight: '2.5em', margin: '20rem', marginTop: '25px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25vh' }}>
                <a href="/reviews" style={{ fontFamily: 'Arapey', fontSize: '1.5em', color: 'black', textDecoration: 'none' }}>
                    BEAUTY // REVIEWS // FRAGRANCES
                </a>
            </div>
            <img src={BonBon1A} alt="BonBon 1" style={{ width: '100%' }} />
            
    
            <DropCap text="Bonbon is a celebration of self-indulgence, a fragrant ode to the joy of savouring life's sweet moments. Its timeless appeal beckons one to a world of pure, unadulterated pleasure." />
            
            <h2 style={headingStyle}>Background Information</h2>
            
            <p style={paragraphStyle}>
                Bonbon is a celebration of self-indulgence, a fragrant ode to the joy of savouring life's sweet moments. Its timeless appeal beckons one to a world of pure, unadulterated pleasure.
            </p>
            
            <img src={BonBon2} alt="BonBon 2" style={{ maxBlockSize: '800px', width: '100%' }} />
            
            <h2 style={headingStyle}>Fragrance Profile</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth: '100%', marginLeft: '0em' }}>
                <div style={{ marginBottom: '0.7rem' }}>
                    <strong>Concentration:</strong> Eau de Parfum
                </div>
                <div style={{ marginBottom: '0.7rem' }}>
                    <strong>Fragrance Family:</strong> Floral Fruity Gourmand
                </div>
                <div style={{ marginBottom: '0.7rem' }}>
                    <strong>Top Notes:</strong> Mandarin, Orange, Peach
                </div>
                <div style={{ marginBottom: '0.7rem' }}>
                    <strong>Heart/Middle Notes:</strong> Caramel, Jasmine, Orange blossom
                </div>
                <div style={{ marginBottom: '0.7rem' }}>
                    <strong>Base Notes:</strong> Amber, Guaïac wood, Cedarwood, Sandalwood
                </div>
            </div>
            
            <p style={paragraphStyle}>
                Overall Scent Profile: A luscious peach opening gives way to a heart overflowing with caramel's sweet embrace, tempered by delicate floral whispers. The base, a comforting blend of warm woods, anchors the fragrance in sophistication.
            </p>
            
            <h2 style={headingStyle}>Personal First Impressions</h2>
            
            <p style={paragraphStyle}>
                My first brush with Bonbon took place in a Nordstrom back in 2015. Before that moment, the realm of high-end perfumes was uncharted territory for me. Yet, as I passed by the counter, the luxurious packaging caught my eye—a whimsically wrapped candy in deep magenta hues, cradled in an equally charming pink and black box. It was love at first sight!
            </p>
            
            <p style={paragraphStyle}>
                Upon the first whiff of Bonbon's sweet, sophisticated aroma, I was hooked. This eau de parfum is described as a gourmand fragrance with notes of Peach, Caramel, and Amber. I eagerly picked up a bottle, and the staff sent me on my way with a bag filled with tissue paper lightly spritzed with the fragrance. Walking through the mall that day, the number of compliments I received was unparalleled 🎀 🍬
            </p>
            
            <p style={paragraphStyle}>
                As a young adult at the time with a fondness for sweet, playful scents, I steered away from body sprays and anything too fruity. I’ve always been drawn to fragrances that lay on a foundation of sandalwood as they feel warm, woody, and inviting alongside the sweetness. This is why Bonbon was the perfect, first-luxury perfume buy that I’d recommend for teens or young adults who love a mature, but sweet scent.
            </p>
            
            <ResponsiveIframe src="https://shopmy.us/collections/public/549701?noHeader=true" title="Final Touches" />
            
            <h2 style={headingStyle}>Review & Recommendations</h2>
            
            <p style={paragraphStyle}>
                <strong>Longevity:</strong> A commendable 6 to 8 hours on the skin, though individual experiences may vary.
            </p>
            <p style={paragraphStyle}>
                <strong>Sillage:</strong> Its presence is assertive yet not overpowering, leaving a trail of intrigue.
            </p>
            <p style={paragraphStyle}>
                <strong>Occasions and Seasonality:</strong> Ideal for the cooler embrace of autumn and winter, Bonbon transitions seamlessly from daytime charm to evening elegance.
            </p>
            
            <h2 style={headingStyle}>Comparisons</h2>
            
            <p style={paragraphStyle}>
                Lovers of sweet gourmands and vanilla will find joy in exploring similar fragrances, like Bianco Latte Giardini Di Toscana, with its own take on caramel. Yet, Bonbon's fruity opening sets it apart, offering a distinctive allure.
            </p>
            
            <ResponsiveIframe src="https://shopmy.us/collections/public/516464?noHeader=true" title="Final Touches" />
            
            <h2 style={headingStyle}>Final Thoughts</h2>
            
            <p style={paragraphStyle}>
                <strong>Pros and Cons:</strong> While its gourmand charm and lasting warmth are undeniable, those in search of spicier or more subdued scents might look elsewhere, perhaps to the likes of Legacy of Petra by Penhaligon's for a woodsy, spicy alternative.
            </p>
            <p style={paragraphStyle}>
                <strong>Value for Money:</strong> Bonbon is a testament to its craftsmanship, offering a unique and enduring fragrance that justifies its price tag.
            </p>
            <p style={paragraphStyle}>
                <strong>Who Would Enjoy It:</strong> A must-try for gourmand fragrance aficionados seeking a sophisticated twist on sweetness.
            </p>
            <p style={paragraphStyle}>
                Bonbon by Viktor & Rolf is a masterful creation that offers more than just a sweet fragrance; it's a statement of indulgence and pleasure. Its lasting power, unique scent profile, and beautiful packaging make it a fragrance worth exploring for those drawn to sweet, gourmand scents.
            </p>
            <p style={paragraphStyle}>
                Have you tried Viktor & Rolf fragrances? Let me know your thoughts below, I’d love to hear your experience.
            </p>
            
            <img src={Signature} alt="Signature" style={{ width: '100%' }} />
            <Comments website-id={websiteId} page-id="BonBon" />

        </div>
    );

    return (
        <div ref={blogRef}>
            <Card
                title="BonBon Review"
                description="A celebration of self-indulgence, a fragrant ode to the joy of savouring life's sweet moments. Its timeless appeal beckons one to a world of pure, unadulterated pleasure."
                blogContent={blogContent}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    textAlign: 'left'
                }}
            />
        </div>
    );
};

export default BonBonReview;
