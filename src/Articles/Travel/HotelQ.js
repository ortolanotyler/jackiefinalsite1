import React, { useRef } from 'react';
import '../ExampleTutorial.css';
import { Comments } from '@hyvor/hyvor-talk-react';

import SubscribeButton from '../../Components/SubscribeButton';
import TextReveal from '../../Components/TextReveal';
import DropCap from '../../Components/DropCap';
import ResponsiveYoutube from '../../Components/ResponsiveYoutube';
import SubscribeVlog from '../../Components/SubscribeVlog';

const title = `${process.env.PUBLIC_URL}/Images/Articles/HotelQ/hotelQtitle.png`;
const images = [
  { src: `${process.env.PUBLIC_URL}/Images/Articles/HotelQ/1.jpg`, alt: 'Hotel Quintessence' },
  { src: `${process.env.PUBLIC_URL}/Images/Articles/HotelQ/2.jpg`, alt: 'Hotel Quintessence' },
  { src: `${process.env.PUBLIC_URL}/Images/Articles/HotelQ/3.jpg`, alt: 'Hotel Quintessence' },
  { src: `${process.env.PUBLIC_URL}/Images/Articles/HotelQ/4.JPG`, alt: 'Hotel Quintessence' },
  { src: `${process.env.PUBLIC_URL}/Images/Articles/HotelQ/5.jpg`, alt: 'Hotel Quintessence' },
  { src: `${process.env.PUBLIC_URL}/Images/Articles/HotelQ/6.jpg`, alt: 'Hotel Quintessence' },
  { src: `${process.env.PUBLIC_URL}/Images/Articles/HotelQ/7.jpg`, alt: 'Hotel Quintessence' },
  { src: `${process.env.PUBLIC_URL}/Images/Articles/HotelQ/8.jpeg`, alt: 'Hotel Quintessence' },
  { src: `${process.env.PUBLIC_URL}/Images/Articles/HotelQ/9.jpg`, alt: 'Hotel Quintessence' },
  { src: `${process.env.PUBLIC_URL}/Images/Articles/HotelQ/10.jpg`, alt: 'Hotel Quintessence' },
  { src: `${process.env.PUBLIC_URL}/Images/Articles/HotelQ/11.jpg`, alt: 'Hotel Quintessence' },
  { src: `${process.env.PUBLIC_URL}/Images/Articles/HotelQ/12.jpg`, alt: 'Hotel Quintessence' },
  { src: `${process.env.PUBLIC_URL}/Images/Articles/HotelQ/13.jpeg`, alt: 'Hotel Quintessence' },
  { src: `${process.env.PUBLIC_URL}/Images/Articles/HotelQ/14.jpeg`, alt: 'Hotel Quintessence' },
  { src: `${process.env.PUBLIC_URL}/Images/Articles/HotelQ/15.jpg`, alt: 'Hotel Quintessence' },
  { src: `${process.env.PUBLIC_URL}/Images/Articles/HotelQ/16.jpg`, alt: 'Hotel Quintessence' },
  { src: `${process.env.PUBLIC_URL}/Images/Articles/HotelQ/17.jpg`, alt: 'Hotel Quintessence' },
  { src: `${process.env.PUBLIC_URL}/Images/Articles/HotelQ/18.JPG`, alt: 'Hotel Quintessence' },
  { src: `${process.env.PUBLIC_URL}/Images/Articles/HotelQ/19.jpg`, alt: 'Hotel Quintessence' },
];
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
  <div className="card" style={{ maxWidth: '100%', display: 'flex', textAlign: 'left', backgroundColor: 'white', color: 'black', fontFamily: 'GFS Didot, sans-serif' }}>
    <div className="blog-content" style={{ lineHeight: '1.25' }}>{blogContent}</div>
  </div>
);

