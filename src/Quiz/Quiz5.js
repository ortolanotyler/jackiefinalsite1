import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz1.css'; // Adjust your CSS file path if needed
import { Helmet } from 'react-helmet-async';
import HorizontalLine from '../Components/HorizontalLine';

const MaleFemaleGazeQuiz = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const quizQuestions = [
    {
      question: "Which makeup brand are you drawn to?",
      options: [
        { text: "Charlotte Tilbury", value: 0, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz5/1.jpeg` },
        { text: "Mac", value: 1, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz5/2.jpeg` },
      ],
    },
    {
      question: "Fragrance preference?",
      options: [
        { text: "Warm vanilla", value: 0, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz5/3.jpeg` },
        { text: "Unique spicy", value: 1, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz5/4.jpeg` },
      ],
    },
    {
      question: "Pick a mani:",
      options: [
        { text: "Natural or French", value: 0, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz5/5.jpeg` },
        { text: "Bold and trendy", value: 1, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz5/6.jpeg` },
      ],
    },
    {
      question: "Pick a hairstyle:",
      options: [
        { text: "Cute ponytail", value: 0, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz5/7.jpeg` },
        { text: "Sleek bun", value: 1, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz5/8.jpeg` },
      ],
    },
    {
      question: "Where would you rather be?",
      options: [
        { text: "People watching", value: 0, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz5/9.jpeg` },
        { text: "Shopping with the girls", value: 1, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz5/10.jpeg` },
      ],
    },
    {
      question: "Which magazine do you grab?",
      options: [
        { text: "Seventeen", value: 0, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz5/11.jpeg` },
        { text: "VOGUE", value: 1, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz5/12.jpeg` },
      ],
    },
    {
      question: "Which is close to your collection?",
      options: [
        { text: "Cute pouch for essentials", value: 0, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz5/13.jpeg` },
        { text: "Makeup kit", value: 1, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz5/image14.jpeg` },
      ],
    },
    {
      question: "Pop culture wardrobe swap!",
      options: [
        { text: "Alaska’s Girl Next Door Style", value: 0, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz5/15.jpeg` },
        { text: "Effy’s Edgy Looks", value: 1, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz5/16.jpeg` },
      ],
    },
    {
      question: "Which Twilight Vamp are beauty goals to you?",
      options: [
        { text: "Bella Cullen", value: 0, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz5/17.jpeg` },
        { text: "Alice Cullen", value: 1, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz5/18.jpeg` },
      ],
    },
    {
      question: "How do you wear accessories?",
      options: [
        { text: "Sentimental dainty pieces", value: 0, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz5/19.jpeg` },
        { text: "Adding to my luxury collection", value: 1, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz5/20.jpeg` },
      ],
    },
  ];

  const handleAnswerClick = (points) => {
    setTotalPoints((prevPoints) => prevPoints + points);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  useEffect(() => {
    if (showResults) {
      calculateResults();
    }
  }, [showResults]);

  const calculateResults = () => {
    if (totalPoints >= 6) {
      navigate('/female');
    } else {
      navigate('/male');
    }
  };

  return (
    <>
      <Helmet>
        <title>Male vs. Female Gaze Quiz | Which Vibe Do You Exude?</title>
        <meta 
          name="description" 
          content="Take this quiz to find out if your vibe is more influenced by the male or female gaze, and discover how that reflects your beauty and style choices!" 
        />
        <meta 
          name="keywords" 
          content="Male Gaze, Female Gaze, personality quiz, makeup quiz, beauty quiz, Charlotte Tilbury, MAC, fragrance preferences, style quiz, pop culture quiz, Twilight Bella Cullen, Alice Cullen, fashion quiz, male vs female gaze quiz, beauty trends, fashion personality, quiz" 
        />
        <meta property="og:title" content="Male vs. Female Gaze Quiz | Which Vibe Do You Exude?" />
        <meta 
          property="og:description" 
          content="Find out if your vibe is more male or female gaze influenced in this fun quiz that highlights your makeup, fragrance, and style preferences!" 
        />
        <meta property="og:image" content="https://www.jackiewyers.beauty/Images/Quizzes/male-female-gaze-thumbnail.jpeg" />
        <meta property="og:url" content="https://www.jackiewyers.beauty/quiz/male-vs-female-gaze" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Male vs. Female Gaze Quiz | Which Vibe Do You Exude?" />
        <meta name="twitter:description" content="Find out whether your vibe exudes the male or female gaze through this fun quiz!" />
        <meta name="twitter:image" content="https://www.jackiewyers.beauty/Images/Quizzes/male-female-gaze-thumbnail.jpeg" />
        <meta name="twitter:site" content="@JackieWyers" />
      </Helmet>

      {!showResults ? (
        <div className="quiz-container">
          <HorizontalLine />
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
                style={{ backgroundImage: `url(${option.backgroundImage})` }}
                onClick={() => handleAnswerClick(option.value)}
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

export default MaleFemaleGazeQuiz;