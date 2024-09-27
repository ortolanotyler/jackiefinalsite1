import React, { useState } from 'react';

// Function to extract the YouTube video ID from the URL
const getYoutubeVideoId = (url) => {
  const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/i;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const ResponsiveYoutube = ({ src, title }) => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const videoId = getYoutubeVideoId(src);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`; // High-resolution thumbnail

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
        // Thumbnail with play button overlay
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
            backgroundImage: `url(${thumbnailUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Play button overlay */}
          <button
            style={{
              border: 'none',
              background: 'rgba(0, 0, 0, 0.6)',
              color: 'white',
              fontSize: '48px',
              lineHeight: '1',
              cursor: 'pointer',
              outline: 'none',
              zIndex: 2,
              borderRadius: '50%',
              width: '80px',
              height: '80px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            aria-label="Play Video"
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