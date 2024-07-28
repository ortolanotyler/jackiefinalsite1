import React from 'react';
import { Grid } from '@mui/material';
import TextReveal from '../Components/TextReveal';

import AdSenseAd from '../Advertising/Ads';
import { Helmet } from'react-helmet';
import Quiz3 from './Quiz3';
import Quiz2 from './Quiz2';

const QuizHomepage = () => {
    return (
        <div>
             <Helmet>
        <title>Jackie Wyers' Quiz Homepage</title>
        <meta name="description" content="Starting with the legendary Animal Pretty Calculator, with more quizzes being added every week!" />
        <meta name="keywords" content="beauty quiz, wedding dress quiz, animal pretty, Jackie Wyers, makeup quiz, beauty styles" />
        <meta property="og:title" content="Jackie Wyers' Quiz Homepage" />
        <meta property="og:description" content="Discover your perfect wedding dress style and find your animal face type with Jackie Wyers' interactive quizzes!" />
        <meta property="og:image" content={`${process.env.PUBLIC_URL}/Images/Quiz/QuizHomepage/og-image.jpg`} />
        <meta property="og:url" content="https://jackiewyers.beauty/quiz" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jackie Wyers' Quiz Homepage" />
        <meta name="twitter:description" content="Discover your perfect wedding dress style and find your animal face type with Jackie Wyers' interactive quizzes!" />
        <meta name="twitter:image" content={`${process.env.PUBLIC_URL}/Images/Quiz/QuizHomepage/twitter-image.jpg`} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RT6GR7JXYG"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RT6GR7JXYG');
          `}
        </script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4660168246825318" crossorigin="anonymous"></script>
      </Helmet>
            <TextReveal text='THE ULTIMATE 2025 WEDDING DRESS QUIZ' style = {{backgroundColor: 'white', fontSize: '0.55rem'}} />
            <Grid container justifyContent="center">
               
               
                <Grid item xs={12}>
                    <Quiz3 />
                </Grid>
                <Grid item xs={12}>
                <div style={{margin: '10px'}}>
                <AdSenseAd/>
                </div>
                </Grid>
              
                <TextReveal text='🐰 🦌  FIND YOUR ANIMAL FACE TYPE  🐈‍⬛ 🦊' style ={{backgroundColor:'white'}} />
                <Grid item xs={12}>
                    <Quiz2 />
                </Grid>
                
           
                
            </Grid>
            <div style={{margin: '10px'}}>
                <AdSenseAd/>
                </div>
                <div style={{margin: '10px'}}>
                <AdSenseAd/>
                </div> <div style={{margin: '10px'}}>
                <AdSenseAd/>
                </div>
        </div>
    );
};

export default QuizHomepage;
