import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useMediaQuery from '@mui/material/useMediaQuery';

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
  { img: image1, title: 'Jackie Wyers as Sophia Loren' },
  { img: image2, title: 'Jackie Wyers as Margot Robbie' },
  { img: image3, title: 'Jackie Wyers Latte Makeup Headshot' },
  { img: image4, title: 'Jackie Wyers Hair Tutorials' },
  { img: image5, title: 'Jackie Wyers New York City' },
  { img: image6, title: 'Jackie Wyers Barbie Margot' },
  { img: image7, title: 'Jackie Wyers in San Diego' },
  { img: image8, title: "Jackie Wyers Penhaligon's Campaign" },
];

export default function QuiltedImageList1() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(max-width:900px)');

  // Determine the number of columns based on screen size
  const getCols = () => {
    if (isSmallScreen) return 2;
    if (isMediumScreen) return 3;
    return 4;
  };

  // Determine the height of each row
  const getRowHeight = () => {
    if (isSmallScreen) return '30vh';
    if (isMediumScreen) return '25vh';
    return '20vh';
  };

  return (
    <ImageList
      sx={{ 
        width: '100%', 
        height: 'auto', 
        boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.9)',
        gap: 8,
      }}
      variant="quilted"
      cols={getCols()}
      rowHeight={getRowHeight()}
    >
      {itemData.map((item, index) => (
        <ImageListItem key={index} cols={1} rows={1}>
          <img
            src={item.img}
            alt={item.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
