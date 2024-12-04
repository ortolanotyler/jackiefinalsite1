import React, { useEffect } from "react";
import styles from "./Adsense.module.css";

const AdSenseAd = () => {
  useEffect(() => {
    // Dynamically load the AdSense script
    const script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4660168246825318";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    script.onload = () => {
      try {
        // Trigger AdSense ads initialization
        if (window.adsbygoogle) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (error) {
        console.error("Adsense error: ", error);
      }
    };

    return () => {
      // Clean up the script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.adContainer}>
      <ins
        className={`adsbygoogle ${styles.adBlock}`}
        data-ad-client="ca-pub-4660168246825318"
        data-ad-slot="8192987306"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdSenseAd;