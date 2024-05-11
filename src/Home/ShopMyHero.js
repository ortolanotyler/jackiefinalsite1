import React from 'react';
const fashionImage = `${process.env.PUBLIC_URL}/Images/mystyle8.jpg`;


function ShopMyHero() {
  return (
    <div style={{ display: 'flex', width: '100%', flexDirection: 'row', alignItems: 'stretch', position: 'relative', flexWrap: 'wrap' }}>
      {/* Image Section with Text Overlay and Link */}
      <div style={{ flex: '1 1 33%', maxWidth: '33%', position: 'relative' }}>
        {/* Link wrapping the image */}
        <a href="/mystyle">
          <img src={fashionImage} alt="Fashion" style={{ width: '100%', height: 'auto' }} />
        </a>
        <h1 style={{
          position: 'absolute',
          top: 0,
          width: '100%',
          color: 'white',
          textAlign: 'center',
          fontFamily: "'Arapey', serif",
          fontStyle: 'italic', // Arapey is mostly used in italic style
          margin: 0,
          padding: '0.5rem 0', // Adds space top and bottom
          fontSize: '5vw' // Responsive font size based on viewport width
        }}>
          SHOP
        </h1>
        <h1 style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          color: 'white',
          textAlign: 'center',
          fontFamily: "'Arapey', serif",
          fontStyle: 'italic',
          margin: 0,
          padding: '0.5rem 0', // Adds space top and bottom
          fontSize: '5vw' // Responsive font size based on viewport width
        }}>
          STYLE
        </h1>
      </div>
      <div style={{ flex: '1 1 67%', maxWidth: '67%', marginBottom: '0', paddingTop: '10rem' }}>

        {/* New iframe for "Sleek Spring" */}
        <iframe
          title="Sleek Spring"
          src="https://shopmy.us/collections/embed/379944?"
          style={{ width: '100%', height: '100%', border: 'none' }} // Height can be adjusted or made responsive with vw if needed
        ></iframe>
      </div>

      {/* Inline styles for responsiveness */}
      <style>
        {`
          @media (max-width: 768px) {
            .ShopMyHero div {
              flex-basis: 100%;
              max-width: 100%;
            }
            .ShopMyHero h1 {
              font-size: 7vw;
            }
            .ShopMyHero iframe {
              height: 300px; // Adjust iframe height on medium screens
            }
          }

          @media (max-width: 480px) {
            .ShopMyHero div {
              padding-top: 5rem; // Reduce padding for small screens
            }
            .ShopMyHero h1 {
              font-size: 9vw;
            }
            .ShopMyHero iframe {
              height: 200px; // Adjust iframe height on small screens
            }
          }
        `}
      </style>
    </div>
  );
}

export default ShopMyHero;
