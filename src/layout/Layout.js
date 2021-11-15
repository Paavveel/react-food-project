import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Layout() {
  return (
    <>
      <Header />
      <main className='container content'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
