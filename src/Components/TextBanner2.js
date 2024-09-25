import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TextBanner2 = ({ text = "SHOPPING", height = '200px', width = '100%', maxFontSize = '50px', minFontSize = '20px' }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [fontSize, setFontSize] = useState(maxFontSize);

  // Dynamically calculate the font size based on the window width
  const updateFontSize = () => {
    const screenWidth = window.innerWidth;
    let calculatedFontSize = parseFloat(maxFontSize);

    if (screenWidth < 1200) {
      calculatedFontSize = Math.max(screenWidth / 10, parseFloat(minFontSize)); // Adjust the formula as needed
    }
    setFontSize(`${calculatedFontSize}px`);
  };

  useEffect(() => {
    // Calculate font size when the component mounts
    updateFontSize();

    // Update font size on window resize
    window.addEventListener('resize', updateFontSize);

    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener('resize', updateFontSize);
    };
  }, []);

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
      fontFamily: 'Playfair Display, serif',
      height,
      width,
      fontWeight: '100',
      color: '#000000',
      backgroundColor: 'white',
      flexWrap: 'wrap', // Allows letters to wrap on smaller screens
      overflow: 'hidden', // Prevents content from overflowing
      textAlign: 'center', // Centers the content for smaller screens
    },
    letter: {
      transition: 'transform 0.3s ease', // Smooth transition for enlargement
    },
    hoveredLetter: {
      transform: 'scale(1.2)', // Enlarge letter on hover
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
            fontSize, // Apply dynamic font size
            margin: '0 0.5rem', // Space between letters
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

// Defining default props and prop types
TextBanner2.propTypes = {
  text: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  maxFontSize: PropTypes.string, // Maximum font size
  minFontSize: PropTypes.string, // Minimum font size for smaller screens
};

export default TextBanner2;