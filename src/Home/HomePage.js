import React, { useEffect, useRef, lazy, Suspense } from 'react';
import { Grid, Box, Paper, ThemeProvider, createTheme, useMediaQuery, Typography } from '@mui/material';
import { debounce } from 'lodash';
import TextReveal from '../Components/TextReveal';
import QuoteBanner3 from './QuoteBanner3';
import EmailSubscribe from '../Components/EmailSubscribe';
import RotatingText from '../Navigation/AppBar/RotatingText';
import AboutHero from './AboutHero';
import './AboutHero.css';
import BeyondBeautyHero from './BeyondBeautyHero';
import LifestyleFavorites from './LifestyleFavorites';
import ShopMyHero2 from './ShopMyHero2';
import { Helmet } from 'react-helmet';
import { initGA, logPageView } from '../analytics';
import QuiltedImageList1 from './ImageGridTutorials';
import ReviewFavorites1 from './ReviewFavorites';
import HeroSection from './HeroSection';
import ImageGrid from './ArticlesGrid';
import LifestyleGrid from './ArticlesGrid2Lifestyle';

// Lazy load components
const VideoEmbed = lazy(() => import('./VideoEmbed'));
const Quiz2 = lazy(() => import('../Quiz/Quiz2'));

const theme = createTheme();

function HomePage() {
  const linkRef = useRef(null);
  const videoLinkRef = useRef(null);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    initGA();
    logPageView();

    const handleScroll = debounce(() => {
      console.log('User scrolled');
    }, 200);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box sx={{ width: '100%', backgroundColor: 'white', transform: 'translateZ(0)' }}>
      <Helmet>
        <title>Jackie Wyers Beauty</title>
        <meta name="description" content="Explore beauty tutorials, reviews, travel tips, and more." />
        <meta name="keywords" content="beauty, tutorials, reviews, travel, Jackie Wyers, makeup, style" />
        {/* Add other meta tags */}
      </Helmet>

      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12}>
          <TextReveal text="JACKIE WYERS" style={{ marginBottom: '0px' }} />
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
              <RotatingText />
            </Paper>
          </Grid>
        )}

        {!isMobile && (
          <Grid item xs={12}>
            <QuiltedImageList1 />
          </Grid>
        )}
        
        {/* Hide QuoteBanner3 on mobile */}
        {!isMobile && (
          <Grid item xs={12}>
            <QuoteBanner3 />
          </Grid>
        )}

        <Grid item xs={12}>
          <HeroSection />
        </Grid>

        <Grid item xs={12}>
          <TextReveal text="BEAUTY" />
          <ImageGrid />
        </Grid>

        <Grid item xs={12}>
          <AboutHero />
        </Grid>

        <Grid item xs={12}>
          <TextReveal text="QUIZ" />
        </Grid>

        <Grid item xs={12}>
          <Suspense fallback={<div style={{ minHeight: '400px' }}>Loading quiz...</div>}>
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
          <TextReveal text="NEWSLETTER" />
        </Grid>

        <Grid item xs={12}>
          <EmailSubscribe />
        </Grid>

        <Grid item xs={12}>
          <TextReveal text="LATEST VIDEO" />
        </Grid>

        <Grid item xs={12} display="flex" justifyContent="center" sx={{ mt: 2 }}>
          <ThemeProvider theme={theme}>
            <Suspense fallback={<div style={{ minHeight: '300px' }}>Loading video...</div>}>
              <VideoEmbed />
            </Suspense>
          </ThemeProvider>
        </Grid>

        <Grid item xs={12}>
          <ReviewFavorites1 />
        </Grid>

        <Grid item xs={12}>
          <ShopMyHero2 />
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
          <TextReveal text="LIFESTYLE" />
          <Grid item xs={12}>
            <BeyondBeautyHero />
          </Grid>
          <LifestyleGrid />
        </Grid>

        <Grid item xs={12} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, mt: 2 }}>
          <Box sx={{ textAlign: { xs: 'center', md: 'right' }, mr: 5, mb: 2 }}>
            <a
              href="/travel"
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
                VIEW MORE TRAVEL POSTS
              </Typography>
              <Box component="span" sx={{ ml: 1, fontWeight: 'bold' }}>
                &rarr;
              </Box>
            </a>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <LifestyleFavorites />
        </Grid>

      </Grid>

      <Grid item xs={12}>
        <EmailSubscribe />
      </Grid>

      <Helmet>
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
    </Box>
  );
}

export default HomePage;
