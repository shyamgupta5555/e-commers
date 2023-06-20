import React from "react";
import "./navbar.scss";
import LOGO from "../../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="right">
        <div className="logo">
          <Link to="/">
            <img src={LOGO} alt="" />
          </Link>
        </div>
        <div className="title">
          <Link to="/" className="link">
            <h3> Van Heusen</h3>
          </Link>{" "}
        </div>
      </div>

      <div className="search">
        <input type="text" placeholder="Search" />
        <button>GO</button>
      </div>
      <div className="left">
        <ul>
          <li>
            {" "}
            <Link className="link" to="login">
              Login
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link className="link" to="signup">
              Signup
            </Link>
          </li>
        </ul>
        <div className="cart-sym">
          <Link to="/cart" className="link">
            <div className="label">4</div>
            <span class="material-symbols-outlined">shopping_cart</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
