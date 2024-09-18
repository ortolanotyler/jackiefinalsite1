import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TextBanner2 = ({ text = "SHOPPING", height = '200px', width = '100%', fontSize = '50px' }) => {
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
      fontWeight: '100',
      backgroundColor: '#fff',
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

  const dynamicFontSize = {
    fontSize,
    '@media (max-width: 768px)': {
      fontSize: '30px', // Reduce font size for medium screens
    },
    '@media (max-width: 480px)': {
      fontSize: '24px', // Further reduce font size for smaller screens
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
            ...dynamicFontSize, // Apply responsive font size
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
  fontSize: PropTypes.string,
};

export default TextBanner2;