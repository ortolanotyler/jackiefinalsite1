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

const Quiz5Homepage = () => {
  return (
    <Box sx={{ width: '100%', backgroundColor: 'white', transform: 'translateZ(0)' }}>
      <Helmet>
        <title>Male vs Female Gaze Quiz Home</title>
        <meta
          name="description"
          content="It started with the legendary Animal Pretty Calculator, with more quizzes being added every week!"
        />
      <meta name="keywords" content="male vs female gaze quiz, beauty perspective quiz, Jackie Wyers quizzes, gendered beauty perspectives, female gaze quiz, male gaze quiz, cultural beauty quiz, beauty analysis quiz, perspective beauty quiz, aesthetic perspective test, Jackie Wyers male vs female quiz, beauty style analysis, gender aesthetics quiz, beauty and gender quiz" />
        <meta property="og:title" content="Animal Pretty Quiz Home" />
        <meta
          property="og:description"
          content="Discover your perfect wedding dress style and find your animal face type with Jackie Wyers' interactive quizzes!"
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/Images/Quiz/QuizHomepage/og-image.jpg`}
        />
        <meta property="og:url" content="https://www.jackiewyers.beauty/quiz-5-homepage" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Animal Pretty Quiz Home"
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

      {/* Male vs Female Gaze Quiz Section */}
      <Box sx={{ width: '100%' ,          padding: { xs: '50px', md: '70px' },
}}>
        <TextReveal
          text="MALE vs FEMALE GAZE QUIZ"
          style={{ backgroundColor: '#ffffff', width: '100%', margin: 0 }}
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

      <Box sx={{ margin: '1rem auto' , textalign: 'center'}}>       <AdSenseAd/>
      </Box>

      {/* Halloween Costume Quiz Section */}
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

      <Box sx={{ margin: '1rem auto' , textalign: 'center'}}>       <AdSenseAd/>
      </Box>

        

      {/* Animal Pretty Quiz Section */}
      <Box sx={{ width: '100%' }}>
        <TextReveal
          text="🐈‍⬛🦌 The Animal Pretty Quiz 🐇🦊"
          style={{ backgroundColor: '#fdedef', width: '100%', margin: 0 }}
        />
      </Box>

    

      <Box sx={{ margin: '1rem auto' }}>
       <AdSenseAd/>
      </Box>
      
    

      {/* Quiz2 Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          padding: { xs: '10px', md: '30px' },
        }}
      >
        <Quiz2 />
      </Box>

      <Box sx={{ margin: '1rem auto' , textalign: 'center'}}>       <AdSenseAd/>
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

      <Box sx={{ margin: '1rem auto' , textalign: 'center'}}>       <AdSenseAd/>
      </Box>
   

      {/* Subscribe Section */}
      <Box sx={{ width: '100%' }}>
       <EmailSubscribe2/>
      </Box>

       
    </Box>
  );
};

export default Quiz5Homepage;