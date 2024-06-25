// TravelArticleCard.js

import React from 'react';
import './TravelArticleCard.css'; // Import CSS file for styling
import { Link } from 'react-router-dom'; // Import Link

const TravelArticleCard = ({ date, title, imageUrl, path }) => {
  return (
    <div className="article-card">
      <img src={imageUrl} alt={title} className="article-image-review" />
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

export default TravelArticleCard;
