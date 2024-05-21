import React, { useState } from 'react';
import './FanArtGallery.css'; // Assuming you move your SCSS into a separate file
const image1 = `${process.env.PUBLIC_URL}/Images/About/FanArt/1.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/About/FanArt/2.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/About/FanArt/3.jpg`;
const image4 = `${process.env.PUBLIC_URL}/Images/About/FanArt/4.jpg`;
const image5 = `${process.env.PUBLIC_URL}/Images/About/FanArt/5.jpg`;
const image6 = `${process.env.PUBLIC_URL}/Images/About/FanArt/6.jpg`;
const image7 = `${process.env.PUBLIC_URL}/Images/About/FanArt/7.jpg`;
const image8 = `${process.env.PUBLIC_URL}/Images/About/FanArt/8.jpg`;
const image9 = `${process.env.PUBLIC_URL}/Images/About/FanArt/9.jpg`;
const image10 = `${process.env.PUBLIC_URL}/Images/About/FanArt/10.jpg`;
const image11 = `${process.env.PUBLIC_URL}/Images/About/FanArt/11.jpg`;
const image12 = `${process.env.PUBLIC_URL}/Images/About/FanArt/12.jpg`;
const image13 = `${process.env.PUBLIC_URL}/Images/About/FanArt/13.jpg`;
const image14 = `${process.env.PUBLIC_URL}/Images/About/FanArt/14.jpg`;
const image15 = `${process.env.PUBLIC_URL}/Images/About/FanArt/15.jpg`;
const image16 = `${process.env.PUBLIC_URL}/Images/About/FanArt/16.jpg`;
const image17 = `${process.env.PUBLIC_URL}/Images/About/FanArt/17.jpg`;
const image18 = `${process.env.PUBLIC_URL}/Images/About/FanArt/18.jpg`;
const image19 = `${process.env.PUBLIC_URL}/Images/About/FanArt/19.jpg`;
const image20 = `${process.env.PUBLIC_URL}/Images/About/FanArt/20.jpg`;
const image21 = `${process.env.PUBLIC_URL}/Images/About/FanArt/21.jpg`;
const image22 = `${process.env.PUBLIC_URL}/Images/About/FanArt/22.jpg`;
const image23 = `${process.env.PUBLIC_URL}/Images/About/FanArt/23.jpg`;
const image24 = `${process.env.PUBLIC_URL}/Images/About/FanArt/24.jpg`;
const image25 = `${process.env.PUBLIC_URL}/Images/About/FanArt/25.jpg`;
const image26 = `${process.env.PUBLIC_URL}/Images/About/FanArt/26.jpg`;
const image27 = `${process.env.PUBLIC_URL}/Images/About/FanArt/27.jpg`;
const image28 = `${process.env.PUBLIC_URL}/Images/About/FanArt/28.jpg`;
const image29 = `${process.env.PUBLIC_URL}/Images/About/FanArt/29.jpg`;
const image30 = `${process.env.PUBLIC_URL}/Images/About/FanArt/30.jpg`;
const image31 = `${process.env.PUBLIC_URL}/Images/About/FanArt/31.jpg`;
const image32 = `${process.env.PUBLIC_URL}/Images/About/FanArt/32.jpg`;




const bench = `${process.env.PUBLIC_URL}/Images/About/FanArt/bench.png`;


