import React, { useEffect } from 'react';

const SubscribeButton = () => {
  useEffect(() => {
    // Dynamically load the YouTube subscribe button script
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Remove the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
   <div
   style = {{alignContent: 'center' }}
   >
<div>

</div>
<div className="g-ytsubscribe" 
     data-channelid="UCF8jAZoTZBReXwoj8vu9HWA" 
     data-layout="default" 
     data-count="default"></div>
   </div> 
  );
};

export default SubscribeButton;
