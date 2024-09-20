import React from 'react';

const InstagramEmbed = ({ src, title, width = '500', height = '900' }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem 2rem' }}>
      <iframe
        src={src}
        width={width}
        height={height}
        frameBorder="0"
        scrolling="no"
        allowtransparency="true"
        allow="encrypted-media"
        style={{ border: 'none', overflow: 'hidden' }}
        title={title}
      ></iframe>
    </div>
  );
};

export default InstagramEmbed;