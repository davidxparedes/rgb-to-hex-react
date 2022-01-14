const Converted = props => {

  const copyToClipboard = e => {
    navigator.clipboard.writeText(props.convertedValue);
    console.log('copy clicked');
  }

  return (
    <>
      <span style={{backgroundColor: `${props.convertedValue}`, border: '1px solid #666'}}
            className="uk-padding-small">
      </span>
      <span className="uk-margin-left uk-margin-right uk-text-large">{props.convertedValue}</span>
      <button 
          onClick={copyToClipboard}
          className="copy-button material-icons uk-button uk-button-link uk-text-muted"
          data-title={`copy ${props.convertedValue}`}
        >
          content_copy
      </button>
    </>
  )
}

export default Converted;
