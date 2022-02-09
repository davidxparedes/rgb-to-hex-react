import React, { useState } from 'react';
import TitleButton from '../js/TitleButton';
import Converted from '../js/Converted';

// function RGBToHex(props) {
const RGBToHex = props => {
  const [red, setRed] = useState('');
  const [green, setGreen] = useState('');
  const [blue, setBlue] = useState('');
  const [convertedValue, setConvertedValue] = useState('#ffffff');

  let RGBformElements = [{
    label: 'Red',
    value: red,
    onChange: setRed
  }, {
    label: 'Green',
    value: green,
    onChange: setGreen
  }, {
    label: 'Blue',
    value: blue,
    onChange: setBlue
  }]

  const componentToHex = (c) => {
    let hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(parseInt(r))
               + componentToHex(parseInt(g))
               + componentToHex(parseInt(b));
  }

  // RGB to HEX form submit
  const onSubmitRGB = (e) => {
    e.preventDefault();

    let converted = rgbToHex(red, green, blue);
    setConvertedValue(converted);
  }

  // {React.Children.toArray(myList.map(item => <div>Hello</div>))}

  return (
    <div className="uk-container uk-flex uk-flex-wrap uk-flex-center uk-position-center">
      <TitleButton formTitle="RGB to Hex" link="/rgb-to-hex-react/hex-to-rgb" />
      <div className="uk-width-1-1 uk-margin-medium-bottom">
        <form onSubmit={onSubmitRGB}>
          <fieldset className=" uk-width-2xlarge@m uk-fieldset uk-margin-auto">
            <div className="uk-column-1-1 uk-column-1-3@s">
              {React.Children.toArray(RGBformElements.map(formElement => {
                return (
                  <div>
                    <label className="uk-form-label" htmlFor={formElement.label}>{formElement.label}</label>
                    <input id={formElement.label}
                           name={formElement.label}
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
              }))}
            </div>
          </fieldset>
          <input className="uk-button uk-align-center" name="submit" type="submit" value="Submit" />
        </form>
      </div>
      <Converted convertedValue={convertedValue} />
    </div>
  )
}

export default RGBToHex;
