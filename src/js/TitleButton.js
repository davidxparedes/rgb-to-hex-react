const CopyToClipboard = props => {
  return (
    <button 
        onClick={props.copyToClipBoard}
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
