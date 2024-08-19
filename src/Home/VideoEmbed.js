import React, { useEffect, useState, useRef } from 'react';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';

const VideoEmbed = () => {
  const originalWidth = 560;
  const originalHeight = 315;
  const scaleFactor = 1.25; // 25% bigger

  const newWidth = originalWidth * scaleFactor;
  const newHeight = originalHeight * scaleFactor;

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const iframeRef = useRef(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const viewAllRef = useRef(null);
  const [isJiggling, setIsJiggling] = useState(false);

  useEffect(() => {
    const iframe = iframeRef.current;

    const loadIframe = () => {
      if (iframe && !iframeLoaded) {
        iframe.src = iframe.dataset.src;
        setIframeLoaded(true);
      }
    };

    // Use IntersectionObserver to lazy load the iframe
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadIframe();
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Load the iframe when it's within 200px of the viewport
    );

    if (iframe) {
      observer.observe(iframe);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [iframeLoaded]);

  useEffect(() => {
    const keyframes = `
      @keyframes jiggle {
        0% { transform: rotate(0deg); }
        25% { transform: rotate(-3deg); }
        50% { transform: rotate(3deg); }
        75% { transform: rotate(-3deg); }
        100% { transform: rotate(0deg); }
      }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsJiggling(true);
          setTimeout(() => {
            setIsJiggling(false);
          }, 4000); // Stop jiggling after 4 seconds
        }
      },
      {
        threshold: 0.1, // Adjust the threshold as needed
      }
    );

    if (viewAllRef.current) {
      observer.observe(viewAllRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <Grid item xs={12} display="flex" justifyContent="center" sx={{ mt: 1.5, ...(isSmallScreen && { p: 2.5 }) }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <iframe
          width={newWidth}
          height={newHeight}
          data-src="https://www.youtube.com/embed/Uz03ReLZO9k?si=zWnzPrrt4i10KSxF&amp;controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          ref={iframeRef}
          style={{ border: 'none', maxWidth: '100%' }}
          loading="lazy" // Fallback for browsers that support native lazy loading
        />
        <Box sx={{ textAlign: 'center', mt: 1 }}>
          <a
            href="/videos"
            ref={viewAllRef}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              fontFamily: 'GFS Didot, serif',
              color: 'black',
              textDecoration: 'none',
              animation: isJiggling ? 'jiggle 0.5s ease-in-out' : 'none',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                marginTop: '10px',
                fontSize: '1rem',
                margin: '1rem',
                fontFamily: 'GFS Didot, serif',
                color: 'black',
              }}
            >
              VIEW ALL VIDEOS
            </Typography>
            <Box component="span" sx={{  ml: 1, fontWeight: 'bold' }}>&rarr;</Box>
          </a>
        </Box>
      </Box>
    </Grid>
  );
};

export default VideoEmbed;

