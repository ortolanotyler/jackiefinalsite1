import React, { useEffect, useState, useRef } from 'react';

const ResponsiveIframe = ({ src, title }) => {
  const [isVisible, setIsVisible] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    // Function to handle intersection with viewport
    const handleIntersection = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Stop observing once the iframe is visible
      }
    };

    // Create an Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of the iframe is visible
    });

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    // Cleanup the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  // Inline styles for container and iframe
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '600px',
    overflow: 'hidden', // Prevent scrolling
    paddingTop: isVisible ? '0' : '56.25%', // Aspect ratio 16:9
  };

  const iframeStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    minHeight: '600px',
    border: 'none', // Remove border
    overflow: 'hidden', // Ensure no scrolling
  };

  return (
    <div ref={iframeRef} style={containerStyle}>
      {isVisible && (
    <iframe
    title={title}
    src={src}
    scrolling="no" // Disable scrolling in the iframe
    style={iframeStyle}
    tabIndex="-1" // Prevent iframe focus issues
    seamless="seamless" // Allows the iframe to be more integrated visually
    sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
  />
      )}
    </div>
  );
};

export default ResponsiveIframe;