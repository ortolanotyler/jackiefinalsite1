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
import SmallAdSenseAd from "../Home/AdsenseSmall";

const Quiz5Homepage = () => {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#ffffff", transform: "translateZ(0)", margin: "0 auto" }}>
      <Helmet>
        <title>Male vs Female Gaze Quiz Homepage</title>
        <meta
          name="description"
          content="It started with the legendary Animal Pretty Calculator, with more quizzes being added every week!"
        />
        <meta
          name="keywords"
          content="male vs female gaze quiz, beauty perspective quiz, Jackie Wyers quizzes, gendered beauty perspectives, female gaze quiz, male gaze quiz, cultural beauty quiz, beauty analysis quiz, perspective beauty quiz, aesthetic perspective test, Jackie Wyers male vs female quiz, beauty style analysis, gender aesthetics quiz, beauty and gender quiz"
        />
      </Helmet>

      {/* Male vs Female Gaze Quiz Section */}
      <TextReveal text="MALE vs FEMALE GAZE QUIZ" style={{ backgroundColor: "#ffffff", width: "100%",  paddingTop: '20px'  }} />
      <Quiz5 />
    <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text = "Ad"/>

      {/* Halloween Costume Quiz Section */}
      <TextReveal text="HALLOWEEN COSTUME QUIZ" style={{ backgroundColor: "#ffffff", width: "100%" }} />
      <Quiz4 />
    <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text = "Ad"/>

      {/* Animal Pretty Quiz Section */}
      <TextReveal text="🐈‍⬛🦌 The Animal Pretty Quiz 🐇🦊" style={{ backgroundColor: "#ffffff", width: "100%" }} />
      <Quiz2 />
    <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text = "Ad"/>

      {/* Wedding Dress Quiz Section */}
      <TextReveal text="ULTIMATE WEDDING DRESS QUIZ" style={{ backgroundColor: "#ffffff", width: "100%" }} />
      <Quiz3 />
    <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text = "Ad"/>

      {/* Subscribe Section */}
      <Box sx={{ width: "100%", textAlign: "center", padding: "1rem" }}>
        <EmailSubscribe2 />
      </Box>
    <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text = "Ad"/>
    </Box>
  );
};

export default Quiz5Homepage;