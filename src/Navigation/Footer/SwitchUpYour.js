import React, { useState, useEffect, useMemo } from 'react';
import styles from './SwitchUpYour.module.css'; // Import the CSS module

const SwitchUpYour = () => {
  const sliderContent = useMemo(() => [
    "Confidence",
    "Expert Advice",
    "Iconic Looks",
    "The Hottest Trends",
    "Jackie Wyers"
  ], []); // Only run once

  const [sliderCounter, setSliderCounter] = useState(0);
  const [currentContent, setCurrentContent] = useState(sliderContent[0]);

  useEffect(() => {
    const slide = () => {
      const sliderValue = document.querySelector("#sliderValue");
      sliderValue.classList.remove(styles['holder-animation']); // Ensure this class name is correct
      void sliderValue.offsetWidth; // Trigger reflow
      sliderValue.classList.add(styles['holder-animation']);

      setTimeout(() => {
        setSliderCounter((prevCounter) => (prevCounter + 1) % sliderContent.length);
        setCurrentContent(sliderContent[sliderCounter]);
      }, 500); // Adjust timing as needed
    };

    const intervalId = setInterval(slide, 3000); // Changed to 3000 for a 3-second interval

    return () => clearInterval(intervalId);
  }, [sliderCounter, sliderContent]);

  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <div className={styles.fixedSpan}>Switch Up Your Style with</div>
        <div className={styles.sliderValue} id="sliderValue">
          {currentContent}
        </div>
      </div>
    </div>
  );
};

export default SwitchUpYour;
