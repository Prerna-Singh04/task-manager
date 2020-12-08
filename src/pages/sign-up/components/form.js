import React from "react";

class SingnUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      userName: null,
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

  registerUser = () => {
    const { firstName, lastName, userName, password } = this.state;

    const userData = { firstName, lastName, userName, password };
    console.log("userData to register is ===>", userData);
    // localStorage.removeItem("userDetails")
    localStorage.setItem("userDetails", JSON.stringify(userData));
    console.log(JSON.parse(localStorage.getItem("userDetails")));
  };
  render() {
    const stateData = this.state;
    return (
      <div className="registration">
        <h5>Sign Up</h5>
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
        <p>
          Already have an account ? <a href="/">Login</a>
        </p>
      </div>
    );
  }
}
export default SingnUpForm;
