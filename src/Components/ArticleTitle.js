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
    marginBottom: '1rem',
    maxWidth: '1500px', // Optional: limit the width of the container if needed
    margin: '0 auto',
    padding: '2rem auto', 

  },
  mainTitle: {
    fontFamily: 'Playfair Display, sans-serif',

    fontWeight: '100',
    fontSize: '2.5rem', // Adjust as needed for responsiveness
    margin: '0 auto',
    marginBotom: '1rem',

    lineHeight: '1.2',
    color: '#000000',
  },
  subTitle: {
    fontFamily: 'Arapey, sans-serif',
    fontWeight: '100',
    fontSize: '0.95rem',
    fontStyle: 'italic',
    margin: '20px 5px 0 0',
    marginBottom: '1rem',
    color: '#000000',
  },
  authorContainer: {
    display: 'flex',
    justifyContent: 'space-between', // Spreads author and date to opposite sides
    fontSize: '12px',
    marginTop: '20px',
  },
  author: {
    textTransform: 'uppercase',
    fontFamily: 'Georgia, serif', // Font for the author and date text
    fontWeight: '100',
  },
  date: {
    fontFamily: 'Georgia, serif', // Font for the author and date text
    fontWeight: '100',
  },
};

export default ArticleTitle;