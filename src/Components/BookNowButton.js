import React from 'react';
import './BookNowButton.css';

const BookNowButton = ({ href }) => {
    return (
        <a href={href} className="book-now-button">
            BOOK NOW
        </a>
    );
};

export default BookNowButton;
