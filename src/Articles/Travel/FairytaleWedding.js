import React, { useRef, useEffect } from 'react';
import '../ExampleTutorial1.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import TextReveal from '../../Components/TextReveal';
import AdSenseAd from '../../Advertising/Ads';
import WeddingCarousel from '../../Components/WeddingCarousel';
import ResponsiveIframe from '../../Components/ResponsiveIframe';
import SubscribeButton from '../../Components/SubscribeButton';
import { initGA, logPageView } from '../../analytics';
import BridalDropCap from '../../Components/BridalDropCap';


const title = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/WeddingTitle.png`;
const image1 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/1.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/2.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/3.jpg`;
const image4 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/4.jpg`;
const image5 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/5.jpg`;
const image6 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/6.jpg`;
const image7 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/7.jpg`;
const image8 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/8.jpg`;
const image9 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/9.jpg`;
const image10 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/10.jpg`;
const image11 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/11.jpg`;
const image12 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/12.jpg`;
const image13 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/13.jpg`;
const image14 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/14.jpg`;
const image15 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/15.jpg`;
const image16 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/16.jpg`;
const image17 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/17.jpg`;
const image18 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/18.jpg`;
const image19 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/19.jpg`;
const image20 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/20.jpg`;
const image21 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/21.jpg`;
const image22 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/22.jpg`;
const image24 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/24.jpg`;
const image25 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/25.jpg`;
const image26 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/26.jpg`;
const image27 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/27.jpg`;
const image28 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/28.jpg`;
const image29 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/29.jpg`;
const image30 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/30.jpg`;
const image31 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/31.jpg`;
const image32 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/32.jpg`;
const image33 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/33.jpg`;
const image34 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/34.jpg`;
const image35 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/35.jpg`;
const image36 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/36.jpg`;
const image37 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/37.jpg`;
const image38 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/38.jpg`;
const image39 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/39.jpg`;
const image40 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/40.jpg`;
const image41 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/41.jpg`;
const image42 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/42.jpg`;
const image43 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/43.jpg`;
const image44 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/44.jpg`;
const image45 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/45.jpg`;
const image46 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/46.jpg`;
const image47 = `${process.env.PUBLIC_URL}/Images/Articles/FairytaleWedding/PressedFlowers.png`;
const image99 = `${process.env.PUBLIC_URL}/Images/Articles/WeddingCarousel/98.jpg`;



const bridesmaid = `${process.env.PUBLIC_URL}/Images/Articles/Bridesmaids/BridesmaidBoxThumb!.jpg`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
  <div>
    <div><TextReveal text='BRIDAL' /></div>
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);

