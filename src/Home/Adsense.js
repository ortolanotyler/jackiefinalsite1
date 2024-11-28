import React, { useEffect, useState } from "react";

const AdSenseAd = () => {
  const [adLoaded, setAdLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAdLoaded(true);
      if (window.adsbygoogle) {
        try {
          // Push the ad to the adsbygoogle library
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          console.error("AdSense error: ", e);
        }
      }
    }, 1000); // Simulated delay to show loading state

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="adsense-ad-container">
      {adLoaded ? (
        <ins
          className="adsbygoogle"
          style={{
            display: "block",
            width: "100%",
            maxWidth: "728px", // Adjust ad width
            height: "90px", // Adjust ad height
          }}
          data-ad-client="ca-pub-4660168246825318" // Replace with your AdSense Publisher ID
          data-ad-slot="8192987306" // Replace with your AdSense Ad Slot ID
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      ) : (
        // Placeholder to avoid layout shifts
        <div
          style={{
            height: "90px",
            width: "100%",
            backgroundColor: "#f8f8f8",
            textAlign: "center",
            lineHeight: "90px",
            color: "#ccc",
            fontSize: "14px",
          }}
        >
          Loading Ad...
        </div>
      )}
    </div>
  );
};

export default AdSenseAd;