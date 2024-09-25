import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import TextReveal from '../Components/TextReveal';
import TravelArticlesList from './TravelArticleList';
import ExperiencesList from './ExperiencesList';
import BookNowButton from '../Components/BookNowButton';
import LatestTravelGrid from '../Home/LatestTutorialGridTravel';
import { Grid } from '@mui/material';
import HeroSection from '../Home/HeroSection';
import HorizontalLine from '../Components/HorizontalLine';

const TravelArticlesHome = () => {
    return (
        <div>
        <Helmet>
    <title>Travel - Jackie Wyers</title>
    <meta name="description" content="Explore travel articles and guides by Jackie Wyers. Find inspiration for your next travel destination." />
    <meta name="keywords" content="Jackie Wyers, travel, travel guides, travel articles, hotel reviews, itineraries, travel inspiration" />
    <meta property="og:title" content="Travel - Jackie Wyers" />
    <meta property="og:description" content="Explore travel articles and guides by Jackie Wyers. Find inspiration for your next travel destination." />
    <meta property="og:image" content={`${process.env.PUBLIC_URL}/Images/Travel/og-image.jpg`} />
    <meta property="og:url" content="https://jackiewyers.beauty/travel" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Travel - Jackie Wyers" />
    <meta name="twitter:description" content="Explore travel articles and guides by Jackie Wyers. Find inspiration for your next travel destination." />
    <meta name="twitter:image" content={`${process.env.PUBLIC_URL}/Images/Travel/twitter-image.jpg`} />
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-RT6GR7JXYG"></script>
    <script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-RT6GR7JXYG');
        `}
    </script>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4660168246825318" crossorigin="anonymous"></script>
</Helmet>

<TextReveal text="LATEST TRAVEL" />
<Grid container spacing={1} justifyContent="center"

>
<Grid item xs={12} md={6}
>
          <Suspense fallback={<div className="spinner"></div>}>
          <HeroSection
  featureText="LATEST"
  headlineText="The Best Souvenirs to Bring Home from Sorrento"
  subtext="Leather, Music Boxes, Flats, Oh Me! Discover the top Sorrento souvenirs with Jackie Wyers."
  author="BY JACKIE WYERS"
  imagePath="Sorrento1/SorrentoThumbnail.jpg"
  linkUrl="/sorrento"
  isFlipped={false}
/>
          </Suspense>
        </Grid>
        <HorizontalLine/>
        <Grid item xs={12} md={6}
>
          <Suspense fallback={<div className="spinner"></div>}>
          <HeroSection
  featureText="FEATURE"
  headlineText="Our Romantic 3-Day Rome Itinerary"
  subtext="Exploring Rome’s iconic landmarks, hidden gems, and culinary delights"
  author="BY JACKIE WYERS"
  imagePath="Rome/romethumbnail.jpg"
  linkUrl="/sorrento"
  isFlipped={false}
/>
          </Suspense>
        </Grid>
        

</Grid>


            <div
                style={{
                    marginTop: '1rem',
                    marginBottom: '1rem',
                }}
            >
                   <TextReveal
                text="ITINERARIES"

                fontFamily="Italianno, cursive"
            />
            <ExperiencesList />
            <TextReveal
                    text="HOTEL REVIEWS"

                    fontFamily="Italianno, cursive"
                />
            </div>
            <div>
                <TravelArticlesList />
            </div>
         
            <TextReveal text="SAVE MONEY BOOKING WITH PLANNIN'" />
            <div style={{
                textAlign: 'center',
                margin: '1rem'
            }}>
                <BookNowButton href="https://plannin.com/en/profile/jackiewyers" target="_blank" rel="noopener noreferrer" />
            </div>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
                <a href="https://plannin.com/en/profile/jackiewyers" target="_blank" rel="noopener noreferrer">
                    <img
                        src={`${process.env.PUBLIC_URL}/Images/Travel/planninhero.jpeg`}
                        alt=""
                        style={{ width: '100%', display: 'block', boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)'}}
                    />
                </a>
            </div>
            <div>
                <TextReveal text="TRAVEL IN STYLE" />
            </div>
            <iframe
                title="Travel In Style"
                src="https://shopmy.us/collections/public/553075?noHeader=true"
                style={{ width: '100%', minHeight: '2400px', border: 'none' }}
            />
        </div>
    );
};

export default TravelArticlesHome;
