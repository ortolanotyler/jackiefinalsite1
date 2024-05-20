import React, { useRef } from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';
import './ExampleTutorial.css';
import TextReveal from '../../Components/TextReveal';
import SubscribeButton from '../../Components/SubscribeButton';
import DropCap from '../../Components/DropCap';

const jicky2 = `${process.env.PUBLIC_URL}/Images/Articles/JickyReview/Jicky2.jpg`;
const jicky1 = `${process.env.PUBLIC_URL}/Images/Articles/JickyReview/JickyTitle.png`;
const jicky3 = `${process.env.PUBLIC_URL}/Images/Articles/JickyReview/Jicky3.png`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => {
    return (
        <div>
            <div><TextReveal text="JICKY // GUERLAIN" /></div>
            <div className="card" style={{ maxWidth: '100%', display: 'flex', textAlign: 'left', backgroundColor: 'white', color: 'black', fontFamily: 'GFS Didot, sans-serif' }}>
                <div className="blog-content" style={{ lineHeight: '1.2' }}>{blogContent}</div>
            </div>
        </div>
    );
};

const JickyReview = () => {
    const websiteId = "10910";
    const blogRef = useRef(null);

    const headingStyle = {
        textAlign: 'center',
        fontSize: '2.5rem',
        fontWeight: 'normal',
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
            <img src={jicky1} alt="Jicky Perfume 1" style={{ width: '100%' }} />
        
            
            <DropCap text="Jicky by Guerlain stands as one of the oldest perfumes in continuous production, a testament to its timeless appeal. Conceived by Aimé Guerlain in the late 19th century, Jicky is a revolutionary fragrance that harmoniously blends the freshness of lavender and citrus with a warm, spicy undertone, making it a precursor to modern perfumery." />
            
            <h2 style={headingStyle}>Perfume Information</h2>
            
            <div style={{ textAlign: 'center', fontSize: '2rem', marginTop: '5rem', fontFamily: 'GFS Didot, serif' }}>
                Perfume Name: Jicky<br /><br />
                Brand: Guerlain<br /><br />
                Year of Release: 1889<br /><br />
                Perfumers: Aimé Guerlain<br />
            </div>
            
            <p style={paragraphStyle}>
                Price for Eau de Parfum concentration:<br />
                <strong>75 ml (2.53 oz) -</strong> $150.00 USD
            </p>
            
            <h2 style={headingStyle}>Background Information</h2>
            
            <p style={paragraphStyle}>
                Jicky by Guerlain stands as one of the oldest perfumes in continuous production, a testament to its timeless appeal. Conceived by Aimé Guerlain in the late 19th century, Jicky is a revolutionary fragrance that harmoniously blends the freshness of lavender and citrus with a warm, spicy undertone, making it a precursor to modern perfumery.
            </p>
            
            <img src={jicky2} alt="Jicky Perfume 2" style={{ width: '100%' }} />
            
            <h2 style={headingStyle}>Fragrance Profile</h2>
            
            <p style={paragraphStyle}>
                Concentration: Eau de Toilette Spray<br />
                Fragrance Family: Oriental Fougère<br />
                Top Notes: Bergamont, Rosemary, Lemon, Mandarin Orange<br />
                Heart/Middle Notes: Lavender, Orris Root, Tonka Bean, Basil and Jasmine<br />
                Base Notes: Vanilla, Spices, Leather, Amber, Sandalwood, Palisander Rosewood<br />
            </p>
            
            <p style={paragraphStyle}>
                Overall Scent Profile: Jicky is an enigmatic blend of vibrant top notes and a mysterious, deep base. Its opening is fresh and inviting, quickly evolving into a complex, spicy heart, and settling into a rich, warm embrace of vanilla and woods. This duality makes Jicky both refreshing and comforting masterpiece.
            </p>
            
            <h2 style={headingStyle}>Personal First Impressions</h2>
            
            <p style={paragraphStyle}>
                My introduction to Jicky was inspired by the beautiful and bohemian Sharon Tate. While preparing for a Sharon Tate-inspired makeup tutorial, I discovered her fondness for Jicky by Guerlain, alongside Chanel No. 5.
            </p>
            
            <p style={paragraphStyle}>
                Although Chanel No. 5's heavy florals are iconic, I found myself drawn to Jicky for its unique blend of masculine and feminine notes, and notably, its powdery finish that distinguishes it from the floral dominance of Chanel No. 5.
            </p>
            
            <p style={paragraphStyle}>
                Jicky’s harmonious balance and warm, powdery essence make it a versatile and endearing fragrance. Penhaligon’s Trade Routes fragrances rank among my all-time favourites, and Jicky shares a similar boldness but is somewhat more affordable.
            </p>
            
            <img src={jicky3} alt="Jicky Perfume 3" style={{ width: '100%' }} />
            
            <h2 style={headingStyle}>Review & Recommendations</h2>
            
            <p style={paragraphStyle}>
                Longevity: Remarkably long-lasting, Jicky can easily carry you through the day into the evening.<br />
                <strong>Sillage:</strong> Moderate but noticeable, it leaves a subtle, intriguing trail that invites closer attention.<br />
                Occasions and Seasonality: Halfeti's depth and warmth make it perfect for cooler seasons, and its boldness suits formal events or evenings when you want to make a statement.
            </p>
            
            <h2 style={headingStyle}>Final Thoughts</h2>
            
            <p style={paragraphStyle}>
                Pros and Cons: The blend of exotic spices and florals might be intense for those who prefer lighter scents. But for lovers of rich, complex fragrances, Halfeti is a treasure.<br />
                Value for Money: Given its complexity and longevity, Halfeti is a worthy indulgence for those who appreciate niche perfumery.<br />
                Who Would Enjoy It: A signature scent for the bold and adventurous, it's for those who aren't afraid to stand out. I personally feel like this is a more mature fragrance.
            </p>
            
            <p style={paragraphStyle}>
                Conclusion: Halfeti by Penhaligon's is a fragrant masterpiece, weaving together the essence of the East with British perfumery's finesse. It's a scent that promises to transport you to another world, one spritz at a time. Have you experienced the allure of Halfeti by Penhaligon's? Share your thoughts below!
            </p>
            
            <img src={signature} alt="Jicky Signature" style={{ width: '100%' }} />
        </div>
    );

    return (
        <div ref={blogRef}>
            <Card
                title="Jicky by Guerlain Perfume Review"
                description="A Timeless Elegance and Pioneering Spirit"
                blogContent={blogContent}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    textAlign: 'left'
                }}
            />
            <Comments website-id={websiteId} page-id="jicky" />
        </div>
    );
};

export default JickyReview;
