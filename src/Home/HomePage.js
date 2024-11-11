import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import TextRevealHomePage from '../Components/TextRevealHomePage';
import TextBanner2 from '../Components/TextBanner2';
import RotatingText from '../Navigation/AppBar/RotatingText';
import QuiltedImageList1 from './ImageGridTutorials';
import { useMediaQuery } from '@mui/material';
import Quiz4 from '../Quiz/Quiz4';
import Quiz5 from '../Quiz/Quiz5';
import SixGridComponent from './GridSectionArticles6';
import FeaturedGrid6 from './GridSectionFeatured';
import TextReveal from '../Components/TextReveal';
import VintageVibesCards from './GridVintageVibes';
import NewsletterSlider from './NewsletterSlider';
import AdSenseAd from './Adsense'; // Import your AdSense component
import HorizontalLine from '../Components/HorizontalLine';
import TextRevealHomePage1 from '../Components/TextRevealHomePage1';
import MyStyleSlider1 from '../Shop/MyStyleSlider1';

function HomePage() {
  const isMobile = useMediaQuery('(max-width:650px)'); // Check if the screen size is mobile

  return (
    <Box sx={{ width: '100%', backgroundColor: 'white', transform: 'translateZ(0)' }}>
      <Helmet>
        <title>Jackie Wyers Beauty | Makeup Tutorials, Reviews & Travel Tips</title>
        <link rel="canonical" href="https://www.jackiewyers.beauty/" />
        <link rel="preload" as="image" href="/Images/Home/homepage1.webp" />
        <link rel="preload" as="image" href="/Images/Home/homepage2.webp" />
        <link rel="preload" as="image" href="/Images/Home/homepage4.webp" />
        <link rel="preload" as="image" href="/Images/Home/homepage5.webp" />
        <link rel="preload" as="image" href="/Images/Articles/Halloween/HalloweenThumb.jpg" />
        <meta name="description" content="Explore beauty tutorials, reviews, travel tips, makeup looks, product reviews, and style guides from Jackie Wyers." />
        <meta name="keywords" content="beauty tutorials, makeup reviews, travel tips, Jackie Wyers, beauty influencer, makeup looks, style guides, product reviews, fashion tips, skincare, hair tutorials, beauty trends, travel guides, girly style, pop culture beauty, vintage hairstyles, Jackie Wyers YouTube, beauty influencer tips, lifestyle content, beauty reviews, product recommendations, skincare tips, girly beauty trends, makeup inspiration, hair styling, beauty influencer reviews, classic beauty, retro beauty, travel vlogs, girly makeup looks, trendy makeup tutorials, period makeup, beauty and style, travel recommendations, makeup products, girly style tips, fashion advice, beauty advice, influencer travel tips, pop culture inspired beauty" />
        <meta property="og:title" content="Jackie Wyers Beauty | Makeup Tutorials, Reviews & Travel Tips" />
        <meta property="og:description" content="Discover makeup tutorials, product reviews, beauty tips, and travel guides by Jackie Wyers." />
        <meta property="og:image" content="https://www.jackiewyers.beauty/Images/jw3logo.png" />
        <meta property="og:url" content="https://www.jackiewyers.beauty/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Jackie Wyers Beauty" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jackie Wyers Beauty | Makeup Tutorials, Reviews & Travel Tips" />
        <meta name="twitter:description" content="Explore beauty tutorials, product reviews, and travel tips by Jackie Wyers." />
        <meta name="twitter:image" content="https://www.jackiewyers.beauty/Images/jw3logo.png" />
        <meta name="twitter:site" content="@JackieWyers" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Jackie Wyers Beauty",
              "url": "https://www.jackiewyers.beauty",
              "description": "Explore beauty tutorials, reviews, travel tips, makeup looks, product reviews, and style guides from Jackie Wyers.",
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

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: { xs: '0px', md: '0px' } }}>
        
        {!isMobile && (
          <>
            <TextRevealHomePage1 text="JACKIE WYERS" style={{ backgroundColor: '#fdedef', fontFamily: 'Arapey, sans-serif' }} />
            <Paper elevation={0} sx={{ backgroundColor: 'white', fontFamily: 'GFS Didot, sans-serif', borderRadius: '0px', color: '#745B4F', textAlign: 'center', marginTop: '0.01rem', padding: '0.5rem' }}>
              <RotatingText />
            </Paper>
         
          </>
        )}

        <Box sx={{ paddingTop: isMobile ? '50px' : '0px' }}>
          <QuiltedImageList1 />
        </Box>
        <div style = {{
    margin: '10px  auto  ',
    minHeight: "auto",
}}>
  <AdSenseAd />
</div>

        <TextBanner2 text="FEATURED" height="100%" width="100%" fontSize="1rem" margin=" auto" />
<HorizontalLine/>
<Grid container spacing={0} sx={{ width: '100%', padding: '10px' }}>
  <Grid item xs={12} md={6}>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0, padding: 0 }}>
      <TextReveal
        text="🩵 Male vs Female Gaze Quiz - Which one are you? 🩷" 
        style={{ backgroundColor: '#f8f8f8', width: '100%' }} 
      />
      <Quiz5 />
    </Box>
  </Grid>
  <Grid item xs={12} md={6}>
    <TextReveal 
      text="🎃 What's your Halloween Style ? 🎃" 
      style={{ backgroundColor: '#f8f8f8', width: '100%' }} 
    />
    <Quiz4 />
  </Grid>
</Grid>
<div style = {{
    margin: '10px  auto  ',
    minHeight: "auto",
}}>
  <AdSenseAd />
</div>

        <TextBanner2 text="NEW & POPULAR" height="100px" width="100%" fontSize="1rem" margin="1rem auto" />
        
        <FeaturedGrid6 />

<div style = {{
    margin: '10px  auto  ',
    minHeight: "auto",
}}>
  <AdSenseAd />
</div>

        <NewsletterSlider />

        <TextBanner2 text="TRAVEL" height="100px" width="100%" fontSize="1rem" margin="1rem auto" />
        
        <SixGridComponent />

<div style = {{
    margin: '10px  auto  ',
    minHeight: "auto",
}}>
  <AdSenseAd />
</div>

        <TextBanner2 text="VINTAGE VIBES" height="100px" width="100%" fontSize="1rem" margin="1rem auto" />
        
        <VintageVibesCards />
        <TextBanner2 text="SHOP MY STYLE" height="100px" width="100%" fontSize="1rem" margin="1rem auto" />
        
        <MyStyleSlider1 />
<div style = {{
    margin: '10px  auto  ',
    minHeight: "auto",
}}>
  <AdSenseAd />
</div>
      </Box>
    </Box>
  );
}

export default HomePage;