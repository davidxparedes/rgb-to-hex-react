import React from 'react';
import { useNavigate } from "react-router-dom";
import TitleButton from '../js/TitleButton';
// import HexToRGB from '../js/HexToRGB';
// import RGBToHex from '../js/RGBToHex';
// import logo from './logo.svg';
// import '.css/App.css';

function App() {
  let navigate = useNavigate();
  // const submitForm = (e) => {
  //   e.preventDefault();

  //   console.log('a form was submitted');
  // }


  const copyToClipBoard = e => {
    // e.preventDefault();
    const convertedValue = e.target.getAttribute("data-converted-value");
    console.log(convertedValue);

    const ukTooltip = e.target.attributes.getNamedItem('uk-tooltip').value;
    console.log(ukTooltip);
  }

  return (
    <div className="App">
      <div className="uk-container uk-flex uk-flex-wrap uk-flex-center uk-position-center">
        <TitleButton formTitle="RGB to Hex" link="hex-to-rgb" />
        <div className="uk-width-1-1 uk-margin-medium-bottom">
          <form>
            <fieldset className=" uk-width-2xlarge@m uk-fieldset uk-margin-auto">
              <div class="uk-column-1-1 uk-column-1-3@s">
                <label className="uk-form-label" htmlFor="red">Red</label>
                <input id="red" className="uk-input uk-margin-small-bottom" name="red" type="number" min="0" max="255" maxLength="3" placeholder="255" required />
                <label className="uk-form-label" htmlFor="green">Green</label>
                <input id="green" className="uk-input uk-margin-small-bottom" name="green" type="number" min="0" max="255" maxLength="3" placeholder="255" required />
                <label className="uk-form-label" htmlFor="blue">Blue</label>
                <input id="blue" className="uk-input uk-margin-small-bottom" name="blue" type="number" min="0" max="255" maxLength="3" placeholder="255" required />
              </div>
            </fieldset>
            <input className="uk-button uk-align-center" name="submit" type="submit" value="Submit" />
          </form>
        </div>
        <span className="swatch uk-padding-small"></span>
        <span id="convertedValue" className="uk-margin-left uk-margin-right uk-text-large">#ffffff</span>
        <button 
          onClick={copyToClipBoard} 
          id="copyBtn"
          className="material-icons uk-button uk-button-link uk-text-muted"
          data-converted-value = "#ffffff"
          uk-tooltip="copy #ffffff"
        >
          content_copy
        </button>
      </div>

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
