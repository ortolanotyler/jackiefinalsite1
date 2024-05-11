import React from 'react';
import './BeigeReveal.css'; // Import the CSS

// Add a prop parameter to the function
const BeigeReveal = (props) => {
  // Use the `text` prop to dynamically set the text
  return (
    <>
      <div className="herobeige">
        <h1 className="text-reveal">
          <span>{props.text}</span>
          <span aria-hidden="true">{props.text}</span>
        </h1>
      </div>
    </>
  );
};

export default BeigeReveal;

