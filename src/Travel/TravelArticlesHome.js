import React from 'react';
import { Paper } from '@mui/material';
import TextReveal from '../Components/TextReveal';
import RotatingText from '../Navigation/AppBar/RotatingText';
import TravelArticlesList from './TravelArticleList';
import ExperiencesList from './ExperiencesList';

const TravelArticlesHome = () => {
    return (
        <div>
            <TextReveal text="TRAVEL" />
            <TextReveal text="Hotel Reviews" style={{ backgroundColor: 'white' }} fontFamily="Italianno, cursive" />
            <div>
                <TravelArticlesList />
            </div>
            <TextReveal text="Experiences / Itineraries" style={{ backgroundColor: 'white' }} fontFamily="Italianno, cursive" />
            <ExperiencesList />
            <TextReveal text="TRAVEL IN STYLE" />
            <iframe
                title="Travel In Style"
                src="https://shopmy.us/collections/public/553075?noHeader=true"
                style={{ width: '100%', minHeight: '2400px', border: 'none' }}
            />
        </div>
    );
};

export default TravelArticlesHome;
