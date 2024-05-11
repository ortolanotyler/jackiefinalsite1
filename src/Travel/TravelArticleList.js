import React from 'react';
import ReviewArticleCard from './TravelArticleCard';
import "../Travel/TravelArticleList.css";
import TravelArticleCard from './TravelArticleCard';

const image1 = `${process.env.PUBLIC_URL}/Images/JickyThumbnail.png`;
const image2 = `${process.env.PUBLIC_URL}/Images/BonBonThumbnail.png`;
const image3 = `${process.env.PUBLIC_URL}/Images/HalfetiThumbnail.png`;
const image4 =  `${process.env.PUBLIC_URL}/Images/ulikethumbnail.png`;

const articles = [
    {
        date: '01/15/2024',
        title: 'Jicky // Guerlain',
        image: image1,
        path: '/jickyreview',
    },
    {
        date: '02/01/2024',
        title: 'Bonbon // Viktor & Rolf',
        image: image2,
        path: '/bonbonreview',
    },
    {
        date: '03/01/2024',
        title: "Halfeti // Penhaligon's",
        image: image3,
        path: '/halfetireview',
    },
    {
        date: '04/01/2024',
        title: "Painless Hair Removal // ULIKE",
        image: image4,
        path: '/ulikereview',
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
