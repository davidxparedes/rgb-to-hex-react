import React from 'react';
import { Route, Routes } from "react-router-dom";
import RGBToHex from '../js/RGBToHex';
import HexToRGB from '../js/HexToRGB';
import NotFound from '../js/NotFound';

const App = () => (
  <div className="App">
    <Routes>
      {/*<Route exact path="/" element={<RGBToHex />}  />*/}
      <Route path="/rgb-to-hex-react/" element={<RGBToHex />} />
      <Route path="/rgb-to-hex-react/hex-to-rgb" element={<HexToRGB />} />
      <Route path="/rgb-to-hex-react/*" element={<NotFound />} />
    </Routes>
  </div>
)

export default App;
