import React from 'react';
import HorizontalLine from './HorizontalLine';

const ArticleTitle = ({ mainTitle, subTitle, author, publishDate }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.mainTitle}>
        {mainTitle}
      </h1>
      {subTitle && (
        <h2 style={styles.subTitle}>
          {subTitle}
        </h2>
      )}
      <div style={styles.authorContainer}>
        <span style={styles.author}> {author}</span>
        <span style={styles.date}>{publishDate}</span>
      </div>
      <HorizontalLine/>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'left', // Align the text to the left
    margin: '1rem',
    width: '90%',
    maxWidth: '1500px', // Optional: limit the width of the container if needed
    

  },
  mainTitle: {
    fontFamily: 'Playfair Display, serif',

    fontWeight: '400',
    fontSize: '55px', // Adjust as needed for responsiveness
    fontStyle: 'normal',
    lineHeight: '1.15',
    color: '#000000',
  },
  subTitle: {
    fontFamily: 'EB Garamond, sans-serif', // Font for the author and date text
    fontWeight: '100',
    fontSize: '16px',
    fontStyle: 'italic',
    margin: '1rem ',
  
    color: '#000000',
  },
  authorContainer: {
    display: 'flex',
    justifyContent: 'space-between', // Spreads author and date to opposite sides
    fontSize: '12px',
    margin: '20px auto',
  },
  author: {
    textTransform: 'uppercase',
    fontFamily: 'EB Garamond, serif', // Font for the author and date text
    fontWeight: '100',
  },
  date: {
    fontFamily: 'EB Garamond, serif', // Font for the author and date text
    fontWeight: '100',
  },
};

export default ArticleTitle;