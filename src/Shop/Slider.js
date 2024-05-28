import React, { useState, useEffect, useRef } from 'react';
import './Slider.css'; // Make sure the path to your CSS file is correct

const image1 = `${process.env.PUBLIC_URL}/Images/Shop/MyStyle/mystyle1.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/Shop/MyStyle/mystyle2.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/Shop/MyStyle/mystyle3.jpg`;

const imageDetails = [
  {
    src: image1,
    text: "CENTRAL PARK SUMMER",
    alt: "Image 1 description",
    href: "/centralparksummer"
  },
  {
    src: image2,
    text: "RETRO FLORAL",
    alt: "Image 2 description",
    href: "/retrofloral"
  },
  {
    src: image3,
    text: "PARIS PRINCESS",
    alt: "Image 3 description",
    href: "/parisprincess"
  },
];

const ItemSlider = () => {
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
    <div className="item-container">
      {imageDetails.map((imageDetail, index) => (
        <div className="item" key={index} ref={(el) => (itemsRef.current[index] = el)}>
          <img src={imageDetail.src} alt={imageDetail.alt} className="item__img" />
          <a href={imageDetail.href} className="item__link">{imageDetail.text}</a>
        </div>
      ))}
    </div>
  );
};

export default ItemSlider;




