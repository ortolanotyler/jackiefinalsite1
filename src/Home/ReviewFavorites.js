import React from 'react';

const ReviewFavorites = () => {
  return (
    <div style={{ width: '100%', minHeight: '1200px', marginBottom: '2rem' }}>
      <iframe
        title="Jackie's Weekly Favs"
        src="https://shopmy.us/collections/public/553108?noHeader=true"
        style={{
          marginTop: '7rem',
          width: '100%',
          minHeight: '1000px',
          border: 'none',
        }}
        className="review-favorites-iframe"
      ></iframe>
      <style jsx>{`
        @media (max-width: 1200px) {
          .review-favorites-iframe {
            overflow: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default ReviewFavorites;
