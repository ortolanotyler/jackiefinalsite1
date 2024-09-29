import React, { useRef, useState, useMemo } from 'react';
import { Grid, Box, Paper, createTheme, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';
import TextRevealHomePage from '../Components/TextRevealHomePage';
import HeroSection from './HeroSection';
import NewsletterSlider from '../Components/NewsletterSlider';
import TextBanner2 from '../Components/TextBanner2';
import RotatingText from '../Navigation/AppBar/RotatingText';
import ShopMyHero2 from './ShopMyHero2';
import QuiltedImageList1 from './ImageGridTutorials';

const theme = createTheme();

function HomePage() {


  return (
    <Box sx={{ width: '100%', backgroundColor: 'white', transform: 'translateZ(0)' }}>
      <Helmet>
        <title>Jackie Wyers Beauty | Makeup Tutorials, Reviews & Travel Tips</title>
        <link rel="canonical" href="https://jackiewyers.beauty/" />
        <meta
          name="description"
          content="Explore beauty tutorials, reviews, travel tips, makeup looks, product reviews, and style guides from Jackie Wyers."
        />
        <meta
          name="keywords"
          content="beauty tutorials, makeup reviews, travel tips, Jackie Wyers, beauty influencer, makeup looks, style guides, product reviews, fashion tips, skincare, hair tutorials, beauty trends, travel guides, girly style, pop culture beauty, vintage hairstyles, Jackie Wyers YouTube, beauty influencer tips, lifestyle content, beauty reviews, product recommendations, skincare tips, girly beauty trends, makeup inspiration, hair styling, beauty influencer reviews, classic beauty, retro beauty, travel vlogs, girly makeup looks, trendy makeup tutorials, period makeup, beauty and style, travel recommendations, makeup products, girly style tips, fashion advice, beauty advice, influencer travel tips, pop culture inspired beauty"
        />
        <meta property="og:title" content="Jackie Wyers Beauty | Makeup Tutorials, Reviews & Travel Tips" />
        <meta
          property="og:description"
          content="Discover makeup tutorials, product reviews, beauty tips, and travel guides by Jackie Wyers."
        />
        <meta property="og:image" content="https://jackiewyers.beauty/Images/jw3logo.png" />
        <meta property="og:url" content="https://jackiewyers.beauty/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Jackie Wyers Beauty" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jackie Wyers Beauty | Makeup Tutorials, Reviews & Travel Tips" />
        <meta
          name="twitter:description"
          content="Explore beauty tutorials, product reviews, and travel tips by Jackie Wyers."
        />
        <meta name="twitter:image" content="https://jackiewyers.beauty/Images/jw3logo.png" />
        <meta name="twitter:site" content="@JackieWyers" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RT6GR7JXYG"></script>
  
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Jackie Wyers Beauty",
              "url": "https://jackiewyers.beauty",
              "description": "Explore beauty tutorials, reviews, travel tips, makeup looks, product reviews, and style guides from Jackie Wyers.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://jackiewyers.beauty/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Jackie Wyers Beauty",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://jackiewyers.beauty/Images/jw3logo.png",
                  "width": 600,
                  "height": 60
                }
              }
            }
          `}
        </script>
      </Helmet>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <TextRevealHomePage text="JACKIE WYERS" style={{ margin: 'auto' }} />
        </Grid>

       
          <Grid item xs={12}>
            <Paper
              elevation={0}
              sx={{
                backgroundColor: 'white',
                fontFamily: 'GFS Didot, serif',
                color: '#745B4F',
                textAlign: 'center',
              }}
            >
              <RotatingText />
            </Paper>
          </Grid>
   

        <Grid item xs={12}>
          <QuiltedImageList1 />
          <Grid item xs={12}>
      

         <TextBanner2 text="FEATURED" height="150px" width="100%" fontSize="70px"/>
         
            <HeroSection
              featureText="FEATURED"
              headlineText="Girly Pop Culture Halloween Costume Ideas 2024🎀"
              subtext="Britney, Barbie, Bridgerton, Oh My!"
              author="September 3"
              imagePath="Halloween/HalloweenThumb.jpg"
              linkUrl="/girly-pop-halloween"
              isFlipped={false}
            />
          </Grid>
        </Grid>

        

        <Grid item xs={12}>
        <HeroSection
            featureText="LATEST"
            headlineText="Barbie Beauty Makeup Looks: Stunning Ways to Channel Your Inner Doll"
            subtext="Barbie Makeup Tutorial & Iconic Doll Inspiration"
            author="September 23"
            imagePath="BarbieDoll/JackieWyersBarbieThumb1.JPG"
            linkUrl="/barbie-doll"
            isFlipped={true}
          />
        </Grid>
<Grid item xs={12}>
  
<HeroSection
                featureText="LATEST"
                headlineText="Top 5 Must-Have Barbie Collaborations for Adult Fans in 2024 🎀"
                subtext="The Best Barbie-Inspired Products and Collectibles Every Grown-Up Barbie Lover Needs on Their Wishlist"
                author="September 23"
                imagePath="/halloweenthumb12.jpg"
                linkUrl="/barbie-roundup"
                isFlipped={false}
              />


</Grid>













           


<TextBanner2 text="QUIZ" height="200px" width="100%" fontSize="80px" />



        

<Grid item xs={12}>
  
  
<HeroSection
featureText="QUIZ"
headlineText="Animal Pretty - Which one are you?"
imagePath="Homepage/animals.webp"

linkUrl="/quiz-2-home"
isFlipped={true}
/>

  
</Grid>

        
          </Grid>






<Grid item xs={12} >
          
            <NewsletterSlider />

          
        </Grid>

  
     





          
<TextBanner2 text="LIFESTYLE" height="200px" width="100%" fontSize="80px" />



<Grid item xs={12}>
  
  
            <HeroSection
  featureText="FEATURED"
  headlineText="Our Fairytale Wedding Overlooking Sorrento, Italy"
  subtext="All the enchanting details, prep & planning"
  author="July 11, 2024"

  imagePath="FairytaleWedding/fairytalethumbnail.webp"
  linkUrl="/fairytalewedding"
  isFlipped={true}
/>


</Grid>





<Grid item xs={12}>
  
  
  <HeroSection
  featureText="TRAVEL"
  headlineText="Best of Brussels: Top Things to See, Eat, and Experience + Train To Paris!"
  subtext="Belgian Chocolate, Waffles, and A Walk Down Memory Lane"
  author="September 20"
  imagePath="Homepage/paristhumbnail-1.webp"
  linkUrl="/paris-brussels-travel-guide"
  isFlipped={false}
/>


</Grid>


<Grid item xs={12} md={6}>
          
         


          <HeroSection
  featureText="HOW-TO : IPHONE"
  headlineText="A Guide to Scroll-Stopping iPhone Photos"
  subtext="Discover tips and tricks for capturing stunning photos on your iPhone with these camera settings and photography hacks. Elevate your mobile photography with Jackie Wyers' guide."
  author="August 30"
  imagePath="Homepage/coverphoot.webp"
  linkUrl="/camera-settings"
  isFlipped={true}
/>

        
          
        </Grid>
        

       


        <Grid item xs={12} md={6}>
          
          <HeroSection
  featureText="TRAVEL"
  headlineText="The Best Souvenirs to Bring Home from Sorrento"
  subtext="Leather, Music Boxes, Flats, Oh Me! Discover the top Sorrento souvenirs with Jackie Wyers."
  author="August 30"
  imagePath="Homepage/SorrentoThumbnail.webp"
  linkUrl="/sorrento"
  isFlipped={true}
/>
          
        </Grid>

        

        <Grid item xs={12} md={6}>
          
         
          <HeroSection
              featureText="TRAVEL"
              headlineText="Our Three Day Romantic Getaway in Rome, Italy"
              subtext="From early morning strolls to late-night gelato runs, we made the most of every moment in this enchanting city."
              author="BY JACKIE WYERS"
              imagePath="Homepage/47.webp"
              linkUrl="/rome"
              isFlipped={true}
            />

        
          
        </Grid>
     

        
  

        <Grid item xs={12} md={6}>
          
         
     
<HeroSection
  featureText="NEW ZEALAND"
  headlineText="New Zealand | Auckland Vlog and Experience"
  subtext="Explore Jackie Wyers' travel journey in Auckland, New Zealand. From visiting Waiheke Island and the Auckland Zoo to trying local cafes, it's a magical week halfway around the world."
  author="BY JACKIE WYERS"
  imagePath="Homepage/NZThumbnail.webp"
  linkUrl="/newzealand"
  isFlipped={true}
/>
        
          
        </Grid>


        



      
       
      


 





    
        
        <Grid item xs={12} md={6}>
          
          

          <HeroSection
  featureText="PERFUME REVIEW"
  headlineText="BonBon Perfume Review"
  subtext="A celebration of self-indulgence, a fragrant ode to the joy of savoring life's sweet moments with BonBon by Viktor & Rolf."
  author="BY JACKIE WYERS"
  imagePath="BonBonReview/BonBonThumbnail.png"
  linkUrl="/bonbonreview"
  isFlipped={true}
/>
          
        </Grid>

        
    
        <Grid item xs={12} md={6}>
        
        <HeroSection
  featureText="BRIDAL"
  headlineText="DIY Flower Pins for a Mamma Mia Inspired Wedding"
  subtext="Learn how to create your own DIY bridal flower pins inspired by Mamma Mia for your wedding day. Jackie Wyers shares a step-by-step guide to make these beautiful accessories."
  author="BY JACKIE WYERS"
  imagePath="MammaMia/mammamiathumb.png"
  linkUrl="/diy-flowers"
  isFlipped={true}

/>




        </Grid>

       



        <Grid item xs={12}>
          
            <ShopMyHero2 />
          
        </Grid>

  







     
      

   



  


     
    </Box>
  );
}

export default React.memo(HomePage);