import React from 'react';
import './QuoteBanner2.css'; // Importing the CSS file for the quote banner
import PageLines from '../Components/PageBreakUpLines';





const QuoteBanner = () => {
  return (
    <div sx = {{ margin: '1rem', padding: '1.25rem' }}
    className="quote-banner">
      <blockquote>
      “Master the art of beauty and transformation! Celebrate pop culture, embrace trends and switch
up your style with confidence”      </blockquote>
      <cite>— Jackie Wyers</cite>
    </div>
  );
};

export default QuoteBanner;
