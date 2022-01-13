const CopyToClipboard = props => {

  const copyToClipboard = e => {
    // e.preventDefault();
    navigator.clipboard.writeText(props.convertedValue);
    console.log('copy clicked');
  }

  return (
    <button 
        onClick={copyToClipboard}
        id="copyBtn"
        className="material-icons uk-button uk-button-link uk-text-muted"
        data-converted-value = "#ffffff"
        uk-tooltip="copy #ffffff"
      >
        content_copy
    </button>
  )
}

export default CopyToClipboard;
