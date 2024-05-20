import React, { useRef } from 'react';
import '../ExampleTutorial.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import TextReveal from '../../Components/TextReveal';
import SubscribeVlog from '../../Components/SubscribeVlog';
import DropCap from '../../Components/DropCap';
import BookNowButton from '../../Components/BookNowButton';

const title = `${process.env.PUBLIC_URL}/Images/Articles/PrinceOfWales/PrinceTitle.png`;

const images = [
    { src: `${process.env.PUBLIC_URL}/Images/Articles/PrinceOfWales/PrinceOfWales1.JPG`, alt: 'Prince of Wales Niagara on The Lake' },
    { src: `${process.env.PUBLIC_URL}/Images/Articles/PrinceOfWales/PrinceOfWales2.JPG`, alt: 'Prince of Wales Title' },
    { src: `${process.env.PUBLIC_URL}/Images/Articles/PrinceOfWales/PrinceOfWales3.JPG`, alt: 'Prince of Wales Niagara on The Lake' },
    { src: `${process.env.PUBLIC_URL}/Images/Articles/PrinceOfWales/PrinceOfWales4.jpeg`, alt: 'Prince of Wales Niagara on The Lake' },
    { src: `${process.env.PUBLIC_URL}/Images/Articles/PrinceOfWales/PrinceOfWales5.JPG`, alt: 'Prince of Wales Niagara on The Lake' },
    { src: `${process.env.PUBLIC_URL}/Images/Articles/PrinceOfWales/PrinceOfWales6.JPG`, alt: 'Prince of Wales Niagara on The Lake' },
    { src: `${process.env.PUBLIC_URL}/Images/Articles/PrinceOfWales/PrinceOfWales7.JPG`, alt: 'Prince of Wales Niagara on The Lake' },
    { src: `${process.env.PUBLIC_URL}/Images/Articles/PrinceOfWales/PrinceOfWales8.jpeg`, alt: 'Prince of Wales Niagara on The Lake' },
    { src: `${process.env.PUBLIC_URL}/Images/Articles/PrinceOfWales/PrinceOfWales9.jpeg`, alt: 'Prince of Wales Niagara on The Lake' },
    { src: `${process.env.PUBLIC_URL}/Images/Articles/PrinceOfWales/PrinceOfWales10.jpeg`, alt: 'Prince of Wales Niagara on The Lake' },
    { src: `${process.env.PUBLIC_URL}/Images/Articles/PrinceOfWales/PrinceOfWales11.JPG`, alt: 'Prince of Wales Niagara on The Lake' },
    { src: `${process.env.PUBLIC_URL}/Images/Articles/PrinceOfWales/PrinceOfWales12.JPG`, alt: 'Prince of Wales Niagara on The Lake' },
    { src: `${process.env.PUBLIC_URL}/Images/Articles/PrinceOfWales/PrinceOfWales13.JPG`, alt: 'Prince of Wales Niagara on The Lake' },
    { src: `${process.env.PUBLIC_URL}/Images/Articles/PrinceOfWales/PrinceOfWales14.jpg`, alt: 'Prince of Wales Niagara on The Lake' },
    { src: `${process.env.PUBLIC_URL}/Images/Articles/PrinceOfWales/PrinceOfWales15.JPG`, alt: 'Prince of Wales Niagara on The Lake' },
    { src: `${process.env.PUBLIC_URL}/Images/Articles/PrinceOfWales/PrinceOfWales16.jpeg`, alt: 'Prince of Wales Niagara on The Lake' },
    { src: `${process.env.PUBLIC_URL}/Images/Articles/PrinceOfWales/PrinceOfWales17.jpeg`, alt: 'Prince of Wales Niagara on The Lake' },
];

const signature = `${process.env.PUBLIC_URL}/Images/Articles/signature.png`;

const Card = ({ blogContent }) => (
    <div className="card" style={{ maxWidth: '100%', display: 'flex', textAlign: 'left', backgroundColor: '#fff', color: 'black', fontFamily: 'GFS Didot, sans-serif' }}>
        <div className="blog-content" style={{ lineHeight: '1.3' }}>{blogContent}</div>
    </div>
);

