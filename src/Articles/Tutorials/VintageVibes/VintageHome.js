import React from 'react';
import { Grid, Box } from '@mui/material';
import HeroSection2a from '../../../Home/HeroSection2a';
import HeroSection from '../../../Home/HeroSection';
import TextRevealHomePage from '../../../Components/TextRevealHomePage';

const VintageVibes = () => {
  return (
    <>
      <TextRevealHomePage text="TIME TRAVEL TUTORIALS" />
      <Box sx={{ width: '80%', padding: '1rem', backgroundColor: 'white', margin: '0 auto' }}>
        <Grid container spacing={1} justifyContent="center">
          {/* Top 3 Most Searchable */}
          <Grid item xs={12}>
            <HeroSection
              featureText="GRACE KELLY"
              headlineText="Timeless Grace Kelly 💄"
              subtext="Recreate the classic Hollywood glam of Grace Kelly's signature look."
              imagePath="GraceKelly/GraceKellyJackieWyers.jpg"
              linkUrl="/gracekelly"
              isFlipped={true}
            />
          </Grid>

          <Grid item xs={12}>
            <HeroSection
              featureText="SHARON TATE"
              headlineText="Coquette Sharon Tate 👰🏼"
              subtext="Iconic '60s bridal inspiration featuring Sharon Tate's timeless style."
              imagePath="SharonTateBridal/SHARONTATEBRIDAL.jpeg"
              linkUrl="/sharontatebridal"
              isFlipped={false}
            />
          </Grid>

          <Grid item xs={12}>
            <HeroSection
              featureText="TWIGGY"
              headlineText="MOD Twiggy 🩵"
              subtext="Get the ultimate '60s Mod look inspired by Twiggy's bold eyeliner and lashes."
              imagePath="Twiggy/TwiggyMODThumbnail.jpeg"
              linkUrl="/twiggy"
              isFlipped={true}
            />
          </Grid>

          {/* New Articles from Image */}
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
                featureText="SHARON TATE"
                headlineText="Coquette Sharon Tate 👰🏼"
                imagePath="SharonTateBridal/SHARONTATEBRIDAL.jpeg"
                linkUrl="/sharontatebridal"
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
                featureText="GRACE KELLY"
                headlineText="Timeless Grace Kelly 💄"
                imagePath="GraceKelly/GraceKellyJackieWyers.jpg"
                linkUrl="/gracekelly"
                isFlipped={false}
              />
            </Box>
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
                featureText="BARDOT"
                headlineText="Mastering the Bardot Bun 🌸"
                imagePath="BardotHairstyles/BardotThumbnail.jpg"
                linkUrl="/bardothairstyles"
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
                featureText="YARDLEY 1965"
                headlineText="Jean Shrimpton 🧼 Yardley 1965"
                imagePath="JeanShrimpton/JeanShrimptonThumbnail.jpg"
                linkUrl="/yardley1965"
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
                featureText="SHARON TATE"
                headlineText="Bohemian Sharon Tate 🌼"
                imagePath="SharonTateIconic/ICONICSHARONTHUMBNAIL.jpg"
                linkUrl="/iconicsharon"
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
                featureText="BRIDESMAIDS"
                headlineText="Vintage Bridesmaids Proposal Boxes 💌"
                imagePath="Bridesmaids/BridesmaidBoxThumb!.jpg"
                linkUrl="/bridesmaidboxes"
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
                featureText="60s ICON"
                headlineText="Boho Dallas Cowboys Cheerleaders ✨"
                imagePath="/dcc2.jpg"
                linkUrl="articles/dcc-cheerleader"
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
                featureText="VINTAGE"
                headlineText="Elphaba Wicked Witch Makeup 🌟"
                imagePath="Wicked2/Wicked2.webp"
                linkUrl="/elphaba"
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
                featureText="SOPHIA LOREN"
                headlineText="Sexy Sophia Loren 🚿"
                imagePath="SophiaLoren/SophiaLorenThumbnail.jpeg"
                linkUrl="/sophialoren"
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
                featureText="60s GLAM"
                headlineText="Iconic 60's Glam 🖤"
                imagePath="Balke/BALKETHUMBNAIL.jpeg"
                linkUrl="/balkeblog"
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
                featureText="TWIGGY"
                headlineText="MOD Twiggy 🩵"
                imagePath="Twiggy/TwiggyMODThumbnail.jpeg"
                linkUrl="/twiggy"
                isFlipped={true}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default VintageVibes;