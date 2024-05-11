import React, { useEffect, useRef } from 'react';
import '../ExampleTutorial.css';
import { Comments } from '@hyvor/hyvor-talk-react';

import TextReveal from '../../Components/TextReveal';
import SubscribeVlog from '../../Components/SubscribeVlog';
import modifyanchortags from '../../Utilities/modifyanchortags';



const image1 = `${process.env.PUBLIC_URL}/Images/Disney1/DisneyWorld.png`;
const image1A = `${process.env.PUBLIC_URL}/Images/Disney1/1.JPG`;
const image2 = `${process.env.PUBLIC_URL}/Images/Disney1/2.JPG`;
const image3 = `${process.env.PUBLIC_URL}/Images/Disney1/3.JPG`;
const image4 = `${process.env.PUBLIC_URL}/Images/Disney1/4.JPG`;
const image5 = `${process.env.PUBLIC_URL}/Images/Disney1/5.JPG`;
const image6 = `${process.env.PUBLIC_URL}/Images/Disney1/6.JPG`;
const image7 = `${process.env.PUBLIC_URL}/Images/Disney1/7.JPG`;
const image8 = `${process.env.PUBLIC_URL}/Images/Disney1/8.JPG`;
const image9 = `${process.env.PUBLIC_URL}/Images/Disney1/9.JPG`;
const image10 = `${process.env.PUBLIC_URL}/Images/Disney1/10.jpg`;
const image11 = `${process.env.PUBLIC_URL}/Images/Disney1/11.JPG`;
const image12 = `${process.env.PUBLIC_URL}/Images/Disney1/12.jpg`;
const image13 = `${process.env.PUBLIC_URL}/Images/Disney1/13.JPG`;
const image14 = `${process.env.PUBLIC_URL}/Images/Disney1/14.JPG`;
const image15 = `${process.env.PUBLIC_URL}/Images/Disney1/16.JPG`;
const image16 = `${process.env.PUBLIC_URL}/Images/Disney1/16.JPG`;
const image17 = `${process.env.PUBLIC_URL}/Images/Disney1/17.JPG`;
const image18 = `${process.env.PUBLIC_URL}/Images/Disney1/18.JPG`;
const image19 = `${process.env.PUBLIC_URL}/Images/Disney1/19.JPG`;
const image20 = `${process.env.PUBLIC_URL}/Images/Disney1/20.JPG`;
const image21 = `${process.env.PUBLIC_URL}/Images/Disney1/21.JPG`;
const image22 = `${process.env.PUBLIC_URL}/Images/Disney1/22.JPG`;
const image23 = `${process.env.PUBLIC_URL}/Images/Signature.png`;

const beachclub1 = `${process.env.PUBLIC_URL}/Images/beachclub1.png`;
const beachclub2 = `${process.env.PUBLIC_URL}/Images/beachclub2.png`;
const beachclub3 = `${process.env.PUBLIC_URL}/Images/beachclub3.png`;
const beachclub4 = `${process.env.PUBLIC_URL}/Images/beachclub4.png`;
const beachclub5 = `${process.env.PUBLIC_URL}/Images/beachclub5.png`;
const beachclub6 = `${process.env.PUBLIC_URL}/Images/beachclub6.png`;
const beachclub7 = `${process.env.PUBLIC_URL}/Images/beachclub7.png`;
const beachclub8 = `${process.env.PUBLIC_URL}/Images/beachclub8.png`;
const beachclub9 = `${process.env.PUBLIC_URL}/Images/beachclub9.png`;
const beachclub10 = `${process.env.PUBLIC_URL}/Images/beachclub10.png`;













const Card = ({ blogContent }) => {
    return (
        <div className="card" style={{ maxWidth: '100%' , display: 'flex', textAlign: 'left', backgroundColor: '#fff', color: 'black', fontFamily: 'GFS Didot, sans-serif' }}>
            
            <div className="blog-content" style={{ lineHeight: '1.3' }}>{blogContent}</div>
        </div>
    );
};

