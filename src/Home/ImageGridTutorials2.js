import React, { useEffect, useRef } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const image1 = `${process.env.PUBLIC_URL}/Images/Home/homepage5.webp`;
const image2 = `${process.env.PUBLIC_URL}/Images/Home/homepage6.webp`;
const image3 = `${process.env.PUBLIC_URL}/Images/Home/homepage7.webp`;
const image4 = `${process.env.PUBLIC_URL}/Images/Home/homepage8.webp`;

const itemData = [
  { img: image1, title: 'Jackie Wyers New York City' },
  { img: image2, title: 'Jackie Wyers Barbie Margot' },
  { img: image3, title: 'Jackie Wyers in San Diego' },
  { img: image4, title: "Jackie Wyers Penhaligon's Campaign" },
];

export default function QuiltedImageList2() {
  const imageListRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const images = imageListRef.current.querySelectorAll('.parallax-item');
      images.forEach((image) => {
        const speed = image.getAttribute('data-speed');
        const offset = window.scrollY * speed;
        image.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ImageList
      ref={imageListRef}
      sx={{
        marginTop: '-.1rem',
        width: '100%',
        maxHeight: '110vh',
        overflowY: 'hidden',
        borderRadius: '1px',
        position: 'relative',
      }}
      variant="quilted"
      cols={4}
      gap={2}
    >
      {itemData.map((item, index) => (
        <ImageListItem
          key={index}
          cols={1}
          rows={1}
          sx={{
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <img
            src={item.img}
            alt={item.title}
            loading="lazy"
            className="parallax-item"
            data-speed="0.1" // Adjust speed for each image as needed
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: 'translateY(0px)', // Initial position
              transition: 'transform 0.1s linear', // Smooth transition effect
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}