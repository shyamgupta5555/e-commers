import React, { useState } from "react";
import "./login.scss";
import LOGO from "../images/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState();
  const [err, setErr] = useState();
  function handelsubmit(e) {
    e.preventDefault();

    console.log(password);
    console.log(email);
    axios
      .post("http://localhost:4000/login", { password: password, email: email })
      .then((res) => {
        setData(res.data.data);

      })
      .catch((error) => {
        setErr(error.response.data
          );
      });
      console.log("err",err)
      console.log("data" , data)

  }

  return (
    <div className="login-container">
      <div className="logo">
        <Link className="link" to="/">
          <img src={LOGO} alt="lo." />
        </Link>
      </div>
      <div className="login">
        <div className="title">
          {" "}
          <span>LogIn</span>{" "}
        </div>
        <div className="details">
          <label for="email">Enter your Email</label>
          <input
            id="email"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label for="password">Enter your Password</label>
          <input
            id="password"
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit" onClick={handelsubmit}>
            Continue
          </button>
        </div>
        <div className="desc">
          <span>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </span>

          <button>
            <Link className="link" to="/signup">
              Craete your account
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
