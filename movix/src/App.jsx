import React, { useEffect, useState } from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import "./output.css";
import SignupComponent from './routes/SignupComponent';
import HomeComponent from './routes/HomeComponent';
const App = () => {

 
  return (
    <>
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/signup" element={<SignupComponent />} />
          </Routes>
      </BrowserRouter>
     </div>
    </>
  );
};

export default App;
