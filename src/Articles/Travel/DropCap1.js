import React from 'react';

const DropCap1 = ({ text, style }) => {
  return (
    <p style={style}>
      <span style={{ 
        fontSize: '4em', 
        float: 'left', 
        margin: '1rem',  // Set margin to 1rem for all sides
        lineHeight: '1.5rem', // Match lineHeight with paragraphStyle
        color: '#745B4F' // Explicitly set the color to #745B4F
      }}>
        {text.charAt(0)}
      </span>
      {text.slice(1)}
    </p>
  );
};

export default DropCap1;
