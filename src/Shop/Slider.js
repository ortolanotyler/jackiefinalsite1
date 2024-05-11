import React, { useState, useEffect, useRef } from 'react';
import './Slider.css'; // Make sure the path to your CSS file is correct

const image1 = `${process.env.PUBLIC_URL}/Images/central1.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/mystyle2.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/mystyle3.jpg`;



const imageDetails = [
  {
    src: image1,
    alt: "Image 1 description",
    text: "CENTRAL PARK SUMMER"
  },
  {
    src: image2,
    alt: "Image 2 description",
    text: "RETRO FLORAL"
  },
  {
    src: image3,
    alt: "Image 3 description",
    text: "PARIS PRINCESS"
  },
  // Add more images and texts as needed
];


const images = [image1, image2, image3 ];

const ItemSlider = () => {
  const [numClicks, setNumClicks] = useState(0);
  const itemsRef = useRef([]);

  const maxClicks = images.length - 3;

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

  const handleLeftClick = () => {
    if (numClicks !== 0) {
      setNumClicks(numClicks - 1);
    }
  };

  const handleRightClick = () => {
    if (numClicks !== maxClicks) {
      setNumClicks(numClicks + 1);
    }
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
    // Call getItemWidth when the component mounts to ensure itemsRef is set up.
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


export default ItemSlider;
