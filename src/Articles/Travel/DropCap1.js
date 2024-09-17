import React from 'react';

const DropCap1 = ({ text, style }) => {
  return (
    <p style={style}>
      <span style={{ 
        fontSize: '5rem', 
        fontFamily: 'GFS Didot, sans-serif',
        float: 'left', 
        margin: '1rem',
        paddingRight: '1rem',  
        lineHeight: '1.5rem', 
        color: '#745B4F'
      }}>
        {text.charAt(0)}
      </span>
      <span style={{ lineHeight: '1.25rem',  fontSize: '22px', }}>
        {text.slice(1)}
      </span>
    </p>
  );
};

export default DropCap1;
