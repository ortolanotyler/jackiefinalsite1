import React from 'react';
import './ReviewArticleList.css';
import ReviewArticleCard from './ReviewArticleCard';
import DividerWithText from '../Home/DividerWithText';
import SmallAdSenseAd from '../Home/AdsenseSmall';

const image1 = `${process.env.PUBLIC_URL}/Images/Articles/JickyReview/jickyguerlainthumbnail.png`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/BonBonReview/bonbonthumb.jpeg`;
const image3 = `${process.env.PUBLIC_URL}/Images/Articles/HalfetiReview/HalfetiThumbnail.png`;

const articles = [
  {
    date: '01/15/2024',
    title: 'Jicky // Guerlain',
    image: image1,
    path: '/jickyreview',
  },
  {
    date: '02/01/2024',
    title: 'Bonbon // Viktor & Rolf',
    image: image2,
    path: '/bonbonreview',
  },
  {
    date: '03/01/2024',
    title: "Halfeti // Penhaligon's",
    image: image3,
    path: '/halfetireview',
  },

  // Add more articles as needed
];

const ReviewArticleList = () => {
  return (
    <>
    <div className="article-list-reviews">
      {articles.map((article, index) => (
        <ReviewArticleCard
          key={index}
          date={article.date}
          title={article.title}
          imageUrl={article.image}
          path={article.path}
        />
      ))}
    </div>
     <DividerWithText text = "Ad"/>
     <div className="ad-container">
<SmallAdSenseAd />
</div>
<DividerWithText text = "Ad"/>

    </>

  );
};

export default ReviewArticleList;
