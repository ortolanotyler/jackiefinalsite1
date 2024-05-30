import React, { useRef, useState } from 'react';
import './ExampleTutorial.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import TextReveal from '../../Components/TextReveal';

const Ulike1 = `${process.env.PUBLIC_URL}/Images/Articles/ULIKEReview/uliketitle.png`;
const Ulike2 = `${process.env.PUBLIC_URL}/Images/Articles/ULIKEReview/ulikeair10.png`;
const Ulike3 = `${process.env.PUBLIC_URL}/Images/Articles/ULIKEReview/2.JPG`;
const Ulike4 = `${process.env.PUBLIC_URL}/Images/Articles/ULIKEReview/1.JPG`;

const Card = ({ blogContent }) => {
    return (
        <div>
            <TextReveal text="REVIEWS" />
            <div className="card" style={{ maxWidth: '100%', display: 'flex', textAlign: 'left', backgroundColor: '#fff', color: 'black', fontFamily: 'GFS Didot, sans-serif' }}>
                <div className="blog-content" style={{ lineHeight: '1.3' }}>{blogContent}</div>
            </div>
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

    const headingStyle = {
        textAlign: 'center',
        fontSize: '2rem',
        fontWeight: 'normal',
        fontFamily: 'Arapey, serif',
        color: '#333',
        margin: '1.5rem'
      };
    
      const paragraphStyle = {
        fontSize: '1.25rem',
        fontFamily: 'GFS Didot, serif',
        margin: '1rem 1.5rem',
        marginTop: '1rem',
        marginBottom: '1rem',
        maxWidth: '500px',
        lineHeight: '1.75',
        marginLeft: 'auto',
        marginRight: 'auto',
      };
    

    const sideBySideImagesStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '10px',
        flexWrap: 'wrap' // Ensures the images stack on smaller screens
    };

    const blogContent = (
        <div className="container" style={{ lineHeight: '2.5rem', margin: '27rem', marginTop: '5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10rem' }}>
                <a href="/reviews" style={{ fontFamily: 'Arapey', fontSize: '1.5em', marginTop: '1em', lineHeight: '1.5rem', marginBottom: '2.5em', color: 'black', textDecoration: 'none' }}>
                    BEAUTY // PRODUCTS // REVIEWS
                </a>
            </div>
            <img src={Ulike1} alt="Ulike Air 10 - Beauty product" style={{ width: '100%' }} />
            
            <div
            style = {{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                
            }}
            >
                                <img src={Ulike2} alt="Ulike Air 10 - Beauty product" style={{ maxBlockSize: '300px', width: 'auto' }} />

                </div>
                
            <div>
                <p style={{ fontSize: '1rem', fontFamily: 'Arapey, sans-serif', maxWidth: '100%', textAlign: 'center', fontStyle: 'italic' }}>
                    All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
                </p>
            </div>

            <br />
            <p style = {paragraphStyle}>
            Device Name: Ulike Air 10 Brand: Ulike
Year of Release: 2024 Technology: DualLight IPL Price: $309 USD
            </p>
       
<br/>
            <h2 style={headingStyle}>{'\u{1F64B}'} {titles.backgroundInfo}</h2>
            <p style={paragraphStyle}>
                Discover the revolutionary Ulike Air 10, an at-home hair removal device that employs state-of-the-art DualLight technology. As the market leader in IPL devices, it offers those seeking a pain-free and effective hair removal solution a taste of professional-grade skincare without leaving home.
            </p>

            <div style={sideBySideImagesStyle}>
                <img src={Ulike3} alt="Ulike Air 10 - Beauty product" style={{ width: '48%' }} />
                <img src={Ulike4} alt="Ulike Air 10 - Beauty product" style={{ width: '48%' }} />
            </div>

            <h2 style={headingStyle}>{'\u{1F506}'} {titles.deviceProfile}</h2>
            <p style={paragraphStyle}>
                Type: IPL (Intense Pulsed Light) Hair Removal Device<br />
                Features:<br />
                - DualLight Technology: Enhanced efficacy for faster results<br />
                - SkinSensor Technology: Ensures safe use across various skin tones<br />
                - Modes: 4 smart treatment modes tailored for different hair removal needs<br />
                - Safety Standards: FDA-approved, certified safe by international standards
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem' }}>
                <iframe
                    width="600"
                    height="415"
                    src="https://www.youtube.com/embed/S_IdqY01TsY?si=hBTHlR7eIyGnDTSc&start=40"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>

            <h2 style={headingStyle}>{'\u{1F49C}'} {titles.uniqueness}</h2>
            <p style={paragraphStyle}>
                The Ulike Air 10 takes a comprehensive approach to hair removal. Featuring a built-in SkinSensor, it adjusts light intensity to safely match your skin tone, ensuring optimal safety without compromising effectiveness. Its cooling system and multiple mode settings offer a customizable experience that maximizes both comfort and results.
            </p>

            <h2 style={headingStyle}>{'\u{1F471}'} {titles.firstImpressions}</h2>
            <p style={paragraphStyle}>
                From the outset, the Ulike Air 10 impresses with its ease of use and pain-free performance. It stands out for its quick setup and intuitive design, facilitating a hassle-free route to smoother skin. Its ability to significantly reduce hair regrowth within just a week is particularly noteworthy.
            </p>

            <h2 style={headingStyle}>{'\u{1F497}'} {titles.review}</h2>
            <p style={paragraphStyle}>
                Effectiveness: Quickly delivers visible results, reducing hair regrowth with continued use.<br />
                User Experience: Offers a painless and comfortable treatment, outperforming traditional methods like waxing and laser hair removal.<br />
                Occasions and Suitability: Ideal for regular use at home, perfect for all body areas including underarms, legs, arms, and bikini line.
            </p>

            <h2 style={headingStyle}>{'\u{1F4AF}'} {titles.comparisons}</h2>
            <p style={paragraphStyle}>
                Unlike traditional hair removal methods that often cause discomfort and require frequent salon visits, the Ulike Air 10 provides a more comfortable and private experience at home. Its IPL technology is also less painful and more adaptable than conventional laser treatments, making it appealing to a broader range of users.
            </p>

            <h2 style={headingStyle}>{'\u{1F44D}'} {titles.prosAndCons}</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
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
            <p style={paragraphStyle}>
                The Ulike Air 10 revolutionizes home hair removal, combining safety, comfort, and efficiency in an elegant package. It is an excellent choice for contemporary users who value performance and ease of use in their beauty routines. Have you tried Ulike Air 10 device? Share your thoughts and experiences below.
            </p>

            <Comments website-id={websiteId} page-id="ulike-review" />

        </div>
    );

    return (
        <div ref={blogRef}>
            <Card
                title="Ulike Air 10 Detailed Review"
                description="Explore the features and benefits of the Ulike Air 10"
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

export default UlikeReview;
