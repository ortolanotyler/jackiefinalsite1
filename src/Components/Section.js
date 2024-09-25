import React from 'react';
import styles from './Section.module.css';

const Section8 = ({ headline, mainArticle, sideArticles }) => {
  return (
    <section className={styles.beautySection}>
      <h1 className={styles.headline}>{headline}</h1>
      <div className={styles.content}>
        <div className={styles.mainArticle}>
          <img src={mainArticle.image} alt={mainArticle.title} className={styles.mainImage} />
          <h2 className={styles.mainTitle}>{mainArticle.title}</h2>
          <p className={styles.mainDescription}>{mainArticle.description}</p>
          <p className={styles.author}>BY {mainArticle.author.toUpperCase()}</p>
        </div>
        <div className={styles.sideArticles}>
          {sideArticles.map((article, index) => (
            <div key={index} className={styles.sideArticle}>
              <img src={article.image} alt={article.title} className={styles.sideImage} />
              <div className={styles.sideText}>
                <h3 className={styles.sideTitle}>{article.title}</h3>
                <p className={styles.sideAuthor}>BY {article.author.toUpperCase()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section8;