// import React from 'react';
import TitleButton from '../js/TitleButton';

function RGBToHex(props) {
  // const convertRGB = (e) => {
  //   e.preventDefault();
  //   console.log(e);
  // }

  let RGBformElements = [{
    label: 'Red',
    key: 'red'
  }, {
    label: 'Green',
    key: 'green'
  }, {
    label: 'Blue',
    key: 'blue'
  }
  ]

  return (
    <div className="uk-container uk-flex uk-flex-wrap uk-flex-center uk-position-center">
      <TitleButton formTitle="RGB to Hex" link="hex-to-rgb" />
      <div className="uk-width-1-1 uk-margin-medium-bottom">
        <form onSubmit={props.convertRGB}>
          <fieldset className=" uk-width-2xlarge@m uk-fieldset uk-margin-auto">
            {/*<div className="uk-column-1-1 uk-column-1-3@s">
              <label className="uk-form-label" htmlFor="red">Red</label>
              <input id="red" className="uk-input uk-margin-small-bottom" name="red" type="number" min="0" max="255" maxLength="3" placeholder="255" required />
              <label className="uk-form-label" htmlFor="green">Green</label>
              <input id="green" className="uk-input uk-margin-small-bottom" name="green" type="number" min="0" max="255" maxLength="3" placeholder="255" required />
              <label className="uk-form-label" htmlFor="blue">Blue</label>
              <input id="blue" className="uk-input uk-margin-small-bottom" name="blue" type="number" min="0" max="255" maxLength="3" placeholder="255" required />
            </div>*/}

            <div className="uk-column-1-1 uk-column-1-3@s">
              {RGBformElements.map(formElement => {
                return (
                  <div key={formElement.key}>
                    <label className="uk-form-label" htmlFor={formElement.key}>{formElement.label}</label>
                    <input id={formElement.key} name={formElement.key} className="uk-input uk-margin-small-bottom" type="number" min="0" max="255" maxLength="3" placeholder="255" require="true" />
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
        // onClick={copyToClipBoard}
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
