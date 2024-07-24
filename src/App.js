import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Layout from './Layout';
import { initGA, logPageView } from './analytics';
import { SpeedInsights } from "@vercel/speed-insights/react";
import './App.css'; // Ensure you have imported the App.css file

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
import ReviewHomePage from './ReviewsPage/ReviewArticlesHome';
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
import DiarySlider from './DiaryHome/diaryhome';
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

function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-RT6GR7JXYG', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
}

function App() {
  usePageTracking();

  return (
    <div className="app-container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jackie Wyers - Beauty Tutorials and Reviews</title>
        <meta name="description" content="Explore beauty tutorials, product reviews, and the latest trends with Jackie Wyers." />
        <link rel="canonical" href="http://jackiewyers.beauty" />
      </Helmet>
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
          <Route path="diary" element={<DiarySlider />} />
          <Route path="diaryfillers" element={<DiaryPost1Fillers />} />
          <Route path="sitemap" element={<Sitemap />} />
          <Route path="subscribe" element={<EmailSubscribe />} />
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
          <Route path="fable" element={<Fable/>} />
          <Route path="summerbeauty" element={<SummerBeauty />} />
          <Route path="bridesmaidboxes" element={<DiaryBridesmaids />} />
          <Route path="latestexplorer" element={<LatestExplorer />} />
          <Route path="perioddrama" element={<PeriodDrama />} />
          <Route path="fairytalewedding" element={<FairytaleWedding />} />



          <Route path="reviews" element={<ReviewArticleListHome />} />

          


          <Route path="bridalmakeup" element={<BridalMakeup />} />


          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </div>
   
  );
}

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
