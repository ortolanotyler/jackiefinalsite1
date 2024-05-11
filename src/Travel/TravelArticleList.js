import React from 'react';
import ReviewArticleCard from './TravelArticleCard';
import "../Travel/TravelArticleList.css";
import TravelArticleCard from './TravelArticleCard';

const image1 = `${process.env.PUBLIC_URL}/Images/Disney1Thumbnail.png`;
const image2 = `${process.env.PUBLIC_URL}/Images/Disney2/DisneyThumbNail.jpeg`;
const image3 = `${process.env.PUBLIC_URL}/Images/MontThumbnail.jpg`;
const hotelQ = `${process.env.PUBLIC_URL}/Images/QThumbnail.jpeg`;
const articles = [
    {
        date: '04/15/2024',
        title: 'Ski Vacation in Mont Tremblant',
        image: image3,
        path: '/tremblant',
    },
    {
        date: '04/01/2024',
        title: 'Walt Disney World Beach Club Resort Review',
        image: image1,
        path: '/disneybeachclubresort',
    },
    {
        date: '04/01/2024',
        title: 'Hotel Quintessance, A Review in Mont Tremblant',
        image: hotelQ,
        path: '/hotelq',
    },
    {
        date: '04/01/2024',
        title: 'Best of Epcot, Magic Kingdom and Animal Kingdom',
        image: image2,
        path: '/epcot',
    },
   

    // Add more articles as needed
];

const TravelArticlesList = () => {
    return (
        <div className="article-list" style = {{
            justifyContent: 'center'
        }}>
            {articles.map((article, index) => (
                <TravelArticleCard
                    key={index}
                    date={article.date}
                    title={article.title}
                    imageUrl={article.image}
                    path={article.path}
                />
            ))}
        </div>
    );
};

export default TravelArticlesList;
