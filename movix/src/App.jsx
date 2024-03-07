import React, { useEffect, useState } from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import "./output.css";
const App = () => {

 
  return (
    <>
    <div className="w-screen h-screen">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<div className="bg-blue-500">hello</div>} />
            <Route path="/login" element={<LoginComponent />} />
          </Routes>
      </BrowserRouter>
     </div>
    </>
  );
};

export default App;
