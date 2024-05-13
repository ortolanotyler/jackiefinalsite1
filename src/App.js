import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './Navigation/AppBar/ResponsiveAppBar';
import Footer from './Navigation/Footer/Footer';
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
import UlikeReview from './Articles/Reviews/UlikeReview';
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

function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      
      <Routes>

      {/* NavBar Routes  */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/tutorials" element={<NewTutorials/>} />

      {/* /Tutorial Genre Home Page Routes  */}
      <Route path="/popculture" element={<PopCultureView/>} />
      <Route path="/timetraveltutorials" element={<VintageVibes/>} />
      <Route path="/trends" element={<TrendsHome/>} />
    
            {/* /Article  Routes  */}

        <Route path="/yardley1965" element={<Yardley65/>} />
        <Route path="/victoriasecret" element={<VictoriaSecret/>} />
        <Route path="/sugarplumfairy" element={<SugarPlumBlogPost/>} />
        <Route path="/sophialoren" element={<SophiaLorenPost/>} />
        <Route path="/sharontatebridal" element={<SharonTatePost/>} />
        <Route path="/iconicsharon" element={<SharonIconicPost/>} />
        <Route path="/patmcgrath" element={<PatMcGrathPost/>} />
        <Route path="/nomakeupspring" element={<NoMakeUpSpring/>} />
        <Route path="/tremblant" element={<MontTremblantBlog/>} />
        <Route path="/lattemakeup" element={<LatteMakeupBlogPost/>} />
        <Route path="/lanablog" element={<LanaBlog/>} />
        <Route path="/hotelQ" element={<HotelQ/>} />
        <Route path="/gracekelly" element={<GraceKelly/>} />
        <Route path="/disneybeachclubresort" element={<Disney1Post/>} />
        <Route path="/epcot" element={<Disney2Post/>} />
        <Route path="/margotbarbie" element={<BarbieBlog/>} />
        <Route path="/balkeblog" element={<BalkeBlog/>} />

  {/*  Review  */}
  <Route path="/painlessIPL" element={<UlikeReview/>} />
        <Route path="/halfeti" element={<HalfetiReview/>} />
        <Route path="/guerlain" element={<JickyReview/>} />
        <Route path="/bonbon" element={<BonBonReview/>} />
        <Route path="/reviews" element={<ReviewHomePage/>} />

        {/* Quiz  */}
    
        <Route path="/quiz" element={<QuizHomepage/>} />
      <Route path="/quiz1" element={<Quiz1/>} />


          
               {/*  Shop  */}
               <Route path="/mystyle" element={<MyStyle/>} />
               <Route path="/vintagevibesmerch" element={<VintageVibesMerch/>} />

          {/*  Vlog  */}
          <Route path="/vlogs" element={<Vlogs/>} />




          {/*  Travel  */}
          <Route path="/travel" element={<TravelArticlesHome/>} />

     


  



    {/* Footer  */}
    <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/emailsubscribe" element={<EmailSubscribe/>} />
        <Route path="/mediakit" element={<MediaKit/>} />

      






        {/* 404 Route */}
        <Route path="*" element={<h1>404 Not Found</h1>} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
