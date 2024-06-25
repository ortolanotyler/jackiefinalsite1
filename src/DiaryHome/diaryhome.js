import React from 'react';
import { Grid, Box, Button, Container, Typography } from '@mui/material';
import AdSenseAd from '../Advertising/Ads';
import TextReveal from '../Components/TextReveal';

const diaryEntries = [
  { 
    src: `${process.env.PUBLIC_URL}/Images/Diary/Diary1.jpg`, 
    title: "My Experience With Fillers", 
    href: "/diaryfillers"  // Customize the href for each entry
  },
  { 
    src: `${process.env.PUBLIC_URL}/Images/Diary/Diary2.jpg`, 
    title: "Bridesmaid Boxes How-To", 
    href: "/bridesmaidboxes"  // Customize the href for each entry
  },
  // Add more entries as needed
];

const DiarySlider = ({ entries }) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4, padding: '1rem', borderRadius: '8px' }}>
      <Grid container spacing={3}>
        {entries.map((entry, index) => (
          <React.Fragment key={index}>
            <Grid item xs={12} md={6}>
              <Box display="flex" flexDirection="column" alignItems="center" p={2} sx={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <Typography variant="h6" sx={{ fontFamily: 'GFS Didot, serif', color: 'black', mb: 2 }}>
                  {entry.title}
                </Typography>
                <Box sx={{ position: 'relative', width: '100%', height: { xs: '200px', sm: '300px', md: '400px' }, marginBottom: '1rem' }}>
                  <img
                    src={entry.src}
                    alt={entry.title}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '8px'
                    }}
                  />
                </Box>
                <Button
                  variant="contained"
                  href={entry.href}  // Use the href from the entry
                  sx={{
                    mt: 2,
                    backgroundColor: '#745B4F',
                    color: 'white',
                    fontFamily: 'GFS Didot, serif',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                      backgroundColor: '#fdedef',
                      boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.25)',
                    },
                  }}
                >
                  READ HERE
                </Button>
              </Box>
            </Grid>
            {(index + 1) % 4 === 0 && (
              <Grid item xs={12}>
                <Box p={2} sx={{ backgroundColor: '#fdedef', borderRadius: '8px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', mt: 3 }}>
                  <AdSenseAd />
                </Box>
              </Grid>
            )}
          </React.Fragment>
        ))}
      </Grid>
    </Container>
  );
};

const DiaryHome = () => (
  <div style={{ backgroundColor: '#fdedef', padding: '2rem' }}>
    <TextReveal text="DIARY" style={{ color: 'black', height: '10vh' }} />
    <DiarySlider entries={diaryEntries} />
  </div>
);

export default DiaryHome;
