// ThreeSections.jsx
import React from 'react';

const ThreeSections = ({ section1Content, section2Content, section3Content }) => {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <div style={{ flex: 1, textAlign: 'center', padding: '20px' }}>
        {section1Content}
      </div>
      <div style={{ flex: 1, textAlign: 'center', padding: '20px' }}>
        {section2Content}
      </div>
      <div style={{ flex: 1, textAlign: 'center', padding: '20px' }}>
        {section3Content}
      </div>
    </div>
  );
};

export default ThreeSections;
