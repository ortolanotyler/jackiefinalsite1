import React from 'react';

const DropCap1 = ({ text, style }) => {
  return (
    <p style={{fontFamily: 'Playfair Display, serif', maxWidth: '100%', margin: '1rem'}}>
      <span style={{ 
        fontSize: '5em', 
        float: 'left', 
        margin: '1rem',  
        lineHeight: '1.2', 
        color: '#000000'
      }}>
        {text.charAt(0)}
      </span>
      <span style={{  padding: '10px',fontSize: '21px',
  margin: '10px auto', lineHeight: '1.5',fontWeight: '100', fontFamily: "'Open Sans', serif", margin: '1rem' ,  maxWidth: '100%' }}>
        {text.slice(1)}
      </span>
    </p>
  );
};

export default DropCap1;


