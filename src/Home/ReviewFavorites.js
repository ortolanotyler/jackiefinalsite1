import React, { useEffect, useState } from 'react';

const ReviewFavorites = () => {
  const [isScrollable, setIsScrollable] = useState(false);
  const [iframeInteraction, setIframeInteraction] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setIsScrollable(true);
      } else {
        setIsScrollable(false);
      }
    };

    handleResize(); // Set the initial state
    window.addEventListener('resize', handleResize); // Update state on window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener on unmount
    };
  }, []);

  const handleIframePointerEnter = () => {
    setIframeInteraction(true);
  };

  const handleIframePointerLeave = () => {
    setIframeInteraction(false);
  };

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
          overflow: isScrollable ? 'auto' : 'hidden',
          pointerEvents: iframeInteraction ? 'auto' : 'none', // Disable interaction unless user is actively interacting
        }}
        className="review-favorites-iframe"
        onPointerEnter={handleIframePointerEnter}
        onPointerLeave={handleIframePointerLeave}
      ></iframe>
    </div>
  );
};

export default ReviewFavorites;
