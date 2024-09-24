import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Comments } from '@hyvor/hyvor-talk-react';
import BookNowButton from '../../Components/BookNowButton';
import ResponsiveYoutube from '../../Components/ResponsiveYoutube';
import SubscribeVlog from '../../Components/SubscribeVlog';
import AdSenseAd from '../../Advertising/Ads';
import ResponsiveIframe from '../../Components/ResponsiveIframe';
import { initGA, logPageView } from '../../analytics';
import DropCap1 from './DropCap1';
import ArticleTitle from '../../Components/ArticleTitle';


const images = [
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/1.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/2.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/3.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/4.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/5.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/6.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/7.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/8.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/9.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/10.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/11.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/12.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/13.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/14.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/15.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/16.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/17.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/18.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/19.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/20.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/21.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/22.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/23.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/24.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/25.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/26.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/27.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/28.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/29.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/30.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/31.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/32.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/33.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/34.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/35.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/36.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/37.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/38.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/39.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/40.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/41.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/42.jpeg`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/43.png`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/44.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/45.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/46.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/47.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/48.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/49.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/50.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/51.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/52.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/53.JPG`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/54.png`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/55.png`,
    `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/56.png`,

];

const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;
const fable = `${process.env.PUBLIC_URL}/Images/Articles/Fable/FableAucklandThumbnail.jpg`;

const Card = ({ blogContent }) => (
  <div
    style={{
      padding: '10px 20px', // Existing padding
      margin: '1rem auto',
      maxWidth: '800px', // Control max width to center the content
      padding: '1rem', // Add padding to prevent text from touching the edges
    }}
  >
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);

const NewZealand = () => {

  useEffect(() => {
    initGA();
    logPageView('/newzealand');
  }, []);


  const websiteId = '10910';
  const blogRef = useRef(null);

 
  const headingStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 'normal',
    fontFamily: 'GFS Didot, serif',
    color: '#000000',
    margin: '30px auto'
};


const paragraphStyle = {
  fontSize: '22px',
  color: '#000000',

  fontFamily: 'GFS Didot, serif',
  margin: '1rem 2rem',
  maxWidth: '500px', // Consistent with the other paragraphs
  lineHeight: '1.6',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const linkStyle = {
  textDecoration: 'none', // Removes underline from links
  fontFamily: 'GFS Didot, serif',
  color: '#000000', // Inherits the color of the surrounding text
};

const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '10px',
    margin: '1rem auto'
};

const imageStyle = {
  display: 'block',
  margin: '1rem auto',
  borderRadius: '0px',
  maxWidth: '500px',
  height: 'auto'
};

const pinterestGridStyle = {
  display: 'grid',
  gap: '1rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(236px, 1fr))', // Adjusts columns based on screen size
  justifyItems: 'center',
  margin: '1rem 0',
};

const iframeStyle = {
  width: '100%',
  maxWidth: '236px',
  height: '520px', // Maintains original height
  border: 'none',
  scrolling: 'no',
};

const captionStyle = {
  textAlign: 'center',
  fontSize: '1.1rem',
  fontFamily: 'Playfair Display, serif',
  margin: '1rem auto',
  maxWidth: '100%',
  fontStyle: 'italic',
};

    const blogContent = (
        <div className="container">
  <Helmet>
  <title>New Zealand | Auckland Vlog and Experience - Jackie Wyers</title>
  <link rel="canonical" href="https://jackiewyers.beauty/newzealand" />

  <meta name="description" content="Explore Auckland with Jackie Wyers in this detailed travel vlog and review, featuring top spots, travel tips, and hidden gems around the city." />
  <meta name="keywords" content="New Zealand travel, Auckland vlog, Jackie Wyers, Fable Auckland, shopping in Auckland, Waiheke Island, Ponsonby, Mount Eden, Auckland Art Gallery, travel tips, luxury hotels, New Zealand travel blog, Auckland experiences, best places to visit in Auckland, Auckland travel guide, New Zealand attractions, city tours, scenic walks, cafes in Auckland, Little and Friday, travel with Jackie Wyers, Auckland photography, New Zealand lifestyle, local experiences, Auckland scenic spots, iconic landmarks, New Zealand itinerary, Auckland city guide" />

  <meta property="og:title" content="New Zealand | Auckland Vlog and Experience - Jackie Wyers" />
  <meta property="og:description" content="Explore Auckland with Jackie Wyers in this detailed travel vlog and review, featuring top spots, travel tips, and hidden gems around the city." />
  <meta property="og:image" content="https://jackiewyers.beauty/Images/Articles/NewZealand/NZThumbnail.jpg" />
  <meta property="og:url" content="https://jackiewyers.beauty/newzealand" />
  <meta property="og:type" content="article" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="New Zealand | Auckland Vlog and Experience - Jackie Wyers" />
  <meta name="twitter:description" content="Explore Auckland with Jackie Wyers in this detailed travel vlog and review, featuring top spots, travel tips, and hidden gems around the city." />
  <meta name="twitter:image" content="https://jackiewyers.beauty/Images/Articles/NewZealand/NZThumbnail.jpg" />

  {/* Google Analytics Script */}
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-RT6GR7JXYG"></script>
  <script src={`${process.env.PUBLIC_URL}/analytics.js`} async></script>

  {/* Google Ads Script */}
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4660168246825318" crossorigin="anonymous"></script>

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "New Zealand | Auckland Vlog and Experience - Jackie Wyers",
        "description": "Explore Auckland with Jackie Wyers in this detailed travel vlog and review, featuring top spots, travel tips, and hidden gems around the city.",
        "image": "https://jackiewyers.beauty/Images/Articles/NewZealand/NZThumbnail.jpg",
        "author": {
          "@type": "Person",
          "name": "Jackie Wyers"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Jackie Wyers Beauty",
          "logo": {
            "@type": "ImageObject",
            "url": "https://jackiewyers.beauty/logo.png"
          }
        },
        "datePublished": "2024-07-27",
        "dateModified": "2024-09-20",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://jackiewyers.beauty/newzealand"
        }
      }
    `}
  </script>
