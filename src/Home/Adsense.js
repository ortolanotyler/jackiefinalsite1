import React, { useEffect, useRef } from 'react';
import HorizontalLine from '../Components/HorizontalLine';

const AdSenseAd = () => {
  useEffect(() => {
    // Check if the ad element is already rendered to avoid multiple pushes
    if (!window.adsbygoogle || window.adsbygoogle.length === 0) {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4660168246825318';
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.body.appendChild(script);

      script.onload = () => {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          console.error('Adsense error: ', e);
        }
      };
    }
  }, []);

  return (
    <>
    <HorizontalLine/>
    <div style={{ justifyContent: 'center', margin: '20px auto' }}>
      <ins 
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-4660168246825318" 
        data-ad-slot="3426882419"  // Ensure unique ad slot
        data-ad-format="auto"
        data-full-width-responsive="false"
      ></ins>
    </div>
    <HorizontalLine/>

    </>
    
  );
};

export default AdSenseAd;