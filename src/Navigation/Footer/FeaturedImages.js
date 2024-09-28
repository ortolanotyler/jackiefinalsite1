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

// Define corresponding URLs
const links = [
  'https://www.vogue.com/article/met-gala-challenge-instagram-photos',
  'https://www.houseofwellness.com.au/beauty/beauty-trends/coppolacore-beauty-trend',
  'https://el.imaginariumworld.co.uk/product-page/imaginarium-magazine-19-april-may-2023',
  'https://www.justjaredjr.com/tags/jackie-wyers/',
  'https://www.ardellshop.com/beauty-of-the-week-jackie-wyers',
  'https://en.nikon.ca/learn-and-explore/c/ideas-and-inspiration/jackie-wyers',
  'https://en.nikon.ca/learn-and-explore/c/ideas-and-inspiration/jackie-wyers',
  'https://www.elle.com/',
  'https://enchantedlivingmagazine.com/lost-lands-collection/',
  'https://www.vogue.com/article/met-gala-challenge-instagram-photos',
];

const StyledMasonry = styled(Masonry)(({ theme }) => ({
  width: '100%',
  margin: 5,
  padding: 10,
  backgroundColor: '#fdedef',
}));

const ImageWrapper = styled('div')({
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  '& img': {
    transition: 'transform 0.3s ease',
  },
  '&:hover img': {
    transform: 'scale(1.05)',
  },
  '&:hover .overlay': {
    opacity: 1,
  },
});

const Overlay = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 0,
  transition: 'opacity 0.3s ease',
});

const Text = styled('div')({
  color: 'white',
  fontSize: '40px',
  fontWeight: 'normal',
  fontFamily: 'GFS Didot, serif',
  textTransform: 'uppercase',
  border: '1px solid white',
  borderRadius: '1px',
  padding: '5px',
  boxSizing: 'border-box',
});

const FeaturedImages = () => {
  return (
    <StyledMasonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={3}>
      {imageUrls.map((url, index) => (
        <ImageListItem key={index}>
          <a href={links[index]} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <ImageWrapper>
              <img
                src={`${url}?w=248&fit=crop&auto=format`}
                srcSet={`${url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={`Featured ${index + 1}`}
                loading="lazy"
              />
              <Overlay className="overlay">
                <Text>Read</Text>
              </Overlay>
            </ImageWrapper>
          </a>
        </ImageListItem>
      ))}
    </StyledMasonry>
  );
};

export default FeaturedImages;
