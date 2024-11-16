import React from 'react';

const SimpleIframe = ({ src, title }) => {
  return (
    <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0 }}>
      <iframe
        src={src}
        title={title}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
        }}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

export default SimpleIframe;