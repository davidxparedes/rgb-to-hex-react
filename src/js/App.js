import React from 'react';
import { Route, Routes } from "react-router-dom";
import RGBToHex from '../js/RGBToHex';
import HexToRGB from '../js/HexToRGB';
import NotFound from '../js/NotFound';

const App = () => (
  <div className="App">
    <Routes>
      <Route exact path="/" element={<RGBToHex />}  />
      <Route path="/hex-to-rgb" element={<HexToRGB />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
)

export default App;
