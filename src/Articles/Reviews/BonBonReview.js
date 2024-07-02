import React, { useRef, useEffect } from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';
import TextReveal from '../../Components/TextReveal';
import ResponsiveIframe from '../../Components/ResponsiveIframe';
import './ExampleTutorial.css';
import AdSenseAd from '../../Advertising/Ads.js';
import { Helmet } from 'react-helmet';
import { initGA, logPageView } from '../../analytics';

const title = `${process.env.PUBLIC_URL}/Images/Articles/BonBonReview/bonbontitle2.png`;
const BonBon2 = `${process.env.PUBLIC_URL}/Images/Articles/BonBonReview/BonBon2.jpg`;
const Signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
  <div>
    <div className="card">
      <div className="blog-content">{blogContent}</div>
    </div>
  </div>
);

const BonBonReview = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);

  useEffect(() => {
    initGA();
    logPageView();
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
    fontSize: '20px',
    fontFamily: 'GFS Didot, serif',
    margin: '1rem 1.5rem',
    maxWidth: '100%',
    lineHeight: '1.5'
  };

  const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  };

  const imageStyle = {
    width: '100%',
    maxWidth: '650px',
  };

  const blogContent = (
    <div className="container" style={{ width: '100%', padding: '1rem' }}>
      <Helmet>
        <title>BonBon Review - Jackie Wyers</title>
        <meta name="description" content="A celebration of self-indulgence, a fragrant ode to the joy of savoring life's sweet moments. Its timeless appeal beckons one to a world of pure, unadulterated pleasure." />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RT6GR7JXYG"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RT6GR7JXYG');
          `}
        </script>
      </Helmet>
      <AdSenseAd />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
        <a href="/reviews" style={{ fontFamily: 'Arapey', fontSize: '15px', color: 'black', textDecoration: 'none' }}>
          BEAUTY // REVIEWS
        </a>
      </div>
      <img src={title} alt="BonBon Review Title" style={imageStyle} />
      <div style={imageContainerStyle}>
        <img src={BonBon2} alt="BonBon 2" style={imageStyle} />
      </div>
      <div style={{ margin: '20px' }}>
        <AdSenseAd />
      </div>
      <p style={{ textAlign: 'center', fontSize: '1rem', fontFamily: 'Arapey, sans-serif', margin: '1rem 0', fontStyle: 'italic' }}>
        All products featured are chosen by Jackie Wyers. We may earn commission on some of the items you choose to buy.
      </p>
      <h2 style={headingStyle}>🍊 Perfume Profile</h2>
      <div style={{ textAlign: 'center', fontSize: '1.25rem', fontFamily: 'GFS Didot, serif', margin: '1rem 1' }}>
        Perfume Name: <strong>Bonbon</strong><br /><br />
        Brand: <strong>Viktor & Rolf</strong><br /><br />
        Year of Release: <strong>2014</strong><br /><br />
        Perfumers: <strong>Cecile Matton, Serge Majoullier</strong><br /><br />
        Price: <strong>1.0 oz (30ml) - $80.00 USD</strong><br /><br />
        1.7 oz (50ml) - $110.00 USD<br /><br />
        3.0 oz (90ml) - $170.00 USD
      </div>
      <h2 style={headingStyle}>🍑 Background Information</h2>
      <p style={paragraphStyle}>
        Bonbon is a celebration of self-indulgence, a fragrant ode to the joy of savoring life's sweet moments. Its timeless appeal beckons one to a world of pure, unadulterated pleasure.
      </p>
      <div style={{ margin: '20px' }}>
        <AdSenseAd />
      </div>
      <h2 style={headingStyle}>🍬 Fragrance Profile</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', fontSize: '1.25rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth: '100%' }}>
        <div style={{ marginBottom: '0.5rem' }}>
          <strong>Concentration:</strong> Eau de Parfum
        </div>
        <div style={{ marginBottom: '0.5rem' }}>
          <strong>Fragrance Family:</strong> Floral Fruity Gourmand
        </div>
        <div style={{ marginBottom: '0.5rem' }}>
          <strong>Top Notes:</strong> Mandarin, Orange, Peach
        </div>
        <div style={{ marginBottom: '0.5rem' }}>
          <strong>Heart/Middle Notes:</strong> Caramel, Jasmine, Orange blossom
        </div>
        <div style={{ marginBottom: '0.5rem' }}>
          <strong>Base Notes:</strong> Amber, Guaïac wood, Cedarwood, Sandalwood
        </div>
      </div>
      <div style={{ margin: '20px' }}>
        <AdSenseAd />
      </div>
      <p style={paragraphStyle}>
        <strong>Overall Scent Profile:</strong> A luscious peach opening gives way to a heart overflowing with caramel's sweet embrace, followed by a touch of delicate florals. The base, a comforting blend of warm woods, anchors the fragrance in sophistication.
      </p>
      <h2 style={headingStyle}>🎀 Personal First Impressions</h2>
      <p style={paragraphStyle}>
        My first brush with Bonbon took place in a Nordstrom back in 2015. Before that moment, the realm of high-end perfumes was uncharted territory for me. Yet, as I passed by the counter, the luxurious packaging caught my eye—a whimsically wrapped candy in deep magenta hues, cradled in an equally charming pink and black box. It was love at first sight!
      </p>
      <p style={paragraphStyle}>
        Upon the first whiff of Bonbon's sweet, sophisticated aroma, I was hooked. This eau de parfum is described as a gourmand fragrance with notes of Peach, Caramel, and Amber. I eagerly picked up a bottle, and the staff sent me on my way with a bag filled with tissue paper lightly spritzed with the fragrance. Walking through the mall that day, the number of compliments I received was unparalleled 🎀 🍬
      </p>
      <p style={paragraphStyle}>
        As a young adult at the time with a fondness for sweet, playful scents, I steered away from body sprays and anything too fruity. I’ve always been drawn to fragrances that lay on a foundation of sandalwood as they feel warm, woody, and inviting alongside the sweetness. This is why Bonbon was the perfect, first-luxury perfume buy that I’d recommend for teens or young adults who love a mature, but sweet scent.
      </p>
      <div style={{ margin: '20px' }}>
        <AdSenseAd />
      </div>
      <ResponsiveIframe src="https://shopmy.us/collections/public/549701?noHeader=true" title="Final Touches" scrolling="no" />
      <h2 style={headingStyle}>💗 Review & Recommendations</h2>
      <p style={paragraphStyle}>
        <strong>Longevity:</strong> A commendable 6 to 8 hours on the skin, though individual experiences may vary.
      </p>
      <p style={paragraphStyle}>
        <strong>Sillage:</strong> Its presence is assertive yet not overpowering, leaving a trail of intrigue.
      </p>
      <p style={paragraphStyle}>
        <strong>Occasions and Seasonality:</strong> Ideal for the cooler embrace of autumn and winter, Bonbon transitions seamlessly from daytime charm to evening elegance.
      </p>
      <div style={{ margin: '20px' }}>
        <AdSenseAd />
      </div>
      <h2 style={headingStyle}>⚖ Comparisons</h2>
      <p style={paragraphStyle}>
        Lovers of sweet gourmands and vanilla will find joy in exploring similar fragrances, like Bianco Latte Giardini Di Toscana, with its own take on caramel. Yet, Bonbon's fruity opening sets it apart, offering a distinctive allure.
      </p>
      <ResponsiveIframe src="https://shopmy.us/collections/public/516464?noHeader=true" title="Final Touches" />
      <h2 style={headingStyle}>📝 Final Thoughts</h2>
      <p style={paragraphStyle}>
        <strong>Pros and Cons:</strong> While its gourmand charm and lasting warmth are undeniable, those in search of spicier more mature scents might look elsewhere, perhaps preferring <a href="https://www.nordstrom.com/s/petra-eau-de-parfum/7207411?utm_channel=low_nd_affiliates_influencer&utm_content=&utm_term=2340682&utm_source=impact&utm_medium=affiliate_influencer&utm_campaign=shopmyshelf&irclickid=3vRVdo0yhxyKUwhRA0yln1DiUkHVrSVlrStwwQ0&irgwc=1" target="_blank" style={{ color: 'black', textDecoration: 'underline' }}>Legacy of Petra by Penhaligon's</a>.
      </p>
      <p style={paragraphStyle}>
        <strong>Value for Money:</strong> Bonbon is a testament to its craftsmanship, offering a unique and enduring fragrance that justifies its price tag.
      </p>
      <p style={paragraphStyle}>
        <strong>Who Would Enjoy It:</strong> A must-try for gourmand fragrance aficionados seeking a sophisticated twist on sweetness.
      </p>
      <div style={{ margin: '20px' }}>
        <AdSenseAd />
      </div>
      <p style={paragraphStyle}>
        Bonbon by Viktor & Rolf is a masterful creation that offers more than just a sweet fragrance; it's a statement of indulgence and pleasure. Its lasting power, unique scent profile, and beautiful packaging make it a fragrance worth exploring for those drawn to sweet, gourmand scents.
      </p>
      <p style={paragraphStyle}>
        Have you tried Viktor & Rolf fragrances? Let me know your thoughts below, I’d love to hear your experience.
      </p>
      <img src={Signature} alt="Signature" style={{ width: '100%' }} />
      <div style={{ margin: '20px' }}>
        <AdSenseAd />
      </div>
      <Comments website-id={websiteId} page-id="BonBon" />
    </div>
  );

  return (
    <div>
      <div><TextReveal text='PERFUME PROFILE' /></div>
      <div ref={blogRef} style={{ width: '100%', maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
        <Card
          title="BonBon Review"
          description="A celebration of self-indulgence, a fragrant ode to the joy of savoring life's sweet moments. Its timeless appeal beckons one to a world of pure, unadulterated pleasure."
          blogContent={blogContent}
        />
      </div>
    </div>
  );
};

export default BonBonReview;
