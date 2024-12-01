import React, { useEffect } from 'react';

const AdSenseAd = () => {
  useEffect(() => {
    // Dynamically load the AdSense script
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4660168246825318';
    script.async = true;
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);

    script.onload = () => {
      try {
        // Trigger AdSense ads initialization
        if (window.adsbygoogle) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (error) {
        console.error('Adsense error: ', error);
      }
    };

    return () => {
      // Clean up the script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', margin: '1rem auto', backgroundColor: '#ffffff' }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }} // Ensure style is passed as an object
        data-ad-client="ca-pub-4660168246825318"
        data-ad-slot="8192987306" // Updated to your specified slot
        data-ad-format="auto"
        data-full-width-responsive="true" // Ensure full-width responsiveness
      ></ins>
    </div>
  );
};

export default AdSenseAd;