import React from 'react';
import TextReveal from './Views/MeetJackie/TextReveal';
import { Paper } from '@mui/material';
import RotatingText from './RotatingText';
import ReviewArticleList from './ReviewArticleList';
import ResponsiveIframe from './ResponsiveIframe';

const ReviewHomePage = () => {
    return (
        <div>
            <TextReveal text='REVIEWS' />
            <div>
                <Paper elevation={3} sx={{ backgroundColor: 'white', fontFamily: 'GFS Didot, serif', borderRadius: '4px', color: "#745B4F", textAlign: 'center', padding: '1em' }}>
                    <RotatingText />
                </Paper>
            </div>
            <div>
                <ReviewArticleList />
            </div>
            <TextReveal text='DRUG STORE FAVS' />
            <ResponsiveIframe
                src="https://shopmy.us/collections/embed/91810?noHeader=true"
                title="Collection name here"
            />
        </div>
    );
};

export default ReviewHomePage;
