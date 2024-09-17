import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import styles from './HeroSection.module.css';

const HeroSection = ({ featureText, headlineText, subtext, author, imageSrc, linkUrl }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <a href={linkUrl} className={styles.heroLink}>
      <Grid container justifyContent="center" alignItems="center" className={styles.heroSection}>
        {/* Text Section */}
        <Grid item xs={12} md={6} className={styles.textContent}>
          <h2 className={styles.feature}>{featureText}</h2>
          <h1 className={styles.headline}>{headlineText}</h1>
          <p className={styles.subtext}>{subtext}</p>
          <p className={styles.author}>{author}</p>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6} className={styles.imageContent}>
          <img src={imageSrc} alt={headlineText} className={styles.image} loading="lazy" />
        </Grid>
      </Grid>
    </a>
  );
};

HeroSection.propTypes = {
  featureText: PropTypes.string.isRequired,
  headlineText: PropTypes.string.isRequired,
  subtext: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
};

export default HeroSection;