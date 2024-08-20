import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// Import your images
const image1 = `${process.env.PUBLIC_URL}/Images/Home/homepage1.webp`;
const image2 = `${process.env.PUBLIC_URL}/Images/Home/homepage2.webp`;
const image3 = `${process.env.PUBLIC_URL}/Images/Home/homepage3.webp`;
const image4 = `${process.env.PUBLIC_URL}/Images/Home/homepage4.webp`;
const image5 = `${process.env.PUBLIC_URL}/Images/Home/homepage5.webp`;
const image6 = `${process.env.PUBLIC_URL}/Images/Home/homepage6.webp`;
const image7 = `${process.env.PUBLIC_URL}/Images/Home/homepage7.webp`;
const image8 = `${process.env.PUBLIC_URL}/Images/Home/homepage8.webp`;

const itemData = [
  { img: image1, title: 'Jackie Wyers as Sophia Loren' },
  { img: image2, title: 'Jackie Wyers as Margot Robbie' },
  { img: image3, title: 'Jackie Wyers Latte Makeup Headhot' },
  { img: image4, title: 'Jackie Wyers Hair Tutorials' },
  { img: image5, title: 'Jackie Wyers New York City' },
  { img: image6, title: 'Jackie Wyers Barbie Margot' },
  { img: image7, title: 'Jackie Wyers in San Diego' },
  { img: image8, title: "Jackie Wyers Penhaligon's Campaign" },
];

export default function QuiltedImageList1() {
  return (
    <ImageList
      sx={{
        width: '100%',
        height: '100%',
        maxHeight: '100vh',
        overflowY: 'auto', // Enables scrolling
        
      }}
      variant="quilted"
      cols={4}
      gap={2} // Adjust gap between images
    >
      {itemData.map((item, index) => (
        <ImageListItem
          key={index}
          cols={1} // Ensures a consistent 4 columns
          rows={1} // Ensures a consistent 2 rows
          sx={{
            overflow: 'hidden', // Hide any overflow from the images
          }}
        >
          <img
            src={item.img}
            alt={item.title}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover', // Ensure images cover the entire tile without distortion
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
