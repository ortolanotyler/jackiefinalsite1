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
import SmallAdSenseAd from './AdsenseSmall';
import AboutSection1 from '../About/AboutSection1';


function HomePage() {
  const isMobile = useMediaQuery('(max-width:700px)'); // Check if the screen size is mobile

  return (
<Box
  sx={{
    width: '100%',
    backgroundColor: '#ffffff',
    transform: 'translateZ(0)',
    overflowX: 'hidden', // Ensure no horizontal scroll
    overflowY: 'auto',   // Enable vertical scroll
  }}
>    <Helmet>
  <title>Jackie Wyers Beauty | Makeup Tutorials, Reviews & Travel Tips</title>
  <link rel="canonical" href="https://www.jackiewyers.beauty/" />
  <meta
    name="description"
    content="Discover beauty tutorials, makeup reviews, travel tips, and vintage vibes by Jackie Wyers. Explore expert tips on beauty trends, pop culture looks, and girly aesthetics."
  />
  <meta 
    name="keywords" 
    content="Jackie Wyers step-by-step makeup tutorials, Best beauty tutorials by Jackie Wyers, Jackie Wyers top-rated makeup tutorials, Jackie Wyers beauty tips and tricks, Jackie Wyers skincare routine tutorials, Jackie Wyers hair styling tutorials, Jackie Wyers natural makeup look tutorials, Jackie Wyers celebrity-inspired makeup tutorials, Jackie Wyers seasonal makeup tutorials, Jackie Wyers product reviews and recommendations, Jackie Wyers bridal makeup tutorials, Jackie Wyers everyday makeup tutorials, Jackie Wyers special occasion makeup tutorials, Jackie Wyers makeup tutorials for beginners, Jackie Wyers advanced makeup techniques, Jackie Wyers beauty hacks and tips, Jackie Wyers makeup tutorials for different skin tones, Jackie Wyers makeup tutorials for different eye shapes, Jackie Wyers makeup tutorials using drugstore products, Jackie Wyers makeup tutorials using high-end products" 
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
      <Box sx={{ backgroundColor: '#ffffff',display: 'flex', flexDirection: 'column', alignItems: 'center', pt: { xs: '0', md: '0px' } }}>
      <TextRevealHomePage1 text="JACKIE WYERS" style={{ backgroundColor: '#fdedef', fontFamily: 'Playfair Display, serif', fontWeight: '400', fontSize: '24px' }} />

        {!isMobile && (
          <>
        <Paper elevation={0} sx={{ backgroundColor: '#ffffff', fontFamily: 'Playfair Display, serif', borderRadius: '0px', color: '#745B4F', textAlign: 'center', margin: '0.88rem '}}>
              <RotatingText />
            </Paper>
         
          </>
        )}
    
        <Box sx={{ paddingTop: isMobile ? '0px' : '0px' }}>
          <QuiltedImageList1 />
        </Box>

   
        




        <TextBanner2 text="FEATURED"  margin='0 0.15rem' height="100px" width="100%"  />


<DividerWithText text = "Animal Pretty Quiz"/>
  
  <Quiz2/>



     






 


<TextBanner2 text="LATEST"  margin='0 0.15rem' height="100px" width="100%"  />


    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, padding: 0, mt: 1 }}>
  


        
        <FeaturedGrid6 />

        <DividerWithText text = "Ad"/>

<div className="ad-container">
<SmallAdSenseAd/>

</div>
<DividerWithText text = "Ad"/>

<div style = {{
  margin: '1rem auto'
}}>
  <NewsletterSlider />
</div>
<AboutSection1 />

<DividerWithText text = "Ad"/>

<div className="ad-container">
 <SmallAdSenseAd />

</div>
<DividerWithText text = "Ad"/>


        <TextBanner2 text="TRAVEL" height="100px" width="100%" fontSize="1rem" margin="1rem auto" />
        
        <SixGridComponent />
  
        <TextBanner2 text="VINTAGE VIBES" height="100px" width="100%" fontSize="1rem" margin="1rem auto" />
        
        <VintageVibesCards />

  


        <TextBanner2 text="SHOP MY STYLE" height="100px" width="100%" fontSize="1rem" margin="1rem auto" />
        
        <MyStyleSlider1 />



      </Box>
     


</Box>

<DividerWithText text = "Ad"/>

<div className="ad-container">
 <SmallAdSenseAd />

</div>
<DividerWithText text = "Ad"/>


    </Box>
  );
}

export default HomePage;