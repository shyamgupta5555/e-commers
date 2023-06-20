import React, { useState } from "react";
import "./signup.scss";
import LOGO from "../images/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [RePassword, setRePassword] = useState();
  const [err, setErr] = useState();
  const [data, setData] = useState();

  function handel(e) {
    if (password !== RePassword) {
      setData("password not match");
    }
    let obj = { name: name, email: email, password: password };
    axios("http://localhost:4000/register", obj)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        setErr(err.data);
      });
      console.log("err",err)
      console.log("data" , data)
  }

  return (
    <div className="signup-container">
      <div className="logo">
        <Link className="link" to="/">
          <img src={LOGO} alt="" />
        </Link>
      </div>
      <div className="signup">
        <div className="title">
          {" "}
          <span>SignUp</span>{" "}
        </div>
        <div className="details">
          <label for="name" >Enter your Name</label>
          <input id="name" type="text" placeholder="name" value={name} onChange={(e)=>{setName(e.target.value)}} />

          <label for="email">Enter your Email</label>
          <input id="email" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="email" />

          <label for="password">Enter your Password</label>
          <input id="password" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="password" />

          <label for="re">Re-Enter your Password</label>
          <input id="re" type="password" value={RePassword} onChange={(e)=>{setRePassword(e.target.value)}} placeholder="password" />
          <button type="submit" onClick={handel}>
            Continue
          </button>
        </div>
        <div className="desc">
          <span>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </span>

          <span className="span">Already have an account? LogIn</span>
          <button>
            {" "}
            <Link className="link" to="/login">
              LogIn
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
