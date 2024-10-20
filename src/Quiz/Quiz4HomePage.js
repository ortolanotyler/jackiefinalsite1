import React from 'react';
import { Grid } from '@mui/material';

import { Helmet } from 'react-helmet-async';
import EmailSubscribe from '../Components/EmailSubscribe';
import Quiz4 from './Quiz4';import TextReveal from '../Components/TextReveal';
import AdSenseAd from '../Home/Adsense';
import HorizontalLine from '../Components/HorizontalLine';

const Quiz4Homepage = () => {
    return (
        <div>
             <Helmet>
  <title>Halloween Costume Ideas 2024 - Take the quiz now!</title>
  <link rel="canonical" href="https://www.jackiewyers.beauty/quiz-3-homepage" />

  <meta name="description" content="Discover your Halloween style with Jackie Wyers' interactive quiz! Are you spooky, glamorous, or classic? Find the perfect look for your next Halloween event." />
  <meta name="keywords" content="Halloween quiz, Halloween style quiz, 2024 Halloween costume ideas, Halloween makeup ideas, spooky Halloween costumes, glam Halloween looks, classic Halloween costumes, Jackie Wyers quiz, beauty quiz for Halloween, personalized Halloween style quiz, Halloween trends 2024, best Halloween costume ideas, find your Halloween style, interactive Halloween quiz, pop culture Halloween costumes, girly Halloween costumes, celebrity Halloween looks, iconic Halloween outfits, DIY Halloween makeup tutorials, spooky season costume quiz, unique Halloween costume ideas, best Halloween costumes for women, trendy Halloween costumes, Disney princess Halloween costume, sexy Halloween costumes, witch costume ideas, vintage Halloween style, makeup trends Halloween 2024, Halloween makeup inspiration, Halloween party outfit ideas, fairy tale Halloween costumes, period drama Halloween costumes, Halloween quiz for girls, gothic Halloween makeup, cute Halloween looks, spooky glam makeup, easy Halloween costume quiz, Halloween outfits for women, 2024 spooky costume quiz, ultimate Halloween quiz, chic Halloween makeup, top Halloween quiz, Instagram-worthy Halloween costumes, makeup tutorials for Halloween, Halloween hair ideas, DIY Halloween costume inspiration, themed Halloween costumes, nostalgic Halloween looks, Halloween character quiz, best makeup for Halloween, Halloween costume predictions 2024" />
  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="Halloween Costume Ideas Quiz, Halloween Costume Ideas 2024 - Take the quiz now!" />
  <meta property="og:description" content="Find out your perfect Halloween style with Jackie Wyers' interactive quiz! Get personalized costume and makeup ideas for your Halloween 2024 look." />
  <meta property="og:image" content="https://www.jackiewyers.beauty/Images/Articles/Halloween/HalloweenThumb.jpg" />
  <meta property="og:url" content="https://www.jackiewyers.beauty/quiz-3-homepage" />
  <meta property="og:type" content="article" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:title" content="Halloween Costume Ideas 2024 - Take the quiz now!" />
  <meta name="twitter:description" content="Discover your perfect Halloween style with Jackie Wyers' interactive quiz. Whether you're spooky or glamorous, get inspired for your 2024 Halloween look!" />
  <meta name="twitter:image" content="https://www.jackiewyers.beauty/Images/Articles/Halloween/HalloweenThumb.jpg" />
  <meta name="twitter:card" content="summary_large_image" />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "headline": "Halloween Costume Ideas 2024 - Take the quiz now!",
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
                
            
           <HorizontalLine/>

               
                <Grid item xs={12}>
                    <Quiz4 />
                </Grid>
                <HorizontalLine/>

                <Grid item xs={12}>
                    <AdSenseAd />
                </Grid>
                <HorizontalLine/>

                <Grid item xs={12}>
                    <AdSenseAd />
                </Grid>

          
             
           
           

           

                
              
          <HorizontalLine/>
                
      
                
            </Grid>
          


                <Grid item xs={12}>
                    <AdSenseAd />
                </Grid>
                <HorizontalLine/>

                <Grid item xs={12}>
                    <AdSenseAd />
                </Grid>
                <HorizontalLine/>

                <Grid item xs={12}>
                    <AdSenseAd />
                </Grid>
                <HorizontalLine/>


             
        </div>
    );
};

export default Quiz4Homepage;
