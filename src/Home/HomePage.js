import React, { useEffect, useRef, useState } from 'react';
import { Grid, Box, Paper, Typography } from '@mui/material';
import QuiltedImageList1 from './ImageGridTutorials';
import TextReveal from '../Components/TextReveal';
import QuoteBanner3 from './QuoteBanner3';
import EmailSubscribe from '../Components/EmailSubscribe';
import SiteExplorer from './SiteExplorer';
import ReviewArticleListHome from '../ReviewsPage/ReviewArticleListHomePage';
import ShopMyHero from './ShopMyHero';
import BeigeReveal from '../Components/BeigeReveal';
import RotatingText from '../Navigation/AppBar/RotatingText';
import Quiz2 from '../Quiz/Quiz2';
import AboutHero from './AboutHero'; // Import the AboutHero component
import './AboutHero.css'; // Import the CSS file for jiggle animation
import BeyondBeautyHero from './BeyondBeautyHero';
import SiteExplorerBeyond from './SiteExplorerBeyond';
import './HomePage.css'; // Import the CSS file for jiggle animation

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
    <Box sx={{ width: '100%', backgroundColor: 'white', overflowX: 'hidden' }}>
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
        <Grid item xs={12}>
          <AboutHero /> {/* Add the AboutHero component here */}
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center">
          <Grid container item xs={12} md={8} spacing={2} justifyContent="center" alignItems="center">
            <EmailSubscribe />
          </Grid>
        </Grid>
      
        <Grid item xs={12}>
          <SiteExplorer />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="flex-end">
          <Box sx={{ textAlign: 'right', mt: -1, mr: 10 }}>
            <a
              href="/tutorials"
              ref={linkRef}
              className={isJiggling ? 'jiggle' : ''}
              style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'GFS Didot, serif', color: 'black', textDecoration: 'none' }}
            >
              <Typography variant="body1" sx={{ fontSize: '1.25rem', fontFamily: 'GFS Didot, serif', color: 'black' }}>
                VIEW ALL TUTORIALS
              </Typography>
              <Box component="span" sx={{ ml: 1, fontWeight: 'bold' }}>&rarr;</Box>
            </a>
          </Box>
        </Grid>
        <TextReveal text="LATEST BEAUTY VIDEO" style={{ backgroundColor: 'white', color: '#745B4F', fontFamily: 'GFS Didot' }} />
        <Grid item xs={12} display="flex" justifyContent="center">
          <div style={{ position: 'relative', width: '100%', maxWidth: '1500px', height: 0, margin: '2rem', paddingBottom: '56.25%', background: '#000', marginTop: '1rem' }}>
            <iframe
              src="https://www.youtube.com/embed/Uz03ReLZO9k?si=JbevAxz6Q8UcOv7U"
              title="Jackie Latest Youtube Video"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center">
          <div style={{ textAlign: 'right', marginRight: '-5rem', marginTop: '2rem', marginBottom: '5rem', width: '100%', maxWidth: '1400px', display: 'flex', justifyContent: 'flex-end' }}>
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
          <TextReveal text="JACKIE'S WEEKLY TOP 3" />
          <div style={{ width: '100%', minHeight: '1200px', marginBottom: '2rem' }}>
            <iframe
              title="Jackie's Weekly Favs"
              src="https://shopmy.us/collections/public/553108?noHeader=true"
              style={{
                marginTop: '7rem',
                width: '100%',
                minHeight: '1000px',
                border: 'none',
                overflow: 'hidden',
              }}
              className="review-favorites-iframe"
              scrolling="no"
            ></iframe>
          </div>
        </Grid>
        <Grid item xs={12}>
          <TextReveal text='PERFUME PROFILES' />
          <ReviewArticleListHome />
        </Grid>

        <Grid item xs={12}>
          <TextReveal text='SHOP MY STYLE' />
        </Grid>
        <Grid item xs={12}>
          <ShopMyHero />
        </Grid>
  
        <Grid item xs={12}>
          <BeigeReveal text='LIFESTYLE' />
        </Grid>
        <Grid item xs={12}>
          <BeyondBeautyHero />
        </Grid>
        <Grid item xs={12}>
          <SiteExplorerBeyond />
        </Grid>
        <TextReveal text="THE LATEST VLOG" style={{ backgroundColor: 'white', color: '#745B4F', fontFamily: 'GFS Didot' }} />
        <Grid item xs={12} display="flex" justifyContent="center">
          <div style={{ position: 'relative', width: '100%', maxWidth: '1500px', height: 0, margin: '2rem', paddingBottom: '56.25%', background: '#000', marginTop: '1rem' }}>
            <iframe
              src="https://www.youtube.com/embed/oYtkrfpUXBI?si=ktcb4nMK9uG0LoSQ"
              title="Jackie Latest Youtube Video"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center">
          <div style={{ textAlign: 'right', marginRight: '-5rem', marginTop: '2rem', marginBottom: '5rem', width: '100%', maxWidth: '1400px', display: 'flex', justifyContent: 'flex-end' }}>
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
          <TextReveal text="SHOP LIFESTYLE" style={{ backgroundColor: 'white', color: '#745B4F', fontFamily: 'GFS Didot' }} />
          <div style={{ width: '100%', minHeight: '1200px', marginBottom: '2rem' }}>
            <iframe
              title="Jackie's Weekly Favs"
              src="https://shopmy.us/collections/public/555260?noHeader=true"
              style={{
                marginTop: '7rem',
                width: '100%',
                minHeight: '1000px',
                border: 'none',
                overflow: 'hidden',
              }}
              className="lifestyle-favorites-iframe"
              scrolling='no'
            ></iframe>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomePage;