const HotelQ = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);

  const headingStyle = {
    textAlign: 'center',
    fontSize: '2.75rem',
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
    margin: '1rem auto',
    maxWidth: '100%',
    height: 'auto',
    objectFit: 'cover',
  };

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1rem',
    margin: '1rem 0'
  };

  const blogContent = (
    <div className="container" style={{ lineHeight: '2.25rem', maxWidth: '100%', margin: '23rem', marginTop: '5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
        <a href="/travel" style={{ fontFamily: 'Arapey', fontSize: '1.5em', color: 'black', textDecoration: 'none' }}>
          TRAVEL // HOTEL REVIEWS
        </a>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={title} alt="Hotel Quintessence" style={imageStyle} />
      </div>

      <ResponsiveYoutube src="https://www.youtube.com/embed/4lDCreVFqAw?si=0X5e_MzsoCeTGhxM" title="YouTube video player" />

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <SubscribeVlog />
      </div>
      <p style={{ fontSize: '1rem', fontFamily: 'Arapey, sans-serif', maxWidth: '100%', textAlign: 'center', fontStyle: 'italic' }}>
        All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
      </p>
      <DropCap text="For our anniversary, Tyler and I escaped to the enchanting Hotel Quintessence in Mont Tremblant, Quebec, craving a blend of adventure and relaxation. Nestled beside the sparkling Lake Tremblant and a stone's throw from the vibrant ski village, this luxurious boutique hotel promised a serene getaway in the heart of Quebec's natural beauty." />
      <p style={paragraphStyle}>
        If you want to read about the best slopes, Mont-Tremblant Pedestrian Village shops and food, read my blog post <a href="/tremblant" target="_blank" rel="noopener noreferrer">here</a> sharing my overall experience.
      </p>
      <img src={images[0].src} alt={images[0].alt} style={imageStyle} />
      <h2 style={headingStyle}>First Impressions and Ambiance</h2>
      <p style={paragraphStyle}>
        A Warm Welcome Amidst Snowy Peaks: Arriving at Hotel Quintessence, we were immediately struck by its grandeur, nestled against a backdrop of snow-capped mountains and lake view. The hotel exudes rustic elegance, with a roaring fireplace in the lobby and welcoming staff.
      </p>
      <p style={paragraphStyle}>
        The warm, earthy tones and wood accents throughout create a sense of traditional luxury, while tasteful decor elements add a classic charm. Our first steps inside felt like entering a secluded world, where every detail promised a luxurious stay. While the convenience of valet parking is available directly out front, we initially opted out, needing a moment to regroup after our journey. A minor language barrier led to a mix-up, resulting in the use of the valet service unexpectedly. Having cash on hand for tipping is a good tip for this hotel, as the staff is quite enthusiastic about assisting with luggage and parking.
      </p>
      <div style={gridContainerStyle}>
        <img src={images[3].src} alt={images[3].alt} style={imageStyle} />
        <img src={images[1].src} alt={images[1].alt} style={imageStyle} />
        <img src={images[2].src} alt={images[2].alt} style={imageStyle} />
      </div>
      <h2 style={headingStyle}>☕ Room Options and Accommodations</h2>
      <p style={paragraphStyle}>
        A Room with a View: Our suite at Hotel Quintessence was a luxurious haven, boasting stunning views of Lake Tremblant. Merging modern amenities with classic elegance, the room's spaciousness was accentuated by the rich tones of dark wood and the sophisticated accents of navy and gold—a palette I find myself consistently drawn to in boutique hotels.
      </p>
      <p style={paragraphStyle}>
        The Executive Suite featured a welcoming Nespresso machine, complimentary water bottles, a cozy fireplace stocked with a wood-burning fireplace, (call the wood concierge to get it started,) and a private balcony that became our own little lookout over the tranquil ice-covered waters. The indulgence continued with a plush king-sized bed and a lavish bathroom, which included a soaking tub equipped with jets—the perfect complement to a day spent in the crisp mountain air. And the complimentary chocolates? Delicious.
      </p>
      <div style={gridContainerStyle}>
        <img src={images[4].src} alt={images[4].alt} style={imageStyle} />
        <img src={images[5].src} alt={images[5].alt} style={imageStyle} />
        <img src={images[6].src} alt={images[6].alt} style={imageStyle} />
      </div>
      <h2 style={headingStyle}>💵 Cost Considerations: Pros and Cons</h2>
      <p style={paragraphStyle}>
        Indulgence at a Price: Hotel Quintessence is among the more expensive options compared to other hotels in the area. Since rates vary with the seasons, it's best to check booking platforms for current prices. During our visit at the end of the ski season, the rate was $600 CAD per night after taxes.
      </p>
      <div style={gridContainerStyle}>
        <img src={images[10].src} alt={images[10].alt} style={imageStyle} />
        <img src={images[11].src} alt={images[11].alt} style={imageStyle} />
      </div>
      <p style={paragraphStyle}>
        Staying here is about more than just a place to sleep; it's about enjoying an exclusive and upscale environment, complete with a tranquil pool and jacuzzi, stunning views, and a convenient location just a short walk or shuttle to the village. For our brief trip, we decided to treat ourselves to this luxurious experience.
      </p>
      <div style={gridContainerStyle}>
        <img src={images[7].src} alt={images[7].alt} style={imageStyle} />
        <img src={images[8].src} alt={images[8].alt} style={imageStyle} />
        <img src={images[9].src} alt={images[9].alt} style={imageStyle} />
      </div>
      <p style={paragraphStyle}>
        For those planning a longer stay, there might be more budget-friendly choices to consider, like Le 900 Tremblant Couette * Cafe * Bistro, a bed and breakfast a bit further from the slopes. Nonetheless, the peaceful luxury of Hotel Quintessence provided tremendous value, making our anniversary celebration all the more special. Plus, as someone who creates content with a focus on aesthetics, the hotel’s setting was absolutely ideal.
      </p>
      <div style={gridContainerStyle}>
        <img src={images[12].src} alt={images[12].alt} style={imageStyle} />
        <img src={images[13].src} alt={images[13].alt} style={imageStyle} />
        <img src={images[14].src} alt={images[14].alt} style={imageStyle} />
      </div>
      <h2 style={headingStyle}>🛥 Amenities and Dining</h2>
      <h2 style={headingStyle}>💪 Unparalleled Luxury:</h2>
      <p style={paragraphStyle}>
        Hotel Quintessence offers an array of amenities to enhance your stay. With a spa that provides a peaceful haven for post-slope relaxation and an outdoor pool suited for invigorating cold plunges and a jacuzzi, the resort caters to both wellness enthusiasts. While the fitness centre is available for those looking to maintain their exercise routine, it's worth noting that specific spa services, beyond the use of the jacuzzi and pool, come at an additional cost, like manicures, pedicures, facials, and body treatments. A massage therapist offers massages either at our spa or in the comfort of your suite by your fireplace! 🔥
      </p>
      <div style={gridContainerStyle}>
        <img src={images[15].src} alt={images[15].alt} style={imageStyle} />
        <img src={images[16].src} alt={images[16].alt} style={imageStyle} />
      </div>
      <h2 style={headingStyle}>🍽 Culinary Delights:</h2>
      <p style={paragraphStyle}>
        Dining at La Quintessence Restaurant comes highly recommended for its menu of exquisite dishes that spotlight local flavours. The establishment boasts an extensive wine cellar, offering a perfect pairing for any meal. While we opted to dine around Tremblant to fully immerse ourselves in the local culinary scene, La Quintessence Restaurant remains on our list for future visits. It's an experience we look forward to savouring when we return.
      </p>
      <h2 style={headingStyle}>🍹 Signature Experiences and Activities</h2>
      <p style={paragraphStyle}>
        🌊Exclusive Lakeside Serenity: If you are headed to Hotel Quintessence in the summer months, the hotel's private dock on Lake Tremblant offers a unique spot to unwind, providing kayaks and paddle boards for exploring the tranquil waters. An evening wine and cheese by the fire pit would be delightful, so I might have to book again this summer!
      </p>
      <h2 style={headingStyle}>🎿 Nearby Attractions and Accessibility</h2>
      <p style={paragraphStyle}>The Best of Mont Tremblant at Your Doorstep:</p>
      <p style={paragraphStyle}>
        Hotel Quintessence's prime location near the Pedestrian Village means we were moments away from Mont Tremblant's best shops, cafes, and ski lifts. Its seclusion offered a peaceful haven, yet all the action was just a short walk away, as previously mentioned.
      </p>
      <p style={paragraphStyle}>
        There is a valet service and shuttle to the mountain and a storage service for skis, bikes, golf clubs, etc., depending on the time of year. Read more about our winter experience in the Mont Tremblant Village <a href='/tremblant' target='_blank' rel="noopener noreferrer">here</a>.
      </p>
      <div style={gridContainerStyle}>
        <img src={images[17].src} alt={images[17].alt} style={imageStyle} />
        <img src={images[18].src} alt={images[18].alt} style={imageStyle} />
      </div>
      <h2 style={headingStyle}>🍦 Final Thoughts and Recommendations</h2>
      <p style={paragraphStyle}>
        A Memorable Escape: Hotel Quintessence stands out as a jewel in Mont Tremblant, offering a luxurious yet intimate escape. It's perfect for couples seeking romance and relaxation amidst nature's splendour. Our stay was nothing short of magical, and I wholeheartedly recommend it to anyone looking to indulge in a memorable retreat.
      </p>
      <p style={paragraphStyle}>
        🦽 Accessibility Note: The hotel is equipped with accessible features, though only three of the Quintessence Suites are wheelchair-friendly. I couldn’t find any other notes on accessibility on the site, so be sure to call to confirm the hotel can assist with your specific needs!
      </p>
      <p style={paragraphStyle}>
        Thank you for joining me on this review of Hotel Quintessence. If you've stayed here or have questions, I'd love to hear from you in the comments below or on my blog. For more travel insights and adventures, stay tuned!
      </p>
      <img src={signature} alt="Signature" style={{ width: '100%' }} />
      <Comments website-id={websiteId} pageId={"Hotel-Q"} />
    </div>
  );

  return (
    <div>
      <TextReveal text='MONT-TREMBLANT' />
      <div ref={blogRef}>
        <Card blogContent={blogContent} />
      </div>
    </div>
  );
};

export default HotelQ;
