import React, { useRef } from 'react';
import '../../ExampleTutorial1.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import DropCap from '../../../Components/DropCap';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import TextReveal from '../../../Components/TextReveal';
import AdSenseAd from '../../../Advertising/Ads';

const title = `${process.env.PUBLIC_URL}/Images/Articles/Bridesmaids/BridesmaidsTitle.png`;
const image1 = `${process.env.PUBLIC_URL}/Images/Articles/Bridesmaids/1.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/Bridesmaids/2.JPG`;
const image3 = `${process.env.PUBLIC_URL}/Images/Articles/Bridesmaids/3.JPG`;
const image4 = `${process.env.PUBLIC_URL}/Images/Articles/Bridesmaids/4.JPG`;
const image5 = `${process.env.PUBLIC_URL}/Images/Articles/Bridesmaids/5.JPG`;
const image6 = `${process.env.PUBLIC_URL}/Images/Articles/Bridesmaids/6.JPG`;
const sharon = `${process.env.PUBLIC_URL}/Images/Articles/SharonTateBridal/SHARONTATEBRIDAL.jpeg`;

const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
  <div>
    <div><TextReveal text='DIARY' /></div>
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);

const DiaryBridesmaids = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);

  const headingStyle = {
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: 'normal',
    fontFamily: 'Arapey, serif',
    color: '#333',
    margin: '2.5rem'
  };

  const imageStyle = {
    display: 'block',
    margin: '0 auto',
    maxWidth: '100%',
    height: 'auto'
};


  const paragraphStyle = {
    fontSize: '20px',
    fontFamily: 'GFS Didot, serif',
    margin: '1rem 1.5rem',
    marginTop: '1rem',
    marginBottom: '1rem',
    maxWidth: '700px',
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
  const blogContent = (
    <div className="container">
      <div style={{ margin: '5rem',display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vh' }}>
        <a href="/diary" style={{ fontFamily: 'Arapey', fontSize: '1rem', color: 'black', textDecoration: 'none' }}>
          DIARY // BRIDAL
        </a>
      </div>
      <img src={title} alt="Bridesmaids Title" style={{ width: '100%' }} />

      <div>
        <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
          All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
        </p>
      </div>

      <DropCap text="Welcome back to All Things Bridal! If you are new to my channel, here’s a bit of backstory about my upcoming wedding ceremony in July. My husband Tyler and I have been legally married for two years which is why I call his my husband and not fiancé, but we held off on having a wedding ceremony to save up for a celebration in Sorrento, Italy. We're also planning a trip afterward to Belgium, where we met in middle school many years ago. Excited is an understatement! " />
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>


     
     
  
      <p style={paragraphStyle}>
      I’ll share an article on how I went about planning the wedding, including details about my custom wedding dress and accessories. But for today’s article, let’s talk DIY bridesmaid proposal boxes!
     </p>

     <div>
        <img src={image1} alt="Signature" style={{ width: '100%' }} />
      </div>
      

   
      <p style={paragraphStyle}>

      I didn’t know this was a thing until fairy recently, so if you haven’t been in a wedding party before, these are gift boxes that brides-to-be give their bridesmaids as a special way of asking them to be part of their wedding party.
</p>

<p style={paragraphStyle}>
You can go in many directions when crafting your own bridesmaid proposal boxes, but they typically contain personalized items like jewelry, picture frames, beauty items and a heartfelt note or card.
</p>

<p style={paragraphStyle}>
If you are a bride-to-be looking for inspiration for your own bridesmaid boxes, I hope this is helpful.
</p>


<div>
        <img src={image2} alt="Signature" style={{ width: '100%' }} />
      </div>
      <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>

      Please keep in mind that you can create a bridesmaid proposal box on a budget. I only had three bridesmaids, so I was able to spend a little more, but it is not necessary by any means. I also see a lot of influencer proposal boxes with many gifted items through PR, so don’t feel like you need to spend a ton of money to make a special box for your potential bridesmaids. It should be a fun experience putting these together, not a stressful one!
</p>

<h2 style = { headingStyle }> 
    🕊 How to Create Your Bridesmaid Proposal Boxes

</h2>

<p style={paragraphStyle}>

1. Choose Your Box: First, you will need a box! You can get them in bulk on Amazon, but I found three boxes from Winners, a discount store in Canada. I loved the sage green whimsical pattern, which matched my bridesmaids' dresses. These sturdy boxes can double as memory boxes.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/619635?noHeader=true" title="Shop My Victoria's Secret Favorites" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>
        CONTAINS: AFFILIATE LINKS
      </p>


<p style={paragraphStyle}>

2. Fill the Box: Start with shredded paper and
layer over some pretty tissue paper. I chose tissue paper with gold bees to match an earthy, fairytale aesthetic. Satin napkins can also create a more luxurious feel if that suits your vibe.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/619672?noHeader=true" title="Shop My Victoria's Secret Favorites" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>
        CONTAINS: AFFILIATE LINKS
      </p>


<p style={paragraphStyle}>

3. Personal Touches: I chose a fairytale gold
picture frame with a photo of each of my bridesmaids. These frames look like they are from Anthropologie but are actually from Winners. I’ve linked similar frames below in a similar aesthetic, with different price ranges.
</p>

<div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>

<ResponsiveIframe src="https://shopmy.us/collections/public/619621?noHeader=true" title="Shop My Victoria's Secret Favorites" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>
        CONTAINS: AFFILIATE LINKS
      </p>


<p style={paragraphStyle}>

4. Useful and Beautiful Items: You can’t go wrong
with a beautiful pen. I love the Noda brand from Indigo or Chapters. The pens I chose matched
the green and gold theme and had gold flakes and purple flowers floating around the top.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/621130?noHeader=true" title="Shop My Victoria's Secret Favorites" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>
        CONTAINS: AFFILIATE LINKS
      </p>


<p style={paragraphStyle}>

5. Body Care: Since we will be traveling, I thought a hand cream would be a nice touch. I chose my favorite scent from L’Occitane. You can’t go wrong with their Almond range!
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/619704?noHeader=true" title="Shop My Victoria's Secret Favorites" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>
        CONTAINS: AFFILIATE LINKS
      </p>

<p style={paragraphStyle}>
6. Jewelry: My entire wedding theme is enchanting and earthy, so I selected jewelry pieces from Fabel England’s Whispering Sands collection. We will be on the coast in Sorrento, and this collection carries beautiful jewelry, fans, accessories, and silk PJs in a nautical aesthetic. Perfect for a summer wedding gift. 

</p>

<div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>

<ResponsiveIframe src="https://shopmy.us/collections/public/619706?noHeader=true" title="Shop My Victoria's Secret Favorites" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>
        CONTAINS: AFFILIATE LINKS
      </p>

<p style={paragraphStyle}>

7. Sweet Treats: Mason jars filled with candy add a fun touch. Initially, I went with my bridesmaids' favorite treats, but I changed to Amalfi drops since we will be visiting the Amalfi Coast. These are so tasty. 🍋 

</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/619709?noHeader=true" title="Shop My Victoria's Secret Favorites" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>
        CONTAINS: AFFILIATE LINKS
      </p>

<p style={paragraphStyle}>

8. Beauty Products: When I think of ethereal, whimsical beauty products, Gucci Beauty comes
to mind. I added mini sample sets to each box. These samples are adorable mini versions of the actual aesthetically pleasing bottles, allowing your bridesmaids to try them out without much risk if it’s not their fav scent. I’ve seen adorable perfume mini’s by Marc Jacobs and Dior too that are tiny versions of the full size bottle.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/619720?noHeader=true" title="Shop My Victoria's Secret Favorites" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>
        CONTAINS: AFFILIATE LINKS
      </p>

<p style={paragraphStyle}>
9. Aromatic Additions: Some dried florals, which smelled amazing also from L’Occitane, were added to the boxes. Alternatively, you could spritz your favorite perfume so the box smells like you as they open their gift.

</p>



<div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
<p style={paragraphStyle}>

10. Personal Notes: For a card, Rifle Paper Co. or Papyrus has beautiful options. I wrote a
handwritten letter to each bridesmaid and my maid of honour (my sister), placed in an envelope with a gold sticker. I also used cursive gold stickers to write out their names and added 3-D butterfly stickers, also in gold, from Michael’s. (Shopmy)

</p>
<ResponsiveIframe src="https://shopmy.us/collections/public/619722?noHeader=true" title="Shop My Victoria's Secret Favorites" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>
        CONTAINS: AFFILIATE LINKS
      </p>



<p style={paragraphStyle}>

11. Finishing Touch: Finish with a bow on top of the box. A great idea from Delany Child that she did for her bridesmaid box, was to add a big, oversized hair bow on top of the box to double as a hair accessory. Fun!

</p>



<h2 style = { headingStyle }> 
A Look at My Finished Bridesmaid Boxes
</h2>

<div style={gridContainerStyle}>
                <img src={image3} alt="Maui room 1" style={imageStyle} />
                <img src={image4} alt="Maui room 2" style={imageStyle} />
                <img src={image5} alt="Maui room 1" style={imageStyle} />
                <img src={image6} alt="Maui room 2" style={imageStyle} />
            </div>


<p style={paragraphStyle}>
Here are some final photos of my version of a bridesmaid proposal box before I shipped them off or hand-delivered them. They feel handcrafted, whimsical, with a touch of Italy to anticipate the trip coming up!

</p>

<h2 style = {headingStyle}> 
Additional Ideas:
</h2>

<ResponsiveIframe src="https://shopmy.us/collections/public/628197?noHeader=true" title="Shop My Victoria's Secret Favorites"  />

<ResponsiveIframe src="https://shopmy.us/collections/public/628200?noHeader=true" title="Shop My Victoria's Secret Favorites"  />
<ResponsiveIframe src="https://shopmy.us/collections/public/628186?noHeader=true" title="Shop My Victoria's Secret Favorites"  />
<ResponsiveIframe src="https://shopmy.us/collections/public/628191?noHeader=true" title="Shop My Victoria's Secret Favorites"  />
<ResponsiveIframe src="https://shopmy.us/collections/public/628192?noHeader=true" title="Shop My Victoria's Secret Favorites"  />
<ResponsiveIframe src="https://shopmy.us/collections/public/628195?noHeader=true" title="Shop My Victoria's Secret Favorites"  />


<p style={paragraphStyle}>
I hope you got some inspiration from my bridesmaid box, and if you want to see my bridal dress fitting for more bride-to-be vibes, sign up for the newsletter <a href = "/subscribe" >here</a>  for more posts coming up! If you’re looking for pop culture-inspired bridal looks, I also have you covered with the article below. Thank you for reading!

</p>

<div style={{ textAlign: 'center' }}>
        <a href="/SharonTateBridal" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={sharon} alt="Vintage Vibes Merch" style={{ width: '100%', maxWidth: '1000px', display: 'block' }} />
         MORE BRIDAL →
        </a>
      </div>

      <div>
        <img src={signature} alt="Signature" style={{ width: '100%' }} />
      </div>

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
<Comments website-id={websiteId} page-id={"Las-nozzlestronsonberries"} />

    </div>
  );

  return (
    <div ref={blogRef}>
      <Card
        title="Bridesmaid Proposal Box"
        description=" "
        blogContent={blogContent}
      />

    </div>
  );
};

export default DiaryBridesmaids;
