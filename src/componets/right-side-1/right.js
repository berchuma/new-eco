import "./right.css";
import { Link } from "react-router-dom";
const Right = () => {
  return (
    <div className="contener">
      <div className="image-holder">
        <img src="" alt="logo"></img>
      </div>
      <div className="title">The Best Market Place</div>
      <div className="button-holder">
        <Link to="/log">
          <button className="join">Join</button>
        </Link>
        <Link to="log">
          <button className="sign">Sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default Right;
