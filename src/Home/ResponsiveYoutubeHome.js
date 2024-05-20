import React from 'react';

const ResponsiveYoutubeHome = ({ src, title }) => {
  console.log('ResponsiveYoutubeHome is rendering'); // Add this line
  console.log('Video Source:', src); // Add this line
  console.log('Video Title:', title); // Add this line
  
  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#000', marginTop: '1rem' }}>
      <iframe
        src={src}
        title={title}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ResponsiveYoutubeHome;
