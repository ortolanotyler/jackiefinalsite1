import React from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';
import '../ExampleTutorial.css';
import TextReveal from '../../Components/TextReveal';

const jicky2 = `${process.env.PUBLIC_URL}/Images/Articles/JickyReview/Jicky2.jpg`;
const jicky1 = `${process.env.PUBLIC_URL}/Images/Articles/JickyReview/JickyTitle.png`;
const jicky3 = `${process.env.PUBLIC_URL}/Images/Articles/JickyReview/Jicky3.png`;

const Signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => {
    return (
        <div>
            <div><TextReveal text="JICKY  // GUERLAIN" /></div>
            <div className="card" style={{ maxWidth: '100%', display: 'flex', textAlign: 'left', backgroundColor: 'white', color: 'black', fontFamily: 'GFS Didot, sans-serif' }}>
                <div className="blog-content" style={{ lineHeight: '1.5' }}>{blogContent}</div>
            </div>
        </div>
    );
};

const JickyReview = () => {
    const websiteId = "10910";

    const headingStyle = {
        textAlign: 'center',
        fontSize: '2.5rem',
        fontFamily: 'GFS Didot, serif',
        margin: '1em',
        maxWidth: '100%',
        marginLeft: '0em'
    };

    const paragraphStyle = {
        fontSize: '1.5rem',
        fontFamily: 'GFS Didot, serif',
        margin: '1em',
        maxWidth: '100%',
        marginLeft: '1em'
    };

    const blogContent = (
       
            <div style={{ margin: '10rem', marginTop: '10rem', textAlign: 'center' }}>
                 <div>
                <a href="/reviews" style={{ fontFamily: 'Arapey', fontSize: '1.5em',  lineHeight: '1.5rem',color: 'black', textDecoration: 'none' }}>
                    BEAUTY // REVIEWS // FRAGRANCES
                </a>
            </div>
            <div className="container" style={{ textAlign: 'left', maxWidth: '100%', margin: '20rem', marginTop: '10rem' }}>
                <img src={jicky1} alt="Jicky Perfume 1" style={{ width: '100%' }} />
                <img src={jicky2} alt="Jicky Perfume 2" style={{ width: '100%' }} />
                <div>

<p style={{ fontSize: '1rem', fontFamily: 'Arapey, sans-serif', maxWidth: '100%', textAlign:'center', fontStyle: 'italic' }}>
All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
</p>
 </div>
                <div style={{ fontFamily: 'GFS Didot, serif', textAlign: 'center', fontSize: '2rem', marginTop: '5rem' }}>
                    Perfume Name: Jicky<br />
                    <br />
                    Brand: Guerlain<br />
                    <br />
                    Year of Release: 1889<br />
                    <br />
                    Perfumers: Aimé Guerlain<br />
                </div>

                <p style={paragraphStyle}>
                    Price: Jicky by Guerlain in the Eau de Parfum concentration: <br />
                    <strong>
                        75 ml (2.53 oz) - $150.00 USD
                    </strong>
                </p>

                <h2 style={headingStyle}>
                    ⭐ Background Information
                </h2>

                <p style={paragraphStyle}>
                    <span style={{ color: '#745B4F', float: 'left', fontSize: '5rem', lineHeight: '0.9', marginRight: '0.05em', marginTop: '0.01em' }}>J</span>icky by Guerlain stands as one of the oldest perfumes in continuous
                    production, a testament to its timeless appeal. Conceived by Aimé Guerlain
                    in the late 19th century, Jicky is a revolutionary fragrance that harmoniously
                    blends the freshness of lavender and citrus with a warm, spicy undertone,
                    making it a precursor to modern perfumery.
                </p>

                <p style={paragraphStyle}>
                    There is both the Jicky by Guerlain Eau de Parfum concentration, and Eau
                    de Toilette which have different bottles and potency. Guerlain maintains the
                    integrity and signature of Jicky across both formulations. The differences
                    cater to varying preferences in fragrance intensity and longevity, I personally
                    have the Eau De Toilette though it can only be found on eBay as it has been
                    discontinued (prices start at $200 USD!🐝 )
                </p>

                <img src={jicky3} alt="Jicky Perfume 3" style={{ width: '100%' }} />

                <h2 style={headingStyle}>
                    🍋 Fragrance Profile
                </h2>

                <p style={paragraphStyle}>
                    Concentration: Eau de Toilette Spray
                    Fragrance Family: Oriental Fougère
                    Top Notes: Bergamont, Rosemary, Lemon, Mandarin Orange
                    Heart/Middle Notes: Lavender, Orris Root, Tonka Bean, Basil
                    and Jasmine
                    Base Notes: Vanilla, Spices, Leather, Amber, Sandalwood,
                    Palisander Rosewood
                </p>

                <p style={paragraphStyle}>
                    Overall Scent Profile: Jicky is an enigmatic blend of vibrant top notes
                    and a mysterious, deep base. Its opening is fresh and inviting, quickly
                    evolving into a complex, spicy heart, and settling into a rich, warm embrace
                    of vanilla and woods. This duality makes Jicky both refreshing and
                    comforting masterpiece.
                </p>

                <h2 style={headingStyle}>
                    👱 Personal First Impressions:
                </h2>

                <p style={paragraphStyle}>
                    My introduction to Jicky was inspired by the beautiful and bohemian
                    Sharon Tate. While preparing for a Sharon Tate-inspired makeup tutorial, I
                    discovered her fondness for Jicky by Guerlain, alongside Chanel No. 5.
                </p>

                <p style={paragraphStyle}>
                    Although Chanel No. 5's heavy florals are iconic, I found myself drawn to
                    Jicky for its unique blend of masculine and feminine notes, and notably, its
                    powdery finish that distinguishes it from the floral dominance of Chanel
                    No. 5.
                </p>

                <p style={paragraphStyle}>
                    Jicky’s harmonious balance and warm, powdery essence make it a versatile
                    and endearing fragrance. Penhaligon’s Trade Routes fragrances rank
                    among my all-time favourites, and Jicky shares a similar boldness but is
                    somewhat more affordable.
                </p>

                <p style={paragraphStyle}>
                    This distinctive fragrance begins with light and feminine notes of lavender,
                    lemon, and mandarin, eventually settling into a base of vanilla, spices, and
                    sandalwood—some of my favorite base notes. Jicky not only holds historical
                    significance, often considered the first modern perfume in history, but it also
                    transcends trends with a fresh, warm, powdery finish. I recommend this
                    fragrance for those seeking a mature scent. By that, I mean it might not have
                    been my choice as a teenager, but in adulthood, it has become a cherished
                    go-to fragrance I absolutely adore.
                </p>

                <h2 style={headingStyle}>
                    💗 Review & Recommendations
                </h2>

                <p style={paragraphStyle}>
                    Longevity: Remarkably long-lasting, Jicky can easily carry you through the
                    day into the evening.
                </p>

                <p style={paragraphStyle}>
                    <strong>
                        Sillage:
                    </strong>  Moderate but noticeable, it leaves a subtle, intriguing trail that
                    invites closer attention.
                </p>

                <p style={paragraphStyle}>
                    Occasions and Seasonality: Halfeti's depth and warmth make it perfect for cooler seasons, and its boldness suits formal events or evenings when you want to make a statement.
                </p>

                <h2 style={headingStyle}>Final Thoughts</h2>
                <p style={paragraphStyle}>
                    Pros and Cons: The blend of exotic spices and florals might be intense for those who prefer lighter scents. But for lovers of rich, complex fragrances, Halfeti is a treasure.
                </p>
                <p style={paragraphStyle}>
                    Value for Money: Given its complexity and longevity, Halfeti is a worthy indulgence for those who appreciate niche perfumery.
                </p>
                <p style={paragraphStyle}>
                    Who Would Enjoy It: A signature scent for the bold and adventurous, it's for those who aren't afraid to stand out. I personally feel like this is a more mature fragrance.
                </p>
                <p style={paragraphStyle}>
                    Conclusion: Halfeti by Penhaligon's is a fragrant masterpiece, weaving together the essence of the East with British perfumery's finesse. It's a scent that promises to transport you to another world, one spritz at a time. Have you experienced the allure of Halfeti by Penhaligon's? Share your thoughts below!
                </p>

                <img src={Signature} alt="Jicky Signature" style={{ width: '100%' }} />

            </div>
        </div>
    );

    return (
        <div>
            <Card
                title="Jicky by Guerlain Perfume Review"
                description="A Timeless Elegance and Pioneering Spirit"
                blogContent={blogContent}
            />
            <Comments website-id={websiteId} page-id={'jicky'} />
        </div>
    );
};

export default JickyReview;
