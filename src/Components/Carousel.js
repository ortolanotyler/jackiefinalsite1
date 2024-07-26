import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Carousel.module.css';

const Carousel = ({ images }) => {
  return (
    <ResponsiveCarousel
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      useKeyboardArrows={true}
      autoPlay={true}
      interval={4000}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className={`${styles.arrow} ${styles.arrowPrev}`}
          >
            &lt;
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className={`${styles.arrow} ${styles.arrowNext}`}
          >
            &gt;
          </button>
        )
      }
    >
      {images.map((image, index) => (
        <div key={index} className={styles.carouselImageContainer}>
          <img src={image} alt={`Slide ${index}`} className={styles.carouselImage} />
        </div>
      ))}
    </ResponsiveCarousel>
  );
};

export default Carousel;
