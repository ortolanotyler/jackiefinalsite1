import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz3.css';

const Quiz3 = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  
  const quizQuestions = [
    {
      question: "What is your dream wedding location?",
      options: [
        { text: "An enchanted garden 🪴", value: 1, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/1button.jpg` },
        { text: "A historic castle 🏰", value: 2, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/2button.jpg` },
        { text: "Glamorous art deco 🎨", value: 3, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/3button.jpg` },
        { text: "Upscale beach wedding 🏖️", value: 4, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/4button.jpg` },
        { text: "Luxurious ballroom 💃", value: 5, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/a.jpeg` },
        { text: "Garden Party 🌸", value: 7, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/b.jpeg` },
      ],
    },
    {
      question: "Which dresses are you most drawn to?",
      options: [
        { text: "Romantic and whimsical 💕", value: 1, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/5button.jpg` },
        { text: "Princesscore 👑", value: 2, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/c.jpeg` },
        { text: "Simple & Timeless 🎩", value: 3, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/d.jpeg` },
        { text: "Elegant and sophisticated 💍", value: 4, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/8button.jpg` },
        { text: "Always Appropriate & Chic 👗", value: 5, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/e.jpeg` },
        { text: "Showgirl Glam 💎", value: 6, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/f.jpeg` },
      ],
    },
    {
      question: "Which accessory would complete your bridal look?",
      options: [
        { text: "A delicate flower crown 🥀", value: 1, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/9button.jpg` },
        { text: "Handmade flower pins 🌸", value: 2, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/g.jpeg` },
        { text: "Diamond Studded Hair Pins 💎", value: 3, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/h.jpeg` },
        { text: "A chic veil 👰🏻‍♀️", value: 4, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/12button.jpg` },
        { text: "A sparkling tiara 👸🏻", value: 6, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/10button.jpg` },
        { text: "Heirloom Earrings ✨", value: 7, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/i.jpeg` },
      ],
    },
    {
      question: "Pick a Bouquet!",
      options: [
        { text: "Earthy Wildflowers 🌼", value: 1, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/13button.jpg` },
        { text: "Classic White & Green 💚", value: 2, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/14button.jpg` },
        { text: "Romantic Bouquet 🥀", value: 3, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/j.jpeg` },
        { text: "Red Roses 🥀", value: 4, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/k.jpeg` },
        { text: "White Roses 🤍", value: 5, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/l.jpeg` },
        { text: "Luxurious Bouquet 🪶", value: 6, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/15button.jpg` },
      ],
    },
    {
      question: "Which part of your body do you want to feature most?",
      options: [
        { text: "Bare Shoulders 👗", value: 1, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/17button.jpg` },
        { text: "Tiny Waist 🌟", value: 2, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/18button.jpg` },
        { text: "Curvy Hips 🍑", value: 3, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/19button.jpg` },
        { text: "Bare Back 🌹", value: 4, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/20button.jpg` },
        { text: "Beautiful Hands 💅", value: 5, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/m.jpeg` },
        { text: "Formfitted Allover 💃", value: 7, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/n.jpeg` },
      ],
    },
    {
      question: "Pick Your Bridal Inspiration?",
      options: [
        { text: "Elle Fanning as Aurora 🌸", value: 1, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/elle.jpeg` },
        { text: "Phantom Of The Opera 🎭", value: 2, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/christine.jpeg` },
        { text: "Rogers & Hammerstein’s Cinderella 👗", value: 3, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/cinderella.jpeg` },
        { text: "Bella Swan 🌲", value: 4, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/bella.jpeg` },
        { text: "Kate Middleton 👑", value: 5, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/kate.jpeg` },
        { text: "Lana Del Rey 🎶", value: 6, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/lana.jpeg` },
      ],
    },
    {
      question: "Dream Wedding Gift",
      options: [
        { text: "Leather Scrapbook 📚", value: 1, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/25button.jpg` },
        { text: "Pressed Florals 🌼", value: 2, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/pressedflowers.jpeg` },
        { text: "Pearl Necklace 📿", value: 3, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/26button.jpg` },
        { text: "Chanel Bag 👜", value: 4, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/chanelbag.jpeg` },
        { text: "Luxurious Stationary ✉️", value: 5, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/stationary.jpeg` },
        { text: "Vintage Silver Tea Set 🫖", value: 7, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/28button.jpg` },
      ],
    },
  ];

  const handleAnswerClick = (value) => {
    setAnswers([...answers, value]);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
      finishQuiz([...answers, value]);
    }
  };

  const finishQuiz = (finalAnswers) => {
    const total = finalAnswers.reduce((acc, curr) => acc + curr, 0);

    let result;
    if (total <= 10) result = 'Fairytale Wedding - Bacarra';
    else if (total <= 18) result = 'Fairytale Wedding 2 - Elizabeth';
    else if (total <= 26) result = 'Simple & Chic - Percy';
    else if (total <= 34) result = 'Old Money - Ora';
    else if (total <= 42) result = 'Royal Wedding - Abril';
    else if (total <= 48) result = 'Vintage Glamour - Porsha';
    else result = 'Bridgerton Vibes - Zara';

    switch (result) {
      case 'Fairytale Wedding - Bacarra': navigate('/bacarra'); break;
      case 'Fairytale Wedding 2 - Elizabeth': navigate('/elizabeth'); break;
      case 'Simple & Chic - Percy': navigate('/percy'); break;
      case 'Old Money - Ora': navigate('/ora'); break;
      case 'Royal Wedding - Abril': navigate('/abril'); break;
      case 'Vintage Glamour - Porsha': navigate('/porsha'); break;
      case 'Bridgerton Vibes - Zara': navigate('/zara'); break;
      default: navigate('/');
    }
  };

  return (
    <div className="quiz-container">
      {!showResults ? (
        <>
          <div className="question-section">
            <div className="question-text">
              {quizQuestions[currentQuestionIndex].question}
            </div>
          </div>
          <div className="answer-section">
            {quizQuestions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                className="answer-button"
                onClick={() => handleAnswerClick(option.value)}
                style={{
                  backgroundImage: `url(${option.backgroundImage})`,
                }}
              >
                {option.text}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="results-section">
          <h2>Quiz Completed!</h2>
          <button onClick={() => navigate('/')}>Go Home</button>
        </div>
      )}
    </div>
  );
};

export default Quiz3;