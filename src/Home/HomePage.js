import React from 'react';
import { Grid, Box, Paper } from '@mui/material';
import QuiltedImageList1 from './ImageGridTutorials';
import TextReveal from '../Components/TextReveal.js';
import QuoteBanner3 from './QuoteBanner3.js';
import EmailSubscribe from '../Components/EmailSubscribe.js';
import SiteExplorer from './SiteExplorer.js';
import Slider1 from './aaaa.js';
import ReviewArticleList from '../ReviewsPage/ReviewArticleList.js';
import ResponsiveIframe from '../Components/ResponsiveIframe.js';
import ShopMyHero from './ShopMyHero.js';
import BeigeReveal from '../Components/BeigeReveal.js';
import VlogsHomePageVideo from '../Vlogs/VlogsHomePageVideo.js';
import CardContainer from './CardContainer.js';
import RotatingText from '../Navigation/AppBar/RotatingText.js';
import Quiz2 from '../Quiz/Quiz2.js';
import ReviewArticleListHome from '../ReviewsPage/ReviewArticleListHomePage.js';

function HomePage() {
  return (
    <Box sx={{ width: '100%', backgroundColor: '#FDFDFD' }}>
      <Grid container spacing={1}>
        <TextReveal text='JACKIE WYERS' />
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ backgroundColor: 'white', fontFamily: 'GFS Didot, serif', borderRadius: '4px', color: "#745B4F", textAlign: 'center', marginTop: '0.25rem', padding: '1rem' }}>
            <RotatingText />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <QuiltedImageList1 />
        </Grid>
        <Grid item xs={12}>
          <QuoteBanner3 />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center">
          <Grid container item xs={12} md={8} spacing={3} justifyContent="center" alignItems="center">
            <EmailSubscribe />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <SiteExplorer />
        </Grid>
        <Grid item xs={12}>
          <TextReveal text='WHAT KIND OF PRETTY R U ? ' />
          <Quiz2 />
        </Grid>
        <Grid item xs={12}>
          <TextReveal text='LATEST TUTORIALS' />
        </Grid>
        <Grid item xs={12}>
          <Slider1 />
        </Grid>
  
        <Grid item xs={12}>
          <TextReveal text='LATEST REVIEWS' />
          <ReviewArticleListHome />
        </Grid>
        <Grid item xs={12}>
          <TextReveal text="JACKIE'S MAKEUP BAG" />
          <ResponsiveIframe src="https://shopmy.us/collections/embed/553108" title="JACKIES MAKEUP BAG" />
        </Grid>
        <Grid item xs={12}>
          <QuoteBanner3 />
        </Grid>
        <Grid item xs={12}>
          <TextReveal text='SHOP MY STYLE' />
        </Grid>
        <Grid item xs={12}>
          <ShopMyHero />
        </Grid>
        <Grid item xs={12}>
          <BeigeReveal text='BEYOND BEAUTY' />
        </Grid>
        <Grid item xs={12}>
          <VlogsHomePageVideo />
        </Grid>
        <Grid item xs={12}>
          <CardContainer />
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomePage;

