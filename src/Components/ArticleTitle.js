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
    marginBottom: '10px',
    maxWidth: '1000px', // Optional: limit the width of the container if needed
    margin: '1rem',
    padding: '1rem auto', 

  },
  mainTitle: {
    fontFamily: 'Playfair Display, sans-serif',

    fontWeight: 'regular',
    fontSize: '3rem', // Adjust as needed for responsiveness
    margin: '10px 5px 0 0',
    marginBotom: '20px',

    lineHeight: '1',
    color: '#000000',
  },
  subTitle: {
    fontFamily: 'Playfair Display, sans-serif',

    fontSize: '1.25rem',
    fontStyle: 'italic',
    margin: '20px 5px 0 0',
    marginBottom: '20px',
    color: '#3a3a3a',
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
    fontWeight: 'normal',
  },
  date: {
    fontFamily: 'Georgia, serif', // Font for the author and date text
    fontWeight: 'normal',
  },
};

export default ArticleTitle;