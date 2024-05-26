import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// Import your images
const image1 = `${process.env.PUBLIC_URL}/Images/Home/HomePage1.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/Home/HomePage2.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/Home/HomePage3.jpg`;
const image4 = `${process.env.PUBLIC_URL}/Images/Home/HomePage4.jpg`;
const image5 = `${process.env.PUBLIC_URL}/Images/Home/HomePage5.jpg`;
const image6 = `${process.env.PUBLIC_URL}/Images/Home/HomePage6.jpg`;
const image7 = `${process.env.PUBLIC_URL}/Images/Home/HomePage7.jpg`;
const image8 = `${process.env.PUBLIC_URL}/Images/Home/HomePage8.jpg`;

const itemData = [
  {
    img: image1,
    title: 'Jackie Wyers as Sophia Loren',
  },
  {
    img: image2,
    title: 'Jackie Wyers as Margot Robbie',
  },
  {
    img: image3,
    title: 'Jackie Wyers Latte Makeup Headhot',
  },
  {
    img: image4,
    title: 'Jackie Wyers Hair Tutorials',
  },
  {
    img: image5,
    title: 'Jackie Wyers New York City',
  },
  {
    img: image6,
    title: 'Jackie Wyers Barbie Margot',
  },
  {
    img: image7,
    title: 'Jackie Wyers in San Diego',
  },
  {
    img: image8,
    title: "Jackie Wyers Penhaligon's Campaign",
  },
];

export default function QuiltedImageList1() {
  return (
    <ImageList
      sx={{
        width: '100%',
        height: { xs: '50vh', md: '65vh' },
        boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.9)',
        overflowY: 'auto', // Enable scrolling for larger screens
        '& .MuiImageListItem-root': {
          display: 'block',
        },
      }}
      variant="quilted"
      cols={{ xs: 2, sm: 2, md: 4 }}
      gap={8}
    >
      {itemData.map((item, index) => (
        <ImageListItem 
          key={index} 
          cols={index < 4 ? 1 : { xs: 2, sm: 1 }} 
          rows={index < 4 ? 1 : { xs: 2, sm: 1 }}
        >
          <img src={item.img} alt={item.title} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
