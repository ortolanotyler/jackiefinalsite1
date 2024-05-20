import React from 'react';
import styles from './PrivacyNotice.module.css'; // Ensure this path matches where your CSS module is saved

const PrivacyNotice = () => {
    return (
        <div className={styles.body}>
            <h2 className={`${styles.heading} ${styles.mainHeading}`}>Privacy Notice</h2>
            <p className={styles.paragraph}>
                We will always respect your privacy and are committed to protecting your personal information. This Privacy Notice outlines how we handle the information we collect from you.
            </p>
            <h3 className={`${styles.heading} ${styles.subHeading}`}>Information We Collect</h3>
            <p className={styles.paragraph}>
                When you sign up for our newsletter, we collect your email address.
            </p>
            <h3 className={`${styles.heading} ${styles.subHeading}`}>How We Use Your Information</h3>
            <p className={styles.paragraph}>
                - To send you our newsletter and keep you informed about new content, updates, and special offers.
            </p>
            <h3 className={`${styles.heading} ${styles.subHeading}`}>Sharing Your Information</h3>
            <p className={styles.paragraph}>
                We do not share, sell, or disclose your email address to third parties.
            </p>
            <h3 className={`${styles.heading} ${styles.subHeading}`}>Data Security</h3>
            <p className={styles.paragraph}>
                We implement appropriate security measures to protect your email address from unauthorized access, alteration, disclosure, or destruction.
            </p>
            <h3 className={`${styles.heading} ${styles.subHeading}`}>Your Rights</h3>
            <p className={styles.paragraph}>
                You can unsubscribe from our newsletter at any time by clicking the "unsubscribe" link in any of our emails.
            </p>
            <h3 className={`${styles.heading} ${styles.subHeading}`}>Contact Us</h3>
            <p className={styles.paragraph}>
                If you have any questions or concerns about our Privacy Notice, please contact us via email found in the footer of this page.
            </p>
        </div>
    );
};

export default PrivacyNotice;
