const RGBToHex = () => (
  <div className="uk-width-1-1 uk-margin-medium-bottom">
    <form>
      <fieldset className="uk-column-1-1 uk-column-1-3@s uk-width-2xlarge@m uk-fieldset uk-margin-auto">
        <label className="uk-form-label" htmlFor="red">Red</label>
        <input id="red" className="uk-input uk-margin-small-bottom" name="red" type="number" min="0" max="255" maxLength="3" placeholder="255" required />
        <label className="uk-form-label" htmlFor="green">Green</label>
        <input id="green" className="uk-input uk-margin-small-bottom" name="green" type="number" min="0" max="255" maxLength="3" placeholder="255" required />
        <label className="uk-form-label" htmlFor="blue">Blue</label>
        <input id="blue" className="uk-input uk-margin-small-bottom" name="blue" type="number" min="0" max="255" maxLength="3" placeholder="255" required />
      </fieldset>
      <input className="uk-button uk-align-center" name="submit" type="submit" value="Submit" />
    </form>
  </div>
);

export default RGBToHex;
