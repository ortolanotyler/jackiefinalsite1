import React, { useEffect, useRef } from 'react';
import styles from './PastWorkGallery.module.css';
import ResponsiveYoutube from './ResponsiveYoutube'; // Assuming you have this component for full YouTube videos
import BrandCarousel from './BrandCarousel/BrandCarousel';

const PastWorkGallery = () => {
  const cards = [
    {
      video: 'https://www.youtube.com/embed/WyP-Lco8BTA',
      title: 'Marc Anthony',
      description: 'Instagram Reel promoting the 2-in-1 Adjustable Texture Spray with a vintage hair tutorial 🩵',
      links: [{ description: 'IG Reel', href: 'https://www.instagram.com/p/C92O5QRuhWb/' }],
      shopmy: '792948',
      isShort: true, // YouTube short
    },
    {
      video: 'https://www.youtube.com/embed/GfDelZvU5MI',
      title: 'Supergoop',
      description: 'Glowy strawberry look inspired by everyone’s favorite pop star! 🍓',
      links: [{ description: 'Instagram', href: 'https://www.instagram.com/reel/C6RTblxuPIY/' }],
      shopmy: '792953',
      isShort: true,
    },
    {
      video: 'https://www.youtube.com/embed/TyizOnywKLM',
      title: 'Isopia Lashes',
      description: 'Animal-inspired makeup looks featuring Isopia Lashes on Instagram 🐰',
      links: [{ description: 'Instagram', href: 'https://www.instagram.com/p/C6yyaN6O3Nj/' }],
      shopmy: '792957',
      isShort: true,
    },
    {
      video: 'https://www.youtube.com/embed/-AzJlQZvUMs',
      title: 'ONE/SIZE Beauty',
      description: 'Wicked on Broadway Collection for TikTok & IG Reel 🫧',
      links: [
        { description: 'TikTok', href: 'https://www.tiktok.com/@jackie.wyers/video/' },
        { description: 'IG Reel', href: 'https://www.instagram.com/p/C5WwZrPOSP6/' },
      ],
      shopmy: '792939',
      isShort: true,
    },
    {
      video: 'https://www.youtube.com/embed/EePWssl0MhM',
      title: 'Dyson',
      description: 'Showcased the updated Dyson Airwrap for Instagram Reels 💇‍♀️',
      links: [{ description: 'IG Reel', href: 'https://www.instagram.com/reel/CnDhIdOBNId/' }],
      shopmy: '793009',
      isShort: true,
    },
    {
      video: 'https://www.youtube.com/embed/1Z6kTaWnM_o',
      title: 'Prime Video',
      description: 'Promoted the new TV series My Lady Jane with a #Tudorcore hair tutorial 📖',
      links: [{ description: 'IG Hair Tutorial', href: 'https://www.instagram.com/reel/C87EQbWOzU_/' }],
      isShort: true,
    },
    {
      video: 'https://www.youtube.com/embed/RNAgsqacUs0',
      title: 'Wandery',
      description: 'Promoted the Even The Royals podcast while showcasing a Grace Kelly makeup tutorial 👑',
      links: [
        { description: 'IG Reel', href: 'https://www.instagram.com/reel/C7HZ8wxOusn/' },
        { description: 'TikTok', href: 'https://www.tiktok.com/@jackie.wyers/video/7279125519768030494' },
      ],
      isShort: true,
    },
    {
      video: 'https://www.youtube.com/embed/cmNyk65jO58',
      title: 'Paramount Movies',
      description: 'Recreated Regina George’s “Wet Look” to promote the Mean Girls movie musical 💧',
      links: [{ description: 'IG Reel', href: 'https://www.instagram.com/reel/C3sNj8xu0cZ/' }],
      isShort: true,
    },
    {
      video: 'https://www.youtube.com/embed/pTCLYNMVG7M',
      title: 'Warner Brothers',
      description: 'Promoted the Barbie Movie digital release party on Instagram Reels & TikTok 🛍️',
      links: [
        { description: 'Watch on Instagram', href: 'https://www.instagram.com/p/CxOI-3ZOf5f/' },
        { description: 'TikTok', href: 'https://www.tiktok.com/@jackie.wyers/video/7279125519768030494' },
      ],
      isShort: true,
    },
    {
      video: 'https://www.youtube.com/embed/p9UK2sINbvk',
      title: 'Juicy Couture',
      description: 'Brought back nostalgia with the Viva La Juicy fragrance on TikTok 💖',
      links: [{ description: 'Campaign', href: 'https://www.tiktok.com/@jackie.wyers/video/7299526891529063723' }],
      isShort: true,
    },
    {
      video: 'https://www.youtube.com/embed/i8wHU_XsM2A',
      title: 'Osea Malibu (Body Care)',
      description: 'Incorporated OSEA Malibu Holiday Sets into a vintage-inspired tutorial.',
      links: [{ description: 'YouTube Video', href: 'https://www.youtube.com/watch?v=i8wHU_XsM2A' }],
      shopmy: '792962',
      isShort: false, // Full-length YouTube video
    },
    {
      video: 'https://www.youtube.com/embed/6Z1Li8tueAY',
      title: 'Olive Young Global (K-Beauty)',
      description: 'Dedicated K-Beauty-inspired tutorial for OLIVE YOUNG GLOBAL\'s BigBang sale.',
      links: [{ description: 'YouTube Video', href: 'https://www.youtube.com/watch?v=6Z1Li8tueAY' }],
      shopmy: '792995',
      isShort: false, // Full-length YouTube video
    },
    {
      video: 'https://www.youtube.com/embed/BHCzJuLw1qE',
      title: 'Nécessaire (Haircare)',
      description: 'Sponsored integration in my updated haircare routine featuring Nécessaire\'s The Hair Essentials Kit.',
      links: [{ description: 'YouTube Video', href: 'https://www.youtube.com/watch?v=BHCzJuLw1qE' }],
      shopmy: '793002',
      isShort: false, // Full-length YouTube video
    },
    {
      video: 'https://www.youtube.com/embed/4zl7DbeiL5s',
      title: 'Dyson Professional (Hair Tools)',
      description: 'Showcased the Dyson Corrale™ straightener and demonstrated how to use the Dyson Supersonic™ hair dryer.',
      links: [{ description: 'YouTube Video', href: 'https://www.youtube.com/watch?v=4zl7DbeiL5s' }],
      shopmy: '7610430',
      isShort: false, // Full-length YouTube video
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
            {/* Conditionally render either the short or full-length video */}
            <div className={styles.video}>
              <div className={styles.videoWrapper}>
                {card.isShort ? (
                  <div style={{ textAlign: 'center' }}>
                    <iframe
                      style={{
                        boxShadow: '12px',
                        borderRadius: '15px',
                        width: '301px',
                        height: '535px',
                      }}
                      src={card.video}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <ResponsiveYoutube
                    className={styles.videoFrame}
                    src={card.video}
                    title="YouTube video player"
                  />
                )}
              </div>
            </div>

            <div className={styles.text}>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              {/* Render all links for the card */}
              {card.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'block', marginBottom: '10px' }}
                >
                  {link.description}
                </a>
              ))}

              {/* ShopMy embed for all videos, now always placed below the text */}
              {card.shopmy && (
                <div className={styles.shopmyWrapper} style={{ textAlign: 'center', margin: '20px 0' }}>
                  <iframe
                    src={`https://shopmy.us/collections/public/${card.shopmy}?noHeader=true`}
                    title={`Shop My ${card.title}`}
                    style={{ width: '100%', height: '350px', border: 'none' }}
                    frameBorder="0"
                    scrolling="no"
                  ></iframe>
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