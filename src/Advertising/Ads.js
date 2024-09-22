// AdSenseAd.js
import React, { useEffect, useRef } from 'react';

const AdSenseAd = () => {
  const adRef = useRef(null);

  useEffect(() => {
    // Create and append the AdSense script only if it's not already present
    if (!window.adsbygoogle) {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      script.async = true;
      script.setAttribute('data-ad-client', 'ca-pub-4660168246825318');
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    } else {
      // Reinitialize ads if the script is already loaded
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    }
  }, []);

  useEffect(() => {
    if (adRef.current) {
      // Push the ad when the component mounts
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('Error loading AdSense ads:', e);
      }
    }
  }, [adRef]);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-4660168246825318"
      data-ad-slot="5588187496"
      data-ad-format="auto"
      data-full-width-responsive="true"
      ref={adRef}
    ></ins>
  );
};

export default AdSenseAd;