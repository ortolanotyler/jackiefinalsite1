import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// Import your images
const image1 = `${process.env.PUBLIC_URL}/Images/Home/homepage1.webp`;
const image2 = `${process.env.PUBLIC_URL}/Images/Home/homepage2.webp`;
const image3 = `${process.env.PUBLIC_URL}/Images/Home/homepage5.webp`;
const image4 = `${process.env.PUBLIC_URL}/Images/Home/homepage4.webp`;

const itemData = [
  { img: image3, title: 'Beauty', link: '/tutorials' },
  { img: image2, title: 'Quiz', link: '/quiz' },

  { img: image1, title: 'Travel', link: '/travel' },
  { img: image4, title: 'Pop Culture', link: '/popculture' },
 
];

export default function QuiltedImageList1() {
  return (
    <ImageList
      sx={{
        width: '100%',
        maxHeight: '100vh',
        overflowY: 'hidden',
        borderRadius: '1px',
        position: 'relative',
      }}
      variant="quilted"
      cols={4}
      gap={2}
    >
      {itemData.map((item, index) => (
        <ImageListItem
          key={index}
          cols={1}
          rows={1}
          sx={{
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative', // Make position relative to allow overlaying
            height: '350px', // Set a fixed height for all images
          }}
        >
          <img
            src={item.img}
            alt={item.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover', // Ensures images cover the area without stretching
            }}
          />
          <a
            href={item.link}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.095)', // Semi-transparent background
              color: '#ffffff',
              padding: '1px 20px',
              borderRadius: '5px',
              textDecoration: 'none',
              fontFamily: 'Playfair Display, serif',
              fontSize: '33px',
              fontWeight: '400',
              textAlign: 'center',
              transition: '0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)')}
          >
            {item.title}
          </a>
        </ImageListItem>
      ))}
    </ImageList>
  );
}