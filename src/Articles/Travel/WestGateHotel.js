import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import '../ExampleTutorial1.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import TextReveal from '../../Components/TextReveal';
import DropCap from '../../Components/DropCap';
import BookNowButton from '../../Components/BookNowButton';
import ResponsiveYoutube from '../../Components/ResponsiveYoutube';
import SubscribeVlog from '../../Components/SubscribeVlog';
import AdSenseAd from '../../Advertising/Ads';

const title = `${process.env.PUBLIC_URL}/Images/Articles/WestgateHotelReview/westgatetitle.png`;

const westgate1 = `${process.env.PUBLIC_URL}/Images/Articles/WestgateHotelReview/WESTGATE1.JPG`;
const westgate2 = `${process.env.PUBLIC_URL}/Images/Articles/WestgateHotelReview/WESTGATE2.jpeg`;
const westgate3 = `${process.env.PUBLIC_URL}/Images/Articles/WestgateHotelReview/WESTGATE3.JPG`;
const westgate4 = `${process.env.PUBLIC_URL}/Images/Articles/WestgateHotelReview/WESTGATE4.jpeg`;
const westgate5 = `${process.env.PUBLIC_URL}/Images/Articles/WestgateHotelReview/WESTGATE5.JPG`;
const westgate6 = `${process.env.PUBLIC_URL}/Images/Articles/WestgateHotelReview/WESTGATE6.JPG`;
const westgate7 = `${process.env.PUBLIC_URL}/Images/Articles/WestgateHotelReview/WESTGATE7.jpeg`;
const westgate8 = `${process.env.PUBLIC_URL}/Images/Articles/WestgateHotelReview/WESTGATE8.jpeg`;
const westgate9 = `${process.env.PUBLIC_URL}/Images/Articles/WestgateHotelReview/WESTGATE9.jpeg`;
const westgate10 = `${process.env.PUBLIC_URL}/Images/Articles/WestgateHotelReview/WESTGATE10.JPG`;
const westgate11 = `${process.env.PUBLIC_URL}/Images/Articles/WestgateHotelReview/WESTGATE11.JPG`;
const westgate12 = `${process.env.PUBLIC_URL}/Images/Articles/WestgateHotelReview/WESTGATE12.jpeg`;
const westgate13 = `${process.env.PUBLIC_URL}/Images/Articles/WestgateHotelReview/WESTGATE13.JPG`;
const westgate14 = `${process.env.PUBLIC_URL}/Images/Articles/WestgateHotelReview/WESTGATE14.jpeg`;
const westgate15 = `${process.env.PUBLIC_URL}/Images/Articles/WestgateHotelReview/WESTGATE15.jpeg`;

const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
    <div>
        <div><TextReveal text='THE WESTGATE HOTEL - SAN DIEGO' /></div>
        <div className="card">
            <div className="blog-content">{blogContent}</div>
        </div>
    </div>
);

