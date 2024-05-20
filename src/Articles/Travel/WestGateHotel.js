import React, { useRef, useEffect } from 'react';
import '../ExampleTutorial.css';
import { Comments } from '@hyvor/hyvor-talk-react';

import SubscribeButton from '../../Components/SubscribeButton';
import TextReveal from '../../Components/TextReveal';
import DropCap from '../../Components/DropCap';
import BookNowButton from '../../Components/BookNowButton';

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

    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = "https://www.instagram.com/embed.js";
        document.body.appendChild(script);
    }, []);

    const headingStyle = {
        textAlign: 'center',
        fontSize: '3rem',
        fontWeight: 'normal',
        fontFamily: 'Arapey, serif',
        color: 'black',
        margin: '1.5rem'
    };

    const paragraphStyle = {
        fontSize: '1.5rem', fontFamily: 'GFS Didot, serif',  margin: '2.5rem', maxWidth: '100%', color: 'black'
    };

    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
        width: '100%'
    };

    const gridItemStyle = {
        width: '100%',
        height: 'auto'
    };

    const blogContent = (
        <div className="container" style={{ lineHeight: '2.25em', maxWidth: '100vw', justifyContent: 'center', margin : '20rem'}}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
                <a href="/travel" style={{ fontFamily: 'Arapey', fontSize: '1.5em', color: 'black', textDecoration: 'none' }}>
                    TRAVEL // UNITED STATES // CALIFORNIA
                </a>
            </div>
            <img src={title} alt="Mont Tremblant Top View" style={{ width: '100%' }} />
            <iframe width="100%" height="515" src="https://www.youtube.com/embed/H1VUDOqCo3s?si=Ej5ug_TV3qatoDOk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <div style={{ justifyContent: 'center', textAlign: 'center', display: 'flex' }}>
                <SubscribeButton />
            </div>
            <p style={{ fontSize: '1rem', fontFamily: 'Arapey, sans-serif', textAlign: 'center', fontStyle: 'italic' }}>
                All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
            </p>
            <DropCap text="Hello, lovely viewers! Today, I’m excited to share my enchanting experience at the Westgate Hotel in San Diego, where Tyler and I indulged in the luxuriously themed Westgate's Whistledown Tea and Package. This Bridgerton-inspired getaway was filled with regal elegance, featuring Chandon champagne, delightful macarons, and an atmosphere so richly detailed, it felt as if we had stepped straight into the series itself."/>
            <h2 style={headingStyle}> First Impressions and Ambiance </h2>
            <p style={ paragraphStyle} >
                Upon entering the grand lobby of the Westgate Hotel, we were immediately struck by its opulent decor, which perfectly encapsulates the Regency era's lavish aesthetic. The hotel offers an array of Instagram-worthy spots, with each corner meticulously designed to evoke the elegance of early 19th-century English nobility.
            </p>
            <div dangerouslySetInnerHTML={{ __html: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/C5wSgl9swC9/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:800px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/C5wSgl9swC9/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561 72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14: 2px">

</div>


<div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/C5wSgl9swC9/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by The Westgate Hotel (@westgatehotel)</a></p></div>` }} />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2rem 0' }}>
                <BookNowButton href="https://plannin.com/en/hotel/ce895da3-45d5-4bd0-a8cf-fdc1425d0a44?refId=jackiewyers" target="_blank" rel="noopener noreferrer"/>
            </div>
            <h2 style={headingStyle}>🍾 Westgate's Whistledown Tea and Package: An Overview</h2>
            <p style={paragraphStyle}>
                The Westgate Hotel has updated its Bridgerton-themed experience with the "Whistledown Package," offering a luxurious stay perfect for fans of the show. This package includes overnight accommodations in a Premier View Room with stunning skyline views, a complimentary bottle of champagne, and a special "Postcard and Feather-ington pen" set, allowing guests to write and send letters using the hotel’s historic mail chute. How fun!
            </p>

<div style={gridContainerStyle}>
<img src={westgate4} alt="The Westgate Hotel - San Diego" style={gridItemStyle} />
<img src={westgate5} alt="The Westgate Hotel - San Diego" style={gridItemStyle} />
<img src={westgate6} alt="The Westgate Hotel - San Diego" style={gridItemStyle} />
<img src={westgate1} alt="Québécoise Pizza"  />
</div>
            <p style={paragraphStyle}>
                Additionally, guests have the option to upgrade their experience to include the glamorous "Whistledown Afternoon Tea.” This themed package and tea experience offer a deep dive into the world of Bridgerton, perfect for those seeking a touch of regal elegance during their stay in San Diego.
            </p>
            <h2 style={headingStyle}>💵 Cost Considerations</h2>
            <p style={paragraphStyle}>
                While the package comes at a premium, the unique themed experience, coupled with the Westgate's exceptional service and central location in San Diego, provides substantial value. This package is particularly ideal for special occasions, like a bridal party or a romantic getaway, offering a blend of entertainment, luxury, and Instagrammable moments that justify the expense.
            </p>


<div style={gridContainerStyle}>
<img src={westgate8} alt="The Westgate Hotel - San Diego" style={gridItemStyle} />
<img src={westgate10} alt="The Westgate Hotel - San Diego" style={gridItemStyle} />
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
                        <img src={westgate9} alt="The Westgate Hotel - San Diego" style={gridItemStyle} />

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
            <p style={paragraphStyle}>
                Thank you for joining me on this luxurious journey back in time at the Westgate Hotel. Tyler and I had an unforgettable experience, and we can't wait to share more of our adventures with you. For more travel tips and lifestyle content, stay tuned to my blog and YouTube channel!
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2rem 0' }}>
                <BookNowButton href="https://plannin.com/en/hotel/ce895da3-45d5-4bd0-a8cf-fdc1425d0a44?refId=jackiewyers" target="_blank" rel="noopener noreferrer" />
            </div>
            <img src={signature} alt="Québécoise Pizza" style={{ width: '100%' }} />
            <Comments
                website-id={websiteId}
                pageId={"westgate"} // Unique identifier for this blog post
            />
        </div>
    );

    return (
        <div>
            <TextReveal text='SAN DIEGO' />
            <div ref={blogRef}>
                <Card blogContent={blogContent} />
            </div>
        </div>
    );
};

export default WestGateHotelBlog;

