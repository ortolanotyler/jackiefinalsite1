import React from 'react';
import { Helmet } from 'react-helmet';
import Slider2 from './bbb';
import Slider4 from './ddd';
import Ccc from './ccc';
import { Paper } from '@mui/material';
import TextReveal from '../../Components/TextReveal';
import RotatingText from '../../Navigation/AppBar/RotatingText';
import Eeebridal from './eeebridal';

const HomeTutorials = () => {
  return (
    <>
      <Helmet>
        <title>Makeup Tutorials Home - Jackie Wyers</title>
        <meta name="description" content="Explore makeup tutorials from pop culture, trends, and vintage vibes by Jackie Wyers. Find inspiration and step-by-step guides for various looks." />
      </Helmet>
      <div>
      <TextReveal text='BRIDAL' />
      <Eeebridal />
        <TextReveal text="POP CULTURE" />
        <Ccc />
        <TextReveal text='MAKEUP TRENDS' />
        <Slider2 />
        <TextReveal text='VINTAGE VIBES' />
        <Slider4 />
       
      </div>
    </>
  );
};

export default HomeTutorials;