const PrinceOfWales = () => {
    const websiteId = "10910"; 
    const blogRef = useRef(null);

    const headingStyle = {
        textAlign: 'center',
        fontSize: '2.5rem',
        fontWeight: 'normal',
        fontFamily: 'Arapey, serif',
        color: 'black',
        margin: '2.5rem 0'
    };

    const paragraphStyle = {
        fontSize: '1.5rem',
        fontFamily: 'GFS Didot, serif',
        margin: '2em',
        maxWidth: '100%',
        color: 'black',
        textAlign: 'justify'
    };

    const imageStyle = {
        display: 'block',
        margin: '0 auto',
        maxWidth: '100%',
        width: '100%',
        maxHeight: '400px',
        objectFit: 'cover'
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
        margin: '1rem 0'
    };

    const flexStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '1rem',
        margin: '1rem 0'
    };

    const blogContent = (
        <div className="container" style={{ lineHeight: '2.5em', maxWidth: '100%', margin: '20rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
                <a href="/travel" style={{ fontFamily: 'Arapey', fontSize: '1.5em', color: 'black', textDecoration: 'none' }}>
                    TRAVEL  //  CANADA  //  NIAGARA ON THE LAKE
                </a>
            </div>
            
            <img src={title} alt='Prince of Wales Title' style={imageStyle} />

            <div style={{ padding: '20px', margin: '20px', width: '100%', boxSizing: 'border-box' }}>
                <iframe 
                    className="iframeStyle"
                    style={{ width: '100%', height: '525px' }}
                    src="https://www.youtube.com/embed/qIAMUI6Enz0?si=IODG7kkuWSOxLfIa"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <SubscribeVlog />
            </div>

            <div>
                <p style={{ fontSize: '1rem', fontFamily: 'Arapey, sans-serif', maxWidth: '100%', textAlign: 'center', fontStyle: 'italic' }}>
                    All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
                </p>
            </div>

            <DropCap text="Welcome back for a special hotel review of the enchanting Prince of Wales Hotel in Niagara-On-The-Lake, Ontario, Canada. To celebrate my birthday this year, my husband Tyler and I indulged in a luxurious weekend at this stunning hotel, renowned for its Victorian elegance and romantic charm. Nestled in the heart of one of Canada's most picturesque towns, the Prince of Wales provided the perfect backdrop for a celebration filled with beauty, history, and a touch of magic." />         

            <h2 style={headingStyle}>🌟 First Impressions and Ambiance</h2>
            <p style={paragraphStyle}>
                Upon arrival at the Prince of Wales Hotel, we were immediately captivated by its Victorian charm. The grand entrance, adorned with ornate floral wallpapers, antique furnishings, and sculptures, transported us into an era of refined elegance. Additional touches like stained glass windows further enhanced the luxurious ambiance. The hotel’s hanging flowers and lush bushes, set against the charming streets of Niagara-on-the-Lake, offered a stunning sight, perfect for roaming this romantic town.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2rem 0' }}>

            <BookNowButton href="https://plannin.com/en/hotel/7e8b8619-6256-4481-97c4-048f694b67c4?refId=jackiewyers" target="_blank" rel="noopener noreferrer"/>
            </div>
            <div style={gridStyle}>
                <img src={images[0].src} alt={images[0].alt} style={imageStyle} />
                <img src={images[1].src} alt={images[1].alt} style={imageStyle} />
                <img src={images[2].src} alt={images[2].alt} style={imageStyle} />
                <img src={images[3].src} alt={images[3].alt} style={imageStyle} />
            </div>

            <h2 style={headingStyle}>💵 Cost Considerations: Pros and Cons</h2>
            <p style={paragraphStyle}>
                Staying at the upscale Prince of Wales Hotel comes with a higher price tag, particularly during peak summer season when Niagara-On-The-Lake draws the most visitors. During our stay, room rates ranged from about $250 to $450 CAD per night, depending on the room type and the timing of the visit.
            </p>
            <p style={paragraphStyle}>
                While this may seem steep, we felt the cost was thoroughly justified by the hotel’s exceptional service, luxurious atmosphere, and unparalleled location in the heart of Niagara-On-The-Lake.
            </p>

            <div style={flexStyle}>
                <img src={images[4].src} alt={images[4].alt} style={imageStyle} />
                <img src={images[5].src} alt={images[5].alt} style={imageStyle} />
            </div>

            <p style={paragraphStyle}>
                We chose a Premium King Room which is beautifully decorated with thoughtful details but somewhat compact. The air conditioning unit tends to be noisy and may not effectively cool the room during particularly hot weather. Nonetheless, the room's elegant charm and the hotel's excellent location significantly outweigh these minor drawbacks. Plus, a hand-delivered rose was a beautiful touch from the staff!
            </p>

            <h2 style={headingStyle}>🥀 Room Options and Accommodations</h2>
            <p style={paragraphStyle}>
                The Prince of Wales Hotel offers a diverse array of guest rooms and suites, each richly decorated with Victorian charm and modern amenities. Options range from Traditional and Superior Guest Rooms—ideal for couples or small groups, to Deluxe Rooms with added space and luxury features such as fireplaces. For the ultimate experience, Premium Guest Rooms and the lavish Royal Suite provide deluxe comforts like gas fireplaces, jetted baths, and exquisite Wine Themed Cellar Suites, ensuring a stay that blends historical elegance with contemporary luxury.
            </p>

            <h2 style={headingStyle}>🫖 High Tea at the Prince of Wales Hotel</h2>
            <p style={paragraphStyle}>
                The Prince of Wales Hotel offers a quintessentially elegant high tea experience that, regrettably, I didn’t get to try during my stay! Hosted in the hotel's charming drawing room, this experience includes a selection of finely crafted tea blends accompanied by an assortment of traditional scones, pastries, and delicate finger sandwiches. Noble Restaurant, Churchill Lounge, Charcuterie & Panini Bar are also in-hotel options for food.
            </p>
            <p style={paragraphStyle}>
                If you are interested in exploring more culinary delights and experiences in Niagara-on-the-Lake, be sure to check out my detailed blog post here for options outside of the hotel.
            </p>

            <div style={flexStyle}>
                <img src={images[6].src} alt={images[6].alt} style={imageStyle} />
                <img src={images[7].src} alt={images[7].alt} style={imageStyle} />
            </div>

            <h2 style={headingStyle}>🌸 Nearby Attractions</h2>
            <p style={paragraphStyle}>
                Just steps away from the hotel, experience the charm of this historic town with its well-preserved 19th-century village feel, boutique shops, and theatres. The hotel is also in close proximity to some of Ontario's finest vineyards, offering guests easy access to wine tastings and vineyard tours.
            </p>
            <p style={paragraphStyle}>
                Transportation options are plentiful, with bike rentals, walking tours, and shuttle services available to explore nearby attractions, including the famed Shaw Festival Theatre. Whether you're looking to explore on foot, by bike, or through organized tours, everything is conveniently accessible from the hotel.
            </p>

            <div style={gridStyle}>
                <img src={images[8].src} alt={images[8].alt} style={imageStyle} />
                <img src={images[9].src} alt={images[9].alt} style={imageStyle} />
                <img src={images[10].src} alt={images[10].alt} style={imageStyle} />
                <img src={images[11].src} alt={images[11].alt} style={imageStyle} />
            </div>

            <h2 style={headingStyle}>🍷 Final Thoughts and Recommendations</h2>
            <p style={paragraphStyle}>
                Our stay at the Prince of Wales Hotel was truly unforgettable, combining the allure of Victorian elegance with the convenience of modern amenities. Every moment, from the grandiose entrance to the peaceful gardens, added to the charm of this historic hotel. If you’re planning a visit to Niagara-on-the-Lake, the Prince of Wales offers a perfect mix of luxury, location, and local culture. Book here.
            </p>

            <div style={flexStyle}>
                <img src={images[12].src} alt={images[12].alt} style={imageStyle} />
                <img src={images[13].src} alt={images[13].alt} style={imageStyle} />
            </div>

            <h2 style={headingStyle}>🏊 Anticipated Experiences and Activities</h2>
            <p style={paragraphStyle}>
                For my next visit, I eagerly anticipate indulging in the traditional high tea, exploring the exclusive Wine-Themed Cellar Suites, and relaxing with the spa services and pool offered. I also look forward to experiencing the hotel’s seasonal events like the summer garden parties and the festive Christmas markets. Additionally, I plan to wander through Niagara-on-the-Lake’s historic streets, discovering more of its hidden treasures.
            </p>
            <p style={paragraphStyle}>
                Thank you for joining me to see the enchanting Prince of Wales Hotel. I’d love to hear about your experiences or any recommendations you might have! Feel free to leave a comment below or connect with me on social media. For more travel insights and adventures, stay tuned to my blog and YouTube channel!
            </p>

            <div style={flexStyle}>
                <img src={images[14].src} alt={images[14].alt} style={imageStyle} />
                <img src={images[15].src} alt={images[15].alt} style={imageStyle} />
            </div>

            <h2 style={headingStyle}>Accessibility Note:</h2>
            <p style={paragraphStyle}>
                The Prince of Wales Hotel retains much of its historic charm, which includes an antique elevator available for floors 2 through 4; please note that this elevator requires staff assistance to operate. Due to the hotel's historic nature and the smaller size of rooms, guests with specific accessibility needs are encouraged to consider these factors when planning their stay. We recommend contacting the hotel directly to discuss any necessary accommodations or to inquire about alternative arrangements.
            </p>

            <img src={images[16].src} alt={images[16].alt} style={imageStyle} />
            <img src={signature} alt='Signature' style={{ width: '100%' }} />

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2rem 0' }}>

            <BookNowButton href="https://plannin.com/en/hotel/7e8b8619-6256-4481-97c4-048f694b67c4?refId=jackiewyers" target="_blank" rel="noopener noreferrer" />

</div>


            <Comments website-id={websiteId} pageId={"beachclubresort"} />

        </div>
    );

    return (
        <div>
            <div style={{ width: '100%', marginBottom: '2rem' }}>
                <TextReveal text='NIAGARA ON THE LAKE' />
            </div>
            <div ref={blogRef}>
                <Card
                    title="Walt Disney World Beach Club Resort Review"
                    description="Walt Disney World Beach Club Resort Review - JW"
                    blogContent={blogContent}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        textAlign: 'center'
                    }}
                />
            </div>
        </div>
    );
};

export default PrinceOfWales;
