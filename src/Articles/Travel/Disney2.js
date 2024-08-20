import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import '../ExampleTutorial1.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeVlog from '../../Components/SubscribeVlog';
import TextReveal from '../../Components/TextReveal';
import ResponsiveYoutube from '../../Components/ResponsiveYoutube';
import AdSenseAd from '../../Advertising/Ads';
import { initGA, logPageView } from '../../analytics';

// Image imports
const title = `${process.env.PUBLIC_URL}/Images/Articles/Disney/Epcot/epcottitle.png`;
const images = [
  `${process.env.PUBLIC_URL}/Images/Articles/Disney/Epcot/epcot2.png`,
  `${process.env.PUBLIC_URL}/Images/Articles/Disney/Epcot/epcot3.png`,
  `${process.env.PUBLIC_URL}/Images/Articles/Disney/Epcot/epcot4.png`,
  `${process.env.PUBLIC_URL}/Images/Articles/Disney/Epcot/epcot5.png`,
  `${process.env.PUBLIC_URL}/Images/Articles/Disney/Epcot/epcot6.png`,
  `${process.env.PUBLIC_URL}/Images/Articles/Disney/Epcot/epcot7.png`,
  `${process.env.PUBLIC_URL}/Images/Articles/Disney/Epcot/epcot8.png`,
  `${process.env.PUBLIC_URL}/Images/Articles/Disney/Epcot/epcot9.png`,
  `${process.env.PUBLIC_URL}/Images/Articles/Disney/Epcot/epcot10.png`,
  `${process.env.PUBLIC_URL}/Images/Articles/Disney/Epcot/epcot11.png`,
  `${process.env.PUBLIC_URL}/Images/Articles/Disney/Epcot/epcot12.png`,
  `${process.env.PUBLIC_URL}/Images/Articles/Disney/Epcot/epcot13.png`,
  `${process.env.PUBLIC_URL}/Images/Articles/Disney/Epcot/epcot14.png`,
  `${process.env.PUBLIC_URL}/Images/Articles/Disney/Epcot/epcot15.png`,
  `${process.env.PUBLIC_URL}/Images/Articles/Disney/Epcot/epcot16.png`,
  `${process.env.PUBLIC_URL}/Images/Articles/Disney/Epcot/epcot17.png`,
  `${process.env.PUBLIC_URL}/Images/Articles/Disney/Epcot/epcot18.png`,
  `${process.env.PUBLIC_URL}/Images/Articles/Disney/Epcot/epcot19.png`
];
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
  <div className="card">
    <div className="blog-content">{blogContent}</div>
  </div>
);

const Disney2Post = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);

  useEffect(() => {
    initGA();
    logPageView('/epcot');
  }, []);


  const headingStyle = {
    textAlign: 'center',
    fontSize: '1.5rem',
    fontWeight: 'normal',
    fontFamily: 'Arapey, serif',
    color: '#333',
    margin: '1.5rem'
};

