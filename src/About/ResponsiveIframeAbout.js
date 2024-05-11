import React from "react";


const ResponsiveIframeAbout = ({ src, title, scrolling = "auto" }) => {
    return (
      <iframe
        src={src}
        title={title}
        frameBorder="0"
        allowFullScreen
        scrolling="no"
        style={{ width: '50vw', height: '60vh' }}
      ></iframe>
    );
  };
  
  export default ResponsiveIframeAbout;
  