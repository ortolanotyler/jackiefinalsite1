import React from 'react';
import './DropCap.css'; // Import your CSS file for styling

const DropCap = ({ text }) => {
  return (
    <p className="dropcap">
      <span className="dropcap-letter">{text.charAt(0)}</span>
      {text.slice(1)}
    </p>
  );
};

export default DropCap;
