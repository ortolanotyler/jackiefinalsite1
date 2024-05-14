import React from 'react';


import Slider1 from './aaaa';

import Slider2 from './bbb';

import Slider4 from './ddd';

import Ccc from './ccc';


import { Paper } from '@mui/material';
import TextReveal from '../../Components/TextReveal';
import RotatingText from '../../Navigation/AppBar/RotatingText';


const HomeTutorials = () => {
  return (

    <div><TextReveal text="LATEST" />
     <Paper elevation={3} style={{ padding: '1rem', margin: '1rem 0' }}>
     <RotatingText />
     </Paper>
      <Slider1 />
      <TextReveal text='TRENDING NOW' />
      <Slider2 />
  
      <Ccc/>
      <TextReveal text='VINTAGE VIBES' />
      <Slider4/>
      

   </div>
  );
};

export default HomeTutorials;
