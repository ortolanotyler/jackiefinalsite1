import React from 'react';


import Slider1 from './aaaa';

import Slider2 from './bbb';

import Slider4 from './ddd';


import TextReveal from '../../Components/TextReveal';
import TrendsHome from './Trending/TrendsHome';
import RotatingText from '../../Navigation/AppBar/RotatingText';
import { Paper } from '@mui/material';

const HomeTutorials = () => {
  return (

    <div><TextReveal text="LATEST" />
     <Paper elevation={3} style={{ padding: '1rem', margin: '1rem 0' }}>
     <RotatingText />
     </Paper>
      <Slider1 />
      <TextReveal text='TRENDING NOW' />
      <Slider2 />
      <TextReveal text='POP CULTURE OBSESSED' />
      <TrendsHome/>
      <TextReveal text='VINTAGE VIBES' />
      <Slider4/>
      

   </div>
  );
};

export default HomeTutorials;