const paragraphStyle = {
  fontSize: '20px',
  fontFamily: 'GFS Didot, serif',
  margin: '1rem 1.5rem',
  marginTop: '1rem',
  marginBottom: '1rem',
  maxWidth: '500px',
  lineHeight: '1.5',
  marginLeft: 'auto',
  marginRight: 'auto',
};

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1rem',
    margin: '1rem 0',
  };

  const imageStyle = {
    display: 'block',
    margin: '0 auto',
    maxWidth: '700px',
    height: 'auto'
  };

  const blogContent = (
    <div className="container">
      <Helmet>
        <title>My Magical Walt Disney World Experience</title>
        <meta name="description" content="Best of Epcot, Magic Kingdom and Animal Kingdom" />
        <meta name="keywords" content="Jackie Wyers, Disney World, Epcot, Magic Kingdom, Animal Kingdom, travel guide, Disney parks, travel blog, Disney vacation" />
        <meta property="og:title" content="My Magical Walt Disney World Experience" />
        <meta property="og:description" content="Best of Epcot, Magic Kingdom and Animal Kingdom" />
        <meta property="og:image" content={title} />
        <meta property="og:url" content="https://jackiewyers.beauty/epcot" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Magical Walt Disney World Experience" />
        <meta name="twitter:description" content="Best of Epcot, Magic Kingdom and Animal Kingdom" />
        <meta name="twitter:image" content={title} />
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
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Review",
              "itemReviewed": {
                "@type": "Place",
                "name": "Walt Disney World",
                "image": "${title}",
                "description": "Best of Epcot, Magic Kingdom and Animal Kingdom",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "1375 E Buena Vista Dr",
                  "addressLocality": "Lake Buena Vista",
                  "addressRegion": "FL",
                  "postalCode": "32830",
                  "addressCountry": "US"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5",
                  "reviewCount": "1"
                }
              },
              "author": {
                "@type": "Person",
                "name": "Jackie Wyers"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Jackie Wyers Beauty",
                "logo": {
                  "@type": "ImageObject",
                  "url": "${process.env.PUBLIC_URL}/Images/Home/jackielogo.png"
                }
              },
              "datePublished": "2024-07-27",
              "reviewBody": "Best of Epcot, Magic Kingdom and Animal Kingdom. This travel guide covers the highlights of my trip to Walt Disney World, including favorite pavilions, rides, dining experiences, and tips for making the most of your visit."
            }
          `}
        </script>
      </Helmet>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
        <a href="/travel" style={{ fontFamily: 'Arapey', fontSize: '1rem', color: 'black', textDecoration: 'none' }}>
          TRAVEL // ITINERARIES
        </a>
      </div>

      <img src={title} alt="Epcot Title" style={{ width: '100%' }} />

      <ResponsiveYoutube src="https://www.youtube.com/embed/XRI-IpWb37E?si=X6l3RAxsPGC_bS88" title="YouTube video player" />

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem' }}>
        <SubscribeVlog />
      </div>

      <p style={{ margin: '2rem 0',textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', maxWidth: '100%', fontStyle: 'italic' }}>
      All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
      </p>

      <p style={paragraphStyle}>
        <span style={{ color: '#745B4F', float: 'left', fontSize: '5rem', lineHeight: '0.9', marginRight: '0.5rem', marginTop: '0.01em' }}>W</span>
        elcome to part two of my experience at Walt Disney World in 2023! Over in part one, I reviewed Walt Disney's Beach Club Resort but now let’s talk Epcot, Magic Kingdom and Animal Kingdom! My best friend Lauren and I had such an enchanting experience together, and I hope this travel diary of two 20-somethings can help you plan your Disney trip. I don’t have tips about traveling with children, so consider this our adult 3-day guide to Walt Disney World!
      </p>

      <div style={{ margin: '20px' }}>
        <AdSenseAd />
      </div>

      <h2 style={headingStyle}>🌐 Day 1: Epcot</h2>
      <p style={paragraphStyle}>
        We started the day by getting up early, donning our comfy but cute Disney World attire, and picked up breakfast at the Beach Club Marketplace. As tempting as it was to buy souvenirs right away, we decided to see all that Epcot has to offer first! We walked about 7 minutes to the entry gates, though you can also take the boat there as well.
      </p>
      <p style={paragraphStyle}>
        Be sure to drink lots of water and wear sunscreen if you plan to spend all day out there - Epcot is all about walking around the world! 🇮🇹 🇨🇳 🇨🇦 🇺🇸 🇯🇵 🇫🇷 🇲🇦 🇳🇴 🇩🇪 🇬🇧 🇲🇽
      </p>
      <img src={images[0]} alt='Epcot' style={imageStyle} />

      <div style={{ margin: '20px' }}>
        <AdSenseAd />
      </div>

      <h2 style={headingStyle}>🗺 What does EPCOT mean?</h2>
      <p style={paragraphStyle}>
        So… what is Epcot? Epcot is a celebration of human achievement and cultural diversity, perfectly encapsulated in its Future World and World Showcase. EPCOT stands for "Experimental Prototype Community of Tomorrow.”
      </p>
      <p style={paragraphStyle}>
        This is not a ride-heavy exhibit but a stunning display of various countries around the world, celebrating architecture, culture, and food.
      </p>
      <p style={paragraphStyle}>
        Disney Characters are intertwined throughout the countries, like the Winnie the Pooh characters in England and Anna and Elsa in Norway. In both shrub and human form! I highly suggest Epcot for an adult audience, and if you do like to drink alcohol, you can “drink around the world” during the day and night. Epcot used to be unique in serving alcohol, but now all parks offer adult beverages. Cheers!
      </p>
      <img src={images[1]} alt='Epcot Characters' style={imageStyle} />

      <div style={{ margin: '20px' }}>
        <AdSenseAd />
      </div>

      <h2 style={headingStyle}>🌸 Epcot International Flower & Garden Festival</h2>
      <p style={paragraphStyle}>
        The best time to really take in the beauty of Epcot is during the Epcot International Flower & Garden Festival. This year the festival is from February 28 to May 27, 2024. The intricate Disney character topiaries, bright floral displays and fresh delights from the pop trucks are nothing short of magical.
      </p>
      <p style={paragraphStyle}>
        After our time at several Disney Parks, Lauren and I agree that the Food Trucks for the International Flower and Garden Festival were the best food at the parks. Fresh, hot, and rich with flavour. The corn was delicious, and I crave it as I’m writing this.
      </p>
      <p style={paragraphStyle}>
        We started a meal at Chefs de France, but ended up leaving after an appetizer as we preferred the food trucks! The festival food really was that good.
      </p>
      <img src={images[2]} alt='Flower & Garden Festival' style={imageStyle} />

      <div style={{ margin: '20px' }}>
        <AdSenseAd />
      </div>

      <h2 style={headingStyle}>🇫🇷 Pavilion Highlights!</h2>
      <p style={paragraphStyle}>
        My highlight pavilions—France, Morocco, Japan and Italy—each told their own unique story through architecture, cuisine, and culture, and of course - shopping. I loved some of the higher end brands like Guerlain in the French shop, alongside adorable Disney-themed home goods and Mickey ears unique to each country. While many shops throughout the parks have similar items, the country specific merchandise isn't anywhere else in the parks.
      </p>
      <img src={images[3]} alt='France Pavilion' style={imageStyle} />

      <p style={paragraphStyle}>
        With France, you enter a Parisian neighbourhood, complete with a stunning replica of the Eiffel Tower and charming Paris-inspired streets. Ratatouille is heavily featured in this pavilion.
      </p>
      <p style={paragraphStyle}>
        Next up, Morocco! The Morocco Pavilion at Epcot has detailed replicas of Marrakesh's medinas and the Koutoubia Minaret. There is a bustling marketplace to walk through, and Lauren and I shared a fantastic meal in Morocco at Spice Road Table. Morocco is so colourful!
      </p>
      <img src={images[4]} alt='Morocco Pavilion' style={imageStyle} />

      <p style={paragraphStyle}>
        Japan’s gardens are so serene, featuring a majestic torii gate and a detailed replica of the Katsura Imperial Villa. In the shops, you can also find Animal Crossing plushies, Sailor Moon, Kirby and more anime merchandise, which I was over the moon about. I didn’t expect to see any franchises other than Disney!
      </p>
      <img src={images[5]} alt='Japan Pavilion' style={imageStyle} />

      <div style={{ margin: '20px' }}>
        <AdSenseAd />
      </div>

      <p style={paragraphStyle}>
        The Italy Pavilion at Epcot recreates the beauty of Venice, featuring detailed replicas of St. Mark's Campanile and the Doge's Palace, alongside intricate Venetian canals and gondolas. The authentic Italian dining experiences were sadly booked up, (try Via Napoli and Tutto Italia) but we had fun viewing Venetian masks and testing luxury fragrances.
      </p>
      <img src={images[6]} alt='Italy Pavilion' style={imageStyle} />

      <h2 style={headingStyle}>❄ Frozen Ever After Ride is A Must!</h2>
      <p style={paragraphStyle}>
        Norway is a must-see if you love Frozen. The line for Frozen Ever After Ride at Epcot was VERY long when we went, and if you have the budget, getting a fast-pass truly is a game-changer for the experience. I went later with my husband and bit the bullet buying a "Genie+ Pass," and WOW, what a world of difference in not having to wait in a queue. Can’t stress this enough!
      </p>

      <p style={paragraphStyle}>
        If you don’t know what Genie+ is, it’s a paid service at Disney World that allows guests to reserve access to expedited lines for select attractions, helping to significantly reduce wait times. Some rides do have an added fee when booking throughout the day, which can get pretty expensive if you are covering several kids' passes.
      </p>

      <div style={{ margin: '20px' }}>
        <AdSenseAd />
      </div>

      <h2 style={headingStyle}>🚀 Celebrate Technology</h2>
      <p style={paragraphStyle}>
        As for celebrating technology, low-impact rides like Soarin’, Test Track, and Mission: Earth added thrills to our exploration, making Epcot a blend of educational fun and adventure. Again, none of these rides are roller-coasters but more visual experiences.
      </p>
      <p style={paragraphStyle}>
        Try Jeoffery’s special drinks to stay hydrated; the space-themed drinks are very fun and sweet.
      </p>

      <h2 style={headingStyle}>💥 The Most Epic Night-Show</h2>
      <p style={paragraphStyle}>
        Seeing Epcot at night is a must as well. There are far fewer kids, lots of drinks and food to try. We headed back to France and got a delicious crepe and ate by the ”The Fountain of Rats”. We stayed out until the night show, which recently changed to a new show called 'Luminous: Symphony of Us."
      </p>

      <p style={paragraphStyle}>
        Expect to see a stunning light show with large water fountains, fireworks, and music. I wouldn’t say I’m a full-blown Disney fanatic though I totally enjoy everything Disney and I had tears in my eyes listening to the nostalgic music! I was truly so happy to be there with my best friend and we stood near the fence and didn’t have a problem seeing a wonderful view despite getting there late.
      </p>

      <div style={{ margin: '20px' }}>
        <AdSenseAd />
      </div>

      <p style={paragraphStyle}>
        After 25,000 steps (Walt Disney World is a workout), we got some sleep to experience Magic Kingdom and Animal Kingdom the next day.
      </p>
      <img src={images[8]} alt='Epcot Night Show' style={imageStyle} />

      <h2 style={headingStyle}>🏰 Day 2: Magic Kingdom</h2>
      <p style={paragraphStyle}>
        We started our day heading to the bus stop and arrived at the iconic Magic Kingdom. Side note, but when I went to Walt Disney World with my husband, Magic Kingdom was his least favorite park as it is the most crowded and most “Disney princess” themed, appealing most to kids. That being said, for a first-time Disney-goer, this is a must-do! Seeing the castle, the characters, all the shops lined up - it's the quintessential Walt Disney World experience of nostalgia and whimsy.
      </p>
      <img src={images[9]} alt='Magic Kingdom' style={imageStyle} />

      <p style={paragraphStyle}>
        Starting our journey in Fantasyland, we ventured on Peter Pan's Flight and The Many Adventures of Winnie the Pooh, embracing the magic of these timeless stories. The lounge fly backpacks at the Magic Kingdom Gift Shops are particularly cute!
      </p>
      <p style={paragraphStyle}>
        Adventureland’s Pirates of the Caribbean Ride and Tomorrowland's Space Mountain offered immersive experiences that were both exhilarating and breathtaking! Again, a Genie+ would have elevated our experience. If you are choosing which rides to use the fast pass on, Space Mountain is a good one to use it on as the line gets very long.
      </p>

      <div style={{ margin: '20px' }}>
        <AdSenseAd />
      </div>

      <p style={paragraphStyle}>
        We shared a massive hot dog at the Coca-Cola Refreshment Corner with a view of the castle. It was delicious, and the atmosphere was so retro which I personally love. We then exited the park, visiting the Main Street Shops - the Candy Shop is a must-see!
      </p>
      <img src={images[10]} alt='Magic Kingdom Candy Shop' style={imageStyle} />

      <p style={paragraphStyle}>
        Lauren and I didn’t schedule to meet any characters or watch parades, instead we saw those experiences in passing which was just as magical for our slightly short attention spans. It made for more of a relaxing time. Booking too many experiences with time slots in advance can get a little overwhelming.
      </p>

      <div style={{ margin: '20px' }}>
        <AdSenseAd />
      </div>

      <img src={images[11]} alt='Magic Kingdom Characters' style={imageStyle} />

      <h2 style={headingStyle}>🦁 Park Hopped to Animal Kingdom: A Wild Adventure</h2>
      <p style={paragraphStyle}>
        We used our Park Hopper ticket to head to Animal Kingdom via bus transportation.
      </p>
      <p style={paragraphStyle}>
        Unpopular opinion, but Animal Kingdom is my all-time favorite park. Its unique blend of Disney theme park allure and zoo offers an experience that celebrates the natural world, diverse cultures, and adventurous exploration. Its lush, expansive setting is relaxing and enchanting, and it's typically less crowded than Magic Kingdom, making it a great way to wind down if you're using a Park Hopper pass.
      </p>
      <img src={images[12]} alt='Animal Kingdom' style={imageStyle} />

      <p style={paragraphStyle}>
        The Tree of Life is a masterpiece with intricately carved artwork of various animals, standing a whopping 145 feet tall and 50 feet wide at its base. Live animals surround the tree, including beautiful birds. At night, the Tree of Life Awakening is a light and music show.
      </p>
      <p style={paragraphStyle}>
        The park is divided into several areas, with Africa and Pandora - The World of Avatar being my favorites.
      </p>

      <div style={{ margin: '20px' }}>
        <AdSenseAd />
      </div>

      <img src={images[13]} alt='Tree of Life' style={imageStyle} />

      <p style={paragraphStyle}>
        An amazing experience for animal lovers is the Kilimanjaro Safari ride through the African savannah. Seeing the Harambe Wildlife Reserve from the safari bus and getting so close to beautiful giraffes, elephants, rhinos, ostriches, and catching a glimpse of lions was astounding. We went towards the end of the day, and there wasn't a line at all.
      </p>
      <img src={images[14]} alt='Kilimanjaro Safari' style={imageStyle} />

      <h2 style={headingStyle}>⛰ Must-Do Rides!</h2>
      <p style={paragraphStyle}>
        One of the most thrilling rides I went on during the trip is called Expedition Everest. You might be able to spot a mountain, far off in the horizon when you're walking around Animal Kingdom, and the coaster is inside the mountain located in the Asia section of the park.
      </p>
      <img src={images[15]} alt='Expedition Everest' style={imageStyle} />

      <p style={paragraphStyle}>
        The high-speed roller coaster with a Himalayan expedition theme was much scarier and thrilling than most Disney World rides. I won’t give away the unexpected twists you’re in for, but if you're looking for at least one thrilling roller coaster, this one is the best ride to get you screaming! Check out Lauren’s face😂
      </p>

      <div style={{ margin: '20px' }}>
        <AdSenseAd />
      </div>

      <img src={images[16]} alt='Expedition Everest Thrills' style={imageStyle} />

      <p style={paragraphStyle}>
        The Pandora - World of Avatar section of the park is beyond expectations, entering the alien world from James Cameron’s film with floating mountains and bioluminescent floral plants. Another thrilling ride is Flight of Passage, an immersive 3D flying simulator experience that transports you to Pandora.
      </p>
      <p style={paragraphStyle}>
        You are “paired” with your own avatar and the experience simulates riding on the back of a banshee through Pandora. The breathtaking visuals and the sensation of truly flying through the world of Avatar is so hyper-real and stunning that I teared up both times I went on the ride!
      </p>

      <h2 style={headingStyle}>🧞 Prepare for Major Wait Times - or Genie+</h2>
      <p style={paragraphStyle}>
        While the theme park does its best to make the Flight of Passage queue exciting with winding paths through the Pandora landscapes, when Lauren and I went, we waited close to two hours, which was pretty exhausting at the end of the day. So again, I can’t stress enough, if you can swing it, do the Genie+ and just pay extra to walk right to the front of the line.
      </p>
      <p style={paragraphStyle}>
        We sadly didn't have enough time after the long wait to do the Na'vi River Journey, a boat ride experience deep into a bioluminescent rainforest, but Flight of Passage really was an insanely cool experience I’d love to experience over and over again. Even if you are not particularly a fan of Avatar, you’ll love it.
      </p>
      <p style={paragraphStyle}>
        When we exited the ride, it was nighttime, and the bioluminescence was even more prominent in the dark! Keep in mind Animal Kingdom does close earlier than other parks, so depending on the time of year, it might still be light as you’re guided to exit.
      </p>

      <div style={{ margin: '20px' }}>
        <AdSenseAd />
      </div>

      <h2 style={headingStyle}>🐠 Largest Rainforest Cafe in The World</h2>
      <p style={paragraphStyle}>
        For dinner, we went to the largest Rainforest Café in the world, which had an incredible gift shop. I had a great meal of steak, shrimp, and vegetables, while observing all the beautiful fish in the aquarium all around us. See vlog for visuals as my phone had died at the end of a long day and my iPhone is what captured all the images in this post!
      </p>
      <img src={images[17]} alt='Rainforest Cafe' style={imageStyle} />

      <p style={paragraphStyle}>
        I hope you enjoyed reading my Walt Disney World experience, and a throwback picture to my first time visiting with my family in 2002. Both times gave me priceless memories with the people I love!
      </p>
      <p style={paragraphStyle}>
        While there are tons of articles sharing the insider places to visit, you’ll find gems even if you go into the parks without pre-planning too much. Everywhere you look, you’ll see beauty and great food so relax and have fun. You’ll have to share your experience with me either in the vlog channel comments, or on the blog as I’d love to read about your visit!
      </p>

      <img src={signature} alt='Signature' style={imageStyle} />

      <div style={{ margin: '20px' }}>
        <AdSenseAd />
      </div>

      <Comments website-id={websiteId} pageId={"epcot"} />
    </div>
  );

  return (
    <div ref={blogRef}>
      <TextReveal text='WALT DISNEY WORLD' />
      <Card blogContent={blogContent} />
    </div>
  );
};

export default Disney2Post;
