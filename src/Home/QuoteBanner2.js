import React from 'react';
import './QuoteBanner2.css'; // Importing the CSS file for the quote banner
import PageLines from '../PageBreakUpLines';





const QuoteBanner = () => {
  return (
    <div sx = {{ margin: '10px' }}
    className="quote-banner">
      <PageLines/>
      <blockquote>
      “Master the art of beauty and transformation! Celebrate pop culture, embrace trends and switch
up your style with confidence”      </blockquote>
      <cite>— Jackie Wyers</cite>
      <PageLines/>
    </div>
  );
};

export default QuoteBanner;
