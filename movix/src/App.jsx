import React, { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
const App = () => {


  return (
    <>
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>hello</div>} />
          <Route path="/playlist" element={<Navbar />} />
        </Routes>
     </BrowserRouter>
     </div>
    </>
  );
};

export default App;
