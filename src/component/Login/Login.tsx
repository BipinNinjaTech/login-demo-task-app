import React from "react";
import { Link } from "@material-ui/core";
import Logo from "../../assets/images/logo.png";
import "./login.scss";
import LoginDetailSlider from "../LoginDetailSlider/LoginDetailSlider";
import LoginWithGoogle from "../LoginWithGoogle/LoginWithGoogle";
import LoginForm from "../LoginForm/LoginForm";

function Login() {
  return (
    <>
      <div className="login-wrapper">
        <div className="login-left">
          <div className="login-left-inner">
            <Link className="logo" href="#">
              <img src={Logo} alt="" />
            </Link>
            <LoginDetailSlider />
          </div>
        </div>
        <div className="login-right">
          <div className="login-right-inner">
            <div className="login-form">
              <h1>Sign In</h1>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
              <LoginWithGoogle />
              <div className="login-or">
                <span>or Sign in with Email</span>
              </div>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