const Disney1Post = () => {

    const websiteId = "10910"; 
    const blogRef = useRef(null);
  
    useEffect(() => {
      modifyanchortags(blogRef.current);
    }, []);

    const blogContent = (
        <div className="container" style={{ 
            lineHeight: '2.5em',

            maxWidth: '100%', 
        margin: '20em',
    
       
  
           }}>


<div style={{
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
height: '10vh' // This makes the div take up the full height of the viewport
}}>
<a
href="/travel"
style={{
fontFamily: 'Arapey',
fontSize: '1.5em',
color: 'black',
textDecoration: 'none'
}}
>
TRAVEL // FLORIDA // DISNEY WORLD
</a>
</div>



<img src={image1} alt='Lana Del Rey SKIMS Campaign' style={{ width: '100%' }} />






<div style={{ padding: '20px', margin: '20px', width: '100%', boxSizing: 'border-box' }}>
  <iframe 
    className="iframeStyle"
    style={{ width: '100%', height: '525px' }} // Reducing the original height of 315px by 25%
    src="https://www.youtube.com/embed/XRI-IpWb37E?si=X6l3RAxsPGC_bS88"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  />
</div>



    
   <SubscribeVlog/>



<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '1em'}}>            

<span style={{ color: '#745B4F' , float: 'left', fontSize: '5rem', lineHeight: '0.9', marginRight: '0.05em', marginTop: '0.01em' }}>W</span>elcome to Part One
    of my magical recap of an unforgettable time at
Walt Disney World, FL in 2023. My best friend Lauren and I chose Disney's
Beach Club Resort for our stay, marking her first visit and my first return
since 2002. This article focuses on our resort experience, offering a glimpse
into the luxury and leisure that awaited us at this colonial resort and why we
chose to book!</p>

<p style={{ justifyContent:'center',fontSize:'2.25em', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
🌟 First Impression: Beach Club Resort</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '1em'}}>            
    Driving in from Saint Augustine, Florida we were immediately captivated by
the Beach Club Resort's charm, reminiscent of a New England dream. This
deluxe resort, inspired by 1800s beach cottages, has amenities such as the
Storm-Along Bay Water Park, the convenient Beach Club Marketplace,
and the nostalgic Beaches & Cream Soda Shop, making it the perfect base
for our Disney adventures.
</p>

<div
style = {{padding: '5rem',}}
>

  <div style={{ width: '100%', height: 'auto' }}>
    <img src={image2} alt='b1' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  </div>
  <div style={{ width: '100%', height: 'auto' }}>
    <img src={image1A} alt='b1' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  </div>

</div>


<p style={{ justifyContent:'center',fontSize:'2.25em', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
💵 Cost Considerations: Weighing the Pros and Cons
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '1em'}}>            
    This resort is a deluxe option, so it comes with a higher price tag. Check
prices as it fluctuates greatly depending on the time of year from between
390 USD up to 990 USD😳 a night.
</p>
<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '1em'}}>            
    When browsing the various resorts, the Beach Club’s design caught my eye.
While I'm all for a fun and goofy Disney experience, I wanted to stay
somewhere elegant as an adult. The light blue building, adorned with
beautiful Victorian trim, the gardens with pops of bright pink flowers, and a
view of the boardwalk offered something truly magical to wake up to.
</p>


<div> <img src= {image5} alt = 'b1' style={{width:'100%'}}></img></div>


<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '1em'}}>            
    We chose a <strong>
    standard room with a garden view,
        </strong> and although the rooms'
interior decor slightly paled in comparison to the exterior's enchantment,
the Disney-themed touches and the overall nostalgic beach vibe more than
compensated for it, in my opinion. The Mickey ears towel display and
Disney-themed toiletries were exciting for us to see!
</p>

<p style={{ justifyContent:'center',fontSize:'2.25em', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
🏝 Diverse Room Options for Every Guest
</p>

<div> <img src= {beachclub1} alt = 'b1' style={{width:'100%'}}></img></div>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '1em'}}>            
    For larger families or those seeking extra
comfort, expansive Suites have separate
living areas. You can choose Garden,
Woods or Water View Rooms.
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '1em'}}>            
    For the price tag, I’ve seen several complaints about being disappointed by
the interior decor. However, I feel it still captures a nostalgic beach vibe, and
I doubt you’ll spend too much time in the room with all there is to do! The
other resort we considered but was out of our budget was the Polynesian
Village Resort. This may be a better option for you if the room theme
matters a lot for your experience, it features a tropical aesthetic rather than a
beach cottage.
</p>



