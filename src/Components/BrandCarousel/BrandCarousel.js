import React from 'react';

// Import images
const images = [];
for (let i = 1; i <= 21; i++) {
  images.push(require(`./BrandImages/${i}.png`));
}

const BrandCarousel = () => {
  // Inline styles
  const carouselStyle = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  };

  const imageStyle = {
    height: '100px', // Fixed height for uniform appearance
    width: 'auto',   // Width is automatic to maintain aspect ratio
    display: 'inline-block',
    marginRight: '1px',
    objectFit: 'cover', // This ensures the image covers the area, might crop if not the exact aspect ratio
  };
  
  // Double the images for the infinite loop
  const doubledImages = [...images, ...images];

  return (
    <>
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-150px * ${images.length})); }
          }
          .scrolling-track {
            animation: scroll 30s linear infinite;
          }
        `}
      </style>
      <div style={carouselStyle}>
        <div className="scrolling-track">
          {doubledImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Brand ${index % images.length + 1}`}
              style={imageStyle}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BrandCarousel;
