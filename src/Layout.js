import React from 'react';
import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from './Navigation/AppBar/ResponsiveAppBar';
import Footer from './Navigation/Footer/Footer';
import useScrollToTop from './hooks/useScrollToTop';
import RotatingText from './Navigation/AppBar/RotatingText';

const Layout = () => {
  useScrollToTop(); // Call the ok here

  return (
    <>
      <ResponsiveAppBar />
      <RotatingText />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
