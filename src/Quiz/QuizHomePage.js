import React from 'react';
import Quiz1 from './Quiz1';
import { Grid, Paper } from '@mui/material';
import TextReveal from '../Components/TextReveal';
import RotatingText from '../Navigation/AppBar/RotatingText';

const QuizHomepage = () => {
    return (
        <div>
 
            <div>
            <TextReveal text='QUIZ QUEEN' />
            
                    <Paper elevation={3} sx={{ backgroundColor: 'white', fontFamily: 'GFS Didot', padding: '1rem' }}>
                    <RotatingText />
                    </Paper>
               
                
                <Grid item xs={12}>
   
        </Grid>
                <Quiz1 />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: '50%' }}>
                    <TextReveal text='HOW MANY CATS SHOULD YOU GET?' />
                </div>
                <Quiz1 />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: '50%' }}>
                    <TextReveal text='ARE YOU EVEN A SWIFTIE?' />
                </div>
                <Quiz1 />
            </div>
        </div>
    );
};

export default QuizHomepage;
