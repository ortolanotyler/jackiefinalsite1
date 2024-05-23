import React from 'react';

const TestScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div style={{ height: '200vh', padding: '20px' }}>
      <button onClick={scrollToTop} style={{ fontSize: '20px', padding: '10px', position: 'fixed', top: '10px', right: '10px' }}>
        Back to Top
      </button>
      <div style={{ marginTop: '190vh', padding: '20px', backgroundColor: '#f0f0f0' }}>
        Footer Content
      </div>
    </div>
  );
};

export default TestScrollToTop;
