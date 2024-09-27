import React from 'react';
import { Grid } from '@mui/material';

import { Helmet } from'react-helmet';
import Quiz3 from './Quiz3';
import EmailSubscribe from '../Components/EmailSubscribe';

const Quiz3Homepage = () => {
    return (
        <div>
             <Helmet>
        <title>Jackie Wyers' Quiz Homepage</title>
        <meta name="description" content="It started with the legendary Animal Pretty Calculator, with more quizzes being added every week!" />
        <meta name="keywords" content="beauty quiz, wedding dress quiz, animal pretty, Jackie Wyers, makeup quiz, beauty styles" />
        <meta property="og:title" content="Jackie Wyers' Quiz Homepage" />
        <meta property="og:description" content="Discover your perfect wedding dress style and find your animal face type with Jackie Wyers' interactive quizzes!" />
        <meta property="og:url" content="https://jackiewyers.beauty/quiz-3-homepage" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jackie Wyers' Quiz Homepage" />
        <meta name="twitter:description" content="Discover your perfect wedding dress style and find your animal face type with Jackie Wyers' interactive quizzes!" />
     
      </Helmet>
      <Grid container justifyContent="center"
            style = {{paddingTop: '20px', paddingBottom: '10px'}}
            >
           
                
            
        
               
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

export default Quiz3Homepage;
