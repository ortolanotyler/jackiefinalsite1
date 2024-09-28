import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './NewsletterSlider.module.css'; // Import CSS module

const NewsletterSlider = () => { // Removed the `images` prop

  const images = [
    `${process.env.PUBLIC_URL}/Images/Home/1.png`,
    `${process.env.PUBLIC_URL}/Images/Home/2.png`,
    `${process.env.PUBLIC_URL}/Images/Home/3.png`,
    `${process.env.PUBLIC_URL}/Images/Home/4.png`,
  ];

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
            <img 
              src={image} 
              alt={`Media ${index + 1}`} 
              className={styles.sliderImage} 
              width="1000" // Set explicit width
              height="600" // Set explicit height
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }} // Responsive styling
            />
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
        fill="#745B4F"
        width="25px"
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
        fill="#745B4F"
        width="25px"
        height="35px"
      >
        <path d="M12 24l1.41-1.41L5.83 15H24v-2H5.83l7.58-7.59L12 0 0 12z" />
      </svg>
    </div>
  );
};

export default NewsletterSlider;