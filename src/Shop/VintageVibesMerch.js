import React from 'react';
import { Helmet } from 'react-helmet-async';
import './VintageVibesMerch.css'; // Assume you have a CSS file for styles
import TextReveal from '../Components/TextReveal';
import TeeSpring from './TeeSpring';

const VintageVibesMerch = () => {
    return (
        <div className="merch-container">
            <Helmet>
                <title>Vintage Vibes Merch - Jackie Wyers</title>
                <meta name="description" content="Explore the Vintage Vibes merchandise by Jackie Wyers. Find stylish and vintage-inspired merchandise." />
            </Helmet>
            <div>
                <TextReveal text='VINTAGE VIBES MERCH' />
                <TeeSpring />
            </div>
        </div>
    );
};

export default VintageVibesMerch;
