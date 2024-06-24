import React from 'react';
import { Grid } from '@mui/material';
import TextReveal from '../Components/TextReveal';
import Quiz2 from './Quiz2';

const QuizHomepage = () => {
    return (
        <div>
            <TextReveal text='🐰🦌 WHICH ANIMAL FACE TYPE ARE YOU? 🦊🐈‍⬛' style = {{backgroundColor: 'white', fontSize: '0.75rem'}} />
            <Grid container justifyContent="center">
                <Grid item xs={12}>
                    <Quiz2 />
                </Grid>
            </Grid>
        </div>
    );
};

export default QuizHomepage;
