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
import TextBanner2 from '../Components/TextBanner2';

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
  useEffect(() => {
    initGA();              
    logPageView('/');  
  }, []);

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
  <title>Jackie Wyers Beauty | Makeup Tutorials, Reviews & Travel Tips</title>
  <meta name="description" content="Explore beauty tutorials, reviews, travel tips, makeup looks, product reviews, and style guides from Jackie Wyers." />
  <meta name="keywords" content="beauty, makeup, tutorials, product reviews, travel tips, Jackie Wyers, style, makeup looks, fashion" />

  <meta property="og:title" content="Jackie Wyers Beauty | Makeup Tutorials, Reviews & Travel Tips" />
  <meta property="og:description" content="Discover makeup tutorials, product reviews, beauty tips, and travel guides by Jackie Wyers." />
  <meta property="og:image" content="https://jackiewyers.beauty/images/jackie-og-image.jpg" />
  <meta property="og:url" content="https://jackiewyers.beauty/" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Jackie Wyers Beauty" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Jackie Wyers Beauty | Makeup Tutorials, Reviews & Travel Tips" />
  <meta name="twitter:description" content="Explore beauty tutorials, product reviews, and travel tips by Jackie Wyers." />
  <meta name="twitter:image" content="https://jackiewyers.beauty/images/jackie-twitter-image.jpg" />
  <meta name="twitter:site" content="@JackieWyers" />

  <link rel="preload" href="https://fonts.googleapis.com/css2?family=GFS+Didot&display=swap" as="style" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=GFS+Didot&display=swap" />

  <link rel="canonical" href="https://jackiewyers.beauty/" />

  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Jackie Wyers Beauty",
        "url": "https://jackiewyers.beauty",
        "description": "Explore beauty tutorials, reviews, travel tips, makeup looks, product reviews, and style guides from Jackie Wyers.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://jackiewyers.beauty/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Jackie Wyers Beauty",
          "logo": {
            "@type": "ImageObject",
            "url": "https://jackiewyers.beauty/images/logo.png",
            "width": 600,
            "height": 60
          }
        }
      }
    `}
  </script>

 
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Jackie Wyers Beauty | Makeup Tutorials, Reviews & Travel Tips",
        "image": "https://jackiewyers.beauty/images/jackie-og-image.jpg",
        "author": {
          "@type": "Person",
          "name": "Jackie Wyers"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Jackie Wyers Beauty",
          "logo": {
            "@type": "ImageObject",
            "url": "https://jackiewyers.beauty/images/logo.png"
          }
        },
        "datePublished": "2024-09-01",
        "dateModified": "2024-09-01",
        "description": "Explore beauty tutorials, product reviews, and travel tips from Jackie Wyers.",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://jackiewyers.beauty/"
        }
      }
    `}
  </script>

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
  
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4660168246825318" crossorigin="anonymous"></script>
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

       
          <Grid item xs={12}>
            <Suspense fallback={<div className="spinner"></div>}>
              <QuiltedImageList1 />
            </Suspense>
            <HorizontalLine />
            
            <HeroSection
  featureText="FEATURED"
  headlineText="Our Fairytale Wedding Overlooking Sorrento, Italy"
  subtext="All the enchanting details, prep & planning"
  author="BY JACKIE WYERS"
  imagePath="FairytaleWedding/fairytalethumbnail.webp"
  linkUrl="/fairytalewedding"
  isFlipped={false}
/>
<HorizontalLine />

           


<TextBanner2 text="BEAUTY" height="200px" width="100%" fontSize="80px" />

<HorizontalLine />


            <Suspense fallback={<div className="spinner"></div>}>
              <ImageGrid />
            </Suspense>

        <HorizontalLine />

<Grid item xs={12}>
  <Suspense fallback={<div className="spinner"></div>}>
  
<HeroSection
featureText="QUIZ"
headlineText="Animal Pretty - Which one are you?"
subtext="Explore the Animal Pretty makeup trends inspired by deer, cats, foxes, and bunnies. Learn how to achieve these adorable looks with step-by-step guides from Jackie Wyers."
author="BY JACKIE WYERS"
imagePath="AnimalPretty/animals.jpg"
linkUrl="/quiz2"
isFlipped={true}
/>
  </Suspense>
</Grid>

<HorizontalLine />
        
          </Grid>


          <HeroSection
  featureText="BRIDAL"
  headlineText="DIY Flower Pins for a Mamma Mia Inspired Wedding"
  subtext="Learn how to create your own DIY bridal flower pins inspired by Mamma Mia for your wedding day. Jackie Wyers shares a step-by-step guide to make these beautiful accessories."
  author="BY JACKIE WYERS"
  imagePath="MammaMia/mammamiathumb.png"
  linkUrl="/diy-flowers"
/>
<HorizontalLine />

<HeroSection
  featureText="DIARY"
  headlineText="Bridesmaid Boxes How-To"
  subtext="Get creative with budget-friendly bridesmaid proposal boxes featuring heartfelt gifts and whimsical touches. Learn how Jackie Wyers made her bridesmaid proposal extra special."
  author="BY JACKIE WYERS"
  imagePath="/Bridesmaids/BridesmaidBoxThumb!.jpg"
  linkUrl="/bridesmaidboxes"
  isFlipped={true}
