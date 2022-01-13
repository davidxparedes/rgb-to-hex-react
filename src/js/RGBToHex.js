import { useState } from 'react';
import TitleButton from '../js/TitleButton';

// function RGBToHex(props) {
const RGBToHex = props => {
  const [red, setRed] = useState('');
  const [green, setGreen] = useState('');
  const [blue, setBlue] = useState('');

  let RGBformElements = [{
    label: 'Red',
    key: 'red',
    value: red,
    onChange: setRed
  }, {
    label: 'Green',
    key: 'green',
    value: green,
    onChange: setGreen
  }, {
    label: 'Blue',
    key: 'blue',
    value: blue,
    onChange: setBlue
  }]

  const componentToHex = (c) => {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(parseInt(r)) 
               + componentToHex(parseInt(g)) 
               + componentToHex(parseInt(b));
  }

  // RGB to HEX form
  const onSubmitRGB = (e) => {
    e.preventDefault();
    
    let convertedValue = rgbToHex(red, green, blue);
    console.log('rgb',red,green,blue);
    // console.log(e);
    console.log(convertedValue);
    // e.currentTarget.reset(); set state to blank to reset
  }

  return (
    <div className="uk-container uk-flex uk-flex-wrap uk-flex-center uk-position-center">
      <TitleButton formTitle="RGB to Hex" link="hex-to-rgb" />
      <div className="uk-width-1-1 uk-margin-medium-bottom">
        <form onSubmit={onSubmitRGB}>
          <fieldset className=" uk-width-2xlarge@m uk-fieldset uk-margin-auto">
            <div className="uk-column-1-1 uk-column-1-3@s">
              {RGBformElements.map(formElement => {
                return (
                  <div key={formElement.key}>
                    <label className="uk-form-label" htmlFor={formElement.key}>{formElement.label}</label>
                    <input id={formElement.key} 
                           name={formElement.key} 
                           className="uk-input uk-margin-small-bottom" 
                           type="number" 
                           min="0" 
                           max="255" 
                           maxLength="3" 
                           placeholder="255" 
                           require="true"
                           value={formElement.value}
                           onChange={(e)=> {formElement.onChange(e.target.value)}}
                    />
                  </div>
                )
              })}
            </div>
          </fieldset>
          <input className="uk-button uk-align-center" name="submit" type="submit" value="Submit" />
        </form>
      </div>
      <span className="swatch uk-padding-small"></span>
      <span id="convertedValue" className="uk-margin-left uk-margin-right uk-text-large">#ffffff</span>
      <button 
        onClick={props.copyToClipBoard}
        id="copyBtn"
        className="material-icons uk-button uk-button-link uk-text-muted"
        data-converted-value = "#ffffff"
        uk-tooltip="copy #ffffff"
      >
        content_copy
      </button>
    </div>
  )
}

export default RGBToHex;
