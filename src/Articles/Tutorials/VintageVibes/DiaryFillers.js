import React, { useRef, useEffect } from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';
import DropCap from '../../../Components/DropCap';
import TextReveal from '../../../Components/TextReveal';
import '../../ExampleTutorial1.css';
import { Helmet } from 'react-helmet';
import AdSenseAd from '../../../Advertising/Ads';
import { initGA, logPageView } from '../../../analytics';
import DropCap1 from '../../Travel/DropCap1';

const title = `${process.env.PUBLIC_URL}/Images/Articles/DiaryPost1/DiaryPostTitle.png`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/DiaryPost1/Diary2.png`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
  <div>
   
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);

const DiaryPost1Fillers = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);
  
  useEffect(() => {
    initGA();
    logPageView('/diaryfillers');
}, []);

  const headingStyle = {
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: 'normal',
    fontFamily: 'Arapey, serif',
    color: '#333',
    margin: '1.5rem'
  };

  const paragraphStyle = {
    fontSize: '22px',
    fontFamily: 'GFS Didot, serif',
    margin: '1rem 1.5rem',
    marginTop: '1rem',
    marginBottom: '1rem',
    maxWidth: '500px',
    lineHeight: '1.75',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const imageStyle = {
    display: 'block',
    margin: '0 auto',
    maxWidth: '100%',
    maxHeight: '900px',
    objectFit: 'cover',
  };

  const blogContent = (
    <div className="container">
    <Helmet>
  <title>Diary Post #1: My Journey with Injectable Fillers - Jackie Wyers</title>
  <meta name="description" content="Jackie Wyers shares her personal experience with getting injectable fillers at a young age, reflecting on insecurities, decisions, and growth." />
  <meta name="keywords" content="Diary, Injectable Fillers, Jackie Wyers, Personal Experience, Beauty Blog, Cosmetic Enhancements, Self-Esteem, Beauty Standards, Personal Growth, Beauty Journey" />
  <meta property="og:title" content="Diary Post: My Journey with Injectable Fillers - Jackie Wyers" />
  <meta property="og:description" content="Jackie Wyers shares her personal experience with getting injectable fillers at a young age, reflecting on insecurities, decisions, and growth." />
  <meta property="og:image" content={title} />
  <meta property="og:url" content="https://jackiewyers.beauty/diaryfillers" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Diary Post: My Journey with Injectable Fillers - Jackie Wyers" />
  <meta name="twitter:description" content="Jackie Wyers shares her personal experience with getting injectable fillers at a young age, reflecting on insecurities, decisions, and growth." />
  <meta name="twitter:image" content={title} />
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
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Diary Post #1: My Journey with Injectable Fillers - Jackie Wyers",
        "description": "Jackie Wyers shares her personal experience with getting injectable fillers at a young age, reflecting on insecurities, decisions, and growth.",
        "image": "${title}",
        "author": {
          "@type": "Person",
          "name": "Jackie Wyers"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Jackie Wyers Beauty",
          "logo": {
            "@type": "ImageObject",
            "url": "https://jackiewyers.beauty/logo.png"
          }
        },
        "datePublished": "2024-07-27",
        "dateModified": "2024-07-27",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://jackiewyers.beauty/diaryfillers"
        }
      }
    `}
  </script>
</Helmet>


    
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15vh' }}>
        <a href="/diary" style={{ fontFamily: 'Arapey', fontSize: '20px', color: 'black', textDecoration: 'none' }}>
          DIARY
        </a>
      </div>
      <img src={title} alt="Diary Post Title" style={{ width: '100%' }} />



      <DropCap1 text="Welcome back to my blog for my first-ever diary entry, where I dive deep into my personal experience with getting injectable fillers at a young age. In today's social media-driven world, it's increasingly common to see teens and young women experimenting with cosmetic enhancements. Platforms like Instagram flood us with transformation reels and personal stories from influencers, making such procedures seem both normal and desirable. While this transparency can be enlightening, it also carries significant influence, shaping perceptions and expectations about beauty." />
      <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <h2 style={headingStyle}>Early Insecurities and the Drive for Control</h2>

      <p style={paragraphStyle}>
        Starting at 12, I struggled with my self-image, especially during the awkward stages of puberty. Unlike some friends, who were excited about their teen years, I felt an overwhelming shame about the changes in my body.
      </p>

      <p style={paragraphStyle}>
        This self-criticism deepened during an abusive romantic relationship, further eroding my self-esteem. I fixated on my perceived flaws, especially my nose, believing that changing this one feature would alleviate my feelings of inadequacy.
      </p>

      <h2 style={headingStyle}>The Decision to Change and Its Consequences</h2>

      <p style={paragraphStyle}>
        At 17, fuelled by modest earnings from my YouTube channel and unable to afford rhinoplasty, I went in for an injectable nose job. The procedure was brief, painless, and initially seemed like the perfect solution.
      </p>

      <p style={paragraphStyle}>
        However, the immediate gratification soon faded, and the deeper issues remained. My insecurities merely shifted as the filler migrated and faded unevenly. Over time, I realized I preferred my original appearance and began to question my perception of myself.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={image2} alt="Diary Post " style={imageStyle} />
      </div>


      <h2 style={headingStyle}>Reflection and Growth</h2>

      <p style={paragraphStyle}>
        This experience taught me about the complexities of self-esteem and the ineffectiveness of seeking external solutions for internal problems. I learned to cut ties with toxic influences and appreciate my qualities, both physical and personal. Makeup and styling became healthy outlets for creativity, allowing me to express myself in non-permanent ways. My YouTube channel, focusing on pop culture and beauty, has become a source of joy and a platform for fostering a supportive community that builds confidence—not just for me, but for my audience as well.
      </p>

      <h2 style={headingStyle}>Conclusion: Embracing Authenticity</h2>

      <p style={paragraphStyle}>
        My experiences underscore a crucial message: our self-worth shouldn’t hinge solely on our appearance. True healing comes from addressing our deeper emotional needs and respecting ourselves, inside and out.
      </p>

      <p style={paragraphStyle}>
        While I recognize that cosmetic enhancements can be positive for some, especially informed adults, I worry about young girls who might view these procedures as solutions to deeper feelings of inadequacy, whether they are aware of their motivations or not. It took years to understand that my feelings of worthlessness were not merely physical insecurities. Making informed decisions about our bodies is challenging during confusing teen and young adult years.
      </p>

      <p style={paragraphStyle}>
        Through sharing some of my story, I hope to inspire others to reflect on their motivations for physical changes and to embrace their true selves—not just in appearance, but in recognizing how special each personality is and how everyone is worthy of respect and love. I invite you to share your thoughts and reflections below, and I hope you enjoyed my first-ever diary post!
      </p>

      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <img src={signature} alt="Jackie Wyers Signature" style={{ width: '100%', maxWidth: '650px', margin: '0 auto', display: 'block' }} />
      </div>
 <div
style = {{
  margin : '20px'
}}
>

  <AdSenseAd/>
</div>
      <Comments website-id={websiteId} page-id="Diary-Fillers" />
    </div>
  );

  return (
    <div ref={blogRef}>
      <Card blogContent={blogContent} />
    </div>
  );
};

export default DiaryPost1Fillers;
