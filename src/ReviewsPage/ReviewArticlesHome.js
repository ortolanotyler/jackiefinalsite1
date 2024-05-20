import React from 'react';
import { Paper } from '@mui/material';
import ReviewArticleList from './ReviewArticleList';
import TextReveal from '../Components/TextReveal';
import RotatingText from '../Navigation/AppBar/RotatingText';
import ResponsiveIframe from '../Components/ResponsiveIframe';
import ProductReviewArticleList from './ProductReviewList';

const ReviewHomePage = () => {
    return (
        <div>
            <TextReveal text="REVIEWS" />
            <div>
                <Paper elevation={3} sx={{ backgroundColor: 'white', fontFamily: 'GFS Didot, serif', borderRadius: '4px', color: "#745B4F", textAlign: 'center', padding: '1em' }}>
                    <RotatingText />
                </Paper>
            </div>
            <div
            style = {{
                marginTop: '2rem',
                marginBottom: '2rem',
            }}
            > 
            <TextReveal text="Fragrances" style={{ backgroundColor: 'white' }} fontFamily="Italianno, cursive" />

            </div>
            <div>
                <ReviewArticleList />
            </div>
            <div
            style = {{
                marginTop: '2rem',
                marginBottom: '2rem',
            }}
            > 
            <TextReveal text="Products" style={{ backgroundColor: 'white' }} fontFamily="Italianno, cursive" />
            </div>
            <ProductReviewArticleList/>
            <TextReveal text="DRUG STORE FAVS" />
            <ResponsiveIframe
                src="https://shopmy.us/collections/embed/91810?noHeader=true"
                title="Collection name here"
            />
        </div>
    );
};

export default ReviewHomePage;
