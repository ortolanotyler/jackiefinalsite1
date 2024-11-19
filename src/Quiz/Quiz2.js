import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AnimalPrettyQuiz.css";

const Quiz2 = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState({ "1": 0, "2": 0, "3": 0, "4": 0 });
  const [showResults, setShowResults] = useState(false);

  const quizQuestions = [
    {
      question: "Which eye colour is closest to yours?",
      options: [
        { text: "🌊 Dark Blue", value: "4", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/bunnyeye.jpg` },
        { text: "👁 Big Brown Eyes", value: "2", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/deereye.jpg` },
        { text: "🍃 Green", value: "3", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/foxeye.jpg` },
        { text: "💎 Light Blue", value: "1", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/cateye.jpg` },
      ],
    },
    {
      question: "What hair colour is closest to your hair?",
      options: [
        { text: "🌼 Blonde", value: "1", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/BLONDEBUTTON.jpg` },
        { text: "🍫 Brown", value: "2", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/BROWNBUTTON.jpg` },
        { text: "🔥 Red", value: "3", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/REDBUTTON.jpg` },
        { text: "🖤 Black", value: "4", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/BLACKBUTTON.jpg` },
      ],
    },
    // Add more questions as needed...
  ];

  const handleAnswerClick = (value) => {
    const updatedScores = { ...scores, [value]: scores[value] + 1 };
    setScores(updatedScores);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
      finishQuiz(updatedScores);
    }
  };

  const finishQuiz = (finalScores) => {
    const maxScoreCategory = Object.keys(finalScores).reduce(
      (a, b) => (finalScores[a] > finalScores[b] ? a : b)
    );

    switch (maxScoreCategory) {
      case "1":
        navigate("/bunnypretty");
        break;
      case "2":
        navigate("/deerpretty");
        break;
      case "3":
        navigate("/foxpretty");
        break;
      case "4":
        navigate("/catpretty");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <div className="animal-quiz-container">
      {!showResults ? (
        <>
          <div className="animal-question-section">
            <div className="animal-question-text">
              {quizQuestions[currentQuestionIndex].question}
            </div>
          </div>
          <div className="animal-answer-section">
            {quizQuestions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                className="animal-answer-button"
                style={{
                  backgroundImage: `url(${option.backgroundImage})`,
                }}
                onClick={() => handleAnswerClick(option.value)}
              >
                {option.text}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="animal-results-section">
          <h2>Quiz Completed!</h2>
          <button onClick={() => navigate("/")}>Go Home</button>
        </div>
      )}
    </div>
  );
};

export default Quiz2;