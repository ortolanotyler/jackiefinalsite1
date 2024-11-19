import React from 'react';
import styles from './ArticleHero.module.css';

const ArticleHero = () => {
  const blogPosts = [
    {
      category: 'BLUE EYES',
      title: 'How Eyeshadow Sticks are Changing Eyeshadow Applications',
      author: 'by Shawn Towne',
      readTime: '4 min read',
      image: 'path-to-first-image.jpg',
      link: '/blog/eyeshadow-sticks',
    },
    {
      category: 'SKINCARE TIPS',
      title: 'The Summer Skincare SPF Guide',
      author: 'by Shawn Towne',
      readTime: '3 min read',
      image: 'path-to-second-image.jpg',
      link: '/blog/summer-spf-guide',
    },
    {
      category: 'FACE CLEANSER',
      title: 'Your Spring Makeup Wardrobe Update',
      author: 'by Shawn Towne',
      readTime: '5 min read',
      image: 'path-to-third-image.jpg',
      link: '/blog/spring-makeup-update',
    },
  ];

  return (
    <div className={styles.blogContainer}>
      {/* Left Section: Blog Cards */}
      <div className={styles.blogGrid}>
        {blogPosts.map((post, index) => (
          <div key={index} className={styles.blogCard}>
            <a href={post.link}>
              <img src={post.image} alt={post.title} className={styles.blogImage} />
            </a>
            <div className={styles.blogDetails}>
              <p className={styles.blogCategory}>{post.category}</p>
              <h3 className={styles.blogTitle}>{post.title}</h3>
              <p className={styles.blogMeta}>
                {post.author} | {post.readTime}
              </p>
              <a href={post.link} className={styles.readMore}>
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Right Section: Sidebar */}
      <div className={styles.blogSidebar}>
        <div className={styles.blogHeader}>
          <h2>Makeup & Beauty Blog</h2>
          <p>
            Discover the latest beauty trends & skincare tips on jane iredale's makeup and beauty blog.
          </p>
        </div>
        <div className={styles.blogSearch}>
          <h3>Blog Post Search:</h3>
          <input type="text" placeholder="Search" className={styles.searchInput} />
        </div>
        <div className={styles.blogMenu}>
          <h3>Blog Menu</h3>
          <ul>
            <li>FEATURED POSTS</li>
            <li>MAKEUP LOOKS & IDEAS</li>
            <li>BEAUTY TIPS</li>
            <li>LIFE, ETC.</li>
            <li>SKINCARE TIPS</li>
            <li>MAKEUP TUTORIALS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArticleHero;