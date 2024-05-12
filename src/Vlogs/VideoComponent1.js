import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import vlogvideo from "./vlogvideo.mp4";
import SubscribeVlog from '../Components/SubscribeVlog';

function VlogVideo1() {
    return (
        <Link to="/vlogs" style={{ display: 'block', position: 'relative', width: '100%' }}>
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
                    position: 'absolute',
                    top: '21.5%', // Centers vertically
                    left: '50%', // Centers horizontally
                    transform: 'translate(-50%, -50%)', // Correctly centers the component
                    zIndex: 10 // Ensures it is above the video
                }}>
                    <SubscribeVlog />
                </div>
            </div>
        </Link>
    );
}

export default VlogVideo1;



