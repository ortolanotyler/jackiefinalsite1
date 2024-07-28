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

    if (!window.adsbygoogle) {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4660168246825318';
      script.crossOrigin = 'anonymous';
      script.onload = loadAd;
      document.body.appendChild(script);
    } else {
      loadAd();
    }
  }, []);

  return (
    <div>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display:'block', textAlign: 'center' }}
        data-ad-client="ca-pub-4660168246825318"
        data-ad-slot="5895624541"
        data-ad-format="horizontal"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdSenseAd;
