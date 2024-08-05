import React, { useEffect, useRef } from 'react';
import styles from './LifestyleFavorites.module.css';
import TextReveal from '../Components/TextReveal';

const LifestyleFavorites = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleIframeFocus = () => {
      document.body.style.overflow = 'auto';
    };

    const handleIframeBlur = () => {
      document.body.style.overflow = 'hidden';
    };

    const iframe = iframeRef.current;

    if (iframe) {
      iframe.addEventListener('focus', handleIframeFocus);
      iframe.addEventListener('blur', handleIframeBlur);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener('focus', handleIframeFocus);
        iframe.removeEventListener('blur', handleIframeBlur);
      }
    };
  }, []);

  return (
    <div> 
      <TextReveal text="TRAVEL IN STYLE" />
      <div className={styles.lifestyleFavoritesWrapper}>
      <iframe
        title="Jackie's Weekly Favs"
        src="https://shopmy.us/collections/public/555260?noHeader=true"
        className={styles.lifestyleFavoritesIframe}
        ref={iframeRef}
        scrolling= 'no'
      ></iframe>
    </div>
    </div>
  
  );
};

export default LifestyleFavorites;
