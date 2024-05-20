import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz1.css';

const Quiz2 = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState({ '1': 0, '2': 0, '3': 0, '4': 0 });
  const [showResults, setShowResults] = useState(false);

  const quizQuestions = [
    {
      question: "Which eye colour is closest to yours?",
      options: [
        { text: "🌊 Dark Blue", value: "1", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/cateye.jpg` }, // Bunny
        { text: "👁 Big Brown Eyes", value: "2", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/deereye.jpg` }, // Deer
        { text: "🍃 Green", value: "3", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/foxeye.jpg` }, // Fox
        { text: "💎 Light Blue", value: "4", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/bunnyeye.jpg` }, // Cat
      ],
    },
    {
      question: "What hair colour is closest to your hair?",
      options: [
        { text: "🌼 Blonde", value: "1", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/BLONDEBUTTON.jpg` }, // Bunny
        { text: "🍫 Brown", value: "2", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/BROWNBUTTON.jpg` }, // Deer
        { text: "🔥 Red", value: "3", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/REDBUTTON.jpg` }, // Fox
        { text: "🖤 Black", value: "4", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/BLACKBUTTON.jpg` }, // Cat
      ],
    },
    {
      question: "What’s in your dream makeup bag?",
      options: [
        { text: "💄 Charlotte Tilbury", value: "1", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/bunnymakeupproducts.jpg` }, // Bunny
        { text: "✨ WinkyLux", value: "2", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/deermakeupproducts.jpg` }, // Deer
        { text: "🌿 BareMinerals", value: "3", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/foxmakeup.jpg` }, // Fox
        { text: "💅 Victoria Beckham Beauty", value: "4", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/catmakeup.jpg` }, // Cat
      ],
    },
    {
      question: "What colour palette are you drawn to?",
      options: [
        { text: "🌸 Soft Pastels", value: "1", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/pastelbunnycolours.jpg` }, // Bunny
        { text: "🌾 Neutral and Subtle", value: "2", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/deercolours.jpeg` }, // Deer
        { text: "🍂 Earthy Tones", value: "3", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/foxcolours.jpg` }, // Fox
        { text: "🌈 Bold and Vibrant", value: "4", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/catcolours.jpg` }, // Cat
      ],
    },
    {
      question: "What’s your fav nostalgic doll?",
      options: [
        { text: "👛 Polly Pocket", value: "1", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/polly.jpg` }, // Bunny
        { text: "👧 American Girl", value: "2", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/americangirl.jpg` }, // Deer
        { text: "💃 Groovy Girls", value: "3", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/groovy.jpg` }, // Fox
        { text: "👑 Bratz", value: "4", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/brats.jpg` }, // Cat
      ],
    },
    {
      question: "What's your ideal way to spend a weekend?",
      options: [
        { text: "🍵 Attending a Tea Party", value: "1", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/teapartybunny.jpg` }, // Bunny
        { text: "📚 Cozying up with a Good Book", value: "2", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/bookdeer.jpg` }, // Deer
        { text: "🌲 Exploring Nature", value: "3", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/naturefox.jpg` }, // Fox
        { text: "🍽 Dressing up for a Fancy Dinner or a Night Out", value: "4", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/partycat.jpg` }, // Cat
      ],
    },
    {
      question: "What’s your dream clothing haul?",
      options: [
        { text: "👗 Cute/Feminine", value: "1", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/BunnyButton1.jpg` }, // Bunny
        { text: "🎨 Whimsical", value: "2", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/DeerButton1.jpg` }, // Deer
        { text: "👜 Bohemian", value: "3", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/FoxButton1.jpg` }, // Fox
        { text: "🔥 Sexy", value: "4", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/CatButton1.jpg` }, // Cat
      ],
    },
    {
      question: "What best describes your natural lip shape?",
      options: [
        { text: "👄 Soft Pout", value: "1", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/bunnylips.jpg` }, // Bunny
        { text: "💋 Full Pout, Top Heavy", value: "2", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/deerlips.jpg` }, // Deer
        { text: "👄 Thinner Lips", value: "3", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/foxlips.jpg` }, // Fox
        { text: "💋 Super Pouty, Bottom Heavy", value: "4", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/catlips.jpg` }, // Cat
      ],
    },
    {
      question: "Describe your dream aesthetic space:",
      options: [
        { text: "Cute and Girly", value: "1", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/bunny.jpg` }, // Bunny
        { text: "Cottagecore", value: "2", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/deer.jpg` }, // Deer
        { text: "Bohemian", value: "3", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/fox.jpg` }, // Fox
        { text: "Sexy", value: "4", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/cat.png` }, // Cat
      ],
    },
    {
      question: "How would your friends describe your personality?",
      options: [
        { text: "Sweet", value: "1", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/sweet.jpeg` }, // Bunny
        { text: "Elegant", value: "2", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/elegant.jpeg` }, // Deer
        { text: "Adventurous", value: "3", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/adventurous.jpeg` }, // Fox
        { text: "Confident", value: "4", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/confident.jpeg` }, // Cat
      ],
    },
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
    const maxScoreCategory = Object.keys(finalScores).reduce((a, b) => finalScores[a] > finalScores[b] ? a : b);

    switch (maxScoreCategory) {
      case '1': navigate('/bunnypretty'); break;
      case '2': navigate('/deerpretty'); break;
      case '3': navigate('/foxpretty'); break;
      case '4': navigate('/catpretty'); break;
      default: navigate('/');
    }
  };

  return (
    <div style={{ fontFamily: 'GFS Didot, serif' }} className="quiz-container">
      {!showResults ? (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestionIndex + 1}</span>/{quizQuestions.length}
            </div>
            <div className="question-text">{quizQuestions[currentQuestionIndex].question}</div>
          </div>
          <div className="answer-section">
            {quizQuestions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                style={{
                  backgroundImage: `url(${option.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                onClick={() => handleAnswerClick(option.value)}
              >
                {/* Option text is commented out but retained in the code */}
                {/* {option.text} */}
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

export default Quiz2;
