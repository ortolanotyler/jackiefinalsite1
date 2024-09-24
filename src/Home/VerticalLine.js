// VerticalLine.js
import React from 'react';

const VerticalLine = ({ height = '50%', width = '2px', color = '#2b2d2b', margin = '0 20px' }) => {
  const lineStyle = {
    width: width,
    backgroundColor: color,
    height: height,
    margin: margin,
    opacity: 0.7,
    position: 'relative',
  };

  return <div style={lineStyle}></div>;
};

export default VerticalLine;