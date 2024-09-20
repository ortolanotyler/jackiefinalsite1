import React, { useEffect, useRef } from 'react';

const AdSenseAd = () => {
  const adRef = useRef(null);
  const adInitialized = useRef(false);

  useEffect(() => {
    const loadAd = () => {
      if (window.adsbygoogle && adRef.current && !adInitialized.current) {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          adInitialized.current = true;
        } catch (e) {
          console.error('AdSense error: ', e);
        }
      }
    };

    // Load AdSense script dynamically
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4660168246825318';
    script.crossOrigin = 'anonymous';
    script.onload = loadAd;
    document.body.appendChild(script);

    // Cleanup function to remove the script
    return () => {
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div ref={adRef}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-4660168246825318"
        data-ad-slot="8783611952"
      ></ins>
    </div>
  );
};

export default AdSenseAd;
