import React from 'react';
import { Box, Grid, useMediaQuery } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import EmailSubscribe from '../Components/EmailSubscribe';
import NewsletterSlider from './NewsletterSlider';

const theme = createTheme();

const NewsletterSection = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ width: '100%', backgroundColor: 'white', margin: '1rem auto' }}>
      <Grid
        container
        spacing={isMobile ? 2 : 4}
        direction={isMobile ? 'column' : 'row'}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} >
          <NewsletterSlider />
        </Grid>
     
      </Grid>
    </Box>
  );
};

export default NewsletterSection;
