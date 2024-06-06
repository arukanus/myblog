import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Header />
    <main className="container mx-auto p-4">
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;

