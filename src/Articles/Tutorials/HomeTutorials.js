import React from 'react';
import { Helmet } from 'react-helmet';
import Slider2 from './bbb';
import Slider4 from './ddd';
import Ccc from './ccc';
import { Paper } from '@mui/material';
import TextReveal from '../../Components/TextReveal';
import RotatingText from '../../Navigation/AppBar/RotatingText';

const HomeTutorials = () => {
  return (
    <>
      <Helmet>
        <title>Makeup Tutorials Home - Jackie Wyers</title>
        <meta name="description" content="Explore makeup tutorials from pop culture, trends, and vintage vibes by Jackie Wyers. Find inspiration and step-by-step guides for various looks." />
      </Helmet>
      <div>
        <TextReveal text="POP CULTURE" />
        <Paper elevation={5} sx={{ backgroundColor: 'white', fontFamily: 'GFS Didot, serif', borderRadius: '4px', color: '#745B4F', textAlign: 'center' }}>
            <RotatingText />
          </Paper>
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
