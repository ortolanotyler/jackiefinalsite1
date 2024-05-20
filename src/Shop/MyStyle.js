import React from 'react';
import { Comments } from '@hyvor/hyvor-talk-react';
import TextReveal from '../Components/TextReveal';
import ItemSlider from './Slider';
import ThreeSections from './ThreeSections';
import AprilStyleSlider from './AprilStyleSlider';
import FallWinterSlider from './FallWinterSlider';
import PhotoShootSlider from './PhotoShootSlider';

const MyStyle = () => {
  // Base style for anchor tags
  const anchorStyle = {
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'GFS Didot, serif',
    fontSize: '1.25rem', // Default for mobile and small devices
  };

  // Responsive base style for sections
  const sectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
    backgroundColor: 'white',
    fontFamily: 'GFS Didot, serif',
    padding: '2rem',
    // Adjust font size for larger screens
    fontSize: '4rem', // Default for mobile and small devices
    '@media (min-width: 768px)': {
      fontSize: '7rem', // Tablets and medium screens
    },
    '@media (min-width: 1024px)': {
      fontSize: '9rem', // Desktops and larger screens
    },
  };

  return (
    <div style={{ backgroundColor: 'white' }}>
      <TextReveal text="SPRING/SUMMER" />
      <div style={sectionStyle}></div>
      <ItemSlider />
      <ThreeSections
        section1Content={
          <div>
            <a href="https://go.shopmy.us/p-3491370" style={anchorStyle} target="">Top: LPA //</a>
            <br />
            <a href="https://go.shopmy.us/p-3491382" style={anchorStyle} target="">Skirt: BY.DYLN //</a>
            <br />
            <a href="https://go.shopmy.us/p-3491385" style={anchorStyle} target="_blank" rel="noreferrer">Necklace: ALEX MONROE (similar) //</a>
            <br />
            <a href="https://go.shopmy.us/p-3491400" style={anchorStyle} target="_blank" rel="noreferrer">Shoes: ALOHAS //</a>
          </div>
        }
        section2Content={
          <div>
            <a href="https://go.shopmy.us/p-3492711" style={anchorStyle} target="">Bathing Suit: Revolve (similar) //</a>
          </div>
        }
        section3Content={
          <div>
            <a href="https://go.shopmy.us/p-3492388" style={anchorStyle} target="">Top: V. Chapman Studio // Majorelle (similar) //</a>
            <br />
            <a href="https://go.shopmy.us/p-3492414" style={anchorStyle} target="_blank" rel="noreferrer">Pants: FAVORITE DAUGHTER //</a>
            <br />
            <a href="https://go.shopmy.us/p-3492437" style={anchorStyle} target="_blank" rel="noreferrer">Heels: Steve Madden //</a>
            <br />
            <a href="https://go.shopmy.us/p-3492555" style={anchorStyle} target="_blank" rel="noreferrer">Purse: CHANEL //</a>
          </div>
        }
      />
      <div style={sectionStyle}>
        <TextReveal text="FALL/WINTER" />
      </div>
      <AprilStyleSlider />
      <ThreeSections
        section1Content={
          <div>
            <a href="https://go.shopmy.us/p-3491370" style={anchorStyle} target="">Top: Aritzia //</a>
            <br />
            <a href="https://go.shopmy.us/p-4363264" style={anchorStyle} target="">Hat: Apparis //</a>
            <br />
            <a href="https://go.shopmy.us/p-4363265" style={anchorStyle} target="">Coat: Noize // </a>
            <br />
            <a href="https://go.shopmy.us/p-4363269" style={anchorStyle} target="">Pants: Perfect Moment // </a>
          </div>
        }
        section2Content={
          <div>
            <a href="https://go.shopmy.us/p-4363204" style={anchorStyle} target="">Pants: Abercrombie // </a>
            <br />
            <a href="https://go.shopmy.us/p-4363215" style={anchorStyle} target=""> Bodysuit: Larroude (similar) //</a>
            <br />
            <a href="https://go.shopmy.us/p-4363243" style={anchorStyle} target="_blank" rel="noreferrer">Hat: Alo (similar) //</a>
            <a href="https://go.shopmy.us/p-4363246" style={anchorStyle} target="_blank" rel="noreferrer">Gloves: Marcus Adler //</a>
          </div>
        }
        section3Content={
          <div>
            <a href="https://go.shopmy.us/p-4363149" style={anchorStyle} target="">Sweater: Aritzia // </a>
            <br />
            <a href="https://go.shopmy.us/p-4363166" style={anchorStyle} target="_blank" rel="noreferrer">Scarf: Abercrombie, Try Marcus Adler (similar) //</a>
            <a href="https://go.shopmy.us/p-4363182" style={anchorStyle} target="_blank" rel="noreferrer">Socks: Barefoot Dreams (similar) //</a>
            <a href="https://go.shopmy.us/p-3491382" style={anchorStyle} target="">Hat: H&M//</a>
          </div>
        }
      />
      <FallWinterSlider />
      <ThreeSections
        section1Content={
          <div>
            <a href="https://go.shopmy.us/p-3491370" style={anchorStyle} target="">Top: NBD (similar) //</a>
            <br />
            <a href="https://go.shopmy.us/p-3491382" style={anchorStyle} target="_blank" rel="noreferrer">Pants: CITIZENS OF HUMANITY //</a>
          </div>
        }
        section2Content={
          <div>
            <a href="https://go.shopmy.us/p-3493722" style={anchorStyle} target="">Dress: LPA (Similar) //</a>
            <br />
            <a href="https://go.shopmy.us/p-3493729" style={anchorStyle} target="_blank" rel="noreferrer">Boots SCHUTZ (similar to belt texture) //</a>
            <br />
            <a href="https://shopmy.us/collections/379891" style={anchorStyle} target="_blank" rel="noreferrer">BELT: Thrifted //</a>
          </div>
        }
        section3Content={
          <div>
            <a href="https://go.shopmy.us/p-3491370" style={anchorStyle} target="">Dress: Lovers and Friends //</a>
            <br />
            <a href="https://go.shopmy.us/p-3491382" style={anchorStyle} target="_blank" rel="noreferrer">Boots: LARROUDÉ //</a>
          </div>
        }
      />
      <div style={sectionStyle}>
        <TextReveal text="PHOTOSHOOTS" />
      </div>
      <PhotoShootSlider />
      <ThreeSections
        section1Content={
          <div>
            <a href="https://go.shopmy.us/p-3493493" style={anchorStyle} target="">Top: H:OURS //</a>
            <br />
            <a href="https://go.shopmy.us/p-3493482" style={anchorStyle} target="_blank" rel="noreferrer">Earrings: Joolz (similar) //</a>
            <br />
            <a href="https://go.shopmy.us/p-3493499" style={anchorStyle} target="_blank" rel="noreferrer">Jeans: AGOLDE (similar) //</a>
            <br />
            <a href="https://go.shopmy.us/p-3493527" style={anchorStyle} target="_blank" rel="noreferrer">Shoes: LPA //</a>
          </div>
        }
        section2Content={
          <div>
            <a href="https://go.shopmy.us/p-3494143" style={anchorStyle} target="">Pants: Lovers and Friends //</a>
            <br />
            <a href="https://go.shopmy.us/p-3494171" style={anchorStyle} target="_blank" rel="noreferrer">Bodysuit: Majorelle //</a>
            <br />
            <a href="https://go.shopmy.us/p-3494173" style={anchorStyle} target="_blank" rel="noreferrer">Heels: Steve Madden //</a>
            <br />
          </div>
        }
        section3Content={
          <div>
            <a href="https://go.shopmy.us/p-3494681" style={anchorStyle} target="">Sweater Dress: Majorelle //</a>
            <br />
            <a href="https://go.shopmy.us/p-3494687" style={anchorStyle} target="_blank" rel="noreferrer">Jacket: Thrifted, Mango (similar) //</a>
            <br />
            <a href="https://go.shopmy.us/p-3494697" style={anchorStyle} target="_blank" rel="noreferrer">Boots: By Far //</a>
            <br />
          </div>
        }
      />
      <Comments website-id={'10910'} pageId={"mystyle"} /> {/* Unique identifier for this blog post */}
    </div>
  );
};

export default MyStyle;

