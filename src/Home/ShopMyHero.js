import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import ThreeSections from '../Shop/ThreeSections';
import ShopMySlider from './ShopMySlider';

const ShopMyHero = () => {
  const linkRef = useRef(null);
  const [isJiggling, setIsJiggling] = useState(false);

  useEffect(() => {
    const currentLinkRef = linkRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsJiggling(true);
          setTimeout(() => {
            setIsJiggling(false);
          }, 4000); // Stop jiggling after 4 seconds
        }
      },
      {
        threshold: 0.1, // Adjust this value as needed
      }
    );

    if (currentLinkRef) {
      observer.observe(currentLinkRef);
    }

    return () => {
      if (currentLinkRef) {
        observer.unobserve(currentLinkRef);
      }
    };
  }, []);

  const containerStyle = {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'stretch',
    position: 'relative',
    flexWrap: 'wrap',
  };

  const imageSectionStyle = {
    flex: '1 1 33%',
    maxWidth: '33%',
    position: 'relative',
  };

  const iframeSectionStyle = {
    flex: '1 1 67%',
    maxWidth: '67%',
    marginBottom: '0',
    paddingTop: '10rem',
  };

  const overlayTextStyle = {
    position: 'absolute',
    width: '50%',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Arapey, serif',
    fontStyle: 'italic',
    margin: '0',
    padding: '0.5rem 0',
    fontSize: '5vw', // Responsive font size based on viewport width
  };

  const overlayTextTopStyle = {
    ...overlayTextStyle,
    top: '0',
  };

  const overlayTextBottomStyle = {
    ...overlayTextStyle,
    bottom: '0',
  };

  const mediaQueryStyle = `
    @media (max-width: 1200px) {
      .container {
        flex-direction: column;
      }

      .imageSection {
        order: 2; /* Move the image section below the iframe section */
        max-width: 100%;
      }

      .iframeSection {
        order: 1; /* Ensure iframe stays on top */
        max-width: 100%;
      }
    }

    @media (max-width: 768px) {
      .overlayText {
        font-size: 7vw;
      }

      .iframeSection {
        height: 300px; /* Adjust iframe height on medium screens */
      }
    }

    @media (max-width: 480px) {
      .container {
        flex-direction: column; /* Stack the sections vertically */
        padding-top: 5rem; /* Reduce padding for small screens */
      }

      .imageSection {
        flex: 1 1 100%;
        max-width: 100%;
      }

      .overlayText {
        font-size: 9vw;
      }

      .iframeSection {
        flex: 1 1 100%;
        max-width: 100%;
        height: 200px; /* Adjust iframe height on small screens */
      }
    }
  `;

  return (
    <div style={{ backgroundColor: 'white' }}>
      <style>{mediaQueryStyle}</style>
      <div className="sectionStyle"></div>
      <ShopMySlider />
      <div className="container" style={containerStyle}>
        <ThreeSections
          section1Content={<></>}
          section2Content={<></>}
          section3Content={<></>}
        />
      </div>
      <Box sx={{ textAlign: 'right', mt: 2, mr: 5 }}>
        <a
          href="/mystyle"
          ref={linkRef}
          className={isJiggling ? 'jiggle' : ''}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            fontFamily: 'GFS Didot, serif',
            color: 'black',
            textDecoration: 'none',
          }}
        >
          <Typography variant="body1" sx={{ fontSize: '1.5rem', fontFamily: 'GFS Didot, serif', color: 'black', marginTop: '2.5rem', marginBottom: '4rem' }}>
            SHOP MY STYLE
          </Typography>
          <Box component="span" sx={{ ml: 1, fontWeight: 'bold' }}>&rarr;</Box>
        </a>
      </Box>
    </div>
  );
};

export default ShopMyHero;
