import React from 'react';
import './ReviewArticleList.css';
import ReviewArticleCard from './ReviewArticleCard';
import TextReveal from '../Components/TextReveal';

const image1 = `${process.env.PUBLIC_URL}/Images/Articles/JickyReview/jickyguerlainthumbnail.png`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/BonBonReview/BonBonThumbnail.png`;
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

const ReviewArticleListHome = () => {
  return (
    <div>
      <div>
        <TextReveal text="REVIEWS" />
      </div>
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
    </div>
  );
};

export default ReviewArticleListHome;
