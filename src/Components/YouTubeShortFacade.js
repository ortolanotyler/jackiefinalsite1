// YoutubeFacade.js
import React, { useState } from 'react';

const YoutubeShortFacade = ({ videoId, title }) => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        paddingBottom: '56.25%',
        height: 0,
        overflow: 'hidden',
        maxWidth: '100%',
        background: '#000',
      }}
    >
      {!isIframeLoaded ? (
        <div
          onClick={() => setIsIframeLoaded(true)}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            cursor: 'pointer',
            backgroundImage: `url(https://img.youtube.com/vi/${videoId}/hqdefault.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '60px',
              height: '60px',
              background: 'rgba(0, 0, 0, 0.7)',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <svg viewBox="0 0 68 48" width="68" height="48">
              <path
                d="M66.52,7.3a8.27,8.27,0,0,0-5.81-5.83C55.72,1,34,1,34,1S12.28,1,7.29,1.47A8.27,8.27,0,0,0,1.48,7.3,86.13,86.13,0,0,0,1,24.05a86.13,86.13,0,0,0,.48,16.75,8.27,8.27,0,0,0,5.81,5.83C12.28,47,34,47,34,47s21.72,0,26.71-.47a8.27,8.27,0,0,0,5.81-5.83,86.13,86.13,0,0,0,.48-16.75A86.13,86.13,0,0,0,66.52,7.3ZM26.72,34.23V13.77L45,24Z"
                fill="#fff"
              />
            </svg>
          </div>
        </div>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default YoutubeShortFacade;