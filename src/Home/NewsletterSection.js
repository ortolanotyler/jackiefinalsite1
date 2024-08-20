import React from 'react';
import { Box, Grid, useMediaQuery } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import NewsletterSlider from '../Components/NewsletterSlider';
import EmailSubscribe from '../Components/EmailSubscribe';
import EmailSubscribe2 from '../Components/EmailSubscribe2';

const theme = createTheme();

const NewsletterSection = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ width: '100%', backgroundColor: 'white', padding: '2rem' }}>
      <Grid
        container
        spacing={isMobile ? 2 : 4}
        direction={isMobile ? 'column' : 'row'}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={6}>
          <NewsletterSlider />
        </Grid>
        <Grid item xs={12} md={6}>
          <EmailSubscribe />
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewsletterSection;