const FairytaleWedding = () => {

  useEffect(() => {
    initGA();
    logPageView();
  }, []);


  const websiteId = '10910';
  const blogRef = useRef(null);

  const headingStyle = {
    textAlign: 'center',
    fontSize: '32px',
    fontWeight: 'normal',
    fontFamily: 'GFS Didot, serif',
    color: 'black',
    margin: '1rem',
    lineHeight: '1.25',

  };

  const paragraphStyle = {
    fontSize: '20px',
    fontFamily: 'GFS Didot, serif',
    margin: '1rem 1.5rem',
    marginTop: '1rem',
    marginBottom: '1rem',
    maxWidth: '800px',
    lineHeight: '1.5',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1rem',
    margin: '1rem 0'
};

const imageStyle = {
  display: 'block',
  margin: '0 auto',
  maxWidth: '100%',
  height: 'auto'
};



  const blogContent = (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25vh' }}>
        <a href="/bridal" style={{ fontFamily: 'Arapey', fontSize: '1em', color: 'black', textDecoration: 'none' }}>
          BEAUTY // BRIDAL
        </a>
      </div>
      <img src={title} alt="Our Fairytale Wedding Overlooking Sorrento, Italy" style={{ width: '100%' }} />
   
<div
style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}
> 
<iframe
      style={{ boxShadow: '12px', borderRadius: '15px', width: '301px', height: '535px' }}
      src="https://www.youtube.com/embed/WuK6DOdvOug"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>





</div>

<div style = {{textAlign: 'center', marginTop: '2rem' }}>
<SubscribeButton />
</div>
<div
style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem' }}
> 


<BridalDropCap text="On July 11th, Tyler and I celebrated two years of marriage with a dreamy ceremony in Sorrento, Italy. If you haven’t caught up with our backstory, here’s a quick recap: We first met in middle school at
the International School of Brussels, where we became each other's first “real” boyfriend and girlfriend. Originally from Atlanta, Georgia, and Ontario, Canada, our families both moved to Belgium in 2007, and we were the new kids at the international school that same year. What started as a middle school crush blossomed into a lifelong connection, surviving long distances as friends for over 10 years, and culminating in an epic reunion in the Big Apple!" />

      </div>



     
  
<p style={paragraphStyle}>
In 2018, our paths crossed again in Manhattan—serendipity at its best! Tyler had moved to the city, and I was nearby on a brand trip. We went on a date, 11 years after we last said goodbye in person, and didn’t leave each other’s side since. After moving in together on the Upper West Side, Tyler orchestrated a <a href="https://www.youtube.com/watch?v=-LLQLc6imXA" target="_blank" rel="noreferrer" style={{ color: 'black' }}>surprise proposal</a>  in 2021 during a <a href = "https://www.instagram.com/lostlandscollections/?igsh=dmprdjJybWo5OWFx" target="_blank" rel="noreferrer" >@lostlandscollections</a> fairytale photo shoot in Connecticut which made me feel like a total princess.
</p>

<div style={gridContainerStyle}>
   <a href="https://www.youtube.com/watch?v=-LLQLc6imXA" target="_blank" rel = "noreferrer" >
   <img src={image1} alt="Jackie Wyers Wedding Photography" style={imageStyle} />

   </a>
            </div>


<p style={paragraphStyle}>
We initially planned our wedding to take place in Belgium, where our story began. However, due to logistical challenges and the unpredictable Belgian summer rain, we opted for the enchanting vistas of Sorrento, Italy. This change gave us the perfect opportunity for a picturesque, fairytale-inspired ceremony, followed by a honeymoon back to Brussels to relive our childhood memories.
</p>

<div style={gridContainerStyle}>
    <img src={image2} alt="Jackie Wyers Wedding Photography" style={imageStyle} /> 
    <img src={image3} alt="Jackie Wyers Wedding Photography" style={imageStyle} />
</div>

<p style={paragraphStyle}>

In this article, I'll be sharing all the ethereal details of our wedding celebration, from the whimsical decorations and Italian venue to the bridal beauty inspirations and unforgettable moments captured by our talented photographer, Shivani Sharma. You'll also get a glimpse into the intimate preparations, the fairycore bridesmaids, and the unique touches that made our ceremony truly ours. Let's dive into the magical details of our wedding and relive the most memorable moments together!
</p>


<h2 style={headingStyle}>Our Whimsical Celebration</h2>

  
   <p style={paragraphStyle}>
      We kept the wedding intimate, with just 13 guests, consisting of immediate family and a couple of lifelong friends. Our week in Sorrento was primarily planned by me, and while event planning isn’t my forte, I gave it my all! Tyler and I rented a beautiful stone villa up the mountain overlooking Sorrento for the week. The gardens featured cobblestone paths, vibrant flowers, shrubs, and stunning olive trees, setting a beautiful scene without needing much decor.
      </p>

      <div style={gridContainerStyle}>
    <img src={image4} alt="Jackie Wyers Wedding Photography" style={imageStyle} /> 
    <img src={image5} alt="Jackie Wyers Wedding Photography" style={imageStyle} />
    <img src={image6} alt="Jackie Wyers Wedding Photography" style={imageStyle} /> 
    <img src={image7} alt="Jackie Wyers Wedding Photography" style={imageStyle} />
</div>

<p style={paragraphStyle}>
As for the evening's aesthetic, I wanted to maintain the fairytale theme from our engagement photos for the dinner. We wrapped tree branches with fairy lights adorned with faux vines, and the overhang above the dining table featured hanging tea lights and hanging potted flowers. Our dinner setup mirrored the enchanting theme, with ivory tablecloths, custom floral menus and place cards from Papier, delicate floral arrangements, and tall gold candles to enhance the intimate setting. The table and chairs had earthy wood textures, a lace runner and the crystal glassware sparkled in the sunlight.

</p>

<p style={paragraphStyle}>
Fortunately, I had help from an amazing Sorrento local who assisted with ordering everything for our event. I handled smaller details like our custom menus, place cards, and wedding sign from Papier, as well as putting together party favors while Selena did the rest.
</p>

<div style={gridContainerStyle}>
    <img src={image8} alt="Jackie Wyers Wedding Photography" style={imageStyle} /> 
    <img src={image9} alt="Jackie Wyers Wedding Photography" style={imageStyle} />
</div>


<p style={paragraphStyle}>
A private chef utilized the Italian majolica tiled kitchen space, serving delicious dishes and drinks outside on the terrace. We cut the cake near a whimsical well, overlooking the city lit up at night. The pool provided a perfect spot for a late-night swim post-wedding. Once we had the wedding venue set, many of the details fell into place quite quickly.

</p>
   
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>

<h2 style={headingStyle}>
  
Pop Culture Bridal Makeup & Hair Inspirations

</h2>


   

  <p style={paragraphStyle}>
    My bridal beauty style was a blend of whimsical enchantment and cinematic romance—echoing the regal elegance of Christine from "Phantom of the Opera," with a touch of beachy flair à la "Mamma Mia." I adorned my veil and bridesmaids' hair with handmade flower pins similar to Sophie’s. For these sheer flower pins, and if you love bridal looks in TV & film.
</p>

<div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>

<div style={gridContainerStyle}>
    <img src={image10} alt="Jackie Wyers Wedding Photography" style={imageStyle} /> 
    <img src={image12} alt="Jackie Wyers Wedding Photography" style={imageStyle} />
</div>
<img src={image11} alt="Jackie Wyers Wedding Photography" style={imageStyle} />


<p style={paragraphStyle}>
For makeup, I drew inspiration from <a href = "https://www.youtube.com/watch?v=LtTc3qCVtdE&t=332s" target = "_blank" rel="noreferrer">Taylor Hill’s wedding makeup</a>, emphasizing bold cheeks and deeper, pouty lips in romantic, blushy shades. I swept champagne across the lids with barely there winged liner and outer corner lashes. <a href="https://shopmy.us/collections/677004" target="_blank" rel="noreferrer">Charlotte Tilbury,</a>  Saie Beauty & Florasis were some of my top brands I chose to create my look.
</p>

<p style={paragraphStyle}>
Though pulling from several different beauty inspirations doesn’t always create a harmonious look, the big hair with loose curls, regal corseted top, and dainty flower crown embodied the fairytale style I felt most myself in on my big day without feeling like cosplay which was important to me.
</p>

<p style={paragraphStyle}>
Finally for nails, I’m the biggest <a href = "https://oliveandjune.com/collections/press-on-nails/products/milky-syrup-gradient-press-on-medium-almond?irclickid=V71S4RwqwxyKThwTSETAVXaQUkC2AlW1rStwwQ0&utm_source=Impact&utm_medium=2340682&utm_campaign=Online%20Tracking%20Link&irgwc=1" target="_blank" rel= "noreferrer">Olive & June</a> fan and went with an almond, medium length nude manicure that lasted me 2 full weeks for $10. Forever wearing glue ons.
</p>

  <h2 style={headingStyle}>
   Verander West: Transformative Bridal Couture
  </h2>

  <p style={paragraphStyle}>
  My gown, a custom creation by <a href="https://www.instagram.com/veranderwest" target="_blank" rel= "noreferrer">Verander West</a> is called the "Elizabeth" and was inspired by Queen Elizabeth Tudor, featuring a dramatic shape I had never worn before. The opulence! I chose champagne ivory instead of classic white, as I love earthy shades and knew we would have the ceremony at golden hour, making for soft, dreamy photos.
</p>
           
<div style={gridContainerStyle}>
    <img src={image13} alt="Jackie Wyers Wedding Photography" style={imageStyle} /> 
    <img src={image14} alt="Jackie Wyers Wedding Photography" style={imageStyle} />
</div>
<div style={gridContainerStyle}>
   
    <img src={image15} alt="Jackie Wyers Wedding Photography" style={imageStyle} />
</div>
<div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
<div style={gridContainerStyle}>
    <img src={image16} alt="Jackie Wyers Wedding Photography" style={imageStyle} /> 
    <img src={image17} alt="Jackie Wyers Wedding Photography" style={imageStyle} />
</div>


<p style={paragraphStyle}>
    The dress featured a delicately modified neckline with a lace overlay, designed to evoke a sense of vintage romance. 
</p>

<p style={paragraphStyle}>
I bought my wedding gown during a trip to New Zealand, visiting <a href = "https://www.instagram.com/natalierosebridal/" target="_blank" rel="noreferrer">Natalie Rose Bridal</a>. While I tried on many stunning gowns—see the contenders <a href="https://www.youtube.com/watch?v=UQU9Fufug4M&t=196s" target="_blank" rel = "noreferrer" style={{ color: 'black' }}>here</a>—what made this Verander West design special from the upcoming Coronation collection was the removable skirt for a two-in-one look.
</p>


<div style={gridContainerStyle}>
    <img src={image18} alt="Jackie Wyers Wedding Photography" style={imageStyle} /> 
</div>

<p style={paragraphStyle}>

I wore the sparkling champagne mini skirt for the rest of the evening, which was both comfortable and showcased my dream wedding shoes.
</p>

<div style={gridContainerStyle}>
    <img src={image19} alt="Jackie Wyers Wedding Photography" style={imageStyle} /> 
</div>


<h2 style={headingStyle}>
My Vintage Wedding Shoes & Alex Monroe Jewelry
</h2>


<p style={paragraphStyle}>
My heels were Manolo Blahnik green butterfly sandals, adding to the earthy, fairytale aesthetic. They matched my bridesmaids' green luxe satin dresses perfectly. I loved them so much, I even had a talented Canadian artist, <a href="https://www.instagram.com/sabinafenn/" target="_blank" rel="noreferrer">Sabina Fenn</a> add the butterfly to our custom painted wedding invitations!
</p>
<div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
<p style={paragraphStyle}>
For jewelry, I chose all gold, including vintage rings inherited from my mother and Tyler’s family’s wedding band. My Alex Monroe studs gifted from my Mother-in-law echoed the lace detailing on my gown’s neckline.
</p>

<div style={gridContainerStyle}>
    <img src={image20} alt="Jackie Wyers Wedding Photography" style={imageStyle} /> 
</div>

<h2 style={headingStyle}>
A DIY Flower Crown Veil
</h2>



<p style={paragraphStyle}>
As touched on in the beauty details, I knew I wanted a sheer, long veil, which I added DIY flowers to on the day of my wedding! Using sheer ivory and champagne ribbon, I cut petals and my mom helped sew three crystal beads in the centre of each flower to help catch the light. I fastened these onto the veil’s comb to blend better into my hair, and pinned the same flowers into my hair separately for a flower crown version without the veil, again for a more comfortable look.
</p>

<div style={gridContainerStyle}>
    <img src={image21} alt="Jackie Wyers Wedding Photography" style={imageStyle} /> 
</div>

<p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
A look at the DIY veil             
   </p>

<div style={gridContainerStyle}>
    <img src={image22} alt="Jackie Wyers Wedding Photography" style={imageStyle} /> 
</div>
<p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
The second flower crown version using same DIY pinned flowers
   </p>

<h2 style={headingStyle}>
My Fairycore Bridesmaids
</h2>


<p style={paragraphStyle}>
I kept my bridal party very intimate with my sister Cassy as my maid of honour, and my lifelong BFF Lauren, as well as my soon-to-be sister-in-law, Reagan. The girls looked like perfect fairies in moss <a href = "https://showmeyourmumu.com/collections/mumu-weddings-green-bridesmaid-dresses/products/tuscany-maxi-slip-dress-moss-green-luxe-satin?variant=32983177101355&shop_type=bridal" target="_blank" rel= "noreferrer">luxe satin dresses</a> from Show Me Your MuMu, paired with matching <a href = "https://www.birdygrey.com/products/natalie-chunky-heel-gold" target="_blank" rel='noreferrer'>gold heels</a> from BirdyGrey. I knew all their colouring would look great with the moss green and that the tones would look harmonious in the garden.
</p>

<div style={gridContainerStyle}>
    <img src={image24} alt="Jackie Wyers Wedding Photography" style={imageStyle} /> 
</div>

<p style={paragraphStyle}>

Everyone had their makeup in a natural glam style and wore their natural curly hair texture or soft waves, each adorned with a pinned flower to match my veil and their favorite gold jewelry.
</p>

<div style={gridContainerStyle}>
  <img src={image25} alt="Jackie Wyers Wedding Photography" style={imageStyle} /> 
  <img src={image26} alt="Jackie Wyers Wedding Photography" style={imageStyle} /> 
  <img src={image27} alt="Jackie Wyers Wedding Photography" style={imageStyle} /> 
  <img src={image28} alt="Jackie Wyers Wedding Photography" style={imageStyle} /> 
</div>

<h2 style={headingStyle}>
Choosing the Perfect Photographer
</h2>

<p style={paragraphStyle}>

Choosing a photographer was one of the hardest tasks in planning a wedding. Not only am I particular about how I photograph and my strong preference for soft lighting, but I also wanted to ensure I felt comfortable and relaxed. It was important to me to work with a fellow creative who would be collaborative about capturing the different shots I envisioned.
</p>
<div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
<p style={paragraphStyle}>
All of these photos are by Shivani Sharma, <a href= "https://www.instagram.com/moderndayshivalry/?hl=en" target="_blank" rel="noreferrer">@moderndayshivalry</a> on Instagram. With her soft and chic photography style, our ceremony was captured beautifully with backlit lighting and trickles of sunlight for the most romantic images!
</p>

<div style={gridContainerStyle}>
  <img src={image29} alt="Jackie Wyers Wedding Photography" style={imageStyle} />
</div>

<p style={paragraphStyle}>
    If you are hiring a photographer for a destination wedding, it’s also great if they have been to the location before. Sometimes getting around can be tricky as it was in Sorrento, and I knew Shivani had been there earlier in the summer, again, making her the perfect choice. If you love these images and want to book with Shivani, contact her <a href="https://shivanisharmaphoto.mypixieset.com" target="_blank" rel="noreferrer" style={{ color: 'black' }}>here</a>, or show her some love on social media <a href="https://www.instagram.com/moderndayshivalry/?hl=en" target="_blank" rel="noreferrer" style={{ color: 'black' }}>here</a>.
</p>


<div style={gridContainerStyle}>
  <img src={image30} alt="Jackie Wyers Wedding Photography" style={imageStyle} />
</div>

<h2 style={headingStyle}>
  Groom Details
</h2>


<p style={paragraphStyle}>
Tyler complemented my look with a classic tuxedo and an off-white shirt that paired beautifully with the warm, earthy hues of my dress. The groomsmen also wore off-white shirts. Tyler opted for tailored pants and comfortable loafers. I always love Tyler’s hair long and wavy, and he looked and felt great. Keep reading for first-look photos that melt my heart!
</p>


<div style={gridContainerStyle}>
  <img src={image31} alt="Jackie Wyers Wedding Photography" style={imageStyle} />
  <img src={image32} alt="Jackie Wyers Wedding Photography" style={imageStyle} />
</div>

<img src={image33} alt="Jackie Wyers Wedding Photography" style={imageStyle} />


<h2 style={headingStyle}>
  Our Non-Traditional Ceremony
</h2>


<p style={paragraphStyle}>
Our ceremony was uniquely ours, as we tweaked some traditional elements to make our experience as relaxed and as fun as possible. We chose to have a private first look and exchange vows two days before the official ceremony, ensuring we were relaxed and present on our actual wedding day, with our photos already taken. This might seem unconventional, but we both agreed these photos are forever and wanted to ensure nothing felt rushed, especially with photos being taken during golden hour.
</p>


<div style={gridContainerStyle}>
  <img src={image34} alt="Jackie Wyers Wedding Photography" style={imageStyle} />
  <img src={image35} alt="Jackie Wyers Wedding Photography" style={imageStyle} />
</div>
<div style={gridContainerStyle}>
  <img src={image36} alt="Jackie Wyers Wedding Photography" style={imageStyle} />
  <img src={image37} alt="Jackie Wyers Wedding Photography" style={imageStyle} />
</div>
<div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
<div style={gridContainerStyle}>

  <img src={image38} alt="Jackie Wyers Wedding Photography" style={imageStyle} />
</div>


<p style={paragraphStyle}>
As a makeup artist, I often help out with hair and makeup for others, so I wanted to be able to assist without stressing too much over my own look on the wedding day, knowing I already had fabulous photos! That being said, my bridesmaids came totally ready and looking fabulous, only adding Charlotte Tilbury’s <a href = "https://www.charlottetilbury.com/us/product/pillow-talk-lip-kit?clickref=1101lyLxIILm&utm_source=USPartnerize&utm_medium=affiliate&utm_campaign=shopmyshelf" target="_blank" rel= "noreferrer">Pillow Talk</a> lipstick to coordinate their looks.
</p>


<div style={gridContainerStyle}>
  <img src={image39} alt="Jackie Wyers Wedding Photography" style={imageStyle} />
</div>


<p style={paragraphStyle}>
Since we had been legally married for two years but hadn’t had a wedding ceremony until now, we didn’t need officiating. To keep some formalities, we had heartfelt speeches from the wedding parties and our parents. The speeches were wonderful, and some tears were shed! I’m not a great public speaker for sentimental situations, so Tyler took the reins thanking everyone for coming, while I gave out handwritten letters to everyone the following day, acknowledging their speeches. While many weddings aim to please others, I truly believe it’s important to customize your wedding to create the best memories possible. If any traditional customs don’t feel right, I believe in changing them up to suit your style!

</p>

<div style={gridContainerStyle}>
  <img src={image40} alt="Jackie Wyers Wedding Photography" style={imageStyle} />
</div>
<div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>

<h2 style={headingStyle}>
Sharing Our Photos
</h2>


<p style={paragraphStyle}>
These beautiful wedding photos were sent to me only days after the event. Feel free to browse through for more sweet moments that I will hold onto forever!
</p>

<p style={paragraphStyle}>
As for sending out photos, I used a free trial of SmugMug to create an aesthetically pleasing gallery that I could send a link out to, and people could download images within 14 days. You can use Dropbox or Google Photos, but my storage was already minimal and I liked the presentation of the site.
</p>

<div style={gridContainerStyle}>
  <img src={image41} alt="Jackie Wyers Wedding Photography" style={imageStyle} />
  <img src={image42} alt="Jackie Wyers Wedding Photography" style={imageStyle} />
</div>
<div style={gridContainerStyle}>
  <img src={image43} alt="Jackie Wyers Wedding Photography" style={imageStyle} />
  <img src={image44} alt="Jackie Wyers Wedding Photography" style={imageStyle} />
</div>
<div style={gridContainerStyle}>
  <img src={image45} alt="Jackie Wyers Wedding Photography" style={imageStyle} />
  <img src={image46} alt="Jackie Wyers Wedding Photography" style={imageStyle} />
</div>


<p style={paragraphStyle}>
Since everyone also takes so many photos on their phone, I included my iPhone photos and flash photos within the gallery and requested any photos of the ceremony be transferred over so we could have all of the photos printed out!

</p>


<h2 style={headingStyle}>
Keepsakes
</h2>


<p style={paragraphStyle}>
Speaking of keepsakes, Shivani captured a beautiful wedding video and I created a more casual vlog on my second channel to capture the day. Another great idea is to have your florals pressed. <a href="https://www.instagram.com/pressedfloral_/" target="_blank" rel="noreferrer">Pressed Floral</a>  can recreate your wedding bouquet, which is easier than preserving your wedding bouquet perfectly, and they carry stunning designs and pendant necklaces that make great gifts. My bridal bouquet features a classic and elegant arrangement of white roses, spray roses, and delicate wax flowers, complemented by the unique texture of hypericum berries. The greenery from eucalyptus leaves adds a fresh and natural touch, enhancing the overall romantic and timeless look of the bouquet. I’m so excited to receive my pressed florals soon!
</p>


<div
style = {{
  textAlign: 'center',
}}
> 



</div>
<div style={gridContainerStyle}>
  <a href = "https://www.instagram.com/pressedfloral_/" target = "_blank" rel="noopener noreferrer">
  <img src={image47} alt="Jackie Wyers Wedding Photography" style={imageStyle} />

  </a>
</div>
<p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
Pressed Floral
   </p>

   <div style={gridContainerStyle}>
  <img src={image99} alt="Jackie Wyers Wedding Photography" style={imageStyle} />
</div>

<p style={paragraphStyle}>
I am quite the sentimental type and love leather-bound photo books. Weddings can be expensive, and leather-bound books can also be pricey, so this makes an amazing anniversary gift or a group gift. One of my favorites is from Etsy.
</p>



<ResponsiveIframe src="https://shopmy.us/collections/public/688525?noHeader=true" title="Hand-Painted Leather Wedding Photo Album" />



<h2 style={headingStyle}>
Reflections
</h2>

  <p style={paragraphStyle}>
  As I reflect on our magical wedding day while putting this together, I feel incredibly thankful for everyone who made it possible. Thank you to both our parents for their incredible support and generosity in helping us create this unforgettable celebration. I also want to thank our wonderful guests for traveling from near and far to join us in Sorrento and the entire wedding party for their heartfelt speeches. Thank you for celebrating Tyler and me!

  </p>
<p style={paragraphStyle}>
A special thank you goes to our amazing photographer, Shivani Sharma, for capturing every beautiful moment with such artistry and care. Your photos have given us memories that we will cherish forever.

</p>

<p style={paragraphStyle}>
Finally, to Selena, our incredible party planner, thank you for your dedication and creativity in bringing our vision to life. Your expertise and hard work made everything run smoothly, and we couldn’t have done it without you.

</p>

<p style={paragraphStyle}>
Thank you for reading and for being part of our journey and my life for so many years! I hope if you are in the wedding planning stages, this article can help you out as well.

</p>
<div> 
<WeddingCarousel/>
</div>

       <div>
        <img src={signature} alt="Jackie Wyers Signature XoXo" style={{ width: '100%' }} />
      </div>
     
      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <a href="/bridesmaidboxes" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={bridesmaid} alt="Bridesmaids Boxes How To" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', display: 'block' }} />
          MORE BRIDAL CONTENT →
        </a>
      </div>

      <Comments website-id={websiteId} page-id={"Fairytale-Wedding"} />

      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>

<div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      
    </div>
    
  );

  return (
    <div ref={blogRef}>
      <Card
        title="Our Fairytale Wedding Overlooking Sorrento, Italy"
        description="All the enchanting details, prep & planning"
        blogContent={blogContent}
      />
    </div>
  );
};

export default FairytaleWedding;
