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
  fontSize: '5rem', // Size the drop cap large but proportional
  lineHeight: '0.9', // Tighter line height to align with the top
  float: 'left', // Allows text to wrap around
  margin: '1rem 0 0 0', // Adjust margins to control spacing
  fontFamily: 'GFS Didot, sans-serif',
  color: '#745B4F', // Accent color for the drop cap
  fontWeight: '400',
};

const paragraphStyle = {
  fontSize: '22px',
  color: '#000000',
  margin: '0 auto',
  fontFamily: 'Gowun Batang, serif',
  fontWeight: 'normal', // Optional: for a cleaner look
  maxWidth: '525px',
  lineHeight: '1.6',
  margin:'1rem auto',
  textAlign: 'left', // Optional: for a cleaner look
};

export default DropCap1;