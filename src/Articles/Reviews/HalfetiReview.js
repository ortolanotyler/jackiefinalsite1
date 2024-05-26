import React, { useRef } from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';
import './ExampleTutorial.css';
import TextReveal from '../../Components/TextReveal';
import DropCap from '../../Components/DropCap';
import ResponsiveIframe from '../../Components/ResponsiveIframe';

const title = `${process.env.PUBLIC_URL}/Images/Articles/HalfetiReview/halfetititle.png`;
const profile = `${process.env.PUBLIC_URL}/Images/Articles/HalfetiReview/halfetiprofile.png`;

const halfeti1 = `${process.env.PUBLIC_URL}/Images/Articles/HalfetiReview/Halfeti1.jpg`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
    <div>
        <div><TextReveal text='PERFUME PROFILE' /></div>
        <div className="card" style={{ maxWidth: '100%', display: 'flex', textAlign: 'left', backgroundColor: 'white', color: 'black', fontFamily: 'GFS Didot, sans-serif' }}>
            <div className="blog-content" style={{ lineHeight: '1.25' }}>{blogContent}</div>
        </div>
    </div>
);

const HalfetiReview = () => {
    const websiteId = '10910';
    const blogRef = useRef(null);


    const headingStyle = {
        textAlign: 'left',
        fontSize: '35px',
        fontWeight: 'normal',
        fontFamily: 'GFS Didot, serif',
        color: '#333',
        marginTop: '0.95rem',
        marginBottom: '0.95rem'
    };
  
    const paragraphStyle = {
        fontSize: '21px',
        fontFamily: 'GFS Didot, serif',
        margin: '5rem',
        marginTop: '3rem',
        marginBottom: '3rem',
        maxWidth: '100%',
        lineHeight: '1.5em'
    };

    const imageStyle = {
        display: 'block',
        margin: '0 auto',
        maxWidth: '100%',
        maxHeight: '900px',
        objectFit: 'cover',
    };

    const smallImageStyle = {
        display: 'block',
        margin: '0 1rem 1rem 0',
        float: 'left',
        maxWidth: '40%',
        height: 'auto'
    };

    const blogContent = (
        <div className="container" style={{ lineHeight: '2.25rem', maxWidth: '100%', margin: '27rem', marginTop: '5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
                <a href="/reviews" style={{ fontFamily: 'Arapey', fontSize: '1.5em', color: 'black', textDecoration: 'none' }}>
                    BEAUTY // REVIEWS
                </a>
            </div>



            <img src={title} alt="Halfeti Perfume 1" style={{ width: '100%' }} />

            <img src={halfeti1} alt="Halfeti Perfume 1" style={{ width: '100%' }} />
            <p style={{ fontSize: '1rem', fontFamily: 'Arapey, sans-serif', maxWidth: '100%', textAlign: 'center', fontStyle: 'italic' }}>
                All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
            </p>
            <img src={profile} alt="Halfeti Perfume 1" style={{ width: '100%' }} />

         
            
            <div style={{ textAlign: 'center', fontSize: '22px', marginTop: '5rem', fontFamily: 'GFS Didot, serif' }}>
    Perfume Name: <strong>Halfeti</strong>
    <br /><br />
    Brand: <strong>Penhaligon’s</strong>
    <br /><br />
    Year of Release: <strong>2015</strong>
    <br /><br />
    Perfumers: <strong>Christian Provenzano</strong>
    <br /><br />
    Price: <strong>100 ml - $290 USD</strong>
</div>

            
            <br></br>
            <br></br>
         
            
        
            
            
            <h2 style={headingStyle}> 🍃 Fragrance Profile</h2>
            
            <table style={{ fontSize: '20px', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                    <tr>
                        <td><strong>Concentration:</strong></td>
                        <td>Eau de Parfum Spray</td>
                    </tr>
                    <tr>
                        <td><strong>Fragrance Family:</strong></td>
                        <td>Oriental Spicy</td>
                    </tr>
                    <tr>
                        <td><strong>Top Notes:</strong></td>
                        <td>Grapefruit, Bergamot, Green Notes, Artemisia, Cypress, Saffron</td>
                    </tr>
                    <tr>
                        <td><strong>Heart/Middle Notes:</strong></td>
                        <td>Geranium, Jasmine, Rose, Nutmeg, Cardamom, Lavender, Cumin</td>
                    </tr>
                    <tr>
                        <td><strong>Base Notes:</strong></td>
                        <td>Leather, Oud, Amber, Vetiver, Cedar, Myrrh, Tonka Bean, Vanilla, Patchouli</td>
                    </tr>
                </tbody>
            </table>
            <h2 style={headingStyle}> 🥀 Background Information</h2>
<p style={paragraphStyle}>
            Halfeti by Penhaligon's is an aromatic voyage to the exotic trade routes of the East, capturing the essence of the rare black roses of Halfeti, Turkey. It's an opulent and heady scent that exudes luxury and mystery.
</p>
            <p style={paragraphStyle}>
                Overall Scent Profile: Halfeti opens with a burst of citrus freshness, dominated by grapefruit and bergamot, before evolving into a spicy and floral heart. The base is warm and woody, with prominent notes of leather, oud, and amber, creating a rich and sophisticated scent that lingers on the skin.
            </p>
            
            <h2 style={headingStyle}> 🗺️ Personal First Impressions</h2>
            
          
            
            <p style={paragraphStyle}>
            My first encounter with Penhaligon's fragrances was when I received a tester set featuring a variety of scents from this iconic British perfume house. Among them, Halfeti stood out and quickly became a favorite for both my husband and I. As a unisex fragrance, it boasts a rich, exotic, and distinct aroma. The "Trade Routes" collection from Penhaligon's draws inspiration from various destinations, and although I've never visited Halfeti, Turkey, this particular fragrance transports me to what I imagine a warm and vibrant night bazaar might smell like.
                        </p>
            
            <p style={paragraphStyle}>
            Out of the many Penhaligon's perfumes I've tried, Halfeti is one that I've often chosen as a gift for other women, particularly older women as it is quite a mature scent, and it's the one I've personally depleted most frequently. Its uniqueness and relative obscurity often earn me compliments and inquisitive queries about the scent I'm wearing. I don’t gatekeep, but you sure can 😉
                        </p>

                        <p style={paragraphStyle}>
                        I recommend visiting a Penhaligon’s boutique or your nearest Nordstrom or Saks Fifth Avenue to experience Halfeti for yourself. It might be challenging to envision how the enchanting combination of notes comes together, but they do so in a bold and alluring manner that is simply irresistible. You’ll smell expensive with this deeply rich scent, and that is what you pay for with Penhaligon’s!
                        </p>

                        <ResponsiveIframe src="https://shopmy.us/collections/public/557984?noHeader=true" title="Final Touches" />

            
            <h2 style={headingStyle}>❤️ Review & Recommendations</h2>
            
            <p style={paragraphStyle}>
                <strong>Longevity:</strong> Halfeti boasts excellent longevity, lasting well throughout the day with just a few spritzes. The fragrance develops beautifully over time, revealing different facets while maintaining its captivating aroma.
            </p>
            
            <p style={paragraphStyle}>
                <strong>Sillage:</strong> The sillage of Halfeti is moderate to heavy, enveloping you in a fragrant cloud that garners compliments wherever you go. It leaves a lasting impression without being overpowering, making it suitable for various occasions.
            </p>
            
            <p style={paragraphStyle}>
            <strong>Occasions and Seasonality: </strong> Halfeti's depth and warmth make it perfect for cooler seasons, and its boldness suits formal events or evenings when you want to make a statement.            </p>
            
            <h2 style={headingStyle}> ⚖ Comparisons
            </h2>

            <p style={paragraphStyle}>
            Those who favor bold, oriental fragrances like Tom Ford's Oud Wood or Jo Malone's Oud & Bergamot
might find a familiar allure in Halfeti. Yet, Penhaligon's offering stands out with its unique blend of Turkish florals and spices..
            </p>

            <h2 style={headingStyle}>📝  Final Thoughts
            </h2>

            <p style={paragraphStyle}>
          <strong>Pros and Cons:</strong> The blend of exotic spices and florals might be intense for those who prefer lighter scents. But
for lovers of rich, complex fragrances, Halfeti is a treasure.
            </p>
            <p style={paragraphStyle}>
            <strong>Value for Money: </strong> Given its complexity and longevity, Halfeti is a worthy indulgence for those who appreciate niche perfumery..

            </p>

            <p style={paragraphStyle}>
            <strong>Who Would Enjoy It:</strong> A signature scent for the bold and adventurous, it's for those who aren't afraid to stand out. I personally feel like this is a more mature fragrance.
            </p>

            <p style={paragraphStyle}>
            <strong> Conclusion: </strong>Halfeti by Penhaligon's is a fragrant masterpiece, weaving together the essence of the East with British perfumery's finesse. It's a scent that promises to transport you to another world, one spritz at a time.

            </p>

            <p style={paragraphStyle}>
Have you experienced the allure of Halfeti by Penhaligon's? Share your thoughts below.
            </p>


            <img src={signature} alt="Signature" style={{ width: '100%' }} />
            <Comments website-id={websiteId} page-id="Halfeti" />

        </div>
    );

    return (
        <div ref={blogRef}>
            <Card
                title="HALFETI // PENHALIGON'S"
                description="An Aromatic Voyage"
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

export default HalfetiReview;
