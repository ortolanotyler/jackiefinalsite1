import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// Import your images
const image1 = `${process.env.PUBLIC_URL}/Images/HomePage1.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/HomePage2.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/HomePage3.jpg`;
const image4 = `${process.env.PUBLIC_URL}/Images/HomePage4.jpg`;
const image5 = `${process.env.PUBLIC_URL}/Images/HomePage5.jpg`;
const image6 = `${process.env.PUBLIC_URL}/Images/HomePage6.jpg`;
const image7 = `${process.env.PUBLIC_URL}/Images/HomePage7.jpg`;
const image8 = `${process.env.PUBLIC_URL}/Images/HomePage8.jpg`;



const itemData = [
  {
    img: image1,
    title: 'Image 1',
  },
  {
    img: image2,
    title: 'Image 2',
  },
  {
    img: image3,
    title: 'Image 3',
  },
  {
    img: image4,
    title: 'Image 4',
  },
  {
    img: image5,
    title: 'Image 5',
  },
  {
    img: image6,
    title: 'Image 6',
  },
    {
        img: image7,
        title: 'Image 7',
    },
    {
        img: image8,
        title: 'Image 8',
    },

  // ... repeat for each image ...

];

export default function QuiltedImageList1() {
  return (
    <ImageList
      sx={{ width: '100%', height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={'100%'}
      marginBottom={'2rem'}
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
