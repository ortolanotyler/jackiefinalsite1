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

const Quiz2Homepage = () => {
  return (
    <Box sx={{ width: '100%', backgroundColor: '#ffffff', transform: 'translateZ(0)' }}>
      <Helmet>
        <title>Jackie Wyers' Animal Pretty Quiz and More! </title>
        <meta
          name="description"
          content="It started with the legendary Animal Pretty Calculator, with more quizzes being added every week!"
        />
        <meta
          name="keywords"
          content="beauty quiz, wedding dress quiz, animal pretty, Jackie Wyers, makeup quiz, beauty styles"
        />
        <meta property="og:title" content="Jackie Wyers' Animal Pretty Quiz " />
        <meta
          property="og:description"
          content="Discover your perfect wedding dress style and find your animal face type with Jackie Wyers' interactive quizzes!"
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/Images/Quiz/QuizHomepage/og-image.jpg`}
        />
        <meta property="og:url" content="https://www.jackiewyers.beauty/quiz-2-homepage" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Jackie Wyers' Animal Pretty Quiz "
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


      {/* Quiz2 Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          padding: { xs: '50px', md: '40px' },
        }}
      >

      {/* Animal Pretty Quiz Section */}
      <Box sx={{ width: '100%' }}>
        <TextReveal
          text="Animal Pretty Quiz"
          style={{ backgroundColor: '#ffffff', width: '100%', margin: 0 }}
        />
      </Box>
        <Quiz2 />
      </Box>



      <AdSenseAd/>

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

      <AdSenseAd/>

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
<AdSenseAd/>

  <Box sx={{ margin: '1rem' }}>       <AdSenseAd/>
      </Box>

      {/* Wedding Dress Quiz Section */}
      <Box sx={{ width: '100%' }}>
        <TextReveal
          text="ULTIMATE WEDDING DRESS QUIZ"
          style={{ backgroundColor: '#fdedef', width: '100%', margin: 0 }}
        />
      </Box>

   <Box sx={{ margin: '1rem' }}>       <AdSenseAd/>
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

   



   <Box sx={{ margin: '1rem' }}>       <AdSenseAd/>
      </Box>


   

      {/* Subscribe Section */}
      <Box sx={{ width: '100%' , padding : '1rem' }}>
     
        <EmailSubscribe2 />
      </Box>
        
    </Box>
  );
};

export default Quiz2Homepage;