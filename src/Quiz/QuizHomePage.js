import React from 'react';
import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import TextReveal from '../Components/TextReveal';
import Quiz2 from './Quiz2';
import Quiz3 from './Quiz3';
import Quiz4 from './Quiz4';
import Quiz5 from './Quiz5';
import EmailSubscribe2 from '../Components/EmailSubscribe2';
import AdSenseAd from '../Home/Adsense';

const QuizHomepage = () => {
  return (
    <Box sx={{ width: '100%', backgroundColor: '#ffffff', transform: 'translateZ(0)' }}>
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

      {/* Banner Section */}
      <Box sx={{ backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', pt: { xs: '50px', md: '0px' } }}>
        <TextReveal
          text="🐈‍⬛🦌 The Animal Pretty Quiz 🐇🦊"
          style={{ backgroundColor: '#fdedef', width: '100%' }}
        />
      </Box>

  

      {/* Quiz 2 Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          padding: { xs: '10px', md: '20px' },
        }}
      >
        <Quiz2 />
      </Box>

      {/* Another High-Earning Ad Spot */}
      <AdSenseAd />

      {/* Wedding Dress Quiz Section */}
      <Box sx={{ backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', pt: { xs: '0px', md: '0px' } }}>
        <TextReveal
          text="ULTIMATE WEDDING DRESS QUIZ"
          style={{ backgroundColor: '#fdedef', width: '100%' }}
        />
      </Box>

      {/* Quiz 3 Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Quiz3 />
      </Box>

      <div className="ad-container">
  <AdSenseAd />
</div>

      {/* Male vs Female Gaze Quiz Section */}
      <Box sx={{ backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', pt: { xs: '0px', md: '0px' } }}>
        <TextReveal
          text="MALE vs FEMALE GAZE QUIZ"
          style={{ backgroundColor: '#fdedef', width: '100%' }}
        />
      </Box>

      {/* Quiz 5 Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0,
        }}
      >
        <Quiz5 />
      </Box>

      {/* AdSense After Interactive Content */}
      <div className="ad-container">
  <AdSenseAd />
</div>

      {/* Halloween Quiz Section */}
      <Box sx={{ backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', pt: { xs: '0px', md: '0px' } }}>
        <TextReveal
          text="HALLOWEEN COSTUME QUIZ"
          style={{ backgroundColor: '#fdedef', width: '100%' }}
        />
      </Box>

      {/* Quiz 4 Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Quiz4 />
      </Box>

      <div className="ad-container">
  <AdSenseAd />
</div>

      {/* Subscribe Section */}
      <Box sx={{ width: '100%' }}>
        <EmailSubscribe2 />
      </Box>
    </Box>
  );
};

export default QuizHomepage;