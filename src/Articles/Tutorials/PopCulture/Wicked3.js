import React, { useRef, useEffect } from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveIframeNew from '../../../Components/ResponsiveIframeNew';
import { Helmet } from 'react-helmet-async';
import DropCap1 from '../../Travel/DropCap1';
import ArticleTitle from '../../../Components/ArticleTitle';
import NextArticle from '../../../Components/NextArticleComponent';
import SocialShare from '../../../Home/SocialShare';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import SimpleIframe from '../../../Home/SimpleIframe';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';

const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
  <div
    style={{
      margin: '0 auto',
      maxWidth: '95%',
      padding: '0',
    }}
  >
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);

const RemBeautyWickedReview = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);

  const headingStyle = {
    textAlign: 'center',
    fontSize: '2rem',
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
    lineHeight: '1.75',
  };

  const linkStyle = {
    textDecoration: 'none',
    fontFamily: "Georgia, serif",
    fontWeight: '100',
    color: '#745B4F',
  };

  const iframeStyle = {
    width: '100%',
    minHeight: '340px',
    border: 'none',
  };

  return (
    <div ref={blogRef}>
      <Card
        blogContent={
          <div className="container">
            <Helmet>
              <title>r.e.m. Beauty x WICKED Collection Review</title>
              <link
                rel="canonical"
                href="https://www.jackiewyers.beauty/rem-beauty-wicked"
              />
              <meta
                name="description"
                content="Dive into the magical r.e.m. Beauty x WICKED collection. Get Glinda’s makeup look with top products reviewed for your WICKED holiday wish list!"
              />
              <meta
                name="keywords"
                content="r.e.m. Beauty, WICKED collection, Glinda makeup tutorial, Ariana Grande makeup, beauty reviews, holiday beauty 2024, Glinda inspired makeup, Jackie Wyers beauty reviews, WICKED movie makeup, r.e.m. Beauty x WICKED review, top holiday beauty picks"
              />
            </Helmet>
  
            <ArticleTitle
              mainTitle="r.e.m. Beauty x WICKED Collection Review"
              subTitle="Glinda Makeup Magic Inspired by Ariana Grande"
              author="Jackie Wyers"
              publishDate="December 6th, 2024"
            />
  
            <SocialShare
              url="https://www.jackiewyers.beauty/rem-beauty-wicked"
              title="r.e.m. Beauty x WICKED Collection Review"
              imageUrl="https://www.jackiewyers.beauty/Images/Wicked/WickedThumbnail.jpg"
            />
  
            <div style={{ textAlign: "center", margin: "20px auto" }}>
              <iframe
                title="WICKED Makeup Tutorial"
                src="https://youtu.be/u4f_nP1e-oU"
                style={{ width: "100%", minHeight: "340px", border: "none" }}
              ></iframe>
            </div>
  
            <DropCap1
              text="Hey, everyone! If you’re as WICKED movie-obsessed as I am, then you’re in the right place. After seeing the film on the big screen, I couldn’t resist recreating Glinda’s makeup look inspired by Ariana Grande’s portrayal. Today, I’ll be diving into the r.e.m. beauty x WICKED collection to show you how to achieve Glinda’s stunning aesthetic."
            />
  
            <p style={paragraphStyle}>
              I’ve previously covered Glinda’s Ozdust Ball look and even shared an
              Elphaba-inspired tutorial. This time, I’ll review each product in
              the r.e.m. collection and let you know what’s worth the splurge—and
              what to “Toss, toss!” Ready to fuel your WICKED holiday wish list?
              Let’s get started.
            </p>
  
            <h2 style={headingStyle}>✨ First Impressions:</h2>
            <p style={paragraphStyle}>
              The r.e.m. beauty x WICKED collection is undeniably dreamy, with
              packaging that perfectly captures Glinda’s bubbly and radiant
              aesthetic. But do the products live up to the hype? Here’s how they
              performed for me:
            </p>
  
            <h2 style={headingStyle}>1. Galinda Glow Drops 🌟</h2>
            <ResponsiveIframe
              title="Galinda Glow Drops"
              src="https://shopmy.us/collections/embed/1077165?"
            />
            <p style={paragraphStyle}>
              Verdict: Highly recommend! These glow drops are moisturizing, smell
              incredible, and leave a radiant finish. Use them under foundation,
              on your chest, or as a highlighter for doll-like skin.
            </p>
  
            <h2 style={headingStyle}>2. Galinda Makeup Set 💄</h2>
            <ResponsiveIframe
              title="Galinda Makeup Set"
              src="https://shopmy.us/collections/embed/1077167?"
            />
            <p style={paragraphStyle}>
              The set includes a wearable pink lipstick, bright pink blush, and a
              light blue eyeliner. While the lipstick and blush were amazing, the
              eyeliner didn’t impress due to its fragile texture.
            </p>
  
            <h2 style={headingStyle}>3. Ozdust Eyeshadow Palette 🌈</h2>
            <ResponsiveIframe
              title="Ozdust Eyeshadow Palette"
              src="https://shopmy.us/collections/embed/1077170?"
            />
            <p style={paragraphStyle}>
              Beautiful but not as impactful as I’d hoped. For higher performance,
              I recommend the ONE/SIZE Wicked on Broadway palette for bolder
              shimmers.
            </p>
  
            <h2 style={headingStyle}>4. PH Adaptive Lip Oil 💋</h2>
            <ResponsiveIframe
              title="PH Adaptive Lip Oil"
              src="https://shopmy.us/collections/embed/1077172?"
            />
            <p style={paragraphStyle}>
              This lip oil adjusts to your pH for a vibrant pink tint. It leaned
              warmer than expected but works well with a lip liner for a polished
              look.
            </p>
  
            <h2 style={headingStyle}>What’s Worth It?</h2>
            <p style={paragraphStyle}>
              Top Pick: Galinda Glow Drops. Best for Collectors: Galinda Set.
              Swap Option: Replace the r.e.m. palette with ONE/SIZE Wicked on
              Broadway palette.
            </p>
  
            <h2 style={headingStyle}>🛍 Non-Makeup Picks:</h2>
            <p style={paragraphStyle}>
              The Bubble Sweater and WICKED Tote Bag are absolutely adorable for
              any fan! For brushes, IT Cosmetics IT Brushes for ULTA are a
              must-have in any makeup kit.
            </p>
  
            <h2 style={headingStyle}>🎥 WICKED Movie Review:</h2>
            <p style={paragraphStyle}>
              The WICKED movie was a visual and emotional masterpiece, bringing
              larger-than-life characters closer through expressive moments. I
              loved Glinda’s growth and the dynamic with Elphaba.
            </p>
  
            <h2 style={headingStyle}>Let’s Chat!</h2>
            <p style={paragraphStyle}>
              I’d love to hear your thoughts: Which r.e.m. products caught your
              eye? Leave a comment below—I can’t wait to read your opinions!
            </p>
  
            <SubscribeButton />
            <NextArticle
              link="/rem-beauty-holiday"
              imgSrc={`${process.env.PUBLIC_URL}/Images/Articles/WickedNextThumb.jpg`}
              linkText="More Holiday Picks →"
            />
            <img
              src={`${process.env.PUBLIC_URL}/Images/Articles/Signature.png`}
              alt="Jackie Wyers Signature"
              style={{ width: "100%" }}
            />
            <Comments website-id={websiteId} page-id="rem-wicked-review" />
          </div>
        }
      />
    </div>
  );
}

export default RemBeautyWickedReview;