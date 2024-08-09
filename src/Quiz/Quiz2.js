import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz1.css';
import { Helmet } from 'react-helmet';

const Quiz2 = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState({ '1': 0, '2': 0, '3': 0, '4': 0 });
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
    {
      question: "What’s in your dream makeup bag?",
      options: [
        { text: "💄 Charlotte Tilbury", value: "1", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/bunnymakeupproducts.jpg` },
        { text: "✨ WinkyLux", value: "2", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/deermakeupproducts.jpg` },
        { text: "🌿 BareMinerals", value: "3", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/foxmakeup.jpg` },
        { text: "💅 Victoria Beckham Beauty", value: "4", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/catmakeup.jpg` },
      ],
    },
    {
      question: "What colour palette are you drawn to?",
      options: [
        { text: "🌸 Soft Pastels", value: "1", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/pastelbunnycolours.jpg` },
        { text: "🌾 Neutral and Subtle", value: "2", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/deercolours.jpeg` },
        { text: "🍂 Earthy Tones", value: "3", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/foxcolours.jpg` },
        { text: "🌈 Bold and Vibrant", value: "4", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/catcolours.jpg` },
      ],
    },
    {
      question: "What’s your fav nostalgic doll?",
      options: [
        { text: "👛 Polly Pocket", value: "1", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/polly.jpg` },
        { text: "👧 American Girl", value: "2", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/americangirl.jpg` },
        { text: "💃 Groovy Girls", value: "3", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/groovy.jpg` },
        { text: "👑 Bratz", value: "4", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/brats.jpg` },
      ],
    },
    {
      question: "What's your ideal way to spend a weekend?",
      options: [
        { text: "🍵 Attending a Tea Party", value: "1", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/teapartybunny.jpg` },
        { text: "📚 Cozying up with a Good Book", value: "2", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/bookdeer.jpg` },
        { text: "🌲 Exploring Nature", value: "3", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/naturefox.jpg` },
        { text: "🍽 Dressing up for a Fancy Dinner or a Night Out", value: "4", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/partycat.jpg` },
      ],
    },
    {
      question: "What’s your dream clothing haul?",
      options: [
        { text: "👗 Cute/Feminine", value: "1", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/BunnyButton1.jpg` },
        { text: "🎨 Whimsical", value: "2", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/DeerButton1.jpg` },
        { text: "👜 Bohemian", value: "3", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/FoxButton1.jpg` },
        { text: "🔥 Sexy", value: "4", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/CatButton1.jpg` },
      ],
    },
    {
      question: "What best describes your natural lip shape?",
      options: [
        { text: "👄 Soft Pout", value: "1", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/bunnylips.jpg` },
        { text: "💋 Full Pout, Top Heavy", value: "2", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/deerlips.jpg` },
        { text: "👄 Thinner Lips", value: "3", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/foxlips.jpg` },
        { text: "💋 Super Pouty, Bottom Heavy", value: "4", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/catlips.jpg` },
      ],
    },
    {
      question: "Describe your dream aesthetic space:",
      options: [
        { text: "Cute and Girly", value: "1", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/bunny.jpg` },
        { text: "Cottagecore", value: "2", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/deer.jpg` },
        { text: "Bohemian", value: "3", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/fox.jpg` },
        { text: "Sexy", value: "4", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/cat.png` },
      ],
    },
    {
      question: "How would your friends describe your personality?",
      options: [
        {  value: "1", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/sweet.jpeg` },
        {  value: "2", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/elegant.jpeg` },
        {  value: "3", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/Adventurous.jpg` },
        {  value: "4", backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/confident.jpeg` },
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
    <div className="quiz-container">
      <Helmet>
        <title>Jackie Wyers Beauty</title>
        <meta name="description" content="Fox Pretty, Deer Pretty, Bunny Pretty, or Cat Pretty? Find out with our fun and interactive quiz!" />
        <meta name="keywords" content="beauty quiz, animal pretty, Jackie Wyers, makeup quiz, beauty styles, fox pretty, deer pretty, bunny pretty, cat pretty" />
        <meta property="og:title" content="Jackie Wyers Beauty Quiz" />
        <meta property="og:description" content="Discover which animal-inspired beauty style suits you best: Fox Pretty, Deer Pretty, Bunny Pretty, or Cat Pretty." />
        <meta property="og:image" content={`${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/og-image.jpg`} />
        <meta property="og:url" content="https://jackiewyers.beauty/quiz2" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jackie Wyers Beauty Quiz" />
        <meta name="twitter:description" content="Find out if you're Fox Pretty, Deer Pretty, Bunny Pretty, or Cat Pretty with our interactive quiz!" />
        <meta name="twitter:image" content={`${process.env.PUBLIC_URL}/Images/Quiz/Quiz2/twitter-image.jpg`} />
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

export default Quiz2;
