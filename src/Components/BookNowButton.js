import React from 'react';
import './BookNowButton.css';

const BookNowButton = ({ href }) => {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="book-now-button"
        >
            BOOK NOW
        </a>
    );
};

export default BookNowButton;
