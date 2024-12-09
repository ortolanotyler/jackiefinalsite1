import React from 'react';
import HeroSection from '../Home/HeroSection';
import TextBanner2 from '../Components/TextBanner2';
import HorizontalLine from '../Components/HorizontalLine';
import SmallAdSenseAd from '../Home/AdsenseSmall';
import DividerWithText from '../Home/DividerWithText';

const articles = [
  {
    date: '01/15/2024',
    title: 'Jicky // Guerlain',
    subtext: 'A deep dive into the iconic Jicky perfume by Guerlain.',
    imagePath: 'JickyReview/jickyguerlainthumbnail.png',
    path: '/jickyreview',
  },
  {
    date: '02/01/2024',
    title: 'Bonbon // Viktor & Rolf',
    subtext: 'An in-depth review of the deliciously sweet Bonbon perfume.',
    imagePath: 'BonBonReview/BonBonThumbnail.png',
    path: '/bonbonreview',
  },
  {
    date: '03/01/2024',
    title: "Halfeti // Penhaligon's",
    subtext: 'A luxurious journey through Halfeti by Penhaligon’s.',
    imagePath: 'HalfetiReview/HalfetiThumbnail.png',
    path: '/halfetireview',
  },
  // Add more articles as needed
];

const ReviewArticleListHome = () => {
  return (
    <>
    <div style = {{
      paddingTop: '50px',
    }} >

<TextBanner2 text = "REVIEWS" />
<HorizontalLine/>
    <div>
      {articles.map((article, index) => (
        <div key={index}>
          <HeroSection
            featureText="REVIEW"
            headlineText={article.title}
            subtext={article.subtext}
            author={article.date}
            imagePath={article.imagePath}
            linkUrl={article.path}
            isFlipped={index % 2 === 0} // Alternate the layout for visual variety
          />
            <DividerWithText text = "Ad"/>

<div className="ad-container">
<SmallAdSenseAd/>
</div>
<DividerWithText text = "Ad"/>
<DividerWithText text = "Ad"/>

<div className="ad-container">
<SmallAdSenseAd/>
</div>
<DividerWithText text = "Ad"/>
<DividerWithText text = "Ad"/>

<div className="ad-container">
<SmallAdSenseAd/>
</div>
<DividerWithText text = "Ad"/>

        </div>
      ))}
    </div>
    </div>
  
    </>
   
  );
};

export default ReviewArticleListHome;