import React, { useState, useEffect, useRef } from 'react';
import styles from './Slider.module.css'; // Updated to use the CSS module

const image1 = `${process.env.PUBLIC_URL}/Images/Shop/MyStyle/parisianchic.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/Shop/MyStyle/polkadot.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/Shop/MyStyle/vaticanslay.jpg`;

const imageDetails = [
  {
    src: image1,
    text: "PARISIAN CHIC",
    alt: "Image 1 description",
    href: "/parisianchic"
  },
  {
    src: image2,
    text: "A POLKADOT MOMENT",
    alt: "Image 2 description",
    href: "/polkadot"
  },
  {
    src: image3,
    text: "VATICAN SLAY",
    alt: "Image 3 description",
    href: "/vaticanslay"
  },
];

const HomeShopMy = () => {
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

export default HomeShopMy;
