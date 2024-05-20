import React from 'react';

import { Grid, Paper } from '@mui/material';
import TextReveal from '../Components/TextReveal';
import RotatingText from '../Navigation/AppBar/RotatingText';
import Quiz2 from './Quiz2';

const QuizHomepage = () => {
    return (
        <div>
 
            <div>
            <TextReveal text='QUIZ QUEEN' />
            
                    <Paper elevation={3} sx={{ backgroundColor: 'white', fontFamily: 'GFS Didot', padding: '1rem' }}>
                    <RotatingText />
                    </Paper>
                    <TextReveal text='WHAT KIND OF PRETTY ARE YOU?' />
                
                <Grid item xs={12}>
   
        </Grid>
                <Quiz2 />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: '50%' }}>
                    <TextReveal text='ARE YOU EVEN A SWIFTIE?' />
                </div>
              
            </div>
        </div>
    );
};

export default QuizHomepage;
