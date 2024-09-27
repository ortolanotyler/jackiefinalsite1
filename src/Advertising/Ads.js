import React, { useEffect, useRef, useState } from 'react';
import HorizontalLine from '../Components/HorizontalLine';

const AdSenseAd = () => {
  const adRef = useRef(null);
  const adInitialized = useRef(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Intersection Observer callback to check if the ad is visible
    const handleIntersection = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Stop observing once visible
      }
    };

    // Create Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of the ad is visible
    });

    if (adRef.current) {
      observer.observe(adRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisible && !adInitialized.current) {
      const loadAd = () => {
        if (window.adsbygoogle && adRef.current) {
          try {
            // Initialize the ad
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            adInitialized.current = true;
          } catch (e) {
            console.error('AdSense error:', e);
          }
        }
      };

      // Dynamically load the AdSense script
      const script = document.createElement('script');
      script.async = true;
      script.src =
        'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4660168246825318';
      script.crossOrigin = 'anonymous';
      script.onload = loadAd;
      document.body.appendChild(script);

      // Cleanup the script on unmount
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isVisible]);

  return (
    <div ref={adRef}>
      <HorizontalLine />
      {isVisible && (
        <ins
          className="adsbygoogle"
          style={{
            display: 'block',
            textAlign: 'center',
            minWidth: '250px', // Ensure minimum width for fluid ads
            height: 'auto', // Adjust height if needed
          }}
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-4660168246825318"
          data-ad-slot="8783611952"
        ></ins>
      )}
      <HorizontalLine />
    </div>
  );
};

export default AdSenseAd;