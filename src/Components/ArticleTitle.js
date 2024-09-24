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
        <span style={styles.author}>BY {author}</span>
        <span style={styles.date}>PUBLISHED {publishDate}</span>
      </div>
      <HorizontalLine/>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'left', // Align the text to the left
    marginBottom: '30px',
    maxWidth: '1000px', // Optional: limit the width of the container if needed
    padding: '0px',

  },
  mainTitle: {
    fontFamily: 'Playfair Display, serif',
    fontWeight: 'normal',
    fontSize: '48px', // Adjust as needed for responsiveness
    margin: '10px 5px',
    lineHeight: '1',
    color: '#000000',
  },
  subTitle: {
    fontFamily: '"GFS Didot", sans-serif',
    fontSize: '24px',
    fontStyle: 'italic',
    margin: '20px 15px',
    marginBottom: '20px',
    color: '#745B4F',
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