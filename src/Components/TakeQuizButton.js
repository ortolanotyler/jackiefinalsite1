import React from 'react';
import './BookNowButton.css';

const TakeQuizButton = () => {
    return (
        <a 
            href={'/quiz3'} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="book-now-button"
        >
            TAKE QUIZ
        </a>
    );
};

export default TakeQuizButton;
