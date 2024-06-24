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
    <div>
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <iframe
          title="Jackie's Weekly Favs"
          src="https://shopmy.us/collections/public/553108?noHeader=true"
          style={{
           
            width: '100%',
            minHeight: '450px',
            border: 'none',
            marginTop: '10px',
            overflow: 'hidden',
          }}
          className="review-favorites-iframe"
          sandbox="allow-same-origin allow-scripts"
          scrolling="no"
        ></iframe>
      </div>
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <iframe
          title="Jackie's Weekly Favs"
          src="https://shopmy.us/collections/public/619136?noHeader=true"
          style={{
           
            width: '100%',
            minHeight: '350px',
            border: 'none',
            overflow: 'hidden',
          }}
          className="review-favorites-iframe"
          sandbox="allow-same-origin allow-scripts"
          scrolling="no"
        ></iframe>
      </div>
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <iframe
          title="Jackie's Weekly Favs"
          src="https://shopmy.us/collections/public/619137?noHeader=true"
          style={{
            
            width: '100%',
            minHeight: '500px',
            border: 'none',
            overflow: 'hidden',
          }}
          className="review-favorites-iframe"
          sandbox="allow-same-origin allow-scripts"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
};

export default ReviewFavorites;
