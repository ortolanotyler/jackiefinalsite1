import React from 'react';
import './ReviewArticleList.css';
import ReviewArticleCard from './ReviewArticleCard';


const image4 = `${process.env.PUBLIC_URL}/Images/Articles/ULIKEREVIEW/ULIKETHUMB.png`;

const articles = [

  {
    date: '04/01/2024',
    title: "Painless Hair Removal // ULIKE",
    image: image4,
    path: '/ulikereview',
  },
  // Add more articles as needed
];

const ProductReviewArticleList = () => {
  return (
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
  );
};

export default ProductReviewArticleList;
