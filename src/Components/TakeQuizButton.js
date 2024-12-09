import React from 'react';
import './BookNowButton.css';

const TakeQuizButton = ({ href = '/quiz-2-home' }) => {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="book-now-button"
        >
            TAKE QUIZ
        </a>
    );
};

export default TakeQuizButton;