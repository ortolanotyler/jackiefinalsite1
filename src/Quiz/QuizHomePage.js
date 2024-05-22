import React from 'react';

import { Grid, Paper } from '@mui/material';
import TextReveal from '../Components/TextReveal';
import Quiz2 from './Quiz2';
import ResponsiveIframe from '../Components/ResponsiveIframe';

const QuizHomepage = () => {
    return (
        <div>
 
            <div>
       
            
                
                    <TextReveal text=' 🐰🦌 WHICH ANIMAL FACE TYPE ARE YOU? 🦊🐈‍⬛' />
                
                <Grid item xs={12}>
   
        </Grid>
                <Quiz2 />
            </div>

            <ResponsiveIframe src="https://shopmy.us/collections/public/558319" title="Final Touches" />

              
          
        </div>
    );
};

export default QuizHomepage;
