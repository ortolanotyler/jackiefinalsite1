import React, { useState } from 'react';
import styles from './LiteYouTubeEmbed.module.css'; // Make sure to style accordingly

const LiteYouTubeEmbed = ({ videoId, title }) => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  const handleClick = () => {
    setIsIframeLoaded(true);
  };

  return (
    <div className={styles.youtubeEmbed}>
      {!isIframeLoaded ? (
        <div className={styles.thumbnail} onClick={handleClick}>
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt={`Play ${title}`}
            className={styles.thumbnailImage}
            loading="lazy"
          />
          <button className={styles.playButton}>Play</button>
        </div>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      )}
    </div>
  );
};

export default LiteYouTubeEmbed;