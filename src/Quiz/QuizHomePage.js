import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import TextReveal from '../Components/TextReveal';
import TextBanner2 from '../Components/TextBanner2';
import EmailSubscribe from '../Components/EmailSubscribe';
import Quiz2 from './Quiz2';
import Quiz3 from './Quiz3';
import Quiz4 from './Quiz4';
import Quiz5 from './Quiz5';
import AdSenseAd from '../Home/Adsense';

const QuizHomepage = () => {
  return (
    <Box sx={{ width: '100%', backgroundColor: 'white', transform: 'translateZ(0)' }}>
      <Helmet>
        <title>Jackie Wyers' Quiz Homepage</title>
        <meta
          name="description"
          content="It started with the legendary Animal Pretty Calculator, with more quizzes being added every week!"
        />
        <meta
          name="keywords"
          content="beauty quiz, wedding dress quiz, animal pretty, Jackie Wyers, makeup quiz, beauty styles"
        />
        <meta property="og:title" content="Jackie Wyers' Quiz Homepage" />
        <meta
          property="og:description"
          content="Discover your perfect wedding dress style and find your animal face type with Jackie Wyers' interactive quizzes!"
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/Images/Quiz/QuizHomepage/og-image.jpg`}
        />
        <meta property="og:url" content="https://www.jackiewyers.beauty/quiz-3-homepage" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Jackie Wyers' Quiz Homepage"
        />
        <meta
          name="twitter:description"
          content="Discover your perfect wedding dress style and find your animal face type with Jackie Wyers' interactive quizzes!"
        />
        <meta
          name="twitter:image"
          content={`${process.env.PUBLIC_URL}/Images/Quiz/QuizHomepage/twitter-image.jpg`}
        />
      </Helmet>

      {/* Quiz Banner Section */}
      <Box sx={{ backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', pt: { xs: '0px', md: '0px' } }}>
        <TextReveal
          text="🐈‍⬛🦌 The Animal Pretty Quiz 🐇🦊"
          style={{ backgroundColor: '#fdedef', width: '100%' }}
        />
      </Box>

      {/* Quiz Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          
          padding: { xs: '50px', md: '70px' },
        }}
      >
        <Quiz2 />
      </Box>
        {/* Quiz Banner Section */}
        <Box sx={{ backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', pt: { xs: '0px', md: '0px' } }}>
        <TextReveal
          text="ULTIMATE WEDDING DRESS QUIZ"
          style={{ backgroundColor: '#fdedef', width: '100%' }}
        />
      </Box>

      {/* Quiz Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          padding: { xs: '10px', md: '30px' },
        }}
      >
        <Quiz3 />
      </Box>

          
     <Box sx={{ margin: '1rem auto' , textalign: 'center'}}>       <AdSenseAd/>
        {/* Quiz Banner Section */}
        <Box sx={{ backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', pt: { xs: '0px', md: '0px' } }}>
        <TextReveal
          text="HALLOWEEN COSTUME QUIZ"
          style={{ backgroundColor: '#fdedef', width: '100%' }}
        />
      </Box>

      {/* Quiz Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          padding: { xs: '10px', md: '30px' },
        }}
      >
        <Quiz4 />
      </Box>
          
          </Box>
        {/* Quiz Banner Section */}
        <Box sx={{ backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', pt: { xs: '0px', md: '0px' } }}>
        <TextReveal
          text="MALE vs FEMALE GAZE QUIZ"
          style={{ backgroundColor: '#fdedef', width: '100%' }}
        />
      </Box>

      {/* Quiz Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          padding: { xs: '10px', md: '30px' },
        }}
      >
        <Quiz5 />
      </Box>
    
      <Box sx={{ margin: '1rem auto' , textAlign: 'center'}}>
       <AdSenseAd/>
      </Box>
      {/* Subscribe Section */}
      <TextReveal text="Stay Updated with New Quizzes!" height="200px" width="100%" />
  
    </Box>
  );
};

export default QuizHomepage;