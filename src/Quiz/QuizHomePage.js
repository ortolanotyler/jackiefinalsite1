import React from 'react';
import { Grid } from '@mui/material';

import { Helmet } from 'react-helmet-async';
import Quiz3 from './Quiz3';
import Quiz2 from './Quiz2';
import EmailSubscribe from '../Components/EmailSubscribe';

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
      <Grid container justifyContent="center"
            style = {{paddingTop: '20px', paddingBottom: '10px'}}
            >
           
                
                <Grid item xs={12}>
                      <Quiz2 />
                </Grid>
                  
                

        
               
                <Grid item xs={12}>
                    <Quiz3 />
                </Grid>
          
             
           
              
          
                
      
                
            </Grid>
          

<div style = {{margin :'10px auto' }}>
                <EmailSubscribe/>
                </div>

                
             
        </div>
    );
};

export default QuizHomepage;
