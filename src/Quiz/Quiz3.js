import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz1.css';
import { Helmet } from 'react-helmet';

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
      ],
    },
    {
      question: "Which dresses are you most drawn to?",
      options: [
        { text: "Romantic and whimsical 💕", value: 1, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/5button.jpg` },
        { text: "Classic and regal 👑", value: 2, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/6button.jpg` },
        { text: "Glamorous and timeless 🎩", value: 3, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/7button.jpg` },
        { text: "Elegant and sophisticated 💍", value: 4, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/8button.jpg` },
      ],
    },
    {
      question: "Which accessory would complete your bridal look?",
      options: [
        { text: "A delicate flower crown 🥀", value: 1, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/9button.jpg` },
        { text: "A sparkling tiara 👸🏻", value: 2, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/10button.jpg` },
        { text: "Vintage pearls ✨", value: 3, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/11button.jpg` },
        { text: "A chic veil 👰🏻‍♀️", value: 4, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/12button.jpg` },
      ],
    },
    {
      question: "Pick a Bouquet!",
      options: [
        { text: "Earthy Wildflowers 🌼", value: 1, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/13button.jpg` },
        { text: "Classic White & Green 💚", value: 2, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/14button.jpg` },
        { text: "Glamorous Bouquet 💐", value: 3, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/15button.jpg` },
        { text: "Luxurious Bouquet 🌹", value: 4, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/16button.jpg` },
      ],
    },
    {
      question: "Which part of your body do you want to feature most?",
      options: [
        { text: "Bare Shoulders", value: 1, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/17button.jpg` },
        { text: "Tiny Waist", value: 2, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/18button.jpg` },
        { text: "Curvy Hips", value: 3, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/19button.jpg` },
        { text: "Bare Back", value: 4, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/20button.jpg` },
      ],
    },
    {
      question: "Which classic novel do you wish you could live in?",
      options: [
        { text: "The Secret Garden by Frances Hodgson Burnett", value: 2, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/21button.jpg` },
        { text: "Pride and Prejudice by Jane Austen", value: 3, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/22button.jpg` },
        { text: "The Great Gatsby by F. Scott Fitzgerald", value: 5, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/23button.jpg` },
        { text: "Brideshead Revisited by Evelyn Waugh", value: 7, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/24button.jpg` },
      ],
    },
    {
      question: "Dream Wedding Gift",
      options: [
        { text: "Leather Scrapbook", value: 1, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/25button.jpg` },
        { text: "Pearl Necklace", value: 2, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/26button.jpg` },
        { text: "Glamorous Mirror", value: 3, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/27button.jpg` },
        { text: "Vintage Silver Tea Set", value: 4, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/28button.jpg` },
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
    if (total <= 7) {
      result = 'Fairytale Wedding - Bacarra';
    } else if (total <= 14) {
      result = 'Royal Wedding - Abril';
    } else if (total <= 21) {
      result = 'Vintage Glamour - Percy';
    } else if (total <= 28) {
      result = 'Old Money - Ora';
    } else if (total <= 35) {
      result = 'Fairytale Wedding - Elizabeth';
    } else if (total <= 42) {
      result = 'Vintage Glamour - Porsha';
    } else {
      result = 'Old Money - Zara';
    }

    // Redirect to the result page based on the calculated result
    switch (result) {
      case 'Fairytale Wedding - Bacarra': navigate('/bacarra'); break;
      case 'Royal Wedding - Abril': navigate('/abril'); break;
      case 'Vintage Glamour - Percy': navigate('/percy'); break;
      case 'Old Money - Ora': navigate('/ora'); break;
      case 'Fairytale Wedding - Elizabeth': navigate('/elizabeth'); break;
      case 'Vintage Glamour - Porsha': navigate('/porsha'); break;
      case 'Old Money - Zara': navigate('/zara'); break;
      default: navigate('/');
    }
  };

  return (
    <div className="quiz-container">
      <Helmet>
        <title>The Ultimate 2025 Wedding Dress Guide</title>
        <meta name="description" content="Find your perfect wedding dress style with our fun and interactive quiz! Discover which wedding dress matches your dream wedding location, style, and more." />
        <meta name="keywords" content="wedding dress quiz, bridal style, wedding fashion, 2025 wedding dresses, find your wedding dress, bridal quiz, wedding style guide, Jackie Wyers" />
        <meta property="og:title" content="The Ultimate 2025 Wedding Dress Guide" />
        <meta property="og:description" content="Find your perfect wedding dress style with our fun and interactive quiz! Discover which wedding dress matches your dream wedding location, style, and more." />
        <meta property="og:image" content={`${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/og-image.jpg`} />
        <meta property="og:url" content="https://jackiewyers.beauty/quiz3" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Ultimate 2025 Wedding Dress Guide" />
        <meta name="twitter:description" content="Find your perfect wedding dress style with our fun and interactive quiz! Discover which wedding dress matches your dream wedding location, style, and more." />
        <meta name="twitter:image" content={`${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/twitter-image.jpg`} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RT6GR7JXYG"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RT6GR7JXYG');
          `}
        </script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4660168246825318" crossorigin="anonymous"></script>
      </Helmet>

      {!showResults ? (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>QUESTION {currentQuestionIndex + 1}</span>/{quizQuestions.length}
            </div>
            <div className="question-text">{quizQuestions[currentQuestionIndex].question}</div>
          </div>
          <div className="answer-section">
            {quizQuestions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                className="answer-button"
                style={{
                  backgroundImage: `url(${option.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                onClick={() => handleAnswerClick(option.value)}
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
