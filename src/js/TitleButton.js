import { useNavigate } from "react-router-dom";

function TitleButton(props) {
  let navigate = useNavigate();

  return (
    <h1 className="uk-margin-medium-bottom">{props.formTitle}
      <button onClick={() => {
                navigate(props.link);
              }}
              className="uk-button uk-button-link"
      >
        <span className="material-icons uk-text-muted">autorenew</span>
      </button>
    </h1>
  )
}

export default TitleButton;
