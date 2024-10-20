import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz1.css'; // Adjust your CSS file path if needed
import { Helmet } from 'react-helmet-async';


const image1 = `${process.env.PUBLIC_URL}/Images/Articles/Sorrento1/1.JPG`;
const image2 = `${process.env.PUBLIC_URL}/Images/Articles/Sorrento1/2.JPG`;

const Quiz4 = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [showResults, setShowResults] = useState(false);


    const quizQuestions = [
        {
          question: "How would you describe your Halloween Plans?",
          options: [
            { text: "Photo op moment 📸", points: 7, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359720/1_jvanqz.jpg' },
            { text: "House party 💃", points: 5, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359720/2_dnjgvt.jpg' },
            { text: "Classy costume party 🎩", points: 4, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359720/3_lbvaj8.jpg' },
            { text: "Cozy & low key🧣", points: 1, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359720/4_btdaxu.jpg' }
          ],
        },
        {
          question: "Which type of shoes are your go-to?",
          options: [
            { text: "Designer heels 👠", points: 7, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359720/5_fssr5l.jpg' },
            { text: "Cute loafers 🥿", points: 5, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359720/6_jetpwf.jpg' },
            { text: "Chic ballet flats 🖤", points: 4, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359721/7_b2fno3.jpg' },
            { text: "Comfy sneakers 🥾", points: 1, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359721/8_pizq9k.jpg' }
          ],
        },
        {
          question: "Pick your favorite Halloween candy!",
          options: [
            { text: "French Mints 🌹", points: 7, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359721/9_g6bozg.jpg' },
            { text: "Gummy Worms 🌈", points: 2, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359721/10_pypbfo.jpg' },
            { text: "Coffee Flavored ☕", points: 4, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359721/11_rslg6b.jpg' },
            { text: "Smarties Squashies 🍇", points: 1, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359721/12_zzkzhu.jpg' }
          ],
        },
        {
          question: "Pick a signature makeup style.",
          options: [
            { text: "Pink Lips 💖", points: 6, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359721/13_a9lwjs.jpg' },
            { text: "Y2K Glitter ✨", points: 5, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359721/14_javryl.jpg' },
            { text: "Winged Liner & Lashes 👁️", points: 4, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359721/15_lutbjw.jpg' },
            { text: "Natural glow 🌞", points: 1, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359722/16_jq2ptv.jpg' }
          ],
        },
        {
          question: "What’s your favorite fashion aesthetic?",
          options: [
            { text: "MOD 60s💕", points: 6, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359721/17_j44tq6.jpg' },
            { text: "Y2K vibe 📟", points: 5, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359721/18_h07p0i.jpg' },
            { text: "Period drama dresses🎭", points: 2, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359722/19_rrkcdd.jpg' },
            { text: "Cozy chic 🧸", points: 1, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359722/20_bgx7iz.jpg' }
          ],
        } ,
        {
            question: "What kind of Halloween costume would you pick?",
            options: [
              { text: "High-fashion glam🌸", points: 7, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359722/21_zw7cz6.jpg' },
              { text: "Pop Culture Icon 🌟", points: 5, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359722/22_b83vjz.jpg' },
              { text: "Hollywood classic 🎬", points: 4, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359722/23_sbvuvu.jpg' },
              { text: "Princess vibes 👑", points: 2, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359722/24_rrwfu6.jpg' }
            ],
          },
          {
            question: "How would your friends describe you?",
            options: [
              { text: "Bold & confident ♥️", points: 7, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359722/25_qviqqz.jpg' },
              { text: "Fun & outgoing 😃", points: 5, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359722/26_qdtcl2.jpg' },
              { text: "Sophisticated & charming 🍸", points: 4, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359723/27_bmcgtz.jpg' },
              { text: "Down-to-earth & creative 🌿", points: 1, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359723/28_oatnim.jpg' }
            ],
          },
          {
            question: "Which vacation spot sounds most appealing?",
            options: [
              { text: "Paris Fashion Week 🗼", points: 7, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359723/29_dexu1v.jpg' },
              { text: "Trendy LA 🏄‍♀️", points: 6, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359723/30_hcabdd.jpg' },
              { text: "Historic Europe 🏰", points: 4, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359723/31_gri1kh.jpg' },
              { text: "Ocean retreat 🌊", points: 2, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359723/32_aaidow.jpg' }
            ],
          },
          {
            question: "Which hairstyle for a Halloween party?",
            options: [
              { text: "Big hair 🤎", points: 7, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359724/33_efkqwd.jpg' },
              { text: "High pigtails 🎀", points: 5, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359723/34_efrr4b.jpg' },
              { text: "Elegant updo 🎻", points: 4, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359723/35_sjxwco.jpg' },
              { text: "Beachy waves 🌴", points: 2, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359724/36_hqczbb.jpg' }
            ],
          },
          {
            question: "How long do you have to get ready?",
            options: [
              { text: "Hours & Hours 😏", points: 7, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359724/37_brl5ci.jpg' },
              { text: "Quick 45 mins ⏱️", points: 5, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359724/38_x99rwu.jpg' },
              { text: "An hour or two ⌛", points: 4, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359724/39_xrpjel.jpg' },
              { text: "Rushed moments ⏳", points: 2, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359724/40_j7n6me.jpg' }
            ],
          },
          {
            question: "Would you be sad wearing a similar costume to someone else?",
            options: [
              { text: "I’d still outshine 🌟", points: 6, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359724/41_iqngvl.jpg' },
              { text: "Totally fine 😊", points: 5, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359724/42_b2wiox.jpg' },
              { text: "New friend time 🤝", points: 3, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359724/43_mhpkun.jpg' },
              { text: "Not bothered 🤷‍♀️", points: 1, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359724/44_jminvm.jpg' }
            ],
          },
          {
            question: "What is your ultimate Halloween night activity?",
            options: [
              { text: "Red carpet event 🎥", points: 7, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359725/45_eb2wzv.jpg' },
              { text: "Karaoke night 🎤", points: 5, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359725/46_hpxpne.jpg' },
              { text: "Cocktail party 🍹", points: 4, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359725/47_wczuof.jpg' },
              { text: "Movie marathon 🍿", points: 1, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359725/48_zdi2o1.jpg' }
            ],
          },
          {
            question: "Which music genre best represents your vibe?",
            options: [
              { text: "Swifty tunes 🎶", points: 1, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359725/49_yrliu3.jpg' },
              { text: "Nostalgic pop 📀", points: 5, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359726/50_sejjjs.jpg' },
              { text: "Confidence anthems 💪", points: 7, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359726/51_lvujzc.jpg' },
              { text: "Relaxing piano 🎹", points: 4, backgroundImage: 'https://res.cloudinary.com/dvbubqhpp/image/upload/v1729359725/52_qzuvcp.jpg' }
            ],
          },
        
        
       
      


  ];

  const handleAnswerClick = (points) => {
    setTotalPoints(totalPoints + points);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
      calculateResults();
    }
  };

  const calculateResults = () => {
    const averagePoints = totalPoints / quizQuestions.length;
  
    if (averagePoints >= 6.5) {
      navigate('/quiz/halloween/ysl');
    } else if (averagePoints >= 5.5) {
      navigate('/quiz/halloween/barbie');
    } else if (averagePoints >= 4.5) {
      navigate('/quiz/halloween/britney');
    } else if (averagePoints >= 3.5) {
      navigate('/quiz/halloween/tiffany');
    } else if (averagePoints >= 2.5) {
      navigate('/quiz/halloween/bridgerton');
    } else if (averagePoints >= 1.5) {
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
            <div className="question-count">
              <span> {currentQuestionIndex + 1}</span>/{quizQuestions.length}
            </div>
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