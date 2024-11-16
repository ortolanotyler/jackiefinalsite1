import React from 'react';
import { Grid } from '@mui/material';

import { Helmet } from 'react-helmet-async';
import Quiz3 from './Quiz3';
import Quiz2 from './Quiz2';
import EmailSubscribe from '../Components/EmailSubscribe';
import AdSenseAd from '../Home/Adsense';
import Quiz4 from './Quiz4';
import { HorizontalRuleOutlined } from '@mui/icons-material';
import HorizontalLine from '../Components/HorizontalLine';
import TextBanner2 from '../Components/TextBanner2';
import TextReveal from '../Components/TextReveal';
import Quiz5 from './Quiz5';
import TextRevealNoBox from '../Components/TextRevealNoBoxShadow';

const QuizHomepage = () => {
    return (
        <div>
             <Helmet>
        <title>Jackie Wyers' Quiz Homepage</title>
        <meta name="description" content="It started with the legendary Animal Pretty Calculator, with more quizzes being added every week!" />
        <meta name="keywords" content="beauty quiz, wedding dress quiz, animal pretty, Jackie Wyers, makeup quiz, beauty styles" />
        <meta property="og:title" content="Jackie Wyers' Quiz Homepage" />
        <meta property="og:description" content="Discover your perfect wedding dress style and find your animal face type with Jackie Wyers' interactive quizzes!" />
        <meta property="og:image" content={`${process.env.PUBLIC_URL}/Images/Quiz/QuizHomepage/og-image.jpg`} />
        <meta property="og:url" content="https://www.jackiewyers.beauty/quiz" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jackie Wyers' Quiz Homepage" />
        <meta name="twitter:description" content="Discover your perfect wedding dress style and find your animal face type with Jackie Wyers' interactive quizzes!" />
        <meta name="twitter:image" content={`${process.env.PUBLIC_URL}/Images/Quiz/QuizHomepage/twitter-image.jpg`} />
     
      </Helmet>
      <Grid container justifyContent="center" spacing = {1}
            style = {{paddingTop: '0px'}}
            >
                          <TextReveal text='THE QUIZ ZONE'/>
                          <TextRevealNoBox text='ANIMAL PRETTY QUIZ' style = {{backgroundColor : '#ffffff'}}/>

<Grid item xs={12}>
      <Quiz2 />
  </Grid>
  <TextReveal text='MALE vs FEMALE GAZE'/>

                          <Grid item xs={12}>
                    <Quiz5 />
                </Grid>
             
               
                <TextReveal text='HALLOWEEN COSTUME QUIZ'/>


           <Grid item xs={12}>
                    <Quiz4 />
                </Grid>
             
         

                <TextReveal text='ULTIMATE WEDDING DRESS'/>

               
                <Grid item xs={12}>
                    <Quiz3 />
                </Grid>
             

     

          
                <div style = {{margin :'10px auto' }}>
                <EmailSubscribe/>
                </div>



                
            </Grid>
          



                
             
        </div>
    );
};

export default QuizHomepage;
