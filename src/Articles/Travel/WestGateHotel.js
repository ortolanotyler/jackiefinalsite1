



import React, { useRef } from 'react';
import '../ExampleTutorial.css';
import { Comments } from '@hyvor/hyvor-talk-react';

import SubscribeButton from '../../Components/SubscribeButton';
import TextReveal from '../../Components/TextReveal';
import DropCap from '../../Components/DropCap';

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
    <div className="card" style={{ maxWidth: '100%', display: 'flex', textAlign: 'left', backgroundColor: 'white', color: 'black', fontFamily: 'GFS Didot, sans-serif' }}>
        <div className="blog-content">{blogContent}</div>
    </div>
);

const WestGateHotelBlog = () => {
    const blogRef = useRef(null);
    const websiteId = "10910";



    const headingStyle = {
        textAlign: 'center',
        fontSize: '3.25rem',
        fontWeight: 'normal',
        fontFamily: 'Arapey, serif',
        color: 'black',
        margin: '1.5rem'
    };

    const paragraphStyle = {
        fontSize: '1.5rem', fontFamily: 'GFS Didot, serif',  margin: '2.5rem', maxWidth: '100%', color: 'black'
      }

    const blogContent = (
        <div className="container" style={{ lineHeight: '2.25em', maxWidth: '100vw', justifyContent: 'center', margin : '20rem'}}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
                <a href="/travel" style={{ fontFamily: 'Arapey', fontSize: '1.5em', color: 'black', textDecoration: 'none' }}>
                TRAVEL // UNITED STATES // CALIFORNIA
                </a>
            </div>
            <img src={title} alt="Mont Tremblant Top View" style={{ width: '100%' }} />
            <iframe width="100%" height="515" src="https://www.youtube.com/embed/H1VUDOqCo3s?si=Ej5ug_TV3qatoDOk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
           <div
           style = {{
            justifyContent: 'center',
            textAlign: 'center',
            display: 'flex',
           }}
           >
           <SubscribeButton />
            </div>
            <p style={{ fontSize: '1rem', fontFamily: 'Arapey, sans-serif', textAlign: 'center', fontStyle: 'italic' }}>
                All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
            </p>
            <DropCap text = "Hello, lovely viewers! Today, I’m excited to share my enchanting experience at the Westgate Hotel in San Diego, where Tyler and I indulged in the luxuriously themed Westgate's Whistledown Tea and Package. This Bridgerton-inspired getaway was filled with regal elegance, featuring Chandon champagne, delightful macarons, and an atmosphere so richly detailed, it felt as if we had stepped straight into the series itself."/>
            
           
            <h2 style={headingStyle}z> First Impressions and Ambiance   </h2>
            <p style={ paragraphStyle} >
            Upon entering the grand lobby of the Westgate Hotel, we were immediately
struck by its opulent decor, which perfectly encapsulates the Regency era's
lavish aesthetic. The hotel offers an array of Instagram-worthy spots, with
each corner meticulously designed to evoke the elegance of early 19thcentury English nobility.
(Ig link)

            </p>
            <img src={westgate1} alt="Québécoise Pizza" style={{ width: '100%' }} />



            <h2 style={headingStyle}> 
            
            Westgate's Whistledown Tea and Package: An Overview

            </h2>
           
            <p style={ paragraphStyle} >
              The Westgate Hotel has updated its Bridgerton-themed experience with the
"Whistledown Package," offering a luxurious stay perfect for fans of the
show. This package includes overnight accommodations in a Premier View
Room with stunning skyline views, a complimentary bottle of champagne,
and a special "Postcard and Feather-ington pen" set, allowing guests to write
and send letters using the hotel’s historic mail chute. How fun!

            </p>
            <p style={ paragraphStyle} >
              The Westgate Hotel has updated its Bridgerton-themed experience with the
"Whistledown Package," offering a luxurious stay perfect for fans of the
show. This package includes overnight accommodations in a Premier View
Room with stunning skyline views, a complimentary bottle of champagne,
and a special "Postcard and Feather-ington pen" set, allowing guests to write
and send letters using the hotel’s historic mail chute. How fun!

            </p>

            <img src={westgate2} alt="Québécoise Pizza" style={{ width: '100%' }} />

<p style={ paragraphStyle} >

            Additionally, guests have the option to upgrade their experience to include
the glamorous "Whistledown Afternoon Tea.”
This themed package and tea experience offer a deep dive into the world of
Bridgerton, perfect for those seeking a touch of regal elegance during their
stay in San Diego.
            </p>



            <h2 style={headingStyle}>
                Cost Considerations
            </h2>
         
            <p style={ paragraphStyle} >

            While the package comes at a premium, the unique themed experience,
coupled with the Westgate's exceptional service and central location in San
Diego, provides substantial value. This package is particularly ideal for 
special occasions, like a bridal party or a romantic getaway, offering a blend
of entertainment, luxury, and Instagrammable moments that justify the
expense.        

    </p>

<h2 style={headingStyle}>

    Room Options and Accessibility

</h2>

            <p style={ paragraphStyle} >
            In addition to its themed packages, the Westgate Hotel in San Diego offers
a wide range of accommodation options to suit various preferences. Guests
can opt for Premier Rooms, located between the 11th and 18th floors, which
feature deluxe marble showers and offer panoramic views of the city or park.
These rooms are available with either king or double beds, like we
experienced during our stay.
            </p>

            <p style={ paragraphStyle} >
            For those seeking additional space and luxury, Deluxe Rooms provide
expansive interiors enriched with high-end amenities. The hotel also caters
to guests requiring accessibility features; ADA-compliant rooms are
equipped with roll-in showers, lowered storage solutions, and other assistive
devices available upon request.
            </p>

            <p style={ paragraphStyle} >
            Room rates at the Westgate Hotel vary, starting from $250 USD per night for
standard rooms and going up to $1500 USD per night for the most
luxurious suites, ensuring options for every level of indulgence and comfort.

            </p>

<h2 style={headingStyle}>

            Dining and Activities
</h2>

            <p style={ paragraphStyle} >
            The Whistledown Tea, held in the hotel’s ornate Grand Lobby, includes
champagne or apple cider, a selection of tea sandwiches, savouries, sweet
pastries, and a take-home jar of Whistledown White Ambrosia Tea.
            </p>

            <p style={ paragraphStyle} >
            When I attended the high tea, it was accompanied by a live harpist, now
changed to a string quartet. This tea service is available on Saturdays from 2
PM to 4:30 PM, from May 18 to June 29, 2024. Guests are encouraged to
dress in their finest Regency-era attire and the tea experience is priced at
$98 for adults and $68 for children ages 2 to 14.
            </p>


            <p style={ paragraphStyle} >

High tea is just one of the many dining options available at the Westgate
Hotel. The Westgate Room offers innovative American cuisine with French
influences. The Plaza Bar is perfect for pre-dinner drinks with live music.
For outdoor dining, the Veranda serves locally-sourced seafood in a bistrostyle setting.
            </p>

            <p style={ paragraphStyle} >
            Additionally, in-room dining is available for those who prefer dining in the
comfort and privacy of their own room which is what Tyler & I chose to do
after a long day at a photoshoot! Who says a duchess can’t have chicken
fingers in bed?
            </p>

            <p style={ paragraphStyle} >
            There’s also a beautiful pool on the terrace with views of San Diego. Sadly it
was a rainy day, but I would be swimming for hours otherwise.
            </p>
            
            <h2 style={headingStyle}>
            Final Thoughts and Recommendations

            </h2>

            <p style={ paragraphStyle} >

            Our stay at the Westgate Hotel was a regal affair that I highly recommend
to anyone looking to escape into a world of elegance and romance. The hotel
itself is also a stunning wedding location, offering luxurious settings ideal
for a memorable celebration.
            </p>



            <p style={ paragraphStyle} >

If you're planning a visit to San Diego and want a taste of Regency-era
luxury, the Westgate Hotel is a must. The Westgate's Whistledown Tea and
Package isn’t the only package, so check on the Westgate website for more
offerings. For more Bridgerton inspiration, check out Daphne hairstyles
here.
            </p>

            <p style={ paragraphStyle} >
            Thank you for joining me on this luxurious journey back in time at the
Westgate Hotel. Tyler and I had an unforgettable experience, and we can't
wait to share more of our adventures with you. For more travel tips and
lifestyle content, stay tuned to my blog and YouTube channel!

            </p>


            <img src={westgate3} alt="Québécoise Pizza" style={{ width: '100%' }} />

          

            <img src={westgate4} alt="Mont-Tremblant Pedestrian Village" style={{ width: '100%' }} />
        
            <img src={westgate5} alt="Mont Tremblant ski village" style={{ width: '100%' }} />

       
            <img src={westgate6} alt="La Maison de la Crêpe" style={{ width: '100%' }} />
         
        



<img src={westgate7} alt="Roots Store Mont Tremblant" style={{ width: '100%' }} />


            <img src={westgate8} alt="Mont Tremblant Ski Village Gondola" style={{ width: '100%' }} />

            <img src={westgate9} alt="Syrup on Snow" style={{ width: '100%' }} />

       
            <img src={westgate10} alt="Mont Tremblant Ski Village Gondola" style={{ width: '100%' }} />

        

       

            <img src={westgate11} alt="Mont Tremblant Ski Village Gondola" style={{ width: '100%' }} />

            <p style={ paragraphStyle} >
                Rental Package: Typically, rental packages include skis, boots, poles, and helmets. Goggles are not provided, and trust me, you'll want them to protect against the glare of the sun and snow. Bringing your own goggles can enhance your skiing experience, especially if you have sensitive eyes.  shops that offer performance or demo rentals.
            </p>

        

           

            <img src={westgate12} alt="Mont Tremblant Skila" style={{ width: '100%' }} />







<img src={westgate13} alt="Mont Tremblant Ski Village Gondola" style={{ width: '100%' }} />
<img src={westgate14} alt="Mont Tremblant Ski Village Gondola" style={{ width: '100%' }} />





            <img src={westgate15} alt="Jackie at Mont Tremblant" style={{ width: '100%' }} />

            <img src={signature} alt="Signature" style={{ width: '100%' }} />
        </div>
    );

    return (
        <div>
            <TextReveal text='SAN DIEGO' />
            <div ref={blogRef}>
                <Card blogContent={blogContent} />
                <Comments
                    website-id={websiteId}
                    pageId={"westgate"} // Unique identifier for this blog post
                />
            </div>
        </div>
    );
};

export default WestGateHotelBlog;



