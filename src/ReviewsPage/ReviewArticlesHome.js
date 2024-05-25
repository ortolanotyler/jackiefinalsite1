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
       
            <div
            style = {{
                marginTop: '2rem',
                marginBottom: '2rem',
            }}
            > 
            <TextReveal text="Perfume Profiles" style={{ backgroundColor: 'white' }} fontFamily="Italianno, cursive" />

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
            <TextReveal text="More Product Reviews Coming Soon..." style={{ backgroundColor: 'white' }} fontFamily="Italianno, cursive" />
            </div>
           
            <TextReveal text="JACKIE'S QUICK PICKS" />
            <iframe
      title="Jackie's Top Recommendations"
      src="https://shopmy.us/collections/public/556881?noHeader=true"
      style={{ width: '100%', minHeight: '2400px', border: 'none' }}
    ></iframe>
        </div>
    );
};

export default ReviewHomePage;
