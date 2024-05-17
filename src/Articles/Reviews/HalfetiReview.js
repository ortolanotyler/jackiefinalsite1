import React from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';
import '../ExampleTutorial.css';
import TextReveal from '../../Components/TextReveal';

const halfeti1 = `${process.env.PUBLIC_URL}/Images/Halfeti1.png`;
const halfeti2 = `${process.env.PUBLIC_URL}/Images/Halfeti2.png`;

const Card = ({ title, description, blogContent }) => {
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

    return (
        <div>
            <div><TextReveal text={title} /></div>
            <div className="card" style={{ maxWidth: '100%', display: 'flex', textAlign: 'left', backgroundColor: 'white', color: 'black', fontFamily: 'GFS Didot, sans-serif' }}>
                <div className="blog-content" style={{ lineHeight: '1.25' }}>
                    <h1 style={headingStyle}>{title}</h1>
                    <h2 style={headingStyle}>{description}</h2>
                    {blogContent}
                </div>
            </div>
        </div>
    );
};

const HalfetiReview = () => {
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
        <div>
            <div style={{ marginTop: '10rem', textAlign: 'center' }}>
                <a href="/reviews" style={{ fontFamily: 'Arapey', fontSize: '1.5em', marginTop: '1em', lineHeight: '1.5rem', marginBottom: '2.5em', color: 'black', textDecoration: 'none' }}>
                    BEAUTY // REVIEWS // FRAGRANCES
                </a>
            </div>
            <div className="container" style={{ textAlign: 'left', maxWidth: '100%', margin: '20em', marginTop: '10rem' }}>
                <img src={halfeti1} alt="Halfeti Perfume 1" style={{ width: '100%' }} />
                <img src={halfeti2} alt="Halfeti Perfume 2" style={{ width: '100%' }} />

                <div style={{ fontFamily: 'GFS Didot, serif', textAlign: 'center', fontSize: '2rem' }}>
                    Perfume Name // Halfeti<br />
                    <br />
                    Brand // Penhaligon's<br />
               
                    <br />
                    Perfumers // Christian Provenzano<br />
                </div>

                <h2 style={headingStyle}>
                    ⭐ Background Information
                </h2>

                <p style={paragraphStyle}>
                    Halfeti by Penhaligon's is an aromatic voyage to the exotic trade routes of the East, capturing the essence of the rare black roses of Halfeti, Turkey. It's an opulent and heady scent that exudes luxury and mystery.
                </p>

                <h2 style={headingStyle}>
                    🌹 Fragrance Profile
                </h2>

                <table style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth: '100%', marginLeft: '1em', borderCollapse: 'collapse' }}>
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
                </table>

                <p style={paragraphStyle}>
                    Overall Scent Profile: Halfeti opens with a burst of citrus freshness, dominated by grapefruit and bergamot, before evolving into a spicy and floral heart. The base is warm and woody, with prominent notes of leather, oud, and amber, creating a rich and sophisticated scent that lingers on the skin.
                </p>

                <h2 style={headingStyle}>
                    💭 Personal First Impressions
                </h2>

                <p style={paragraphStyle}>
                    My first encounter with Halfeti was like stepping into a Turkish bazaar, surrounded by the intoxicating aroma of spices and roses. The fragrance transported me to a distant land, evoking images of bustling markets and ancient palaces.
                </p>

                <p style={paragraphStyle}>
                    What struck me most about Halfeti is its complexity and depth. It's a fragrance that unfolds gradually on the skin, revealing new layers and nuances with each wear. From the zesty opening to the smoky dry down, Halfeti is a journey of discovery that captivates the senses.
                </p>

                <p style={paragraphStyle}>
                    I was particularly drawn to the interplay between the fresh citrus notes and the warm, woody base. It's a contrast that adds intrigue and sophistication to the fragrance, making it suitable for both day and evening wear.
                </p>

                <h2 style={headingStyle}>
                    🌟 Review & Recommendations
                </h2>

                <p style={paragraphStyle}>
                    <strong>Longevity:</strong> Halfeti boasts excellent longevity, lasting well throughout the day with just a few spritzes. The fragrance develops beautifully over time, revealing different facets while maintaining its captivating aroma.
                </p>

                <p style={paragraphStyle}>
                    <strong>Sillage:</strong> The sillage of Halfeti is moderate to heavy, enveloping you in a fragrant cloud that garners compliments wherever you go. It leaves a lasting impression without being overpowering, making it suitable for various occasions.
                </p>

                <p style={paragraphStyle}>
                    Overall, Halfeti by Penhaligon's is a masterpiece of perfumery that transports you to a world of luxury and intrigue. Its rich and complex scent is sure to captivate the senses and leave a lasting impression on those around you. Whether you're exploring ancient souks or strolling through modern metropolises, Halfeti is the perfect companion for the discerning traveler.
                </p>
            </div>
        </div>
    );

    return (
        <div>
            <Card
                title="Halfeti by Penhaligon's Review"
                description="An Aromatic Voyage"
                blogContent={blogContent}
            />
            <Comments website-id={websiteId} page-id={'Halfeti'} />
        </div>
    );
};

export default HalfetiReview;
