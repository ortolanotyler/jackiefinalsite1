import React from 'react';
import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from './Navigation/AppBar/ResponsiveAppBar';
import Footer from './Navigation/Footer/Footer';
import useScrollToTop from './hooks/useScrollToTop';

const Layout = () => {
  useScrollToTop(); 

  return (
    <>
      <ResponsiveAppBar />

      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
