import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SiteMap.module.css'; // Ensure this path matches where your CSS module is saved

const Sitemap = () => {
    const beautyPosts = [
        { path: "/tutorials", title: "Tutorial Home Page" },
        { path: "/margotbarbie", title: "Margot Robbie // Barbie Movie Makeup Tutorial" },
        { path: "/lattemakeup", title: "Latte Makeup // Trend Report " },
        { path: "/sugarplumfairy", title: "Sugar Plum Fairy // Trend Report " },
        { path: "/sharontatebridal", title: "Sharon Tate Bridal // Time Travel Tutorials" },
        { path: "/iconicsharon", title: "Sharon Tate Iconic '60's // Time Travel Tutorials" },
        { path: "/sophialoren", title: "Sophia Loren // Time Travel Tutorials" },
        { path: "/lanablog", title: "Lana Del Ray X Skims // Pop Culture Obsessed" },
        { path: "/patmcgrath", title: "Pat McGrath // Porcelain Doll // Trend Report" },
        { path: "/victoriasecret", title: "Victoria's Secret // Pop Culture Obsessed" },
        { path: "/2016Makeup", title: "2016 Makeup // Trend Report" },
        { path: "/twiggy", title: "Twiggy // Time Travel Tutorials" },
        { path: "/yardley1965", title: "Yardley 1965 // Vintage Vibes" },
        { path: "/gracekelly", title: "Grace Kelly // Vintage Vibes" },
        { path: "/balkeBlog", title: "Blake // Vintage Vibes" },
    ];

    const stylePosts = [
        { path: "/mystyle", title: "MyStyle Home Page" },
        { path: "/vintagevibesmerch", title: "Vintage Vibes Merch" },
    ];

    const siteResources = [
        { path: "/", title: "Home" },
        { path: "/sitemap", title: "SiteMap" },
        { path: "/about", title: "About" },
        { path: "/mediakit", title: "Press and Media Inquiries" },
        { path: "/emailsubscribe", title: "Newsletter Sign Up" },
        { path: "/quiz", title: "Quiz Home Page" },
        { path: "/quiz1", title: "Quiz 1" },
        { path: "/vlogs", title: "Vlog Home Page" },
        { path: "/travel", title: "Travel Home Page" },
    ];

    const travelPosts = [
        { path: "/travel", title: "Travel Home Page" },
        { path: "/tremblant", title: "Mont Tremblant Ski Trip" },
        { path: "/hotelq", title: "Hotel Quintessence // Luxury Hotel Review" },
        { path: "/disneybeachclubresort", title: "Walt Disney World // Beach Club Resort Review" },
        { path: "/epcot", title: "Walt Disney World // EPCOT & MORE" },
        { path: "/westgatesandiego", title: "West Gate San Diego // Luxury Hotel Review" },
        { path: "/andazmaui", title: "Andaz Maui // Luxury Hotel Review" },
        { path: "/princeofwales", title: "Prince of Wales // Luxury Hotel Review" },
    ];

    const reviewPosts = [
        { path: "/reviews", title: "Reviews Home Page" },
        { path: "/painlessIPL", title: "IPL Hair Removal Review // ULike" },
        { path: "/bonbonreview", title: "Bon Bon // Viktor & Rolf Review" },
        { path: "/halfetireview", title: "Halfeti // Penhaligon's Review" },
        { path: "/jickyreview", title: "Jicky // Guerlain Review" },
    ];

    return (
        <div className={styles.body}>
            <h1 className={`${styles.heading} ${styles.mainHeading}`}>Sitemap</h1>
            <h2 className={`${styles.heading} ${styles.subHeading}`}>Site Resources</h2>
            <ul className={styles.list}>
                {siteResources.map((post, index) => (
                    <li key={index} className={styles.listItem}>
                        <Link to={post.path} className={styles.link}>{post.title}</Link>
                    </li>
                ))}
            </ul>
            <h2 className={`${styles.heading} ${styles.subHeading}`}>Beauty</h2>
            <ul className={styles.list}>
                {beautyPosts.map((post, index) => (
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
