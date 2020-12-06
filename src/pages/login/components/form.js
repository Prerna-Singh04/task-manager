import React from "react";
import "../styles/Login.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: null,
      password: null,
    };
  }
  handleForm = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  manageSignIn = () => {
    const { Username, password } = this.state;
    const userLoginData = { Username, password };
    console.log("userData to register is ===>", userLoginData);
    let localData = JSON.parse(localStorage.getItem("userDetails"));
    if (localData.userName === Username && localData.password === password) {
      console.log("Data Matched...100%");
    }else{
      console.log("Sorry Cann't login data didn't matched .");
    }
  };
  render() {
    const stateData = this.state;
    return (
      <div className="login_child_first">
        <h6>Login</h6>
        <div className="login_child_first_form">
          <label>Username or email address</label>
          <input
            type="text"
            name="Username"
            autoComplete="off"
            value={stateData.Username}
            onChange={this.handleForm}
          />
          <label>Password </label>
          <input
            type="password"
            name="password"
            autoComplete="off"
            value={stateData.password}
            onChange={this.handleForm}
          />
          <button
            className="login_child_first_form_submit"
            onClick={this.manageSignIn}
          >
            Sign in
          </button>
          <p>
            New here ?<a href="/sign-up">SignUp</a>
          </p>
        </div>
      </div>
    );
  }
}

export default LoginForm;
