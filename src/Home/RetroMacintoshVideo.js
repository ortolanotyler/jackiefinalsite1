import React from 'react';

const RetroMacintoshVideo = ({ videoUrl }) => {
  const containerStyle = {
    position: 'relative',
    width: '800px', // Adjust based on the actual width of your image
    height: '600px', // Adjust based on the actual height of your image
    margin: '0 auto',
    backgroundImage: `url('/path-to-your-image/A_retro_1990s_Macintosh_computer_redesigned_with_a.png')`, // Replace with the actual path to your image
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  const videoStyle = {
    position: 'absolute',
    top: '27%', // Adjust to match the screen position in the image
    left: '18%', // Adjust to match the screen position in the image
    width: '64%', // Adjust to match the screen size in the image
    height: '36%', // Adjust to match the screen size in the image
    border: 'none',
  };

  return (
    <div style={containerStyle}>
      <iframe
        style={videoStyle}
        src={videoUrl}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default RetroMacintoshVideo;