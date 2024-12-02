import React from "react";
import { Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import TextReveal from "../Components/TextReveal";
import Quiz2 from "./Quiz2";
import Quiz3 from "./Quiz3";
import Quiz4 from "./Quiz4";
import Quiz5 from "./Quiz5";
import EmailSubscribe2 from "../Components/EmailSubscribe2";
import AdSenseAd from "../Home/Adsense";
import DividerWithText from "../Home/DividerWithText";

const Quiz4Homepage = () => {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#ffffff", transform: "translateZ(0)", margin: "0 auto" }}>
      <Helmet>
        <title>Jackie Wyers' Quiz Homepage</title>
        <meta
          name="description"
          content="It started with the legendary Animal Pretty Calculator, with more quizzes being added every week!"
        />
        <meta
          name="keywords"
          content="halloween costume quiz, halloween style quiz, Jackie Wyers quizzes, costume planning quiz, halloween outfit ideas, festive halloween quiz, halloween character match, party costume quiz, spooky season quiz, Jackie Wyers halloween quiz, halloween fashion styles, fun halloween quiz, costume personality quiz, halloween aesthetic quiz, halloween inspiration quiz"
        />
      </Helmet>

      {/* Halloween Costume Quiz Section */}
      <TextReveal text="HALLOWEEN COSTUME QUIZ" style={{ backgroundColor: "#ffffff", width: "100%" ,  paddingTop: '20px' }} />
      <Quiz4 />
      <DividerWithText text="Ad" />
      <div className="ad-container">
        <AdSenseAd />
      </div>
      <DividerWithText text="Ad" />

      {/* Animal Pretty Quiz Section */}
      <TextReveal text="🐈‍⬛🦌 The Animal Pretty Quiz 🐇🦊" style={{ backgroundColor: "#ffffff", width: "100%" }} />
      <Quiz2 />
      <DividerWithText text="Ad" />
      <div className="ad-container">
        <AdSenseAd />
      </div>
      <DividerWithText text="Ad" />

      {/* Wedding Dress Quiz Section */}
      <TextReveal text="ULTIMATE WEDDING DRESS QUIZ" style={{ backgroundColor: "#ffffff", width: "100%" }} />
      <Quiz3 />
      <DividerWithText text="Ad" />
      <div className="ad-container">
        <AdSenseAd />
      </div>
      <DividerWithText text="Ad" />

      {/* Male vs Female Gaze Quiz Section */}
      <TextReveal text="MALE vs FEMALE GAZE QUIZ" style={{ backgroundColor: "#ffffff", width: "100%" }} />
      <Quiz5 />
      <DividerWithText text="Ad" />
      <div className="ad-container">
        <AdSenseAd />
      </div>
      <DividerWithText text="Ad" />

      {/* Subscribe Section */}
      <Box sx={{ width: "100%", textAlign: "center", padding: "1rem" }}>
        <EmailSubscribe2 />
      </Box>
      <DividerWithText text="Ad" />
      <div className="ad-container">
        <AdSenseAd />
      </div>
      <DividerWithText text="Ad" />
    </Box>
  );
};

export default Quiz4Homepage;