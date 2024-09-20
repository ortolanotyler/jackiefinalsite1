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
  fontSize: '22px', // Match paragraph font size
  fontWeight: 'bold', // Slight boldness to emphasize
  float: 'left',
  marginRight: '0.3rem', // Adjust space between drop cap and text
  fontFamily: 'GFS Didot, serif', // Ensure the font matches
  color: '#745B4F',
};

const paragraphStyle = {
  fontSize: '22px',
  color: '#000000',
  margin: '1rem auto',
  fontFamily: 'GFS Didot, serif',
  maxWidth: '525px',
  lineHeight: '1.6',
  marginLeft: 'auto',
  marginRight: 'auto',
};

export default DropCap1;