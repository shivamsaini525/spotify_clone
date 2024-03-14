import React, { useEffect, useState } from 'react';

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import "./output.css";
import SignupComponent from './routes/SignupComponent';
import HomeComponent from './routes/HomeComponent';
import { useCookies } from 'react-cookie';
import LogedinHome from './routes/LogedinHome';
import UploadSong from './routes/UploadSong';

const App = () => {

  const [cookie,setCokkie]=useCookies("token");
  console.log(cookie.token);

 
  return (
    <>
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
             
          {
            cookie.token ?(
          
            
          <Routes>
          
            <Route path="/home" element={<LogedinHome />} />
            <Route path="/uploadsong" element={<UploadSong />} />
            <Route path="*" element={<Navigate to="/home" />} />

            
          </Routes>):(
            <Routes>
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/home" element={<HomeComponent />} />
            <Route path="/signup" element={<SignupComponent />} />
            <Route path="*" element={<Navigate to="/login" />} />
            </Routes>)
          }
      </BrowserRouter>
     </div>
    </>
  );
};

export default App;
