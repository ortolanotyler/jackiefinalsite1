import React from 'react';
import { Grid } from '@mui/material';

import AdSenseAd from '../Advertising/Ads';
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
      <Grid container justifyContent="center"
            style = {{paddingTop: '20px', paddingBottom: '10px'}}
            >
           
                
            
        
               
                <Grid item xs={12}>
                    <Quiz3 />
                </Grid>
          
             
           
                <Grid item xs={6}>
                  <div
                  style = {{
                    margin: '10px auto',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                
                  }}
                  >

                  </div>
                      <AdSenseAd />
                </Grid>

                <Grid item xs={6}>
                  <div
                  style = {{
                    margin: '10px auto',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                
                  }}
                  >

                  </div>
                      <AdSenseAd />
                </Grid>

                
              
          
                
      
                
            </Grid>
          

<div style = {{margin :'10px auto' }}>
                <EmailSubscribe/>
                </div>

             
        </div>
    );
};

export default Quiz3Homepage;
