import React from 'react';
import './RotatingText.css';

const RotatingTextFeatured = () => {
  // Phrases array
  const phrases = [
    "FEATURED", "FEATURED","FEATURED", "FEATURED", "FEATURED", "FEATURED"
  ];

  // Use the `·` symbol with spaces around it as the separator
  const phraseString = phrases.join('   ·   '); // This adds the dot with a space on both sides between each phrase

  // Repeat the phrase string to ensure a continuous loop
  // You may adjust the spacing as needed, but here it's consistent with your separator choice
  const repeatedPhrases = Array(10).fill(phraseString).join(' · '); // Keeps the dot separator between repetitions for consistency

  return (
    <div className="rotating-text-container">
      <div className="rotating-text">{repeatedPhrases}</div>
    </div>
  );
};

export default RotatingTextFeatured;
