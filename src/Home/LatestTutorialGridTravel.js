import React, { useEffect, useRef } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import styles from './ArticlesGrid.module.css';
import TextReveal from '../Components/TextReveal';

// Importing images
const image1 = `${process.env.PUBLIC_URL}/Images/Articles/HotelQ2/1.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/NewZealand/NZThumbnail.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/Articles/Disney/Epcot/EPCOTTHUMBNAIL.jpeg`;
const image4 = `${process.env.PUBLIC_URL}/Images/Articles/DiaryPost1/DIARYSQUARE.jpg`;

const LatestTravelGrid = () => {
  const items = [
    { id: 1, title: 'A Summer Getaway At Hotel Quintessence', img: image1, link: '/hotelquintessance' },
    { id: 2, title: 'A Whimsical Week Exploring Auckland', img: image2, link: '/newzealand' },
    { id: 3, title: 'A Magical Visit to Epcot', img: image3, link: '/epcot' },
    { id: 4, title: "Beyond The Surface : Self-Acceptance", img: image4, link: '/diaryfillers' },
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
    <TextReveal text="LATEST" />
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

      <Grid item xs={12} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex' }, mt: 2 }}>
        <Box sx={{ textAlign: { xs: 'center', md: 'center' }, mr: 5, mb: 2 }}>
         
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.25rem',
                fontFamily: 'GFS Didot, serif',
                color: 'black',
              }}
            >
              SCROLL FOR MORE
            </Typography>
            <Box component="span" sx={{ ml: 1, fontWeight: 'bold' }}>
              &darr;
            </Box>
      
        </Box>
      </Grid>
    </>
  );
};

export default LatestTravelGrid;

