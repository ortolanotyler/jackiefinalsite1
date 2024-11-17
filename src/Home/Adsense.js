import React, { useEffect } from 'react';

const AdSenseAd = () => {
  useEffect(() => {
    // Load the Adsense script
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4660168246825318';
    script.async = true;
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);

    script.onload = () => {
      try {
        // Ensure adsbygoogle is defined and push an ad
        if (window.adsbygoogle) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (e) {
        console.error('Adsense error: ', e);
      }
    };

    return () => {
      // Clean up by removing the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ justifyContent: 'center', margin: '1rem auto' }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }} // Ensures a block display style
        data-ad-format="autorelaxed" // Updated ad format
        data-ad-client="ca-pub-4660168246825318"
        data-ad-slot="1141198063" // Updated ad slot
      ></ins>
    </div>
  );
};

export default AdSenseAd;