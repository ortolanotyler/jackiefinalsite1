import React, { useEffect } from 'react';

const SmallAdSenseAd = () => {
  useEffect(() => {
    try {
      // Push adsbygoogle without reloading the script
      if (window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('Adsense error: ', error);
    }
  }, []);

  return (
    <div style={{ textAlign: 'center', margin: '1rem auto' }}>
     <ins
        className="adsbygoogle"
        style={{ display: 'inline-block', width: '100%', height: 'auto' }}
        data-ad-client="ca-pub-4660168246825318"
        data-ad-slot="6584902918"
      ></ins>
    </div>
  );
};

export default SmallAdSenseAd;

