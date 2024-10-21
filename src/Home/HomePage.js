import React from 'react';
import { Box, Button, Grid, Paper } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import TextRevealHomePage from '../Components/TextRevealHomePage';
import HeroSection from './HeroSection';
import TextBanner2 from '../Components/TextBanner2';
import RotatingText from '../Navigation/AppBar/RotatingText';
import QuiltedImageList1 from './ImageGridTutorials';
import HorizontalLine from '../Components/HorizontalLine';
import { useMediaQuery } from '@mui/material';
import AdSenseAd from './Adsense';
import SubscribeButton from '../Components/SubscribeButton';
import NewsletterSlider from '../Components/NewsletterSlider';
import Quiz4 from '../Quiz/Quiz4';
import SixGridComponent from './GridSectionArticles6';
import TextBanner2pink from '../Components/TextBanner2pink';



function HomePage() {
  const isMobile = useMediaQuery('(max-width:600px)'); // Check if the screen size is mobile


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
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', pt: { xs: '0px', md: '0px' } }}>
        {/* Conditionally show TextRevealHomePage on larger screens */}
        {!isMobile && (
          <TextBanner2pink text="JACKIE WYERS" style={{ paddingTop: '100px' , backgroundColor: '#fdedef'}} />
        )}
   {!isMobile && (
 <Paper elevation={0} sx={{ backgroundColor: 'white', fontFamily: 'GFS Didot, sans-serif', color: '#745B4F', textAlign: 'center' }}>
 <RotatingText />
</Paper>        )}

<div style={{ marginTop: isMobile ? '50px' : '0px' }}>
  
          <QuiltedImageList1 />
        </div>




        <div
style = {{textAlign: 'center' , padding: '10px'}}
>
<SubscribeButton/>
</div>
<HorizontalLine/>
<div style={{ margin: '10px auto' }}>
          <AdSenseAd />
        </div>
<TextBanner2 text="FEATURED" height="150px" width="100%" fontSize="80px" />
<HorizontalLine/>

  


<TextRevealHomePage text="HALLOWEEN COSTUME QUIZ" height="125px" width="100" fontSize="1rem" />

        <Quiz4 />

       



        <div style={{ margin: '10px auto' }}>
          <AdSenseAd />
        </div>
<div>
<HorizontalLine/>

<TextBanner2 text="NEW & POPULAR" height="100px" width="100%" fontSize="20px" />

<HorizontalLine/>

</div>

       

<HeroSection
          featureText="QUIZ"
          headlineText="Animal Pretty - Which one are you?"
          imagePath="Homepage/animals.webp"
          linkUrl="/quiz-2-home"
          isFlipped={true}
        />

<HorizontalLine/>

<div style={{ margin: '10px auto' }}>
          <AdSenseAd />
        </div>
        <HeroSection
  featureText="POP CULTURE"
  headlineText='Elphaba “The Wicked Witch of The West” Makeup Tutorial💚'
  subtext="From green smokey eyes to green skin, two WICKED looks to try for Halloween 2024"

  author="BY JACKIE WYERS"
  imagePath="Wicked/wicked2.webp"
  linkUrl="/articles/wicked-witch-of-the-west"
  isFlipped={false}
/>

<NewsletterSlider/>

<div style={{ margin: '10px auto' }}>
          <AdSenseAd />
        </div>            <HorizontalLine/>

    <HeroSection
  featureText="FEATURED"
  headlineText="Ariana Grande as Glinda Makeup Tutorial – Wicked the Movie 🎀"
  subtext="Channel Your Inner Good Witch with Pink Glam Fit for a Bubbly Girl!"
  author="October 11"
  imagePath="Wicked/GlindaThumb.webp"
  linkUrl="/articles/wicked"
  isFlipped={true}
/>
        <HeroSection
          featureText="HALLOWEEN"
          headlineText="Girly Pop Culture Halloween Costume Ideas 2024🎀"
          subtext="Britney, Barbie, Bridgerton, Oh My!"
          author="September 3"
          imagePath="Halloween/HalloweenThumb.jpg"
          linkUrl="/girly-pop-halloween"
          isFlipped={false}
        />

<div style={{ margin: '10px auto' }}>
          <AdSenseAd />
        </div>
        <HeroSection
          featureText="LATEST"
          headlineText="Barbie Beauty Makeup Looks: Stunning Ways to Channel Your Inner Doll"
          subtext="Barbie Makeup Tutorial & Iconic Doll Inspiration"
          author="September 23"
          imagePath="BarbieDoll/JackieWyersBarbieThumb1.JPG"
          linkUrl="/barbie-doll"
          isFlipped={true}
        />
   
   <div style = {{
          padding: '10px',
        }}>

          <HorizontalLine/>
        </div>

        <HeroSection
          featureText="LATEST"
          headlineText="Top 5 Must-Have Barbie Collaborations for Adult Fans in 2024 🎀"
          subtext="The Best Barbie-Inspired Products and Collectibles Every Grown-Up Barbie Lover Needs on Their Wishlist"
          author="September 23"
          imagePath="/halloweenthumb12.jpg"
          linkUrl="/barbie-roundup"
          isFlipped={false}
        />
 <div style={{ margin: '10px auto' }}>
          <AdSenseAd />
        </div>   <div style = {{
          padding: '10px',
        }}>

          <HorizontalLine/>

        </div>
        <HeroSection
          featureText="POP CULTURE"
          headlineText="Rory Gilmore's No-Makeup Makeup & Cozy Fall Style Guide 🧣"
          subtext="The Perfect Girl-Next-Door Makeup Routine!"
          author="September 24"
          imagePath="Homepage/rorythumbnail.webp"
          linkUrl="/articles/rory-gilmore"
          isFlipped={true}
        />
   <div style = {{
          padding: '10px',
        }}>

          <HorizontalLine/>
        </div>
     
     
 <div style={{ margin: '10px auto' }}>
          <AdSenseAd />
        </div>
 
        <TextBanner2 text="LIFESTYLE" height="100px" width="100%" fontSize="60px" />
        <div style = {{
          padding: '10px',
        }}>

          <HorizontalLine/>
        </div>
        <AdSenseAd/>

        <Box>
       <SixGridComponent/>
       </Box>
       <AdSenseAd/>

        {/* Rest of the page content */}
        <HorizontalLine />
        <div style={{ padding: '10px' }}>
          <HorizontalLine />
        </div>

      </Box>
    </Box>
  );
}

export default HomePage;