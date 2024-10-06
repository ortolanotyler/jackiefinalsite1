import React, { useEffect } from 'react';

const AdSenseAd = () => {
  useEffect(() => {
    // Ensure the AdSense script is loaded only once
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4660168246825318';
    script.async = true;
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);

    // Initialize the AdSense ad after script is loaded
    script.onload = () => {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', margin: '20px auto' }}>
      <ins 
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-4660168246825318" 
        data-ad-slot="3426882419"  // Your Ad Slot ID
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdSenseAd;