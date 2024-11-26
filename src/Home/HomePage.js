import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import TextBanner2 from '../Components/TextBanner2';
import RotatingText from '../Navigation/AppBar/RotatingText';
import QuiltedImageList1 from './ImageGridTutorials';
import { useMediaQuery } from '@mui/material';

import SixGridComponent from './GridSectionArticles6';
import FeaturedGrid6 from './GridSectionFeatured';
import TextReveal from '../Components/TextReveal';
import VintageVibesCards from './GridVintageVibes';
import NewsletterSlider from './NewsletterSlider';
import TextRevealHomePage1 from '../Components/TextRevealHomePage1';
import MyStyleSlider1 from '../Shop/MyStyleSlider1';
import Quiz2 from '../Quiz/Quiz2';
import AdSenseAd from './Adsense';
import DividerWithText from './DividerWithText';


function HomePage() {
  const isMobile = useMediaQuery('(max-width:650px)'); // Check if the screen size is mobile

  return (
    <Box sx={{ width: '100%', backgroundColor: 'white', transform: 'translateZ(0)' }}>
    <Helmet>
  <title>Jackie Wyers Beauty | Makeup Tutorials, Reviews & Travel Tips</title>
  <link rel="canonical" href="https://www.jackiewyers.beauty/" />
  <meta
    name="description"
    content="Discover beauty tutorials, makeup reviews, travel tips, and vintage vibes by Jackie Wyers. Explore expert tips on beauty trends, pop culture looks, and girly aesthetics."
  />
  <meta
    name="keywords"
    content="beauty tutorials, makeup reviews, travel tips, Jackie Wyers, beauty influencer, makeup looks, style guides, product reviews, fashion tips, skincare, hair tutorials, beauty trends, travel guides, girly style, pop culture beauty, vintage hairstyles, Jackie Wyers YouTube, beauty influencer tips, lifestyle content, girly beauty trends, makeup inspiration, hair styling, classic beauty, retro beauty, travel vlogs, trendy makeup tutorials, beauty and style, travel recommendations, makeup products, girly style tips, pop culture inspired beauty"
  />

  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="Jackie Wyers Beauty | Makeup Tutorials, Reviews & Travel Tips" />
  <meta
    property="og:description"
    content="Discover beauty tutorials, makeup reviews, travel tips, and vintage vibes by Jackie Wyers. Explore expert tips on beauty trends, pop culture looks, and girly aesthetics."
  />
  <meta property="og:image" content="https://www.jackiewyers.beauty/Images/jw3logo.png" />
  <meta property="og:url" content="https://www.jackiewyers.beauty/" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Jackie Wyers Beauty" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Jackie Wyers Beauty | Makeup Tutorials, Reviews & Travel Tips" />
  <meta
    name="twitter:description"
    content="Discover beauty tutorials, makeup reviews, travel tips, and vintage vibes by Jackie Wyers. Explore expert tips on beauty trends, pop culture looks, and girly aesthetics."
  />
  <meta name="twitter:image" content="https://www.jackiewyers.beauty/Images/jw3logo.png" />
  <meta name="twitter:site" content="@JackieWyers" />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Jackie Wyers Beauty",
        "url": "https://www.jackiewyers.beauty",
        "description": "Discover beauty tutorials, makeup reviews, travel tips, and vintage vibes by Jackie Wyers. Explore expert tips on beauty trends, pop culture looks, and girly aesthetics.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.jackiewyers.beauty/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Jackie Wyers Beauty",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.jackiewyers.beauty/Images/jw3logo.png",
            "width": 600,
            "height": 60
          }
        }
      }
    `}
  </script>
</Helmet>
      <Box sx={{ backgroundColor: '#ffffff',display: 'flex', flexDirection: 'column', alignItems: 'center', pt: { xs: '0px', md: '0px' } }}>
        {!isMobile && (
          <>
            <TextRevealHomePage1 text="JACKIE WYERS" style={{ backgroundColor: '#fdedef', fontFamily: 'Playfair Display, serif', fontWeight: '400', fontSize: '28px' }} />
            <Paper elevation={0} sx={{ backgroundColor: '#ffffff', fontFamily: 'Playfair Display, serif', borderRadius: '0px', color: '#745B4F', textAlign: 'center', margin: '0.88rem '}}>
              <RotatingText />
            </Paper>
         
          </>
        )}

        <Box sx={{ paddingTop: isMobile ? '60px' : '0px' }}>
          <QuiltedImageList1 />
        </Box>

       

        <TextBanner2 text="FEATURED"  margin='0 0.15rem' height="100px" width="100%"  />
  
        
     
        <TextReveal
        text="🐈‍⬛🦌🐇🦊" 
        style={{ backgroundColor: '#fdedef', width: '100%', height: '70px' }} 
      />

        
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0, padding: 0 }}>

      <Quiz2 />
    </Box>

    <DividerWithText text="Ad" />
        <AdSenseAd />
        <DividerWithText text="Ad" />


    <TextReveal
        text="Animal Pretty Quiz" 
        style={{ backgroundColor: '#fdedef', width: '100%', height: '70px' }} 
      />





 


  



<TextBanner2 text="NEW & POPULAR"  margin='0 0.15rem' height="100px" width="100%"  />
        
        <FeaturedGrid6 />


        <NewsletterSlider />

       

        <TextBanner2 text="TRAVEL" height="100px" width="100%" fontSize="1rem" margin="1rem auto" />
        
        <SixGridComponent />

        

        <TextBanner2 text="VINTAGE VIBES" height="100px" width="100%" fontSize="1rem" margin="1rem auto" />
        
        <VintageVibesCards />

        <TextBanner2 text="SHOP MY STYLE" height="100px" width="100%" fontSize="1rem" margin="1rem auto" />
        
        <MyStyleSlider1 />

      </Box>
    </Box>
  );
}

export default HomePage;