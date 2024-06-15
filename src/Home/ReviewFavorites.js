import React, { useEffect, useState } from 'react';

const ReviewFavorites = () => {
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsScrollable(window.innerWidth < 1000);
    };

    handleResize(); // Set the initial state
    window.addEventListener('resize', handleResize); // Update state on window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener on unmount
    };
  }, []);

  return (
    <div style={{ width: '100%', minHeight: '1200px', marginBottom: '2rem', overflow: isScrollable ? 'auto' : 'hidden' }}>
      <iframe
        title="Jackie's Weekly Favs"
        src="https://shopmy.us/collections/public/553108?noHeader=true"
        style={{
          marginTop: '7rem',
          width: '100%',
          minHeight: '80vh',
          border: 'none',
        }}
        className="review-favorites-iframe"
        sandbox="allow-same-origin allow-scripts"
      ></iframe>
    </div>
  );
};

export default ReviewFavorites;
