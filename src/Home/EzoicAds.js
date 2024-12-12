import React, { useEffect } from 'react';

const EzoicAd = ({ placeholderId }) => {
  useEffect(() => {
    if (window.ezstandalone && window.ezstandalone.cmd) {
      window.ezstandalone.cmd.push(() => {
        window.ezstandalone.showAds(placeholderId);
      });
    }
  }, [placeholderId]);

  return <div id={`ezoic-pub-ad-placeholder-${placeholderId}`}></div>;
};

export default EzoicAd;