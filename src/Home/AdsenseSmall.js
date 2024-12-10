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
      {/* AdSense ad container */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-4660168246825318"
        data-ad-slot="6584902918"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default SmallAdSenseAd;