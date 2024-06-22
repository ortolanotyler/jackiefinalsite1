import React from 'react';
import { Grid } from '@mui/material';

const VideoEmbed = () => {
  const originalWidth = 560;
  const originalHeight = 315;
  const scaleFactor = 1.25; // 25% bigger

  const newWidth = originalWidth * scaleFactor;
  const newHeight = originalHeight * scaleFactor;

  return (
    <Grid item xs={12} display="flex" justifyContent="center" sx={{ mt: 2 }}>
      <iframe
        width={newWidth}
        height={newHeight}
        src="https://www.youtube.com/embed/Uz03ReLZO9k?si=zWnzPrrt4i10KSxF&amp;controls=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={{ border: 'none', maxWidth: '100%' }}
      />
    </Grid>
  );
};

export default VideoEmbed;
