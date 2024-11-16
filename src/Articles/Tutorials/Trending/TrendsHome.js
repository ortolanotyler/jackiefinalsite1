import React from 'react';
import { Grid, Box } from '@mui/material';
import HeroSection2a from '../../../Home/HeroSection2a';
import HeroSection from '../../../Home/HeroSection';
import TextRevealHomePage from '../../../Components/TextRevealHomePage';

const TrendsHome = () => {
  return (
    <>
      <TextRevealHomePage text="TRENDING NOW" />
      <Box sx={{ width: '75%', padding: '1rem', backgroundColor: 'white', margin: '0 auto' }}>
        <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12}>
          <Box sx={{ height: '100%', width: '100%' , display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroSection
              featureText="TAYLOR : ERAS TOUR 2024"
              headlineText="Taylor Swift Holiday Merch 2024 - Ranked!"
              imagePath="TaylorSwift/JackieWyersTaylorSwiftBetty.webp"
              linkUrl="/articles/taylor-swift-holidays-2024"
              isFlipped={false}
            />
          </Box>
        </Grid>
          {/* Top 3 Most Searchable */}
          <Grid item xs={12}>
            <HeroSection
              featureText="BARBIE"
              headlineText="Margot Robbie's Barbie Makeup Transformation"
              subtext="Channel your inner doll with this stunning Barbie-inspired look."
              imagePath="BarbieMovie/MARGOTBARBIETHUMBNAIL.png"
              linkUrl="/margotbarbie"
              isFlipped={true}
            />
          </Grid>

          <Grid item xs={12}>
            <HeroSection
              featureText="VIRAL MAKEUP"
              headlineText="Viral Latte Makeup ☕️"
              subtext="Think warm, cozy fall vibes with this viral makeup trend."
              imagePath="LatteMakeup/LatteThumbnail.jpg"
              linkUrl="/latteMakeup"
              isFlipped={false}
            />
          </Grid>

          <Grid item xs={12}>
            <HeroSection
              featureText="EMILY IN PARIS"
              headlineText="Emily in Paris Style Evolution: Iconic Outfits, Makeup, and Hair"
              subtext="Explore the chic and iconic styles from Emily in Paris."
              imagePath="EmilyInParis/emilyinparis.jpg"
              linkUrl="/emily-in-paris"
              isFlipped={true}
            />
          </Grid>

          {/* Existing Articles */}
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Box
              sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <HeroSection2a
                featureText="BRIDAL"
                headlineText="Bridal Trial Makeup 💄"
                imagePath="BridalMakeup/BridalTrialMakeupThumb.jpg"
                linkUrl="/bridalmakeup"
                isFlipped={true}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Box
              sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <HeroSection2a
                featureText="ANIMAL PRETTY"
                headlineText="Find Your Animal Pretty 🐰"
                imagePath="AnimalPretty/animals.jpg"
                linkUrl="/animalpretty"
                isFlipped={false}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Box
              sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <HeroSection2a
                featureText="NOSTALGIA"
                headlineText="Nostalgic 2016 Makeup 🖤"
                imagePath="2016/2016MakeupThumbnail.jpg"
                linkUrl="/2016Makeup"
                isFlipped={true}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Box
              sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <HeroSection2a
                featureText="GLAM"
                headlineText="Sugar Plum Fairy Glam 🧚"
                imagePath="SugarPlumFairy/SUGARPLUMTHUMBNAIL.jpeg"
                linkUrl="/sugarplumfairy"
                isFlipped={true}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Box
              sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <HeroSection2a
                featureText="PAT MCGRATH"
                headlineText="Pat McGrath's Porcelain Doll 🪆"
                imagePath="PatMcGrath/JackieWyersPatMcGrath.jpeg"
                linkUrl="/patmcgrath"
                isFlipped={false}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Box
              sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <HeroSection2a
                featureText="WICKED"
                headlineText="Wicked Collaborations: Inspired by Ariana Grande as Glinda"
                imagePath="Wicked2/Wicked2.webp"
                linkUrl="/articles/wicked-collaborations-2024"
                isFlipped={true}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Box
              sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <HeroSection2a
                featureText="LANA DEL REY"
                headlineText="SKIMS X Lana Makeup 🎀"
                imagePath="LanaXskims/LanaDelRayThumbnail.jpeg"
                linkUrl="/lanablog"
                isFlipped={false}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Box
              sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <HeroSection2a
                featureText="HALLOWEEN"
                headlineText="Spooky Glam: Halloween Makeup Ideas 🎃"
                imagePath="Halloween/HalloweenThumb.jpg"
                linkUrl="/articles/halloween"
                isFlipped={true}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Box
              sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <HeroSection2a
                featureText="BARBIE COLLABS"
                headlineText="Top 5 Must-Have Barbie Collaborations for Adult Fans in 2024"
                imagePath="BarbieRoundup/1.JPG"
                linkUrl="/articles/barbiecollabs"
                isFlipped={false}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TrendsHome;