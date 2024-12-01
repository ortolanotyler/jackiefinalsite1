import React, { useEffect } from 'react';

const AdSenseAd = () => {
  useEffect(() => {
    // Ensure adsbygoogle is initialized after rendering
    if (window.adsbygoogle && document.querySelectorAll('.adsbygoogle').length > 0) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);

  return (
    <div style={{ textAlign: 'center', margin: '1rem auto' }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-4660168246825318"
        data-ad-slot="8192987306"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdSenseAd;