import React, { useState } from 'react';

const ResponsiveYoutube = ({ src, title }) => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  const handleLoadIframe = () => {
    setIsIframeLoaded(true);
  };

  return (
    <div
      style={{
        position: 'relative',
        paddingBottom: '56.25%', // 16:9 aspect ratio
        height: 0,
        overflow: 'hidden',
        maxWidth: '100%',
        background: '#000',
        cursor: 'pointer',
      }}
      onClick={handleLoadIframe}
    >
      {!isIframeLoaded ? (
        // Placeholder with play button to improve initial load time
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            background: '#000',
          }}
        >
          {/* Play button overlay */}
          <button
            style={{
              border: 'none',
              background: 'transparent',
              color: 'white',
              fontSize: '48px',
              lineHeight: '1',
              cursor: 'pointer',
              outline: 'none',
              zIndex: 2,
            }}
          >
            ▶
          </button>
        </div>
      ) : (
        // Actual YouTube iframe loads only after clicking
        <iframe
          src={src}
          title={title}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default ResponsiveYoutube;