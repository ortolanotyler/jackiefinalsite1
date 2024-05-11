import React, { useState } from 'react';
import './FanArtGallery.css'; // Assuming you move your SCSS into a separate file
const image1 = `${process.env.PUBLIC_URL}/Images/1.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/2.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/3.jpg`;
const image4 = `${process.env.PUBLIC_URL}/Images/4.jpg`;
const image5 = `${process.env.PUBLIC_URL}/Images/5.jpg`;
const image6 = `${process.env.PUBLIC_URL}/Images/6.jpg`;
const image7 = `${process.env.PUBLIC_URL}/Images/7.jpg`;
const image8 = `${process.env.PUBLIC_URL}/Images/8.jpg`;
const image9 = `${process.env.PUBLIC_URL}/Images/9.jpg`;
const image10 = `${process.env.PUBLIC_URL}/Images/10.jpg`;
const image11 = `${process.env.PUBLIC_URL}/Images/11.jpg`;
const image12 = `${process.env.PUBLIC_URL}/Images/12.jpg`;
const image13 = `${process.env.PUBLIC_URL}/Images/13.jpg`;
const image14 = `${process.env.PUBLIC_URL}/Images/14.jpg`;
const image15 = `${process.env.PUBLIC_URL}/Images/15.jpg`;
const image16 = `${process.env.PUBLIC_URL}/Images/16.jpg`;
const image17 = `${process.env.PUBLIC_URL}/Images/17.jpg`;
const image18 = `${process.env.PUBLIC_URL}/Images/18.jpg`;
const image19 = `${process.env.PUBLIC_URL}/Images/19.jpg`;
const image20 = `${process.env.PUBLIC_URL}/Images/20.jpg`;
const image21 = `${process.env.PUBLIC_URL}/Images/21.jpg`;
const image22 = `${process.env.PUBLIC_URL}/Images/22.jpg`;
const image23 = `${process.env.PUBLIC_URL}/Images/23.jpg`;
const image24 = `${process.env.PUBLIC_URL}/Images/24.jpg`;
const image25 = `${process.env.PUBLIC_URL}/Images/25.jpg`;
const image26 = `${process.env.PUBLIC_URL}/Images/26.jpg`;
const image27 = `${process.env.PUBLIC_URL}/Images/27.jpg`;



const bench = `${process.env.PUBLIC_URL}/Images/bench.png`;


const galleryImages = [
  {
    src: image27,
    alt: "Café Terrace at Night, 1888, Kröller-Müller Museum, Otterlo",
    caption: "@navasy",
  },
  {
    src: image26,
    alt: "Bedroom in Arles, 1888, Van Gogh Museum, Amsterdam",
    caption: "@navasy",
  },
  {
    src: image3,
    alt: "red lips",
    caption: "Artist: Suray @suray.art",
  },
  {
    src: image4,
    alt: "red headband",
    caption: "Artist: Sabine @‌Sabine.d.art",  },
  {
    src: image5,
    alt: "Art Process",
    caption: "Artist: Marina Joy   @marinajoycreations",
  },
  {
    src: image6,
    alt: "Black and White",
    caption: "Artist: Ali Hassaneim @‌alihassanein",
  },
  {
    src: image7,
    alt: "Half Photo Half Drawing",
    caption: "Artist: Zainab Ibrahim @‌x_artforever_x",
  },
  {
    src: image8,
    alt: "Blue Lagoon",
    caption: "Artist: Suray  @suray.art",
  },
  {
    src: image9,
    alt: "Colourful Background",
    caption: "Artist: Nira Afsana @‌jannatulafsananira",
  },
  {
    src: image10,
    alt: "Flower Braids",
    caption: "Artist: Miss Lepard @‌miss_lepard",
  },
  {
    src: image11,
    alt: "Butterfly",
    caption: "Artist: Faith Quinn @‌faithquinn.art",
  },
  {
    src: image12,
    alt: "Round",
    caption: "Artist: Vector Boy @‌hapyvector",
  },
  {
    src: image13,
    alt: "PURPLE PORTAIT",
    caption: "Artist: Noura Ozon @‌nouraozon.art",
  },
  {
    src: image14,
    alt: "CRAYON BARBIE",
    caption: "Artist: Annie Bray @‌array.art",
  },

  {
    src: image15,
    alt: "UPDO",
    caption: "@‌papiion.art",
  },
  {
    src: image16,
    alt: "Flower Crown",
    caption: "@‌the_.swan",
  },
  {
    src: image17,
    alt: "Beret",
    caption: "Artist: Surbhi Patel @‌art_arcade._",
  },
  {
    src: image18,
    alt: "ANGELIC",
    caption: "Artist: Nikki @‌seethrunikki",
  },
  {
    src: image19,
    alt: "BRAIDS AND CHERRY",
    caption: "Artist: Steph Recking @‌stephreckingart",
  },
  {
    src: image20,
    alt: "DIGITAL",
    caption: "Artist: Agata @‌agatikart",
  },
  {
    src: image21,
    alt: "PAINTERLY",
    caption: "Artist: Noa @‌surrealist_noa",
  },
  {
    src: image22,
    alt: "STRAWBERRY GIRL",
    caption: "Artist: LeeAnn Paquin @‌leeannpaquin",
  },
  {
    src: image23,
    alt: "LeeAnn Paquin - Floral Portrait",
    caption: "Artist: LeeAnn Paquin @‌leeannpaquin",
  },
  {
    src: image24,
    alt: "Spring Sketch",
    caption: "Artist: Amy Marchant @amy_marchant_art",
  },
  {
    src: image25,
    alt: "Coca Cola",
    caption: "Artist: Amy Marchant @amy_marchant_art",
  },
  {
    src: image2,
    alt: "Red Lips",
    caption: "Artist: Leonie @‌flying_drawings",
  },
  {
    src: image1,
    alt: "Bedroom in Arles, 1888, Van Gogh Museum, Amsterdam",
    caption: "Artist: Rita Pigaeva @rita.pigaeva",
  },
  // Add the rest of your images here...
];





const FanArt = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const count = galleryImages.length;

  const goPrev = () => {
    setActiveIndex((prevIndex) => prevIndex !== 0 ? prevIndex - 1 : count - 1);
  };

  const goNext = () => {
    setActiveIndex((prevIndex) => prevIndex < count - 1 ? prevIndex + 1 : 0);
  };

  return (
    <div id="gallery">
      <ul id="frame">
        {galleryImages.map((image, index) => (
          <li key={index} className={index === activeIndex ? 'active' : ''}>
            <figure>
              <img src={image.src} alt={image.alt} />
              <figcaption>
                <div className="caption-frame">
                  {image.caption}
                </div>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <div id="bench-container">
        <div id="nav"> {/* Move navigation inside bench container */}
          <button className="prev" onClick={goPrev}>&#10094;</button>
          <button className="next" onClick={goNext}>&#10095;</button>
        </div>
        <img id="bench" src={bench} alt="cool bench" />
      </div>
    </div>
  );
};
export default FanArt;