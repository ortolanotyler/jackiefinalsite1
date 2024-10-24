import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SwitchUpYour from './SwitchUpYour';
import SubscribeButton from '../../Components/SubscribeButton';

const Footer = () => {
    return (
        <>
        
<div
style = {{textAlign: 'center' , margin: '1rem auto'}}
>
<SubscribeButton/>
</div>
         <div style={{ width: '100%', overflowX: 'hidden' }}>
            <SwitchUpYour />
            <footer style={{
                width: '100%',
                fontFamily: 'GFS Didot, serif',
                justifyContent: 'center',
                backgroundColor: '#EBE8E4',
                color: '#745B4F',
                textAlign: 'center',
                padding: '40px 20px',
                marginTop: 'auto',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}>
                <div style={{ fontFamily: 'GFS Didot, serif', gap: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div>
                        <button style={{ fontFamily: 'GFS Didot, serif', textAlign: 'left', fontSize: '1.25rem', cursor: 'pointer', color: '#745B4F', background: 'none', border: 'none', textDecoration: 'none' }}>
                            <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</a>
                        </button>
                        <div>
                            <a href="/contact" style={{ color: '#745B4F', textDecoration: 'none', fontSize: '18px' }}>
                                Business Inquiries
                            </a>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', fontSize: '1rem', cursor: 'pointer', color: '#745B4F', margin: '1rem' }}>
                        © Jackie Wyers 2024
                    </div>
                    <div>
                        <a href="/sitemap" style={{ color: '#745B4F', textDecoration: 'none', fontSize: '18px' }}>
                            SiteMap
                        </a>
                        <br />
                        <a href="/press" style={{ color: '#745B4F', textDecoration: 'none', fontSize: '18px' }}>
                            Media Kit & Press
                        </a>
                        <br />
                        <a href="/subscribe" style={{ color: '#745B4F', textDecoration: 'none', fontSize: '18px' }}>
                            Subscribe
                        </a>
                        <br />
                        <a href="/privacy" style={{ color: '#745B4F', textDecoration: 'none', fontSize: '18px' }}>
                            Policies
                        </a>
                    </div>
                </div>
                <div style={{ fontSize: '40px' }}>
                    <a href="https://youtube.com/@JackieWyers?si=sklULUqnNkzkmiaY" target="_blank" rel="noopener noreferrer">
                        <YouTubeIcon style={{ color: '#745B4F', fontSize: 70 }} />
                    </a>
                    <a href="https://www.instagram.com/jackiewyers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon style={{ color: '#745B4F', fontSize: 70 }} />
                    </a>
                    <a href="https://pin.it/27OmCVDye" target="_blank" rel="noopener noreferrer">
                        <PinterestIcon style={{ color: '#745B4F', fontSize: 70 }} />
                    </a>
                    <a href="mailto:jackietwyers@gmail.com">
                        <MailOutlineIcon style={{ color: '#745B4F', fontSize: 70 }} />
                    </a>
                </div>

              
            </footer>
        </div>
        
        </>
       
    );
};

export default Footer;