import React, { useEffect, useRef } from 'react';
import styles from './PastWorkGallery.module.css';
import ResponsiveIframe from './ResponsiveIframe'; // Assuming you have this component
import BrandCarousel from './BrandCarousel/BrandCarousel';

const PastWorkGallery = () => {
  const cards = [
    {
      video: 'https://www.youtube.com/embed/WyP-Lco8BTA',
      title: 'Marc Anthony',
      description: 'Instagram Reel promoting the 2-in-1 Adjustable Texture Spray with a vintage hair tutorial 🩵',
      link: 'https://www.instagram.com/p/C92O5QRuhWb/',
      shopmy: '792948',
    },
    {
      video: 'https://www.youtube.com/embed/GfDelZvU5MI',
      title: 'Supergoop',
      description: 'Glowy strawberry look inspired by everyone’s favorite pop star! 🍓',
      link: 'https://www.instagram.com/reel/C6RTblxuPIY/',
      shopmy: '792953',
    },
    {
      video: 'https://www.youtube.com/embed/TyizOnywKLM',
      title: 'Isopia Lashes',
      description: 'Animal-inspired makeup looks featuring Isopia Lashes on Instagram 🐰',
      link: 'https://www.instagram.com/p/C6yyaN6O3Nj/',
      shopmy: '792957',
    },
    {
      video: 'https://www.youtube.com/embed/-AzJlQZvUMs',
      title: 'ONE/SIZE Beauty',
      description: 'Wicked on Broadway Collection for TikTok & IG Reel 🫧',
      link: 'https://www.instagram.com/p/C5WwZrPOSP6/',
      shopmy: '792939',
    },
    {
      video: 'https://www.youtube.com/embed/EePWssl0MhM',
      title: 'Dyson',
      description: 'Showcased the updated Dyson Airwrap for Instagram Reels 💇‍♀️',
      link: 'https://www.instagram.com/reel/CnDhIdOBNId/',
      shopmy: '793009',
    },
    {
      video: 'https://www.youtube.com/embed/1Z6kTaWnM_o',
      title: 'Prime Video',
      description: 'Promoted the new TV series My Lady Jane with a #Tudorcore hair tutorial 📖',
      link: 'https://www.instagram.com/reel/C87EQbWOzU_/',
    },
    {
      video: 'https://www.youtube.com/embed/RNAgsqacUs0',
      title: 'Wandery',
      description: 'Promoted the Even The Royals podcast while showcasing a Grace Kelly makeup tutorial 👑',
      link: 'https://www.instagram.com/reel/C7HZ8wxOusn/',
    },
    {
      video: 'https://www.youtube.com/embed/cmNyk65jO58',
      title: 'Paramount Movies',
      description: 'Recreated Regina George’s “Wet Look” to promote the Mean Girls movie musical 💧',
      link: 'https://www.instagram.com/reel/C3sNj8xu0cZ/',
    },
    {
      video: 'https://www.youtube.com/embed/pTCLYNMVG7M',
      title: 'Warner Brothers',
      description: 'Promoted the Barbie Movie digital release party on Instagram Reels & TikTok 🛍️',
      link: 'https://www.instagram.com/p/CxOI-3ZOf5f/',
    },
    {
      video: 'https://www.youtube.com/embed/p9UK2sINbvk',
      title: 'Juicy Couture',
      description: 'Brought back nostalgia with the Viva La Juicy fragrance on TikTok 💖',
      link: 'https://www.tiktok.com/@jackie.wyers/video/7299526891529063723',
    },
    {
      video: 'https://www.youtube.com/embed/i8wHU_XsM2A',
      title: 'Osea Malibu (Body Care)',
      description: 'Incorporated OSEA Malibu Holiday Sets into a vintage-inspired tutorial.',
      link: 'https://www.youtube.com/watch?v=i8wHU_XsM2A',
      shopmy: '792962',
    },
    {
      video: 'https://www.youtube.com/embed/6Z1Li8tueAY',
      title: 'Olive Young Global (K-Beauty)',
      description: 'Dedicated K-Beauty-inspired tutorial for OLIVE YOUNG GLOBAL\'s BigBang sale.',
      link: 'https://www.youtube.com/watch?v=6Z1Li8tueAY',
      shopmy: '792995',
    },
    {
      video: 'https://www.youtube.com/embed/BHCzJuLw1qE',
      title: 'Nécessaire (Haircare)',
      description: 'Sponsored integration in my updated haircare routine featuring Nécessaire\'s The Hair Essentials Kit.',
      link: 'https://www.youtube.com/watch?v=BHCzJuLw1qE',
      shopmy: '793002',
    },
    {
      video: 'https://www.youtube.com/embed/4zl7DbeiL5s',
      title: 'Dyson Professional (Hair Tools)',
      description: 'Showcased the Dyson Corrale™ straightener and demonstrated how to use the Dyson Supersonic™ hair dryer.',
      link: 'https://www.youtube.com/watch?v=4zl7DbeiL5s',
      shopmy: '7610430',
    },
  ];
  const galleryRef = useRef(null);

  // Using IntersectionObserver to trigger fade-in animation
  useEffect(() => {
    const cards = document.querySelectorAll(`.${styles.card}`);
    const observerOptions = {
      root: null,
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.fadeIn);
        }
      });
    }, observerOptions);

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <>
      <div>
        <h1 className={styles.heading}>My Work</h1>
      </div>

      <div>
        <BrandCarousel />
      </div>

      <div className={styles.gallery} ref={galleryRef}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${styles.card} ${index % 2 === 0 ? styles.normal : styles.reversed}`}
          >
            {/* Video and text alternate positioning */}
            <div className={styles.video}>
              <div className={styles.videoWrapper}>
                <iframe
                  className={styles.videoFrame}
                  src={card.video}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className={styles.text}>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              <a href={card.link} target="_blank" rel="noopener noreferrer">
                Watch on Instagram
              </a>
              {card.shopmy && (
                <div className={styles.shopmyWrapper}>
                  <ResponsiveIframe
                    src={`https://shopmy.us/collections/public/${card.shopmy}?noHeader=true`}
                    title={`Shop My ${card.title}`}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PastWorkGallery;