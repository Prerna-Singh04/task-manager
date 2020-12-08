import React from "react";

class SingnUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      confirmPassword: "",
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
  validation = () => {
    const { firstName, lastName, userName, password , confirmPassword } = this.state;
    console.log("hey", firstName, lastName, userName, password , confirmPassword)
    if(firstName && userName && password && confirmPassword && (password === confirmPassword)){
        return true
    } else if( password !== confirmPassword){
        this.setState({ errorMessage: "password and confirm password are not same."})
    } else {
        this.setState({ errorMessage: "Please enter all required fields."})
    }
    setTimeout(()=> {
        this.setState({ errorMessage: null})
    },2000)
    return false
  }
  registerUser = () => {
    const isFormvalid = this.validation();
    if(isFormvalid){
        const { firstName, lastName, userName, password } = this.state;
        const userData = { firstName, lastName, userName, password };
        console.log("userData to register is ===>", userData);
        // localStorage.removeItem("userDetails")
        localStorage.setItem("userDetails", JSON.stringify(userData));
        console.log(JSON.parse(localStorage.getItem("userDetails")));
    }
    
  };
  render() {
    const stateData = this.state;
    return (
      <div className="registration">
        <h5>Sign Up</h5>
        {stateData.errorMessage ? (
            <p className="danger text-center">{stateData.errorMessage}</p>
        ):null}
        <div className="registration_form">
          <input
            type="text"
            name="firstName"
            className="registration_form_input"
            placeholder="First Name *"
            value={stateData.firstName}
            onChange={this.handleForm}
            autoComplete="off"
          />
          <input
            type="text"
            name="lastName"
            className="registration_form_input"
            placeholder="Last Name (optional) "
            value={stateData.lastName}
            onChange={this.handleForm}
            autoComplete="off"
          />
          <input
            type="text"
            name="userName"
            className="registration_form_input"
            placeholder="User Name *"
            value={stateData.userName}
            onChange={this.handleForm}
            autoComplete="off"
          />
          <input
            type="password"
            name="password"
            className="registration_form_input"
            placeholder="Password *"
            value={stateData.password}
            onChange={this.handleForm}
            autoComplete="off"
          />
          <input
            type="password"
            name="confirmPassword"
            className="registration_form_input"
            placeholder="Confirm Password *"
            onChange={this.handleForm}
          />
          <button
            className="registration_form_submit"
            onClick={this.registerUser}
          >
            Submit
          </button>
        </div>
        <p className="info-text">
          Already have an account ? <a href="/">Login</a>
        </p>
      </div>
    );
  }
}
export default SingnUpForm;
