import React, { useEffect, useRef, useState } from 'react';
import { Grid, Box, Paper, Typography, ThemeProvider, createTheme } from '@mui/material';
import QuiltedImageList1 from './ImageGridTutorials';
import TextReveal from '../Components/TextReveal';
import QuoteBanner3 from './QuoteBanner3';
import EmailSubscribe from '../Components/EmailSubscribe';
import SiteExplorer from './SiteExplorer';
import RotatingText from '../Navigation/AppBar/RotatingText';
import AboutHero from './AboutHero';
import './AboutHero.css';
import ReviewFavorites from './ReviewFavorites';
import BeyondBeautyHero from './BeyondBeautyHero';
import SiteExplorerBeyond from './SiteExplorerBeyond';
import LifestyleFavorites from './LifestyleFavorites';
import ShopMyHero2 from './ShopMyHero2';
import { Helmet } from 'react-helmet';
import VideoEmbed from './VideoEmbed';
import { initGA, logPageView } from '../analytics';
import AdSenseAd from '../Advertising/Ads';
import Quiz3 from '../Quiz/Quiz3';

const theme = createTheme();

function HomePage() {
  const linkRef = useRef(null);
  const videoLinkRef = useRef(null);
  const [isJiggling, setIsJiggling] = useState(false);
  const [isVideoJiggling, setIsVideoJiggling] = useState(false);

  useEffect(() => {
    initGA();
    logPageView();

    const currentLinkRef = linkRef.current;
    const currentVideoLinkRef = videoLinkRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsJiggling(true);
          setTimeout(() => {
            setIsJiggling(false);
          }, 4000);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const videoObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoJiggling(true);
          setTimeout(() => {
            setIsVideoJiggling(false);
          }, 4000);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (currentLinkRef) {
      observer.observe(currentLinkRef);
    }

    if (currentVideoLinkRef) {
      videoObserver.observe(currentVideoLinkRef);
    }

    return () => {
      if (currentLinkRef) {
        observer.unobserve(currentLinkRef);
      }
      if (currentVideoLinkRef) {
        videoObserver.unobserve(currentVideoLinkRef);
      }
    };
  }, []);

  return (
    <Box sx={{ width: '100%', backgroundColor: 'white' }}>
     <Helmet>
  <title>Jackie Wyers Beauty</title>
  <meta name="description" content="Explore beauty tutorials, reviews, travel tips, and more." />
  <meta name="keywords" content="beauty, tutorials, reviews, travel, Jackie Wyers, makeup, style" />
  <meta property="og:title" content="Jackie Wyers Beauty" />
  <meta property="og:description" content="Explore beauty tutorials, reviews, travel tips, and more." />
  <meta property="og:image" content="https://jackiewyers.beauty/logo.png" />
  <meta property="og:url" content="https://jackiewyers.beauty" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Jackie Wyers Beauty" />
  <meta name="twitter:description" content="Explore beauty tutorials, reviews, travel tips, and more." />
  <meta name="twitter:image" content="https://jackiewyers.beauty/logo.png" />
  <script type="application/ld+json">
    {`
    {
      "@context": "http://schema.org",
      "@type": "WebPage",
      "name": "Jackie Wyers Beauty",
      "description": "Explore beauty tutorials, reviews, travel tips, and more.",
      "publisher": {
        "@type": "Organization",
        "name": "Jackie Wyers Beauty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://jackiewyers.beauty/logo.png"
        }
      },
      "image": "https://jackiewyers.beauty/logo.png",
      "url": "https://jackiewyers.beauty"
    }
    `}
  </script>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-RT6GR7JXYG"></script>
  <script>
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-RT6GR7JXYG');
    `}
  </script>
</Helmet>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <TextReveal text='JACKIE WYERS' />
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={5} sx={{ backgroundColor: 'white', fontFamily: 'GFS Didot, serif', borderRadius: '4px', color: '#745B4F', textAlign: 'center' }}>
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
          <AboutHero />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center">
          <div
            style={{
              padding: '2rem',
              margin: '1rem',
            }}
          >
            <EmailSubscribe />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div
            style={{
              padding: '2rem',
            }}
          >
            <SiteExplorer />
          </div>
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="flex-end">
          <Box sx={{ textAlign: 'right', mt: -1, mr: 10 }}>
            <a
              href="/tutorials"
              ref={linkRef}
              className={isJiggling ? 'jiggle' : ''}
              style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'GFS Didot, serif', color: 'black', textDecoration: 'none' }}
            >
              <Typography variant="body1" sx={{ fontSize: '1rem', fontFamily: 'GFS Didot, serif', color: 'black' }}>
                VIEW ALL TUTORIALS
              </Typography>
              <Box component="span" sx={{ ml: 1, fontWeight: 'bold' }}>&rarr;</Box>
            </a>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <TextReveal text="LATEST VIDEO" />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center" sx={{ mt: 2 }}>
          <ThemeProvider theme={theme}>
            <VideoEmbed />
          </ThemeProvider>
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="flex-end">
          <Box sx={{ textAlign: 'right', mt: -1, mr: 10 }}>
            <a
              href="/videos"
              ref={videoLinkRef}
              className={isVideoJiggling ? 'jiggle' : ''}
              style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'GFS Didot, serif', color: 'black', textDecoration: 'none' }}
            >
              <Typography variant="body1" sx={{ marginTop: '10px', fontSize: '1rem', fontFamily: 'GFS Didot, serif', color: 'black' }}>
                VIEW ALL VIDEOS
              </Typography>
              <Box component="span" sx={{ ml: 1, fontWeight: 'bold' }}>&rarr;</Box>
            </a>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <TextReveal text="JACKIE'S WEEKLY TOP 3" />
          <ReviewFavorites />
        </Grid>
        <Grid item xs={12}>
          <TextReveal text="THE ULTIMATE 2025 WEDDING DRESS QUIZ" style={{ backgroundColor: 'white' }} />
          <Quiz3 />
        </Grid>
        <Grid item xs={12}>
          <TextReveal text='SHOP MY STYLE' />
        </Grid>
        <Grid item xs={12}>
          <ShopMyHero2 />
        </Grid>
        <Grid item xs={12}>
          <TextReveal text='LIFESTYLE' />
        </Grid>
        <Grid item xs={12}>
          <BeyondBeautyHero />
        </Grid>
        <Grid item xs={12}>
          <SiteExplorerBeyond />
        </Grid>
        <Grid item xs={12}>
          <TextReveal text='TRAVEL IN STYLE' />
        </Grid>
        <Grid item xs={12}>
          <LifestyleFavorites />
        </Grid>
        <Grid item xs={12}>
          <div
            style={{
              padding: '2rem',
              marginBottom: '1rem',
            }}
          >
            <EmailSubscribe />
          </div>
        </Grid>
        <AdSenseAd/>
      </Grid>
    </Box>
  );
}

export default HomePage;
