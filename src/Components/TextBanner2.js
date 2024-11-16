import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from '@mui/material';

const TextBanner2 = ({ text = "SHOPPING", height = '50px', width = '100%', maxFontSize = '50px', minFontSize = '10px' }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [fontSize, setFontSize] = useState(maxFontSize);

  // Breakpoints for different screen sizes
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(min-width:601px) and (max-width:1200px)');
  const isDesktop = useMediaQuery('(min-width:1201px)');

  useEffect(() => {
    // Adjust font size based on the screen size using breakpoints
    let calculatedFontSize = parseFloat(maxFontSize);

    if (isMobile) {
      // Smaller font size for mobile screens
      calculatedFontSize = Math.max(window.innerWidth / 15, parseFloat(minFontSize));
    } else if (isTablet) {
      // Medium font size for tablet screens
      calculatedFontSize = Math.max(window.innerWidth / 12, parseFloat(minFontSize));
    } else if (isDesktop) {
      // Larger font size for desktop screens
      calculatedFontSize = maxFontSize;
    }

    setFontSize(`${calculatedFontSize}px`);
  }, [isMobile, isTablet, isDesktop, maxFontSize, minFontSize]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const styles = {
    container: {
      display: 'flex',
      margin: '2.5rem auto',
      padding: '0 auto',
      justifyContent: 'center',
      textAlign: 'center',
      fontFamily: 'Playfair Display, serif',
      height,
      width,
      fontWeight: '400',
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
      transform: 'scale(1.25)', // Enlarge letter on hover
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
            margin: '0 0.25rem', // Space between letters
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