<p style={{ justifyContent:'center',fontSize:'2.25em', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>

🛥 Unique Amenities and Shared Experiences with Yacht Club
</p>


    <img src= {beachclub2} alt = 'b1' style={{width:'100%'}}></img>



<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '1em'}}>            
    Adjacent to the Beach Club is the Yacht Club, where we explored
additional dining and shopping options as the resorts share amenities. If
you are staying at Disney's Beach Club Resort or the Yacht Club Resort,
the top dining options to check out are the Beaches & Cream Soda Shop,
famous for its "Kitchen Sink" sundae, and the Yachtsman Steakhouse,
known for premium steaks and seafood in a New England yacht club
atmosphere. Cape May Café and Ale & Compass Restaurant also offer
memorable dining experiences with character breakfasts and New Englandinspired
menus.
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '1em'}}>            
    There are also different souvenirs at the Beach Club Marketplace and The
Market at Ale & Compass at the Yacht Club, offering everyday essentials,
souvenirs, drinks and snacks. Both are great to check out before deciding on
your souvenirs!
</p>

    <img src= {beachclub3} alt = 'b1' style={{width:'100%'}}></img>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '1em'}}>            
    The Beach and Yacht Club resorts both offer activities like movies under
the stars, tennis, volleyball, campfires, and different watercraft rentals for
enjoyment on Crescent Lake.You can also enjoy state-of-the-art fitness
centres and book spa services for relaxation.
</p>

<p style={{ justifyContent:'center',fontSize:'2.25em', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
🍹 Storm-Along Bay Pool, Hurricane Hannah’s Waterside Bar &
Grill
</p>


<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>
    A bit about my personal experience, upon check-in, Lauren and I grabbed a
quick bite at the Ale & Compass Lounge (great appetizers, fries and
burgers) and dedicated our first day to enjoying Storm-Along Bay.
</p>
<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '1em'}}>            
    This expansive pool, spanning 3 acres, features a sandy bottom, a lazy river, a
striking white windmill, and a waterslide attached to a life-size shipwreck on
the beach. Since there were so many kids swimming, I didn’t take great
pictures of the pool - but you can check it out in detail on the booking site
here.
</p>

<img src= {beachclub4} alt = 'b1' style={{width:'100%'}}></img>


<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '1em'}}>            
    After relaxing poolside, we ventured to Hurricane Hannah's Waterside Bar
& Grill for drinks. The bar is a little shack, similar Rico’s Surf Shop in
Hannah Montana with a laid back vibe.
</p>

 <img src= {beachclub5} alt = 'b1' style={{width:'100%'}}></img>


 <p style={{ justifyContent:'center',fontSize:'2.25em', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>

🌴 The Beach & Boardwalk Nearby
</p>
<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '1em'}}>            
    Our evening continued with a leisurely walk along the beach, where we
enjoyed the sunset from swings and strolled down the lively Disney
BoardWalk. The charming waterfront boardwalk is brimming with
restaurants, night performers and gift shops, offering a vibrant atmosphere
at night that appeals to both adults and children.
</p>
<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '1em'}}>            
    As someone who's a bit of a lightweight, my single drink at the bar led to a
somewhat clumsy walk around the entire village and… blurry pictures I
shall not include😂 ! We toyed with the idea of catching a movie under the
stars, a feature the resort offers, but ultimately decided to head to bed early
to conserve energy for the extensive walking we anticipated at Epcot the
next day.
</p>

<p style={{ justifyContent:'center',fontSize:'2.25em', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>

🗺 Effortless Park Access and Transportation Tips
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '1em'}}>            
    Speaking of Epcot, it is only a 5-10 minute walk from the resort. If Epcot is
on your park bucket list (and it should be!!!) all the more reason to stay at
the Beach Club resort. You can also take a quick boat ride to the park.
</p>


 <img src= {beachclub6} alt = 'b1' style={{width:'100%'}}></img>



<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '1em'}}>            
    For Hollywood Studios (the second closest park) you can walk along a
scenic path that takes about 15 to 20 minutes. There's also boat service
available from the resort's dock, providing a relaxing journey to the park's
entrance.
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '1em'}}>            
    If you want to ride the epic skyline,
walk to Epcot where the
International Gateway Station is
located. The Skyliner provides
transportation to Disney's
Hollywood Studios, Disney’s Riviera
Resort, Disney's Caribbean Beach
Resort.
</p>
<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '1em'}}>            
    If you are interested in other parks,
