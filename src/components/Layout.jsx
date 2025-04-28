import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';



const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavFooter = ['/login', '/signup'].includes(location.pathname);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {!hideNavFooter && <Navbar />}
      <main className={hideNavFooter ? '' : 'pt-20 flex-grow'}>
        {children}
      </main>
      {!hideNavFooter && <Footer />}
    </div>
  );
};

export default Layout;
