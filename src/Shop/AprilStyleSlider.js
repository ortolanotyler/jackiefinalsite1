import React, { useState, useEffect, useRef } from 'react';
import styles from './Slider.module.css'; // Updated to use the CSS module

const image1 = `${process.env.PUBLIC_URL}/Images/Shop/MyStyle/mystyle10.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/Shop/MyStyle/mystyle11.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/Shop/MyStyle/mystyle12.jpg`;

const imageDetails = [
  {
    src: image1,
    text: "BARBIE GOES SKIING",
    alt: "Image 1",
    href: "/barbieskiing"
  },
  {
    src: image2,
    text: "BLACK & LEATHER",
    alt: "Image 2",
    href: "/blackandleather"
  },
  {
    src: image3,
    text: "CABIN FEVER",
    alt: "Image 3",
    href: "/cabinfever"
  },
];

const AprilStyleSlider = () => {
  const [numClicks, setNumClicks] = useState(0);
  const itemsRef = useRef([]);


  
    useEffect(() => {
      logPageView();
    }, []);
  
    const logPageView = () => {
      if (window.gtag) {
        window.gtag('config', 'G-RT6GR7JXYG', {
          page_path: '/camerasettings',
          page_title: 'Camera Settings - A Guide to Scroll-Stopping iPhone Photos',
        });
      }
    };

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
<div className={styles.itemContainer}>
      {imageDetails.map((imageDetail, index) => (
        <div className={styles.item} key={index} ref={(el) => (itemsRef.current[index] = el)}>
          <img src={imageDetail.src} alt={imageDetail.alt} className={styles.itemImg} />
          <a href={imageDetail.href} className={styles.itemLink}>{imageDetail.text}</a>
        </div>
      ))}
    </div>
   
    
  );
};

export default AprilStyleSlider;
