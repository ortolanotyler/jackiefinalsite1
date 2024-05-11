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

function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/emailsubscribe" element={<EmailSubscribe/>} />
        <Route path="/mediakit" element={<MediaKit/>} />

        {/* Article Routes */}
        <Route path="/yardley1965" element={<Yardley65/>} />
        <Route path="/VSfashionshow2014" element={<VictoriaSecret/>} />
        <Route path="/sugarplumfairy" element={<SugarPlumBlogPost/>} />
        <Route path="/sophialoren" element={<SophiaLorenPost/>} />
        <Route path="/sharontatebridal" element={<SharonTatePost/>} />
        <Route path="/sharontateiconic" element={<SharonIconicPost/>} />
        <Route path="/patmcgrath" element={<PatMcGrathPost/>} />
        <Route path="/nomakeupspring" element={<NoMakeUpSpring/>} />
        <Route path="/tremblant" element={<MontTremblantBlog/>} />




        {/* 404 Route */}
        <Route path="*" element={<h1>404 Not Found</h1>} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
