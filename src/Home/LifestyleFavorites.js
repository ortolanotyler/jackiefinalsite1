import React from 'react';

const LifestyleFavorites = () => {
  return (
    <div style={{ width: '100%', minHeight: '1200px', marginBottom: '2rem' }}>
      <iframe
        title="Jackie's Weekly Favs"
        src="https://shopmy.us/collections/public/555260?noHeader=true"
        style={{
          marginTop: '7rem',
          width: '100%',
          minHeight: '1000px',
          border: 'none',
          overflow: 'hidden', // Additional style to prevent scrolling
        }}
        scrolling="no"
        className="lifestyle-favorites-iframe"
      ></iframe>
    </div>
  );
};

export default LifestyleFavorites;
