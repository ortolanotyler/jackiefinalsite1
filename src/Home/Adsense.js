

import React from "react";

const AdSenseAd = () => {
  return (
    <div className="adsense-ad">
      <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          width: "100%",
          maxWidth: "728px",
          height: "90px", // Reserve height to prevent CLS
        }}
        data-ad-client="ca-pub-4660168246825318" // Replace with your AdSense Publisher ID
        data-ad-slot="8192987306" // Replace with your AdSense Ad Slot ID
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </div>
  );
};

export default AdSenseAd;