import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';
import { Comments } from '@hyvor/hyvor-talk-react';
import './ExampleTutorial.css';
import TextReveal from '../../Components/TextReveal';
import ResponsiveIframe from '../../Components/ResponsiveIframe';

ReactGA.initialize('UA-8215441435-Y'); // Replace with your actual Google Analytics tracking ID

const jicky2 = `${process.env.PUBLIC_URL}/Images/Articles/JickyReview/Jicky2.jpg`;
const title = `${process.env.PUBLIC_URL}/Images/Articles/JickyReview/JickyTitle.png`;
const jicky3 = `${process.env.PUBLIC_URL}/Images/Articles/JickyReview/Jicky3.png`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
    <div className="card">
        <div className="blog-content">{blogContent}</div>
    </div>
);

const JickyReview = () => {
    const websiteId = '10910';
    const blogRef = useRef(null);

    const headingStyle = {
        textAlign: 'center',
        fontSize: '40px',
        fontWeight: 'normal',
        fontFamily: 'Arapey, serif',
        color: '#333',
        margin: '1.5rem'
    };

    const paragraphStyle = {
        fontSize: '22px',
        fontFamily: 'GFS Didot, serif',
        margin: '1rem 1.5rem',
        marginTop: '1rem',
        marginBottom: '1rem',
        maxWidth: '500px',
        lineHeight: '1.75',
        marginLeft: 'auto',
        marginRight: 'auto',
    };

    const imageContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    };

    const imageStyle = {
        width: '100%',
        maxWidth: '650px',
    };

    const blogContent = (
        <div className="container" style={{ width: '100%', padding: '1rem' }}>
            <Helmet>
                <title>Jicky by Guerlain Perfume Review - Jackie Wyers</title>
                <meta name="description" content="A comprehensive review of Jicky by Guerlain, exploring its history, fragrance profile, and personal impressions." />
            </Helmet>
            {ReactGA.pageview(window.location.pathname + window.location.search)}

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25vh' }}>
                <a href="/reviews" style={{ fontFamily: 'Arapey', fontSize: '1.25em', color: 'black', textDecoration: 'none' }}>
                    BEAUTY // REVIEWS
                </a>
            </div>
            <img src={title} alt="Sophia Loren in Arabesque" style={imageStyle} />

            <div style={imageContainerStyle}>
                <img src={jicky2} alt="Sophia Loren in Arabesque" style={imageStyle} />
            </div>

            <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '1rem 0', fontStyle: 'italic' }}>
                All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
            </p>

            <h2 style={headingStyle}>🐝 Perfume Profile</h2>

            <div style={{ textAlign: 'center', fontSize: '1.25rem', fontFamily: 'GFS Didot, serif', margin: '1rem 1' }}>
                Perfume Name: <strong>Jicky</strong><br /><br />
                Brand: <strong>Guerlain</strong><br /><br />
                Year of Release: <strong>1889</strong><br /><br />
                Perfumer: <strong>Aimé Guerlain</strong><br /><br />
                Price for Eau de Parfum concentration: <strong>75 ml (2.53 oz) - $150.00 USD</strong>
            </div>

            <h2 style={headingStyle}>⭐️ Background Information</h2>

            <p style={paragraphStyle}>
                Jicky by Guerlain stands as one of the oldest perfumes in continuous production, a testament to its timeless appeal. Conceived by Aimé Guerlain in the late 19th century, Jicky is a revolutionary fragrance that harmoniously blends the freshness of lavender and citrus with a warm, spicy undertone, making it a precursor to modern perfumery.
            </p>

            <p style={paragraphStyle}>
                There is both the Jicky by Guerlain Eau de Parfum concentration, and Eau de Toilette which have different bottles and potency. Guerlain maintains the integrity and signature of Jicky across both formulations. The differences cater to varying preferences in fragrance intensity and longevity, I personally have the Eau De Toilette though it can only be found on eBay as it has been discontinued (prices start at $200 USD!🐝 )
            </p>

            <a href="https://www.guerlain.com/ca/en-ca/p/les-legendaires-jicky---eau-de-parfum-P014315.html?v=G014315" target="_blank" rel="noopener noreferrer">
                <img src={jicky3} alt="Jicky Perfume 2" style={imageStyle} />
            </a>

            <h2 style={headingStyle}>🍋 Fragrance Profile</h2>

            <div style={{ textAlign: 'center', fontSize: '1.25rem', fontFamily: 'GFS Didot, serif', margin: '1rem 1' }}>
                Concentration: <strong>Eau de Toilette Spray</strong><br /><br />
                Fragrance Family: <strong>Oriental Fougère</strong><br /><br />
                Top Notes: <strong>Bergamot, Rosemary, Lemon, Mandarin Orange</strong><br /><br />
                Heart/Middle Notes: <strong>Lavender, Orris Root, Tonka Bean, Basil and Jasmine</strong><br /><br />
                Base Notes: <strong>Vanilla, Spices, Leather, Amber, Sandalwood, Palisander Rosewood</strong>
            </div>

            <p style={paragraphStyle}>
                Overall Scent Profile: Jicky is an enigmatic blend of vibrant top notes and a mysterious, deep base. Its opening is fresh and inviting, quickly evolving into a complex, spicy heart, and settling into a rich, warm embrace of vanilla and woods. This duality makes Jicky both refreshing and comforting masterpiece.
            </p>

            <h2 style={headingStyle}>👧 Personal First Impressions</h2>
            <p style={paragraphStyle}>
                My introduction to Jicky was inspired by the beautiful and bohemian Sharon Tate. While preparing for a <a href="/iconicsharon" style={{ color: 'black', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer" >Sharon Tate-inspired makeup tutorial</a>, I discovered her fondness for Jicky by Guerlain, alongside Chanel No. 5.
            </p>

            <p style={paragraphStyle}>
                Although Chanel No. 5's heavy florals are iconic, I found myself drawn to Jicky for its unique blend of masculine and feminine notes, and notably, its powdery finish that distinguishes it from the floral dominance of Chanel No. 5.
            </p>

            <p style={paragraphStyle}>
                Jicky’s harmonious balance and warm, powdery essence make it a versatile and endearing fragrance. Penhaligon’s Trade Routes fragrances rank among my all-time favourites, and Jicky shares a similar boldness but is somewhat more affordable.
            </p>

            <p style={paragraphStyle}>
                This distinctive fragrance begins with light and feminine notes of lavender, lemon, and mandarin, eventually settling into a base of vanilla, spices, and sandalwood—some of my favorite base notes. Jicky not only holds historical significance, often considered the first modern perfume in history, but it also transcends trends with a fresh, warm, powdery finish. I recommend this fragrance for those seeking a mature scent. By that, I mean it might not have been my choice as a teenager, but in adulthood, it has become a cherished go-to fragrance I absolutely adore.
            </p>

            <ResponsiveIframe src="https://shopmy.us/collections/public/557947?noHeader=true" title="Final Touches" scrolling="no" />

            <h2 style={headingStyle}>❤️ Review & Recommendations</h2>

            <p style={paragraphStyle}>
                <strong>Longevity:</strong> Remarkably long-lasting, Jicky can easily carry you through the day into the evening.<br />
                <br />
                <strong>Sillage:</strong> Moderate but noticeable, it leaves a subtle, intriguing trail that invites closer attention.<br />
                <br />
                <strong>Occasions and Seasonality:</strong> Jicky's versatility makes it suitable for all seasons, shining particularly well in the transitional periods of spring and fall. It's ideal for both casual daytime wear and more formal evening settings.
            </p>

            <h2 style={headingStyle}>Comparisons</h2>
            <p style={paragraphStyle}>
                Jicky often draws comparisons to other classic fragrances like Chanel No. 5, but remains in a category of its own due to its historical significance and unique composition. The fragrance retains a distinct character that is unmistakably Guerlain.
            </p>

            <ResponsiveIframe src="https://shopmy.us/collections/public/557963?noHeader=true" title="Final Touches" />

            <h2 style={headingStyle}>📝 Final Thoughts</h2>

            <p style={paragraphStyle}>
                <strong>Pros and Cons:</strong> While Jicky's unconventional blend might not appeal to those who favor straightforward, modern fragrances, its allure lies in its complexity and historical richness. It’s also a fragrance that needs to dry down to understand the appeal - don’t judge after the initial spray!<br />
                <br />
                <strong>Value for Money:</strong> Considering its iconic status and the quality of ingredients, Jicky represents a significant investment in the art of perfumery. I personally love the eau de toilette and luckily found my bottle on Amazon making it a convenient buy. Looks to be only on Ebay and Etsy have any bee bottles currently.<br />
                <br />
                <strong>Who Would Enjoy It:</strong> Ideal for the fragrance connoisseur and the adventurous spirit, Jicky suits those who appreciate a fragrance with depth, history, and a powdery finish.
            </p>

            <p style={paragraphStyle}>
                <strong>Conclusion:</strong> Jicky by Guerlain has an enduring popularity which is a tribute to its timeless elegance and pioneering spirit. Sharon Tate has fabulous taste!
            </p>

            <p style={paragraphStyle}>
                Have you explored the historic allure of Jicky by Guerlain? Share your thoughts and experiences below.
            </p>

            <img src={signature} alt="Jicky Signature" style={{ width: '100%' }} />
            <Comments website-id={websiteId} page-id="jicky" />
        </div>
    );

    return (
        <div>
            <div><TextReveal text='PERFUME PROFILE' /></div>
            <div ref={blogRef} style={{ width: '100%', maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
                <Card
                    title="Jicky by Guerlain Perfume Review"
                    description="A Timeless Elegance and Pioneering Spirit"
                    blogContent={blogContent}
                />
            </div>
        </div>
    );
};

export default JickyReview;
