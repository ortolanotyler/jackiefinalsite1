import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './Layout';
import { logPageView } from './analytics';
import { SpeedInsights } from "@vercel/speed-insights/react";
import './App.css'; // Ensure you have imported the App.css file
import { EmailProvider } from './Components/EmailContext';

import Sitemap from './Navigation/SiteMap/SiteMap';
import EmailSubscribe from './Components/EmailSubscribe';
import MediaKit from './Navigation/Footer/MediaKit';
import Yardley65 from './Articles/Tutorials/VintageVibes/Yardley1965';
import VictoriaSecret from './Articles/Tutorials/PopCulture/VictoriaSecret';
import SugarPlumBlogPost from './Articles/Tutorials/Trending/SugarPlumBlogPost';
import SophiaLorenPost from './Articles/Tutorials/VintageVibes/SophiaLoren';
import SharonTatePost from './Articles/Tutorials/VintageVibes/SharonTateBridal';
import SharonIconicPost from './Articles/Tutorials/VintageVibes/SharonIconicPost';
import PatMcGrathPost from './Articles/Tutorials/Trending/PatMcGrath';
import NoMakeUpSpring from './Articles/Tutorials/Trending/NoMakeUpSpring';
import MontTremblantBlog from './Articles/Travel/MontTremblant1';
import LatteMakeupBlogPost from './Articles/Tutorials/Trending/LatteMakeupBlogPost';
import LanaBlog from './Articles/Tutorials/PopCulture/LanaBlog';
import HotelQ from './Articles/Travel/HotelQ';
import GraceKelly from './Articles/Tutorials/VintageVibes/GraceKelly';
import Disney1Post from './Articles/Travel/Disney1';
import Disney2Post from './Articles/Travel/Disney2';
import BarbieBlog from './Articles/Tutorials/PopCulture/BarbieBlogPost';
import BalkeBlog from './Articles/Tutorials/VintageVibes/BalkeBlog';
import HalfetiReview from './Articles/Reviews/HalfetiReview';
import JickyReview from './Articles/Reviews/JickyReview';
import BonBonReview from './Articles/Reviews/BonBonReview';
import HomePage from './Home/HomePage';
import About from './About/About';
import QuizHomepage from './Quiz/QuizHomePage';
import Quiz1 from './Quiz/Quiz1';
import NewTutorials from './Articles/Tutorials/HomeTutorials';
import VintageVibes from './Articles/Tutorials/VintageVibes/VintageHome';
import PopCultureView from './Articles/Tutorials/PopCulture/PopCulture';
import TravelArticlesHome from './Travel/TravelArticlesHome';
import MyStyle from './Shop/MyStyle';
import VintageVibesMerch from './Shop/VintageVibesMerch';
import TrendsHome from './Articles/Tutorials/Trending/TrendsHome';
import Vlogs from './Vlogs/Vlogs';
import TwiggyBlog from './Articles/Tutorials/VintageVibes/Twiggy';
import Makeup2016 from './Articles/Tutorials/Trending/2016Makeup';
import WestGateHotelBlog from './Articles/Travel/WestGateHotel';
import AndazMauiReview from './Articles/Travel/AndazMaui';
import PrinceOfWales from './Articles/Travel/PrinceOfWales';
import AnimalPretty from './Articles/Tutorials/Trending/AnimalPretty';
import PrivacyNotice from './Components/PrivacyNotice';
import LeftOutfit from './Shop/ShopMyHomeLinks/LeftOutfit';
import MiddleOutfit from './Shop/ShopMyHomeLinks/MiddleOutfit';
import RightOutfit from './Shop/ShopMyHomeLinks/RightOutfit';
import FoxPretty from './Quiz/QuizResultPages/Quiz2/Fox';
import BunnyPretty from './Quiz/QuizResultPages/Quiz2/Bunny';
import CatPretty from './Quiz/QuizResultPages/Quiz2/Cat';
import DeerPretty from './Quiz/QuizResultPages/Quiz2/Deer';
import Quiz2 from './Quiz/Quiz2';
import BusinessContact from './Components/BusinessContact';
import NinetiesStyle from './Shop/ShopMyHomeLinks/NINETIESSTYLE';
import PinkLeather from './Shop/ShopMyHomeLinks/PinkLeather';
import RetroFloral from './Shop/ShopMyHomeLinks/RetroFloral';
import BarbieSki from './Shop/ShopMyHomeLinks/BarbieSki';
import BlackAndLeather from './Shop/ShopMyHomeLinks/BlackAndLeather';
import CabinFever from './Shop/ShopMyHomeLinks/CabinFever';
import ManhattanCool from './Shop/ShopMyHomeLinks/ManhattanCool';
import FallLBD from './Shop/ShopMyHomeLinks/FallLBD';
import DarkFlorals from './Shop/ShopMyHomeLinks/DarkFlorals';
import DiaryPost1Fillers from './Articles/Tutorials/VintageVibes/DiaryFillers';
import SummerInspo from './Articles/Tutorials/PopCulture/SummerInspo';
import VideoGridPage from './Home/VideoGrid/VideoGridPage';
import NewZealand from './Articles/Travel/NewZealand';
import Fable from './Articles/Travel/Fable';
import SummerBeauty from './Articles/Tutorials/PopCulture/SummerBeauty';
import DiaryBridesmaids from './Articles/Tutorials/VintageVibes/DiaryBridesmaids';
import LatestExplorer from './Home/LatestExplorer';
import ReviewArticleListHome from './ReviewsPage/ReviewArticleListHomePage';
import BridalMakeup from './Articles/Tutorials/Trending/BridalMakeup';
import PeriodDrama from './Articles/Tutorials/PopCulture/PeriodDrama';
import FairytaleWedding from './Articles/Travel/FairytaleWedding';
import BridalHome from './Articles/Tutorials/BridalHome';
import BardotHairstyles from './Articles/Tutorials/VintageVibes/BardotHairstyles';
import HotelQ2 from './Articles/Travel/HotelQ2';
import Quiz3 from './Quiz/Quiz3';
import Bacarra from './Quiz/QuizResultPages/Quiz3/Bacarra';
import Abril from './Quiz/QuizResultPages/Quiz3/Abril';
import Percy from './Quiz/QuizResultPages/Quiz3/Percy';
import Ora from './Quiz/QuizResultPages/Quiz3/Ora';
import Zara from './Quiz/QuizResultPages/Quiz3/Zara';
import Elizabeth from './Quiz/QuizResultPages/Quiz3/Elizabeth';
import Porsha from './Quiz/QuizResultPages/Quiz3/Porsha';
import WeddingDressGuide from './Quiz/QuizResultPages/Quiz3/WeddingDressGuide';
import DIYFlowers from './Articles/Travel/DIYFlowerPins';
import ParisianChic from './Shop/ShopMyHomeLinks/ParisianChic';
import VaticanSlay from './Shop/ShopMyHomeLinks/VaticanSlay';
import WalkingWaiheke from './Shop/ShopMyHomeLinks/WalkingWaiheke';
import PrincessCoreParis from './Shop/ShopMyHomeLinks/PrincessCoreParis';
import PolkaDotMoment from './Shop/ShopMyHomeLinks/PolkaDot';
import ItalianFountain from './Shop/ShopMyHomeLinks/ItalianFountain';
import SummerSet from './Shop/ShopMyHomeLinks/SummerSet';
import HoundstoothSet from './Shop/ShopMyHomeLinks/HoundstoothSet';
import MetSteps from './Shop/ShopMyHomeLinks/MetSteps';
import ParisInNYC from './Shop/ShopMyHomeLinks/ParisInNYC';
import FloralMini from './Shop/ShopMyHomeLinks/FloralMini';
import FolkloreFairy from './Shop/ShopMyHomeLinks/FolkloreFairy';
import ImageGrid from './Home/ArticlesGrid';
import HeroSection from './Home/HeroSection';
import DiaryHome from './DiaryHome/diaryhome';
import CameraSettings from './Articles/Tutorials/PopCulture/CameraSettings';
import EmilyInParis from './Articles/Tutorials/PopCulture/EmilyInParis';
import Rome from './Articles/Travel/Rome';