</Helmet>


<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <a href="/travel" style={{ fontFamily: 'GFS Didot, serif', fontSize: '1rem', color: '#000000', textDecoration: 'none' }}>
          TRAVEL // ITINERARIES
        </a>
      </div>


          
            <ArticleTitle
  mainTitle="A Whimsical Week Exploring Auckland, New Zealand"
  subTitle="Waiheke Island, Queen Street Shopping & Dream Appointment!"
  author="Jackie Wyers"
  publishDate='June 21st,2024'
/>      
           


                <ResponsiveYoutube src="https://www.youtube.com/embed/-eLreMotKEs?si=5VvA8ay_d6aymnOQ" title="NEW ZEALAND TRAVEL VLOG 🇳🇿 Dream Bridal Fitting, Waiheke Island, Shopping & More! 🕊️" />
            
                <div style = {{textAlign: 'center', margin: '10px auto' }}>
<SubscribeVlog />
</div>

<p style={{ margin: '20px auto', textAlign: 'center', fontSize: '1.1rem', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
</p>


            <DropCap1 text="Welcome to an epic travel vlog of my experience, flying from Toronto all the way to Auckland, New Zealand for a magical week halfway around the
world! I stayed at a whimsical hotel called Fable Auckland on Queen Street, and I have a full review of my experience at the link below. But first, let’s talk about everything I did in the unforgettable week." />


<p style={paragraphStyle}>
    <div style = {{textAlign: 'center'}}>
    <a href="/fableaukland" style = {{ textAlign: 'center', color: '#000000',fontSize: '1.5rem' }}> Fable Auckland Review</a>

    </div>
</p>
<p style={paragraphStyle}>
            It may seem extreme to fly all the way to New Zealand for a wedding dress, but I’ve always wanted to visit Auckland, and I knew Natalie would find me the perfect dress. We instantly hit it off and had similar, fairytale-inspired styles.
            </p>
<p style={paragraphStyle}>
I traveled there with my mom, and we chose to do a mother-daughter trip because about six months ago, I connected with a bridal shop called Natalie
Rose Bridal on Instagram and decided to go there for a fitting! It may seem extreme to fly all the way to New Zealand for a wedding dress, but I’ve always wanted to visit Auckland, and I knew Natalie would find me the perfect dress. We instantly hit it off and had similar, fairytale-inspired styles.
</p>


            <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
          

            <h2 style={headingStyle}>✈ The Journey to Auckland</h2>
            <p style={paragraphStyle}>
            To get to Auckland, New Zealand, we took an Air Canada flight from Toronto to Vancouver and unfortunately had a really long layover. It ended
up being nice because it was a beautiful day, and we walked around downtown. Vancouver is magical on a beautiful summer day, and we walked along the Vancouver seawall and shared a thin-crust pizza from Cafe Villaggio.
</p>
<div style = {gridContainerStyle}>
<img src={images[0]} alt="Auckland view 1" style={imageStyle} />

</div>
<div style={gridContainerStyle}>
                <img src={images[1]} alt="Auckland room 1" style={imageStyle} />
                <img src={images[2]} alt="Auckland room 2" style={imageStyle} />
            </div>
<p style = {paragraphStyle}>

I came across the Hello Kitty Café in Vancouver, which was adorable, and I shopped around until heading back to the airport for our next flight to Fiji! It was a whopping 11 hours, and I was in a middle seat, but I was so excited finally getting off the plane to see tons of Whittaker's chocolate (a New Zealand chocolate company) at the Fiji airport to get me excited for the final three-hour journey landing in Auckland. When I say Whittaker’s chocolate is my favorite, I mean it. I ration it back home in Canada because it is hard to find!

</p>
           

          

            <p style={paragraphStyle}>
            Travel Tip: When landing in Auckland, if you travel through the international airport, be aware that taxis tend to gouge prices, quoting $100 to get to Queen Street, whereas Uber was $60. However, the shuttle was $20 per person, so it ended up being $40 for both of us, and the service was great.
            </p>
            <p style={paragraphStyle}>
            We checked into Fable Auckland, which is super central and has beautiful decor! I especially loved all their tea sets, which are from T2 Tea, a brand born in Melbourne, Australia with unique patterns and bright colours.
            </p>

            <div style={gridContainerStyle}>    
            <img src={images[3]} alt="Auckland room 4" style={imageStyle} />
                <img src={images[4]} alt="Auckland room 4" style={imageStyle} />
                <img src={images[5]} alt="Auckland room 4" style={imageStyle} />
                <img src={images[6]} alt="Auckland room 4" style={imageStyle} />
                
            </div>
           
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2rem 0' }}>
            <BookNowButton href="https://plannin.com/en/hotel/f776fea4-a8ec-41f7-bd2f-2830ca7b615e?currency=USD" target="_blank" rel="noopener noreferrer"/>
            </div>
            <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
            <h2 style={headingStyle}>🛍 Day One: Shopping and Beating Jet lag</h2>
            <p style={paragraphStyle}>
            We landed in the morning and, after freshening up, we walked around Queen Street. There’s a beautiful mall atrium on Elliot Street across from the central square we explored. We were looking for a couple of items from the drugstore and checked out Life Pharmacy, Farmers, and Chemist Warehouse, New Zealand’s version of Shopper’s Drug Mart from Canada, and CVS in the US. I fell in love with some local shops like Creative & Brave and found so many earthy jewelry pieces with a fairy-like vibe, which is my favorite. We walked down to see the waterfront and got familiar with our new home for the week.
            <div style={gridContainerStyle}>    
                <img src={images[7]} alt="Auckland market" style={imageStyle} />
                <img src={images[8]} alt="Auckland market 2" style={imageStyle} />
            </div>
            
            <p style={paragraphStyle}>
Chemist Warehouse was a bit overwhelming with so many products packed in there, but I did pick up a couple of McoBeauty items, an Australian brand known for duping Charlotte Tilbury!
</p>
<div style={gridContainerStyle}>    
                <img src={images[9]} alt="Auckland market" style={imageStyle} />
                <img src={images[10]} alt="Auckland market 2" style={imageStyle} />
            </div>
<p style={paragraphStyle}>

We ate at Cooke’s Restaurant at the hotel once we got back from our day shopping. I had the best cappuccino I’ve ever had in my life along with pumpkin ravioli, and my mom had the fish of the day. Both were amazing! Throughout our trip, we did not have one mediocre meal. Everything tasted fresh, and the presentation at cafes and restaurants was top-tier.
</p>
<p style={paragraphStyle}>

After forcing ourselves to stay up as long as possible, we had a great night’s sleep and were ready for day two!            </p>
     </p>

<div style={gridContainerStyle}>    
                <img src={images[11]} alt="Auckland market" style={imageStyle} />
                <img src={images[12]} alt="Auckland market 2" style={imageStyle} />
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
</p>
       <ResponsiveIframe src="https://shopmy.us/collections/public/619985?noHeader=true" title="Skims X Lana Del Rey Collection" />

<p style={paragraphStyle}>
At Farmers, I picked up a whipped shower foam that looks like whipped cream from a brand called Sundae in the Pavlova scent, which I thought was perfect for the trip. My mom and I were definitely on the hunt for the best Pavlova while we were here. I also picked up a candle called Caramel Popcorn and Chops, which apparently is very nostalgic for New Zealanders and Australians when at the movie theatres. This is one of the best-smelling candles I’ve ever had, especially if you like the smell of baked goods. As I’m writing this article, it’s burning and smells so sweet it makes me want a little treat. 😀
</p>

<div style={gridContainerStyle}>    
                <img src={images[13]} alt="Auckland market" style={imageStyle} />
                <img src={images[14]} alt="Auckland market 2" style={imageStyle} />
                <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
                <img src={images[15]} alt="Auckland market 2" style={imageStyle} />
                <img src={images[16]} alt="Auckland market 2" style={imageStyle} />

            </div>

<p style={paragraphStyle}>
We tried Bird on a Wire, which is a chain restaurant known for fried chicken and chicken dishes but was also exceptional. I really enjoyed the Eggs Benedict. You really can’t go wrong in New Zealand for brunch food! We took a walk to the Auckland Art Gallery to see some local art as well. I picked up a card from their beautiful array of gifts at the museum, and we caught the ferry at the last minute and headed to Waiheke Island. Waiheke is now one of my favorite places I’ve ever been!            </p>

<div style={gridContainerStyle}>    
                <img src={images[17]} alt="Auckland market" style={imageStyle} />
                <img src={images[18]} alt="Auckland market 2" style={imageStyle} />
                
                <img src={images[19]} alt="Auckland market 2" style={imageStyle} />
                <img src={images[20]} alt="Auckland market 2" style={imageStyle} />

            </div>

           
            <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
       
         
            <h2 style={headingStyle}>🌴 Waiheke Island</h2>
            <p style={paragraphStyle}>
            Arriving on the island, we drove past a beach town on our way to Oneroa Beach. When you walked closer to the rocky area along the beach, there
were tons of seashells and trees growing out of the sides of the rocks, surrounded by beautiful crystal clear water. Truly a breathtaking view. I can only imagine how nice it would be to swim here in the summer.
</p>
<div style={gridContainerStyle}>    
                <img src={images[21]} alt="Auckland market" style={imageStyle} />
                <img src={images[22]} alt="Auckland market 2" style={imageStyle} />
                
            </div>
            <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
            <div style={gridContainerStyle}>    
            <img src={images[23]} alt="Auckland market 2" style={imageStyle} />
              </div>


<p style={paragraphStyle}>

The island is quite big, but we chose to walk from the beach through the surf town to the countryside to see the beautiful vineyards on our way to Mudbrick Vineyard and Restaurant. This was said to be one of the best
</p>
<div style={gridContainerStyle}>    
            <img src={images[24]} alt="Auckland market 2" style={imageStyle} />
              </div>

<p style={paragraphStyle}>

wineries in the world according to reviews, and I too had a great experience. While the restaurant was closed for a private event, my mom and I had an amazing drink outside watching the sunset and then had dinner at The Archive Bistro. The ambiance was candlelit with a beautiful fireplace. It was cozy, and the food was incredible, and my mom and I had great chats sitting by the fire. It was a public holiday when we went, so there was a surcharge, but it was definitely worth it. I’m not a wine drinker, so I had a cocktail, but my mom really enjoyed her red wine. An Uber took us back to the ferry to head back to the hotel.            </p>
<div style={gridContainerStyle}>    
            <img src={images[25]} alt="Auckland market 2" style={imageStyle} />
            <img src={images[26]} alt="Auckland market 2" style={imageStyle} />

            <img src={images[27]} alt="Auckland market 2" style={imageStyle} />
            <img src={images[28]} alt="Auckland market 2" style={imageStyle} />

            
              </div>
          
            <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
       
            <h2 style={headingStyle}>👗 Day Three: Little & Friday in Ponsonby</h2>
            

            <p style={paragraphStyle}>
            I asked Natalie, the bridal shop owner, if she had any recommendations of places to visit while I was here in Auckland. She recommended checking
            out Ponsonby, which is a hip neighbourhood, and to go to Little & Friday, a local bakery. My mom and I split a breakfast quiche and their famous doughnut. I’m not typically a donut person, but it was an incredible pastry, and I can totally see why it is such a hit with the locals. The shopping strip had a bunch of eclectic shops like thrift stores, boutiques, and trendy cafés! I even went to a second cafe for another cappuccino since I’m a bit of a coffee addict, and the coffee here is superior. There were so many items that I loved in the Ponsonby shops.
                        </p>
                        <div style={gridContainerStyle}>    
            <img src={images[29]} alt="Auckland market 2" style={imageStyle} />
            <img src={images[30]} alt="Auckland market 2" style={imageStyle} />

            <img src={images[31]} alt="Auckland market 2" style={imageStyle} />
            <img src={images[32]} alt="Auckland market 2" style={imageStyle} />

            
              </div>
                        <h2 style={headingStyle}>👰 Day Four: Bridal Appointment in Parnell</h2>
                        <div style={gridContainerStyle}>    
  <img src={images[33]} alt="Auckland market 2" style={{...imageStyle, float: 'left', marginRight: '1rem', marginBottom: '1rem'}} />
  <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
  <p style={paragraphStyle}>
    The following day we headed to Parnell to visit Natalie Rose Bridal
    to get a peek at my dress that was being made and to try on a bunch of Eva Lendel’s latest bridal collection! For more details about each dress I tried & a get ready with me for my hair and makeup, check out my beauty breakdown here.
    Entering Natalie Rose Bridal on Parnell Street is so dreamy. It’s this
    fairytale-inspired corner shop with white panels and pops of pink wainscoting. When you enter, there are gorgeous pink velvet curtains, gold bars filled with stunning bridal gowns sparkling from all the light coming in from the sun-filled windows. I tried on six different
    looks, all of which I loved. If you want to see all the dresses, check out my article here for all the behind-the-scenes photos! If you are a bride and are looking at this new collection, check out my quiz to see which one might suit you best along with hair and makeup ideas.            
  </p>


</div>  


<div style={gridContainerStyle}>    
            <img src={images[34]} alt="Auckland market 2" style={imageStyle} />
            <img src={images[35]} alt="Auckland market 2" style={imageStyle} />


            
              </div>
   <p style={paragraphStyle}>
            My mom was such a trooper, taking some behind-the-scenes footage and photos as I tried on beautiful gowns. We walked from Natalie Rose Bridal to
Cibo for fish and chips and our first taste of New Zealand Pavlova!
Pavlova is my favorite dessert, and my mom makes a great version that I always request on my birthday or Christmas! My best friend’s dad made it when I was at her house as a teen, and I had to get him to give my mom the recipe. While we were used to a lot of fruit, which is typical on top of Pavlova, at this restaurant the salted caramel/peanut was the most popular, and we devoured it. Best. Dessert. Ever.            </p>
            <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
<div style={gridContainerStyle}>    
            <img src={images[36]} alt="Auckland market 2" style={imageStyle} />
            <img src={images[37]} alt="Auckland market 2" style={imageStyle} />
              </div>

              <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
            <h2 style={headingStyle}>🍫 Day Five: Winter Gardens, Auckland Zoo, Chocolate!!!
            </h2>
            <p style={paragraphStyle}>

    
    
            While I didn’t feel like I had jetlag, I almost always get a cold from traveling long distances. I asked over on Instagram what I should do while I was in New Zealand and got a lot of suggestions to go further out from the city and see Hobbiton and the South Island. We decided to keep it more low-key and see the Auckland Domain Wintergardens, the Auckland War Memorial Museum, and then head to the Auckland zoo as they were all about a 10-15 minute drive away from each other.
</p>
<div style={gridContainerStyle}>    
            <img src={images[38]} alt="Auckland market 2" style={imageStyle} />
            <img src={images[39]} alt="Auckland market 2" style={imageStyle} />
              </div>

<p style={paragraphStyle}>

The Wintergarden Pavilion was another amazing café with fresh food. While I was visiting, it was winter, so there were a lot of fall leaves, but the weather was comfortable. I loved seeing the fern jungle and beautiful flowers. If only Canadian winters were this mild! ❄
</p>

<div style={gridContainerStyle}>    
            <img src={images[55]} alt="Auckland market 2" style={imageStyle} />
              </div>

              <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>

<p style={paragraphStyle}>

We walked through the museum, viewing the fossils and aquatic displays, as well as taxidermy kiwi birds. My mom kept joking that every bird we saw
was a kiwi bird, but they are nocturnal and endangered, so it was nice to see what one looks like up close as they are hard to see even at the zoo as the rooms are kept very dark! They are such interesting little birds. Kiwis belong to a group of flightless birds called ratites, which also includes ostriches and emus. Despite being related to these much larger birds, kiwis are quite small (and cute) in comparison.
                  </p>

          
            <p style={paragraphStyle}>
            The Auckland Zoo is renowned for its conservation efforts and diverse animal exhibits. Because it was winter, we were pretty much the only people there, and it was such a nice walk. The animals were hanging out pretty close to the windows or bridges, so I saw a lot of beautiful exotic animals like tigers, lions, lemurs, servals, rhinos, donkeys, cheetahs, flamingos, and my favorite, the red panda!
</p>
<div style={gridContainerStyle}>    

<img src={images[41]} alt="Auckland market 2" style={imageStyle} />
</div>

          
<p style={paragraphStyle}>
It was really well-kept, and on our way back to the city for dinner, we came across a supermarket that had really good deals on chocolate, and we stocked up on a ridiculous amount of Whittaker’s!
</p>

<p style={paragraphStyle}>

For dinner, I came across Ortolana’s on Tyler Street and my husband’s name is literally one letter off. I thought it was fate and needed to go. It was an Italian restaurant with fresh food, and you could see them cooking in the kitchen, creating beautiful fresh dishes. The restaurant is located in the Britomart area, and it was all lit up, a beautiful area for a lovely dinner.
            </p>
            
        
    
         
           
            <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>








<h2 style={headingStyle}>🌋 Last Day: A Hike Around Mount Eden</h2>

            <p style={paragraphStyle}>
            Before our flight in the afternoon, we got up early and took an Uber to the Mount Eden drop-off point. From there, we walked around the volcanic
crater, which offers panoramic views of the city. There were tons of tourists, and many were taking massive group TikToks, which was pretty funny to see.
        adorable top and a beautiful blue dress!            </p>

        <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>

        <div style={gridContainerStyle}>    
            <img src={images[43]} alt="Auckland market 2" style={imageStyle} />

            </div>
       
            <p style={paragraphStyle}>
            We still had quite a bit of time, so we had breakfast back at Cooke’s, which was another fire meal with again, great cappuccinos. After fueling up, I did some last-minute shopping at Mecca and chose to buy a couple of products from Mecca Max, as I don’t have that in Canada. I went for their tubing mascara, which has won some beauty awards, and I loved the look of their lip balms that reminded me of the YSL Color balms. Mecca is similar to Sephora but in Australia and New Zealand.
I saw a shop called Ruby, a New Zealand brand that focuses on eco-friendly fashion. A couple of their new collection pieces really stood out to me, so I tried on an
            </p>

            <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
           
            <div style={gridContainerStyle}>
                <img src={images[49]} alt="Auckland view 6" style={imageStyle} />
                <img src={images[50]} alt="Auckland view 7" style={imageStyle} />
                <img src={images[51]} alt="Auckland view 8" style={imageStyle} />
                <img src={images[52]} alt="Auckland view 8" style={imageStyle} />
            </div>
            <p style={paragraphStyle}>
    While I bought a couple of souvenirs, I wanted to bring back something for Tyler. There is an All Blacks Experience nearby in the SkyCity precinct, close to the base of the Sky Tower. This attraction is dedicated to New Zealand's iconic rugby team, the All Blacks, who are known for their winning legacy. I got him a golf shirt with the logo and safe to say he loved it. The airport has options for All Blacks fans at a cheaper price, but it was cool to see the experience before we headed back to the airport.
</p>
    <p style={paragraphStyle}>

I always try to eat at places unique to wherever I’m visiting and had to try Best Ugly Bagels before the flight at the airport. The tuna melt was a hearty snack, perfect for chilling at the airport for our long travel home. 🇨🇦
            </p>
      
            <div style={gridContainerStyle}>
                
                <img src={images[53]} alt="Auckland view 8" style={imageStyle} />
            </div>

            <h2 style={headingStyle}>🐦 A Final Note</h2>
            <p style={paragraphStyle}>

            I had an amazing time in Auckland shopping along Queen Street, trying fantastic cafés, bakeries, and restaurants. Waiheke is a must-see, my mom and I had such a great day exploring. I hope if you’re traveling, I gave you some ideas on things to check out that are uniquely New Zealand, and I can’t recommend Little & Friday and Cibo enough - of course, try Pavlova if you visit! I had a breakfast quiche, which was similar to a meat pie, but I kind of missed out and didn’t try an iconic meat pie from New Zealand, so I will have to next time. 🤞 I hope you enjoy seeing what I got up to with my mom on this mother-daughter trip as well as some behind-the-scenes of my dress fitting!
</p>
            <p style={paragraphStyle}>

Are you from New Zealand? I would love to know, and I would love to go back in the summer as well because it truly was a magical place. I felt like I fit right in with the lovely locals that I spoke to. I also noticed the fashion was pretty vibrant, especially in older ladies with funky earrings, glasses, and prints. I met some quite fabulous older ladies on this trip who were bold as ever!
</p>
<div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
<div style={gridContainerStyle}>
                
                <img src={images[54]} alt="Auckland view 8" style={imageStyle} />
            </div>
<p style={paragraphStyle}>

Let me know below if you have any places that you think I should travel to next. Thanks for reading as always!
            </p>
          
          
            <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <a href="/fable" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={fable} alt="FABLE AUCKLAND HOTEL REVIEW" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', display: 'block' }} />
          FABLE AUCKLAND HOTEL REVIEW →
        </a> 
      </div>
           
            <img src={signature} alt="Signature" style={{ width: '100%' }} />
            <Comments website-id={websiteId} page-id={"auklandstrizzlebeans"} />
            <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
<div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>
        </div>
    );

    return (
        <div ref={blogRef}>
 <Card
        title="A Whimsical Week Exploring Auckland, New Zealand"
        description="Waiheke Island, Queen Street Shopping & Dream Appointment!"
        blogContent={blogContent}
      />     
    
      
      
         </div>
    );
};

export default NewZealand;
