import TitleButton from '../js/TitleButton';

const HexToRGB = () => (
  <div className="HexToRGB">
    <div className="uk-container uk-flex uk-flex-wrap uk-flex-center uk-position-center">
      <TitleButton formTitle="Hex to RGB" link="/" />
      <div className="uk-width-1-1 uk-margin-medium-bottom">
        <form>
          <fieldset className="uk-fieldset uk-margin-auto uk-flex uk-flex-column uk-width-1-2 uk-width-1-3@s">
            <label className="uk-form-label" htmlFor="hex">Hex</label>
            <input id="hex" className="uk-input uk-margin-small-bottom" name="red" type="input" maxLength="6" placeholder="ffffff" required />
          </fieldset>
          <input className="uk-button uk-align-center" name="submit" type="submit" value="Submit" />
        </form>
      </div>
      <span className="swatch uk-padding-small"></span>
      <span id="convertedValue" className="uk-margin-left uk-margin-right uk-text-large">rgb(255,255,255)</span>
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
  </div>
);

export default HexToRGB;
