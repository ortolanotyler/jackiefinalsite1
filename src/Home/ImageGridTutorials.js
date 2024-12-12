import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const image1 = `${process.env.PUBLIC_URL}/Images/Home/homepage1.webp`;
const image2 = `${process.env.PUBLIC_URL}/Images/Home/homepage2.webp`;
const image3 = `${process.env.PUBLIC_URL}/Images/Home/homepage5.webp`;
const image4 = `${process.env.PUBLIC_URL}/Images/Home/homepage4.webp`;

const itemData = [
  { img: image3, title: 'Beauty', link: '/tutorials' },
  { img: image2, title: 'Quiz', link: '/quiz-2-home' },
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
            position: 'relative',
            height: '450px',
          }}
        >
          {/* Image with darken effect */}
          <div
            style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease, filter 0.5s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'brightness(0.7)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'brightness(1)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
          </div>

          {/* Title with enlarge effect */}
          <a
            href={item.link}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'transparent',
              color: '#ffffff',
              padding: '1rem 2rem',
              textDecoration: 'none',
              fontFamily: 'Playfair Display, serif',
              textAlign: 'center',
              fontSize: '20px',
              fontWeight: '400',
              transition: 'transform 0.3s ease, font-size 0.3s ease',
              zIndex: 2,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.2)';
              e.currentTarget.style.fontSize = '22px';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
              e.currentTarget.style.fontSize = '20px';
            }}
          >
            {item.title}
          </a>
        </ImageListItem>
      ))}
    </ImageList>
  );
}