like Magic Kingdom and Animal
Kingdom, you can easily get there by
catching a bus out front of the resort.
Read the best of Epcot, Magic
Kingdom and Animal Kingdom in a
separate blog post, here.
</p>


<p style={{ justifyContent:'center',fontSize:'2.25em', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>


🍦 A Final Dessert at Beaches & Cream Soda Shop
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '1em'}}>            
    Our last day at the Beach Club Resort was bittersweet, with leisurely walks
along the boardwalk, and a final, decadent sundae at the famous Beaches &
Cream Soda Shop.
</p>




   <img src= {beachclub8} alt = 'b1' style={{width:'100%'}}></img>



<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '1em'}}>            
    The ice cream shop is often booked up if you don’t reserve a table in
advance, but luckily there is a window shop where you can get many of the
items without a long wait time. The ice cream isn’t the richest, creamiest of
all time (it’s no Häagen-Dazs) but it is beautifully presented and a very fun
experience, no matter the age. I mean….look at the size of the sundae! 🍒
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '1em'}}>            
    I bought an Angel plushy from the Boardwalk shops and headed home!
Keep reading for a quick nautical resort comparison to help you decide on
your stay.
</p>


<p style={{ justifyContent:'center',fontSize:'2.25em', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '0em'}}>

🌊 Walt Disney World Resort Comparison for a Nautical
Experience</p>

<div style={{ display: 'flex', alignItems: 'flex-start', margin: '1em 0' }}>
      <img src={beachclub9} alt='Beach Club' style={{ maxWidth: '50%', height: 'auto' }} />
      <div style={{ flex: '1', marginLeft: '1em' }}>
        <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth: '100%' }}>
          If you enjoy a nautical theme, you may be choosing between the Beach Club, Yacht Club, and Disney’s Polynesian Village Resort.
        </p>
        <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth: '100%' }}>
          I say go with Beach Club between The Yacht and Beach Club Resort simply because of the shared amenities. While Yacht Club is slightly more sophisticated, the light blue and white stands out and feels more enchanting!
        </p>
        <p style={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth: '100%' }}>
          For those drawn to the serene allure of the tropics, Disney's Polynesian Village Resort transports guests to a South Pacific paradise, complete with monorail access to the parks and celebrated dining experiences like 'Ohana. It is for sure on my bucket list to stay at the Polynesian resort in the future!
        </p>
      </div>
    </div>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '1em'}}>            
    If you are headed to Disney, I hope you have the most magical time and
you’ll have to share your experience with me either in the vlog channel
comments, or on the blog. To read about my Disney Park experiences, see  <a
href = '/disneyreview2'
>
 here

</a>



.
</p>


<img src= {beachclub10} alt = 'b1' style={{width:'100%'}}></img>






<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '1em'}}>            
    For Hollywood Studios (the second closest park) you can walk along a
scenic path that takes about 15 to 20 minutes. There's also boat service
available from the resort's dock, providing a relaxing journey to the park's
entrance.
</p>




<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1em', maxWidth:'100%' , marginLeft: '1em'}}>            
Note about accessibility: Disney's Beach Club Resort is fully accessible to
guests with disabilities, offering features like accessible rooms with widened
doors and roll-in showers, visual alarm devices for hearing disabilities,
wheelchair-accessible pathways, and service animal accommodations.
Complimentary Disney transportation is equipped to accommodate guests
with disabilities, and the resort provides lifts for pool access, ensuring a
comfortable and enjoyable stay for everyone. This is another wonderful
quality about Disney World, it really has everyone in mind to enjoy the
magic!</p>



<div> <img src= {image23} alt = 'b1' style={{width:'100%'}}></img></div>




 

</div>
    
    );

    return (
        <div><div
        style = {{width:'100%', marginBottom: '2rem'}}
        ><TextReveal text='THE HAPPIEST PLACE ON EARTH'/>
        </div>
       <div>
       
        </div> 
        <div ref={blogRef}>
<Card
            title="Walt Disney World Beach Club Resort Review"
            description="Walt Disney World Beach Club Resort Review - JW "
            blogContent={blogContent}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                textAlign: 'center'
            }}
        />
      </div>
      <Comments
        website-id={websiteId}
        pageId={"beachclubresort"} // Unique identifier for this blog post
    />
    </div>
    );
};

export default Disney1Post;
