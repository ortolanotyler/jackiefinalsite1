import React, { useEffect, lazy, Suspense } from 'react';
import { Grid, Box, Paper, ThemeProvider, createTheme, useMediaQuery, Typography } from '@mui/material';
import { debounce } from 'lodash';
import { Helmet } from 'react-helmet';
import TextRevealHomePage from '../Components/TextRevealHomePage';

import VideoEmbed from './VideoEmbed';
import LifestyleFavorites from './LifestyleFavorites';
import ReviewFavorites1 from './ReviewFavorites';
import HeroSection2 from './HeroSection2';

// Lazy load components
const TextReveal = lazy(() => import('../Components/TextReveal'));
const QuoteBanner3 = lazy(() => import('./QuoteBanner3'));
const EmailSubscribe = lazy(() => import('../Components/EmailSubscribe'));
const RotatingText = lazy(() => import('../Navigation/AppBar/RotatingText'));
const AboutHero = lazy(() => import('./AboutHero'));
const BeyondBeautyHero = lazy(() => import('./BeyondBeautyHero'));
const ShopMyHero2 = lazy(() => import('./ShopMyHero2'));
const QuiltedImageList1 = lazy(() => import('./ImageGridTutorials'));
const HeroSection = lazy(() => import('./HeroSection'));
const ImageGrid = lazy(() => import('./ArticlesGrid'));
const LifestyleGrid = lazy(() => import('./ArticlesGrid2Lifestyle'));
const Quiz2 = lazy(() => import('../Quiz/Quiz2'));

const theme = createTheme();