import './App.css';
import Sorrento1 from './Articles/Travel/Sorrento1';
import PastWorkGallery from './Components/PastWorkGallery';
import Francesca from './Articles/Tutorials/VintageVibes/Francesca';
import FanArt from './About/FanArtGallery';
import Halloween from './Articles/Tutorials/PopCulture/Halloween';
import Brussels from './Articles/Travel/Brussels';
import BarbieDoll from './Articles/Tutorials/PopCulture/BarbieDoll';
import BarbieRoundup from './Articles/Tutorials/PopCulture/BarbieRoundup';
import NotFound from './Components/NotFound';
import Quiz3Homepage from './Quiz/Quiz3Homepage';
import Quiz2Homepage from './Quiz/Quiz2HomePage';
import Rory from './Articles/Tutorials/PopCulture/Rory';
import Wicked from './Articles/Tutorials/VintageVibes/Wicked';
import Wicked2 from './Articles/Tutorials/VintageVibes/Wicked2';

import YSL from './Quiz/QuizResultPages/Quiz4/Quiz4YSL';
import Quiz4Barbie from './Quiz/QuizResultPages/Quiz4/Quiz4barbie';
import Quiz4Britney from './Quiz/QuizResultPages/Quiz4/Quiz4britney';
import Quiz4Tiffany from './Quiz/QuizResultPages/Quiz4/Quiz4tiffany';
import Quiz4Homepage from './Quiz/Quiz4HomePage';
import Quiz4Bridgerton from './Quiz/QuizResultPages/Quiz4/Quiz4bridgerton';
import Quiz4Ariel from './Quiz/QuizResultPages/Quiz4/Quiz4Ariel';
import Quiz4Taylor from './Quiz/QuizResultPages/Quiz4/Quiz4Taylor';
import DragonBraid from './Articles/Tutorials/PopCulture/DragonBraid';
import Quiz5 from './Quiz/Quiz5';
import EmailSubscribe2 from './Components/EmailSubscribe2';
import Quiz5Male from './Quiz/QuizResultPages/Quiz5/Quiz5Male';
import Quiz5Female from './Quiz/QuizResultPages/Quiz5/Quiz5Female';


