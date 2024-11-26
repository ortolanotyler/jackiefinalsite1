import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./AnimalPrettyQuiz.css";

const Quiz2 = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState({ "1": 0, "2": 0, "3": 0, "4": 0 });
  const [showResults, setShowResults] = useState(false);
  const [questionHeight, setQuestionHeight] = useState(null); // Track height of the question container

  const questionRef = useRef();

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

  useEffect(() => {
    // Calculate and set the maximum height for the question container on initial render
    const maxQuestionHeight = Math.max(
      ...quizQuestions.map((question) => {
        const tempDiv = document.createElement("div");
        tempDiv.style.position = "absolute";
        tempDiv.style.visibility = "hidden";
        tempDiv.style.fontSize = "24px";
        tempDiv.style.fontFamily = "'Playfair Display', serif";
        tempDiv.style.fontWeight = "500";
        tempDiv.style.width = "100%";
        tempDiv.innerHTML = question.question;
        document.body.appendChild(tempDiv);
        const height = tempDiv.offsetHeight;
        document.body.removeChild(tempDiv);
        return height;
      })
    );
    setQuestionHeight(maxQuestionHeight);
  }, [quizQuestions]);

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
    const maxScoreCategory = Object.keys(finalScores).reduce((a, b) =>
      finalScores[a] > finalScores[b] ? a : b
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
    <div className="quiz2-container">
      <Helmet>
        <title>Animal Pretty Quiz</title>
        <meta name="description" content="Discover your animal-inspired beauty style with this fun quiz!" />
      </Helmet>

      {!showResults ? (
        <>
          {/* Question Section */}
          <div
            className="quiz2-question"
            style={{
              height: questionHeight ? `${questionHeight}px` : "auto", // Apply fixed height if available
            }}
            ref={questionRef}
          >
            <div className="quiz2-question-text">
              {quizQuestions[currentQuestionIndex].question}
            </div>
          </div>

          {/* Answer Section */}
          <div className="quiz2-answer-section">
            {quizQuestions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                className="quiz2-answer-button"
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
        // Results Section
        <div className="quiz2-results">
          <h2>Quiz Completed!</h2>
          <button onClick={() => navigate("/")}>Go Home</button>
        </div>
      )}
    </div>
  );
};

export default Quiz2;