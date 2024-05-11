import React from 'react';
import styles from './MediaSplitComponent.module.css'; // Import the CSS module

const logo = `${process.env.PUBLIC_URL}/Images/fioriaboutlogo.jpg`;
const product = `${process.env.PUBLIC_URL}/Images/aboutfiori1.png`;
const video = `${process.env.PUBLIC_URL}/Videos/bridal.MOV`;

const MediaSplitComponentLeft = () => {
  return (
    <div className={styles.mediaContainer}>
      {/* Left side with the logo */}
    

      {/* Right side with the video */}
      <div className={styles.videoContainer}>
        <video controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Optional: Another image */}
      <div>
      <div>
        <img src={logo} alt="Logo" style={{ justifyContent:'center',maxBlockSize: '100px' }} />
      </div>
        <img src={product} alt="Product" style={{ maxBlockSize: '500px' }} />
      </div>
    </div>
  );
};

export default MediaSplitComponentLeft;
