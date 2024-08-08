import React from 'react';
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

  return (
    <>
      <div className={styles.gridContainer}>
        {items.map(item => (
          <a key={item.id} href={`https://jackiewyers.beauty${item.link}`} className={styles.gridItem}>
            <img src={item.img} alt={item.title} className={styles.image} />
            <p className={styles.title}>{item.title}</p>
          </a>
        ))}
      </div>

      <Grid item xs={12} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, mt: 2 }}>
        <Box sx={{ textAlign: { xs: 'center', md: 'right' }, mr: 5, mb : 2 }}>
          <a
            href="/tutorials"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              fontFamily: 'GFS Didot, serif',
              color: 'black',
              textDecoration: 'none',
            }}
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

