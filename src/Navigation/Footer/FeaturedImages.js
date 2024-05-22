import React from 'react';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/system';
import ImageListItem from '@mui/material/ImageListItem';

// Define image URLs using process.env.PUBLIC_URL
const image1 = `${process.env.PUBLIC_URL}/Images/MediaKit/Featured1.png`;
const image2 = `${process.env.PUBLIC_URL}/Images/MediaKit/Featured2.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/MediaKit/Featured3.jpg`;
const image4 = `${process.env.PUBLIC_URL}/Images/MediaKit/Featured4.jpg`;
const image5 = `${process.env.PUBLIC_URL}/Images/MediaKit/Featured5.jpg`;
const image6 = `${process.env.PUBLIC_URL}/Images/MediaKit/Featured6.jpg`;
const image7 = `${process.env.PUBLIC_URL}/Images/MediaKit/Featured7.jpg`;
const image8 = `${process.env.PUBLIC_URL}/Images/MediaKit/Featured8.jpg`;
const image9 = `${process.env.PUBLIC_URL}/Images/MediaKit/Featured9.jpg`;
const image10 = `${process.env.PUBLIC_URL}/Images/MediaKit/Featured10.jpg`;

const imageUrls = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];

const StyledMasonry = styled(Masonry)(({ theme }) => ({
  width: '100%',
  margin: 0,
backgroundColor: '#fdedef',
}));

const FeaturedImages = () => {
  return (
    <StyledMasonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={3}>
      {imageUrls.map((url, index) => (
        <ImageListItem key={index}>
          <img
            src={`${url}?w=248&fit=crop&auto=format`}
            srcSet={`${url}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={`Featured ${index + 1}`}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </StyledMasonry>
  );
};

export default FeaturedImages;
