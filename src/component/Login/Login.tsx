import React from 'react';
import { Button } from '@material-ui/core';
import './index.scss'

function Login() {
  return (
    <div className="login">
      <Button variant="contained" color="primary" className="login-button">
          Login
      </Button>
    </div>
  );
}

export default Login;
