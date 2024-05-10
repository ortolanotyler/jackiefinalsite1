import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SiteMap.module.css'; // Ensure this path matches where your CSS module is saved

const Sitemap = () => {
    const beautyPosts = [
        { path: "/tutorials", title: "Tutorial Home Page" },
        { path: "/barbie", title: "Margot Robbie // Barbie Movie Makeup Tutorial" },
        { path: "/latteMakeup", title: "Latte Makeup // Trend Report " },
        { path: "/sugarPlum", title: "Sugar Plum Fairy // Trend Report " },
        { path: "/sharontate", title: "Sharon Tate Bridal // Time Travel Tutorials" },
        { path: "/iconicsharon", title: "Sharon Tate Iconic '60's // Time Travel Tutorials" },
        { path: "/sophialoren", title: "Sophia Loren // Time Travel Tutorials" },

        { path: "/lanablog", title: "Lana Del Ray X Skims // Pop Culture Obsessed" },
        { path: "/patmcgrath", title: "Pat McGrath // Porcelain Doll // Trend Report" },
        { path: "/lattemakeup", title: "Latte Makeup // Trend Report" },
        { path: "/victoriasecret", title: "Victoria's Secret // Pop Culture Obsessed" },
        { path: "/bigbeautybag", title: "Big Beauty Bag// Home Page" },

        { path: "/popculture", title: "Pop Culture // Home Page" },
        { path: "/timetraveltutorials", title: "Time Travel Tutorials // Home Page" },
        { path: "/trends", title: "Hottest Trends // Home Page " },

    ];

    const stylePosts = [
        { path: "/mystyle", title: "MyStyle Home Page" },
    ];

    const siteResources = [
        { path: "/", title: "Home" },
        { path: "/sitemap", title: "SiteMap" },

        { path: "/about", title: "About" },
        { path: "/yourprivacyisimportant", title: "Privacy Policy"},
        { path: "/mediakit", title: "Press and Media Inquiries"},
        { path: "/subscribe", title: "Newsletter Sign Up"},

        { path: "/quiz", title: "Quiz Home Page" },
        { path: "/vlogs", title: "Vlog Home Page" },
        { path: "/travel", title: "Travel Home Page" },
        { path: "/vintagevibesmerch", title: "Vintage Vibes Merch" },


    ];

    const travelPosts = [
        { path: "/travel", title: "Travel Home Page" },
        { path: "/monttremblant", title: "Mont Tremblant Ski Trip" },
        { path: "/hotelqreview", title: "Hotel Quintessence // Luxury Hotel Review" },
        { path: "/disneyreview1", title: "Walt Disney World // Beach Club Resort Review" },
        { path: "/disneyreview2", title: "Walt Disney World // EPCOT & MORE" }

    ];

    const reviewPosts = [
        { path: "/reviews", title: "Reviews Home Page" },
        { path: "/ulikereview", title: "IPL Hair Removal Review // ULike" },
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