function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    const checkConsentAndLogPageView = () => {
      if (window.CookieConsent && window.CookieConsent.consented) {
        logPageView(location.pathname + location.search); // Log the page view only after consent
      }
    };

    // Set an event listener for consent updates
    window.addEventListener('CookieConsent', checkConsentAndLogPageView);

    // Run the check immediately in case consent was already granted
    checkConsentAndLogPageView();

    // Cleanup event listener
    return () => {
      window.removeEventListener('CookieConsent', checkConsentAndLogPageView);
    };
  }, [location]);
}

function App() {
  usePageTracking();

  return (
    <EmailProvider>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<About />} />
            <Route path="tutorials" element={<NewTutorials />} />
            <Route path="popculture" element={<PopCultureView />} />
            <Route path="timetraveltutorials" element={<VintageVibes />} />
            <Route path="trends" element={<TrendsHome />} />
            <Route path="yardley1965" element={<Yardley65 />} />
            <Route path="twiggy" element={<TwiggyBlog />} />
            <Route path="victoriasecret" element={<VictoriaSecret />} />
            <Route path="sugarplumfairy" element={<SugarPlumBlogPost />} />
            <Route path="sophialoren" element={<SophiaLorenPost />} />
            <Route path="sharontatebridal" element={<SharonTatePost />} />
            <Route path="iconicsharon" element={<SharonIconicPost />} />
            <Route path="patmcgrath" element={<PatMcGrathPost />} />
            <Route path="nomakeupspring" element={<NoMakeUpSpring />} />
            <Route path="tremblant" element={<MontTremblantBlog />} />
            <Route path="lattemakeup" element={<LatteMakeupBlogPost />} />
            <Route path="lanablog" element={<LanaBlog />} />
            <Route path="hotelQ" element={<HotelQ />} />
            <Route path="gracekelly" element={<GraceKelly />} />
            <Route path="epcot" element={<Disney2Post />} />
            <Route path="disneybeachclubresort" element={<Disney1Post />} />
            <Route path="margotbarbie" element={<BarbieBlog />} />
            <Route path="balkeblog" element={<BalkeBlog />} />
            <Route path="2016Makeup" element={<Makeup2016 />} />
            <Route path="westgatesandiego" element={<WestGateHotelBlog />} />
            <Route path="andazmaui" element={<AndazMauiReview />} />
            <Route path="princeofwales" element={<PrinceOfWales />} />
            <Route path="animalpretty" element={<AnimalPretty />} />
            <Route path="halfetireview" element={<HalfetiReview />} />
            <Route path="jickyreview" element={<JickyReview />} />
            <Route path="bonbonreview" element={<BonBonReview />} />
            <Route path="quiz" element={<QuizHomepage />} />
            <Route path="quiz1" element={<Quiz1 />} />
            <Route path="quiz2" element={<Quiz2 />} />
            <Route path="foxpretty" element={<FoxPretty />} />
            <Route path="bunnypretty" element={<BunnyPretty />} />
            <Route path="catpretty" element={<CatPretty />} />
            <Route path="deerpretty" element={<DeerPretty />} />
            <Route path="mystyle" element={<MyStyle />} />
            <Route path="vintagevibesmerch" element={<VintageVibesMerch />} />
            <Route path="cpsummer" element={<LeftOutfit />} />
            <Route path="sleekspring" element={<MiddleOutfit />} />
            <Route path="parisprincess" element={<RightOutfit />} />
            <Route path="vlogs" element={<Vlogs />} />
            <Route path="travel" element={<TravelArticlesHome />} />
            <Route path="diary" element={<DiaryHome />} />
            <Route path="diaryfillers" element={<DiaryPost1Fillers />} />
            <Route path="sitemap" element={<Sitemap />} />
            <Route path="subscribe" element={<EmailSubscribe2 />} />
            <Route path="emailsubscribe" element={<EmailSubscribe />} />
            <Route path="press" element={<MediaKit />} />
            <Route path="privacy" element={<PrivacyNotice />} />
            <Route path="contact" element={<BusinessContact />} />
            <Route path="speed-insights" element={<SpeedInsights />} />
            <Route path="90sVibes" element={<NinetiesStyle />} />
            <Route path="leatherandlace" element={<PinkLeather />} />
            <Route path="retrofloral" element={<RetroFloral />} />
            <Route path="barbieskiing" element={<BarbieSki />} />
            <Route path="blackandleather" element={<BlackAndLeather />} />
            <Route path="cabinfever" element={<CabinFever />} />
            <Route path="manhattancool" element={<ManhattanCool />} />
            <Route path="falllbd" element={<FallLBD />} />
            <Route path="darkflorals" element={<DarkFlorals />} />
            <Route path="summerinspo" element={<SummerInspo />} />
            <Route path="videos" element={<VideoGridPage />} />
            <Route path="newzealand" element={<NewZealand />} />
            <Route path="fable" element={<Fable />} />
            <Route path="summerbeauty" element={<SummerBeauty />} />
            <Route path="bridesmaidboxes" element={<DiaryBridesmaids />} />
            <Route path="latestexplorer" element={<LatestExplorer />} />
            <Route path="perioddrama" element={<PeriodDrama />} />
            <Route path="fairytalewedding" element={<FairytaleWedding />} />
            <Route path="reviews" element={<ReviewArticleListHome />} />
            <Route path="bridal" element={<BridalHome />} />
            <Route path="bridalmakeup" element={<BridalMakeup />} />
            <Route path="bardothairstyles" element={<BardotHairstyles />} />
            <Route path="hotelquintessancesummer" element={<HotelQ2 />} />
            <Route path="quiz3" element={<Quiz3 />} />
            <Route path="bacarra" element={<Bacarra />} />
            <Route path="abril" element={<Abril />} />
            <Route path="percy" element={<Percy />} />
            <Route path="ora" element={<Ora />} />
            <Route path="zara" element={<Zara />} />
            <Route path="elizabeth" element={<Elizabeth />} />
            <Route path="porsha" element={<Porsha />} />
            <Route path="weddingdressguide" element={<WeddingDressGuide />} />
            <Route path="diy-flowers" element={<DIYFlowers />} />
            <Route path="parisianchic" element={<ParisianChic />} />
            <Route path="vaticanslay" element={<VaticanSlay />} />
            <Route path="walkingwaiheke" element={<WalkingWaiheke />} />
            <Route path="princesscoreparis" element={<PrincessCoreParis />} />
            <Route path="polkadot" element={<PolkaDotMoment />} />
            <Route path="trevifountain" element={<ItalianFountain />} />
            <Route path="summerset" element={<SummerSet />} />
            <Route path="houndstooth" element={<HoundstoothSet />} />
            <Route path="metsteps" element={<MetSteps />} />
            <Route path="paris-in-nyc" element={<ParisInNYC />} />
            <Route path="floral-mini" element={<FloralMini />} />
            <Route path="folklore-fairy" element={<FolkloreFairy />} />
            <Route path="hero-section" element={<HeroSection />} />
            <Route path="articles-section" element={<ImageGrid />} />
            <Route path="camera-settings" element={<CameraSettings />} />
            <Route path="emily-in-paris" element={<EmilyInParis />} />
            <Route path="rome" element={<Rome />} />
            <Route path="sorrento" element={<Sorrento1 />} />
            <Route path="hotelquintessance" element={<HotelQ2 />} />
            <Route path="recently-sponsored" element={<PastWorkGallery />} />
            <Route path="francesca-bridgerton" element={<Francesca />} />
            <Route path="fan-art" element={<FanArt />} />
            <Route path="girly-pop-halloween" element={<Halloween />} />
            <Route path="paris-brussels-travel-guide" element={<Brussels />} />
            <Route path="barbie-doll" element={<BarbieDoll />} />
            <Route path="barbie-roundup" element={<BarbieRoundup />} />
            <Route path="quiz-3-home" element={<Quiz3Homepage />} />
            <Route path="quiz-2-home" element={<Quiz2Homepage />} />
            <Route path="articles/rory-gilmore" element={<Rory />} />
            <Route path="articles/wicked" element={<Wicked />} />
            <Route path="/articles/wicked-witch-of-the-west" element={<Wicked2 />} />
            <Route path="/quiz/halloween" element={<Quiz4Homepage />} />

            <Route path="/quiz/halloween/ysl" element={<YSL />} />
            <Route path="/quiz/halloween/tiffany" element={<Quiz4Tiffany />} />
            <Route path="/quiz/halloween/ariel" element={<Quiz4Ariel />} />
            <Route path="/quiz/halloween/barbie" element={<Quiz4Barbie />} />
            <Route path="/quiz/halloween/bridgerton" element={<Quiz4Bridgerton />} />
            <Route path="/quiz/halloween/britney" element={<Quiz4Britney />} />
            <Route path="/quiz/halloween/taylor" element={<Quiz4Taylor />} />
            <Route path="/articles/dragon-braid" element={<DragonBraid />} />
            <Route path="/quiz/male-female-gaze" element={<Quiz5 />} />
            <Route path="/quiz/male" element={<Quiz5Male />} />
            <Route path="/quiz/female" element={<Quiz5Female />} />

            
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
      </div>
    </EmailProvider>
  );
}

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
