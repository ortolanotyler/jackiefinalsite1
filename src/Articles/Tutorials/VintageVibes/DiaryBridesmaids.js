import React, { useRef, useEffect } from 'react';
import '../../ExampleTutorial1.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import AdSenseAd from '../../../Advertising/Ads';
import { initGA, logPageView } from '../../../analytics';
import { Helmet } from 'react-helmet';
import DropCap1 from '../../Travel/DropCap1';
import ArticleTitle from '../../../Components/ArticleTitle';

const title = `${process.env.PUBLIC_URL}/Images/Articles/Bridesmaids/BridesmaidsTitle.png`;
const image1 = `${process.env.PUBLIC_URL}/Images/Articles/Bridesmaids/1.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/Bridesmaids/2.JPG`;
const image3 = `${process.env.PUBLIC_URL}/Images/Articles/Bridesmaids/3.JPG`;
const image4 = `${process.env.PUBLIC_URL}/Images/Articles/Bridesmaids/4.JPG`;
const image5 = `${process.env.PUBLIC_URL}/Images/Articles/Bridesmaids/5.JPG`;
const image6 = `${process.env.PUBLIC_URL}/Images/Articles/Bridesmaids/6.JPG`;
const diy = `${process.env.PUBLIC_URL}/Images/Articles/MammaMia/mammamiathumb.png`;

const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
  
  <div className="card">
    <div className="blog-content">{blogContent}</div>
  </div>

);

