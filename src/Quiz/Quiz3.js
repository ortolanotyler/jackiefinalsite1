import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz1.css';
import { Helmet } from 'react-helmet';
import AdSenseAd from '../Advertising/Ads';

const Quiz3 = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [buttonHeight, setButtonHeight] = useState('auto');

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
        { text: "Romantic and whimsical 💕", value: 1, backgroundImage: `${process.env.PUBLIC_URL}/Images/Quiz/Quiz3/6button.jpg` },
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

  useEffect(() => {
    const updateButtonHeight = () => {
      const vh = window.innerHeight;
      const headerHeight = document.querySelector('.question-section').offsetHeight;
      const remainingHeight = vh - headerHeight - 40; // Adjusting for padding and margins
      const buttonHeight = Math.floor(remainingHeight / 3) - 10; // Adjusting for gap and 3 rows
      setButtonHeight(buttonHeight);
    };

    updateButtonHeight();
    window.addEventListener('resize', updateButtonHeight);
    return () => window.removeEventListener('resize', updateButtonHeight);
  }, [currentQuestionIndex]);

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
    if (total <= 10) {
      result = 'Fairytale Wedding - Bacarra';
    } else if (total <= 18) {
      result = 'Fairytale Wedding 2 - Elizabeth';
    } else if (total <= 26) {
      result = 'Simple & Chic - Percy';
    } else if (total <= 34) {
      result = 'Old Money - Ora';
    } else if (total <= 42) {
      result = 'Royal Wedding - Abril';
    } else if (total <= 48) {
      result = 'Vintage Glamour - Porsha';
    } else {
      result = 'Bridgerton Vibes - Zara';
    }

    // Redirect to the result page based on the calculated result
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
           
            <div className="question-text">{quizQuestions[currentQuestionIndex].question}</div>
          </div>
          <div className="answer-section">
            {quizQuestions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                className="answer-button"
                style={{
                  height: `${buttonHeight}px`,
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
      <AdSenseAd />
    </div>
  );
};

export default Quiz3;
