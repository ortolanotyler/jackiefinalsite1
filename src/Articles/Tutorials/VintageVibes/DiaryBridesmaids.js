import React, { useRef } from 'react';
import '../../ExampleTutorial1.css';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import DropCap from '../../../Components/DropCap';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import TextReveal from '../../../Components/TextReveal';
import AdSenseAd from '../../../Advertising/Ads';

const title = `${process.env.PUBLIC_URL}/Images/Articles/SummerBeauty/SummerBeautyTitle.png`;
const image1 = `${process.env.PUBLIC_URL}/Images/Articles/SummerBeauty/BlueLagoon.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/SummerBeauty/barbiewpolaroid.JPG`;
const image3 = `${process.env.PUBLIC_URL}/Images/Articles/SummerBeauty/EmilyInParis.jpg`;
const image4 = `${process.env.PUBLIC_URL}/Images/Articles/SummerBeauty/Flora_.jpg`;
const image5 = `${process.env.PUBLIC_URL}/Images/Articles/SummerBeauty/H2Hair.jpg`;
const image6 = `${process.env.PUBLIC_URL}/Images/Articles/SummerBeauty/outerbanks.jpg`;

const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
  <div>
    <div><TextReveal text='' /></div>
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
    fontSize: '32px',
    fontWeight: 'normal',
    fontFamily: 'Arapey, serif',
    color: '#333',
    margin: '2.5rem'
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

  const blogContent = (
    <div className="container">
      <div style={{ margin: '5rem',display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
        <a href="/popculture" style={{ fontFamily: 'Arapey', fontSize: '1.25em', color: 'black', textDecoration: 'none' }}>
          DIARY // BRIDAL
        </a>
      </div>
      <img src={title} alt="No Makeup-Makeup Spring Edition Title" style={{ width: '100%' }} />

      <div>
        <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '0em', maxWidth: '100%', fontStyle: 'italic' }}>
          All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
        </p>
      </div>

      <DropCap text="Looking for easy breezy summer hairstyles, makeup & style to try this
summer? Here’s my top 6 inspirations pulled from some of pop
culture's most iconic characters. From the sun-kissed shores of 'The
Blue Lagoon' to the chic streets of 'Emily In Paris,' join me as I recreate and
reinterpret the signature styles of these beloved characters. Whether you're
seeking a dash of nostalgic charm or a splash of summer-ready glamour,
these tutorials will inspire you to embrace your inner icon. " />
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
     
      <h2 style={headingStyle}>The Looks:
      </h2>
      <h2 style={headingStyle}>
      Brooke Shields as Emmaline - ‘The Blue Lagoon'</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <a href="https://www.instagram.com/p/C5dsVStuCqT/?img_index=1" target="_blank" rel="noopener noreferrer">
          <img src={image1} alt="Pheobe Tonkin" style={{ width: '100%', maxWidth: '650px' }} />
        </a>
      </div>
      <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '5rem', maxWidth: '100%', fontStyle: 'italic' }}>
      Original Makeup by Barbara Daly and Hair Design by Leonard George from 'The Blue Lagoon,' recreation by Jackie
      Wyers. </p>
      <p style={paragraphStyle}>

      Capture the iconic natural beauty of Brooke Shields in 'The Blue Lagoon'
with long, tousled flowing beach waves and a fresh-faced no-makeup
makeup look. Embrace the island vibe with a tan, minimal sun-kissed
makeup, and a touch of sea salt spray to enhance natural sea swept texture.
Dive into the full makeup and hair tutorial inspired by Brooke on my
channel, my <a href='https://www.youtube.com/watch?v=yC8Sf9U3Aww&list=PL-_qSuEl3UwH4UEWC4LNUSi6a3y_oVmDB'> most viewed tutorial!  </a>And for a nostalgic throwback, check out
my very first attempt at creating this iconic style <a href='https://www.youtube.com/watch?v=yC8Sf9U3Aww&list=PL-_qSuEl3UwH4UEWC4LNUSi6a3y_oVmDB'> here.  </a>✨    </p>

      <ResponsiveIframe src="https://shopmy.us/collections/public/619257?noHeader=true" title="Shop My Victoria's Secret Favorites" />
      <p style={{ textAlign: 'right', fontSize: '0.75rem', fontFamily: 'GFS Didot, serif', margin: '-0.5em 0', maxWidth: '100%' }}>
        CONTAINS: AFFILIATE LINKS
      </p>




      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <a href="/mermaids" style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center' }}>
          <img src={image6} alt="Margot Robbie - Barbie Movie" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', display: 'block' }} />
          MORE POP CULTURE BEAUTY →
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
<Comments website-id={websiteId} page-id={"Las-nozzlestronsonberries"} />

    </div>
  );

  return (
    <div ref={blogRef}>
      <Card
        title="Summer Beauty Inspiration!"
        description="Just a hint of color, just in time for spring"
        blogContent={blogContent}
      />

    </div>
  );
};

export default DiaryBridesmaids;
