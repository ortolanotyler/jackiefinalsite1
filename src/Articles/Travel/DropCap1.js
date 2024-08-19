import React from 'react';

const DropCap1 = ({ text, style }) => {
  return (
    <p style={style}>
      <span style={{ 
        fontSize: '4em', 
        float: 'left', 
        margin: '1rem',  
        lineHeight: '1.5rem', 
        color: '#745B4F'
      }}>
        {text.charAt(0)}
      </span>
      <span style={{ lineHeight: '1.5' }}>
        {text.slice(1)}
      </span>
    </p>
  );
};

export default DropCap1;
