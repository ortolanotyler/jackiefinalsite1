import React from "react";
import { Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import TextReveal from "../Components/TextReveal";
import EmailSubscribe2 from "../Components/EmailSubscribe2";
import Quiz2 from "./Quiz2";
import Quiz3 from "./Quiz3";
import Quiz4 from "./Quiz4";
import Quiz5 from "./Quiz5";
import AdSenseAd from "../Home/Adsense";
import DividerWithText from "../Home/DividerWithText";
import SmallAdSenseAd from "../Home/AdsenseSmall";

const Quiz3Homepage = () => {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#ffffff", transform: "translateZ(0)", margin: "0 auto" }}>
      <Helmet>
        <title>Jackie Wyers' Quiz Homepage</title>
        <meta
          name="description"
          content="It started with the legendary Animal Pretty Quiz, with more quizzes being added every week!"
        />
        <meta
          name="keywords"
          content="wedding dress quiz, ultimate wedding style quiz, bridal style quiz, Jackie Wyers quizzes, wedding fashion quiz, perfect dress quiz, bridal look quiz, dream wedding dress quiz, personalized bridal style, Jackie Wyers wedding quiz, bridal aesthetic quiz, wedding inspiration quiz, wedding trends quiz, bridal gown personality quiz, find your wedding dress style"
        />
      </Helmet>

      {/* Quiz Content Sections */}
      <TextReveal text="ULTIMATE WEDDING DRESS QUIZ" style={{ backgroundColor: "#ffffff", width: "100%", paddingTop: '20px' }} />
      <Quiz3 />
   <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text = "Ad"/>

      <TextReveal text="MALE vs FEMALE GAZE QUIZ" style={{ backgroundColor: "#ffffff", width: "100%" }} />
      <Quiz5 />
   <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text = "Ad"/>

      <TextReveal text="HALLOWEEN COSTUME QUIZ" style={{ backgroundColor: "#ffffff", width: "100%" }} />
      <Quiz4 />
   <div className="ad-container">
  <SmallAdSenseAd />
</div>
<DividerWithText text = "Ad"/>

      <TextReveal text="🐈‍⬛🦌 The Animal Pretty Quiz 🐇🦊" style={{ backgroundColor: "#ffffff", width: "100%" }} />
      <Quiz2 />
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

export default Quiz3Homepage;