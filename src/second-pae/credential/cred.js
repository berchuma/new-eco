import { useState } from "react";
import { Link } from "react-router-dom";
import Loginform from "./format";
import "./wbet.css";
const Cred = () => {
  const adiminUser = {
    email: "miki@gmal.com",
    pass: "12345",
  };
  const [user, setuser] = useState({ name: "", email: "" });
  const [error, seterror] = useState("");

  const Login = (details) => {
    console.log(details);
    if (
      details.password === adiminUser.password &&
      details.email === adiminUser.email
    ) {
      console.log("logis");
    } else {
      seterror(`don't match the details`);
    }

    setuser({
      name: details.name,
      email: details.email,
    });
  };
  const Logout = () => {
    console.log("something ");
    setuser({ name: "", email: "", password: "" });
  };
  return (
    <>
      <div className="master">
        <Link to="/" className="go-back">
          Home
        </Link>
      </div>
      <div className="anat">
        {user.email != "" ? (
          <div className="welcome">
            <h1 className="final-word">
              Congratulation: <span className="user-n">{user.name}</span> You sucsusfuly ordered
              our product
            </h1>
            <button className="clicked" onClick={Logout}>goBack</button>
          </div>
        ) : (
          <Loginform Login={Login} error={error} />
        )}
      </div>
    </>
  );
};

export default Cred;
