import React from 'react';
import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import TextReveal from '../Components/TextReveal';
import EmailSubscribe from '../Components/EmailSubscribe';
import Quiz2 from './Quiz2';
import Quiz3 from './Quiz3';
import Quiz4 from './Quiz4';
import Quiz5 from './Quiz5';
import AdSenseAd from '../Home/Adsense';
import EmailSubscribe2 from '../Components/EmailSubscribe2';
import HorizontalLine from '../Components/HorizontalLine';

const Quiz4Homepage = () => {
  return (
    <Box sx={{ width: '100%', backgroundColor: 'white', transform: 'translateZ(0)' }}>
      <Helmet>
        <title>Jackie Wyers' Quiz Homepage</title>
        <meta
          name="description"
          content="It started with the legendary Animal Pretty Calculator, with more quizzes being added every week!"
        />
      <meta name="keywords" content="halloween costume quiz, halloween style quiz, Jackie Wyers quizzes, costume planning quiz, halloween outfit ideas, festive halloween quiz, halloween character match, party costume quiz, spooky season quiz, Jackie Wyers halloween quiz, halloween fashion styles, fun halloween quiz, costume personality quiz, halloween aesthetic quiz, halloween inspiration quiz" />
        <meta property="og:title" content="Jackie Wyers' Quiz Homepage" />
        <meta
          property="og:description"
          content="Discover your perfect wedding dress style and find your animal face type with Jackie Wyers' interactive quizzes!"
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/Images/Quiz/QuizHomepage/og-image.jpg`}
        />
        <meta property="og:url" content="https://www.jackiewyers.beauty/quiz-4-homepage" />
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
      <Box sx={{ width: '100%' }}>
        <TextReveal
          text="HALLOWEEN COSTUME QUIZ"
          style={{ backgroundColor: '#fdedef', width: '100%', margin: 0 }}
        />
      </Box>

      {/* Quiz4 Content */}
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

      {/* Animal Pretty Quiz Section */}
      <Box sx={{ width: '100%' }}>
        <TextReveal
          text="🐈‍⬛🦌 The Animal Pretty Quiz 🐇🦊"
          style={{ backgroundColor: '#fdedef', width: '100%', margin: 0 }}
        />
      </Box>

      {/* Quiz2 Content */}
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




     

      {/* Wedding Dress Quiz Section */}
      <Box sx={{ width: '100%' }}>
        <TextReveal
          text="ULTIMATE WEDDING DRESS QUIZ"
          style={{ backgroundColor: '#fdedef', width: '100%', margin: 0 }}
        />
      </Box>

      {/* Quiz3 Content */}
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


     

      {/* Male vs Female Gaze Quiz Section */}
      <Box sx={{ width: '100%' }}>
        <TextReveal
          text="MALE vs FEMALE GAZE QUIZ"
          style={{ backgroundColor: '#fdedef', width: '100%', margin: 0 }}
        />
      </Box>

      {/* Quiz5 Content */}
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

     

      {/* Subscribe Section */}
      <Box sx={{ width: '100%' }}>
       <EmailSubscribe2/>
      </Box>

    
    </Box>
  );
};

export default Quiz4Homepage;