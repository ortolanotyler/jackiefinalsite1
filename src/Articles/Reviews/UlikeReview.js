import React, { useEffect, useRef, useState } from 'react';
import '../ExampleTutorial.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import TextReveal from '../../Components/TextReveal';

const Ulike1 = `${process.env.PUBLIC_URL}/Images/ulike1a.png`;
const Ulike2 = `${process.env.PUBLIC_URL}/Images/ulike2a.png`;

const Card = ({ blogContent }) => {
    return (
        <div className="card" style={{ maxWidth: '100%', display: 'flex', textAlign: 'left', backgroundColor: '#fff', color: 'black', fontFamily: 'GFS Didot, sans-serif' }}>
            <div className="blog-content" style={{ lineHeight: '1.3' }}>{blogContent}</div>
        </div>
    );
};

const UlikeReview = () => {
    const websiteId = "10910";
    const blogRef = useRef(null);
    const [titles, setTitles] = useState({
        backgroundInfo: 'Background Information',
        deviceProfile: 'Device Profile',
        uniqueness: 'What Makes the Ulike Air 10 Different?',
        firstImpressions: 'Personal First Impressions',
        review: 'Review & Recommendations',
        comparisons: 'Comparisons',
        prosAndCons: 'Pros and Cons',
        conclusion: 'Conclusion'
    });

    const updateTitle = (key, newTitle) => {
        setTitles(prevTitles => ({
            ...prevTitles,
            [key]: newTitle
        }));
    };

    const headingStyle = {
        fontSize: '3rem', // Bigger size
        fontWeight: 'normal', // Less bold
        fontFamily: 'Arapey, serif', // Optional: adjust the font family to something more elegant if preferred
        color: '#333', // Dark grey for better readability
        marginBottom: '0.5em' // Space below the heading
    };

    const blogContent = (
        <div className="container" style={{ lineHeight: '2.5em', maxWidth: '100%', margin: '20rem', padding: '5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '12vh' }}>
            <a href="/reviews" style={{ fontFamily: 'Arapey', fontSize: '1.5em', marginTop: '1em', lineHeight: '1.5rem', marginBottom: '2.5em', color: 'black', textDecoration: 'none' }}>                    BEAUTY // PRODUCTS // REVIEWS
                </a>
            </div>
            <img src={Ulike1} alt="Ulike Air 10 - Beauty product" style={{ width: '100%' }} />
            <img src={Ulike2} alt="Ulike Air 10 - Beauty product" style={{ width: '100%' }} />

            <h2 style={headingStyle}>{'\u{1F64B}'} {titles.backgroundInfo}</h2>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth: '100%', marginLeft: '0em' }}>
            "Discover the revolutionary Ulike Air 10, an at-home hair removal device that
employs state-of-the-art DualLight technology. As the market leader in IPL
devices, it offers those seeking a pain-free and effective hair removal
solution a taste of professional-grade skincare without leaving home"            </p>

            <h2 style={headingStyle}>{'\u{1F506}'} {titles.deviceProfile}</h2>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth: '100%', marginLeft: '0em' }}>
                Type: IPL (Intense Pulsed Light) Hair Removal Device<br />
                Features:<br />
                - DualLight Technology: Enhanced efficacy for faster results<br />
                - SkinSensor Technology: Ensures safe use across various skin tones<br />
                - Modes: 4 smart treatment modes tailored for different hair removal needs<br />
                - Safety Standards: FDA-approved, certified safe by international standards
            </p>

            <h2 style={headingStyle}>{'\u{1F49C}'} {titles.uniqueness}</h2>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth: '100%', marginLeft: '0em' }}>
            The Ulike Air 10 takes a comprehensive approach to hair removal. Featuring
a built-in SkinSensor, it adjusts light intensity to safely match your skin
tone, ensuring optimal safety without compromising effectiveness. Its
cooling system and multiple mode settings offer a customizable experience
that maximizes both comfort and results.            </p>

            <h2 style={headingStyle}>{'\u{1F471}'} {titles.firstImpressions}</h2>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth: '100%', marginLeft: '0em' }}>
                From the outset, the Ulike Air 10 impresses with its ease of use and painfree performance. It stands out for its quick setup and intuitive design, facilitating a hassle-free route to smoother skin. Its ability to significantly reduce hair regrowth within just a week is particularly noteworthy.
            </p>

            <h2 style={headingStyle}>{'\u{1F497}'} {titles.review}</h2>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth: '100%', marginLeft: '0em' }}>
                Effectiveness: Quickly delivers visible results, reducing hair regrowth with continued use.
                User Experience: Offers a painless and comfortable treatment, outperforming traditional methods like waxing and laser hair removal.
                Occasions and Suitability: Ideal for regular use at home, perfect for all body areas including underarms, legs, arms, and bikini line.
            </p>
            
            <h2 style={headingStyle}>{'\u{1F4AF}'} {titles.comparisons}</h2>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth: '100%', marginLeft: '0em' }}>
                Unlike traditional hair removal methods that often cause discomfort and require frequent salon visits, the Ulike Air 10 provides a more comfortable and private experience at home. Its IPL technology is also less painful and more adaptable than conventional laser treatments, making it appealing to a broader range of users.
            </p>

            <h2 style={headingStyle}>{'\u{1F44D}'} {titles.prosAndCons}</h2>
            {/* Same grid layout as before */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr', // Two equal columns
                gap: '20px', // Space between columns
                fontSize: '1.5rem',
                fontFamily: 'GFS Didot, serif',
                margin: '1em',
                maxWidth: '100%',
                marginLeft: '0em'
            }}>
                <div>
                    <h3>Major Advantage</h3>
                    <p>Non-Invasive, Gentle Approach</p>
                    <p>The Ulike Air 10's IPL technology is less invasive than traditional laser treatments and other hair removal methods, reducing the risk of skin irritation and pain. This gentle approach allows for a less aggressive yet effective hair removal process.</p>
                </div>
                <div>
                    <h3>Limitation</h3>
                    <p>Gradual Effectiveness</p>
                    <p>Unlike immediate-result treatments like waxing, the IPL technology in the Ulike Air 10 gradually reduces hair growth. Visible results are achieved over multiple sessions, which might not satisfy users looking for quick fixes.</p>
                </div>
            </div>

            <h2 style={headingStyle}>{'\u{1F3C6}'} {titles.conclusion}</h2>
            <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth: '100%', marginLeft: '0em' }}>
                The Ulike Air 10 revolutionizes home hair removal, combining safety, comfort, and efficiency in an elegant package. It is an excellent choice for contemporary users who value performance and ease of use in their beauty routines.
                Have you tried Ulike Air 10 device? Share your thoughts and experiences below.
            </p>
        </div>
    );

    return (
        <div>
            <div style={{ width: '100%' }}><TextReveal text='IPL // ULIKE' /></div>
            <div ref={blogRef}>
                <Card
                    title="Ulike Air 10 Detailed Review"
                    description="Explore the features and benefits of the Ulike Air 10"
                    blogContent={blogContent}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        textAlign: 'center'
                    }}
                />
                <Comments website-id={websiteId} page-id={'ulike-review'} />
            </div>
        </div>
    );
};

export default UlikeReview;
