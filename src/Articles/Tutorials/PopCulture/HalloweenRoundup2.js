import React, { useRef } from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import { Helmet } from 'react-helmet-async';
import ArticleTitle from '../../../Components/ArticleTitle';
import SocialShare from '../../../Home/SocialShare';
import NextArticle from '../../../Components/NextArticleComponent';
import DropCap1 from '../../Travel/DropCap1';
import { Card } from '@mui/material';

const HalloweenRoundup2 = () => {
  const blogRef = useRef(null);

  const headingStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: '100',
    fontFamily: "'Playfair Display', sans-serif",
    color: '#000000',
    maxWidth: '95%',
    margin: '30px auto'
  };
  
  const paragraphStyle = {
    fontSize: '20px',
    color: '#000000',
    fontFamily: "'Playfair Display', sans-serif",
    fontWeight: '100',
    padding: '10px',
    margin: '10px auto',
    lineHeight: '1.6',
  };
  
  const captionStyle = {
    textAlign: 'center',
    fontSize: '1rem',
    fontFamily: 'Arapey, sans-serif',
    fontWeight: '100',
    margin: '0 auto',
    fontStyle: 'italic',
  };

  const blogContent = (
    <div className="container">
      <Helmet>
        <title>Iconic Pop Culture Halloween Makeup Inspirations, Edgy Edition 🖤</title>
        <link rel="canonical" href="https://www.jackiewyers.beauty/articles/halloween-roundup" />
        <meta name="description" content="Explore iconic Barbie makeup looks with Jackie Wyers. Step-by-step tutorials inspired by Peaches ‘N Cream, Roller Skate, Malibu Barbie, and more for a vintage and modern twist." />
        <meta name="keywords" content="Barbie makeup, Halloween makeup, Jackie Wyers, makeup tutorials, pop culture makeup" />
      </Helmet>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <a href="/popculture" style={{ fontFamily: 'Arapey, sans-serif', fontSize: '1rem', color: '#000000', textDecoration: 'none' }}>
          BEAUTY // POP CULTURE
        </a>
      </div>

      <ArticleTitle
        mainTitle="Iconic Pop Culture Halloween Makeup Inspirations, Edgy Edition 🖤"
        subTitle="October 19th, 2024"
        author="Jackie Wyers"
        publishDate="October 19th, 2024"
      />
  
      <SocialShare 
        url="https://www.jackiewyers.beauty/articles/halloween-roundup" 
        title="Iconic Pop Culture Halloween Makeup Inspirations, Edgy Edition 🖤" 
        imageUrl="https://www.jackiewyers.beauty/Images/Articles/Halloween/HalloweenThumbnail.png" 
      />

      <img 
        src="https://www.jackiewyers.beauty/Images/Articles/Halloween/overview.jpg" 
        alt="Overview of Jackie Wyers' Halloween makeup tutorials featuring iconic pop culture characters, highlighting creative and edgy makeup transformations ideal for Halloween festivities and cosplay events." 
        style={{ width: '100%', margin: '20px 0' }} 
      />

      <h2 style={captionStyle}>All makeup looks are created and chosen by Jackie Wyers. We may earn a commission on some of the items you choose to buy.</h2>

      <DropCap1 text="Welcome back to another pop culture roundup! This Halloween, dive into iconic makeup looks that are bold and edgy—perfect for making a statement while still looking absolutely stunning." />

      <p style={paragraphStyle}>
        As a self-identified girly girl, I've shared plenty of feminine Halloween outfits and even created a quiz to help you find the perfect costume. But the spooky season is also the perfect opportunity to step out of your comfort zone and try something daring.
      </p>

      {/* Individual Makeup Look Sections */}

      {/* Harley Quinn */}
      <h2 style={headingStyle}>💖 Harley Quinn - Birds of Prey</h2>
      <img 
        src="https://www.jackiewyers.beauty/Images/Articles/Halloween/harley_quinn.jpg" 
        alt="Jackie Wyers embodying Harley Quinn's look from Birds of Prey, featuring blonde high pigtails, vibrant makeup, and a playful yet dangerous expression, perfect for a bold Halloween makeup inspiration." 
        style={{ display: 'block', margin: '1rem auto', height: 'auto' }} 
      />
      <p style={paragraphStyle}>Harley's transformation in <em>Birds of Prey</em> presents a vibrant collision of color and chaos—perfect for those looking to make a bold statement this Halloween. Master her signature playful yet dangerous look with a tutorial that covers everything from her messy pigtails to her smudgy eye makeup.</p>
      <ResponsiveYoutube src="https://www.youtube.com/watch?v=lXBXri7sWhU&t=13s" title="Harley Quinn Makeup Tutorial by Jackie Wyers" />

      {/* Elphaba */}
      <h2 style={headingStyle}>🧙🏻‍♀️ Elphaba - Wicked</h2>
      <img 
        src="https://www.jackiewyers.beauty/Images/Articles/Halloween/elphaba.jpg" 
        alt="Jackie Wyers dressed as Elphaba from Wicked, showcasing vibrant green skin and glamorous green makeup, recreating the iconic Broadway witch's look for a dramatic Halloween transformation." 
        style={{ display: 'block', margin: '1rem auto', height: 'auto' }} 
      />
      <p style={paragraphStyle}>Channel the misunderstood Wicked Witch of the West with Elphaba’s iconic green look from <em>Wicked</em>. This tutorial will guide you through achieving her enchanting skin tone and dramatic features, ensuring you're Broadway-ready for any Halloween gathering.</p>
      <ResponsiveYoutube src="https://www.youtube.com/watch?v=hRtIux714T0&t=18s" title="Elphaba Makeup Tutorial by Jackie Wyers" />

      {/* Alice Cullen */}
      <h2 style={headingStyle}>🧛🏻‍♀️ Alice Cullen - Twilight: Eclipse</h2>
      <img 
        src="https://www.jackiewyers.beauty/Images/Articles/Halloween/alice_cullen.jpg" 
        alt="Jackie Wyers as Alice Cullen from Twilight Eclipse, sporting a short black pixie wig and bold smokey eye makeup, capturing the vampire's mysterious and elegant essence suitable for a sophisticated Halloween look." 
        style={{ display: 'block', margin: '1rem auto', height: 'auto' }} 
      />
      <p style={paragraphStyle}>Embrace the vampire chic with Alice Cullen's intriguing beauty from <em>Twilight: Eclipse</em>. This tutorial focuses on replicating her precise and dramatic eye makeup, offering a subtler approach to Halloween makeup.</p>
      <ResponsiveYoutube src="https://www.youtube.com/watch?v=UublB7QInB8" title="Alice Cullen Makeup Tutorial by Jackie Wyers" />

      {/* Next Article and Signature */}
      <NextArticle
        link="/girly-pop-halloween"
        imgSrc="https://www.jackiewyers.beauty/Images/Articles/2016/2016MakeupThumbnail.jpg"
        altText="Girly Halloween Article"
        linkText="CHECK OUT GIRLY POP HALLOWEEN LOOKS→"
        containerStyle={{ margin: '1rem auto' }}
        linkStyle={{ color: '#000000', fontSize: '1.05rem' }}
        imgStyle={{ borderRadius: '10px' }}
      />

      <img src="https://www.jackiewyers.beauty/Images/Articles/Signature.png" alt="Jackie Wyers Signature" style={{ width: '100%' }} />

      <Comments website-id="10910" page-id="halloween-roundup-edgy" />
    </div>
  );

  return (
    <div ref={blogRef}>
      <Card
        title="Barbie Beauty Makeup Looks: Stunning Ways to Channel Your Inner Doll🎀"
        description="Barbie Makeup Tutorial & Iconic Doll Inspiration"
        blogContent={blogContent}
      />
    </div>
  );
};

export default HalloweenRoundup2;