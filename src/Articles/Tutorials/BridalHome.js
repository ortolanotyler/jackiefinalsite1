import React from 'react';
import { Helmet } from 'react-helmet-async';

import TextReveal from '../../Components/TextReveal';
import Eeebridal from './eeebridal';
import DividerWithText from '../../Home/DividerWithText';
import SmallAdSenseAd from '../../Home/AdsenseSmall';

const BridalHome = () => {
  return (
    <>
  <Helmet>
  <title>Bridal Inspiration - Jackie Wyers</title>
  <link rel="canonical" href="https://www.jackiewyers.beauty/bridal" />

  <meta 
    name="description" 
    content="Explore timeless bridal inspiration with Jackie Wyers, featuring makeup tutorials, vintage styles, and dreamy aesthetics for your big day." 
  />
  <meta 
    name="keywords" 
    content="Bridal Inspiration, Wedding Makeup Tutorials, Jackie Wyers Bridal, Vintage Bridal Looks, Pop Culture Bridal Makeup, Step-by-Step Wedding Guides, Bridal Beauty Trends, Romantic Wedding Aesthetics, Timeless Bridal Styles, Wedding Inspiration Blog, Jackie Wyers Beauty, Bridal Hair and Makeup" 
  />

  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="Bridal Inspiration - Jackie Wyers" />
  <meta 
    property="og:description" 
    content="Explore timeless bridal inspiration with Jackie Wyers, featuring makeup tutorials, vintage styles, and dreamy aesthetics for your big day." 
  />
  <meta 
    property="og:image" 
    content="https://www.jackiewyers.beauty/Images/logo.png" 
  />
  <meta property="og:url" content="https://www.jackiewyers.beauty/bridal" />
  <meta property="og:type" content="article" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:title" content="Bridal Inspiration - Jackie Wyers" />
  <meta 
    name="twitter:description" 
    content="Explore timeless bridal inspiration with Jackie Wyers, featuring makeup tutorials, vintage styles, and dreamy aesthetics for your big day." 
  />
  <meta 
    name="twitter:image" 
    content="https://www.jackiewyers.beauty/Images/Bridal/BridalInspirationThumbnail.jpg" 
  />
  <meta name="twitter:card" content="summary_large_image" />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Bridal Inspiration - Jackie Wyers",
        "description": "Explore timeless bridal inspiration with Jackie Wyers, featuring makeup tutorials, vintage styles, and dreamy aesthetics for your big day.",
        "image": "https://www.jackiewyers.beauty/Images/Bridal/BridalInspirationThumbnail.jpg",
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
        "datePublished": "2024-12-08",
        "dateModified": "2024-12-08",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.jackiewyers.beauty/bridal"
        }
      }
    `}
  </script>
</Helmet>
      <div>
     
        <TextReveal text='BRIDAL' />
        <Eeebridal />
        <DividerWithText text = "Ad"/>
        <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text = "Ad"/>
      </div>
    </>
  );
};

export default BridalHome;