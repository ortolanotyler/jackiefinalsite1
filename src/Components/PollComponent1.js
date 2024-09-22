// PollComponent.js
import React, { useState } from 'react';

const PollComponent = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const options = [
    "Britney Spears - ‘…Baby One More Time’",
    "Margot Robbie as Barbie - ‘Barbie Movie’",
    "Halle Bailey as Ariel - ‘The Little Mermaid’",
    "Francesca Bridgerton - ‘Bridgerton’",
    "Taylor Swift’s ‘Betty’",
    "YSL 1999 Haute Couture Bride",
    "Audrey Hepburn - ‘Breakfast at Tiffany’s’",
    "Original Barbie - 1950s Glam"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption) {
      setSubmitted(true);
      // Here you can add any logic to send the poll result to your backend or analytics platform
      console.log(`User selected: ${selectedOption}`);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Vote for Your Favorite Look:</h3>
      {submitted ? (
        <p style={{ fontSize: '1.1rem', color: '#000' }}>Thank you for voting!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          {options.map((option, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <label style={{ cursor: 'pointer', fontSize: '1rem' }}>
                <input
                  type="radio"
                  name="poll"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => setSelectedOption(option)}
                  style={{ marginRight: '10px' }}
                />
                {option}
              </label>
            </div>
          ))}
          <button type="submit" style={{ padding: '10px 20px', fontSize: '1rem', cursor: 'pointer' }}>
            Submit Vote
          </button>
        </form>
      )}
    </div>
  );
};

export default PollComponent;