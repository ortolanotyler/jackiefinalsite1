import React, { useEffect, lazy, Suspense, useRef, useState } from 'react';
import { Grid, Box, Paper, ThemeProvider, createTheme, useMediaQuery, Typography } from '@mui/material';
import { debounce } from 'lodash';
import { Helmet } from 'react-helmet';
import { initGA, logPageView } from '../analytics';
import TextRevealHomePage from '../Components/TextRevealHomePage';

import VideoEmbed from './VideoEmbed';
import LifestyleFavorites from './LifestyleFavorites';
import ReviewFavorites1 from './ReviewFavorites';
import HeroSection2 from './HeroSection2';
import HeroSection3 from './HeroSection3';
import HeroSection from './HeroSection';
import NewsletterSection from './NewsletterSection';

const TextReveal = lazy(() => import('../Components/TextReveal'));
const QuoteBanner3 = lazy(() => import('./QuoteBanner3'));
const EmailSubscribe = lazy(() => import('../Components/EmailSubscribe'));
const RotatingText = lazy(() => import('../Navigation/AppBar/RotatingText'));
const AboutHero = lazy(() => import('./AboutHero'));
const BeyondBeautyHero = lazy(() => import('./BeyondBeautyHero'));
const ShopMyHero2 = lazy(() => import('./ShopMyHero2'));
const QuiltedImageList1 = lazy(() => import('./ImageGridTutorials'));
const ImageGrid = lazy(() => import('./ArticlesGrid'));
const LifestyleGrid = lazy(() => import('./ArticlesGrid2Lifestyle'));
const Quiz2 = lazy(() => import('../Quiz/Quiz2'));

const theme = createTheme();

function HomePage() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const viewAllRefs = {
    quizzes: useRef(null),
    outfits: useRef(null),
  };

  const [isJiggling, setIsJiggling] = useState({
    quizzes: false,
    outfits: false,
  });

  useEffect(() => {
    const handleScroll = debounce(() => {
      console.log('User scrolled');
    }, 200);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const keyframes = `
      @keyframes jiggle {
        0% { transform: rotate(0deg); }
        25% { transform: rotate(-3deg); }
        50% { transform: rotate(3deg); }
        75% { transform: rotate(-3deg); }
        100% { transform: rotate(0deg); }
      }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);

    const observers = {};

    Object.keys(viewAllRefs).forEach((key) => {
      observers[key] = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsJiggling((prev) => ({ ...prev, [key]: true }));
            setTimeout(() => {
              setIsJiggling((prev) => ({ ...prev, [key]: false }));
            }, 4000); // Stop jiggling after 4 seconds
          }
        },
        {
          threshold: 0.1,
        }
      );

      if (viewAllRefs[key].current) {
        observers[key].observe(viewAllRefs[key].current);
      }
    });

    return () => {
      Object.keys(observers).forEach((key) => {
        if (viewAllRefs[key].current) {
          observers[key].unobserve(viewAllRefs[key].current);
        }
      });
    };
  }, [viewAllRefs]);

  return (
    <Box sx={{ width: '100%', backgroundColor: 'white', transform: 'translateZ(0)' }}>
      <Helmet>
        <title>Jackie Wyers Beauty</title>
        <meta name="description" content="Explore beauty tutorials, reviews, travel tips, and more." />
        <meta name="keywords" content="beauty, tutorials, reviews, travel, Jackie Wyers, makeup, style" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RT6GR7JXYG"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RT6GR7JXYG');
          `}
        </script>

        <link rel="preload" href="https://fonts.googleapis.com/css2?family=GFS+Didot&display=swap" as="style" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=GFS+Didot&display=swap" />
        <link rel="preload" href="/css/HomePage.css" as="style" />
        <link rel="stylesheet" href="/css/HomePage.css" />
        <link rel="canonical" href="https://jackiewyers.beauty/" />
      </Helmet>

      <Grid container spacing={0} justifyContent="center">
        <Grid item xs={12}>
          <Suspense fallback={<div className="spinner"></div>}>
            <TextRevealHomePage text="JACKIE WYERS" />
          </Suspense>
        </Grid>

        {!isMobile && (
          <Grid item xs={12}>
            <Paper
              elevation={0}
              sx={{
                backgroundColor: 'white',
                fontFamily: 'GFS Didot, serif',
                borderRadius: '20px',
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
            <HeroSection3 />
          </Suspense>
        </Grid>

        <Grid item xs={12}>
          <Suspense fallback={<div className="spinner"></div>}>
            <TextReveal text="BEAUTY" />
            <ImageGrid />
          </Suspense>
        </Grid>

        <Grid item xs={12}>
          <Suspense fallback={<div className="spinner"></div>}>
            <AboutHero />
          </Suspense>
        </Grid>

        <Grid item xs={12}>
          <Suspense fallback={<div className="spinner"></div>}>
            <TextReveal text="QUIZ" />
            <Quiz2 />
          </Suspense>
        </Grid>

        <Grid item xs={12} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, mt: 2 }}>
          <Box sx={{ textAlign: { xs: 'center', md: 'right' }, mr: 5, mb: 2 }}>
            <a
              href="/quiz"
              ref={viewAllRefs.quizzes}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                fontFamily: 'GFS Didot, serif',
                color: 'black',
                textDecoration: 'none',
                animation: isJiggling.quizzes ? 'jiggle 0.5s ease-in-out' : 'none',
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
    <NewsletterSection />
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
              ref={viewAllRefs.outfits}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                fontFamily: 'GFS Didot, serif',
                color: 'black',
                textDecoration: 'none',
                animation: isJiggling.outfits ? 'jiggle 0.5s ease-in-out' : 'none',
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
