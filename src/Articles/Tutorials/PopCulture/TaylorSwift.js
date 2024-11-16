import React, { useRef, useEffect } from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import { Helmet } from 'react-helmet-async';
import DropCap1 from '../../Travel/DropCap1';
import ArticleTitle from '../../../Components/ArticleTitle';
import NextArticle from '../../../Components/NextArticleComponent';
import SocialShare from '../../../Home/SocialShare';

const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
  <div
    style={{
      margin: '0 auto',
      maxWidth: '95%',
      padding: '10px',
    }}
  >
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);

const TaylorSwiftHoliday = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);

  const headingStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: '100',
    fontFamily: "Playfair Display, serif",
    color: '#000000',
    maxWidth: '95%',
    margin: '30px auto',
  };

  const paragraphStyle = {
    fontSize: '20px',
    color: '#000000',
    fontFamily: "EB Garamond, sans-serif",
    fontWeight: '100',
    padding: '10px',
    margin: '10px auto',
    lineHeight: '1.6',
  };

  const linkStyle = {
    textDecoration: 'none',
    fontFamily: "'Georgia', serif",
    fontWeight: '100',
    color: '#745B4F',
  };

  const iframeStyle = {
    width: '100%',
    minHeight: '340px',
    border: 'none',
  };

  const blogContent = (
    <div className="container">
      <Helmet>
        <title>Taylor Swift Holiday Merch 2024 Ranked!</title>
        <meta name="description" content="Discover the top picks and must-have pieces from Taylor Swift's 2024 holiday collection. A guide for Swifties to choose the best merch for the holiday season!" />
        <meta property="og:title" content="Taylor Swift Holiday Merch 2024 Ranked!" />
        <meta property="og:description" content="Explore my top picks from Taylor Swift's 2024 holiday merch collection. From ornaments to sweaters, find the perfect Swiftie gifts!" />
        <meta name="twitter:title" content="Taylor Swift Holiday Merch 2024 Ranked!" />
        <meta name="twitter:description" content="Taylor Swift's 2024 holiday merch is here! See my top picks and must-have items for every Swiftie." />
      </Helmet>

      <ArticleTitle
        mainTitle="Taylor Swift Holiday Merch 2024 Ranked!"
        subTitle="My Top Picks and Must-Have Pieces for Every Swiftie"
        author="Jackie Wyers"
        publishDate="November 16th, 2024"
      />

      <SocialShare
        url="https://www.jackiewyers.beauty/taylor-holiday-merch-2024"
        title="Taylor Swift Holiday Merch 2024 Ranked!"
        imageUrl="https://www.jackiewyers.beauty/Images/TaylorSwiftMerch2024Thumbnail.jpg"
      />

      <div style={{ textAlign: 'center', margin: '10px auto' }}>
        <SubscribeButton />
      </div>

      <p style={{ margin: '20px auto', textAlign: 'center', fontSize: '1.1rem', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
        All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
      </p>

      <div style={paragraphStyle}>
        <DropCap1 text="Holiday season is upon us, and as a Swiftie, I always get excited to shop Taylor Swift’s holiday collection on taylorswift.com! Every year, I love picking out a couple of ornaments and a merch piece or two. This year, I found so many pieces I loved, making it hard to narrow down my choices. To help you decide if you are in the same boat, I thought I’d share my top picks and highlight the pieces that stood out the most. Let me know in the comments if you bought anything from this merch drop!" />
      </div>

      <h2 style={headingStyle}>The Tortured Poet’s Department Sweater</h2>
      <ResponsiveIframe title="TTPD Sweater" src="https://shopmy.us/collections/embed/997423?" style={iframeStyle} />
      <p style={paragraphStyle}>
        One of my favorite albums, The Tortured Poet’s Department (TTPD), inspired some beautifully neutral and wearable pieces this year. I opted for the TTPD V-neck cropped sweater in brown. The preppy white stripe is such a cute detail, and I can picture it tucked into jeans with a belt and boots or paired with a plaid skirt.
      </p>

      <h2 style={headingStyle}>Speaking of Crop Tees…</h2>
      <ResponsiveIframe title="Crop Tees" src="https://shopmy.us/collections/embed/997424?" style={iframeStyle} />
      <p style={paragraphStyle}>
        I chose the Self-Titled Stars That Shine baby T-shirt because I love the cream and pastel green combo, the butterfly design, and the retro sleeves. Its earthy, whimsical vibe suited me perfectly.
      </p>

      <h2 style={headingStyle}>The Bejeweled Ring</h2>
      <ResponsiveIframe title="Bejeweled Ring" src="https://shopmy.us/collections/embed/997443?" style={iframeStyle} />
      <p style={paragraphStyle}>
        I quickly added the Taylor Swift Bejeweled ring to my cart. At $35, it’s a reasonable price point, and I adore the multicolored stones as a subtle nod to all of her eras.
      </p>

      <h2 style={headingStyle}>Ornaments Galore!</h2>
      <ResponsiveIframe title="Ornaments" src="https://shopmy.us/collections/embed/997441?" style={iframeStyle} />
      <p style={paragraphStyle}>
        I’m obsessed with Taylor Swift ornaments and collect them every year. This year I decided on the Self-Titled Butterfly Guitar ornament to add to my collection.
      </p>

      <h2 style={headingStyle}>Folklore and Lover Picks</h2>
      <ResponsiveIframe title="Folklore T-Shirt" src="https://shopmy.us/collections/embed/997438?" style={iframeStyle} />
      <p style={paragraphStyle}>
        The Folklore Album Moment in Time oversized T-shirt stood out with its rhinestone detailing, a subtle nod to the era's elegance.
      </p>

      <h2 style={headingStyle}>Reputation and 1989 Favorites</h2>
      <ResponsiveIframe title="Reputation Hoodie" src="https://shopmy.us/collections/embed/997433?" style={iframeStyle} />
      <p style={paragraphStyle}>
        While I love the Reputation Magnet Crop Sweater, the 1989 Taylor’s Version “Is It Over Now” Zip-Up Hoodie caught my eye, but I decided on the TTPD sweater instead.
      </p>

      <h2 style={headingStyle}>Final Thoughts</h2>
      <p style={paragraphStyle}>
        So, that’s my roundup of standout pieces! Let me know if this guide helped you decide what to buy or if I missed any of your favorites. What did you end up ordering? Love to all my fellow Swifties, and I’ll see you in my next post!
      </p>

      <img src={signature} alt="Jackie Wyers Signature XoXo" style={{ width: '100%' }} />

      <Comments website-id={websiteId} page-id={"taylor-holiday-merch-2024"} />
    </div>
  );

  return (
    <div ref={blogRef}>
      <Card blogContent={blogContent} />
    </div>
  );
};

export default TaylorSwiftHoliday;
