import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz1.css'; // Adjust your CSS file path if needed
import { Helmet } from 'react-helmet-async';
import HorizontalLine from '../Components/HorizontalLine';


const Quiz4 = () => {
    const navigate = useNavigate();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [totalPoints, setTotalPoints] = useState(0);
    const [showResults, setShowResults] = useState(false);
  


    const quizQuestions = [
        {
          question: "How would you describe your Halloween Plans?",
          options: [
            { text: "Photo op moment 📸", points: 7, backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/v1730305340/1_ajy8ge.jpg' },
            { text: "House party 💃", points: 5, backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/v1730305627/2_sy5vce.jpg' },
            { text: "Cozy & low key🧣", points: 1, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1729359720/4_btdaxu.jpg' },
            { text: "Classy costume party 🎩", points: 4, backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/v1730305247/3_wen3i8.jpg' }

        ],
        },
        {
          question: "Which type of shoes are your go-to?",
          options: [
            { text: "Cute loafers 🥿", points: 5, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1729359720/6_jetpwf.jpg' },
            { text: "Chic ballet flats 🖤", points: 4, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1729359721/7_b2fno3.jpg' },
            { text: "Comfy sneakers 🥾", points: 1, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1729359721/8_pizq9k.jpg' },
            { text: "Designer heels 👠", points: 7, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1729359720/5_fssr5l.jpg' }

        ],
        },
        {
          question: "Pick your favorite Halloween candy!",
          options: [
            { text: "French Mints 🌹", points: 7, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1729359721/9_g6bozg.jpg' },
            { text: "Coffee Flavored ☕", points: 4, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1729359721/11_rslg6b.jpg' },

            { text: "Gummy Worms 🌈", points: 2, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1729359721/10_pypbfo.jpg' },
            { text: "Smarties Squashies 🍇", points: 1, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1729359721/12_zzkzhu.jpg' }
          ],
        },
        {
          question: "Pick a signature makeup style.",
          options: [
            { 
              text: "Pink Lips 💖", 
              points: 6, 
              backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto/v1730305250/13_qzms6g.jpg' 
            },
            { 
              text: "Y2K Glitter ✨", 
              points: 5, 
              backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto/v1730305246/14_bkvcem.jpg' 
            },
            { 
              text: "Winged Liner & Lashes 👁️", 
              points: 4, 
              backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto/v1730305254/15_w8w12g.jpg' 
            },
            { 
              text: "Natural glow 🌞", 
              points: 1, 
              backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto/v1730305251/16_kog24r.jpg' 
            }
          ],
        },
        {
          question: "What’s your favorite fashion aesthetic?",
          options: [
            { 
              text: "MOD 60s💕", 
              points: 6, 
              backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto/v1730305244/17_foa6uu.jpg' 
            },
            { 
              text: "Y2K vibe 📟", 
              points: 5, 
              backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto/v1730305246/18_z5kqnj.jpg' 
            },
            { 
              text: "Period drama dresses🎭", 
              points: 2, 
              backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto/v1730305250/19_r4u4sv.jpg' 
            },
            { 
              text: "Cozy chic 🧸", 
              points: 1, 
              backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto/v1730305252/21_sq5vfm.jpg' 
            }
          ],
        } ,
        {
            question: "What kind of Halloween costume would you pick?",
            options: [
              { 
                text: "Hollywood classic 🎬", 
                points: 4, 
                backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto/v1730305247/23_zrmski.jpg' 
              },
              { 
                text: "High-fashion glam🌸", 
                points: 7, 
                backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto/v1730305252/21_sq5vfm.jpg' 
              },
              { 
                text: "Princess vibes 👑", 
                points: 2, 
                backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto/v1730305254/24_nr68lx.jpg' 
              },
              { 
                text: "Pop Culture Icon 🌟", 
                points: 5, 
                backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto/v1730305248/22_fogpfi.jpg' 
              }
            ],
          },
          {
            question: "How would your friends describe you?",
            options: [
              { 
                text: "Fun & outgoing 😃", 
                points: 5, 
                backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto/v1730305245/26_qd2ji0.jpg' 
              },
              { 
                text: "Down-to-earth & creative 🌿", 
                points: 1, 
                backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto/v1730305257/28_arf1wb.jpg' 
              },
              { 
                text: "Bold & confident ♥️", 
                points: 7, 
                backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto/v1730305255/25_op2ohp.jpg' 
              },
              { 
                text: "Sophisticated & charming 🍸", 
                points: 4, 
                backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto/v1730305257/27_p2u3sm.jpg' 
              }
            ],
          },
          {
            question: "Which vacation spot sounds most appealing?",
            options: [
              { 
                text: "Historic Europe 🏰", 
                points: 4, 
                backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto/v1730305256/31_m2ozre.jpg' 
              },
              { 
                text: "Trendy LA 🏄‍♀️", 
                points: 6, 
                backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto/v1730305253/30_ijp1pz.jpg' 
              },
              { 
                text: "Paris Fashion Week 🗼", 
                points: 7, 
                backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto/v1730305255/29_fve0jf.jpg' 
              },
              { 
                text: "Ocean retreat 🌊", 
                points: 2, 
                backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto/v1730305257/32_thzlte.jpg' 
              }
            ],
          },
          {
            question: "Which hairstyle for a Halloween party?",
            options: [
              { 
                text: "Big hair 🤎", 
                points: 7, 
                backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto/v1730305243/33_krkgwp.jpg' 
              },
              { 
                text: "High pigtails 🎀", 
                points: 5, 
                backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto/v1730305243/34_nbaayw.jpg' 
              },
              { 
                text: "Elegant updo 🎻", 
                points: 4, 
                backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto/v1730305243/35_hezjxm.jpg' 
              },
              { 
                text: "Beachy waves 🌴", 
                points: 2, 
                backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto/v1730305243/36_ubolrq.jpg' 
              }
            ],
          },
          {
            question: "How long do you have to get ready?",
            options: [
              { 
                text: "Hours & Hours 😏", 
                points: 7, 
                backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto/v1730306256/37_a8j3es.jpg' 
              },
              { 
                text: "An hour or two ⌛", 
                points: 4, 
                backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto/v1730306255/39_pjyj2c.jpg' 
              },
              { 
                text: "Quick 45 mins ⏱️", 
                points: 5, 
                backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto/v1730306255/38_f7c8c8.jpg' 
              },
              { 
                text: "Rushed moments ⏳", 
                points: 2, 
                backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/f_auto/v1730306257/40_ngjanl.jpg' 
              }
            ]
          },
          {
            question: "Would you be sad wearing a similar costume to someone else?",
            options: [
              { text: "I’d still outshine 🌟", points: 6, backgroundImage: 'https://res.cloudinary.com/dzhlitors/image/upload/v1730305251/41_ssm0km.jpg' },
              { text: "Totally fine 😊", points: 5, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1729359724/42_b2wiox.jpg' },
              { text: "New friend time 🤝", points: 3, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1729359724/43_mhpkun.jpg' },
              { text: "Not bothered 🤷‍♀️", points: 1, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1729359724/44_jminvm.jpg' }
            ],
          },
          {
            question: "What is your ultimate Halloween night activity?",
            options: [
              { text: "Red carpet event 🎥", points: 7, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1729359725/45_eb2wzv.jpg' },
              { text: "Karaoke night 🎤", points: 5, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1729359725/46_hpxpne.jpg' },
              { text: "Cocktail party 🍹", points: 4, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1729359725/47_wczuof.jpg' },
              { text: "Movie marathon 🍿", points: 1, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1729359725/48_zdi2o1.jpg' }
            ],
          },
          {
            question: "Which music genre best represents your vibe?",
            options: [
              { text: "Confidence anthems 💪", points: 7, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1729359726/51_lvujzc.jpg' },
              { text: "Nostalgic pop 📀", points: 5, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1729359726/50_sejjjs.jpg' },
              { text: "Swifty tunes 🎶", points: 1, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1729359725/49_yrliu3.jpg' },
              { text: "Relaxing piano 🎹", points: 4, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/f_auto/v1729359725/52_qzuvcp.jpg' }
            ],
          }
        
        
       
      


  ];

  const handleAnswerClick = (points) => {
    // Use callback to ensure accurate totalPoints update
    setTotalPoints((prevPoints) => prevPoints + points);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  // Use `useEffect` to ensure `totalPoints` is fully updated before calculating results
  useEffect(() => {
    if (showResults) {
      calculateResults();
    }
  }, [showResults]);

  const calculateResults = () => {
    // Now calculate the results based on the correct totalPoints
    if (totalPoints >= 93) {
      navigate('/quiz/halloween/ysl');
    } else if (totalPoints >= 80) {
      navigate('/quiz/halloween/barbie');
    } else if (totalPoints >= 61) {
      navigate('/quiz/halloween/britney');
    } else if (totalPoints >= 55) {
      navigate('/quiz/halloween/tiffany');
    } else if (totalPoints >= 40) {
      navigate('/quiz/halloween/bridgerton');
    } else if (totalPoints >= 30) {
      navigate('/quiz/halloween/ariel');
    } else {
      navigate('/quiz/halloween/taylor');
    }
  };



  return (
    <>
     <Helmet>
  <title>What's Your Halloween Style? | Find Out Now! 🎃</title>
  <link rel="canonical" href="https://www.jackiewyers.beauty/quiz/halloween" />

  <meta 
    name="description" 
    content="Take our fun quiz to discover your Halloween style with outfits inspired by pop culture icons like Britney Spears, Barbie, Bridgerton, and more! Whether you're channeling your inner fashion icon or keeping it cozy, find the perfect costume inspiration with Jackie Wyers." 
  />
 <meta 
  name="keywords" 
  content="Halloween quiz, Halloween style quiz, pop culture Halloween costumes, iconic Halloween outfits, girly Halloween costumes, Britney Spears costume, Barbie movie costume ideas, Bridgerton Halloween look, Disney princess costumes, Taylor Swift folklore costume, YSL Halloween fashion, celebrity Halloween makeup, spooky chic Halloween ideas, Princess Halloween vibes, costume party inspiration, best Halloween makeup tutorials, DIY Halloween outfits, 2024 Halloween trends, unique Halloween costumes, fairy tale Halloween, pop culture costume quiz, Jackie Wyers quiz, Halloween fashion inspo, spooky season must-haves, classic Halloween looks, period drama Halloween outfits, costume ideas for women, makeup for Halloween, Halloween hair tutorials, iconic celebrity Halloween costumes, fall fashion, chic Halloween, mermaid costume ideas, Ariel Halloween, Halloween costume guide, red carpet Halloween, Taylor Swift Halloween, nostalgia Halloween costumes, best girly Halloween costumes 2024" 
/>

  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="What's Your Halloween Style? | Find Out Now! 🎃" />
  <meta 
    property="og:description" 
    content="Discover your Halloween style with outfits inspired by pop culture icons like Britney Spears, Barbie, Bridgerton, and more. Take our fun quiz for personalized costume inspo by Jackie Wyers." 
  />
  <meta 
    property="og:image" 
    content="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729370577/1_3_a9stag.jpg" 
  />
  <meta property="og:url" content="https://www.jackiewyers.beauty/quiz/halloween" />
  <meta property="og:type" content="article" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:title" content="What's Your Halloween Style? | Find Out Now! 🎃" />
  <meta 
    name="twitter:description" 
    content="Find out your perfect Halloween style with Jackie Wyers' quiz! Whether you're going for pop culture glam, a classy costume party, or keeping it cozy, we've got the inspo for you." 
  />
  <meta 
    name="twitter:image" 
    content="https://res.cloudinary.com/dvbubqhpp/image/upload/v1729370577/1_3_a9stag.jpg" 
  />
  <meta name="twitter:card" content="summary_large_image" />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "What's Your Halloween Style? | Find Out Now! 🎃",
        "description": "Take our fun quiz to discover your Halloween style with outfits inspired by pop culture icons like Britney Spears, Barbie, Bridgerton, and more. Whether you're channeling your inner fashion icon or keeping it cozy, find the perfect costume inspiration with Jackie Wyers.",
        "image": "https://res.cloudinary.com/dvbubqhpp/image/upload/v1729370577/1_3_a9stag.jpg",
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
        "datePublished": "2024-10-20",
        "dateModified": "2024-10-20",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.jackiewyers.beauty/quiz/halloween"
        }
      }
    `}
  </script>

  {/* Google Analytics Script */}
  <script>
    {`
      gtag('config', 'G-RT6GR7JXYG', {
        page_path: window.location.pathname
      });
    `}
  </script>
</Helmet>

      {!showResults ? (
        <div className="quiz-container">
           
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
                onClick={() => handleAnswerClick(option.points)}
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

export default Quiz4;