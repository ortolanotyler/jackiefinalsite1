import React, { useEffect, useState } from 'react';
import { Paper } from '@mui/material';
import ReviewArticleList from './ReviewArticleList';
import TextReveal from '../Components/TextReveal';
import RotatingText from '../Navigation/AppBar/RotatingText';
import ResponsiveIframe from '../Components/ResponsiveIframe';
import ProductReviewArticleList from './ProductReviewList';

const ReviewHomePage = () => {
    const [iframeInteraction, setIframeInteraction] = useState(false);

    const handleIframePointerEnter = () => {
        setIframeInteraction(true);
    };

    const handleIframePointerLeave = () => {
        setIframeInteraction(false);
    };

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
           
            <TextReveal text="JACKIE'S TOP RECOMMENDATIONS" />
            <iframe
                title="Jackie's Top Recommendations"
                src="https://shopmy.us/collections/public/556881?noHeader=true"
                style={{
                    width: '100%',
                    minHeight: '2400px',
                    border: 'none',
                    pointerEvents: iframeInteraction ? 'auto' : 'none',
                }}
                onPointerEnter={handleIframePointerEnter}
                onPointerLeave={handleIframePointerLeave}
            ></iframe>
        </div>
    );
};

export default ReviewHomePage;
