import React from 'react';
import './Slider.css'; // Make sure the path to your CSS file is correct

const image1 = `${process.env.PUBLIC_URL}/Images/Shop/MyStyle/mystyle1.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/Shop/MyStyle/mystyle8.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/Shop/MyStyle/mystyle3.jpg`;

const imageDetails = [
  {
    src: image1,
    alt: "Image 1 description",
    text: "CENTRAL PARK SUMMER",
    href: "/cpsummer"
  },
  {
    src: image2,
    text: "SLEEK SPRING",
    alt: "Image 2",
    href: "/sleekspring"
  },
  {
    src: image3,
    alt: "Image 3 description",
    text: "PARIS PRINCESS",
    href: "/parisprincess"
  },
  // Add more images and texts as needed
];


const ShopMySlider = () => {







   



  return (
    <div className="item-container">
      {imageDetails.map((imageDetail, index) => (
        <div className="item" key={index}>
          <img src={imageDetail.src} alt={imageDetail.alt} className="item__img" />
          <a href={imageDetail.href} className="item__link">{imageDetail.text}</a>
        </div>
      ))}
    </div>
  );
};

export default ShopMySlider;
