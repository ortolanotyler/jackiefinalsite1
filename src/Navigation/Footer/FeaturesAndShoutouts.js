import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './FeaturesAndShoutouts.module.css'; // Import new CSS module

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

const links = [
  'https://www.vogue.com/article/met-gala-challenge-instagram-photos',
  'https://www.houseofwellness.com.au/beauty/beauty-trends/coppolacore-beauty-trend',
  'https://el.imaginariumworld.co.uk/product-page/imaginarium-magazine-19-april-may-2023',
  'https://www.justjaredjr.com/tags/jackie-wyers/',
  'https://www.ardellshop.com/beauty-of-the-week-jackie-wyers',
  'https://en.nikon.ca/learn-and-explore/c/ideas-and-inspiration/jackie-wyers',
  'https://en.nikon.ca/learn-and-explore/c/ideas-and-inspiration/jackie-wyers',
  'https://www.elle.com/',
  'https://enchantedlivingmagazine.com/lost-lands-collection/',
  'https://www.vogue.com/article/met-gala-challenge-instagram-photos'
];

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
      <div className={styles.linksSection}>
        <div className={styles.linksRow}>
          <a href={links[0]} target="_blank" rel="noopener noreferrer">Vogue</a>
          <a href={links[1]} target="_blank" rel="noopener noreferrer">House of Wellness</a>
          <a href={links[2]} target="_blank" rel="noopener noreferrer">Imaginarium</a>
          <a href={links[3]} target="_blank" rel="noopener noreferrer">Just Jared Jr</a>
          <a href={links[4]} target="_blank" rel="noopener noreferrer">Ardell</a>
          <a href={links[5]} target="_blank" rel="noopener noreferrer">Nikon Canada</a>
          <a href={links[6]} target="_blank" rel="noopener noreferrer">Nikon</a>
          <a href={links[7]} target="_blank" rel="noopener noreferrer">Elle</a>
          <a href={links[8]} target="_blank" rel="noopener noreferrer">Enchanted Living</a>
          <a href={links[9]} target="_blank" rel="noopener noreferrer">Vogue</a>
        </div>
      </div>
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

export default FeaturesAndShoutouts;
