import React from 'react';

const ResponsiveYoutube = ({ src, title }) => (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', width: '50%', background: '#000', margin: '0 auto' }}>
        <iframe
            src={src}
            title={title}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        />
    </div>
);

export default ResponsiveYoutube;
