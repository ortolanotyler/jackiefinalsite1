import React from 'react';
import { Grid, Box } from '@mui/material';
import HeroSection2a from '../../../Home/HeroSection2a';
import TextRevealHomePage from '../../../Components/TextRevealHomePage';
import DividerWithText from '../../../Home/DividerWithText';
import SmallAdSenseAd from '../../../Home/AdsenseSmall';

const PopCulture = () => {
  return (
    <>
      <TextRevealHomePage text="POP CULTURE OBSESSED" />

      <Box sx={{ width: '80%', padding: '1rem', backgroundColor: 'white', margin: '0 auto' }}>
        <Grid container spacing={1} justifyContent="center">
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
      featureText="FEATURED"
      headlineText="Taylor Swift Eras Tour Makeup: Recreate Iconic Looks from Lover to Midnights"
      imagePath="TaylorSwift3/TaylorEvermoreDressonJackie.JPG"
      linkUrl="/articles/taylor-swift-eras-tour"
      isFlipped={false}
    />
  </Box>
</Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
  <Box sx={{ height: '100%', width: '100%' , display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  
<HeroSection2a
  featureText="FEATURED"
  headlineText="r.e.m. Beauty x WICKED Collection Review: Glinda Makeup Magic"
  imagePath="Wicked3/GlindaJackieWyers.jpg"
  linkUrl="/articles/rembeauty/wicked-review"
  isFlipped={true}
/>

</Box>
</Grid>


        
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Box sx={{ height: '100%', width: '100%' , display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeroSection2a
              featureText="TAYLOR : ERAS TOUR 2024"
              headlineText="Taylor Swift Holiday Merch 2024 - Ranked!"
              imagePath="TaylorSwift/JackieWyersTaylorSwiftBetty.webp"
              linkUrl="/articles/taylor-swift-holidays-2024"
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
                featureText="WICKED"
                headlineText="Wicked Collaborations: Inspired by Ariana Grande as Glinda"
                imagePath="Wicked2/Wicked2.webp"
                linkUrl="/articles/wicked-collaborations-2024"
                isFlipped={true}
              />
            </Box>
          </Grid>
          <DividerWithText text = "Ad"/>
        <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text = "Ad"/>

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
                featureText="LATEST"
                headlineText="Dallas Cowboys Cheerleader Makeup Tutorial"
                imagePath="dcc2.jpg"
                linkUrl="/articles/dcc-cheerleader"
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
                featureText="SUMMER BEAUTY"
                headlineText="Summer Beauty Essentials: Glow Like a Mermaid"
                imagePath="SummerBeauty/BlueLagoonThumbnail.jpg"
                linkUrl="/summerbeauty"
                isFlipped={true}
              />
            </Box>
          </Grid>
          <DividerWithText text = "Ad"/>
        <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text = "Ad"/>

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
                featureText="POP CULTURE"
                headlineText="Emily in Paris Style Evolution: Iconic Outfits, Makeup, and Hair"
                imagePath="EmilyInParis/emilyinparis.jpg"
                linkUrl="/emily-in-paris"
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
                featureText="PERIOD DRAMA"
                headlineText="No-Makeup Period Dramas and Wearable Historical Hairstyles"
                imagePath="PeriodDrama/ArticleThumb.jpg"
                linkUrl="/perioddrama"
                isFlipped={true}
              />
            </Box>
          </Grid>
          <DividerWithText text = "Ad"/>
        <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text = "Ad"/>

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
                featureText="BRAID TUTORIAL"
                headlineText="Dragon Braid: Easy Pull-Through Braid Tutorial for Beginners"
                imagePath="DragonBraid/dragonbraidthumbnail.jpg"
                linkUrl="/articles/dragon-braid"
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
                featureText="SUMMER INSPIRATION"
                headlineText="Summer Inspiration 🧜"
                imagePath="SummerInspo/mermaidthumbnail.jpg"
                linkUrl="/summerinspo"
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
                featureText="BARBIE COLLABS"
                headlineText="Top 5 Must-Have Barbie Collaborations for Adult Fans in 2024"
                imagePath="BarbieRoundup/1.JPG"
                linkUrl="/barbie-roundup"
                isFlipped={true}
              />
            </Box>
          </Grid>
          <DividerWithText text = "Ad"/>
        <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text = "Ad"/>

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
                featureText="SPRING MAKEUP"
                headlineText="Spring Makeup Inspiration 🎬"
                imagePath="NoMakeUpSpring/nomakeupspringthumbnail.jpeg"
                linkUrl="/nomakeupspring"
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
                featureText="POP CULTURE"
                headlineText="Barbie Makeup Transformation 👱🏼‍♀️"
                imagePath="BarbieMovie/MARGOTBARBIETHUMBNAIL.png"
                linkUrl="/margotbarbie"
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
                featureText="LANA DEL REY"
                headlineText="SKIMS X Lana Makeup 🎀"
                imagePath="LanaXskims/LanaDelRayThumbnail.jpeg"
                linkUrl="/lanablog"
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
                featureText="BRIDGERTON"
                headlineText="Francesca Bridgerton Makeup, Hair, and Dress"
                imagePath="Francesca/FrancescaThumb.jpg"
                linkUrl="/francesca-bridgerton"
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
              featureText="FEATURED"
              headlineText="Ariana Grande as Glinda Makeup – Wicked the Movie "
              imagePath="Wicked/GlindaThumb.webp"
              linkUrl="/articles/wicked"
              isFlipped={true}
            />
            </Box>
          </Grid>
          <DividerWithText text = "Ad"/>
        <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text = "Ad"/>
         
         

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
                featureText="VICTORIA'S SECRET"
                headlineText="VS Bombshell Look 🛍️"
                imagePath="VictoriaSecret2014/VSThumbnail.jpeg"
                linkUrl="/victoriasecret"
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
                featureText="HALLOWEEN"
                headlineText="Spooky Glam: Halloween Makeup Ideas 🎃"
                imagePath="Halloween/HalloweenThumb.jpg"
                linkUrl="/girly-pop-halloween"
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
                featureText="HAIR GROWTH"
                headlineText="Hair Growth Secrets: Tips for Long, Luscious Locks"
                imagePath="Hair1/hair1.webp"
                linkUrl="/articles/hair-growth-secrets"
                isFlipped={true}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <DividerWithText text = "Ad"/>
        <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text = "Ad"/>
<DividerWithText text = "Ad"/>
        <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text = "Ad"/>
    </>
  );
};

export default PopCulture;