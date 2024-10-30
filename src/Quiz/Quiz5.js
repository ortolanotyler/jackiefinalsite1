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
        { text: "Cute ponytail", value: 0, backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/v1730309727/dragonbraidthumbnail_ionws9.png' },
        { text: "Sleek bun", value: 1, backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/v1730309724/FullSizeRender_2_gurs7s.png' },
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
        { text: "Sentimental dainty pieces", value: 0, backgroundImage: ' https://res.cloudinary.com/dzhlitors/image/upload/f_auto,q_auto/v1730303110/19_u55icp.jpg' },
        { text: "Adding to my luxury collection", value: 1, backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto,q_auto/v1730303110/20_livqd5.jpg'},
         
      ],
      
    },
  
      {
        question: "Which magazine do you grab?",
        options: [
          { text: "Seventeen", value: 0, backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/v1730309174/1-6_yz9ryx_wlkk2x.png' },
          { text: "VOGUE", value: 1, backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/v1730309172/1-7_vjdpex_hea8s8.png' },
        ],
      },
      {
        question: "Pop culture wardrobe swap!",
        options: [
          { text: "Alaska's Girl Next Door Style", value: 0, backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/v1730309174/1-2_ijwmjg_j3q5bp.png' },
          { text: "Effy's Edgy Looks", value: 1, backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/v1730309174/26951769_1612386982175225_8203156445071986383_o_lixle0_vqkotg.png' },
        ],
      },
      {
        question: "Which Twilight Vamp are beauty goals to you?",
        options: [
          { text: "Bella Cullen", value: 0, backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/v1730309174/1-4_hd9vss_cancsj.png' },
          { text: "Alice Cullen", value: 1, backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/v1730309174/1-3_ayhgvc_qhmelz.png' },
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
      navigate('/quiz/female');
    } else {
      navigate('/quiz/male');
    }
  };

  return (
    <>
<Helmet>
  <title>Male vs. Female Gaze Quiz | Which Vibe Do You Exude?</title>
  <link rel="canonical" href="https://www.jackiewyers.beauty/quiz/male-female-gaze" />

  <meta 
    name="description" 
    content="Take the Male vs. Female Gaze Quiz by Jackie Wyers to discover which vibe you exude! Are you effortlessly chic, bold, or unique? Find out with this fun and insightful quiz." 
  />
  <meta 
    name="keywords" 
    content="Male vs Female Gaze Quiz, beauty personality quiz, makeup style quiz, male gaze, female gaze, chic makeup quiz, bold beauty quiz, Jackie Wyers quiz, pop culture quiz, personality style quiz, beauty inspiration, aesthetic personality test, girl-next-door style, edgy fashion, minimalist style, pop culture fashion quiz, beauty trends quiz, beauty quiz 2024, personality beauty quiz, subtle vs bold style, which gaze do you embody, effortless beauty quiz, fashion personality quiz" 
  />

  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="Male vs. Female Gaze Quiz | Which Vibe Do You Exude?" />
  <meta 
    property="og:description" 
    content="Discover your style vibe with the Male vs. Female Gaze Quiz! Take this fun quiz by Jackie Wyers to see if you embody the chic, bold, or unique aesthetic." 
  />
  <meta 
    property="og:image" 
    content="https://res.cloudinary.com/dzhlitors/image/upload/v1730309727/dragonbraidthumbnail_ionws9.png" 
  />
  <meta property="og:url" content="https://www.jackiewyers.beauty/quiz/male-female-gaze" />
  <meta property="og:type" content="article" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:title" content="Male vs. Female Gaze Quiz | Which Vibe Do You Exude?" />
  <meta 
    name="twitter:description" 
    content="Find out if you exude a chic, bold, or unique vibe with the Male vs. Female Gaze Quiz by Jackie Wyers. Discover your beauty and fashion style today!" 
  />
  <meta 
    name="twitter:image" 
    content="https://res.cloudinary.com/dzhlitors/image/upload/v1730309727/dragonbraidthumbnail_ionws9.png" 
  />
  <meta name="twitter:card" content="summary_large_image" />

  {/* Google Analytics */}
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-RT6GR7JXYG"></script>
  <script>
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-RT6GR7JXYG', { page_path: window.location.pathname });
    `}
  </script>

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Male vs. Female Gaze Quiz | Which Vibe Do You Exude?",
        "description": "Take the Male vs. Female Gaze Quiz by Jackie Wyers to discover which vibe you exude! Are you effortlessly chic, bold, or unique? Find out with this fun and insightful quiz.",
        "image": "https://res.cloudinary.com/dzhlitors/image/upload/v1730309727/dragonbraidthumbnail_ionws9.png",
        "author": {
          "@type": "Person",
          "name": "Jackie Wyers"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Jackie Wyers Beauty",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.jackiewyers.beauty/logo.png"
          }
        },
        "datePublished": "2024-10-30",
        "dateModified": "2024-10-30",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.jackiewyers.beauty/quiz/male-female-gaze"
        }
      }
    `}
  </script>
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