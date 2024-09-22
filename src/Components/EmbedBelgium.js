import React, { useState } from 'react';

const EmbeddedGuideBelgium = () => {
  const [isInteractable, setIsInteractable] = useState(false);

  const handleInteractClick = () => {
    setIsInteractable(true);
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      {!isInteractable && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
            color: 'white',
            fontFamily: 'Arial, sans-serif',
            fontSize: '1.5rem',
            textAlign: 'center',
            padding: '20px',
            boxSizing: 'border-box',
            cursor: 'pointer',
          }}
          onClick={handleInteractClick}
        >
          Click to Interact
        </div>
      )}
      <iframe
        src="https://plannin.com/en/guide/2b026271-4dbd-4efc-89a6-b6174bce332c"
        title="Belgium and France Travel Guide"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          pointerEvents: isInteractable ? 'auto' : 'none',
        }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default EmbeddedGuideBelgium;