function HomePage() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    logPageView();

    const handleScroll = debounce(() => {
      console.log('User scrolled');
    }, 200);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const logPageView = () => {
    if (window.gtag) {
      window.gtag('config', 'G-RT6GR7JXYG', {
        page_path: '/',
        page_title: 'Home - Jackie Wyers Beauty',
      });
    }
  };

  return (
    <Box sx={{ width: '100%', backgroundColor: 'white', transform: 'translateZ(0)' }}>
      <Helmet>
        <title>Jackie Wyers Beauty</title>
        <meta name="description" content="Explore beauty tutorials, reviews, travel tips, and more." />
        <meta name="keywords" content="beauty, tutorials, reviews, travel, Jackie Wyers, makeup, style" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RT6GR7JXYG"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RT6GR7JXYG');
          `}
        </script>

        {/* Google AdSense */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4660168246825318" crossorigin="anonymous"></script>

        {/* Preload Google Font */}
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=GFS+Didot&display=swap" as="style" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=GFS+Didot&display=swap" />

        {/* Preload Homepage CSS */}
        <link rel="preload" href="/css/HomePage.css" as="style" />
        <link rel="stylesheet" href="/css/HomePage.css" />
        <link rel="canonical" href="https://jackiewyers.beauty/" />
      </Helmet>

      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12}>
          <Suspense fallback={<div className="spinner"></div>}>
            <TextRevealHomePage text="JACKIE WYERS" />
          </Suspense>
        </Grid>

        {/* AdSense Ad Placement */}
        <Grid item xs={12}>
          <div style={{ margin: '20px' }}>
            <ins className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client="ca-pub-4660168246825318"
              data-ad-slot="1234567890" // Replace with your actual Ad slot ID
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
            <script>
              {`(adsbygoogle = window.adsbygoogle || []).push({});`}
            </script>
          </div>
        </Grid>

        {!isMobile && (
          <Grid item xs={12}>
            <Paper
              elevation={0}
              sx={{
                backgroundColor: 'white',
                fontFamily: 'GFS Didot, serif',
                borderRadius: '5px',
                color: '#745B4F',
                textAlign: 'center',
              }}
            >
              <Suspense fallback={<div className="spinner"></div>}>
                <RotatingText />
              </Suspense>
            </Paper>
          </Grid>
        )}

        {!isMobile && (
          <Grid item xs={12}>
            <Suspense fallback={<div className="spinner"></div>}>
              <QuiltedImageList1 />
            </Suspense>
          </Grid>
        )}

        {!isMobile && (
          <Grid item xs={12}>
            <Suspense fallback={<div className="spinner"></div>}>
              <QuoteBanner3 />
            </Suspense>
          </Grid>
        )}

        <Grid item xs={12}>
          <Suspense fallback={<div className="spinner"></div>}>
            <HeroSection />
          </Suspense>
        </Grid>
        <Grid item xs={12}>
          <Suspense fallback={<div className="spinner"></div>}>
            <HeroSection2 />
          </Suspense>
        </Grid>

        <Grid item xs={12}>
          <Suspense fallback={<div className="spinner"></div>}>
            <TextReveal text="BEAUTY" />
            <ImageGrid />
          </Suspense>
        </Grid>

        {/* Another AdSense Ad Placement */}
        <Grid item xs={12}>
          <div style={{ margin: '20px' }}>
            <ins className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client="ca-pub-4660168246825318"
              data-ad-slot="1234567890" // Replace with your actual Ad slot ID
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
            <script>
              {`(adsbygoogle = window.adsbygoogle || []).push({});`}
            </script>
          </div>
        </Grid>

        <Grid item xs={12}>
          <Suspense fallback={<div className="spinner"></div>}>
            <AboutHero />
          </Suspense>
        </Grid>

        <Grid item xs={12}>
          <Suspense fallback={<div className="spinner"></div>}>
            <TextReveal text="QUIZ" />
          </Suspense>
        </Grid>

        <Grid item xs={12}>
          <Suspense fallback={<div className="spinner" style={{ minHeight: '400px' }}></div>}>
            <Quiz2 />
          </Suspense>
        </Grid>

        <Grid item xs={12} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, mt: 2 }}>
          <Box sx={{ textAlign: { xs: 'center', md: 'right' }, mr: 5, mb: 2 }}>
            <a
              href="/quiz"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                fontFamily: 'GFS Didot, serif',
                color: 'black',
                textDecoration: 'none',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.25rem',
                  fontFamily: 'GFS Didot, serif',
                  color: 'black',
                }}
              >
                VIEW ALL QUIZZES
              </Typography>
              <Box component="span" sx={{ ml: 1, fontWeight: 'bold' }}>
                &rarr;
              </Box>
            </a>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Suspense fallback={<div className="spinner"></div>}>
            <TextReveal text="NEWSLETTER" />
            <EmailSubscribe />
          </Suspense>
        </Grid>

        <Grid item xs={12}>
          <Suspense fallback={<div className="spinner"></div>}>
            <TextReveal text="LATEST VIDEO" />
            <ThemeProvider theme={theme}>
              <VideoEmbed />
            </ThemeProvider>
          </Suspense>
        </Grid>

        {/* Another AdSense Ad Placement */}
        <Grid item xs={12}>
          <div style={{ margin: '20px' }}>
            <ins className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client="ca-pub-4660168246825318"
              data-ad-slot="1234567890" // Replace with your actual Ad slot ID
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
            <script>
              {`(adsbygoogle = window.adsbygoogle || []).push({});`}
            </script>
          </div>
        </Grid>

        <Grid item xs={12}>
          <Suspense fallback={<div className="spinner"></div>}>
            <ReviewFavorites1 />
          </Suspense>
        </Grid>

        <Grid item xs={12}>
          <Suspense fallback={<div className="spinner"></div>}>
            <ShopMyHero2 />
          </Suspense>
        </Grid>

        <Grid item xs={12} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, mt: 2 }}>
          <Box sx={{ textAlign: { xs: 'center', md: 'right' }, mr: 5, mb: 2 }}>
            <a
              href="/mystyle"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                fontFamily: 'GFS Didot, serif',
                color: 'black',
                textDecoration: 'none',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.25rem',
                  fontFamily: 'GFS Didot, serif',
                  color: 'black',
                }}
              >
                SHOP ALL OUTFITS
              </Typography>
              <Box component="span" sx={{ ml: 1, fontWeight: 'bold' }}>
                &rarr;
              </Box>
            </a>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Suspense fallback={<div className="spinner"></div>}>
            <TextReveal text="LIFESTYLE" />
            <BeyondBeautyHero />
            <LifestyleGrid />
          </Suspense>
        </Grid>

        <Grid item xs={12}>
          <Suspense fallback={<div className="spinner"></div>}>
            <LifestyleFavorites />
          </Suspense>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Suspense fallback={<div className="spinner"></div>}>
          <EmailSubscribe />
        </Suspense>
      </Grid>
    </Box>
  );
}

export default React.memo(HomePage);
