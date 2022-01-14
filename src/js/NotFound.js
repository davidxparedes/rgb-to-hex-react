import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="App">
      <div className="uk-container uk-flex uk-flex-column uk-flex-center uk-text-center uk-position-center">
        <h1>ERROR! Page not found!</h1>
        <Link to="/rgb-to-hex-react">Home</Link>
      </div>
    </div>
  )
}

export default NotFound;
