import React from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import RGBToHex from '../js/RGBToHex';
import HexToRGB from '../js/HexToRGB';
import NotFound from '../js/NotFound';
// import logo from './logo.svg';

function App() {
  // to change routes on TitleButton.js
  let navigate = useNavigate();

  // RGB to HEX form
  const convertRGB = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    console.log('RGB form submitted and reset');
  }

  const copyToClipBoard = e => {
    // e.preventDefault();
    const convertedValue = e.target.getAttribute("data-converted-value");
    console.log(convertedValue);

    const ukTooltip = e.target.attributes.getNamedItem('uk-tooltip').value;
    console.log(ukTooltip);
  }

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<RGBToHex convertRGB={convertRGB} copyToClipBoard={copyToClipBoard} />}  />
        <Route exact path="/hex-to-rgb" element={<HexToRGB copyToClipBoard={copyToClipBoard} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
