import React from 'react';


import Slider1 from './aaaa';

import Slider2 from './bbb';

import Slider3 from './ccc';
import Slider4 from './ddd';


import TextReveal from '../../Components/TextReveal';

const NewTutorials = () => {
  return (

    <div><TextReveal text="LATEST" />
    <div
    >
 
       
     

        
      
      <Slider1 />
      <TextReveal text='TRENDING NOW' />
      <Slider2 />
      <TextReveal text='POP CULTURE OBSESSED' />
      <Slider3/>
      <TextReveal text='VINTAGE VIBES' />
      <Slider4/>
      

    </div></div>
  );
};

export default NewTutorials;
