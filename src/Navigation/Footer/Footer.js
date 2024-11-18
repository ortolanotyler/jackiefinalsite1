import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SwitchUpYour from './SwitchUpYour';
import EmailSubscribe2 from '../../Components/EmailSubscribe2';

import HorizontalLine from '../../Components/HorizontalLine';

const Footer = () => {
    const location = useLocation(); // Get the current location

    return (
        <>about
            <div style={{ width: '100%', overflowX: 'hidden', backgroundColor: '#ffffff' }}>
            <HorizontalLine/>

            
                <SwitchUpYour />
            
                {/* Conditionally render EmailSubscribe2 if not on '/subscribe' route */}
                <footer
                    style={{
                        width: '100%',
                        fontFamily: 'GFS Didot, serif',
                        justifyContent: 'center',
                        backgroundColor: '#EBE8E4',
                        color: '#745B4F',
                        textAlign: 'center',
                        padding: '2rem',
                        marginTop: '1rem auto',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <div
                        style={{
                            fontFamily: 'GFS Didot, serif',
                            gap: '1rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <div></div>
                        <div>
                            <button
                                style={{
                                    fontFamily: 'GFS Didot, serif',
                                    textAlign: 'center',
                                    fontSize: '18px',
                                    cursor: 'pointer',
                                    color: '#745B4F',
                                    background: 'none',
                                    border: 'none',
                                    textDecoration: 'none',
                                }}
                            >
                                <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    Home
                                </a>
                            </button>
                            <br />
                            <a
                                href="/sitemap"
                                style={{
                                    color: '#745B4F',
                                    textDecoration: 'none',
                                    fontSize: '18px',
                                }}
                            >
                                SiteMap
                            </a>
                            <br />
                            <a
                                href="/press"
                                style={{
                                    color: '#745B4F',
                                    textDecoration: 'none',
                                    fontSize: '18px',
                                }}
                            >
                                Media Kit
                            </a>
                            <br />
                            <a
                                href="/subscribe"
                                style={{
                                    color: '#745B4F',
                                    textDecoration: 'none',
                                    fontSize: '18px',
                                }}
                            >
                                Subscribe
                            </a>
                            <br />
                            <a
                                href="/privacy"
                                style={{
                                    color: '#745B4F',
                                    textDecoration: 'none',
                                    fontSize: '18px',
                                }}
                            >
                                Policies
                            </a>
                        </div>
                        <div
                            style={{
                                textAlign: 'center',
                                fontSize: '1rem',
                                cursor: 'pointer',
                                color: '#745B4F',
                                padding: '1rem',
                            }}
                        >
                            © Jackie Wyers 2024
                        </div>
                    </div>
                    <div style={{ fontSize: '40px' }}>
                        <a
                            href="https://youtube.com/@JackieWyers?si=sklULUqnNkzkmiaY"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <YouTubeIcon style={{ color: '#745B4F', fontSize: 30 }} />
                        </a>
                        <a
                            href="https://www.instagram.com/jackiewyers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <InstagramIcon style={{ color: '#745B4F', fontSize: 30 }} />
                        </a>
                        <a
                            href="https://pin.it/27OmCVDye"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <PinterestIcon style={{ color: '#745B4F', fontSize: 30 }} />
                        </a>
                        <a href="mailto:jackietwyers@gmail.com">
                            <MailOutlineIcon style={{ color: '#745B4F', fontSize: 30 }} />
                        </a>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Footer;