import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './MediaKitSlider.module.css'; // Import CSS module

const image1 = `${process.env.PUBLIC_URL}/Images/MediaKit/Featured1.png`;
const image2 = `${process.env.PUBLIC_URL}/Images/MediaKit/Featured2.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/MediaKit/Featured3.jpg`;
const image4 = `${process.env.PUBLIC_URL}/Images/MediaKit/Featured4.jpg`;
const image5 = `${process.env.PUBLIC_URL}/Images/MediaKit/Featured5.jpg`;
const image6 = `${process.env.PUBLIC_URL}/Images/MediaKit/Featured6.jpg`;
const image7 = `${process.env.PUBLIC_URL}/Images/MediaKit/Featured7.jpg`;
const image8 = `${process.env.PUBLIC_URL}/Images/MediaKit/Featured8.jpg`;
const image9 = `${process.env.PUBLIC_URL}/Images/MediaKit/Featured9.jpg`;
const image10 = `${process.env.PUBLIC_URL}/Images/MediaKit/Featured10.jpg`;

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];

const FeaturesAndShoutouts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className={styles.mediaKitSlider}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Media ${index + 1}`} className={styles.sliderImage} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="black"
        width="35px"
        height="35px"
      >
        <path d="M12 0L10.59 1.41 18.17 9H0v2h18.17l-7.58 7.59L12 24l12-12z" />
      </svg>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="black"
        width="35px"
        height="35px"
      >
        <path d="M12 24l1.41-1.41L5.83 15H24v-2H5.83l7.58-7.59L12 0 0 12z" />
      </svg>
    </div>
  );
};

export default FeaturesAndShoutouts;
