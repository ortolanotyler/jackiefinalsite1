import React from 'react';
import './BridalDropCap.css'; // Import your CSS file for styling

const BridalDropCap = ({ text }) => {
  return (
    <p className="dropcap1">
      <span className="dropcap-letter1">{text.charAt(0)}</span>
      {text.slice(1)}
    </p>
  );
};

export default BridalDropCap;
