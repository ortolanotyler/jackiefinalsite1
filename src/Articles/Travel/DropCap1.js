import React from 'react';

const DropCap1 = ({ text, style }) => {
  return (
    <p style={{fontFamily: 'Playfair Display, serif', maxWidth: '500px', margin: '0 auto'}}>
      <span style={{ 
        fontSize: '5em', 
        float: 'left', 
        margin: '1rem',  
        lineHeight: '1.2', 
        color: '#000000'
      }}>
        {text.charAt(0)}
      </span>
      <span style={{ lineHeight: '1.6', fontFamily: 'Playfair Display, serif', padding: '10px 20px',margin: '0 auto' }}>
        {text.slice(1)}
      </span>
    </p>
  );
};

export default DropCap1;