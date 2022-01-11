import React from 'react';
import { useNavigate } from "react-router-dom";
// import TitleButton from '../js/TitleButton';
// import HexToRGB from '../js/HexToRGB';
import RGBToHex from '../js/RGBToHex';
// import logo from './logo.svg';
// import '.css/App.css';

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
      <RGBToHex convertRGB={convertRGB} />
    {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
    </div>
  );
}

export default App;
