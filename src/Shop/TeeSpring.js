import React from 'react';

const teespring = `${process.env.PUBLIC_URL}/Images/teespringbanner.jpeg`;

const TeeSpring = () => {
  return (
  <div
  style = {{
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.9)',
  }}
  >
      <img src={teespring} alt="teespring" />
  
 <iframe
      style={{ borderRadius: '24px', border: 'none', width: '100%', height: '960px' }}
      src="https://embed.creator-spring.com/widget?slug=shop-jackie-wyers&per=20&currency=&page=1&layout=grid-sm-3&theme=light"
      title="Shop Jackie Wyers Merch store powered by Spring"
      data-reactroot=""
    ></iframe>
    </div>
   
  );
};

export default TeeSpring;
