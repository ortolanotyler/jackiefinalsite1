import React from 'react';

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
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'left', // Align the text to the left
    marginBottom: '10px',
    maxWidth: '1000px', // Optional: limit the width of the container if needed
    padding: '0px',

  },
  mainTitle: {
    fontFamily: 'Playfair Display, serif',
    fontWeight: 'normal',
    fontSize: '48px', // Adjust as needed for responsiveness
    margin: '10px 15px',
    lineHeight: '1',
    color: '#000000',
  },
  subTitle: {
    fontFamily: '"Georgia", serif',
    fontSize: '24px',
    fontStyle: 'italic',
    margin: 'auto',
    marginBottom: '20px',
    color: '#3a3a3a',
  },
  authorContainer: {
    display: 'flex',
    justifyContent: 'space-between', // Spreads author and date to opposite sides
    fontFamily: 'Nunito, sans-serif', // Font for the author and date text
    fontSize: '12px',
    marginTop: '15px',
  },
  author: {
    textTransform: 'uppercase',
    fontFamily: 'Playfair Display, serif', // Font for the author and date text
    fontWeight: 'normal',
  },
  date: {
    fontFamily: 'Georgia, serif', // Font for the author and date text
    fontWeight: 'normal',
  },
};

export default ArticleTitle;