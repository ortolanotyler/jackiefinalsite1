import React from "react";
import { Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import TextReveal from "../Components/TextReveal";
import EmailSubscribe2 from "../Components/EmailSubscribe2";
import AdSenseAd from "../Home/Adsense";
import Quiz2 from "./Quiz2";
import DividerWithText from "../Home/DividerWithText";

const Quiz2Homepage = () => {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#ffffff", transform: "translateZ(0)", margin: '0 auto' }}>
      <Helmet>
        <title>Jackie Wyers' Animal Pretty Quiz and More!</title>
        <meta
          name="description"
          content="It started with the legendary Animal Pretty Calculator, with more quizzes being added every week!"
        />
        <meta name="keywords" content="beauty quiz, animal pretty, Jackie Wyers, makeup quiz" />
      </Helmet>
   

   
        {/* Quiz Content */}
        <TextReveal text="Animal Pretty Quiz" style={{ backgroundColor: "#ffffff", width: "100%"}} />
     <div style = {{
      margin: '0 auto',
     }}>
        < Quiz2 />

        </div>
    
      <DividerWithText text = "Ad"/>


      <div className="ad-container">
  <AdSenseAd />
</div>
<DividerWithText text = "Ad"/>


      {/* Email Subscription */}
      <Box sx={{ width: "100%", textAlign: "center", padding: "1rem" }}>
        <EmailSubscribe2 />
      </Box>
      <DividerWithText text = "Ad"/>


      <div className="ad-container">
  <AdSenseAd />
</div>
<DividerWithText text = "Ad"/>


    </Box>
  );
};

export default Quiz2Homepage;