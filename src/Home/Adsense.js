import React, { useState, useEffect } from "react";

const AdSenseAd = () => {
  const [adLoaded, setAdLoaded] = useState(false);

  useEffect(() => {
    // Simulate ad loading delay
    const timer = setTimeout(() => setAdLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="adsense-ad-container">
      {adLoaded ? (
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%", maxWidth: "728px", height: "90px" }}
          data-ad-client="ca-pub-4660168246825318" // Replace with your AdSense Publisher ID
          data-ad-slot="8192987306" // Replace with your AdSense Ad Slot ID
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      ) : (
        <div style={{ height: "90px", width: "100%", backgroundColor: "#f8f8f8" }}></div>
      )}
    </div>
  );
};

export default AdSenseAd;