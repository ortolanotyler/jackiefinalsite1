import React from 'react';
import styled from 'styled-components';
import '@fontsource/arapey'; // Ensure this import is added if you use the npm package

const image1 = `${process.env.PUBLIC_URL}/Images/Home/Homepage1.jpg`;
const image2 = `${process.env.PUBLIC_URL}/Images/Home/Homepage2.jpg`;
const image3 = `${process.env.PUBLIC_URL}/Images/Home/Homepage3.jpg`;
const image4 = `${process.env.PUBLIC_URL}/Images/Home/Homepage4.jpg`;

const Timeline = styled.section`
  display: flex;
  background-color: #031625;
  &:hover {
    .tl-item {
      width: 23.3333%;
    }
  }
`;

const TlItem = styled.div`
  transform: translate3d(0, 0, 0);
  position: relative;
  width: 25%;
  height: 60vh; /* Adjusted height */
  min-height: 400px; /* Adjusted minimum height */
  color: #fff;
  overflow: hidden;
  transition: width 0.5s ease;
  &:before,
  &:after {
    transform: translate3d(0, 0, 0);
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  &:after {
    background: rgba(116, 91, 79, 0.85); /* Changed to desired color with opacity */
    opacity: 1;
    transition: opacity 0.5s ease;
  }
  &:before {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 75%);
    z-index: 1;
    opacity: 0;
    transform: translate3d(0, 0, 0) translateY(50%);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  &:hover {
    width: 30% !important;
    &:after {
      opacity: 0;
    }
    &:before {
      opacity: 1;
      transform: translate3d(0, 0, 0) translateY(0);
      transition: opacity 1s ease, transform 1s ease 0.25s;
    }
    .tl-content {
      opacity: 1;
      transform: translateY(0);
      transition: all 0.75s ease 0.5s;
    }
    .tl-bg {
      filter: grayscale(0);
    }
  }
`;

const TlContent = styled.div`
  transform: translate3d(0, 0, 0) translateY(25px);
  position: relative;
  z-index: 1;
  text-align: center;
  margin: 0 1.618em;
  top: 55%;
  opacity: 0;
  transition: opacity 0.75s ease 0.5s, transform 0.75s ease 0.5s;
  h1 {
    font-family: 'Arapey', serif;
    text-transform: uppercase;
    color: #1779cf;
    font-size: 1.44rem;
    font-weight: normal;
    text-decoration: none; /* Ensure no line-through */
  }
  p {
    font-family: 'Arapey', serif;
    color: #ffffff;
    text-decoration: none; /* Ensure no line-through */
  }
`;

const TlYear = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  text-decoration: none; /* Ensure no line-through */
  p {
    font-family: 'Arapey', serif;
    font-size: 1.728rem;
    line-height: 0;
    text-decoration: none; /* Ensure no line-through */
  }
`;

const TlBg = styled.div`
  transform: translate3d(0, 0, 0);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center center;
  transition: filter 0.5s ease;
  filter: grayscale(100%);
`;

const TimelineItem = ({ year, title, content, bgImage }) => (
  <TlItem className="tl-item">
    <TlBg style={{ backgroundImage: `url(${bgImage})` }} />
    <TlContent className="tl-content">
      <p>{year}</p>
    </TlContent>
    <TlContent className="tl-content">
      <h1>{title}</h1>
      <p>{content}</p>
    </TlContent>
  </TlItem>
);

const TimelineComponent = () => (
  <Timeline id="timeline">
    <TimelineItem
      year="LATEST"
      title="Lorem ipsum dolor sit"
      content="Lorem ipsum dolor sir magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit."
      bgImage={image1}
    />
    <TimelineItem
      year="TRENDING"
      title="Vestibulum laoreet lorem"
      content="Suspendisse potenti. Sed sollicitudin eros lorem, eget accumsan risus dictum id. Maecenas dignissim ipsum vel mi rutrum egestas. Donec mauris nibh, facilisis ut hendrerit vel, fringilla sed felis. Morbi sed nisl et arcu."
      bgImage={image2}
    />
    <TimelineItem
      year="MAKEUP"
      title="Phasellus mauris elit"
      content="Mauris cursus magna at libero lobortis tempor. Suspendisse potenti. Aliquam interdum vulputate neque sit amet varius. Maecenas ac pulvinar nisi. Fusce vitae nunc ultrices, tristique dolor at, porttitor dolor. Etiam id cursus arcu, in dapibus nibh. Pellentesque non porta leo. Nulla eros odio, egestas quis efficitur vel, pretium sed."
      bgImage={image3}
    />
    <TimelineItem
      year="HAIR"
      title="Mauris vitae nunc elem"
      content="Suspendisse ac mi at dolor sodales faucibus. Nunc sagittis ornare purus non euismod. Donec vestibulum efficitur tortor, eget efficitur enim facilisis consequat. Vivamus laoreet laoreet elit. Ut ut varius metus, bibendum imperdiet ex. Curabitur diam quam, blandit at risus nec, pulvinar porttitor lorem. Pellentesque dolor elit."
      bgImage={image4}
    />
  </Timeline>
);

export default TimelineComponent;
