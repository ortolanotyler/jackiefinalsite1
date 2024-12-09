import React, { useRef, useEffect } from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';
import SubscribeButton from '../../../Components/SubscribeButton';
import ResponsiveIframe from '../../../Components/ResponsiveIframe';
import { Helmet } from 'react-helmet-async';
import DropCap1 from '../../Travel/DropCap1';
import ArticleTitle from '../../../Components/ArticleTitle';
import NextArticle from '../../../Components/NextArticleComponent';
import SocialShare from '../../../Home/SocialShare';

const image1 = `${process.env.PUBLIC_URL}/Images/TaylorSwift/JackieWyersTaylorSwiftMakeup.JPG`;
const image2 = `${process.env.PUBLIC_URL}/Images/TaylorSwift/JackieWyersTaylorSwiftHair.JPG`;
const signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const TaylorSwiftErasTourMakeup = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);

  const headingStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: '100',
    fontFamily: "'Playfair Display', sans-serif",
    color: '#000000',
    maxWidth: '95%',
    margin: '30px auto',
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

  const linkStyle = {
    textDecoration: 'none',
    fontFamily: "'Georgia', serif",
    fontWeight: '100',
    color: '#745B4F',
  };

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '10px',
    margin: '0 2rem',
  };

  const imageStyle = {
    display: 'block',
    margin: '1rem auto',
    borderRadius: '0px',
    height: 'auto',
  };

  const blogContent = (
    <div className="container">
      <Helmet>
        <title>Taylor Swift’s Iconic Eras Tour Makeup: How to Recreate Her Look</title>
        <link rel="canonical" href="https://www.jackiewyers.beauty/articles/taylor-swift-eras-tour-makeup" />
        <meta
          name="description"
          content="Recreate Taylor Swift's iconic Eras Tour makeup look featuring Pat McGrath Labs products, bold red lips, glittery eyes, and dewy cheeks."
        />
        <meta
          name="keywords"
          content="Taylor Swift makeup tutorial, Eras Tour makeup, Pat McGrath Labs, Taylor Swift red lipstick, glitter eyeshadow, dewy makeup look, Jackie Wyers beauty, celebrity makeup tutorials"
        />
        <meta property="og:title" content="Taylor Swift’s Iconic Eras Tour Makeup: How to Recreate Her Look" />
        <meta
          property="og:description"
          content="Recreate Taylor Swift's iconic Eras Tour makeup look featuring Pat McGrath Labs products, bold red lips, glittery eyes, and dewy cheeks."
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/Images/TaylorSwift/TaylorSwiftThumbnail.jpg`}
        />
        <meta property="og:url" content="https://www.jackiewyers.beauty/articles/taylor-swift-eras-tour-makeup" />
      </Helmet>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <a href="/popculture" style={linkStyle}>
          BEAUTY // POP CULTURE
        </a>
      </div>

      <ArticleTitle
        mainTitle="Taylor Swift’s Iconic Eras Tour Makeup: How to Recreate Her Look"
        subTitle="The Pat McGrath Labs red lip every Swiftie needs to try!"
        author="Jackie Wyers"
        publishDate="December 9th, 2024"
      />

      <SocialShare
        url="https://www.jackiewyers.beauty/articles/taylor-swift-eras-tour-makeup"
        title="Taylor Swift’s Iconic Eras Tour Makeup: How to Recreate Her Look"
        imageUrl={`${process.env.PUBLIC_URL}/Images/TaylorSwift/TaylorSwiftThumbnail.jpg`}
      />

      <div style={{ textAlign: 'center', margin: '10px auto' }}>
        <SubscribeButton />
      </div>

      <p style={paragraphStyle}>
        All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
      </p>

      <div style={paragraphStyle}>
        <DropCap1 text="Taylor Swift’s Eras Tour was nothing short of legendary. From her breathtaking performances to her intricate costumes, every detail was perfectly curated—including her makeup, which remained flawless through hours of singing, dancing, outfit changes, and even rain! Let’s dive into recreating her Taylor-inspired glam, featuring some of the products rumored to have been used behind the scenes." />
      </div>

      <div style={gridContainerStyle}>
        <img src={image1} alt="Jackie Wyers recreating Taylor Swift's makeup" style={imageStyle} />
        <img src={image2} alt="Jackie Wyers recreating Taylor Swift's hair" style={imageStyle} />
      </div>

      <h2 style={headingStyle}>Taylor’s Signature Makeup: A Collaboration with Pat McGrath</h2>
      <p style={paragraphStyle}>
        Taylor collaborated with the iconic makeup artist Pat McGrath for her <em>Bejeweled</em> music video, where her bold and
        beautiful looks stole the show. One standout product from that collaboration is the{' '}
        <a href="https://www.patmcgrath.com/products/liquilust" style={linkStyle} target="_blank" rel="noreferrer">
          LiquiLUST Matte Lipstick in Elson 4
        </a>
        , a stunning blue-red lipstick that’s rumored to have graced the Eras Tour stage.
      </p>

      <ResponsiveIframe
        src="https://shopmy.us/collections/embed/1085711"
        style={{ width: '100%', minHeight: '340px', border: 'none' }}
      />

      <h2 style={headingStyle}>Recreating Taylor’s Glittery Lids</h2>
      <p style={paragraphStyle}>
        Taylor’s shimmering eyeshadow was a showstopper. Try the{' '}
        <a href="https://www.karlacosmetics.com/products/nightfall-opal-multichrome" style={linkStyle} target="_blank" rel="noreferrer">
          Karla Cosmetics Nightfall Opal Multichrome Eyeshadow
        </a>{' '}
        to achieve the same pink, iridescent shimmer. Complete the look with winged liner, mascara, and outer-corner lashes for her
        signature cat-eye sparkle.
      </p>

      <ResponsiveIframe
        src="https://shopmy.us/collections/embed/1085722"
        style={{ width: '100%', minHeight: '340px', border: 'none' }}
      />

      <h2 style={headingStyle}>The Glow: Dewy Cheekbones</h2>
      <p style={paragraphStyle}>
        Taylor’s radiant cheekbones can be recreated with the{' '}
        <a
          href="https://www.patmcgrath.com/products/skin-fetish-highlighter-balm-duo"
          style={linkStyle}
          target="_blank"
          rel="noreferrer"
        >
          Pat McGrath Skin Fetish Highlighter + Balm Duo in Nude
        </a>
        . The customizable shine lets you glow subtly or radiantly.
      </p>

      <ResponsiveIframe
        src="https://shopmy.us/collections/embed/1085731"
        style={{ width: '100%', minHeight: '340px', border: 'none' }}
      />

      <h2 style={headingStyle}>The Perfect Red Lip</h2>
      <p style={paragraphStyle}>
        Taylor’s classic red lip is iconic. Start with a lip liner like{' '}
        <a href="https://www.maccosmetics.com/product/13852/10342/products/lips/lip-pencil/lip-pencil" style={linkStyle} target="_blank" rel="noreferrer">
          MAC Lip Liner in Ruby Woo
        </a>
        , then layer the{' '}
        <a href="https://www.patmcgrath.com/products/liquilust" style={linkStyle} target="_blank" rel="noreferrer">
          Elson 4 lipstick
        </a>{' '}
        on top for a blue-toned red that’s universally flattering.
      </p>

      <ResponsiveIframe
        src="https://shopmy.us/collections/embed/1085737"
        style={{ width: '100%', minHeight: '340px', border: 'none' }}
      />

      <h2 style={headingStyle}>Dupes and Budget Tips</h2>
      <p style={paragraphStyle}>
        While Pat McGrath products are luxurious, there are budget-friendly options to replicate the look. Focus on the Elson 4 lipstick
        for an affordable yet impactful investment.
      </p>

      <ResponsiveIframe
        src="https://shopmy.us/collections/embed/1085742"
        style={{ width: '100%', minHeight: '340px', border: 'none' }}
      />

      <NextArticle
        link="/articles/taylor-swift-holidays-2024"
        imgSrc={`${process.env.PUBLIC_URL}/Images/Articles/NextTaylorSwiftArticle.jpg`}
        altText="Taylor Swift Holidays 2024"
        linkText="EXPLORE MORE SWIFTIE CONTENT →"
        containerStyle={{ margin: '2rem auto' }}
        linkStyle={{ color: '#000000', fontSize: '1.25rem' }}
        imgStyle={{ borderRadius: '10px' }}
      />

      <div>
        <img src={signature} alt="Jackie Wyers Signature XoXo" style={{ width: '100%' }} />
      </div>

      <Comments website-id={websiteId} page-id={"taylor-swift-eras-tour-makeup"} />
    </div>
  );

  return (
    <div ref={blogRef}>
      <Card
        title="Taylor Swift’s Iconic Eras Tour Makeup: How to Recreate Her Look"
        description="Recreate Taylor Swift's iconic Eras Tour makeup with this detailed guide featuring Pat McGrath products and beauty tips by Jackie Wyers."
        blogContent={blogContent}
      />
    </div>
  );
};

export default TaylorSwiftErasTourMakeup;