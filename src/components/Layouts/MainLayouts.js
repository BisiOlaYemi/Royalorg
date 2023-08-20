import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from "./Navbar";

const MainLayout = ({ children }) => {
    return (
      <BrowserRouter> {/* Wrap with BrowserRouter */}
        <div className="flex-col flex">
          <Navbar />
          <div className="flex-1">{children}</div>
        </div>
      </BrowserRouter>
    );
};

export default MainLayout;
