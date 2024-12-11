import React, { useState } from 'react';

const Poll = ({ options }) => {
  const [votes, setVotes] = useState(Array(options.length).fill(0));

  const handleVote = (index) => {
    const updatedVotes = [...votes];
    updatedVotes[index] += 1;
    setVotes(updatedVotes);
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px auto' }}>
      {options.map((option, index) => (
        <button
          key={index}
          style={{
            backgroundColor: option.color,
            color: '#fff',
            fontSize: '1rem',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            margin: '0 10px',
            fontFamily: "'Playfair Display', serif",
          }}
          onClick={() => handleVote(index)}
        >
          {option.text}
        </button>
      ))}

      <div style={{ marginTop: '20px' }}>
        {options.map((option, index) => (
          <p
            key={index}
            style={{
              fontSize: '1.2rem',
              color: '#000',
              fontFamily: "'EB Garamond', serif",
              fontWeight: '400',
              margin: '10px 0',
            }}
          >
            {option.text} Votes: <strong>{votes[index]}</strong>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Poll;