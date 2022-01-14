import { useState } from 'react';
import TitleButton from '../js/TitleButton';
import CopyToClipboard from '../js/CopyToClipboard';

const HexToRGB = props => {
  const [hex, setHex] = useState('');
  const [convertedValue, setConvertedValue] = useState('rgb(255,255,255)');

  function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });

    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  // HEX to RGB form submit
  const onSubmitHex = (e) => {
    e.preventDefault();

    let converted = `${hexToRgb(hex).r}, ${hexToRgb(hex).g}, ${hexToRgb(hex).b}`;
    setConvertedValue(`rgb(${converted})`);
  }

  return (
    <div className="HexToRGB">
      <div className="uk-container uk-flex uk-flex-wrap uk-flex-center uk-position-center">
        <TitleButton formTitle="Hex to RGB" link="/" />
        <div className="uk-width-1-1 uk-margin-medium-bottom">
          <form onSubmit={onSubmitHex}>
            <fieldset className="uk-fieldset uk-margin-auto uk-flex uk-flex-column uk-width-1-2 uk-width-1-3@s">
              <label className="uk-form-label" htmlFor="hex">Hex</label>
              <input id="hex" 
                     className="uk-input uk-margin-small-bottom" 
                     name="red" 
                     type="input" 
                     minLength="3"
                     maxLength="6" 
                     placeholder="ffffff" 
                     required={true}
                     value={hex}
                     onChange={(e)=> {setHex(e.target.value)}}
              />
            </fieldset>
            <input className="uk-button uk-align-center" name="submit" type="submit" value="Submit" />
          </form>
        </div>
        <span className="swatch uk-padding-small"></span>
        <span id="convertedValue" className="uk-margin-left uk-margin-right uk-text-large">{convertedValue}</span>
        <CopyToClipboard convertedValue={convertedValue} />
      </div>
    </div>
  )
}

export default HexToRGB;
