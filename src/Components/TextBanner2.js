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
      backgroundColor: '#fff', // Set the background color to white
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
            fontSize,
            margin: '1rem 0', // Space between the letters
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