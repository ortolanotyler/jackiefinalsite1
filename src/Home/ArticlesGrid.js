import React, { useEffect, useRef } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import styles from './ArticlesGrid.module.css';

// Importing images
const image1 = `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/guidethumbnail.jpeg`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/PeriodDrama/ArticleThumb.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/Articles/GraceKelly/GraceKellyJackieWyers.jpg`;
const image4 = `${process.env.PUBLIC_URL}/Images/Articles/LatteMakeup/LatteThumbnail.jpg`;

const ImageGrid = () => {
  const items = [
    { id: 1, title: 'The Ultimate 2025 Wedding Dress Guide', img: image1, link: '/weddingdressguide' },
    { id: 2, title: 'No-Makeup Makeup from Period Dramas', img: image2, link: '/perioddrama' },
    { id: 4, title: 'Trend Report : Latte Makeup', img: image4, link: '/lattemakeup' },
    { id: 3, title: "Grace Kelly's Old Hollywood Glam", img: image3, link: '/gracekelly' },
  ];

  const viewAllRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (viewAllRef.current) {
        const rect = viewAllRef.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          viewAllRef.current.classList.add(styles.jiggle);
        } else {
          viewAllRef.current.classList.remove(styles.jiggle);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.gridContainer}>
        {items.map(item => (
          <div key={item.id} className={styles.gridItem}>
            <a href={item.link}>
              <img src={item.img} alt={item.title} className={styles.image} />
              <div className={styles.overlay}>
                <span className={styles.readButton}>Read</span>
              </div>
            </a>
            <p className={styles.title}>{item.title}</p>
          </div>
        ))}
      </div>

      <Grid item xs={12} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, mt: 2 }}>
        <Box sx={{ textAlign: { xs: 'center', md: 'right' }, mr: 5, mb: 2 }}>
          <a
            href="/tutorials"
            className={styles.viewAllLink}
            ref={viewAllRef}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.25rem',
                fontFamily: 'GFS Didot, serif',
                color: 'black',
              }}
            >
              VIEW ALL ARTICLES
            </Typography>
            <Box component="span" sx={{ ml: 1, fontWeight: 'bold' }}>
              &rarr;
            </Box>
          </a>
        </Box>
      </Grid>
    </>
  );
};

export default ImageGrid;