const WestGateHotelBlog = () => {
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

    const imageStyle = {
        display: 'block',
        margin: '0 auto',
        maxWidth: '100%',
        height: 'auto'
    };

    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1rem',
        margin: '1rem 0'
    };

    const blogContent = (
        <div className="container">
            <Helmet>
                <title>The Westgate Hotel - San Diego Review - Jackie Wyers</title>
                <meta name="description" content="Explore the luxurious Westgate Hotel in San Diego with Jackie Wyers. Discover the Bridgerton-themed Whistledown Tea and Package experience." />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4660168246825318" crossorigin="anonymous"></script>
            </Helmet>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25vh' }}>
                <a href="/travel" style={{ fontFamily: 'Arapey', fontSize: '1.25em', color: 'black', textDecoration: 'none' }}>
                    TRAVEL // HOTEL REVIEWS
                </a>
            </div>
            <img src={title} alt="Westgate Hotel Title" style={{ width: '100%' }} />

            <ResponsiveYoutube src="https://www.youtube.com/embed/H1VUDOqCo3s?si=Ej5ug_TV3qatoDOk" title="YouTube video player" />

            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <SubscribeVlog />
            </div>
            <p style={{ fontSize: '1rem', fontFamily: 'Arapey, sans-serif', maxWidth: '100%', textAlign: 'center', fontStyle: 'italic' }}>
              All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
            </p>
            <DropCap text="Hello, lovely viewers! Today, I’m excited to share my enchanting experience at the Westgate Hotel in San Diego, where Tyler and I indulged in the luxuriously themed Westgate's Whistledown Tea and Package. This Bridgerton-inspired getaway was filled with regal elegance, featuring Chandon champagne, delightful macarons, and an atmosphere so richly detailed, it felt as if we had stepped straight into the series itself." />
            <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
            <h2 style={headingStyle}>First Impressions and Ambiance</h2>
            <p style={paragraphStyle}>
                Upon entering the grand lobby of the Westgate Hotel, we were immediately struck by its opulent decor, which perfectly encapsulates the Regency era's lavish aesthetic. The hotel offers an array of Instagram-worthy spots, with each corner meticulously designed to evoke the elegance of early 19th-century English nobility.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2rem 0' }}>
                <BookNowButton href="https://plannin.com/en/hotel/ce895da3-45d5-4bd0-a8cf-fdc1425d0a44?refId=jackiewyers" target="_blank" rel="noopener noreferrer" />
            </div>
            <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>

            <h2 style={headingStyle}>🍾 Westgate's Whistledown Tea and Package: An Overview</h2>
            <p style={paragraphStyle}>
                The Westgate Hotel has updated its Bridgerton-themed experience with the "Whistledown Package," offering a luxurious stay perfect for fans of the show. This package includes overnight accommodations in a Premier View Room with stunning skyline views, a complimentary bottle of champagne, and a special "Postcard and Feather-ington pen" set, allowing guests to write and send letters using the hotel’s historic mail chute. How fun!
            </p>

            <div style={gridContainerStyle}>
                <img src={westgate4} alt="The Westgate Hotel - San Diego" style={imageStyle} />
                <img src={westgate5} alt="The Westgate Hotel - San Diego" style={imageStyle} />
                <img src={westgate6} alt="The Westgate Hotel - San Diego" style={imageStyle} />
                <img src={westgate1} alt="Québécoise Pizza" style={imageStyle} />
            </div>

            <p style={paragraphStyle}>
                Additionally, guests have the option to upgrade their experience to include the glamorous "Whistledown Afternoon Tea.” This themed package and tea experience offer a deep dive into the world of Bridgerton, perfect for those seeking a touch of regal elegance during their stay in San Diego.
            </p>

            <h2 style={headingStyle}>💵 Cost Considerations</h2>
            <p style={paragraphStyle}>
                While the package comes at a premium, the unique themed experience, coupled with the Westgate's exceptional service and central location in San Diego, provides substantial value. This package is particularly ideal for special occasions, like a bridal party or a romantic getaway, offering a blend of entertainment, luxury, and Instagrammable moments that justify the expense.
            </p>

            <div style={gridContainerStyle}>
                <img src={westgate8} alt="The Westgate Hotel - San Diego" style={imageStyle} />
                <img src={westgate10} alt="The Westgate Hotel - San Diego" style={imageStyle} />
            </div>

            <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>

            <img src={westgate11} alt="Mont Tremblant Skila" style={{ width: '100%' }} />

            <h2 style={headingStyle}>🥀 Room Options and Accessibility</h2>
            <p style={paragraphStyle}>
                In addition to its themed packages, the Westgate Hotel in San Diego offers a wide range of accommodation options to suit various preferences. Guests can opt for Premier Rooms, located between the 11th and 18th floors, which feature deluxe marble showers and offer panoramic views of the city or park. These rooms are available with either king or double beds, like we experienced during our stay.
            </p>
            <p style={paragraphStyle}>
                For those seeking additional space and luxury, Deluxe Rooms provide expansive interiors enriched with high-end amenities. The hotel also caters to guests requiring accessibility features; ADA-compliant rooms are equipped with roll-in showers, lowered storage solutions, and other assistive devices available upon request.
            </p>
            <p style={paragraphStyle}>
                Room rates at the Westgate Hotel vary, starting from $250 USD per night for standard rooms and going up to $1500 USD per night for the most luxurious suites, ensuring options for every level of indulgence and comfort.
            </p>

            <h2 style={headingStyle}>🥂 Dining and Activities</h2>
            <p style={paragraphStyle}>
                The Whistledown Tea, held in the hotel’s ornate Grand Lobby, includes champagne or apple cider, a selection of tea sandwiches, savouries, sweet pastries, and a take-home jar of Whistledown White Ambrosia Tea.
            </p>
            <img src={westgate9} alt="The Westgate Hotel - San Diego" style={imageStyle} />
            <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
            <p style={paragraphStyle}>
                When I attended the high tea, it was accompanied by a live harpist, now changed to a string quartet. This tea service is available on Saturdays from 2 PM to 4:30 PM, from May 18 to June 29, 2024. Guests are encouraged to dress in their finest Regency-era attire and the tea experience is priced at $98 for adults and $68 for children ages 2 to 14.
            </p>
            <p style={paragraphStyle}>
                High tea is just one of the many dining options available at the Westgate Hotel. The Westgate Room offers innovative American cuisine with French influences. The Plaza Bar is perfect for pre-dinner drinks with live music. For outdoor dining, the Veranda serves locally-sourced seafood in a bistro-style setting.
            </p>
            <p style={paragraphStyle}>
                Additionally, in-room dining is available for those who prefer dining in the comfort and privacy of their own room which is what Tyler & I chose to do after a long day at a photoshoot! Who says a duchess can’t have chicken fingers in bed?
            </p>
            <p style={paragraphStyle}>
                There’s also a beautiful pool on the terrace with views of San Diego. Sadly it was a rainy day, but I would be swimming for hours otherwise.
            </p>
            <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
            <h2 style={headingStyle}>Final Thoughts and Recommendations</h2>
            <p style={paragraphStyle}>
                Our stay at the Westgate Hotel was a regal affair that I highly recommend to anyone looking to escape into a world of elegance and romance. The hotel itself is also a stunning wedding location, offering luxurious settings ideal for a memorable celebration.
            </p>
            <p style={paragraphStyle}>
                If you're planning a visit to San Diego and want a taste of Regency-era luxury, the Westgate Hotel is a must. The Westgate's Whistledown Tea and Package isn’t the only package, so check on the Westgate website for more offerings. For more Bridgerton inspiration, check out Daphne hairstyles here.
            </p>

            <div style={gridContainerStyle}>
                <img src={westgate13} alt="The Westgate Hotel - San Diego" style={{ width: '100%' }} />
                <img src={westgate14} alt="The Westgate Hotel - San Diego" style={{ width: '100%' }} />
                <img src={westgate15} alt="Jackie at Mont Tremblant" style={{ width: '100%' }} />
                <img src={westgate3} alt="Signature" style={{ width: '100%' }} />
            </div>
            <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
            <p style={paragraphStyle}>
                Thank you for joining me on this luxurious journey back in time at the Westgate Hotel. Tyler and I had an unforgettable experience, and we can't wait to share more of our adventures with you. For more travel tips and lifestyle content, stay tuned to my blog and YouTube channel!
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2rem 0' }}>
                <BookNowButton href="https://plannin.com/en/hotel/ce895da3-45d5-4bd0-a8cf-fdc1425d0a44?refId=jackiewyers" target="_blank" rel="noopener noreferrer" />
            </div>
            <img src={signature} alt="Signature" style={{ width: '100%' }} />
            <Comments
                website-id={websiteId}
                page-id={"westgate"} // Unique identifier for this blog post
            />
        </div>
    );

    return (
        <div>
            <div ref={blogRef}>
                <Card blogContent={blogContent} />
            </div>
            <script async src="//www.instagram.com/embed.js"></script>
        </div>
    );
};

export default WestGateHotelBlog;