const DiaryBridesmaids = () => {

useEffect(() => {
  initGA();
  logPageView('/bridesmaidboxes');
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
margin: '2rem auto',

maxWidth: '525px', // Consistent with the other paragraphs
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
display: 'flex',
justifyContent: 'center',
gap: '1rem',
flexWrap: 'wrap',
margin: '1rem 0'
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
  <title>Bridesmaid Boxes How-To - Jackie Wyers</title>
  <link rel="canonical" href="https://jackiewyers.beauty/bridesmaidsboxes" />

  <meta name="description" content="Creative and budget-friendly ideas for your bridesmaids gifts, featuring DIY tips by Jackie Wyers." />
  <meta name="keywords" content="Bridesmaid Boxes, Jackie Wyers, Bridal Gifts, DIY Bridesmaid Gifts, Budget-Friendly Bridesmaid Gifts, Bridal Blog, Bridesmaid Proposal, Wedding Planning, Wedding Gifts, Bridesmaid Ideas, Bridesmaids How-To" />

  <meta property="og:title" content="Bridesmaid Boxes How-To - Jackie Wyers" />
  <meta property="og:description" content="Creative and budget-friendly ideas for your bridesmaids gifts, featuring DIY tips by Jackie Wyers." />
  <meta property="og:image" content="https://jackiewyers.beauty/Images/Articles/Bridesmaids/BridesmaidsTitle.png" />
  <meta property="og:url" content="https://jackiewyers.beauty/bridesmaidsboxes" />

  <meta name="twitter:title" content="Bridesmaid Boxes How-To - Jackie Wyers" />
  <meta name="twitter:description" content="Creative and budget-friendly ideas for your bridesmaids gifts, featuring DIY tips by Jackie Wyers." />
  <meta name="twitter:image" content="https://jackiewyers.beauty/Images/Articles/Bridesmaids/BridesmaidsTitle.png" />
  <meta name="twitter:card" content="summary_large_image" />

  {/* Google Analytics Script */}
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-RT6GR7JXYG"></script>
  <script>
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-RT6GR7JXYG');
    `}
  </script>

  {/* Google Ads Script */}
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4660168246825318" crossorigin="anonymous"></script>

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Bridesmaid Boxes How-To",
        "description": "Creative and budget-friendly ideas for your bridesmaids gifts, featuring DIY tips by Jackie Wyers.",
        "image": "https://jackiewyers.beauty/Images/Articles/Bridesmaids/BridesmaidBoxThumb!.jpg",
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
          "@id": "https://jackiewyers.beauty/bridesmaidsboxes"
        }
      }
    `}
  </script>
</Helmet>

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75px' }}>
        <a href="/bridal" style={{ fontFamily: 'GFS Didot, serif', fontSize: '0.8rem', color: '#000000', textDecoration: 'none' }}>
          DIARY // BRIDAL
        </a>
      </div>

      <ArticleTitle
  mainTitle="Whimsical DIY Bridesmaid Proposal Boxes"
  subTitle="Creative and Budget-Friendly Ideas for a Memorable Touch"
  author="Jackie Wyers"
  publishDate="June 22nd, 2024"
/>


     

      <DropCap1 text="Welcome back to All Things Bridal! If you are new to my channel, here’s a bit of backstory about my upcoming wedding ceremony in July. My husband Tyler and I have been legally married for two years which is why I call his my husband and not fiancé, but we held off on having a wedding ceremony to save up for a celebration in Sorrento, Italy. We're also planning a trip afterward to Belgium, where we met in middle school many years ago. Excited is an understatement! " />
     
      <div style = {{ margin : '1rem auto'}}>
  <AdSenseAd/>
</div>

      <p style={paragraphStyle}>
      I’ll share an article on how I went about planning the wedding, including details about my custom wedding dress and accessories. But for today’s article, let’s talk DIY bridesmaid proposal boxes!
     </p>


     <p style={{ margin: '20px auto', textAlign: 'center', fontSize: '1.1rem', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
      All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
      </p>


     <div style = {imageStyle}>
        <img src={image1} alt="Signature" style={{ width: '100%' }} />
      </div>
      

   
   <p style={paragraphStyle}>
  I didn’t know this was a thing until <a style={linkStyle} href="https://www.brides.com/story/how-to-ask-bridesmaids" target="_blank" rel="noreferrer">fairly recently</a>, so if you haven’t been in a wedding party before, these are <a style={linkStyle} href="https://www.theknot.com/content/bridesmaid-proposal-ideas" target="_blank" rel="noreferrer">gift boxes</a> that brides-to-be give their bridesmaids as a special way of asking them to be part of their wedding party.
</p>

<p style={paragraphStyle}>
  You can go in many directions when crafting your own <a style={linkStyle} href="https://www.weddingwire.com/wedding-ideas/bridesmaid-box-ideas" target="_blank" rel="noreferrer">bridesmaid proposal boxes</a>, but they typically contain personalized items like <a style={linkStyle} href="https://www.etsy.com/market/bridesmaid_jewelry" target="_blank" rel="noreferrer">jewelry</a>, <a style={linkStyle} href="https://www.pinterest.com/search/pins/?q=picture%20frames" target="_blank" rel="noreferrer">picture frames</a>, <a style={linkStyle} href="https://www.sephora.com/shop/beauty-products" target="_blank" rel="noreferrer">beauty items</a>, and a heartfelt <a style={linkStyle} href="https://www.shutterfly.com/designs/cards-stationery/bridesmaid-cards" target="_blank" rel="noreferrer">note or card</a>.
</p>

<p style={paragraphStyle}>
  If you are a bride-to-be looking for <a style={linkStyle} href="https://www.bridalguide.com/planning/bridesmaids/proposal-box-ideas" target="_blank" rel="noreferrer">inspiration for your own bridesmaid boxes</a>, I hope this is helpful.
</p>


<div style={gridContainerStyle}>
      <a href='https://www.instagram.com/reel/C3nim61u_4Q/?hl=en'>
          <img src={image2} alt="Bridesmaid Box Idea How-To" style={{ width: '100%', height: 'auto' }} />
        </a>
 </div>




 <p style={captionStyle}>
        Please keep in mind that you can create a bridesmaid proposal box on a budget. I only had three bridesmaids, so I was able to spend a little more, but it is not necessary by any means. I also see a lot of influencer proposal boxes with many gifted items through PR, so don’t feel like you need to spend a ton of money to make a special box for your potential bridesmaids. It should be a fun experience putting these together, not a stressful one!
</p>

<h2 style = { headingStyle }> 
    🕊 How to Create Your Bridesmaid Proposal Boxes
</h2>

<p style={paragraphStyle}>

1. Choose Your Box: First, you will need a box! You can get them in bulk on Amazon, but I found three boxes from Winners, a discount store in Canada. I loved the sage green whimsical pattern, which matched my bridesmaids' dresses. These sturdy boxes can double as memory boxes.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/619635?noHeader=true" title="Bridesmaid Box Collection" />
   


<p style={paragraphStyle}>

2. Fill the Box: Start with shredded paper and
layer over some pretty tissue paper. I chose tissue paper with gold bees to match an earthy, fairytale aesthetic. Satin napkins can also create a more luxurious feel if that suits your vibe.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/619672?noHeader=true" title="Bridesmaid Box Collection" />
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

<ResponsiveIframe src="https://shopmy.us/collections/public/619621?noHeader=true" title="Bridesmaid Box Collection" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>
        CONTAINS: AFFILIATE LINKS
      </p>


<p style={paragraphStyle}>

4. Useful and Beautiful Items: You can’t go wrong
with a beautiful pen. I love the Noda brand from Indigo or Chapters. The pens I chose matched
the green and gold theme and had gold flakes and purple flowers floating around the top.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/621130?noHeader=true" title="Bridesmaid Box Collection" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>
        CONTAINS: AFFILIATE LINKS
      </p>


<p style={paragraphStyle}>

5. Body Care: Since we will be traveling, I thought a hand cream would be a nice touch. I chose my favorite scent from L’Occitane. You can’t go wrong with their Almond range!
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/619704?noHeader=true" title="Bridesmaid Box Collection" />
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

<ResponsiveIframe src="https://shopmy.us/collections/public/619706?noHeader=true" title="Bridesmaid Box Collection" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>
        CONTAINS: AFFILIATE LINKS
      </p>

<p style={paragraphStyle}>

7. Sweet Treats: Mason jars filled with candy add a fun touch. Initially, I went with my bridesmaids' favorite treats, but I changed to Amalfi drops since we will be visiting the Amalfi Coast. These are so tasty. 🍋 

</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/619709?noHeader=true" title="Bridesmaid Box Collection" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>
        CONTAINS: AFFILIATE LINKS
      </p>

<p style={paragraphStyle}>

8. Beauty Products: When I think of ethereal, whimsical beauty products, Gucci Beauty comes
to mind. I added mini sample sets to each box. These samples are adorable mini versions of the actual aesthetically pleasing bottles, allowing your bridesmaids to try them out without much risk if it’s not their fav scent. I’ve seen adorable perfume mini’s by Marc Jacobs and Dior too that are tiny versions of the full size bottle.
</p>

<ResponsiveIframe src="https://shopmy.us/collections/public/619720?noHeader=true" title="Bridesmaid Box Collection" />
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
<ResponsiveIframe src="https://shopmy.us/collections/public/619722?noHeader=true" title="Bridesmaid Box Collection" />
    

<p style={paragraphStyle}>

11. Finishing Touch: Finish with a bow on top of the box. A great idea from Delany Child that she did for her bridesmaid box, was to add a big, oversized hair bow on top of the box to double as a hair accessory. Fun!

</p>



<h2 style = { headingStyle }> 
A Look at My Finished Bridesmaid Boxes
</h2>

<div style={gridContainerStyle}>
                <img src={image3} alt="Bridesmaid Boxes How-To" style={imageStyle} />
                <img src={image4} alt="Bridesmaid Box Ideas" style={imageStyle} />
                <img src={image5} alt="Bridesmaid Box Cards" style={imageStyle} />
                <img src={image6} alt="Fable England Bridesmaid Earrings" style={imageStyle} />
            </div>


<p style={paragraphStyle}>
Here are some final photos of my version of a bridesmaid proposal box before I shipped them off or hand-delivered them. They feel handcrafted, whimsical, with a touch of Italy to anticipate the trip coming up!

</p>

<h2 style = {headingStyle}> 
Additional Ideas:
</h2>

<ResponsiveIframe src="https://shopmy.us/collections/public/628197?noHeader=true" title="Anaïs Candle Anaïs Candle Double Layer Creamy Vintage Cake"  />

<ResponsiveIframe src="https://shopmy.us/collections/public/628200?noHeader=true" title="Freixenet Italian Sparkling Rose"  />
<ResponsiveIframe src="https://shopmy.us/collections/public/628186?noHeader=true" title="FEMALE | Baublebar Think Pink Crystal Rose Bottle Drop Earrings"  />
<ResponsiveIframe src="https://shopmy.us/collections/public/628191?noHeader=true" title="CHARLOTTE TILBURY | Pillow Talk On The Go Kit"  />
<ResponsiveIframe src="https://shopmy.us/collections/public/628192?noHeader=true" title="KITSCH | Satin Sleep Scrunchies"  />
<ResponsiveIframe src="https://shopmy.us/collections/public/628195?noHeader=true" title="OLIVE AND JUNE | CCt Bridal Edition"  />


<p style={paragraphStyle}>
I hope you got some inspiration from my bridesmaid box, and if you want to see my bridal dress fitting for more bride-to-be vibes, sign up for the newsletter <a href = "/subscribe" >here</a>  for more posts coming up! If you’re looking for pop culture-inspired bridal looks, I also have you covered with the article below. Thank you for reading!

</p>

<div style={{ textAlign: 'center' }}>
<div style = {imageStyle}>

        <a href="/diy-flowers" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={diy} alt="Vintage Vibes Merch" style={{ width: '100%', maxWidth: '1000px', display: 'block' }} />
         MORE BRIDAL DIY →
        </a>
      </div>
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
        description="Bridesmaids will love this unique, whimsical, and affordable bridesmaid proposal"
        blogContent={blogContent}
      />

    </div>
  );
};

export default DiaryBridesmaids;
