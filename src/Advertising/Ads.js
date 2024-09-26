import React, { useEffect, useRef } from 'react';
import HorizontalLine from '../Components/HorizontalLine';

const AdSenseAd = () => {
  const adRef = useRef(null);
  const adInitialized = useRef(false);

  useEffect(() => {
    const loadAd = () => {
      if (window.adsbygoogle && adRef.current && !adInitialized.current) {
        try {
          // Initialize the ad
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          adInitialized.current = true;
        } catch (e) {
          console.error('AdSense error:', e);
        }
      }
    };

    // Dynamically load the AdSense script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4660168246825318';
    script.crossOrigin = 'anonymous';
    script.onload = loadAd;
    document.body.appendChild(script);

    // Cleanup the script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div ref={adRef}>
            <HorizontalLine/>

      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          textAlign: 'center',
          minWidth: '250px', // Ensure minimum width for fluid ads
          height: 'auto', // Adjust height if needed
        }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-4660168246825318"
        data-ad-slot="8783611952"
      ></ins>
            <HorizontalLine/>

    </div>
  );
};

export default AdSenseAd;