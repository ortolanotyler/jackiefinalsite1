import React from 'react';
import { Helmet } from 'react-helmet';
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
        { path: "/nomakeupspring", title: "No Makeup Spring" },
        { path: "/bardothairstyles", title: "Bardot Hairstyles" },
        { path: "/animalpretty", title: "Animal Pretty" },

    ];

    const stylePosts = [
        { path: "/mystyle", title: "MyStyle Home" },
        { path: "/vintagevibesmerch", title: "Vintage Vibes Merchandise" },
        { path: "/90sVibes", title: "90s Vibes" },
        { path: "/leatherandlace", title: "Leather and Lace" },
        { path: "/retrofloral", title: "Retro Floral" },
        { path: "/barbieskiing", title: "Barbie Skiing" },
        { path: "/blackandleather", title: "Black and Leather" },
        { path: "/cabinfever", title: "Cabin Fever" },
        { path: "/manhattancool", title: "Manhattan Cool" },
        { path: "/falllbd", title: "Fall LBD" },
        { path: "/darkflorals", title: "Dark Florals" },
        { path: "/cpsummer", title: "Cottagecore Princess Summer" },
        { path: "/sleekspring", title: "Sleek Spring" },
        { path: "/parisprincess", title: "Paris Princess" },

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
    ];

    const travelPosts = [
        { path: "/travel", title: "Travel Home" },
        { path: "/tremblant", title: "Mont Tremblant Ski Trip" },
        { path: "/hotelQ", title: "Hotel Quintessence Luxury Review" },
        { path: "/disneybeachclubresort", title: "Walt Disney World Beach Club Resort Review" },
        { path: "/epcot", title: "Walt Disney World EPCOT Review" },
        { path: "/westgatesandiego", title: "West Gate San Diego Luxury Review" },
        { path: "/andazmaui", title: "Andaz Maui Luxury Review" },
        { path: "/princeofwales", title: "Prince of Wales Luxury Review" },
        { path: "/newzealand", title: "New Zealand Travel Blog" },
        { path: "/fable", title: "Fable Auckland Review" },
        { path: "/fairytalewedding", title: "Jackie Wyers Wedding in Sorrento, Italy" },

    ];

    const reviewPosts = [
        { path: "/reviews", title: "Product Reviews Home" },
        { path: "/bonbonreview", title: "Bon Bon Viktor & Rolf Review" },
        { path: "/halfetireview", title: "Halfeti Penhaligon's Review" },
        { path: "/jickyreview", title: "Jicky Guerlain Review" },
    ];

    const additionalPosts = [
     
        { path: "/summerbeauty", title: "Summer Beauty" },
        { path: "/bridesmaidboxes", title: "Diary Bridesmaids" },
{ path: "/perioddrama", title: "Period Drama" },
{ path: "/bridalmakeup", title: "Bridal Makeup" },

       
    ];

    return (
        <>
            <Helmet>
                <title>Sitemap - Jackie Wyers</title>
                <meta name="description" content="Explore the sitemap to navigate through all the makeup tutorials, travel blogs, style guides, and reviews by Jackie Wyers." />
                {/* Google Analytics */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-RT6GR7JXYG"></script>
                <script>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-RT6GR7JXYG');
                    `}
                </script>
                {/* Google AdSense */}
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4660168246825318" crossorigin="anonymous"></script>
            </Helmet>
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
                <h2 className={`${styles.heading} ${styles.subHeading}`}>Additional Posts</h2>
                <ul className={styles.list}>
                    {additionalPosts.map((post, index) => (
                        <li key={index} className={styles.listItem}>
                            <Link to={post.path} className={styles.link}>{post.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Sitemap;
