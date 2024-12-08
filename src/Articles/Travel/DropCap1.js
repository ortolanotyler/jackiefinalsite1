import React from 'react';

const DropCap1 = ({ text, style }) => {
  const getFirstLetter = (content) => {
    if (typeof content === 'string') {
      return content.charAt(0);
    } else if (React.isValidElement(content)) {
      const firstChild = content.props.children[0];
      return typeof firstChild === 'string' ? firstChild.charAt(0) : null;
    }
    return null;
  };

  const getRemainingText = (content) => {
    if (typeof content === 'string') {
      return content.slice(1);
    } else if (React.isValidElement(content)) {
      const firstChild = content.props.children[0];
      const restOfContent =
        typeof firstChild === 'string' ? firstChild.slice(1) : firstChild;
      return (
        <>
          {restOfContent}
          {content.props.children.slice(1)}
        </>
      );
    }
    return content;
  };

  return (
    <p style={{ fontFamily: 'Playfair Display, serif', maxWidth: '100%', margin: '10px' }}>
      <span
        style={{
          fontSize: '100px',
          float: 'left',
          margin: '0.1em',
          marginRight: '10px',
          lineHeight: '1',
          color: '#000000',
        }}
      >
        {getFirstLetter(text)}
      </span>
      <span
        style={{
          fontSize: '20px',


          margin: '1rem',
          fontWeight: '100',
          fontFamily: 'EB Garamond, serif',
       
        }}
      >
        {getRemainingText(text)}
      </span>
    </p>
  );
};

export default DropCap1;