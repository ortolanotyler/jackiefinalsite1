import React from 'react';

const DropCap1 = ({ text }) => {
  return (
    <p style={paragraphStyle}>
      <span style={dropCapStyle}>{text.charAt(0)}</span>
      {text.slice(1)}
    </p>
  );
};

const dropCapStyle = {
  fontSize: '5rem', // Adjusted for a more balanced look
  lineHeight: '0.8', // Aligns with the top of the paragraph
  float: 'left',
  marginRight: '0.5rem', // Adds spacing between drop cap and text
  fontFamily: 'GFS Didot, serif',
  color: '#745B4F',
  fontWeight: 'bold',
};

const paragraphStyle = {
  fontSize: '22px',
  color: '#000000',
margin: '1rem auto',
  fontFamily: 'GFS Didot, serif',

  maxWidth: '525px', // Consistent with the other paragraphs
  lineHeight: '1.6',
  marginLeft: 'auto',
  marginRight: 'auto',
};

export default DropCap1;