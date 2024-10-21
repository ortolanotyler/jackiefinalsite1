import React from 'react';
import { Helmet } from 'react-helmet-async';
import Slider2 from './bbb';
import Slider4 from './ddd';
import Ccc from './ccc';
import { Grid, Paper, Container } from '@mui/material';
import TextReveal from '../../Components/TextReveal';
import Eeebridal from './eeebridal';
import HeroSection from '../../Home/HeroSection';
import HorizontalLine from '../../Components/HorizontalLine';
import BeautyGridComponent from '../../Home/GridSectionBeautyHome';

const HomeTutorials = () => {
  return (
    <>
     <Helmet>
  <title>Makeup Tutorials Home - Jackie Wyers</title>
  <link rel="canonical" href="https://www.jackiewyers.beauty/makeup-tutorials" />

  <meta 
    name="description" 
    content="Explore makeup tutorials from pop culture, trends, and vintage vibes by Jackie Wyers. Find inspiration and step-by-step guides for various looks, including period makeup, classic beauty, and trendy styles." 
  />
  <meta 
    name="keywords" 
    content="makeup tutorials, beauty tutorials, pop culture makeup looks, vintage makeup tutorials, period makeup, Jackie Wyers tutorials, trendy makeup looks, step-by-step makeup guides, Halloween makeup ideas, Elphaba makeup tutorial, Wicked witch makeup, Barbie makeup looks, bridal makeup tutorials, fall makeup trends, glam makeup, everyday makeup tutorials, no-makeup makeup, retro makeup styles, vintage beauty tutorials, girly makeup looks, Halloween costume makeup, iconic makeup looks, period makeup inspiration, pop culture inspired beauty" 
  />

  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="Makeup Tutorials Home - Jackie Wyers" />
  <meta 
    property="og:description" 
    content="Explore makeup tutorials from pop culture, trends, and vintage vibes by Jackie Wyers. Find inspiration and step-by-step guides for various looks, including period makeup, classic beauty, and trendy styles." 
  />
  <meta 
    property="og:image" 
    content="https://www.jackiewyers.beauty/Images/TutorialsHomePage/MakeupTutorialsThumbnail.jpg" 
  />
  <meta property="og:url" content="https://www.jackiewyers.beauty/makeup-tutorials" />
  <meta property="og:type" content="article" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:title" content="Makeup Tutorials Home - Jackie Wyers" />
  <meta 
    name="twitter:description" 
    content="Explore makeup tutorials from pop culture, trends, and vintage vibes by Jackie Wyers. Find inspiration and step-by-step guides for various looks, including period makeup, classic beauty, and trendy styles." 
  />
  <meta 
    name="twitter:image" 
    content="https://www.jackiewyers.beauty/Images/TutorialsHomePage/MakeupTutorialsThumbnail.jpg" 
  />
  <meta name="twitter:card" content="summary_large_image" />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Makeup Tutorials Home - Jackie Wyers",
        "description": "Explore makeup tutorials from pop culture, trends, and vintage vibes by Jackie Wyers. Find inspiration and step-by-step guides for various looks, including period makeup, classic beauty, and trendy styles.",
        "image": "https://www.jackiewyers.beauty/Images/TutorialsHomePage/MakeupTutorialsThumbnail.jpg",
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
        "dateModified": "2024-10-20",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.jackiewyers.beauty/makeup-tutorials"
        }
      }
    `}
  </script>

  {/* Google Analytics Script */}
  <script>
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-RT6GR7JXYG', { page_path: window.location.pathname });
    `}
  </script>
</Helmet>
      <div style = {
        {
          paddingTop : '50px',
        }
      }>
      <TextReveal text="BEAUTY" />
      </div>
      <Container maxWidth="lg">

        <BeautyGridComponent/>
   
        <Grid container spacing={1}>
          <Grid item xs={12}>
           
            <HorizontalLine />
          </Grid>

          <Grid item xs={12}>
          <HeroSection
  featureText="POP CULTURE"
  headlineText='Elphaba “The Wicked Witch of The West” Makeup Tutorial💚'
  subtext="From green smokey eyes to green skin, two WICKED looks to try for Halloween 2024"

  author="BY JACKIE WYERS"
  imagePath="Wicked/wicked2.webp"
  linkUrl="/articles/wicked-witch-of-the-west"
  isFlipped={true}
/>
<HorizontalLine />
          <HeroSection
  featureText="LATEST"
  headlineText="Barbie Beauty Makeup Looks: Stunning Ways to Channel Your Inner Doll"
  subtext="Barbie Makeup Tutorial & Iconic Doll Inspiration"
  author="BY JACKIE WYERS"
  imagePath="BarbieDoll/JackieWyersBarbieThumb.jpeg"
  linkUrl="/barbie-doll"
  isFlipped={false}
/>
<HeroSection
          featureText="LATEST"
          headlineText="Top 5 Must-Have Barbie Collaborations for Adult Fans in 2024 🎀"
          subtext="The Best Barbie-Inspired Products and Collectibles Every Grown-Up Barbie Lover Needs on Their Wishlist"
          author="September 23"
          imagePath="/halloweenthumb12.jpg"
          linkUrl="/barbie-roundup"
          isFlipped={false}
        />
            <HorizontalLine />
          </Grid>

          <Grid item xs={12}>
          <HeroSection
  featureText="FEATURED"
  headlineText="Girly Pop Culture Halloween Costume Ideas 2024🎀"
  subtext="Britney, Barbie, Bridgerton, Oh My!"
  author="BY JACKIE WYERS"
  imagePath="Halloween/HalloweenThumb.jpg"
  linkUrl="/girly-pop-halloween"
  isFlipped={true}
/>
          
          </Grid>

          <HorizontalLine />

          <Ccc />
          <TextReveal text="BRIDAL" />
          <Grid item xs={12}>
          
        
            <Eeebridal />
          </Grid>

          <Grid item xs={12}>
            <TextReveal text="MAKEUP TRENDS" />
            <Slider2 />
          </Grid>

          <Grid item xs={12}>
            <TextReveal text="VINTAGE VIBES" />
            <Slider4 />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomeTutorials;