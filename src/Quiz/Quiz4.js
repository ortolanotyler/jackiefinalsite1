import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz1.css'; // Adjust your CSS file path if needed
import { Helmet } from 'react-helmet-async';

const Quiz4 = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const quizQuestions = [
    {
      question: "How would you describe your Halloween Plans?",
      options: [
        { text: "Photo op moment 📸", points: 7 },
        { text: "House party 💃", points: 5 },
        { text: "Classy costume party 🎩", points: 4 },
        { text: "Cozy & low key🧣", points: 1 }
      ],
    },
    {
      question: "Which type of shoes are your go-to?",
      options: [
        { text: "Designer heels 👠", points: 7 },
        { text: "Cute loafers 🥿", points: 5 },
        { text: "Chic ballet flats 🖤", points: 4 },
        { text: "Comfy sneakers 🥾", points: 1 }
      ],
    },
    {
      question: "Pick your favorite Halloween candy!",
      options: [
        { text: "French Mints 🌹", points: 7 },
        { text: "Gummy Worms 🌈", points: 2 },
        { text: "Coffee Flavored ☕", points: 4 },
        { text: "Smarties Squashies 🍇", points: 1 }
      ],
    },
    {
      question: "Pick a signature makeup style.",
      options: [
        { text: "Pink Lips 💖", points: 6 },
        { text: "Y2K Glitter ✨", points: 5 },
        { text: "Winged Liner & Lashes 👁️", points: 4 },
        { text: "Natural glow 🌞", points: 1 }
      ],
    },
    {
      question: "What’s your favorite fashion aesthetic?",
      options: [
        { text: "MOD 60s💕", points: 6 },
        { text: "Y2K vibe 📟", points: 5 },
        { text: "Period drama dresses🎭", points: 2 },
        { text: "Cozy chic 🧸", points: 1 }
      ],
    },
    {
      question: "What kind of Halloween costume would you pick?",
      options: [
        { text: "High-fashion glam🌸", points: 7 },
        { text: "Pop Culture Icon 🌟", points: 5 },
        { text: "Hollywood classic 🎬", points: 4 },
        { text: "Princess vibes 👑", points: 2 }
      ],
    },
    {
      question: "How would your friends describe you?",
      options: [
        { text: "Bold & confident ♥️", points: 7 },
        { text: "Fun & outgoing 😃", points: 5 },
        { text: "Sophisticated & charming 🍸", points: 4 },
        { text: "Down-to-earth & creative 🌿", points: 1 }
      ],
    },
    {
      question: "Which vacation spot sounds most appealing?",
      options: [
        { text: "Paris Fashion Week 🗼", points: 7 },
        { text: "Trendy LA 🏄‍♀️", points: 6 },
        { text: "Historic Europe 🏰", points: 4 },
        { text: "Ocean retreat 🌊", points: 2 }
      ],
    },
    {
      question: "Which hairstyle for a Halloween party?",
      options: [
        { text: "Big hair 🤎", points: 7 },
        { text: "High pigtails 🎀", points: 5 },
        { text: "Elegant updo 🎻", points: 4 },
        { text: "Beachy waves 🌴", points: 2 }
      ],
    },
    {
      question: "How long do you have to get ready?",
      options: [
        { text: "Hours & Hours 😏", points: 7 },
        { text: "Quick 45 mins ⏱️", points: 5 },
        { text: "An hour or two ⌛", points: 4 },
        { text: "Rushed moments ⏳", points: 2 }
      ],
    },
    {
      question: "Would you be sad wearing a similar costume to someone else?",
      options: [
        { text: "I’d still outshine 🌟", points: 6 },
        { text: "Totally fine 😊", points: 5 },
        { text: "New friend time 🤝", points: 3 },
        { text: "Not bothered 🤷‍♀️", points: 1 }
      ],
    },
    {
      question: "What is your ultimate Halloween night activity?",
      options: [
        { text: "Red carpet event 🎥", points: 7 },
        { text: "Karaoke night 🎤", points: 5 },
        { text: "Cocktail party 🍹", points: 4 },
        { text: "Movie marathon 🍿", points: 1 }
      ],
    },
    {
      question: "Which music genre best represents your vibe?",
      options: [
        { text: "Swifty tunes 🎶", points: 1 },
        { text: "Nostalgic pop 📀", points: 5 },
        { text: "Confidence anthems 💪", points: 7 },
        { text: "Relaxing piano 🎹", points: 4 }
      ],
    },
  ];

  const handleAnswerClick = (points) => {
    setTotalPoints(totalPoints + points);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
      calculateResults();
    }
  };

  const calculateResults = () => {
    if (totalPoints >= 51) {
      navigate('/ysl-laurent');
    } else if (totalPoints >= 45) {
      navigate('/barbie-movie');
    } else if (totalPoints >= 35) {
      navigate('/britney-spears');
    } else if (totalPoints >= 27) {
      navigate('/breakfast-at-tiffanys');
    } else if (totalPoints >= 19) {
      navigate('/bridgerton');
    } else if (totalPoints >= 10) {
      navigate('/ariel');
    } else {
      navigate('/taylor-folklore');
    }
  };

  return (
    <>
      <Helmet>
        <title>What's Your Halloween Style? | Find Out Now!</title>
        <meta name="description" content="Take our fun quiz to discover your Halloween style with outfits inspired by pop culture icons like Britney Spears, Barbie, Bridgerton, and more!" />
      </Helmet>

      {!showResults ? (
        <div className="quiz-container">
          <div className="question-section">
            <div className="question-count">
              <span>QUESTION {currentQuestionIndex + 1}</span>/{quizQuestions.length}
            </div>
            <div className="question-text">
              {quizQuestions[currentQuestionIndex].question}
            </div>
          </div>
          <div className="answer-section">
            {quizQuestions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                className="answer-button"
                onClick={() => handleAnswerClick(option.points)}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="results-section">
          <h2>Quiz Completed! Calculating Your Results...</h2>
        </div>
      )}
    </>
  );
};

export default Quiz4;