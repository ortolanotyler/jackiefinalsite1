import React, { useEffect } from 'react';

const InArticleAd = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('Failed to load the ad: ', e);
    }
  }, []);

  return (
    <div>
      <ins className="adsbygoogle"
           style={{ display: 'block', textAlign: 'center' }}
           data-ad-layout="in-article"
           data-ad-format="fluid"
           data-ad-client="ca-pub-4660168246825318"
           data-ad-slot="8783611952"></ins>
    </div>
  );
};

export default InArticleAd;
