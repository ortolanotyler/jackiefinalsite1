import React from 'react';
import { Paper } from '@mui/material';
import ReviewArticleList from './ReviewArticleList';
import TextReveal from '../Components/TextReveal';
import RotatingText from '../Navigation/AppBar/RotatingText';
import ResponsiveIframe from '../Components/ResponsiveIframe';

const ReviewHomePage = () => {
    return (
        <div>
            <TextReveal text="REVIEWS" />
            <div>
                <Paper elevation={3} sx={{ backgroundColor: 'white', fontFamily: 'GFS Didot, serif', borderRadius: '4px', color: "#745B4F", textAlign: 'center', padding: '1em' }}>
                    <RotatingText />
                </Paper>
            </div>
            <div>
                <ReviewArticleList />
            </div>
            <TextReveal text="DRUG STORE FAVS" />
            <ResponsiveIframe
                src="https://shopmy.us/collections/embed/91810?noHeader=true"
                title="Collection name here"
            />
        </div>
    );
};

export default ReviewHomePage;
