import React, { useState, useEffect } from 'react';

const RetroTV = () => {
  const videos = [
    'https://www.youtube.com/embed/hIGr8Gj4kQA?si=ENN3F80y0EDGCsh-', // Placeholder video 1
    'https://www.youtube.com/embed/hIGr8Gj4kQA?si=ENN3F80y0EDGCsh-', // Placeholder video 2
    'https://www.youtube.com/embed/hIGr8Gj4kQA?si=ENN3F80y0EDGCsh-', // Placeholder video 3
    'https://www.youtube.com/embed/hIGr8Gj4kQA?si=ENN3F80y0EDGCsh-', // Placeholder video 4
    'https://www.youtube.com/embed/hIGr8Gj4kQA?si=ENN3F80y0EDGCsh-', // Placeholder video 5
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 10000); // Change video every 10 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [videos.length]);

  const containerStyle = {
    fontSize: '10px',
    margin: 'auto',
    width: '51em',
    height: '52.5em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const tvBodyStyle = {
    backgroundColor: '#ffc0cb', // Pink color
    backgroundImage:
      'radial-gradient(10em 0.4em at 8em 0.8em, #fff, #fff0), radial-gradient(10em 0.4em at 20em 0.8em, #fff, #fff0), radial-gradient(10em 0.4em at 36em 0.8em, #fff, #fff0), radial-gradient(14em 0.8em at 6em 2em, #fff 50%, #fff0), radial-gradient(55em 0.4em at 50% 2em, #fff3, #fff0), linear-gradient(#0000, #0004), radial-gradient(12em 0.4em at 32em 2em, #fff, #fff0)',
    borderRadius: '0.75em 0.75em 0.75em 0.75em / 3em 3em 0.75em 0.75em',
    boxShadow: '0 -1em 0.75em #ba816c7f inset',
    flexDirection: 'column',
    alignItems: 'center',
    height: '51em',
    display: 'flex',
    justifyContent: 'center',
    padding: '2em',
  };

  const screenContainerStyle = {
    position: 'relative',
    width: '38em',
    height: '28em',
    backgroundColor: '#000',
    borderRadius: '1em',
    overflow: 'hidden',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.7), inset 0 0 10px rgba(255, 255, 255, 0.1)',
  };

  const iframeStyle = {
    width: '100%',
    height: '100%',
    border: 'none',
    position: 'absolute',
    top: '0',
    left: '0',
  };

  const screenFrameStyle = {
    position: 'absolute',
    top: '-1em',
    left: '-1em',
    width: 'calc(100% + 2em)',
    height: 'calc(100% + 2em)',
    border: '0.5em solid #ffc0cb', // Pink frame
    borderRadius: '1em',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)',
  };

  const logoBadgeStyle = {
    background: '#ff69b4', // Hot pink
    borderRadius: '0.25em',
    boxShadow: '0 0.2em 0.2em #fff4 inset, 0 -0.2em 0.2em #0004 inset',
    color: '#fff',
    fontSize: '1.5em',
    fontFamily: 'Playball, cursive',
    lineHeight: '1.5',
    margin: '0.4em 0',
    textAlign: 'center',
    width: '2.4em',
    height: '1.5em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const controlsStyle = {
    backgroundColor: '#ff69b4',
    borderRadius: '1.5em',
    boxShadow: '0 0.3em 0.5em 0.5em #0007',
    padding: '2em',
    height: '12em',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '38em',
    marginTop: '1em',
  };

  const ventStyle = {
    backgroundColor: '#fff7',
    marginBottom: '0.4em',
    width: '100%',
    height: '1em',
  };

  const legsStyle = {
    backgroundColor: '#ff69b4',
    boxShadow: '0 0.5em 0.4em #ff69b4',
    justifyContent: 'space-between',
    margin: 'auto',
    width: '49em',
    height: '1.5em',
    display: 'flex',
  };

  const legStyle = {
    backgroundColor: '#ff1493', // Deep pink
    boxShadow: '0 0.4em 0.3em #0007 inset',
    width: '7em',
    height: '100%',
  };

  return (
    <main style={containerStyle}>
      <div style={tvBodyStyle}>
        <div style={screenContainerStyle}>
          <iframe
            src={videos[currentVideoIndex]}
            title="Retro TV Stream"
            style={iframeStyle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div style={screenFrameStyle}></div>
        </div>
        <div style={logoBadgeStyle}>Bush</div>
        <div style={controlsStyle}>
          {[...Array(6)].map((_, index) => (
            <div key={index} style={ventStyle}></div>
          ))}
        </div>
      </div>
      <div style={legsStyle}>
        <div style={legStyle}></div>
        <div style={legStyle}></div>
      </div>
    </main>
  );
};

export default RetroTV;