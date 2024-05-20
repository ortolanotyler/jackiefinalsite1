import React, { useEffect, useRef, useState } from 'react';
import { Grid, Box, Paper } from '@mui/material';
import QuiltedImageList1 from './ImageGridTutorials';
import TextReveal from '../Components/TextReveal';
import QuoteBanner3 from './QuoteBanner3';
import EmailSubscribe from '../Components/EmailSubscribe';
import SiteExplorer from './SiteExplorer';
import Slider1 from './aaaa'; // Correct import
import ReviewArticleListHome from '../ReviewsPage/ReviewArticleListHomePage';
import ResponsiveIframe from '../Components/ResponsiveIframe';
import ShopMyHero from './ShopMyHero';
import BeigeReveal from '../Components/BeigeReveal';
import VlogsHomePageVideo from '../Vlogs/VlogsHomePageVideo';
import CardContainer from './CardContainer';
import RotatingText from '../Navigation/AppBar/RotatingText';
import Quiz2 from '../Quiz/Quiz2';
import AboutHero from './AboutHero'; // Import the AboutHero component
import './AboutHero.css'; // Import the CSS file for jiggle animation

function HomePage() {
  const linkRef = useRef(null);
  const [isJiggling, setIsJiggling] = useState(false);

  useEffect(() => {
    const currentLinkRef = linkRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsJiggling(true);
          setTimeout(() => {
            setIsJiggling(false);
          }, 4000); // Stop jiggling after 4 seconds
        }
      },
      {
        threshold: 0.1, // Adjust this value as needed
      }
    );

    if (currentLinkRef) {
      observer.observe(currentLinkRef);
    }

    return () => {
      if (currentLinkRef) {
        observer.unobserve(currentLinkRef);
      }
    };
  }, []);

  return (
    <Box sx={{ width: '100%', backgroundColor: '#FDFDFD' }}>
      <Grid container spacing={1}>
        <TextReveal text='JACKIE WYERS' />
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ backgroundColor: 'white', fontFamily: 'GFS Didot, serif', borderRadius: '4px', color: '#745B4F', textAlign: 'center', marginTop: '0.25rem', padding: '1rem' }}>
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
          <AboutHero /> {/* Add the AboutHero component here */}
        </Grid>
        <Grid item xs={12}>
          <SiteExplorer />
        </Grid>
        <TextReveal text="LATEST BEAUTY VIDEO" style={{ backgroundColor: 'white', color: '#745B4F', fontFamily: 'GFS Didot' }} />
        <Grid item xs={12} display="flex" justifyContent="center">
          <div style={{ position: 'relative', width: '100%', maxWidth: '1100px', height: 0, paddingBottom: '33.75%', background: '#000', marginTop: '1rem' }}>
            <iframe
              src="https://www.youtube.com/embed/Uz03ReLZO9k?si=JbevAxz6Q8UcOv7U"
              title="Sharon Tate Iconic 60's Bridal Makeup Tutorial"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center">
          <div style={{ textAlign: 'right', marginTop: '2rem', marginBottom:'5rem', width: '100%', maxWidth: '1100px', display: 'flex', justifyContent: 'flex-end' }}>
            <a
              href="/victoriasecret"
              ref={linkRef}
              className={isJiggling ? 'jiggle' : ''}
              style={{ color: 'black', textDecoration: 'none', fontFamily: 'GFS Didot', fontSize: '1.25rem' }}
            >
              READ FULL ARTICLE HERE &rarr;
            </a>
          </div>
        </Grid>

        <Grid item xs={12}>
          <TextReveal text="🐰 🦌  FIND YOUR ANIMAL FACE TYPE  🐈‍⬛ 🦊" />
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
