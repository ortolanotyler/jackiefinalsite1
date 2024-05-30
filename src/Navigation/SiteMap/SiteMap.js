import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SiteMap.module.css'; // Ensure this path matches where your CSS module is saved

const Sitemap = () => {
    const beautyPosts = [
        { path: "/tutorials", title: "Makeup Tutorials Home" },
        { path: "/margotbarbie", title: "Margot Robbie Barbie Movie Makeup Tutorial" },
        { path: "/lattemakeup", title: "Latte Makeup Trend Report" },
        { path: "/sugarplumfairy", title: "Sugar Plum Fairy Trend Report" },
        { path: "/sharontatebridal", title: "Sharon Tate Bridal Makeup Tutorial" },
        { path: "/iconicsharon", title: "Sharon Tate Iconic '60s Makeup Tutorial" },
        { path: "/sophialoren", title: "Sophia Loren Makeup Tutorial" },
        { path: "/lanablog", title: "Lana Del Rey X Skims Makeup" },
        { path: "/patmcgrath", title: "Pat McGrath Porcelain Doll Makeup" },
        { path: "/victoriasecret", title: "Victoria's Secret Makeup" },
        { path: "/2016Makeup", title: "2016 Makeup Trend" },
        { path: "/twiggy", title: "Twiggy Makeup Tutorial" },
        { path: "/yardley1965", title: "Yardley 1965 Vintage Vibes" },
        { path: "/gracekelly", title: "Grace Kelly Vintage Makeup" },
        { path: "/balkeblog", title: "Balke Vintage Vibes" },
    ];

    const stylePosts = [
        { path: "/mystyle", title: "MyStyle Home" },
        { path: "/vintagevibesmerch", title: "Vintage Vibes Merchandise" },
        { path: "/90sVibes", title: "90s Vibes" },
        { path: "/leatherandlace", title: "Leather and Lace" },
    ];

    const siteResources = [
        { path: "/", title: "Home" },
        { path: "/about", title: "About" },
        { path: "/sitemap", title: "SiteMap" },
        { path: "/press", title: "Press and Media Inquiries" },
        { path: "/subscribe", title: "Newsletter Sign Up" },
        { path: "/quiz", title: "Quiz Home" },
      
        { path: "/quiz2", title: "Quiz 2" },
        { path: "/vlogs", title: "Vlogs Home" },
        { path: "/travel", title: "Travel Home" },
        { path: "/contact", title: "Contact" },
        { path: "/privacy", title: "Privacy Notice" },
        { path: "/speed-insights", title: "Speed Insights" },
    ];

    const travelPosts = [
        { path: "/travel", title: "Travel Home" },
        { path: "/tremblant", title: "Mont Tremblant Ski Trip" },
        { path: "/hotelq", title: "Hotel Quintessence Luxury Review" },
        { path: "/disneybeachclubresort", title: "Walt Disney World Beach Club Resort Review" },
        { path: "/epcot", title: "Walt Disney World EPCOT Review" },
        { path: "/westgatesandiego", title: "West Gate San Diego Luxury Review" },
        { path: "/andazmaui", title: "Andaz Maui Luxury Review" },
        { path: "/princeofwales", title: "Prince of Wales Luxury Review" },
    ];

    const reviewPosts = [
        { path: "/reviews", title: "Product Reviews Home" },
        { path: "/bonbonreview", title: "Bon Bon Viktor & Rolf Review" },
        { path: "/halfetireview", title: "Halfeti Penhaligon's Review" },
        { path: "/jickyreview", title: "Jicky Guerlain Review" },
    ];

    return (
        <div className={styles.body}>
            <h1 className={`${styles.heading} ${styles.mainHeading}`}>Sitemap</h1>
            <h2 className={`${styles.heading} ${styles.subHeading}`}>Beauty</h2>
            <ul className={styles.list}>
                {beautyPosts.map((post, index) => (
                    <li key={index} className={styles.listItem}>
                        <Link to={post.path} className={styles.link}>{post.title}</Link>
                    </li>
                ))}
            </ul>
            <h2 className={`${styles.heading} ${styles.subHeading}`}>Site Resources</h2>
            <ul className={styles.list}>
                {siteResources.map((post, index) => (
                    <li key={index} className={styles.listItem}>
                        <Link to={post.path} className={styles.link}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        
            <h2 className={`${styles.heading} ${styles.subHeading}`}>Travel</h2>
            <ul className={styles.list}>
                {travelPosts.map((post, index) => (
                    <li key={index} className={styles.listItem}>
                        <Link to={post.path} className={styles.link}>{post.title}</Link>
                    </li>
                ))}
            </ul>
            <h2 className={`${styles.heading} ${styles.subHeading}`}>Product Reviews</h2>
            <ul className={styles.list}>
                {reviewPosts.map((post, index) => (
                    <li key={index} className={styles.listItem}>
                        <Link to={post.path} className={styles.link}>{post.title}</Link>
                    </li>
                ))}
            </ul>
            <h2 className={`${styles.heading} ${styles.subHeading}`}>MyStyle</h2>
            <ul className={styles.list}>
                {stylePosts.map((post, index) => (
                    <li key={index} className={styles.listItem}>
                        <Link to={post.path} className={styles.link}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sitemap;
