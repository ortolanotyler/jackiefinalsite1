import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import DropCap from '../../../Components/DropCap';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import ResponsiveYoutube from '../../../Components/ResponsiveYoutube';
import ArticleTitle from '../../../Components/ArticleTitle';
import SocialShare from '../../../Home/SocialShare';

const image1 = `${process.env.PUBLIC_URL}/Images/Articles/2016/2016Double.png`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/2016/2016FaceChart.png`;
const image3 = `${process.env.PUBLIC_URL}/Images/Articles/2016/2016Makeup4.jpg`;
const image4 = `${process.env.PUBLIC_URL}/Images/Articles/2016/2016-Perrie.jpg`;
const lana = `${process.env.PUBLIC_URL}/Images/Articles/LanaXskims/LanaDelRayThumbnail.jpeg`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;
const Card = ({ blogContent }) => (
  <div
    style={{
      margin: '0 auto',
      maxWidth: '95%', // Control max width to center the content
      padding: '10px', // Add padding to prevent text from touching the edges
    }}
  >
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);

const Makeup2016 = () => {



  const websiteId = '10910';
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
  
  fontFamily: "EB Garamond, serif",
  fontWeight: '100',
  padding: '10px',
  margin: '10px auto',
  
  
    lineHeight: '1.6',
  
  };
  
  const linkStyle = {
  textDecoration: 'none', // Removes underline from links
  fontFamily: "'Georgia', serif",
  fontWeight: '100',
  color: '#745B4F', // Inherits the color of the surrounding text
  };
  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '10px',
    margin: '0 2rem'
  };
  
  const imageStyle = {
  display: 'block',
  margin: '1rem auto',
  borderRadius: '0px',
  height: 'auto'
  };
  
  const pinterestGridStyle = {
  display: 'grid',
  gap: '1rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(236px, 1fr))', // Adjusts columns based on screen size
  justifyItems: 'center',
  margin: '1rem 0',
  };
  
  const iframeStyle = {
  width: '100%',
  height: '520px', // Maintains original height
  border: 'none',
  scrolling: 'no',
  };
  
  const captionStyle = {
  textAlign: 'center',
  fontSize: '1rem',
  fontFamily: 'Arapey, serif',
  fontWeight: '100',
  margin: '0 auto',
  fontStyle: 'italic',
  };
  
  


    return (
      <div ref={blogRef}>
        <Card
          title="A Quintessential 2016 Makeup Tutorial"
          description="All Matte Everything... The Nostalgia!"
          blogContent={
            <div className="container">
              <Helmet>
                <title>A Quintessential 2016 Makeup Tutorial</title>
                <link rel="canonical" href="https://www.jackiewyers.beauty/2016makeup" />
    
                <meta
                  name="description"
                  content="Explore the makeup trends of 2016 with Jackie Wyers. Learn how to achieve bold glamour looks inspired by Kylie Jenner and other beauty icons."
                />
           <meta 
  name="keywords" 
  content="2016 Makeup Trends, Kylie Jenner Makeup, Jackie Wyers, Matte Makeup Looks, Bold Glamour, Makeup Tutorial, Beauty Blog, High-Coverage Foundations, Dip Brows, Mink Lashes, Glittery Cut Creases, Smoky Eyes, Kylie Lip Kits, Too Faced Sweet Peach Palette, Laura Mercier Setting Powder, Becca Champagne Pop, Jaclyn Hill Makeup, IG Baddie Makeup, Contouring and Highlighting, Retro Beauty, Flash Photography Makeup Tips, Makeup Influencer Trends, Anastasia Dip Brow, Tarte Shape Tape, Benefit Hoola Bronzer, Ben Nye Luxury Powder, Painted By Spencer, Kylie Jenner Lip Combos" 
/>
    
                <meta property="og:title" content="2016 Makeup Trends - Jackie Wyers" />
                <meta
                  property="og:description"
                  content="Explore the makeup trends of 2016 with Jackie Wyers. Learn how to achieve bold glamour looks inspired by Kylie Jenner and other beauty icons."
                />
                <meta
                  property="og:image"
                  content="https://www.jackiewyers.beauty/Images/Articles/2016/2016MakeupThumbnail.jpg"
                />
                <meta property="og:url" content="https://www.jackiewyers.beauty/2016makeup" />
                <meta name="twitter:title" content="2016 Makeup Trends - Jackie Wyers" />
                <meta
                  name="twitter:description"
                  content="Explore the makeup trends of 2016 with Jackie Wyers. Learn how to achieve bold glamour looks inspired by Kylie Jenner and other beauty icons."
                />
                <meta
                  name="twitter:image"
                  content="https://www.jackiewyers.beauty/Images/Articles/2016/2016MakeupThumbnail.jpg"
                />
                <meta name="twitter:card" content="summary_large_image" />
              </Helmet>
    
              <div
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}
              >
                <a
                  href="/trends"
                  style={{ fontFamily: 'GFS Didot, serif', fontSize: '1rem', color: '#000000', textDecoration: 'none' }}
                >
                  BEAUTY // TRENDS
                </a>
              </div>
    
              <ArticleTitle
                mainTitle="A Quintessential 2016 Makeup Tutorial"
                subTitle="All Matte Everything... The Nostalgia!"
                author="Jackie Wyers"
                publishDate="March 1, 2024"
              />
              <SocialShare
                url="https://www.jackiewyers.beauty/2016makeup"
                title="2016 Makeup Trends - Jackie Wyers"
                imageUrl="https://www.jackiewyers.beauty/Images/Articles/2016/2016MakeupThumbnail.jpg"
              />
    
              <ResponsiveYoutube
                src="https://www.youtube.com/embed/HtEPH6RUEZg?si=8RIeZhrp-luWJTSI"
                title="2016 Makeup Tutorial Jackie Wyers Beauty"
              />
    
              <div style={{ textAlign: 'center', margin: '10px auto' }}>
                <SubscribeButton />
              </div>
    
              <p
                style={{
                  margin: '20px auto',
                  textAlign: 'center',
                  fontSize: '1.1rem',
                  fontFamily: 'Playfair Display, serif',
                  fontStyle: 'italic',
                }}
              >
                All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to
                buy.
              </p>
    
              <DropCap text="Welcome back to another installment of Time Travel Tutorials...though this time, we're not journeying too far back in time! The makeup trends of 2016 were significantly influenced by the young Kylie Jenner, the undeniable 'IT' girl for teens. High-coverage foundations, LOTS of setting powder, sharp and bold dip brows, warm smokey eyes, glittery cut creases, voluminous mink lashes, and deep, matte lip combinations had beauty enthusiasts captivated!" />
    
              <p style={paragraphStyle}>
                In this article, we'll revisit the products that were a staple on every makeup lover’s vanity in 2016 and
                embrace a daily bold glamour look. I was so excited to channel Kylie Jenner's dramatic flair, especially
                since I missed out on experimenting with these trends back in the day!
              </p>
    
              <div style={gridContainerStyle}>
                <img
                  src={image1}
                  alt="2016 Makeup Tutorial via Jackie Wyers on Instagram"
                  style={{ width: '100%', maxWidth: '650px' }}
                />
              </div>
    
              <h2 style={headingStyle}>The Essence of 2016 Makeup</h2>
    
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={image2} alt="James" style={{ width: '100%', maxWidth: '650px' }} />
              </div>
    
              <p style={paragraphStyle}>
                To embody Kylie Jenner's look and celebrate the key trends of 2016, we must adopt a "more is more"
                mentality. Instead of focusing on enhancing just one feature, we're highlighting them all simultaneously. To
                ensure the skin still looks youthful and fresh with such a makeup style, preparation is crucial.
              </p>
    
              <ResponsiveIframe src="https://shopmy.us/collections/public/542368?noHeader=true" title="D'Alba Italian White Truffle First Spray Serum" />
    
              <h2 style={headingStyle}>Apply a Matte Primer</h2>
    
              <p style={paragraphStyle}>
                Use a classic matte primer, like the Benefit Professional Primer, to create a smooth base for your
                foundation.
              </p>
    
              <h2 style={headingStyle}>Matte, High Coverage Foundation and The Beauty Blender</h2>
    
              <p style={paragraphStyle}>
                Opt for a matte foundation like the L’Oréal Infallible Pro-Matte Foundation, Estée Lauder Double Wear, or
                Born This Way Foundation. Use a stippling brush or the iconic beauty blender for application, ensuring the
                sponge is dampened first!
              </p>
    
              <ResponsiveIframe src="https://shopmy.us/collections/public/551065?noHeader=true" title="Rich Lotion - Ana Sui" />
    
              <h2 style={headingStyle}>Embrace Bold Brows and A Bright Highlight</h2>
    
              <p style={paragraphStyle}>
                Create bold brows with Anastasia Dip Brow, drawing inspiration from Kylie Jenner's well-defined, softly
                arched brows.
              </p>
    
              <ResponsiveIframe src="https://www.youtube.com/embed/KEaRpNQyb1I?si=KeTVxblvbSyBAekq" title="How to Bake - Painted By Spencer - YouTube" />
    
              <h2 style={headingStyle}>Choose the Right Blush and Highlighter</h2>
    
              <p style={paragraphStyle}>
                Choose a matte or slightly luminous rose shade blush. Kylie tailored her blush to each look, sometimes going
                with a brighter pink or coral.
              </p>
    
              <h2 style={headingStyle}>Create a Soft Smoky Eye</h2>
    
              <p style={paragraphStyle}>
                There’s of course many eye looks to try from 2016, like a glitter cut crease, but I reached for the Too
                Faced Sweet Peach Palette to crease a soft warm brown smoky eye that’s easy for everyday.
              </p>
    
              <h2 style={headingStyle}>Line Your Eyes and Apply Mascara</h2>
    
              <p style={paragraphStyle}>
                My two favorite liners from the time were the Sephora brand liner and MAC Brushstroke liner. Smoke out the
                liner edges with shadow, as Kylie focused more on bold lashes rather than winged liner.
              </p>
    
              <h2 style={headingStyle}>Big Mink Lashes</h2>
    
              <p style={paragraphStyle}>
                Very full mink lashes were all the rage, but luckily brands have prioritized faux mink lashes now.
              </p>
    
              <h2 style={headingStyle}>Pick Your Lip Combo</h2>
    
              <p style={paragraphStyle}>
                Experiment with various Kylie Lip Kit shades to suit your makeup vibe. In my reference photo, her looks
                mainly range from matte mauve grey to rosy or deep near-black shades.
              </p>
    
              <h2 style={headingStyle}>Set and Refresh Your Makeup</h2>
    
              <p style={paragraphStyle}>
                Finish off by setting your makeup. If your skin feels too matte, rejuvenate it with a refreshing spray like
                the d'Alba spray, which can also double as a setting spray.
              </p>
    
              <h2 style={headingStyle}>2016 Makeup Memories</h2>
    
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={image3} alt="2016 Makeup Tutorial" style={{ width: '100%', maxWidth: '650px' }} />
              </div>
    
              <p style={paragraphStyle}>
                As a young adult and beauty content creator during this era, my personal style wasn't heavily swayed by
                Kylie Jenner, which means, regrettably, I don't have many throwback looks that embody the era's most popular
                makeup trends.
              </p>
    
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={image4} alt="Perrie Edwards Makeup via Jackie Wyers" style={{ width: '100%', maxWidth: '650px' }} />
              </div>
    
              <p style={paragraphStyle}>
                This 2016 makeup tutorial should bring back memories and introduce you to techniques that were all the rage.
                Whether revisiting old favorites or exploring them for the first time, enjoy the process and make it
                uniquely yours!
              </p>
    
              <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <img
                  src={lana}
                  alt="Lana Del Rey"
                  style={{ width: '100%', maxWidth: '500px', margin: '0 auto', display: 'block' }}
                />
                MORE POP CULTURE BEAUTY →
              </div>
    
              <div style={{ textAlign: 'center' }}>
                <img src={signature} alt="Signature" style={{ width: '100%', maxWidth: '650px' }} />
              </div>
    
              <Comments website-id={websiteId} page-id={"-Makeup-2016"} />
            </div>
          }
        />
      </div>
    );
      
     

};

export default Makeup2016
