import React from 'react';
import { Paper } from '@mui/material';
import TextReveal from '../Components/TextReveal';
import RotatingText from '../Navigation/AppBar/RotatingText';
import ResponsiveIframe from '../Components/ResponsiveIframe';
import TravelArticlesList from './TravelArticleList';

const TravelArticlesHome = () => {
    return (
        <div>
            <TextReveal text='TRAVEL' />
            <div>
                <Paper elevation={3} sx={{ backgroundColor: 'white', fontFamily: 'GFS Didot, serif', borderRadius: '4px', color: "#745B4F", textAlign: 'center', padding: '1em' }}>
                    <RotatingText />
                </Paper>
            </div>
            <div>
                <TravelArticlesList />
            </div>
            <TextReveal text='TRAVEL GO-TO s' />
            <ResponsiveIframe
                src="https://shopmy.us/collections/embed/91810?noHeader=true"
                title="Collection name here"
            />
        </div>
    );
};

export default TravelArticlesHome;
