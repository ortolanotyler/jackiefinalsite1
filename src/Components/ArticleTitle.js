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
    marginBottom: '2rem',
    maxWidth: '1000px', // Optional: limit the width of the container if needed
    marginLeft: 'auto', // Center the container within its parent
    marginRight: 'auto', // Center the container within its parent
  },
  mainTitle: {
    fontFamily: 'Arapey, serif',
    fontWeight: 'normal',
    fontSize: '70px', // Adjust as needed for responsiveness
    margin: '1rem 0',
    lineHeight: '1',
    color: '#000000',
  },
  subTitle: {
    fontFamily: 'Dancing Script, cursive', // Similar to the italic font in the image
    fontSize: '16px',
    fontStyle: 'italic',
    margin: 'auto 0',
    marginBottom: '20px',
    color: '#3a3a3a',
  },
  authorContainer: {
    display: 'flex',
    justifyContent: 'space-between', // Spreads author and date to opposite sides
    fontFamily: 'Nunito, sans-serif', // Font for the author and date text
    fontSize: '12px',
    marginTop: '10px',
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