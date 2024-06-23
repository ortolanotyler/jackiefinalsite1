import React from 'react';
import { Helmet } from 'react-helmet';
import TextReveal from '../Components/TextReveal';
import TravelArticlesList from './TravelArticleList';
import ExperiencesList from './ExperiencesList';
import BookNowButton from '../Components/BookNowButton';

const TravelArticlesHome = () => {
    return (
        <div>
            <Helmet>
                <title>Travel - Jackie Wyers</title>
                <meta name="description" content="Explore travel articles and guides by Jackie Wyers. Find inspiration for your next travel destination." />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4660168246825318" crossorigin="anonymous"></script>
            </Helmet>
            <div
                style={{
                    marginTop: '1rem',
                    marginBottom: '1rem',
                }}
            >
                <TextReveal
                    text="Hotel Reviews"
                    style={{ backgroundColor: 'white' }}
                    fontFamily="Italianno, cursive"
                />
            </div>
            <div>
                <TravelArticlesList />
            </div>
            <TextReveal
                text="Itineraries"
                style={{ backgroundColor: 'white' }}
                fontFamily="Italianno, cursive"
            />
            <ExperiencesList />
            <TextReveal text="SAVE MONEY BOOKING WITH PLANNIN'" />
            <div style={{
                textAlign: 'center',
                margin: '1rem'
            }}>
                <BookNowButton href="https://plannin.com/en/profile/jackiewyers" target="_blank" rel="noopener noreferrer" />
            </div>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
                <a href="https://plannin.com/en/profile/jackiewyers" target="_blank" rel="noopener noreferrer">
                    <img
                        src={`${process.env.PUBLIC_URL}/Images/Travel/planninhero.jpeg`}
                        alt=""
                        style={{ width: '100%', display: 'block', boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)'}}
                    />
                </a>
            </div>
            <div>
                <TextReveal text="TRAVEL IN STYLE" />
            </div>
            <iframe
                title="Travel In Style"
                src="https://shopmy.us/collections/public/553075?noHeader=true"
                style={{ width: '100%', minHeight: '2400px', border: 'none' }}
            />
        </div>
    );
};

export default TravelArticlesHome;
