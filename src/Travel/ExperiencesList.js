import React from 'react';
import './TravelArticleList.css';
import TravelArticleCard from './TravelArticleCard';

const image1 = `${process.env.PUBLIC_URL}/Images/Articles/Disney/BeachClub/BEACHCLUBTHUMBNAIL.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/Disney/Epcot/EPCOTTHUMBNAIL.jpeg`;
const image3 = `${process.env.PUBLIC_URL}/Images/Articles/MontTremblant/TREMBLANTTHUMBNAIL.jpeg`;
const hotelQ = `${process.env.PUBLIC_URL}/Images/Articles/HotelQ/HOTELQTHUMBNAIL.jpeg`;
const maui = `${process.env.PUBLIC_URL}/Images/Articles/AndazMaui/MAUITHUMBNAIL.jpg`;
const westgate = `${process.env.PUBLIC_URL}/Images/Articles/WestgateHotelReview/WESTGATETHUMBNAIL.jpg`;
const prince = `${process.env.PUBLIC_URL}/Images/Articles/PrinceOfWales/PrinceOfWalesThumbnail.jpeg`;

const articles = [


    {
        date: '04/15/2024',
        title: 'Ski Vacation in Mont Tremblant',
        image: image3,
        path: '/tremblant',
    },


    {
        date: '04/01/2024',
        title: 'Best of Epcot, Magic Kingdom and Animal Kingdom',
        image: image2,
        path: '/epcot',
    },
    // Add more articles as needed
];

const ExperiencesList = () => {
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

export default ExperiencesList;
