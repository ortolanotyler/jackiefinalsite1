// src/components/HeaderImage.js
import React from 'react';
import { styled } from '@mui/system';

const HeaderImage = () => {
  return (
    <ImageContainer>
      <StyledImage src={`${process.env.PUBLIC_URL}/Images/Home/Header1.png`} alt="Header" />
    </ImageContainer>
  );
};

const ImageContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '100%',



}));

const StyledImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '2000px',
  height: '100%',

}));

export default HeaderImage;
