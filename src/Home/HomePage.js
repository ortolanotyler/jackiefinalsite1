import React from 'react';
import { Box, Paper } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import TextRevealHomePage from '../Components/TextRevealHomePage';
import TextBanner2 from '../Components/TextBanner2';
import RotatingText from '../Navigation/AppBar/RotatingText';
import QuiltedImageList1 from './ImageGridTutorials';
import { useMediaQuery } from '@mui/material';
import Quiz4 from '../Quiz/Quiz4';
import SixGridComponent from './GridSectionArticles6';
import FeaturedGrid6 from './GridSectionFeatured';
import TextReveal from '../Components/TextReveal';
import Grid3Across1 from './Grid3Across1';
import VintageVibesCards from './GridVintageVibes';
import NewsletterSlider from './NewsletterSlider';
import AdSenseAd from './Adsense'; // Import your AdSense component

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

      {/* Flex container for sections */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: { xs: '0px', md: '0px' } }}>
        
        {/* Conditionally show TextRevealHomePage on larger screens */}
        {!isMobile && (
          <>
            <TextReveal text="JACKIE WYERS" style={{ backgroundColor: '#fdedef' }} />
            <Paper elevation={0} sx={{ backgroundColor: 'white', fontFamily: 'GFS Didot, sans-serif', borderRadius: '0px', color: '#745B4F', textAlign: 'center', marginTop: '0.01rem', padding: '0.5rem' }}>
              <RotatingText />
            </Paper>
          </>
        )}

  

        <div style={{ paddingTop: isMobile ? '50px' : '0px' }}>
          <QuiltedImageList1 />
        </div>

       
        <TextBanner2 text="FEATURE" height="100%" width="100%" fontSize="1rem" margin="1rem auto" />
  
=
<Grid3Across1 />
        <TextBanner2 text="NEW & POPULAR" height="100px" width="100%" fontSize="1rem" margin="1rem auto" />

    

        {/* AdSense ad after a grid section */}
  

        <FeaturedGrid6 />

        {/* AdSense ad before the Newsletter section */}
        <AdSenseAd />

        <NewsletterSlider />

        <TextBanner2 text="TRAVEL" height="100px" width="100%" fontSize="1rem" margin="1rem auto" />
        <SixGridComponent />

        {/* AdSense ad between travel and vintage sections */}
        <AdSenseAd />

        <TextBanner2 text="VINTAGE VIBES" height="100px" width="100%" fontSize="1rem" margin="1rem auto" />
        <VintageVibesCards />

        {/* Optional final AdSense ad at the bottom */}
        <AdSenseAd />
        <AdSenseAd />
      </Box>
    </Box>
  );
}

export default HomePage;