/>

<HorizontalLine />


<HeroSection
              featureText="POP CULTURE"
              headlineText="Francesca Bridgerton Makeup, Hair, and Dress"
              subtext="From bold blush to a signature half-up half-down style similar to princess Belle, I’m breaking down all the steps."
              author="BY JACKIE WYERS"
              imagePath="Francesca/FrancescaThumb.jpg"
              linkUrl="/francesca-bridgerton"
              isFlipped={false}
            />

<HorizontalLine />


      
          
<TextBanner2 text="LIFESTYLE" height="200px" width="100%" fontSize="80px" />


<HorizontalLine />





       


        <Grid item xs={12} md={6}>
          <Suspense fallback={<div className="spinner"></div>}>
          <HeroSection
  featureText="TRAVEL"
  headlineText="The Best Souvenirs to Bring Home from Sorrento"
  subtext="Leather, Music Boxes, Flats, Oh Me! Discover the top Sorrento souvenirs with Jackie Wyers."
  author="BY JACKIE WYERS"
  imagePath="Sorrento1/SorrentoThumbnail.jpg"
  linkUrl="/sorrento-souvenirs"
  isFlipped={false}
/>
          </Suspense>
        </Grid>


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
     



        <Grid item xs={12} md={6}>
          <Suspense fallback={<div className="spinner"></div>}>
         
      
          <HeroSection
  featureText="HOW-TO : IPHONE"
  headlineText="A Guide to Scroll-Stopping iPhone Photos"
  subtext="Discover tips and tricks for capturing stunning photos on your iPhone with these camera settings and photography hacks. Elevate your mobile photography with Jackie Wyers' guide."
  author="BY JACKIE WYERS"
  imagePath="CameraSettings/coverphoot.jpg"
  linkUrl="/camera-settings"
  isFlipped={false}
/>

        
          </Suspense>
        </Grid>

        <Grid item xs={12} md={6}>
          <Suspense fallback={<div className="spinner"></div>}>
         
     
<HeroSection
  featureText="NEW ZEALAND"
  headlineText="New Zealand | Auckland Vlog and Experience"
  subtext="Explore Jackie Wyers' travel journey in Auckland, New Zealand. From visiting Waiheke Island and the Auckland Zoo to trying local cafes, it's a magical week halfway around the world."
  author="BY JACKIE WYERS"
  imagePath="NewZealand/NZThumbnail.jpg"
  linkUrl="/newzealand"
  isFlipped={true}
/>
        
          </Suspense>
        </Grid>


        



      
       

        <HorizontalLine />


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
  headlineText="Mastering the Bardot Bun"
  subtext="My Many Attempts At The Iconic 60s Style. Step into vintage beauty with Jackie Wyers' take on Brigitte Bardot's iconic hairstyles."
  author="BY JACKIE WYERS"
  imagePath="BardotHairstyles/BardotThumbnail.jpg"
  linkUrl="/bardothairstyles"
  isFlipped={false}
/>
</Suspense>
</Grid>


        <Grid item xs={12} md={6}>
          <Suspense fallback={<div className="spinner"></div>}>
          

          <HeroSection
  featureText="PERFUME REVIEW"
  headlineText="BonBon Perfume Review"
  subtext="A celebration of self-indulgence, a fragrant ode to the joy of savoring life's sweet moments with BonBon by Viktor & Rolf."
  author="BY JACKIE WYERS"
  imagePath="BonBonReview/BonBonThumbnail.png"
  linkUrl="/bonbonreview"
  isFlipped={false}
/>
          </Suspense>
        </Grid>

        <HorizontalLine />

    

      

       

        <Grid item xs={12} md={6}>
          <Suspense fallback={<div className="spinner"></div>}>
         

          <HeroSection
  featureText="POP CULTURE OBSESSED"
  headlineText="Victoria's Secret Fashion Show 2013 "
  subtext="Relive the glamour of the Victoria's Secret Fashion Show 2013 with beauty and style tips. Discover how to achieve the Snow Angel look and explore iconic products from 2014."
  author="BY JACKIE WYERS"
  imagePath="VictoriaSecret2014/VSThumbnail.jpeg"
  linkUrl="/victoriasecret"
  isFlipped={false}
/>
          </Suspense>
        </Grid>

      


        <Grid item xs={12} md={6}>
          <Suspense fallback={<div className="spinner"></div>}>
         

<HeroSection
  featureText="BRIDAL"
  headlineText="Bridal Makeup Tutorial"
  subtext="A detailed review of my wedding makeup trial run: what I loved and what I'll tweak for the big day."
  author="BY JACKIE WYERS"
  imagePath="BridalMakeup/BridalTrialMakeupThumb.jpg"
  linkUrl="/bridalmakeup"
  isFlipped={true}
/>
          </Suspense>
        </Grid>



        <Grid item xs={12}>
          <Suspense fallback={<div className="spinner"></div>}>
            <ShopMyHero2 />
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

        <HorizontalLine />


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