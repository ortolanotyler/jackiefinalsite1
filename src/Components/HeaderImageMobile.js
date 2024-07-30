// src/components/HeaderImage.js
import React from 'react';
import { styled } from '@mui/system';

const HeaderImage = () => {
  return (
    <ImageContainer>
      <StyledImage src={`${process.env.PUBLIC_URL}/Images/Home/MobileHome.png`} alt="Header" />
    </ImageContainer>
  );
};

const ImageContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  marginTop: '1rem',
  
}));

const StyledImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '800px',
  height: 'auto',
  borderRadius: '5px',
  boxShadow: '0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.5)',
}));

export default HeaderImage;
