import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TextBanner2 = ({ 
  text = "SHOPPING", 
  height = '100px', 
  width = '100%', 
  maxFontSize = '30px', 

}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height,
      width,
      backgroundColor: '#ffffff', // Light background color for contrast
      borderRadius: '8px', // Subtle rounded corners
      padding: '1rem',
      overflow: 'hidden', // Prevent overflow
    },
    letter: {
      fontFamily: 'Playfair Display, serif',
      fontSize: '2.5rem',
      fontWeight: '400',
      color: '#333', // Slightly darker text color for readability
      margin: '0 5px', // Space between letters
      transition: 'transform 0.3s ease, color 0.3s ease', // Smooth hover effect
    },
    hoveredLetter: {
      transform: 'scale(1.2)', // Enlarge letter on hover
      color: '#745B4F', // Add an accent color on hover
    },
  };

  return (
    <div style={styles.container}>
      {text.split('').map((letter, index) => (
        <span
          key={index}
          style={{
            ...styles.letter,
            ...(hoveredIndex === index ? styles.hoveredLetter : {}),
          }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

// Define default props and prop types
TextBanner2.propTypes = {
  text: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  maxFontSize: PropTypes.string,
  minFontSize: PropTypes.string,
};

export default TextBanner2;