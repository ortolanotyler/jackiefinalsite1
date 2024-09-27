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
import TextBanner2 from '../Components/TextBanner2';

const TravelArticlesHome = () => {
    return (
        <div>
  <Helmet>
        <title>Travel - Jackie Wyers</title>
        <link rel="canonical" href="https://jackiewyers.beauty/travel" />
        <meta
          name="description"
          content="Explore travel articles and guides by Jackie Wyers. Find inspiration for your next travel destination."
        />
        <meta
          name="keywords"
          content="Jackie Wyers, travel, travel guides, travel articles, hotel reviews, itineraries, travel inspiration"
        />
        <meta property="og:title" content="Travel - Jackie Wyers" />
        <meta
          property="og:description"
          content="Explore travel articles and guides by Jackie Wyers. Find inspiration for your next travel destination."
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/Images/Travel/og-image.jpg`}
        />
        <meta property="og:url" content="https://jackiewyers.beauty/travel" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Travel - Jackie Wyers" />
        <meta
          name="twitter:description"
          content="Explore travel articles and guides by Jackie Wyers. Find inspiration for your next travel destination."
        />
        <meta
          name="twitter:image"
          content={`${process.env.PUBLIC_URL}/Images/Travel/twitter-image.jpg`}
        />
  
       
      </Helmet>

<TextReveal text="LATEST TRAVEL" />
<Grid container spacing={1} justifyContent="center"

>
<Grid item xs={12} >
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
        <HorizontalLine />
        <Grid item xs={12}>
          <Suspense fallback={<div className="spinner"></div>}>
            <HeroSection
              featureText="FEATURE"
              headlineText="Our Romantic 3-Day Rome Itinerary"
              subtext="Exploring Rome’s iconic landmarks, hidden gems, and culinary delights."
              author="BY JACKIE WYERS"
              imagePath="Rome/romethumbnail.jpg"
              linkUrl="/rome"
              isFlipped={false}
            />
          </Suspense>
        </Grid>
        

        {/* New Hero Sections for Travel Articles */}
        <Grid item xs={12}>
          <Suspense fallback={<div className="spinner"></div>}>
            <HeroSection
              featureText="FEATURE"
              headlineText="Fable Auckland | New Zealand"
              subtext="A deep dive into the luxurious Fable Auckland and its charm in the heart of New Zealand."
              author="BY JACKIE WYERS"
              imagePath="Fable/FableAucklandThumbnail.jpg"
              linkUrl="/fable"
              isFlipped={false}
            />
          </Suspense>
        </Grid>
        <HorizontalLine />

        <Grid item xs={12}>
          <Suspense fallback={<div className="spinner"></div>}>
            <HeroSection
              featureText="FEATURE"
              headlineText="Prince of Wales at Niagara on the Lake"
              subtext="Explore the historic Prince of Wales hotel and its timeless charm."
              author="BY JACKIE WYERS"
              imagePath="PrinceOfWales/PrinceOfWalesthumbnail.jpeg"
              linkUrl="/princeofwales"
              isFlipped={false}
            />
          </Suspense>
        </Grid>

        <Grid item xs={12}>
          <Suspense fallback={<div className="spinner"></div>}>
            <HeroSection
              featureText="FEATURE"
              headlineText="Andaz Maui at Mailea Resort Review"
              subtext="A luxury stay at Andaz Maui, with sun, sand, and unparalleled views."
              author="BY JACKIE WYERS"
              imagePath="AndazMaui/MAUITHUMBNAIL.jpg"
              linkUrl="/andazmaui"
              isFlipped={true}
            />
          </Suspense>
        </Grid>

        <Grid item xs={12}>
          <Suspense fallback={<div className="spinner"></div>}>
            <HeroSection
              featureText="FEATURE"
              headlineText="The Westgate Hotel Review"
              subtext="Discover the grandeur of the Westgate Hotel in downtown San Diego."
              author="BY JACKIE WYERS"
              imagePath="WestgateHotelReview/WESTGATETHUMBNAIL.jpg"
              linkUrl="/westgatesandiego"
              isFlipped={false}
            />
          </Suspense>
        </Grid>

        <Grid item xs={12}>
          <Suspense fallback={<div className="spinner"></div>}>
            <HeroSection
              featureText="FEATURE"
              headlineText="Walt Disney World Beach Club Resort Review"
              subtext="Experience the charm and luxury of the Beach Club Resort at Disney World."
              author="BY JACKIE WYERS"
              imagePath="Disney/BeachClub/BEACHCLUBTHUMBNAIL.jpg"
              linkUrl="/disneybeachclubresort"
              isFlipped={false}
            />
          </Suspense>
        </Grid>

        <Grid item xs={12}>
          <Suspense fallback={<div className="spinner"></div>}>
            <HeroSection
              featureText="FEATURE"
              headlineText="Hotel Quintessence, A Review in Mont Tremblant"
              subtext="A luxurious retreat in the heart of Mont Tremblant, perfect for a cozy getaway."
              author="BY JACKIE WYERS"
              imagePath="HotelQ/HOTELQTHUMBNAIL.jpeg"
              linkUrl="/hotelq"
              isFlipped={false}
            />
          </Suspense>
        </Grid>
      </Grid>


       
         
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
