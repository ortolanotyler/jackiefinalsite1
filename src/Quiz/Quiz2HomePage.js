import React from "react";
import { Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import TextReveal from "../Components/TextReveal";
import EmailSubscribe2 from "../Components/EmailSubscribe2";
import AdSenseAd from "../Home/Adsense";
import Quiz2 from "./Quiz2";
import DividerWithText from "../Home/DividerWithText";

const Quiz2Homepage = () => {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#ffffff", transform: "translateZ(0)", margin: '0 auto' }}>
  <Helmet>
  <title>What Type of Pretty Are You? Animal Edition!</title>
  <link rel="canonical" href="https://www.jackiewyers.beauty/animal-pretty-quiz" />

  <meta 
    name="description" 
    content="Explore the legendary Animal Pretty Quiz and find out what type of pretty you are, with fun new quizzes added weekly by Jackie Wyers!" 
  />
  <meta 
    name="keywords" 
    content="what animal pretty am i, what animal pretty, animal pretty quiz, animal beauty quiz, animal pretty face, beauty quiz, animal pretty calculator, makeup quiz, Jackie Wyers quizzes, trending beauty quizzes, personality quiz, animal pretty type, fun beauty quizzes 2024, Jackie Wyers animal edition, makeup personality test, beauty personality quiz, creative quizzes, viral quizzes 2024" 
  />

  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="What Type of Pretty Are You? Animal Edition!" />
  <meta 
    property="og:description" 
    content="Explore the legendary Animal Pretty Calculator and find out what type of pretty you are, with fun new quizzes added weekly by Jackie Wyers!" 
  />
  <meta 
    property="og:image" 
    content="https://www.jackiewyers.beauty/Images/.jpg" 
  />
  <meta property="og:url" content="https://www.jackiewyers.beauty/animal-pretty-quiz" />
  <meta property="og:type" content="article" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:title" content="What Type of Pretty Are You? Animal Edition!" />
  <meta 
    name="twitter:description" 
    content="Explore the legendary Animal Pretty Calculator and find out what type of pretty you are, with fun new quizzes added weekly by Jackie Wyers!" 
  />
  <meta 
    name="twitter:image" 
    content="https://www.jackiewyers.beauty/logo.png" 
  />
  <meta name="twitter:card" content="summary_large_image" />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "What Type of Pretty Are You? Animal Edition!",
        "description": "Explore the legendary Animal Pretty Calculator and find out what type of pretty you are, with fun new quizzes added weekly by Jackie Wyers!",
        "image": "https://www.jackiewyers.beauty/Images/Quizzes/AnimalPrettyQuizThumbnail.jpg",
        "author": {
          "@type": "Person",
          "name": "Jackie Wyers"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Jackie Wyers Beauty",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.jackiewyers.beauty/logo.png"
          }
        },
        "datePublished": "2024-12-06",
        "dateModified": "2024-12-06",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.jackiewyers.beauty/animal-pretty-quiz"
        }
      }
    `}
  </script>

  {/* Google Analytics */}
  <script>
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-RT6GR7JXYG', { page_path: window.location.pathname });
    `}
  </script>
</Helmet>

   
        {/* Quiz Content */}

        <TextReveal text="Animal Pretty Quiz" style={{ backgroundColor: "#ffffff", width: "100%", paddingTop: '20px'}} />
     <div style = {{
      margin: '0 auto',
     }}>
        < Quiz2 />

        </div>
    
      <DividerWithText text = "Ad"/>


      <div className="ad-container">
  <AdSenseAd />
</div>
<DividerWithText text = "Ad"/>


      {/* Email Subscription */}
      <Box sx={{ width: "100%", textAlign: "center", padding: "10px" }}>
        <EmailSubscribe2 />
      </Box>
      <DividerWithText text = "Ad"/>


      <div className="ad-container">
  <AdSenseAd />
</div>
<DividerWithText text = "Ad"/>


    </Box>
  );
};

export default Quiz2Homepage;