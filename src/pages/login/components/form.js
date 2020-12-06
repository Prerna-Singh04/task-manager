import React from "react";
import "../styles/Login.css";

const LoginForm = () => {
  return (
    <div className="login_child_first">
      <h6>Login</h6>
      <form className="login_child_first_form">
        <label>Username or email address</label>
        <input type="text" name="Username" autoComplete="off" />
        <label>
          Password <span className='login_child_first_form_span'>Forgot password?</span>
        </label>
        <input type="password" name="password" autoComplete="off" />
        <input
          type="submit"
          value="Sign in"
          className="login_child_first_form_submit"
        />
      </form>
    </div>
  );
};

export default LoginForm;