import React from 'react';

import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SwitchUpYour from './SwitchUpYour';


const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smooth scrolling
        });
    };

    return (
        <div>
            <SwitchUpYour />
            <footer style={{ 
                width: '100%',
                fontFamily: 'GFS Didot, serif',
                justifyContent: 'center',
                backgroundColor: '#EBE8E4', 
                color: '#745B4F', 
                textAlign: 'center',
                padding: '40px 20px' }}>

                <div style={{ fontSize: '40px', marginBottom: '20px' }}>
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
                {/* Flex container for Sitemap and Back to Top */}
                <div style={{                 fontFamily: 'GFS Didot, serif',gap: '3rem',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div>
          

                    <button onClick={scrollToTop} style={{                fontFamily: 'GFS Didot, serif', marginRight: '0rem',textAlign: 'left',fontSize: '1.25rem', cursor: 'pointer', color: '#745B4F', background: 'none', border: 'none', textDecoration: 'none' }}>
                        Back to Top
                    </button>

                    <br></br>

                    <button style={{                 fontFamily: 'GFS Didot, serif', marginRight: '0rem', textAlign: 'left', fontSize: '1.25rem', cursor: 'pointer', color: '#745B4F', background: 'none', border: 'none', textDecoration: 'none' }}>
  <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
    Home
  </a>
</button>

                </div>
                
                    <div
                    style = {{
                        fontFamily: 'GFS Didot, serif',

                        justifyContent: 'right',
                        textAlign:'right'
                    }}
                    >
                           <p onClick={scrollToTop} style={{ textAlign:'center' , margin: '1rem',fontSize: '1rem', cursor: 'pointer', color: '#745B4F', }}>
                        All Rights Reserved. © Jackie Wyers 2024
                    </p>
                   
                        </div>
                        
                       <div>
                       <a href="/sitemap" style={{ color: '#745B4F', textDecoration:'none', fontSize : '1.25rem' }}>
                        SiteMap

                    </a>
                    <br></br>
                    <a href="/mediakit" style={{ color: '#745B4F', textDecoration:'none', fontSize : '1.25rem' }}>
                     Press 
                    </a>
                    <br></br>
                    <a href="/emailsubscribe" style={{ color: '#745B4F', textDecoration:'none', fontSize : '1.25rem' }}>
                        Subscribe
                    </a>
                    <br></br>
                    <a href="/yourprivacyisimportant" style={{ color: '#745B4F', textDecoration:'none', fontSize : '1.25rem' }}>
                         Policies
                    </a>
                    

                    
                       </div>
             

        
                  
                </div>
             
            </footer>
        </div>
    );
};

export default Footer;

