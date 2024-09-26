import React from 'react';
import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ShareIcon from '@mui/icons-material/Share';

const SocialShare = ({ url, title, imageUrl }) => {
  return (
    <div style={{ color: '#745B4F', display: 'flex', justifyContent: 'center', gap: '10px', margin: '20px 0' }}>
      <IconButton
        color="#745B4F"
        onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')}
        aria-label="Share on Facebook"
      >
        <FacebookIcon />
      </IconButton>

      <IconButton
        color="#745B4F"
        onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank')}
        aria-label="Share on Twitter"
      >
        <TwitterIcon />
      </IconButton>

      <IconButton
        color="#745B4F"
        onClick={() => window.open(`https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(imageUrl)}&description=${encodeURIComponent(title)}`, '_blank')}
        aria-label="Share on Pinterest"
      >
        <PinterestIcon />
      </IconButton>

  

      <IconButton
        color="#745B4F"
        onClick={() => navigator.share && navigator.share({ title, url })}
        aria-label="Share"
      >
        <ShareIcon />
      </IconButton>
    </div>
  );
};

export default SocialShare;