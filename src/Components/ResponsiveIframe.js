import React, { useEffect, useState } from 'react';

const ResponsiveIframe = ({ src, title }) => {
  const [allowScrolling, setAllowScrolling] = useState(false);

  useEffect(() => {
    const checkResize = () => {
      const matched = window.matchMedia("(max-width: 1200px)").matches;
      setAllowScrolling(matched);
    };

    window.addEventListener('resize', checkResize);
    checkResize(); // Initial check on mount

    return () => {
      window.removeEventListener('resize', checkResize);
    };
  }, []);

  return (
    <iframe
      width="100%"
      height='3vh'
      title={title}
      src={src}
      className="embed-container"
      scrolling={allowScrolling ? 'yes' : 'no'}
      style={{ border: 'none' }}
    ></iframe>
  );
};

export default ResponsiveIframe;
