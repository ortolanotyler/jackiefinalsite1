import React from 'react';

const DropCap1 = ({ text, style }) => {
  return (
    <p style={{fontFamily: 'Georgia, serif', maxWidth: '100%'}}>
      <span style={{ 
        fontSize: '100px', 
        float: 'left', 
        margin: '0.75rem',  
        lineHeight: '.75', 
        color: '#000000'
      }}>
        {text.charAt(0)}
      </span>
      <span style={{  fontSize: '20px',
  margin: '10px auto', fontWeight: '100', fontFamily: 'EB Garamond, serif', maxWidth: '100%' }}>
        {text.slice(1)}
      </span>
    </p>
  );
};

export default DropCap1;


