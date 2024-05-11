import React from 'react';
import TextReveal from '../../Components/TextReveal';

const image1 = `${process.env.PUBLIC_URL}/Images/mediakit1.png`;
const image2 = `${process.env.PUBLIC_URL}/Images/mediakit2.png`;
const image3 = `${process.env.PUBLIC_URL}/Images/mediakit3.png`;

function MediaKit() {
  return (
    <div>
        <TextReveal text = "MEDIA KIT"/>
    
    <div style={{
        margin: '1rem',
        padding: '3rem',
        display: 'flex',
        flexDirection: 'row', // Default to row
        flexWrap: 'wrap', // Allows items to wrap in column on smaller screens
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
        alignItems: 'stretch' // Ensure the images take full height of their container
      }}>
      <img src={image1} alt="Description of  1" style={{ width: '33.33%', height: 'auto', objectFit: 'cover', flex: '1 0 33.33%' }} />
      <img src={image2} alt="Description of  2" style={{ width: '33.33%', height: 'auto', objectFit: 'cover', flex: '1 0 33.33%' }} />
      <img src={image3} alt="Description of  3" style={{ width: '33.33%', height: 'auto', objectFit: 'cover', flex: '1 0 33.33%' }} />
    </div>
    <p
    style = {{
        textAlign: 'center',
        fontsize : '2rem'
    }}
    >For business inquiries and rates, click the mail icon below! </p>
    </div>
  );
}

export default MediaKit;
