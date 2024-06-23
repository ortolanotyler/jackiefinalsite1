import React, { useEffect, useRef } from 'react';

const LifestyleFavorites = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleIframeFocus = () => {
      document.body.style.overflow = 'auto';
    };

    const handleIframeBlur = () => {
      document.body.style.overflow = 'hidden';
    };

    const iframe = iframeRef.current;

    if (iframe) {
      iframe.addEventListener('focus', handleIframeFocus);
      iframe.addEventListener('blur', handleIframeBlur);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener('focus', handleIframeFocus);
        iframe.removeEventListener('blur', handleIframeBlur);
      }
    };
  }, []);

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
          overflow: 'hidden',
        }}
        scrolling="yes"
        className="lifestyle-favorites-iframe"
        ref={iframeRef}
      ></iframe>
    </div>
  );
};

export default LifestyleFavorites;
