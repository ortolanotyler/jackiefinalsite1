import React from 'react';
import { Grid } from '@mui/material';

import { Helmet } from 'react-helmet-async';
import EmailSubscribe from '../Components/EmailSubscribe';
import Quiz4 from './Quiz4';import TextReveal from '../Components/TextReveal';
import AdSenseAd from '../Home/Adsense';

const Quiz4Homepage = () => {
    return (
        <div>
             <Helmet>
  <title>What's Your Halloween Style? 🎃 - Jackie Wyers' Quiz</title>
  <link rel="canonical" href="https://www.jackiewyers.beauty/quiz-3-homepage" />

  <meta name="description" content="Discover your Halloween style with Jackie Wyers' interactive quiz! Are you spooky, glamorous, or classic? Find the perfect look for your next Halloween event." />
  <meta name="keywords" content="Halloween quiz, Halloween style, spooky costume quiz, glam Halloween look, Jackie Wyers quiz, makeup for Halloween, Halloween makeup styles, Halloween costumes, beauty quiz, Halloween trends 2024, find your Halloween look" />

  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="What's Your Halloween Style? 🎃 - Jackie Wyers' Quiz" />
  <meta property="og:description" content="Find out your perfect Halloween style with Jackie Wyers' interactive quiz! Get personalized costume and makeup ideas for your Halloween 2024 look." />
  <meta property="og:image" content="https://www.jackiewyers.beauty/Images/Articles/Halloween/HalloweenThumb.jpg" />
  <meta property="og:url" content="https://www.jackiewyers.beauty/quiz-3-homepage" />
  <meta property="og:type" content="article" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:title" content="What's Your Halloween Style? 🎃 - Jackie Wyers' Quiz" />
  <meta name="twitter:description" content="Discover your perfect Halloween style with Jackie Wyers' interactive quiz. Whether you're spooky or glamorous, get inspired for your 2024 Halloween look!" />
  <meta name="twitter:image" content="https://www.jackiewyers.beauty/Images/Articles/Halloween/HalloweenThumb.jpg" />
  <meta name="twitter:card" content="summary_large_image" />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "headline": "What's Your Halloween Style? 🎃 - Jackie Wyers' Quiz",
        "description": "Discover your Halloween style with Jackie Wyers' interactive quiz! Are you spooky, glamorous, or classic? Find the perfect look for your next Halloween event.",
        "image": "https://www.jackiewyers.beauty/Images/Articles/Halloween/HalloweenThumb.jpg",
        "author": {
          "@type": "Person",
          "name": "Jackie Wyers"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Jackie Wyers Beauty",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.jackiewyers.beauty/logo.png"
          }
        },
        "datePublished": "2024-10-20",
        "dateModified": "2024-10-21",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.jackiewyers.beauty/quiz-3-homepage"
        }
      }
    `}
  </script>

  {/* Google Analytics Script */}
  <script>
    {`
      gtag('config', 'G-RT6GR7JXYG', {
        page_path: window.location.pathname
      });
    `}
  </script>
</Helmet>
      <Grid container justifyContent="center"
            style = {{paddingTop: '10px'}}
            >
           <TextReveal text= "WHAT'S YOUR HALLOWEEN STYLE?"/>
                
            
        
               
                <Grid item xs={12}>
                    <Quiz4 />
                </Grid>

                <Grid item xs={12}>
                    <AdSenseAd />
                </Grid>
                <Grid item xs={12}>
                    <AdSenseAd />
                </Grid>

          
             
           
           

           

                
              
          
                
      
                
            </Grid>
          

<div style = {{margin :'1rem auto' }}>
                <EmailSubscribe/>
                </div>
                <Grid item xs={12}>
                    <AdSenseAd />
                </Grid>
                <Grid item xs={12}>
                    <AdSenseAd />
                </Grid>
                <Grid item xs={12}>
                    <AdSenseAd />
                </Grid>
                

             
        </div>
    );
};

export default Quiz4Homepage;
