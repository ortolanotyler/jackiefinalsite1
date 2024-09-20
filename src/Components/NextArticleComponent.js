import React from 'react';

const NextArticle = ({
  link,
  imgSrc,
  altText,
  linkText,
  containerStyle = {},
  linkStyle = {},
  imgStyle = {},
}) => {
  return (
    <div style={{ textAlign: 'center', margin: '0 auto', ...containerStyle }}>
      <a href={link} style={{ fontFamily: 'Arapey', fontSize: '1.25rem', color: 'black', textDecoration: 'underline', textAlign: 'center', ...linkStyle }}>
        <img src={imgSrc} alt={altText} style={{ width: '100%', maxWidth: '400px', margin: '0 auto', display: 'block', borderRadius: '0px', ...imgStyle }} />
        {linkText}
      </a>
    </div>
  );
};

export default NextArticle;