import React from 'react';
import styles from './PrivacyNotice.module.css'; // Ensure this path matches where your CSS module is saved

const PrivacyNotice = () => {
    return (
        <div className={styles.body}>
            <h2 className={`${styles.heading} ${styles.mainHeading}`}>Privacy Notice</h2>
            <h3 className={`${styles.heading} ${styles.subHeading}`}>Information Collection</h3>
            <p className={styles.paragraph}>
                We collect the following personal information from you:
            </p>
            <ul>
                <li>Email address (optional, for the purpose of sending newsletters).</li>
                <li>We also use Google reCAPTCHA to protect our site from spam and abuse.</li>
            </ul>
            <h3 className={`${styles.heading} ${styles.subHeading}`}>Use of Information</h3>
            <p className={styles.paragraph}>
                The information we collect is used to:
            </p>
            <ul>
                <li>Send you newsletters if you have subscribed.</li>
                <li>Should you choose to provide your email address as a part of the weekly newsletter, please note: <strong>We do not share your email with anyone, ever.</strong></li>
            </ul>
            <h3 className={`${styles.heading} ${styles.subHeading}`}>Cookies and Tracking Technologies</h3>
            <p className={styles.paragraph}>
                We use cookies to improve your browsing experience and serve relevant ads via Google AdSense. You can manage or disable cookies at any time in your browser's settings.
            </p>
            <h3 className={`${styles.heading} ${styles.subHeading}`}>Affiliate Disclosure</h3>
            <p className={styles.paragraph}>
                Some links on our blog are affiliate links. If you make a purchase through these links, we may earn a commission at no additional cost to you.
            </p>
            <h3 className={`${styles.heading} ${styles.subHeading}`}>Third-Party Services</h3>
            <p className={styles.paragraph}>
                We use third-party services like Google AdSense and affiliate programs, which may collect information about you. Please refer to their privacy policies for more information.
            </p>
            <h3 className={`${styles.heading} ${styles.subHeading}`}>User Rights</h3>
            <p className={styles.paragraph}>
                You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at contact@jackiewyers.beauty.
            </p>
            <p className={styles.paragraph}>
To unsubscribe from our mailing list, please press "unsubscribe" at the bottom of the newsletter or feel free to reach out to contact@jackiewyers.beauty.
            </p>
            <h3 className={`${styles.heading} ${styles.subHeading}`}>Changes to the Privacy Policy</h3>
            <p className={styles.paragraph}>
                We may update this privacy policy from time to time. The latest version will always be available on our blog. We will notify you of significant changes through the blog or email.
            </p>
            <h3 className={`${styles.heading} ${styles.subHeading}`}>Contact Information</h3>
            <p className={styles.paragraph}>
                If you have any questions or concerns about this privacy policy, please contact us at <strong>contact@jackiewyers.beauty.</strong>
            </p>
            <h3 className={`${styles.heading} ${styles.subHeading}`}>Disclaimer</h3>
            <ul>
                <li>Content is provided for informational purposes only. We make no warranties regarding the accuracy or completeness of the content.</li>
                <li>Some links on our blog are affiliate links. We may earn commissions from qualifying purchases made through these links.</li>
                <li>Our blog may contain links to third-party websites. We are not responsible for the content or privacy practices of these sites.</li>
                <li>We display ads from Google AdSense and other ad networks. These ads may use cookies to serve personalized ads based on your interests.</li>
            </ul>
        </div>
    );
};

export default PrivacyNotice;
