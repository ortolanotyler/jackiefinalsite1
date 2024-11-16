import React from 'react';
import { Grid, Box } from '@mui/material';
import TextRevealHomePage from '../../Components/TextRevealHomePage';
import HeroSection2a from '../../Home/HeroSection2a';
import HeroSection from '../../Home/HeroSection';

const HomeTutorials = () => {
  return (
    <>
      <TextRevealHomePage text="BEAUTY" />
      <Box sx={{ width: '80%', padding: '1rem', backgroundColor: 'white', margin: '0 auto' }}>
        <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12}>
            <HeroSection
              featureText="DALLAS COWBOYS"
              headlineText="Boho Dallas Cowboys Cheerleaders ✨"
              subtext="Recreate the iconic cheerleader look with a boho twist!"
              imagePath="/dcc2.jpg"
              linkUrl="/articles/dcc-cheerleader"
              isFlipped={false}
            />
          </Grid>
          {/* Top 5 Most Searchable as HeroSections */}
          <Grid item xs={12}>
            <HeroSection
              featureText="POP CULTURE"
              headlineText="Elphaba “The Wicked Witch of The West” Makeup Tutorial💚"
              subtext="From green smokey eyes to green skin, two WICKED looks to try for Halloween 2024"
              imagePath="Wicked2/Wicked2.webp"
              linkUrl="/articles/wicked-witch-of-the-west"
              isFlipped={true}
            />
          </Grid>

          <Grid item xs={12}>
            <HeroSection
              featureText="LATEST"
              headlineText="Barbie Beauty Makeup Looks: Stunning Ways to Channel Your Inner Doll"
              subtext="Barbie Makeup Tutorial & Iconic Doll Inspiration"
              imagePath="BarbieDoll/JackieWyersBarbieThumb.jpeg"
              linkUrl="/barbie-doll"
              isFlipped={false}
            />
          </Grid>


      
         

          {/* Remaining Articles as HeroSection2a */}
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <HeroSection2a
              featureText="BARBIE COLLABS"
              headlineText="Top 5 Must-Have Barbie Collaborations for Adult Fans in 2024"
              imagePath="BarbieRoundup/1.JPG"
              linkUrl="/articles/barbiecollabs"
              isFlipped={false}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <HeroSection2a
              featureText="SUMMER BEAUTY"
              headlineText="Summer Beauty Essentials: Glow Like a Mermaid"
              imagePath="SummerBeauty/BlueLagoonThumbnail.jpg"
              linkUrl="/summerbeauty"
              isFlipped={true}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <HeroSection2a
              featureText="EMILY IN PARIS"
              headlineText="Emily in Paris Style Evolution: Iconic Outfits, Makeup, and Hair"
              imagePath="EmilyInParis/emilyinparis.jpg"
              linkUrl="/emily-in-paris"
              isFlipped={false}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <HeroSection2a
              featureText="BRAID TUTORIAL"
              headlineText="Dragon Braid: Easy Pull-Through Braid Tutorial for Beginners"
              imagePath="DragonBraid/dragonbraidthumbnail.jpg"
              linkUrl="/articles/dragon-braid"
              isFlipped={true}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <HeroSection2a
              featureText="GRACE KELLY"
              headlineText="Timeless Grace Kelly Inspired Look"
              imagePath="GraceKelly/GraceKellyJackieWyers.jpg"
              linkUrl="/gracekelly"
              isFlipped={false}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <HeroSection2a
              featureText="TWIGGY"
              headlineText="MOD Twiggy 🩵"
              imagePath="Twiggy/TwiggyMODThumbnail.jpeg"
              linkUrl="/twiggy"
              isFlipped={true}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <HeroSection2a
              featureText="SOPHIA LOREN"
              headlineText="Sophia Loren-Inspired Bridal Makeup"
              imagePath="SophiaLoren/SophiaLorenThumbnail.jpeg"
              linkUrl="/sophialoren"
              isFlipped={false}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <HeroSection2a
              featureText="HAIR GROWTH"
              headlineText="Hair Growth Secrets: Tips for Long, Luscious Locks"
              imagePath="Hair1/hair1.webp"
              linkUrl="/articles/hair-growth-secrets"
              isFlipped={true}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <HeroSection2a
              featureText="PAT MCGRATH"
              headlineText="Pat McGrath's Porcelain Doll 🪆"
              imagePath="PatMcGrath/JackieWyersPatMcGrath.jpeg"
              linkUrl="/patmcgrath"
              isFlipped={false}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <HeroSection2a
              featureText="SHARON TATE"
              headlineText="Bohemian Sharon Tate 🌼"
              imagePath="SharonTateIconic/ICONICSHARONTHUMBNAIL.jpg"
              linkUrl="/iconicsharon"
              isFlipped={true}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <HeroSection2a
              featureText="60s GLAM"
              headlineText="Iconic 60's Glam 🖤"
              imagePath="Balke/BALKETHUMBNAIL.jpeg"
              linkUrl="/balkeblog"
              isFlipped={false}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HomeTutorials;