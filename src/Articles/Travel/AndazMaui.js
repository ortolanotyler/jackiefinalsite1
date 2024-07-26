import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import '../ExampleTutorial1.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import TextReveal from '../../Components/TextReveal';
import DropCap from '../../Components/DropCap';
import BookNowButton from '../../Components/BookNowButton';
import ResponsiveYoutube from '../../Components/ResponsiveYoutube';
import SubscribeVlog from '../../Components/SubscribeVlog';
import AdSenseAd from '../../Advertising/Ads';
import { initGA, logPageView } from '../../analytics';


const title = `${process.env.PUBLIC_URL}/Images/Articles/AndazMaui/AndazTitle.png`;

const images = [
    `${process.env.PUBLIC_URL}/Images/Articles/AndazMaui/MAUI1.jpg`,
    `${process.env.PUBLIC_URL}/Images/Articles/AndazMaui/MAUI2.jpg`,
    `${process.env.PUBLIC_URL}/Images/Articles/AndazMaui/MAUI3.jpg`,
    `${process.env.PUBLIC_URL}/Images/Articles/AndazMaui/MAUI4.jpg`,
    `${process.env.PUBLIC_URL}/Images/Articles/AndazMaui/MAUI5.jpg`,
    `${process.env.PUBLIC_URL}/Images/Articles/AndazMaui/MAUI6.jpg`,
    `${process.env.PUBLIC_URL}/Images/Articles/AndazMaui/MAUI7.jpg`,
    `${process.env.PUBLIC_URL}/Images/Articles/AndazMaui/MAUI8.jpg`,
    `${process.env.PUBLIC_URL}/Images/Articles/AndazMaui/MAUI9.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/AndazMaui/MAUI10.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/AndazMaui/MAUI11.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/AndazMaui/MAUI12.jpeg`,
    `${process.env.PUBLIC_URL}/Images/Articles/AndazMaui/MAUI13.jpeg`,
    `${process.env.PUBLIC_URL}/Images/Articles/AndazMaui/MAUI13a.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/AndazMaui/MAUI14.jpeg`,
    `${process.env.PUBLIC_URL}/Images/Articles/AndazMaui/MAUI15.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/AndazMaui/MAUI16.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/AndazMaui/maui17.jpg`,
    `${process.env.PUBLIC_URL}/Images/Articles/AndazMaui/MAUI18.jpg`,
    `${process.env.PUBLIC_URL}/Images/Articles/AndazMaui/MAUI19.jpg`,
    `${process.env.PUBLIC_URL}/Images/Articles/AndazMaui/MAUI20.jpeg`,
    `${process.env.PUBLIC_URL}/Images/Articles/AndazMaui/MAUI21.jpg`,
    `${process.env.PUBLIC_URL}/Images/Articles/AndazMaui/MAUI22.jpeg`,
    `${process.env.PUBLIC_URL}/Images/Articles/AndazMaui/MAUI23.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/AndazMaui/MAUI24.JPG`
];

const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
    <div>
        <div><TextReveal text='ANDAZ MAUI REVIEW' /></div>
        <div className="card">
            <div className="blog-content">{blogContent}</div>
        </div>
    </div>
);

const AndazMauiReview = () => {
    useEffect(() => {
        initGA();
        logPageView();
      }, []);

    const websiteId = '10910';
    const blogRef = useRef(null);

    const headingStyle = {
        textAlign: 'center',
        fontSize: '30px',
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
                <title>Andaz Maui Review | Luxury Resort Experience</title>
                <meta name="description" content="A detailed review of the Andaz Maui at Wailea Resort, covering first impressions, room options, amenities, and overall experience." />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-RT6GR7JXYG"></script>
                <script>
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-RT6GR7JXYG');
                    `}
                </script>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4660168246825318" crossorigin="anonymous"></script>
            </Helmet>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
                <a href="/travel" style={{ fontFamily: 'Arapey', fontSize: '15px', color: 'black', textDecoration: 'none' }}>
                    TRAVEL // HOTEL REVIEWS
                </a>
            </div>
            <img src={title} alt="Andaz Maui Title" style={{ width: '100%' }} />
            <ResponsiveYoutube src="https://www.youtube.com/embed/ec7hauzrWWk?si=YpA6V8we20uEB1Kr" title="YouTube video player" />
            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <SubscribeVlog />
            </div>
            <p style={{ fontSize: '1rem', fontFamily: 'Arapey, sans-serif', maxWidth: '100%', textAlign: 'center', fontStyle: 'italic' }}>
                All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
            </p>
            <DropCap text="Welcome back as we reminisce about the stunning Andaz Maui at Wailea Resort in Hawaii. This trip not only showcased pristine beaches and exquisite hotel amenities but also created unforgettable memories with my best friend Lauren and the amazing team from Benefit Cosmetics Canada." />
            <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
          
          
            <h2 style={headingStyle}>🌴 First Impressions and Ambiance</h2>
            <p style={paragraphStyle}>
                Upon our arrival at the Andaz Maui, the breathtaking views of Wailea’s shores captivated us instantly. The resort's open, airy design with its lush landscapes and modern touches perfectly blends luxury with the natural beauty of Maui. Every corner of the resort promised a photo opportunity, with its infinity pools merging into the ocean horizon.
            </p>
            <img src={images[0]} alt="Maui view 1" style={imageStyle} />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2rem 0' }}>
                <BookNowButton href="https://plannin.com/en/hotel/f7ed1125-3205-4916-881e-e865acca3608?refId=jackiewyers" target="_blank" rel="noopener noreferrer"/>
            </div>
            <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
            <h2 style={headingStyle}>🏨 Room and Comfort: Living the Suite Life</h2>
            <p style={paragraphStyle}>
                Our room at the Andaz Maui was a cozy haven of tranquility. The balcony was the best part of our standard room, with panoramic views of the whole resort and Pacific Ocean as pictured above. The room featured minimalist decor and the Benefit Canada team decorated with amazing swag! Lauren & I were so excited to say the least.
            </p>
            <div style={gridContainerStyle}>
                <img src={images[1]} alt="Maui room 1" style={imageStyle} />
                <img src={images[2]} alt="Maui room 2" style={imageStyle} />
            </div>
            <h2 style={headingStyle}>🌞 Room Options and Accessibility</h2>
            <p style={paragraphStyle}>
                In terms of accommodations, the Andaz Maui at Wailea Resort offers a variety of choices. Lauren and I enjoyed the comfort of a standard guest room which boasted stunning ocean and pool views from a spacious balcony. (We brought Scrump from Lilo & Stitch along for the trip 😆). For those seeking more space and luxury, the resort also offers expansive suites equipped with additional living areas and enhanced amenities. Private villas are available for guests who desire ultimate privacy and exclusivity, complete with personalized services.
            </p>
            <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
            <img src={images[3]} alt="Maui room 3" style={imageStyle} />
            <p style={paragraphStyle}>
                The property includes ADA-compliant rooms equipped with features such as roll-in showers, lowered storage solutions, and other assistive devices upon request. These accommodations are designed to offer comfort and convenience for guests with mobility challenges, ensuring a welcoming and inclusive environment for everyone. I always like to make an accessibility note, as unfortunately not all resorts feature these accommodations.
            </p>
            <div style={gridContainerStyle}>    
                <img src={images[4]} alt="Maui room 4" style={imageStyle} />
                <img src={images[5]} alt="Maui dining" style={imageStyle} />
            </div>
            <h2 style={headingStyle}>💵 Cost Considerations & Dining Options</h2>
            <p style={paragraphStyle}>
                The nightly rate of around $1,100 USD at the Andaz Maui at Wailea Resort may seem steep, but the resort justifies this with its comprehensive luxury offerings. Set in a prime location, the resort provides direct access to some of Maui's finest beaches, along with exquisite amenities including multiple infinity pools, a world-class spa, and diverse dining options.
            </p>
            <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
            <div style={gridContainerStyle}>    
                <img src={images[6]} alt="Maui market" style={imageStyle} />
                <img src={images[7]} alt="Maui market 2" style={imageStyle} />
            </div>
            <p style={paragraphStyle}>
                While the buffet breakfast costs approximately $49 for adults and $24.50 for children, more economical choices like the Mokapu Market are available for lighter eats or snacks. Lauren and I went to this market daily for ice cream!
            </p>
            <img src={images[8]} alt="Maui luau" style={imageStyle} />
            <p style={paragraphStyle}>
                For gourmets, the Morimoto Maui restaurant offers an exceptional fusion cuisine experience under the banner of Iron Chef Masaharu Morimoto.
            </p>
            <p style={paragraphStyle}>
                The resort also features a local art shop that showcases Maui's rich culture and craftsmanship. For those seeking a lavish escape or celebrating a special occasion such as a honeymoon, the investment is well worth the unforgettable experiences, as echoed by numerous couples we spoke to who return here annually to celebrate their anniversaries.
            </p>
            <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
            <h2 style={headingStyle}>👗 Evening Entertainment: Traditional Luau</h2>
            <p style={paragraphStyle}>
                Each evening brought new experiences. One of the highlights was the traditional Luau, where we immersed ourselves in Hawaiian culture with music, dance, and a feast featuring local specialties. The sunset views from the resort added a magical touch to our evening meals and activities.
            </p>
            <img src={images[9]} alt="Maui beach 1" style={imageStyle} />
            <h2 style={headingStyle}>🌴 Resort Amenities and Activities</h2>
            <p style={paragraphStyle}>
                One of the top reasons to book a stay at Andaz Maui is to enjoy the pristine Mokapu and Wailea Beaches. Swimming in the crystal-clear, warm waters with breathtaking views was an unforgettable experience. We reveled in the sunshine on the soft, white sand and engaged in exciting water activities like paddle boarding, kayaking, and snorkeling. Discovering brightly colored fish and turtles near the shore was truly remarkable.
            </p>
            <img src={images[10]} alt="Maui beach 2" style={imageStyle} />
            <div style={gridContainerStyle}>
                <img src={images[11]} alt="Maui beach 3" style={imageStyle} />
                <img src={images[12]} alt="Maui beach 4" style={imageStyle} />
                <img src={images[13]} alt="Maui pool 1" style={imageStyle} />
                <img src={images[14]} alt="Maui pool 2" style={imageStyle} />
            </div>
            <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
            <p style={paragraphStyle}>
                Within the resort, we spent our days lounging on sun loungers, hopping between pools, and sipping drinks at the tiki bars—a perfect way to relax and soak in the ambiance.
            </p>
            <div style={gridContainerStyle}>
                <img src={images[15]} alt="Maui spa" style={imageStyle} />
            </div>
            <div style={gridContainerStyle}>
                <img src={images[16]} alt="Maui gym" style={imageStyle} />
                <img src={images[17]} alt="Maui view 2" style={imageStyle} />
                <img src={images[18]} alt="Maui view 3" style={imageStyle} />
                <img src={images[19]} alt="Maui view 4" style={imageStyle} />
            </div>
            <p style={paragraphStyle}>
                The resort features 36 holes of golf, two vibrant poolside bars, and four onsite restaurants. Indulge in self-care at the Awili Spa and Salon with treatments from facials to body scrubs. Lauren & I preferred to stay outdoors, but we did love shopping for beauty products at the spa.
            </p>
            <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
            <p style={paragraphStyle}>
                Stay active with yoga and fitness classes available at the 24-hour gym or unwind on the terrace and explore the on-site art gallery as I previously mentioned as a resort highlight. Free in-room WiFi and a convenient grocery store add to the comfort.
            </p>
            <div style={gridContainerStyle}>
                <img src={images[20]} alt="Maui view 6" style={imageStyle} />
                <img src={images[21]} alt="Maui view 7" style={imageStyle} />
                <img src={images[22]} alt="Maui view 8" style={imageStyle} />
                <img src={images[23]} alt="Maui view 8" style={imageStyle} />
            </div>
            <h2 style={headingStyle}>🍹 Final Thoughts and Recommendations</h2>
            <p style={paragraphStyle}>
                As we soaked in the sun and enjoyed the outdoor activities at the Andaz Maui, we also recognized the broader conversations surrounding tourism in Hawaii. Traveling here has become a topic of ethical discussion due to its effects on the indigenous population and the environment. While the beauty and allure of Maui are undeniable, it is essential to consider these impacts as part of a responsible travel approach.
            </p>
            <p style={paragraphStyle}>
                The Andaz Maui at Wailea Resort stands out for its commitment to environmental sustainability and cultural integration. Notably, the resort was constructed using 93% recycled materials and incorporates solar energy and electric equipment to minimize its carbon footprint. By supporting local wildlife preservation and showcasing local art, the resort contributes positively to the cultural and environmental stewardship of Maui.
            </p>
            <p style={paragraphStyle}>
                Being mindful of these issues, it's crucial for visitors to choose accommodations and activities that support local communities and sustainable practices. Whether it’s participating in cultural programs, respecting sacred sites, or supporting local businesses, every small action contributes to a more ethical travel experience.
            </p>
            <p style={paragraphStyle}>
                Thank you for joining me on this breathtaking escape to the Andaz Maui at Wailea Resort. Lauren and I had a marvellous time soaking in the beauty and culture of Maui and a huge thank you to the Benefit Canada team for the gifted experience. Have you travelled to Hawaii or stayed at the Andaz Maui? I’d love to hear your experience in the comments below and I look forward to bringing you along on more travels! For more travel insights and lifestyle tips, stay tuned to my blog and YouTube channel!
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1rem 0' }}>
                <BookNowButton href="https://plannin.com/en/hotel/f7ed1125-3205-4916-881e-e865acca3608?refId=jackiewyers" target="_blank" rel="noopener noreferrer"/>
            </div>
            <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
            <img src={signature} alt="Signature" style={{ width: '100%' }} />
            <Comments website-id={websiteId} page-id={"andaz-maui-review"} />
        </div>
    );

    return (
        <div ref={blogRef}>
            <Card blogContent={blogContent} />
        </div>
    );
};

export default AndazMauiReview;
