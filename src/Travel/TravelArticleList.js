import React from 'react';
import './TravelArticleList.css';
import TravelArticleCard from './TravelArticleCard';

const image1 = `${process.env.PUBLIC_URL}/Images/Articles/Disney/BeachClub/BEACHCLUBTHUMBNAIL.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/Disney/Epcot/EPCOTTHUMBNAIL.jpeg`;
const image3 = `${process.env.PUBLIC_URL}/Images/Articles/MontTremblant/TREMBLANTTHUMBNAIL.jpeg`;
const hotelQ = `${process.env.PUBLIC_URL}/Images/Articles/HotelQ/HOTELQTHUMBNAIL.jpeg`;
const maui = `${process.env.PUBLIC_URL}/Images/Articles/AndazMaui/MAUITHUMBNAIL.jpg`;
const westgate = `${process.env.PUBLIC_URL}/Images/Articles/WestgateHotelReview/WESTGATETHUMBNAIL.jpg`;
const prince = `${process.env.PUBLIC_URL}/Images/Articles/PrinceOfWales/PrinceOfWalesthumbnail.jpeg`;

const articles = [
    {
        date: '04/15/2024',
        title: 'Prince of Wales at Niagara on the Lake',
        image: prince,
        path: '/princeofwales',
    },
    {
        date: '04/15/2024',
        title: 'Andaz Maui at Mailea Resort Review',
        image: maui,
        path: '/andazmaui',
    },
    {
        date: '04/15/2024',
        title: 'The Westgate Hotel Review',
        image: westgate,
        path: '/westgatesandiego',
    },

    {
        date: '04/01/2024',
        title: 'Walt Disney World Beach Club Resort Review',
        image: image1,
        path: '/disneybeachclubresort',
    },
    {
        date: '04/01/2024',
        title: 'Hotel Quintessence, A Review in Mont Tremblant',
        image: hotelQ,
        path: '/hotelq',
    },

    // Add more articles as needed
];

const TravelArticlesList = () => {
    return (
        <div className="article-list">
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
