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

    const loadIframe = () => {
      const iframe = iframeRef.current;
      if (iframe && !iframe.src) {
        iframe.src = iframe.dataset.src;
      }
    };

    const iframe = iframeRef.current;

    if (iframe) {
      iframe.addEventListener('focus', handleIframeFocus);
      iframe.addEventListener('blur', handleIframeBlur);

      // Lazy load the iframe when it's close to the viewport
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadIframe();
            observer.disconnect();
          }
        },
        { rootMargin: '200px' } // Load the iframe when it's within 200px of the viewport
      );
      observer.observe(iframe);
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
          data-src="https://shopmy.us/collections/public/555260?noHeader=true"
          className={styles.lifestyleFavoritesIframe}
          ref={iframeRef}
          scrolling='no'
          loading='lazy' // Native lazy loading fallback
        ></iframe>
      </div>
    </div>
  );
};

export default LifestyleFavorites;
