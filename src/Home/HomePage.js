import React from 'react';
import { Grid, Box, Paper } from '@mui/material';
import QuiltedImageList1 from './ImageGridTutorials';

import TextReveal from '../Components/TextReveal.js';
import QuoteBanner3 from './QuoteBanner3.js';
import EmailSubscribe from '../Components/EmailSubscribe.js';
import PageLines from '../Components/PageBreakUpLines.js';
import SiteExplorer from './SiteExplorer.js';
import SuperText from './supertext.js';
import Slider1 from './aaaa.js';
import Quiz1 from '../Quiz/Quiz1.js';
import ReviewArticleList from '../ReviewsPage/ReviewArticleList.js';
import ResponsiveIframe from '../Components/ResponsiveIframe.js';
import ShopMyHero from './ShopMyHero.js';
import BeigeReveal from '../Components/BeigeReveal.js';
import VlogsHomePageVideo from '../Vlogs/VlogsHomePageVideo.js';
import CardContainer from './CardContainer.js';


const MeetJackieLeft = `${process.env.PUBLIC_URL}/Images/meetjackieleft.png`;



function HomePage() {
  return (
    <Box sx={{ width: '100%', backgroundColor: '#FDFDFD' }}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <TextReveal text='JACKIE WYERS' />
        </Grid>
        <Grid item xs={12}>

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
