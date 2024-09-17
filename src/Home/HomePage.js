import React, { useEffect, lazy, Suspense, useRef, useState, useMemo } from 'react';
import { Grid, Box, Paper, ThemeProvider, createTheme, useMediaQuery, Typography } from '@mui/material';
import { debounce } from 'lodash';
import { Helmet } from 'react-helmet';
import { initGA, logPageView } from '../analytics';
import TextRevealHomePage from '../Components/TextRevealHomePage';

import VideoEmbed from './VideoEmbed';
import LifestyleFavorites from './LifestyleFavorites';
import ReviewFavorites1 from './ReviewFavorites';
import HeroSection from './HeroSection';
import HorizontalLine from '../Components/HorizontalLine';
import NewsletterSlider from '../Components/NewsletterSlider';

const TextReveal = lazy(() => import('../Components/TextReveal'));
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
  const quizzesRef = useRef(null);
  const outfitsRef = useRef(null);

  // Memoize the viewAllRefs object itself, not the refs inside
  const viewAllRefs = useMemo(() => ({
    quizzes: quizzesRef,
    outfits: outfitsRef,
  }), []);
  
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
            gtag('config', 'G-RT6GR7JXYG', {
              page_path: window.location.pathname,
            });
          `}
        </script>

        <link rel="preload" href="https://fonts.googleapis.com/css2?family=GFS+Didot&display=swap" as="style" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=GFS+Didot&display=swap" />
        <link rel="canonical" href="https://jackiewyers.beauty/" />
      </Helmet>

      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12}>
          <Suspense fallback={<div className="spinner"></div>}>
            <TextRevealHomePage text="JACKIE WYERS" style = {{margin:'0 auto'}} />
          </Suspense>
        </Grid>

        {!isMobile && (
          <Grid item xs={12}>
            <Paper
              elevation={0}
              sx={{
                backgroundColor: 'white',
                fontFamily: 'GFS Didot, serif',
              
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
            <HorizontalLine />
            

            <HeroSection
  featureText="FEATURED"
  headlineText="DIY Flower Pins for a Mamma Mia Inspired Wedding"
  subtext="Learn how to create your own DIY bridal flower pins inspired by Mamma Mia for your wedding day. Jackie Wyers shares a step-by-step guide to make these beautiful accessories."
  author="BY JACKIE WYERS"
  imagePath="MammaMia/mammamiathumb.png"
  linkUrl="/diy-flowers"
/>
<HorizontalLine />
            <Suspense fallback={<div className="spinner"></div>}>
              <ImageGrid />
            </Suspense>
        
          </Grid>



          
        )}


<HorizontalLine />

<Grid item xs={12} md={6}>
          <Suspense fallback={<div className="spinner"></div>}>
          <HeroSection
  featureText="VINTAGE VIBES"
  headlineText="Mastering the Bardot Bun - Jackie Wyers"
  subtext="Step into the glamorous ‘60s with Brigitte Bardot's iconic big bun! I've got you covered with my tried-and-tested techniques featuring faux bangs and more."
  author="BY JACKIE WYERS"
  imagePath="BardotHairstyles/BardotThumbnail.jpg"
  linkUrl="/bardothairstyles"
  isFlipped={true}
/>
          </Suspense>
        </Grid>


        <Grid item xs={12} md={6}>
          <Suspense fallback={<div className="spinner"></div>}>
            <HeroSection
              featureText="POP CULTURE"
              headlineText="Francesca Bridgerton Makeup, Hair, and Dress"
              subtext="From bold blush to a signature half-up half-down style similar to princess Belle, I’m breaking down all the steps."
              author="BY JACKIE WYERS"
              imagePath="Francesca/FrancescaThumb.jpg"
              linkUrl="/francesca-bridgerton"
              isFlipped={true}
            />
          </Suspense>
        </Grid>

        <HorizontalLine />


        <Grid item xs={12} md={6}>
          <Suspense fallback={<div className="spinner"></div>}>
            <HeroSection
              featureText="TRAVEL"
              headlineText="Our Three Day Romantic Getaway in Rome, Italy"
              subtext="From early morning strolls to late-night gelato runs, we made the most of every moment in this enchanting city."
              author="BY JACKIE WYERS"
              imagePath="Rome/47.jpeg"
              linkUrl="/rome"
              isFlipped={true}
            />
          </Suspense>
        </Grid>

      

        <HorizontalLine />

    

        <Grid item xs={12} md={6}>
<Suspense fallback={<div className="spinner"></div>}>
<HeroSection
  featureText="TRAVEL // ITINERARIES"
  headlineText="Fable Auckland Hotel Review"
  subtext="Join Jackie Wyers as she reviews the luxurious Fable Auckland in New Zealand. Discover the hotel's stunning views, exquisite dining, and unparalleled amenities."
  author="BY JACKIE WYERS"
  imagePath="Fable/FableAucklandThumbnail.jpg"
  linkUrl="/fable"
  isFlipped={true}
/>
          </Suspense>
        </Grid>




     

<Grid item xs={12} >
          <Suspense fallback={<div className="spinner"></div>}>
            <NewsletterSlider />

          </Suspense>
        </Grid>
        <HorizontalLine />
  

        <Grid item xs={12} md={6}>
          <Suspense fallback={<div className="spinner"></div>}>
          <HeroSection
  featureText="VINTAGE VIBES"
  headlineText="Mastering the Bardot Bun - Jackie Wyers"
  subtext="Step into the glamorous ‘60s with Brigitte Bardot's iconic big bun! I've got you covered with my tried-and-tested techniques featuring faux bangs and more."
  author="BY JACKIE WYERS"
  imagePath="BardotHairstyles/BardotThumbnail.jpg"
  linkUrl="/bardothairstyles"
  isFlipped={true}
/>
          </Suspense>
        </Grid>

        <HorizontalLine />



        

        <Grid item xs={12}>
          <Suspense fallback={<div className="spinner"></div>}>
            <ShopMyHero2 />
          </Suspense>
        </Grid>

        <HorizontalLine />

        <Grid item xs={12} md={6}>
          <Suspense fallback={<div className="spinner"></div>}>
          <HeroSection
  featureText="VINTAGE VIBES"
  headlineText="Mastering the Bardot Bun - Jackie Wyers"
  subtext="Step into the glamorous ‘60s with Brigitte Bardot's iconic big bun! I've got you covered with my tried-and-tested techniques featuring faux bangs and more."
  author="BY JACKIE WYERS"
  imagePath="BardotHairstyles/BardotThumbnail.jpg"
  linkUrl="/bardothairstyles"
  isFlipped={true}
/>
          </Suspense>
        </Grid>

        <HorizontalLine />

        <Grid item xs={12}>
          <Suspense fallback={<div className="spinner"></div>}>
            <TextReveal text="BEAUTY" />
            <ImageGrid />
          </Suspense>
        </Grid>


        <Grid item xs={12} md={6}>
        <Suspense fallback={<div className="spinner"></div>}>
        <HorizontalLine />
        <HeroSection
  featureText="POP CULTURE OBSESSED"
  headlineText="Victoria's Secret Fashion Show 2013 - Jackie Wyers"
  subtext="Relive the glamour of the Victoria's Secret Fashion Show 2013 with beauty and style tips. Discover how to achieve the Snow Angel look and explore iconic products from 2014."
  author="BY JACKIE WYERS"
  imagePath="VictoriaSecret2014/VSThumbnail.jpeg"
  linkUrl="/victoriasecret"
/>
</Suspense>
</Grid>

     

   
<Grid item xs={12} md={6}>
<Suspense fallback={<div className="spinner"></div>}>
<HeroSection
  featureText="POP CULTURE"
  headlineText="Emily in Paris Style Evolution: Makeup, Hair, and Fashion Recap"
  subtext="Explore the style evolution of Emily Cooper from Emily in Paris. Discover iconic fashion, makeup, and hair moments from the series."
  author="BY JACKIE WYERS"
  imagePath="EmilyInParis/emilyinparis.jpg"
  linkUrl="/emilyinparis"
  isFlipped={true}
/>

</Suspense>
</Grid>

<HorizontalLine />

<Grid item xs={12}>
          <Suspense fallback={<div className="spinner"></div>}>
            <TextReveal text="LIFESTYLE" />
            <BeyondBeautyHero />
            <LifestyleGrid />
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