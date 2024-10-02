import React from 'react';
import { Box, Paper } from '@mui/material';
import { Helmet } from 'react-helmet';
import TextRevealHomePage from '../Components/TextRevealHomePage';
import HeroSection from './HeroSection';
import TextBanner2 from '../Components/TextBanner2';
import RotatingText from '../Navigation/AppBar/RotatingText';
import ShopMyHero2 from './ShopMyHero2';
import QuiltedImageList1 from './ImageGridTutorials';
import HorizontalLine from '../Components/HorizontalLine';

function HomePage() {
  return (
    <Box sx={{ width: '100%', backgroundColor: 'white', transform: 'translateZ(0)' }}>
      <Helmet>
        <title>Jackie Wyers Beauty | Makeup Tutorials, Reviews & Travel Tips</title>
        <link rel="canonical" href="https://www.jackiewyers.beauty/" />
        <link rel="preload" as="image" href="/Images/Home/homepage1.webp" />
        <link rel="preload" as="image" href="/Images/Home/homepage2.webp" />
        <link rel="preload" as="image" href="/Images/Home/homepage4.webp" />
        <link rel="preload" as="image" href="/Images/Home/homepage5.webp" />
        <link rel="preload" as="image" href="/Images/Articles/Halloween/HalloweenThumb.jpg" />
        <meta name="description" content="Explore beauty tutorials, reviews, travel tips, makeup looks, product reviews, and style guides from Jackie Wyers." />
        <meta name="keywords" content="beauty tutorials, makeup reviews, travel tips, Jackie Wyers, beauty influencer, makeup looks, style guides, product reviews, fashion tips, skincare, hair tutorials, beauty trends, travel guides, girly style, pop culture beauty, vintage hairstyles, Jackie Wyers YouTube, beauty influencer tips, lifestyle content, beauty reviews, product recommendations, skincare tips, girly beauty trends, makeup inspiration, hair styling, beauty influencer reviews, classic beauty, retro beauty, travel vlogs, girly makeup looks, trendy makeup tutorials, period makeup, beauty and style, travel recommendations, makeup products, girly style tips, fashion advice, beauty advice, influencer travel tips, pop culture inspired beauty" />
        <meta property="og:title" content="Jackie Wyers Beauty | Makeup Tutorials, Reviews & Travel Tips" />
        <meta property="og:description" content="Discover makeup tutorials, product reviews, beauty tips, and travel guides by Jackie Wyers." />
        <meta property="og:image" content="https://www.jackiewyers.beauty/Images/jw3logo.png" />
        <meta property="og:url" content="https://www.jackiewyers.beauty/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Jackie Wyers Beauty" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jackie Wyers Beauty | Makeup Tutorials, Reviews & Travel Tips" />
        <meta name="twitter:description" content="Explore beauty tutorials, product reviews, and travel tips by Jackie Wyers." />
        <meta name="twitter:image" content="https://www.jackiewyers.beauty/Images/jw3logo.png" />
        <meta name="twitter:site" content="@JackieWyers" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Jackie Wyers Beauty",
              "url": "https://www.jackiewyers.beauty",
              "description": "Explore beauty tutorials, reviews, travel tips, makeup looks, product reviews, and style guides from Jackie Wyers.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.jackiewyers.beauty/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Jackie Wyers Beauty",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.jackiewyers.beauty/Images/jw3logo.png",
                  "width": 600,
                  "height": 60
                }
              }
            }
          `}
        </script>
      </Helmet>

      {/* Flex container for sections */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <TextRevealHomePage text="JACKIE WYERS" style={{ margin: 'auto' }} />

        <Paper elevation={0} sx={{ backgroundColor: 'white', fontFamily: 'GFS Didot, serif', color: '#745B4F', textAlign: 'center' }}>
          <RotatingText />
        </Paper>

        <QuiltedImageList1 />

        {/* Section for Featured content */}
        <TextBanner2 text="FEATURED" height="150px" width="100%" fontSize="70px" />
        <HeroSection
          featureText="FEATURED"
          headlineText="Girly Pop Culture Halloween Costume Ideas 2024🎀"
          subtext="Britney, Barbie, Bridgerton, Oh My!"
          author="September 3"
          imagePath="Halloween/HalloweenThumb.jpg"
          linkUrl="/girly-pop-halloween"
          isFlipped={false}
        />

        <div style = {{
          padding: '10px',
        }}>

          <HorizontalLine/>
        </div>

        <HeroSection
          featureText="LATEST"
          headlineText="Barbie Beauty Makeup Looks: Stunning Ways to Channel Your Inner Doll"
          subtext="Barbie Makeup Tutorial & Iconic Doll Inspiration"
          author="September 23"
          imagePath="BarbieDoll/JackieWyersBarbieThumb1.JPG"
          linkUrl="/barbie-doll"
          isFlipped={true}
        />
   <div style = {{
          padding: '10px',
        }}>

          <HorizontalLine/>
        </div>
        <HeroSection
          featureText="LATEST"
          headlineText="Top 5 Must-Have Barbie Collaborations for Adult Fans in 2024 🎀"
          subtext="The Best Barbie-Inspired Products and Collectibles Every Grown-Up Barbie Lover Needs on Their Wishlist"
          author="September 23"
          imagePath="/halloweenthumb12.jpg"
          linkUrl="/barbie-roundup"
          isFlipped={false}
        />
   <div style = {{
          padding: '10px',
        }}>

          <HorizontalLine/>
        </div>
        <HeroSection
          featureText="POP CULTURE"
          headlineText="Rory Gilmore's No-Makeup Makeup & Cozy Fall Style Guide 🧣"
          subtext="The Perfect Girl-Next-Door Makeup Routine!"
          author="September 24"
          imagePath="Homepage/rorythumbnail.webp"
          linkUrl="/articles/rory-gilmore"
          isFlipped={true}
        />
   <div style = {{
          padding: '10px',
        }}>

          <HorizontalLine/>
        </div>
        <TextBanner2 text="QUIZ" height="200px" width="100%" fontSize="80px" />
        <div style = {{
          padding: '10px',
        }}>

          <HorizontalLine/>
        </div>
        <HeroSection
          featureText="QUIZ"
          headlineText="Animal Pretty - Which one are you?"
          imagePath="Homepage/animals.webp"
          linkUrl="/quiz-2-home"
          isFlipped={true}
        />
   <div style = {{
          padding: '10px',
        }}>

          <HorizontalLine/>
        </div>
        <TextBanner2 text="LIFESTYLE" height="200px" width="100%" fontSize="80px" />
        <div style = {{
          padding: '10px',
        }}>

          <HorizontalLine/>
        </div>
        <HeroSection
          featureText="FEATURED"
          headlineText="Our Fairytale Wedding Overlooking Sorrento, Italy"
          subtext="All the enchanting details, prep & planning"
          author="July 11, 2024"
          imagePath="FairytaleWedding/fairytalethumbnail.webp"
          linkUrl="/fairytalewedding"
          isFlipped={true}
        />
   <div style = {{
          padding: '10px',
        }}>

          <HorizontalLine/>
        </div>
        <HeroSection
          featureText="TRAVEL"
          headlineText="Best of Brussels: Top Things to See, Eat, and Experience + Train To Paris!"
          subtext="Belgian Chocolate, Waffles, and A Walk Down Memory Lane"
          author="September 20"
          imagePath="Homepage/paristhumbnail-1.webp"
          linkUrl="/paris-brussels-travel-guide"
          isFlipped={false}
        />
   <div style = {{
          padding: '10px',
        }}>

          <HorizontalLine/>
        </div>
        <HeroSection
          featureText="HOW-TO : IPHONE"
          headlineText="A Guide to Scroll-Stopping iPhone Photos"
          subtext="Discover tips and tricks for capturing stunning photos on your iPhone with these camera settings and photography hacks."
          author="August 30"
          imagePath="Homepage/coverphoot.webp"
          linkUrl="/camera-settings"
          isFlipped={true}
        />
   <div style = {{
          padding: '10px',
        }}>

          <HorizontalLine/>
        </div>
        <HeroSection
          featureText="TRAVEL"
          headlineText="The Best Souvenirs to Bring Home from Sorrento"
          subtext="Leather, Music Boxes, Flats, Oh Me! Discover the top Sorrento souvenirs with Jackie Wyers."
          author="August 30"
          imagePath="Homepage/SorrentoThumbnail.webp"
          linkUrl="/sorrento"
          isFlipped={true}
        />
   <div style = {{
          padding: '10px',
        }}>

          <HorizontalLine/>
        </div>
        <HeroSection
          featureText="TRAVEL"
          headlineText="Our Three Day Romantic Getaway in Rome, Italy"
          subtext="From early morning strolls to late-night gelato runs, we made the most of every moment in this enchanting city."
          author="BY JACKIE WYERS"
          imagePath="Homepage/47.webp"
          linkUrl="/rome"
          isFlipped={true}
        />
   <div style = {{
          padding: '10px',
        }}>

          <HorizontalLine/>
        </div>
        <HeroSection
          featureText="NEW ZEALAND"
          headlineText="New Zealand | Auckland Vlog and Experience"
          subtext="Explore Jackie Wyers' travel journey in Auckland, New Zealand. From visiting Waiheke Island and the Auckland Zoo to trying local cafes."
          author="BY JACKIE WYERS"
          imagePath="Homepage/NZThumbnail.webp"
          linkUrl="/newzealand"
          isFlipped={true}
        />
   <div style = {{
          padding: '10px',
        }}>

          <HorizontalLine/>
        </div>
        <HeroSection
          featureText="PERFUME REVIEW"
          headlineText="BonBon Perfume Review"
          subtext="A celebration of self-indulgence, a fragrant ode to the joy of savoring life's sweet moments with BonBon by Viktor & Rolf."
          author="BY JACKIE WYERS"
          imagePath="BonBonReview/BonBonThumbnail.png"
          linkUrl="/bonbonreview"
          isFlipped={true}
        />
   <div style = {{
          padding: '10px',
        }}>

          <HorizontalLine/>
        </div>
        <HeroSection
          featureText="BRIDAL"
          headlineText="DIY Flower Pins for a Mamma Mia Inspired Wedding"
          subtext="Learn how to create your own DIY bridal flower pins inspired by Mamma Mia for your wedding day."
          author="BY JACKIE WYERS"
          imagePath="MammaMia/mammamiathumb.png"
          linkUrl="/diy-flowers"
          isFlipped={true}
        />
   <div style = {{
          padding: '10px',
        }}>

          <HorizontalLine/>
        </div>
        <ShopMyHero2 />
      </Box>   
    </Box>
  );
}

export default HomePage;