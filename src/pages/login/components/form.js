import React from "react";
import "../styles/Login.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      password: "",
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

  validation = ()=>{
    const { Username, password } = this.state;
    const userLoginData = { Username, password };
    console.log("userData to register is ===>", userLoginData);
    let localData = JSON.parse(localStorage.getItem("userDetails"));
    if (localData.userName === Username && localData.password === password) {
      // console.log("Data Matched...100%");
      return true
    }else if(localData.userName !== Username && localData.password !== password) {
      this.setState({
        errorMessage: "Please enter the valid UserName and Password."
      })
    }
    else if(localData.userName !== Username){
      this.setState({
        errorMessage: "Please enter the valid UserName."
      })
    }else if(localData.password !== password){
      this.setState({
        errorMessage:"Please enter the valid password."
      })
    }else{
      return false;
    }
    setTimeout(()=>{
      this.setState({
        errorMessage:null
      })
    },2000)
  }
 
  manageSignIn = () => {
          const isLoginvalid = this.validation();
      if(isLoginvalid){
        window.location.href = window.location.protocol + '/task'
      }
    }
  

  render(){
    const stateData = this.state;
    return (
      <div className="login_child_first">
        <h6>Login</h6>
        {stateData.errorMessage?(<p className="errorMessage">{stateData.errorMessage}  </p>):null}
        <div className="login_child_first_form">
          <label>Username </label>
          <input
            type="text"
            name="Username"
            autoComplete="off"
            value={stateData.Username}
            onChange={this.handleForm}
            required
          />
          <label>Password </label>
          <input
            type="password"
            name="password"
            autoComplete="off"
            value={stateData.password}
            onChange={this.handleForm}
            required
          />
          <button
            className="login_child_first_form_submit"
            onClick={this.manageSignIn}
          >
            Sign in
          </button>
          <p>
            New here ?  <a href="/sign-up">SignUp</a>
          </p>
        </div>
      </div>
    );
  }
}
export default LoginForm;
