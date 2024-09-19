import React from 'react';
import styles from './diaryhome.module.css';
import TextReveal from '../Components/TextReveal';
import HeroSection from '../Home/HeroSection';
import HorizontalLine from '../Components/HorizontalLine';

const image1 = `${process.env.PUBLIC_URL}/Images/Articles/DiaryPost1/DIARYSQUARE.jpg`;

const DiaryHome = () => {
  return (
    <>
      <TextReveal text="DIARY" />
    <div> 
    <HeroSection
  featureText="DIARY"
  headlineText="Bridesmaid Boxes How-To"
  subtext="Get creative with budget-friendly bridesmaid proposal boxes featuring heartfelt gifts and whimsical touches. Learn how Jackie Wyers made her bridesmaid proposal extra special."
  author="BY JACKIE WYERS"
  imagePath="/Bridesmaids/BridesmaidBoxThumb!.jpg"
  linkUrl="/bridesmaidboxes"
  isFlipped={true}
/>
<HorizontalLine/>
<HeroSection
  featureText="DIARY"
  headlineText="Beyond The Surface : My Experience With Injectable Fillers and Self-Acceptance"
  subtext="In today's social media-driven world, it's increasingly common to see teens and young women experimenting with cosmetic enhancements. Platforms like Instagram flood us with transformation reels..."
  author="BY JACKIE WYERS"
  imagePath="/DiaryPost1/DIARYSQUARE.jpg"
  linkUrl="/diaryfillers"
  isFlipped={false}
/>


    </div>
    </>
  );
};

export default DiaryHome;
