import React, { useEffect, useState, useRef } from 'react';
import TextReveal from '../Components/TextReveal';

const ReviewFavorites = () => {
  const [isScrollable, setIsScrollable] = useState(false);
  const iframeRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setIsScrollable(window.innerWidth < 1000);
    };

    handleResize(); // Set the initial state
    window.addEventListener('resize', handleResize); // Update state on window resize

    const loadIframe = (iframe, src) => {
      if (iframe && !iframe.src) {
        iframe.src = src;
      }
    };

    // Lazy loading iframes using IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            loadIframe(iframeRefs.current[index], iframeRefs.current[index].dataset.src);
            observer.unobserve(entry.target); // Stop observing once the iframe has loaded
          }
        });
      },
      { rootMargin: '200px' } // Load the iframe when it's within 200px of the viewport
    );

    iframeRefs.current.forEach((iframe, index) => {
      observer.observe(iframe);
    });

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener on unmount
      observer.disconnect(); // Clean up the observer on unmount
    };
  }, []);

  return (
    <div>
      <TextReveal text="JACKIE'S WEEKLY TOP 3" />
      <div style={{ width: '100%' }}>
        <iframe
          title="Jackie's Weekly Favs"
          data-src="https://shopmy.us/collections/public/553108?noHeader=true"
          style={{
            width: '100%',
            minHeight: '60vh',
            border: 'none',
            marginTop: '20px',
          }}
          className="review-favorites-iframe"
          sandbox="allow-same-origin allow-scripts"
          scrolling="no"
          data-index="0"
          ref={(el) => (iframeRefs.current[0] = el)}
          loading="lazy"
        ></iframe>
      </div>
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <iframe
          title="Jackie's Weekly Favs"
          data-src="https://shopmy.us/collections/public/619136?noHeader=true"
          style={{
            width: '100%',
            minHeight: '60vh',
            border: 'none',
            overflow: 'hidden',
          }}
          className="review-favorites-iframe"
          sandbox="allow-same-origin allow-scripts"
          scrolling="no"
          data-index="1"
          ref={(el) => (iframeRefs.current[1] = el)}
          loading="lazy"
        ></iframe>
      </div>
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <iframe
          title="Jackie's Weekly Favs"
          data-src="https://shopmy.us/collections/public/619137?noHeader=true"
          style={{
            width: '100%',
            minHeight: '60vh',
            border: 'none',
            overflow: 'hidden',
          }}
          className="review-favorites-iframe"
          sandbox="allow-same-origin allow-scripts"
          scrolling="no"
          data-index="2"
          ref={(el) => (iframeRefs.current[2] = el)}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ReviewFavorites;