const galleryImages = [

  {
    src: image3,
    alt: "PURPLE PORTAIT",
    caption: "@artsbymilly",
  },

  {
    src: image4,
    alt: "Jackie Wyers Fan Art Gallery Image",
    caption: "@evoletart", 
   },
  {
    src: image5,
    alt: "Jackie Wyers Fan Art Gallery Image",
    caption: "@‌seethrunikki",
  },
  {
    src: image6,
    alt: "Jackie Wyers Fan Art Gallery Image",
    caption: "@‌marinajoycreations",
  },
  {
    src: image7,
    alt: "Jackie Wyers Fan Art Gallery Image",
    caption: "@‌art_arcade._",
  },
  {
    src: image8,
    alt: "Jackie Wyers Fan Art Gallery Image",
    caption: "@‌alihassanein",
  },
  {
    src: image9,
    alt: "Jackie Wyers Fan Art Gallery Image",
    caption: "@‌Suray.art",
  },
  {
    src: image10,
    alt: "Jackie Wyers Fan Art Gallery Image",
    caption: "@‌stephreckingart",
  },
  {
    src: image11,
    alt: "Jackie Wyers Fan Art Gallery Image",
    caption: "@‌faithquinn.art",
  },
  {
    src: image12,
    alt: "Jackie Wyers Fan Art Gallery Image",
    caption: "@‌navasy",
  },
  {
    src: image13,
    alt: "Jackie Wyers Fan Art Gallery Image",
    caption: "@‌navasy",
  },
  {
    src: image14,
    alt: "Jackie Wyers Fan Art Gallery Image",
    caption: "@‌amy_marchant_art",
  },

  {
    src: image15,
    alt: "Jackie Wyers Fan Art Gallery Image",
    caption: "@‌jannatulafsananira",
  },
  {
    src: image16,
    alt: "Jackie Wyers Fan Art Gallery Image",
    caption: "@‌array.art",
  },
  {
    src: image17,
    alt: "Jackie Wyers Fan Art Gallery Image",
    caption: "@‌agatikart",
  },
  {
    src: image18,
    alt: "Jackie Wyers Fan Art Gallery Image",
    caption: "@leeannpaquin",
  },
  {
    src: image19,
    alt: "Jackie Wyers Fan Art Gallery Image",
    caption: "@‌the_.swan",
  },
  {
    src: image20,
    alt: "Jackie Wyers Fan Art Gallery Image",
    caption: "@‌miss_lepard",
  },
  {
    src: image21,
    alt: "Jackie Wyers Fan Art Gallery Image",
    caption: "@‌x_artforever_x",
  },
  {
    src: image22,
    alt: "Jackie Wyers Fan Art Gallery Image",
    caption: "@‌rita.pigaeva",
  },
  {
    src: image23,
    alt: "Jackie Wyers Fan Art Gallery Image",
    caption: "@hevaArt",
  },
  {
    src: image24,
    alt: "Jackie Wyers Fan Art Gallery Image",
    caption: "@‌surrealist_noa",
  },
  {
    src: image25,
    alt: "Jackie Wyers Fan Art Gallery Image",
    caption: "@‌nouraozon.art",
  },
  {
    src: image26,
    alt: "Jackie Wyers Fan Art Gallery Image",
    caption: "@‌Sabine.d.art",
  },  
  {
    src: image27,
    alt: "Jackie Wyers Fan Art Gallery Image",
    caption: "@‌Suray.art",
  },
  {
    src: image28,
    alt: "Jackie Wyers Fan Art Gallery Image",
    caption: "@flying_drawings",
  },
  {
    src: image29,
    alt: "Jackie Wyers Fan Art Gallery Image",
    caption: "@‌hapyvector",
  },
  {
    src: image30,
    alt: "Jackie Wyers Fan Art Gallery Image",
    caption: "@‌amy_marchant_art",
  },
  {
    src: image31,
    alt: "Jackie Wyers Fan Art Gallery Image",
    caption: "@‌leeannpaquin",
  },
  {
    src: image32,
    alt: "Jackie Wyers Fan Art Gallery Image",
    caption: "@‌papiion.art",
  },

  {
    src: image2,
    alt: "Jackie Wyers Fan Art Gallery Image",
    caption: "@artsbymilly",
  },
  {
    src: image1,
    alt: "Jackie Wyers Fan Art Gallery Image",
    caption: "@art.portretik",
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
        
        <img id="bench" src={bench} alt="cool bench" />
       
      </div>
      <div id="nav"> {/* Move navigation inside bench container */}
          <button className="prev" onClick={goPrev}>&#10094;</button>
          <button className="next" onClick={goNext}>&#10095;</button>
        </div>
    </div>
  );
};
export default FanArt;