import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HorizontalLine from '../Components/HorizontalLine';
import styles from './Quiz5.module.css';

const MaleFemaleGazeQuiz = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const quizQuestions = [
    {
      question: "Which makeup brand are you drawn to?",
      options: [
        { text: "Charlotte Tilbury", value: 0, backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto,q_auto/v1730303109/1_ijkn0r.jpg' },
        { text: "Mac", value: 1, backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto,q_auto/v1730303109/2_i7varn.jpg' },
      ],
    },
    {
      question: "Fragrance preference?",
      options: [
        { text: "Warm vanilla", value: 0, backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto,q_auto/v1730303109/3_j67lom.jpg' },
        { text: "Unique spicy", value: 1, backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto,q_auto/v1730303109/4_vro6ro.jpg' },
      ],
    },
    {
      question: "Pick a mani:",
      options: [
        { text: "Natural or French", value: 0, backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto,q_auto/v1730303109/5_xxyhny.jpg' },
        { text: "Bold and trendy", value: 1, backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto,q_auto/v1730303109/6_hdp13w.jpg' },
      ],
    },
    {
      question: "Pick a hairstyle:",
      options: [
        { text: "Cute ponytail", value: 0, backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto,q_auto/v1730303109/9_nxdfpt.jpg' },
        { text: "Sleek bun", value: 1, backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto,q_auto/v1730303109/10_usz3in.jpg' },
      ],
    },
    {
      question: "Which is close to your collection?",
      options: [
        { text: "Cute pouch for essentials", value: 0, backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto,q_auto/v1730303109/13_idl6lh.jpg' },
        { text: "Makeup kit", value: 1, backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto,q_auto/v1730303109/14_zemz2c.jpg' },
      ],
    },
    {
      question: "How do you wear accessories?",
      options: [
        { text: "Sentimental dainty pieces", value: 0, backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto,q_auto/v1730303110/20_livqd5.jpg' },
        { text: "Adding to my luxury collection", value: 1, backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto,q_auto/v1730303110/19_u55icp.jpg' },
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
        {/* Meta tags remain the same */}
      </Helmet>

      {!showResults ? (
        <div className={styles.quizContainer}>
          <HorizontalLine />
          <div className={styles.questionSection}>
            <div className={styles.questionText}>
              {quizQuestions[currentQuestionIndex].question}
            </div>
          </div>
          <div className={styles.answerSection}>
            {quizQuestions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                className={styles.answerButton}
                style={{ backgroundImage: `url(${option.backgroundImage})` }}
                onClick={() => handleAnswerClick(option.value)}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.resultsSection}>
          <h2>Quiz Completed! Calculating Your Results...</h2>
        </div>
      )}
    </>
  );
};

export default MaleFemaleGazeQuiz;