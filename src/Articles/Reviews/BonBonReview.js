import React, { useRef } from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';
import TextReveal from '../../Components/TextReveal';
import ResponsiveIframe from '../../Components/ResponsiveIframe';
import './ExampleTutorial.css';
import DropCap from '../../Components/DropCap';

const BonBon1A = `${process.env.PUBLIC_URL}/Images/Articles/BonBonReview/BonBon1A.png`;
const BonBon2 = `${process.env.PUBLIC_URL}/Images/Articles/BonBonReview/BonBon2.jpg`;
const Signature = `${process.env.PUBLIC_URL}/Images/Articles/Signature.png`;

const Card = ({ blogContent }) => (
  <div>
      <div><TextReveal text='PERFUME PROFILE' /></div>
      <div className="card" style={{ maxWidth: '100%', display: 'flex', textAlign: 'left', backgroundColor: 'white', color: 'black', fontFamily: 'GFS Didot, sans-serif' }}>
          <div className="blog-content" style={{ lineHeight: '1.25' }}>{blogContent}</div>
      </div>
  </div>
);

const BonBonReview = () => {
  const websiteId = '10910';
  const blogRef = useRef(null);

  const headingStyle = {
      textAlign: 'center',
      fontSize: '40px',
      fontWeight: 'normal',
      fontFamily: 'GFS Didot, serif',
      color: '#333',
      marginTop: '0.95rem',
      marginBottom: '0.95rem'
  };

  const paragraphStyle = {
      fontSize: '21px',
      fontFamily: 'GFS Didot, serif',
      margin: '5rem',
      marginTop: '3rem',
      marginBottom: '3rem',
      maxWidth: '100%',
      lineHeight: '1.5em'
  };

  const blogContent = (
      <div className="container" style={{ lineHeight: '2.25rem', maxWidth: '100%', margin: '27rem', marginTop: '5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
              <a href="/reviews" style={{ fontFamily: 'Arapey', fontSize: '1.5em', color: 'black', textDecoration: 'none' }}>
                  BEAUTY // REVIEWS
              </a>
          </div>

          <img src={BonBon1A} alt="BonBon 1" style={{ width: '100%' }} />
          <img src={BonBon2} alt="BonBon 2" style={{ maxBlockSize: '800px', width: '100%' }} />

          <DropCap text="Bonbon is a celebration of self-indulgence, a fragrant ode to the joy of savouring life's sweet moments. Its timeless appeal beckons one to a world of pure, unadulterated pleasure." />

          <h2 style={headingStyle}>🍑 Background Information</h2>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth: '100%', marginLeft: '0em' }}>
              <div style={{ marginBottom: '0.7rem' }}>
                  <strong>Concentration:</strong> Eau de Parfum
              </div>
              <div style={{ marginBottom: '0.7rem' }}>
                  <strong>Fragrance Family:</strong> Floral Fruity Gourmand
              </div>
              <div style={{ marginBottom: '0.7rem' }}>
                  <strong>Top Notes:</strong> Mandarin, Orange, Peach
              </div>
              <div style={{ marginBottom: '0.7rem' }}>
                  <strong>Heart/Middle Notes:</strong> Caramel, Jasmine, Orange blossom
              </div>
              <div style={{ marginBottom: '0.7rem' }}>
                  <strong>Base Notes:</strong> Amber, Guaïac wood, Cedarwood, Sandalwood
              </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth: '100%', marginLeft: '0em' }}>
              <div style={{ marginBottom: '0.7rem' }}>
                  <strong>Price:</strong> 1.0 oz (30ml) is priced at $80.00 USD
              </div>
              <div style={{ marginBottom: '0.7rem' }}>
                  1.7 oz (50ml) - $110.00 USD
              </div>
              <div style={{ marginBottom: '0.7rem' }}>
                  3.0 oz (90ml) - $170.00 USD
              </div>
          </div>

          <h2 style={headingStyle}> 🍬 Profile</h2>

          <p style={paragraphStyle}>
              A luscious peach opening gives way to a heart overflowing with caramel's sweet embrace, tempered by delicate floral whispers. The base, a comforting blend of warm woods, anchors the fragrance in sophistication.
          </p>

          <h2 style={headingStyle}>Personal First Impressions</h2>

          <p style={paragraphStyle}>
              My first brush with Bonbon took place in a Nordstrom back in 2015. Before that moment, the realm of high-end perfumes was uncharted territory for me. Yet, as I passed by the counter, the luxurious packaging caught my eye — a whimsically wrapped candy in deep magenta hues, cradled in an equally charming pink and black box. It was love at first sight!
          </p>

          <p style={paragraphStyle}>
          With my first whiff of Bonbon's sweet, sophisticated aroma, I was instantly captivated. This eau de parfum, with its notes of peach, caramel, and amber, immediately drew me in. After purchasing a bottle, the staff packed it with tissue paper spritzed with the fragrance. That day, as I walked through the mall, I received a bunch of compliments 🎀 🍬.          </p>

          <p style={paragraphStyle}>
              As a young adult at the time with a fondness for sweet, playful scents, I steered away from body sprays and anything too fruity. I’ve always been drawn to fragrances that lay on a foundation of sandalwood as they feel warm, woody, and inviting alongside the sweetness. This is why Bonbon was the perfect, first-luxury perfume buy that I’d recommend for <strong> teens or young adults who love a mature, but sweet scent.</strong>
          </p>

          <ResponsiveIframe src="https://shopmy.us/collections/public/549701?noHeader=true" title="Final Touches" />

          <h2 style={headingStyle}> ❤️ Review & Recommendations</h2>

          <p style={paragraphStyle}>
              <strong>Longevity:</strong> A commendable 6 to 8 hours on the skin, though individual experiences may vary.
          </p>
          <p style={paragraphStyle}>
              <strong>Sillage:</strong> Its presence is assertive yet not overpowering, leaving a trail of intrigue.
          </p>
          <p style={paragraphStyle}>
              <strong>Occasions and Seasonality:</strong> Ideal for the cooler embrace of autumn and winter, Bonbon transitions seamlessly from daytime charm to evening elegance.
          </p>

          <h2 style={headingStyle}>Comparisons</h2>

          <p style={paragraphStyle}>
              Lovers of sweet gourmands and vanilla will find joy in exploring similar fragrances, like Bianco Latte Giardini Di Toscana, with its own take on caramel. Yet, Bonbon's fruity opening sets it apart, offering a distinctive allure.
          </p>

          <ResponsiveIframe src="https://shopmy.us/collections/public/516464?noHeader=true" title="Final Touches" />

          <h2 style={headingStyle}> 📝 Final Thoughts</h2>

          <p style={paragraphStyle}>
              <strong>Pros and Cons:</strong> While its gourmand charm and lasting warmth are undeniable, those in search of spicier or more subdued scents might look elsewhere, perhaps to the likes of Legacy of Petra by Penhaligon's for a woodsy, spicy alternative.
          </p>
          <p style={paragraphStyle}>
              <strong>Value for Money:</strong> Bonbon is a testament to its craftsmanship, offering a unique and enduring fragrance that justifies its price tag.
          </p>
          <p style={paragraphStyle}>
              <strong>Who Would Enjoy It:</strong> A must-try for gourmand fragrance aficionados seeking a sophisticated twist on sweetness.
          </p>
          <p style={paragraphStyle}>
              Bonbon by Viktor & Rolf is a masterful creation that offers more than just a sweet fragrance; it's a statement of indulgence and pleasure. Its lasting power, unique scent profile, and beautiful packaging make it a fragrance worth exploring for those drawn to sweet, gourmand scents.
          </p>
          <p style={paragraphStyle}>
              Have you tried Viktor & Rolf fragrances? Let me know your thoughts below, I’d love to hear your experience.
          </p>

          <img src={Signature} alt="Signature" style={{ width: '100%' }} />
          <Comments website-id={websiteId} page-id="BonBon" />

      </div>
  );

  return (
      <div ref={blogRef}>
          <Card
              title="BonBon Review"
              description="A celebration of self-indulgence, a fragrant ode to the joy of savouring life's sweet moments. Its timeless appeal beckons one to a world of pure, unadulterated pleasure."
              blogContent={blogContent}
              style={{
                  display: 'flex',
                  justifyContent: 'center',
                  textAlign: 'left'
              }}
          />
      </div>
  );
};

export default BonBonReview;
