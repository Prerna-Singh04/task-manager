import React from "react";
// import "../styles/Login.css";
import "../../../scss/login.scss";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: null,
      password: null,
      errorMessage: null,
    };
  }
  handleForm = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  formValidation = () => {
    const { userName, password } = this.state;
    if (userName && password) {
      return true;
    }
    this.setState({ errorMessage: "Please enter all required fields." });
    setTimeout(() => {
      this.setState({ errorMessage: null });
    }, 2000);
  };

  manageSignIn = () => {
    const { userName, password } = this.state;
    let isAuthenticUser = false;
    const isLoginFormValid = this.formValidation(); //true

    if (isLoginFormValid) {
      // get all existing users
      const ExistingUsers = JSON.parse(localStorage.getItem("users"));

      // if any user is not registered then users will not exist in local storage
      if (ExistingUsers && ExistingUsers instanceof Array) {
        for (let i = 0; i < ExistingUsers.length; i++) {
          const user = ExistingUsers[i];
          if (userName === user.userName && password === user.password) {
            localStorage.setItem("logedInUserData", userName);
            isAuthenticUser = true;
            window.location.href = window.location.protocol + "/task";
            break;
          }
        }
      }

      if (!isAuthenticUser || !ExistingUsers) {
        this.setState({ errorMessage: "User doesn't  exist." });
        setTimeout(() => {
          this.setState({ errorMessage: null });
        }, 2000);
      }
    }
  };

  render() {
    const stateData = this.state;
    return (
      // <div className="login_child_first">
      <div className="login">
        <h6>Login</h6>
        {stateData.errorMessage ? (
          <p className="danger">{stateData.errorMessage}</p>
        ) : null}
        {/* <div className="login_child_first_form"> */}
        <div className="login_form">
          <label className="form_label">Username*</label>
          <input
            className="form_input"
            type="text"
            name="userName"
            autoComplete="off"
            value={stateData.Username}
            onChange={this.handleForm}
            required
          />
          <label className="form_label">Password* </label>
          <input
            className="form_input"
            type="password"
            name="password"
            autoComplete="off"
            value={stateData.password}
            onChange={this.handleForm}
            required
          />
          <button
            className="form_submit"
            onClick={this.manageSignIn}
          >
            Sign in
          </button>
          
        </div>
        <p className='signup_redirect'>
            New here ? <a href="/sign-up">SignUp</a>
          </p>
      </div>
    );
  }
}

export default LoginForm;
