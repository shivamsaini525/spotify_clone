import React, { useEffect, useState } from 'react';

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import "./output.css";
import SignupComponent from './routes/SignupComponent';
import HomeComponent from './routes/HomeComponent';
import { useCookies } from 'react-cookie';
import LogedinHome from './routes/LogedinHome';
import UploadSong from './routes/UploadSong';
import MyMusic from './routes/MyMusic';
import songContext from './contexts/songContext';


const App = () => {
  const [currentSong, setCurrentSong]=useState(null);
  const [soundPlayed, setSoundPlayed]=useState(null);
  const [isPaused, setIsPaused]=useState(null);
  const [cookie,setCokkie]=useCookies("token");
  console.log(cookie.token);

 
  return (
    <>
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
             
        { cookie.token ?(
          
          <songContext.Provider value={{currentSong, setCurrentSong, soundPlayed, setSoundPlayed, isPaused, setIsPaused}}>  
            <Routes>
            
          
              <Route path="/home" element={<LogedinHome />} />
              <Route path="/uploadsong" element={<UploadSong />} />
              <Route path="/myMusic" element={<MyMusic />} />

              <Route path="*" element={<Navigate to="/home" />} />
           
            
            </Routes>
          </songContext.Provider>):(
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
