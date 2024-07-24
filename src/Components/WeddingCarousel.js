import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from './WeddingCarousel.module.css'; // Import the CSS module

const imageCount = 96; // Total number of images
const images = Array.from({ length: imageCount }, (_, index) => (
  `${process.env.PUBLIC_URL}/Images/Articles/WeddingCarousel/${index + 1}.jpg`
));

const WeddingCarousel = () => {
    return (
        <Carousel
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            swipeable={true}
            showArrows={true}
            className={styles.carousel}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                    <button type="button" onClick={onClickHandler} className={`${styles.arrow} ${styles.arrowPrev}`} aria-label={label}>
                        &#10094;
                    </button>
                )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                    <button type="button" onClick={onClickHandler} className={`${styles.arrow} ${styles.arrowNext}`} aria-label={label}>
                        &#10095;
                    </button>
                )
            }
        >
            {images.map((image, index) => (
                <div key={index} className={styles.carouselImageContainer}>
                    <img src={image} alt={`Carousel Image ${index + 1}`} className={styles.carouselImage} />
                </div>
            ))}
        </Carousel>
    );
};

export default WeddingCarousel;
