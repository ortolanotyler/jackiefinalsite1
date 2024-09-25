import React from 'react';
import { Helmet } from 'react-helmet';
import Slider2 from './bbb';
import Slider4 from './ddd';
import Ccc from './ccc';
import { Grid, Paper, Container } from '@mui/material';
import TextReveal from '../../Components/TextReveal';
import Eeebridal from './eeebridal';
import HeroSection from '../../Home/HeroSection';
import HorizontalLine from '../../Components/HorizontalLine';

const HomeTutorials = () => {
  return (
    <>
      <Helmet>
        <title>Makeup Tutorials Home - Jackie Wyers</title>
        <meta 
          name="description" 
          content="Explore makeup tutorials from pop culture, trends, and vintage vibes by Jackie Wyers. Find inspiration and step-by-step guides for various looks." 
        />
      </Helmet>
      <TextReveal text="POP CULTURE" />
      <Container maxWidth="lg">
   
        <Grid container spacing={4}>
          <Grid item xs={12}>
           
            <HorizontalLine />
          </Grid>

          <Grid item xs={12}>
          <HeroSection
  featureText="LATEST"
  headlineText="Barbie Beauty Makeup Looks: Stunning Ways to Channel Your Inner Doll"
  subtext="Barbie Makeup Tutorial & Iconic Doll Inspiration"
  author="BY JACKIE WYERS"
  imagePath="BarbieDoll/JackieWyersBarbieThumb.jpeg"
  linkUrl="/barbie-doll"
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

      

          <Grid item xs={12}>
            <Ccc />
            <TextReveal text="BRIDAL" />
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