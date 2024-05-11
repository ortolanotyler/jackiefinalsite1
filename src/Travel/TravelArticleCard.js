// ReviewArticleCard.js

import React from 'react';
import './TravelArticleCard.css'; // Import CSS file for styling
import { Link } from 'react-router-dom'; // Import Link

const TravelArticleCard = ({ date, title, imageUrl, path }) => {
    return (
      <div className="article-card">
        <img src={imageUrl} alt={title} className="article-image-review" />
        <div className="article-content">
          <div className="article-date" style={{  marginTop: '1rem',fontSize: '16px' }}>{date}</div>
          <div className="article-title" style={{  marginTop: '1rem',fontSize: '20px' }}>{title}</div>
          <Link to={path} className="read-more-link">
            <button className="read-more" style={{ marginTop: '1rem',fontSize: '14px' }}>Read Here</button>
          </Link>
        </div>
      </div>
    );
  };
  

export default TravelArticleCard;
