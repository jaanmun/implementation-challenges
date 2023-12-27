import React from 'react';
import Header from './Header/Header';

const Layout = ({ children }) => {
  return (
    <div id="layout">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
