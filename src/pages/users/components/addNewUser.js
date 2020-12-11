import React from "react";
import '../Style/addNewUser.css'

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      confirmPassword: "",
      errorMessage: null,
      successMessage: null,
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

  // To check if user exists in database [ Here Local storage is acting as database]
  checkExistingUser = () => {
      const { userName } = this.state;
      const ExistingUsers = JSON.parse(localStorage.getItem("users"));
      
      // if no existing user return true
      if(!ExistingUsers){
          return true;
      }

      // if existing users array exists check details
      for(let i=0; i<ExistingUsers.length; i++){
          const user = ExistingUsers[i];
          if(userName === user.userName){
            this.setState({ errorMessage: "User name already exist."}) 
            setTimeout(()=> {
                this.setState({ errorMessage: null})
            },2000)
            return false;
          }
      }
      return true;
  }
  
  // Update user database
  updateUserDB = () => {
    const ExistingUsers = JSON.parse(localStorage.getItem("users"));
    const { firstName, lastName, userName, password } = this.state;
    const userData = { firstName, lastName, userName, password };
    if(ExistingUsers && ExistingUsers instanceof Array){
        ExistingUsers.push(userData);
        localStorage.setItem("users", JSON.stringify(ExistingUsers));
    } else {
        const user = [userData]
        localStorage.setItem("users", JSON.stringify(user));
    }
    this.setState({ successMessage: "User register Successfully"})
    // redirect to login after successful register
    setTimeout(()=> {
        this.setState({ successMessage: null})
        window.location.href = window.location.protocol + "/users"
    },1000)
  }

  registerUser = () => {
    const isFormvalid = this.validation(); // check if form is valid
    const isExistingUser = this.checkExistingUser(); // check if user existing user or not
    
    // if form is valid and username doesn't exist in db register user
    if(isFormvalid && isExistingUser){
        // const { firstName, lastName, userName, password } = this.state;
        this.updateUserDB(); //Update users DB
    }
    
  };

  render() {
    const stateData = this.state;
    return (
      <div className="registration">
        <h5>Add New User</h5>
        {stateData.errorMessage ? (
            <p className="danger text-center">{stateData.errorMessage}</p>
        ):null}
        {stateData.successMessage ? (
            <p className="success text-center">{stateData.successMessage}</p>
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
            Add
          </button>
        </div>
        
      </div>
    );
  }
}

export default AddUser

