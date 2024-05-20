import React from 'react';
import TextReveal from '../Components/TextReveal';
import TravelArticlesList from './TravelArticleList';
import ExperiencesList from './ExperiencesList';

const TravelArticlesHome = () => {
    return (
        <div>
            <TextReveal text="TRAVEL" />
            <div
            style = {{
                marginTop: '2rem',
                marginBottom: '2rem',
            }}
            > 
            <TextReveal text="Hotel Reviews" style={{ backgroundColor: 'white' }} fontFamily="Italianno, cursive" />

            </div>
            <div>
                <TravelArticlesList />
            </div>
            <TextReveal text="Experiences / Itineraries" style={{ backgroundColor: 'white' }} fontFamily="Italianno, cursive" />
            <ExperiencesList />
            <div
            style = {{
                marginTop: '2rem',
                marginBottom: '2rem',
            }}
            > 
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
