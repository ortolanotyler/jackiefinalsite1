import React from 'react';
import styles from './SuperText.module.css';

const imageUrl = `${process.env.PUBLIC_URL}/Images/Home/MeetJackie1.png`;

const SuperText = ({ imageUrl }) => {
    return (
        <div className={styles.supertextContainer}>
            <div className={styles.imageContainer}>
                <img className={styles.supertextImage} src={imageUrl} alt="SuperText" />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.supertextText} style={{ color: '#745B4F', fontFamily: 'GFS Didot', justifyContent: 'center' }}>
                    <p>Hello, beauties! I'm Jackie Wyers, and my YouTube beauty journey started back in my teens (it’s been a minute!) I specialize in creating tutorials that blend the nostalgia of pop culture with vintage beauty and the latest trends</p>
                    <p>As a professionally trained MUA with a love of character design, I believe discovering your unique style is a significant source of confidence. Life's too short not to experiment. Join me in celebrating pop culture, trends, and beauty techniques that empower you to recreate iconic looks and find your best makeup style. Ready to switch up your style with confidence?</p>
                    <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
                        <a href='/about' target='s' alt='s' style={{
                            backgroundColor: '#fdedef',
                            padding: '0.5rem',
                            color: 'black',
                            fontSize: '2rem',
                            fontFamily: "Arapey",
                            textDecoration: 'none',
                            border: '1rem solid #fdedef',
                            borderRadius: '1rem',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                        }}>
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuperText;
