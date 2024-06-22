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
        <div><TextReveal text='NEW ZEALAND' /></div>
        <div className="card">
            <div className="blog-content">{blogContent}</div>
        </div>
    </div>
);

const NewZealand = () => {
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
                <title>New Zealand | Aukland Vlog and Experience</title>
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
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25vh' }}>
                <a href="/travel" style={{ fontFamily: 'Arapey', fontSize: '1.25em', color: 'black', textDecoration: 'none' }}>
                    TRAVEL // ITINERARIES
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
            <DropCap text="Welcome to an epic travel vlog of my experience, flying from Toronto all the way to Auckland, New Zealand for a magical week halfway around the
world! I stayed at a whimsical hotel called Fable Auckland on Queen Street, and I have a full review of my experience here. But first, let’s talk about everything I did in the unforgettable week.
I traveled there with my mom, and we chose to do a mother-daughter trip because about six months ago, I connected with a bridal shop called Natalie
Rose Bridal on Instagram and decided to go there for a fitting!" />
            <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
          
<p style={paragraphStyle}>
            It may seem extreme to fly all the way to New Zealand for a wedding dress, but I’ve always wanted to visit Auckland, and I knew Natalie would find me the perfect dress. We instantly hit it off and had similar, fairytale-inspired styles.
            </p>
            <h2 style={headingStyle}>✈ The Journey to Auckland</h2>
            <p style={paragraphStyle}>
            To get to Auckland, New Zealand, we took an Air Canada flight from Toronto to Vancouver and unfortunately had a really long layover. It ended
up being nice because it was a beautiful day, and we walked around downtown. Vancouver is magical on a beautiful summer day, and we walked along the Vancouver seawall and shared a thin-crust pizza from Cafe Villaggio.
I came across the Hello Kitty Café in Vancouver, which was adorable, and I shopped around until heading back to the airport for our next flight to Fiji! It was a whopping 11 hours, and I was in a middle seat, but I was so excited finally getting off the plane to see tons of Whittaker's chocolate (a New Zealand chocolate company) at the Fiji airport to get me excited for the final three-hour journey landing in Auckland. When I say Whittaker’s chocolate is my favorite, I mean it. I ration it back home in Canada because it is hard to find!
            </p>
            <p style={paragraphStyle}>
            Travel Tip: When landing in Auckland, if you travel through the international airport, be aware that taxis tend to gouge prices, quoting $100 to get to Queen Street, whereas Uber was $60. However, the shuttle was $20 per person, so it ended up being $40 for both of us, and the service was great.
            </p>
            <p style={paragraphStyle}>
            We checked into Fable Auckland, which is super central and has beautiful decor! I especially loved all their tea sets, which are from T2 Tea, a brand born in Melbourne, Australia with unique patterns and bright colours.
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
            <h2 style={headingStyle}>🛍 Day One: Shopping and Beating Jet lag</h2>
            <p style={paragraphStyle}>
            We landed in the morning and, after freshening up, we walked around Queen Street. There’s a beautiful mall atrium on Elliot Street across from the central square we explored. We were looking for a couple of items from the drugstore and checked out Life Pharmacy, Farmers, and Chemist Warehouse, New Zealand’s version of Shopper’s Drug Mart from Canada, and CVS in the US. I fell in love with some local shops like Creative & Brave and found so many earthy jewelry pieces with a fairy-like vibe, which is my favorite. We walked down to see the waterfront and got familiar with our new home for the week.
Chemist Warehouse was a bit overwhelming with so many products packed in there, but I did pick up a couple of McoBeauty items, an Australian brand known for duping Charlotte Tilbury!
We ate at Cooke’s Restaurant at the hotel once we got back from our day shopping. I had the best cappuccino I’ve ever had in my life along with pumpkin ravioli, and my mom had the fish of the day. Both were amazing! Throughout our trip, we did not have one mediocre meal. Everything tasted fresh, and the presentation at cafes and restaurants was top-tier.
After forcing ourselves to stay up as long as possible, we had a great night’s sleep and were ready for day two!            </p>
            <div style={gridContainerStyle}>
                <img src={images[1]} alt="Maui room 1" style={imageStyle} />
                <img src={images[2]} alt="Maui room 2" style={imageStyle} />
            </div>
            <h2 style={headingStyle}>🏝 Day Two: More Shopping, Auckland Art Gallery & Waiheke Island
            </h2>
            <p style={paragraphStyle}>
            When I shop, I always take
pictures of things that I want and
then sit on them, so I went back to
the pharmacy and picked up some
Karen Murrell lipsticks, a New
Zealand brand with adorable
fashion illustrations on the
packaging. They are known for
being rich in natural pigment,
using organic, natural, and proven
safe chemical ingredients from
ethical and/or renewable sources.
Ethical & eco-friendly brands are a staple in New Zealand!
At Farmers, I picked up a whipped shower foam that looks like whipped cream from a brand called Sundae in the Pavlova scent, which I thought was perfect for the trip. My mom and I were definitely on the hunt for the best Pavlova while we were here. I also picked up a candle called Caramel Popcorn and Chops, which apparently is very nostalgic for New Zealanders and Australians when at the movie theatres. This is one of the best-smelling candles I’ve ever had, especially if you like the smell of baked goods. As I’m writing this article, it’s burning and smells so sweet it makes me want a little treat. 😀
We tried Bird on a Wire, which is a chain restaurant known for fried chicken and chicken dishes but was also exceptional. I really enjoyed the Eggs Benedict. You really can’t go wrong in New Zealand for brunch food! We took a walk to the Auckland Art Gallery to see some local art as well. I picked up a card from their beautiful array of gifts at the museum, and we caught the ferry at the last minute and headed to Waiheke Island. Waiheke is now one of my favorite places I’ve ever been!            </p>
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
            <h2 style={headingStyle}>🌴 Waiheke Island</h2>
            <p style={paragraphStyle}>
            Arriving on the island, we drove past a beach town on our way to Oneroa Beach. When you walked closer to the rocky area along the beach, there
were tons of seashells and trees growing out of the sides of the rocks, surrounded by beautiful crystal clear water. Truly a breathtaking view. I can only imagine how nice it would be to swim here in the summer.
The island is quite big, but we chose to walk from the beach through the surf town to the countryside to see the beautiful vineyards on our way to Mudbrick Vineyard and Restaurant. This was said to be one of the best
wineries in the world according to reviews, and I too had a great experience. While the restaurant was closed for a private event, my mom and I had an amazing drink outside watching the sunset and then had dinner at The Archive Bistro. The ambiance was candlelit with a beautiful fireplace. It was cozy, and the food was incredible, and my mom and I had great chats sitting by the fire. It was a public holiday when we went, so there was a surcharge, but it was definitely worth it. I’m not a wine drinker, so I had a cocktail, but my mom really enjoyed her red wine. An Uber took us back to the ferry to head back to the hotel.            </p>
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
            <h2 style={headingStyle}>👗 Day Three: Little & Friday in Ponsonby</h2>
            

            <p style={paragraphStyle}>
            I asked Natalie, the bridal shop owner, if she had any recommendations of places to visit while I was here in Auckland. She recommended checking
            out Ponsonby, which is a hip neighbourhood, and to go to Little & Friday, a local bakery. My mom and I split a breakfast quiche and their famous doughnut. I’m not typically a donut person, but it was an incredible pastry, and I can totally see why it is such a hit with the locals. The shopping strip had a bunch of eclectic shops like thrift stores, boutiques, and trendy cafés! I even went to a second cafe for another cappuccino since I’m a bit of a coffee addict, and the coffee here is superior. There were so many items that I loved in the Ponsonby shops.
                        </p>

                        <h2 style={headingStyle}>👰 Day Four: Bridal Appointment in Parnell</h2>

                       
            <img src={images[8]} alt="Maui luau" style={imageStyle} />
            <p style={paragraphStyle}>
            The following day we headed to Parnell to visit Natalie Rose Bridal
to get a peek at my dress that was being made and to try on a bunch of Eva Lendel’s latest bridal collection! For more details about each dress I tried & a get ready with me for my hair and makeup, check out my beauty breakdown here.
Entering Natalie Rose Bridal on Parnell Street is so dreamy. It’s this
fairytale-inspired corner shop with white panels and pops of pink wainscoting. When you enter, there are gorgeous pink velvet curtains, gold bars filled with stunning bridal gowns sparkling from all the light coming in from the sun-filled windows. I tried on six different
looks, all of which I loved. If you want to see all the dresses, check out my article here for all the behind-the-scenes photos! If you are a bride and are looking at this new collection, check out my quiz to see which one might suit you best along with hair and makeup ideas.            </p>
            <p style={paragraphStyle}>
            My mom was such a trooper, taking some behind-the-scenes footage and photos as I tried on beautiful gowns. We walked from Natalie Rose Bridal to
Cibo for fish and chips and our first taste of New Zealand Pavlova!
Pavlova is my favorite dessert, and my mom makes a great version that I always request on my birthday or Christmas! My best friend’s dad made it when I was at her house as a teen, and I had to get him to give my mom the recipe. While we were used to a lot of fruit, which is typical on top of Pavlova, at this restaurant the salted caramel/peanut was the most popular, and we devoured it. Best. Dessert. Ever.            </p>
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

export default NewZealand;
