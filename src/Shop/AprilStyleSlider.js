import React, { useState, useEffect, useRef } from 'react';
import './Slider.css';

const image1 = `${process.env.PUBLIC_URL}/Images/Shop/MyStyle/mystyle10.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/Shop/MyStyle/mystyle11.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/Shop/MyStyle/mystyle12.jpg`;


const imageDetails = [
  {
    src: image1,
    text: "BARBIE GOES SKIING",
    alt: "Image 1"
  },
  {
    src: image2,
    text: "BLACK & LEATHER",
    alt: "Image 2"
  },
  {
    src: image3,
    text: "CABIN FEVER",
    alt: "Image 3"
  },
];

const AprilStyleSlider = () => {
  const [numClicks, setNumClicks] = useState(0);
  const itemsRef = useRef([]);

  const maxClicks = imageDetails.length - 3;

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
    <div className="item-container">
      {imageDetails.map((imageDetail, index) => (
        <div className="item" key={index}>
          <img src={imageDetail.src} alt={imageDetail.alt} className="item__img" />
          <p className="item__link">{imageDetail.text}</p>
        </div>
      ))}
    </div>
  );
};

export default AprilStyleSlider;
