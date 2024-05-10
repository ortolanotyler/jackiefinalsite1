import React from 'react';
import { Grid, Box, Paper } from '@mui/material';
import TextReveal from './Components/TextReveal';
import RotatingText from './Components/RotatingText';
import QuiltedImageList1 from './Components/ImageGridTutorials';
import QuoteBanner3 from './Components/QuoteBanner3';
import EmailSubscribe from './Components/EmailSubscribeField';
import PageLines from './Components/PageBreakUpLines';
import SiteExplorer from './Components/SiteExplorer';
import SuperText from './Components/supertext';
import Slider1 from './Components/aaaa';
import Quiz1 from './Components/Quiz1';
import ReviewArticleList from './Components/ReviewArticleList';
import ResponsiveIframe from './Components/ResponsiveIframe.js';
import ShopMyHero from './Components/ShopMyHero.js';
import BeigeReveal from './Components/BeigeReveal';
import VlogsHomePageVideo from './Components/VlogsHomePageVideo';
import CardContainer from './Components/CardContainer';


const MeetJackieLeft = `${process.env.PUBLIC_URL}/Images/meetjackieleft.png`;



function HomePage() {
  return (
    <Box sx={{ width: '100%', backgroundColor: '#FDFDFD' }}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <TextReveal text='JACKIE WYERS' />
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ backgroundColor: 'white', fontFamily: 'GFS Didot, serif', borderRadius: '4px', color: "#745B4F", textAlign: 'center', padding: '1rem' }}>
            <RotatingText />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <QuiltedImageList1 />
        </Grid>
        <Grid item xs={12}>
          <QuoteBanner3 />
        </Grid>
             <Grid item xs={12}>
          <EmailSubscribe />
        </Grid>
        <Grid item xs={12}>
          <PageLines />
        </Grid>

        <Grid item xs={12}>
          <SiteExplorer />
        </Grid>
        <Grid item xs={12}>
          <PageLines />
        </Grid>
        <Grid item xs={12}>
        <TextReveal text = 'MEET JACKIE' />
             </Grid>

             <Grid item xs={12}>
             <SuperText
  imageUrl={MeetJackieLeft}
/>
             </Grid>

        <Grid item xs={12}>
        <TextReveal text='LATEST TUTORIALS' />
        </Grid>
        <Grid item xs={12}>
          <Slider1 />
        </Grid>
        {/* Layout adjustment for Quiz and Reviews to be horizontal */}
        <Grid item xs={12} >
        <TextReveal text='TAKE THIS QUIZ' />

          <Quiz1 />
        </Grid>
        <Grid item xs={12}>
        <TextReveal text='LATEST REVIEWS' />

          <ReviewArticleList />
        </Grid>
        <Grid item xs={12}>
        <TextReveal text="JACKIE'S PICKS" />
          <ResponsiveIframe src="https://shopmy.us/collections/embed/91393" title="Wedding Dress Collection" />
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
          <VlogsHomePageVideo/>
        </Grid>
        <Grid item xs={12}>
          <CardContainer />
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomePage;
