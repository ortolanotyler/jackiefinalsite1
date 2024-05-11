import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import vlogvideo from "./vlogvideo.mp4";
import SubscribeVlog from '../Components/SubscribeVlog';

function VlogVideo() {
    return (
        <Link to="/vlogs" style={{ display: 'block', position: 'relative', width: '100%' }}>
                 <div

                 style = {{
                    justifyContent : 'center',
                    textAlign : 'center',
                    padding: '1rem'


                 }}
                 
                 >
                 <SubscribeVlog/>
                </div> 
            <div style={{ width: '100%', position: 'relative', paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
          
                <video 
                    style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%'
                    }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    title="Video Title"
                >
                    <source src={vlogvideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div style={{
                    justifyContent: 'center',
                    position: 'absolute',
                    top: '22%', // Centers vertically
                    left: '62%', // Centers horizontally
                    transform: 'translate(-50%, -50%)', // Correctly centers the component
                    zIndex: 10 // Ensures it is above the video
                }}>
                 
                </div>
            </div>
        </Link>
    );
}

export default VlogVideo;



