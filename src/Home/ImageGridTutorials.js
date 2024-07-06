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
    title:'Jackie Wyers New York City',
  },
  {
    img: image6,
    title:'Jackie Wyers Barbie Margot',
  },
    {
        img: image7,
        title: 'Jackie Wyers in San Diego',
    },
    {
        img: image8,
        title:"Jackie Wyers Penhaligon's Campaign",
    },

  // ... repeat for each image ...

];

export default function QuiltedImageList1() {
  return (
    <ImageList
      sx={{ width: '100%', height: '55vh',  boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.9}' }}
      variant="quilted"
      cols={4}
   
      
    >
      {itemData.map((item, index) => (
        <ImageListItem key={index} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            src={item.img}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
