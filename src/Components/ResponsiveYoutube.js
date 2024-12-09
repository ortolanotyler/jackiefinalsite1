import React, { useRef, useEffect, useState } from 'react';

const ResponsiveYoutube = ({ src, title }) => {
  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the iframe is visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const autoplaySrc = `${src}?autoplay=1&mute=1`;

  return (
    <div
      ref={videoRef}
      style={{
        position: 'relative',
        paddingBottom: '56.25%', // 16:9 aspect ratio
        height: 0,
        overflow: 'hidden',
        maxWidth: '100%',
        background: '#000',
      }}
    >
      <iframe
        src={isInView ? autoplaySrc : src} // Add autoplay parameters only when in view
        title={title}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
        }}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

export default ResponsiveYoutube;