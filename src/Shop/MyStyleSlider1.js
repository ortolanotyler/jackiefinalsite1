import React, { useEffect, useState, useRef } from 'react';
import styles from './Slider.module.css'; // Updated to use the CSS module
import DividerWithText from '../Home/DividerWithText';
import AdSenseAd from '../Home/Adsense';

const image1 = "https://res.cloudinary.com/dzhlitors/image/upload/v1731276636/horsegirl1_VSCO_q9pico.jpg";
const image2 = `${process.env.PUBLIC_URL}/Images/Shop/MyStyle/vaticanslay.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/Shop/MyStyle/walkingwaiheke.jpg`;

const imageDetails = [
  {
    src: image1,
    text: "HORSE GIRL ENERGY",
    alt: "Horse Girl Image",
    href: "/horsegirlenergy"
  },
  {
    src: image2,
    text: "VATICAN SLAY",
    alt: "Image 2",
    href: "/vaticanslay"
  },
  {
    src: image3,
    text: "WALKING WAIHEKE",
    alt: "Image 3",
    href: "/walkingwaiheke"
  },
];

const MyStyleSlider1 = () => {
  const [numClicks, setNumClicks] = useState(0);
  const itemsRef = useRef([]);

  const getItemWidth = () => {
    if (itemsRef.current.length > 0 && itemsRef.current[0]) {
      const item = itemsRef.current[0];
      const style = window.getComputedStyle(item);

      return (
        parseFloat(item.offsetWidth) +
        parseFloat(style.marginLeft) +
        parseFloat(style.marginRight)
      );
    }
    return 0;
  };

  useEffect(() => {
    const handleResize = () => {
      const newLeft = numClicks * getItemWidth();

      itemsRef.current.forEach((item) => {
        item.style.left = -(newLeft) + "px";
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [numClicks]);

  useEffect(() => {
    getItemWidth();
  }, []);

  return (
    <>
      <div className={styles.itemContainer}>
      {imageDetails.map((imageDetail, index) => (
        <div className={styles.item} key={index} ref={(el) => (itemsRef.current[index] = el)}>
          <img src={imageDetail.src} alt={imageDetail.alt} className={styles.itemImg} />
          <a href={imageDetail.href} className={styles.itemLink}>{imageDetail.text}</a>
  
        </div>
      ))}
    </div>
            <DividerWithText text = "Ad"/>

            <div className="ad-container">
            <AdSenseAd/>
            </div>
            
            <DividerWithText text ="Ad"/>
    </>
  
  );
};

export default MyStyleSlider1;