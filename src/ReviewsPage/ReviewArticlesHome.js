import React from 'react';
import { Helmet } from 'react-helmet';
import ReviewArticleList from './ReviewArticleList';
import TextReveal from '../Components/TextReveal';

const ReviewHomePage = () => {
    return (
        <div>
            <Helmet>
                <title>Product Reviews - Jackie Wyers</title>
                <meta name="description" content="Explore detailed product reviews by Jackie Wyers. Find the best beauty products and perfume profiles." />
                <meta name="keywords" content="Jackie Wyers, product reviews, beauty reviews, perfume profiles, beauty products, recommendations" />
                <meta property="og:title" content="Product Reviews - Jackie Wyers" />
                <meta property="og:description" content="Explore detailed product reviews by Jackie Wyers. Find the best beauty products and perfume profiles." />
                <meta property="og:image" content={`${process.env.PUBLIC_URL}/Images/Reviews/og-image.jpg`} />
                <meta property="og:url" content="https://jackiewyers.beauty/reviews" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Product Reviews - Jackie Wyers" />
                <meta name="twitter:description" content="Explore detailed product reviews by Jackie Wyers. Find the best beauty products and perfume profiles." />
                <meta name="twitter:image" content={`${process.env.PUBLIC_URL}/Images/Reviews/twitter-image.jpg`} />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4660168246825318" crossorigin="anonymous"></script>
            </Helmet>
            <TextReveal text="REVIEWS" />
            <div
                style={{
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
                style={{
                    marginTop: '2rem',
                    marginBottom: '2rem',
                }}
            >
                <TextReveal text="More Product Reviews Coming Soon..." style={{ backgroundColor: 'white' }} fontFamily="Italianno, cursive" />
            </div>
            <TextReveal text="JACKIE'S TOP RECOMMENDATIONS" />
            <iframe
                title="Jackie's Top Recommendations"
                src="https://shopmy.us/collections/embed/556881?noHeader=true"
                style={{
                    width: '100%',
                    minHeight: '400px',
                    border: 'none',
                }}
            ></iframe>
        </div>
    );
};

export default ReviewHomePage;
