import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// Import your images
const image1 = `${process.env.PUBLIC_URL}/Images/Home/homepage1.webp`;
const image2 = `${process.env.PUBLIC_URL}/Images/Home/homepage2.webp`;
const image3 = `${process.env.PUBLIC_URL}/Images/Home/homepage5.webp`;
const image4 = `${process.env.PUBLIC_URL}/Images/Home/homepage4.webp`;

const itemData = [
  { img: image3, title: 'Jackie Wyers New York City' },
  { img: image1, title: 'Jackie Wyers as Sophia Loren' },
  { img: image4, title: 'Jackie Wyers Hair Tutorials' },
  { img: image2, title: 'Jackie Wyers as Margot Robbie' },
];

export default function QuiltedImageList1() {
  return (
    <ImageList
      sx={{
      
        width: '100%',
        maxHeight: '100vh',
        overflowY: 'hidden',
        borderRadius: '1px',
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
        </ImageListItem>
      ))}
    </ImageList>
  );
}