// NextArticle.js
import React from 'react';
import PropTypes from 'prop-types';

const NextArticle = ({ title, link }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Next Article</h2>
      <a href={link} style={styles.link}>{title}</a>
    </div>
  );
};

const styles = {
  container: {
    borderTop: '1px solid #ddd',
    paddingTop: '20px',
    marginTop: '20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '1.5em',
    marginBottom: '10px',
  },
  link: {
    fontSize: '1.2em',
    color: '#007BFF',
    textDecoration: 'none',
  },
};

NextArticle.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NextArticle;
