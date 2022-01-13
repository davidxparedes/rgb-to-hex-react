import React from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import RGBToHex from '../js/RGBToHex';
import HexToRGB from '../js/HexToRGB';
import NotFound from '../js/NotFound';
// import logo from './logo.svg';

function App() {
  // to change routes on TitleButton.js
  let navigate = useNavigate();

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<RGBToHex />}  />
        <Route exact path="/hex-to-rgb" element={<HexToRGB />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
