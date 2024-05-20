import React from 'react';
import './ReviewArticleCard.css'; // Import CSS file for styling
import { Link } from 'react-router-dom'; // Import Link

const ReviewArticleCard = ({ date, title, imageUrl, path }) => {
  return (
    <div className="article-card-review">
      <div className="article-image-wrapper-review">
        <img src={imageUrl} alt={title} className="article-image-review" />
      </div>
      <div className="article-content">
        <div className="article-date">{date}</div>
        <div className="article-title">{title}</div>
        <Link to={path} className="read-more-link">
          <button className="read-more">Read Here</button>
        </Link>
      </div>
    </div>
  );
};

export default ReviewArticleCard;
