import React from "react";

import TextInput from "../../common/TextInput";
import Button from "../../common/Button";
import { LOGIN_TITLE } from "../../utils/constants";
import { ReactComponent as Logo } from '../../assets/google.svg';

const Login = () => {
  return (
    <div className="container">
      <div className="login-container">
        <div className="loginform">
          <Logo className ="login-logo" />
          <span className ="login-header">{LOGIN_TITLE}</span>
          <TextInput placeholer="Email"/>
          <TextInput placeholer="Password" />
          <Button text="Sign In"/>
        </div>
      </div>
    </div>
  );
};

export default Login;
