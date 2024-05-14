import React from 'react';
import './QuoteBanner2.css'; // Importing the CSS file for the quote banner
import PageLines from '../Components/PageBreakUpLines';





const QuoteBanner3 = () => {
  return (
    <div 
    className="quote-banner">
      <PageLines/>
      <blockquote>
      "Switch up your style with confidence”      </blockquote>
      <cite>— Jackie Wyers</cite>
      <PageLines/>
    </div>
  );
};

export default QuoteBanner3;
